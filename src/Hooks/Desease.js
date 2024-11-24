import { useMutation } from '@tanstack/react-query'
import { CreateDeseases } from '../Querys/Deseases.query'

export function CreateDeseasesData() {
    return useMutation({
        mutationKey: 'Deseases',
        mutationFn: async (desease) => await CreateDeseases(desease)
    });
}