import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate, } from 'react-router-dom';



function Home() {
    const [list, setList] = useState([])


    const history = useNavigate()

    const url = 'https://testdemo987.herokuapp.com/todos'
    const handelDelete = (_id) => {
        console.log(_id)
         fetch(`${url}/${_id}`,{method:'DELETE'})//******************************fetch*************************** */

        // var index=list.map( (e)=> { return e._id }).indexOf(_id);
      //  axios.delete(`${url}/${_id}`)  //****************************************axios************************** */
            .then(res => {
                alert("delete success")

            }).catch(e => {
                alert("some thing was wrong")
            })
        history('/')
        // console.log(index)
        // list.splice(index,1);

    }

    const handelEdit = (_id, name, description) => {
        localStorage.setItem('_id', _id)
        localStorage.setItem('name', name)
        localStorage.setItem('description', description)
    }
    useEffect(() => {
        console.log('test')
        //---------------------*********************************using fetch*************************************---------------------------//
        fetch(url)
        .then(res => {
            console.log(res)
            return res.json()
        }).then(data => {
            console.log(data)
            setList(data)
        })

        //using----------------**************************************axios***************************************---------------------------------//
    //     axios.get(url)
    //         .then(res => {
    //             console.log(res)
    //             setList(res.data)
    //         })
    }, [])

    return (
        <Fragment>
            <h1>Indium Employees</h1>

            <table className='table table-striped table-hover table-bordered container '>
                <thead className='thead-dark"'>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.length > 0 ?
                            list.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <td>
                                            {item._id}
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.description}
                                        </td>
                                        <td>
                                            <Link to={`/edit`}>
                                                <button className='btn btn-primary' onClick={() => handelEdit(item._id, item.name, item.description)} >Edit</button>
                                            </Link>
                                            <button className='btn btn-danger' onClick={() => handelDelete(item._id)}>Delete</button>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>

                                )
                            }) :
                            "no data is available"
                    }
                </tbody>
            </table>

            <Link to={`/add`}>
                <button className='btn btn-secondary'>Add user</button>
            </Link>
        </Fragment>
    )
}

export default Home
