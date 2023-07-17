import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
const FilterMenuItems = [
    {
        title: 'Invoice',
        items: [
            { label: 'Total due amount', title: 'Invoice' },
            { label: 'Follow up status', title: 'Invoice' },
            { label: 'Issued date range', title: 'Invoice' },
        ],
    },
    {
        title: 'Customer',
        items: [
            { label: 'Whatfix', title: 'Customer' },
            { label: 'Zoho', title: 'Customer' },
        ],
    },
];
const MenuWithSections = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleItemClick = (item) => () => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((selected) => selected !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
        handleClose()
    };

    const filteredMenuItems = FilterMenuItems.map((menu) => ({
        title: menu.title,
        items: menu.items.filter((item) => !selectedItems.includes(item.label)),
    }));
    console.log("selectedItems", selectedItems)
    return (
        <div>
            <Button
                onClick={handleOpen}
                variant="contained"
                color="primary"
                aria-haspopup="true"
                aria-controls="menu"
            >
                Open Menu
            </Button>
            <Menu
                id="menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {filteredMenuItems.map((menu) => (
                    <div key={menu.title}>
                        <Typography variant="subtitle1" color="primary">
                            {menu.title}
                        </Typography>
                        {menu.items.map((item) => (
                            <MenuItem
                                key={item.label}
                                onClick={handleItemClick(item.label)}
                                selected={selectedItems.includes(item.label)}
                            >
                                <Typography variant="body1">{item.label}</Typography>
                            </MenuItem>
                        ))}
                    </div>
                ))}
            </Menu>
        </div>
    );
};

export default MenuWithSections;
