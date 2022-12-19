import './App.css';
import React,{useState} from 'react';

function App() {
  let time = new Date().toLocaleTimeString();

  const state = useState();

  const [uptime,setTime] = useState(time);

  

  const updateTime =()=>{
    time = new Date().toLocaleTimeString();
    setTime(time);
  }

  setInterval(updateTime,1000);
  return (
    <>
    <div id='myTime'>
    <h1 className='heading'>My Digital Clock</h1>
    <h1 className='timing'>{uptime}</h1>
    </div>
    </>
  );
}
export default App;
