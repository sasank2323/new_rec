

function Child({ handleClick }) {
    return (
        <>
            <h1>child</h1>
            <button onClick={handleClick}>click</button>
        </>
    );
}

export default Child;