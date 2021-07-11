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
                        "sym1": array.length > 0 ? array[0] : 0,
                        "sym2": array.length > 1 ? array[1] : 0,
                        "sym3": array.length > 2 ? array[2] : 0,
                        "sym4": array.length > 3 ? array[3] : 0,
                        "sym5": array.length > 4 ? array[4] : 0,
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