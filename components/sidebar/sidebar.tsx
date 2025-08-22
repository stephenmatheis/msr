"use client";

import { useUI } from "@/providers/ui-provider";
import styles from "./sidebar.module.scss";

export function Sidebar() {
    const { isSidebarOpen } = useUI();

    return (
        <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}>
            <div className={styles.content}>
                <div className={styles.title}>Reporter</div>
            </div>
        </div>
    );
}
