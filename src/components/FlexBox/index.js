import clsx from 'clsx'
import styles from './index.module.css'

const FlexBox = ({ children, classNames }) => {
    return (
        <div className={clsx(styles.flex, classNames)}>
            {children}
        </div>
    )
}

export default FlexBox
