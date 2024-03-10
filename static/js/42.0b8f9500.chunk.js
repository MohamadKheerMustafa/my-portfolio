"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[42],{448:(e,t,a)=>{a.d(t,{A:()=>m});var r=a(43),i=a(772),s=a(139),l=a(64),n=a.n(l),d=(a(364),a(579));const o=e=>{let{title:t,category:a,image:r,link:i,id:l,avaliable:o,des:c}=e;return(0,d.jsx)(s.P.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:(e=>1==e?(0,d.jsx)("a",{href:i,target:"__blank",children:(0,d.jsx)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:(0,d.jsxs)("div",{className:"text-center px-4 py-6",children:[(0,d.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),(0,d.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light break-all",children:a}),(0,d.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:c})]})})},l):(0,d.jsx)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",onClick:()=>n().fire({icon:"error",title:"Repository isn't avaliable",text:"company privacy reasons",timer:2e3,background:"dark"===localStorage.getItem("theme")?"#0D2438":"white",color:"dark"===localStorage.getItem("theme")?"white":"black"}),children:(0,d.jsxs)("div",{className:"text-center px-4 py-6",children:[(0,d.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),(0,d.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:a}),(0,d.jsx)("br",{}),(0,d.jsx)("span",{className:"text-sm text-ternary-dark dark:text-ternary-light",children:c})]})}))(o)})};var c=a(175);const m=()=>{const{projects:e,searchProject:t,setSearchProject:a,searchProjectsByTitle:s,selectProject:l,setSelectProject:n}=(0,r.useContext)(c.Y);return(0,d.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[(0,d.jsx)("div",{className:"text-center",children:(0,d.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),(0,d.jsxs)("div",{className:"mt-10 sm:mt-16",children:[(0,d.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title"}),(0,d.jsx)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:(0,d.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,d.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:(0,d.jsx)(i.CKj,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),(0,d.jsx)("input",{onChange:e=>{a(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]})})]}),(0,d.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:t?s.map((e=>(0,d.jsx)(o,{title:e.title,category:e.category,image:e.img,link:e.link,avaliable:e.avaliable,des:e.des},e.id))):e.map((e=>(0,d.jsx)(o,{title:e.title,category:e.category,image:e.img,link:e.link,avaliable:e.avaliable,des:e.des},e.id)))})]})}},175:(e,t,a)=>{a.d(t,{Y:()=>n,S:()=>d});var r=a(43),i=a(135);const s=[{id:1,title:"Airline Reservation System",category:"Web Application",img:a(912),link:"https://github.com/MohamadKheerMustafa/airline-reservation-system",avaliable:!0,ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:2,title:"Hope Road Ticket Booking",category:"Web Application",img:i,link:"https://github.com/MohamadKheerMustafa/hope-road",avaliable:!0},{id:3,title:"CRWN Ecommerce",category:"Web Application",img:i,link:"https://github.com/MohamadKheerMustafa/crwn-ecommerce",avaliable:!0},{id:4,title:"Media Nas",category:"Web Application and mobile App",img:i,link:"https://play.google.com/store/apps/details?id=com.maalialkhair.media&hl=en_GB&gl=US",des:"Socail Media App",avaliable:!1},{id:5,title:"Yatafaqhoo religon web site",category:"Web Application",img:i,link:"",des:"religon lectures and books with savants",avaliable:!1}];var l=a(579);const n=(0,r.createContext)(),d=e=>{const[t,a]=(0,r.useState)(s),[i,d]=(0,r.useState)(""),[o,c]=(0,r.useState)(""),m=t.filter((e=>e.title.toLowerCase().includes(i.toLowerCase())||""===i?e:""));return(0,l.jsx)(n.Provider,{value:{projects:t,setProjects:a,searchProject:i,setSearchProject:d,searchProjectsByTitle:m,selectProject:o,setSelectProject:c},children:e.children})}},42:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var r=a(364),i=a(772);a(43);const s=a.p+"static/media/developer.2f084608158c1db6dcc0b2c76a2806f7.svg";const l=a.p+"static/media/developer-dark.aa2700b57c0b14ead116acc39d478609.svg";var n=a(139),d=a(579);const o=()=>{const[e]=(0,r.A)();return(0,d.jsxs)(n.P.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[(0,d.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[(0,d.jsx)(n.P.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, I'm Mohamad Kheer"}),(0,d.jsx)(n.P.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"A Software Enginner & Back End Developer"}),(0,d.jsx)(n.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:(0,d.jsxs)("a",{download:"Mohamad_Kheer_Mustafa.pdf",href:"/files/Mohamad_Kheer_Mustafa.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[(0,d.jsx)(i.Z25,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),(0,d.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download CV"})]})})]}),(0,d.jsx)(n.P.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:(0,d.jsx)("img",{src:"dark"===e?s:l,alt:"Developer"})})]})};var c=a(448),m=a(175);a(89);const x=()=>(0,d.jsxs)("div",{className:"container mx-auto",children:[(0,d.jsx)(o,{}),(0,d.jsx)(m.S,{children:(0,d.jsx)(c.A,{})})]})},135:(e,t,a)=>{e.exports=a.p+"static/media/web-project-1.dbc2198e771ad7e1d3ea.jpg"},912:(e,t,a)=>{e.exports=a.p+"static/media/web-project-2.18b0fa94372fd0a2c142.jpg"}}]);
//# sourceMappingURL=42.0b8f9500.chunk.js.map