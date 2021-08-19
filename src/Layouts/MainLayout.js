import React from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';

import Input from '../Components/Input';
import DefaultBody from '../Containers/DefaultBody';
import { useHistory } from 'react-router-dom';

const MainLayout = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <DefaultBody>    
            <Box pb={3} textAlign={'center'}>
                <Typography className={classes.title} component={'h1'} variant={'h4'}>Search for your favorite NBA players by height</Typography>
                <Input />
            </Box>
            <Button onClick={() => history.push('nba-players')} size={'large'} variant="contained" color="primary">
                Search
            </Button>
        </DefaultBody>
    );
}

const useStyles = makeStyles(() => ({
    title: {
        color: 'white',
        fontWeight: 800,
        paddingBottom: '24px',
    },
    button: {

    }
}));

export default MainLayout;