import * as React from "react";
import { Button } from 'react-bootstrap';
import TaskList from "./TaskList";
import { addTask, getTasks } from '../actions/task/taskActions';
import { AddTaskModal } from './AddTaskModal';

import { connect } from 'react-redux';

class TaskApp extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            openAddTaskModal: false
        }

        this.taskNameRef = React.createRef();
        this.taskDescriptionRef = React.createRef();
    }

    toggleOpenModal = () => {
        this.setState({ openAddTaskModal: true });
    };

    toggleCloseModal = () => {
        this.setState({ openAddTaskModal: false });
    };

    componentDidUpdate(prevProps) {
        if(this.props.tasks !== prevProps.task){
            this.props.fetchTasks();
        }
    }

    componentDidMount() {
        console.log(this.props.tasks)
        this.props.fetchTasks();
    };

    addTask = () => {
        this.props.createTask(this.taskNameRef.current.value, this.taskDescriptionRef.current.value);
        this.toggleCloseModal();
    }

    render() {
        console.log('TASKS RENDER', this.props.tasks);
        return (
            <div className="container">
                <h1>Tasks</h1>

                <TaskList tasks={this.props.tasks}
                          toggleDone={this.toggleDone}
                          filter={this.state.filter}/>
                <div className="row justify-content-end">
                    <Button onClick={() => this.toggleOpenModal()} type="button" variant="primary">Add Task</Button>
                    {this.state.openAddTaskModal && 
                            <AddTaskModal 
                                addTask={this.addTask}
                                modalShow={this.state.openAddTaskModal}
                                closeModal={this.toggleCloseModal}
                                taskNameRef={this.taskNameRef}
                                taskDescriptionRef={this.taskDescriptionRef}
                            />
                    }
                </div>
            </div>
        );
    };

    toggleDone = (taskIndex) => {
        const newItems = [...this.state.items];
        const task = newItems[taskIndex];
        task.done = !task.done;
        this.setState({ items: newItems});
    };
}

const mapStateToProps = ({tasks}) => ({
    tasks
});

const mapDispatchToProps = ({
    fetchTasks: getTasks,
    createTask: addTask
});

export default connect(mapStateToProps, mapDispatchToProps) (TaskApp);
