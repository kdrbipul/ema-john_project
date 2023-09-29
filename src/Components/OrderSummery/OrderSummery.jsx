import React from 'react';
import './OrderSummery.css'
import { GrClose } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';

const OrderSummery = ({cart,handleClearCart}) => {
    
    let total = 0; let shipping = 0; let quantity = 0;
    for(const product of cart){
        total = total + (product.price * product.quantity)
        shipping = shipping + product.shipping;
    }
    let tax = +((total * 0.1).toFixed(2));
    let Gtotal = (total + shipping + tax)
    return (
        <>
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
                        <button className="m_button">Review Order <AiOutlineArrowRight></AiOutlineArrowRight></button>
                    </div>
                    <span className="close"><GrClose></GrClose></span>
                    <div className="progress"></div>
                </div>
            </div>
        </>
    );
};

export default OrderSummery;