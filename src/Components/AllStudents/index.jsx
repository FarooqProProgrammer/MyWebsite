import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import app from '../config/FB';
import { doc, getFirestore, onSnapshot,collection,query } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { Input } from 'antd';

export const AllStudents = () => {
    const db = getFirestore(app);
    const [Search,seSearch] = useState("")
    const {id} = useParams();
    console.log(id);
    const [document,setDocument] = useState([]);
    
    async function data(){
        const q = query(collection(db, `/Course/${id}/Students/`));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const cities = [...document];
            querySnapshot.forEach((doc) => {
                cities.push(doc.data());
            });
            console.log( cities);
            setDocument(cities)
            });


    }
    useEffect(()=>{
        data()

    },[])
  return (
    <div>
        {/* <Input placeholder='Search Student With Name' onChange={(e)=> seSearch(e.target.value)}/> */}
    <Table striped bordered hover className='w-full '>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {document.map((item,index)=>{

            return (
            <tr>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.Email}</td>
            <td>{item.Phone}</td>
            </tr>
            )
        })}
        
       

      </tbody>
    </Table>
    </div>
  )
}
