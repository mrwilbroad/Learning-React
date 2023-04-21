import rootReducer from "./Reducers/rootReducer";
import { createStore } from "redux";


const Applicationstore = createStore(rootReducer);

export default Applicationstore;