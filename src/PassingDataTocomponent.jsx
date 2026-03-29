
function PassingDataTocomponent({ data }) {
    return (
        <>
            <div style={{ border: "1px solid black", padding: "10px", margin: "10px", backgroundColor: "lightblue" }}>
                <p>{data.name}</p>
                <p>{data.age}</p>
                <p>{data.city}</p>
            </div>
        </>
    );
}

export default PassingDataTocomponent;