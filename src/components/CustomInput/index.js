import styles from './index.module.css'
import { Envelope } from '../../assets'
import Button from '../Button'

const CustomInput = () => {
    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputWrapper}>
                <Envelope className={styles.icon} />
                <input placeholder='Enter your email address' />
            </div>
            <Button>Let's Talk</Button>
        </div>
    )
}

export default CustomInput
