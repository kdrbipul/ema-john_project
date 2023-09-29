
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


    const [cart, setCart] = useState([]);

    
    const handleAddToCart = (product) =>{
        // console.log(product);
        const newCart =[...cart, product]; 
        setCart(newCart);
        
    }



    return (
        <>
            <div className='parent'>
                <div className='container my_grid'>
                    {
                        products.map(product=> <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>) 
                    }
                </div>
               <OrderSummery cart={cart}></OrderSummery>
            </div>     
        </>
        
    );
};

export default Order;