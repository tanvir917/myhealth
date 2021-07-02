export const GETQUERIES = 'GETQUERIES';

export const fetchMyQueries = (array) => {
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
                        "sym1": array[0],
                        "sym2": array[1],
                        "sym3": array[2],
                        "sym4": array[3],
                        "sym5": array[4],
                    })
                }
            );
            const resData = await response.json();
            console.log('got data',resData);
            dispatch({ 
                type: GETQUERIES, 
                myqueries: resData,
              })
        } catch(err){
            throw err;
        }
    }
}