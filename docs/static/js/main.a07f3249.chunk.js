(this["webpackJsonpgift-expert"]=this["webpackJsonpgift-expert"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(7),c=n.n(a),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],o=a[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&e((function(t){return[c].concat(Object(s.a)(t))})),o("")},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){o(t.target.value)}})})},j=n(10),d=function(t){var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},l=n(6),f=n.n(l),b=n(8),p=function(){var t=Object(b.a)(f.a.mark((function t(e){var n,r,a,c,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=ms9dSl2rxGf29KMgixjaUdweTxIgZ9XY&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,c=a.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){p(t).then((function(t){c({data:t,loading:!1})}))}),[t]),a}(e),a=n.loading,c=n.data;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),a&&"Loading...",Object(u.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(u.jsx)(d,Object(j.a)({},t),t.id)}))})]})},O=function(t){var e=t.defaultCategories,n=void 0===e?[]:e,a=Object(r.useState)(n),c=Object(i.a)(a,2),s=c[0],j=c[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:j}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:s.map((function(t){return Object(u.jsx)(x,{category:t},t)}))})]})};n(17);c.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a07f3249.chunk.js.map