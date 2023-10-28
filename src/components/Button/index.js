import clsx from 'clsx'
import styles from './index.module.css'

const Button = ({ children, classNames }) => {
    return (
        <button className={clsx(styles.btn, classNames)}>{children}</button>
    )
}

export default Button
