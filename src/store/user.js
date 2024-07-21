import { createModel } from "@rematch/core";
import http from "../utils/http";

const User = createModel()({
  name: "user",
  state: {
    logged: false,
    users: [],
    data: "",
  },
  reducers: {
    loginData(state, payload) {
      return {
        ...state,
        data: payload,
      };
    },
    usersReducer(state, payload) {
      return {
        ...state,
        users: payload,
      };
    },
    loginReducer(state, payload) {
      return {
        ...state,
        logged: payload,
      };
    },
    logoutReducer(state) {
      return {
        ...state,
        logged: false,
      };
    },
  },
  effects: (dispatch) => ({
    async login(payload) {
      try {
        const response = await http.post("user/login", payload);
        if (response.status === 201) {
          dispatch.user.loginData(response.data.data);
          console.log(response.data.data);
          // Ensure status is 200 (numeric)
          console.log("res", true);
          dispatch.user.loginReducer(true);
        } else {
          console.log("Login failed", response);
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    },
    async getUsers(payload) {
      console.log(payload);
      const response = await http.get(`user/get/${payload}/`, payload);
      if (response.status === 200) {
        console.log(response);
        dispatch.user.usersReducer(response.data.data);
      }
    },
    async createBroker(payload) {
      console.log(payload);
      const response = await http.post("user", payload);
      if (response.status === 201) {
        dispatch.user.getUsers("broker");
      }
    },
  }),
});

export default User;
