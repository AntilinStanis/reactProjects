import { useContext, useState } from "react";
import { UserContext } from "../App";
const Child3 = () => {
    const { user, setUser } = useContext(UserContext);
    const [newUser, setNewuser] = useState("");
    function handleButtonClick() {

        setUser(newUser);
        setNewuser("");
    }

    return <div><h2>Hello from child 3 - {user}</h2>
        <label>Change the context name here:</label>
        <input id="input" placeholder="Enter your name" value={newUser} onChange={(event) => setNewuser(event.target.value)} />
        <button onClick={handleButtonClick}>Change Context</button>
    </div>

}

export default Child3;