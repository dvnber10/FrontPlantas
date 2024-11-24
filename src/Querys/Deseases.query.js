import axios from "axios";
import { URL } from "./Plant.query";


export async function CreateDeseases(desease) {
    console.log(URL);
    const result = axios.post(`${URL}/Diseases/insert`, {
        Name : desease.name,
        Description : desease.description,
        image: desease.image
    },
    {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }
);
    return result;
}
