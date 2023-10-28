import clsx from 'clsx'
import styles from './index.module.css'

const Input = ({ type, placeholder, classNames }) => {
    return (
        <div className={clsx(styles.inputContainer, classNames)}>
            <input
                className={styles.input}
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input
