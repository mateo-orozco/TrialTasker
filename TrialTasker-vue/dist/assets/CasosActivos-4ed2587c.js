import{u as C}from"./caseStore-0c0730a0.js";import{H as f}from"./HeaderTable-4b480b90.js";import{_ as h,o as v,l as b,f as r,g as d,j as u,k as e,m as _,F as A,z as k,u as p,A as o,q as L,x as S}from"./index-149b059b.js";const n=t=>(L("data-v-e9ff8ccb"),t=t(),S(),t),g={class:"navbar"},x=n(()=>e("input",{class:"search",type:"search",placeholder:"Buscar"},null,-1)),y=n(()=>e("div",{class:"createButton"},"Crear Caso",-1)),B=n(()=>e("thead",null,[e("tr",null,[e("td",null,"#"),e("td",null,"Nombre del caso"),e("td",null,"Radicado"),e("td",null,"Estatus"),e("td",null,"Acciones")])],-1)),w={class:"caso"},E=n(()=>e("div",{class:"buttonSeeMore"},"Ver Mas",-1)),I={__name:"CasosActivos",setup(t){const c=C();return v(()=>{c.casesActive()}),document.addEventListener("keyup",l=>{l.target.matches(".search")&&document.querySelectorAll(".caso").forEach(s=>{s.textContent.toLowerCase().includes(l.target.value.toLowerCase())?s.classList.remove("filtro"):s.classList.add("filtro")})}),(l,s)=>{const i=b("RouterLink");return r(),d("main",null,[u(f,{title:"Casos Activos",to:"PersonDashboardCreate"}),e("div",g,[x,u(i,{to:{name:"CreateCase"},class:"buttonCreateCase"},{default:_(()=>[y]),_:1})]),e("table",null,[B,e("tbody",null,[(r(!0),d(A,null,k(p(c).activeCases,(a,m)=>(r(),d("tr",w,[e("td",null,o(m),1),e("td",null,o(a.case_name),1),e("td",null,o(a.case_radicate),1),e("td",null,o(a.id),1),e("td",null,[u(i,{to:{name:"SeeMoreActive"},class:"navButton",onClick:M=>p(c).getCase(a.id)},{default:_(()=>[E]),_:2},1032,["onClick"])])]))),256))])])])}}},q=h(I,[["__scopeId","data-v-e9ff8ccb"]]);export{q as default};
