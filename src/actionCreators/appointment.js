export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';

//action creator
export const addAppointment = (
    doctorName, doctorRole, appStatus, doctorImage,
    date, slot, hosAddress, doctorId, hospitalId
) => {
    return {
        type: ADD_APPOINTMENT, 
        appointmentData: { 
            doctorName: doctorName, doctorRole: doctorRole, 
            appStatus: appStatus, doctorImage: doctorImage,
            date: date, slot: slot, 
            hosAddress: hosAddress, doctorId: doctorId, 
            hospitalId: hospitalId 
        }
    };
};