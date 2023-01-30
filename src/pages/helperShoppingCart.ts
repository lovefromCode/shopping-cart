import axios from "axios";

export const getAllProducts = () => {
    const url = `https://fakestoreapi.com/products`;
    return axios.get(url);
    // return axiosGetWrapper(url);
}