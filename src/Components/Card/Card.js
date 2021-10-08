import React from 'react'
import {useSelector} from "react-redux"
function Card() {
    const cardState=useSelector((state)=>state.cardAction.list);
    console.log({cardState})
    return (
        <div className="card-container">
     {
         cardState.map(el=>{
             if(el.data.fullName && el.data.city && el.data.food && el.data.game !="")
             return(
        <div className="card">
            <p>Hii... I'm {el.data.fullName}, based out of {el.data.city}... {el.data.food} is my favourite food...and i love playing {el.data.game}..</p>
        </div>
             )
        })
        }
        </div>
    )
}

export default Card
