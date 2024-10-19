import React from "react";


function ContactSection(){
    return(
        <>
        <section className="Contact">
  <div className="container">
    <div className="contact-main">
        <h2>Contact Us</h2>
        <div className="contact-input">
            <input type="text"  id="" placeholder="Full Name"  />
            <input type="email"  id="" placeholder="Email"  />
            <textarea placeholder="Enter your message"></textarea>
           <div className="contact-a"> <a href="#">Submit</a></div>
        </div>
    </div>
  </div>
   </section>
        </>
    )
}

export default ContactSection;