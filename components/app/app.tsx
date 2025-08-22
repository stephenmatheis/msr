import styles from "./app.module.scss";

type AppProps = {
    children: React.ReactNode;
};

export function App({ children }: AppProps) {
    return <div className={styles.app}>{children}</div>;
}
