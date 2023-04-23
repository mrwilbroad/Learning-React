import React, { useEffect } from 'react'
import { Table, Spinner } from 'react-bootstrap'
import { FetchTask } from '../../Redux/Reducers/TaskReducer/TaskType';
import { useSelector, useDispatch } from 'react-redux';

const DisplayTasks = () => {
    const   TaskInitialState = useSelector((state) => state.TASK_STATE);
    const Dispatch = useDispatch();

    useEffect(()=> {
        Dispatch(FetchTask());
    },[])

  return (
    <Table striped bordered responsive hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Task name</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Created at</th>
                <th>Updated at</th>
            </tr>
        </thead>
        <tbody>
            {
            
             TaskInitialState.loading ?
             (
                <tr>
                <td colSpan={6} className='text-center'>
                    <small>{TaskInitialState.Loading_message }</small>
                    <Spinner size='sm' animation="border" variant="success" role="status" />
                </td>
                </tr>
              )
                :   
                TaskInitialState.error ?
                <tr> 
                    <td colSpan={6} className='text-center'>
                          { TaskInitialState.error}
                    </td>
                </tr>
                :
                TaskInitialState.Tasks.map((tasks,index) => 
                <tr key={tasks.id}>
                    <td>{index+1}</td>
                    <td>{tasks.attributes.name}</td>
                    <td>{tasks.attributes.description}</td>
                    <td>{tasks.attributes.priority}</td>
                    <td>Posted at</td>
                    <td>Last Edited</td>
                </tr>)
                

            }

        </tbody>
    </Table>
  )
}

export default DisplayTasks