import C from '../../ActionTypes';

export const initialState = {
    tasks: [
        { 
            name: '',
            description: '',
            done: false
        }
    ],
    task: {},
}

export const reducer  = (state = initialState, action) => {
    switch(action.type){
        case C.FETCH_TASKS: {
            console.log('IN REDUCER', action.payload.tasks)
            return {
                ...state,
                tasks: action.payload.tasks
            }
        }
        case C.ADD_TASK: {
            console.log('IN  ADD REDUCER', action.payload)
            return {
                ...state,
                task: action.payload
            }
        }
        default: 
            return state;
    }
}