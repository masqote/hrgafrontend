(function(t){function e(e){for(var r,o,i=e[0],l=e[1],u=e[2],v=0,p=[];v<i.length;v++)o=i[v],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(p.length)p.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},n=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("64a9"),s=a.n(r);s.a},"0c3e":function(t,e,a){"use strict";var r=a("8c94"),s=a.n(r);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("nav",{staticClass:"navbar navbar-expand-sm bg-dark navbar-dark"},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/create"}},[t._v("Create Post")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/posts"}},[t._v("Posts")])],1)])]),a("br"),a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)])},s=[],n={},o=n,i=(a("034f"),a("2877")),l=Object(i["a"])(o,r,s,!1,null,null,null),u=l.exports,c=a("2b0e"),v=(a("4989"),a("ab8b"),a("8c4f")),p=a("a7fe"),d=a.n(p),f=a("bc3a"),m=a.n(f),h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[t._v("\n      With Bootstrap!\n      "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),a("br"),t._v("\n    check out the\n    "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")]),a("h3",[t._v("Installed CLI Plugins")]),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])]),a("h3",[t._v("Essential Links")]),a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])]),a("h3",[t._v("Ecosystem")]),a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])])}],_={},g=_,C=(a("0c3e"),Object(i["a"])(g,h,b,!1,null,"3f241072",null)),y=C.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tes"},[a("h1",[t._v("Create A Post")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.addPost(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Post Title:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Post Body:")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.body,expression:"post.body"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:t.post.body},on:{input:function(e){e.target.composing||t.$set(t.post,"body",e.target.value)}}})])])]),a("br"),t._m(0)])])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary"},[t._v("Create")])])}],j={data:function(){return{post:{}}},methods:{}},x=j,P=(a("5701"),Object(i["a"])(x,w,k,!1,null,null,null)),O=P.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tes"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-md-2"},[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"create"}}},[t._v("Create Post")])],1)]),a("br"),a("table",{staticClass:"table table-hover"},[t._m(1),a("tbody",t._l(t.posts,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.email))]),a("td",[t._v(t._s(e.password))]),a("td",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"edit",params:{id:e.id}}}},[t._v("Edit")])],1),a("td",[a("button",{staticClass:"btn btn-danger",on:{click:function(a){return a.preventDefault(),t.deletePost(e.id)}}},[t._v("Delete")])])])})),0)])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-10"},[a("h1",[t._v("Input Andre haha ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("ID")]),a("th",[t._v("Item Names")]),a("th",[t._v("Item Prices Mae")]),a("th",[t._v("Actions")])])])}],D={data:function(){return{posts:[]}},created:function(){var t=this,e="http://192.168.10.105:8000/api/alluser";this.axios.get(e).then((function(e){t.posts=e.data.user,console.log(t.posts)}))}},I=D,N=Object(i["a"])(I,$,E,!1,null,null,null),T=N.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Edit Post")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.updatePost(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Post Title:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Post Body:")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.body,expression:"post.body"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:t.post.body},on:{input:function(e){e.target.composing||t.$set(t.post,"body",e.target.value)}}})])])]),a("br"),t._m(0)])])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary"},[t._v("Update")])])}],A={data:function(){return{post:{}}},created:function(){var t=this,e="http://localhost:8000/api/post/edit/".concat(this.$route.params.id);this.axios.get(e).then((function(e){t.post=e.data}))},methods:{}},B=A,F=Object(i["a"])(B,M,S,!1,null,null,null),J=F.exports;c["a"].use(v["a"]),c["a"].use(d.a,m.a),c["a"].config.productionTip=!1;var L=[{name:"home",path:"/",component:y},{name:"create",path:"/create",component:O},{name:"posts",path:"/posts",component:T},{name:"edit",path:"/edit/:id",component:J}],z=new v["a"]({mode:"history",routes:L});new c["a"](c["a"].util.extend({router:z},u)).$mount("#app")},5701:function(t,e,a){"use strict";var r=a("5aa7"),s=a.n(r);s.a},"5aa7":function(t,e,a){},"64a9":function(t,e,a){},"8c94":function(t,e,a){}});
//# sourceMappingURL=app.4e499997.js.map