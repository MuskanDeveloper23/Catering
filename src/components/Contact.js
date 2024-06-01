import React from 'react'

const Contact = () =>{
    return <>
    <section className='contact' id='contact'>
        <h1 className='heading'> contact <span> us</span></h1>
        <div className='row'>
        <iframe  class='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.529268503516!2d77.02346817500218!3d28.463603291732774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e4f0d5e7d3%3A0xe846704aaeba0bfd!2sSurya%20Hotel%20gurugram%20bus%20stand!5e0!3m2!1sen!2sin!4v1717132655078!5m2!1sen!2sin"  referrerpolicy="no-referrer-when-downgrade"  allowFullScreen='' loading='lazy'></iframe>
        <form>
            <h3>get in touch</h3>
            <div className='inputBox'>
                <span className='fas fa-user'></span>
                <input type='text' placeholder='name' />
            </div>

            <div className='inputBox'>
                <span className='fas fa-envelope'></span>
                <input type='email' placeholder='email' />
            </div>

            <div className='inputBox'>
                <span className='fas fa-phone'></span>
                <input type='number' placeholder=' number' />
            </div>
            <button type='submit' value="contact now" className='btn'>contact now </button>
        </form>
        </div>
    </section>
    
    </>
}
export default Contact;