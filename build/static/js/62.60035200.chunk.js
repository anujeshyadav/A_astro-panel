/*! For license information please see 62.60035200.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[62],{1699:function(e,t,a){},2172:function(e,t,a){"use strict";a.r(t);var n=a(27),r=a(0),o=a.n(r),i=a(1255),l=a(1253),c=a(1254),s=a(188),u=a(819),d=a(803),m=a(807),h=a(1009),f=a(61),v=a(13),p=a(14),g=a(16),y=a(15),b=(a(1699),a(48)),E=a(572),w=a.n(E),O=(a(890),function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={},n}return Object(p.a)(a,[{key:"render",value:function(){return console.log("props value",this.props.roomChatData),o.a.createElement(o.a.Fragment,null,this.props.roomChatData.length?this.props.roomChatData.map((function(e,t){var a,n;return o.a.createElement(o.a.Fragment,null,"user"===e.type?o.a.createElement("div",{class:"message me"},o.a.createElement("div",{class:"message-body"},e.msg)):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"message"},o.a.createElement("div",{class:"message-body"},o.a.createElement(l.a,null,o.a.createElement(c.a,{lg:"4"},o.a.createElement("img",{style:{borderRadius:"50%"},width:"40px",height:"40px",src:null===e||void 0===e||null===(a=e.userid)||void 0===a?void 0:a.userimg[0]})),o.a.createElement(c.a,{lg:"8"},o.a.createElement(l.a,null,o.a.createElement("h6",{className:"container"},o.a.createElement("b",null," ",null===e||void 0===e||null===(n=e.userid)||void 0===n?void 0:n.fullname))),o.a.createElement(l.a,null,o.a.createElement("h6",{className:"container"},e.msg))))))))})).reverse():null)}}]),a}(o.a.Component));function j(){j=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(I){c=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),l=new k(r||[]);return n(i,"_invoke",{value:w(e,a,l)}),i}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(I){return{type:"throw",arg:I}}}e.wrap=s;var d={};function m(){}function h(){}function f(){}var v={};c(v,o,(function(){return this}));var p=Object.getPrototypeOf,g=p&&p(p(N([])));g&&g!==t&&a.call(g,o)&&(v=g);var y=f.prototype=m.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;n(this,"_invoke",{value:function(n,o){function i(){return new t((function(r,i){!function n(r,o,i,l){var c=u(e[r],e,o);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}})}function w(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return L()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var l=O(i,a);if(l){if(l===d)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=u(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}function O(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),d;var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=f,n(y,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:h,configurable:!0}),h.displayName=c(f,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),c(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new E(s(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),c(y,l,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=N,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),S(a),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;S(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:N(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),d}},e}var x=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).handleliveChat=function(){setInterval((function(){var e=localStorage.getItem("astroId");b.a.get("/user/liveChat_msgbyastro/".concat(e)).then((function(e){n.setState({roomChatData:null===e||void 0===e?void 0:e.data.data})})).catch((function(e){console.log(e)}))}),2e3)},n.componentDidMount=function(){n.handleliveChat(),console.log(n.props);var e=localStorage.getItem("astroId");b.a.get("/admin/getoneAstro/".concat(e)).then((function(e){var t;console.log(e.data.data),n.setState({Activeastro:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data})})).catch((function(e){console.log(e)}));JSON.parse(localStorage.getItem("user_id"))},n.handlechat=function(){console.log(n.state.roomId),b.a.get("/user/allchatwithuser/".concat(n.state.roomId)).then((function(e){var t;console.log(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data),!0===e.data.status&&n.setState({roomChatData:null===e||void 0===e?void 0:e.data.data})})).catch((function(e){console.log(e)}))},n.submitHandler=function(){var e=Object(f.a)(j().mark((function e(t,a,r){var o;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),o=localStorage.getItem("astroId"),JSON.parse(localStorage.getItem("user_id")),""!=n.state.msg?{astroid:o,msg:n.state.msg}:w()("Input filed is blank","Fill it before send");case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),n.handleChange=function(e){n.setState({msg:e.target.value})},n.countRef=o.a.createRef(),n.apicall=o.a.createRef(),n.callmsg=o.a.createRef(),n.state={Index:"",data:{},sendbutton:"",Activeastro:{},CurrentRoomid:"",roomChatData:[],userId:"",astroId:"",msg:"hello",roomId:""},n}return Object(p.a)(a,[{key:"render",value:function(){var e,t;return o.a.createElement("div",{className:""},o.a.createElement("div",{class:"app rt-chats"},o.a.createElement("div",{class:"messages"},o.a.createElement("div",{className:"chat-header"},o.a.createElement("p",null,o.a.createElement("span",null,o.a.createElement("img",{src:null===(e=this.state.Activeastro)||void 0===e?void 0:e.img,className:"app-img",alt:""})),null===(t=this.state.Activeastro)||void 0===t?void 0:t.fullname)),o.a.createElement("div",{class:"messages-history"},o.a.createElement(O,{roomChatData:this.state.roomChatData.length>0?this.state.roomChatData:[]})))))}}]),a}(o.a.Component);a(889);t.default=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],f=t[1],v=Object(r.useState)(""),p=Object(n.a)(v,2),g=p[0],y=p[1],E=Object(r.useState)(""),w=Object(n.a)(E,2),O=w[0],j=w[1],S=Object(r.useState)(""),k=Object(n.a)(S,2),N=k[0],L=k[1],I=Object(r.useState)(""),C=Object(n.a)(I,2),_=C[0],D=C[1],F=Object(r.useState)(!1),T=Object(n.a)(F,2),P=T[0],A=(T[1],Object(r.useState)(!1)),M=Object(n.a)(A,2),G=M[0],R=M[1],z=Object(r.useState)(!1),J=Object(n.a)(z,2),Y=(J[0],J[1],Object(r.useState)()),H=Object(n.a)(Y,2),V=(H[0],H[1],{appId:"7d1f07c76f9d46be86bc46a791884023",channel:O,enableVideo:!0,token:_&&_||localStorage.getItem("astrotokenforlivestream"),uid:0,role:"host"});Object(r.useEffect)((function(){var e=function(){window.history.pushState(null,null,window.location.pathname)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]);var q={EndCall:function(){f(!1);localStorage.getItem("astroId");b.a.get("/user/disConnectLiveStream/".concat(g)).then((function(e){console.log(e.data),R(!1)})).catch((function(e){console.log(e.response)}))}};return o.a.createElement("div",{className:"m-0 livestream"},o.a.createElement(i.a,null,o.a.createElement(l.a,null,o.a.createElement(c.a,{lg:"4",md:"4",sm:"4"},o.a.createElement("div",{className:"container mt-2 mb-1"},o.a.createElement(s.a,{onClick:function(e){return function(e){e.preventDefault();var t={astroAccount:localStorage.getItem("astroId"),status:!0};"Active"===N&&b.a.post("/user/astroLiveStreaming",t).then((function(e){var t,a,n,r,o,i,l,c,s,u,d,m,h,v,p;(console.log(e.data),"already exists"===e.data.msg)&&(D(null===(r=e.data)||void 0===r?void 0:r.token),y(null===(o=e.data)||void 0===o?void 0:o._id),localStorage.setItem("liveid",null===(i=e.data)||void 0===i?void 0:i._id),j(null===(l=e.data)||void 0===l?void 0:l.channelName),R(!0));"success"===(null===(t=e.data)||void 0===t?void 0:t.message)&&(localStorage.setItem("liveid",null===(c=e.data)||void 0===c||null===(s=c.data)||void 0===s?void 0:s._id),D(null===(u=e.data)||void 0===u||null===(d=u.data)||void 0===d?void 0:d.token),j(null===(m=e.data)||void 0===m||null===(h=m.data)||void 0===h?void 0:h.channelName),y(null===(v=e.data)||void 0===v||null===(p=v.data)||void 0===p?void 0:p._id),R(!0));localStorage.setItem("astrotokenforlivestream",null===(a=e.data)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.token),f(!0)})).catch((function(e){var t;console.log(null===(t=e.response)||void 0===t?void 0:t.data)})),"Deactive"===N&&localStorage.removeItem("astrotokenforlivestream")}(e)},color:"success"},"liveStreaming Now"))),o.a.createElement(c.a,null,o.a.createElement("div",{className:"container mt-1 mb-1"},o.a.createElement(l.a,null,!1===G?o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{className:"mt-1"},o.a.createElement(u.a,{check:!0},o.a.createElement(d.a,{value:"Active",onClick:function(e){L(e.target.value)},name:"radio1",type:"radio"})," ",o.a.createElement(m.a,{check:!0},"Online")))):null,o.a.createElement(c.a,{className:"mt-1"},o.a.createElement(u.a,{check:!0},o.a.createElement(d.a,{value:"Deactive",onClick:function(e){L(e.target.value),function(){var e=localStorage.getItem("liveid");console.log(e),b.a.get("/user/disConnectLiveStream/".concat(e)).then((function(e){console.log(e.data),R(!1),localStorage.removeItem("liveid"),window.location.replace("/")})).catch((function(e){console.log(e.response)}))}()},name:"radio1",type:"radio"})," ",o.a.createElement(m.a,{check:!0},"Offline"))))))),o.a.createElement("div",{className:"mt-1 mb-1"},a&&"Active"===N?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{style:{display:"flex",width:"100%",height:"80vh",border:"1px solid black",borderRadius:"8px"},className:"maindivstream container mt-3 mb-3"},o.a.createElement("div",{style:{marginLeft:"-10px",display:"flex",width:"60vw",height:"80vh",borderRadius:"8px"},className:""},o.a.createElement(h.a,{rtcProps:V,callbacks:q})),o.a.createElement("div",{style:{display:"flex",width:"30vw",height:"80vh"}},o.a.createElement("div",null,o.a.createElement(x,null)))))):o.a.createElement(o.a.Fragment,null,!0===P?o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{onClick:function(){return f(!0)},color:"success"},"liveStreams Now")):null))))}},807:function(e,t,a){"use strict";var n=a(5),r=a(7),o=a(0),i=a.n(o),l=a(1),c=a.n(l),s=a(4),u=a.n(s),d=a(3),m=["className","cssModule","hidden","widths","tag","check","size","for"],h=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:h,order:h,offset:h})]),v={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},p={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,o=e.hidden,l=e.widths,c=e.tag,s=e.check,h=e.size,f=e.for,v=Object(r.a)(e,m),p=[];l.forEach((function(t,n){var r=e[t];if(delete v[t],r||""===r){var o,i=!n;if(Object(d.isObject)(r)){var l,c=i?"-":"-"+t+"-";o=g(i,t,r.size),p.push(Object(d.mapToCssModules)(u()(((l={})[o]=r.size||""===r.size,l["order"+c+r.order]=r.order||0===r.order,l["offset"+c+r.offset]=r.offset||0===r.offset,l))),a)}else o=g(i,t,r),p.push(o)}}));var y=Object(d.mapToCssModules)(u()(t,!!o&&"sr-only",!!s&&"form-check-label",!!h&&"col-form-label-"+h,p,!!p.length&&"col-form-label"),a);return i.a.createElement(c,Object(n.a)({htmlFor:f},v,{className:y}))};y.propTypes=v,y.defaultProps=p,t.a=y},819:function(e,t,a){"use strict";var n=a(5),r=a(7),o=a(0),i=a.n(o),l=a(1),c=a.n(l),s=a(4),u=a.n(s),d=a(3),m=["className","cssModule","row","disabled","check","inline","tag"],h={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.row,l=e.disabled,c=e.check,s=e.inline,h=e.tag,f=Object(r.a)(e,m),v=Object(d.mapToCssModules)(u()(t,!!o&&"row",c?"form-check":"form-group",!(!c||!s)&&"form-check-inline",!(!c||!l)&&"disabled"),a);return"fieldset"===h&&(f.disabled=l),i.a.createElement(h,Object(n.a)({},f,{className:v}))};f.propTypes=h,f.defaultProps={tag:"div"},t.a=f},889:function(e,t,a){},890:function(e,t,a){}}]);
//# sourceMappingURL=62.60035200.chunk.js.map