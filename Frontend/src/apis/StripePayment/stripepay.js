import axios from "axios";
//=======Registration=====

export const handlefreesubscriptnAPI = async () => {
  const response = await axios.post(
    "http://localhost:5500/api/v1/stripe/freeplan",
    {},
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
//---------Stripe Payment Intent-----------------
export const stripepaymentintentAPI = async (payment) => {
  const response = await axios.post(
    "http://localhost:5500/api/v1/stripe/checkout",
    {
      amount: Number(payment?.amount),
      Subscription_plan: payment?.Subscription_plan,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
//---------Verify Stripe Payment Intent-----------------
export const verificationstripepayAPI = async (paymentId) => {
 
  const response = await axios.post(
    `http://localhost:5500/api/v1/stripe/verify-pay/${paymentId}`,
    {},
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
