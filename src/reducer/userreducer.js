const Userlist = (state=[], action) =>{          //3
    const oldandnewuser = Object.assign([], state);//4.THen go to main reducer and import user and book reducer // to captute old value from state
        if(action.type=="adduser"){
            oldandnewuser.push(action.userdata)
        }
        if(action.type=="deleteuser"){
            oldandnewuser.splice(action.index,1)
        }
    return oldandnewuser;
}

export default Userlist;