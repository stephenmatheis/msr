"use client";

import * as motion from "motion/react-client";
import { useUI } from "@/providers/ui-provider";
import styles from "./toolbar.module.scss";

type ToolbarProps = {
    title: string;
};

export function Toolbar({ title }: ToolbarProps) {
    const { isSidebarOpen, setIsSidebarOpen } = useUI();

    return (
        <motion.div
            className={styles.toolbar}
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
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.group}>
                        <button
                            className={styles.toggle}
                            onClick={() => {
                                setIsSidebarOpen((prev) => !prev);
                            }}
                        >
                            <i className="bi bi-layout-sidebar"></i>
                        </button>
                    </div>
                    <div className={styles.group}>
                        <button>
                            <i className="bi bi-chevron-left"></i>
                        </button>
                    </div>
                    <div className={styles.title}>{title}</div>
                </div>
                <div className={styles.right}>
                    <div className={styles.group}>
                        <button>1</button>
                    </div>
                    <div className={styles.group}>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                    <div className={styles.group}>
                        <button>1</button>
                    </div>
                    <div className={styles.group}>
                        <button>1</button>
                        <button>2</button>
                    </div>
                    <div className={styles.group}>
                        <button>1</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
