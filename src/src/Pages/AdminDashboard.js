import React, { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {logoutUser } from '../redux/actions';

import {useNavigate} from 'react-router-dom'
import UsersList from '../components/UsersList';
import CenterList from '../components/CentersList'
import {motion} from 'framer-motion'



function AdminDashboard() {
    let navigate = useNavigate()
    let dispatch = useDispatch();

    const {users} = useSelector(state=>state.users)

    const {centers} = useSelector(state=>state.centers)

    const [page, setPage] = useState("users")

  


    

  return (
    <motion.div 
     initial={{width: 0}}
     animate={{width: "100vw"}}
     exit={{opacity: "100vw"}}
    className='dashboard-main admin-page'>
        <nav>
    <ul>
        <li>logo</li>
        <li className='home'><div onClick={()=>{
            setPage('users')
        }}>Users List</div></li>
         <li ><div onClick={()=>{
            setPage('centers')
        }}>Centers List</div></li>
        <li className='logout-admin'>
           <div onClick={()=>{
               dispatch(logoutUser())
               navigate("/")
           }}>Logout</div> 
        </li>
        </ul>
    </nav>
    {
        page === "users" ?
        <UsersList users = {users}/> :
        <CenterList centers = {centers}/>
    }
    
        
    
    
        
    </motion.div>
  )
}

export default AdminDashboard