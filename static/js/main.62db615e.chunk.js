(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(16),r=n.n(s),i=(n(23),n(7)),o=n.n(i),u=n(17),j=n(5),d=(n(25),n(18)),b=n.n(d).a.create({baseURL:"http://localhost:3000"}),l=function(e,t){return b.post("/login",{username:e,password:t}).then((function(e){return e.data}))},p=n(0);var f=function(){var e=Object(a.useState)("admin"),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)("password"),r=Object(j.a)(s,2),i=r[0],d=r[1],b=Object(a.useState)(""),f=Object(j.a)(b,2),O=f[0],h=f[1],m=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(n,i);case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){O&&console.log("jwt",O)}),[O]),Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("header",{className:"App-header",children:O?Object(p.jsx)("div",{children:Object(p.jsx)("p",{id:"confirmation",children:"Logged in!"})}):Object(p.jsxs)("div",{className:"form",children:[Object(p.jsxs)("div",{className:"input-container",children:[Object(p.jsx)("input",{type:"text",id:"username",name:"username",className:"input",onChange:function(e){c(e.target.value)},defaultValue:"admin"}),Object(p.jsx)("input",{type:"password",id:"password",name:"password",className:"input",defaultValue:"password",onChange:function(e){d(e.target.value)}})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"submit",onClick:m,children:"Login"})]})})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root")),O()}},[[45,1,2]]]);
//# sourceMappingURL=main.62db615e.chunk.js.map