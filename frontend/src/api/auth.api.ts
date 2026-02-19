// api/auth.api.ts
import axios from "axios";

export const userLogin = async (credentials: {
  email: string;
  password: string;
}) => {
  const { data } = await axios.post(
    "http://localhost:3000/api/v1/auth/login",
    credentials,
    { withCredentials: true },
  );
  return data;
};
