"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[641],{641:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(7437),s=n(2265),i=n(3433),r=n(9241),l=n(47);function o(){let e=(0,s.useRef)(null),t=(0,i.Y)(e,{once:!1,amount:.3}),n={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}};return(0,a.jsxs)("section",{id:"about",className:"py-20 relative",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark opacity-80 z-0"}),(0,a.jsx)("div",{className:"container mx-auto px-4 relative z-10",children:(0,a.jsxs)(r.E.div,{ref:e,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},initial:"hidden",animate:t?"visible":"hidden",className:"max-w-4xl mx-auto",children:[(0,a.jsxs)(r.E.div,{variants:n,className:"text-center mb-16",children:[(0,a.jsxs)("h2",{className:"text-3xl md:text-4xl font-bold mb-4 neon-text",children:["About ",(0,a.jsx)("span",{className:"text-primary",children:"Me"})]}),(0,a.jsx)("div",{className:"w-20 h-1 bg-primary mx-auto rounded-full mb-6"}),(0,a.jsx)("p",{className:"text-lg text-gray-300",children:"Get to know me and my journey in the world of technology and design."})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 items-center",children:[(0,a.jsxs)(r.E.div,{variants:n,className:"relative flex flex-col items-center",children:[(0,a.jsxs)("div",{className:"w-full max-w-xs aspect-square relative rounded-2xl overflow-hidden glass-panel flex items-center justify-center",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 z-0"}),(0,a.jsx)("div",{className:"relative z-10 w-full h-full flex items-center justify-center",children:(0,a.jsx)("img",{src:(0,l.K)("/images/Face.jpeg"),alt:"Profile",className:"rounded-full w-64 h-64 object-cover border-4 border-primary shadow-lg"})})]}),(0,a.jsx)("div",{className:"mt-8 text-center w-full",children:(0,a.jsx)(r.E.a,{href:(0,l.K)("/resume/resume.pdf"),target:"_blank",rel:"noopener noreferrer",className:"futuristic-button inline-block px-6 py-3 text-lg",whileHover:{scale:1.05},transition:{type:"spring",stiffness:400,damping:10},children:"View Resume"})})]}),(0,a.jsxs)(r.E.div,{variants:n,children:[(0,a.jsx)("h3",{className:"text-2xl font-bold mb-4 text-primary",children:"Full Stack Java Developer & AI Enthusiast"}),(0,a.jsx)("p",{className:"text-gray-300 mb-6",children:"Hello there! I'm Harsha Vardhan Reddy Goli, a software developer with a strong focus on building robust, user-friendly applications that solve real-world challenges. My skill set spans front-end and back-end technologies, allowing me to craft end-to-end solutions that are efficient, scalable, and maintainable. I thrive on tackling complex problems, optimizing performance, and collaborating with cross-functional teams to deliver software that resonates with both users and stakeholders."}),(0,a.jsx)("p",{className:"text-gray-300 mb-6",children:"Outside of my core development work, I have a keen interest in AI. While my day-to-day involves coding, architecture design, and performance tuning, I'm always excited to see how emerging AI tools and machine learning techniques can enhance existing applications—be it through streamlined data insights, automation, or improved user experiences. I stay updated on the latest industry trends, eager to integrate forward-thinking solutions wherever they can make a tangible impact."}),(0,a.jsx)("a",{href:"#contact",className:"futuristic-button inline-block",children:"Contact Me"})]})]})]})})]})}},47:function(e,t,n){n.d(t,{K:function(){return a}});function a(e){let t=e.startsWith("/")?e.slice(1):e;return"/Resume/".concat(t)}},3433:function(e,t,n){n.d(t,{Y:function(){return r}});var a=n(2265),s=n(5699);let i={some:0,all:1};function r(e,{root:t,margin:n,amount:r,once:l=!1}={}){let[o,c]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(!e.current||l&&o)return;let a={root:t&&t.current||void 0,margin:n,amount:r};return function(e,t,{root:n,margin:a,amount:r="some"}={}){let l=(0,s.IG)(e),o=new WeakMap,c=new IntersectionObserver(e=>{e.forEach(e=>{let n=o.get(e.target);if(!!n!==e.isIntersecting){if(e.isIntersecting){let n=t(e);"function"==typeof n?o.set(e.target,n):c.unobserve(e.target)}else"function"==typeof n&&(n(e),o.delete(e.target))}})},{root:n,rootMargin:a,threshold:"number"==typeof r?r:i[r]});return l.forEach(e=>c.observe(e)),()=>c.disconnect()}(e.current,()=>(c(!0),l?void 0:()=>c(!1)),a)},[t,e,n,l,r]),o}}}]);