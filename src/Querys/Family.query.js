import { api } from "./AxiosConf";

//create method for create family
export async function CreateFamily(family) {
    const result = await api.post(`/Family/insert`,
        {
            family // data for family of form
        },
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
    );
    return result;
}

// request family for name
export async function SearchFamily(name) {
    return await api.get(`/Family/view_family_name/${name}`);
}
