import React, { useState } from 'react';
import { Button, Chip, Menu, MenuItem } from '@material-ui/core';
import MultiSelectMenu from "../multiselectMenu/multiSelectMenu"
export function FilterList() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, item) => {
    setSelectedItem(item);
    handleClose();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log("selectedItem", selectedItem)
  return <div className="filter-strip">

    <div className="custom-filter">
      <Button aria-controls="filter-dropdown" aria-haspopup="true" onClick={handleClick}>
        Custom Filters
      </Button>
      <Menu id="filter-dropdown" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={(event) => handleMenuItemClick(event, 'Filter 1')}>Filter 1</MenuItem>
        <MenuItem onClick={handleClick}>Filter 2</MenuItem>
        <MenuItem onClick={handleClick}>Filter 3</MenuItem>
        {/* Add more filter items here */}
      </Menu>
    </div>
  </div>;
}