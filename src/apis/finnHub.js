import axios from "axios";


const TOKEN = "ceq8dtaad3i9f7a4pdl0ceq8dtaad3i9f7a4pdlg"


export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token: TOKEN
    }
})