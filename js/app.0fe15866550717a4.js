(function(){"use strict";var e={9148:function(e,t,A){var o=A(5130),n=A(5234),r=A(5931),a=A(6768);const s={id:"app",class:"min-h-screen bg-bg-primary"},l={class:"container mx-auto px-4 py-8"};function i(e,t,A,o,n,r){const i=(0,a.g2)("Header"),c=(0,a.g2)("router-view"),u=(0,a.g2)("Footer");return(0,a.uX)(),(0,a.CE)("div",s,[(0,a.bF)(i),(0,a.Lk)("main",l,[(0,a.bF)(c)]),(0,a.bF)(u)])}var c=A(4232),u=A(144),g=A(1387);const m=(0,u.KR)("nord");function d(){const e=()=>{m.value="nord"===m.value?"solarized":"nord",t(m.value)},t=e=>{document.documentElement.classList.remove("theme-nord","theme-solarized"),document.documentElement.classList.add(`theme-${e}`),localStorage.setItem("theme",e)};if("undefined"!==typeof window){const e=localStorage.getItem("theme")||"nord";m.value=e,t(e)}return(0,a.wB)(m,(e=>{t(e)})),{currentTheme:m,toggleTheme:e}}function p(){const{locale:e}=(0,r.s9)(),t=["en","jp"],A=(0,u.KR)(e.value),o=()=>{const e="en"===A.value?"jp":"en";n(e)},n=o=>{t.includes(o)&&(e.value=o,A.value=o,localStorage.setItem("userLanguage",o))};return(0,a.sV)((()=>{const e=localStorage.getItem("userLanguage");e&&t.includes(e)&&n(e)})),(0,a.wB)(e,(e=>{t.includes(e)&&(A.value=e,localStorage.setItem("userLanguage",e))})),{currentLanguage:A,toggleLanguage:o}}const v={class:"bg-bg-secondary shadow"},f={class:"container mx-auto px-4 py-4 flex justify-between items-center"},h={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},b={key:0,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},w={key:1,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},k={class:"hidden lg:flex space-x-4"},x={class:"relative z-10"},B={class:"hidden lg:flex items-center space-x-4"},y={key:0,class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},C={key:1,class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},E={class:"font-medium"},Q={key:0,class:"lg:hidden bg-bg-secondary"},D={class:"px-2 pt-2 pb-3 space-y-1"},I={class:"px-2 py-3 border-t border-bg-primary flex justify-between items-center"},j={key:0,class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},P={key:1,class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},L={class:"font-medium"};var X={__name:"TheHeader",setup(e){const t=(0,g.lq)(),{currentTheme:A,toggleTheme:n}=d(),{currentLanguage:r,toggleLanguage:s}=p(),l=(0,u.KR)(!1),i=[{to:"/",label:"nav.home"},{to:"/AboutPage",label:"nav.about"},{to:"/ProjectsPage",label:"nav.projects"},{to:"/ExperiencesPage",label:"nav.experiences"},{to:"/SkillsPage",label:"nav.skills"},{to:"/ResumePage",label:"nav.resume"}],m=e=>t.path===e||"/"!==e&&t.path.startsWith(e);return(e,t)=>{const g=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("header",v,[(0,a.Lk)("nav",f,[(0,a.bF)(g,{to:"/",class:"text-xl font-bold text-accent"},{default:(0,a.k6)((()=>[(0,a.eW)((0,c.v_)(e.$t("siteName")),1)])),_:1}),(0,a.Lk)("button",{onClick:t[0]||(t[0]=e=>l.value=!l.value),class:"lg:hidden text-text-primary hover:text-accent"},[((0,a.uX)(),(0,a.CE)("svg",h,[l.value?((0,a.uX)(),(0,a.CE)("path",w)):((0,a.uX)(),(0,a.CE)("path",b))]))]),(0,a.Lk)("div",k,[((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)(i,(t=>(0,a.bF)(g,{key:t.to,to:t.to,class:(0,c.C4)(["text-text-primary hover:text-accent text-base transition-colors duration-200 relative group px-2 py-1",{"text-accent-secondary":e.$route.path===t.to}])},{default:(0,a.k6)((()=>[(0,a.Lk)("span",x,(0,c.v_)(e.$t(t.label)),1),(0,a.Lk)("span",{class:(0,c.C4)(["absolute inset-0 border-b-2 transition-colors duration-200",{"border-accent-hover":e.$route.path===t.to,"border-accent opacity-0 group-hover:opacity-100":e.$route.path!==t.to}])},null,2)])),_:2},1032,["to","class"]))),64))]),(0,a.Lk)("div",B,[(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>(0,u.R1)(n)&&(0,u.R1)(n)(...e)),class:(0,c.C4)(["theme-toggle-btn p-1 ring-2 hover:ring-accent-hover focus:ring-accent rounded-full transition-colors duration-300 focus:outline-none","nord"===(0,u.R1)(A)?"bg-solarized-base03 text-solarized-base1 border-solarized-base1":"bg-nord-polar-night-1 text-nord-snow-storm-1 border-nord-snow-storm-1","hover:border-accent active:border-accent-secondary"])},["nord"===(0,u.R1)(A)?((0,a.uX)(),(0,a.CE)("svg",y,t[6]||(t[6]=[(0,a.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)]))):((0,a.uX)(),(0,a.CE)("svg",C,t[7]||(t[7]=[(0,a.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.5 14.5L8 18l3.5-3.5L15 18l4.5-4.5M4 10l4-4 4 4 4-4 4 4"},null,-1)])))],2),(0,a.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>(0,u.R1)(s)&&(0,u.R1)(s)(...e)),class:"flex items-center text-text-primary hover:text-accent transition-colors duration-300 focus:outline-none ring-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-secondary hover:ring-accent-hover focus:ring-accent rounded-full px-3 py-1 bg-bg-primary"},[(0,a.Lk)("span",E,(0,c.v_)("en"===(0,u.R1)(r)?"日本語":"english"),1)])])]),(0,a.bF)(o.eB,{"enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform -translate-y-full opacity-0","enter-to-class":"transform translate-y-0 opacity-100","leave-active-class":"transition duration-200 ease-in","leave-from-class":"transform translate-y-0 opacity-100","leave-to-class":"transform -translate-y-full opacity-0"},{default:(0,a.k6)((()=>[l.value?((0,a.uX)(),(0,a.CE)("div",Q,[(0,a.Lk)("div",D,[((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)(i,(A=>(0,a.bF)(g,{key:A.to,to:A.to,class:(0,c.C4)(["block text-text-primary hover:text-accent text-base transition-colors duration-200 px-2 py-2",{"active-mobile-link":m(A.to)}]),onClick:t[3]||(t[3]=e=>l.value=!1)},{default:(0,a.k6)((()=>[(0,a.eW)((0,c.v_)(e.$t(A.label)),1)])),_:2},1032,["to","class"]))),64))]),(0,a.Lk)("div",I,[(0,a.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>(0,u.R1)(n)&&(0,u.R1)(n)(...e)),class:(0,c.C4)(["theme-toggle-btn p-1 ring-2 hover:ring-accent-hover focus:ring-accent rounded-full transition-colors duration-300 focus:outline-none","nord"===(0,u.R1)(A)?"bg-solarized-base03 text-solarized-base1 border-solarized-base1":"bg-nord-polar-night-1 text-nord-snow-storm-1 border-nord-snow-storm-1","hover:border-accent active:border-accent-secondary"])},["nord"===(0,u.R1)(A)?((0,a.uX)(),(0,a.CE)("svg",j,t[8]||(t[8]=[(0,a.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)]))):((0,a.uX)(),(0,a.CE)("svg",P,t[9]||(t[9]=[(0,a.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.5 14.5L8 18l3.5-3.5L15 18l4.5-4.5M4 10l4-4 4 4 4-4 4 4"},null,-1)])))],2),(0,a.Lk)("button",{onClick:t[5]||(t[5]=(...e)=>(0,u.R1)(s)&&(0,u.R1)(s)(...e)),class:"flex items-center text-text-primary hover:text-accent transition-colors duration-300 focus:outline-none ring-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-secondary hover:ring-accent-hover focus:ring-accent rounded-full px-3 py-1 bg-bg-primary"},[(0,a.Lk)("span",L,(0,c.v_)("en"===(0,u.R1)(r)?"日本語":"english"),1)])])])):(0,a.Q3)("",!0)])),_:1})])}}},O=A(1241);const T=(0,O.A)(X,[["__scopeId","data-v-155b32d0"]]);var F=T,H=A(7725),N=A(9602),Y=A(9124),U=A(5849);const M={class:"bg-bg-secondary py-4"},G={class:"container mx-auto px-4"},K={class:"flex justify-between items-center"},W={class:"text-text-secondary"},z={class:"flex space-x-4"},R=["href"];var S={__name:"TheFooter",setup(e){const t=(0,a.EW)((()=>(new Date).getFullYear())),A=[{name:"GitHub",url:"https://github.com/telga",icon:H.A},{name:"LinkedIn",url:"https://linkedin.com/in/bnguy23",icon:N.A},{name:"Twitter",url:"https://twitter.com/yourusername",icon:Y.A},{name:"Email",url:"mailto:briann2305@gmail.com",icon:U.A}];return(e,o)=>((0,a.uX)(),(0,a.CE)("footer",M,[(0,a.Lk)("div",G,[(0,a.Lk)("div",K,[(0,a.Lk)("p",W,"© "+(0,c.v_)(t.value)+" "+(0,c.v_)(e.$t("footer.copyright")),1),(0,a.Lk)("div",z,[((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)(A,(e=>(0,a.Lk)("a",{key:e.name,href:e.url,target:"_blank",rel:"noopener noreferrer",class:"text-text-secondary hover:text-accent transition-colors"},[((0,a.uX)(),(0,a.Wv)((0,a.$y)(e.icon),{class:"w-5 h-5"}))],8,R))),64))])])])]))}};const V=S;var q=V,J={name:"App",components:{Header:F,Footer:q},mounted(){this.setFavicon()},methods:{setFavicon(){const e=document.querySelector("link[rel*='icon']")||document.createElement("link");e.type="image/x-icon",e.rel="shortcut icon",e.href="/favicon.ico",document.getElementsByTagName("head")[0].appendChild(e)}}};const Z=(0,O.A)(J,[["render",i]]);var _=Z;const $={class:"min-h-screen bg-bg-primary text-text-primary flex flex-col justify-center items-center p-8"},ee={class:"max-w-3xl w-full"},te={class:"text-5xl font-bold mb-2 text-accent"},Ae={class:"text-3xl font-light mb-6 text-text-secondary"},oe={class:"text-xl mb-8"},ne={class:"flex space-x-4 mb-12"},re=["href"];var ae={__name:"HomePage",setup(e){const t=[{name:"GitHub",url:"https://github.com/telga",icon:H.A},{name:"LinkedIn",url:"https://linkedin.com/in/bnguy23",icon:N.A},{name:"Twitter",url:"https://twitter.com/yourusername",icon:Y.A},{name:"Email",url:"mailto:briann2305@gmail.com",icon:U.A}];return(e,A)=>{const o=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",$,[(0,a.Lk)("div",ee,[(0,a.Lk)("h1",te,(0,c.v_)(e.$t("home.name")),1),(0,a.Lk)("h2",Ae,(0,c.v_)(e.$t("home.title")),1),(0,a.Lk)("p",oe,(0,c.v_)(e.$t("home.intro")),1),(0,a.Lk)("div",ne,[((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)(t,(e=>(0,a.Lk)("a",{key:e.name,href:e.url,target:"_blank",rel:"noopener noreferrer",class:"text-text-secondary hover:text-accent transition-colors"},[((0,a.uX)(),(0,a.Wv)((0,a.$y)(e.icon),{class:"w-6 h-6"}))],8,re))),64))]),(0,a.bF)(o,{to:"/ProjectsPage",class:"bg-accent text-bg-primary px-6 py-3 rounded-full hover:bg-accent-hover transition-colors text-sm sm:text-base"},{default:(0,a.k6)((()=>[(0,a.eW)((0,c.v_)(e.$t("home.viewProjects")),1)])),_:1})])])}}};const se=ae;var le=se,ie="data:image/png;base64,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";const ce={class:"min-h-screen bg-bg-primary text-text-primary p-4 sm:p-8 lg:p-12"},ue={class:"max-w-4xl mx-auto"},ge={class:"text-4xl sm:text-5xl font-bold text-accent mb-8 sm:mb-12n"},me={class:"flex flex-col lg:flex-row gap-8 lg:gap-12"},de={class:"lg:w-1/3"},pe=["src","alt"],ve={class:"text-2xl font-bold text-accent mt-8 mb-4 text-center lg:text-left"},fe={class:"flex flex-wrap justify-center lg:justify-start gap-2"},he={class:"lg:w-2/3"},be={class:"space-y-6"};var we={__name:"AboutPage",setup(e){const{t:t}=(0,r.s9)(),A=(0,u.KR)(ie),o=(0,u.KR)(["Vue.js","React.js","Node.js","HTML","CSS","Python","Java","JavaScript","WSL","Linux (Arch, Ubuntu)"]),n=(0,a.EW)((()=>t("about.bio").split("\n\n")));return(e,t)=>((0,a.uX)(),(0,a.CE)("div",ce,[(0,a.Lk)("div",ue,[(0,a.Lk)("h1",ge,(0,c.v_)(e.$t("about.title")),1),(0,a.Lk)("div",me,[(0,a.Lk)("div",de,[(0,a.Lk)("img",{src:A.value,alt:e.$t("about.imageAlt"),class:"w-48 h-48 object-cover rounded-full mx-auto lg:mx-0 shadow-lg"},null,8,pe),(0,a.Lk)("h2",ve,(0,c.v_)(e.$t("about.skills")),1),(0,a.Lk)("ul",fe,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.value,((e,t)=>((0,a.uX)(),(0,a.CE)("li",{key:e,class:"bg-bg-secondary text-text-primary px-3 py-1 rounded-full text-sm shadow",style:(0,c.Tr)({animationDelay:100*t+"ms"})},(0,c.v_)(e),5)))),128))])]),(0,a.Lk)("div",he,[(0,a.Lk)("div",be,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.value,((e,t)=>((0,a.uX)(),(0,a.CE)("p",{key:t,class:"text-text-secondary leading-relaxed",style:(0,c.Tr)({animationDelay:200*t+"ms"})},(0,c.v_)(e),5)))),128))])])])])]))}};const ke=we;var xe=ke,Be=JSON.parse('[{"id":1,"title":{"en":"Smile of Compassion Projects Website","jp":"Smile of Compassion プロジェクトウェブサイト"},"description":{"en":"A website for the Smile of Compassion Projects, a non-profit organization that provides various services to underserved communities.","jp":"Smile of Compassion プロジェクトのウェブサイトです。非営利団体が、貧困した地域に対して様々なサービスを提供しています。"},"image":"/images/soc.png","github":"https://github.com/telga/Smile-of-Compassion-New-Site","demo":"https://telga.github.io/Smile-of-Compassion-New-Site/"}]');const ye=(0,n.nY)("portfolio",{state:()=>({projects:[],loading:!1,error:null}),actions:{async fetchProjects(){this.loading=!0,this.error=null;try{await new Promise((e=>setTimeout(e,500))),this.projects=Be}catch(e){console.error("Error fetching projects:",e),this.error=e.message}finally{this.loading=!1}}}}),Ce={class:"container mx-auto px-4 py-8"},Ee={class:"text-3xl font-bold mb-8 animate-fade-in",style:{color:"var(--accent)"}},Qe={key:0,class:"animate-pulse",style:{color:"var(--text-secondary)"}},De={key:1,style:{color:"var(--text-secondary)"}},Ie={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},je=["src","alt"],Pe={class:"p-6"},Le={class:"text-xl font-bold mb-2",style:{color:"var(--text-primary)"}},Xe={class:"mb-4",style:{color:"var(--text-secondary)"}},Oe={class:"flex justify-between"},Te=["href"],Fe=["href"];var He={__name:"ProjectsPage",setup(e){const t=ye(),{locale:A}=(0,r.s9)(),o=(0,u.KR)([]),n=()=>{o.value=t.projects.map((e=>({...e,title:e.title[A.value]||e.title.en,description:e.description[A.value]||e.description.en})))};return(0,a.wB)(A,n),(0,a.wB)((()=>t.projects),n,{immediate:!0}),(0,a.sV)((()=>{t.fetchProjects()})),(e,A)=>((0,a.uX)(),(0,a.CE)("div",Ce,[(0,a.Lk)("h1",Ee,(0,c.v_)(e.$t("projects.title")),1),(0,u.R1)(t).loading?((0,a.uX)(),(0,a.CE)("div",Qe,"Loading...")):(0,u.R1)(t).error?((0,a.uX)(),(0,a.CE)("div",De,(0,c.v_)((0,u.R1)(t).error),1)):(0,a.Q3)("",!0),(0,a.Lk)("div",Ie,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.value,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"rounded-lg overflow-hidden shadow-lg animate-fade-in-up",style:(0,c.Tr)({animationDelay:100*t+"ms",backgroundColor:"var(--bg-secondary)"})},[(0,a.Lk)("img",{src:e.image,alt:e.title,class:"w-full h-48 object-cover"},null,8,je),(0,a.Lk)("div",Pe,[(0,a.Lk)("h2",Le,(0,c.v_)(e.title),1),(0,a.Lk)("p",Xe,(0,c.v_)(e.description),1),(0,a.Lk)("div",Oe,[(0,a.Lk)("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",class:"text-accent"}," GitHub ",8,Te),(0,a.Lk)("a",{href:e.demo,target:"_blank",rel:"noopener noreferrer",class:"text-accent"}," Demo ",8,Fe)])])],4)))),128))])]))}};const Ne=(0,O.A)(He,[["__scopeId","data-v-7fab8f2a"]]);var Ye=Ne;const Ue={class:"min-h-screen bg-bg-primary text-text-primary p-8"},Me={class:"text-4xl font-bold mb-8 text-accent"};var Ge={__name:"ExperiencesPage",setup(e){return(e,t)=>((0,a.uX)(),(0,a.CE)("div",Ue,[(0,a.Lk)("h1",Me,(0,c.v_)(e.$t("experiences.title")),1)]))}};const Ke=Ge;var We=Ke;const ze={class:"min-h-screen bg-bg-primary text-text-primary p-8"},Re={class:"text-4xl font-bold mb-8 text-accent"};var Se={__name:"SkillsPage",setup(e){return(e,t)=>((0,a.uX)(),(0,a.CE)("div",ze,[(0,a.Lk)("h1",Re,(0,c.v_)(e.$t("skills.title")),1)]))}};const Ve=Se;var qe=Ve;const Je={class:"min-h-screen bg-bg-primary text-text-primary p-8"},Ze={class:"text-4xl font-bold mb-8 text-accent"};var _e={__name:"ResumePage",setup(e){return(e,t)=>((0,a.uX)(),(0,a.CE)("div",Je,[(0,a.Lk)("h1",Ze,(0,c.v_)(e.$t("resume.title")),1)]))}};const $e=_e;var et=$e;const tt=[{path:"/",component:le},{path:"/AboutPage",component:xe},{path:"/ProjectsPage",component:Ye},{path:"/ExperiencesPage",component:We},{path:"/SkillsPage",component:qe},{path:"/ResumePage",component:et}],At=(0,g.aE)({history:(0,g.LA)(),routes:tt});var ot=At,nt=JSON.parse('{"siteName":"brian nguyen","nav":{"home":"home","about":"about","projects":"projects","experiences":"experiences","skills":"skills","resume":"resume"},"footer":{"copyright":"Gaki Development"},"home":{"name":"brian nguyen","title":"i like to mess around with stuff and end up actually making things.","intro":"i\'m a web developer specializing in building (and occasionally designing) kinda cool digital experiences.","viewProjects":"check out my projects"},"about":{"title":"About Me","imageAlt":"Profile picture","bio":"Hey there! I\'m a web developer on a mission to make the internet a more delightful place—one line of code at a time!\\n\\nI\'m a web developer with a knack for tinkering and a love for exploration! With nearly a decade of experience in the confusing world of computers and software, I\'ve learned that the best solutions often come from a bit of trial and error (okay, maybe a lot of error).\\n\\nI thrive on diving into projects, poking at every corner until I figure out how to make things work—or at least until I get distracted by the next shiny idea haha. I absolutely love exploring other people\'s thoughts and ideas; it\'s like a treasure hunt for inspiration! There are countless ways to tackle a problem, and I\'m here to explore them all, one problem at a time.\\n\\nTo be honest, I still feel like I\'m just scratching the surface of what\'s possible. That\'s why I\'m committed to continuous learning and expansion. Every day is a new chance to mess around, learn, and maybe break a few things (don\'t worry, I always fix them...almost always).\\n\\nSo, if you\'re ready to join me on this complex but satisfying coding adventure, let\'s connect and see what wonderfully weird things we can build together!","skills":"Skills"},"projects":{"title":"projects"},"experiences":{"title":"experiences"},"skills":{"title":"skills"},"resume":{"title":"resume"}}'),rt=JSON.parse('{"siteName":"グエン・ブライアン","nav":{"home":"ホーム","about":"私について","projects":"プロジェクト","experiences":"経験","skills":"スキル","resume":"履歴書"},"footer":{"copyright":"ガキ開発"},"home":{"name":"グエン・ブライアン","title":"僕はいろいろなものをいじくり回して、結果的に何かを作り上げるのが好きです。","intro":"僕はウェブ開発者で、ちょっとクールなデジタル体験の構築（そして時々デザイン）を専門としています。","viewProjects":"プロジェクトを見る"},"about":{"title":"僕について","bio":"こんにちは！私はウェブ開発者で、インターネットをより楽しい場所にするミッションを持っています—一行のコードずつ！\\n\\n私は好奇心旺盛で探求心のあるウェブ開発者です！コンピューターとソフトウェアの複雑な世界で約10年の経験を積み、最良の解決策は試行錯誤から生まれることが多いと学びました（まあ、たくさんの失敗からかもしれません）。\\n\\nプロジェクトに没頭し、うまく動作させる方法を見つけるまで—あるいは次の輝くアイデアに気を取られるまで—あらゆる角度から探求するのが大好きです（笑）。他の人の考えやアイデアを探るのが大好きで、それはまるでインスピレーションを求める宝探しのようです！問題に取り組む方法は無数にあり、私はそれらを一つずつ探求していきたいと思っています。\\n\\n正直なところ、まだ可能性の表面をなぞっているだけだと感じています。だからこそ、継続的な学習と成長に取り組んでいます。毎日が新しいことを試し、学び、そして時には何かを壊す（心配しないでください、ほとんどの場合は修復します）チャンスなのです。\\n\\nもし、この複雑だけどやりがいのあるコーディングの冒険に一緒に参加したいと思ったら、ぜひ繋がりましょう。どんな素晴らしく奇妙なものを一緒に作れるか、見てみましょう！","skills":"スキル"},"projects":{"title":"プロジェクト"},"experiences":{"title":"経験"},"skills":{"title":"スキル"},"resume":{"title":"履歴書"}}');const at=(0,r.hU)({legacy:!1,locale:"en",fallbackLocale:"en",messages:{en:nt,jp:rt}}),st=(0,o.Ef)(_);st.use((0,n.Ey)()),st.use(ot),st.use(at),st.mount("#app")}},t={};function A(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,A),r.exports}A.m=e,function(){var e=[];A.O=function(t,o,n,r){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],n=e[c][1],r=e[c][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(A.O).every((function(e){return A.O[e](o[l])}))?o.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(c--,1);var i=n();void 0!==i&&(t=i)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,n,r]}}(),function(){A.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return A.d(t,{a:t}),t}}(),function(){A.d=function(e,t){for(var o in t)A.o(t,o)&&!A.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){A.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};A.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,r,a=o[0],s=o[1],l=o[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(n in s)A.o(s,n)&&(A.m[n]=s[n]);if(l)var c=l(A)}for(t&&t(o);i<a.length;i++)r=a[i],A.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return A.O(c)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=A.O(void 0,[504],(function(){return A(9148)}));o=A.O(o)})();
//# sourceMappingURL=app.0fe15866550717a4.js.map