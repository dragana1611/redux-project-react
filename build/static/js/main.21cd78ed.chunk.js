(this["webpackJsonpredux-counter"]=this["webpackJsonpredux-counter"]||[]).push([[0],{11:function(e,t,n){e.exports={counter:"Counter_counter__2AVtM",value:"Counter_value__36CNc"}},16:function(e,t,n){e.exports={header:"Header_header__RU0Mw"}},26:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);n(0);var c=n(5),r=n.n(c),o=n(4),s=(n(26),n(11)),i=n.n(s),u=n(12),j=Object(u.b)({name:"counter",initialState:{counter:0,showCounter:!0},reducers:{increment:function(e){e.counter++},decrement:function(e){e.counter--},increase:function(e,t){e.counter=e.counter+t.payload},toggleCounter:function(e){e.showCounter=!e.showCounter}}}),l=Object(u.a)({reducer:{counter:j.reducer}}),a=j.actions,d=l,b=n(1),h=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.counter})),n=Object(o.c)((function(e){return e.showCounter}));return Object(b.jsxs)("main",{className:i.a.counter,children:[Object(b.jsx)("h1",{children:"Redux Counter"}),n&&Object(b.jsx)("div",{className:i.a.value,children:t}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){e(a.increment())},children:"Increment"}),Object(b.jsx)("button",{onClick:function(){e(a.increase(5))},children:"Increase by 5"}),Object(b.jsx)("button",{onClick:function(){e(a.decrement())},children:"Decrement"})]}),Object(b.jsx)("button",{onClick:function(){e(a.toggleCounter())},children:"Toggle Counter"})]})},x=n(16),O=n.n(x),m=function(){return Object(b.jsxs)("header",{className:O.a.header,children:[Object(b.jsx)("h1",{children:"Redux Auth"}),Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"My Products"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"My Sales"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{children:"Logout"})})]})})]})},f=n(7),p=n.n(f),C=function(){return Object(b.jsx)("main",{className:p.a.auth,children:Object(b.jsx)("section",{children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:p.a.control,children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{type:"email",id:"email"})]}),Object(b.jsxs)("div",{className:p.a.control,children:[Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",id:"password"})]}),Object(b.jsx)("button",{children:"Login"})]})})})};var _=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)(C,{}),Object(b.jsx)(h,{})]})};r.a.render(Object(b.jsx)(o.a,{store:d,children:Object(b.jsx)(_,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={auth:"Auth_auth__3isOv",control:"Auth_control__18sQe"}}},[[30,1,2]]]);
//# sourceMappingURL=main.21cd78ed.chunk.js.map