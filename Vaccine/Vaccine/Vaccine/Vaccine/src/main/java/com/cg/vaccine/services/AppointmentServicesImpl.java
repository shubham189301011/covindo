package com.cg.vaccine.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.vaccine.entity.Appointment;
import com.cg.vaccine.entity.Vaccine;
import com.cg.vaccine.exception.AppointmentException;
import com.cg.vaccine.exception.UserException;
import com.cg.vaccine.exception.VaccineException;
import com.cg.vaccine.repository.AppointmentRepository;
import com.cg.vaccine.repository.UserRepository;
import com.cg.vaccine.repository.VaccineRepository;

@Service
public class AppointmentServicesImpl implements AppointmentServices {

	@Autowired
	private AppointmentRepository appRepo;

	// Updating appointment
	@Override
	public Appointment updateAppointment(Appointment app, long bookingId) throws AppointmentException {
		Optional<Appointment> appointmentPresent = appRepo.findById(bookingId);

		if (appointmentPresent.isPresent()) {
			return appRepo.save(app);
		} else {
			throw new UserException("No Appointment found");
		}
	}

	// Deleting updating
	@Override
	public Appointment deleteAppointment(long bookingid) throws AppointmentException {
		// TODO Auto-generated method stub
		Optional<Appointment> appointment = appRepo.findById(bookingid);

		Appointment app = null;
		if (appointment.isPresent()) {
			appRepo.deleteById(bookingid);
			app = appointment.get();
		} else {
			throw new AppointmentException("No Appointment found");
		}
		return app;
	}

	// Get appointment by ID
	@Override
	public Appointment getAppointment(long bookingid) throws AppointmentException {

		Optional<Appointment> appointment = appRepo.findById(bookingid);
		Appointment app = null;
		if (appointment.isPresent()) {
			app = appointment.get();
		} else {
			throw new AppointmentException("No Appointment found");
		}
		return app;
	}

	// Get ALl appointments
	@Override
	public List<Appointment> getAllAppointments() {

		return appRepo.findAll();
	}

}