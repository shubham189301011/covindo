import React, { useState } from "react";
import "../index.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/actions";
import {Link} from 'react-router-dom'
import {  logoutUser } from '../redux/actions';
import {motion} from 'framer-motion'





export default function Profile() {
  let { user } = useSelector((state) => state.users);
  let dispatch = useDispatch();
  const id = user.id;
  const appointments = user.appointments;
  const role = user.role;
  const irisscan = user.irisscan;
  const dateofregistration = user.dateofregistration;
  const fingerprints = user.fingerprints;
  const [isEdit1, setIsEdit1] = useState(false);
  const [name, setName] = useState(user.name);
  const [isEdit2, setIsEdit2] = useState(false);
  const [dob, setDob] = useState(user.dob);
  const [isEdit3, setIsEdit3] = useState(false);
  const [gender, setGender] = useState(user.gender);
  const [isEdit4, setIsEdit4] = useState(false);
  const [address, setAddress] = useState(user.address);
  const [isEdit5, setIsEdit5] = useState(false);
  const [state, setState] = useState(user.state);
  const [isEdit6, setIsEdit6] = useState(false);
  const [pincode, setPincode] = useState(user.pincode);
  const [isEdit7, setIsEdit7] = useState(false);
  const [panoNo, setPanoNo] = useState(user.panoNo);
  const [isEdit8, setIsEdit8] = useState(false);
  const [adharNo, setAdharNo] = useState(user.adharNo);
  const [isEdit9, setIsEdit9] = useState(false);
  const [mobileno, setMobileNo] = useState(user.mobileno);
  const [isEdit10, setIsEdit10] = useState(false);
  const [noOfVaccinesTaken, setNoOfVaccinesTaken] = useState(
    user.noOfVaccinesTaken
  );
  const [isEdit11, setIsEdit11] = useState(false);
  const [city, setCity] = useState(user.city);
  console.log(isEdit1);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsEdit1(false)
    setIsEdit2(false)
    setIsEdit3(false)
    setIsEdit4(false)
    setIsEdit5(false)
    setIsEdit6(false)
    setIsEdit7(false)
    setIsEdit8(false)

    user = {
      name,
      dob,
      gender,
      address,
      city,
      state,
      pincode,
      panoNo,
      adharNo,
      mobileno,
      noOfVaccinesTaken,
      id,
      appointments,
      role,
      irisscan,
      dateofregistration,
      fingerprints,
    };
    alert("User has been updated")
    dispatch(updateUser(user));
  };

  return (
    <motion.div 
     initial={{width: 0}}
     animate={{width: "100vw"}}
     exit={{opacity: "100vw"}} className="dashboard-main user-dash">
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
      <div className="page">
        <div className="profile">
          <h2 className="profile-heading">Profile</h2>
        </div>


        <form className="update-form" >
          <div className="heading">
          <div>
           <p> Name :</p>
            {isEdit1 ? (
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
              ></input>
            ) : (
              <p className="details">{name}</p>
            )}
            </div>
            <button
              className="submit main"
              onClick={(e) => {e.preventDefault(); setIsEdit1(!isEdit1)}}
            >
              Edit
            </button>
          </div>

          <div className="heading">
          <div>
            <p>Date of Birth :</p>
            {isEdit2 ? (
              <input
                onChange={(e) => setDob(e.target.value)}
                value={dob}
              ></input>
            ) : (
              <p className="details">{dob}</p>
            )}
            </div>
            <button
              className="submit main"
              onClick={(e) => {e.preventDefault(); setIsEdit2(!isEdit2)}}
            >
              Edit
            </button>
          </div>

          <div className="heading">
          <div>
            <p>Gender :</p>
            {isEdit3 ? (
              <input
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              ></input>
            ) : (
              <p className="details">{gender}</p>
            )}
            </div>
            <button
              className="submit main"
              onClick={(e) => {e.preventDefault(); setIsEdit3(!isEdit3)}}
            >
              Edit
            </button>
          </div>

          <div className="heading">
          <div>
            <p>Address :</p>
            {isEdit4 ? (
              <input
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              ></input>
            ) : (
              <p className="details">{address}</p>
            )}
            </div>
            <button
              className="submit main"
              onClick={(e) => { e.preventDefault(); setIsEdit4(!isEdit4)}}
            >
              Edit
            </button>
          </div>

          <div className="heading">
          <div>
            <p>City :</p>
            {isEdit11 ? (
              <input
                onChange={(e) => setCity(e.target.value)}
                value={city}
              ></input>
            ) : (
              <p className="details">{city}</p>
            )}
            </div>
            <button
              className="submit main"
              onClick={(e) => {e.preventDefault(); setIsEdit11(!isEdit11)}}
            >
              Edit
            </button>
          </div>

          <div className="heading">
          <div>
            <p>State :</p>
            {isEdit5 ? (
              <input
                onChange={(e) => setState(e.target.value)}
                value={state}
              ></input>
            ) : (
              <p className="details">{state}</p>
            )}
            </div>
            <button
              className="submit main"
              onClick={(e) => {e.preventDefault(); setIsEdit5(!isEdit5)}}
            >
              Edit
            </button>
          </div>

          <div className="heading">
          <div>
            <p>Pincode :</p>
            {isEdit6 ? (
              <input
                onChange={(e) => setPincode(e.target.value)}
                value={pincode}
              ></input>
            ) : (
              <p className="details">{pincode}</p>
            )}
            </div>
            <button
              className="submit main"
              onClick={(e) =>{e.preventDefault(); setIsEdit6(!isEdit6)}}
            >
              Edit
            </button>
          </div>

          <div className="heading">
          <div>
            
            <p>Pan Number :</p>
            {isEdit7 ? (
              <input
                onChange={(e) => setPanoNo(e.target.value)}
                value={panoNo}
              ></input>
            ) : (
              <p className="details">{panoNo}</p>
            )}
            </div>
            <button
              className="submit main"
              onClick={(e) => {e.preventDefault();setIsEdit7(!isEdit7)}}
            >
              Edit
            </button>
          </div>

          <div className="heading">
          <div>
            <p>Adhar Number :</p>
            {isEdit8 ? (
              <input
                onChange={(e) => setAdharNo(e.target.value)}
                value={adharNo}
              ></input>
            ) : (
              <p className="details">{adharNo}</p>
            )}
            </div>
            <button
              className="submit main"
              onClick={(e) => {e.preventDefault();setIsEdit8(!isEdit8)}}
            >
              Edit
            </button>
          </div>

          <div className="heading">
          <div>
            <p>Mobile Number :</p>
            {isEdit9 ? (
              <input
                onChange={(e) => setMobileNo(e.target.value)}
                value={mobileno}
              ></input>
            ) : (
              <p className="details">{mobileno}</p>
            )}
            {/* <button className='edit' onClick={() => setIsEdit9(!isEdit9)}>Edit</button> */}
            </div>
          </div>

          <div className="heading">
          <div>
            
            <p>Number of Vaccines Taken :</p>
            {isEdit10 ? (
              <input
                onChange={(e) => setNoOfVaccinesTaken(e.target.value)}
                value={noOfVaccinesTaken}
              ></input>
            ) : (
              <p className="details">{noOfVaccinesTaken}</p>
            )}
            </div>
            <button
              className="submit main"
              onClick={(e) => {e.preventDefault();setIsEdit10(!isEdit10)}}
            >
              Edit
            </button>
          </div>

          <button type="submit" onClick={(e)=>onSubmit(e)} className="submit main">
            Update
          </button>
        </form>
      </div>
    </motion.div>
  );
}
