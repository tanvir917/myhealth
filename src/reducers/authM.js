import { LOGIN, SIGNUP } from '../actionCreators/authM';

  const initialState = {
     token: null,
     userId: null,
     displayName: null,
     email: null,
 }

  export default (state = initialState, action) => {
     switch (action.type) {
         case LOGIN: 
             return {
                 token: action.token,
                 userId: action.userId,
                 displayName: action.displayName,
                 email: action.email
             };
         case SIGNUP:
             return {
                 token: action.token,
                 userId: action.userId,
                 displayname: action.displayname,
                 email: action.email,
             };
         default:
             return state
     }
 } 