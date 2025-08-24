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

export function ToolbarLeading({ children }: { children: React.ReactNode }) {
    return <div className={styles.leading}>{children}</div>;
}

export function ToolbarCenter({ children }: { children: React.ReactNode }) {
    return <div className={styles.center}>{children}</div>;
}

export function ToolbarTrailing({ children }: { children: React.ReactNode }) {
    return <div className={styles.trailing}>{children}</div>;
}

export function ToolbarTitle({ children }: { children: React.ReactNode }) {
    return <div className={styles.route}>{children}</div>;
}

export function ToolbarButton({
    children,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
    return <button {...props}>{children}</button>;
}
