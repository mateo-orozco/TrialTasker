import{_ as t,P as p,H as l}from"./Pagination-58f41188.js";import{u as _}from"./personStore-9073cc76.js";import{l as m,o as n,c as d,i as c,f as a,d as s,g as r,F as i}from"./index-d0fdf91d.js";const h={__name:"IndexDashboard",setup(u){const e=_(),o=[{name:"Nombre",key:"per_name"},{name:"Apellido",key:"per_lastname"},{name:"Correo",key:"per_email"},{name:"Telefono",key:"per_phone"},{name:"Tipo",key:"per_type_person",key_2:"type_person_name"}];return m(()=>{e.getPersons()}),(k,g)=>(n(),d(i,null,[c(l,{title:"Personas",to:"PersonDashboardCreate"}),a(e).persons.data?(n(),s(t,{key:0,thead:o,data:a(e).persons.data,delete:a(e).deletePerson,edit:"PersonDashboardUpdate"},null,8,["data","delete"])):r("",!0),a(e).persons.links?(n(),s(p,{key:1,last_page:a(e).persons.last_page,current_page:a(e).persons.current_page,links:a(e).persons.links,funtion_page:a(e).getPersonsPage},null,8,["last_page","current_page","links","funtion_page"])):r("",!0)],64))}};export{h as default};
