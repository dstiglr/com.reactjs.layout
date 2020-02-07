import { notification } from 'antd';

class AppController {
    static getToken(){
        return localStorage.getItem('hotputt_token');
    }
    
    static setToken(token) {
        localStorage.setItem('hotputt_token', token);
    }
    
    static clearData() {
        localStorage.clear();
    }

    static handleCatch = err => {
        console.log('AppController.handleCatch -> ',err);
        // set loading button
        if(err.response) {
            notification.error({message: err.response.data.message});
        } else {
            notification.error({message: 'An error has been ocurred !'});
        }
    }
}

export default AppController;