import { MouseEventHandler } from "react";
import styles from "./main/post.module.css";

export default function MoreButton({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className={styles.more} onClick={onClick}>
      Load More
    </button>
  );
}
