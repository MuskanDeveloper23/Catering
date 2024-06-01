import React  from "react";
import AboutImg  from "../Assets/image/food1.jpeg"

const About = () => {
   return <>
   <section className="about" id="about">
    <h1 className="heading"><span>about</span> us</h1>
    <div className="box">
    
        <div className="image">
        <img src={AboutImg} alt=" "/>
        </div>
    <div className="content">
        <h3>What Makes Our Food Special?</h3>
        <p>Food is any substance consumed to provide nutritional support and energy to an organism. It can be raw, 
            processed, or formulated  and is consumed orally by animals for growth, health,
             or pleasure. Food is mainly composed of water, lipids, proteins, and carbohydrates.
            
            <p className="pera"> Food is the basic human need to stay alive. Moreover, it is the need of every living organism. Therefore it 
             is important that we should not waste food. Our world consists of different types of cultures.</p>
             </p>
             <a href="#" className="heading">Learn More</a>
    </div>
    </div>
   </section>
   </>
}

export default About;