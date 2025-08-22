import styles from "./main.module.scss";

type MainProps = {
    children: React.ReactNode;
};

export function Main({ children }: MainProps) {
    return (
        <div className={styles.main}>
            <div className={styles.content}>{children}</div>
        </div>
    );
}
