

import { useState } from 'react';
import PropsData from './propsdata';

function Toggle() {
    const [toggle, setToggle] = useState(true);
    const [data, setData] = useState({ name: "john", age: 30, city: "new york" });
    const [data2, setData2] = useState({ name: "john", age: 30, city: "new york" });
    return (
        <>
            <PropsData data={data} />
            <PropsData data={data2} />
        </>
    );
}

export default Toggle;