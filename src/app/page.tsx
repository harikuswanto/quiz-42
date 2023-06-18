import { getPosts } from "../utility/getPosts";
import MainPosts from "@/component/posts/main/posts";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="container">
      <MainPosts apiData={posts} />
    </main>
  );
}
