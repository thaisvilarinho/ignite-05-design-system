import{j as s}from"./jsx-runtime-X2b_N9AH.js";import{r as o}from"./index-uCp2LrAq.js";import{c as p,d as u}from"./index-CoxluMPD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-ChiRO62b.js";import"./index-BOkhicXD.js";const d=c=>{const[m,t]=o.useState(!1),r=o.useRef(0);return o.useEffect(()=>()=>clearTimeout(r.current),[]),s.jsxs("div",{children:[s.jsx(p,{onClick:()=>{t(!1),window.clearTimeout(r.current),r.current=window.setTimeout(()=>{t(!0)},100)},children:"Click me"}),s.jsx(u,{open:m,onOpenChange:t,...c})]})},h={title:"Feedback/Toast",component:d,args:{title:"Toast title",description:"Toast description example"},argTypes:{children:{table:{disable:!0}}}},e={};var a,i,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const w=["Primary"];export{e as Primary,w as __namedExportsOrder,h as default};