import { useMutation } from "@tanstack/react-query";
import { createPest } from "../Querys/Pest.query";

export function CreatePestData() {
    return useMutation({
        mutationKey: "Pest",
        mutationFn: async (newPest) => await createPest(newPest)
    });
}