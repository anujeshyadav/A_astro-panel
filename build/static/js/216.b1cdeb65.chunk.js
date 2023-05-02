(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[216],{2155:function(e,a,t){"use strict";t.r(a);var l=t(13),n=t(14),r=t(16),m=t(15),i=t(0),c=t.n(i),o=t(1252),u=t(1253),s=t(802),d=t(1254),E=t(1255),b=t(1256),h=t(1257),f=t(821),p=t(187),N=t(1082),v=t(835),g=(t(827),function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement(E.a,null,c.a.createElement(b.a,null,"Basic")),c.a.createElement(h.a,null,c.a.createElement("p",null,"Getting values in and out of form state is easy using formik, you won't have to manage state to make your input a controlled element."),c.a.createElement(N.d,{initialValues:{firstName:"",lastName:"",email:""},onSubmit:function(e){setTimeout((function(){v.f.success(JSON.stringify(e,null,2))}),500)},render:function(){return c.a.createElement(N.c,null,c.a.createElement(f.a,null,c.a.createElement("label",{htmlFor:"firstName"},"First Name"),c.a.createElement(N.b,{className:"form-control",name:"firstName",placeholder:"Jane"})),c.a.createElement(f.a,null,c.a.createElement("label",{htmlFor:"lastName"},"Last Name"),c.a.createElement(N.b,{className:"form-control",name:"lastName",placeholder:"Doe"})),c.a.createElement(f.a,null,c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement(N.b,{className:"form-control",name:"email",placeholder:"jane@acme.com",type:"email"})),c.a.createElement(p.a.Ripple,{color:"primary",type:"submit"},"Submit"))}}),c.a.createElement(v.d,null)))}}]),t}(c.a.Component)),y=t(1241),q=y.c().shape({email:y.e().email("Invalid email address").required("Required"),firstName:y.e().min(2,"Must be longer than 2 characters").max(20,"Nice try, nobody has a first name that long").required("Required"),lastName:y.e().min(2,"Must be longer than 2 characters").max(20,"Nice try, nobody has a last name that long").required("Required")}),x=function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement(E.a,null,c.a.createElement(b.a,null,"Error Msg")),c.a.createElement(h.a,null,c.a.createElement("p",null,"You can show error messages with formik using"," ",c.a.createElement("code",null,"validationSchema")," prop with formik tag."),c.a.createElement(N.d,{initialValues:{email:"",firstName:"",lastName:""},validationSchema:q,render:function(e){e.errors,e.touched;return c.a.createElement(N.c,null,c.a.createElement(f.a,null,c.a.createElement("label",{htmlFor:"firstName"},"First Name"),c.a.createElement(N.b,{className:"form-control",name:"firstName",placeholder:"Jane",type:"text"}),c.a.createElement(N.a,{name:"firstName",component:"div",className:"field-error text-danger"})),c.a.createElement(f.a,null,c.a.createElement("label",{htmlFor:"lastName"},"Last Name"),c.a.createElement(N.b,{className:"form-control",name:"lastName",placeholder:"Doe",type:"text"}),c.a.createElement(N.a,{name:"firstName"},(function(e){return c.a.createElement("div",{className:"field-error text-danger"},e)}))),c.a.createElement(f.a,null,c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement(N.b,{className:"form-control",name:"email",placeholder:"jane@acme.com",type:"email"}),c.a.createElement(N.a,{name:"email"},(function(e){return c.a.createElement("div",{className:"field-error text-danger"},e)}))),c.a.createElement(p.a.Ripple,{color:"primary",className:"mt-1",type:"submit"},"Submit"))}})))}}]),t}(c.a.Component),j=t(808),O=y.c().shape({required:y.e().required("Required"),email:y.e().email("Invalid email").required("Required"),number:y.b().required("Required"),url:y.e().url().required("Required"),date:y.a().required("Required"),minlength:y.e().min(4,"Too Short!").required("Required"),maxlength:y.e().max(5,"Too Long!").required("Required")}),R=function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement(E.a,null,c.a.createElement(b.a,null," Validation")),c.a.createElement(h.a,null,c.a.createElement(N.d,{initialValues:{required:"",email:"",url:"",number:"",date:"",minlength:"",maxlength:""},validationSchema:O},(function(e){var a=e.errors,t=e.touched;return c.a.createElement(N.c,null,c.a.createElement(f.a,{className:"my-3"},c.a.createElement(j.a,{for:"required"},"Name"),c.a.createElement(N.b,{name:"required",id:"required",className:"form-control ".concat(a.required&&t.required&&"is-invalid")}),a.required&&t.required?c.a.createElement("div",{className:"invalid-tooltip mt-25"},a.required):null),c.a.createElement(f.a,{className:"my-3"},c.a.createElement(j.a,{for:"email"},"Email"),c.a.createElement(N.b,{type:"email",name:"email",id:"email",className:"form-control ".concat(a.email&&t.email&&"is-invalid")}),a.email&&t.email?c.a.createElement("div",{className:"invalid-tooltip mt-25"},a.email):null),c.a.createElement(f.a,{className:"my-3"},c.a.createElement(j.a,{for:"url"},"Website URL"),c.a.createElement(N.b,{name:"url",id:"url",className:"form-control ".concat(a.url&&t.url&&"is-invalid")}),a.url&&t.url?c.a.createElement("div",{className:"invalid-tooltip mt-25"},a.url):null),c.a.createElement(f.a,{className:"my-3"},c.a.createElement(j.a,{for:"number"},"Number"),c.a.createElement(N.b,{name:"number",id:"number",className:"form-control ".concat(a.number&&t.number&&"is-invalid")}),a.number&&t.number?c.a.createElement("div",{className:"invalid-tooltip mt-25"},a.number):null),c.a.createElement(f.a,{className:"my-3"},c.a.createElement(j.a,{for:"date"},"Date"),c.a.createElement(N.b,{type:"date",name:"date",id:"date",className:"form-control ".concat(a.date&&t.date&&"is-invalid")}),a.date&&t.date?c.a.createElement("div",{className:"invalid-tooltip mt-25"},a.date):null),c.a.createElement(f.a,{className:"my-3"},c.a.createElement(j.a,{for:"minlength"},"Min Length (Minimum 4 Characters)"),c.a.createElement(N.b,{name:"minlength",id:"minlength",className:"form-control ".concat(a.minlength&&t.minlength&&"is-invalid")}),a.minlength&&t.minlength?c.a.createElement("div",{className:"invalid-tooltip mt-25"},a.minlength):null),c.a.createElement(f.a,{className:"my-3"},c.a.createElement(j.a,{for:"maxlength"},"Max Length (Maximum 5 Characters)"),c.a.createElement(N.b,{name:"maxlength",id:"maxlength",className:"form-control ".concat(a.maxlength&&t.maxlength&&"is-invalid")}),a.maxlength&&t.maxlength?c.a.createElement("div",{className:"invalid-tooltip mt-25"},a.maxlength):null),c.a.createElement(p.a.Ripple,{color:"primary",type:"submit"},"Submit"))}))))}}]),t}(c.a.Component),k=function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{breadCrumbTitle:"Formik",breadCrumbParent:"Form",breadCrumbActive:"Formik"}),c.a.createElement(o.a,null,c.a.createElement(u.a,{lg:"6",md:"12"},c.a.createElement(g,null)),c.a.createElement(u.a,{lg:"6",md:"12"},c.a.createElement(x,null)),c.a.createElement(u.a,{sm:"12"},c.a.createElement(R,null))))}}]),t}(c.a.Component);a.default=k}}]);
//# sourceMappingURL=216.b1cdeb65.chunk.js.map