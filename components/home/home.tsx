import styles from "./home.module.scss";

export function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.section}>
                <h3>Section</h3>
                <div className={styles.content}>Content</div>
            </div>
            <div className={styles.section}>
                <h3>Section</h3>
                <div className={styles.content}>Content</div>
            </div>
            <div className={styles.section}>
                <h3>Section</h3>
                <div className={styles.content}>Content</div>
            </div>
        </div>
    );
}
