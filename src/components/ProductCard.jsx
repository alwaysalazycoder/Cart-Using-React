import React from 'react'
import {products} from "../api/menProductapi";

export const ProductCard = () => {

    const Handler = (name, price, quantity, category) => {
        console.log(name);
        console.log(price);
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
                        <button className="AddToCard" onClick={Handler(i.name, i.price, i.quantity, i.category)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </>
    )
}
