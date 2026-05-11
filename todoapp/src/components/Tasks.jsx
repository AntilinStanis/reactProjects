import Task from "./Task";
import { TaskContext } from "./Body";
import { useContext } from "react";

const Tasks = () => {
    const { tasks } = useContext(TaskContext);

    return (<div style={{ margin: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        {tasks.map((task) => <Task key={task.id} taskText={task.taskText} taskId={task.id} isCompleted={task.isCompleted} />)}</div>)

}

export default Tasks;