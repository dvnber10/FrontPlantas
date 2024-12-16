import { api } from "./AxiosConf";

export async function createPest(pest) {
    return await api.post(`/Plague/insert`,
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


// view something the plagues
export async function GetAllPlague() {
    return await api.get(`/Plague/view_all`);
}

// view one plague
export async function OnePlague(id)
{
    return await api.get(`/Plague/view_plague/${id}`);
}
