


/*Reducer for saving  data from the getData action to state*/

import { GET_DATA_ACTION_REQUEST, GET_DATA_ACTION_SUCCESS, GET_DATA_ACTION_FAIL } from '../Constants/constants';

function getDataReducer(state = { carbonData: [], loading: true }, action) {
    switch (action.type) {
        case GET_DATA_ACTION_REQUEST:
            return { loading: true };
        case GET_DATA_ACTION_SUCCESS:

            return { loading: false, carbonData: action.payload };
            
        case GET_DATA_ACTION_FAIL:
            return { loading: false, error: action.payload };
        

         default : return state;
    }

    

}
export { getDataReducer };