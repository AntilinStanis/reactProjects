import Child2 from "./child2";
import { UserContext } from "../App";
import { useContext } from "react";

const Child1 = () => {

    const {user, setUser} = useContext(UserContext);

    return <div>
        <h2>Hello from child 1 - {user}</h2>
        <Child2 />
    </div>

}

export default Child1;