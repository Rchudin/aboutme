import axios, {AxiosResponse} from "axios";

const baseURL:string = "/api/sw/"

export const baseAPI = {
    initialization() {
        return axios.get(baseURL)
    },
    feedback(body:FormData, token:string) {
        return axios({
            url: '/api/sw/feedback/',
            method: 'POST',
            data: body,
            headers: {
                'X-CSRF-Token': token,
                'Content-Type': 'multipart/form-data',
            },
        })
    }
}


