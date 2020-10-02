import { LOGIN, SIGNUP } from '../actionCreators/authM';

  const initialState = {
     token: null,
     userId: null
 }

  export default (state = initialState, action) => {
     switch (action.type) {
         case LOGIN: 
             return {
                 token: action.token,
                 userId: action.userId
             };
         case SIGNUP:
             return {
                 token: action.token,
                 userId: action.userId
             };
         default:
             return state
     }
 } 