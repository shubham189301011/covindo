import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { IconContext } from "react-icons";
import {GiLoveInjection} from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions';


export default function Login(props) {

  let navigate = useNavigate();
  let dispatch = useDispatch();

  
  const [mobileno, setMobileno] = useState("")
  const [password, setPassword] = useState("")
  
  const[passError, setPassError] = useState(false)
  const[usernameError, setUsernameError] = useState(false)

  const errorInputStyles = {
    "outline" : "2px solid red"
}

  

  const {user} = useSelector(state=>state.users)

// 1,2,3,4,5,6
  const loginMethod = async (e)=>{
    e.preventDefault();
    
    
    if(user.mobileno === mobileno){
      setUsernameError(false)
      if(user.name.toLowerCase().replace(/ /g,'') === password.toLowerCase()){
        
        if(user.role === "ROLE_USER"){
          navigate("/dashboard")
          return
        }
        if(user.role === "ROLE_ADMIN"){
          navigate("/admin")
          return;
        }
      }
      setPassError(true)
      return
    }
    setUsernameError(true)
  }

  useEffect(()=>{
    dispatch(loginUser(mobileno))
  },[mobileno])
  
  return (
    <>
                <IconContext.Provider value={{ color: "#130f40", className: "global-class-name" , size: "5em"}}>
                  <GiLoveInjection/>
                </IconContext.Provider>

                  <form>
                      <div className='error'>
                      <input style={usernameError ? errorInputStyles : {}} type="text" onChange={(e)=>{setMobileno(e.target.value)}} placeholder='Mobile Number'/>
                      {usernameError && <p>User Doesnt Exist</p>}
                      </div>
                      <div className='error'>
                      <input style={passError ? errorInputStyles : {}} type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
                      {passError && <p>Please enter the correct password</p>}
                      </div>
                      <div className='buttons'>
                        <button onClick={loginMethod} className='submit main' type="submit">Sign In</button>
                        
                      </div>
                  </form>
    </>
  )
}
