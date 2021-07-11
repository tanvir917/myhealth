import Doctor from '../models/doctor'

import { database } from '../firebase'
export const SET_DOCTORS = 'SET_DOCTORS'

export const fetchDoctors = () => {
    return async (dispatch, getState) => {
        try{
            database
            .ref('doctorsList')
            .once('value')
            .then((snapshot) => {
                if(!snapshot) {
                    throw new Error('Something went wrong!');
                }
                const doctors = snapshot.val();
                const loadedDoctors = [];
                for(const key in doctors) {
                    loadedDoctors.push(
                        new Doctor(
                            key,
                            doctors[key].name,
                            doctors[key].role,
                            doctors[key].degree,
                            doctors[key].hospital,
                            doctors[key].imageUrl,
                        )
                    )
                }
                dispatch({
                    type: SET_DOCTORS,
                    availableDoctors: loadedDoctors,
                })
            })
        } catch (err) {
            throw err;
        }
    }
}