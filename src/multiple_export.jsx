import { useState } from "react";
function First() {
    let [count, setCount] = useState(0);
    return (
        <>
            {/* state are nothing but when we update the value of state it will re-render the component */}
            <h1>first</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </>
    );
}

function Second() {
    let s = 30;
    let user_obj = {
        name: "john",
        age: 30,
        city: "new york"
    }
    let arr = [1, 2, 3, 4, 5];
    function showAlert() {
        alert("hello");
    }
    return (
        <>
            <p>{s}</p>
            <p>{user_obj.name}</p>
            <p>{user_obj.age}</p>
            <p>{user_obj.city}</p>
            <h1>second</h1>
            <p>{arr[0]}</p>
            {/* here we have to pass the function definition not calling if you pass calling it will go to infinite loop */}
            <button onClick={showAlert}>alert</button>
        </>
    );
}

export { First, Second };

export const varr = "https://www.google.com";