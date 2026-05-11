import { useState } from "react";
import Tasks from "./Tasks";
import { createContext } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext();

const Body = () => {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    function addTask() {
        if (task) {
            console.log(tasks);
            setTasks([...tasks, { id: tasks.length, taskText: task, isCompleted: false }]);
            setTask("");
        }

    }

    return (<div>

        <h1>Add your todays task here !</h1>
        <div style={{ display: 'flex', flexDirection: 'row', gap: "10px", justifyContent: "center", alignItems: "center", marginTop: "100px" }}>
            <input style={{ width: '400px', height: "30px", padding: "3px", paddingLeft: "10px" }} value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add your tasks and start your Productive day!" />
            <button style={{ width: "100px", height: '35px', borderRadius: "5px", cursor: "pointer" }} onClick={addTask}>Add Task</button>
        </div>

        <TaskContext.Provider value={{ tasks, setTasks }}>
            <Tasks />
        </TaskContext.Provider>

    </div>)
}

export default Body;