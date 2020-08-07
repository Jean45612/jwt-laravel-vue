import axios from "axios";

import "@/services/interceptor-api"; //EL INTERCEPTOR ME PERMITE VALIDAR LOS SOLICITUDES Y RESPUESTAS DE MIS PETICIONES API

export default {

    get(url, urlParams = '') {

        let params = '';

        if (urlParams) {
            params = '/' + urlParams;
        }

        return axios.get(url + params).then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error.response));
    },

    post(url, body) {
        return axios.post(url, JSON.stringify(body)).then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error.response));
    },

    put(url, urlParams, body) {
        return axios.put(url + '/' + urlParams, JSON.stringify(body)).then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error.response));
    },

    delete(url, urlParams) {
        return axios.delete(url + '/' + urlParams).then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error.response));
    }
}
