import styles from "../styles/home.module.css";
import projects from "../data/projects.json";
import Project from "../components/project.jsx";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Hi, I'm Jing</h1>
                    <p className={styles.description}>UX/UI Designer</p>
                    <div className={styles.contactButton}>
                        <Link className={styles.contactLink} to={"/contact"}>
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.projectContainer}>
                <h2 className={styles.h2}>Recent Works</h2>
                {projects.map((item) => (
                    <Project
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        link={item.link}
                    />
                ))}
            </div>
        </main>
    );
}
