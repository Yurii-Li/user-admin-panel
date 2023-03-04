import {axiosService} from "./axios.service";
import {urls} from "../configs";

const usersService = {
    getUsers: () => axiosService.get(urls.users),
    createUser: (user) => axiosService.post(urls.users, user),
    getActivateToken: (id) => axiosService.get(`${urls.users}/${id}/re_token`),
    activateUser: (token, password) => axiosService.post(`${urls.auth.activateUser}/${token}`, {password}),
    banUser: (id) => axiosService.patch(`${urls.users}/${id}/ban`),
    unbanUser: (id) => axiosService.patch(`${urls.users}/${id}/unban`),
    userStatistic: (id) => axiosService.get(`${urls.userStatistic}/${id}`),
}

export {usersService}
