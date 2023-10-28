import React from 'react'
import { Menu, MenuItem } from "@mui/material";
import { MENU_LIST } from '../../constant';
// const items = [
//     { id: 1, title: "Change password", url: "/changePassword" },
//     { id: 2, title: "Profile", url: "/profile" },
//     { id: 3, title: "Logout", url: "#logout" },
// ];
const paperProps = {
    elevation: 0,
    sx: {
        overflow: "visible",
        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.22))",
        display: "flex",
        flexDirection: "column !important",
        mt: 1.5,
        "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
        },
    },
};
const MobileMenu = ({ open, anchorEl, handleClose }) => {
    return (
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={paperProps}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            {MENU_LIST.map((item) => (
                <MenuItem
                    // style={{ backgroundColor: "red", }}
                    // onClick={() => handleOnClick(item.url)}
                    key={item.id}
                // className={styles.menuItem}
                >
                    {item.label}
                </MenuItem>
            ))}
        </Menu>
    )
}

export default MobileMenu
