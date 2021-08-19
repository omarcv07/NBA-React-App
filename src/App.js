import React from 'react';

// Routes
import AppRoutes from './AppRoutes';

// Contexts 
import { SearchContextProvider } from './Contexts/SearchContext'
import { PlayersContextProvider } from './Contexts/PlayersContext';

const App = () => (
  <PlayersContextProvider>
    <SearchContextProvider>
      <AppRoutes />
    </SearchContextProvider>
  </PlayersContextProvider>
);


export default App;
