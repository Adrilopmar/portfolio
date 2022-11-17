import{d as w,z as y,a9 as g,af as b,ag as k,c as l,a as e,a5 as n,a2 as j,a3 as v,b as N,w as I,u as P,a6 as T,p as B,f as D,o as i,e as S,_ as V}from"./file_index.91813612.js";import{N as C}from"./file_Button.a656fed7.js";const o=r=>(B("data-v-24647528"),r=r(),D(),r),E={class:"p-7",id:"projectTitle"},H={class:"text-5xl md:text-6xl underline"},L={class:"w-full"},M=["src"],$=o(()=>e("article",{id:"projectExplanation"},[e("h3",{class:"text-4xl underline"},"About the project"),e("div",{id:"projectDescription",class:"project-description mt-9"})],-1)),q={id:"projectBacklog"},z=o(()=>e("h3",{class:"text-4xl underline"},"How would we keep working ?",-1)),A={id:"projectPendings",class:"project-description mt-9"},F={class:"mt-5"},R={class:"text-2xl"},W={class:"mt-3 text-xl"},G={id:"projectTechnologies"},J=o(()=>e("h3",{class:"text-4xl underline"},"Technologies used",-1)),K={class:"flex flex-wrap justify-evenly mt-9"},O={class:"mx-3"},Q={class:"text-center mb-5 text-xl"},U=["src"],X={id:"projectWebsite"},Y=o(()=>e("h3",{class:"text-4xl underline"},"Check this project out",-1)),Z=o(()=>e("p",{class:"text-xl mt-5"}," If you are reading this it might be because you are curious for this project. ",-1)),ee=o(()=>e("p",{class:"text-xl mt-5"}," Do not hesitate to contact us if you would like to know more about the app or you have found a bug. ",-1)),te=o(()=>e("p",{class:"text-xl mt-5"},"Thank you! Hope you like it",-1)),se=["href"],oe=w({__name:"singleProject",setup(r){const u=T(),t=y(g.find(a=>a.name.url_name==u.params.projectName)),d=()=>{var _;let a="";t.value=g.find(c=>c.name.url_name==u.params.projectName),(_=t.value)==null||_.description.full_description.split("//").forEach(c=>a+=`<p class="mt-3">${c}</p>`),document.querySelector("#projectDescription").innerHTML=a};return b(()=>{d()}),k(()=>u.params.projectName,(a,_)=>{d()}),(a,_)=>{var c,p,h,m,x,f;return i(),l("section",E,[e("h1",H,n((c=t.value)==null?void 0:c.name.full_name),1),e("article",null,[e("div",L,[e("img",{class:"cover-img w-full",src:`${(h=(p=t.value)==null?void 0:p.images)==null?void 0:h.cover}`,alt:""},null,8,M)])]),$,e("article",q,[z,e("div",A,[(i(!0),l(j,null,v((m=t.value)==null?void 0:m.backlog,s=>(i(),l("div",null,[e("ul",F,[e("b",R,n(s.title),1),e("li",W,n(s.description),1)])]))),256))])]),e("article",G,[J,e("div",K,[(i(!0),l(j,null,v((x=t.value)==null?void 0:x.technologies,s=>(i(),l("div",O,[e("ul",null,[e("li",Q,n(s.name),1),e("img",{class:"mb-9 logo",src:s.logo,alt:""},null,8,U)])]))),256))])]),e("article",X,[Y,Z,ee,te,e("a",{href:(f=t.value)==null?void 0:f.website,target:"_blank",class:"flex justify-center"},[N(P(C),{tertiary:"",class:"link-btn my-9 w-full lg:w-1/2 p-5 text-lg"},{default:I(()=>{var s;return[S(" Check "+n((s=t.value)==null?void 0:s.name.full_name)+" out! ",1)]}),_:1})],8,se)])])}}});const le=V(oe,[["__scopeId","data-v-24647528"]]);export{le as default};
