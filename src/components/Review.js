import React from "react";
import qouteImg from "../Assets/image/q2.png"
import { review } from "./data";
const Review = () =>{
    return <>
    <section className="review">
        <h1 className="heading">customer's<span> review </span></h1>
        <div className="box-container">
          { review.map((item, index) => (
            <div className="box2">
                <img src={qouteImg} alt=" "/>


                    <p>Food is the fuel that keeps us running throughout the day, and it also supports the body’s metabolic process and 
                        ensures we remain healthy. Children need to understand the importance of food to build healthy eating habits in the long term.
                        
                         </p>
                         <div className="image">
                <img src={item.img} alt="" />
            </div>
            <h3>customer</h3>

            <div className="stars">
            <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-solid fa-star"></i></a>
            </div>
            </div>
            
          ))}
        </div>
    </section>
    </>

    
}
export default Review;