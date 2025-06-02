import { createContext } from "react";

export type UIContextValues = {
    language: "en" | "fr";
    theme: "light" | "dark";
};

export type SetUIContextValues = React.Dispatch<
    React.SetStateAction<UIContextValues>
>;

export type UIContextType = {
    uiValues: UIContextValues;
    setUIValues: SetUIContextValues;
};

export const UIContext = createContext<UIContextType>({
    uiValues: {
        language: "en",
        theme: "light",
    },
    setUIValues: () => {},
});
