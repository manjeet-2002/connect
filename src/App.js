import './App.css';
import {BrowserRouter as Router, NavLink,} from 'react-router-dom'
import {motion} from "framer-motion";
import {auth} from './firebase-config'
import {useState} from 'react'

//pages import
import AnimatedPages from './pages/AnimatedPages';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse,faHandHoldingMedical,faPeopleGroup,faUser} from '@fortawesome/free-solid-svg-icons'

function App() {


  const [isAuth,setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [userName,setUserName] = useState(localStorage.getItem("username"));

  //icons
  const homeIcon = <FontAwesomeIcon icon={faHouse} size="2x" />
  const donateIcon = <FontAwesomeIcon icon={faHandHoldingMedical} size="2x"/>
  const communityIcon = <FontAwesomeIcon icon={faPeopleGroup} size="2x"/>
  const accountIcon = <FontAwesomeIcon icon={faUser} size="2x"/>



  return (
    
    <Router>

      <nav className="navbar">
        <div>

        <h1 className="logo">C<motion.span animate={{rotateY:[0,180,180,0]}}   className='o'>o</motion.span>nn.</h1>
        <h1 className="logo-small">Connect</h1>
        </div>
        
        <ul className="navbar-nav">
            
            <li className="nav-item">
                <NavLink to="/" className="nav-link">
                    <span className='home-i'>{homeIcon}</span>
                    <span className="link-text">Home</span>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/donate" className="nav-link">
                    <span className='donate-i'>{donateIcon}</span>
                    <span className="link-text">Donate</span>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/community" className="nav-link">
                    <span className='community-i'>{communityIcon}</span>
                    <span className="link-text">Community</span>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink  to="/login" className="nav-link">
                    <span className='account-i'>{accountIcon}</span>
                    <span className="link-text">Account</span>
                </NavLink>
            </li>
        </ul>
      </nav>
      
    <main className='main-content'>
        <AnimatedPages isAuth={isAuth} setIsAuth={setIsAuth} userName={userName} setUserName={setUserName} />
    </main>
    </Router>

  );
}

export default App;
