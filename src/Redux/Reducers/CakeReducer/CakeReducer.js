import { CAKE_ACTION } from "./CakeType"


const InitialCakeState = {
    numofCake: 20,
    ClientCakeChoosen: 0,
}


const CakeReducer = (state = InitialCakeState, action)=> {
    switch(action.type){

        case CAKE_ACTION.BUY_CAKE:

            return {
                ...state,
                numofCake: state.numofCake -1,
                ClientCakeChoosen: state.ClientCakeChoosen +1
            }

        default: 
        return state;
    }

}


export default CakeReducer;