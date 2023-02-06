import {urls} from "../configs";
import {axiosService} from "./axios.service";


const adminProfileService = {
    getAdminProfile: () => axiosService.get(urls.adminProfile)
}

export {adminProfileService}
