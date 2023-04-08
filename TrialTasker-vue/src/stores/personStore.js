import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const usePersonStore = defineStore('persons', {
    state: () => ({
        personsAllStore: [],
        personsStore: [],
        personStore: {},
        errorsStore: [],
        messagesStore: [],
    }),
    getters: {
        personsAll: (state) => state.personsAllStore,
        persons: (state) => state.personsStore,
        person: (state) => state.personStore,
        errors: (state) => state.errorsStore,
        messages: (state) => state.messagesStore,
    },
    actions: {
        /* get all persons with paginate */
        async getPersons() {
            const token = localStorage.getItem("token");
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${axios.defaults.baseURL}api/persons`,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };
            
            await axios.request(config)
            .then(response => {
                console.log(this.personsStore = response.data);
            });
        },
        /* get all persons */
        async getPersonsAll() {
            const token = localStorage.getItem("token");
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${axios.defaults.baseURL}api/persons/all`,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };
            await axios.request(config)
            .then(response => {
                this.personsAllStore = response.data;
            });
        },

        /* get persons page */
        async getPersonsPage(page) {
            await axios.get(page)
            .then(response => {
                this.personsStore = response.data;
            });
        },
        /* get person */
        async getPerson(id) {
            const token = localStorage.getItem("token");
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${axios.defaults.baseURL}api/persons/${id}`,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };
            await axios.request(config)
            .then(response => {
                this.personStore = response.data;
            });
        },
        /* create person */
        async createPerson(person) {
            const token = localStorage.getItem("token");
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${axios.defaults.baseURL}api/persons`,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json', 
                },
                data: person
            };
            await axios.request(config)
            .then(response => {
                this.messagesStore = response.data;
                this.getPersons();
                router.push({ name: 'PersonDashboard' });
            })
            .catch(error => {
                this.errorsStore = error.response.data.errors
            });
        },
        /* update person */
        async updatePerson(person) {
            await axios.put('/api/persons/' + person.id, person)
            .then(response => {
                this.messagesStore = response.data;
                this.getPersons();
                router.push({ name: 'PersonDashboard' });
            })
            .catch(error => {
                this.errorsStore = error.response.data.errors
            });
        },
        /* delete person */
        async deletePerson(id) {
            const token = localStorage.getItem("token");
            let config = {
                method: 'delete',
                maxBodyLength: Infinity,
                url: `${axios.defaults.baseURL}api/persons/${id}`,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };

            await axios.request(config)
            .then(response => {
                this.messagesStore = response.data;
                this.getPersons();
            });
        },
    }
}); 