import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OrderReview = () => {

   const product = useLoaderData();
   const Product = product.slice(0,5)

    return (
        <div className="cart-container">
                <div className="cart-left">
                {/* {
                    Product.map(product=><div className='cart_info'>

                    </div>)
                } */}
                </div>

                
        </div>
    );
};

export default OrderReview;