import React, { useState } from 'react';

const SearchContext = React.createContext();

export const SearchContextProvider = ({ children }) => {
    const [search, setSearch] = useState('');
        
    return (
        <SearchContext.Provider
            value={{
                search,
                setSearch,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContext;