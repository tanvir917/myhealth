import MENUS from '../data/dummy-data';

  const initialState = {
     availableProducts: MENUS,
     userProducts: MENUS
 };

  export default (state = initialState, action) => {
     return state;
 }; 