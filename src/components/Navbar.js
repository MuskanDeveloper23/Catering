import React, { useRef } from 'react'
import Logo from '../Assets/image/m-logo.png'
import { card } from "../components/data";

const Navbar = () =>{
    const searchRef = useRef();
    const cardRef = useRef();
    const navbarRef = useRef();
    const searchHandler = () => {
    searchRef.current.classList.toggle("active"); 
    cardRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
    };
    
    const cardHandler = () => {
      cardRef.current.classList.toggle("active");
      searchRef.current.classList.remove("active"); 
      navbarRef.current.classList.remove("active");
    }
   
    const navbarHandler = () =>{
       navbarRef.current.classList.toggle("active");
       searchRef.current.classList.remove("active"); 
       cardRef.current.classList.remove("active");
    }
    return(
    <header className="header">
        <a href="#" className="logo">
            <img src={Logo} alt=""/>
        </a>
        <nav className="navbar" ref={navbarRef}>
        
                <a href="#">Home</a>
               <a href="#">Menu</a>
               <a href="#">Product</a>
                <a href="#">Review</a>
                <a href="#">Contact</a>
                <a href="#">Blogs</a>
            
        </nav>
        <div className="icons">
            <div className="fas fa-serch">
            <i class="fa-solid fa-magnifying-glass" onClick={searchHandler}></i>
            </div>
            <div className="fas fa-serch">
            <i class="fa-solid fa-cart-shopping" onClick={cardHandler}></i>
            </div>
            <div className="fas fa-serch" id="menu-btn"><i class="fa-solid fa-bars" onClick={navbarHandler}></i></div>
        </div>

        <div className="search-form " ref={searchRef}>
            <input type="search" placeholder="Search here ..." 
            id="search-box" />
            <label htmlFor="search-box" className=" fas fa-search"></label>
        </div>
          
        <div className="card-items-container" ref={cardRef}>
        { card.map((item,index)=> (
                <div className="card-item"key={index}>
                    <span className="fas fa-times"></span>
                    <img src={item.img} alt="" />
                    <div className="content">
                        <h3>card item 01</h3>
                        <div className="price">$15.99/-</div>
                    </div>
                </div>
            ))}
            <div className="btn">
         <a href="#">checkout now</a></div>
        </div>
    </header>
    );
};
export default Navbar