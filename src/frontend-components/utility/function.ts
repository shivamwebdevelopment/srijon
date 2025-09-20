// @ts-nocheck
import axios from "axios";
const callApi = (url, method, endPoint, param)=>{
        
    switch (method){
        case 'GET': 
                return axios.get(`${url}${endPoint}/`, param)
                break;
        case 'POST': 
                return axios.post(`${url}${endPoint}/`, param)
                break;
        case 'PATCH':
                return axios.patch(`${url}${endPoint}/`, param)
                break;
        case 'DELETE':
                return axios.delete(`${url}${endPoint}/`, param)
                break;
    }

}

export default callApi;
