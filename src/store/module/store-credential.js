import { Cookies } from "quasar";
const credential = {
  state() {
    return {
      userCredential: {
        userName: null,
        userID: null
      }
    };
  },
  mutations: {
    setUserCredential(state, payload) {
      state.userCredential.userName = payload.userName;
      state.userCredential.userID = payload.userID;
    }
  },
  actions: {
    setUserCredential(context, payload) {
      Cookies.remove("userCredential");
      Cookies.set("userCredential", payload, {
        expires: "1d",
        path: "/",
        sameSite: "Lax"
      });
      context.commit("setUserCredential", payload);
    }
  },
  getters: {
    getUserCredential(state) {
      return state.userCredential;
    }
  }
};

export default credential;
