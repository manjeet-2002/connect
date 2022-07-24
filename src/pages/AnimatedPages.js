import React from 'react'
import {Routes,Route,useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion';

import Home from './Home';
import Login from './Login';
import Community from './Community';
import Donate from './Donate'
import CreateCommPost from "./CreateCommPost";

function AnimatedPages({isAuth,setIsAuth,userName,setUserName}) {
    const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home isAuth={isAuth} userName={userName} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} isAuth={isAuth} userName={userName} setUserName={setUserName} />} />
        <Route path="/community" element={<Community isAuth={isAuth}/>} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/create-comm-post" element={<CreateCommPost isAuth={isAuth}/>} />
      </Routes>
      </AnimatePresence>
  )
}

export default AnimatedPages