import { GETQUERIES } from '../actionCreators/queries';

const initialState = {
  myQueries: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
      case GETQUERIES: 
          return {
            myQueries: action.myqueries,
          };
  }
  return state;
};