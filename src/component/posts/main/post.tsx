import { Post } from "@/type";
import styles from "./post.module.css";
import Meta from "../meta/meta";
import Image from "next/image";

export default function MainPost({ post }: { post: Post }) {
  return (
    <article className={styles.container}>
      <div className={styles.featured}>
        <Image src={post.thumbnail} alt={post.title} fill />
      </div>
      <Meta post={post} />
      <h2>{post.title}</h2>
    </article>
  );
}
