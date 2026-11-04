import { NextResponse } from 'next/server';
import { fetchFacebookPosts } from '@/lib/facebook';

export const revalidate = 3600; // ISR: regenerate at most once per hour

export async function GET() {
  const posts = await fetchFacebookPosts(6);
  return NextResponse.json(posts);
}
