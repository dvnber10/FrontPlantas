import axios from "axios";

export const URL= "https://backplants-bahcajbnhchabudu.canadacentral-01.azurewebsites.net/api";

export async function GetAllPlants() {
    const result = axios.get(`${URL}/Plants/view_all`);
    return result;
}
export async function GetPlant(id) {
    return axios.get (`${URL}/Plants/view_plant/${id}`) 
}