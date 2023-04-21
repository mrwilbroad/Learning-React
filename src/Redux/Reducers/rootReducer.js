import { combineReducers} from 'redux';
import CakeReducer from './CakeReducer/CakeReducer';
import IceCreamReducer from './IceCreamReducer/IceCreamReducer';

const rootReducer = combineReducers({
    CAKE_STATE: CakeReducer,
    ICECREAM_STATE: IceCreamReducer
})

export default rootReducer

