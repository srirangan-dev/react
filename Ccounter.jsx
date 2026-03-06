import { useEffect, useState } from "react";


function Counter(){
    const [count,SetCount]=useState(0);

    function inc(){
        SetCount(c=> c+1);
        SetCount(c=> c+1);
        

    }

    function dec(){
        SetCount(c=> c-1);
        SetCount(c=> c-1);
    }

    useEffect(()=>{
        console.log(count);
    },[count]);





    return(
        <>
        <h2 className="m-5" >{count}</h2>
        <button className="mx-5" onClick={inc}>UP</button>
        <button className="mx-5" onClick={dec}>dec</button>
        
        </>
    )
}

export default Counter;
