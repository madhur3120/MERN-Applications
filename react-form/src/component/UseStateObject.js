import React,{useState} from 'react'

const UseStateObject = () => {
  const [myObject, setmyObject] = useState({myName: "madhur", myAge: 20, degree: "BCom"});
  const changeObject=()=>{
    setmyObject({...myObject, myName : "pari"});
  }
  return (
    <div>
        <h1 className='h1style'>Name: {myObject.myName} Age: {myObject.myAge} Degree: {myObject.degree}</h1>
        <button className='btn' onClick={changeObject}>Update</button>
    </div>
  )
}

export default UseStateObject