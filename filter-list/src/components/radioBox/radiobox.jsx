import React, { useEffect, useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const RadioButtonMenu = ({ menuData, menuAnchorEl, handleClose, handleSave, label, type }) => {
    const [selectedValue, setSelectedValue] = useState(menuData[0].label);
    console.log("selectedValue", selectedValue)
    useEffect(() => {
        handleSave(label, menuData[0].label)
    }, [])
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

                        <ListItem>
                            <FormControlLabel
                                control={
                                    <Radio
                                        checked={selectedValue === item.label}
                                        onChange={(e) => setSelectedValue(e.target.value)}
                                        value={item.label}
                                        color="primary"
                                    />
                                }
                                label={item.label}
                            />
                        </ListItem>))}

                    <ListItem>
                        <Button onClick={() => handleSave(label, selectedValue, type)} variant="contained" color="primary">
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

export default RadioButtonMenu;
