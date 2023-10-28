import { heroImg } from '../../assets'
import CustomInput from '../CustomInput'
import styles from './index.module.css'

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroLeft}>
                <div className={styles.heroLeftWrapper}>
                    <div>
                        <h1 className={styles.title1}>You don't have to</h1>
                        <h1 className={styles.title2}>Fight them Alone.</h1>
                    </div>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                    <CustomInput />
                </div>
            </div>
            <div className={styles.heroRight}>
                <img src={heroImg} className={styles.img}/>
            </div>
        </section>
    )
}

export default Hero
