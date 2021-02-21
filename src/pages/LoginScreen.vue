<template>
  <div class="bg-blue-200 w-screen h-screen flex justify-center items-center">
    <div class="boxLogin bg-white rounded-lg p-10 shadow-2xl">
      <div class="w-full text-center mb-5">
        <q-icon name="fas fa-store" class="text-blue-300 text-5xl" />
      </div>
      <div class="logo text-center">
        <h2 class="font-light text-xl">Selamat Datang</h2>
        <h1 class="text-3xl">
          Bintang Putra Motor
        </h1>
      </div>
      <div class="formLogin mt-11">
        <q-form @submit.prevent="login">
          <div>
            <label>Username</label>
            <q-input
              outlined
              type="text"
              placeholder="Input username anda"
              v-model="userName"
              :error="loginInfo.loginErrorState"
              :error-message="loginInfo.loginMsg"
              required
              dense
            >
            </q-input>
          </div>
          <div class="mt-3">
            <label>Password</label>
            <q-input
              outlined
              :type="isPwd ? 'password' : 'text'"
              placeholder="Input password anda"
              v-model="userPass"
              required
              dense
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
          <div class="mt-8">
            <q-btn
              unelevated
              color="light-blue-7"
              size="md"
              class="full-width"
              label="Log In"
              type="submit"
            />
          </div>
        </q-form>
      </div>
      <div class="text-center text-sm text-gray-400 font-light mt-10">
        version 1.0
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from "@vue/composition-api";
import api from "../api/http.api";

export default {
  setup() {
    const state = reactive({
      userName: "",
      userPass: "",
      isPwd: true,
      loginInfo: {
        loginErrorState: null,
        loginMsg: ""
      }
    });

    const login = async () => {
      const data = await api.doFetch("get-user", {
        userName: state.userName,
        userPass: state.userPass
      });

      if (!data.success) {
        state.loginInfo.loginErrorState = true;
        state.loginInfo.loginMsg = "User tidak ditemukan";
      }
    };
    return { ...toRefs(state), login };
  }
};
</script>
<style scoped>
.boxLogin {
  width: 30rem;
  height: 32rem;
}
</style>
