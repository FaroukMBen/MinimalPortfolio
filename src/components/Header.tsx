import { useContext } from "react";
import { UIContext } from "../context/UIContext";

function Header() {
    const { uiValues, setUIValues } = useContext(UIContext);

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUIValues({
            ...uiValues,
            language: e.target.value === "fr" ? "fr" : "en",
        });
    };

    return (
        <header>
            <img src="images/react.svg" alt="logo" />
            <select onChange={handleLanguageChange} value={uiValues.language}>
                <option value="fr">Français</option>
                <option value="en">English</option>
            </select>
            <button
                onClick={() =>
                    setUIValues({
                        ...uiValues,
                        theme: uiValues.theme === "light" ? "dark" : "light",
                    })
                }
            >
                {uiValues.theme}
            </button>
        </header>
    );
}
export default Header;
