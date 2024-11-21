import { useQuery } from "@tanstack/react-query";
import { GetAllPlants, GetPlant } from "../Querys/Plant.query";

export function GetPlants() {
    return useQuery({
        queryKey: [`KeyAllPlants`],
        queryFn: async () => await GetAllPlants()
    })
}
export function GetOnePlant(id) {
    return useQuery({
        queryKey: [`keyGetPlant`],
        queryFn: async () => await GetPlant(id)
    })
}
