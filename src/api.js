import axios from 'axios';

const fetchProducts = () => {
    return axios.get('/products.json');
};

export default {
    fetchProducts
};

