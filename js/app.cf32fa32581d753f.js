(function(){"use strict";var e={7059:function(e,t,A){var o=A(5130),n=A(5234),a=A(5931),r=A(6768);const s={id:"app",class:"min-h-screen bg-bg-primary"},l={class:"container mx-auto px-4 py-8"};function i(e,t,A,o,n,a){const i=(0,r.g2)("Header"),c=(0,r.g2)("router-view"),u=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",s,[(0,r.bF)(i),(0,r.Lk)("main",l,[(0,r.bF)(c)]),(0,r.bF)(u)])}var c=A(144),u=A(4232),g=A(1387);const m=(0,c.KR)("nord");function d(){const e=()=>{m.value="nord"===m.value?"solarized":"nord",t(m.value)},t=e=>{document.documentElement.classList.remove("theme-nord","theme-solarized"),document.documentElement.classList.add(`theme-${e}`),localStorage.setItem("theme",e)};if("undefined"!==typeof window){const e=localStorage.getItem("theme")||"nord";m.value=e,t(e)}return(0,r.wB)(m,(e=>{t(e)})),{currentTheme:m,toggleTheme:e}}function p(){const{locale:e}=(0,a.s9)(),t=["en","jp"],A=(0,c.KR)(e.value),o=()=>{const e="en"===A.value?"jp":"en";n(e)},n=o=>{t.includes(o)&&(e.value=o,A.value=o,localStorage.setItem("userLanguage",o))};return(0,r.sV)((()=>{const e=localStorage.getItem("userLanguage");e&&t.includes(e)&&n(e)})),(0,r.wB)(e,(e=>{t.includes(e)&&(A.value=e,localStorage.setItem("userLanguage",e))})),{currentLanguage:A,toggleLanguage:o}}const f=(0,c.KR)(!1);function v(){f.value=!0}function h(){f.value=!1}const b={key:0,class:"loading-screen"};var w={__name:"LoadingScreen",setup(e){return(e,t)=>(0,c.R1)(f)?((0,r.uX)(),(0,r.CE)("div",b,t[0]||(t[0]=[(0,r.Lk)("div",{class:"loader"},null,-1)]))):(0,r.Q3)("",!0)}},k=A(1241);const B=(0,k.A)(w,[["__scopeId","data-v-6cf7027f"]]);var x=B,y=A(3812);const C={class:"bg-bg-secondary shadow"},E={class:"container mx-auto px-4 py-4 flex justify-between items-center"},Q={class:"flex items-center space-x-2"},D=["src"],I={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},L={key:0,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},j={key:1,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},P={class:"hidden lg:flex space-x-4"},X={class:"relative z-10"},O={class:"hidden lg:flex items-center space-x-4"},T={key:0,class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},F={key:1,class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},H={class:"font-medium"},N={key:0,class:"lg:hidden bg-bg-secondary"},Y={class:"px-2 pt-2 pb-3 space-y-1"},U={class:"px-2 py-3 border-t border-bg-primary flex justify-between items-center"},M={key:0,class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},K={key:1,class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},G={class:"font-medium"};var z={__name:"TheHeader",setup(e){const t=(0,g.lq)(),{currentTheme:A,toggleTheme:n}=d(),{currentLanguage:a,toggleLanguage:s}=p(),l=(0,c.KR)(!1),i=[{to:"/",label:"nav.home"},{to:"/AboutPage",label:"nav.about"},{to:"/ProjectsPage",label:"nav.projects"}],m=e=>t.path===e||"/"!==e&&t.path.startsWith(e),f=()=>{l.value=!1},b=()=>{f(),v(),setTimeout((()=>{s(),setTimeout((()=>{h(),window.location.reload()}),300)}),200)};(0,r.wB)((()=>t.path),f);const w=e=>{l.value&&!e.target.closest("header")&&f()};return(0,r.sV)((()=>{document.addEventListener("click",w)})),(0,r.hi)((()=>{document.removeEventListener("click",w)})),(e,t)=>{const s=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(x),(0,r.Lk)("header",C,[(0,r.Lk)("nav",E,[(0,r.Lk)("div",Q,[(0,r.bF)(s,{to:"/",class:"flex items-center"},{default:(0,r.k6)((()=>[(0,r.Lk)("img",{src:(0,c.R1)(y),alt:"Nord Logo",class:"h-8 w-auto max-w-[150px]"},null,8,D)])),_:1})]),(0,r.Lk)("button",{onClick:t[0]||(t[0]=(0,o.D$)((e=>l.value=!l.value),["stop"])),class:"lg:hidden text-text-primary hover:text-accent p-2"},[((0,r.uX)(),(0,r.CE)("svg",I,[l.value?((0,r.uX)(),(0,r.CE)("path",j)):((0,r.uX)(),(0,r.CE)("path",L))]))]),(0,r.Lk)("div",P,[((0,r.uX)(),(0,r.CE)(r.FK,null,(0,r.pI)(i,(t=>(0,r.bF)(s,{key:t.to,to:t.to,class:(0,u.C4)(["text-text-primary hover:text-accent text-base transition-colors duration-200 relative group px-2 py-1",{"text-accent-secondary":e.$route.path===t.to}])},{default:(0,r.k6)((()=>[(0,r.Lk)("span",X,(0,u.v_)(e.$t(t.label)),1),(0,r.Lk)("span",{class:(0,u.C4)(["absolute inset-0 border-b-2 transition-colors duration-200",{"border-accent-hover":e.$route.path===t.to,"border-accent opacity-0 group-hover:opacity-100":e.$route.path!==t.to}])},null,2)])),_:2},1032,["to","class"]))),64))]),(0,r.Lk)("div",O,[(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>(0,c.R1)(n)&&(0,c.R1)(n)(...e)),class:(0,u.C4)(["theme-toggle-btn p-1 ring-2 hover:ring-accent-hover focus:ring-accent rounded-full transition-colors duration-300 focus:outline-none","nord"===(0,c.R1)(A)?"bg-solarized-base03 text-solarized-base1 border-solarized-base1":"bg-nord-polar-night-1 text-nord-snow-storm-1 border-nord-snow-storm-1","hover:border-accent active:border-accent-secondary"])},["nord"===(0,c.R1)(A)?((0,r.uX)(),(0,r.CE)("svg",T,t[3]||(t[3]=[(0,r.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)]))):((0,r.uX)(),(0,r.CE)("svg",F,t[4]||(t[4]=[(0,r.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.5 14.5L8 18l3.5-3.5L15 18l4.5-4.5M4 10l4-4 4 4 4-4 4 4"},null,-1)])))],2),(0,r.Lk)("button",{onClick:b,class:"flex items-center text-text-primary hover:text-accent transition-colors duration-300 focus:outline-none ring-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-secondary hover:ring-accent-hover focus:ring-accent rounded-full px-3 py-1 bg-bg-primary"},[(0,r.Lk)("span",H,(0,u.v_)("en"===(0,c.R1)(a)?"日本語":"english"),1)])])]),(0,r.bF)(o.eB,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0 -translate-y-full","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition-all duration-300 ease-in","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 -translate-y-full"},{default:(0,r.k6)((()=>[l.value?((0,r.uX)(),(0,r.CE)("div",N,[(0,r.Lk)("div",Y,[((0,r.uX)(),(0,r.CE)(r.FK,null,(0,r.pI)(i,(t=>(0,r.bF)(s,{key:t.to,to:t.to,class:(0,u.C4)(["block text-text-primary hover:text-accent text-base transition-colors duration-200 px-2 py-2",{"active-mobile-link":m(t.to)}]),onClick:f},{default:(0,r.k6)((()=>[(0,r.eW)((0,u.v_)(e.$t(t.label)),1)])),_:2},1032,["to","class"]))),64))]),(0,r.Lk)("div",U,[(0,r.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>(0,c.R1)(n)&&(0,c.R1)(n)(...e)),class:(0,u.C4)(["theme-toggle-btn p-1 ring-2 hover:ring-accent-hover focus:ring-accent rounded-full transition-colors duration-300 focus:outline-none","nord"===(0,c.R1)(A)?"bg-solarized-base03 text-solarized-base1 border-solarized-base1":"bg-nord-polar-night-1 text-nord-snow-storm-1 border-nord-snow-storm-1","hover:border-accent active:border-accent-secondary"])},["nord"===(0,c.R1)(A)?((0,r.uX)(),(0,r.CE)("svg",M,t[5]||(t[5]=[(0,r.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)]))):((0,r.uX)(),(0,r.CE)("svg",K,t[6]||(t[6]=[(0,r.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.5 14.5L8 18l3.5-3.5L15 18l4.5-4.5M4 10l4-4 4 4 4-4 4 4"},null,-1)])))],2),(0,r.Lk)("button",{onClick:b,class:"flex items-center text-text-primary hover:text-accent transition-colors duration-300 focus:outline-none ring-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-secondary hover:ring-accent-hover focus:ring-accent rounded-full px-3 py-1 bg-bg-primary"},[(0,r.Lk)("span",G,(0,u.v_)("en"===(0,c.R1)(a)?"日本語":"english"),1)])])])):(0,r.Q3)("",!0)])),_:1})])],64)}}};const W=(0,k.A)(z,[["__scopeId","data-v-2cda5bc2"]]);var R=W,S=A(7725),V=A(9602),q=A(9124),J=A(5849);const Z={class:"bg-bg-secondary py-4"},_={class:"container mx-auto px-4"},$={class:"flex justify-between items-center"},ee={class:"text-text-secondary"},te={class:"flex space-x-4"},Ae=["href"];var oe={__name:"TheFooter",setup(e){const t=(0,r.EW)((()=>(new Date).getFullYear())),A=[{name:"GitHub",url:"https://github.com/telga",icon:S.A},{name:"LinkedIn",url:"https://linkedin.com/in/bnguy23",icon:V.A},{name:"Twitter",url:"https://twitter.com/yourusername",icon:q.A},{name:"Email",url:"mailto:briann2305@gmail.com",icon:J.A}];return(e,o)=>((0,r.uX)(),(0,r.CE)("footer",Z,[(0,r.Lk)("div",_,[(0,r.Lk)("div",$,[(0,r.Lk)("p",ee,"© "+(0,u.v_)(t.value)+" "+(0,u.v_)(e.$t("footer.copyright")),1),(0,r.Lk)("div",te,[((0,r.uX)(),(0,r.CE)(r.FK,null,(0,r.pI)(A,(e=>(0,r.Lk)("a",{key:e.name,href:e.url,target:"_blank",rel:"noopener noreferrer",class:"text-text-secondary hover:text-accent transition-colors"},[((0,r.uX)(),(0,r.Wv)((0,r.$y)(e.icon),{class:"w-5 h-5"}))],8,Ae))),64))])])])]))}};const ne=oe;var ae=ne,re={name:"App",components:{Header:R,Footer:ae},mounted(){this.setFavicon()},methods:{setFavicon(){const e=document.querySelector("link[rel*='icon']")||document.createElement("link");e.type="image/png",e.rel="shortcut icon",e.href=A(3812),document.getElementsByTagName("head")[0].appendChild(e)}}};const se=(0,k.A)(re,[["render",i]]);var le=se;const ie={class:"min-h-screen bg-bg-primary text-text-primary flex flex-col justify-center items-center p-8"},ce={class:"max-w-3xl w-full"},ue={class:"text-5xl font-bold mb-2 text-accent animate-slide-in-right"},ge={class:"text-xl mb-8 animate-slide-in-left"},me={class:"flex space-x-4 mb-12"},de=["href"];var pe={__name:"HomePage",setup(e){const t=[{name:"GitHub",url:"https://github.com/telga",icon:S.A},{name:"LinkedIn",url:"https://linkedin.com/in/bnguy23",icon:V.A},{name:"Twitter",url:"https://twitter.com/yourusername",icon:q.A},{name:"Email",url:"mailto:briann2305@gmail.com",icon:J.A}];return(e,A)=>((0,r.uX)(),(0,r.CE)("div",ie,[(0,r.Lk)("div",ce,[(0,r.Lk)("h1",ue,(0,u.v_)(e.$t("home.name")),1),(0,r.Lk)("p",ge,(0,u.v_)(e.$t("home.intro")),1),(0,r.Lk)("div",me,[((0,r.uX)(),(0,r.CE)(r.FK,null,(0,r.pI)(t,((e,t)=>(0,r.Lk)("a",{key:e.name,href:e.url,target:"_blank",rel:"noopener noreferrer",class:"text-text-secondary hover:text-accent transition-colors hover:scale-110 transform duration-200 animate-slide-in-bottom",style:(0,u.Tr)({animationDelay:100*t+"ms"})},[((0,r.uX)(),(0,r.Wv)((0,r.$y)(e.icon),{class:"w-6 h-6"}))],12,de))),64))])])]))}};const fe=(0,k.A)(pe,[["__scopeId","data-v-481261ec"]]);var ve=fe,he="data:image/png;base64,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";const be={class:"min-h-screen bg-bg-primary text-text-primary p-4 sm:p-8 lg:p-12"},we={class:"max-w-4xl mx-auto"},ke={class:"text-4xl sm:text-5xl font-bold text-accent mb-8 sm:mb-12 animate-fade-in-up text-center lg:text-left"},Be={class:"flex flex-col lg:flex-row gap-8 lg:gap-12"},xe={class:"lg:w-1/3 animate-fade-in-up",style:{"animation-delay":"100ms"}},ye=["src","alt"],Ce={class:"text-2xl font-bold text-accent mt-8 mb-4 text-center lg:text-left animate-fade-in-up",style:{"animation-delay":"200ms"}},Ee={class:"flex flex-wrap justify-center lg:justify-start gap-2"},Qe={class:"lg:w-2/3"},De={class:"space-y-6"};var Ie={__name:"AboutPage",setup(e){const{t:t}=(0,a.s9)(),A=(0,c.KR)(he),o=(0,c.KR)(["Vue.js","React.js","Node.js","HTML","CSS","Python","Java","JavaScript","WSL","Linux (Arch, Ubuntu)"]),n=(0,r.EW)((()=>t("about.bio").split("\n\n")));return(e,t)=>((0,r.uX)(),(0,r.CE)("div",be,[(0,r.Lk)("div",we,[(0,r.Lk)("h1",ke,(0,u.v_)(e.$t("about.title")),1),(0,r.Lk)("div",Be,[(0,r.Lk)("div",xe,[(0,r.Lk)("img",{src:A.value,alt:e.$t("about.imageAlt"),class:"w-48 h-48 object-cover rounded-full mx-auto lg:mx-0 shadow-lg"},null,8,ye),(0,r.Lk)("h2",Ce,(0,u.v_)(e.$t("about.skills")),1),(0,r.Lk)("ul",Ee,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.value,((e,t)=>((0,r.uX)(),(0,r.CE)("li",{key:e,class:"bg-bg-secondary text-text-primary px-3 py-1 rounded-full text-sm shadow animate-fade-in-up",style:(0,u.Tr)({animationDelay:300+25*t+"ms"})},(0,u.v_)(e),5)))),128))])]),(0,r.Lk)("div",Qe,[(0,r.Lk)("div",De,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.value,((e,t)=>((0,r.uX)(),(0,r.CE)("p",{key:t,class:"text-text-secondary leading-relaxed animate-fade-in-up",style:(0,u.Tr)({animationDelay:200+30*t+"ms"})},(0,u.v_)(e),5)))),128))])])])])]))}};const Le=(0,k.A)(Ie,[["__scopeId","data-v-4882ab01"]]);var je=Le,Pe=JSON.parse('[{"id":1,"title":{"en":"Smile of Compassion Projects Website","jp":"Smile of Compassion プロジェクトウェブサイト"},"description":{"en":"A website for the Smile of Compassion Projects, a non-profit organization that provides various services to underserved communities.","jp":"Smile of Compassion プロジェクトのウェブサイトです。非営利団体が、貧困した地域に対して様々なサービスを提供しています。"},"image":"soc.png","github":"https://github.com/telga/Smile-of-Compassion-New-Site","demo":"https://telga.github.io/Smile-of-Compassion-New-Site/"}]');const Xe=(0,n.nY)("portfolio",{state:()=>({projects:[],loading:!1,error:null}),actions:{async fetchProjects(){this.loading=!0,this.error=null;try{await new Promise((e=>setTimeout(e,500))),this.projects=Pe}catch(e){console.error("Error fetching projects:",e),this.error=e.message}finally{this.loading=!1}}}}),Oe={class:"projects-page container mx-auto px-4 py-8"},Te={class:"text-3xl font-bold mb-8 animate-fade-in",style:{color:"var(--accent)"}},Fe={key:0,class:"animate-pulse",style:{color:"var(--text-secondary)"}},He={key:1,style:{color:"var(--text-secondary)"}},Ne={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},Ye=["src","alt"],Ue={class:"p-6"},Me={class:"text-xl font-bold mb-2",style:{color:"var(--text-primary)"}},Ke={class:"mb-4",style:{color:"var(--text-secondary)"}},Ge={class:"flex justify-between"},ze=["href"],We=["href"];var Re={__name:"ProjectsPage",setup(e){const t=Xe(),{locale:A}=(0,a.s9)(),o=(0,c.KR)([]),n=()=>{o.value=t.projects.map((e=>({...e,title:e.title[A.value]||e.title.en,description:e.description[A.value]||e.description.en,image:`/portfolio/images/${e.image}`})))};return(0,r.wB)(A,n),(0,r.wB)((()=>t.projects),n,{immediate:!0}),(0,r.sV)((()=>{t.fetchProjects()})),(e,A)=>((0,r.uX)(),(0,r.CE)("div",Oe,[(0,r.Lk)("h1",Te,(0,u.v_)(e.$t("projects.title")),1),(0,c.R1)(t).loading?((0,r.uX)(),(0,r.CE)("div",Fe)):(0,c.R1)(t).error?((0,r.uX)(),(0,r.CE)("div",He,(0,u.v_)((0,c.R1)(t).error),1)):(0,r.Q3)("",!0),(0,r.Lk)("div",Ne,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.value,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{key:e.id,class:"rounded-lg overflow-hidden shadow-lg animate-fade-in-up",style:(0,u.Tr)({animationDelay:100*t+"ms",backgroundColor:"var(--bg-secondary)"})},[(0,r.Lk)("img",{src:e.image,alt:e.title,class:"w-full h-48 object-cover"},null,8,Ye),(0,r.Lk)("div",Ue,[(0,r.Lk)("h2",Me,(0,u.v_)(e.title),1),(0,r.Lk)("p",Ke,(0,u.v_)(e.description),1),(0,r.Lk)("div",Ge,[(0,r.Lk)("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",class:"text-accent"}," GitHub ",8,ze),(0,r.Lk)("a",{href:e.demo,target:"_blank",rel:"noopener noreferrer",class:"text-accent"}," Demo ",8,We)])])],4)))),128))])]))}};const Se=(0,k.A)(Re,[["__scopeId","data-v-ac850854"]]);var Ve=Se;const qe={class:"min-h-screen bg-bg-primary text-text-primary p-8"},Je={class:"text-4xl font-bold mb-8 text-accent"};var Ze={__name:"ExperiencesPage",setup(e){return(e,t)=>((0,r.uX)(),(0,r.CE)("div",qe,[(0,r.Lk)("h1",Je,(0,u.v_)(e.$t("experiences.title")),1)]))}};const _e=Ze;var $e=_e;const et={class:"min-h-screen bg-bg-primary text-text-primary p-8"},tt={class:"text-4xl font-bold mb-8 text-accent"};var At={__name:"SkillsPage",setup(e){return(e,t)=>((0,r.uX)(),(0,r.CE)("div",et,[(0,r.Lk)("h1",tt,(0,u.v_)(e.$t("skills.title")),1)]))}};const ot=At;var nt=ot;const at={class:"min-h-screen bg-bg-primary text-text-primary p-8"},rt={class:"text-4xl font-bold mb-8 text-accent"};var st={__name:"ResumePage",setup(e){return(e,t)=>((0,r.uX)(),(0,r.CE)("div",at,[(0,r.Lk)("h1",rt,(0,u.v_)(e.$t("resume.title")),1)]))}};const lt=st;var it=lt;const ct=[{path:"/",component:ve},{path:"/AboutPage",component:je},{path:"/ProjectsPage",component:Ve},{path:"/ExperiencesPage",component:$e},{path:"/SkillsPage",component:nt},{path:"/ResumePage",component:it}],ut=(0,g.aE)({history:(0,g.LA)("/portfolio/"),routes:ct});var gt=ut,mt=JSON.parse('{"siteName":"brian nguyen","nav":{"name":{"first":"brian・","last":"nguyen"},"home":"home","about":"about","projects":"projects","experiences":"experiences","skills":"skills","resume":"resume"},"footer":{"copyright":"gaki development"},"home":{"name":"brian nguyen","intro":"i\'m a web developer specializing in building (and occasionally designing) kinda cool things."},"about":{"title":"About Me","imageAlt":"Profile picture","bio":"Hey there! I\'m a web developer on a mission to make the internet a more delightful place—one line of code at a time!\\n\\nI\'m a web developer with a knack for tinkering and a love for exploration! With nearly a decade of experience in the confusing world of computers and software, I\'ve learned that the best solutions often come from a bit of trial and error (okay, maybe a lot of error).\\n\\nI thrive on diving into projects, poking at every corner until I figure out how to make things work—or at least until I get distracted by the next shiny idea haha. I absolutely love exploring other people\'s thoughts and ideas; it\'s like a treasure hunt for inspiration! There are countless ways to tackle a problem, and I\'m here to explore them all, one problem at a time.\\n\\nTo be honest, I still feel like I\'m just scratching the surface of what\'s possible. That\'s why I\'m committed to continuous learning and expansion. Every day is a new chance to mess around, learn, and maybe break a few things (don\'t worry, I always fix them...almost always).\\n\\nSo, if you\'re ready to join me on this complex but satisfying coding adventure, let\'s connect and see what wonderfully weird things we can build together!","skills":"Skills"},"projects":{"title":"projects"},"experiences":{"title":"experiences"},"skills":{"title":"skills"},"resume":{"title":"resume"}}'),dt=JSON.parse('{"siteName":"グエン・ブライアン","nav":{"name":{"first":"・グエン","last":"ブライアン"},"home":"ホーム","about":"私について","projects":"プロジェクト","experiences":"経験","skills":"スキル","resume":"履歴書"},"footer":{"copyright":"ガキ開発"},"home":{"name":"グエン・ブライアン","title":"僕はいろいろなものをいじくり回して、結果的に何かを作り上げるのが好きです。","intro":"僕はウェブ開発者で、ちょっとクールなデジタル体験の構築（そして時々デザイン）を専門としています。","viewProjects":"プロジェクトを見る"},"about":{"title":"僕について","bio":"こんにちは！私はウェブ開発者で、インターネットをより楽しい場所にするミッションを持っています—一行のコードずつ！\\n\\n私は好奇心旺盛で探求心のあるウェブ開発者です！コンピューターとソフトウェアの複雑な世界で約10年の経験を積み、最良の解決策は試行錯誤から生まれることが多いと学びました（まあ、たくさんの失敗からかもしれません）。\\n\\nプロジェクトに没頭し、うまく動作させる方法を見つけるまで—あるいは次の輝くアイデアに気を取られるまで—あらゆる角度から探求するのが大好きです（笑）。他の人の考えやアイデアを探るのが大好きで、それはまるでインスピレーションを求める宝探しのようです！問題に取り組む方法は無数にあり、私はそれらを一つずつ探求していきたいと思っています。\\n\\n正直なところ、まだ可能性の表面をなぞっているだけだと感じています。だからこそ、継続的な学習と成長に取り組んでいます。毎日が新しいことを試し、学び、そして時には何かを壊す（心配しないでください、ほとんどの場合は修復します）チャンスなのです。\\n\\nもし、この複雑だけどやりがいのあるコーディングの冒険に一緒に参加したいと思ったら、ぜひ繋がりましょう。どんな素晴らしく奇妙なものを一緒に作れるか、見てみましょう！","skills":"スキル"},"projects":{"title":"プロジェクト"},"experiences":{"title":"経験"},"skills":{"title":"スキル"},"resume":{"title":"履歴書"}}');const pt=(0,a.hU)({legacy:!1,locale:"en",fallbackLocale:"en",messages:{en:mt,jp:dt}});try{const e=(0,o.Ef)(le);e.use((0,n.Ey)()),e.use(gt),e.use(pt),e.mount("#app")}catch(ft){console.error("Error initializing app:",ft),console.error("Error stack:",ft.stack)}},3812:function(e,t,A){e.exports=A.p+"img/nordlogo.98c1837f.png"}},t={};function A(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,A),a.exports}A.m=e,function(){var e=[];A.O=function(t,o,n,a){if(!o){var r=1/0;for(c=0;c<e.length;c++){o=e[c][0],n=e[c][1],a=e[c][2];for(var s=!0,l=0;l<o.length;l++)(!1&a||r>=a)&&Object.keys(A.O).every((function(e){return A.O[e](o[l])}))?o.splice(l--,1):(s=!1,a<r&&(r=a));if(s){e.splice(c--,1);var i=n();void 0!==i&&(t=i)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}}(),function(){A.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return A.d(t,{a:t}),t}}(),function(){A.d=function(e,t){for(var o in t)A.o(t,o)&&!A.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){A.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){A.p="/portfolio/"}(),function(){var e={524:0};A.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,a,r=o[0],s=o[1],l=o[2],i=0;if(r.some((function(t){return 0!==e[t]}))){for(n in s)A.o(s,n)&&(A.m[n]=s[n]);if(l)var c=l(A)}for(t&&t(o);i<r.length;i++)a=r[i],A.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return A.O(c)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=A.O(void 0,[504],(function(){return A(7059)}));o=A.O(o)})();
//# sourceMappingURL=app.cf32fa32581d753f.js.map