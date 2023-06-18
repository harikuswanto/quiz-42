"use client";

import { ApiData, Post } from "@/type";
import MainPost from "./post";
import { useState } from "react";
import { getPostsSwr } from "@/utility/getPostsSwr";
import MoreButton from "../moreButton";

export default function MainPosts({ apiData }: { apiData: ApiData }) {
  const [posts, setPosts] = useState<Post[]>(apiData.data);
  const [page, setPage] = useState<number>(2);
  const totalPage = apiData.meta.pagination.totalPages;

  const { data } = getPostsSwr("?page=" + page);

  function onClick() {
    setPage(page + 1);
    const nextPosts = data.data;
    setPosts([...posts, ...nextPosts]);
  }

  return (
    <div className="mainposts">
      {posts.map((post: Post) => (
        <MainPost key={post.id} post={post} />
      ))}
      {page - 1 < totalPage && (
       <MoreButton onClick={onClick} />
      )}
    </div>
  );
}
