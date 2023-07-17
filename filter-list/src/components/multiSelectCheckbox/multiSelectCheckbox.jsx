import React, { useEffect, useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { apiMapping } from '../../utils/menuItem';



const MultiSelectCheckbox = ({ menuData, menuAnchorEl, handleClose, handleSave, label, displayText, data }) => {
    console.log("displayText", displayText)
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (value) => {
        if (checkedItems.includes(value)) {
            setCheckedItems(checkedItems.filter((item) => item !== value));
        } else {
            setCheckedItems([...checkedItems, value]);
        }
    };


    useEffect(() => {

        // setCheckedItems(data[apiMapping[label]])

    }, [data])
    console.log("checkedItems", checkedItems, data)

    return (
        <>
            <Menu
                id="menu"
                anchorEl={menuAnchorEl}
                open={Boolean(menuAnchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <List component="nav">
                    <ListItem>
                        <Typography variant="subtitle1" color="primary">
                            {label}:
                        </Typography>
                    </ListItem>

                    {menuData.map((item) => (
                        <MenuItem key={item.value} onClick={() => handleCheckboxChange(item.value)}>
                            <Checkbox checked={checkedItems.includes(item.value)} color="primary" />
                            {item.label}
                        </MenuItem>
                    ))}
                    <ListItem>
                        <Button onClick={() => handleSave(label, checkedItems)} variant="contained" color="primary">
                            Save
                        </Button>
                        <Button onClick={handleClose} variant="contained" color="default">
                            Cancel
                        </Button>
                    </ListItem>
                </List>

            </Menu>
        </>
    );
};

export default MultiSelectCheckbox;
