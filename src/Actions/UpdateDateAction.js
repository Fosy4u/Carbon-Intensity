/*Actiion for updating store with selected date to be displayed in the plot screen*/
import Axios from "axios"


/*Action for updating date in the store to be retried on the plot screen*/

import { UPDATE_DATE_ACTION_REQUEST, UPDATE_DATE_ACTION_SUCCESS, UPDATE_DATE_ACTION_FAIL } from '../Constants/constants';



const updateDateAction = (date) => async (dispatch) => {
    dispatch({ type: UPDATE_DATE_ACTION_REQUEST, payload: {date}})

    try {

        
        dispatch({ type: UPDATE_DATE_ACTION_SUCCESS, payload: date});
        


    }
    catch (error) {
        dispatch({ type: UPDATE_DATE_ACTION_SUCCESS, payload: 'No Date Selected' });
    }

} 



export { updateDateAction};