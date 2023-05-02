(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[102],{2034:function(e,t,a){"use strict";a.r(t),a.d(t,"AddProduct",(function(){return P}));var n=a(43),r=a(13),o=a(14),s=a(16),c=a(15),l=a(0),i=a.n(l),u=a(1254),d=a(1252),p=a(1253),m=a(187),f=a(1257),h=a(811),g=a(808),b=a(790),v=a(804),y=a(97),E=(a(827),a(58)),O=a(802),j=(a(42),a(924)),N=a.n(j),P=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).changeHandler1=function(e){o.setState({status:e.target.value})},o.changeHandler=function(e){o.setState(Object(n.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault(),y.a.post("/user/add_astro_product",{astroid:localStorage.getItem("astroId"),product:o.state.product,category:o.state.category,price:o.state.mrp}).then((function(e){console.log(e.data.data),"success"===e.data.message&&N()("","Product Updated Successfully"),o.props.history.push("/app/products/productlist")})).catch((function(e){console.log(e)}))},o.state={mrp:"",category:"",product:"",categoryList:[],productList:[]},o}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){var e=this;this.props.match.params.id;y.a.get("/user/productbycategory/".concat(this.state.category)).then((function(t){console.log(t.data.data),e.setState({productList:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this;console.log(this.state.category),y.a.get("/admin/getproductcalegory").then((function(t){console.log(t.data.data),e.setState({categoryList:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t;return i.a.createElement("div",null,i.a.createElement(O.a,{breadCrumbTitle:"Add Product",breadCrumbParent:" Product Management",breadCrumbActive:"Add Product"}),i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(p.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Product")),i.a.createElement(p.a,null,i.a.createElement(E.b,{render:function(e){var t=e.history;return i.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/products/productlist")}},"Back")}}))),i.a.createElement(f.a,null,i.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,null,i.a.createElement(p.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(g.a,null,"Category Name"),i.a.createElement(b.a,{required:!0,type:"select",name:"category",placeholder:"Enter Title",value:this.state.category,onChange:this.changeHandler},i.a.createElement("option",null,"Select....."),null===(e=this.state.categoryList)||void 0===e?void 0:e.map((function(e){return i.a.createElement("option",{key:e._id,value:e._id},e.name)})))),i.a.createElement(p.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(g.a,null,"Product Name"),i.a.createElement(b.a,{required:!0,type:"select",name:"product",placeholder:"Enter Title",value:this.state.product,onChange:this.changeHandler},i.a.createElement("option",null,"Select....."),null===(t=this.state.productList)||void 0===t?void 0:t.map((function(e){return i.a.createElement("option",{key:e._id,value:e._id},e.productname)})))),i.a.createElement(p.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(g.a,null,"Selling Price(MRP)"),i.a.createElement(v.a,{type:"text",name:"mrp",placeholder:"Enter Price",value:this.state.mrp,onChange:this.changeHandler}))),i.a.createElement(d.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(m.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),a}(l.Component);t.default=P},804:function(e,t,a){"use strict";var n=a(5),r=a(7),o=a(11),s=a(12),c=a(0),l=a.n(c),i=a(1),u=a.n(i),d=a(4),p=a.n(d),m=a(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,s=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,d=e.addon,h=e.plaintext,g=e.innerRef,b=Object(r.a)(e,f),v=["radio","checkbox"].indexOf(o)>-1,y=new RegExp("\\D","g"),E=u||("select"===o||"textarea"===o?o:"input"),O="form-control";h?(O+="-plaintext",E=u||"input"):"file"===o?O+="-file":"range"===o?O+="-range":v&&(O=d?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=b.size,delete b.size);var j=Object(m.mapToCssModules)(p()(t,i&&"is-invalid",c&&"is-valid",!!s&&"form-control-"+s,O),a);return("input"===E||u&&"function"===typeof u)&&(b.type=o),b.children&&!h&&"select"!==o&&"string"===typeof E&&"select"!==E&&(Object(m.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),l.a.createElement(E,Object(n.a)({},b,{ref:g,className:j,"aria-invalid":i}))},t}(l.a.Component);g.propTypes=h,g.defaultProps={type:"text"},t.a=g},808:function(e,t,a){"use strict";var n=a(5),r=a(7),o=a(0),s=a.n(o),c=a(1),l=a.n(c),i=a(4),u=a.n(i),d=a(3),p=["className","cssModule","hidden","widths","tag","check","size","for"],m=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:m,order:m,offset:m})]),h={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:l.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,o=e.hidden,c=e.widths,l=e.tag,i=e.check,m=e.size,f=e.for,h=Object(r.a)(e,p),g=[];c.forEach((function(t,n){var r=e[t];if(delete h[t],r||""===r){var o,s=!n;if(Object(d.isObject)(r)){var c,l=s?"-":"-"+t+"-";o=b(s,t,r.size),g.push(Object(d.mapToCssModules)(u()(((c={})[o]=r.size||""===r.size,c["order"+l+r.order]=r.order||0===r.order,c["offset"+l+r.offset]=r.offset||0===r.offset,c))),a)}else o=b(s,t,r),g.push(o)}}));var v=Object(d.mapToCssModules)(u()(t,!!o&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,g,!!g.length&&"col-form-label"),a);return s.a.createElement(l,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=g,t.a=v},811:function(e,t,a){"use strict";var n=a(5),r=a(7),o=a(11),s=a(12),c=a(0),l=a.n(c),i=a(1),u=a.n(i),d=a(4),p=a.n(d),m=a(3),f=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,s=e.tag,c=e.innerRef,i=Object(r.a)(e,f),u=Object(m.mapToCssModules)(p()(t,!!o&&"form-inline"),a);return l.a.createElement(s,Object(n.a)({},i,{ref:c,className:u}))},t}(c.Component);g.propTypes=h,g.defaultProps={tag:"form"},t.a=g},827:function(e,t,a){}}]);
//# sourceMappingURL=102.db203ccd.chunk.js.map