import { useState } from "react";

function CheckboxHandling() {
    const [check, setCheck] = useState([]);
    function handleCheck(event) {
        if (event.target.checked) {
            setCheck([...check, event.target.value]);
        } else {
            setCheck(check.filter((item) => item !== event.target.value));
        }
    }
    return (
        <>
            <p>{check}</p>
            <input type="checkbox" value="check" onChange={(event) => handleCheck(event)} />
            <label htmlFor="check">php</label>
            <input type="checkbox" value="check2" onChange={(event) => handleCheck(event)} />
            <label htmlFor="check2">java</label>
            <input type="checkbox" value="check3" onChange={(event) => handleCheck(event)} />
            <label htmlFor="check3">sql</label>
        </>
    );
}

export default CheckboxHandling;