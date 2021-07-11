import DOCTORS from '../data/dummy-doctor';
import { SET_DOCTORS } from '../actionCreators/doctorList'

  const initialState = {
     availableDoctors: [],
 };

  export default (state = initialState, action) => {
    switch(action.type){
      case SET_DOCTORS:
        return {
          availableDoctors: action.availableDoctors
        }
    }
     return state;
 }; 