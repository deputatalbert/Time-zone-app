(this.webpackJsonpclockapp=this.webpackJsonpclockapp||[]).push([[0],{22:function(e,c,n){},23:function(e,c,n){},25:function(e,c,n){},26:function(e,c,n){"use strict";n.r(c);var t=n(1),i=n(0),s=n(3),r=n(2),a={clocks:[{id:"clock1",timeZone:"Europe/Moscow"},{id:"clock2",timeZone:"Asia/Krasnoyarsk"}]},o=Object(r.b)({timezoneReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"CHANGE_TIMEZONE":return c.payload.id===e.clocks[0].id?(e.clocks[0].timeZone=c.payload.value,console.log(e),e):c.payload.id===e.clocks[1].id?(e.clocks[1].timeZone=c.payload.value,e):e;default:return e}}}),l=Object(r.c)(o,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),u=n(5),j=n.n(u),d=(n(22),n(4));n(23),n(24),n(25);var b=function(e){var c=e.interval,n=e.timezone,r=e.onChangeTimezone,a=e.id;Object(i.useEffect)((function(){x()}),[c]);var o=new Date,l=new Date,u=Object(i.useRef)(null),j=Object(i.useRef)(null),b=Object(i.useRef)(null),m=Object(s.b)();l=o.toLocaleString("en-GB",{timeZone:n}).substring(12,20);var O=Object(i.useState)(l),v=Object(d.a)(O,2),h=v[0],f=v[1],x=function(){var e=(new Date).toLocaleString("en-GB",{timeZone:n}).substring(12,20);f(e),function(){if(!u||!j||!b)return null;var e=new Date,c=new Date(e.toLocaleString("en-US",{timeZone:n})),t=c.getSeconds()/60,i=(t+c.getMinutes())/60,s=(i+c.getHours())/12;p(b,t),p(j,i),p(u,s)}()},p=function(e,c){e.current.style.setProperty("--rotation",360*c)};return Object(t.jsxs)("div",{className:"wrapper-clock",children:[Object(t.jsx)("div",{className:"clock-box",children:Object(t.jsxs)("div",{className:"clock",children:[Object(t.jsx)("div",{className:"hand hour",ref:u}),Object(t.jsx)("div",{className:"hand minute",ref:j}),Object(t.jsx)("div",{className:"hand second",ref:b}),Object(t.jsx)("div",{className:"number number1",children:"|"}),Object(t.jsx)("div",{className:"number number2",children:"|"}),Object(t.jsx)("div",{className:"number number3",children:"3"}),Object(t.jsx)("div",{className:"number number4",children:"|"}),Object(t.jsx)("div",{className:"number number5",children:"|"}),Object(t.jsx)("div",{className:"number number6",children:"6"}),Object(t.jsx)("div",{className:"number number7",children:"|"}),Object(t.jsx)("div",{className:"number number8",children:"|"}),Object(t.jsx)("div",{className:"number number9",children:"9"}),Object(t.jsx)("div",{className:"number number10",children:"|"}),Object(t.jsx)("div",{className:"number number11",children:"|"}),Object(t.jsx)("div",{className:"number number12",children:"12"})]})}),Object(t.jsx)("div",{className:"digitalTime",children:Object(t.jsx)("h1",{children:h})}),Object(t.jsxs)("div",{className:"nameCity",children:[Object(t.jsx)("h3",{children:"Asia/Krasnoyarsk"===n&&"\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a"}),Object(t.jsx)("h3",{children:"Europe/Kaliningrad"===n&&"\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434"}),Object(t.jsx)("h3",{children:"Europe/Moscow"===n&&"\u041c\u043e\u0441\u043a\u0432\u0430"}),Object(t.jsx)("h3",{children:"Asia/Vladivostok"===n&&"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a"})]}),Object(t.jsx)("div",{className:"selectCity",children:Object(t.jsxs)("select",{value:n,id:a,onChange:function(e){return r(m({type:"CHANGE_TIMEZONE",payload:function(e){return{id:e.target.id,value:e.target.value}}(e)}))},children:[Object(t.jsx)("option",{value:"Europe/Moscow",children:"\u041c\u043e\u0441\u043a\u0432\u0430"}),Object(t.jsx)("option",{value:"Asia/Krasnoyarsk",children:"\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a"}),Object(t.jsx)("option",{value:"Asia/Vladivostok",children:"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a"}),Object(t.jsx)("option",{value:"Europe/Kaliningrad",children:"\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434"})]})})]})},m=function(e,c){var n=Object(i.useRef)();Object(i.useEffect)((function(){n.current=e}),[e]),Object(i.useEffect)((function(){if(null!==c){var e=setInterval((function(){n.current()}),c);return function(){return clearInterval(e)}}}),[c])};var O=function(){var e=Object(s.c)((function(e){return e.timezoneReducer})),c=Object(i.useState)(0),n=Object(d.a)(c,2),r=n[0],a=n[1],o=Object(i.useState)(e.clocks[0].timeZone),l=Object(d.a)(o,2),u=l[0],j=l[1],O=Object(i.useState)(e.clocks[1].timeZone),v=Object(d.a)(O,2),h=v[0],f=v[1];return m((function(){a(r+1)}),1e3),Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(b,{id:"clock1",interval:r,timezone:u,onChangeTimezone:function(c){j(e.clocks[0].timeZone)}}),Object(t.jsx)(b,{id:"clock2",interval:r,timezone:h,onChangeTimezone:function(c){f(e.clocks[1].timeZone)}})]})};j.a.render(Object(t.jsx)(s.a,{store:l,children:Object(t.jsx)(O,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.1aa19fff.chunk.js.map