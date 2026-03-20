import { autocompleteFromPrebuiltTrie } from '@/lib/autocomplete-trie';

export async function POST(request: Request) {
  const body = (await request.json()) as { query?: string };
  const query = body.query?.trim().toLowerCase() ?? '';

  if (!query) {
    return Response.json({ query, words: [] });
  }

  try {
    const words = await autocompleteFromPrebuiltTrie(query, 25);
    return Response.json({ query, words });
  } catch (error) {
    console.error('Failed to load autocomplete trie', error);
    return Response.json(
      { error: 'Failed to load autocomplete dictionary.' },
      { status: 500 }
    );
  }
}
