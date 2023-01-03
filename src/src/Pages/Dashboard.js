import React, { useState} from 'react'
import '../index.scss';
import {Link} from 'react-router-dom'
import AppointmentCard from '../components/AppointmentCard';
import { useSelector, useDispatch } from 'react-redux';
import { addAppointment, logoutUser } from '../redux/actions';
import {motion} from 'framer-motion'


export default function Dashboard() {
  const d = new Date();
  let year = d.getFullYear();

  const {user} = useSelector(state=>state.users)

  const {centers} = useSelector(state=>state.centers)

  

  const dispatch = useDispatch()

  const [vaccines, setVaccines] = useState([{vaccineName :"Select Center First"}])

  

  const[appointmentTab, setAppointmentTab] = useState(false)
  
  const[day, setDay] = useState()  
  const[month, setMonth] = useState()
  const[formYear, setYear] = useState()

  const[centerId, setCenterId] = useState(-1)
  const[slot, setSlot] = useState(-1)
  const[vacine, setVaccine] = useState(-1) 

  const handleSubmit = (e)=>{
    e.preventDefault()
    let temp = {
      'centerId': parseInt(centerId),
      'dateofbooking' : `${formYear}-${month}-${day}`,
      'slot' : slot,
      'bookingstatus': true,
      'vaccineId': parseInt(vacine)
    }
    // axios.put(`http://localhost:9000/members/addAppointment/${user.id}`, temp);
    dispatch(addAppointment(user.id, temp));
    console.log(temp);
  }

  return (
    <motion.div 
     initial={{width: 0}}
     animate={{width: "100vw"}}
     exit={{opacity: "100vw"}} className='dashboard-main user-dash'>
      {
        appointmentTab && (
          <div className='booking-wrapper'>
        <div className='booking'>
        <div onClick={()=>{
          setAppointmentTab(false)
        }} className='appointment-close'>x</div>
        <h1>Book Appointment</h1>
            <form className='app-form'>
            <div>
                <select name='centerId' onChange={(e)=>{
                  if(e.target.value === "-1"){
                    setVaccines([{vaccineName :"Select Center First"}])
                  }
                  setCenterId(e.target.value)
                  let center = centers.filter((center)=> parseInt(center.code) === parseInt(e.target.value))
                  setVaccines(center[0].vaccine)
                }}>
                <option default value="-1">Select Center</option>
                  {centers.map((center)=>{
                    return (
                      <option value={center.code}>{center.centername}</option>
                    )
                  })}
                </select>
                </div>
                <div>
                <select onChange={(e)=>{
                  setSlot(e.target.value)
                }}>
                  <option default>Select Slot</option>
                  <option value='slot1'>9 am -10 am</option>
                  <option value='slot2'>10 am -11 am</option>
                  <option value='slot3'>11 am -12 am</option>
                  <option value='slot4'>12 am -1 am</option>
                  <option value='slot5'>1 am -2 am</option>
                  <option value='slot6'>2 am -3 am</option>
                  <option value='slot7'>3 am -4 am</option>
                  <option value='slot8'>4 am -5 am</option>
                  <option value='slot9'>5 am -6 am</option>

                </select>
                </div>
                <div>
                <select onChange={(e)=>{
                  setVaccine(e.target.value)
                }}>
                  <option default>Please Select Vaccine</option>
                  {
                    vaccines.map((vaccine)=>{
                      console.log(vaccine)
                       return <option className='vaccine-name-form' value={vaccine.id}>{vaccine.vaccineName} - ₹{vaccine.price}</option>
                    })
                  }
                  </select>
                  </div>
                  <div className='date-form'>
                    <select  onChange={(e)=>{
                      setDay(e.target.value)
                    }}>
                    <option default>Please Select Day</option>
                      <option value='01'>1</option>
                      <option value='02'>2</option>
                      <option value='03'>4</option>
                      <option value='04'>5</option>
                      <option value='05'>3</option>
                      <option value='06'>6</option>
                      <option value='07'>7</option>
                      <option value='08'>8</option>
                      <option value='09'>9</option>
                      <option value='10'>10</option>
                      <option value='11'>11</option>
                      <option value='12'>12</option>
                      <option value='13'>13</option>
                      <option value='14'>14</option>
                      <option value='15'>15</option>
                      <option value='16'>16</option>
                      <option value='17'>17</option>
                      <option value='18'>18</option>
                      <option value='19'>19</option>
                      <option value='20'>20</option>
                      <option value='21'>21</option>
                      <option value='22'>22</option>
                      <option value='23'>23</option>
                      <option value='24'>24</option>
                      <option value='25'>25</option>
                      <option value='26'>26</option>
                      <option value='27'>27</option>
                      <option value='28'>28</option>
                      <option value='29'>29</option>
                      <option value='30'>30</option>
                      <option value='31'>31</option>

                    </select>
                    <select  onChange={(e)=>{
                      setMonth(e.target.value)
                    }}>
                    <option default>Please Select Month</option>
                      <option  value='01'>January</option>
                      <option value='02'>February</option>
                      <option value='03'>March</option>
                      <option value='04'>April</option>
                      <option value='05'>May</option>
                      <option value='06'>June</option>
                      <option value='07'>July</option>
                      <option value='08'>August</option>
                      <option value='09'>September</option>
                      <option value='10'>October</option>
                      <option value='11'>November</option>
                      <option value='12'>December</option>

                    </select>
                    <select  onChange={(e)=>{
                      setYear(e.target.value)
                    }}>
                    <option default>Please Select Year</option>
                      <option  value={year}>{year}</option>
                      <option value={year+1}>{year+1}</option>
                      <option value={year+2}>{year+2}</option>
                    </select>


                  </div>
                  <div>
                <button onClick={(e)=>{
                  handleSubmit(e)
                  setAppointmentTab(false)
                }}>Book</button>
                </div>

            </form>
        </div>
      </div>
        )
        
      }



    <nav>
    <ul>
        <li>logo</li>
        <li className='home'><Link to='/dashboard'>Home</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link onClick={()=>{
          dispatch(logoutUser())
        }} to='/'>Logout</Link></li>
        </ul>
    </nav>
      <h1>Dashboard</h1>
      <div className='dashboard-cards'>
        <div className='dashboard-card'>
          <h3>Hello, {user.name}</h3>
          <div className='sections'>
            <div className='appointments'>
              <h1>Appointments</h1>
              <div className='list'>


                {
                  user.appointments?.map((appointment)=>{
                      return (
                        <AppointmentCard key={appointment.id} userAppointment = {appointment} user={user}/>
                      )
                  })
                }

              </div>
              <button onClick={()=>{
                setAppointmentTab(true)
              }} className='appointment-button'>Book your appointment</button>

            </div>
            <div className='news'>
              <h1>News</h1>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
