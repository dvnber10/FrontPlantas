import { useMutation, useQuery } from '@tanstack/react-query'
import { CreateFamily, SearchFamily } from '../Querys/Family.query'

export function CreateFamilyData() {
  return useMutation({
    mutationKey: ['Family'],
    mutationFn: async (family) => await CreateFamily(family),
  })
}

export function GetOneFamily(name) {
  return useQuery({
    queryKey: ['KeyOneFamily'],
    enabled: !!name,
    queryFn: async () => await SearchFamily(name),
  })
}
