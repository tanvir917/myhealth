class Appointment {
    constructor(id, date, slot, doctorId, hospitalId) {
        this.id = id;
        this.date = date;
        this.slot = slot;
        this.doctorId = doctorId;
        this.hospitalId = hospitalId;
    }
} 

export default Appointment;