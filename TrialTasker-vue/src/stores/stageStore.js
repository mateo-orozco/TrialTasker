import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useStageStore = defineStore("stage", {
    state: () => ({
        stagesAllStore: [],
        stagesStore: [],
        stageStore: {},
        errorsStore: [],
        messagesStore: [],
    }),
    getters: {
        stagesAll: (state) => state.stagesAllStore,
        stages: (state) => state.stagesStore,
        stage: (state) => state.stageStore,
        errors: (state) => state.errorsStore,
        messages: (state) => state.messagesStore,
    },
    actions: {
        /* get all stages with paginate */
        async getStages() {
            await axios.get("/api/stages")
            .then(response => {
                this.stagesStore = response.data;
            });
        },
        /* get all stages */
        async getStagesAll() {
            await axios.get("/api/stages/all")
            .then(response => {
                this.stagesAllStore = response.data;
            });
        },
        /* get stages page */
        async getStagesPage(page) {
            await axios.get(page)
            .then(response => {
                this.stagesStore = response.data;
            });
        },
        /* get stage */
        async getStage(id) {
            await axios.get("/api/stages/" + id)
            .then(response => {
                this.stageStore = response.data;
            });
        },
        /* create stage */
        async createStage(stage) {
            this.errorsStore = [];
            this.messagesStore = [];
            await axios.post("/api/stages", stage)
            .then(response => {
                this.messagesStore = response.data;
                this.getStages();
                router.push({ name: "StageDashboard" });
            })
            .catch(error => {
                this.errorsStore = error.response.data.errors
            });
        },
        /* update stage */
        async updateStage(stage) {
            this.errorsStore = [];
            this.messagesStore = [];
            await axios.put("/api/stages/" + stage.id, stage)
            .then(response => {
                this.messagesStore = response.data;
                this.getStages();
                router.push({ name: "StageDashboard" });
            })
            .catch(error => {
                this.errorsStore = error.response.data.errors
            });
        },
        /* delete stage */
        async deleteStage(id) {
            await axios.delete("/api/stages/" + id)
            .then(response => {
                this.messagesStore = response.data;
                this.getStages();
            });
        },
    },
});