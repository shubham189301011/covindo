package com.cg.vaccine.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.vaccine.entity.VaccinationCenter;
import com.cg.vaccine.entity.Vaccine;
import com.cg.vaccine.exception.CenterException;
import com.cg.vaccine.exception.VaccineException;
import com.cg.vaccine.repository.VaccinatonCenterRepository;

@Service
public class VaccinationCenterServicesImpl implements VaccinationCenterServices {

	@Autowired
	private VaccinatonCenterRepository vaccinationCenterRepository;

	// Add a new vaccination center
	@Override
	public VaccinationCenter addVaccineCenter(VaccinationCenter center) {
		return vaccinationCenterRepository.save(center);
	}

	// Add Vaccines in center
	@Override
	public VaccinationCenter addVaccineInCenter(Vaccine vaccine, long centerId) throws CenterException {
		Optional<VaccinationCenter> vaccineCenter = vaccinationCenterRepository.findById(centerId);
		if (vaccineCenter.isPresent()) {
			vaccineCenter.get().getVaccine().add(vaccine);
			return vaccinationCenterRepository.save(vaccineCenter.get());
		} else {
			throw new CenterException("No such Center");
		}
	}

	// Update Vaccine in Center
	@Override
	public VaccinationCenter updateVaccineInCenter(Vaccine vaccine, long centerId) throws CenterException {
		Optional<VaccinationCenter> vaccineCenter = vaccinationCenterRepository.findById(centerId);
		if (vaccineCenter.isPresent()) {
			vaccineCenter.get().getVaccine();
			return vaccinationCenterRepository.save(vaccineCenter.get());
		} else {
			throw new CenterException("No such Center");
		}
	}

	// Delete Vaccine in Center
	@Override
	public VaccinationCenter deleteVaccineInCenter(long vaccineId, long centerId) throws CenterException {
		Optional<VaccinationCenter> vaccineCenter = vaccinationCenterRepository.findById(centerId);

		if (vaccineCenter.isPresent()) {
			int idx = -1;
			for (Vaccine tempV : vaccineCenter.get().getVaccine()) {
				if (tempV.getId() == vaccineId) {
					idx = vaccineCenter.get().getVaccine().indexOf(tempV);
				}
			}

			vaccineCenter.get().getVaccine().remove(idx);
			return vaccinationCenterRepository.save(vaccineCenter.get());
		} else {
			throw new CenterException("No such Center");
		}
	}

	// Update vaccination Center
	@Override
	public VaccinationCenter updateVaccineCenter(VaccinationCenter center) throws CenterException {
		// TODO Auto-generated method stub
		long id = center.getCode();
		Optional<VaccinationCenter> centerPresent = vaccinationCenterRepository.findById(id);
		if (centerPresent.isPresent()) {
			return vaccinationCenterRepository.save(center);
		} else {
			throw new CenterException("No such Center");
		}
	}

	// Delete Vaccination Center
	@Override
	public VaccinationCenter deleteVaccineCenter(long code) throws CenterException {
		Optional<VaccinationCenter> center = vaccinationCenterRepository.findById(code);

		VaccinationCenter cen = null;
		if (center.isPresent()) {
			vaccinationCenterRepository.deleteById(code);
			cen = center.get();
		} else {
			throw new CenterException("No such Center");
		}
		return cen;

	}

	// Get Vaccination Center by Center ID
	@Override
	public VaccinationCenter getVaccineCenter(long centerId) throws CenterException {

		Optional<VaccinationCenter> center = vaccinationCenterRepository.findById(centerId);
		VaccinationCenter cen = null;
		if (center.isPresent()) {
			cen = center.get();
		} else {
			throw new CenterException("No such Center");
		}
		return cen;

	}

	// Get All Vaccine Centers
	@Override
	public List<VaccinationCenter> getAllVaccineCenters() {

		return vaccinationCenterRepository.findAll();
	}

	// Center wise vaccine inventory
	public List<Vaccine> centerVaccineCount(long code) throws VaccineException {

		Optional<VaccinationCenter> center = vaccinationCenterRepository.findById(code);
		VaccinationCenter cen = null;
		if (center.isPresent()) {
			cen = center.get();
		} else {
			throw new VaccineException("No Vaccines found in Center");
		}
		return cen.getVaccine();

	}

}
