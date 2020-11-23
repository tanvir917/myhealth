export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';

//action creator
export const addAppointment = (date, slot, doctorId, hospitalId) => {
    return {
        type: ADD_APPOINTMENT, 
        appointmentData: { date: date, slot: slot, doctorId: doctorId, hospitalId: hospitalId }
    };
};