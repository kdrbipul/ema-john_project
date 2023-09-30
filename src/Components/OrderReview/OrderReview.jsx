import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OrderReview = () => {

    const products = useLoaderData();
    const Product = products.slice(0,5);

    return (
        <div className='container'>
            {
                    Product.map(product => <div className='sItem'>
                        <div className="image">
                            <img src={product.img} alt="" />
                        </div>

                        <div className="main-content">
                            <h4>{product.name}</h4>
                            <p>Price : <span>{product.price} $</span></p>
                            <p>RatingsCount : <span>{product.ratingsCount}</span></p>
                        </div>
                    </div>)
                }
        </div>
    );
};

export default OrderReview;