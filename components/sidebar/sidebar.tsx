"use client";

import * as motion from "motion/react-client";
import { useUI } from "@/providers/ui-provider";
import styles from "./sidebar.module.scss";

export function Sidebar() {
    const { isSidebarOpen } = useUI();

    return (
        <motion.div
            className={styles.sidebar}
            variants={{
                open: {
                    x: 0,
                },
                closed: {
                    x: "calc(var(--sidebar-width) * -1)",
                },
            }}
            initial="open"
            animate={isSidebarOpen ? "open" : "closed"}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
        >
            <div className={styles.content}>
                <div className={styles.title}>Title</div>
            </div>
        </motion.div>
    );
}
