import {axiosService} from "./axios.service";
import {urls} from "../configs";

const groupsService = {
    getGroups: () => axiosService.get(urls.groups),
}

export {groupsService};
