import React from 'react';
import { CardContent, Typography, Card } from '@material-ui/core';

const PlayerCard = ({ name, heightInInches, heightInMeters }) => (
    <Card>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Inches: {heightInInches} {" "}
                Meters: {heightInMeters}
            </Typography>
        </CardContent>
    </Card>
)

export default PlayerCard;