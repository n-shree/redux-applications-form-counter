const initialState=0;
const counterAction=(state=initialState,action)=>{
   switch(action.type){
   case "increament": return state+1;
   case "decrement": return state-1;
   default: return state;
   }
}

export default counterAction;
