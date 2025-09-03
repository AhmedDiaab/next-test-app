import { getAllPosts, Post as TPost } from "@/lib/data";
import Link from "next/link";

export default async function Post({ post }: { post: TPost }) {
  const posts = await getAllPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
