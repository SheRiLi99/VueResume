if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let u={};const t=e=>r(e,o),c={module:{uri:o},exports:u,require:t};s[o]=Promise.all(i.map((e=>c[e]||t(e)))).then((e=>(n(...e),u)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"resume2022"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/resume/css/app.4d6ee24a.css",revision:null},{url:"/resume/index.html",revision:"898fb7e787f9d93e2421157c8ce766b1"},{url:"/resume/js/about.3ee971bb.js",revision:null},{url:"/resume/js/app.1fb7f7c3.js",revision:null},{url:"/resume/js/chunk-vendors.cbde8440.js",revision:null},{url:"/resume/manifest.json",revision:"8dd3bfd7c1c0d8cd2bddb83a7c181c88"},{url:"/resume/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
