import { combineReducers } from "redux";  //7. Which is a predefined func

import Booklist from "./bookreducer";  //5
import Userlist from "./userreducer";  //6
import ApiDataList from "./apireducer";


const Mainreducer = combineReducers({       //8. Under combine reducer we will pass a  object in the form of single dimentional array
    Booklist , Userlist,ApiDataList                    
})

export default Mainreducer;  //9. Then we create a file for store/mystore.js in src folder



// combineReducers combines more than one reducer at a time