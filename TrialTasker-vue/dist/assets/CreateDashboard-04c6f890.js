import{D as y,r as b,o as C,f as _,g as n,j as o,m as u,u as t,F as g,y as i,C as c,k as l,z as f,A as v,B as S}from"./index-2ad15a8c.js";import{_ as x}from"./HeaderAccions-a0cacfd7.js";import{F as V,_ as d}from"./FormGroup-994f33db.js";import{u as A}from"./stageStore-4de5703d.js";import{u as D}from"./typeStageStore-0f639441.js";/* empty css                                                      */import"./Button-c85adebd.js";const B=l("option",{value:""},"Seleccione",-1),F=["value"],N=l("option",{value:""},"Seleccione",-1),T=["value"],L={__name:"CreateDashboard",setup(U){const a=A(),p=D(),m=y(),s=b({stage_name:"",stage_type_stage_id:"",stage_case_id:"",stage_notes:""});return C(()=>{p.getTypeStagesAll(),m.getCasesAll()}),(k,r)=>(_(),n(g,null,[o(x,{title:"Crear Etapa",to:"StageDashboard"}),o(V,{create:t(a).createStage,form:s.value,"button-text":"Crear"},{default:u(()=>[o(d,{label:"Nombre",error:t(a).errors?t(a).errors.stage_name:[]},{default:u(()=>[i(l("input",{type:"text",id:"stage_name","onUpdate:modelValue":r[0]||(r[0]=e=>s.value.stage_name=e)},null,512),[[c,s.value.stage_name]])]),_:1},8,["error"]),o(d,{label:"Tipo de Etapa",error:t(a).errors?t(a).errors.stage_type_stage_id:[]},{default:u(()=>[i(l("select",{id:"stage_type_stage_id","onUpdate:modelValue":r[1]||(r[1]=e=>s.value.stage_type_stage_id=e)},[B,(_(!0),n(g,null,v(t(p).typeStagesAll,e=>(_(),n("option",{value:e.id},S(e.type_stage_name),9,F))),256))],512),[[f,s.value.stage_type_stage_id]])]),_:1},8,["error"]),o(d,{label:"Caso",error:t(a).errors?t(a).errors.stage_case_id:[]},{default:u(()=>[i(l("select",{id:"stage_case_id","onUpdate:modelValue":r[2]||(r[2]=e=>s.value.stage_case_id=e)},[N,(_(!0),n(g,null,v(t(m).casesAll,e=>(_(),n("option",{value:e.id},S(e.case_name),9,T))),256))],512),[[f,s.value.stage_case_id]])]),_:1},8,["error"]),o(d,{label:"Notas",error:t(a).errors?t(a).errors.stage_notes:[]},{default:u(()=>[i(l("textarea",{id:"stage_notes","onUpdate:modelValue":r[3]||(r[3]=e=>s.value.stage_notes=e)},null,512),[[c,s.value.stage_notes]])]),_:1},8,["error"])]),_:1},8,["create","form"])],64))}};export{L as default};