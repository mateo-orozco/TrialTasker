import{q as a,s as r,x as t}from"./index-d0fdf91d.js";const i=a("users",{state:()=>({usersStore:[],userStore:{},errorsStore:[],messagesStore:[]}),getters:{users:s=>s.usersStore,user:s=>s.userStore,errors:s=>s.errorsStore,messages:s=>s.messagesStore},actions:{async getUsers(){await r.get("/api/users").then(s=>{this.usersStore=s.data})},async getUsersPage(s){await r.get(s).then(e=>{this.usersStore=e.data})},async getUser(s){await r.get("/api/users/"+s).then(e=>{this.userStore=e.data})},async createUser(s){await r.post("/api/users",s).then(e=>{this.messagesStore=e.data,this.getUsers(),t.push({name:"UserDashboard"})}).catch(e=>{this.errorsStore=e.response.data.errors})},async updateUser(s){await r.put("/api/users/"+s.id,s).then(e=>{this.messagesStore=e.data,this.getUsers(),t.push({name:"UserDashboard"})}).catch(e=>{this.errorsStore=e.response.data.errors})},async deleteUser(s){await r.delete("/api/users/"+s).then(e=>{this.messagesStore=e.data,this.getUsers()})}}});export{i as u};
