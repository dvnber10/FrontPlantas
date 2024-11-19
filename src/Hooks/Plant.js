import { useQuery } from "@tanstack/react-query";
import { GetAllPlants } from "../Querys/Plant.query";

export function GetPlants() {
    return useQuery({
        queryKey: [`KeyAllPlants`],
        queryFn: async () => await GetAllPlants()
    })
}