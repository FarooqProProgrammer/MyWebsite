import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Blog from '../Components/Blog/Blog'
import Footer from '../Components/Footer/Footer'
import Gallery from '../Components/Gallery'
import Button from '../Re-useable Component/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Navbar/>
        <Hero/>

        {/* ===================== Course Section ==================== */}
        <div className="w-full h-[100px] border-2 border-[#f1c40f] font-black hover:border-[#000] hover:text-[#f1c40f]  cursor-pointer flex justify-around items-center">
          <h4>Sylani Offers Many Courses For It and Many Fields</h4>
          <Button
          onClick={()=> navigate("/Course")}
          width="190px" height={"60px"} className={"border-2 border-[#f1c40f] font-black hover:border-[#000] hover:text-[#f1c40f] "}>Go To Course Section</Button>  
        </div>
        <Footer/>
    </div>
  )
}

export default Home