import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import AppController from '../controllers/AppController'

class RouteController extends React.Component {
    
    render() {
        const {layout: Layout, component: Component, ...rest} = this.props;
        return (
        <Route
            {...rest}
            render = {matchProps => (
                AppController.getToken() ? 
                <Layout {...matchProps}>
                    <Component {...matchProps} />
                </Layout>
                :
                <Redirect to={{pathname:'/sign-in', state: { from: this.props.location}}} />
            )}
        />
        );
    }
}
export default RouteController;