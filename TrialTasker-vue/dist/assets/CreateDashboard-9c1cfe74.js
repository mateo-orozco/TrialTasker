import{r as p,f as m,g as _,j as t,m as s,u as a,F as l,y as u,C as i,k as f}from"./index-2ad15a8c.js";import{_ as c}from"./HeaderAccions-a0cacfd7.js";import{F as d,_ as y}from"./FormGroup-994f33db.js";import{u as x}from"./typePersonStore-4d6d8898.js";/* empty css                                                      */import"./Button-c85adebd.js";const B={__name:"CreateDashboard",setup(b){const e=x(),r=p({type_person_name:""});return(v,o)=>(m(),_(l,null,[t(c,{title:"Crear Tipo de Persona",to:"TypePersonDashboard"}),t(d,{create:a(e).createTypePerson,form:r.value,"button-text":"Crear"},{default:s(()=>[t(y,{label:"Nombre",error:a(e).errors?a(e).errors.type_person_name:[]},{default:s(()=>[u(f("input",{type:"text",id:"type_person_name","onUpdate:modelValue":o[0]||(o[0]=n=>r.value.type_person_name=n)},null,512),[[i,r.value.type_person_name]])]),_:1},8,["error"])]),_:1},8,["create","form"])],64))}};export{B as default};