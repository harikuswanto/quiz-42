"use client";

import { getPosts } from "@/utility/getPosts";
import { Post } from "@/type";
import { ReactNode, createContext, useState } from "react";

export default async function MainPostsProfider({
  children,
}: {
  children: ReactNode;
}) {
  const postsLists = await getPosts();
  const [posts, setPosts] = useState<Post[]>(postsLists);
  const MainPostContext = createContext({ posts, setPosts });
  return (
    <MainPostContext.Provider value={{ posts, setPosts }}>
      {children}
    </MainPostContext.Provider>
  );
}
