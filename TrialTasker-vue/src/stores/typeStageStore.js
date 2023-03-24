import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";


export const useTypeStageStore = defineStore('typeStages', {
    state: () => ({
        typeStagesAllStore: [],
        typeStagesStore: [],
        typeStageStore: {},
        errorsStore: [],
        messagesStore: [],
    }),
    getters: {
        typeStagesAll: (state) => state.typeStagesAllStore,
        typeStages: (state) => state.typeStagesStore,
        typeStage: (state) => state.typeStageStore,
        errors: (state) => state.errorsStore,
        messages: (state) => state.messagesStore,
    },
    actions: {
        /* get all typeStages with paginate */
        async getTypeStages() {
            await axios.get('/api/typeStages')
            .then(response => {
                this.typeStagesStore = response.data;
            });
        },

        /* get all typeStages */
        async getTypeStagesAll() {
            await axios.get('/api/typeStages/all')
            .then(response => {
                this.typeStagesAllStore = response.data;
            });
        },
        /* get typeStage */
        async getTypeStage(id) {
            await axios.get('/api/typeStages/' + id)
            .then(response => {
                this.typeStageStore = response.data;
            });
        },
        /* get typeStages page */
        async getTypeStagesPage(page) {
            await axios.get(page)
            .then(response => {
                this.typeStagesStore = response.data;
            });
        },
        /* create typeStage */
        async createTypeStage(req) {
            this.errorsStore = [];
            this.messagesStore = [];
            await axios.post('/api/typeStages', req)
            .then(response => {
                this.messagesStore = response.data.message;
                this.getTypeStages();
                router.push({ name: 'TypeStageDashboard' });
            })
            .catch(error => {
                this.errorsStore = error.response.data.errors
            });
        },
        /* update typeStage */
        async updateTypeStage(req) {
            this.errorsStore = [];
            this.messagesStore = [];
            await axios.put('/api/typeStages/' + req.id, req)
            .then(response => {
                this.messagesStore = response.data;
                this.getTypeStages();
                router.push({ name: 'TypeStageDashboard' });
            })
            .catch(error => {
                this.errorsStore = error.response.data.errors
            });
        },
        /* delete typeStage */
        async deleteTypeStage(id) {
            this.errorsStore = [];
            this.messagesStore = [];
            await axios.delete('/api/typeStages/' + id)
            .then(response => {
                this.messagesStore = response.data;
                this.getTypeStages();
            });
        },
    }
});
