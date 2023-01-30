import React from 'react'
import { Link } from 'react-router-dom'
import men from "../assests/xxx.png"
import men2 from "../assests/New/featured.jpg"

const Home = () => {
    return (
        <>

            <div className='men-navbar'>
                <div className='men-font'>
                    Men
                </div>
                <div className='men-nav-links'>
                    <Link to={"https://www.nike.com/in/w/mens-shoes-nik1zy7ok"}>Shoes</Link>
                    <Link to={"https://www.nike.com/in/w/mens-shoes-nik1zy7ok"}>Clothing</Link>
                    <Link to={"https://www.nike.com/in/w/mens-shoes-nik1zy7ok"}>Gear</Link>
                </div>
            </div>


          
            <div className='men-text-1'>
                <p className='one'>
                    Nike Invincible
                </p>
                <p className="two">
                    FEEL IT TO BELIEVE IT
                </p>
                <p className="three">
                    Introducing light weight Zoom - x cushioning through every mile
                </p>
                <button className="men">
                    Shop
                </button>
            </div>

            
            <div className='men-photo'>
                <img src={men} alt="dfa" />
            </div>
            <div className='men-text-1'>
                <p className='one'>
                    Nike Featured
                </p>
                <p className="two">
                    Jordan x paris saint german
                </p>
                <p className="three">
                    The new Jordan x paris saint german collection draws on the light that paris shines on the world stage
                </p>
                <button className="men">
                    Shop
                </button>
            </div>
            
            <div className='men-photo'>
                <img src={men2} alt="dfa" />
            </div>

            
        </>

    )
}

export default Home