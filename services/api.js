import axios from "axios"
// const BASE_URL = "https://api.tvmaze.com/search/shows"

// const axiosInstance = axios.create({ baseURL: BASE_URL })

export async function getAllMovies() {
    return await axios.get("https://api.tvmaze.com/search/shows?q=all")
}

export async function getSearchMovies(searchTerm) {
    // console.log('https://api.tvmaze.com/search/shows?q=All%20' + searchTerm.queryKey[1])
    return await axios.get('https://api.tvmaze.com/search/shows?q=All%20' + searchTerm.queryKey[1])
}