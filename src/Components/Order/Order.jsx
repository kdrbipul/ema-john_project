
import { useState, useEffect } from 'react';
import OrderSummery from '../OrderSummery/OrderSummery';
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


    const [showCart, setShowCart] = useState('');
    const button = document.querySelector(".m_button");
    const closeIcon = document.querySelector(".close");
    const handleSideBar = (product) =>{
        console.log(product);
        
    }



    return (
        <>
            <div className='parent'>
                <div className='container my_grid'>
                    {
                        products.map(product=> <Product key={product.id} product={product} handleSideBar={handleSideBar}></Product>) 
                    }
                </div>
               <OrderSummery></OrderSummery>
            </div>     
        </>
        
    );
};

export default Order;