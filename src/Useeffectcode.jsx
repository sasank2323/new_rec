import { useEffect, useState } from "react";
import styles from './Useeffectcode.module.css';

function Useeffectcode({ color }) {

    // unmounting is nothing but hiding the component from the DOM so use display thats it 
    useEffect(() => {
        return () => {
            console.log("unmount");
        };
    }, [])
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    // this will run on updating
    useEffect(() => {
        console.log("use effect");
        setCount2(count + 1);
    }, [count]);
    // this is use effect with empty array it will run only once when the component is mounted
    // this will only run on mounting only once 
    useEffect(() => {
        console.log("use effect 20 ");
    }, []);
    //this is use effect without any array it will run every time when the component is rendered
    useEffect(() => {
        console.log("use effect 30 ");
    });

    useEffect(() => {
        console.log("use effect 40 ");
    }, [color]);

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, [count, count2]);
    // use effect hlep use to update or call a function when a state or props variable is chnaged 
    // first parameter pass the function you want to call second parameter pass the array of variables you want to watch for changes
    return (
        <>
            <div style={{ backgroundColor: color, padding: "10px", margin: "10px", borderRadius: "10px" }}>
                <p>{time}</p>
            </div>
            <h1>Useeffectcode</h1>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <button onClick={() => setCount2(count2 + 1)}>increment2</button>
            <p className={styles.heading}>{time}</p>
            <p>{count2}</p>
        </>
    );
}

export default Useeffectcode;