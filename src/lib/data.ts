type Post = {
    id: string;
    title: string;
    content: string;
}

const posts: Post[] = [
    { id: "post-1", title: "First Post", content: "This is the content of the first post." },
    { id: "post-2", title: "Second Post", content: "This is the content of the second post." },
    { id: "post-3", title: "Third Post", content: "This is the content of the third post." },
    { id: "post-4", title: "Fourth Post", content: "This is the content of the fourth post." },
    { id: "post-5", title: "Fifth Post", content: "This is the content of the fifth post." },
];


export async function getPost(slug: string): Promise<Post> {
    // Simulate fetching post data
    return posts.find(post => post.id === slug) || { id: slug, title: "Post Not Found", content: "" };
}

export async function getAllPosts(): Promise<Post[]> {
    // Simulate fetching all posts
    return posts;
}