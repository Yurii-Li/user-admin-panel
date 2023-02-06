const baseURL = "http://127.0.0.1:8000/api/v1";

const urls = {
    auth: {
        login: `${baseURL}/auth`,
        refresh: `${baseURL}/auth/refresh`,
    },
    orders: `${baseURL}/orders`,
    adminProfile: `${baseURL}/users/my`,
    groups: `${baseURL}/groups`,
};

export { baseURL, urls };
