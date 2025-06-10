import { useContext } from "react";
import projects from "../data/ProjectData";
import Project from "./Project";
import { UIContext } from "../context/UIContext";

function Portfolio() {
    const { uiValues } = useContext(UIContext);

    return (
        <div>
            {projects.map((project) => {
                return Project(
                    project.Title,
                    project[uiValues.language].Description,
                    project.Thumbnail,
                    project.Github,
                    project.Tags
                );
            })}
        </div>
    );
}
export default Portfolio;
