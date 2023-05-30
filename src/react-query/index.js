import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    toggleFavoriteSong,
    getSongs
} from "../firebase";

export const useSongs = () => {
    const queryClient = useQueryClient();
    return useQuery([], getSongs, { queryClient });
};

export const useToggleFavoriteSong = () => {
    const queryClient = useQueryClient();
    return useMutation(toggleFavoriteSong, {
        onSuccess: (data) => {
            queryClient.invalidateQueries(["uid"]);
        },
        queryClient,
    });
};