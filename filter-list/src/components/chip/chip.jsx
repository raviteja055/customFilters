
import React, { useEffect, useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import MultiSelectCheckbox from "../multiSelectCheckbox/multiSelectCheckbox"
import RadioButtonMenu from "../radioBox/radiobox"
import { ChipData, apiMapping } from "../../utils/menuItem"
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { withStyles } from "@material-ui/core/styles";

const StyledChip = withStyles({
    root: {
        margin: "5px",
        borderRadius: 0,
        color: "black",
        "& .MuiChip-deleteIcon": {
            display: "none"
        },
        "&:hover": {
            "& .MuiChip-deleteIcon": {
                display: "block",
            },
            background: "none",
            border: "1px solid blue"

        },
        background: "none",
        border: "1px solid grey"
    },
    deleteIcon: {
        position: "absolute",
        left: 0,
        top: -5,
        fontSize: "12px",
        background: "white"
    }
})(Chip);
const RemovableChip = ({ label, type, onDelete, setFilterState, filterState, selectedItems, setSelectedItems }) => {

    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    // const classes = useStyles();


    console.log("type", type)
    const handleChipClick = (event) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };



    const handleDelete = (label) => {
        onDelete(label);
    };
    const handleClose = () => {
        setMenuAnchorEl(null);
    };

    const handleSave = (label, data, type) => {
        if (label == "Invoice Status") {
            let key = apiMapping[label]
            console.log("keykey", key)
            setFilterState({
                ...filterState,
                [key]: data,
            })
        } else if (label == "Issued date range") {
            console.log("datadata", data)
            let key = apiMapping[label]
            setFilterState({
                ...filterState,
                [key]: data,
            })
        } else {
            let key = apiMapping[label]
            setFilterState({
                ...filterState,
                [key]: data,
            })
        }

        handleClose();
    };

    const formatData = (data) => {
        console.log("data", data)
        return data && data[apiMapping[label]] ? data[apiMapping[label]].join(",") : "All"
    }

    return (
        <>

            {type == "multi" && <>
                <StyledChip onDelete={() => handleDelete(label)}

                    deleteIcon={<CancelOutlinedIcon style={{ color: "blue", fontSize: "12px" }} />}

                    label={
                        <>
                            {label}
                            {console.log("typeeeeee", filterState)}

                            {
                                <span > :{formatData(filterState)}</span>
                            }
                        </>
                    }
                    color="primary" onClick={handleChipClick} />
                <MultiSelectCheckbox menuData={ChipData[label]} menuAnchorEl={menuAnchorEl} handleClose={handleClose}
                    handleSave={handleSave} label={label} type={type} data={filterState && filterState[apiMapping[label]]} />
            </>
            }
            {type == "single" && <>

                <StyledChip label={
                    <>
                        {label}
                        {
                            <span > :{filterState && filterState[apiMapping[label]]}</span>
                        }

                    </>
                }
                    deleteIcon={<CancelOutlinedIcon style={{ color: "blue", fontSize: "12px" }} />}

                    onDelete={() => handleDelete(label)} color="primary" onClick={handleChipClick} />
                <RadioButtonMenu menuData={ChipData[label]} menuAnchorEl={menuAnchorEl} handleClose={handleClose} handleSave={handleSave} label={label} type={type} />
            </>
            }
            {type == "singleDate" && <>

                <StyledChip label={
                    <>
                        {label}
                        {
                            <span > :{filterState && filterState[apiMapping[label]]}</span>
                        }

                    </>
                }
                    deleteIcon={<CancelOutlinedIcon style={{ color: "blue", fontSize: "12px" }} />}

                    onDelete={() => handleDelete(label)} color="primary" onClick={handleChipClick} />
                <RadioButtonMenu menuData={ChipData[label]} menuAnchorEl={menuAnchorEl} handleClose={handleClose} handleSave={handleSave} label={label} type={type} />
            </>
            }

        </>
    );
};

export default RemovableChip;
