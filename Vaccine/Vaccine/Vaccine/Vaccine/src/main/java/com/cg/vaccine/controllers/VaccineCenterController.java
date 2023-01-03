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

import com.cg.vaccine.entity.User;
import com.cg.vaccine.entity.VaccinationCenter;
import com.cg.vaccine.entity.Vaccine;
import com.cg.vaccine.exception.CenterException;
import com.cg.vaccine.exception.UserException;
import com.cg.vaccine.exception.VaccineException;
import com.cg.vaccine.services.VaccinationCenterServices;

@RestController
@CrossOrigin
@RequestMapping("/vaccineCenter")
public class VaccineCenterController {
	
	@Autowired
	private VaccinationCenterServices vcs;
	
	@PutMapping("/addVaccine/{centerId}")
	public VaccinationCenter addVaccine(@RequestBody Vaccine vaccine,@PathVariable("centerId")long centerId) throws CenterException
	{
		return vcs.addVaccineInCenter(vaccine, centerId);
	}
	
	@PutMapping("/deleteVaccine/{centerId}/{vaccineId}")
	public VaccinationCenter deleteVaccine(@PathVariable("vaccineId") long vaccineId,@PathVariable("centerId")long centerId) throws CenterException
	{
		return vcs.deleteVaccineInCenter(vaccineId, centerId);
	}
	
	@PostMapping("/register")
	public VaccinationCenter addCenter(@RequestBody VaccinationCenter center) {
		return vcs.addVaccineCenter(center);
	}
	
	@PutMapping("/update")
	public VaccinationCenter updateCenter(@RequestBody VaccinationCenter center) throws CenterException{
		return vcs.updateVaccineCenter(center);
	}
	
	@DeleteMapping("/delete/{id}")
	public VaccinationCenter deleteCenter(@PathVariable("id") long id) throws  CenterException{
		return vcs.deleteVaccineCenter(id);
	}
	
	@GetMapping("/get/{id}")
	public VaccinationCenter getCenterById(@PathVariable("id") long id) throws CenterException{
		return vcs.getVaccineCenter(id);
	}
	@GetMapping("/all")
	public List<VaccinationCenter> getAllCenters() throws CenterException{
		return vcs.getAllVaccineCenters();
	}
	@GetMapping("/vaccines/{id}")
	public List<Vaccine> centerVaccines(@PathVariable("id") long id)throws VaccineException{
		return vcs.centerVaccineCount(id);
	}

}
