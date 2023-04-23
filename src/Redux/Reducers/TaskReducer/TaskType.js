import TaskHttp from "./TaskHttp"

export const TASK_ACTION = {
    FETCH_TASK_REQUEST: "FETCH_TASK_REQUEST",
    FETCH_TASK_SUCCESS: "FETCH_TASK_SUCCESS",
    FETCH_TASK_FAILURE: "FETCH_TASK_FAILURE"
}



export const TASK_ACTION_TYPE = {

    FETCH_TASK_REQUEST: ()=> {
       return {
        type: TASK_ACTION.FETCH_TASK_REQUEST
       }
    },

    FETCH_TASK_SUCCESS: (tasks)=> {
        return {
         type: TASK_ACTION.FETCH_TASK_SUCCESS,
         payload: tasks
        }
     },

     FETCH_TASK_FAILURE: (error)=> {
        return {
         type: TASK_ACTION.FETCH_TASK_FAILURE,
         payload: error
        }
     },


}


export const FetchTask = ()=> {

   return (dispatch)=> {
      dispatch(TASK_ACTION_TYPE.FETCH_TASK_REQUEST())

      TaskHttp.get("/tasks")
      .then(response => {
       
         if(response.status === 200)
         {
            const tasks = response.data.data;
            dispatch(TASK_ACTION_TYPE.FETCH_TASK_SUCCESS(tasks))
         }
      }).catch(error => {
         const error_message = error.message;
         dispatch(TASK_ACTION_TYPE.FETCH_TASK_FAILURE(error_message))
      })

   }
}