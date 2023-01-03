import * as types from "./actionTypes";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const logedUser = (user) => ({
  type: types.LOGIN_USER,
  payload: user,
});

const loggedOutUser = (user) => ({
  type: types.LOGOUT_USER,
  payload: user,
});

const userDeleted = () => ({
  type: types.DELETE_USERS,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:9000/members/all")
      .then((res) => {
        dispatch(getUsers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loginUser = (mobileno) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:9000/members/get/mobno/${mobileno}`)
      .then((res) => {
        dispatch(logedUser(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logoutUser = () => {
  return function (dispatch) {
    dispatch(loggedOutUser({}));
  };
};

export const updateUser = (user) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:9000/members/update/`, user)
      .then((res) => {
        console.log(res);
        dispatch(loginUser(res.data.mobileno));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addAppointment = (userId, temp) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:9000/members/addAppointment/${userId}`, temp)
      .then((res) => {
        dispatch(logedUser(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:9000/members/delete/${id}`)
      .then((res) => {
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// CENTER ACTIONS

const getCenters = (centers) => ({
  type: types.GET_CENTERS,
  payload: centers,
});

const centerDeleted = () => ({
  type: types.DELETE_USERS,
});

const logCenter = (center) => ({
  type: types.GET_CENTER,
  payload: center,
});

export const loadCenters = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:9000/vaccineCenter/all")
      .then((res) => {
        dispatch(getCenters(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteCenterr = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:9000/vaccineCenter/delete/${id}`)
      .then((res) => {
        dispatch(centerDeleted());
        dispatch(loadCenters());
      })
      .catch((err) => {
        console.log(err);
        console.log(id);
      });
  };
};

export const loadCenter = (centerId) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:9000/vaccineCenter/get/${centerId}`)
      .then((res) => {
        console.log(res);
        dispatch(logCenter(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const AddCenter = (temp) => {
  return function (dispatch) {
    axios
      .post(`http://localhost:9000/vaccineCenter/register`, temp)
      .then((res) => {
        dispatch(loadCenters());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateCenter = (center) => {
  return function (dispatch) {
    axios
      .put("http://localhost:9000/vaccineCenter/update", center)
      .then((res) => dispatch(loadCenters()))
      .catch((err) => console.log(err));
  };
};

// APPOINTMENT Actions

const getAppointments = (appointments) => ({
  type: types.GET_APPOINTMENTS,
  payload: appointments,
});

export const loadAppointments = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:9000/appointment/getAll")
      .then((res) => {
        dispatch(getAppointments(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteAppointment = (userId, appointmentId) => {
  return function (dispatch) {
    axios
      .put(
        `http://localhost:9000/vaccineCenter/deleteVaccine/${userId}/${appointmentId}`
      )
      .then((res) => dispatch(loadAppointments()))
      .catch((err) => console.log(err));
  };
};

// VACCINE ACTIONS

const getVaccines = (users) => ({
  type: types.GET_VACCINES,
  payload: users,
});

export const loadVaccines = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:9000/vaccines/all")
      .then((res) => {
        dispatch(getVaccines(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const AddVaccine = (temp, centerId) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:9000/vaccineCenter/addVaccine/${centerId}`, temp)
      .then((res) => {
        dispatch(loadCenters());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteVaccine = (centerId, vaccineId) => {
  return function (dispatch) {
    axios
      .put(
        `http://localhost:9000/vaccineCenter/deleteVaccine/${centerId}/${vaccineId}`
      )
      .then((res) => dispatch(loadCenter(centerId)))
      .catch((err) => console.log(err));
  };
};

// export const updateVaccine = (center) => {
//   return function (dispatch) {
//     axios.put("http://localhost:9000/vaccineCenter/update", center)
//       .then((res) => {
//         dispatch(loadCenter(center.code));
//         dispatch(loadCenters())
//       })
//       .catch((err) => console.log(err));
//   }
// }
