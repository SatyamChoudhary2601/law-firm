import styles from './index.module.css'

const ImageView = ({ src, text }) => {
    return (
        <div className={styles.imageView}>
            <img src={src} className={styles.image} />
            <h5 className={styles.imageText}>{text}</h5>
        </div>
    )
}

export default ImageView
