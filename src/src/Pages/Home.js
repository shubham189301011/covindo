import React, {useState, useEffect} from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup';
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux';
import {  loadAppointments, loadCenters, loadUsers, loadVaccines } from '../redux/actions';
import {motion} from 'framer-motion'

export default function Home() {
    
    const [isSignup, setIsSignup] = useState(false);
    const [signupSuccess, setSignupSuccess] = useState(false);
    let dispatch = useDispatch();


    const {users} = useSelector(state=>state.users)

  

   


    useEffect(()=>{
        dispatch(loadUsers())
        dispatch(loadCenters())
        dispatch(loadAppointments())
        dispatch(loadVaccines())
    }, [dispatch])


    
    const signupStyles = {
      "display" : "none"
     
  }

  const signupLoginWrapperStyles = {
    "gridTemplateColumns" : "1fr",
    "padding" : 0
  }


  return (
    
    <motion.div 
     initial={{width: 0}}
     animate={{width: "100vw"}}
     exit={{opacity: "100vw"}}
     className="main-page">
    <Navbar/>

        
        <div className="hero-wrapper" >

            <div className="first-wrapper half" >
                <div className='circle-2'>
                </div>
            </div>
            <div className="login-wrapper half" style={isSignup ? signupLoginWrapperStyles : {}}>
            <div className='hero' style={isSignup ? signupStyles : {}}>
                <div>
                <h1><span>Co</span>windo</h1>
                <div>
                    <h2>BOOK YOUR WINDOW NOW</h2>
                    <h3>"Before it's too late."</h3>
                </div>
                </div>
            </div>
            <div className='card-wrapper' style={{padding: 0}}>
                <div className='card'>
                <h2>{isSignup? "Sign Up" : "Sign In"}</h2>
                <div className='form-wrapper'>

                {
                isSignup? 
                <Signup users={users} isSignUp = {setIsSignup} isSuccess = {setSignupSuccess}/>
                :
                <Login users={users}/>
                }
                <button className='submit' onClick={ ()=>{
                setIsSignup(!isSignup)
                }}>{isSignup ? "Sign In": "Sign Up"}</button>
                </div>
                </div>
            </div>
            
            
            
            </div>
        </div>
        </motion.div>
   
  )
}
