import {refresh} from '../../controllers/History';
import AppController from '../../controllers/AppController';
import { RestApi, ACCOUNT, LOGOUT } from '../../controllers/RestApi';

export const types = {
    UPDATE_AUTH: 'hotputt/auth/SIGN_IN'
};

export const actions = {
    setAuth: (user) => dispatch => {
        dispatch({type: types.UPDATE_AUTH, payload: user});
        // store on local storage
        AppController.setToken(user.token);
        refresh.push('/');
    },

    signOut: () => dispatch => {
        const token = AppController.getToken();
        dispatch({type: types.UPDATE_AUTH, payload: {}});
        AppController.clearData();
        
        // logout request
        RestApi.post(LOGOUT, {token})
        .then( response => {
            console.log(response.data);
            refresh.push('/');
        })
        .catch( err => {
            refresh.push('/');
        });
    },

    getAuth: () => dispatch => {
        const token = AppController.getToken();
        RestApi.post(ACCOUNT, {token})
        .then( response => {
            const user = response.data.data;
            dispatch({type: types.UPDATE_AUTH, payload: user});
        })
        .catch(err => {
            console.log(err);
            AppController.handleCatch(err);
        });

    }
};