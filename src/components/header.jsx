import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

export default function Header() {
    return (
        <header>
            <div className={styles.headerContainer}>
                <div className={styles.headerDiv}>
                    <Link
                        className={`${styles.linkLogo} ${styles.link}`}
                        to="/"
                    >
                        <strong>Jing Li</strong>
                    </Link>
                </div>
                <div className={styles.headerDiv}>
                    <Link className={styles.link} to="/about">
                        About
                    </Link>
                    <Link className={styles.link} to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    );
}
