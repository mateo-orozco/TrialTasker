import{J as n,r as _,o as u,f as i,g as l,j as a,m as o,u as r,F as d,D as c,E as g,k as f}from"./index-149b059b.js";import{_ as y}from"./HeaderAccions-e6fd5200.js";import{F as S,_ as v}from"./FormGroup-debc77f1.js";import{u as x}from"./typeStageStore-5ad2113f.js";import"./Button-b16ff9ed.js";const B={__name:"UpdateDashboard",setup(T){const e=x(),p=n(),t=_({id:"",type_stage_name:""});return u(async()=>{await e.getTypeStage(p.params.id),t.value={id:e.typeStage.id,type_stage_name:e.typeStage.type_stage_name}}),(b,s)=>(i(),l(d,null,[a(y,{title:"Actualizar Tipo de Etapa",to:"TypeStageDashboard"}),a(S,{create:r(e).updateTypeStage,form:t.value,"button-text":"Actualizar"},{default:o(()=>[a(v,{label:"Nombre",error:r(e).errors?r(e).errors.type_stage_name:[]},{default:o(()=>[c(f("input",{type:"text",id:"type_stage_name","onUpdate:modelValue":s[0]||(s[0]=m=>t.value.type_stage_name=m)},null,512),[[g,t.value.type_stage_name]])]),_:1},8,["error"])]),_:1},8,["create","form"])],64))}};export{B as default};
