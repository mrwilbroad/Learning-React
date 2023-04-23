import rootReducer from "./Reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { logger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const Applicationstore = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(
            logger,thunk
            )));

export default Applicationstore;