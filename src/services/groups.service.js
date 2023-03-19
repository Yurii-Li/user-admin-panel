import {axiosService} from "./axios.service";
import {urls} from "../configs";

const groupsService = {
    getGroups: (page) => axiosService.get(urls.groups, {params: {page}}),
    createGroup: (data) => axiosService.post(urls.groups, data),
}

export {groupsService};
