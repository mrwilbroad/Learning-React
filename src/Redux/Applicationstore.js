import rootReducer from "./Reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { logger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


const Applicationstore = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(logger)));

export default Applicationstore;