import React from 'react'
import { REGISTRATION_STEP } from './RegistrationSteps'

const RegistrationInitialState = {
    RegistrationFormData: {
        ApplicantState: REGISTRATION_STEP.FIRST_STEP,
        FIRST_STEP: {
        },
        SECOND_STEP: {
        },
        THIRD_STEP: {}
    },

}
const RegistrationReducer = (state = RegistrationInitialState, action)=> {
    
    switch(action.type){

        case REGISTRATION_STEP.FIRST_STEP:

        const UpdatedFirstState = {
            ...state.RegistrationFormData.FIRST_STEP,
            ...action.payload.data
        }
        const UpdatedRegistrationState = {
            ...state.RegistrationFormData,
            ApplicantState: action.type,
            FIRST_STEP: UpdatedFirstState

        }
       return {
            ...state,
            RegistrationFormData: UpdatedRegistrationState
        }
        
        case REGISTRATION_STEP.SECOND_STEP:
            const UpdatedSecondState = {
                ...state.RegistrationFormData.SECOND_STEP,
                ...action.payload.data
            }
            const UpdatedRegistrationState_sec = {
                ...state.RegistrationFormData,
                ApplicantState: action.type,
                SECOND_STEP: UpdatedSecondState
    
            }
            return {
                ...state,
                RegistrationFormData: UpdatedRegistrationState_sec
    
            }
          
        default:
            return state;


    }


}

export default RegistrationReducer