import React, { useEffect, useState } from 'react';
import { getAllProductsCategories, getCategoryProducts } from '../api/products';

const HomeView = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('laptops');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllProductsCategories().then(data => setCategories(data))
    }, [])

    useEffect(() => {
        setLoading(true);
        setProducts([]);
        getCategoryProducts(selectedCategory).then((data) => {
            setProducts(data.products)
            setLoading(false);
        })
    }, [selectedCategory])

    // show data from state;
    return (
        <div>
            <h1>Bekaar Ecommerce</h1>

            <select
                value={selectedCategory}
                name="categories_selector"
                id="#categories_selector"
                onChange={(ev) => setSelectedCategory(ev.target.value)}
            >
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            {selectedCategory && <p>Selected Category: {selectedCategory}</p>}
            {loading && <div>Loading.....</div>}
            {!loading && <div id='products_container'>
                {products.map((product: any) => (
                    <div key={product.id} className='product'>
                        <img src={product.images[0]} alt='' />
                        <span>{product.title}</span>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default HomeView;