import apiClient from '../apiClient';

const PRODUCTS_URL = '/register';

export const getProduct = () => apiClient.get(PRODUCTS_URL);

export const addProduct = (data) =>
  apiClient.post(PRODUCTS_URL, JSON.stringify(data));
