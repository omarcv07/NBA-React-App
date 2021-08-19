import React from 'react';
import { Box, Typography } from '@material-ui/core';

const NoMatchesFound = () => (
    <Box height={"80vh"} alignItems={"center"} justifyContent={"center"} display={"flex"}>
        <Typography component={'h1'} variant={'h5'}>No matches found</Typography>
    </Box>
);

export default NoMatchesFound;