import React,{useState}from 'react';
import './App.css';
import RulesHook from './component/rulesHook';

const App=()=>{
    // const [myName, setMyName]=useState('Hello There');

    // const changeName=()=>{
    //     // let val=myName;
    //     if(myName==='Hello There')
    //     setMyName('I got Clicked!');
    //     else
    //     setMyName('Hello There');
    // }
    return(
        <div>
            {/* <h1>{myName}</h1>
            <button className="btn" onClick={changeName}>Click Me!</button> */}
            <RulesHook />
        </div>
    )
}
export default App