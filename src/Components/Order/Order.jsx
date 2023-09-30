import { useState, useEffect } from 'react';
// import OrderSummery from '../OrderSummery/OrderSummery';
import { BiCartAdd } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
// import Product from '../Products/Product';
import "./Order.css"
import { Link } from 'react-router-dom';

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
    let total = 0; let shipping = 0; let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + (product.price * product.quantity)
        shipping = shipping + product.shipping;
    }
    let tax = +((total * 0.1).toFixed(2));
    let Gtotal = (total + shipping + tax)


    const button = document.querySelectorAll('.m_button');
    button.forEach(button =>{
        button.addEventListener("click",(e)=>{
            e.preventDefault();
            button.classList.add("animate");
        
            setTimeout(()=>{
                button.classList.remove("animate");
            }, 600) //1s = 1000ms
        })
    })


    const handleClearCart = () => {
        setCart([]);
    }


    const Sbutton = document.querySelectorAll(".s_button");
    // console.log(Sbutton);
    const closeIcon = document.querySelector(".close");
    // console.log(closeIcon);
    const Testy = document.querySelector(".testy")
    Sbutton.forEach(button =>{
        button.addEventListener("click", (e) =>{
            e.preventDefault();
            Testy.classList.add("active");
        });
        
        closeIcon.addEventListener("click",(e)=>{
            e.preventDefault();
            Testy.classList.remove("active");
        });
    })


    return (
        <>
            <div className='parent'>
                <div className='container my_grid'>
                    {
                        products.map(product=> <div key={product.id} product={product} handleAddToCart={handleAddToCart}>
                            <div className='my-5 py-1 my_product'>
                                <div className="card g-col-4 my_card" style={{width: "18rem"}}>
                                    <div className=''>
                                        <img src={product.img} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Name : {product.name}</h5>
                                        <p className="card-text">Company : {product.seller}</p>
                                        <p className="card-text">Price : ${product.price}</p>
                                        <p className="card-text">Ratings : {product.ratings}</p>
                                        <button href="#" id='s_button' className="btn btn-outline-warning w-100 s_button" onClick={()=>handleAddToCart (product)}>Add To Card <BiCartAdd></BiCartAdd> </button>
                                    </div>
                                </div>
           
                            </div>
                        </div>) 
                    }
                </div>
               {/* <OrderSummery cart={cart} handleClearCart={handleClearCart}></OrderSummery> */}
                <div className="testy bg-warning">
                    <div className="testy-content">
                        {/* <i className="check"><AiOutlineCheck></AiOutlineCheck></i> */}
                        <div className="message">
                            <span className="text text-1">Order Summery</span>
                            <span className="text text-2">Selected Items: {cart.length}</span>
                            <span className="text text-2">Total Price: $ {total} </span>
                            <span className="text text-2">Shipping Charge: ${shipping} </span>
                            <span className="text text-2">Tax: ${tax} </span>
                            <h2 className="text text-2">Grand Total: ${Gtotal} </h2>
                            <button className="m_button" onClick={()=> handleClearCart()}>Clear Cart <RiDeleteBin6Line></RiDeleteBin6Line></button>
                            <button className="m_button"><Link to="/order-review" className='text-white text-decoration-none'>Review Order<AiOutlineArrowRight></AiOutlineArrowRight></Link></button>
                        </div>
                        <span className="close"><GrClose></GrClose></span>
                        <div className="progress"></div>
                    </div>
                </div>
            </div>     
        </>
        
    );
};

export default Order;