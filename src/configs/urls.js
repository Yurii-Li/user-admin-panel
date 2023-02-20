const baseURL = "http://127.0.0.1:8000/api/v1";

const urls = {
    auth: {
        login: `${baseURL}/auth`,
        refresh: `${baseURL}/auth/refresh`,
        activateUser: `${baseURL}/auth/activate`,
    },
    orders: `${baseURL}/orders`,
    adminProfile: `${baseURL}/users/my`,
    groups: `${baseURL}/groups`,

    users: `${baseURL}/admin/users`,
};

export {baseURL, urls};
