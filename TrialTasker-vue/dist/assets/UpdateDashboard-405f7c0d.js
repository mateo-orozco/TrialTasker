import{k as m,r as _,l as u,o as i,c as l,i as a,w as s,f as t,F as c,e as d,v as f,a as y}from"./index-d0fdf91d.js";import{_ as P}from"./HeaderAccions-fe8a2f74.js";import{u as v}from"./typePersonStore-fc0b3609.js";import{F as x,_ as T}from"./FormGroup-c2da1de1.js";import"./Button-c993502f.js";const N={__name:"UpdateDashboard",setup(b){const e=v(),n=m(),r=_({type_person_name:""});return u(async()=>{await e.getTypePerson(n.params.id),r.value={id:e.typePerson.id,type_person_name:e.typePerson.type_person_name}}),(w,o)=>(i(),l(c,null,[a(P,{title:"Actualizar Tipo de Persona",to:"TypePersonDashboard"}),a(x,{create:t(e).updateTypePerson,form:r.value,"button-text":"Actualizar"},{default:s(()=>[a(T,{label:"Nombre",error:t(e).errors?t(e).errors.type_person_name:[]},{default:s(()=>[d(y("input",{type:"text",id:"type_person_name","onUpdate:modelValue":o[0]||(o[0]=p=>r.value.type_person_name=p)},null,512),[[f,r.value.type_person_name]])]),_:1},8,["error"])]),_:1},8,["create","form"])],64))}};export{N as default};
