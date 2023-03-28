import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useFileStore = defineStore('fileStore', {
    state: () => ({
        filesAllStore: [],
        filesStore: [],
        fileStore: {},
        errorsStore: [],
        messagesStore: [],
    }),
    getters: {
        filesAll: (state) => state.filesAllStore,
        files: (state) => state.filesStore,
        file: (state) => state.fileStore,
        errors: (state) => state.errorsStore,
        messages: (state) => state.messagesStore,
    },
    actions: {
        /* get all files with paginate */
        async getFiles() {
            this.errorsStore = [];
            this.messagesStore = [];
            await axios.get('/api/files')
            .then(response => {
                this.filesStore = response.data;
            });
        },
        /* get all files */
        async getFilesAll() {
            await axios.get('/api/files/all')
            .then(response => {
                this.filesAllStore = response.data;
            });
        },
        
        /* get files page */
        async getFilesPage(page) {
            await axios.get(page)
            .then(response => {
                this.filesStore = response.data;
            });
        },
        /* get file */
        async getFile(id) {
            await axios.get('/api/files/' + id)
            .then(response => {
                this.fileStore = response.data;
            });
        },
        /* create file */
        async createFile(file) {
            this.errorsStore = [];
            this.messagesStore = [];
            await axios.post('/api/files', file)
            .then(response => {
                this.messagesStore = response.data;
                this.getFiles();
                router.push({ name: 'FileDashboard' });
            })
            .catch(error => {
                this.errorsStore = error.response.data.errors
            });
        },
        /* update file */
        async updateFile(file) {
            this.errorsStore = [];
            this.messagesStore = [];
            await axios.put('/api/files/' + file.id, file)
            .then(response => {
                this.messagesStore = response.data;
                this.getFiles();
                router.push({ name: 'FileDashboard' });
            })
            .catch(error => {
                this.errorsStore = error.response.data.errors
            });
        },
        /* delete file */
        async deleteFile(id) {
            this.errorsStore = [];
            this.messagesStore = [];
            await axios.delete('/api/files/' + id)
            .then(response => {
                this.messagesStore = response.data;
                this.getFiles();
            })
            .catch(error => {
                this.errorsStore = error.response.data.errors
            });
        },
    },
});

