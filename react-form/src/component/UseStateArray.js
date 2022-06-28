import React,{useState} from 'react'

const UseStateArray = () => {
    const bioData=[
        {
            id:0, myName:"madhur", age: 21
        },{
            id:1,myName:"devansh", age: 65
        },
        {
            id:2,myName:"keshav",age: 25
        }

    ]

    const [myArray, setmyArray] = useState(bioData);
    console.log(bioData);
    const clearArray=()=>{
        setmyArray([]);
    }
    const removeElem=(id)=>{
        // alert(id)
        const myNewArray = myArray.filter((curElem)=>{
            return curElem.id !== id;
        })
        setmyArray(myNewArray);
    }
  return (
    <>
        {
            myArray.map((curElm)=>{
                return (
                <h1 className='h1style' key={curElm.id}>Name : {curElm.myName} Age: {curElm.age}
                <button className='btnInner' onClick={()=>removeElem(curElm.id)}>Remove</button>
                </h1> 
                );
            })
        }
        <button className='btn' onClick={clearArray}>Clear </button>
    </>
  )
}

export default UseStateArray