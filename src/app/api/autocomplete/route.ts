export const dynamic = 'force-static'
 
import { promises as fs } from 'fs';

export async function POST(request: Request) {
  console.log("POST REQUEST: ", request.body);
  // parse the body of the request, key is query 
  const body = await request.json();
  const query = body.query;
  console.log("QUERY: ", query);
  if (!query) {
    return Response.json({ query, words: [] });
  }

  const file = await fs.readFile(process.cwd() + '/public/wordlist.txt', 'utf8');
  // parsing the file into an array of words
  const words = file.split('\n');
  
    // if substring of the query is the starting point in the word, add word to list 
    const matches = words.filter((word) => word.toLowerCase().startsWith(query));


    return Response.json({ query, words: [matches] });

  // build the trie
  // const trie: TrieNode = {};

  
  // initialize the top of the trie 
  // for(const word of words) {
  //   let node: TrieNode = trie;
  //   for(const char of word) {
  //     if(!node[char]) {
  //       node[char] = [];
  //     }
  //   }
  // }


  // parse the text file into a trie
  // return Response.json({"message": "Hello World"})
}
