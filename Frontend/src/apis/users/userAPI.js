import axios from "axios";
//...........Registration..............
export const registerAPI = async (userData) => {
  const response = await axios.post(
    "http://localhost:5500/api/v1/users/register",
    {
      email: userData?.email,
      password: userData?.password,
      username: userData?.username,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
//............Login....................
export const loginAPI = async (userData) => {
  const response = await axios.post(
    "http://localhost:5500/api/v1/users/login",

    {
      email: userData?.email,
      password: userData?.password,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
export const checkUserAuthStatusAPI = async () => {
  const response = await axios.get(
    "http://localhost:5500/api/v1/users/auth/check",
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
export const logoutAPI = async () => {
  const response = await axios.post(
    "http://localhost:5500/api/v1/users/logout",
    {},
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
export const getuserprofileAPI = async () => {
  const response = await axios.get(
    "http://localhost:5500/api/v1/users/profile",

    {
      withCredentials: true,
    }
  );
  return response?.data;
};
