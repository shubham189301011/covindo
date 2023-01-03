package com.cg.vaccine.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;





//Making the members table
@Entity
@Table(name = "members")
public class User implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String name;
	private LocalDate dob;
	private String gender;
	private String address;
	private String city;
	private String state;
	private String pincode;
	private String panoNo;
	private long adharNo;
	private String fingerprints;
	private String irisscan;
	private int noOfVaccinesTaken;
	

	// Making a connection with appointments
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "member_id", referencedColumnName = "id")
	List<Appointment> appointments = new ArrayList<>();

	private String mobileno;
	private LocalDate dateofregistration;
	private String role = "ROLE_USER"; 
	
	
	
	

	
//	@ManyToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
//	@JoinTable(name = "USER_AUTHORITY", joinColumns = @JoinColumn(referencedColumnName = "id"),inverseJoinColumns = @JoinColumn(referencedColumnName ="id"))
//	private List<Authority> authorities;
	
	
	

	public User() {
		super();
	}

	// Members constructor
	public User(String name, LocalDate dob, String gender, String address, String city, String state, String pincode,
			String panoNo, long adharNo, String fingerprints, String irisscan, String mobileno,
			LocalDate dateofregistration, int noOfVaccinesTaken) {
		super();
		this.name = name;
		this.dob = dob;
		this.gender = gender;
		this.address = address;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		this.panoNo = panoNo;
		this.adharNo = adharNo;
		this.fingerprints = fingerprints;
		this.irisscan = irisscan;
		this.mobileno = mobileno;
		this.dateofregistration = dateofregistration;
		this.noOfVaccinesTaken = noOfVaccinesTaken;
	}

	// Members constructor for testing purpose
	public User(long id, String name, LocalDate dob, String gender, String address, String city, String state,
			String pincode, String panoNo, long adharNo, String fingerprints, String irisscan, String mobileno,
			LocalDate dateofregistration, int noOfVaccinesTaken) {
		super();
		this.id = id;
		this.name = name;
		this.dob = dob;
		this.gender = gender;
		this.address = address;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		this.panoNo = panoNo;
		this.adharNo = adharNo;
		this.fingerprints = fingerprints;
		this.irisscan = irisscan;
		this.noOfVaccinesTaken = noOfVaccinesTaken;
		this.mobileno = mobileno;
		this.dateofregistration = dateofregistration;
	}

	public int getNoOfVaccinesTaken() {
		return noOfVaccinesTaken;
	}

	public void setNoOfVaccinesTaken(int noOfVaccinesTaken) {
		this.noOfVaccinesTaken = noOfVaccinesTaken;
	}

	public List<Appointment> getAppointments() {
		return appointments;
	}

	public void setAppointments(List<Appointment> appointments) {
		this.appointments = appointments;
	}

	public long getId() {
		return this.id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
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

	public String getPanoNo() {
		return panoNo;
	}

	public void setPanoNo(String panoNo) {
		this.panoNo = panoNo;
	}

	public long getAdharNo() {
		return adharNo;
	}

	public void setAdharNo(long adharNo) {
		this.adharNo = adharNo;
	}

	public String getFingerprints() {
		return fingerprints;
	}

	public void setFingerprints(String fingerprints) {
		this.fingerprints = fingerprints;
	}

	public String getIrisscan() {
		return irisscan;
	}

	public void setIrisscan(String irisscan) {
		this.irisscan = irisscan;
	}

	public String getMobileno() {
		return mobileno;
	}

	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}

	public LocalDate getDateofregistration() {
		return dateofregistration;
	}

	public void setDateofregistration(LocalDate dateofregistration) {
		this.dateofregistration = dateofregistration;
	}
	
	

	@Override
	public String toString() {
		return "Member [id=" + id + ", name=" + name + ", dob=" + dob + ", gender=" + gender + ", address=" + address
				+ ", city=" + city + ", state=" + state + ", pincode=" + pincode + ", panoNo=" + panoNo + ", adharNo="
				+ adharNo + ", fingerprints=" + fingerprints + ", irisscan=" + irisscan + ", noOfVaccinesTaken="
				+ noOfVaccinesTaken + ", appointments=" + appointments + ", mobileno=" + mobileno
				+ ", dateofregistration=" + dateofregistration + "]";
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	







}
