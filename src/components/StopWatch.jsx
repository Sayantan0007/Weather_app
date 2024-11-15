import { useEffect, useRef, useState } from "react";
import TimerHeader from "./2ndHeader";
const StopWatch = () => {
  const [time,setTime] = useState(0);
  const [isRunning,setIsRunnig] = useState(false);
  const intervalId = useRef(null);
  const startTimeRef = useRef(0);
  
  useEffect(() =>{
    if(isRunning){
      intervalId.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () =>{
      clearInterval(intervalId.current);
    }

  },[isRunning]);
  const start = () =>{
    setIsRunnig(true);
    startTimeRef.current = Date.now() - time;
  }
  const stop = () =>{
    setIsRunnig(false);
  }
  const reset = () =>{
    setTime(0);
    setIsRunnig(false);
  }
  const formatTime = () =>{
    // console.log(time);
    let hours = Math.floor(time / (60 * 60 * 1000));
    let minutes =Math.floor(time / (60 * 1000))% 60;
    let seconds =Math.floor(time / (1000))% 60;
    // console.log(hours);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
    
  }

  return <div className="container">
    <TimerHeader />
    <div className="display">{formatTime()}</div>
    <div className="controls">
      <button className="start btn btn-success" onClick={start}>Start</button>
      <button className="stop btn btn-danger" onClick={stop}>Stop</button>
      <button className="reset btn btn-primary" onClick={reset}>Reset</button>
    </div>
  </div>;
};
export default StopWatch;
