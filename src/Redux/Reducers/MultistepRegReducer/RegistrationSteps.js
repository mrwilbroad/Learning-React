export const REGISTRATION_STEP = {
    FIRST_STEP: "FIRST_STEP",
    SECOND_STEP: "SECOND_STEP",
    THIRD_STEP: "THIRD_STEP"
}


export const REGISTRATION_ACTION = {
    
    EXECUTE_ACTION: (step,data)=> {
        console.log(data)
        return {
            type:step,
            payload:
            {
            data: data
           }
        }

    }
}