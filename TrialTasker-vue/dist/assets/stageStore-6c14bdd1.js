import{d as r,a as s,M as a}from"./index-149b059b.js";const o=r("stage",{state:()=>({stagesAllStore:[],stagesStore:[],stageStore:{},errorsStore:[],messagesStore:[]}),getters:{stagesAll:e=>e.stagesAllStore,stages:e=>e.stagesStore,stage:e=>e.stageStore,errors:e=>e.errorsStore,messages:e=>e.messagesStore},actions:{async getStages(){await s.get("/api/stages").then(e=>{this.stagesStore=e.data})},async getStagesAll(){await s.get("/api/stages/all").then(e=>{this.stagesAllStore=e.data})},async getStagesPage(e){await s.get(e).then(t=>{this.stagesStore=t.data})},async getStage(e){await s.get("/api/stages/"+e).then(t=>{this.stageStore=t.data})},async createStage(e){this.errorsStore=[],this.messagesStore=[],await s.post("/api/stages",e).then(t=>{this.messagesStore=t.data,this.getStages(),a.push({name:"StageDashboard"})}).catch(t=>{this.errorsStore=t.response.data.errors})},async updateStage(e){this.errorsStore=[],this.messagesStore=[],await s.put("/api/stages/"+e.id,e).then(t=>{this.messagesStore=t.data,this.getStages(),a.push({name:"StageDashboard"})}).catch(t=>{this.errorsStore=t.response.data.errors})},async deleteStage(e){await s.delete("/api/stages/"+e).then(t=>{this.messagesStore=t.data,this.getStages()})}}});export{o as u};
