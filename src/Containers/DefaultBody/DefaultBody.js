import { Box } from '@material-ui/core';
import React from 'react';

const DefaultBody = ({ children }) => (
    <Box display={'flex'} justifyContent={'center'} width={'100%'} alignItems={'center'} flexDirection={'column'}>
        {children}
    </Box>
);

export default DefaultBody;