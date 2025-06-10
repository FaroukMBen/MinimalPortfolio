function Experience(
    Time: string,
    Title: string,
    Period: string,
    Description: string,
    Company: string,
    CompanyLink: string,
    Location: string
) {
    return (
        <div key={Title}>
            <h3>
                {Time} - {Title} - {Period}
            </h3>
            <p>{Description}</p>
            <div>
                <a href={CompanyLink} target="_blank" rel="noopener noreferrer">
                    {Company}
                </a>
                , {Location}
            </div>
        </div>
    );
}
export default Experience;
