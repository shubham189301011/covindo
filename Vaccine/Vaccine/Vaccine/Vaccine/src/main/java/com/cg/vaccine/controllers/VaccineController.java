package com.cg.vaccine.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.vaccine.entity.Vaccine;
import com.cg.vaccine.exception.VaccineException;
import com.cg.vaccine.services.VaccineServices;


@RestController
@CrossOrigin
@RequestMapping("/vaccines")
public class VaccineController {
	@Autowired
	private VaccineServices vacS;
	
	@PutMapping("/update")
	public Vaccine updateVaccine(@RequestBody Vaccine vaccine) throws VaccineException{
		return vacS.updateVaccine(vaccine);
	}
	
	@DeleteMapping("delete/{id}")
	public Vaccine deleteVaccine(@PathVariable("id") long id) throws VaccineException{
		return vacS.deleteVaccine(id);
	}
	
	@GetMapping("get/{id}")
	public Vaccine getVaccineById(@PathVariable("id") long id) throws VaccineException{
		return vacS.getVaccineById(id);
	}
	@GetMapping("get/name/{name}")
	public Vaccine getVaccineByName(@PathVariable("name") String name) throws VaccineException{
		return vacS.getVaccineByName(name);
	}
	
	@GetMapping("/all")
	public List<Vaccine> getAllVaccines(){
		return vacS.getAllVaccines();
	}
}
