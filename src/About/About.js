import './About.scss'
import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function About() {
  const imageURL = process.env.PUBLIC_URL + '/assets/images/team.png';

  return <div className="about">
    <Header/>
    <div className='about-container'>
      <p className='title'>Our Team</p>
      <p>With Reward.HR your employees will be able to send eCards to their peers and celebrate achievements that matter instantly and hassle-free!
        Our designers will create branded eCards that will match your goals and benefits.
        With Reward.HR your employees will be able to send eCards to their peers and celebrate achievements that matter instantly and hassle-free! Our designers will create branded eCards that will match your goals and benefits.
      </p>
      <div className='team-image-container'>
        <img src={imageURL} alt=""/>
      </div>
      <p className="title">About</p>
      <br/>
      With Reward.HR your employees will be able to send eCards to their peers and celebrate achievements that matter instantly and hassle-free!
      <br/><br/>
      Our designers will create branded eCards that will match your goals and benefits.
      With Reward.HR your employees will be able to send eCards to their peers and celebrate achievements that matter instantly and hassle-free! Our designers will create branded eCards that will match your goals and benefits.
      <br/><br/>
      Our designers will create branded eCards that will match your goals and benefits.
      With Reward.HR your employees will be able to send eCards to their peers and celebrate achievements that matter instantly and hassle-free! Our designers will create branded eCards that will match your goals and benefits. Our designers will create branded eCards that will match your goals and benefits.
      With Reward.HR your employees will be able to send eCards to their peers and celebrate achievements that matter instantly and hassle-free! Our designers will create branded eCards that will match your goals and benefits.
      <br/><br/><br/><br/>
      With Reward.HR your employees will be able to send eCards to their peers and celebrate achievements that matter instantly and hassle-free!
      Our designers will create branded eCards that will match your goals and benefits.
      With Reward.HR your employees will be able to send eCards to their peers and celebrate achievements that matter instantly and hassle-free! Our designers will create branded eCards that will match your goals and benefits.
    </div>
    <Footer/>
  </div>
}

export default About;
