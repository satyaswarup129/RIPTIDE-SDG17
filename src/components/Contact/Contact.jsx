import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "09359e11-b91d-497a-a7e3-bdcabe8a8f3c");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>send us message <img src={msg_icon} alt=""/></h3>
            <p>We invite you to reach out to us through the contact section of our website. Your questions and feedback are important to us, and our team is here to assist you promptly.Thank you for choosing our services. We look forward to hearing from you and addressing any inquiries you may have.Best regards,[LBW]</p>
            <ul>
                <li><img src={mail_icon}alt=""/>lifeunderwater@gmail.com</li>
                <li><img src={phone_icon}alt=""/>+91-909083645</li>
                <li><img src={location_icon}alt=""/>RHR-Hostel , Cet-Campus , Ghatikia <br/>Bhubaneswar ,ODISHA ,INDIA</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type="tell" name='phone' placeholder='Enter your mobile number' required />
                <label>Write Your message here</label>
                <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>SUBMIT NOW</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact