import { api } from "./AxiosConf";

export async function CreateDeseases(desease) {
    console.log(desease)
    return await api.post(`/Diseases/insert`, {
        Name: desease.name,
        Description: desease.description,
        image: desease.image
    },
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
    );
}

export async function GetAllDiseases() {
    return await api.get(`/Diseases/view_all`);
}

export async function DiseaseOne(id) {
    return await api.get(`/Diseases/view_disease/${id}`);
}