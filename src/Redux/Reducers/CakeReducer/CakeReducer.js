import { CAKE_ACTION } from "./CakeType"


const InitialCakeState = {
    numofCake: 90,
    ClientCakeChoosen: 0,
}


const CakeReducer = (state = InitialCakeState, action)=> {
    
    switch(action.type){

        case CAKE_ACTION.BUY_CAKE:

        if(state.numofCake <= 0 || state.numofCake < action.payload.count)
        {
            return {
                ...state, numofCake: state.numofCake
            }
        }
            return {
                ...state,
                numofCake: state.numofCake -action.payload.count,
                ClientCakeChoosen: state.ClientCakeChoosen +action.payload.count
            }

        default: 
        return state;
    }

}


export default CakeReducer;