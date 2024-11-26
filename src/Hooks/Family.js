import { useMutation } from '@tanstack/react-query';
import { CreateFamily } from '../Querys/Family.query'

export function CreateFamilyData(){
    return useMutation({
        mutationKey: 'Family',
        mutationFn: async (family) => await CreateFamily(family)
    });
}

