import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OrderReview = () => {

    const products = useLoaderData()
    const Product = products.slice(0,5);

    return (
        <div className='container'>
            {
                    Product.map(product => <div className='sItem'>
                        <div className="imagee">
                            <img src={product.img} alt="" />
                        </div>

                        <div className="main-content">
                            <h4>{product.name}</h4>
                            <p>Price : <span>{product.price} $</span></p>
                            <p>RatingsCount : <span>{product.ratingsCount}</span></p>
                        </div>

                        {/* <div className="delate-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                            <path d="M21.9865 29.5357H23.4598C23.6551 29.5357 23.8425 29.4581 23.9806 29.32C24.1188 29.1818 24.1964 28.9945 24.1964 28.7991V15.5402C24.1964 15.3448 24.1188 15.1575 23.9806 15.0193C23.8425 14.8812 23.6551 14.8036 23.4598 14.8036H21.9865C21.7912 14.8036 21.6038 14.8812 21.4657 15.0193C21.3275 15.1575 21.2499 15.3448 21.2499 15.5402V28.7991C21.2499 28.9945 21.3275 29.1818 21.4657 29.32C21.6038 29.4581 21.7912 29.5357 21.9865 29.5357ZM32.0535 8.91072H26.9949L24.9078 5.43025C24.6459 4.99382 24.2754 4.63268 23.8324 4.38203C23.3894 4.13138 22.889 3.99976 22.38 4H16.1913C15.6825 3.99997 15.1824 4.13169 14.7396 4.38233C14.2968 4.63297 13.9265 4.99399 13.6647 5.43025L11.5764 8.91072H6.51779C6.25731 8.91072 6.0075 9.01419 5.82331 9.19838C5.63912 9.38257 5.53564 9.63238 5.53564 9.89286V10.875C5.53564 11.1355 5.63912 11.3853 5.82331 11.5695C6.0075 11.7537 6.25731 11.8571 6.51779 11.8571H7.49993V32.4821C7.49993 33.2636 7.81036 34.013 8.36292 34.5656C8.91548 35.1181 9.66492 35.4286 10.4464 35.4286H28.1249C28.9064 35.4286 29.6558 35.1181 30.2084 34.5656C30.7609 34.013 31.0714 33.2636 31.0714 32.4821V11.8571H32.0535C32.314 11.8571 32.5638 11.7537 32.748 11.5695C32.9322 11.3853 33.0356 11.1355 33.0356 10.875V9.89286C33.0356 9.63238 32.9322 9.38257 32.748 9.19838C32.5638 9.01419 32.314 8.91072 32.0535 8.91072ZM16.0839 7.12506C16.1167 7.07042 16.1631 7.02524 16.2186 6.99393C16.2742 6.96262 16.3369 6.94625 16.4006 6.94643H22.1707C22.2343 6.94636 22.2969 6.96277 22.3523 6.99408C22.4077 7.02538 22.454 7.07051 22.4868 7.12506L23.5586 8.91072H15.0127L16.0839 7.12506ZM28.1249 32.4821H10.4464V11.8571H28.1249V32.4821ZM15.1115 29.5357H16.5848C16.7801 29.5357 16.9675 29.4581 17.1056 29.32C17.2438 29.1818 17.3214 28.9945 17.3214 28.7991V15.5402C17.3214 15.3448 17.2438 15.1575 17.1056 15.0193C16.9675 14.8812 16.7801 14.8036 16.5848 14.8036H15.1115C14.9162 14.8036 14.7288 14.8812 14.5907 15.0193C14.4525 15.1575 14.3749 15.3448 14.3749 15.5402V28.7991C14.3749 28.9945 14.4525 29.1818 14.5907 29.32C14.7288 29.4581 14.9162 29.5357 15.1115 29.5357Z" fill="#EB5757"/>
                            </svg>
                        </div> */}

                    </div>)
                }
        </div>
    );
};

export default OrderReview;