import { defineStore } from "pinia";
import axios from "axios";

export const useDashboardStore = defineStore('dashboard', {
    state: () => ({
        usersForWeekStore: [],
        usersSessionsStore: [],
        errorsStore: [],
        messagesStore: [],
    }),
    getters: {
        usersForWeek: (state) => state.usersForWeekStore,
        usersSessions: (state) => state.usersSessionsStore,
        errors: (state) => state.errorsStore,
        messages: (state) => state.messagesStore,
    },
    actions: {
        /* get users for week */
        async getUsersForWeek() {
            const token = localStorage.getItem("token");
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${axios.defaults.baseURL}api/dashboard/users-week`,
                headers: { 
                'Accept': 'aplication/json', 
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json', 
                },
            };
            await axios.request(config)
                .then(response => {
                    this.usersForWeekStore = response.data;
                })
                .catch(error => {
                    this.errorsStore.push(error);
                });
        },
        /* get users sessions */
        async getUsersSessions() {
            const token = localStorage.getItem("token");
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${axios.defaults.baseURL}api/dashboard/sessions`,
                headers: { 
                'Accept': 'aplication/json', 
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json', 
                },
            };
            await axios.request(config)
                .then(response => {
                    this.usersSessionsStore = response.data;
                })
                .catch(error => {
                    this.errorsStore.push(error);
                });
        },
    }
});