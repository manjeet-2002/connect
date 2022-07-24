import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
import {collection, deleteDoc, getDocs,doc} from 'firebase/firestore'
import {auth, db} from '../firebase-config'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import "../App.css";

function Community({isAuth}) {
    const deleteIcon = <FontAwesomeIcon icon={faTrash} />
    const navigate = useNavigate();
    const [postLists,setPostLists] = useState([]);
    const postsCollectionRef = collection(db,"posts");
    const deletePost = async (postID)=>{
        const postDoc = doc(db,"posts",postID);
        await deleteDoc(postDoc);
   } 
   useEffect(()=>{
        const getPosts = async () =>{
            const data = await getDocs(postsCollectionRef);
            setPostLists(data.docs.map((doc)=> ({...doc.data(), id:doc.id})));
        };
        getPosts();
    },[deletePost]);
    
   

  return (
    
   <>
<div className="community-header">
        <h1>Happy Connecting</h1>
        <button className='create-comm-post-btn' onClick={()=>{
            isAuth?navigate("/create-comm-post"):navigate("/login");
        }}>
            Create Post
        </button>
    </div>
    
<div className='community-posts'>
    


        {postLists.map((post)=>{
            return(
            <div  className='community-post'>
            
            <h2 className='comm-post-title'>{post.title}</h2>
            
            <p className='comm-post-body'>{post.postText}</p>
            <div className='post-footer'>
            <p className='post-author'>@{post.author.name}</p>

            {(isAuth&&auth.currentUser.uid===post.author.id)&&<button className='delete-button' onClick={()=>{deletePost(post.id)}}>{deleteIcon}</button>}
            </div>
            </div>
            )

        })}
        
    </div>

    </>
    
  )
}

export default Community