import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const usePersonStageStore = defineStore('personStage', {
    state: () => ({
        personStagesStoreAll: [],
        personStagesStore: [],
        personStageStore: {},
        personStageStoreErrors: {},
        personStageStoreMessage: '',
        personStageStoreStatus: '',
    }),
    getters: {
        personStageAll: state => state.personStagesStoreAll,
        personStages: state => state.personStagesStore,
        personStage: state => state.personStageStore,
        personStageErrors: state => state.personStageStoreErrors,
        personStageMessage: state => state.personStageStoreMessage,
        personStageStatus: state => state.personStageStoreStatus,
    },
    actions: {
        /* get all personStages with paginate */
        async getPersonStages() {
            this.personStageStoreErrors = {};
            this.personStageStoreMessage = '';
            this.personStageStoreStatus = '';
            await axios.get('/api/personStages')
            .then(response => {
                this.personStagesStore = response.data;
            });
        },
        /* get all personStages */
        async getPersonStagesAll() {
            await axios.get('/api/personStages/all')
            .then(response => {
                this.personStagesStoreAll = response.data;
            });
        },
        /* get personStages page */
        async getPersonStagesPage(page) {
            await axios.get(page)
            .then(response => {
                this.personStagesStore = response.data;
            });
        },
        /* get personStage */
        async getPersonStage(id) {
            await axios.get('/api/personStages/' + id)
            .then(response => {
                this.personStageStore = response.data;
            });
        },
        /* create personStage */
        async createPersonStage(personStage) {
            this.personStageStoreErrors = {};
            this.personStageStoreMessage = '';
            this.personStageStoreStatus = '';
            await axios.post('/api/personStages', personStage)
            .then(response => {
                this.personStageStoreMessage = response.data.message;
                this.personStageStoreStatus = response.data.status;
                router.push({ name: 'PersonStageDashboard' });
            })
            .catch(error => {
                this.personStageStoreErrors = error.response.data.errors;
                this.personStageStoreMessage = error.response.data.message;
                this.personStageStoreStatus = error.response.data.status;
            });
        },
        /* update personStage */
        async updatePersonStage(personStage) {
            this.personStageStoreErrors = {};
            this.personStageStoreMessage = '';
            this.personStageStoreStatus = '';
            await axios.put('/api/personStages/' + personStage.id, personStage)
            .then(response => {
                this.personStageStoreMessage = response.data.message;
                this.personStageStoreStatus = response.data.status;
                router.push({ name: 'PersonStageDashboard' });
            })
            .catch(error => {
                this.personStageStoreErrors = error.response.data.errors;
                this.personStageStoreMessage = error.response.data.message;
                this.personStageStoreStatus = error.response.data.status;
            });
        },
        /* delete personStage */
        async deletePersonStage(id) {
            this.personStageStoreErrors = {};
            this.personStageStoreMessage = '';
            this.personStageStoreStatus = '';
            await axios.delete('/api/personStages/' + id)
            .then(response => {
                this.personStageStoreMessage = response.data.message;
                this.personStageStoreStatus = response.data.status;
                this.getPersonStages();
            })
            .catch(error => {
                this.personStageStoreErrors = error.response.data.errors;
                this.personStageStoreMessage = error.response.data.message;
                this.personStageStoreStatus = error.response.data.status;
            });
        },
    }
});