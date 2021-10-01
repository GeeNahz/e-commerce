import { useState } from "react";
import { useHistory } from "react-router-dom";



const Contact = ({ products }) => {


  const [fullName, setFullName] = useState("");
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/');
    return console.log("Form submitted")
  }


  return (

      <div className="contact" id="page views">
        <div className="abt">
          <h2>Send your email to us</h2>
          <form action="submit" id="contact-form" onSubmit={handleSubmit} >

            <label htmlFor="name">Full Name:</label>
            <input type="text" name="name" id="name" value={ fullName } onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" />

            <label htmlFor="number">Phone Number:</label>
            <input type="text" name="number" value={ num } onKeyPress={(e) => {
              if(!/[0-9]/.test(e.key)){
                e.preventDefault();
              }
            }} onChange={(e) => setNum(e.target.value)} placeholder="Phone Number" />

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={ email } onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

            <label htmlFor="subject">Subject:</label>
            <input type="text" name="subject" value={ subject } onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />

            <label htmlFor="mess">Your Message:</label>
            <textarea type="textarea" name="mess" className="message" form="contact-form" value={ message } onChange={(e) => setMessage(e.target.value)} placeholder="Your Message Here" />

            <div className="btn">
              <input type="submit" name="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
  );
}

export default Contact;
