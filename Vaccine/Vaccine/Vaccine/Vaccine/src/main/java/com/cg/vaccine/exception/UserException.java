package com.cg.vaccine.exception;

public class UserException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public UserException() {
		
	}
	
	public UserException(String message) {
		super(message);
	}
	
}
