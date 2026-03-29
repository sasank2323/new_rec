import Child from "./Child";

function Parent() {
    // we are writing function in parent and passing it to child because to reduce the code duplication
    // we can also write function in child and pass it to parent
    function handleClick() {
        alert("hello");
    }
    return (
        <>
            <h1>parent</h1>
            <Child handleClick={handleClick} />
        </>
    );
}

export default Parent;