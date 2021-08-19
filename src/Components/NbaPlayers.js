import React, { useContext } from 'react';
import { Box } from '@material-ui/core';

import DefaultNavbar from '../Containers/DefaultNavbar';

import PlayersContext from '../Contexts/PlayersContext';
import SearchContext from '../Contexts/SearchContext';

import Players from './Players/Players';
import NoMatchesFound from './NoMatchesFound';

const NbaPlayers = () => {
    const searchContext = useContext(SearchContext);
    const playersContext = useContext(PlayersContext)


    const filteredNbaPlayers = playersContext.players.filter((v) => v.h_in.includes(searchContext.search) || v.h_meters.includes(searchContext.search));

    const showPlayers = () => {
        if (searchContext.search.length > 0 && filteredNbaPlayers.length > 0) {
            return <Players data={filteredNbaPlayers} />
        } else {
            return <NoMatchesFound />
        }
    }

    return (
        <Box>
            <DefaultNavbar />
            {showPlayers()}
        </Box>
    );
}

export default NbaPlayers;