import Image from "next/image";
import styles from "./header.module.css";
import logo from "@/../../public/img/logo.png";
import Sorter from "./sorter";
export default function Header() {
  return (
    <header className={styles.container}>
      <div>
        <Sorter />
      </div>
      <Image src={logo} width={100} height={40} alt="Quiz 4 Sandbox HSI" />
      <div></div>
    </header>
  );
}
