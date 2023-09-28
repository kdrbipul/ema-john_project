import React from 'react';
import { BiCartAdd } from 'react-icons/bi';
import "./Products.css"
const Product = ({product}) => {
    // console.log(product);
    const {img,name,seller,price,ratings} = product;
    return (
        <>
        
        <div className='my-5 py-1 my_product'>
            <div className="card g-col-4 my_card" style={{width: "22rem"}}>
                <div className=''>
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <p className="card-text">Company : {seller}</p>
                    <p className="card-text">Price : ${price}</p>
                    <p className="card-text">Ratings : {ratings}</p>
                    <a href="#" className="btn btn-outline-warning w-100">Add To Card <BiCartAdd></BiCartAdd> </a>
                </div>
            </div>
           
        </div>
    </>
    );
};

export default Product;