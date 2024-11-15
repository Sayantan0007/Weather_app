import Header from "./Header";
import { useEffect, useState } from "react";

function Date1(){
  const[date, setDate] = useState(new Date());
  useEffect (() =>{
    const timerID = setInterval(() => {
      setDate(new Date());
    },1000)
    return () =>{
      clearInterval(timerID);
    }
  },[])

  return <>
   <Header />
    <p>This is the current time: {date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
  </>
}
export default Date1;