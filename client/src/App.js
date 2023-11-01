import React, {useEffect, useState} from 'react';

const App = () => {

    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        try {
            fetch('http://localhost:4000/tasks')
                .then((res) => res.json())
                .then((data) => setTasks(data.data))
                .catch(e => console.log(e))
        } catch (e) {
            console.log(e)
        }
    }, []);
    console.log(tasks)
    return (
        <div>
            <ul>
                {tasks && tasks.map((task) => (
                    <li key={task._id}>
                        <p>{task.name}</p>
                        <p>{task.status}</p>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default App;
