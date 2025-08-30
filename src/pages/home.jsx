import styles from "../styles/home.module.css";
import projects from "../data/projects.json";
import Project from "../components/project.jsx";

export default function Home() {
    return (
        <main>
            <h1 className={styles.placeholder}>I'm the home page!</h1>

            <div>
                hii
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
