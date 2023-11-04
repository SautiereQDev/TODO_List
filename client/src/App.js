import React, {useEffect, useState} from 'react';
import Task from "./components/Task";
import AddTaskButton from "./components/AddTaskButton";
import EditedTask from "./components/EditedTask";



const App = () => {

    const [tasks, setTasks] = useState(null);
    const [showNewTask, setShowNewTask] = useState(false);


    useEffect(() => {
        try {
            fetch('http://localhost:4000/tasks')
                .then((res) => res.json())
                .then((data) => setTasks(data.result))
                .catch(e => console.log(e))
        } catch (e) {
            console.log(e)
        }
    }, [tasks]);

    const toggleNewTask = () => {
        setShowNewTask(!showNewTask)
    }

    return (
        <div>
            <ul>
                {tasks && tasks.map((task) => (
                    <li key={task._id}>
                        <Task name={task.name.toUpperCase()} tag={task.tag} id={task._id} status={task.status}/>
                    </li>
                ))}
            </ul>
            {showNewTask && <EditedTask handleClick={toggleNewTask}/>}
            {!showNewTask && <AddTaskButton handleClick={toggleNewTask}/>}
        </div>
    );
};

export default App;
