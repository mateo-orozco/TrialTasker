import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useTypePersonStore = defineStore("typePersons", {
  state: () => ({
    typePersonsAllStore: [],
    typePersonsStore: [],
    typePersonStore: {},
    errorsStore: [],
    messagesStore: [],
  }),
  getters: {
    typePersonsAll: (state) => state.typePersonsAllStore,
    typePersons: (state) => state.typePersonsStore,
    typePerson: (state) => state.typePersonStore,
    errors: (state) => state.errorsStore,
    messages: (state) => state.messagesStore,
  },
  actions: {
    /* get all typePersons paginate  */
    async getTypePersons() {
      const token = localStorage.getItem("token");
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/type-persons`,
        headers: {
          Accept: "aplication/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      await axios.request(config).then((response) => {
        this.typePersonsStore = response.data;
        this.errorsStore = [];
      });
    },

    /* get all typePersons */
    async getTypePersonsAll() {
      const token = localStorage.getItem("token");
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/type-persons/all`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      await axios.request(config).then((response) => {
        this.typePersonsAllStore = response.data;
        this.errorsStore = [];
      });
    },

    /* get typePersons page */
    async getTypePersonsPage(page) {
      await axios.get(page).then((response) => {
        this.typePersonsStore = response.data;
      });
    },
    /* get typePerson */
    async getTypePerson(id) {
      await axios.get("/api/type-persons/" + id).then((response) => {
        this.typePersonStore = response.data;
      });
    },
    
    /* create typePerson */
    async createTypePerson(typePerson) {
      // this.errorsStore = [];
      // this.messagesStore = [];
      // await axios.post('/api/type-persons', typePerson)
      // .then(response => {
      //     this.messagesStore = response.data;
      //     this.getTypePersons();
      //     router.push({ name: 'TypePersonDashboard' });
      // })
      // .catch(error => {
      //     this.errorsStore = error.response.data.errors;
      // });
      const token = localStorage.getItem("token");
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/type-persons`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: typePerson,
      };

      await axios
        .request(config)
        .then((response) => {
          this.messagesStore = response.data;
          this.getTypePersons();
          router.push({ name: "TypePersonDashboard" });
        })
        .catch((error) => {
          console.log(error);
          this.errorsStore = error.response.data.errors;
        });
    },

    /* update typePerson */
    async updateTypePerson(typePerson) {
      this.errorsStore = [];
      this.messagesStore = [];
      await axios
        .put("/api/type-persons/" + typePerson.id, typePerson)
        .then((response) => {
          this.messagesStore = response.data;
          this.getTypePersons();
          router.push({ name: "TypePersonDashboard" });
        })
        .catch((error) => {
          this.errorsStore = error.response.data.errors;
        });
    },
    /* delete typePerson */
    async deleteTypePerson(id) {
      this.errorsStore = [];
      this.messagesStore = [];
      await axios.delete("/api/type-persons/" + id).then((response) => {
        this.messagesStore = response.data;
        this.getTypePersons();
      });
    },
  },
});
