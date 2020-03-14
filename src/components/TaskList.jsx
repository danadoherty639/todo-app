import * as React from "react";
import TaskItem from "./TaskItem";

const TaskList = (tasks, toggleDone) => {
    console.log('LISTs', tasks.tasks)
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>Task</th>
                <th>Done</th>
                <th>Remove</th>
            </tr>
            </thead>
            <tbody>
            {tasks.tasks.length > 0 && 
                tasks.tasks.map((task, taskIndex) => (
                <TaskItem task={task}
                          taskIndex={task.id}
                          toggleDone={toggleDone}
                          key={taskIndex}/>)
            )}
            </tbody>
        </table>
    );
};

export default TaskList;
