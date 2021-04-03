import './Contacts.scss'
import React, {useState} from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function Contacts() {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validateEmail = event => {
    const inputValue = event.currentTarget.value;
    const isValid = inputValue.search(emailRegExp) !== -1;

    setIsValidEmail(isValid);
  }

  const getContactsForm = () => {
    const emailClassName = isValidEmail ? 'user-email' : 'user-email not-valid';

    return <div className="contacts-form-container">
    <form className="contact-form" onSubmit={() => {}}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder='Enter your name' className='user-name'/>
      <label>Email</label>
      <input type="email" name="user_email" placeholder='Enter your email'
             className={emailClassName} onChange={validateEmail}/>
      <label>Message</label>
      <textarea name="message" className='textarea' placeholder='Enter your message'/>
      <input type="submit" value="Get in touch!" className='submit'/>
    </form>
    </div>
  }

  return <div className="contacts">
    <Header/>
    <div className='contacts-container'>
      <div className='title'>Contact dzook</div>
      <div className='contacts-about'>Contact us about anything related to dzook.
        We'll do our best to get back to you as soon as possible.
      </div>
      {getContactsForm()}
    </div>
    <Footer/>
  </div>
}

export default Contacts;
