package com.cg.vaccine.services;

import java.util.List;

import com.cg.vaccine.entity.Appointment;
import com.cg.vaccine.exception.AppointmentException;

public interface AppointmentServices {
	public Appointment getAppointment(long bookingid) throws AppointmentException;

	public List<Appointment> getAllAppointments();

	Appointment deleteAppointment(long bookingid) throws AppointmentException;

	Appointment updateAppointment(Appointment app, long bookingId) throws AppointmentException;
}