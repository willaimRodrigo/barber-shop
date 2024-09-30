import styles from "./style.module.scss";

export const Prices = ({children}) => {
    return (
        <section className={styles.section}>
            <div className={styles.prices}>
                {children}
            </div>
        </section>
    )
}