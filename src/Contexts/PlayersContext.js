import React, { useState } from 'react';

const PlayersContext = React.createContext();

export const PlayersContextProvider = ({ children }) => {
    const [players, setPlayers] = useState([]);
        
    return (
        <PlayersContext.Provider
            value={{
                players,
                setPlayers,
            }}
        >
            {children}
        </PlayersContext.Provider>
    );
};

export default PlayersContext;