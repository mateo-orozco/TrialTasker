import{d as o,a as t,N as r}from"./index-2ad15a8c.js";const n=o("typePersons",{state:()=>({typePersonsAllStore:[],typePersonsStore:[],typePersonStore:{},errorsStore:[],messagesStore:[]}),getters:{typePersonsAll:e=>e.typePersonsAllStore,typePersons:e=>e.typePersonsStore,typePerson:e=>e.typePersonStore,errors:e=>e.errorsStore,messages:e=>e.messagesStore},actions:{async getTypePersons(){await t.get("/api/type-persons").then(e=>{this.typePersonsStore=e.data,this.errorsStore=[]})},async getTypePersonsAll(){await t.get("/api/type-persons/all").then(e=>{this.typePersonsAllStore=e.data,this.errorsStore=[]})},async getTypePersonsPage(e){await t.get(e).then(s=>{this.typePersonsStore=s.data})},async getTypePerson(e){await t.get("/api/type-persons/"+e).then(s=>{this.typePersonStore=s.data})},async createTypePerson(e){this.errorsStore=[],this.messagesStore=[],await t.post("/api/type-persons",e).then(s=>{this.messagesStore=s.data,this.getTypePersons(),r.push({name:"TypePersonDashboard"})}).catch(s=>{this.errorsStore=s.response.data.errors})},async updateTypePerson(e){this.errorsStore=[],this.messagesStore=[],await t.put("/api/type-persons/"+e.id,e).then(s=>{this.messagesStore=s.data,this.getTypePersons(),r.push({name:"TypePersonDashboard"})}).catch(s=>{this.errorsStore=s.response.data.errors})},async deleteTypePerson(e){this.errorsStore=[],this.messagesStore=[],await t.delete("/api/type-persons/"+e).then(s=>{this.messagesStore=s.data,this.getTypePersons()})}}});export{n as u};