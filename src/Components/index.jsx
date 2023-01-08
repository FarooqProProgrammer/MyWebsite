import React ,{useState,useEffect}from 'react'
import Button from '../../Re-useable Component/Button'
import "./index.css"
import {  Modal,Form, Input ,Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {getStorage,ref,uploadBytes } from "firebase/storage"
import app from '../config/FB';
const Student = () => {
    const [name,setName] =useState("");
    const [Email,setEmail] =useState("");
    const [Phone,setPhone] =useState("");
    const [image,setImage] = useState(null);
    const storage = getStorage(app);

    const ImageUpload = async ()=>{
                    // Create a reference to 'mountains.jpg'
            const mountainsRef = ref(storage, image);
            const storageRef = ref(storage, `images/${image}`);
            // 'file' comes from the Blob or File API
            uploadBytes(storageRef, mountainsRef).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            });

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
    const props = {
        action: '//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',
        previewFile(file) {
          console.log(file.name)
          setImage(file.name)
      
        },
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
      <Form.Item
            label="Upload Image"
            name="Upload Image"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
            <Input type='file' onChange={(e)=> setImage(e.target.files[0].name)}/>
      </Form.Item>
     
    
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
     
    </Form>
        </Modal>

    </div>
  )
}

export default Student