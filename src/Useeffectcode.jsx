
import { useEffect, useState } from "react";
function Useeffectcode() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        console.log("use effect");
        setCount2(count + 1);
    }, [count]);
    // this is use effect with empty array it will run only once when the component is mounted
    useEffect(() => {
        console.log("use effect 20 ");
    }, []);
    //this is use effect without any array it will run every time when the component is rendered
    useEffect(() => {
        console.log("use effect 30 ");
    });
    // use effect hlep use to update or call a function when a state or props variable is chnaged 
    // first parameter pass the function you want to call second parameter pass the array of variables you want to watch for changes
    return (
        <>
            <h1>Useeffectcode</h1>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <button onClick={() => setCount2(count2 + 1)}>increment2</button>
            <p>{count}</p>
            <p>{count2}</p>
        </>
    );
}

export default Useeffectcode;