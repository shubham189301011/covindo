package com.cg.vaccine.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.vaccine.entity.Appointment;
import com.cg.vaccine.entity.User;
import com.cg.vaccine.entity.Vaccine;
import com.cg.vaccine.exception.AppointmentException;
import com.cg.vaccine.exception.UserException;
import com.cg.vaccine.exception.VaccineException;
import com.cg.vaccine.repository.AppointmentRepository;
import com.cg.vaccine.repository.UserRepository;
import com.cg.vaccine.repository.VaccineRepository;

@Service
public class MemberServicesImpl implements MemberServices {

	@Autowired
	private UserRepository memberRepository;

	@Autowired
	private VaccineServicesImpl vcM;

	@Autowired
	private VaccineRepository vcR;

	@Autowired
	private AppointmentServicesImpl acS;

	// Add a new member
	@Override
	public User addMember(User member) {
		return memberRepository.save(member);
	}

	// Update an existing member
	@Override
	public User updateMember(User member) throws UserException {
		long id = member.getId();
		Optional<User> memberPresent = memberRepository.findById(id);

		if (memberPresent.isPresent()) {
			return memberRepository.save(member);
		} else {
			throw new UserException("No such Member");
		}
	}

	// Add member appointments
	@Override
	public User addMemberAppointment(Appointment app, long memId)
			throws UserException, VaccineException {
		Optional<User> member = memberRepository.findById(memId);
		if (member.isPresent()) {
			if (member.get().getNoOfVaccinesTaken() > 1) {
				throw new UserException("Already has 2 vaccines taken.");
			}

			long vaccineId = app.getVaccineId();

			Optional<Vaccine> tempVaccine = vcR.findById(vaccineId);

			if (tempVaccine.isPresent()) {
				int qty = tempVaccine.get().getQuantity();
				tempVaccine.get().setQuantity(qty - 1);
				vcM.updateVaccine(tempVaccine.get());
			}

			member.get().getAppointments().add(app);
			member.get().setNoOfVaccinesTaken(member.get().getNoOfVaccinesTaken() + 1);

			// add exception when appointment >2
			return memberRepository.save(member.get());

		} else {
			throw new UserException("No such Member");
		}

	}

	// Delete Member Appointment
	@Override
	public User deleteMemberAppointment(long appointmentId, long memId)
			throws UserException, VaccineException, AppointmentException {
		Optional<User> member = memberRepository.findById(memId);
		if (member.isPresent()) {
			Appointment app = acS.getAppointment(appointmentId);
			long vaccineId = app.getVaccineId();

			Optional<Vaccine> tempVaccine = vcR.findById(vaccineId);

			if (tempVaccine.isPresent()) {
				int qty = tempVaccine.get().getQuantity();
				tempVaccine.get().setQuantity(qty + 1);
				vcM.updateVaccine(tempVaccine.get());
			}
			acS.deleteAppointment(appointmentId);
			member.get().getAppointments().remove(app);
			member.get().setNoOfVaccinesTaken(member.get().getNoOfVaccinesTaken() - 1);
			// add exception when appointment >2
			return memberRepository.save(member.get());

		} else {
			throw new UserException("No such Member");
		}

	}

	// Delete Member
	@Override
	public User deleteMember(long memId) throws UserException {
		Optional<User> member = memberRepository.findById(memId);

		User mem = null;
		if (member.isPresent()) {
			memberRepository.deleteById(memId);
			mem = member.get();
		} else {
			throw new UserException("No such Member");
		}
		return mem;

	}

	// Get member by ID
	@Override
	public User getMemberById(long memId) throws UserException {
		Optional<User> member = memberRepository.findById(memId);
		User mem = null;
		if (member.isPresent()) {
			mem = member.get();
		} else {
			throw new UserException("No such Member");
		}
		return mem;
	}

	// Get Member by AdharNo
	@Override
	public User getMemberByAdharNo(long adharNo) {
		List<User> m = memberRepository.findByAdharNo(adharNo);
		if (m.size() == 0) {
			throw new UserException("No Such Member");
		}
		return m.get(0);
	}

	// Get Member By PanNo
	@Override
	public User getMemberByPanNo(String panNo) throws UserException {
		List<User> m = memberRepository.findByPanoNo(panNo);
		if (m.size() == 0) {
			throw new UserException("No Such Member");
		}
		return m.get(0);
	}

	// Get All members
	@Override
	public List<User> getAllMembers() {
		return memberRepository.findAll();
	}

	@Override
	public User getMemberByMobileNumber(String mobileno) throws UserException {
		Optional<User> m = memberRepository.findByMobileno(mobileno);
		if (m.isPresent()) {
			return m.get();
		}
		throw new UserException("No Such Member");
		
	}
}
