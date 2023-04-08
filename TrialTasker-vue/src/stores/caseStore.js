import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useCaseStore = defineStore("cases", {
  state: () => ({
    casesAllStore: [],
    casesStore: [],
    activeCases: [],
    inactiveCases: [],
    activos: [],
    numactivos: [],
    numinactivos: [],
    inactivos: [],
    caseStore: {},
    errorsStore: [],
    messagesStore: [],
  }),
  getters: {
    casesAll: (state) => state.casesAllStore,
    cases: (state) => state.casesStore,
    case: (state) => state.caseStore,
    errors: (state) => state.errorsStore,
    messages: (state) => state.messagesStore,
  },
  actions: {
    /* get all cases with paginate */
    async getCases() {
      const token = localStorage.getItem("token");
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/cases`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      
      await axios.request(config).then((response) => {
        this.casesStore = response.data;
        console.log(response.data);
      });
    },

    /* get all cases */
    async getCasesAll() {
      await axios.get("/api/cases/all").then((response) => {
        this.casesAllStore = response.data;
      });
    },
    /* get case */
    async getCase(id) {
      const token = localStorage.getItem("token");
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/cases/${id}`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      await axios.request(config).then((response) => {
        // console.log(response.data.id);
        this.caseStore = response.data;

        localStorage.removeItem("id");
        localStorage.setItem("id", id);
        console.log(this.caseStore);

      });
    },
    /* get cases page */
    async getCasesPage(page) {
      await axios.get(page).then((response) => {
        this.casesStore = response.data;
      });
    },
    /* create case */
    async createCase(req) {
      const token = localStorage.getItem("token");
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/cases`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: req,
      };
      await axios.request(config)
        .then((response) => {
          this.messagesStore = response.data;
          this.getCases();
          console.log("caso creado con exito");
          router.push({ name: "CasosActivos" });
        })
        .catch((error) => {
          this.errorsStore = error.response.data.errors;
        });
    },
    /* update case */
    async updateCase(req) {
      const token = localStorage.getItem("token");
      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/cases/${req.id}`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: req,
      };  
      await axios.request(config)
        .then((response) => {
          this.messagesStore = response.data;
          this.getCases();
          router.push({ name: "CasesDashboard" });
        })
        .catch((error) => {
          this.errorsStore = error.response.data.errors;
        });
    },
    /* delete case */
    async deleteCase(id) {
      const token = localStorage.getItem("token");
      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/cases/${id}`,  
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      await axios.request(config)
        .then((response) => {
          this.messagesStore = response.data;
          this.getCases();
        })
        .catch((error) => {
          this.errorsStore = error.response.data.errors;
        });
    },

    // view cases user
    async casesActive() {
      const token = localStorage.getItem("token");
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/casesActive`,
        headers: { 
          'Accept': 'aplication/json', 
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json', 
        },
      };
      await axios.request(config)
        .then((response) => {
          // console.log(response.data);
          this.activeCases = response.data;
          // console.log(this.activeCases);
          var cont=0;
          for (const i in this.activeCases) {
            cont++
            this.numactivos[i]=cont;

          }
          this.activos=cont;

        })
        .catch((error) => {
          this.errorsStore = error.response.data.errors;
        });
    },
    async casesInactive() {
      const token = localStorage.getItem("token");
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/casesInactive`,
        headers: { 
          'Accept': 'aplication/json', 
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json', 
        },
      };
      await axios.request(config)
        .then((response) => {
          this.inactiveCases = response.data;
          // console.log(this.inactiveCases);

          var cont=0;
          for (const i in this.inactiveCases) {
            cont++
            this.numinactivos[i]=cont;
          }
          this.inactivos=cont;

        })
        .catch((error) => {
          this.errorsStore = error.response.data.errors;
        });
    },

    async infoCase(id) {
      const token = localStorage.getItem("token");
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/infoCase/${id}`,
        headers: {
          'Accept': 'aplication/json',
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };
      await axios.request(config)
        .then((response) => {
          console.log("----------------infoCase----------------");
          console.log(response.data);
        })
        .catch((error) => {
          this.errorsStore = error.response.data.errors;
        });
    },

  }
});
