import axios from "axios";
import { URL } from "./Plant.query";

export async function createPest(pest) {
    return await axios.post(`${URL}/Plague/insert`,
        {
            Name: pest.name,
            Description: pest.description,
            image: pest.image
        },
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
}


export async function GetAllPlague() {
    return axios.get(`${URL}/Plague/view_all`);
}