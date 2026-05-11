import { useContext } from "react";
import { TaskContext } from "./Body";

const Task = ({ taskText, taskId, isCompleted }) => {

    const { tasks, setTasks } = useContext(TaskContext);

    function removeTask() {
        const tasksCopy = structuredClone(tasks);
        const filteredTasks = tasksCopy.filter((task) => task.id != taskId);
        setTasks(filteredTasks);
    }

    function markAsComplete() {
        const tasksCopy = structuredClone(tasks);
        const index = tasksCopy.findIndex((task) => task.id == taskId);
        tasksCopy[index].isCompleted = true;
        setTasks(tasksCopy);
    }

    return (
        <div
            style={{
                border: "2px solid white",
                borderRadius:"5px",
                padding: "10px",
                width: "600px",
                margin: "10px",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <p style={isCompleted ? { margin: 0, textDecoration: "line-through",color:"white" } : { margin: 0 }}>{taskText}</p>
            <div style={{ display: "flex", gap: '10px' }}>
                {!isCompleted && <button onClick={markAsComplete} style={{ backgroundColor: "green",borderRadius:"5px",cursor:"pointer" }}>Mark Completed</button>}
                <button onClick={removeTask} style={{ backgroundColor: "red",borderRadius:"5px",cursor:"pointer" }}>Remove</button>
            </div>

        </div >
    );
};

export default Task;