import React, { useState,useEffect } from 'react'
import {collection, deleteDoc, getDocs,doc,addDoc, updateDoc} from 'firebase/firestore'
import '../App.css'
import { auth,db } from '../firebase-config';
import {useNavigate} from 'react-router-dom'
import {Box,Typography,Modal,Fab} from '@mui/material';



function Donate({isAuth}) {
  const [contriTitle,setContriTitle] = useState("");
  const [contriType,setContriType] = useState("");
  const [contriLocation,setContriLocation] = useState("");
  const [makeContri,setMakeContri] = useState(false);
  const [makeClaim,setMakeClaim] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    
    boxShadow: 24,
  
    p:10,
    pt:2
  };
  
  const navigate = useNavigate();

  const contriCollectionRef = collection(db,"contributions");

  const [contriList,setContriList] = useState([]);

const makeContributionLive=async ()=>{
    await addDoc(contriCollectionRef, {title:contriTitle,type:contriType,location:contriLocation,claimed:false,owner:{name:auth.currentUser.displayName,id:auth.currentUser.uid}})
    setContriLocation("");
    setContriTitle("");
    setContriType("");
    setMakeContri(!makeContri);
    console.log("makeContributionLive Called");
  }

const updateClaim=async(id)=>{
  if(isAuth){
    const docRef = doc(db,"contributions",id);
    const updatedClaim = {claimed:true};
    await updateDoc(docRef,updatedClaim);
    setMakeClaim(!makeClaim);
    console.log("updateClaim if called");
  }
  else{
    navigate("/login");
    console.log("updateClaim else called");
  }
}

  useEffect(()=>{
    const getContris = async () =>{  
        const data = await getDocs(contriCollectionRef);
        setContriList(data.docs.map((doc)=> ({...doc.data(), id:doc.id})));
        console.log("getContris Called");
    };
    getContris();
  },[makeContri,makeClaim]);


  return (
    <div className='contri-page'>


        <div className='contri-header-title'>
          <hr className='hr-1'/>
          <h2>Contribute</h2>
          <hr className='hr-2'/>
        </div>

      {isAuth&&<div className='contribute'>
        <div className='contri-type'>
          <label>Type: </label>
          <input placeholder='Food, Clothes, Shoes, etc.' value={contriType} onChange={(event)=>{setContriType(event.currentTarget.value)}}/>
        </div>
        <div className='contri-title'>
          <label>Title: </label>
          <input placeholder='Enter title'  value={contriTitle} onChange={(event)=>{setContriTitle(event.currentTarget.value)}}/>
        </div>
        <div className='contri-location'>
          <label>location: </label>
          <input placeholder='Enter location'  value={contriLocation} onChange={(event)=>{setContriLocation(event.currentTarget.value)}}/>
        </div>
        
      </div>}
      <div className='contri-button'>
        {isAuth?<button onClick={makeContributionLive}>Make Contribution Live</button>:<button onClick={()=>{navigate("/login")}}>Login to start a contribution</button>}
      </div>
      

      <div className='collect-body'>

        <div className='collect-title'>
          <hr className='hr-1'/>
          <h2>Collect</h2>
          <hr className='hr-2'/>
        </div>



        <div className='collect'>
        


      {contriList.map((contri)=>{
          return (
            <div  className='collect-card' onClick={handleOpen}>  

              <div className='collect-card-header'>
                  <h3 className='collect-card-title'>{contri.title}</h3>
                  <button>Show Map</button>
              </div>
              

              <div className='collect-card-body'>
                <p>type:  {contri.type}</p>
                <p>location: {contri.location}</p>
              </div>

              <div className='collect-card-footer'>
                <p>By: {contri.owner.name}</p>
                {contri.claimed===false?<button onClick={()=>{updateClaim(contri.id)}}>Collect</button>:<p className='collected'>✅Collected</p>}
              </div>

            </div>
          )
      })
        
      }

  
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='modal-header'>
            <h1>Map</h1>
            <Fab  className='modal-close-btn' size='small' color="primary" onClick={handleClose}>
              X
            </Fab>
          </div>
          
         
        </Box>
      </Modal>


    </div>
    
  )
}

export default Donate