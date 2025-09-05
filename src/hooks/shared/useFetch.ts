import { useEffect, useState } from "react";

export default function useFetch<T>(callback: (...args: unknown[]) => Promise<T>) {
  const [value, setValue] = useState<T>(null as T);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await callback();
        setValue(data);
      } catch (err: unknown) {
        setError("Failed to fetch blogs.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);
}
