import './App.css'
import {useEffect, useState, useRef} from 'react'

function Current()
{
    const inputref=useRef();
    const [amt,setamt]=useState(0);
    const [bal,setbal]=useState(amt);
    useEffect(()=>{
        setbal(amt);
    },[amt])
    return(
     <div className='current'>
        <div className='squ'>
            <div className='amt'>
                <h4>{amt}</h4>
                <h4>{bal}</h4>
            </div>
        </div>
        <div className='sal'>
            <input type='number' required="" ref={inputref}></input>
            <br></br>
            <button onClick={()=>{setamt(inputref.current.value)}}>sumbit</button>
            <br></br>
            <input type='number' required="" onChange={(e)=>{setbal(amt-e.target.value)}}></input>
        </div>
     </div>
    );
}
export default Current;