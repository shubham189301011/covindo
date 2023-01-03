package com.cg.vaccine.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.vaccine.entity.VaccinationCenter;
import com.cg.vaccine.entity.Vaccine;
import com.cg.vaccine.exception.CenterException;
import com.cg.vaccine.exception.VaccineException;

@Repository
public interface VaccinatonCenterRepository extends JpaRepository<VaccinationCenter, Long>{

}
