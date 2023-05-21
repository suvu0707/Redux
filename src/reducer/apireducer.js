const ApiDataList=(state=[],action)=>{
    var olddata=Object.assign([],state);     
    if(action.type=="myapi"){
        olddata=(action.alldata)     //due to data came from api so push() not required
    }
    return olddata;
}

export default ApiDataList;