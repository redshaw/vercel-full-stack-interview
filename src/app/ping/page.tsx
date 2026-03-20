'use client';
export default function PingPage() {

  const handleCreateTrie = async () => {
    const response = await fetch('/api/autocomplete');
    const data = await response.json();
    console.log("DATA: ", data);
  }

  const handleSumbit = async(e: React.FormEvent<HTMLFormElement>) =>{
      console.log("SUBMITTING");
      e.preventDefault();
      // fetch from autocomplete endpoint
      const response = await fetch('/api/autocomplete', {
        method: 'POST',
        body: JSON.stringify({ query: (e.target as HTMLFormElement).query.value.toLowerCase() }),
    });
    const words = await response.json();
    console.log("DATA: ", words);
  }
  
  return (
    <main>
      <div>
        <form onSubmit={(e) => handleSumbit(e)}>
          <input type="text" name="query" placeholder="Enter a word" />
          <button type="submit">Search</button>
        </form>
      </div>
    </main>
  );
}
