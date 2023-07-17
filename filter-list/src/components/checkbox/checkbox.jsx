import React, { useState, useEffect } from "react"
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    menuItem: {
        marginLeft: '10px',
    },
}));
const CheckboxMenu = (menuData, menuAnchorEl) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [checkedItems, setCheckedItems] = useState([]);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCheckboxChange = (value) => {
        if (checkedItems.includes(value)) {
            setCheckedItems(checkedItems.filter((item) => item !== value));
        } else {
            setCheckedItems([...checkedItems, value]);
        }
    };

    console.log("menuAnchorEl", menuAnchorEl)
    return (
        <Menu
            id="menu"
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            {menuData.map((item) => (
                <MenuItem key={item.value} onClick={() => handleCheckboxChange(item.value)}>
                    <Checkbox checked={checkedItems.includes(item.value)} color="primary" />
                    {item.label}
                </MenuItem>
            ))}
        </Menu>
    )
}

export default CheckboxMenu