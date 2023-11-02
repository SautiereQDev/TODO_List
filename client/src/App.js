import React, {useEffect, useState} from 'react';
import Task from "./components/Task";

const App = () => {

    const [tasks, setTasks] = useState(null);

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

    return (
        <div>
            <ul>
                {tasks && tasks.map((task) => (
                    <li key={task._id}>
                        <Task name={task.name.toUpperCase()} tag={task.tag} id={task._id} status={task.status}/>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default App;
