(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Grade"],{"172c":function(t,a,e){"use strict";var s=e("2189"),n=e.n(s);n.a},"20a3":function(t,a,e){"use strict";var s=e("a951"),n=e.n(s);n.a},2189:function(t,a,e){},2644:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("b-navbar",{attrs:{toggleable:"sm",type:"light",variant:"light"}},[s("b-navbar-brand",{attrs:{to:{name:t.routeName}}},[s("b-img",{staticClass:"r-img",attrs:{src:e("cf05"),alt:"Logo",fluid:""}})],1),s("b-navbar-toggle",{attrs:{target:"user-collapse"}}),s("b-collapse",{attrs:{id:"user-collapse","is-nav":""}},[s("b-nav-text",[t._v("ROVOFIC DESIMGH")]),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[s("font-awesome-icon",{style:{color:"#201c71"},attrs:{icon:"user"}}),t._v(" Conectado: "+t._s(t.user)+" ")]},proxy:!0}])},[s("b-dropdown-item",{attrs:{href:"#"}},[t._v("Perfil")]),s("b-dropdown-item",{attrs:{to:{name:"Login"}}},[t._v("Salir")])],1)],1)],1)],1)},n=[],i={name:"NavbarTopDemo",data:function(){return{user:"Fabricio"}},computed:{routeName:function(){var t="";switch(this.$store.getters.getCurrentRole){case"Estudiante":t="StudentHome";break;case"Docente":t="TeacherHome";break}return t}}},r=i,o=(e("cb4f"),e("2877")),c=Object(o["a"])(r,s,n,!1,null,"e0695f28",null);a["a"]=c.exports},3832:function(t,a,e){"use strict";var s=e("a0b2"),n=e.n(s);n.a},"3af7":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"a-class"},[e("MainNav"),e("b-row",{staticClass:"a-view"},[e("b-col",{attrs:{md:t.sidebar.size}},[e("GradeNav",{on:{selected:function(a){return t.setSidebarOption(a)},size:function(a){return t.setSidebarSize(a)}}})],1),e("b-col",{attrs:{md:"9"}},[1==t.sidebar.opt?e("PeopleList",{attrs:{people:t.students}}):t._e(),2==t.sidebar.opt?e("ClassList",{attrs:{people:t.areas}}):t._e()],1)],1)],1)},n=[],i=e("2644"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-navbar",{staticClass:"a-sidebar",attrs:{id:"sidebar"}},[e("b-navbar-nav",{staticClass:"a-sidebar-nav"},[e("b-nav-item",[e("b-button",{staticStyle:{"font-size":"20px",margin:"auto"},attrs:{variant:"light"},on:{click:function(a){return t.toggleShow()}}},[e("font-awesome-icon",{attrs:{icon:"bars"}})],1)],1),e("b-nav-item",[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2",modifiers:{"collapse-2":!0}}],attrs:{variant:"light"},on:{click:function(a){return t.$emit("selected",1)}}},[e("font-awesome-icon",{staticStyle:{"font-size":"20px",margin:"auto"},attrs:{icon:"users"}}),t.collapsed?t._e():e("span",[t._v("Estudiantes")])],1)],1),e("b-nav-item",[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2",modifiers:{"collapse-2":!0}}],attrs:{variant:"light"},on:{click:function(a){return t.$emit("selected",2)}}},[e("font-awesome-icon",{staticStyle:{"font-size":"20px",margin:"auto"},attrs:{icon:"chalkboard-teacher"}}),t.collapsed?t._e():e("span",[t._v("Asignaturas")])],1)],1)],1)],1)},o=[],c={data:function(){return{collapsed:!0}},methods:{toggleShow:function(){this.collapsed=!this.collapsed;var t="";t=this.collapsed?"2":"3",this.$emit("size",t)}}},l=c,u=(e("172c"),e("2877")),b=Object(u["a"])(l,r,o,!1,null,"1df2d042",null),d=b.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",[e("h1",{staticClass:"a-title"},[e("font-awesome-icon",{staticStyle:{"font-size":"20px",margin:"auto"},attrs:{icon:"users"}}),e("span",[t._v("Listado de estudiantes")])],1),e("b-button",{staticClass:"a-button-new",attrs:{variant:"primary",block:""}},[t._v("Nueva")]),t._l(t.people,(function(a){return e("b-list-group-item",{key:a.id,staticClass:"flex-column align-items-start",attrs:{href:"#"}},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("div",{staticClass:"d-flex w-100 a-people"},[e("b-avatar",{staticClass:"a-avatar",attrs:{text:a.short,size:"2em"}}),e("h5",{staticClass:"mb-1"},[t._v(t._s(a.name))])],1),e("b-button",{attrs:{variant:"light"}},[e("font-awesome-icon",{staticStyle:{"font-size":"20px",margin:"auto",color:"red"},attrs:{icon:"trash-alt"}})],1)],1)])}))],2)},m=[],p={name:"PeopleList",props:{people:Array}},v=p,h=(e("20a3"),Object(u["a"])(v,f,m,!1,null,"20c60d60",null)),g=h.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",[e("h1",{staticClass:"a-title"},[e("font-awesome-icon",{staticStyle:{"font-size":"20px",margin:"auto"},attrs:{icon:"chalkboard-teacher"}}),e("span",[t._v("Asignaturas")])],1),e("b-button",{staticClass:"a-button-new",attrs:{variant:"primary",block:""}},[t._v("Nueva")]),t._l(t.people,(function(a){return e("b-list-group-item",{key:a.id,staticClass:"flex-column align-items-start",attrs:{href:"#"}},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("div",{staticClass:"d-flex w-100 a-people"},[e("b-avatar",{staticClass:"a-avatar",attrs:{text:a.short,size:"2em"}}),e("h5",{staticClass:"mb-1"},[t._v(t._s(a.name))])],1),e("b-button",{attrs:{variant:"light"}},[e("font-awesome-icon",{staticStyle:{"font-size":"20px",margin:"auto",color:"red"},attrs:{icon:"trash-alt"}})],1)],1)])}))],2)},_=[],C={name:"PeopleList",props:{people:Array}},x=C,S=(e("494b"),Object(u["a"])(x,w,_,!1,null,"529012e5",null)),y=S.exports,N={name:"Grade",components:{MainNav:i["a"],GradeNav:d,PeopleList:g,ClassList:y},data:function(){return{sidebar:{size:"2",opt:1},students:[{id:1,name:"Estudiante 1 Nombre",short:"E1N"},{id:2,name:"Estudiante 2 Nombre",short:"E2N"},{id:3,name:"Estudiante 3 Nombre",short:"E3N"}],areas:[{id:1,name:"Matemáticas",short:"M"},{id:2,name:"Ciencias",short:"C"},{id:3,name:"Sociales",short:"S"}]}},methods:{setSidebarSize:function(t){this.sidebar.size=t},setSidebarOption:function(t){this.sidebar.opt=t}}},z=N,k=(e("3832"),e("803c"),Object(u["a"])(z,s,n,!1,null,"d4444574",null));a["default"]=k.exports},"494b":function(t,a,e){"use strict";var s=e("58c5"),n=e.n(s);n.a},"4d99":function(t,a,e){},"58c5":function(t,a,e){},"803c":function(t,a,e){"use strict";var s=e("f4e2"),n=e.n(s);n.a},a0b2:function(t,a,e){},a951:function(t,a,e){},cb4f:function(t,a,e){"use strict";var s=e("4d99"),n=e.n(s);n.a},cf05:function(t,a,e){t.exports=e.p+"img/logo.51947e31.png"},f4e2:function(t,a,e){}}]);
//# sourceMappingURL=Grade.13470fa7.js.map