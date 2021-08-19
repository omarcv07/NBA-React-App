import React, { useContext } from 'react';

import { InputBase, Typography, Toolbar, AppBar, Box } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import { useHistory } from 'react-router-dom';

import SearchContext from '../../Contexts/SearchContext';

const useStyles = makeStyles((theme) => ({
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
            fontWeight: 800
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        background: "black"
    },
    brand: {
        cursor: 'pointer',
    }
}));

const DefaultNavbar = () => {
    const classes = useStyles();
    const history = useHistory();

    const searchContext = useContext(SearchContext);

    return (
        <Box mb={2}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Box className={classes.brand} onClick={() => history.push('/')} component={"span"}>
                        <Typography className={classes.title} variant="h6" noWrap>
                            NBA
                        </Typography>
                    </Box>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            onChange={(e) => searchContext.setSearch(e.target.value)}
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchContext.search}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default DefaultNavbar;