import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 className={styles.title}>MINIMALIZM STUDIO</h1>
      </Link>
    </header>
  );
}
