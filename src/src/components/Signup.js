import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../redux/actions';

export default function Signup(props) {

    const errorInputStyles = {
        "outline" : "2px solid red"
    }
    const[nameError, setNameError] = useState(false)
    const[dobError, setDobError] = useState(false)
    const[genderError, setGenderError] = useState(false)
    const[addressError, setAddressError] = useState(false)
    const[cityError, setCityError] = useState(false)
    const[stateError, setStateError] = useState(false)
    const[pinError, setPinError] = useState(false)
    const[panError, setPanError] = useState(false)
    const[adharError, setAdharError] = useState(false)
    const[mobileError, setMobileError] = useState(false)
    const[countError, setCountError] = useState(false)
    const[userExists, setUserExists] = useState(false)

    const[error, setError] = useState(false)

    let dispatch = useDispatch();
    const {users} = useSelector(state=>state.users)
    function getCurrentDate(separator=''){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}-${separator}${month<10?`0${month}`:`${month}`}-${separator}${date<10?`0${date}`: `${date}`}`
    }
    const date = getCurrentDate();
    console.log(date);

    const[user, setUser] = useState({"dateofregistration" : date,"fingerprints": "true",
    "irisscan" : "true", "name": "none", "dob" : "none", "gender": "none", "address": "none", "city": "none", "state": "none", "pincode": "none", "panoNo" : "none", "adharNo": "none", "mobileno": "none", "noOfVaccinesTaken": "none" })
    console.log(user);
    

    const addUser = (e)=>{
        e.preventDefault();
        if(user.name === "none" || user.name === ""){
            setError(true)
            setNameError(true)
        }
        if(user.dob === "none" || user.dob === "none"){
            setError(true)
            setDobError(true)
        }
        if(user.gender === "none" || user.gender === ""){
            setError(true)
            setGenderError(true)
        }
        if(user.address === "none" || user.address === ""){
            setError(true)
            setAddressError(true)
        }
        if(user.city === "none" || user.city === ""){
            setError(true)
            setCityError(true)
        }
        if(user.state === "none" || user.state === "none"){
            setError(true)
            setStateError(true)
        }
        if(user.pincode === "none" ||user.pincode === ""){
            setError(true)
            setPinError(true)
        }
        if(user.panoNo === "none" || user.panoNo === ""){
            setError(true)
            setPanError(true)
        }
        if(user.adharNo === "none" || user.adharNo === ""){
            setError(true)
            setAdharError(true)
        }
        if(user.mobileno === "none" || user.mobileno === ""){
            setError(true)
            setMobileError(true)
        }
        if(user.noOfVaccinesTaken === "none" || user.mobileno === ""){
            setError(true)
            setCountError(true)
        }

        const checkIfUserExists = ()=>{
            const exists = users.map((user)=> user.mobileno)

            console.log(exists)
            if(exists.includes(user.mobileno)){
                setError(true)
                setUserExists(true)
                return true
            }
            return false
        }

        if(!error){
            
           if(!checkIfUserExists()){
            axios.post("http://localhost:9000/members/register", user)
                .then(response =>{
                    if(response.data != null){
                        setUser({"dateofregistration" : date,"fingerprints": "true",
            "irisscan" : "true"})
                        
                        props.isSignUp(false)
                        props.isSuccess(true);
                        props.isSuccess(false);
                        dispatch(loadUsers())
                    }
                    else{
                        alert("Error")
                    }
                })
                .catch(error=>{
                    console.log(error);
                }) 
            }
        }
        
    }
    console.log(user);

    const handleChange = (e)=>{
        
        setUser((prevData)=>{
            let n = e.target.name;
            let v = e.target.value;
            if(n === "name"){
                if(v.length < 5){
                    setNameError(true)
                    setError(true)
                }
                else{
                    setNameError(false)
                    setError(false)
                }
            }
            if(n === "dob"){
                if(v.length < 10){
                    setDobError(true)
                    setError(true)
                }
                else{
                    setDobError(false)
                    setError(false)
                }
            }
            if(n === "gender"){
                if(v === "none"){
                    setGenderError(true)
                    setError(true)
                }
                else{
                    setGenderError(false)
                    setError(false)
                }
            }
            if(n === "address"){
                if(v.length < 5){
                    setAddressError(true)
                    setError(true)
                }
                else{
                    setAddressError(false)
                    setError(false)
                }
            }
            if(n === "city"){
                if(v.length < 4){
                    setCityError(true)
                    setError(true)
                }
                else{
                    setCityError(false)
                    setError(false)
                }
            }
            if(n === "state"){
                if(v.length < 3){
                    setStateError(true)
                    setError(true)
                }
                else{
                    setStateError(false)
                    setError(false)
                }
            }
            if(n === "pincode"){
                if(v.length !== 6){
                    setPinError(true)
                    setError(true)
                }
                else{
                    setPinError(false)
                    setError(false)
                }
            }
            if(n === "panoNo"){
                if(v.length !== 8){
                    setPanError(true)
                    setError(true)
                }
                else{
                    setPanError(false)
                    setError(false)
                }
            }
            if(n === "adharNo"){
                if(v.length !== 12){
                    setAdharError(true)
                    setError(true)
                }
                else{
                    setAdharError(false)
                    setError(false)
                }
            }
            if(n === "mobileno"){
                if(v.length !== 10){
                    setMobileError(true)
                    setError(true)
                }
                else{
                    setMobileError(false)
                    setError(false)
                }
            }
            if(n === "noOfVaccinesTaken"){
                if(parseInt(v) > 2 || parseInt(v) < 0){
                    setCountError(true)
                    setError(true)
                }
                else{
                    setCountError(false)
                    setError(false)
                }
            }
            let obj= {...prevData}
            if(n === "noOfVaccinesTaken"){
                obj[n] = parseInt(v);
            }
            else{
                obj[n] = v;
            }
            return obj;
        })
    }

    





  return (
    <>
        <form className='signup-form' onSubmit={addUser}>
        <div className='error'>
        <input style={nameError ? errorInputStyles : {}} name='name' onChange={handleChange} type="text" placeholder='Name*'/>
        { nameError && <p>Name should be atleast 5 letters</p> }
        </div>
        <div className='error'>
        <input style={dobError ? errorInputStyles : {}} onChange={handleChange} name='dob' type="text" placeholder='Date of Birth (YYYY-MM-DD)*'/>
        {dobError && <p>Date is in wrong format</p>}
        </div>
        <div className='error'>
        <select style={genderError ? errorInputStyles : {}} onChange={handleChange} defaultValue="none" name="gender">
            <option value="none" >Gender*</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">other</option>
        </select>
        {genderError && <p>Please select the gender</p>}
        </div>

        <div className='error'>
        <input style={addressError ? errorInputStyles : {}} onChange={handleChange} name='address' type="text" placeholder='Address 1*'/>
        {addressError && <p>Please enter the address</p>}
        </div>
        <input style={false ? errorInputStyles : {}} name='address-2' type="text" placeholder='Address 2'/>
        
        <div className='error'>
        <input style={cityError ? errorInputStyles : {}} onChange={handleChange} name='city' type="text" placeholder='City*'/>
        {cityError && <p>Please enter a city</p>}
        </div>
        <div className='error'>
        <input style={stateError ? errorInputStyles : {}} onChange={handleChange} name='state' type="text" placeholder='State*'/>
        {stateError && <p>Please enter a state</p>}
        </div>

        <div className='error'>
        <input style={pinError ? errorInputStyles : {}} onChange={handleChange} name='pincode' type="text" placeholder='Pin Code*'/>
        {pinError && <p>Please enter a valid Pincode</p>}
        </div>
        
        <div className='error'>
        <input style={panError ? errorInputStyles : {}} onChange={handleChange} name='panoNo' type="text" placeholder='Pan Number*'/>
        {panError && <p>Please enter a valid Pan Id</p>}
        </div>
        
       
        <div className='error'>
        <input style={adharError ? errorInputStyles : {}} onChange={handleChange} name='adharNo' type="text" placeholder='Aadhar Number*'/>
        {adharError && <p>Please enter a valid Adhar Number</p>}
        </div>

        <div className='error'>
        <input style={mobileError || userExists ? errorInputStyles : {}} onChange={handleChange} name='mobileno' type="text" placeholder='Mobile Number*'/>
        {mobileError && <p>Please enter a valid Mobile Number</p>}
        {userExists && <p>User Already Exists.</p>}
        </div>

        <div className='error'>
        <input style={countError ? errorInputStyles : {}} onChange={handleChange} name='noOfVaccinesTaken' type="number" placeholder='Vaccine Count'/>
        {countError && <p>Please enter a number of vaccines taken</p>}
        
        </div>
        
        
        
        
        <div className='buttons'>
            <button className='submit main' type="submit">Sign Up</button>                
        </div>

        </form>  
    </>
  )
}
