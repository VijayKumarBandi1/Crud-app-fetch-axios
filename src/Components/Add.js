import React, { useState, useRef, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';

import axios from 'axios'

function Add() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const nameRef = useRef()
    let history = useNavigate()

    const handelSubmite = e => {
        e.preventDefault();
        const data = {
            name: name,
            description: description
        }
        console.log(data)
        const url = 'https://testdemo987.herokuapp.com/todos'
        //*************************************************************using fetch************************************************************//
        fetch(url,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                

            },
            body:JSON.stringify(data)
        }).then(r=>{
            console.log(r)
           
                alert("successfuly added ")
            
        }).catch(e=>{
            console.log(e)
                alert("some thing was worng ")
        })

        //**************************************************************using axios**************************************************//
        // axios.post(url, data
        // ).then(r => {
        //     console.log(r)
        //    
        //         alert("successfuly added ")
        //     
        // }).catch(e => {
        //     console.log(e)
        //     
        //         alert("some thing was worng ")
        //     
        // })

        
        history('/')
    }
    useEffect(() => {
        nameRef.current.focus()
    }, [])

    return (
        <div>
            <form className='container' style={{ width: '40%' }}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" required onChange={e => setName(e.target.value)} ref={nameRef} />

                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" placeholder="Enter Description" required onChange={e => setDescription(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={e => handelSubmite(e)}>Submit</button>
            </form>
        </div>
    )
}

export default Add
