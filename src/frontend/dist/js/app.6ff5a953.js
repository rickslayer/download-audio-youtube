(function(t){function e(e){for(var a,s,l=e[0],i=e[1],c=e[2],d=0,p=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,l=1;l<r.length;l++){var i=r[l];0!==o[i]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},o={app:0},n=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"teal darken-4",dark:""}},[r("a",{attrs:{href:"https://prra.dev"}},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"PRRA Logo",contain:"",src:"https://res.cloudinary.com/prra/image/upload/c_scale,w_500/v1587654993/PRRA.site/logo.prra_sxtsgv.png",transition:"scale-transition",width:"157"}})],1),r("v-spacer"),r("v-btn",{attrs:{href:"https://github.com/rickslayer/download-audio-youtube",target:"_blank",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Github Repository")]),r("v-icon",[t._v("mdi-open-in-new")])],1)],1),r("v-main",[r("YoutubeAudio"),r("Footer")],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-btn",{attrs:{icon:"",large:"",color:"red"}},[r("v-icon",[t._v("mdi-youtube-studio")])],1)],1),r("v-col",{staticClass:"mb-4",attrs:{cols:"12",sm:"12",md:"12"}},[r("h1",{staticClass:"font-weight-bold mb-3"},[t._v(" Download Audio from Youtube URL ")])]),r("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"8",md:"8","offset-sm":"2"}},[r("v-text-field",{attrs:{label:"URL",placeholder:"https://youtube.com/",outlined:"",disabled:t.showProcess},on:{change:t.changeUrl},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.showBtn,expression:"showBtn"}],attrs:{large:"",color:"primary",href:t.url_download,download:""}},[t._v(" Download ")]),r("v-img",{directives:[{name:"show",rawName:"v-show",value:t.showBtn,expression:"showBtn"}],attrs:{src:t.imgThumb,"lazy-src":t.imgThumb,"aspect-ratio":16/9}})],1),r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:t.showProcess,expression:"showProcess"}],attrs:{size:70,width:7,color:"green",indeterminate:""}}),r("h4",{directives:[{name:"show",rawName:"v-show",value:t.showProcess,expression:"showProcess"}]},[t._v(" Might be take a while because it need to download and convert the video on server ")])],1)],1)],1)},l=[],i=(r("ac1f"),r("466d"),r("bc3a")),c={name:"YoutubeAudio",data:function(){return{url:"",url_download:"",showBtn:!1,showProcess:!1,imgThumb:"https://i.ytimg.com/vi/tfSi3foze3Q/maxresdefault.jpg"}},methods:{changeUrl:function(t){var e=this;this.url=t;var r=/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;if(null===this.url.match(r))return alert("Digite uma URL do youtube válida"),!1;var a="https://projects.prra.dev/api",o={url:this.url};this.showProcess=!0,i.post(a,o).then((function(t){200==t.status&&(e.url_download=t.data.download_url,e.showBtn=!0,e.showProcess=!1,e.imgThumb=t.data.thumbnail_url)})).catch((function(t){alert(t),e.showProcess=!1}))}}},u=c,d=r("2877"),p=r("6544"),v=r.n(p),h=r("8336"),f=r("62ad"),m=r("a523"),w=r("132d"),b=r("adda"),g=r("490a"),y=r("0fd9"),_=r("8654"),x=Object(d["a"])(u,s,l,!1,null,null,null),P=x.exports;v()(x,{VBtn:h["a"],VCol:f["a"],VContainer:m["a"],VIcon:w["a"],VImg:b["a"],VProgressCircular:g["a"],VRow:y["a"],VTextField:_["a"]});var V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{attrs:{dark:"",absolute:""}},[r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("small",[t._v(" "+t._s((new Date).getFullYear())+" — created with "),r("v-icon",{staticClass:"red--text darken-4"},[t._v("mdi-heart")]),t._v(" using Vue.js and Python by "),r("a",{attrs:{href:"https://prra.dev"}},[t._v("prra.dev ")])],1)])],1)],1)},j=[],O=r("553a"),C={},k=Object(d["a"])(C,V,j,!1,null,null,null),R=k.exports;v()(k,{VCol:f["a"],VFooter:O["a"],VIcon:w["a"],VRow:y["a"]});var A={name:"App",components:{YoutubeAudio:P,Footer:R},data:function(){return{}}},B=A,S=r("7496"),T=r("40dc"),M=r("f6c4"),F=r("2fa4"),I=Object(d["a"])(B,o,n,!1,null,null,null),U=I.exports;v()(I,{VApp:S["a"],VAppBar:T["a"],VBtn:h["a"],VIcon:w["a"],VImg:b["a"],VMain:M["a"],VSpacer:F["a"]});var Y=r("f309");a["a"].use(Y["a"]);var $=new Y["a"]({}),D=r("2f62");a["a"].use(D["a"]);var L=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({vuetify:$,store:L,render:function(t){return t(U)}}).$mount("#app")}});
//# sourceMappingURL=app.6ff5a953.js.map