module.exports = validation =>{
const empty = value =>{
    if(typeof value == 'string' && !value.trim()){
        return true
    }else{
       
        return false 
    }
}
return {empty}
}


