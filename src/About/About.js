import './About.scss'
import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function About() {
  const imageURL = process.env.PUBLIC_URL + '/assets/images/team.png';

  return <div className="about">
    <Header/>
    <div className='about-container'>
      <p className='title'>About Us</p>
      <p>
        Dzook is where the magic happens! Try mixing art with technology and you will get an amazing result. This is what we did while creating dzook.
        dzook is an online platform that allows you to convert your images and videos into illustrated portraits and animated videos with just one click thanks to its AI technology. By offering different and fantastic art styles dzook makes it possible to get mind-blowing and unique results every time.
      </p>
      <p className='title'>Our Team</p>
      <p>
        We are a creative team of AI engineers and illustrators that together has created an AI algorithm that learned to draw illustrated portraits just like us! Our goal is to integrate art into everyday life by making mobile photography and video even more fun for the users.
      </p>
      <div className='team-image-container'>
        <img src={imageURL} alt=""/>
      </div>
      <p className="title">Our Values</p>
      The values we share in our team are: <br/>

      <p><b>Act with integrity:</b>  We’re honest, open, transparent, and committed to doing what’s best for our users and our company.</p>

      <p><b>Enjoy the journey:</b> We make sure to enjoy the work we do and to get the most fun out of the whole process. We do everything to make our team members feel valued and appreciated.</p>

      <p><b>Make a difference every day:</b> We constantly do our best to improve every day by overcoming new challenges, coming up with new solutions, and working step up step towards a bigger goal.</p>

      <p><b>Start with the user:</b> Our users are our top priority. Every day we’re hyper-focused on improving our product to make them love it even more. We put ourselves in our users’ shoes and try to make their experience better.</p>

      <p><b>Deliver outstanding results:</b> Our goal is to create something great by fostering innovation and team collaboration, a product that will show how great the mix of art and technology can be.</p>
    </div>
    <Footer/>
  </div>
}

export default About;
