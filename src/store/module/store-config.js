import api from "../../api/http.api";
const config = {
  state() {
    return {
      showDrawer: true,
      mainLoading: false,
      config: null
    };
  },
  mutations: {
    setShowDrawer(state, payload) {
      state.showDrawer = payload;
    },
    setLoading(state, payload) {
      state.mainLoading = payload;
    },
    setConfig(state, payload) {
      state.config = payload;
    }
  },
  actions: {
    async setConfig(context) {
      let config = context.getters.getConfig;
      if (!config || config == null) {
        const data = await api.doFetch("get-config");
        if (!data.success) {
          alert("Config tidak ditemukan.");
        } else {
          context.commit("setConfig", data.config);
        }
      }
    }
  },
  getters: {
    getShowDrawer(state) {
      return state.showDrawer;
    },
    getConfig(state) {
      return state.config;
    },
    getLoading(state) {
      return state.mainLoading;
    }
  }
};

export default config;
