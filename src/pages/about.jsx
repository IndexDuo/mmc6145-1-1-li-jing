import styles from "../styles/about.module.css";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <main>
            <h1 className={styles.title}>A little about me</h1>

            <section>
                <article>
                    <p>My MBTI is ISTJ :D</p>

                    <p>
                        It took me 3 months to get the Gholdengo emblem on
                        Pokemon TCG Pocket.
                    </p>
                    <div className={styles.link}>
                        <Link to="/" className={styles.linkHome}>
                            My Work
                        </Link>
                    </div>
                </article>
            </section>
        </main>
    );
}
