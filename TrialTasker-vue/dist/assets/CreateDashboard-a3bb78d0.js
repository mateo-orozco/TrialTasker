import{r as p,o as m,c as f,i as l,w as t,f as a,F as v,e as n,v as d,a as u}from"./index-d0fdf91d.js";import{_ as w}from"./HeaderAccions-fe8a2f74.js";import{F as _,_ as i}from"./FormGroup-c2da1de1.js";import{u as b}from"./userStore-0e4a87ef.js";import"./Button-c993502f.js";const B={__name:"CreateDashboard",setup(U){const r=b(),e=p({name:"",lastname:"",email:"",phone:"",address:"",password:"",password_confirmation:""});return(x,o)=>(m(),f(v,null,[l(w,{title:"Crear Usuario",to:"UserDashboard"}),l(_,{create:a(r).createUser,form:e.value,"button-text":"Crear"},{default:t(()=>[l(i,{label:"Nombre",error:a(r).errors?a(r).errors.name:[]},{default:t(()=>[n(u("input",{class:"input",type:"text",id:"name","onUpdate:modelValue":o[0]||(o[0]=s=>e.value.name=s)},null,512),[[d,e.value.name]])]),_:1},8,["error"]),l(i,{label:"Apellidos",error:a(r).errors?a(r).errors.lastname:[]},{default:t(()=>[n(u("input",{type:"text",id:"lastname","onUpdate:modelValue":o[1]||(o[1]=s=>e.value.lastname=s)},null,512),[[d,e.value.lastname]])]),_:1},8,["error"]),l(i,{label:"Correo",error:a(r).errors?a(r).errors.email:[]},{default:t(()=>[n(u("input",{type:"email",id:"email","onUpdate:modelValue":o[2]||(o[2]=s=>e.value.email=s)},null,512),[[d,e.value.email]])]),_:1},8,["error"]),l(i,{label:"Teléfono",error:a(r).errors?a(r).errors.phone:[]},{default:t(()=>[n(u("input",{type:"text",id:"phone","onUpdate:modelValue":o[3]||(o[3]=s=>e.value.phone=s)},null,512),[[d,e.value.phone]])]),_:1},8,["error"]),l(i,{label:"Dirección",error:a(r).errors?a(r).errors.address:[]},{default:t(()=>[n(u("input",{type:"text",id:"address","onUpdate:modelValue":o[4]||(o[4]=s=>e.value.address=s)},null,512),[[d,e.value.address]])]),_:1},8,["error"]),l(i,{label:"Contraseña",error:a(r).errors?a(r).errors.password:[]},{default:t(()=>[n(u("input",{type:"password",id:"password","onUpdate:modelValue":o[5]||(o[5]=s=>e.value.password=s)},null,512),[[d,e.value.password]])]),_:1},8,["error"]),l(i,{label:"Confirmacion de contraseña",error:a(r).errors?a(r).errors.password_confirmation:[]},{default:t(()=>[n(u("input",{type:"password",id:"password_confirmation","onUpdate:modelValue":o[6]||(o[6]=s=>e.value.password_confirmation=s)},null,512),[[d,e.value.password_confirmation]])]),_:1},8,["error"])]),_:1},8,["create","form"])],64))}};export{B as default};
