'use client';
export default function PingPage() {

  const handleCreateTrie = async () => {
    const response = await fetch('/api/autocomplete');
    const data = await response.json();
    console.log("DATA: ", data);
  }
  
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-100 via-cyan-100 to-blue-100 p-6 dark:from-emerald-950 dark:via-cyan-950 dark:to-blue-950">
      <div className="w-full max-w-md rounded-2xl border border-emerald-200/70 bg-white/80 p-8 text-center shadow-xl backdrop-blur dark:border-emerald-800 dark:bg-zinc-900/80">
        <h1 className="text-4xl font-bold tracking-tight text-emerald-700 dark:text-emerald-400">
          Pong
        </h1>
        <div className="mt-6 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300">
          /ping ready
        </div>
        <button onClick={handleCreateTrie}>Create Trie</button>
      </div>
    </main>
  );
}
