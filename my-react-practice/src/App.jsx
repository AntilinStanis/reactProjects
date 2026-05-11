// import UseEffectComponent from "./Components/useEffect.component";
import Child1 from "./Components/child1";
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();
function App() {
    const [user, setUser] = useState("Stanis");



    return <UserContext.Provider value={{user, setUser}}><Child1 /></UserContext.Provider>

}

export default App
