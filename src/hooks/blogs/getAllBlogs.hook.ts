import { BlogPost, getAllPosts } from "@/lib/data";
import { useEffect, useState } from "react";

export default function useGetAllBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await getAllPosts();
        setBlogs(data);
      } catch (err: unknown) {
        setError("Failed to fetch blogs.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  return { blogs, loading, error };
}