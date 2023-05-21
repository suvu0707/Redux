import React from 'react';
import { Saveuser,Deleteuser } from './action/myaction';
import { useSelector,useDispatch } from 'react-redux';
const Myuser = () =>{
    const alluser=useSelector(state=>state.Userlist);
    const dispatch=useDispatch();
    return(
        <div className="container text-center">
            <div className='row'>
                <div className='col-lg-12'>
                    <h3 className='text-primary'> User Management: {alluser.length} </h3>
                    <p>
                        <input type="text" id="name" placeholder='Full Name' className="m-2"/>
                        <input type="text" id="age" placeholder='Age' className="m-2"/>
                        <input type="text" id="edu" placeholder='Education' className="m-2"/>
                        <button className="btn btn-primary m-3" onClick={()=>dispatch(Saveuser())}> Save User </button>
                    </p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Education</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alluser.map((user,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{user.name}</td>
                                            <td>{user.age}</td>
                                            <td>{user.edu}</td>
                                            <td><button className='btn btn-danger' onClick={()=>dispatch(Deleteuser(index))}>Delete</button></td>
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
export default Myuser;