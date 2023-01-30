import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../../components/Navbar';
import ProductFeed from './ProductFeed';


function Products() {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <ProductFeed />
        </div>
    )
}

export default Products;