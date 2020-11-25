import { ADD_APPOINTMENT } from "../actionCreators/appointment";
import Appointment from "../models/appointment";

const initialState = {
    appointments: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_APPOINTMENT:
            const newAppointment = new Appointment(
                new Date().toString(),
                action.appointmentData.patientId,
                action.appointmentData.patientName,
                action.appointmentData.patientEmail,
                action.appointmentData.doctorName,
                action.appointmentData.doctorRole,
                action.appointmentData.appStatus,
                action.appointmentData.doctorImage,
                action.appointmentData.date, 
                action.appointmentData.slot,
                action.appointmentData.hosAddress,
                action.appointmentData.doctorId,
                action.appointmentData.hospitalId
            );
            return {
                ...state,//copying old state which is redundant here
                appointments: state.appointments.concat(newAppointment)//creating a brand new arry order
            }
    }

    return state;
}