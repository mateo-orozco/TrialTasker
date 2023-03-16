import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore('users', {
    state: () => ({
        usersStore: [],
        userStore: {},  
        errorsStore: [],
        messagesStore: [],
    }),
    getters: {
        users: (state) => state.usersStore,
        user: (state) => state.userStore,
        errors: (state) => state.errorsStore,
        messages: (state) => state.messagesStore,
    },
    actions: {
        /* get all users */
        async getUsers() {
            await axios.get('/api/users')
            .then(response => {
                this.usersStore = response.data;
            });
        },
        /* get users page */
        async getUsersPage(page) {
            await axios.get(page)
            .then(response => {
                this.usersStore = response.data;
            });
        },
        /* get user */
        async getUser(id) {
            await axios.get('/api/users/' + id)
            .then(response => {
                this.userStore = response.data;
            });
        },
        /* create user */
        async createUser(user) {
            await axios.post('/api/users', user)
            .then(response => {
                this.messagesStore = response.data;
            })
            .catch(error => {
                this.errorsStore = error.response.data;
            });
        },
        /* update user */
        async updateUser(user) {
            await axios.put('/api/users/' + user.id, user)
            .then(response => {
                this.messagesStore = response.data;
            })
            .catch(error => {
                this.errorsStore = error.response.data;
            });
        },
        /* delete user */
        async deleteUser(id) {
            await axios.delete('/api/users/' + id)
            .then(response => {
                this.messagesStore = response.data;
            });
        },
    },
});
