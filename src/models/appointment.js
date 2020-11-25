class Appointment {
    constructor(
        id, patientId, patientName, patientEmail, doctorName, doctorRole, appStatus, doctorImage,
        date, slot, hosAddress, doctorId, hospitalId
    ) {
        this.id = id;
        this.patientId = patientId;
        this.patientName = patientName;
        this.patientEmail = patientEmail;
        this.doctorName = doctorName;
        this.doctorRole = doctorRole;
        this.appStatus = appStatus;
        this.doctorImage = doctorImage;
        this.date = date;
        this.slot = slot;
        this.hosAddress = hosAddress;
        this.doctorId = doctorId;
        this.hospitalId = hospitalId;
    }
}  

export default Appointment;