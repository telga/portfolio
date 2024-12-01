"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[628],{2628:function(e,t,a){a.r(t),a.d(t,{default:function(){return de}});a(4114);var n=a(6768),l=a(4232),i=a(144),o=a(5130),s=a(1387),r=a(6497),u=a(585),c=a(9280),v=a(5931);const d={key:0,class:"fixed inset-0 z-50 bg-[#000000] flex flex-col items-center justify-center"};var h={__name:"LoadingScreenV2",props:{alwaysShow:{type:Boolean,default:!1}},setup(e){const t=e,a=(0,i.KR)(!0);return(0,n.sV)((()=>{t.alwaysShow||setTimeout((()=>{a.value=!1}),1e3)})),(t,l)=>((0,n.uX)(),(0,n.Wv)(o.Transition,{"enter-active-class":"transition-opacity duration-500","leave-active-class":"transition-opacity duration-500","enter-from-class":"opacity-0","leave-to-class":"opacity-0"},{default:(0,n.k6)((()=>[a.value||e.alwaysShow?((0,n.uX)(),(0,n.CE)("div",d,l[0]||(l[0]=[(0,n.Lk)("div",{class:"text-[#ffffff] text-4xl font-mono mb-8"}," bn:os ",-1),(0,n.Lk)("div",{class:"w-8 h-8 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin"},null,-1)]))):(0,n.Q3)("",!0)])),_:1}))}};const p=h;var m=p;const w={class:"bg-[var(--bg-primary)] h-8 flex items-center justify-between px-4 text-[var(--text-primary)] text-sm relative shadow-md"},g={class:"w-[200px] flex items-center gap-4"},x={class:"relative whitespace-nowrap"},f={class:"absolute inset-x-0 mx-auto w-fit h-8 flex items-center justify-center gap-4 -translate-x-4"},k={class:"flex items-center gap-1"},y={class:"relative inline-block whitespace-nowrap"},b={key:0,class:"absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--accent-hover)] scale-x-0 transition-transform duration-200 group-hover:scale-x-100"},L={class:"flex items-center gap-1"},E={class:"relative inline-block whitespace-nowrap"},z={key:0,class:"absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--accent-hover)] scale-x-0 transition-transform duration-200 group-hover:scale-x-100"},C={class:"w-[200px] flex items-center justify-end gap-2"};var M={__name:"HeaderV2",emits:["theme-switch","language-switch"],setup(e,{emit:t}){const{currentTheme:a}=(0,r.D)(),{locale:o}=(0,v.s9)(),s=(0,i.KR)(!0),u=(0,i.KR)(""),c=t;(0,n.sV)((()=>{setTimeout((()=>{s.value=!1}),2e3),d(),setInterval(d,1e3)}));const d=()=>{const e=new Date,t=e.toLocaleString("default",{month:"short"}),a=e.getDate(),n=e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1});u.value=`${t} ${a} ${n}`},h=()=>{s.value=!0;const e="nord"===a.value?"solarized":"nord";localStorage.setItem("theme",e),c("theme-switch",e),window.location.reload()},p=()=>{const e="en"===o.value?"jp":"en";o.value=e,c("language-switch",e)};return(e,t)=>{const a=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",w,[(0,n.bF)(m,{show:s.value},null,8,["show"]),(0,n.Lk)("div",g,[(0,n.bF)(a,{to:"/",class:"h-8 flex items-center px-2 cursor-pointer group"},{default:(0,n.k6)((()=>t[2]||(t[2]=[(0,n.Lk)("span",{class:"relative whitespace-nowrap"},[(0,n.eW)(" Regular Site "),(0,n.Lk)("div",{class:"absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--accent-hover)] scale-x-0 transition-transform duration-200 group-hover:scale-x-100"})],-1)]))),_:1}),(0,n.Lk)("button",{onClick:h,class:"h-8 flex items-center px-2 cursor-pointer group"},t[3]||(t[3]=[(0,n.Lk)("span",{class:"relative whitespace-nowrap"},[(0,n.eW)(" Switch Theme "),(0,n.Lk)("div",{class:"absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--accent-hover)] scale-x-0 transition-transform duration-200 group-hover:scale-x-100"})],-1)])),(0,n.Lk)("button",{onClick:p,class:"h-8 flex items-center px-2 cursor-pointer group"},[(0,n.Lk)("span",x,[(0,n.eW)((0,l.v_)("en"===(0,i.R1)(o)?"JP":"EN")+" ",1),t[4]||(t[4]=(0,n.Lk)("div",{class:"absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--accent-hover)] scale-x-0 transition-transform duration-200 group-hover:scale-x-100"},null,-1))])])]),(0,n.Lk)("div",f,[e.$attrs.isTerminalExists?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"cursor-pointer group",onClick:t[0]||(t[0]=t=>e.$emit("toggle-terminal"))},[(0,n.Lk)("div",k,[t[6]||(t[6]=(0,n.Lk)("div",{class:"i-mdi-console w-4 h-4"},null,-1)),(0,n.Lk)("span",y,[t[5]||(t[5]=(0,n.eW)(" portfolio@brian-nguyen ")),(0,n.Lk)("div",{class:(0,l.C4)(["absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--accent-hover)] transition-transform duration-200",{"scale-x-100":!e.$attrs.isMinimized,"scale-x-0":e.$attrs.isMinimized}])},null,2),e.$attrs.isMinimized?((0,n.uX)(),(0,n.CE)("div",b)):(0,n.Q3)("",!0)])])])):(0,n.Q3)("",!0),e.$attrs.isDrawingExists?((0,n.uX)(),(0,n.CE)("div",{key:1,class:"cursor-pointer group",onClick:t[1]||(t[1]=t=>e.$emit("toggle-drawing"))},[(0,n.Lk)("div",L,[t[8]||(t[8]=(0,n.Lk)("div",{class:"i-mdi-pencil w-4 h-4"},null,-1)),(0,n.Lk)("span",E,[t[7]||(t[7]=(0,n.eW)(" drawing@brian-nguyen ")),(0,n.Lk)("div",{class:(0,l.C4)(["absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--accent-hover)] transition-transform duration-200",{"scale-x-100":!e.$attrs.isDrawingMinimized,"scale-x-0":e.$attrs.isDrawingMinimized}])},null,2),e.$attrs.isDrawingMinimized?((0,n.uX)(),(0,n.CE)("div",z)):(0,n.Q3)("",!0)])])])):(0,n.Q3)("",!0)]),(0,n.Lk)("div",C,[(0,n.Lk)("div",null,(0,l.v_)(u.value),1),t[9]||(t[9]=(0,n.Lk)("div",{class:"i-mdi-account-multiple w-4 h-4"},null,-1))])])}}},R=a(1241);const K=(0,R.A)(M,[["__scopeId","data-v-a31da00c"]]);var T=K;function W(e,t){return(0,n.uX)(),(0,n.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,n.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"})])}function H(e,t){return(0,n.uX)(),(0,n.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,n.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"})])}function $(e,t){return(0,n.uX)(),(0,n.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,n.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18 12H6"})])}function S(e,t){return(0,n.uX)(),(0,n.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,n.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"})])}function j(e,t){return(0,n.uX)(),(0,n.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,n.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})])}function D(e,t){return(0,n.uX)(),(0,n.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,n.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"})])}function X(e,t){return(0,n.uX)(),(0,n.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,n.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"})])}const _={class:"flex items-stretch h-full ml-auto"},A={class:"flex flex-col h-[calc(100%-32px)]"},B={class:"flex items-center gap-4 p-2 bg-[var(--bg-secondary)]"},Y=["disabled"],F={class:"flex items-center gap-2"};var V={__name:"DrawingWindow",props:{position:{type:Object,required:!0},size:{type:Object,required:!0},isMaximized:{type:Boolean,default:!1}},emits:["update:position","update:size","minimize","maximize","close"],setup(e,{emit:t}){const a=e,s=t,r=(0,i.KR)(!1),u=(0,i.KR)({x:0,y:0}),c=e=>{a.isMaximized||(r.value=!0,u.value={x:e.clientX-a.position.x,y:e.clientY-a.position.y},window.addEventListener("mousemove",v),window.addEventListener("mouseup",d))},v=e=>{r.value&&s("update:position",{x:e.clientX-u.value.x,y:e.clientY-u.value.y})},d=()=>{r.value=!1,window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",d)},h=(0,i.KR)(!1),p=(0,i.KR)(null),m=(0,i.KR)({width:0,height:0}),w=(0,i.KR)({x:0,y:0}),g=(0,i.KR)({x:0,y:0}),x=(e,t)=>{a.isMaximized||(t.preventDefault(),h.value=!0,p.value=e,m.value={...a.size},w.value={...a.position},g.value={x:t.clientX,y:t.clientY},window.addEventListener("mousemove",f),window.addEventListener("mouseup",k))},f=e=>{if(!h.value)return;const t=e.clientX-g.value.x,a=e.clientY-g.value.y,n={...m.value},l={...w.value};p.value.includes("e")&&(n.width=m.value.width+t),p.value.includes("w")&&(n.width=m.value.width-t,l.x=w.value.x+t),p.value.includes("s")&&(n.height=m.value.height+a),n.width=Math.max(n.width,400),n.height=Math.max(n.height,300),s("update:size",n),s("update:position",l)},k=()=>{h.value=!1,window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",k)},y=(0,i.KR)(null),b=(0,i.KR)(null),L=(0,i.KR)(!1),E=(0,i.KR)("pen"),z=(0,i.KR)("#000000"),C=(0,i.KR)(5),M=(0,i.KR)(0),R=(0,i.KR)(0);function K(){y.value&&(y.value.width=a.size.width,y.value.height=a.size.height-74)}function T(e){L.value=!0;const t=y.value.getBoundingClientRect();M.value=e.clientX-t.left,R.value=e.clientY-t.top}function W(e){if(!L.value)return;const t=y.value.getBoundingClientRect(),a=e.clientX-t.left,n=e.clientY-t.top;b.value.beginPath(),b.value.moveTo(M.value,R.value),b.value.lineTo(a,n),"pen"===E.value?(b.value.strokeStyle=z.value,b.value.lineWidth=C.value,b.value.lineCap="round",b.value.stroke()):(b.value.strokeStyle="white",b.value.lineWidth=C.value,b.value.lineCap="round",b.value.stroke()),M.value=a,R.value=n}function H(){L.value=!1}(0,n.sV)((()=>{b.value=y.value.getContext("2d"),K()})),(0,n.wB)((()=>a.size),K,{deep:!0});const V=()=>{y.value&&b.value&&(b.value.fillStyle="white",b.value.fillRect(0,0,y.value.width,y.value.height)),s("close")};return(0,n.hi)((()=>{window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",d),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",k)})),(t,a)=>((0,n.uX)(),(0,n.CE)("div",{class:"absolute shadow-xl overflow-hidden bg-[#002b36]",style:(0,l.Tr)({left:"number"===typeof e.position.x?`${e.position.x}px`:e.position.x,top:"number"===typeof e.position.y?`${e.position.y}px`:e.position.y,width:`${e.size.width}px`,height:`${e.size.height}px`})},[(0,n.Lk)("div",{class:"resize-handle resize-e",onMousedown:a[0]||(a[0]=e=>x("e",e))},null,32),(0,n.Lk)("div",{class:"resize-handle resize-w",onMousedown:a[1]||(a[1]=e=>x("w",e))},null,32),(0,n.Lk)("div",{class:"resize-handle resize-s",onMousedown:a[2]||(a[2]=e=>x("s",e))},null,32),(0,n.Lk)("div",{class:"resize-handle resize-se",onMousedown:a[3]||(a[3]=e=>x("se",e))},null,32),(0,n.Lk)("div",{class:"resize-handle resize-sw",onMousedown:a[4]||(a[4]=e=>x("sw",e))},null,32),(0,n.Lk)("div",{class:"h-8 flex items-center relative select-none bg-[var(--bg-primary)]",onMousedown:c,style:(0,l.Tr)({cursor:r.value?"grabbing":"grab"})},[a[11]||(a[11]=(0,n.Lk)("div",{class:"absolute w-full text-center text-[var(--accent)] text-sm pointer-events-none"}," Drawing App ",-1)),(0,n.Lk)("div",_,[(0,n.Lk)("button",{onClick:a[5]||(a[5]=e=>t.$emit("minimize")),class:"hover:bg-gray-600 w-11 flex items-center justify-center cursor-pointer"},[(0,n.bF)((0,i.R1)($),{class:"w-5 h-5 text-gray-300"})]),(0,n.Lk)("button",{onClick:a[6]||(a[6]=e=>t.$emit("maximize")),class:"hover:bg-gray-600 w-11 flex items-center justify-center cursor-pointer"},[(0,n.bF)((0,i.R1)(S),{class:"w-4 h-4 text-gray-300"})]),(0,n.Lk)("button",{onClick:V,class:"hover:bg-red-500 w-11 flex items-center justify-center cursor-pointer relative"},[(0,n.bF)((0,i.R1)(j),{class:"w-5 h-5 text-gray-300"})])])],36),(0,n.Lk)("div",A,[(0,n.Lk)("div",B,[(0,n.Lk)("button",{onClick:a[7]||(a[7]=e=>E.value="pen"),class:(0,l.C4)(["p-2 rounded","pen"===E.value?"bg-[var(--accent)]":"hover:bg-gray-700"])},[(0,n.bF)((0,i.R1)(D),{class:"w-5 h-5 text-gray-300"})],2),(0,n.Lk)("button",{onClick:a[8]||(a[8]=e=>E.value="eraser"),class:(0,l.C4)(["p-2 rounded","eraser"===E.value?"bg-[var(--accent)]":"hover:bg-gray-700"])},[(0,n.bF)((0,i.R1)(X),{class:"w-5 h-5 text-gray-300"})],2),(0,n.bo)((0,n.Lk)("input",{type:"color","onUpdate:modelValue":a[9]||(a[9]=e=>z.value=e),class:"w-8 h-8 rounded cursor-pointer",disabled:"eraser"===E.value},null,8,Y),[[o.vModelText,z.value]]),(0,n.Lk)("div",F,[a[12]||(a[12]=(0,n.Lk)("span",{class:"text-gray-300 text-sm"},"Size:",-1)),(0,n.bo)((0,n.Lk)("input",{type:"range","onUpdate:modelValue":a[10]||(a[10]=e=>C.value=e),min:"1",max:"50",class:"w-24"},null,512),[[o.vModelText,C.value]])])]),(0,n.Lk)("canvas",{ref_key:"canvas",ref:y,class:"flex-1 bg-white cursor-crosshair",onMousedown:T,onMousemove:W,onMouseup:H,onMouseleave:H},null,544)])],4))}};const q=(0,R.A)(V,[["__scopeId","data-v-2e05bc30"]]);var I=q,N=a(7411);const O={class:"flex-1 relative",style:{"background-image":"url('/images/termbg.jpg')","background-size":"cover","background-position":"center"}},P={key:0,class:"absolute left-2 top-1/2 -translate-y-1/2 lg:hidden cursor-grab active:cursor-grabbing"},Q={class:"flex items-stretch h-full ml-auto window-controls"},U={class:"flex"},J={class:"text-[var(--text-primary)]"},Z={key:0,class:"mt-2 text-[var(--text-secondary)] font-mono whitespace-pre-wrap break-words max-w-full"},G={class:"text-[var(--text-primary)] space-y-1 mt-6 flex-1 min-w-[300px]"},ee={class:"flex flex-wrap gap-2"},te={class:"flex gap-2"},ae={class:"text-[var(--accent-secondary)]"},ne={class:"flex"},le={class:"text-[var(--text-primary)] relative cursor-text font-mono"},ie=["value"],oe={key:0,class:"fixed inset-0 z-50 flex items-center justify-center"},se={class:"relative bg-[var(--bg-secondary)] border border-[var(--accent)] rounded-lg p-8 w-[90%] max-w-[400px]",style:{background:"rgba(var(--bg-secondary-rgb), 0.95)"}},re={class:"text-[var(--text-primary)] text-center"},ue=5;var ce={__name:"HomeV2",setup(e){const t=(0,s.rd)(),{currentTheme:a}=(0,r.D)(),d=window.innerWidth<768?window.innerWidth:600,h=window.innerWidth<768?window.innerHeight-48:350,{t:p,locale:m}=(0,v.s9)(),w=(0,i.KR)(null),g=(0,i.KR)(""),x=(0,i.KR)(!0),f=(0,i.KR)(!1),k=(0,i.KR)([{command:"ifetch",showNeofetch:!0},{command:"init",output:"Type 'help' for a list of available commands."}]),y=["ifetch","init"],b=(0,i.KR)(0),L=(0,i.KR)(null),E=(0,i.KR)(!0),z=(0,i.KR)(!1),C=(0,i.KR)(null),M=(0,i.KR)(!1),R=(0,i.KR)({x:0,y:0}),K=(0,i.KR)({x:"calc(50% - 450px)",y:"calc(50% - 300px)"}),D=(0,i.KR)({width:900,height:600}),X=(0,i.KR)(null),_=(0,i.KR)(null),A=(0,i.KR)(!1),B=(0,i.KR)({position:null,size:null}),Y=(0,i.KR)(!1),F=(0,i.KR)({x:"calc(50% - 450px)",y:"calc(50% - 300px)"}),V=(0,i.KR)({width:900,height:600}),q=(0,i.KR)(!1),ce=(0,i.KR)(-1),ve=(0,i.KR)(""),de=(0,n.EW)((()=>E.value||z.value)),he=["ifetch","help","about","projects","exp","clear","switchtheme","regsite","switchlang","curlang"],pe=e=>{const l=window.innerWidth<=1024;if(!l||"Unidentified"!==e.key)if(f.value)e.ctrlKey&&"l"===e.key.toLowerCase()&&(e.preventDefault(),me());else{if(e.ctrlKey)switch(e.key){case"a":return e.preventDefault(),void(b.value=0);case"k":return e.preventDefault(),void(g.value=g.value.substring(0,b.value));case"l":return e.preventDefault(),void me()}if("ArrowLeft"===e.key)return e.preventDefault(),void(b.value>0&&b.value--);if("ArrowRight"===e.key)return e.preventDefault(),void(b.value<g.value.length&&b.value++);if("Enter"===e.key&&g.value){const e={command:g.value},l=["ifetch","help","about","projects","exp","clear","switchtheme","regsite","switchlang","curlang"];if("init"===g.value)k.value.push({command:g.value,output:"bnterm: Permission denied for command 'init'"});else if(l.includes(g.value))if("ifetch"===g.value){e.showNeofetch=!0,k.value.push(e);const t=k.value.filter((e=>!y.includes(e.command)));if(t.length>ue){const e=k.value.findIndex((e=>!y.includes(e.command)));k.value.splice(e,1)}}else if("help"===g.value){e.output="Available commands:\n    \n    ifetch          Display profile\n    about           Show about information\n    projects        View my projects\n    exp             View my experience\n    help            Show this help message\n    clear           Clear the terminal (Ctrl+L)\n    switchtheme     Switch between nord and solarized themes\n    switchlang      Switch between English and Japanese\n    curlang         Show current language setting\n    regsite         Go to regular site\n    \n    Type a command and press Enter to execute",k.value.push(e);const t=k.value.filter((e=>!y.includes(e.command)));if(t.length>ue){const e=k.value.findIndex((e=>!y.includes(e.command)));k.value.splice(e,1)}}else if("about"===g.value)e.output=p("about.bio",{locale:"en"}),k.value.push(e),k.value.length>ue&&k.value.shift();else if("projects"===g.value){const t=c.map((e=>`${e.title[m.value]}\n    • ${e.description[m.value]}\n    • Demo: ${e.demo}\n    • Github: ${e.github}\n    `)).join("\n");e.output=`My Projects:\n\n${t}`,k.value.push(e),k.value.length>ue&&k.value.shift()}else if("exp"===g.value){let t="Work Experience:\n";Object.keys(u.A.work.items).forEach((e=>{const a=u.A.work.items[e];t+=`\n${p(`experiences.work.items.${e}.title`,{locale:m.value})}\n${p(`experiences.work.items.${e}.company`,{locale:m.value})}, ${p(`experiences.work.items.${e}.location`,{locale:m.value})}\n${a.duration}\n${Object.keys(a.responsibilities).map((t=>`• ${p(`experiences.work.items.${e}.responsibilities.${t}`,{locale:m.value})}`)).join("\n")}\n`})),e.output=t,k.value.push(e),k.value.length>ue&&k.value.shift()}else if("switchtheme"===g.value){const t="nord"===a.value?"solarized":"nord";localStorage.setItem("theme",t),e.output=`Switching to ${t} theme...`,k.value.push(e),window.location.reload()}else if("regsite"===g.value)e.output="Redirecting to regular site...",k.value.push(e),setTimeout((()=>{t.push("/")}),500);else{if("clear"===g.value)return void me();if("switchlang"===g.value){const t="en"===m.value?"jp":"en";m.value=t,e.output=`Switching to ${"en"===t?"English":"日本語"}...`,k.value.push(e)}else"curlang"===g.value&&(e.output="Current language: "+("en"===m.value?"English":"日本語"),k.value.push(e),k.value.length>ue&&k.value.shift())}else k.value.push({command:g.value,output:`bnterm: Unknown command '${g.value}'`});g.value="",b.value=0,f.value=!1,(0,n.dY)((()=>{w.value&&(w.value.style.display="none",w.value.offsetHeight,w.value.style.display="",w.value.scrollTo({top:w.value.scrollHeight,behavior:"smooth"}))}))}else"Backspace"===e.key?(e.preventDefault(),b.value>0&&(g.value=g.value.slice(0,b.value-1)+g.value.slice(b.value),b.value--)):1!==e.key.length||e.ctrlKey||(e.preventDefault(),g.value=g.value.slice(0,b.value)+e.key+g.value.slice(b.value),b.value++);if("ArrowUp"!==e.key){if("ArrowDown"!==e.key){if(1!==e.key.length&&"Backspace"!==e.key&&"Delete"!==e.key||(ce.value=-1),"Tab"!==e.key);else if(e.preventDefault(),g.value){const e=he.filter((e=>e.startsWith(g.value.toLowerCase())));1===e.length&&(g.value=e[0],b.value=e[0].length)}}else if(e.preventDefault(),ce.value>-1){if(ce.value--,-1===ce.value)g.value=ve.value;else{const e=k.value.filter((e=>!y.includes(e.command))).map((e=>e.command)).slice(-10);g.value=e[e.length-1-ce.value]}b.value=g.value.length}}else{e.preventDefault(),-1===ce.value&&(ve.value=g.value);const t=k.value.filter((e=>!y.includes(e.command))).map((e=>e.command)).slice(-10);t.length>0&&ce.value<t.length-1&&(ce.value++,g.value=t[t.length-1-ce.value],b.value=g.value.length)}}},me=()=>{k.value=[],g.value="",b.value=0,f.value=!1,w.value?.focus()},we=async()=>{try{await navigator.clipboard.writeText("briann2305@gmail.com"),ot.success("Email copied to clipboard!",{timeout:2e3,closeOnClick:!0,pauseOnHover:!0,draggable:!1,hideProgressBar:!0,icon:!1,position:"bottom-right",containerClassName:"terminal-toast-container",style:{marginTop:"52px"}})}catch(e){console.error("Failed to copy email")}},ge=e=>{g.value=e;const t={key:"Enter"};pe(t),(0,n.dY)((()=>{w.value?.focus()}))},xe=()=>{L.value&&(b.value=L.value.selectionStart||0)},fe=()=>{w.value&&(w.value.style.display="none",w.value.offsetHeight,w.value.style.display="",w.value.scrollTop=w.value.scrollHeight)},ke=()=>{z.value?(E.value=!0,z.value=!1,Pe(),setTimeout((()=>{const e=document.querySelector("#terminal-content");e&&(e.style.display="none",e.offsetHeight,e.style.display="",e.scrollTop=e.scrollHeight,e.focus())}),10)):E.value&&Pe()},ye=()=>{de.value=!1,E.value=!1,z.value=!1,b.value=0,g.value="",k.value=[]},be=()=>{de.value=!0,E.value=!0,z.value=!1,b.value=0,K.value=Ge.value,D.value=Ze.value,0===k.value.length&&(k.value=[{command:"ifetch",showNeofetch:!0},{command:"init",output:"Type 'help' for a list of available commands."}]),Pe(),(0,n.dY)((()=>{const e=document.querySelector("#terminal-content");e&&(e.focus(),e.style.display="none",e.offsetHeight,e.style.display="",e.scrollTo({top:e.scrollHeight,behavior:"smooth"}))}))};(0,n.sV)((()=>{k.value=[{command:"ifetch",showNeofetch:!0},{command:"init",output:"Type 'help' for a list of available commands."}],window.innerWidth<=1024&&(Ue.value=window.innerHeight>window.innerWidth);const e=()=>{if(window.innerWidth<=1024&&window.innerWidth>window.innerHeight){const e=document.querySelector(".flex-1")?.clientHeight||window.innerHeight;D.value={width:Math.min(800,window.innerWidth-80),height:e-88},K.value={x:`calc(50% - ${D.value.width/2}px)`,y:`calc(50% - ${D.value.height/2}px)`},(0,n.dY)((()=>{const e=document.querySelector("#terminal-content");e&&(e.style.display="none",e.offsetHeight,e.style.display="",e.scrollTop=e.scrollHeight,e.focus())}))}if(window.innerWidth<=1024&&window.innerWidth>window.innerHeight){const e=document.querySelector(".flex-1")?.clientHeight||window.innerHeight;Xe.value={width:Math.min(700,window.innerWidth-80),height:e-88},De.value={x:Math.max(60,(window.innerWidth-Xe.value.width)/2),y:Math.max(60,(e-Xe.value.height)/2)}}else Xe.value={width:800,height:600},De.value={x:120,y:120}};e(),(0,n.dY)((()=>{const e=document.querySelector("#terminal-content");e&&(e.style.display="none",e.offsetHeight,e.style.display="",e.scrollTop=e.scrollHeight)})),window.addEventListener("resize",e),(0,n.hi)((()=>{window.removeEventListener("resize",e)}))})),(0,n.hi)((()=>{window.removeEventListener("keydown",He),document.removeEventListener("mousemove",Ce),document.removeEventListener("mouseup",Me),document.removeEventListener("mousemove",Ke),document.removeEventListener("mouseup",Te),window.removeEventListener("resize",Je),window.removeEventListener("orientationchange",Je)}));const Le=()=>{F.value={...K.value},V.value={...D.value},z.value=!0,E.value=!1},Ee=()=>{if(A.value)B.value.position&&B.value.size&&(K.value={...B.value.position},D.value={...B.value.size}),A.value=!1,(0,n.dY)((()=>{fe(),w.value?.focus()}));else{B.value={position:{...K.value},size:{...D.value}};const e=document.querySelector(".flex-1")?.clientHeight||window.innerHeight;K.value={x:0,y:0},D.value={width:window.innerWidth,height:e},A.value=!0,(0,n.dY)((()=>{fe(),w.value?.focus()}))}},ze=e=>{if(e.target.closest(".window-controls")||A.value)return;M.value=!0;const t=e.touches?e.touches[0]:e;R.value={x:t.clientX-C.value.offsetLeft,y:t.clientY-C.value.offsetTop},e.touches?(document.addEventListener("touchmove",Ce,{passive:!1}),document.addEventListener("touchend",Me)):(document.addEventListener("mousemove",Ce),document.addEventListener("mouseup",Me))},Ce=e=>{if(!M.value)return;e.preventDefault();const t=e.touches?e.touches[0]:e,a=t.clientX-R.value.x,n=t.clientY-R.value.y;K.value={x:Math.max(0,Math.min(a,window.innerWidth-D.value.width)),y:Math.max(0,Math.min(n,window.innerHeight-D.value.height))}},Me=()=>{M.value=!1,document.removeEventListener("touchmove",Ce),document.removeEventListener("touchend",Me),document.removeEventListener("mousemove",Ce),document.removeEventListener("mouseup",Me)},Re=(e,t)=>{if(!t)return;q.value=!0,X.value=e;const a=t.touches?t.touches[0]:t,n=C.value.getBoundingClientRect();_.value={x:a.clientX,y:a.clientY,width:n.width,height:n.height,left:n.left},t.touches?(document.addEventListener("touchmove",Ke,{passive:!1}),document.addEventListener("touchend",Te)):(document.addEventListener("mousemove",Ke),document.addEventListener("mouseup",Te))},Ke=e=>{if(!q.value||!_.value)return;e.preventDefault();const t=e.touches?e.touches[0]:e,a=t.clientX-_.value.x,l=t.clientY-_.value.y,i=window.innerWidth<=1024,o=document.querySelector(".flex-1")?.clientHeight||window.innerHeight,s=Math.max(d,_.value.width+a),r=Math.max(h,_.value.height+l);D.value=i?{width:Math.min(s,window.innerWidth-40),height:Math.min(r,o-48)}:{width:s,height:r},(0,n.dY)((()=>fe()))},Te=()=>{q.value=!1,X.value=null,_.value=null,document.removeEventListener("touchmove",Ke),document.removeEventListener("touchend",Te),document.removeEventListener("mousemove",Ke),document.removeEventListener("mouseup",Te)},We=()=>{Y.value=!0;const e=t=>{t.target.closest(".desktop-icon")||(Y.value=!1,document.removeEventListener("click",e))};setTimeout((()=>{document.addEventListener("click",e)}),0)};(0,n.wB)(Y,(e=>{const t=document.querySelector(".desktop-icon");e?t.classList.add("selected"):t.classList.remove("selected")}));const He=e=>{E.value&&e.ctrlKey&&"w"===e.key&&(e.preventDefault(),ye())},$e=(0,i.KR)(!1),Se=(0,i.KR)(!1),je=(0,i.KR)(!1),De=(0,i.KR)({x:120,y:120}),Xe=(0,i.KR)({width:800,height:600}),_e=(0,i.KR)(!1),Ae=()=>{if(Se.value=!0,$e.value=!0,je.value=!1,et.value<=1024){const e=document.querySelector(".flex-1")?.clientHeight||window.innerHeight;Xe.value={width:Math.min(700,window.innerWidth-80),height:e-88},De.value={x:Math.max(60,(window.innerWidth-Xe.value.width)/2),y:Math.max(60,(e-Xe.value.height)/2)}}else De.value={x:120,y:120},Xe.value={width:800,height:600};Qe()},Be=()=>{Se.value=!1,$e.value=!1,je.value=!1,_e.value=!1},Ye=()=>{$e.value=!1,je.value=!0},Fe=(0,i.KR)({position:{x:120,y:120},size:{width:800,height:600}}),Ve=()=>{if(_e.value=!_e.value,_e.value)Fe.value={position:{...De.value},size:{...Xe.value}},De.value={x:0,y:0},Xe.value={width:window.innerWidth,height:et.value<=1024?window.innerHeight-48:window.innerHeight};else if(et.value<=1024){const e=document.querySelector(".flex-1")?.clientHeight||window.innerHeight;Xe.value={width:Math.min(700,window.innerWidth-80),height:e-88},De.value={x:Math.max(60,(window.innerWidth-Xe.value.width)/2),y:Math.max(60,(e-Xe.value.height)/2)}}else Fe.value&&(De.value={...Fe.value.position},Xe.value={...Fe.value.size})},qe=()=>{je.value?($e.value=!0,je.value=!1,Qe()):$e.value&&Qe()},Ie=()=>{Se.value?($e.value=!$e.value,je.value=!$e.value):Ae()},Ne=(0,i.KR)(1),Oe=(0,i.KR)(1),Pe=()=>{Ne.value=2,Oe.value=1},Qe=()=>{Oe.value=Math.max(Ne.value+1,Oe.value+1)},Ue=(0,i.KR)(!1),Je=()=>{window.innerWidth<=1024?Ue.value=window.innerHeight>window.innerWidth:Ue.value=!1},Ze=(0,n.EW)((()=>{const e=window.innerWidth<=1024,t=window.innerWidth>window.innerHeight,a=document.querySelector(".flex-1")?.clientHeight||window.innerHeight;if(e&&t){const e=Math.min(800,window.innerWidth-80);return{width:e,height:a-88}}if(e){const e=window.innerWidth-40;return{width:e,height:500}}return{width:900,height:600}})),Ge=(0,n.EW)((()=>window.innerWidth<=1024&&window.innerWidth>window.innerHeight?{x:`calc(50% - ${Ze.value.width/2}px)`,y:`calc(50% - ${Ze.value.height/2}px)`}:{x:"calc(50% - 450px)",y:"calc(50% - 300px)"})),et=(0,i.KR)(window.innerWidth);(0,n.sV)((()=>{const e=()=>{et.value=window.innerWidth};window.addEventListener("resize",e),(0,n.hi)((()=>{window.removeEventListener("resize",e)}))}));const tt=(0,i.KR)(null),at=e=>{const t=e.target.closest(".cursor-text")||e.target===w.value;t&&!e.target.closest("a, button")&&(0===k.value.length&&(k.value=[{command:"ifetch",showNeofetch:!0},{command:"init",output:"Type 'help' for a list of available commands."}]),tt.value?.focus(),(0,n.dY)((()=>{fe()})))},nt=e=>{g.value=e.target.value,b.value=e.target.value.length},lt=()=>{setTimeout((()=>{fe()}),100)},it=()=>{},ot=(0,N.dj)(),st=e=>{ot.success("Switched to "+("en"===e?"English":"日本語"),{timeout:2e3,closeOnClick:!0,pauseOnHover:!0,draggable:!1,hideProgressBar:!0,icon:!1,position:"bottom-right",containerClassName:"terminal-toast-container",style:{marginTop:"52px"}})},rt=e=>{ot.success(`Switching to ${e} theme...`,{timeout:2e3,closeOnClick:!0,pauseOnHover:!0,draggable:!1,hideProgressBar:!0,icon:!1,position:"bottom-right",containerClassName:"terminal-toast-container",style:{marginTop:"52px"}})};return(e,t)=>((0,n.uX)(),(0,n.CE)("div",{class:"absolute inset-0 bg-[var(--bg-primary)] flex flex-col",style:(0,l.Tr)(e.appStyles)},[(0,n.bF)(T,{onOpenTerminal:be,onToggleTerminal:ke,onOpenDrawing:Ae,onToggleDrawing:qe,onThemeSwitch:rt,onLanguageSwitch:st,isMinimized:z.value,isTerminalExists:de.value,isDrawingMinimized:je.value,isDrawingExists:Se.value},null,8,["isMinimized","isTerminalExists","isDrawingMinimized","isDrawingExists"]),(0,n.Lk)("div",O,[(0,n.Lk)("div",{class:"absolute top-4 left-4 flex flex-col items-center gap-1 p-2 rounded cursor-pointer group desktop-icon",onClick:We,onDblclick:be},[(0,n.bF)((0,i.R1)(W),{class:"w-10 h-10 text-[#93a1a1] group-hover:text-[#eee8d5]"}),t[12]||(t[12]=(0,n.Lk)("span",{class:"text-[#93a1a1] text-xs group-hover:text-[#eee8d5] text-center max-w-[96px] px-1"}," Terminal ",-1))],32),(0,n.Lk)("div",{class:"absolute top-28 left-4 flex flex-col items-center gap-1 p-2 rounded cursor-pointer group desktop-icon hidden xl:flex",onClick:Ie,onDblclick:Ae},[(0,n.bF)((0,i.R1)(H),{class:"w-10 h-10 text-[#93a1a1] group-hover:text-[#eee8d5]"}),t[13]||(t[13]=(0,n.Lk)("span",{class:"text-[#93a1a1] text-xs group-hover:text-[#eee8d5] text-center max-w-[96px] px-1"}," Drawing ",-1))],32),E.value?((0,n.uX)(),(0,n.CE)("div",{key:0,ref_key:"terminalWindow",ref:C,class:"absolute shadow-xl overflow-hidden bg-[#002b36]",style:(0,l.Tr)({left:"number"===typeof K.value.x?`${K.value.x}px`:K.value.x,top:"number"===typeof K.value.y?`${K.value.y}px`:K.value.y,width:`${D.value.width}px`,height:`${D.value.height}px`,zIndex:Ne.value}),onMousedown:Pe},[(0,n.Lk)("div",{class:"resize-handle resize-e",onMousedown:t[0]||(t[0]=e=>Re("e",e))},null,32),(0,n.Lk)("div",{class:"resize-handle resize-w",onMousedown:t[1]||(t[1]=e=>Re("w",e))},null,32),(0,n.Lk)("div",{class:"resize-handle resize-s",onMousedown:t[2]||(t[2]=e=>Re("s",e))},null,32),(0,n.Lk)("div",{class:"resize-handle resize-se",onMousedown:t[3]||(t[3]=e=>Re("se",e))},null,32),(0,n.Lk)("div",{class:"resize-handle resize-sw",onMousedown:t[4]||(t[4]=e=>Re("sw",e))},null,32),(0,n.Lk)("div",{class:"h-8 flex items-center relative select-none bg-[var(--bg-primary)]",onMousedown:ze,onTouchstart:ze,style:(0,l.Tr)({cursor:M.value?"grabbing":"grab"})},[et.value<=1024?((0,n.uX)(),(0,n.CE)("div",P,t[14]||(t[14]=[(0,n.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-[var(--text-secondary)]",viewBox:"0 0 20 20",fill:"currentColor"},[(0,n.Lk)("path",{d:"M7 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM7 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM7 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"}),(0,n.Lk)("path",{d:"M13 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"})],-1)]))):(0,n.Q3)("",!0),t[15]||(t[15]=(0,n.Lk)("div",{class:"absolute w-full text-center text-[var(--accent)] text-sm pointer-events-none"}," portfolio@brian-nguyen> ",-1)),(0,n.Lk)("div",Q,[(0,n.Lk)("button",{onClick:Le,class:"hover:bg-gray-600 w-11 flex items-center justify-center cursor-pointer relative"},[(0,n.bF)((0,i.R1)($),{class:"w-5 h-5 text-gray-300"})]),(0,n.Lk)("button",{onClick:Ee,class:"hover:bg-gray-600 w-11 flex items-center justify-center cursor-pointer relative"},[(0,n.bF)((0,i.R1)(S),{class:(0,l.C4)(["w-4 h-4 text-gray-300",{"transform rotate-180":A.value}])},null,8,["class"])]),(0,n.Lk)("button",{onClick:ye,class:"hover:bg-red-500 w-11 flex items-center justify-center cursor-pointer relative"},[(0,n.bF)((0,i.R1)(j),{class:"w-5 h-5 text-gray-300"})])])],36),(0,n.Lk)("div",{ref_key:"terminalContent",ref:w,id:"terminal-content",class:"p-6 font-mono text-sm overflow-y-auto bg-[var(--bg-secondary)] touch-pan-y",style:(0,l.Tr)({height:`calc(${D.value.height}px - 32px)`}),onKeydown:pe,onKeyup:xe,onClick:xe,onTouchstart:at,onTouchmovePassive:it,tabindex:"0"},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(k.value,((e,a)=>((0,n.uX)(),(0,n.CE)("div",{key:a,class:"mb-4"},[(0,n.Lk)("div",U,[t[16]||(t[16]=(0,n.Lk)("div",{class:"text-[var(--accent-secondary)]"},"portfolio@brian-nguyen",-1)),t[17]||(t[17]=(0,n.Lk)("div",{class:"text-[var(--text-primary)]"},"> ",-1)),(0,n.Lk)("div",J,(0,l.v_)(e.command),1)]),e.output?((0,n.uX)(),(0,n.CE)("div",Z,(0,l.v_)(e.output),1)):(0,n.Q3)("",!0),e.showNeofetch?((0,n.uX)(),(0,n.CE)("div",{key:1,class:"flex flex-wrap mt-2 gap-8",style:(0,l.Tr)({maxWidth:D.value.width-48+"px"})},[t[26]||(t[26]=(0,n.Lk)("div",{class:"w-[200px] min-w-[200px] aspect-square relative"},[(0,n.Lk)("img",{src:"/images/userpic.png",alt:"Profile Picture",class:"w-full h-full object-cover"})],-1)),(0,n.Lk)("div",G,[t[23]||(t[23]=(0,n.Lk)("div",null,[(0,n.Lk)("span",{class:"text-[var(--accent)]"},"Name: "),(0,n.eW)("Brian Nguyen")],-1)),t[24]||(t[24]=(0,n.Lk)("div",null,[(0,n.Lk)("span",{class:"text-[var(--accent)]"},"Github: "),(0,n.Lk)("a",{href:"https://github.com/telga",target:"_blank",class:"hover:text-[var(--accent-orange)] transition-colors duration-300"}," telga (link) ")],-1)),(0,n.Lk)("div",null,[t[18]||(t[18]=(0,n.Lk)("span",{class:"text-[var(--accent)]"},"Email: ",-1)),(0,n.Lk)("button",{onClick:we,class:"hover:text-[var(--accent-orange)] transition-colors duration-300"},"briann2305@gmail.com (link)")]),t[25]||(t[25]=(0,n.Fv)('<div data-v-0f33b16c><span class="text-[var(--accent)]" data-v-0f33b16c>LinkedIn: </span><a href="https://www.linkedin.com/in/bnguy23/" target="_blank" class="hover:text-[var(--accent-orange)] transition-colors duration-300" data-v-0f33b16c> bnguy23 (link) </a></div><div class="flex flex-wrap gap-x-2" data-v-0f33b16c><span class="text-[var(--accent)]" data-v-0f33b16c>Skills:</span><span class="text-[var(--accent-secondary)]" data-v-0f33b16c> Vue.js, React.js, Node.js, HTML, CSS, Python, Java, JavaScript, WSL, Linux (Arch, Ubuntu) </span></div>',2)),(0,n.Lk)("div",ee,[t[21]||(t[21]=(0,n.Lk)("span",{class:"text-[var(--accent)]"},"Pages:",-1)),(0,n.Lk)("div",te,[(0,n.Lk)("button",{onClick:t[5]||(t[5]=e=>ge("about")),class:"text-[var(--accent-secondary)] hover:text-[var(--accent-orange)] transition-colors duration-300"},"about"),t[19]||(t[19]=(0,n.Lk)("span",{class:"text-[var(--text-secondary)]"},"|",-1)),(0,n.Lk)("button",{onClick:t[6]||(t[6]=e=>ge("projects")),class:"text-[var(--accent-secondary)] hover:text-[var(--accent-orange)] transition-colors duration-300"},"projects"),t[20]||(t[20]=(0,n.Lk)("span",{class:"text-[var(--text-secondary)]"},"|",-1)),(0,n.Lk)("button",{onClick:t[7]||(t[7]=e=>ge("exp")),class:"text-[var(--accent-secondary)] hover:text-[var(--accent-orange)] transition-colors duration-300"},"experience")])]),(0,n.Lk)("div",null,[t[22]||(t[22]=(0,n.Lk)("span",{class:"text-[var(--accent)]"},"Language: ",-1)),(0,n.Lk)("span",ae,(0,l.v_)("en"===(0,i.R1)(m)?"English":"日本語"),1)])])],4)):(0,n.Q3)("",!0)])))),128)),(0,n.Lk)("div",ne,[t[27]||(t[27]=(0,n.Lk)("div",{class:"text-[var(--accent-secondary)]"},"portfolio@brian-nguyen",-1)),t[28]||(t[28]=(0,n.Lk)("div",{class:"text-[var(--text-primary)]"},"> ",-1)),(0,n.Lk)("div",le,[(0,n.Lk)("span",null,(0,l.v_)(g.value.slice(0,b.value)),1),(0,n.bo)((0,n.Lk)("div",{class:"w-[2px] h-[14px] bg-[var(--accent-red)] animate-blink absolute inline-block",style:(0,l.Tr)({left:7.8*b.value+"px",top:"3px",transform:"translateX(-50%)"})},null,4),[[o.vShow,x.value&&!f.value]]),(0,n.Lk)("span",null,(0,l.v_)(g.value.slice(b.value)),1)])]),(0,n.Lk)("input",{ref_key:"mobileInput",ref:tt,type:"text",class:"opacity-0 absolute left-0 w-1 h-1 -z-10",value:g.value,onInput:nt,onFocus:lt,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false"},null,40,ie)],36)],36)):(0,n.Q3)("",!0),Se.value?(0,n.bo)(((0,n.uX)(),(0,n.Wv)(I,{key:1,position:De.value,"onUpdate:position":t[8]||(t[8]=e=>De.value=e),size:Xe.value,"onUpdate:size":t[9]||(t[9]=e=>Xe.value=e),isMaximized:_e.value,windowWidth:et.value,onMinimize:Ye,onMaximize:Ve,onClose:Be,onMousedown:Qe,style:(0,l.Tr)({zIndex:Oe.value})},null,8,["position","size","isMaximized","windowWidth","style"])),[[o.vShow,$e.value]]):(0,n.Q3)("",!0),(0,n.bF)(o.Transition,{name:"fade"},{default:(0,n.k6)((()=>[Ue.value?((0,n.uX)(),(0,n.CE)("div",oe,[(0,n.Lk)("div",{class:"absolute inset-0 bg-[var(--bg-primary)] bg-opacity-80 backdrop-blur-sm",onClick:t[10]||(t[10]=e=>Ue.value=!1)}),(0,n.Lk)("div",se,[(0,n.Lk)("div",re,[t[29]||(t[29]=(0,n.Lk)("h2",{class:"text-xl font-medium mb-6"},"Device Orientation Notice",-1)),t[30]||(t[30]=(0,n.Lk)("p",{class:"mb-8 text-lg"},"On smaller screen size devices please rotate your device to landscape mode. (this will probably not work on mobile)",-1)),(0,n.Lk)("button",{onClick:t[11]||(t[11]=e=>Ue.value=!1),class:"px-6 py-3 bg-[var(--accent)] text-[var(--bg-primary)] rounded-md hover:opacity-90 transition-opacity text-lg"}," Proceed ")])])])):(0,n.Q3)("",!0)])),_:1})])],4))}};const ve=(0,R.A)(ce,[["__scopeId","data-v-0f33b16c"]]);var de=ve}}]);
//# sourceMappingURL=628.d4d29b18e34d6619.js.map