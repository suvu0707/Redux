
export const Savebook=()=>{                     //18. then go to book reducer
    var bookinfo={
        type:"newbook",
        // bookname:"My Test Book",
        bookname:document.getElementById("newbook").value    //25
    };
    return bookinfo;
}

export const Deletebook=(index)=>{
    var bookinfo={
        type:"deletebook",
        bookindex:index
    }
    return bookinfo;
}

export const Saveuser=()=>{
    var userinfo={
        type:"adduser",
        userdata : {
            name:document.getElementById("name").value,
            age:document.getElementById("age").value,
            edu:document.getElementById("edu").value
        }
    }
    return userinfo;
}

export const Deleteuser=(index)=>{
    var userinfo={
        type:"deleteuser",
        userindex:index
    }
    return userinfo;
}

export const PassToStore=(apidata)=>{
    var userinfo={
        type:"myapi",
        alldata: apidata
    };
    document.getElementById("message").innerHTML="All Api Data Sent To Store Successfully"
    return userinfo;
}