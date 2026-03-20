export const dynamic = 'force-static'
 
import { promises as fs } from 'fs';

export async function GET() {
  console.log("GETTING FILE");
  const file = await fs.readFile(process.cwd() + '/public/wordlist.txt', 'utf8');


  // parsing the file into an array of words
  const words = file.split('\n');
  console.log("WORDS: ", words[0], words[1], words[2]);
  console.log("WORDS LENGTH: ", words.length);
  // build the trie
  const trie: TrieNode = {};

  // parse the text file into a trie
  return Response.json({ file })
}
