(this.webpackJsonpsh=this.webpackJsonpsh||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(2),o=n.n(l),c=(n(9),n(3)),i=.12*Math.sqrt(2),p=function(e){var t=e.children;return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMinYMin slice",version:"1.1",viewBox:"0 0 ".concat(200," ").concat(600),width:200,height:600},a.a.createElement("g",{transform:"translate(".concat(-25,",").concat(-25,")")},t))},s=function(e,t,n,r,a){var l=Math.atan2(r-t,n-e);return[{x:Math.sin(l)*a+e,y:-Math.cos(l)*a+t},{x:-Math.sin(l)*a+e,y:Math.cos(l)*a+t}]},u=function(e,t){var n=function(e,t,n){var r=t.x-e.x,a=t.y-e.y,l=n/Math.sqrt(Math.pow(r,2)+Math.pow(a,2)),o=r*l,c=a*l;return{start:{x:e.x+o,y:e.y+c},end:{x:t.x-o,y:t.y-c}}}(e,t,.12),r=s(n.start.x,n.start.y,n.end.x,n.end.y,.12),a=r[1],l=r[0],o=s(n.end.x,n.end.y,n.start.x,n.start.y,.12),c=o[0],i=o[1];return{p1:e,p2:t,p1c:n.start,p2c:n.end,p1r:a,p1l:l,p2r:c,p2l:i}},m=function(e,t){var n=e.start,r=e.end;return a.a.createElement("path",{fill:"none",stroke:t,strokeWidth:250*i,d:"M ".concat(250*n.x,",").concat(250*n.y," L ").concat(250*r.x,",").concat(250*r.y)})},h=function(e){return e[Math.floor(Math.random()*e.length)]},f=function(e,t,n){for(var r=u(e.start,e.end),l=[],o=0;o<n.length;o++)for(var c=n[o],i=0;i<c.length;i++)l.push(r[c[i]]);var p=l.map((function(e,t){return"".concat(0===t?"M":"L"," ").concat(250*e.x,",").concat(250*e.y)})).join(" ");return a.a.createElement("path",{strokeLinecap:"square",strokeMiterlimit:10,stroke:t,strokeWidth:30,fill:"none",d:p})},d=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},x=function(e){var t=e.minX,n=e.maxX,r=e.minY,a=e.maxY,l=d(t,n),o=d(r,a),c=d(0,4-l-1),i=d(0,4-o-1);return Math.random()>=.5?{start:{x:1/3*c,y:1/3*i},end:{x:1/3*(c+l),y:1/3*(i+o)}}:{start:{x:1/3*(c+l),y:1/3*i},end:{x:1/3*c,y:1/3*(i+o)}}},v={minX:1,maxX:2,minY:3,maxY:3,color:"#558779"},E={minX:0,maxX:0,minY:2,maxY:2,color:"#899f95"},y={minX:1,maxX:1,minY:1,maxY:1,color:"#b1a455"},g=[[["p1","p1l","p2l"],["p2","p2r","p1r"]],[["p1","p1r","p2r"],["p2","p2l","p1l"]],[["p1","p1l","p2l","p2"],["p2r","p1r"]],[["p1","p1r","p2r","p2"],["p2l","p1l"]],[["p1","p1l","p2l","p2","p2r","p1r"]],[["p1l","p2l","p2","p2r","p1r","p1"]],[["p2","p2r","p1r","p1","p1l","p2l"]],[["p2r","p1r","p1","p1l","p2l","p2"]]],w=(n(10),h(g)),M=h(g),k=h(g),A=x(v),b=x(y),Y=x(E),N=x(v),X=x(y),S=x(E);var q=function(e,t,n){return e+function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1}(n)/1*(t-e)},j=function(e,t,n){return{start:{x:q(e.start.x,t.start.x,n),y:q(e.start.y,t.start.y,n)},end:{x:q(e.end.x,t.end.x,n),y:q(e.end.y,t.end.y,n)}}},B=j(A,N,0),D=j(b,X,0),F=j(Y,S,0),L=!1;var O=function(){var e=Object(r.useState)(0),t=Object(c.a)(e,2),n=(t[0],t[1]),l=a.a.useRef(),o=a.a.useRef(),i=function e(t){if(void 0!==o.current){var r=t-o.current;n((function(e){var t=(e+1*r/50)%50;return B=j(A,N,.02*t),D=j(b,X,.02*t),F=j(Y,S,.02*t),t<e&&(L?L=!L:(L=!L,A=N,N=x(v),b=X,X=x(y),Y=S,S=x(E))),t}))}o.current=t,l.current=requestAnimationFrame(e)};return Object(r.useEffect)((function(){return l.current=requestAnimationFrame(i),function(){return cancelAnimationFrame(l.current)}}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"App-bg"},a.a.createElement(p,null,m(B,v.color),m(D,y.color),m(F,E.color),f(B,v.color,w),f(D,y.color,M),f(F,E.color,k))),a.a.createElement("div",{className:"App-title"},a.a.createElement("div",{className:"App-title--inner"},a.a.createElement("h1",null,"D\u200bi\u200bp\u200bl\u200bo\u200bm\u200ba\u200bu\u200bs\u200bs\u200bt\u200be\u200bl\u200bl\u200bu\u200bn\u200bg"))),a.a.createElement("div",{className:"App-bg"},a.a.createElement(p,null,f(B,v.color,w),f(D,y.color,M),f(F,E.color,k))),a.a.createElement("div",{className:"App-text"},a.a.createElement("div",{className:"App-text--inner"},a.a.createElement("h3",null,"Diplomausstellung"),a.a.createElement("p",null,"HF Interaction Design",a.a.createElement("br",null),"Schule\xa0f\xfcr Gestaltung Z\xfcrich"),a.a.createElement("h3",null,"11.\u202f7.\u202f2020 \xb7 13.30\xad\xa0Uhr"),a.a.createElement("p",null,"Er\xf6ffnung & Ap\xe9ro"),a.a.createElement("h3",null,"Ort"),a.a.createElement("p",null,"SiloSilo Halle ",a.a.createElement("br",null),"Limmatstrasse\xa0254",a.a.createElement("br",null),"8005\xa0Z\xfcrich"),a.a.createElement("a",{rel:"noopener noreferrer",href:"https://forms.gle/U5eY7ohNSczT8S2D7",target:"_blank"},"Bitte Anmelden"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.81a02586.chunk.js.map