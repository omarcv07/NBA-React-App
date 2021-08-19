import React, { lazy } from 'react';

const promiseNbaPlayers = import("./Components/NbaPlayers");

const NbaPlayers = lazy(() => promiseNbaPlayers);

const routes = [
    { path: '/nba-players', exact: true, name: 'NbaPlayers', component: NbaPlayers },
];

export default routes;