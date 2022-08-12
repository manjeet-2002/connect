import React, { useEffect } from 'react'
import "../App.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'

function Home({isAuth,userName}) {
  const downArrow = <FontAwesomeIcon icon={faArrowDown} size="4x" />

  useEffect(()=>{
    Aos.init({duration:1000});
  },[]);

  return (
    <div className='home-body'>
        <div className="home-header">
        <h1>Hello {userName}</h1>
        <p>welcome to connect.</p>
        <blockquote>"In every community there is work to be done. In every nation, there are wounds to heal. In every heart there is power to do it."</blockquote>
        <span className='down-arrow'>{downArrow}</span>
        </div>
        <div data-aos="fade-right" className='scroll-one'>
          <h2>What is Connect?</h2>
          <p>Connect is a platform where you can make a difference in the lives of people around you.</p>
          <h2>Our vision</h2>
          <p>Our vision is to make sure that no one sleeps hungry. We aim at redistrubution of resources from the ones who have them in access to the ones who are in need for the same.</p>
        </div>
    </div>
  )
}

export default Home