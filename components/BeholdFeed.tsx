'use client'

import { useEffect, useState } from 'react';

type PostSize = {
  mediaUrl: string;
  width: number;
  height: number;
};

type Post = {
  id: string;
  permalink: string;
  caption: string;
  mediaType: string;
  sizes: {
    small: PostSize;
    medium: PostSize;
    large: PostSize;
    full: PostSize;
  };
};

type Feed = {
  username: string;
  profilePictureUrl: string;
  posts: Post[];
};

const FEED_URL = 'https://feeds.behold.so/O6dCb21veKj3qVri5R9B';

export default function BeholdFeed() {
  const [feed, setFeed] = useState<Feed | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFeed() {
      try {
        const res = await fetch(FEED_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Feed = await res.json();
        setFeed(data);
      } catch (err: any) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchFeed();
  }, []);

  if (loading) return <p>Loading feed…</p>;
  if (error) return <p>Error loading feed: {error}</p>;
  if (!feed || feed.posts.length === 0) return <p>No posts found.</p>;

  return (
    <div>
      <h2>Instagram Feed – @{feed.username}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
        {feed.posts.map(post => (
          <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <img
              src={post.sizes.medium.mediaUrl}
              alt={post.caption || ''}
              width={post.sizes.medium.width}
              height={post.sizes.medium.height}
              style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}