
/*Reducer for handling update Date Action*/

import { UPDATE_DATE_ACTION_REQUEST, UPDATE_DATE_ACTION_SUCCESS, UPDATE_DATE_ACTION_FAIL } from '../Constants/constants';



function updateDateReducer(state = { date:'' }, action) {
    switch (action.type) {
        case UPDATE_DATE_ACTION_REQUEST:
            return { date: '' };
        case UPDATE_DATE_ACTION_SUCCESS:

            return {  date: action.payload };
            
        case UPDATE_DATE_ACTION_FAIL:
            return { date: action.payload };
        

         default : return state;
    }

    

}
export { updateDateReducer };