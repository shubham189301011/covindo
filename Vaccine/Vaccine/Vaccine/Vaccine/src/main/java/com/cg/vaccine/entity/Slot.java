package com.cg.vaccine.entity;

public enum Slot {
	slot1("9 am -10 am"),
	slot2("10 am -11 am"),
	slot3("11 am -12 pm"),
	slot4("12 pm -1 pm"),
	slot5("1 pm -2 pm"),
	slot6("2 pm -3 pm"),
	slot7("3 pm -4 am"),
	slot8("4 pm -5 pm"),
	slot9("5 pm -6 pm");
	
	private String timeslot;
	
	private Slot(String timeslot) {
		this.timeslot=timeslot;
	}
	
	public String getTimeslot( ) {
		return timeslot;
	}

	
	
}
