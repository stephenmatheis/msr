"use client";

import { useUI } from "@/providers/ui-provider";
import styles from "./main.module.scss";

type MainProps = {
    children: React.ReactNode;
};

export function Main({ children }: MainProps) {
    const { isSidebarOpen, setIsSidebarOpen } = useUI();

    return (
        <div className={`${styles.main} ${isSidebarOpen ? styles.open : styles.closed}`}>
            <div className={styles.content}>{children}</div>
        </div>
    );
}
