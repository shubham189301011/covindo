package com.cg.vaccine.controllers;


import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.cg.vaccine.exception.UserException;
 

 
@ControllerAdvice
public class MemberExceptionHandler extends ResponseEntityExceptionHandler {
 
    @ExceptionHandler(value 
              = { UserException.class })
            protected ResponseEntity<Object> handleConflict(
              RuntimeException ex, WebRequest request) {
                String bodyOfResponse = ex.getMessage();
                return handleExceptionInternal(ex, bodyOfResponse, 
                  new HttpHeaders(), HttpStatus.NOT_FOUND, request);
            }
}