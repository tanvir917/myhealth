import { database } from "../firebase";
import Appointment from "../models/appointment";

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
                patientId: patientId, patientName: patientName, 
                patientEmail: patientEmail,
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
    return async(dispatch, getState) => {
        try {
            database
            .ref('appointment').once('value')
            .then((snapshot) => {
                const appointments = snapshot.val();

                const loadedAppointments = [];
                for(const key in appointments) {
                    loadedAppointments.push(
                        new Appointment(
                            key,
                            appointments[key].patientId,
                            appointments[key].patientName,
                            appointments[key].patientEmail,
                            appointments[key].doctorName,
                            appointments[key].doctorRole,
                            appointments[key].appStatus,
                            appointments[key].doctorImage,
                            appointments[key].date,
                            appointments[key].slot,
                            appointments[key].hosAddress,
                            appointments[key].doctorId,
                            appointments[key].hospitalId,
                        )
                    )
                }


                dispatch({
                    type: FETCH_APPOINTMENT,
                    availableAppointments: loadedAppointments
                })
            })
        } catch(err){
            throw err;
        }
    }
}