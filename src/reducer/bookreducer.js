
const Booklist = (state=[], action) =>{           
    //1. capture a parameter state to capture old data but bydefault here there is no data in state[] && 
    // a action parameter which will come from action file 
    const oldandnewbook = Object.assign([], state);//2.Then go to userreducer and follow the same // to captute old value from state
    if(action.type=="newbook"){                    //17.
        // oldandnewbook.unshift("My Test Book")
        oldandnewbook.unshift(action.bookname)        //18.
    }

    if(action.type=="deletebook"){
        oldandnewbook.splice(action.bookindex,1)
    }
    return oldandnewbook;
}

export default Booklist;


// Now Booklist is the function when u call it, it will return an array with length as 0 which name is oldandnewbook

//new data will come in action and old data is captured in state