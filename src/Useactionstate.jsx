
import { Link } from "react-router";

import { useActionState } from "react";

function Useactionstate() {

    function fn(previousValue, formData) {
        const name = formData.get("name");
        const age = formData.get("age");

        return `Name: ${name}, Age: ${age}`;
    }

    const [data, action, pending] = useActionState(fn, "hello");

    return (
        <>
            <form action={action}>
                <input type="text" name="name" />
                <input type="text" name="age" />

                <button type="submit" disabled={pending}>
                    {pending ? "Submitting..." : "Submit"}
                </button>

            </form>
            <Link to="/">Home</Link>
            <h3>{data}</h3>
        </>
    );
}

export default Useactionstate;