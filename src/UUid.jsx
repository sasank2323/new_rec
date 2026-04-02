
import { v4 as uuid } from "uuid";
function Uuid() {
    const id = uuid();


    return (
        <>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </>
    );


    function Message() {
        return (
            <>
                <input type="text" id={"name" + id} />
                <label htmlFor={"name" + id}>name</label>
                <input type="text" id={"password" + id} />
                <label htmlFor={"password" + id}>password</label>

            </>
        );
    }
}

export default Uuid;