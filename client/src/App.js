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
    }, []);

    return (
        <div>
            <ul>
                {tasks && tasks.map((task) => (
                    <li key={task._id}>
                        <Task name={task.name} tag={task.tag} id={task._id}/>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default App;
