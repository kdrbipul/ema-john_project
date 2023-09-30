
import { useState } from 'react';
import { BiCartAdd } from 'react-icons/bi';
import "./Products.css"
const Product = ({product,handleAddToCart}) => {
    // console.log(product);
    const {img,name,seller,price,ratings} = product;
    const [style,setStyle] = useState();
    setStyle({
        width:'18rem'
    })

    return (
        <>
        
        <div className='my-5 py-1 my_product'>
            <div className="card g-col-4 my_card" style={style}>
                <div className=''>
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <p className="card-text">Company : {seller}</p>
                    <p className="card-text">Price : ${price}</p>
                    <p className="card-text">Ratings : {ratings}</p>
                    <button href="#" className="btn btn-outline-warning w-100 s_button" onClick={()=>handleAddToCart (product)}>Add To Card <BiCartAdd></BiCartAdd> </button>
                </div>
            </div>
           
        </div>
    </>
    );
};

export default Product;