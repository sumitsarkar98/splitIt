import { useMutation } from "@tanstack/react-query";
import { userLogin } from "../api/auth.api";
import { useAuth } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      id: number;
      fullname: string;
      email: string;
      avatar: string;
      created_at: string;
      updated_at: string;
    };
  };
}

export const useLogin = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  return useMutation<LoginResponse, any, { email: string; password: string }>({
    mutationFn: userLogin,

    onSuccess: (response) => {
      // Store user in context
      setUser(response.data.user);

      // Redirect to dashboard
      navigate("/home");
    },

    onError: () => {
      // If login fails, stay or redirect to login
      navigate("/login");
    },
  });
};
