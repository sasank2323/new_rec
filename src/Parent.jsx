import Child from "./Child";
import { useContext } from "react";
import { Counter } from "./ContextData";


function Parent() {
    // we are writing function in parent and passing it to child because to reduce the code duplication
    // we can also write function in child and pass it to parent
    const { count, setCount } = useContext(Counter);
    function handleClick() {
        alert("hello");
    }
    return (
        <>
            <h1>parent</h1>
            <Child handleClick={handleClick} />
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <button onClick={() => setCount(count - 1)}>decrement</button>
        </>
    );
}

export default Parent;