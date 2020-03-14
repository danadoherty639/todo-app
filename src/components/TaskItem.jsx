import * as React from "react";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { removeTask } from '../actions/task/taskActions';

const TaskItem = (task, toggleDone)=> {
    console.log('task - item',task)
    return (
            <tr key={task.task.id}>
                <td>{task.task.id + 1}</td>
                <td>{task.task.description}</td>
                <td>
                <span className={task.task.done
                    ? "fa fa-check-square-o pointer"
                    : "fa fa-square-o pointer"}
                      aria-hidden="true"
                      onClick={toggleDone}/>
                </td>
                <td>
                {/* <Button className="fa fa-trash pointer" onClick={() => this.toggleOpenModal()} type="button" variant="primary">Add Task</Button> */}
                <span className="fa fa-trash pointer"
                      aria-hidden="true"
                      onClick={() => deleteTask(task.task.id)}/>
                </td>
            </tr>
        );

}; 

export const deleteTask = ({taskIndex, eraseTask}) => {
    eraseTask(taskIndex)
};

const mapDispatchToProps = ({
    eraseTask: removeTask
});
export default connect(null, mapDispatchToProps) (TaskItem)
