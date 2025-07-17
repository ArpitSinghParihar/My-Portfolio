import React from 'react'
import './ContactMe.css'
import theme from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const ContactMe = () => {
    
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d56906d3-7deb-4a1f-bb25-4e40f71713a2");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
          alert(data.message)
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>parihararpit455@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>(+91)9691380973</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Bhopal, MadhyaPradesh</p>
                        </div>
                    </div>
                </div>
                    <form onSubmit={onSubmit} className='contact-right'>
                        <label htmlFor="Your Name">Enter Your Name : </label>
                        <input type="text" id="Your Name" placeholder='Enter your name' name='name' required/>
                        <label htmlFor="Your Email">Enter Your Email : </label>
                        <input type="email" id="Your Email" placeholder='Enter your email' name='email' required/>
                        <label htmlFor="message">Write your message here : </label>
                        <textarea name="message" id='message' rows='8' placeholder='Enter your message'></textarea>
                        <button type='submit' className="contact-submit">Submit now</button>
                    </form>
            </div>
        </div>
    )
}

export default ContactMe
