(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(6),i=a.n(n),m=(a(12),a(4)),o=a(3);function c(e){var t=e.employeeList.map((function(e){return l.a.createElement("tr",{key:e.id,id:e.id},l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.firstName),l.a.createElement("td",null,e.lastName),l.a.createElement("td",null,e.department),l.a.createElement("td",null,e.title))}));return l.a.createElement("div",null,l.a.createElement("label",null,"Order By: "),l.a.createElement("label",{className:"radio-inline"},l.a.createElement("input",{onChange:e.runOrderBy,type:"radio",name:"optradio",id:"orderById"}),"Id"),l.a.createElement("label",{className:"radio-inline"},l.a.createElement("input",{onChange:e.runOrderBy,type:"radio",name:"optradio",id:"orderByFirstName"}),"First Name "),l.a.createElement("label",{className:"radio-inline"},l.a.createElement("input",{onChange:e.runOrderBy,type:"radio",name:"optradio",id:"orderByLastName"})," Last Name "),l.a.createElement("form",{className:"form-inline",action:"/action_page.php"},l.a.createElement("label",{htmlFor:"filterByName"},"First and/or last name to be searched (Or part of it):"),l.a.createElement("input",{type:"text",id:"filterByName",name:"filterByName",autoComplete:"off",value:e.filterText,onChange:e.applyFilter})),l.a.createElement("hr",null),l.a.createElement("table",{className:"table table-sm table-dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Id"),l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Department"),l.a.createElement("th",null,"Title"))),l.a.createElement("tbody",null,t)))}var s,d=function(e){var t=Object(r.useState)(e.employeeList),a=Object(o.a)(t,2),n=a[0],i=a[1],s=Object(r.useState)(""),d=Object(o.a)(s,2),u=d[0],p=d[1];return l.a.createElement("div",null,l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",{className:"text-center"},"Employee Directory")),l.a.createElement("article",null,l.a.createElement(c,{employeeList:n,runOrderBy:function(e){var t;t="orderByFirstName"===e.target.id?n.sort((function(e,t){return e.firstName>t.firstName?1:e.firstName<t.firstName?-1:0})):"orderByLastName"===e.target.id?n.sort((function(e,t){return e.lastName>t.lastName?1:e.lastName<t.lastName?-1:0})):n.sort((function(e,t){return e.id>t.id?1:e.id<t.id?-1:0})),i(Object(m.a)(t))},applyFilter:function(t){var a;p(t.target.value);var r=t.target.value.toLowerCase();a=e.employeeList,t.target.value.length>0&&(a=n.filter((function(e){return-1!==e.firstName.toLowerCase().search(r)||-1!==e.lastName.toLowerCase().search(r)}))),i(Object(m.a)(a))},filterText:u})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s=localStorage.getItem("employeeList")?localStorage.getItem("employeeList"):[{id:"empl-1",firstName:"Jhon",lastName:"Snow",department:"Marketing",title:"Manager"},{id:"empl-2",firstName:"Peter",lastName:"Pan",department:"Sales",title:"Sales Manager"},{id:"empl-3",firstName:"Aria",lastName:"Stark",department:"Accounts Payable",title:"Manager"},{id:"empl-4",firstName:"David",lastName:"Benner",department:"Sales",title:"Vendor"},{id:"empl-5",firstName:"Donald",lastName:"Duck",department:"IT",title:"Java Developer"},{id:"empl-6",firstName:"Mickey",lastName:"Mouse",department:"IT",title:"React Developer"},{id:"empl-7",firstName:"Laura",lastName:"Croft",department:"Finance",title:"Director"},{id:"empl-8",firstName:"Bruce",lastName:"Wayne",department:"Finance",title:"Manager"},{id:"empl-9",firstName:"Snow",lastName:"White",department:"IT",title:"Director"}],i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,{employeeList:s})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.2456af7b.chunk.js.map