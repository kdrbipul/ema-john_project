
import { useState, useEffect } from 'react';
import Product from '../Products/Product';
import "./Order.css"

const Order = () => {
   
    const [products, setProducts] = useState([]);


    useEffect(()=>{
        fetch("products.json")
        .then(r=>r.json())
        .then(d=>setProducts(d))
    },[])
    console.log(setProducts);


    
    
    
    return (
        <>
            <div className='parent'>
                <div className='container my_grid'>
                    {
                    products.map(product=> <Product key={product.id} product={product}></Product>) 
                    }
                </div>
                <div className="toast">
                    <h1>Order Summery</h1>
                </div>
            </div>     
        </>
        
    );
};

export default Order;