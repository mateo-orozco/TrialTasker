import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useCaseStore = defineStore("cases", {
  state: () => ({
    casesAllStore: [],
    casesStore: [],
    activeCases: [],
    inactiveCases: [],
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
      await axios.get("/api/cases").then((response) => {
        this.casesStore = response.data;
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
      await axios.get("/api/cases/" + id).then((response) => {
        // console.log(response.data.id);
        this.caseStore = response.data;

        
        console.log(response.data);

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
      await axios
        .post("/api/cases", req)
        .then((response) => {
          this.messagesStore = response.data;
          this.getCases();
          router.push({ name: "CasesDashboard" });
        })
        .catch((error) => {
          this.errorsStore = error.response.data.errors;
        });
    },
    /* update case */
    async updateCase(req) {
      await axios
        .put("/api/cases/" + req.id, req)
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
      await axios
        .delete("/api/cases/" + id)
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
      await axios
        .get("/api/casesActive")
        .then((response) => {
          this.activeCases = response.data;
          console.log(this.activeCases);

        })
        .catch((error) => {
          this.errorsStore = error.response.data.errors;
        });
    },
    async casesInactive() {
      await axios
        .get("/api/casesInactive")
        .then((response) => {
          this.inactiveCases = response.data;
          console.log(this.inactiveCases);
        })
        .catch((error) => {
          this.errorsStore = error.response.data.errors;
        });
    },

    async infoCase(id) {
      await axios
        .get("/api/infoCase/" + id)
        .then((response) => {
          console.log("----------------infoCase----------------");
          console.log(response.data);
        })
        .catch((error) => {
          this.errorsStore = error.response.data.errors;
        });
    },
  },
});
