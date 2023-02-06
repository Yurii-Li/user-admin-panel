import {axiosService} from "./axios.service";
import {urls} from "../configs";


const _accessTokenKey = "access";
const _refreshTokenKey = "refresh"


const authService = {
    login: (user) => axiosService.post(urls.auth.login, user),
    refresh: (refresh) => axiosService.post(urls.auth.refresh, {refresh}),

    setTokens: ({access,refresh}) => {
        localStorage.setItem(_accessTokenKey, access);
        localStorage.setItem(_refreshTokenKey, refresh);
    },
    deleteTokens: () => {
        localStorage.removeItem(_accessTokenKey);
        localStorage.removeItem(_refreshTokenKey);
    },

    getAccessToken: () => localStorage.getItem(_accessTokenKey),
    getRefreshToken: () => localStorage.getItem(_refreshTokenKey),

}


export {
    authService
}
