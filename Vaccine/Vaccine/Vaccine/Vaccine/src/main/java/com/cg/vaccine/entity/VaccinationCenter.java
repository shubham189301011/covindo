package com.cg.vaccine.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

//Making the VaccinationCenter Table
@Entity
@Table(name = "VaccinationCenter")
public class VaccinationCenter implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "center_id")
	private long code;
	private String centername;
	private String address;
	private String city;
	private String state;
	private String pincode;

	// Connecting center table to vaccines table
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "center_id", referencedColumnName = "center_id")
	private List<Vaccine> vaccines = new ArrayList<>();

	public VaccinationCenter() {
		super();
	}

	// Constructor for the vaccinationCenter
	public VaccinationCenter(String centername, String address, String city, String state, String pincode) {
		super();
		this.centername = centername;
		this.address = address;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
	}

	public VaccinationCenter(long code, String centername, String address, String city, String state, String pincode) {
		super();
		this.code = code;
		this.centername = centername;
		this.address = address;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
	}

	public long getCode() {
		return this.code;
	}

	public List<Vaccine> getVaccine() {
		return this.vaccines;
	}

	public void setVaccine(List<Vaccine> vaccines) {
		this.vaccines = vaccines;
	}

	public String getCentername() {
		return centername;
	}

	public void setCentername(String centername) {
		this.centername = centername;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "VaccinationCenter [code=" + code + ", centername=" + centername + ", address=" + address + ", city="
				+ city + ", state=" + state + ", pincode=" + pincode + ", vaccines=" + vaccines + "]";
	}
}
