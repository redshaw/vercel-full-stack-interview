import { promises as fs } from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const sourcePath = path.join(projectRoot, 'public', 'wordlist.txt');
const outputPath = path.join(projectRoot, 'public', 'autocomplete-trie.json');

function createNode() {
  return {
    c: {},
    w: [],
  };
}

function insertWord(root, rawWord) {
  const word = rawWord.trim();
  if (!word) return;

  let node = root;
  const normalized = word.toLowerCase();

  for (const char of normalized) {
    if (!node.c[char]) {
      node.c[char] = createNode();
    }
    node = node.c[char];
  }

  node.w.push(word);
}

async function build() {
  const source = await fs.readFile(sourcePath, 'utf8');
  const words = source.split(/\r?\n/);
  const root = createNode();

  for (const word of words) {
    insertWord(root, word);
  }

  await fs.writeFile(outputPath, JSON.stringify(root));
}

build().catch((error) => {
  console.error('Failed to build autocomplete trie JSON.', error);
  process.exitCode = 1;
});
