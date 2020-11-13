(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,c){},34:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),l=c(19),r=c.n(l),o=(c(26),c(2)),i=(c(33),c(34),c(4)),j=c(5),d=c.n(j),b=function(e){var t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],l=c[1];return n.sort((function(e,t){return e.type<t.type?-1:t.type>e.type?1:0})),Object(a.useEffect)((function(){d.a.get("http://localhost:8000/api/pets").then((function(e){return l(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),Object(s.jsxs)("div",{className:"col-6 mx-auto",children:[Object(s.jsxs)("div",{className:"d-flex my-4",children:[Object(s.jsx)("h1",{className:"mx-auto text-center",children:"Pet Shelter"}),Object(s.jsx)(o.a,{className:"btn btn-secondary",to:"/pets/new",children:"Add a Pet to the Shelter"})]}),Object(s.jsx)("h2",{className:"mx-auto text-center",children:"These pets are looking for a good home"}),Object(s.jsxs)("table",{className:"table-hover col-12 mx-auto border p-2",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Type"}),Object(s.jsx)("th",{children:"Actions"})]})}),Object(s.jsx)("tbody",{children:n.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.name}),Object(s.jsx)("td",{children:e.type}),Object(s.jsxs)("td",{children:[Object(s.jsx)(o.a,{className:"btn btn-info",to:"/pets/".concat(e._id),children:"Details"}),Object(s.jsx)(o.a,{className:"btn btn-primary",to:"/pets/".concat(e._id,"/edit"),children:"Edit"})]})]},t)}))})]})]})},h=c(6),u=c(8),m=function(e){var t=e.form,c=e.errors,a=e.handleInputChange,n=e.handleSubmit,l=e.submitValue;return Object(s.jsxs)("form",{onSubmit:n,className:"col-6 mx-auto border",children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Pet Name:"}),Object(s.jsx)("input",{type:"text",name:"name",value:t.name,className:"form-control",onChange:a}),Object(s.jsx)("span",{className:"text-danger",children:c.name?c.name.message:""})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Pet Type:"}),Object(s.jsx)("input",{type:"text",name:"type",value:t.type,className:"form-control",onChange:a}),Object(s.jsx)("span",{className:"text-danger",children:c.type?c.type.message:""})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Pet Description:"}),Object(s.jsx)("input",{type:"text",name:"desc",value:t.desc,className:"form-control",onChange:a}),Object(s.jsx)("span",{className:"text-danger",children:c.desc?c.desc.message:""})]}),Object(s.jsx)("h3",{children:"Skills (optional)"}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Skill 1:"}),Object(s.jsx)("input",{type:"text",name:"skill1",value:t.skill1,className:"form-control",onChange:a})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Skill 2:"}),Object(s.jsx)("input",{type:"text",name:"skill2",value:t.skill2,className:"form-control",onChange:a})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Skill 3:"}),Object(s.jsx)("input",{type:"text",name:"skill3",value:t.skill3,className:"form-control",onChange:a})]}),Object(s.jsx)("input",{type:"submit",value:l,className:"btn btn-primary"})]})},x=function(e){var t=Object(a.useState)({name:"",type:"",desc:"",skill1:"",skill2:"",skill3:""}),c=Object(i.a)(t,2),n=c[0],l=c[1],r=Object(a.useState)({name:"",type:"",desc:""}),j=Object(i.a)(r,2),b=j[0],x=j[1];return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"col-6 mx-auto my-4 d-flex",children:[Object(s.jsx)("h1",{className:"mx-auto text-center",children:"Pet Shelter"}),Object(s.jsx)(o.a,{className:"btn btn-success",to:"/",children:"Back to Home"})]}),Object(s.jsx)("h2",{className:"mx-auto text-center",children:"Know a pet needing a home?"}),Object(s.jsx)(m,{form:n,handleInputChange:function(e){l(Object(u.a)(Object(u.a)({},n),{},Object(h.a)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault(),d.a.post("http://localhost:8000/api/create/pets",n).then((function(e){e.data.results?Object(o.c)("/"):(console.log("there were errors!"),x(e.data))})).catch((function(e){return console.log(e)}))},errors:b,submitValue:"Add Pet"})]})},O=function(e){var t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],l=c[1],r=Object(a.useState)(!1),j=Object(i.a)(r,2),b=j[0],h=j[1];Object(a.useEffect)((function(){d.a.get("http://localhost:8000/api/pets/".concat(e.id)).then((function(e){return l(e.data.results)})).catch((function(e){return console.log(e)}))}),[e]);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"col-6 mx-auto my-4 d-flex",children:[Object(s.jsx)("h1",{className:"mx-auto text-center",children:"Pet Shelter"}),Object(s.jsx)(o.a,{className:"btn btn-success",to:"/",children:"Back to Home"})]}),Object(s.jsxs)("h2",{className:"mx-auto text-center",children:["Details about ",n.name]}),Object(s.jsx)("div",{className:"card col-6 mx-auto",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsxs)("div",{className:"card-title",children:["Name: ",n.name]}),Object(s.jsxs)("p",{className:"card-text",children:["Type: ",n.type]}),Object(s.jsxs)("p",{className:"card-text",children:["Description: ",n.desc]}),Object(s.jsx)("p",{className:"font-weight-bold",children:"Skills:"}),Object(s.jsx)("p",{className:"card-text",children:n.skill1}),Object(s.jsx)("p",{className:"card-text",children:n.skill2}),Object(s.jsx)("p",{className:"card-text",children:n.skill3})]})}),Object(s.jsx)("button",{className:"btn btn-danger",onClick:function(){var e,t;e=n._id,t=n.name,d.a.delete("http://localhost:8000/api/pets/adopt/".concat(e)).then((function(e){e.data.results&&(h(!b),Object(o.c)("/"),console.log("".concat(t," was adopted! Thank you!")))})).catch((function(e){return console.log(e)}))},children:"Adopt Pet"})]})},p=function(e){var t=Object(a.useState)({name:"",type:"",desc:"",skill1:"",skill2:"",skill3:""}),c=Object(i.a)(t,2),n=c[0],l=c[1],r=Object(a.useState)({name:"",type:"",desc:""}),j=Object(i.a)(r,2),b=j[0],x=j[1];Object(a.useEffect)((function(){d.a.get("http://localhost:8000/api/pets/".concat(e.id)).then((function(e){return l(e.data.results)})).catch((function(e){return console.log(e)}))}),[e]);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"d-flex my-4 col-6 mx-auto",children:[Object(s.jsx)("h1",{className:"mx-auto text-center",children:"Pet Shelter"}),Object(s.jsx)(o.a,{className:"btn btn-success",to:"/",children:"Back to Home"})]}),Object(s.jsxs)("h2",{className:"mx-auto text-center",children:["Edit ",n.name]}),Object(s.jsx)("div",{children:Object(s.jsx)(m,{form:n,errors:b,value:n.name,handleInputChange:function(e){l(Object(u.a)(Object(u.a)({},n),{},Object(h.a)({},e.target.name,e.target.value)))},submitValue:"Update Pet",handleSubmit:function(t){t.preventDefault(),d.a.put("http://localhost:8000/api/pets/update/".concat(e.id),n).then((function(e){e.data.results?Object(o.c)("/"):x(e.data)})).catch((function(e){return console.log(e)}))}})})]})};var f=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(o.b,{children:[Object(s.jsx)(b,{path:"/"}),Object(s.jsx)(x,{path:"/pets/new"}),Object(s.jsx)(O,{path:"/pets/:id"}),Object(s.jsx)(p,{path:"/pets/:id/edit"})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),s(e),a(e),n(e),l(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),N()}},[[52,1,2]]]);
//# sourceMappingURL=main.5647b936.chunk.js.map