/*! For license information please see 81.a54f14b4.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[81,142,143],{1354:function(t,e,a){"use strict";a.r(e);var n=a(13),o=a(14),r=a(16),i=a(15),l=a(0),s=a.n(l),c=(a(890),function(t){Object(r.a)(a,t);var e=Object(i.a)(a);function a(t){var o,r;return Object(n.a)(this,a),(r=e.call(this,t)).state={Index:"",connecting_usrid:"",userChatList:null===(o=r.props)||void 0===o?void 0:o.userChatList,roomid:""},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("CurrentChat_userid");this.setState({connecting_usrid:t})}},{key:"render",value:function(){var t=this,e=this.props.userChatList;return s.a.createElement("ul",{className:"listofchat",style:{listStyle:"none",marginLeft:"none",cursor:"pointer"}},e&&e.length?null===e||void 0===e?void 0:e.map((function(e,a){var n,o,r,i;return t.state.connecting_usrid===(null===e||void 0===e||null===(n=e.userid)||void 0===n?void 0:n._id)?s.a.createElement("li",{key:a,className:"newmainheaading mt-1 mb-1",style:{backgroundColor:"".concat(t.state.connecting_usrid===(null===e||void 0===e||null===(o=e.userid)||void 0===o?void 0:o._id)?"#ef9014":"white"),borderRadius:"8px",height:"60px"},onClick:function(){t.props.getChatRoomId(e,a),t.setState({Index:a})}},s.a.createElement("div",{className:"imglf",onClick:function(){return t.props.getChatRoomId(e,a)}},s.a.createElement("img",{src:null===e||void 0===e||null===(r=e.userid)||void 0===r?void 0:r.userimg[0],className:"app-img",alt:""})),s.a.createElement("div",{className:"lst-con mt-1"},s.a.createElement("h5",null,null===e||void 0===e||null===(i=e.userid)||void 0===i?void 0:i.fullname),s.a.createElement("p",null,e.msg.slice(0,25)))):null})):null)}}]),a}(s.a.Component));e.default=c},1355:function(t,e,a){"use strict";a.r(e);var n=a(13),o=a(14),r=a(16),i=a(15),l=a(0),s=a.n(l),c=(a(890),function(t){Object(r.a)(a,t);var e=Object(i.a)(a);function a(t){var o;return Object(n.a)(this,a),(o=e.call(this,t)).state={},o}return Object(o.a)(a,[{key:"render",value:function(){var t;return s.a.createElement(s.a.Fragment,null,(null===(t=this.props.roomChatData)||void 0===t?void 0:t.length)?this.props.roomChatData.map((function(t,e){return s.a.createElement(s.a.Fragment,null,"astrologer"===t.type?s.a.createElement("div",{class:"message me"},s.a.createElement("div",{class:"message-body"},null===t||void 0===t?void 0:t.msg)):s.a.createElement("div",{className:"message"},s.a.createElement("div",{class:"message-body"},null===t||void 0===t?void 0:t.msg)))})).reverse():null)}}]),a}(s.a.Component));e.default=c},1694:function(t,e){t.exports="data:image/png;base64,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"},2024:function(t,e,a){"use strict";a.r(e);var n=a(61),o=a(13),r=a(14),i=a(186),l=a(16),s=a(15),c=a(0),u=a.n(c),d=a(983),h=a(1255),v=a(1256),m=a(189),f=(a(890),a(1694)),g=a.n(f),p=a(1354),y=a(1355),I=(a(802),a(42)),E=(a(43),a(129)),A=a.n(E),w=a(175);function C(){C=function(){return t};var t={},e=Object.prototype,a=e.hasOwnProperty,n=Object.defineProperty||function(t,e,a){t[e]=a.value},o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,a){return t[e]=a}}function c(t,e,a,o){var r=e&&e.prototype instanceof h?e:h,i=Object.create(r.prototype),l=new b(o||[]);return n(i,"_invoke",{value:A(t,a,l)}),i}function u(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(S){return{type:"throw",arg:S}}}t.wrap=c;var d={};function h(){}function v(){}function m(){}var f={};s(f,r,(function(){return this}));var g=Object.getPrototypeOf,p=g&&g(g(N([])));p&&p!==e&&a.call(p,r)&&(f=p);var y=m.prototype=h.prototype=Object.create(f);function I(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var o;n(this,"_invoke",{value:function(n,r){function i(){return new e((function(o,i){!function n(o,r,i,l){var s=u(t[o],t,r);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==typeof d&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,l)}),(function(t){n("throw",t,i,l)})):e.resolve(d).then((function(t){c.value=t,i(c)}),(function(t){return n("throw",t,i,l)}))}l(s.arg)}(n,r,o,i)}))}return o=o?o.then(i,i):i()}})}function A(t,e,a){var n="suspendedStart";return function(o,r){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw r;return M()}for(a.method=o,a.arg=r;;){var i=a.delegate;if(i){var l=w(i,a);if(l){if(l===d)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var s=u(t,e,a);if("normal"===s.type){if(n=a.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(n="completed",a.method="throw",a.arg=s.arg)}}}function w(t,e){var a=e.method,n=t.iterator[a];if(void 0===n)return e.delegate=null,"throw"===a&&t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method)||"return"!==a&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+a+"' method")),d;var o=u(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function N(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:M}}function M(){return{value:void 0,done:!0}}return v.prototype=m,n(y,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:v,configurable:!0}),v.displayName=s(m,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,l,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},I(E.prototype),s(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,a,n,o,r){void 0===r&&(r=Promise);var i=new E(c(e,a,n,o),r);return t.isGeneratorFunction(a)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},I(y),s(y,l,"Generator"),s(y,r,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),a=[];for(var n in e)a.push(n);return a.reverse(),function t(){for(;a.length;){var n=a.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(a,n){return i.type="throw",i.arg=t,e.next=a,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],i=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var l=a.call(r,"catchLoc"),s=a.call(r,"finallyLoc");if(l&&s){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(l){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=t,i.arg=e,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),O(a),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var n=a.completion;if("throw"===n.type){var o=n.arg;O(a)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:N(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),d}},t}var D=function(t){Object(l.a)(a,t);var e=Object(s.a)(a);function a(t){var r;return Object(o.a)(this,a),(r=e.call(this,t)).handleaddBal=Object(n.a)(C().mark((function t(){var e,a,n;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=localStorage.getItem("astroId"),a=localStorage.getItem("CurrentChat_userid"),n={userId:a,astroId:e,type:"Chat"},t.next=5,I.a.post("/user/deductChatBalance",n).then((function(t){console.log(t)})).catch((function(t){console.log(t.response.data)}));case 5:case"end":return t.stop()}}),t)}))),r.handleCloseChat=function(t){t.preventDefault();var e=localStorage.getItem("astroId"),a={userId:localStorage.getItem("CurrentChat_userid"),astroId:e};I.a.post("/user/changeStatus",a).then((function(t){console.log(t),window.location.replace("/")})).catch((function(t){console.log(t.response.data)}))},r.handleAddChat=function(){var t=Object(n.a)(C().mark((function t(e){var a,o,i,l;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),a=localStorage.getItem("CurrentChat_userid"),r.state.tooglebtn&&r.handleaddBal(),""===r.state.msg){t.next=13;break}return r.setState({tooglebtn:!1}),o={reciver:a,msg:r.state.msg},i=[a],l=localStorage.getItem("astroId"),t.next=11,I.a.post("/user/add_chatroom/".concat(l),o).then(function(){var t=Object(n.a)(C().mark((function t(e){return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(e),!0!==e.data.status){t.next=5;break}return r.setState({msg:""}),t.next=5,I.a.get("/user/allchatwithAstro/".concat(l)).then((function(t){var e;if(console.log(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data),!0===t.data.status){var a,n=null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.data.filter((function(t){var e,a;return i.indexOf((null===t||void 0===t||null===(e=t.userid)||void 0===e?void 0:e._id)||(null===t||void 0===t||null===(a=t.reciver)||void 0===a?void 0:a._id))>-1}));r.setState({roomChatData:n})}})).catch((function(t){console.log(t)}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t)}));case 11:t.next=14;break;case 13:A()("Alert","Input field is blank. Add Some Value");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r.getChatonedata=function(){setInterval((function(){var t=localStorage.getItem("astroId"),e=(localStorage.getItem("get_room_id"),localStorage.getItem("CurrentChat_userid"));I.a.get("/user/getone_chat/".concat(e,"/").concat(t)).then((function(t){var e,a,n;(null===(e=t.data.data)||void 0===e?void 0:e.roomid)&&(r.setState({roomId:null===(a=t.data.data)||void 0===a?void 0:a.roomid}),I.a.get("/user/allchatwithuser/".concat(null===(n=t.data.data)||void 0===n?void 0:n.roomid)).then((function(t){r.setState({roomChatData:t.data.data})})).catch((function(t){console.log(t)})))}))}),3e3)},r.getChatRoomIdnew=function(t,e){var a,n,o,i;console.log(t,e),r.setState({userData:t});var l=[null===t||void 0===t||null===(a=t.userid)||void 0===a?void 0:a._id];r.setState({userId:null===t||void 0===t||null===(n=t.userid)||void 0===n?void 0:n._id,roomId:null===t||void 0===t?void 0:t.roomid,indexValue:e,astroId:null===t||void 0===t||null===(o=t.astroid)||void 0===o?void 0:o._id}),I.a.get("/user/allchatwithAstro/".concat(null===t||void 0===t||null===(i=t.astroid)||void 0===i?void 0:i._id)).then((function(t){var e;if(console.log(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data),!0===t.data.status){var a;console.log("allchat",null===t||void 0===t?void 0:t.data.data);var n=null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.data.filter((function(t){var e,a;return l.indexOf((null===t||void 0===t||null===(e=t.userid)||void 0===e?void 0:e._id)||(null===t||void 0===t||null===(a=t.reciver)||void 0===a?void 0:a._id))>-1}));r.setState({roomChatData:n})}})).catch((function(t){console.log(t)}))},r.getChatRoomId=function(t,e){var a,n,o,i;console.log(t,e),r.setState({userData:t}),r.setState({ModdleToggle:!0});var l=[null===t||void 0===t||null===(a=t.userid)||void 0===a?void 0:a._id];r.setState({userId:null===t||void 0===t||null===(n=t.userid)||void 0===n?void 0:n._id,roomId:null===t||void 0===t?void 0:t.roomid,indexValue:e,astroId:null===t||void 0===t||null===(o=t.astroid)||void 0===o?void 0:o._id}),I.a.get("/user/allchatwithAstro/".concat(null===t||void 0===t||null===(i=t.astroid)||void 0===i?void 0:i._id)).then((function(t){var e;if(console.log(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data),!0===t.data.status){var a;console.log("allchat",null===t||void 0===t?void 0:t.data.data);var n=null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.data.filter((function(t){var e,a;return l.indexOf((null===t||void 0===t||null===(e=t.userid)||void 0===e?void 0:e._id)||(null===t||void 0===t||null===(a=t.reciver)||void 0===a?void 0:a._id))>-1}));r.setState({roomChatData:n})}})).catch((function(t){console.log(t)}))},r.submitHandler=function(){var t=Object(n.a)(C().mark((function t(e,a,o){var i,l,s,c;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),i=localStorage.getItem("astroId"),l=localStorage.getItem("CurrentChat_userid"),""===r.state.msg){t.next=10;break}return s={reciver:l,msg:r.state.msg},c=[l],t.next=8,I.a.post("/user/add_chatroom/".concat(i),s).then(function(){var t=Object(n.a)(C().mark((function t(e){return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("add chat room",e.data.status),!0!==e.data.status){t.next=5;break}return r.setState({msg:""}),t.next=5,I.a.get("/user/allchatwithAstro/".concat(i)).then((function(t){var e;if(console.log(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data),!0===t.data.status){var a,n=null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.data.filter((function(t){var e,a;return c.indexOf((null===t||void 0===t||null===(e=t.userid)||void 0===e?void 0:e._id)||(null===t||void 0===t||null===(a=t.reciver)||void 0===a?void 0:a._id))>-1}));r.setState({roomChatData:n})}})).catch((function(t){console.log(t)}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t)}));case 8:t.next=11;break;case 10:A()("Alert","Input field is blank. Add Some Value");case 11:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),r.handleChange=function(t){r.setState({msg:t.target.value})},r.state={tooglebtn:!0,userChatList:[],userId:"",astroId:"",userData:null,msg:"",roomId:"",UserDetails:{},roomChatData:[],time:{},seconds:900,reciver:"",minutes:15,ModdleToggle:!1,indexValue:0},r.timer=0,r.startTimer=r.startTimer.bind(Object(i.a)(r)),r.countDown=r.countDown.bind(Object(i.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=localStorage.getItem("astroId"),a=(localStorage.getItem("get_room_id"),localStorage.getItem("CurrentChat_userid"));if(I.a.get("/user/viewoneuser/".concat(a)).then((function(e){t.setState({UserDetails:e.data.data})})).catch((function(t){console.log(t)})),this.getChatonedata(),I.a.get("/user/getone_chat/".concat(a,"/").concat(e)).then((function(e){var a,n,o,r;(null===(a=e.data.data)||void 0===a?void 0:a.roomid)?(t.setState({roomId:null===(n=e.data.data)||void 0===n?void 0:n.roomid}),I.a.get("/user/allchatwithuser/".concat(null===(o=e.data)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.roomid)).then((function(e){t.setState({roomChatData:e.data.data})})).catch((function(t){console.log(t)}))):A()("No room id found. let user to message first")})),JSON.parse(localStorage.getItem("minute"))){var n=JSON.parse(localStorage.getItem("minute"));this.setState({minutes:n,seconds:60*n})}I.a.get("/user/astrogetRoomid/".concat(e)).then((function(e){var a,n,o;!0===e.data.status&&t.setState({userChatList:null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.data,roomId:null===e||void 0===e||null===(n=e.data)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.roomid})})).catch((function(t){console.log(t.response)}))}},{key:"secondsToTime",value:function(t){var e=t%3600,a=e%60;return{h:Math.floor(t/3600),m:Math.floor(e/60),s:Math.ceil(a)}}},{key:"startTimer",value:function(){0===this.timer&&this.state.seconds>0&&(this.timer=setInterval(this.countDown,1e3))}},{key:"countDown",value:function(){var t=0!==this.state.seconds?this.state.seconds-1:alert("out time");this.setState({time:this.secondsToTime(t),seconds:t}),0===t&&clearInterval(this.timer)}},{key:"render",value:function(){var t,e,a,n,o=this;this.state.indexValue;return u.a.createElement("div",null,u.a.createElement("section",{className:""},u.a.createElement(d.a,null,u.a.createElement(h.a,null,!1===this.state.ModdleToggle?u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{lg:"4"},u.a.createElement("div",{class:"mymessagehead"},u.a.createElement("div",{class:"mymsgsubhead"},u.a.createElement("h1",{class:"title mx-1 mb-2"},"My messages"),u.a.createElement(p.default,{userChatList:this.state.userChatList.length?this.state.userChatList:[],getChatRoomId:function(t,e){return o.getChatRoomId(t,e)}})))),u.a.createElement(v.a,{lg:"8"},u.a.createElement("div",{class:"app rt-chat"},u.a.createElement("div",{class:"messages"},u.a.createElement("div",{className:"chat-header"},u.a.createElement("p",null,u.a.createElement("span",null,u.a.createElement("img",{src:this.state.UserDetails?null===(t=this.state.UserDetails)||void 0===t?void 0:t.userimg:g.a,className:"app-img",alt:""})),this.state.UserDetails?null===(e=this.state.UserDetails)||void 0===e?void 0:e.fullname:null)),u.a.createElement("div",{class:"messages-history"},u.a.createElement(y.default,{roomChatData:this.state.roomChatData.length>0?this.state.roomChatData:[]})),u.a.createElement("form",{class:"messages-inputs"},u.a.createElement("input",{type:"text",placeholder:"Send a message",onChange:function(t){o.handleChange(t)},value:this.state.msg}),u.a.createElement("button",{onClick:function(t){t.preventDefault(),o.setState({ModdleToggle:!0})}},u.a.createElement("i",{class:"material-icons"},"send"))))))):u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{lg:!0===this.state.ModdleToggle?"12":"8"},u.a.createElement(h.a,null,u.a.createElement(v.a,null,u.a.createElement(w.a,{style:{cursor:"pointer"},onClick:function(){return o.setState({ModdleToggle:!1})},fill:"#ffcc01",size:"40px",className:"mx-2 mb-2 faarrowalt"})),u.a.createElement(v.a,null,u.a.createElement("div",{className:"d-flex justify-content-end mt-1"},u.a.createElement(m.a,{className:"closebtnchat",onClick:function(t){return o.handleCloseChat(t)},color:"primary"},"Close Chat")))),u.a.createElement("div",{class:"app rt-chat"},u.a.createElement("div",{class:"messages"},u.a.createElement("div",{className:"chat-header"},u.a.createElement("p",null,u.a.createElement("span",null,u.a.createElement("img",{src:this.state.UserDetails?null===(a=this.state.UserDetails)||void 0===a?void 0:a.userimg:g.a,className:"app-img",alt:""})),this.state.UserDetails?null===(n=this.state.UserDetails)||void 0===n?void 0:n.fullname:null)),u.a.createElement("div",{class:"messages-history"},u.a.createElement(y.default,{roomChatData:this.state.roomChatData.length>0?this.state.roomChatData:[]})),u.a.createElement("form",{class:"messages-inputs"},u.a.createElement("input",{type:"text",placeholder:"Send a message",onChange:function(t){o.handleChange(t)},value:this.state.msg,defaultValue:""}),u.a.createElement("button",{onClick:function(t){return o.state.tooglebtn?o.handleAddChat(t):o.submitHandler(t,o.state.astroId,o.state.userId)}},u.a.createElement("i",{class:"material-icons"},"send")))))))))))}}]),a}(u.a.Component);e.default=D},890:function(t,e,a){},983:function(t,e,a){"use strict";var n=a(5),o=a(7),r=a(0),i=a.n(r),l=a(1),s=a.n(l),c=a(4),u=a.n(c),d=a(3),h=["className","cssModule","fluid","tag"],v={tag:d.tagPropType,fluid:s.a.oneOfType([s.a.bool,s.a.string]),className:s.a.string,cssModule:s.a.object},m=function(t){var e=t.className,a=t.cssModule,r=t.fluid,l=t.tag,s=Object(o.a)(t,h),c="container";!0===r?c="container-fluid":r&&(c="container-"+r);var v=Object(d.mapToCssModules)(u()(e,c),a);return i.a.createElement(l,Object(n.a)({},s,{className:v}))};m.propTypes=v,m.defaultProps={tag:"div"},e.a=m}}]);
//# sourceMappingURL=81.a54f14b4.chunk.js.map