import React from 'react';
import { Savebook,Deletebook } from './action/myaction';   //19
import {useSelector,useDispatch} from 'react-redux'        //20
const Mybook = () =>{
    const allbook=useSelector(state=>state.Booklist);      //21. You can get entire data from the bookreducer
    const dispatch=useDispatch();                          //22.You can dispatch the action under the store
    return(
        <div className="container text-center">
            <div className='row'>
                <div className='col-lg-6 offset-3'>
                    <h3 className='text-primary'> Book Management : {allbook.length} </h3>   
                    <p>
                        Enter Book Name : <input type="text" id="newbook"/>
                        <button className="btn btn-primary m-3" onClick={()=>dispatch(Savebook())}> Save Book </button>  
                        {/* 23. When u click,dispatch will call, then dispatch will call Savebook,and Savebook will return object.
                        That object come to dispatch and dispatch send it directly to store  */}
                    </p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Book Index</th>
                                <th>Book Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allbook.map((name,index)=>{               //24
                                    return(
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{name}</td>
                                            <td><button className='btn btn-primary' onClick={()=>dispatch(Deletebook(index))}>Delete</button></td>
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
export default Mybook;


//useSelector is a hook function which is used to bring data from a store
//useDispatch is a hook function which is used to send data to a store

//Under the book.js file, useSelector is directly bringing to store and
//under the store your data is wrapped insise the state and inside state,
//there is a multiple reducer maintaing the data and it want the bookreducer and finally there is no data due to it is a empty array


//you canot call directly usedispatch.you have to create a object of usedispatch