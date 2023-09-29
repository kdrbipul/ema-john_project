import React from 'react';
import './OrderSummery.css'
import { GrClose } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';

const OrderSummery = () => {
    return (
        <>
            <div className="testy bg-warning">
                <div className="testy-content">
                    {/* <i className="check"><AiOutlineCheck></AiOutlineCheck></i> */}
                    <div className="message">
                        <span className="text text-1">Order Summery</span>
                        <span className="text text-2">Selected Items: 1</span>
                        <span className="text text-2">Total Price: $ </span>
                        <span className="text text-2">Total Price: $ </span>
                        <span className="text text-2">Total Shipping Charge: $ </span>
                        <span className="text text-2">Tax: $ </span>
                        <h2 className="text text-2">Grand Total: $ </h2>
                        <button className="m_button">Clear Cart <RiDeleteBin6Line></RiDeleteBin6Line></button>
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