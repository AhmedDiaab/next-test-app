import BlogPostCard from "@/components/custom/BlogPostCard";
import Grid from "@/components/custom/Grid";
import Pagination from "@/components/custom/Pagination";
import { getAllPosts } from "@/lib/data";
import { useState } from "react";

export default async function BlogPostPage() {
  const [page, setPage] = useState<number>(1);
  
  const posts = await getAllPosts();

  return (
    <div className="px-4 py-8">
      <Grid>
        {paginatedPosts.map((post) => (
          <BlogPostCard key={post.href} {...post} />
        ))}
      </Grid>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
