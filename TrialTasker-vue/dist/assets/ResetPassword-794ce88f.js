import{B as u,J as p,r as m,f as l,C as c,m as f,k as s,D as d,E as i,u as a,g as _,A as w,G as v,H as h}from"./index-149b059b.js";import{E as y}from"./Entry-27a6e424.js";const k=s("h3",null,"Restablecer contraseña",-1),b={class:"form-group-entry"},g={key:0},B={class:"error"},R={class:"form-group-entry"},x=s("button",{class:"btn",type:"submit"},"Restablecer",-1),D={__name:"ResetPassword",setup(C){const r=u(),n=p(),o=m({email:n.query.email,password:"",password_confirmation:"",token:n.params.token});return(E,e)=>(l(),c(y,null,{default:f(()=>[k,s("form",{class:"form-entry",onSubmit:e[2]||(e[2]=h(t=>a(r).handleResetPassword(o.value),["prevent"]))},[s("div",b,[d(s("input",{type:"password",id:"password",placeholder:"Ingrese la nueva contraseña","onUpdate:modelValue":e[0]||(e[0]=t=>o.value.password=t)},null,512),[[i,o.value.password]])]),a(r).errors.password?(l(),_("div",g,[s("p",B,w(a(r).errors.password[0]),1)])):v("",!0),s("div",R,[d(s("input",{type:"password",id:"confirmationPassword",placeholder:"Confirme su contraseña","onUpdate:modelValue":e[1]||(e[1]=t=>o.value.password_confirmation=t)},null,512),[[i,o.value.password_confirmation]])]),x],32)]),_:1}))}};export{D as default};
