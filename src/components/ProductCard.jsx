import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {products} from "../api/menProductapi";

export const ProductCard = () => {

    const dispatch = useDispatch();



    const Handler = (options) => {
        dispatch({
            type : "addToCart",payload : options
        })
        toast.success("Added to cart"); 
    }

   
    return (
        <>

            <div className='productBox'>
                {products.map((i) => (

                    <div className="productCard">
                        <img src={i.img} alt="i.name" />
                        <div className='product-name'>{i.name}</div>
                        <div className="price">{i.price}</div>
                        <div className="productCategory">{i.category}</div>
                        <button className="AddToCard" onClick={()=>(Handler({name : i.name, price :i.price, quantity : i.quantity, category : i.category, img : i.img , mrp : i.mrp}))}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </>
    )
}
