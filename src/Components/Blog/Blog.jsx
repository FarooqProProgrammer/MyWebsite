import React,{useEffect, useState}from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../Re-useable Component/Button';
import {  Modal } from 'antd';
import app from '../config/FB';
import {getFirestore, addDoc ,collection,onSnapshot,doc ,getDocs,query} from "firebase/firestore"

function Blog() {
  const navigate = useNavigate();
  const db = getFirestore(app);
  const [course,setCourse] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  async function add(){
    // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "Course"), {
    course:course
  });
  console.log("Document written with ID: ", docRef.id);

  }
  // ======================= Read Courses =====================================
  async function getData(){
    const q = query(collection(db, "Course"));
    const data = [...course]
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.data());
      data.push({id:doc.id,...doc.data()})
      setCourse(data)
    });

  }
  useEffect(()=>{
    getData()
 

  },[])

  return (
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div className="bar w-full h-[80px] flex justify-around items-center" >
      <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Current Courses</h1>
      <Button  onClick={showModal} className="text-3xl font-medium title-font text-gray-900 mb-12 text-center border-2 border-[#f1c40f] py-3 pb-2 pt-2 pl-3 pr-3 hover:text-[#f1c40f] hover:border-[#000] ">Add New Course</Button>
    </div>
    <div class="flex flex-wrap -m-4">
      {course.map((item)=>{
        return(
    <div class="p-4 md:w-1/2 w-full" onClick={()=> navigate(`/CourseComponent/${item.id}`)}>
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">{item.Info} </p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="data:image/png;base64,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" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">{item.course}</span>
        
            </span>
          </a>
        </div>
      </div>

        )
      })}
 
    </div>
  </div>

      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="content w-full h-[300px] border-2 border-black flex flex-col justify-around items-center">
            <input onChange={(e)=> setCourse(e.target.value)} className='w-[80%] h-[60px] border-2 border-black'/>
            <Button onClick={add} className="border-2 border-[#f1c40f] font-black hover:text-[#f1c40f] hover:border-[#000] hover:shadow-lg" width={"300px"} height={"60px"}>ADD COURSE</Button>
        </div>  
      </Modal>
</section>
  )
}

export default Blog
