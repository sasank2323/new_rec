import { useRef } from "react";

function RefHook() {
    // use ref is used to store the value that will not be re-rendered when the component is re-rendered
    // use ref is used to access the DOM elements thats why not recomeneded to use
    // use states 
    const inputRef = useRef(null);
    const itemRef = useRef(null);
    function handleClick() {
        inputRef.current.style.color = "red";
        inputRef.current.style.backgroundColor = "yellow";
    }
    function handleItemClick() {
        itemRef.current.innerHTML = "sai";
    }
    return (
        <>
            <h1 ref={inputRef}>ref hook</h1>
            <button onClick={handleClick}>focus</button>
            <h2 ref={itemRef}>hello</h2>
            <button onClick={handleItemClick}>change</button>

        </>
    );
}

export default RefHook;