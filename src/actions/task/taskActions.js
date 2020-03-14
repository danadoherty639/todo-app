import constants from '../../ActionTypes';
import client from '../shared/index';
import axios from 'axios';
// import fetch from 'cross-fetch'

export const addTask = (taskName, taskDescription) => {
    console.log('IN ADD TASK', 'name +', taskName, 'taskDescription +', taskDescription);
    return async dispatch => {
        const res = await axios.post(`${client.baseURL}/task`, {
            name: taskName,
            description: taskDescription
        });
        console.log('RES', res);
        dispatch({
            type: constants.ADD_TASK,
            payload: res.data.task
        })
    }
};

export const getTasks = () => {
    console.log('IN ACTIN');
    return async dispatch => {
        const tasks = await axios.get(`${client.baseURL}/tasks`);
        dispatch({
            type: constants.FETCH_TASKS,
            payload: tasks.data
        }); 
    }     
};

export const removeTask = (task) => {
    console.log('IN ACTIN', task);
    return async dispatch => {
        const tasks = await axios.delete(`${client.baseURL}/task/${task.id}`);
        dispatch({
            type: constants.DELETE_TASK,
            payload: tasks.data
        }); 
    }     
};
