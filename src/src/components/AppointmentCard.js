import React from 'react'
import { useSelector } from 'react-redux'

export default function AppointmentCard(props) {
  const {centers} = useSelector(state=>state.centers)
  
  let center = centers.filter((center)=>props.userAppointment.centerId===center.code)
  let vaccine = center[0].vaccine.filter((vaccine)=>props.userAppointment.vaccineId === vaccine.id) ? center[0].vaccine.filter((vaccine)=>props.userAppointment.vaccineId === vaccine.id) : {}
  console.log(vaccine);
  let slot = "none"
  function slotSetter(){
    if(props.userAppointment.slot === "slot1"){
      slot = "9:30 - 10:30"
    }
    else if(props.userAppointment.slot === "slot2"){
      slot = "10:30 - 11:30"
    }
    else if(props.userAppointment.slot === "slot3"){
      slot = "11:30 - 12:30"
    }
    else if(props.userAppointment.slot === "slot4"){
      slot = "12:30 - 1:30"
    }
    else if(props.userAppointment.slot === "slot5"){
      slot = "1:30 - 2:30"
    }
    else if(props.userAppointment.slot === "slot6"){
      slot = "2:30 - 3:30"
    }
    else if(props.userAppointment.slot === "slot6"){
      slot = "3:30 - 4:30"
    }
    else if(props.userAppointment.slot === "slot6"){
      slot = "4:30 - 5:30"
    }
    else {
      slot = "5:30 - 6:30"
    }
  }
  slotSetter()
  return (
    <>
        <div className='table-appointment'>   
            <div className='row'><div>Booking Id : </div> <div>{props.userAppointment.id}</div></div>
            <div className='row'>Booking Status : <div>{props.userAppointment.bookingstatus? "Booked" : "Not Booked"}</div></div>
            <div className='row'>Center Name : <div>{center[0].centername}</div></div>
            <div className='row'>Date : <div>{props.userAppointment.dateofbooking}</div></div>
            <div className='row'>Slot : <div>{slot}</div></div>
            <div className='row'>Vaccine Name : <div>{vaccine[0].vaccineName}</div></div>
        </div>
    </>
  )
}
