import styles from "./index.module.css";

const Title = ({ title, caption }) => {
    return (
        <div className={styles.title}>
            <h3 className={styles.heading}>{title}</h3>
            <p className={styles.caption}>{caption}</p>
        </div>
    );
};

export default Title;
