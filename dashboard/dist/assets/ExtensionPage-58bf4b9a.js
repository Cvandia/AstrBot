import{q as G,o as d,c as g,w as e,d as t,u as i,H as k,a as u,t as h,E as V,D as p,_ as H,A as $,$ as C,I as v,G as b,l as c,a0 as I,a1 as P,F as f,n as y,a2 as j,K as w,a3 as A,e as O,m as E,g as U,O as x,N as S,a4 as J,z as _,P as m,J as B,M as F,a5 as K,f as L}from"./index-440fed29.js";const M={class:"d-sm-flex align-center justify-space-between"},N=G({__name:"ExtensionCard",props:{title:String,link:String},setup(l){const a=l,o=n=>{window.open(n,"_blank")};return(n,s)=>(d(),g(b,{variant:"outlined",elevation:"0",class:"withbg"},{default:e(()=>[t(H,{style:{padding:"10px 20px"}},{default:e(()=>[i("div",M,[t(k,null,{default:e(()=>[u(h(a.title),1)]),_:1}),t(V),t(p,{icon:"mdi-link",variant:"plain",onClick:s[0]||(s[0]=r=>o(a.link))})])]),_:1}),t($),t(v,null,{default:e(()=>[C(n.$slots,"default")]),_:3})]),_:3}))}}),R={class:"d-sm-flex align-center justify-space-between"},Z=G({__name:"UiParentCard",props:{title:String},setup(l){const a=l;return(o,n)=>(d(),g(b,{variant:"outlined",elevation:"0",class:"withbg"},{default:e(()=>[t(H,null,{default:e(()=>[i("div",R,[t(k,null,{default:e(()=>[u(h(a.title),1)]),_:1}),C(o.$slots,"action")])]),_:3}),t($),t(v,null,{default:e(()=>[C(o.$slots,"default")]),_:3})]),_:3}))}}),T={__name:"ConfigDetailCard",props:{config:Array},setup(l){return(a,o)=>(d(),c(f,null,[I(i("a",null,"该插件没有配置",512),[[P,l.config.length===0]]),(d(!0),c(f,null,y(l.config,n=>(d(),g(Z,{key:n.name,title:n.name,style:{"margin-bottom":"16px"}},{default:e(()=>[(d(!0),c(f,null,y(n.body,s=>(d(),c(f,null,[s.config_type==="item"?(d(),c(f,{key:0},[s.val_type==="bool"?(d(),g(j,{key:0,modelValue:s.value,"onUpdate:modelValue":r=>s.value=r,label:s.name,hint:s.description,color:"primary",inset:""},null,8,["modelValue","onUpdate:modelValue","label","hint"])):s.val_type==="str"?(d(),g(w,{key:1,modelValue:s.value,"onUpdate:modelValue":r=>s.value=r,label:s.name,hint:s.description,style:{"margin-bottom":"8px"},variant:"outlined"},null,8,["modelValue","onUpdate:modelValue","label","hint"])):s.val_type==="int"?(d(),g(w,{key:2,modelValue:s.value,"onUpdate:modelValue":r=>s.value=r,label:s.name,hint:s.description,style:{"margin-bottom":"8px"},variant:"outlined"},null,8,["modelValue","onUpdate:modelValue","label","hint"])):s.val_type==="list"?(d(),c(f,{key:3},[i("span",null,h(s.name),1),t(A,{modelValue:s.value,"onUpdate:modelValue":r=>s.value=r,chips:"",clearable:"",label:"请添加",multiple:"","prepend-icon":"mdi-tag-multiple-outline"},{selection:e(({attrs:r,item:D,select:q,selected:z})=>[t(O,E(r,{"model-value":z,closable:"",onClick:q,"onClick:close":da=>a.remove(D)}),{default:e(()=>[i("strong",null,h(D),1)]),_:2},1040,["model-value","onClick","onClick:close"])]),_:2},1032,["modelValue","onUpdate:modelValue"])],64)):U("",!0)],64)):s.config_type==="divider"?(d(),g($,{key:1,style:{"margin-top":"8px","margin-bottom":"8px"}})):U("",!0)],64))),256))]),_:2},1032,["title"]))),128))],64))}},Q=i("div",{style:{"background-color":"white",width:"100%",padding:"16px","border-radius":"10px"}},[i("h3",null,"🧩 已安装的插件")],-1),W={style:{"min-height":"180px","max-height":"180px",overflow:"hidden"}},X={class:"d-flex align-center gap-2"},Y=i("div",{style:{"background-color":"white",width:"100%",padding:"16px","border-radius":"10px"}},[i("h3",null,"🧩 插件市场 [待开发]")],-1),aa=i("span",{class:"text-h5"},"插件配置",-1),ta=i("span",{class:"text-h5"},"安装插件",-1),ea=i("h3",null,"从 GitHub 上在线下载",-1),la=i("small",null,"请输入合法的 GitHub 仓库链接，当前仅支持 GitHub。如：https://github.com/Soulter/astrbot_plugin_aiocqhttp",-1),na=i("h3",null,"从本机上传 .zip 压缩包",-1),sa=i("small",null,"请保证插件文件存在压缩包根目录中的第一个文件夹中（即类似于从 GitHub 仓库页上下载的 Zip 压缩包的格式）。",-1),oa=i("br",null,null,-1),ia={name:"ExtensionPage",components:{ExtensionCard:N,ConfigDetailCard:T},data(){return{extension_data:{data:[]},extension_url:"",status:"",dialog:!1,snack_message:"",snack_show:!1,snack_success:"success",install_loading:!1,uninstall_loading:!1,configDialog:!1,extension_config:{},upload_file:null}},mounted(){this.getExtensions()},methods:{toast(l,a){this.snack_message=l,this.snack_show=!0,this.snack_success=a},getExtensions(){_.get("/api/plugin/get").then(l=>{this.extension_data.data=l.data.data,console.log(this.extension_data)})},newExtension(){if(this.extension_url===""&&this.upload_file===null){this.toast("请填写插件链接或上传插件文件","error");return}if(this.extension_url!==""&&this.upload_file!==null){this.toast("请不要同时填写插件链接和上传插件文件","error");return}if(this.install_loading=!0,this.upload_file!==null){const l=new FormData;l.append("file",this.upload_file[0]),_.post("/api/plugin/install-upload",l,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>{if(this.install_loading=!1,a.data.status==="error"){this.toast(a.data.message,"error");return}this.extension_data.data=a.data.data,console.log(this.extension_data),this.upload_file="",this.toast(a.data.message,"success"),this.dialog=!1,this.getExtensions()}).catch(a=>{this.install_loading=!1,this.toast(a,"error")});return}else _.post("/api/plugin/install",{url:this.extension_url}).then(l=>{if(this.install_loading=!1,l.data.status==="error"){this.toast(l.data.message,"error");return}this.extension_data.data=l.data.data,console.log(this.extension_data),this.extension_url="",this.toast(l.data.message,"success"),this.dialog=!1,this.getExtensions()}).catch(l=>{this.install_loading=!1,this.toast(l,"error")})},uninstallExtension(l){this.uninstall_loading=!0,_.post("/api/plugin/uninstall",{name:l}).then(a=>{if(this.uninstall_loading=!1,a.data.status==="error"){this.toast(a.data.message,"error");return}this.extension_data.data=a.data.data,console.log(this.extension_data),this.toast(a.data.message,"success"),this.dialog=!1,this.getExtensions()}).catch(a=>{this.uninstall_loading=!1,this.toast(a,"error")})},updateExtension(l){this.update_loading=!0,_.post("/api/plugin/update",{name:l}).then(a=>{if(this.update_loading=!1,a.data.status==="error"){this.toast(a.data.message,"error");return}this.extension_data.data=a.data.data,console.log(this.extension_data),this.toast(a.data.message,"success"),this.dialog=!1,this.getExtensions()}).catch(a=>{this.update_loading=!1,this.toast(a,"error")})},openExtensionConfig(l){this.curr_namespace=l,this.configDialog=!0,_.get("/api/config/get?namespace="+l).then(a=>{this.extension_config=a.data.data,console.log(this.extension_config)}).catch(a=>{this.toast(a,"error")})},updateConfig(){_.post("/api/plugin/update",{config:this.extension_config,namespace:this.curr_namespace}).then(l=>{l.data.status==="success"?this.toast(l.data.message,"success"):this.toast(l.data.message,"error")}).catch(l=>{this.toast(l,"error")})}}},ra=Object.assign(ia,{setup(l){return(a,o)=>(d(),c(f,null,[t(x,null,{default:e(()=>[t(m,{cols:"12",md:"12"},{default:e(()=>[Q]),_:1}),(d(!0),c(f,null,y(a.extension_data.data,n=>(d(),g(m,{cols:"12",md:"6",lg:"4"},{default:e(()=>[(d(),g(N,{key:n.name,title:n.name,link:n.repo,style:{"margin-bottom":"16px"}},{default:e(()=>[i("p",W,h(n.desc),1),i("div",X,[t(L,null,{default:e(()=>[u("mdi-account")]),_:1}),i("span",null,h(n.author),1),t(V),t(p,E({variant:"plain",onClick:s=>a.openExtensionConfig(n.name)},a.props),{default:e(()=>[u("配置")]),_:2},1040,["onClick"]),t(p,{variant:"plain",onClick:s=>a.updateExtension(n.name),loading:a.update_loading},{default:e(()=>[u("更新")]),_:2},1032,["onClick","loading"]),t(p,{variant:"plain",onClick:s=>a.uninstallExtension(n.name),loading:a.uninstall_loading},{default:e(()=>[u("卸载")]),_:2},1032,["onClick","loading"])])]),_:2},1032,["title","link"]))]),_:2},1024))),256)),t(m,{cols:"12",md:"12"},{default:e(()=>[Y]),_:1})]),_:1}),t(S,{modelValue:a.configDialog,"onUpdate:modelValue":o[1]||(o[1]=n=>a.configDialog=n),width:"750"},{activator:e(({props:n})=>[]),default:e(()=>[t(b,null,{default:e(()=>[t(k,null,{default:e(()=>[aa]),_:1}),t(v,null,{default:e(()=>[t(B,null,{default:e(()=>[t(T,{config:a.extension_config},null,8,["config"])]),_:1})]),_:1}),t(F,null,{default:e(()=>[t(V),t(p,{color:"blue-darken-1",variant:"text",onClick:a.updateConfig},{default:e(()=>[u(" 保存并关闭 ")]),_:1},8,["onClick"]),t(p,{color:"blue-darken-1",variant:"text",onClick:o[0]||(o[0]=n=>a.configDialog=!1)},{default:e(()=>[u(" 关闭 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(S,{modelValue:a.dialog,"onUpdate:modelValue":o[6]||(o[6]=n=>a.dialog=n),persistent:"",width:"700"},{activator:e(({props:n})=>[t(p,E(n,{icon:"mdi-plus",size:"x-large",style:{position:"fixed",right:"52px",bottom:"52px"},color:"darkprimary"}),null,16)]),default:e(()=>[t(b,null,{default:e(()=>[t(k,null,{default:e(()=>[ta]),_:1}),t(v,null,{default:e(()=>[t(B,null,{default:e(()=>[t(x,null,{default:e(()=>[ea,t(m,{cols:"12"},{default:e(()=>[la,t(w,{label:"仓库链接",modelValue:a.extension_url,"onUpdate:modelValue":o[2]||(o[2]=n=>a.extension_url=n),variant:"outlined",required:""},null,8,["modelValue"])]),_:1})]),_:1}),t(x,null,{default:e(()=>[na,t(m,{cols:"12"},{default:e(()=>[sa,t(K,{label:"选择文件",modelValue:a.upload_file,"onUpdate:modelValue":o[3]||(o[3]=n=>a.upload_file=n),accept:".zip",outlined:"",required:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),oa,i("small",null,h(a.status),1)]),_:1}),t(F,null,{default:e(()=>[t(V),t(p,{color:"blue-darken-1",variant:"text",onClick:o[4]||(o[4]=n=>a.dialog=!1)},{default:e(()=>[u(" 关闭 ")]),_:1}),t(p,{color:"blue-darken-1",variant:"text",loading:a.install_loading,onClick:o[5]||(o[5]=n=>a.newExtension(a.extension_url))},{default:e(()=>[u(" 安装 ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(J,{timeout:2e3,elevation:"24",color:a.snack_success,modelValue:a.snack_show,"onUpdate:modelValue":o[7]||(o[7]=n=>a.snack_show=n)},{default:e(()=>[u(h(a.snack_message),1)]),_:1},8,["color","modelValue"])],64))}});export{ra as default};
