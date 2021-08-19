import React, { useContext } from 'react';
import { InputAdornment, TextField, withStyles } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import SearchContext from '../Contexts/SearchContext';

const CustomizedTextField = withStyles({
    root: {
        backgroundColor: "white",
        borderRadius: "25px",
        minWidth: "35rem",
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                display:"none",
            },
        },
    },
  })(TextField);

const Input = () => {
    const searchContext = useContext(SearchContext);

    return (
        <CustomizedTextField
            id="input-with-icon-textfield"
            variant={"outlined"}
            onChange={(e) => searchContext.setSearch(e.target.value)}
            value={searchContext.search}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default Input;