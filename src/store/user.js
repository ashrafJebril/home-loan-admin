import { createModel } from "@rematch/core";
import http from "../utils/http";

const User = createModel()({
  name: "user",
  state: {
    logged: false,
  },
  reducers: {
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
      dispatch.user.loginReducer(true);
      // try {
      //   const response = await http.post("user/login", payload); // Removed space in URL
      //   if (response.status === 200) {
      //     // Ensure status is 200 (numeric)
      //     console.log("res", true);
      //     dispatch.user.loginReducer(true);
      //   } else {
      //     console.log("Login failed", response);
      //   }
      // } catch (error) {
      //   console.error("Error during login:", error);
      // }
    },
  }),
});

export default User;
