import { useState } from 'react'
import { AppLogo, HamburgerMenu } from '../../assets'
import { MENU_LIST } from '../../constant'
import styles from './index.module.css'
import MobileMenu from './MobileMenu'

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = (anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarBrand}>
                <HamburgerMenu className={styles.hamburger} onClick={handleClick} />
                <AppLogo />
            </div>
            <ul className={styles.menu}>
                {MENU_LIST.map(menuItem => (
                    <li key={menuItem.value} className={styles.menuList}>{menuItem.label}</li>
                ))}
            </ul>
            <button className={styles.btn}>Contact Now</button>
            <MobileMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
            />
        </nav>
    )
}

export default Navbar
