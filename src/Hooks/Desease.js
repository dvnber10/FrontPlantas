import { useMutation, useQuery } from '@tanstack/react-query'
import { CreateDeseases, GetAllDiseases } from '../Querys/Deseases.query'

export function CreateDeseasesData() {
    return useMutation({
        mutationKey: 'Deseases',
        mutationFn: async (desease) => await CreateDeseases(desease)
    });
}

export function GetDisease() {
    return useQuery({
        queryKey: [`KeyAllDiseases`],
        queryFn: async () => await GetAllDiseases()
    })
}