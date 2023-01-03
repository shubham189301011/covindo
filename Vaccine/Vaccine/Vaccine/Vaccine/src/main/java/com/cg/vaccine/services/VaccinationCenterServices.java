package com.cg.vaccine.services;

import java.util.List;
import com.cg.vaccine.exception.CenterException;
import com.cg.vaccine.exception.VaccineException;
import com.cg.vaccine.entity.VaccinationCenter;
import com.cg.vaccine.entity.Vaccine;

public interface VaccinationCenterServices {

	public VaccinationCenter addVaccineCenter(VaccinationCenter center);

	public VaccinationCenter addVaccineInCenter(Vaccine vaccine, long centerId) throws CenterException;

	public VaccinationCenter deleteVaccineInCenter(long Id, long centerId) throws CenterException;

	public VaccinationCenter updateVaccineInCenter(Vaccine vaccine, long centerId) throws CenterException;

	public VaccinationCenter updateVaccineCenter(VaccinationCenter center) throws CenterException;

	public VaccinationCenter deleteVaccineCenter(long code) throws CenterException;

	public VaccinationCenter getVaccineCenter(long code) throws CenterException;

	public List<VaccinationCenter> getAllVaccineCenters() throws CenterException;

	public List<Vaccine> centerVaccineCount(long code) throws VaccineException;

}
