import { promises as fs } from 'fs';
import path from 'path';

type SerializedTrieNode = {
  c: Record<string, SerializedTrieNode>;
  w: string[];
};

let triePromise: Promise<SerializedTrieNode> | null = null;

async function loadPrebuiltTrie(): Promise<SerializedTrieNode> {
  const triePath = path.join(process.cwd(), 'public', 'autocomplete-trie.json');
  const file = await fs.readFile(triePath, 'utf8');
  return JSON.parse(file) as SerializedTrieNode;
}

export async function autocompleteFromPrebuiltTrie(
  prefix: string,
  limit = 25
): Promise<string[]> {
  const normalizedPrefix = prefix.trim().toLowerCase();
  if (!normalizedPrefix) return [];

  if (!triePromise) {
    triePromise = loadPrebuiltTrie();
  }

  let node = await triePromise;
  for (const char of normalizedPrefix) {
    node = node.c[char];
    if (!node) return [];
  }

  const results: string[] = [];
  const stack: SerializedTrieNode[] = [node];

  while (stack.length > 0 && results.length < limit) {
    const current = stack.pop();
    if (!current) break;

    for (const word of current.w) {
      results.push(word);
      if (results.length >= limit) return results;
    }

    const childKeys = Object.keys(current.c).sort().reverse();
    for (const key of childKeys) {
      stack.push(current.c[key]);
    }
  }

  return results;
}
