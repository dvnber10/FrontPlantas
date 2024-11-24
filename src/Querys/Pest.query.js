import axios from "axios";
import { URL } from "./Plant.query";

export function createPest( pest ){
    return axios.post(`${URL}/Plague/insert`, {
        Name : pest.name,
        Description : pest.description,
        image: pest.image
    },
    {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
}