import{t as d,E as _,v as i,q as $,d as k,n as o,R as re,S as ae,G as F,i as ne,U as se,z as T,j as z,V as A,W as ie,y as U,X as ce,h as de,Y as ue,I as pe,Z as be,M as ge,$ as he,a0 as fe,P as I,a1 as X,o as f,c as x,a as c,a2 as q,a3 as _e,a4 as me,a5 as ve,p as K,f as G,_ as O,a6 as Z,r as J,b as y,w as M,u as m,a7 as ye,a8 as xe,a9 as L,aa as Q,ab as ke,ac as Ce,ad as we,ae as Se,e as H,g as N,af as Te}from"./file_index.c200e195.js";const je=d("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[_("bordered",[i("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),i("left-placement",[_("bordered",[i("border",`
 right: 0;
 `)])]),_("right-placement",`
 justify-content: flex-start;
 `,[_("bordered",[i("border",`
 left: 0;
 `)]),_("collapsed",[d("layout-toggle-button",[d("base-icon",`
 transform: rotate(180deg);
 `)]),d("layout-toggle-bar",[$("&:hover",[i("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),i("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),d("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[d("base-icon",`
 transform: rotate(0);
 `)]),d("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[$("&:hover",[i("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),i("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),_("collapsed",[d("layout-toggle-bar",[$("&:hover",[i("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),i("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),d("layout-toggle-button",[d("base-icon",`
 transform: rotate(0);
 `)])]),d("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[d("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),d("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[i("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),i("bottom",`
 position: absolute;
 top: 34px;
 `),$("&:hover",[i("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),i("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),i("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),$("&:hover",[i("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),i("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),d("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),_("show-content",[d("layout-sider-scroll-container",{opacity:1})]),_("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Be=k({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return o("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},o(re,{clsPrefix:e},{default:()=>o(ae,null)}))}}),$e=k({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return o("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},o("div",{class:`${e}-layout-toggle-bar__top`}),o("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),ze={position:fe,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Pe=k({name:"LayoutSider",props:Object.assign(Object.assign({},F.props),ze),setup(e){const r=ne(se),a=T(null),p=T(null),u=z(()=>A(l.value?e.collapsedWidth:e.width)),C=z(()=>e.collapseMode!=="transform"?{}:{minWidth:A(e.width)}),b=z(()=>r?r.siderPlacement:"left"),j=T(e.defaultCollapsed),l=ie(U(e,"collapsed"),j);function E(s,t){if(e.nativeScrollbar){const{value:n}=a;n&&(t===void 0?n.scrollTo(s):n.scrollTo(s,t))}else{const{value:n}=p;n&&n.scrollTo(s,t)}}function P(){const{"onUpdate:collapsed":s,onUpdateCollapsed:t,onExpand:n,onCollapse:R}=e,{value:S}=l;t&&I(t,!S),s&&I(s,!S),j.value=!S,S?n&&I(n):R&&I(R)}let g=0,v=0;const B=s=>{var t;const n=s.target;g=n.scrollLeft,v=n.scrollTop,(t=e.onScroll)===null||t===void 0||t.call(e,s)};ce(()=>{if(e.nativeScrollbar){const s=a.value;s&&(s.scrollTop=v,s.scrollLeft=g)}}),de(ue,{collapsedRef:l,collapseModeRef:U(e,"collapseMode")});const{mergedClsPrefixRef:W,inlineThemeDisabled:D}=pe(e),Y=F("Layout","-layout-sider",je,be,e,W);function oe(s){var t,n;s.propertyName==="max-width"&&(l.value?(t=e.onAfterLeave)===null||t===void 0||t.call(e):(n=e.onAfterEnter)===null||n===void 0||n.call(e))}const te={scrollTo:E},V=z(()=>{const{common:{cubicBezierEaseInOut:s},self:t}=Y.value,{siderToggleButtonColor:n,siderToggleButtonBorder:R,siderToggleBarColor:S,siderToggleBarColorHover:le}=t,h={"--n-bezier":s,"--n-toggle-button-color":n,"--n-toggle-button-border":R,"--n-toggle-bar-color":S,"--n-toggle-bar-color-hover":le};return e.inverted?(h["--n-color"]=t.siderColorInverted,h["--n-text-color"]=t.textColorInverted,h["--n-border-color"]=t.siderBorderColorInverted,h["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColorInverted,h.__invertScrollbar=t.__invertScrollbar):(h["--n-color"]=t.siderColor,h["--n-text-color"]=t.textColor,h["--n-border-color"]=t.siderBorderColor,h["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColor),h}),w=D?ge("layout-sider",z(()=>e.inverted?"a":"b"),V,e):void 0;return Object.assign({scrollableElRef:a,scrollbarInstRef:p,mergedClsPrefix:W,mergedTheme:Y,styleMaxWidth:u,mergedCollapsed:l,scrollContainerStyle:C,siderPlacement:b,handleNativeElScroll:B,handleTransitionend:oe,handleTriggerClick:P,inlineThemeDisabled:D,cssVars:V,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender},te)},render(){var e;const{mergedClsPrefix:r,mergedCollapsed:a,showTrigger:p}=this;return(e=this.onRender)===null||e===void 0||e.call(this),o("aside",{class:[`${r}-layout-sider`,this.themeClass,`${r}-layout-sider--${this.position}-positioned`,`${r}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${r}-layout-sider--bordered`,a&&`${r}-layout-sider--collapsed`,(!a||this.showCollapsedContent)&&`${r}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:A(this.width)}]},this.nativeScrollbar?o("div",{class:`${r}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):o(he,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),p?p==="bar"?o($e,{clsPrefix:r,style:a?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):o(Be,{clsPrefix:r,style:a?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?o("div",{class:`${r}-layout-sider__border`}):null)}}),Re=e=>(K("data-v-22443d50"),e=e(),G(),e),Ie=Re(()=>c("h3",{class:"text-6xl underline"},"Our work",-1)),Ee={class:"flex flex-wrap justify-center md:justify-between"},Ae={class:"text-project p-9"},Me={class:"text-3xl text-white font-bold"},Le=["innerHTML"],Ne=["onClick"],Oe=k({__name:"allProjectsDisplay",props:{infoAllProjects:Object},setup(e){const r=X(),a=(u,C)=>{u!="new_projects"&&(r.push({path:`/projects/${u}`}),setTimeout(()=>{var b;(b=document.getElementById(`project${C}`))==null||b.scrollIntoView({behavior:"smooth"})},100))},p=u=>u.split("//").join("<br/><br/>");return(u,C)=>(f(),x(q,null,[Ie,c("div",Ee,[(f(!0),x(q,null,_e(e.infoAllProjects,b=>(f(),x("div",{class:me(["container-project mt-9",`${b.name.url_name}`])},[c("div",Ae,[c("div",null,[c("h4",Me,ve(b.name.full_name),1),c("p",{class:"mt-12 text-xl",innerHTML:p(b.description.short_description)},null,8,Le)]),c("button",{onClick:j=>a(b.name.url_name,"Title"),class:"link-btn w-full p-3"},"Read more!",8,Ne)])],2))),256))])],64))}});const ee=O(Oe,[["__scopeId","data-v-22443d50"]]),We=e=>(K("data-v-c92d0bda"),e=e(),G(),e),De={class:"flex flex-col justify-between container-menu"},Ye=We(()=>c("div",{class:"mb-6"},[c("div",{class:"flex mb-12 flex-col container-logos"},[c("a",{href:"https://github.com/Adrilopmar",target:"_blank"},[c("img",{class:"logo",src:"https://res.cloudinary.com/djqzi4hgo/image/upload/v1668438222/brand%20logos/github_a8c3h0.png",alt:"github-logo"})]),c("a",{href:"https://linkedin.com/in/adrilopmar",target:"_blank"},[c("img",{class:"logo",src:"https://res.cloudinary.com/djqzi4hgo/image/upload/v1668438222/brand%20logos/linkedi_cxmtnm.png",alt:"linkedin-logo"})])]),c("p",{class:"text-center text-sm copy"},[H("Aloma \xA9 "),c("br"),H(" All rights reserved ")])],-1)),Ve={class:"content-single-projects w-full"},Fe={key:0,class:"m-9"},Ue=k({__name:"projectsDashboardDesktop",setup(e){const r=T(null),a=T(!1),[p,u,C]=L,b=X(),j=Z(),l=(P,g)=>{b.push({path:`/projects/${P}`}),setTimeout(()=>{var v;(v=document.getElementById(`project${g}`))==null||v.scrollIntoView({behavior:"smooth"})},100)},E=[{label:()=>o("button",{onclick:()=>l("procrastinant","Title")},{default:()=>p.name.full_name}),key:"procrastinant",icon:()=>o(Ce,{onclick:()=>l("procrastinant","Title")}),children:[{label:()=>o("button",{onclick:()=>l("procrastinant","Explanation")},"Explanation"),key:"explanation_procrast"},{label:()=>o("button",{onclick:()=>l("procrastinant","Backlog")},"Backlog"),key:"backlog_procrast"},{label:()=>o("button",{onclick:()=>l("procrastinant","Technologies")},"Technologies"),key:"technologies_procrast"},{label:()=>o("button",{onclick:()=>l("procrastinant","Website")},"Website"),key:"website_procrast"}]},{label:()=>o("button",{onclick:()=>l("poke_api","Title")},{default:()=>u.name.full_name}),key:"pokeapi",icon:()=>o(we,{onclick:()=>l("poke_api","Title")}),children:[{label:()=>o("button",{onclick:()=>l("poke_api","Explanation")},"Explanation"),key:"explanation_poke"},{label:()=>o("button",{onclick:()=>l("poke_api","Backlog")},"Backlog"),key:"backlog_poke"},{label:()=>o("button",{onclick:()=>l("poke_api","Technologies")},"Technologies"),key:"technologies_poke"},{label:()=>o("button",{onclick:()=>l("poke_api","Website")},"Website"),key:"website_poke"}]},{label:()=>o("button",{onclick:()=>l("spoti_api","Title")},{default:()=>C.name.full_name}),key:"spotiapi",icon:()=>o(Se,{onclick:()=>l("spoti_api","Title")}),children:[{label:()=>o("button",{onclick:()=>l("spoti_api","Explanation")},"Explanation"),key:"explanation_spoti"},{label:()=>o("button",{onclick:()=>l("spoti_api","Backlog")},"Backlog"),key:"backlog_spoti"},{label:()=>o("button",{onclick:()=>l("spoti_api","Technologies")},"Technologies"),key:"technologies_spoti"},{label:()=>o("button",{onclick:()=>l("spoti_api","Website")},"Website"),key:"website_spoti"}]}];return(P,g)=>{const v=J("router-view");return f(),x("aside",null,[y(m(ke),{vertical:""},{default:M(()=>[y(m(ye),{"has-sider":""},{default:M(()=>[y(m(Pe),{"collapse-mode":"width","collapsed-width":70,width:240,collapsed:a.value,"show-trigger":"",onCollapse:g[1]||(g[1]=B=>a.value=!0),onExpand:g[2]||(g[2]=B=>a.value=!1)},{default:M(()=>[c("div",De,[y(m(xe),{value:r.value,"onUpdate:value":g[0]||(g[0]=B=>r.value=B),collapsed:a.value,"collapsed-width":70,"collapsed-icon-size":25,options:E},null,8,["value","collapsed"]),Ye])]),_:1},8,["collapsed"]),c("div",Ve,[m(j).path=="/projects"?(f(),x("div",Fe,[y(ee,{infoAllProjects:m(L)},null,8,["infoAllProjects"])])):Q("",!0),y(v)])]),_:1})]),_:1})])}}});const qe=O(Ue,[["__scopeId","data-v-c92d0bda"]]),He={class:"p-7"},Xe=k({__name:"projectsDashboardMobile",setup(e){const r=Z();return(a,p)=>{const u=J("router-view");return f(),x("div",He,[m(r).path=="/projects"?(f(),N(ee,{key:0,infoAllProjects:m(L)},null,8,["infoAllProjects"])):Q("",!0),y(u)])}}}),Ke={class:"bg-dashboards"},Ge=k({__name:"projects",setup(e){const r=T(!0),a=()=>{r.value=window.innerWidth<580};return Te(()=>{a()}),window.addEventListener("resize",a),(p,u)=>(f(),x("div",Ke,[r.value?(f(),N(Xe,{key:0})):(f(),N(qe,{key:1}))]))}});const Je=O(Ge,[["__scopeId","data-v-059594e2"]]);export{Je as default};
