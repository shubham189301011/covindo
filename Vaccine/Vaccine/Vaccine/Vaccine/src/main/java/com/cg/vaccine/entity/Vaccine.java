package com.cg.vaccine.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//Making the vaccines table
@Entity
@Table(name = "Vaccines")
public class Vaccine implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long vaccineId;
	private String vaccineName;
	private String description;
	private int quantity;
	private double price;

	public Vaccine() {
		super();
	}

	// Vaccines constructor
	public Vaccine(String vaccineName, String description, int quantity, double price) {
		super();
		this.vaccineName = vaccineName;
		this.description = description;
		this.quantity = quantity;
		this.price = price;
	}

	// Vaccines constructor for testing purpose
	public Vaccine(long vaccineId, String vaccineName, String description, int quantity, double price) {
		super();
		this.vaccineId = vaccineId;
		this.vaccineName = vaccineName;
		this.description = description;
		this.quantity = quantity;
		this.price = price;
	}

	public long getId() {
		return this.vaccineId;
	}

	public String getVaccineName() {
		return vaccineName;
	}

	public void setVaccninName(String vaccineName) {
		this.vaccineName = vaccineName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Vaccine [vaccineId=" + vaccineId + ", vaccineName=" + vaccineName + ", description=" + description
				+ ", quantity=" + quantity + ", price=" + price + "]";
	}

}
