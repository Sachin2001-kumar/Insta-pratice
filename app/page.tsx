import Link from 'next/link';
import Post from './components/Post';
import styles from './page.module.css';
import prisma from '@/lib/prisma';

type PostType = {
  id: string;
  title: string;
  content: string | null;
  author: {
    name: string | null;
  } | null;
};

async function getPosts(): Promise<PostType[]> {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className={styles.main}>
      <Link href="/add-post">Add Post</Link>
      <h1>Feed</h1>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content ?? ''}
          authorName={post.author?.name ?? 'Unknown'}
        />
      ))}
    </main>
  );
}
