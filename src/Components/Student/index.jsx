import React ,{useState,useEffect}from 'react'
import Button from '../../Re-useable Component/Button'
import "./index.css"
import {  Modal,Form, Input ,Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {getStorage,ref,uploadBytes,getDownloadURL } from "firebase/storage"
import app from '../config/FB';
import {addDoc,collection, getFirestore} from "firebase/firestore"

import { useParams } from 'react-router-dom';
const Student = () => {
    const [name,setName] =useState("");
    const [Email,setEmail] =useState("");
    const [Phone,setPhone] =useState("");
    const [image,setImage] = useState(null);
    const [url,setURL] = useState(null);
    const storage = getStorage(app);
    const {id} = useParams();
    const db = getFirestore(app);

    const ImageUpload = async ()=>{
                    // Create a reference to 'mountains.jpg'
            const mountainsRef = ref(storage, image);
            const storageRef = ref(storage, `images/${image}`);
            // 'file' comes from the Blob or File API
            uploadBytes(storageRef, mountainsRef).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            });

            getDownloadURL(storageRef).then((downloadURL) => {
              console.log('File available at', downloadURL);
              setURL(downloadURL)
            });

    }

    const AddStudent = async ()=>{
      // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, `/Course/${id}/Students`), {
      name: name,
      Email: Email,
      Phone:Phone
      // url:url
    });
    console.log("Document written with ID: ", docRef.id)
    }
    useEffect (()=>{
        ImageUpload()
    },[image])
    
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
    
    const [form] = Form.useForm();

    const onFinish = values => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    
  return (
    <div>
        <div className="AddStudent">
            <h4>Add Student </h4>
            <Button onClick={showModal} className={"w-[100px] h-[60px] border-2 border-black"}>ADD</Button>
        </div>



        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
      form={form}
      name="student-registration"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[{ required: true, message: 'Please input your full name!' }]}
       
      >
        <Input  onChange={(e)=> setName(e.target.value)}/>
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input  onChange={(e)=> setEmail(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input  onChange={(e)=> setPhone(e.target.value)}/>
      </Form.Item>
      {/* <Form.Item
            label="Upload Image"
            name="Upload Image"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
            <Input type='file' onChange={(e)=> setImage(e.target.files[0].name)}/>
      </Form.Item>
      */}
    
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={AddStudent}>
          Register
        </Button>
      </Form.Item>
     
    </Form>
        </Modal>

    </div>
  )
}

export default Student