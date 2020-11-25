export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';

//action creator
export const addAppointment = (
    patientId, patientName, patientEmail,
    doctorName, doctorRole, appStatus, doctorImage,
    date, slot, hosAddress, doctorId, hospitalId
) => {
    return {
        type: ADD_APPOINTMENT, 
        appointmentData: { 
            patientId: patientId, patientName: patientName, patientEmail: patientEmail,
            doctorName: doctorName, doctorRole: doctorRole, 
            appStatus: appStatus, doctorImage: doctorImage,
            date: date, slot: slot, 
            hosAddress: hosAddress, doctorId: doctorId, 
            hospitalId: hospitalId 
        }
    };
};