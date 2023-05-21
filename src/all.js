import React from 'react';
import {useSelector} from 'react-redux';        

const Myall = () =>{
    const allbook=useSelector(state=>state.Booklist);
    const alluser=useSelector(state=>state.Userlist);
    const user=useSelector(state=>state.ApiDataList);
    return(
        <div className="container text-center">
            <div className='row'>
                <div className='col-lg-12'>
                    <h3 className='text-primary'> All Data From Redux Store </h3>
                    <h5>Available Books :{allbook.length}</h5>
                    <table className="table">
                        <thead>
                            <tr> 
                                <th>Book Index</th>
                                <th>Book Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allbook.map((name,index)=>{              
                                    return(
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{name}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <br></br>
                    <h4>Available User : {alluser.length}</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Education</th>
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
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    
                    <h3>Api Users : {user.length}</h3>
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
export default Myall;