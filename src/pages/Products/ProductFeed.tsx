import React, { useState, useEffect, useContext } from 'react';
import Product from './Product';
import { getAllProducts } from "../helperShoppingCart";
import { IProduct } from '../../model/Product';

function ProductFeed() {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        getAllProducts().then(res => {
            console.log(res);
            setProducts(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div className='max-w-screen-2xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {/* {new Array(20).fill(0).map(x => <Product />)} */}
            {products.map(product => <Product {...{ product }} />)}
        </div>
    )
}

export default ProductFeed