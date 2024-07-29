import React, { useEffect, useState } from 'react';
import api from '../api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await api.get('/products');
            setProducts(response.data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
