
import React from "react";
import { useState } from "react";
export default function Counter(){
     let[count,SetCount]=useState(10);
    // let count =0;

    function IncCounter(){
        SetCount(count+1);
        SetCount(count-1);
        // console.log(count);
        
    }
    return(
        <>
           <h1>State in react</h1>
           <h4>press then Button to increment and decrement  </h4>
          <h3>count={count}</h3> 
            <button onClick={IncCounter}>counter increment</button>
            <button onClick={IncCounter}>counter increment</button>
        </>

    
    );

}
