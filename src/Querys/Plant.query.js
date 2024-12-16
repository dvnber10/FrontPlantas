import { api } from "./AxiosConf";

// obtain all the data of the plants
export async function GetAllPlants() {
    return api.get(`/Plants/view_all`);
}
// obtain the data of one plant by its id
export async function GetPlant(id) {
    return api.get(`/Plants/view_plant/${id}`)
}

