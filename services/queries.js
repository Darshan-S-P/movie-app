import { useQuery } from "@tanstack/react-query";
import { getAllMovies, getSearchMovies } from "./api";

export function useGetAllMovies() {
    return useQuery({
        queryKey: ['get-all-movies'],
        queryFn: getAllMovies,
    })
}

export function useGetSearchMovies(searchTerm) {
    return useQuery({
        queryKey: ['get-search-movies', searchTerm],
        queryFn: (term) => getSearchMovies(term)
    })
}
