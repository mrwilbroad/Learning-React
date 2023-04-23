import { TASK_ACTION } from "./TaskType"


const TaskInitialState = {
    loading: false,
    Loading_message: '',
    Tasks: [],
    error: ''
}
const TaskReducer = (state = TaskInitialState, action)=> {


     switch(action.type){

        case TASK_ACTION.FETCH_TASK_REQUEST:
            return {
                ...state,
                loading: true,
                Loading_message: "Fetching task available ..."
            }
            
        case TASK_ACTION.FETCH_TASK_SUCCESS:

            return {
                loading: false,
                Tasks: action.payload,
                Loading_message: "",
            }
        
        case TASK_ACTION.FETCH_TASK_FAILURE:
            return {
                loading: false,
                Tasks: [],
                error: action.payload,
                Loading_message: "",
            }
        default: 
            return state;
        
     }
}


export default TaskReducer;