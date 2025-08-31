import styles from "../styles/contact.module.css";

export default function Contact() {
    return (
        <main>
            <h1 className={styles.title}>Let's get in touch</h1>

            <section>
                <article>
                    <h2 className={styles.h2}>My social links:</h2>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/indexduo-jingli/">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/IndexDuo">Github</a>
                        </li>
                    </ul>
                </article>
            </section>
        </main>
    );
}
