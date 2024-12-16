import { api } from "./AxiosConf";

//create method for create family
export async function CreateFamily(family) {
    const result = api.post(`/Family/insert`,
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


