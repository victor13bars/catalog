import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://getlens-master.stage.dev.family/api/pages/obektivy'
})

