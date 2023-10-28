import { AppLogo, FbIcon, InstaIcon, PinIcon, TwiiterIcon } from '../../assets'
import { MENU_LIST } from '../../constant'
import FlexBox from '../FlexBox'
import styles from './index.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.links}>
                    <AppLogo />
                    <ul className={styles.menu}>
                        {MENU_LIST.map(menuItem => (
                            <li key={menuItem.value} className={styles.menuList}>{menuItem.label}</li>
                        ))}
                    </ul>
                    <FlexBox classNames={styles.socialIcons}>
                        <InstaIcon />
                        <FbIcon />
                        <TwiiterIcon />
                        <PinIcon />
                    </FlexBox>
                </div>
                <FlexBox classNames={styles.footerText}>
                    <p classNames={styles.para}>© 2020 Acme. All right reserved.</p>
                    <p classNames={styles.para}>Privacy Policy</p>
                    <p classNames={styles.para}>Terms of Service</p>
                </FlexBox>
            </div>
        </footer>
    )
}

export default Footer
