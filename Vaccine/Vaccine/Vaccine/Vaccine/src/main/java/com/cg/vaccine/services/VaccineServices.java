package com.cg.vaccine.services;

import java.util.List;

import com.cg.vaccine.entity.Vaccine;
import com.cg.vaccine.exception.VaccineException;

public interface VaccineServices {
	public Vaccine updateVaccine(Vaccine vaccine) throws VaccineException;

	public Vaccine deleteVaccine(long vaccineId) throws VaccineException;

	public Vaccine getVaccineById(long vaccineId) throws VaccineException;

	public Vaccine getVaccineByName(String vaccineName) throws VaccineException;

	public List<Vaccine> getAllVaccines();
}
