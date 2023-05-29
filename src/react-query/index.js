import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    toggleFavoriteSong,
    getUserInfo,
    getSongs
} from "../firebase";

export const useSongs = () => {
    const{data} = useQuery( [],getSongs)
    return {data};
};

export const useToggleFavoriteSong = () => {
    const queryClient = useQueryClient();
    return useMutation(toggleFavoriteSong, {
        onSuccess: (data) => {
            queryClient.invalidateQueries(["uid"]);
        },
    });
};

export const useUserInfo = () => {
    return useQuery({
        queryKey: ["uid"],
        queryFn: getUserInfo,
        initialData: {},
    });
};