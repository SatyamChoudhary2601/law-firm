import styles from './index.module.css'

const PageTitle = ({ title, isCenter = false }) => {
    return (
        <h1 className={styles.title} style={{ textAlign: isCenter ? "center" : "" }}>
            {title}
        </h1>
    )
}

export default PageTitle
