import React,{Suspense, useContext, useEffect, useState} from 'react';
import routes from "./routes";
import {HashRouter, Route, Switch} from 'react-router-dom';
import FullScreenLoadingIndicator from './Components/UI/Loading/FullScreenLoadingIndicator';
import DefaultLayout from './Containers/DefaultLayout';
import PlayersContext from './Contexts/PlayersContext';
import { getNbaPlayers } from './Services/Services';

const AppRoutes = () => {

    const [loading, setLoading] = useState(true);
    const playersContext = useContext(PlayersContext)

    const getNbaData = async () => {
        setLoading(true);
        try {
            const players = await getNbaPlayers();
  
            playersContext.setPlayers(players);
        } catch(error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
  
    useEffect(() => {
        getNbaData();
    }, []);

    if (loading) {
        return <FullScreenLoadingIndicator/>
    } else {
        return (
            <HashRouter>
                <Suspense fallback={<FullScreenLoadingIndicator/>}>
                    <Switch>
                        {routes.map((route, idx) => (
                            <Route 
                                key={idx} 
                                path={route.path} 
                                exact={route.exact} 
                                name={route.name}
                                render={props => (<route.component {...props} />)}
                            />
                        ))}

                        <Route path="/" name="Home" component={DefaultLayout}/>

                    </Switch>
                </Suspense>
            </HashRouter>
        )
    }
}

export default AppRoutes;