import{r as l,j as t}from"./index-CgRCfyEc.js";import{P as D}from"./index-CoNqGafs.js";const L=()=>{var b;l.useEffect(()=>{window.scrollTo(0,0)},[]);const[c,N]=l.useState({}),[r,y]=l.useState(""),[p,g]=l.useState([]),[f,P]=l.useState(1),h=3;l.useEffect(()=>{const e="1RQ2PZMRKjBVHpG0ettmuiDjjxzpF7OfFDfXlJDT0ElE";new D(e).parse().then(a=>{var d;const n=a.reduce((o,m)=>{const u=m["Area ----------------->"]||"Unknown Area",w=v(m["Tanggal "]);return new Date(w)<new Date||(o[u]||(o[u]=[]),o[u].push(m)),o},{});N(n);const i=((d=n[r])==null?void 0:d.length)||0;g(j(i))})},[r]);const j=e=>{const s=Math.ceil(e/h),a=[];for(let n=1;n<=s;n++)a.push(n);return a},k=e=>{P(e)},v=e=>{if(!e||typeof e!="string")return null;const s=/^Date\((\d+),(\d+),(\d+)\)$/,a=e.match(s);if(!a)return null;const[,n,i,d]=a,o=new Date(n,i,d),m={day:"numeric",month:"long",year:"numeric"};return o.toLocaleDateString("en-GB",m)},x=r?(b=c[r])==null?void 0:b.slice((f-1)*h,f*h):[];l.useEffect(()=>{},[c,x,p]),l.useEffect(()=>{if(r&&c[r]){const e=c[r].length;g(j(e))}},[r,c]);const E=Object.keys(c).filter(e=>c[e].length>0);return t.jsxs("div",{className:"h-full",children:[t.jsxs("div",{className:"h-[8vh]",children:[t.jsx("div",{className:"h-[3vh]"}),t.jsx("p",{className:"text-3xl text-center",children:"List Event"})]}),t.jsx("div",{className:"h-[5vh] flex items-center justify-center",children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("label",{htmlFor:"area-filter",className:"text-[]",children:["Filter by Area :"," "]}),t.jsxs("select",{id:"area-filter",className:"w-[50vw] bg-[#ffffff] text-[#f3746d] rounded-md text-xl",onChange:e=>y(e.target.value),value:r,children:[t.jsx("option",{value:"",className:"text-gray-500 text-center",children:"----Select Area----"}),E.map((e,s)=>t.jsx("option",{value:e,children:e},s))]})]})}),t.jsx("div",{id:"events-container",className:"max-w-2xl mx-auto h-[150vh]",children:x==null?void 0:x.map((e,s)=>{const a=v(e["Tanggal "]);if(a){const[n,i,d]=a.split(" ");return t.jsxs("div",{className:"flex flex-col md:flex-row shadow-lg border rounded-lg my-5 p-5",children:[t.jsxs("div",{className:"bg-[#f3746d] text-[#ffffff] text-center p-8 rounded-t-lg md:rounded-l-lg md:rounded-t-none flex flex-col justify-center items-center",children:[t.jsx("div",{className:"text-[5rem] font-bold",children:n}),t.jsx("div",{className:"text-[1rem] font-normal month w-[100px] text-center mb-[0.5rem]",children:i})]}),t.jsxs("div",{className:"flex flex-col justify-center px-6 py-4 text-center",children:[t.jsx("a",{href:e["Link Acara bit.ly/JFestAdd"],target:"_blank",className:"text-[#f3746d] text-[1.25rem] uppercase mb-2",rel:"noopener noreferrer",children:e["Nama Acara (Link acara klik) Post atau edit event (komentar di chart) atau ke grup fb-> Join grup ->"]}),t.jsx("div",{className:"text-gray-600",children:e["Lokasi (baca keterangan lebih lanjut di Facebook Page) Eventmu belum ada? perbaikan jadwal event? -->"]})]})]},s)}return null})}),t.jsx("div",{className:"h-[10vh]"}),t.jsx("div",{id:"pagination",className:"flex justify-center gap-4 mt-8 h-[5vh]",children:p.map((e,s)=>t.jsx("button",{className:`px-4 py-2 bg-[#f3746d] text-white rounded-md ${f===e?"bg-[#d56c56]":""}`,onClick:()=>k(e),children:e},s))}),t.jsx("div",{className:"h-[1vh]"}),t.jsxs("div",{className:"h-[15vh]",children:[t.jsxs("p",{className:"text-sm ml-5 text-center",children:[t.jsx("a",{href:"https://docs.google.com/spreadsheets/d/1RQ2PZMRKjBVHpG0ettmuiDjjxzpF7OfFDfXlJDT0ElE/edit?gid=672618632#gid=672618632",target:"_blank",rel:"noopener noreferrer",children:"*Source from jfest chart"})," by"]}),t.jsx("p",{className:"text-sm ml-5 text-center",children:t.jsx("a",{href:"https://web.facebook.com/groups/251875943835",target:"_blank",rel:"noopener noreferrer",children:"JFEST INDO LOVER"})})]})]})};export{L as default};