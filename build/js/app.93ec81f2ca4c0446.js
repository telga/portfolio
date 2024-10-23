(function(){"use strict";var e={82:function(e,t,o){var n=o(5130),a=o(5234),r=o(5931),s=o(6768);const l={id:"app",class:"min-h-screen bg-bg-primary"},A={class:"container mx-auto px-4 py-8"};function i(e,t,o,n,a,r){const i=(0,s.g2)("Header"),c=(0,s.g2)("router-view"),u=(0,s.g2)("Footer");return(0,s.uX)(),(0,s.CE)("div",l,[e.$route.meta.hideHeaderFooter?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(i,{key:0})),(0,s.Lk)("main",A,[(0,s.bF)(c)]),e.$route.meta.hideHeaderFooter?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(u,{key:1}))])}var c=o(144),u=o(4232),d=o(1387);const g=(0,c.KR)(localStorage.getItem("theme")||"nord");function m(){const e=()=>{g.value="nord"===g.value?"solarized":"nord",t(g.value)},t=e=>{document.documentElement.classList.remove("theme-nord","theme-solarized"),document.documentElement.classList.add(`theme-${e}`),localStorage.setItem("theme",e)},o=()=>{const e=localStorage.getItem("theme");e&&t(e)};return(0,s.wB)(g,(e=>{t(e)})),{currentTheme:g,toggleTheme:e,applyStoredTheme:o}}function p(){const{locale:e}=(0,r.s9)(),t=["en","jp"],o=(0,c.KR)(e.value),n=()=>{const e="en"===o.value?"jp":"en";a(e)},a=n=>{t.includes(n)&&(e.value=n,o.value=n,localStorage.setItem("userLanguage",n))};return(0,s.sV)((()=>{const e=localStorage.getItem("userLanguage");e&&t.includes(e)&&a(e)})),(0,s.wB)(e,(e=>{t.includes(e)&&(o.value=e,localStorage.setItem("userLanguage",e))})),{currentLanguage:o,toggleLanguage:n}}const v=(0,c.KR)(!1);function f(){v.value=!0}const h={key:0,class:"loading-screen"};var b={__name:"LoadingScreen",setup(e){return(e,t)=>(0,c.R1)(v)?((0,s.uX)(),(0,s.CE)("div",h,t[0]||(t[0]=[(0,s.Lk)("div",{class:"loader"},null,-1)]))):(0,s.Q3)("",!0)}},w=o(1241);const x=(0,w.A)(b,[["__scopeId","data-v-6cf7027f"]]);var k=x,y=o(3812);const C={class:"bg-bg-secondary shadow"},B={class:"container mx-auto px-4 py-4 flex justify-between items-center"},E={class:"flex items-center space-x-2"},L=["src"],Q={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},j={key:0,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},I={key:1,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},D={class:"hidden lg:flex space-x-4"},X={class:"relative z-10"},P={class:"hidden lg:flex items-center space-x-4"},O={key:0,class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},T={key:1,class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},F={class:"font-medium"},M={key:0,class:"lg:hidden bg-bg-secondary"},N={class:"px-2 pt-2 pb-3 space-y-1"},H={class:"px-2 py-3 border-t border-bg-primary flex justify-between items-center"},z={key:0,class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},U={key:1,class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Y={class:"font-medium"};var K={__name:"TheHeader",setup(e){const t=(0,d.lq)(),{currentTheme:o,toggleTheme:a}=m(),{currentLanguage:r,toggleLanguage:l}=p(),A=(0,c.KR)(!1),i=[{to:"/",label:"nav.home"},{to:"/AboutPage",label:"nav.about"},{to:"/ProjectsPage",label:"nav.projects"}],g=e=>t.path===e||"/"!==e&&t.path.startsWith(e),v=()=>{A.value=!1},h=()=>{v(),f(),setTimeout((()=>{l(),localStorage.setItem("lastTheme",o.value),document.body.classList.add("page-reload"),setTimeout((()=>{window.location.reload()}),300)}),200)};(0,s.wB)((()=>t.path),v);const b=e=>{A.value&&!e.target.closest("header")&&v()};return(0,s.sV)((()=>{document.addEventListener("click",b)})),(0,s.hi)((()=>{document.removeEventListener("click",b)})),(e,t)=>{const l=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(k),(0,s.Lk)("header",C,[(0,s.Lk)("nav",B,[(0,s.Lk)("div",E,[(0,s.bF)(l,{to:"/",class:"flex items-center"},{default:(0,s.k6)((()=>[(0,s.Lk)("img",{src:(0,c.R1)(y),alt:"Nord Logo",class:"h-8 w-auto max-w-[150px]"},null,8,L)])),_:1})]),(0,s.Lk)("button",{onClick:t[0]||(t[0]=(0,n.D$)((e=>A.value=!A.value),["stop"])),class:"lg:hidden text-text-primary hover:text-accent p-2"},[((0,s.uX)(),(0,s.CE)("svg",Q,[A.value?((0,s.uX)(),(0,s.CE)("path",I)):((0,s.uX)(),(0,s.CE)("path",j))]))]),(0,s.Lk)("div",D,[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(i,(t=>(0,s.bF)(l,{key:t.to,to:t.to,class:(0,u.C4)(["text-text-primary hover:text-accent text-base transition-colors duration-200 relative group px-2 py-1",{"text-accent-secondary":e.$route.path===t.to}])},{default:(0,s.k6)((()=>[(0,s.Lk)("span",X,(0,u.v_)(e.$t(t.label)),1),(0,s.Lk)("span",{class:(0,u.C4)(["absolute inset-0 border-b-2 transition-colors duration-200",{"border-accent-hover":e.$route.path===t.to,"border-accent opacity-0 group-hover:opacity-100":e.$route.path!==t.to}])},null,2)])),_:2},1032,["to","class"]))),64))]),(0,s.Lk)("div",P,[(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>(0,c.R1)(a)&&(0,c.R1)(a)(...e)),class:(0,u.C4)(["theme-toggle-btn p-1 ring-2 hover:ring-accent-hover focus:ring-accent rounded-full transition-colors duration-300 focus:outline-none","nord"===(0,c.R1)(o)?"bg-solarized-base03 text-solarized-base1 border-solarized-base1":"bg-nord-polar-night-1 text-nord-snow-storm-1 border-nord-snow-storm-1","hover:border-accent active:border-accent-secondary"])},["nord"===(0,c.R1)(o)?((0,s.uX)(),(0,s.CE)("svg",O,t[3]||(t[3]=[(0,s.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)]))):((0,s.uX)(),(0,s.CE)("svg",T,t[4]||(t[4]=[(0,s.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.5 14.5L8 18l3.5-3.5L15 18l4.5-4.5M4 10l4-4 4 4 4-4 4 4"},null,-1)])))],2),(0,s.Lk)("button",{onClick:h,class:"flex items-center text-text-primary hover:text-accent transition-colors duration-300 focus:outline-none ring-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-secondary hover:ring-accent-hover focus:ring-accent rounded-full px-3 py-1 bg-bg-primary"},[(0,s.Lk)("span",F,(0,u.v_)("en"===(0,c.R1)(r)?"日本語":"english"),1)])])]),(0,s.bF)(n.eB,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0 -translate-y-full","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition-all duration-300 ease-in","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 -translate-y-full"},{default:(0,s.k6)((()=>[A.value?((0,s.uX)(),(0,s.CE)("div",M,[(0,s.Lk)("div",N,[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(i,(t=>(0,s.bF)(l,{key:t.to,to:t.to,class:(0,u.C4)(["block text-text-primary hover:text-accent text-base transition-colors duration-200 px-2 py-2",{"active-mobile-link":g(t.to)}]),onClick:v},{default:(0,s.k6)((()=>[(0,s.eW)((0,u.v_)(e.$t(t.label)),1)])),_:2},1032,["to","class"]))),64))]),(0,s.Lk)("div",H,[(0,s.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>(0,c.R1)(a)&&(0,c.R1)(a)(...e)),class:(0,u.C4)(["theme-toggle-btn p-1 ring-2 hover:ring-accent-hover focus:ring-accent rounded-full transition-colors duration-300 focus:outline-none","nord"===(0,c.R1)(o)?"bg-solarized-base03 text-solarized-base1 border-solarized-base1":"bg-nord-polar-night-1 text-nord-snow-storm-1 border-nord-snow-storm-1","hover:border-accent active:border-accent-secondary"])},["nord"===(0,c.R1)(o)?((0,s.uX)(),(0,s.CE)("svg",z,t[5]||(t[5]=[(0,s.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)]))):((0,s.uX)(),(0,s.CE)("svg",U,t[6]||(t[6]=[(0,s.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.5 14.5L8 18l3.5-3.5L15 18l4.5-4.5M4 10l4-4 4 4 4-4 4 4"},null,-1)])))],2),(0,s.Lk)("button",{onClick:h,class:"flex items-center text-text-primary hover:text-accent transition-colors duration-300 focus:outline-none ring-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-secondary hover:ring-accent-hover focus:ring-accent rounded-full px-3 py-1 bg-bg-primary"},[(0,s.Lk)("span",Y,(0,u.v_)("en"===(0,c.R1)(r)?"日本語":"english"),1)])])])):(0,s.Q3)("",!0)])),_:1})])],64)}}};const G=(0,w.A)(K,[["__scopeId","data-v-1b2e8ac4"]]);var R=G,W=o(9124),S=o(9602),V=o(9278),q=o(5849);const J={class:"bg-bg-secondary py-4"},_={class:"container mx-auto px-4"},Z={class:"flex justify-between items-center"},$={class:"text-text-secondary"},ee={class:"flex space-x-4"},te=["href"];var oe={__name:"TheFooter",setup(e){const t=(0,s.EW)((()=>(new Date).getFullYear())),o=[{name:"GitHub",url:"https://github.com/telga",icon:W.A},{name:"LinkedIn",url:"https://linkedin.com/in/bnguy23",icon:S.A},{name:"Instagram",url:"https://instagram.com/br.ainn",icon:V.A},{name:"Email",url:"mailto:briann2305@gmail.com",icon:q.A}];return(e,n)=>((0,s.uX)(),(0,s.CE)("footer",J,[(0,s.Lk)("div",_,[(0,s.Lk)("div",Z,[(0,s.Lk)("p",$,"© "+(0,u.v_)(t.value)+" "+(0,u.v_)(e.$t("footer.copyright")),1),(0,s.Lk)("div",ee,[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(o,(e=>(0,s.Lk)("a",{key:e.name,href:e.url,target:"_blank",rel:"noopener noreferrer",class:"text-text-secondary hover:text-accent transition-colors"},[((0,s.uX)(),(0,s.Wv)((0,s.$y)(e.icon),{class:"w-5 h-5"}))],8,te))),64))])])])]))}};const ne=oe;var ae=ne,re={name:"App",components:{Header:R,Footer:ae},setup(){const{applyStoredTheme:e}=m();(0,s.sV)((()=>{t(),e(),n()}));const t=()=>{const e=document.querySelector("link[rel*='icon']")||document.createElement("link");e.type="image/png",e.rel="shortcut icon",e.href=o(3812),document.getElementsByTagName("head")[0].appendChild(e)},n=()=>{setTimeout((()=>{document.documentElement.classList.remove("js-loading")}),0)};return{}}};const se=(0,w.A)(re,[["render",i]]);var le=se;const Ae={class:"h-screen bg-bg-primary text-text-primary flex flex-col items-center justify-center p-8"},ie={class:"max-w-3xl w-full flex flex-col"},ce={class:"text-4xl sm:text-5xl font-bold mb-2 text-accent animate-slide-in-right"},ue={class:"text-lg sm:text-xl mb-8 animate-slide-in-left"},de={class:"flex space-x-4 mb-12"},ge=["href"];var me={__name:"HomePage",setup(e){const t=[{name:"GitHub",url:"https://github.com/telga",icon:W.A},{name:"LinkedIn",url:"https://linkedin.com/in/bnguy23",icon:S.A},{name:"Instagram",url:"https://instagram.com/br.ainn",icon:V.A},{name:"Email",url:"mailto:briann2305@gmail.com",icon:q.A}];return(e,o)=>((0,s.uX)(),(0,s.CE)("div",Ae,[(0,s.Lk)("div",ie,[o[0]||(o[0]=(0,s.Lk)("div",{class:"mb-auto"},null,-1)),(0,s.Lk)("h1",ce,(0,u.v_)(e.$t("home.name")),1),(0,s.Lk)("p",ue,(0,u.v_)(e.$t("home.intro")),1),(0,s.Lk)("div",de,[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(t,((e,t)=>(0,s.Lk)("a",{key:e.name,href:e.url,target:"_blank",rel:"noopener noreferrer",class:"text-text-secondary hover:text-accent transition-colors hover:scale-110 transform duration-200 animate-slide-in-bottom",style:(0,u.Tr)({animationDelay:100*t+"ms"})},[((0,s.uX)(),(0,s.Wv)((0,s.$y)(e.icon),{class:"w-5 h-5 sm:w-6 sm:h-6"}))],12,ge))),64))]),o[1]||(o[1]=(0,s.Lk)("div",{class:"mb-auto mt-16 sm:mt-24"},null,-1))])]))}};const pe=(0,w.A)(me,[["__scopeId","data-v-e008b748"]]);var ve=pe,fe="data:image/png;base64,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";const he={class:"min-h-screen bg-bg-primary text-text-primary p-4 sm:p-8 lg:p-12"},be={class:"max-w-4xl mx-auto"},we={class:"text-4xl sm:text-5xl font-bold text-accent mb-8 sm:mb-12 animate-fade-in-up text-center lg:text-left"},xe={class:"flex flex-col lg:flex-row gap-8 lg:gap-12"},ke={class:"lg:w-1/3 animate-fade-in-up",style:{"animation-delay":"100ms"}},ye=["src","alt"],Ce={class:"text-2xl font-bold text-accent mt-8 mb-4 text-center lg:text-left animate-fade-in-up",style:{"animation-delay":"200ms"}},Be={class:"flex flex-wrap justify-center lg:justify-start gap-2"},Ee={class:"lg:w-2/3"},Le={class:"space-y-6"};var Qe={__name:"AboutPage",setup(e){const{t:t}=(0,r.s9)(),o=(0,c.KR)(fe),n=(0,c.KR)(["Vue.js","React.js","Node.js","HTML","CSS","Python","Java","JavaScript","WSL","Linux (Arch, Ubuntu)"]),a=(0,s.EW)((()=>t("about.bio").split("\n\n")));return(e,t)=>((0,s.uX)(),(0,s.CE)("div",he,[(0,s.Lk)("div",be,[(0,s.Lk)("h1",we,(0,u.v_)(e.$t("about.title")),1),(0,s.Lk)("div",xe,[(0,s.Lk)("div",ke,[(0,s.Lk)("img",{src:o.value,alt:e.$t("about.imageAlt"),class:"w-48 h-48 object-cover rounded-full mx-auto lg:mx-0 shadow-lg"},null,8,ye),(0,s.Lk)("h2",Ce,(0,u.v_)(e.$t("about.skills")),1),(0,s.Lk)("ul",Be,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.value,((e,t)=>((0,s.uX)(),(0,s.CE)("li",{key:e,class:"bg-bg-secondary text-text-primary px-3 py-1 rounded-full text-sm shadow animate-fade-in-up",style:(0,u.Tr)({animationDelay:300+25*t+"ms"})},(0,u.v_)(e),5)))),128))])]),(0,s.Lk)("div",Ee,[(0,s.Lk)("div",Le,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.value,((e,t)=>((0,s.uX)(),(0,s.CE)("p",{key:t,class:"text-text-secondary leading-relaxed animate-fade-in-up",style:(0,u.Tr)({animationDelay:200+30*t+"ms"})},(0,u.v_)(e),5)))),128))])])])])]))}};const je=(0,w.A)(Qe,[["__scopeId","data-v-4882ab01"]]);var Ie=je,De=JSON.parse('[{"id":1,"title":{"en":"Smile of Compassion Projects Website","jp":"Smile of Compassion プロジェクトウェブサイト"},"description":{"en":"A website for the Smile of Compassion Projects, a non-profit organization that provides various services to underserved communities.","jp":"Smile of Compassion プロジェクトのウェブサイトです。非営利団体が、貧困した地域に対して様々なサービスを提供しています。"},"image":"soc.png","github":"https://github.com/telga/Smile-of-Compassion-New-Site","demo":"https://telga.github.io/Smile-of-Compassion-New-Site/"},{"id":2,"title":{"en":"Milano Nails Spa - Flower Mound Website","jp":"Milano Nails Spa - Flower Mound ウェブサイト"},"description":{"en":"A website for Milano Nails Spa - Flower Mound, a nail salon in Flower Mound, TX.","jp":"Milano Nails Spa - Flower Mound のウェブサイトです。Flower Mound, TX にあるネイルサロンです。"},"image":"milano.png","github":"#","demo":"https://www.milanonailspaflowermound.com/"},{"id":3,"title":{"en":"More to come...","jp":"これからも続々..."},"description":{"en":"More to come...","jp":"これからも続々..."},"image":"placeholder.png","github":"#","demo":"#"}]');const Xe=(0,a.nY)("portfolio",{state:()=>({projects:[],loading:!1,error:null}),actions:{async fetchProjects(){this.loading=!0,this.error=null;try{await new Promise((e=>setTimeout(e,500))),this.projects=De}catch(e){console.error("Error fetching projects:",e),this.error=e.message}finally{this.loading=!1}}}}),Pe={class:"projects-page container mx-auto px-4 py-8"},Oe={class:"text-3xl font-bold mb-8 animate-fade-in",style:{color:"var(--accent)"}},Te={key:0,class:"animate-pulse",style:{color:"var(--text-secondary)"}},Fe={key:1,style:{color:"var(--text-secondary)"}},Me={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},Ne=["src","alt"],He={class:"p-6 flex-grow flex flex-col"},ze={class:"text-xl font-bold mb-2",style:{color:"var(--text-primary)"}},Ue={class:"mb-4 flex-grow",style:{color:"var(--text-secondary)"}},Ye={class:"flex justify-between mt-auto"},Ke=["href"],Ge=["href"];var Re={__name:"ProjectsPage",setup(e){const t=Xe(),{locale:o}=(0,r.s9)(),n=(0,c.KR)([]),a=()=>{n.value=t.projects.map((e=>({...e,title:e.title[o.value]||e.title.en,description:e.description[o.value]||e.description.en,image:`/portfolio/images/${e.image}`})))};return(0,s.wB)(o,a),(0,s.wB)((()=>t.projects),a,{immediate:!0}),(0,s.sV)((()=>{t.fetchProjects()})),(e,o)=>((0,s.uX)(),(0,s.CE)("div",Pe,[(0,s.Lk)("h1",Oe,(0,u.v_)(e.$t("projects.title")),1),(0,c.R1)(t).loading?((0,s.uX)(),(0,s.CE)("div",Te)):(0,c.R1)(t).error?((0,s.uX)(),(0,s.CE)("div",Fe,(0,u.v_)((0,c.R1)(t).error),1)):(0,s.Q3)("",!0),(0,s.Lk)("div",Me,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.value,((t,o)=>((0,s.uX)(),(0,s.CE)("div",{key:t.id,class:"rounded-lg overflow-hidden shadow-lg animate-fade-in-up flex flex-col",style:(0,u.Tr)({animationDelay:100*o+"ms",backgroundColor:"var(--bg-secondary)"})},[(0,s.Lk)("img",{src:t.image,alt:t.title,class:"w-full h-48 object-cover"},null,8,Ne),(0,s.Lk)("div",He,[(0,s.Lk)("h2",ze,(0,u.v_)(t.title),1),(0,s.Lk)("p",Ue,(0,u.v_)(t.description),1),(0,s.Lk)("div",Ye,[(0,s.Lk)("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",class:"animated-button github-button"},(0,u.v_)(e.$t("projects.github")),9,Ke),(0,s.Lk)("a",{href:t.demo,target:"_blank",rel:"noopener noreferrer",class:"animated-button demo-button"},(0,u.v_)(e.$t("projects.demo")),9,Ge)])])],4)))),128))])]))}};const We=(0,w.A)(Re,[["__scopeId","data-v-2d61e1a0"]]);var Se=We;const Ve={class:"min-h-screen bg-bg-primary text-text-primary p-8"},qe={class:"text-4xl font-bold mb-8 text-accent"};var Je={__name:"ExperiencesPage",setup(e){return(e,t)=>((0,s.uX)(),(0,s.CE)("div",Ve,[(0,s.Lk)("h1",qe,(0,u.v_)(e.$t("experiences.title")),1)]))}};const _e=Je;var Ze=_e;const $e={class:"min-h-screen bg-bg-primary text-text-primary p-8"},et={class:"text-4xl font-bold mb-8 text-accent"};var tt={__name:"SkillsPage",setup(e){return(e,t)=>((0,s.uX)(),(0,s.CE)("div",$e,[(0,s.Lk)("h1",et,(0,u.v_)(e.$t("skills.title")),1)]))}};const ot=tt;var nt=ot;const at={class:"min-h-screen bg-bg-primary text-text-primary p-8"},rt={class:"text-4xl font-bold mb-8 text-accent"};var st={__name:"ResumePage",setup(e){return(e,t)=>((0,s.uX)(),(0,s.CE)("div",at,[(0,s.Lk)("h1",rt,(0,u.v_)(e.$t("resume.title")),1)]))}};const lt=st;var At=lt;const it={class:"container mx-auto px-4 py-8"},ct=["textContent"],ut={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},dt=["src","alt"],gt={class:"p-6"},mt=["textContent"],pt=["textContent"];function vt(e,t,o,n,a,r){return(0,s.uX)(),(0,s.CE)("div",it,[(0,s.Lk)("h1",{class:"text-4xl font-bold mb-8 text-center",textContent:(0,u.v_)(e.$t("gear.title"))},null,8,ct),(0,s.Lk)("div",ut,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.gearItems,(t=>((0,s.uX)(),(0,s.CE)("div",{key:t.name,class:"bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"},[(0,s.Lk)("img",{src:t.image,alt:t.name,class:"w-full h-48 object-cover"},null,8,dt),(0,s.Lk)("div",gt,[(0,s.Lk)("h2",{class:"text-xl font-semibold mb-2",textContent:(0,u.v_)(e.$t(`gear.items.${t.name}.name`))},null,8,mt),(0,s.Lk)("p",{class:"text-gray-600 dark:text-gray-300",textContent:(0,u.v_)(e.$t(`gear.items.${t.name}.description`))},null,8,pt)])])))),128))])])}var ft=JSON.parse('[{"name":"KB","description":"Test item 1","image":"/images/gear/camera.jpg"},{"name":"KB","description":"Test item 2","image":"/images/gear/microphone.jpg"},{"name":"KB","description":"Test item 3","image":"/images/gear/laptop.jpg"}]'),ht={name:"GearPage",data(){return{gearItems:ft}}};const bt=(0,w.A)(ht,[["render",vt],["__scopeId","data-v-d6498f00"]]);var wt=bt;const xt="briann2305@gmail.com",kt={class:"min-h-screen bg-bg-primary text-text-primary p-4 sm:p-8 lg:p-12 flex items-center justify-center"},yt={class:"max-w-md w-full bg-bg-secondary rounded-lg shadow-lg overflow-hidden animate-fade-in-up relative"},Ct={class:"absolute top-2 left-2 z-10"},Bt={key:0,class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Et={key:1,class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Lt={class:"absolute top-2 right-2 z-10"},Qt={class:"w-5 h-5 flex items-center justify-center font-bold text-xs"},jt={class:"flex flex-col items-center justify-center h-full p-8"},It={class:"w-40 h-40 rounded-full overflow-hidden border-4 border-accent animate-portrait mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300"},Dt=["src"],Xt={class:"space-y-6 animate-content text-center"},Pt={class:"text-4xl font-bold text-accent animate-text-slide-up"},Ot={class:"text-2xl font-light animate-text-slide-up animation-delay-100"},Tt={class:"mt-8"},Ft={class:"flex items-center justify-center mb-6"},Mt={class:"text-accent mx-4 text-sm font-medium"},Nt={class:"space-y-4"},Ht=["href","target","rel"],zt={class:"flex items-center justify-center"},Ut={class:"text-sm text-text-primary group-hover:text-accent transition-colors duration-300"};var Yt={__name:"BusinessCard",setup(e){const{currentTheme:t,toggleTheme:o}=m(),{currentLanguage:n,toggleLanguage:a}=p(),{t:l}=(0,r.s9)(),A=xt,i=(0,c.KR)("/portfolio/images/userpic.png"),d=(0,s.EW)((()=>[{text:A,href:`mailto:${A}`},{text:l("businessCard.phone"),href:`tel:${l("businessCard.phone")}`},{text:l("businessCard.website"),href:l("businessCard.website"),target:"_blank",rel:"noopener noreferrer"},{text:l("businessCard.address"),href:`https://maps.google.com/?q=${encodeURIComponent(l("businessCard.address"))}`,target:"_blank",rel:"noopener noreferrer"}]));return(e,r)=>((0,s.uX)(),(0,s.CE)("div",kt,[(0,s.Lk)("div",yt,[(0,s.Lk)("div",Ct,[(0,s.Lk)("button",{onClick:r[0]||(r[0]=(...e)=>(0,c.R1)(o)&&(0,c.R1)(o)(...e)),class:(0,u.C4)(["theme-toggle-btn p-1 ring-2 hover:ring-accent-hover focus:ring-accent rounded-full transition-colors duration-300 focus:outline-none","nord"===(0,c.R1)(t)?"bg-solarized-base03 text-solarized-base1 border-solarized-base1":"bg-nord-polar-night-1 text-nord-snow-storm-1 border-nord-snow-storm-1","hover:border-accent active:border-accent-secondary"])},["solarized"===(0,c.R1)(t)?((0,s.uX)(),(0,s.CE)("svg",Bt,r[2]||(r[2]=[(0,s.Lk)("path",{d:"M4.5 14.5L8 18l3.5-3.5L15 18l4.5-4.5M4 10l4-4 4 4 4-4 4 4"},null,-1)]))):((0,s.uX)(),(0,s.CE)("svg",Et,r[3]||(r[3]=[(0,s.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)])))],2)]),(0,s.Lk)("div",Lt,[(0,s.Lk)("button",{onClick:r[1]||(r[1]=(...e)=>(0,c.R1)(a)&&(0,c.R1)(a)(...e)),class:(0,u.C4)(["theme-toggle-btn p-1 ring-2 hover:ring-accent-hover focus:ring-accent rounded-full transition-colors duration-300 focus:outline-none","solarized"===(0,c.R1)(t)?"bg-solarized-base03 text-solarized-base1 border-solarized-base1":"bg-nord-polar-night-1 text-nord-snow-storm-1 border-nord-snow-storm-1","hover:border-accent active:border-accent-secondary"])},[(0,s.Lk)("span",Qt,(0,u.v_)("en"===(0,c.R1)(n)?"jp":"en"),1)],2)]),(0,s.Lk)("div",jt,[(0,s.Lk)("div",It,[(0,s.Lk)("img",{src:i.value,alt:"Portrait",class:"w-full h-full object-cover"},null,8,Dt)]),(0,s.Lk)("div",Xt,[(0,s.Lk)("h1",Pt,(0,u.v_)(e.$t("businessCard.name")),1),(0,s.Lk)("p",Ot,(0,u.v_)(e.$t("businessCard.title")),1),(0,s.Lk)("div",Tt,[(0,s.Lk)("div",Ft,[r[4]||(r[4]=(0,s.Lk)("div",{class:"border-t border-accent w-1/4"},null,-1)),(0,s.Lk)("span",Mt,(0,u.v_)(e.$t("businessCard.contact")),1),r[5]||(r[5]=(0,s.Lk)("div",{class:"border-t border-accent w-1/4"},null,-1))]),(0,s.Lk)("div",Nt,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(d.value,((e,t)=>((0,s.uX)(),(0,s.CE)("a",{key:t,href:e.href,target:e.target,rel:e.rel,class:"block py-2 transition-colors duration-300 group relative"},[(0,s.Lk)("div",zt,[(0,s.Lk)("span",Ut,(0,u.v_)(e.text),1)]),r[6]||(r[6]=(0,s.Lk)("span",{class:"absolute bottom-0 left-0 w-full border-b-2 border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"},null,-1))],8,Ht)))),128))])])])])])]))}};const Kt=(0,w.A)(Yt,[["__scopeId","data-v-05e4405e"]]);var Gt=Kt;const Rt=[{path:"/",component:ve},{path:"/AboutPage",component:Ie},{path:"/ProjectsPage",component:Se},{path:"/ExperiencesPage",component:Ze},{path:"/SkillsPage",component:nt},{path:"/ResumePage",component:At},{path:"/GearPage",component:wt},{path:"/BusinessCard",component:Gt,meta:{hideHeaderFooter:!0}}],Wt=(0,d.aE)({history:(0,d.LA)("/portfolio/"),routes:Rt});var St=Wt,Vt=JSON.parse('{"siteName":"brian nguyen","nav":{"name":{"first":"brian・","last":"nguyen"},"home":"home","about":"about","projects":"projects","experiences":"experiences","skills":"skills","resume":"resume"},"footer":{"copyright":"gaki development"},"home":{"name":"brian nguyen","intro":"i\'m a web developer specializing in building (and occasionally designing) kinda cool things."},"about":{"title":"about me","imageAlt":"profile picture","bio":"Hey there! I\'m a web developer with a knack for tinkering and a love for exploration! With nearly a decade of experience in the confusing world of computers and software, I\'ve learned that the best solutions often come from a bit of trial and error (okay, maybe a lot of error).\\n\\nI thrive on diving into projects, poking at every corner until I figure out how to make things work—or at least until I get distracted by the next shiny idea haha. I absolutely love exploring other people\'s thoughts and ideas; it\'s like a treasure hunt for inspiration! There are countless ways to tackle a problem, and I\'m here to explore them all, one problem at a time.\\n\\nTo be honest, I still feel like I\'m just scratching the surface of what\'s possible. That\'s why I\'m committed to continuous learning and expansion. Every day is a new chance to mess around, learn, and maybe break a few things (don\'t worry, I always fix them...almost always).\\n\\nSo, if you\'re ready to join me on this complex but satisfying coding adventure, let\'s connect and see what wonderfully weird things we can build together!","skills":"skills"},"projects":{"title":"projects","github":"github","demo":"demo"},"experiences":{"title":"experiences"},"skills":{"title":"skills"},"resume":{"title":"resume"},"businessCard":{"name":"brian nguyen","title":"web developer","contact":"contact","phone":"+1 (587) 500-9308","website":"https://telga.github.io/portfolio","address":"calgary, canada"}}'),qt=JSON.parse('{"siteName":"グエン・ブライアン","nav":{"name":{"first":"・グエン","last":"ブライアン"},"home":"ホーム","about":"自己紹介","projects":"プロジェクト","experiences":"経験","skills":"スキル","resume":"履歴書"},"footer":{"copyright":"ガキ開発"},"home":{"name":"グエン・ブライアン","title":"私はいろいろなものをいじくり回して、結果的に何かを作り上げるのが好きです。","intro":"私はウェブ開発者で、ちょっとクールなデジタル体験の構築（そして時々デザイン）を専門としています。","viewProjects":"プロジェクトを見る"},"about":{"title":"自己紹介","bio":"こんにちは！私は好奇心旺盛で探求心のあるウェブ開発者です！コンピューターとソフトウェアの複雑な世界で約10年の経験を積み、最良の解決策は試行錯誤から生まれることが多いと学びました（まあ、たくさんの失敗からかもしれません）。\\n\\nプロジェクトに没頭し、うまく動作させる方法を見つけるまで—あるいは次の輝くアイデアに気を取られるまで—あらゆる角度から探求するのが大好きです（笑）。他の人の考えやアイデアを探るのが大好きで、それはまるでインスピレーションを求める宝探しのようです！問題に取り組む方法は無数にあり、私はそれらを一つずつ探求していきたいと思っています。\\n\\n正直なところ、まだ可能性の表面をなぞっているだけだと感じています。だからこそ、継続的な学習と成長に取り組んでいます。毎日が新しいことを試し、学び、そして時には何かを壊す（心配しないでください、ほとんどの場合は修復します）チャンスなのです。\\n\\nもし、この複雑だけどやりがいのあるコーディングの冒険に一緒に参加したいと思ったら、ぜひ繋がりましょう。どんな素晴らしく奇妙なものを一緒に作れるか、見てみましょう！","skills":"スキル"},"projects":{"title":"プロジェクト","github":"github","demo":"デモ"},"experiences":{"title":"経験"},"skills":{"title":"スキル"},"resume":{"title":"履歴書"},"businessCard":{"name":"グエン・ブライアン","title":"ウェブ開発者","phone":"+1 (587) 500-9308","website":"https://telga.github.io/portfolio","address":"calgary, canada","contact":"連絡"}}');const Jt=(0,r.hU)({legacy:!1,locale:"en",fallbackLocale:"en",messages:{en:Vt,jp:qt}});try{const e=(0,n.Ef)(le);e.use((0,a.Ey)()),e.use(St),e.use(Jt),e.mount("#app")}catch(_t){console.error("Error initializing app:",_t),console.error("Error stack:",_t.stack)}},3812:function(e,t,o){e.exports=o.p+"img/nordlogo.98c1837f.png"}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,r){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],r=e[c][2];for(var l=!0,A=0;A<n.length;A++)(!1&r||s>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[A])}))?n.splice(A--,1):(l=!1,r<s&&(s=r));if(l){e.splice(c--,1);var i=a();void 0!==i&&(t=i)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,a,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/portfolio/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,s=n[0],l=n[1],A=n[2],i=0;if(s.some((function(t){return 0!==e[t]}))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(A)var c=A(o)}for(t&&t(n);i<s.length;i++)r=s[i],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(82)}));n=o.O(n)})();
//# sourceMappingURL=app.93ec81f2ca4c0446.js.map