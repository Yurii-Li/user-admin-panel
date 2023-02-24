import { axiosService } from "./axios.service";
import { urls } from "../configs";

const orderService = {
    getOrdersByFilter: (params) => axiosService.get(urls.orders, { params }),
    patchOrder: (id, data) => axiosService.patch(`${urls.orders}/${id}`, data),
    addOrderComment: (id, data) => axiosService.post(`${urls.orders}/${id}/comments`, data),
    getExcel: (params) => axiosService.get(`${urls.orders}/excel`, { params }),

};

export { orderService };
