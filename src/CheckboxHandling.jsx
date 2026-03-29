import { useState } from "react";

function CheckboxHandling() {
    const [check, setCheck] = useState([]);
    const [city, setCity] = useState("");
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
            <h4> select citys</h4>
            <select onChange={(event) => setCity(event.target.value)} defaultValue={"delhi"}>
                <option value="delhi">delhi</option>
                <option value="mumbai">mumbai</option>
                <option value="hyderabad">hyderabad</option>
                <option value="bangalore">bangalore</option>
            </select>
            <p>{city}</p>
        </>
    );
}

export default CheckboxHandling;