import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { PassToStore } from './action/myaction';
const Myapi = () =>{
    const dispatch=useDispatch();
    const[user,updateUser]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(userArray=>{
            updateUser(userArray);
        })
    },[true])
    return(
        <div className="container text-center">
            <div className='row'>
                <div className='col-lg-12'>
                    <h3 className='text-primary'> {user.length} : API Data Send To Redux Store </h3>
                    <p id="message"></p>
                    <button className='btn btn-primary m-3' onClick={ () => dispatch( PassToStore(user) ) }> Send All Data To Redux </button>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Name</th>
                                <th>Phone No</th>
                                <th>City</th>
                                <th>e-Mail</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                               user.map((info,index)=>{
                                   return(
                                       <tr key={index} className="text-center">
                                           <td>{info.id}</td>
                                           <td>{info.name}</td>
                                           <td>{info.phone}</td>
                                           <td>{info.address.city}</td>
                                           <td>{info.email}</td>
                                       </tr>
                                   )
                               })
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Myapi;