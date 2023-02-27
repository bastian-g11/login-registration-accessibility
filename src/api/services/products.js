import axiosClient from '@/api/apiClient';

const PRODUCTS_URL = '/register';

export function getProduct() {
  return axiosClient.get(PRODUCTS_URL);
}

export function addProduct(data) {
  return axiosClient.post(PRODUCTS_URL, JSON.stringify(data));
}
