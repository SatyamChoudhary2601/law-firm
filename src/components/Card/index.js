import styles from './index.module.css'
import { Gift } from '../../assets'
import Title from '../Title'
import Button from '../Button'

const Card = ({ title, avatar, desc, btnText }) => {
    return (
        <div className={styles.card}>
            {avatar ? <img src={avatar} className={styles.avatar} alt={title} /> : <Gift />}
            <Title title={title} caption={desc} />
            {btnText && <Button>{btnText}</Button>}
        </div>
    )
}

export default Card
