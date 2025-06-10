function Project(
    title: string,
    description: string,
    thumbnail: string,
    link: string,
    tags: string[]
) {
    return (
        <div onClick={() => window.open(link, "_blank")} key={title}>
            <img
                src={thumbnail ? thumbnail : "empty"}
                alt={`${title} thumbnail`}
            />
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
                {tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
        </div>
    );
}
export default Project;
