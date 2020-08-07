import axios from "axios";
import Token from "@/services/token";
import router from '@/router/index'

//INTERCEPTOR REQUEST

axios.interceptors.request.use(
    config => {
        const token = Token.getToken();
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        config.headers['Content-Type'] = 'application/json;charset=utf-8';
        return config;
    },
    error => {
        return Promise.reject(error)
    });

//INTERCEPTOR RESPONSE

axios.interceptors.response.use((response) => {
    return response
}, function (error) {
    if (error.response.status == 401) { //SI EL ERROR ES POR TOKEN
        Token.remove();
        router.push({ name: "login" });
    }

    return Promise.reject(error);
});
