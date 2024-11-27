import { useMutation, useQuery } from "@tanstack/react-query";
import { createPest, GetAllPlague } from "../Querys/Pest.query";

export function CreatePestData() {
    return useMutation({
        mutationKey: ["Pest"],
        mutationFn: async (newPest) => await createPest(newPest)
    });
}

export function GetAllPlaga(){
    return useQuery({
        queryKey: ["KeyAllPlague"],
        queryFn: async () => await GetAllPlague()
    });
}
