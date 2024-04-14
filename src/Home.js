import React from 'react'
import './Home.css'
import logoimg from './Images/logo1.png'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='image-container'></div>
        <div className='text-container'>
            <img src={logoimg} alt='EarthEdge Bank logo'></img>
        <h2>Welcome</h2>
        <p> Experience seamless transactions with our user friendly interface. Our dedicated support team is available 24/7 to assist you with any inquiries or concerns.</p>
        <p>Enhance your banking experience with our competitive interest rates on savings accounts. We believe in helping our customers achieve financial success.</p>
        <p>Security is our top priority. Rest assured that your personal and financial information is protected using state of encryption technologies. Focus on your goals we take care of security of your financial data.</p>
        </div>
    </div>
  )
}

export default Home
