import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/actions';
import AppointmentCard from './AppointmentCard'
import {AiFillDelete} from 'react-icons/ai'
import { IconContext } from "react-icons";



function UsersList(props) {

    let dispatch = useDispatch();
    let users = props.users;
    const[selectUser, setSelectUser] = useState({})
    const [isSelected , setIsSelected] = useState(false)
    const handleDelete = (id) =>{
        if(window.confirm("Are you sure?")){
            dispatch(deleteUser(id))
        }

    }

    const loadUserPage = (id)=>{
        users.find(user=>{
            setSelectUser(user)
            return user.id === id;
        })
       setIsSelected(true)
       

    }


  return (
    <>
    {
        isSelected && (
            <div className='user-box'>

                <div className='close' onClick={()=>{
                    setIsSelected(false)
                }}>x</div>
                <h1>User Details</h1>
                <div className='deets'>
                    <div className='basic-deets'>
                        
                        <div className='row'>
                            <div>Name: </div>
                            <div>
                                {selectUser.name}
                            </div>
                        </div>
                        <div className='row'>
                            <div>Address:  </div>
                            <div>
                                {selectUser.address}
                            </div>
                        </div>
                        <div className='row'>
                            <div>City: </div>
                            <div>
                                {selectUser.city}
                            </div>
                        </div>
                        <div className='row'>
                            <div>State: </div>
                            <div>
                                {selectUser.state}
                            </div>
                        </div>
                        <div className='row'>
                            <div>Pincode: </div>
                            <div>
                                {selectUser.pincode}
                            </div>
                        </div>
                        <div className='row'>
                            <div>Gender: </div>
                            <div>
                                {selectUser.gender}
                            </div>
                        </div>
                        <div className='row'>
                            <div>Mobile No: </div>
                            <div>
                                {selectUser.mobileno}
                            </div>
                        </div>
                        <div className='row'>
                            <div>Adhar No: </div>
                            <div>
                                {selectUser.adharNo}
                            </div>
                        </div>
                        <div className='row'>
                            <div>Pan No: </div>
                            <div>
                                {selectUser.panoNo}
                            </div>
                        </div>
                        <div className='row'>
                            <div>Vaccines No: </div>
                            <div>
                                {selectUser.noOfVaccinesTaken}
                            </div>
                        </div>
                        <div className='row'>
                            <div>Date Of Birth </div>
                            <div>
                                {selectUser.dob}
                            </div>
                        </div>
                        <div className='row'>
                            <div>Date Of Registration </div>
                            <div>
                                {selectUser.dateofregistration}
                            </div>
                        </div>
                    </div>

                    <div className='appointments-admin'>
                        {selectUser.appointments.map((appointment)=>{
                            return (
                                <AppointmentCard key={appointment.id} userAppointment = {appointment}/>
                            )
                        })}
                    </div>
                </div>
                
            </div>
        )
    }
        
        <div className='dashboard-card'>
        <h1>Users List</h1>
        <div className='table'>
            <div className='row head-row'>
                <div className='head'>ID</div>
                <div  className='head'>Name</div>
                <div  className='head'>Gender</div>
                <div  className='head'>City</div>
                <div className='head'>State</div>
                <div className='head'>Vaccines Taken</div>
                <div className='head'>DEL</div>
            </div>
            {
                users.map((user)=>{
                    return (
                        <div  className='row user'>
                            <div onClick={()=>{
                            loadUserPage(user.id)
                        }}>{user.id}</div>
                            <div onClick={()=>{
                            loadUserPage(user.id)
                        }}>{user.name}</div>
                            <div onClick={()=>{
                            loadUserPage(user.id)
                        }}>{user.gender}</div>
                            <div onClick={()=>{
                            loadUserPage(user.id)
                        }}>{user.city}</div>
                            <div onClick={()=>{
                            loadUserPage(user.id)
                        }}>{user.state}</div>
                            <div onClick={()=>{
                            loadUserPage(user.id)
                        }}>{user.noOfVaccinesTaken}</div>
                            <div ><button className='user-delete' onClick={()=>{
                                handleDelete(user.id)
                            }}>
                            <IconContext.Provider value={{ color: "#130f40", className: "global-class-name" , size: "1.5em"}}>
                                <AiFillDelete/>
                            </IconContext.Provider>
                            </button></div>
                        </div>
                    )
                })
            }
            
        </div>
    </div>
    </>
  )
}

export default UsersList