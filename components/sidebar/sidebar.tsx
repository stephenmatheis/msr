import styles from "./sidebar.module.scss";

export function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.content}>
                <h2>sidebar</h2>
            </div>
        </div>
    );
}
