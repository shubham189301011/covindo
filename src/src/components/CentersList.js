import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  updateCenter } from '../redux/actions';

import {
  AddCenter,
  AddVaccine,
  deleteCenterr,
  deleteVaccine /** updateVaccine */,
} from "../redux/actions";
import AppointmentCard from "../components/AppointmentCard";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { IconContext } from "react-icons";

function CentersList(props) {
  const { appointments } = useSelector((state) => state.appointments);
  const [isAddCenter, setIsAddCenter] = React.useState(false);
  const [isUpdateCenter, setIsUpdateCenter] = React.useState(false);
  const [isCenterDetails, setIsCenterDetails] = useState(false);
  const [isAddVaccine, setIsAddVaccine] = useState(false);
  const [isUpdateVaccine, setIsUpdateVaccine] = useState(false);
  let dispatch = useDispatch();

  let centers = props.centers;

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteCenterr(id));
    }
  };

  const handleVaccineDelete = (centerId, vaccineId) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteVaccine(centerId, vaccineId));
      setVaccines((previous) => {
        return previous.filter((vaccine) => vaccine.id !== vaccineId);
      });
    }
  };

  const handleVaccineUpdate = () => {
    let newVaccine = {
      id: vaccine.id,
      vaccineName: vaccineName,
      description: vaccineDesc,
      price: parseInt(vaccinePrice),
      quantity: parseInt(vaccineQuantity),
    };

    // console.log("Printing new Vaccine", newVaccine);
    // console.log("Printing previous vaccines", vaccines);

    setVaccines((prev) => {
      return [...prev.filter((vac) => vac.id !== vaccine.id), newVaccine];
    });

    setIsUpdateVaccine(false);

    // setCenter((prev) => {
    //   return { ...prev, vaccine:vaccines };
    // });

    // console.log("Printing updated vaccines", vaccines);
    // console.log("Printing the updated center", center);
    // dispatch(updateVaccine(center));
  };

  const [vaccineName, setVaccineName] = useState("");
  const [vaccineDesc, setVaccineDesc] = useState("");
  const [vaccinePrice, setVaccinePrice] = useState();
  const [vaccineQuantity, setVaccineQuantity] = useState();

  const handleAddVaccine = () => {
    let temp = {
      vaccineName: vaccineName,
      description: vaccineDesc,
      quantity: parseInt(vaccineQuantity),
      price: parseInt(vaccinePrice),
    };

    dispatch(AddVaccine(temp, center.code));

    setVaccines((prev) => {
      return [...prev, temp];
    });
  };

  const [center, setCenter] = useState({});

  const [vaccine, setVaccine] = useState({});
  const [vaccines, setVaccines] = useState([]);

  const [centername, setCentername] = useState("none");
  const [address, setAddress] = useState("none");
  const [city, setCity] = useState("none");
  const [state, setState] = useState("none");
  const [pincode, setPincode] = useState("none");


  function handleSubmit() {
    let temp = {
      centername: centername,
      address: address,
      city: city,
      state: state,
      pincode: pincode,
      vaccine: [],
    };
    dispatch(AddCenter(temp));

    setIsAddCenter(false);
  }

  const handleUpdateCenter = () => {
    let updatedCenter = {
      code: center.code,
      address: address,
      centername: centername,
      city: city,
      pincode: pincode,
      state: state,
      vaccine: center.vaccine,
    };

    // console.log("Updated center", updatedCenter);
    dispatch(updateCenter(updatedCenter));

    setIsUpdateCenter(false);
  };

  return (
    <>
      {isAddCenter && (
        <div className="add-center-wrapper">
          <div className="add-center">
            <div
              className="center-close"
              onClick={() => {
                setIsAddCenter(false);
              }}
            >
              x
            </div>
            <h1>Add Center</h1>
            <form>
              <input
                onChange={(e) => setCentername(e.target.value)}
                type="text"
                placeholder="Center Name"
              ></input>
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Address 1"
              ></input>
              <input type="text" placeholder="Address 2"></input>
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder="City"
              ></input>
              <input
                onChange={(e) => setState(e.target.value)}
                type="text"
                placeholder="State"
              ></input>
              <input
                onChange={(e) => setPincode(e.target.value)}
                type="text"
                placeholder="Pincode"
              ></input>
            </form>
            <button
              onClick={() => {
                handleSubmit();
              }}
            >
              {" "}
              Add Center{" "}
            </button>
          </div>
        </div>
      )}

      {isUpdateCenter && (
        <div className="add-center-wrapper">
          <div className="add-center">
            <div
              className="center-close"
              onClick={() => {
                setIsUpdateCenter(false);
              }}
            >
              x
            </div>
            <h1>Update Center</h1>
            <form>
              <input
                onChange={(e) => setCentername(e.target.value)}
                type="text"
                placeholder="Center Name"
                defaultValue={center.centername}
              ></input>
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Address 1"
                defaultValue={center.address}
              ></input>
              <input type="text" placeholder="Address 2"></input>
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder="City"
                defaultValue={center.city}
              ></input>
              <input
                onChange={(e) => setState(e.target.value)}
                type="text"
                placeholder="State"
                defaultValue={center.state}
              ></input>
              <input
                onChange={(e) => setPincode(e.target.value)}
                type="text"
                placeholder="Pincode"
                defaultValue={center.pincode}
              ></input>
            </form>
            <button
              onClick={() => {
                handleUpdateCenter();
              }}
            >
              {" "}
              Update Center{" "}
            </button>
          </div>
        </div>
      )}

      {isCenterDetails && (
        <div className="center-details">
          {isAddVaccine && (
            <div className="add-vaccine-tab">
              <div className="add-vaccine-card">
                <div
                  className="center-close"
                  onClick={() => setIsAddVaccine(false)}
                >
                  x
                </div>

                <h1>Add Vaccine</h1>
                <form>
                  <input
                    onChange={(e) => setVaccineName(e.target.value)}
                    type="text"
                    placeholder="Vaccine Name"
                  ></input>
                  <input
                    onChange={(e) => setVaccineDesc(e.target.value)}
                    type="text"
                    placeholder="Description"
                  ></input>
                  <input
                    onChange={(e) => setVaccineQuantity(e.target.value)}
                    type="number"
                    placeholder="Vaccine Quantity"
                  ></input>
                  <input
                    onChange={(e) => setVaccinePrice(e.target.value)}
                    type="number"
                    placeholder="Vaccine Price"
                  ></input>
                </form>
                <button onClick={handleAddVaccine}>Add Vaccine</button>
              </div>
            </div>
          )}

          {isUpdateVaccine && (
            <div className="add-vaccine-tab">
              <div className="add-vaccine-card">
                <div
                  className="center-close"
                  onClick={() => setIsUpdateVaccine(false)}
                >
                  x
                </div>

                <h1>Update Vaccine</h1>
                <form>
                  <input
                    onChange={(e) => setVaccineName(e.target.value)}
                    type="text"
                    placeholder="Vaccine Name"
                    defaultValue={vaccine.vaccineName}
                  ></input>
                  <input
                    onChange={(e) => setVaccineDesc(e.target.value)}
                    type="text"
                    placeholder="Description"
                    defaultValue={vaccine.description}
                  ></input>
                  <input
                    onChange={(e) => setVaccineQuantity(e.target.value)}
                    type="number"
                    placeholder="Vaccine Quantity"
                    defaultValue={vaccine.quantity}
                  ></input>
                  <input
                    onChange={(e) => setVaccinePrice(e.target.value)}
                    type="number"
                    placeholder="Vaccine Price"
                    defaultValue={vaccine.price}
                  ></input>
                </form>
                <button onClick={handleVaccineUpdate}>Update Vaccine</button>
              </div>
            </div>
          )}

          <div
            onClick={() => setIsCenterDetails(false)}
            className="center-close cen"
          >
            x
          </div>
          <div className="heading-div">
            <h1>Center Details</h1>
          </div>
          <div className="center-contents">
            <div className="grid-1">
              <div className="deets-row">
                <div> Code : </div>
                <div>{center.code}</div>
              </div>
              <div className="deets-row">
                <div> Name : </div>
                <div>{center.centername}</div>
              </div>
              <div className="deets-row">
                <div>Address : </div>
                <div>{center.address}</div>
              </div>
              <div className="deets-row">
                <div> City : </div>
                <div>{center.city}</div>
              </div>
              <div className="deets-row">
                <div>State : </div>
                <div>{center.state}</div>
              </div>
              <div className="deets-row">
                <div>Pincode : </div>
                <div>{center.pincode}</div>
              </div>
            </div>
            <div className="grid-2">
              {appointments
                .filter((appointment) => appointment.centerId === center.code)
                .map((appointment) => {
                  return (
                    <AppointmentCard
                      key={appointment.id}
                      userAppointment={appointment}
                    />
                  );
                })}
            </div>
            <div className="vaccines-div">
              <div className="heading">
                <h1>Vaccine List</h1>
                <button onClick={() => setIsAddVaccine(true)}>
                  Add Vaccine
                </button>
              </div>
              <div className="vaccines-list">
                <div className="vaccine-row head">
                  <div>ID</div>
                  <div>Name</div>
                  <div>Price</div>
                  <div>Quantity</div>
                </div>
                {vaccines.map((vaccine, idx) => {
                  return (
                    <div key={idx} className="vaccine-row">
                      <div>{idx + 1}</div>
                      <div>{vaccine.vaccineName}</div>
                      <div>₹{vaccine.price} </div>
                      <div>{vaccine.quantity}</div>
                      <div
                        onClick={() =>
                          handleVaccineDelete(center.code, vaccine.id)
                        }
                      >
                        Delete
                      </div>
                      <div
                        onClick={() => {
                          setVaccine(vaccine);
                          setVaccineName(vaccine.vaccineName);
                          setVaccineDesc(vaccine.description);
                          setVaccinePrice(vaccine.price);
                          setVaccineQuantity(vaccine.quantity);
                          setIsUpdateVaccine(true);
                        }}
                      >
                        Update
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="dashboard-card center">
        <h1>Centers List</h1>
        <div className="table">
          <div className="row head-row">
            <div className="head">ID</div>
            <div className="head">Name</div>
            <div className="head">Gender</div>
            <div className="head">City</div>
            <div className="head">State</div>
            <div className="head">DELETE</div>
            <div className="head">EDIT</div>
          </div>
          {centers.map((center, idx) => {
            return (
              <div key={idx} className="row user">
                <div
                  onClick={() => {
                    setIsCenterDetails(true);
                    setCenter(center);
                    setVaccines(center.vaccine);
                  }}
                >
                  {idx + 1}
                </div>
                <div
                  onClick={() => {
                    setIsCenterDetails(true);
                    setCenter(center);
                    setVaccines(center.vaccine);
                  }}
                >
                  {center.centername}
                </div>
                <div
                  onClick={() => {
                    setIsCenterDetails(true);
                    setCenter(center);
                    setVaccines(center.vaccine);
                  }}
                >
                  {center.city}
                </div>
                <div
                  onClick={() => {
                    setIsCenterDetails(true);
                    setCenter(center);
                    setVaccines(center.vaccine);
                  }}
                >
                  {center.state}
                </div>
                <div
                  onClick={() => {
                    setIsCenterDetails(true);
                    setCenter(center);
                    setVaccines(center.vaccine);
                  }}
                >
                  {center.pincode}
                </div>
                <div
                  onClick={() => {
                    handleDelete(center.code);
                  }}
                >
                  <button className="user-delete">
                    <IconContext.Provider
                      value={{
                        color: "#130f40",
                        className: "global-class-name",
                        size: "1.5em",
                      }}
                    >
                      <AiFillDelete />
                    </IconContext.Provider>
                  </button>
                </div>
                <div
                  onClick={() => {
                    setCenter(center);
                    setCentername(center.centername);
                    setAddress(center.address);
                    setCity(center.city);
                    setState(center.state);
                    setPincode(center.pincode);
                    setIsUpdateCenter(true);
                  }}
                >
                  <button className="user-delete">
                    <IconContext.Provider
                      value={{
                        color: "#130f40",
                        className: "global-class-name",
                        size: "1.5em",
                      }}
                    >
                      <AiFillEdit />
                    </IconContext.Provider>
                  </button>
                </div>
              </div>
            );
          })}
          <div className="add-row">
            <button
              onClick={() => {
                setIsAddCenter(true);
              }}
            >
              Add Center
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CentersList;
