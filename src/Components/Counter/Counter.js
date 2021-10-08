import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {incCounter,decCounter} from "../../Redux/Action/Action"

function Counter() {
    const counterState=useSelector((state)=>state.counterAction);
    const dispatch=useDispatch();

    return (
        <>
     <div>
      <h1>Simple Counter</h1>
      </div>
      <div className="counter">
      <p className="counterBox">{counterState}</p>
      <button className="counterButton" onClick={()=>dispatch(decCounter())}>-</button>
      <button className="counterButton" onClick={()=>dispatch(incCounter())}>+</button>
    </div>
        </>
    )
}

export default Counter
