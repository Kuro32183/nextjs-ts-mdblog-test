import styles from "../styles/Home.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <h1 className={styles.header}>
      <Link href="/">
        <a>
          Welcome to <span>Next.js!</span>
        </a>
      </Link>
    </h1>
  );
};
