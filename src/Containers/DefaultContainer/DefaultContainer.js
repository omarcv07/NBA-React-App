import React from 'react';

import { Paper } from '@material-ui/core';

import Image from '../../Images/default-background.jpg';

const DefaultContainer = ({ children }) => (
    <Paper style={styles.paperContainer}>
        {children}
    </Paper>
)

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        minHeight: '100vh',
        display: 'flex',
    }
};

export default DefaultContainer;