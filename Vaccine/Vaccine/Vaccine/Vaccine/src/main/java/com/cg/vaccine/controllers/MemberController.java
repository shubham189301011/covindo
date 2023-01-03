package com.cg.vaccine.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.vaccine.entity.Appointment;
import com.cg.vaccine.entity.User;
import com.cg.vaccine.exception.AppointmentException;
import com.cg.vaccine.exception.UserException;
import com.cg.vaccine.exception.VaccineException;
import com.cg.vaccine.services.MemberServices;

@RestController
@CrossOrigin
@RequestMapping("/members")
public class MemberController {
	@Autowired
	private MemberServices memS;
	
	@PostMapping("/register")
	public User registerMember(@RequestBody User member) {
		return memS.addMember(member);
	}
	
	@PutMapping("/update")
	public User updateMember(@RequestBody User member) throws UserException{
		return memS.updateMember(member);
	}
	
	@PutMapping("/addAppointment/{userId}")
	public User addMemAppointment(@RequestBody Appointment app,@PathVariable("userId") long userId) throws UserException, VaccineException {
		return memS.addMemberAppointment(app,userId);
	}
	
	@DeleteMapping("/deleteAppointment/{userId}/{bookingId}")
	public User deleteMemberAppointment(@PathVariable("bookingId") long bookingId,@PathVariable("userId") long userId) throws UserException, VaccineException, AppointmentException
	{
		return memS.deleteMemberAppointment(bookingId, userId);
	}
	
	@DeleteMapping("delete/{id}")
	public User deleteMember(@PathVariable("id") long id) throws UserException{
		return memS.deleteMember(id);
	}
	
	@GetMapping("get/{id}")
	public User getMemberById(@PathVariable("id") long id) throws UserException{
		return memS.getMemberById(id);
	}
	@GetMapping("get/pan/{pan}")
	public User getMemberByPan(@PathVariable("pan") String panNo) throws UserException{
		return memS.getMemberByPanNo(panNo);
	}
	@GetMapping("get/adhar/{adhar}")
	public User getMemberByAdhar(@PathVariable("adhar") long adharNo) throws UserException{
		return memS.getMemberByAdharNo(adharNo);
	}
	
	@GetMapping("get/mobno/{mobileno}")
	public User getMemberByMobileNumber(@PathVariable("mobileno") String mobileno) throws UserException
	{
		return memS.getMemberByMobileNumber(mobileno);
	}
	
	@GetMapping("/all")
	public List<User> getAllMembers(){
		return memS.getAllMembers();
	}
	
}
