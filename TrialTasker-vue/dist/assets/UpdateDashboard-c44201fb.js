import{k as v,r as f,l as b,o as d,d as x,w as o,f as a,i as s,e as n,A as V,a as p,c as y,z as U,F as c,v as i,t as N}from"./index-d0fdf91d.js";import{F as k,_ as u}from"./FormGroup-c2da1de1.js";import{u as w}from"./personStore-9073cc76.js";import{u as A}from"./typePersonStore-fc0b3609.js";import"./Button-c993502f.js";const F=p("option",{value:""},"Seleccione una opción",-1),P=["value"],R={__name:"UpdateDashboard",setup(S){const e=w(),_=A(),m=v(),t=f({id:m.params.id,per_type_person_id:"",per_name:"",per_lastname:"",per_email:"",per_phone:"",per_address:"",per_nit:"",per_issue_nit:"",per_num_ministry:"",per_num_dispaych:"",per_radicated:"",per_authority:"",per_number:""});return b(async()=>{await _.getTypePersonsAll(),await e.getPerson(m.params.id),t.value=e.person}),(T,l)=>(d(),x(k,{create:a(e).createPerson,form:t.value,"button-text":"Crear"},{default:o(()=>[s(u,{label:"Tipo de persona",error:a(e).errors?a(e).errors.per_type_person_id:[]},{default:o(()=>[n(p("select",{class:"select",id:"per_type_person_id","onUpdate:modelValue":l[0]||(l[0]=r=>t.value.per_type_person_id=r)},[F,(d(!0),y(c,null,U(a(_).typePersonsAll,r=>(d(),y("option",{key:r.id,value:r.id},N(r.type_person_name),9,P))),128))],512),[[V,t.value.per_type_person_id]])]),_:1},8,["error"]),s(u,{label:"Nombre",error:a(e).errors?a(e).errors.per_name:[]},{default:o(()=>[n(p("input",{class:"input",type:"text",id:"per_name","onUpdate:modelValue":l[1]||(l[1]=r=>t.value.per_name=r)},null,512),[[i,t.value.per_name]])]),_:1},8,["error"]),s(u,{label:"Apellido",error:a(e).errors?a(e).errors.per_lastname:[]},{default:o(()=>[n(p("input",{class:"input",type:"text",id:"per_lastname","onUpdate:modelValue":l[2]||(l[2]=r=>t.value.per_lastname=r)},null,512),[[i,t.value.per_lastname]])]),_:1},8,["error"]),s(u,{label:"Correo",error:a(e).errors?a(e).errors.per_email:[]},{default:o(()=>[n(p("input",{class:"email",type:"text",id:"per_email","onUpdate:modelValue":l[3]||(l[3]=r=>t.value.per_email=r)},null,512),[[i,t.value.per_email]])]),_:1},8,["error"]),s(u,{label:"Telefono",error:a(e).errors?a(e).errors.per_phone:[]},{default:o(()=>[n(p("input",{class:"input",type:"text",id:"per_phone","onUpdate:modelValue":l[4]||(l[4]=r=>t.value.per_phone=r)},null,512),[[i,t.value.per_phone]])]),_:1},8,["error"]),s(u,{label:"Direccion",error:a(e).errors?a(e).errors.per_address:[]},{default:o(()=>[n(p("input",{class:"input",type:"text",id:"per_address","onUpdate:modelValue":l[5]||(l[5]=r=>t.value.per_address=r)},null,512),[[i,t.value.per_address]])]),_:1},8,["error"]),s(u,{label:"Nit",error:a(e).errors?a(e).errors.per_nit:[]},{default:o(()=>[n(p("input",{class:"input",type:"text",id:"per_nit","onUpdate:modelValue":l[6]||(l[6]=r=>t.value.per_nit=r)},null,512),[[i,t.value.per_nit]])]),_:1},8,["error"]),s(u,{label:"Fecha de expedicion",error:a(e).errors?a(e).errors.per_issue_nit:[]},{default:o(()=>[n(p("input",{class:"date",type:"date",id:"per_issue_nit","onUpdate:modelValue":l[7]||(l[7]=r=>t.value.per_issue_nit=r)},null,512),[[i,t.value.per_issue_nit]])]),_:1},8,["error"]),s(u,{label:"Numero de ministerio",error:a(e).errors?a(e).errors.per_num_ministry:[]},{default:o(()=>[n(p("input",{class:"number",type:"text",id:"per_num_ministry","onUpdate:modelValue":l[8]||(l[8]=r=>t.value.per_num_ministry=r)},null,512),[[i,t.value.per_num_ministry]])]),_:1},8,["error"]),s(u,{label:"Numero de despacho",error:a(e).errors?a(e).errors.per_num_dispaych:[]},{default:o(()=>[n(p("input",{class:"number",type:"text",id:"per_num_dispaych","onUpdate:modelValue":l[9]||(l[9]=r=>t.value.per_num_dispaych=r)},null,512),[[i,t.value.per_num_dispaych]])]),_:1},8,["error"]),s(u,{label:"Radicado",error:a(e).errors?a(e).errors.per_radicated:[]},{default:o(()=>[n(p("input",{class:"input",type:"text",id:"per_radicated","onUpdate:modelValue":l[10]||(l[10]=r=>t.value.per_radicated=r)},null,512),[[i,t.value.per_radicated]])]),_:1},8,["error"]),s(u,{label:"Autoridad",error:a(e).errors?a(e).errors.per_authority:[]},{default:o(()=>[n(p("input",{class:"input",type:"text",id:"per_authority","onUpdate:modelValue":l[11]||(l[11]=r=>t.value.per_authority=r)},null,512),[[i,t.value.per_authority]])]),_:1},8,["error"]),s(u,{label:"Numero",error:a(e).errors?a(e).errors.per_number:[]},{default:o(()=>[n(p("input",{class:"number",type:"text",id:"per_number","onUpdate:modelValue":l[12]||(l[12]=r=>t.value.per_number=r)},null,512),[[i,t.value.per_number]])]),_:1},8,["error"])]),_:1},8,["create","form"]))}};export{R as default};