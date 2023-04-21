import { ICECREAM_ACTION } from "./IceCreamType"


const InitialCakeState = {
    numOfIceCream: 340,
    ClientIceCreamChosen: 0,
}


const IceCreamReducer = (state = InitialCakeState, action)=> {
    switch(action.type){

        case ICECREAM_ACTION.BUY_ICECREAM:

        if(state.numOfIceCream <= 0 || state.numOfIceCream < action.payload.count)
        {
            return {
                ...state, numOfIceCream: state.numOfIceCream
            }
        }
            return {
                ...state,
                numOfIceCream: state.numOfIceCream -action.payload.count,
                ClientIceCreamChosen: state.ClientIceCreamChosen + action.payload.count
            }

        default: 
        return state;
    }

}


export default IceCreamReducer;