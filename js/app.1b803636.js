(function(t){function e(e){for(var s,o,c=e[0],u=e[1],i=e[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},r={app:0},a=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/test_task_app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"2ac0":function(t,e,n){"use strict";n("e821")},"38f3":function(t,e,n){t.exports=n.p+"img/1.0fbfdd3f.jpg"},"49c4":function(t,e,n){"use strict";n("b5e6")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("wrapper")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("tHeader"),n("div",{staticClass:"main"},[n("div",{staticClass:"sidebar"},[n("div",{staticClass:"sidebar-list"},[n("router-link",{staticClass:"btn-sisebar",attrs:{to:"/list"}},[t._v("users")]),n("router-link",{staticClass:"btn-sisebar",attrs:{to:{name:"cartlist",params:{seluser_data:t.SELUSER}}}},[t._v("selected users")])],1)]),n("div",{staticClass:"content"},[n("router-view")],1)]),n("tFooter",{staticClass:"footer"})],1)},c=[],u=n("5530"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],attrs:{type:"text"},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),n("button",[n("i",{staticClass:"material-icons",on:{click:function(e){return t.searchId(t.searchValue)}}},[t._v("search")])])])},l=[],p=n("2f62"),f={name:"tHeader",components:{},props:{},data:function(){return{searchValue:""}},computed:Object(u["a"])({},Object(p["c"])(["SEARCH_VALUE","USERS","SELUSER"])),methods:Object(u["a"])(Object(u["a"])({},Object(p["b"])(["GET_SEARCH_VALUE_TO_VUEX"])),{},{searchId:function(t){this.GET_SEARCH_VALUE_TO_VUEX(t),"/list"!==this.$route.path&&this.$router.push("/list")}}),watch:{},mounted:function(){}},d=f,_=(n("2ac0"),n("2877")),m=Object(_["a"])(d,i,l,!1,null,null,null),E=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("p",[t._v(t._s(t.title))])])},b=[],v={name:"tFooter",components:{},props:{},data:function(){return{title:"test app footer"}},computed:{},methods:{},watch:{},mounted:function(){}},S=v,U=(n("7914"),Object(_["a"])(S,h,b,!1,null,null,null)),O=U.exports,R={name:"wrapper",components:{tHeader:E,tFooter:O},props:{},data:function(){return{}},computed:Object(u["a"])({},Object(p["c"])(["SELUSER"])),methods:{},watch:{},mounted:function(){}},C=R,j=(n("92bc"),Object(_["a"])(C,o,c,!1,null,null,null)),T=j.exports,w={name:"App",components:{wrapper:T}},V=w,A=(n("034f"),Object(_["a"])(V,r,a,!1,null,null,null)),L=A.exports,g=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"users"},t._l(t.USERS,(function(e){return n("userItem",{key:e.name,attrs:{user_data:e},on:{selectedUser:t.selectedUser}})})),1)},P=[],x=n("2909"),I=(n("4de4"),n("d3b7"),n("caad"),n("2532"),n("b0c0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"users__item"},[s("img",{staticClass:"avatar",attrs:{src:n("38f3"),alt:"users-avatar"}}),t.isVisiblePop?s("tPopup",{staticClass:"popup__pos",on:{closePop:t.closePop}},[s("p",[t._v(t._s(t.user_data.info))])]):t._e(),s("a",{staticClass:"show-info",attrs:{href:"#user-info"},on:{click:t.showInfo}},[s("h3",[t._v(t._s(t.user_data.name))])]),s("p",[t._v("Login: "+t._s(t.user_data.login))]),s("button",{on:{click:t.selectedUser}},[t._v("select")])],1)}),$=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup"},[n("div",{staticClass:"popup__header"},[n("p",[t._v(t._s(t.title))])]),n("div",{staticClass:"popup__content"},[t._t("default")],2),n("div",{staticClass:"popup__footer"},[n("button",{on:{click:t.closePop}},[t._v("Close")])])])},H=[],F={name:"tPopup",components:{},props:{},data:function(){return{title:"Truck number"}},computed:{},methods:{closePop:function(){this.$emit("closePop")}},watch:{},mounted:function(){}},M=F,D=(n("b31a"),Object(_["a"])(M,k,H,!1,null,null,null)),G=D.exports;n("b680");function X(t){return t=parseFloat(t),t.toFixed(2)}var B={name:"users",components:{tPopup:G},props:{user_data:{type:Object,default:function(){return{}}}},data:function(){return{isVisiblePop:!1}},filters:{toFix:X},computed:{},methods:{showInfo:function(){this.isVisiblePop=!0},closePop:function(){this.isVisiblePop=!1},selectedUser:function(){this.$emit("selectedUser",this.user_data)}},watch:{},mounted:function(){}},J=B,N=(n("69a6"),Object(_["a"])(J,I,$,!1,null,null,null)),q=N.exports,z={name:"users",components:{userItem:q},props:{},data:function(){return{}},computed:Object(u["a"])({},Object(p["c"])(["USERS","SELUSER","SEARCH_VALUE"])),methods:Object(u["a"])(Object(u["a"])({},Object(p["b"])(["GET_USERS_FROM_API","SELECTED_USER"])),{},{selectedUser:function(t){this.SELECTED_USER(t)},sortUserBysearchId:function(t){this.sortedUsers=Object(x["a"])(this.USERS),this.sortedUsers=t?this.sortedUsers.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):this.USERS}}),watch:{SEARCH_VALUE:function(){this.sortUserBysearchId(this.SEARCH_VALUE)}},mounted:function(){var t=this;this.GET_USERS_FROM_API().then((function(e){e.data&&(console.log("Data arrived!"),t.sortUserBysearchId(t.SEARCH_VALUE))}))}},K=z,Q=(n("bca5"),Object(_["a"])(K,y,P,!1,null,null,null)),W=Q.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cart-users"},[n("h3",[t._v("selected users")]),t._l(t.seluser_data,(function(e,s){return n("cartUserItem",{key:e.name,attrs:{seluser_item:e},on:{deleteUser:function(e){return t.deleteUser(s)}}})}))],2)},Z=[],tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-user-item"},[s("img",{attrs:{src:n("38f3"),alt:"users-avatar"}}),s("div",{staticClass:"cart-user-item-info"},[s("p",[t._v(t._s(t.seluser_item.name))]),s("p",[t._v(t._s(t.seluser_item.login))])]),s("button",{on:{click:t.deleteUser}},[t._v("delete")])])},et=[],nt={name:"cartUserItem",components:{},props:{seluser_item:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{},methods:{deleteUser:function(){this.$emit("deleteUser")}},watch:{},mounted:function(){}},st=nt,rt=(n("f65a"),Object(_["a"])(st,tt,et,!1,null,null,null)),at=rt.exports,ot={name:"cartUsers",components:{cartUserItem:at},props:{seluser_data:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},methods:Object(u["a"])(Object(u["a"])({},Object(p["b"])(["DELETE_USER"])),{},{deleteUser:function(t){this.DELETE_USER(t)}}),watch:{},mounted:function(){}},ct=ot,ut=(n("49c4"),Object(_["a"])(ct,Y,Z,!1,null,null,null)),it=ut.exports;s["a"].use(g["a"]);var lt=new g["a"]({routes:[{path:"/",name:"main",component:T,props:!0},{path:"/list",name:"list",component:W,props:!0},{path:"/cartlist",name:"cartlist",component:it,props:!0}]}),pt=lt,ft=(n("d81d"),n("fb6a"),n("a434"),n("bc3a")),dt=n.n(ft);s["a"].use(p["a"]);var _t=new p["a"].Store({state:{searchValue:"",users:[],seluser:[]},mutations:{SET_SEARCH_VALUE_TO_VUEX:function(t,e){t.searchValue=e},SET_USERS_TO_STATE:function(t,e){t.users=e},SET_SELUSER:function(t,e){if(t.seluser.length){var n=!1;t.seluser.map((function(s){s.name===e.name&&(n=!0,t.seluser.slice(e))})),n||t.seluser.push(e)}else t.seluser.push(e)},REMOVE_USER:function(t,e){t.seluser.splice(e,1)}},actions:{GET_SEARCH_VALUE_TO_VUEX:function(t,e){var n=t.commit;n("SET_SEARCH_VALUE_TO_VUEX",e)},GET_USERS_FROM_API:function(t){var e=t.commit;return dt()("http://localhost:3000/users",{method:"GET"}).then((function(t){return e("SET_USERS_TO_STATE",t.data),t})).catch((function(t){return console.log(t),t}))},SELECTED_USER:function(t,e){var n=t.commit;n("SET_SELUSER",e),console.log("SET_SELUSER",e)},DELETE_USER:function(t,e){var n=t.commit;n("REMOVE_USER",e)}},getters:{USERS:function(t){return t.users},SELUSER:function(t){return t.seluser},SEARCH_VALUE:function(t){return t.searchValue}}}),mt=_t;n("d1e78");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(L)},store:mt,router:pt}).$mount("#app")},"69a6":function(t,e,n){"use strict";n("9c83")},"71c9":function(t,e,n){},7914:function(t,e,n){"use strict";n("acca")},"85ec":function(t,e,n){},"91e8":function(t,e,n){},"92bc":function(t,e,n){"use strict";n("ec57")},"9c83":function(t,e,n){},acca:function(t,e,n){},b31a:function(t,e,n){"use strict";n("71c9")},b5e6:function(t,e,n){},bca5:function(t,e,n){"use strict";n("91e8")},cfb9:function(t,e,n){},e821:function(t,e,n){},ec57:function(t,e,n){},f65a:function(t,e,n){"use strict";n("cfb9")}});
//# sourceMappingURL=app.1b803636.js.map