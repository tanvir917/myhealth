import { database } from "../firebase";

export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';
export const FETCH_APPOINTMENT = 'FETCH_APPOINTMENT'

//action creator
export const addAppointment = (
    patientId, patientName, patientEmail,
    doctorName, doctorRole, appStatus, doctorImage,
    date, slot, hosAddress, doctorId, hospitalId
) => {
    return async (dispatch, getState) => {
        try{
            const appointmentData = { 
                patientId: patientId, patientName: patientName, patientEmail: patientEmail,
                doctorName: doctorName, doctorRole: doctorRole, 
                appStatus: appStatus, doctorImage: doctorImage,
                date: date, slot: slot, 
                hosAddress: hosAddress, doctorId: doctorId, 
                hospitalId: hospitalId 
            }
            database.ref('appointment').push(appointmentData);
        } catch(err){
            throw err;
        }

        dispatch({
            type: ADD_APPOINTMENT,
            appointmentData: { 
                patientId: patientId, patientName: patientName, patientEmail: patientEmail,
                doctorName: doctorName, doctorRole: doctorRole, 
                appStatus: appStatus, doctorImage: doctorImage,
                date: date, slot: slot, 
                hosAddress: hosAddress, doctorId: doctorId, 
                hospitalId: hospitalId 
            }
        })
    }
};

export const fetchAppointments = () => {
    console.log('1');
    return async(dispatch, getState) => {
        console.log('2');
        try {
            console.log('3');
            database
            .ref('appointment').once('value')
            .then((snapshot) => {
                const appointments = snapshot.val();
                console.log('==================tt a==================');
                console.log(appointments);
                console.log('====================================');
                dispatch({
                    type: FETCH_APPOINTMENT,
                    availableAppointments: appointments
                })
            })
        } catch(err){
            throw err;
        }
    }
}