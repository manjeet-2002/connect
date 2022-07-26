import React, {useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {addDoc, collection} from 'firebase/firestore'
import {motion} from 'framer-motion';
import {db,auth} from '../firebase-config'
function CreateCommPost({isAuth}) {

  const [title,setTitle] = useState("");
  const [postText, setPostText] = useState("");
  let navigate = useNavigate();
  const postsCollectionRef = collection(db,"posts");
  
  const createPost = async()=>{
      await addDoc(postsCollectionRef, {title,postText, author:{name: auth.currentUser.displayName, id:auth.currentUser.uid}});
    navigate("/community");
  };
  useEffect(()=>{
    if(!isAuth){
      navigate("/login");
    }
  },[])
  return (
    
    <motion.div className='createPostPage'
    initial={{width:0}}
    animate={{width:"100%", transition:{duration:0.3}}}
    exit={{x:window.innerWidth, transition:{duration:0.2}} }
    >
      <div className='cpContainer'>
        <h1>Create A Post</h1>
        <div className='inputgp'> 
          <label>Title:</label>
          <input placeholder='title...' onChange={(event)=>{setTitle(event.target.value)}} />
        </div>
        <div className='inputgp'>
          <label>Post:</label>
          <textarea placeholder='Post...' onChange={(event)=>{setPostText(event.target.value)}} />
        </div>
        <button className='submitpost' onClick={createPost}>Post</button>
      </div>
    </motion.div>
  )
}

export default CreateCommPost