import { useContext } from "react";
import IntroductionData from "../data/IntroductionData";
import { UIContext, type UIContextType } from "../context/UIContext";

function Introduction() {
    const { uiValues } = useContext<UIContextType>(UIContext);

    return (
        <div className="">
            <h1>{IntroductionData[0].title[uiValues.language]}</h1>
            <h2>{IntroductionData[0].subTitle[uiValues.language]}</h2>
            <p>{IntroductionData[0].description[uiValues.language]}</p>
        </div>
    );
}
export default Introduction;
