export const CAKE_ACTION  = {
    BUY_CAKE: "BUY_CAKE"
}

export const CakeType = {

    BUY_CAKE: ()=> {
        return {
            type: CAKE_ACTION.BUY_CAKE,
            payload: ''
        }
    }

}