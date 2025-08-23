"use client";

import * as motion from "motion/react-client";
import { useUI } from "@/providers/ui-provider";
import styles from "./toolbar.module.scss";

type ToolbarRootProps = {
    children: React.ReactNode;
};

export function ToolbarRoot({ children }: ToolbarRootProps) {
    const { isSidebarOpen } = useUI();

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
            <div className={styles.content}>{children}</div>
        </motion.div>
    );
}

export function ToolbarGroup({ children }: { children: React.ReactNode }) {
    return <div className={styles.group}>{children}</div>;
}

export function ToolbarTitle({ children }: { children: React.ReactNode }) {
    const { setIsSidebarOpen } = useUI();

    return (
        <div className={styles.title}>
            <ToolbarGroup>
                <ToolbarButton
                    className={styles.toggle}
                    onClick={() => {
                        setIsSidebarOpen((prev) => !prev);
                    }}
                >
                    <i className="bi bi-layout-sidebar"></i>
                </ToolbarButton>
            </ToolbarGroup>
            <ToolbarGroup>
                <ToolbarButton>
                    <i className="bi bi-chevron-left"></i>
                </ToolbarButton>
            </ToolbarGroup>
            <div className={styles.route}>{children}</div>
        </div>
    );
}

export function ToolbarButtons({ children }: { children: React.ReactNode }) {
    return <div className={styles.buttons}>{children}</div>;
}

export function ToolbarButton({
    children,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
    return <button {...props}>{children}</button>;
}
