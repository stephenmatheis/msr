"use client";

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type UIContext = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const UIContext = createContext<UIContext | undefined>(undefined);

export function useUI() {
    const context = useContext(UIContext);

    if (!context) {
        throw new Error("useUI must be used within a UIProvider");
    }

    return context;
}

export function UIProvider({ children }: { children: ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return <UIContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>{children}</UIContext.Provider>;
}
