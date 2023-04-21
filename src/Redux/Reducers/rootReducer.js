import { combineReducers} from 'redux';
import CakeReducer from './CakeReducer/CakeReducer';

const rootReducer = combineReducers({
    CAKE_REDUCER: CakeReducer
})

export default rootReducer

