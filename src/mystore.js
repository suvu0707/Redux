import { createStore,applyMiddleware } from "redux";  //10.
import logger from "redux-logger";

import Mainreducer from "./reducer/mainreducer"; //11

const Mystore = createStore(Mainreducer,applyMiddleware(logger));   //12. create a constant store

export default Mystore;  
//13. Then we give Mystore variable to the provider which takecare of your data in a store(12.upperline)and 
//go the index.js file to import the store



//A store can not be handled directly. It can handled by a Provider. So we import the store in index.js file and handover the store to Provider