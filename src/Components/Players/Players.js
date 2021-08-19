import React from 'react';
import { Container, Grid } from '@material-ui/core';
import PlayerCard from './PlayerCard';

const Players = (props) => {
    const { data } = props;
    return (
        <Container maxWidth={false}>
            <Grid container spacing={3} >
                {data && data.length > 0 && data.map((player) => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlayerCard 
                                name={`${player.first_name} ${player.last_name}`}
                                heightInInches={player.h_in}
                                heightInMeters={player.h_meters}
                                />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
}

export default Players;