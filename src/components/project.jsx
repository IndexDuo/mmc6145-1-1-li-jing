import styles from "../styles/project.module.css";

export default function Project({ title, description, image, link }) {
    return (
        <article className={styles.card}>
            <img className={styles.projectImage} src={image} alt={title} />
            <div className={styles.body}>
                <h3 className={styles.itemTitle}>{title}</h3>
                <p className={styles.desc}>{description}</p>
                <a
                    className={styles.cta}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                >
                    Learn more
                </a>
            </div>
        </article>
    );
}
