export default function Project({ title, description, image, link }) {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt={title}></img>
            <p>{description}</p>
            <a href={link}>View Project</a>
        </div>
    );
}
