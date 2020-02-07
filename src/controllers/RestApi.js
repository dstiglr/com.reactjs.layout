import axios from 'axios';

export const RestApi = axios.create({
    //baseURL:"http://localhost:3030/api/v1",
    baseURL:"https://hotputt.net/hotputt/api/v1",
    headers: {'Content-Type': 'application/json'}
});

export const LOGIN = "/manager/login";
export const LOGOUT = "/manager/logout";
export const ACCOUNT = "/manager/account";
