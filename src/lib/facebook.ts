export interface FacebookPost {
  id: string;
  message?: string;
  story?: string;
  full_picture?: string;
  permalink_url: string;
  created_time: string;
}

interface GraphApiResponse {
  data: FacebookPost[];
  error?: { message: string; code: number };
}

export async function fetchFacebookPosts(limit = 6): Promise<FacebookPost[]> {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const token = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

  if (!pageId || !token) {
    console.warn('Facebook env vars not set — skipping feed fetch');
    return [];
  }

  const fields = 'id,message,story,full_picture,permalink_url,created_time';
  const url = `https://graph.facebook.com/v25.0/${pageId}/posts?fields=${fields}&limit=${limit}&access_token=${token}`;

  const res = await fetch(url, {
    next: { revalidate: 3600 }, // cache for 1 hour
  });

  if (!res.ok) {
    console.error('Facebook Graph API HTTP error', res.status);
    return [];
  }

  const json: GraphApiResponse = await res.json();

  if (json.error) {
    console.error('Facebook Graph API error:', json.error.message);
    return [];
  }

  // Only return posts that have something visible to show
  return (json.data ?? []).filter((p) => p.message || p.story);
}
