(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(2),r=n.n(o),l=n(6),i=n(3),s=n(4),u=n(7),b=n(5),d=(n(13),function(t){var e=t.tabsCopy,n=t.selectedTabIndex,a=t.onTabSelected;return c.a.createElement(c.a.Fragment,null,e.map((function(t){return c.a.createElement("button",{className:"button",type:"button",key:t.title,onClick:function(){return a(t)}},t.title)})),c.a.createElement("div",{className:"content"},e.find((function(t,e){return e===n})).content))}),m=(n(14),[{id:"tab-1",title:"Home",content:"Some text 1"},{id:"tab-2",title:"Profile",content:"Some text 2"},{id:"tab-3",title:"Contact",content:"Some text 3"}]),p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={tabsCopy:m.map((function(t){return Object(l.a)({},t)})),selectedTabIndex:0},t.onTabSelected=function(e){var n=t.state.tabsCopy.findIndex((function(t){return t.title===e.title}));t.setState({selectedTabIndex:n})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.tabsCopy,n=t.selectedTabIndex;return c.a.createElement("section",{className:"app"},c.a.createElement("h1",{className:"title"},"React tabs"),c.a.createElement(d,{tabsCopy:e,selectedTabIndex:n,onTabSelected:this.onTabSelected}))}}]),n}(c.a.Component);r.a.render(c.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.0ee51566.chunk.js.map