import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import nike from "../assests/LOGO (2).png"

import { useToast ,Box} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Cart = () => {
    const toasty = useToast()



    const dispatch = useDispatch();

    const deleteHandler = (name) => {
        toasty({
            position: 'top-right',
            variant:'left-accent',
            isClosable:false,
            title:"Product removed",
            status:'error'
           
          })
        // toast.error("Product removed");
        dispatch({
            type : "deleteFromCart",
            payload : name
        })
    }

    const increment = (name) => {
        dispatch({
            type: "addToCart",
            payload: { name }
        })
    }


    const decrement = (name) => {
        dispatch({
            type: "decrement",
            payload: name
        })
    }

    const { cartItems } = useSelector(state => state.cart);
    let amount = 0;
    cartItems.forEach(element => {        
        amount += element.mrp*element.quantity
    });

    return (
        <>
            <div className="main-cart-container">
                <div className="item-container">

                    {
                        cartItems.length > 0 ? (
                            cartItems.map((i) => (


                                <ItemComponent image={i.img} name={i.name} price={i.price} quantity={i.quantity} category={i.category} increment={increment} decrement={decrement} deleteHandler={deleteHandler} />

                            ))
                        ) : (
                            "No items"
                        )
                    }
                </div>
                <aside className="claculations">
                    <div className='choti-nav'>
                        <Link to={"/"} ><img src={nike} width="40vw" alt="nike" /></Link>
                    </div>
                    <div className="details">
                        {/* <div>Subtotal : { }</div>
                        <div>Shipping : { }</div>
                        <div>Tax : { }</div> */}
                        <div className="total">Total : {amount}</div>
                    </div>
                    <button className="checkout"></button>
                </aside>
            </div>
        </>
    )
}

const ItemComponent = ({ image, name, price, quantity, category, increment, decrement, deleteHandler }) => (
    <>
        <div className="cart-item">
            <div className="imagediv">
                <img src={image} alt="ok" />
            </div>
            <div className="product-details-cart">
                <div>{name}</div>
                <div className='cartPrice'>{price}</div>
            </div>

            <div className="quantifier">
                <div className='p'>
                    <button onClick={() => (increment(name))}> + </button></div>
                <div>{quantity}</div>
                <div className='m'> <button onClick={() => (decrement(name))}> -</button></div>
            </div>

            <div className="delete-product">
                <button className="delete" onClick={() => (deleteHandler(name))}>Delete</button>
            </div>
        </div>
    </>

)

export default Cart