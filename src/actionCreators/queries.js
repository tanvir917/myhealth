export const GETQUERIES = 'GETQUERIES';

export const fetchMyQueries = () => {
    return async (dispatch, getState) => {
        try{
            const response = await fetch(
                'https://myhealthtest.herokuapp.com/predict', 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "sym1": 1,
                        "sym2": 2,
                        "sym3": 3,
                        "sym4": 4,
                        "sym5": 5
                    })
                }
            );
            const resData = await response.json();
            dispatch({ 
                type: GETQUERIES, 
                myqueries: resData,
              })
        } catch(err){
            throw err;
        }
    }
}