import axios from "axios";
const url = `https://hamd.loko.uz/api`;

const token = window.localStorage.getItem("@token");

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const requests = {
  authLogin: (username) => axios.post(`${url}/operator/sign-in`, username),
  fetchCategory: () => axios.get(`${url}/operator/category?type=product`),
  fetchFoods: (id) => axios.get(`${url}/operator/product?category_id=${id}`),
  fetchCouriers: (params) =>
    axios.get(`${url}/operator/couriers-way`, { params, ...config }),
  fetchOrders: (params) =>
    axios.get(`${url}/operator/orders`, { params, ...config }),
};
export default requests;
