import { LOGIN, SIGNUP, AUTHENTICATE, LOGOUT, AUTHENTICATE_USER_INFO } from '../actionCreators/authM';

  const initialState = {
     token: null,
     userId: null,
     displayName: null,
     email: null,
     userInfo: null
 }

  export default (state = initialState, action) => {
     switch (action.type) {
        case AUTHENTICATE:  
            return {
                userInfo: action.userInfo,
                userId: action.userId
            };
        case AUTHENTICATE_USER_INFO:
            return {
                token: action.token,
                userInfo: action.userInfo
            }
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
         case LOGOUT:
             return initialState;
         default:
             return state
     }
 } 