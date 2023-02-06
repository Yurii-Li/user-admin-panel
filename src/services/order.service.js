import { axiosService } from "./axios.service";
import { urls } from "../configs";

const orderService = {
    getOrdersByFilter: (params) => axiosService.get(urls.orders, { params }),
};

export { orderService };
