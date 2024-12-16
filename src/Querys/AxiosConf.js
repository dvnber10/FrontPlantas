import axios from "axios";

// utility functions for connecting to the server
export const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`
});