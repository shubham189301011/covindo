package com.cg.vaccine;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import com.cg.vaccine.repository.AppointmentRepository;
import com.cg.vaccine.repository.UserRepository;
import com.cg.vaccine.repository.VaccinatonCenterRepository;
import com.cg.vaccine.repository.VaccineRepository;


@SpringBootApplication
@EnableAutoConfiguration
@EnableConfigurationProperties

public class VaccineApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(VaccineApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
	}

	



}
