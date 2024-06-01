import React  from "react";
import { products } from "./data";
const Product = () =>{
    return <>
    <section className="products" id="products">
     <h1 className="heading">our <span> products</span></h1>
     <div className="box-container">
     {products.map((item, index)=> (
    <div className="box2">
    <div className="icons">
        <a href="#" className="fa-shopping-card"><i class="fa-solid fa-cart-shopping"></i></a>
        <a href="#" className="fa-shopping-card"><i class="fa-solid fa-heart"></i></a>
        <a href="#" className="fa-shopping-card"><i class="fa-solid fa-eye"></i></a>

    </div>
    <div className="images">
        <img src={item.img} alt=" "/>
        </div>
        <div className="content">
            <h3>fresh coffee</h3>
            </div>
            <div className="stars">
            <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-solid fa-star"></i></a>

            </div>

            <div className='price'>
                      $15.99 <span>20.99</span>
                    </div>
    </div>
     ))
     };
     </div>
    </section>
    
    </>
};
export default Product;