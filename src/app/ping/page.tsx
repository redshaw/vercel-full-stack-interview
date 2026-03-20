'use client';

import { useEffect, useState } from "react";

export default function PingPage() {

  // const handleCreateTrie = async () => {
  //   const response = await fetch('/api/autocomplete');
  //   const data = await response.json();
  //   console.log("DATA: ", data);
  // }

  const sendQuery = async(query: string) =>{
      console.log("SUBMITTING");
      // fetch from autocomplete endpoint
      const response = await fetch('/api/autocomplete', {
        method: 'POST',
        body: JSON.stringify({ query: query.toLowerCase() }),
    });
    const data = await response.json();
    setWords(data.words);
    console.log("DATA: ", words);
  }
  
  const [words, setWords] = useState<string[]>([]);
  
  useEffect(() => {
    console.log("WORDS: ", words);
    setWords(words);
  }, [words]);

  return (
    <main>
      <div>
        <form>
          <input onChange={(e) => sendQuery(e.target.value.toLowerCase())} type="text" name="query" placeholder="Enter a word" />
          {words.length > 0 && (
            <ul className="flex flex-col border-2 border-gray-300 rounded-md p-4">
              {words.map((word) => (
                <li onClick={() => console.log("WORD: ", word)} className="flex py-4 border-b border-gray-300" key={word}>{word}</li>
              ))}
            </ul>
          )}
          <button type="submit">Search</button>
        </form>
      </div>
    </main>
  );
}



