import styles from "./toolbar.module.scss";

export function Toolbar() {
    return (
        <div className={styles.toolbar}>
            <div className={styles.content}>
                <h2>Toolbar</h2>
            </div>
        </div>
    );
}
