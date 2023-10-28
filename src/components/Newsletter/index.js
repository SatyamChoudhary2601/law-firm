import Button from '../Button'
import CustomInput from '../CustomInput'
import FlexBox from '../FlexBox'
import Input from '../Input'
import PageTitle from '../PageTitle'
import styles from './index.module.css'

const Newsletter = () => {
    return (
        <section className={styles.newsletter}>
            <div className={styles.wrapper}>
                <PageTitle title="Subscribe Our Newsletter" isCenter={true} />
                <FlexBox classNames={styles.flex}>
                    <Input type={"text"} placeholder={"Name:"} classNames={styles.inputName} />
                    <Input type={"text"} placeholder={"Enter your Email"} classNames={styles.inputEmail} />
                    <Button classNames={styles.btn}>SEND</Button>
                </FlexBox>
            </div>
        </section>
    )
}

export default Newsletter
