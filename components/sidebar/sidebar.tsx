"use client";

import * as motion from "motion/react-client";
import { useUI } from "@/providers/ui-provider";
import styles from "./sidebar.module.scss";

export function Sidebar() {
    const { isSidebarOpen } = useUI();

    return (
        <motion.div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}>
            <div className={styles.content}>
                <div className={styles.title}>Reporter</div>
            </div>
        </motion.div>
    );
}
