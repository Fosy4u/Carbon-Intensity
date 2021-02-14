

/*Action for getting data from the API*/
import Axios from "axios"
import { GET_DATA_ACTION_REQUEST, GET_DATA_ACTION_SUCCESS, GET_DATA_ACTION_FAIL } from '../Constants/constants';



const getDataAction = (date) => async (dispatch) => {
    dispatch({ type: GET_DATA_ACTION_REQUEST, payload: {date}})

    try {
    /* getting data from the Carbon Intensity API*/
        const { data } = await Axios.get('https://api.carbonintensity.org.uk/intensity/date/' + date);
        dispatch({ type: GET_DATA_ACTION_SUCCESS, payload: data.data });
        
    }
    catch (error) {
        dispatch({ type: GET_DATA_ACTION_FAIL, payload: error.message });
    }


    
} 



export { getDataAction};