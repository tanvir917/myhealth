export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

  export const signup = (displayName, email, password) => {
     return async dispatch => {
         try {
             const response = await fetch(
                 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvib1iZmXGjoYLtcRbhLO-D3l-O-aflCY', 
                 {
                     method: 'POST',
                     headers: {
                         'Content-Type': 'application/json'
                     },
                     body: JSON.stringify({
                         displayName: displayName,
                         email: email,
                         password: password,
                         returnSecureToken: true
                     })
                 }
             );

             if (!response.ok) {
                const errorResData = await response.json();
                const errorId = errorResData.error.message;
                let message = 'Something went wrong!';

                 if (errorId === 'EMAIL_EXISTS') {
                    message = 'This email exists already!';
                }
                throw new Error(message);
            }		             

              const resData = await response.json();

              dispatch({ type: SIGNUP, token: resData.idToken, userId: resData.localId, displayName: resData.displayName, email: resData.email });
         } catch (err) {
             throw err;
         }
     }
 } 

 export const logout = () => {
    return {
        type: LOGOUT
    }
} 


 export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvib1iZmXGjoYLtcRbhLO-D3l-O-aflCY', 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        returnSecureToken: true
                    })
                }
            );

             if (!response.ok) {
                //throw new Error('Something went wrong 1!');
                const errorResData = await response.json();
                const errorId = errorResData.error.message;
                let message = 'Something went wrong!';

                 if (errorId === 'EMAIL_NOT_FOUND') {
                    message = 'This email could not be found!';
                } else if (errorId === 'INVALID_PASSWORD') {
                    message = 'Password is not valid!';
                }
                throw new Error(message);
            }

            const resData = await response.json();
            dispatch({ type: LOGIN, token: resData.idToken, userId: resData.localId, displayName: resData.displayName, email: resData.email }); 
        } catch (err) {
            throw err;
        }		         
    }		     
}