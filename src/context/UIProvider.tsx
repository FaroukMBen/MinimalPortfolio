import React from "react";
import { UIContext, type UIContextValues } from "./UIContext";

interface UIContextProps {
    children: React.ReactNode;
}

export const UIProvider: React.FC<UIContextProps> = ({ children }) => {
    const [uiValues, setUIValues] = React.useState<UIContextValues>({
        language: "en",
        theme: "light",
    });

    return (
        <UIContext.Provider value={{ uiValues, setUIValues }}>
            {children}
        </UIContext.Provider>
    );
};
