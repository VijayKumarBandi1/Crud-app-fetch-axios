import React, { useState, useEffect, useRef } from 'react'
import {  useNavigate } from 'react-router-dom';

import axios from 'axios';


function Edit() {
  const [name, setName] = useState([])
  const [description, setDescription] = useState([])
  const [_id, setId] = useState(null)
  const nameRef = useRef()
  let history = useNavigate()
  // var index = Employe.map((e) => { return e._id }).indexOf(_id);

  const handelSubmite = e => {
    e.preventDefault();
    const data = {
      id: _id,
      name: name,
      description: description
    }
    console.log(data)
    const url = 'https://testdemo987.herokuapp.com/todos'
   //***********************************************************************using fetch******************************************************* */ 
    fetch(url,{
        method:"PUT",
        headers:{
            'Content-Type': 'application/json',


        },
        body:JSON.stringify(data)
    }).then(r=>{
        console.log(r)
            alert("successfuly updated ")
        
    }).catch(e=>{
        console.log(e)
            alert("some thing was worng ")
    })

    //********************************************************************using axios***************************************************//
    // axios.put(`${url}`, data
    // ).then(r => {
    //   console.log(r)
    //  
    //     alert("successfuly updated ")
    //   
    // }).catch(e => {
    //   console.log(e)
    //  
    //     alert("some thing was worng ")
    //   
    // })
   

    history('/')
  }

  useEffect(() => {

    setName(localStorage.getItem('name'))
    setDescription(localStorage.getItem('description'))
    setId(localStorage.getItem('_id'))

    console.log("edit useEffect excute")
    nameRef.current.focus()
  }, [])

  return (
    <div>
      <form className='container' style={{ width: '40%' }}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} ref={nameRef} />

        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary" onClick={(e) => handelSubmite(e)}>Update</button>
      </form>
    </div>
  )
}

export default Edit
