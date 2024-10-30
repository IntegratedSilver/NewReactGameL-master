import axios, { AxiosRequestConfig } from 'axios';



export interface FetchResponse<T> {
    count: number;
    next:string | null;
    results: T[];
  }

 const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:''
    }
})


class APIClient {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll(config: AxiosRequestConfig) {
        return axiosInstance
            .get(this.endpoint,config)
            .then(res => res.data)
    }

    ///put

    ///delete

}

export default APIClient;
