import { combineReducers} from 'redux';
import CakeReducer from './CakeReducer/CakeReducer';
import IceCreamReducer from './IceCreamReducer/IceCreamReducer';
import TaskReducer from './TaskReducer/TaskReducer';

const rootReducer = combineReducers({
    CAKE_STATE: CakeReducer,
    ICECREAM_STATE: IceCreamReducer,
    TASK_STATE: TaskReducer
})

export default rootReducer

