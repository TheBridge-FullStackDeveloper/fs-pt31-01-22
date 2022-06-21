import instance from "../config/axiosInstance";

export const registerUser = ({ email, password, username }) =>
  instance.post("/auth/register", {
    email,
    password,
    username,
  });

export const loginUser = async ({ email, password, username }, setUser) => {
  await instance.post(
    "/auth/login",
    {
      email,
      password,
      username,
    },
    { withCredentials: true }
  );

  fetchUser(setUser);
};

export const fetchUser = async (setUser) => {
  const data = await instance.get("/user", {
    withCredentials: true,
  });
  setUser(data.data.data);
};
