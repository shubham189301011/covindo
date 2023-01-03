package com.cg.vaccine.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.vaccine.entity.User;
import com.cg.vaccine.entity.Vaccine;

@Repository
public interface VaccineRepository extends JpaRepository<Vaccine, Long>{
	public List<Vaccine> findByVaccineName(String vaccineName);
}
