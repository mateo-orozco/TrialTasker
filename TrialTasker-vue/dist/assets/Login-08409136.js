import{u as c,r as _,b as f,o as l,d as v,w as r,a as e,e as d,v as u,f as n,c as g,t as w,g as h,h as y,i as m,j as p}from"./index-d0fdf91d.js";import{E as k}from"./Entry-a3034842.js";const V={class:"form-group-entry"},b={class:"form-group-entry"},x={key:0},C={class:"error"},B=e("button",{type:"submit",class:"btn"},"Iniciar sesión",-1),S={__name:"Login",setup(E){const a=c(),o=_({email:"",password:""});return(L,t)=>{const i=f("RouterLink");return l(),v(k,null,{default:r(()=>[e("form",{onSubmit:t[2]||(t[2]=y(s=>n(a).handleLogin(o.value),["prevent"])),class:"form-entry login"},[e("div",V,[d(e("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=s=>o.value.email=s),placeholder:"Correo Electronico"},null,512),[[u,o.value.email]])]),e("div",b,[d(e("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=s=>o.value.password=s),placeholder:"Contraseña"},null,512),[[u,o.value.password]])]),n(a).message?(l(),g("div",x,[e("p",C,w(n(a).message),1)])):h("",!0),B],32),m(i,{to:{name:"ForgotPassword"}},{default:r(()=>[p("¿Olvidaste tu contraseña?")]),_:1}),m(i,{to:{name:"Register"}},{default:r(()=>[p("Registrarse")]),_:1})]),_:1})}}};export{S as default};
