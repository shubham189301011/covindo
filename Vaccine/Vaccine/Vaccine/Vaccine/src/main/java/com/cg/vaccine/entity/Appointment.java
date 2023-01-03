package com.cg.vaccine.entity;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//Making the appointments table
@Entity
@Table(name = "appointments")
public class Appointment implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long bookingid;

	private long centerId;
	private LocalDate dateofbooking;
	private Slot slot;
	private boolean bookingstatus;
	private long vaccineId;

	public Appointment() {
		super();
	}

	// Constructor for appointments class
	public Appointment(long centerId, LocalDate dateofbooking, Slot slot, boolean bookingstatus, long vaccineId) {
		super();

		this.centerId = centerId;
		this.dateofbooking = dateofbooking;
		this.slot = slot;
		this.bookingstatus = bookingstatus;
		this.vaccineId = vaccineId;
	}

	// Constructor for appointments class for testing purpose
	public Appointment(long bookingid, long centerId, LocalDate dateofbooking, Slot slot, boolean bookingstatus,
			long vaccineId) {
		super();
		this.bookingid = bookingid;
		this.centerId = centerId;
		this.dateofbooking = dateofbooking;
		this.slot = slot;
		this.bookingstatus = bookingstatus;
		this.vaccineId = vaccineId;
	}

	public long getId() {
		return this.bookingid;
	}

	public long getVaccineId() {
		return vaccineId;
	}

	public void setVaccineId(long vaccineId) {
		this.vaccineId = vaccineId;
	}

	public long getCenterId() {
		return centerId;
	}

	public void setCenterId(long centerId) {
		this.centerId = centerId;
	}

	public LocalDate getDateofbooking() {
		return dateofbooking;
	}

	public void setDateofbooking(LocalDate dateofbooking) {
		this.dateofbooking = dateofbooking;
	}

	public Slot getSlot() {
		return slot;
	}

	public void setSlot(Slot slot) {
		this.slot = slot;
	}

	public boolean isBookingstatus() {
		return bookingstatus;
	}

	public void setBookingstatus(boolean bookingstatus) {
		this.bookingstatus = bookingstatus;
	}

	@Override
	public String toString() {
		return "Appointment [bookingid=" + bookingid + ", centerId=" + centerId + ", dateofbooking=" + dateofbooking
				+ ", slot=" + slot + ", bookingstatus=" + bookingstatus + ", vaccineId=" + vaccineId + "]";
	}

}
