import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal } from 'antd';
import { Input } from 'antd';
import Button from 'react-bootstrap/Button';
import "./index.css";
import app from "../config/FB"
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import {getFirestore,addDoc,collection} from "firebase/firestore";

function Navbar() {
  const auth = getAuth(app);
  // const db = getFirestore(app);
  const [click, setClick] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Credential,setCredential] = useState(false);
  const [userName,setUserName] = useState(null);
  const [Password,setPassword] = useState(null);
  const [Email,setEmail] = useState(null);


  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleClick = () => setClick(!click);

  const createUser = () => {
    createUserWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // Add(Email,userName)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  // const Add = async (Email,userName) =>{
  //   const docRef = await addDoc(collection(db, "Users"), {
  //     Email:Email,
  //     Name:userName
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
           <img className="w-[50px] h-[50px] mt-4 cursor-pointer" src="data:image/jpeg;base64,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" alt="" srcset="" />
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Donations"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Donations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Education"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Service"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <button onClick={showModal} className="w-[100px] h-[49px] border-2 border-[#ffdd40] text-[#ffdd40] hover:decoration-[#ffdd40] hover:border-black hover:text-black">Login</button>
        </div>


        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className="w-full h-[400px] border-2 border-black">
          <div className="BTN-GROUP flex">
              <button className="w-[50%] bg-[#3498db] text-white" onClick={()=> setCredential(false)}>LOGIN</button>
              <button className="w-[50%] bg-[#3498db] text-white" onClick={()=> setCredential(true)}>SIGNUP</button>
          </div>
          <div className="w-full h-[348px] border-2 border-black flex flex-col justify-around items-center">

            {Credential === false ?
              <>
              <Input onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email" className="w-[80%] h-[50px] " />
              <Input onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password" className="w-[80%] h-[50px] " />
              <Button variant="secondary">Login</Button>  
              </>
              :
              <>
                <Input onChange={(e)=> setUserName(e.target.value)} placeholder="Enter User Name" className="w-[80%] h-[50px]"/>
                <Input onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email" className="w-[80%] h-[50px] " />
                <Input onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password" className="w-[80%] h-[50px] " />
              <Button variant="secondary" onClick={createUser}>Signup</Button>  
              </>
              
            }
          </div>

          </div>
        </Modal>
      </nav>
    </>
  );
}

export default Navbar;