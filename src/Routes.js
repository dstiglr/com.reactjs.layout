import React from 'react';
import { Switch, Redirect, Route, HashRouter} from 'react-router-dom';

import { MainLayout } from './views/layouts';
import RouteController from './controllers/RouteController';
import { 
    HomeView, 
    NotFoundView,
    SignInView
} from './views';

class Routes extends React.Component {

    render(){
        return(
                <Switch>
                    <Redirect
                        exact
                        from='/'
                        to='/home'
                    />
                    
                    <RouteController
                        exact
                        layout={MainLayout}
                        component={HomeView}
                        path='/home'
                    />

                    <Route 
                        component={SignInView}
                        exact
                        path='/sign-in'
                    />
                    <Route 
                        component={NotFoundView}
                        exact
                        path='/not-found'
                    />
                    <Redirect to='/not-found'/>
                </Switch>
        );
    }
}

export default Routes;
