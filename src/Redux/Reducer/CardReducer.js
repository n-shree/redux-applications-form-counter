const initialState={
   list:[]
};
const cardAction=(state=initialState,action)=>{
   switch(action.type){
   case "updateData": 
   const {data}=action.payload
   return {...state,list:[
      ...state.list,{data:data}
   ]};
   default: return state;
   }
}

export default cardAction;
