import React, { useState } from 'react'
import {FaBars} from "react-icons/fa"
import {AiFillCloseCircle} from "react-icons/ai"
import "./index.css"

const Header = () => {
    const [header,setHeader] = useState(false);
  return (
    <>
    <div className='header'>
            <h3>Farooq</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <FaBars size={30} className="icon" onClick={()=> setHeader(true)}/>
    </div>
    {header &&<div className="mobile_icon">
        <AiFillCloseCircle className='icons' onClick={()=> setHeader(false)}/>
    <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
    </div>}
    </>
  )
}

export default Header