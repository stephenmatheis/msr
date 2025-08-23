"use client";

import * as motion from "motion/react-client";
import { useUI } from "@/providers/ui-provider";
import styles from "./main.module.scss";

type MainProps = {
    children: React.ReactNode;
};

export function Main({ children }: MainProps) {
    const { isSidebarOpen } = useUI();

    return (
        <motion.div
            className={styles.main}
            variants={{
                open: {
                    paddingLeft: 350,
                },
                closed: {
                    paddingLeft: 16,
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
            <div className={styles.content}>{children}</div>
        </motion.div>
    );
}
