import { Post } from "@/type";
import styles from "./meta.module.css";
import React from "react";
import { getFullName } from "@/utility/getFullName";

export default function Meta({ post }: { post: Post }) {
  return (
    <div className={styles.container}>
      <span className={styles.property}>BY </span>
      <span className={styles.value}>{getFullName(post.author)}</span>
      <span className={styles.property}> IN </span>
      <span className={styles.value}>{post.category.name}</span>
    </div>
  );
}
