import React from 'react'
import "../App.css"


function Home({isAuth,userName}) {
  return (
    <div className='home-body'>
        <div className="home-header">
        <h1>Hello {userName}</h1>
        <p>welcome to connect.</p>
        </div>
    </div>
  )
}

export default Home