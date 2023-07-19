import{_ as y}from"./nuxt-link.31053fde.js";import{G as C,H as k,I as v,J as A,K as $,L as T,M as S,u as P,E as w}from"./useAsset.86fee284.js";import{a as g,o as p,b as m,e as t,k as d,l as c,h as E,p as K,j as I,m as u,K as N,q as x,s as b,x as h,y as O,S as H,z as L,A as R,T as B,R as V,B as j,C as M,D as F,E as X,i as q,r as f,F as z}from"./entry.5577b8b5.js";import{u as D}from"./composables.e2b1df64.js";const G={data(){return{isPopup:!1}},methods:{},watch:{}},o=e=>(K("data-v-7e06adc1"),e=e(),I(),e),J={class:"header"},Q={class:"header-box header-desktop"},U=o(()=>t("img",{class:"header-logo",src:v,alt:""},null,-1)),W={class:"header-group"},Y={class:"header-row"},Z=o(()=>t("div",{class:"header-text"},"醫療團隊",-1)),ee=o(()=>t("div",{class:"header-en"},"TEAM",-1)),te=o(()=>t("div",{class:"header-text"},"成功個案",-1)),se=o(()=>t("div",{class:"header-en"},"EXAMPLE",-1)),oe=o(()=>t("div",{class:"header-text"},"減重服務",-1)),ae=o(()=>t("div",{class:"header-en"},"SERVICE",-1)),ne=o(()=>t("div",{class:"header-text"},"聯繫我們",-1)),ie=o(()=>t("div",{class:"header-en"},"CONTACT",-1)),re=o(()=>t("div",{class:"header-text"},"診所位置",-1)),de=o(()=>t("div",{class:"header-en"},"LOCATION",-1)),ce={class:"header-box header-rwd"},le=o(()=>t("img",{class:"header-logo",src:v,alt:""},null,-1)),_e={key:0,class:"header-outer"},ue={class:"header-inner"},pe={class:"header-box2"},me=o(()=>t("img",{class:"header-logo",src:v,alt:""},null,-1)),ve={class:"header-row"},he=o(()=>t("div",{class:"header-text"},"醫療團隊",-1)),fe=o(()=>t("div",{class:"header-en"},"TEAM",-1)),ge=o(()=>t("div",{class:"header-text"},"成功個案",-1)),xe=o(()=>t("div",{class:"header-en"},"EXAMPLE",-1)),ye=o(()=>t("div",{class:"header-text"},"減重服務",-1)),Ce=o(()=>t("div",{class:"header-en"},"SERVICE",-1)),ke=o(()=>t("div",{class:"header-text"},"聯繫我們",-1)),Ae=o(()=>t("div",{class:"header-en"},"CONTACT",-1)),$e=o(()=>t("div",{class:"header-text"},"診所位置",-1)),Te=o(()=>t("div",{class:"header-en"},"LOCATION",-1));function Se(e,s,n,a,i,_){const r=y;return p(),m("div",J,[t("div",Q,[d(r,{to:"/"},{default:c(()=>[U]),_:1}),t("div",W,[t("div",Y,[d(r,{to:"/#team",class:"header-item"},{default:c(()=>[Z,ee]),_:1}),d(r,{to:"/#case",class:"header-item"},{default:c(()=>[te,se]),_:1}),d(r,{to:"/#service",class:"header-item"},{default:c(()=>[oe,ae]),_:1}),d(r,{to:"/#contact",class:"header-item"},{default:c(()=>[ne,ie]),_:1}),d(r,{to:"/#location",class:"header-item"},{default:c(()=>[re,de]),_:1})])])]),t("div",ce,[d(r,{to:"/"},{default:c(()=>[le]),_:1}),t("img",{onClick:s[0]||(s[0]=l=>i.isPopup=!0),class:"header-menu",src:C,alt:""})]),i.isPopup?(p(),m("div",_e,[t("div",ue,[t("div",pe,[d(r,{onClick:s[1]||(s[1]=l=>i.isPopup=!1),to:"/"},{default:c(()=>[me]),_:1}),t("img",{onClick:s[2]||(s[2]=l=>i.isPopup=!1),class:"header-menu",src:k,alt:""})]),t("div",ve,[d(r,{onClick:s[3]||(s[3]=l=>i.isPopup=!1),to:"/#team",class:"header-item"},{default:c(()=>[he,fe]),_:1}),d(r,{onClick:s[4]||(s[4]=l=>i.isPopup=!1),to:"/#case",class:"header-item"},{default:c(()=>[ge,xe]),_:1}),d(r,{onClick:s[5]||(s[5]=l=>i.isPopup=!1),to:"/#service",class:"header-item"},{default:c(()=>[ye,Ce]),_:1}),d(r,{onClick:s[6]||(s[6]=l=>i.isPopup=!1),to:"/#contact",class:"header-item"},{default:c(()=>[ke,Ae]),_:1}),d(r,{onClick:s[7]||(s[7]=l=>i.isPopup=!1),to:"/#location",class:"header-item"},{default:c(()=>[$e,Te]),_:1})])])])):E("",!0)])}const Pe=g(G,[["render",Se],["__scopeId","data-v-7e06adc1"]]),we=(e,s)=>s.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var a;return((a=e.params[n.slice(1)])==null?void 0:a.toString())||""}),Ee=(e,s)=>{const n=e.route.matched.find(i=>{var _;return((_=i.components)==null?void 0:_.default)===e.Component.type}),a=s??(n==null?void 0:n.meta.key)??(n&&we(e.route,n));return typeof a=="function"?a(e.route):a},Ke=(e,s)=>({default:()=>e?u(N,e===!0?{}:e,s):s}),Ie=x({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:s}){const n=b();return()=>u(V,{name:e.name,route:e.route,...s},{default:a=>{if(!a.Component)return;const i=Ee(a,e.pageKey),_=n.deferHydration(),r=!!(e.transition??a.route.meta.pageTransition??h),l=r&&be([e.transition,a.route.meta.pageTransition,h,{onAfterLeave:()=>{n.callHook("page:transition:finish",a.Component)}}].filter(Boolean));return O(B,r&&l,Ke(e.keepalive??a.route.meta.keepalive??R,u(H,{onPending:()=>n.callHook("page:start",a.Component),onResolve:()=>{L(()=>n.callHook("page:finish",a.Component).finally(_))}},{default:()=>u(Oe,{key:i,routeProps:a,pageKey:i,hasTransition:r})}))).default()}})}});function Ne(e){return Array.isArray(e)?e:e?[e]:[]}function be(e){const s=e.map(n=>({...n,onAfterLeave:Ne(n.onAfterLeave)}));return j(...s)}const Oe=x({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(e){const s=e.pageKey,n=e.routeProps.route,a={};for(const i in e.routeProps.route)a[i]=M(()=>s===e.pageKey?e.routeProps.route[i]:n[i]);return F("_route",X(a)),()=>u(e.routeProps.Component)}});const He={},Le={class:"footer"},Re=q('<div class="footer-row" data-v-78508a72><div class="footer-outer" data-v-78508a72><img class="footer-icon" src="'+A+'" alt="" data-v-78508a72></div><div class="footer-outer" data-v-78508a72><img class="footer-icon" src="'+$+'" alt="" data-v-78508a72></div><div class="footer-outer" data-v-78508a72><img class="footer-icon" src="'+T+'" alt="" data-v-78508a72></div><div class="footer-outer" data-v-78508a72><img class="footer-icon" src="'+S+'" alt="" data-v-78508a72></div></div><div class="footer-copyright" data-v-78508a72>Copyright © 2020 Adobe. All rights reserved.</div>',2),Be=[Re];function Ve(e,s){return p(),m("div",Le,Be)}const je=g(He,[["render",Ve],["__scopeId","data-v-78508a72"]]);const Me=t("a",{class:"default-line-box",href:"http://line.me/ti/p/~frank810729",target:"_blank"},[t("img",{class:"default-line",src:w,alt:""})],-1),De={__name:"default",setup(e){const s=f("義大專業醫療團隊"),n=f("2023年本中心獲頒「國家生技醫療品質獎」殊榮，您有任何問題，親切的醫師都在診所為您服務，四位醫師＋個管師＋營養師的全方位照護，全心投入於外科手術減重，帶來更好的效果、降低風險與副作用，我們給您最舒適的住房體驗");return D({title:s,meta:[{name:"description",content:n},{name:"og:description",content:n},{name:"og:title",content:s},{name:"og:img",content:P("img/star-main/1.jpg")}]}),(a,i)=>{const _=Pe,r=Ie,l=je;return p(),m("div",null,[d(_),d(r,{class:"default-main"}),d(l),Me,z(a.$slots,"default")])}}};export{De as default};