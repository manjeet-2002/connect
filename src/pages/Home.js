import React from 'react'
import "../App.css"


function Home({isAuth,userName}) {
  return (
    <div className='home-body'>
        <div className="home-header">
        <h1>Hello {userName}</h1>
        <p>welcome to connect.</p>
        <blockquote>"In every community there is work to be done. In every nation, there are wounds to heal. In every heart there is power to do it."</blockquote>
        </div>
        <div className='scroll-one'>
          <h2>What is Connect?</h2>
          <p>Connect is a platform where you can make a difference in the lives of people around you.</p>
          <h2>Our vision</h2>
          <p>Our vision is to make sure that no one sleeps hungry. We aim at redistrubution of resources from the ones who have them in access to the ones who are in need for the same.</p>
        </div>
    </div>
  )
}

export default Home