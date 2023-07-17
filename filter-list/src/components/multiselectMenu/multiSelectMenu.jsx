import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import RemovableChip from "../chip/chip"
const MultiSelectMenu = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleChange = (event) => {
        setSelectedItems(event.target.value);
    };
    const handleDelete = () => {
        // Perform any delete operation or custom logic here
        // onDelete();
    };
    return (
        <FormControl>
            <RemovableChip label="Example Chip"

                onDelete={() => console.log('Chip removed!')} />


            {/* <InputLabel>Select Items</InputLabel> */}
            <Select
                multiple
                value={selectedItems}
                onChange={handleChange}

            >
                <MenuItem value="Item 1">Item 1</MenuItem>
                <MenuItem value="Item 2">Item 2</MenuItem>
                <MenuItem value="Item 3">Item 3</MenuItem>
                <MenuItem value="Item 4">Item 4</MenuItem>
            </Select>
        </FormControl>
    );
};

export default MultiSelectMenu;
