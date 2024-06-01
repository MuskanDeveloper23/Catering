import React from 'react'
import { menu } from './data';
const Menu = () =>{
    return <>
  <section className="menu" id="menu">
    <h1 className="heading">our<span>  menu</span></h1>


    <div className="box-container">
        
           { menu.map((item, index)=>(
                <div className="box2" key={index}>
                    <img src={item.img} alt=''/>
                    <h3>testy and healdy</h3>
                    <div className='price'>
                      $15.99 <span>20.99</span>
                    </div>
                    <a href='#' className='btn'>add to card</a>
                </div>
           ))
        }
    </div>
  </section>
    </>
}
export default Menu;