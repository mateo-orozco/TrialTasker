import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";



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
        async getToken() {
            await axios.get("/sanctum/csrf-cookie");
        },
        async getUser() {
            await this.getToken();
            const response = await axios.get("/api/user");
            this.authUser = response.data;
        },
        async handleLogin(credentials) {
            
            this.authStatus = null;
            this.authErrors = [];
            this.authMessage = null;
            await this.getToken();
            try{
                await axios.post('/login', {
                    email: credentials.email,
                    password: credentials.password,
                });
                router.push({ name: 'Home' });
                
            } catch (error) {
                if(error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                    this.authMessage = error.response.data.message;
                }
            }
        },
        /* Register */
        async handleRegister(credentials) {
            await this.getToken();
            this.authErrors = [];
            this.authStatus = null;
            this.authMessage = null;
            try{
                await axios.post('/register', {
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                    password_confirmation: credentials.password_confirmation,
                    lastname: credentials.lastname,
                    phone: credentials.phone,
                    address: credentials.address,
                });
                router.push({ name: 'Home' });
            }
            catch (error) {
                if(error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleLogout() {
            await axios.post('/logout');
            this.authUser = null;
            router.push({ name: 'Login' });
        },
        async handleForgotPassword(credentials) {
            this.authErrors = [];
            this.getToken(); 
            try { 
                const response = await axios.post('/forgot-password', { 
                    email: credentials.email,
                });
                this.authStatus = response.data.status;
                console.log(this.authStatus);
                setTimeout(() => {
                    router.push({ name: 'Login' });
                    this.authStatus = null;
                }, 3000);
            } catch (error) {
                if(error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleResetPassword(credentials) {
            this.authErrors = [];
            this.getToken();
            try {
                const response = await axios.post('/reset-password', {
                    email: credentials.email,
                    password: credentials.password,
                    password_confirmation: credentials.password_confirmation,
                    token: credentials.token,
                });
                this.authStatus = response.data.status;
                setTimeout(() => {
                    router.push({ name: 'Login' });
                    this.authStatus = null;
                }, 3000);
            } catch (error) {
                if(error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
    }
});