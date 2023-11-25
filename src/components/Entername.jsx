;import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Entername = ({choices, handleChoiceClick}) => {
  const [data,setData]=useState({
    name:''
    })
    const dispatch=useDispatch()
    const register=()=>{
        dispatch({
          type:'USERNAME',
          payload:data.name
        })
        handleChoiceClick(choices[0].nextScene)
    }
  return (
    <div>
       <h1>Enter your name</h1>
       <input type="text" name="name" id="name" value={data.name} onChange={(e)=>setData({...data, name:e.target.value})} /> <br />
        <button onClick={register}>Submit</button>
        <ul> 
   
    </ul>
    </div>
  )
}

export default Entername

