
import { useState, lazy, Suspense } from "react";


const User = lazy(() => import("./LazyComponent"));
function LazyLoadingEx() {
    const [count, setCount] = useState(false);

    return (
        <>
            {
                count ? <Suspense fallback={<div>Loading...</div>}> {count && <User />} </Suspense> : <h1>hello</h1>
            }

            <h1>Lazy Loading Ex</h1>
            <button onClick={() => setCount(true)}>Increment</button>
        </>
    );
}

export default LazyLoadingEx;