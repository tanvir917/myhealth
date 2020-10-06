/*import Menu from '../modules/Menu';

export const SET_PRODUCTS = 'SET_PRODUCTS';

export const fetchMenus = () => {
    return async (dispatch, getState) => { 
        const userId = getState().auth.userId;
        //any async code
        try {
            const response = await fetch('https://myhealth-e2b27.firebaseio.com//menus.json') ;

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            const loadedMenus = [];

            for (const key in resData) {
                loadedMenus.push(new Menu(
                    key, 
                    resData[key].title,
                    resData[key].imageUrl
                ))
            }

            dispatch({ 
                type: SET_PRODUCTS, 
                products: loadedMenus, 
                userProducts: loadedMenus.filter(prod => prod.ownerId === userId) 
            })
        } catch (err) {
            // send to custom analytic error
            throw err; 
        }
    }
}*/
