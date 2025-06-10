import { useContext } from "react";
import { UIContext } from "../context/UIContext";
import Experience from "./Experience";
import experience from "../data/ExperienceData";

function Timeline() {
    const { uiValues } = useContext(UIContext);

    return (
        <div>
            {experience.map((exp) => {
                return Experience(
                    exp[uiValues.language].Time,
                    exp[uiValues.language].Title,
                    exp[uiValues.language].Period,
                    exp[uiValues.language].Description,
                    exp.Company,
                    exp.CompanyLink,
                    exp.Location
                );
            })}
        </div>
    );
}
export default Timeline;
