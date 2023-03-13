import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useTypePersonStore = defineStore('typePersons', {
    state: () => ({
        typePersonsStore: [],
        typePersonStore: {},
        errorsStore: [],
        messagesStore: [],
    }),
    getters: {
        typePersons: (state) => state.typePersonsStore,
        typePerson: (state) => state.typePersonStore,
        errors: (state) => state.errorsStore,
        messages: (state) => state.messagesStore,
    },
    actions: {
        /* get all typePersons */
        async getTypePersons() {
            await axios.get('/api/type-persons')
            .then(response => {
                this.typePersonsStore = response.data;
            });
        },
        /* get typePersons page */
        async getTypePersonsPage(page) {
            await axios.get(page)
            .then(response => {
                this.typePersonsStore = response.data;
            });
        },
        /* get typePerson */
        async getTypePerson(id) {
            await axios.get('/api/type-persons/' + id)
            .then(response => {
                this.typePersonStore = response.data;
            });
        },
        /* create typePerson */
        async createTypePerson(typePerson) {
            await axios.post('/api/type-persons', typePerson)
            .then(response => {
                this.messagesStore = response.data;
                this.getTypePersons();
                router.push({ name: 'TypePersonDashboard' });
            })
            .catch(error => {
                this.errorsStore = error.response.data.errors;
            });
        },
        /* update typePerson */
        async updateTypePerson(typePerson) {
            await axios.put('/api/type-persons/' + typePerson.id, typePerson)
            .then(response => {
                this.messagesStore = response.data;
                this.getTypePersons();
                router.push({ name: 'TypePersonDashboard' });
            })
            .catch(error => {
                this.errorsStore = error.response.data.errors;
            });
        },
        /* delete typePerson */
        async deleteTypePerson(id) {
            await axios.delete('/api/type-persons/' + id)
            .then(response => {
                this.messagesStore = response.data;
                this.getTypePersons();
            });
        },
    }
});
