import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
// import Cookies from "js-cookie";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    authErrors: [],
    authStatus: null,
    authMessage: null,
  }),
  getters: {
    user: (state) => state.authUser,
    errors: (state) => state.authErrors,
    status: (state) => state.authStatus,
    message: (state) => state.authMessage,
  },
  actions: {
    /* get token */
    // async getToken() {
    //   await axios.get("/sanctum/csrf-cookie");
    //   this.authUser = response.data;
    // },
    /* get user */

    async getUser() {
      const token = localStorage.getItem("token");
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/user-profile`,
        headers: { 
          'Accept': 'aplication/json', 
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json', 
        },
      };
      
      axios.request(config)
      .then((response) => {
        this.authUser = response.data.userData;
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
      // await axios.get("/api/user-profile").then((response) => {
      //   this.authUser = response.data;
      //   console.log(response.data);

      // });

    },
    /* Login */
    async handleLogin(credentials) {
      // this.authStatus = null;
      // this.authErrors = [];
      // this.authMessage = null;
      // await axios
      //   .post("/api/login", {

      //     email: credentials.email,
      //     password: credentials.password,
      //   })
      //   .then((response) => {
      //     this.authUser = response.data.user;
      //     console.log(response.headers["set-cookie"]);
      //     this.getToken();
      //     if(this.authUser.is_admin){
      //       console.log("Es admin");
      //       router.push({ name: "Dashboard" });
      //     } else {
      //       console.log("No es admin");
      //     router.push({ name: "Home" });
      //     }
      //   })
      //   .catch((error) => {
      //     if (error.response.status === 422) {
      //       this.authErrors = error.response.data.errors;
      //       this.authMessage = error.response.data.message;
      //     }
      //   });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/login`,
        headers: {
          Accept: "aplication/json",
          "Content-Type": "application/json",
        },
        data: credentials,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          let token = response.data.token;
          let admin = response.data.is_admin;
          console.log("-----------token-----------");
          console.log(token);
          console.log("-----------admin-----------");
          console.log(admin);
          localStorage.setItem("token", token);
          if (admin == 1) {
            console.log("Es admin");
            router.push({ name: "Dashboard" });
          } else {
            console.log("No es admin");
            router.push({ name: "Home" });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /* Register */
    async handleRegister(credentials) {
      // this.getToken();
      // this.authErrors = [];
      // this.authStatus = null;
      // this.authMessage = null;
      //     await axios
      // .post("/api/register", {
      //   name: credentials.name,
      //   email: credentials.email,
      //   password: credentials.password,
      //   password_confirmation: credentials.password_confirmation,
      //   lastname: credentials.lastname,
      //   phone: credentials.phone,
      //   address: credentials.address,
      // })
      // .then((response) => {
      //   console.log("fsdfdfds");
      //   router.push({ name: "VerifyEmail" });
      // })
      // .catch((error) => {
      //   if (error.response.status === 422) {
      //     this.authErrors = error.response.data.errors;
      //   }
      // });

      console.log("-----------register-----------");
      console.log("-----------credentils-----------");
      console.log(credentials);
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/register`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: credentials,
      };

      await axios
        .request(config)
        .then((response) => {
          let res =JSON.stringify(response.data)
          console.log("-----------router push VerifyEmail -----------");
          router.push({ name: "VerifyEmail" });
          console.log("-----------register response lock-----------");
          // console.log(res);
          console.log("-----------intento login-----------");
          this.handleLogin(credentials);
          console.log("-----------no hizo login-----------");
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /* Logout */
    handleLogout() {
      // axios
      //   .post("/api/logout")
      //   .then((response) => {
      //     this.authUser = null;
      //     router.push({ name: "Login" });
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });

      console.log("-----------logout-----------");

      const token = localStorage.getItem("token");
      console.log("-----------token-----------");
      console.log(token);

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/logout`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .request(config)
        .then((response) => {
          console.log("-----------response-----------");
          this.authUser = null;
          console.log(JSON.stringify(response.data));
          console.log("-----------revisar token eliminado-----------");
          localStorage.removeItem("token");
          const token = localStorage.getItem("token");
          console.log(token);
          router.push({ name: "Login" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /* Forgot password */
    handleForgotPassword(credentials) {
      this.authErrors = [];
      this.getToken();
      axios
        .post("/api/forgot-password", {
          email: credentials.email,
        })
        .then((response) => {
          this.authStatus = response.data.status;
          console.log(this.authStatus);
          setTimeout(() => {
            router.push({ name: "Login" });
            this.authStatus = null;
          }, 3000);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.authErrors = error.response.data.errors;
          }
        });
    },
    /* Reset password */
    handleResetPassword(credentials) {
      this.authErrors = [];
      this.getToken();
      axios
        .post("/api/reset-password", {
          email: credentials.email,
          password: credentials.password,
          password_confirmation: credentials.password_confirmation,
          token: credentials.token,
        })
        .then((response) => {
          this.authStatus = response.data.status;
          setTimeout(() => {
            router.push({ name: "Login" });
            this.authStatus = null;
          }, 3000);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.authErrors = error.response.data.errors;
          }
        });
    },
    /* Verify email */
    handleSendVerifyEmail() {
      // axios.post("/api/verify-email").then((response) => {
      //   this.message =
      //     "Se ha enviado un correo de verificación a su cuenta de correo.";
      // });
      console.log("-----------handleSendVerifyEmail()-----------");

      const token = localStorage.getItem("token");
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/verify-email`,
        headers: { 
          'Accept': 'application/json', 
          Authorization: `Bearer ${token}`,
        }
      };
      
      axios.request(config)
      .then((response) => {
        console.log("-----------enviando correo-----------");
        this.message =
          "Se ha enviado un correo de verificación a su cuenta de correo.";
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
      
    },
  },
});
