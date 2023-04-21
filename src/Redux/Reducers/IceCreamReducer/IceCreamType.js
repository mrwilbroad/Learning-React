export const ICECREAM_ACTION  = {
    BUY_ICECREAM: "BUY_ICECREAM"
}

export const IceCreamType = {

    BUY_ICECREAM: (Icecream = 1)=> {
        return {
            type: ICECREAM_ACTION.BUY_ICECREAM,
            payload: {
                count: Icecream
            }
        }
    }

}