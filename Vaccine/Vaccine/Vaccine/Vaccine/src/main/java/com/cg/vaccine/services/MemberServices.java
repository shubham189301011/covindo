package com.cg.vaccine.services;

import java.util.List;

import com.cg.vaccine.entity.Appointment;
import com.cg.vaccine.entity.User;
import com.cg.vaccine.exception.AppointmentException;
import com.cg.vaccine.exception.UserException;
import com.cg.vaccine.exception.VaccineException;

public interface MemberServices {
	public User addMember(User member);

	public User updateMember(User member) throws UserException;

	public User deleteMember(long memId) throws UserException;

	public User addMemberAppointment(Appointment app, long memId)
			throws UserException, VaccineException;

	public User getMemberById(long memId) throws UserException;

	public User getMemberByAdharNo(long adharno) throws UserException;

	public User getMemberByPanNo(String panNo) throws UserException;
	
	public User getMemberByMobileNumber(String mobileno) throws UserException;

	public List<User> getAllMembers();

	User deleteMemberAppointment(long appointmentId, long memId)
			throws UserException, VaccineException, AppointmentException;
}
