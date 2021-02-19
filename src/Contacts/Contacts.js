import './Contacts.scss'
import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function Contacts() {

  const getContactsForm = () => {
    return <div className="contacts-form">
      <input type="textarea"
             name="textValue"
             onChange={() => {}}
      />
    </div>
  }

  return <div className="contacts">
    <Header/>
    <div className='contacts-container'>
      <div className='title'>Contact dzook</div>
      <div className='contacts-about'>Contact us about anything related to dzook.
        We'll do our best to get back to you as soon as possible.</div>
    </div>
    {getContactsForm()}
    <Footer/>
  </div>
}

export default Contacts;
