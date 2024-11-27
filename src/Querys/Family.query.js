import axios from "axios";

const URL= "https://backplants-bahcajbnhchabudu.canadacentral-01.azurewebsites.net/api";
//create method for create family
export async function CreateFamily(family) {
    console.log(URL);
    const result = axios.post(`${URL}/Family/insert`, {
        Name : family.name,
        Description : family.description,
    },
    {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }
);
    return result;
}


