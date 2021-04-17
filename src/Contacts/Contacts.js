import './Contacts.scss'
import React, {useState} from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function Contacts() {
  const [response, setResponse] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validateEmail = event => {
    const inputValue = event.currentTarget.value;
    const isValid = inputValue.search(emailRegExp) !== -1;

    setIsValidEmail(isValid);
    setResponse('');
  }

  const submitData = async event => {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const message = event.target[2].value;

    const response = await fetch('https://dzook.ai/email/contact', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        description: message,
        subject: '0'
      }),
    }).then(res => {
      return res.json(); //error here
    }).then(data => {
      const success = data['success'];
      const message = success ? 'Thank you for contacting us.' : 'Please fill out all required fields.';

      if (success) {
        event.target[0].value = '';
        event.target[1].value = '';
        event.target[2].value = '';
      }

      setResponse(message);
    }).catch(error => {
      setResponse('Please fill out all required fields.');
    });
  }

  const getResponseText = () => {
    const className = (response && response.includes('required')) ? 'response-text error' : 'response-text';

    return <div className={className}>{response}</div>
  }

  const getContactsForm = () => {
    const emailClassName = isValidEmail ? 'user-email' : 'user-email not-valid';

    return <div className="contacts-form-container">
      {getResponseText()}
      <form className="contact-form" method="post" onSubmit={submitData}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder='Enter your name' className='user-name'
               onChange={() => setResponse('')}/>
        <label>Email</label>
        <input type="email" name="user_email" placeholder='Enter your email'
               className={emailClassName} onChange={validateEmail}/>
        <label>Message</label>
        <textarea name="message" className='textarea' placeholder='Enter your message'
                  onChange={() => setResponse('')}/>
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
