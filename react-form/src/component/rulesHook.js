import React,{useState} from 'react'

const RulesHook = () => {
    const [myName,setMyName]=useState('madhur');
  return (
    <div>
        <h1>{myName}</h1>
    </div>
  )
}

export default RulesHook