
import { useState, useEffect } from 'react';
import Product from '../Products/Product';

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
            <div>
                {
                   products.map(product=> <Product key={product.id} product={product}></Product>) 
                }
            </div>
        </>
        
    );
};

export default Order;