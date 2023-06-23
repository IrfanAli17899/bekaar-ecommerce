import axios from './axios';

export const getAllProductsCategories = async () => {
    // api fetching 
    const { data } = await axios.get('/products/categories');
    return data;
}

export const getCategoryProducts = async (category: string) => {
    // api fetching 
    const { data } = await axios.get(`/products/category/${category}`);
    return data;
}