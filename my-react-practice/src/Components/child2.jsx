import Child3 from "./child3";
import { UserContext } from "../App";
import { useContext } from "react";

const Child2 = () => {

    const {user, setUser} = useContext(UserContext);
    console.log("Child2 rendered");
    return <div>
        <h2>Hello from child 2 - {user}</h2>
        <Child3 />
    </div>

}

export default Child2;