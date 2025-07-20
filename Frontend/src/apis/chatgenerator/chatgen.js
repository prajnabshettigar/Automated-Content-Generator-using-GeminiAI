import axios from "axios";
//=======Registration=====

export const generatecontentAPI = async (Userprompt) => {
  const response = await axios.post(
    "http://localhost:5500/api/v1beta/geminiai/generate",
    {
      prompt: Userprompt,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
