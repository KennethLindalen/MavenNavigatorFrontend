(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"3b01":function(t,e,n){t.exports=n.p+"img/linkedin-brands.d9049f46.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid mt-3",staticStyle:{"padding-left":"5%","padding-right":"5%"},attrs:{id:"app"}},[t._m(0),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm mt-1"},[n("div",{staticClass:"alert alert-secondary mb-3 mt-0",staticStyle:{"text-align":"center"}},[n("h3",[t._v("Upload your dependency tree here")]),t._v(" "),n("hr"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"input-group mb-2"},[n("div",{staticClass:"custom-file"},[n("file-reader",{on:{load:function(e){t.file=e}}})],1)]),t._v(" "),""!==t.errorMsg?n("div",{staticClass:"alert alert-danger"},[n("p",[t._v(t._s(t.errorMsg))])]):t._e(),t._v(" "),n("button",{staticClass:"btn btn-secondary",staticStyle:{width:"100%"},attrs:{type:"button"},on:{click:t.sendData}},[t._v("Find\n          conflicts\n        ")])]),t._v(" "),t.conflictCount>0?n("div",{staticClass:"alert alert-secondary mt-3"},[n("h4",[t._v("Found "+t._s(t.conflictCount)+" confliction set"),t.conflictCount>1?n("span",[t._v("s")]):t._e(),t._v(" in your build.")]),t._v(" "),n("hr"),t._v(" "),t._l(t.conflictObj,(function(e,a){return n("div",{key:a,staticClass:"alert alert-light"},[n("div",{staticClass:"row",staticStyle:{color:"black"}},[n("div",{staticClass:"col"},[n("h5",[t._v("This maven dependency has "+t._s(e.conflicts.length)+" conflict"),e.conflicts.length>1?n("span",[t._v("s")]):t._e()]),t._v(" "),n("hr"),t._v(" "),n("div",[n("p",[n("span",{staticClass:"bolder"},[t._v("Group ID:")]),t._v(" "+t._s(e.firstOccurance.GroupId))]),t._v(" "),n("p",[n("span",{staticClass:"bolder"},[t._v("Artifact ID:")]),t._v(" "+t._s(e.firstOccurance.ArtifactId))])])]),t._v(" "),t._l(e.conflicts,(function(i,r){return n("div",{key:r,staticClass:"col",staticStyle:{margin:"0","overflow-y":"auto"}},[n("div",{staticClass:"alert alert-light",staticStyle:{border:"black solid 1px",color:"black",width:"60%",float:"right"}},[n("p",{staticClass:"bolder"},[t._v("Version: "),n("br"),n("span",{staticStyle:{"font-weight":"normal"}},[t._v(t._s(e.firstOccurance.Version))])]),t._v(" "),n("button",{staticClass:"btn btn-outline-dark",staticStyle:{width:"100%",padding:"10px",margin:"0"},on:{click:function(e){return t.conflictTreeView(t.conflictObj[a].firstOccuranceJsonMap)}}},[t._v("\n                  See the project structure containing this dependency\n                ")])]),t._v(" "),n("div",{staticClass:"alert alert-light",staticStyle:{border:"black solid 1px",color:"black",width:"60%",float:"right"}},[n("p",{staticClass:"bolder"},[t._v("Version: "),n("br"),t._v(" "),n("span",{staticStyle:{"font-weight":"normal"}},[t._v(t._s(i.Version))])]),t._v(" "),n("button",{staticClass:"btn btn-outline-dark",staticStyle:{width:"100%",padding:"10px",margin:"0"},on:{click:function(n){return t.conflictTreeView(e.jsonMap)}}},[t._v("\n                  See the project structure containing this dependency\n                ")])])])}))],2)])}))],2):t._e()]),t._v(" "),n("div",{staticClass:"col-sm"},[n("JsonTree",{staticClass:"json-tree-root",attrs:{data:t.dataObj}}),t._v(" "),t.treeview?n("button",{staticClass:"btn btn-outline-dark",staticStyle:{width:"100%","margin-top":"15px"},on:{click:t.fullTreeView}},[t._v("\n        Show the full tree instead\n      ")]):t._e()],1)]),t._v(" "),t._m(3)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jumbotron mt-0"},[n("div",{staticClass:"container-fluid"},[n("h1",{staticClass:"display-4"},[t._v("Visualized Maven Conflicts")]),t._v(" "),n("p",{staticClass:"lead"},[t._v("The simple way to get a good overview of your dependency tree and find version conflicts\n        in your maven builds.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-0"},[n("p",{staticClass:"m-0"},[t._v("Open up your preferred commandline tool, navigate to your project and type")]),t._v(" "),n("pre",{staticClass:"m-0 alert alert-light mt-2 mb-2"},[t._v("mvn dependency:tree -Doutput=/path/to/file.txt")]),t._v(" "),n("p",{staticClass:"m-0"},[t._v("Example:")]),t._v(" "),n("pre",{staticClass:"m-0 alert alert-light mt-2 mb-2"},[t._v("mvn dependency:tree -DoutputFile=temp/mvn_dependency_tree.txt")]),t._v(" "),n("p",[t._v("this will create a temp folder in your project directory with the file you need to upload\n            here.\n            "),n("br"),t._v(" "),n("span",{staticStyle:{"font-weight":"bold"}},[t._v("Required to be the file generated by the previously mentioned command!")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert alert-danger",staticStyle:{"padding-bottom":"0"}},[n("p",[t._v("Copying the tree from your terminal into a text document should not be done, I have not gotten around to\n            write the document parser for that on the backend "),n("span",{staticStyle:{"text-decoration":"underline solid","font-weight":"bold"}},[t._v("yet")]),t._v(". "),n("br"),t._v("\n            If you find any bugs in the app, please let me know on "),n("a",{attrs:{href:"https://github.com/KennethLindalen/MvnDepParser"}},[t._v("github")]),t._v("!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer pt-5 pb-4",staticStyle:{"text-align":"center"}},[t._v("\n    Developed by Kenneth Lindalen "),a("br"),t._v(" "),a("p",[t._v("Contact me")]),t._v(" "),a("a",{attrs:{href:"https://www.linkedin.com/in/kenneth-lindalen-1ba35a187/"}},[a("img",{staticClass:"social-icons",attrs:{src:n("3b01"),alt:""}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/KennethLindalen"}},[a("img",{staticClass:"social-icons",attrs:{src:n("9035"),alt:""}})]),t._v(" "),a("a",{staticClass:"ml-1",attrs:{href:"https://www.buymeacoffee.com/kennethlindalen"}},[a("img",{attrs:{src:n("d12a"),alt:""}})])])}],s=(n("ac1f"),n("5319"),n("1276"),n("7fab")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"text-reader"},[n("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"inputGroupFile01","aria-describedby":"inputGroupFileAddon01"},on:{change:t.loadTextFromFile}}),t._v(" "),n("label",{staticClass:"custom-file-label",attrs:{for:"inputGroupFile01"}},[t._v(t._s(t.Uploadtext))])])},l=[],c=(n("b0c0"),{data:function(){return{Uploadtext:"Upload file..."}},methods:{loadTextFromFile:function(t){var e=this,n=t.target.files[0],a=new FileReader;a.onload=function(t){return e.$emit("load",t.target.result)},a.readAsText(n),this.Uploadtext=n.name}}}),d=c,u=n("2877"),p=Object(u["a"])(d,o,l,!1,null,null,null),f=p.exports,v=n("bc3a"),h=n.n(v),_={name:"App",components:{JsonTree:s["a"],FileReader:f},data:function(){return{file:"",test:[],dataObj:{Hello:"On this website you can upload your maven dependency tree to see whether you have conflicts in your builds."},conflictObj:[],conflictCount:0,errorMsg:"",dataObjCopy:{},treeview:!1}},methods:{sendData:function(){var t,e,n,a=this;t=this.file.split("\n");for(var i=0;i<t.length;i++)t[i]=t[i].replace("\\","\\\\");h.a.post("https://immense-springs-38071.herokuapp.com/",{input:t}).then((function(t){e=t.data.jsonTree,n=t.data.conflictPOJOS,a.dataObj=e,a.dataObjCopy=a.dataObj,a.conflictObj=n,a.conflictCount=n.length}))},conflictTreeView:function(t){this.dataObj=t,this.treeview=!0},fullTreeView:function(){this.dataObj=this.dataObjCopy,this.treeview=!1}}},b=_,m=(n("034f"),Object(u["a"])(b,i,r,!1,null,null,null)),y=m.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(y)}}).$mount("#app")},"85ec":function(t,e,n){},9035:function(t,e,n){t.exports=n.p+"img/github-brands.71a1dcdb.svg"},d12a:function(t,e,n){t.exports=n.p+"img/buymeacoffe.b46b564d.svg"}});
//# sourceMappingURL=app.f3ba9760.js.map