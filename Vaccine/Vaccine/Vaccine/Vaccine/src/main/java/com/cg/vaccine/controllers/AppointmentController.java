package com.cg.vaccine.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.vaccine.entity.Appointment;
import com.cg.vaccine.exception.AppointmentException;
import com.cg.vaccine.services.AppointmentServices;

@RestController
@CrossOrigin
@RequestMapping("/appointment")

public class AppointmentController {
	@Autowired
	private AppointmentServices appointmentService;
	
	@GetMapping(value="/get/{id}")
	public Appointment getAppointment(@PathVariable("id") long bookingid) throws AppointmentException {
		return appointmentService.getAppointment(bookingid);
	}
	
	@GetMapping(value="/getAll")
	public List<Appointment> getAllAppointments() {
		return appointmentService.getAllAppointments();
	}
	
}