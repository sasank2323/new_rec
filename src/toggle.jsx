

import { useState } from 'react';

function Toggle() {
    const [toggle, setToggle] = useState(true);
    return (
        <>
            <h1>toggle</h1>
            {toggle ? <p>on</p> : <p>off</p>}
            <button onClick={() => setToggle(!toggle)}>toggle</button>
        </>
    );
}

export default Toggle;