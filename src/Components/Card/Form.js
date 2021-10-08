import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {updateData} from "../../Redux/Action/Action"


function Form() {

  const [fullName,setFullName]=useState('');
  const [city,setCity]=useState('');
  const [food,setFood]=useState('');
  const [game,setGame]=useState('');
 
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    setFullName('');
    setCity('');
    setFood('');
    setGame('');
  }
       const dispatch=useDispatch();
    return (
        <div className="form">
    <form onSubmit={handleSubmit}>
  <p>Message Card</p>
  <p>
    <label>Your Name</label><br />
    <input type="text" name="fullname" value={fullName} onChange={(e)=>setFullName(e.target.value)} required />
  </p>
  <p>
    <label>City</label><br />
    <input type="text" name="city" value={city} onChange={(e)=>setCity(e.target.value)} required />
  </p>
  <p>
    <label>Favourite Food</label><br />
    <input type="text" name="food" value={food} onChange={(e)=>setFood(e.target.value)} required />
  </p>
  <p>
    <label>Game you love</label><br />
    <input type="text" name="game" value={game} onChange={(e)=>setGame(e.target.value)} required />
  </p>
  <p>
    <button type="submit" onClick={()=>dispatch(updateData({fullName,city,food,game}))}>Submit</button>
    <button type="reset">Reset form</button>
  </p>
</form>
</div>
    )
}

export default Form
