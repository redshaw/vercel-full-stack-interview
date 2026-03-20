'use client';

import { useEffect, useState } from "react";

export default function PingPage() {

  // const handleCreateTrie = async () => {
  //   const response = await fetch('/api/autocomplete');
  //   const data = await response.json();
  //   console.log("DATA: ", data);
  // }

  const handleSumbit = async(e: React.FormEvent<HTMLFormElement>) =>{
      console.log("SUBMITTING");
      e.preventDefault();
      // fetch from autocomplete endpoint
      const response = await fetch('/api/autocomplete', {
        method: 'POST',
        body: JSON.stringify({ query: (e.target as HTMLFormElement).query.value.toLowerCase() }),
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
        <form onSubmit={(e) => handleSumbit(e)}>
          <input type="text" name="query" placeholder="Enter a word" />
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
