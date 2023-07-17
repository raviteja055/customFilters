import React, { useState, useEffect } from "react"
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { FilterMenuItems } from "../../utils/menuItem"
import { ChipData, apiMapping } from "../../utils/menuItem"

import RemovableChip from "../chip/chip"
import CheckboxMenu from '../checkbox/checkbox'
const useStyles = makeStyles((theme) => ({
    menuItem: {
        marginLeft: '10px',
    },
}));
const FilterSection = () => {
    const classes = useStyles();

    let [filterState, setFilterState] = useState()
    console.log("filterState", filterState)
    const [anchorEl, setAnchorEl] = useState(null);
    const [filteredMenuItems, setFilteredMenuItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState(["Invoice Status"]);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    useEffect(() => {
        const res = FilterMenuItems.map((menu) => ({
            title: menu.title,
            items: menu.items.filter((item) => !selectedItems.includes(item.label)),
        }));
        console.log("res", res)
        setFilteredMenuItems(res)


    }, [selectedItems])

    useEffect(() => {
        setFilteredMenuItems(FilterMenuItems)
    }, []);


    const handleItemClick = (item) => () => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((selected) => selected !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
        handleClose()
    };
    console.log("filterStatefilterState", filterState)
    let type = {
        "Invoice Status": "multi",
        "Issued date range": "singleDate"
    }
    const onDelete = (label) => {

        let key = apiMapping[label]
        delete filterState[key];
        setFilterState(filterState)
        setSelectedItems(selectedItems.filter((selected) => selected !== label));

    }
    return (
        <div>
            {selectedItems.map((i) => (
                <RemovableChip label={i} type={type[i]}
                    onDelete={onDelete} component={CheckboxMenu} setFilterState={setFilterState} filterState={filterState} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
            ))}
            <Button onClick={handleOpen} variant="contained" color="primary">
                Custom Filters
            </Button>
            <Menu
                id="menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
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
                {filteredMenuItems.map((section) => (
                    <div key={section.title} >
                        <MenuItem disabled>{section.title}</MenuItem>
                        {section.items.map((item) => (
                            <MenuItem key={item.label}
                                onClick={handleItemClick(item.label)}
                                selected={selectedItems.includes(item.label)}
                                className={classes.menuItem}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </div>
                ))}
            </Menu>
        </div>
    )
}

export default FilterSection