import axios, { AxiosResponse } from "axios";

const baseURL: string = "/api/"

export const baseAPI = {
    initialization() {
        return axios.get(`${baseURL}feedback`)
    },
    feedback(body: FormData, token: string) {
        return axios({
            url: `${baseURL}feedback`,
            method: 'POST',
            data: body,
            headers: {
                'X-CSRF-Token': token,
                'Content-Type': 'multipart/form-data',
            },
        })
    },
    fetchGithubRepositories() {
        return axios.get(`https://api.github.com/users/rchudin/repos`, {
            headers: {
                "Accept": "application/vnd.github.mercy-preview+json"
            }
        })
    },
}
