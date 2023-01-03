package com.cg.vaccine.controllers;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.cg.vaccine.exception.AppointmentException;

@ControllerAdvice
public class AppointmentExceptionHandler extends ResponseEntityExceptionHandler {
	@ExceptionHandler(value
			= {AppointmentException.class})
			protected ResponseEntity<Object> handleConflict(
					RuntimeException ex,WebRequest request){
						String bodyOfResponse="Appointment with this id not found";
						return handleExceptionInternal(ex, bodyOfResponse, new HttpHeaders(), HttpStatus.NOT_FOUND, request);
	}
}