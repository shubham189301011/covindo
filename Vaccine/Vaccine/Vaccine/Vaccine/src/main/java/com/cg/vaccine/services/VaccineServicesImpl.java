package com.cg.vaccine.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.vaccine.entity.Vaccine;
import com.cg.vaccine.exception.VaccineException;
import com.cg.vaccine.repository.VaccineRepository;

@Service
public class VaccineServicesImpl implements VaccineServices {
	@Autowired
	private VaccineRepository vaccineRepository;

	// Update Vaccine
	@Override
	public Vaccine updateVaccine(Vaccine vaccine) throws VaccineException {
		long id = vaccine.getId();
		Optional<Vaccine> vaccinePresent = vaccineRepository.findById(id);

		if (vaccinePresent.isPresent()) {
			return vaccineRepository.save(vaccine);
		} else {
			throw new VaccineException("No such Vaccine!");
		}
	}

	// Delete Vaccine from vaccines table
	@Override
	public Vaccine deleteVaccine(long vaccineId) throws VaccineException {
		Optional<Vaccine> vaccine = vaccineRepository.findById(vaccineId);

		Vaccine vac = null;
		if (vaccine.isPresent()) {
			vaccineRepository.deleteById(vaccineId);
			vac = vaccine.get();
		} else {
			throw new VaccineException("No such Vaccine!");
		}
		return vac;
	}

	// Get Vaccine by ID
	@Override
	public Vaccine getVaccineById(long vaccineId) throws VaccineException {
		Optional<Vaccine> vaccine = vaccineRepository.findById(vaccineId);
		Vaccine vac = null;
		if (vaccine.isPresent()) {
			vac = vaccine.get();
		} else {
			throw new VaccineException("No such Vaccine!");
		}
		return vac;
	}

	// Get Vaccine by name
	@Override
	public Vaccine getVaccineByName(String vaccineName) throws VaccineException {
		List<Vaccine> vac = vaccineRepository.findByVaccineName(vaccineName);
		if (vac.size() == 0) {
			throw new VaccineException("No Such Vaccine!");
		}
		return vac.get(0);
	}

	// Get All Vaccines
	@Override
	public List<Vaccine> getAllVaccines() {
		return vaccineRepository.findAll();
	}

}
