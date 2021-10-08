export const incCounter=()=> {
    return {type:"increament"}
}

export const decCounter=()=> {
    return {type:"decrement"}
}


export const updateData =(data)=>{
    return{
        type:"updateData",
        payload:{
            data:data
        }
    }
}