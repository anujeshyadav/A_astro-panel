(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[104],{1011:function(e,a,t){"use strict";t(60),t(0),t(927),t(188)},2171:function(e,a,t){"use strict";t.r(a);var c=t(27),o=t(0),l=t.n(o),n=t(1255),r=t(1253),s=t(1254),i=t(188),d=t(818),u=t(802),m=t(807),f=t(1009),b=(t(889),t(1011),t(77)),h=(t(28),t(828),t(60),t(927)),v=t.n(h);v.a.createClient({mode:"rtc",codec:"h264"});a.default=function(){var e=Object(o.useState)(!1),a=Object(c.a)(e,2),t=a[0],h=a[1],v=Object(o.useState)(""),g=Object(c.a)(v,2),p=(g[0],g[1],Object(o.useState)("")),O=Object(c.a)(p,2),E=O[0],j=O[1],k=Object(o.useState)(""),w=Object(c.a)(k,2),N=w[0],S=w[1],y=Object(o.useState)(""),C=Object(c.a)(y,2),M=C[0],A=C[1],T=Object(o.useState)(!1),I=Object(c.a)(T,2),x=I[0],z=I[1],P=Object(o.useState)(!1),D=Object(c.a)(P,2),F=(D[0],D[1],Object(o.useState)()),J=Object(c.a)(F,2),L=(J[0],J[1],{appId:"7d1f07c76f9d46be86bc46a791884023",dualStreamMode:0,channel:E,token:M||localStorage.getItem("astrotokenforvideocall"),uid:1,role:"Audience"}),V={EndCall:function(){window.location.reload(),h(!1)}};return Object(o.useEffect)((function(){var e=localStorage.getItem("astroId");console.log(e),b.a.get("user/channelList/".concat(e)).then((function(e){var a,t,c,o;console.log(null===(a=e.data)||void 0===a||null===(t=a.data[0])||void 0===t?void 0:t.channelName),j(null===(c=e.data)||void 0===c||null===(o=c.data[0])||void 0===o?void 0:o.channelName)})).catch((function(e){console.log(e)}))}),[]),l.a.createElement("div",null,l.a.createElement(n.a,null,l.a.createElement(r.a,null,l.a.createElement(s.a,{lg:"4",md:"4",sm:"4"},l.a.createElement("div",{className:"container mt-2 mb-1"},l.a.createElement(i.a,{onClick:function(e){return function(e){e.preventDefault();var a={astroAccount:localStorage.getItem("astroId")};"Active"===N&&b.a.post("/user/astroVideoCall",a).then((function(e){console.log(e.data.astroAccount),A(e.data.astroAccount),localStorage.setItem("astrotokenforvideocall",e.data.astroAccount),z(!0)})).catch((function(e){console.log(e)})),"Deactive"===N&&(localStorage.removeItem("astrotokenforvideocall"),z(!1),window.location.reload())}(e)},color:"success"},"Active liveStream"))),l.a.createElement(s.a,null,l.a.createElement("div",{className:"container mt-1 mb-1"},l.a.createElement(r.a,null,l.a.createElement(s.a,{className:"mt-1"},l.a.createElement(d.a,{check:!0},l.a.createElement(u.a,{value:"Active",onClick:function(e){S(e.target.value)},name:"radio1",type:"radio"})," ",l.a.createElement(m.a,{check:!0},"Online"))),l.a.createElement(s.a,{className:"mt-1"},l.a.createElement(d.a,{check:!0},l.a.createElement(u.a,{value:"Deactive",onClick:function(e){return S(e.target.value)},name:"radio1",type:"radio"})," ",l.a.createElement(m.a,{check:!0},"Offline"))))))),l.a.createElement(r.a,null,l.a.createElement("div",{className:"container mt-1 mb-1"},t&&"Active"===N?l.a.createElement("div",{style:{display:"flex",width:"75vw",height:"80vh"}},l.a.createElement(f.a,{rtcProps:L,callbacks:V})):l.a.createElement(l.a.Fragment,null,!0===x?l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{onClick:function(){return h(!0)},color:"success"},"liveStream Now")):null)))))}},807:function(e,a,t){"use strict";var c=t(5),o=t(7),l=t(0),n=t.n(l),r=t(1),s=t.n(r),i=t(4),d=t.n(i),u=t(3),m=["className","cssModule","hidden","widths","tag","check","size","for"],f=s.a.oneOfType([s.a.number,s.a.string]),b=s.a.oneOfType([s.a.bool,s.a.string,s.a.number,s.a.shape({size:f,order:f,offset:f})]),h={children:s.a.node,hidden:s.a.bool,check:s.a.bool,size:s.a.string,for:s.a.string,tag:u.tagPropType,className:s.a.string,cssModule:s.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:s.a.array},v={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},p=function(e){var a=e.className,t=e.cssModule,l=e.hidden,r=e.widths,s=e.tag,i=e.check,f=e.size,b=e.for,h=Object(o.a)(e,m),v=[];r.forEach((function(a,c){var o=e[a];if(delete h[a],o||""===o){var l,n=!c;if(Object(u.isObject)(o)){var r,s=n?"-":"-"+a+"-";l=g(n,a,o.size),v.push(Object(u.mapToCssModules)(d()(((r={})[l]=o.size||""===o.size,r["order"+s+o.order]=o.order||0===o.order,r["offset"+s+o.offset]=o.offset||0===o.offset,r))),t)}else l=g(n,a,o),v.push(l)}}));var p=Object(u.mapToCssModules)(d()(a,!!l&&"sr-only",!!i&&"form-check-label",!!f&&"col-form-label-"+f,v,!!v.length&&"col-form-label"),t);return n.a.createElement(s,Object(c.a)({htmlFor:b},h,{className:p}))};p.propTypes=h,p.defaultProps=v,a.a=p},818:function(e,a,t){"use strict";var c=t(5),o=t(7),l=t(0),n=t.n(l),r=t(1),s=t.n(r),i=t(4),d=t.n(i),u=t(3),m=["className","cssModule","row","disabled","check","inline","tag"],f={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:u.tagPropType,className:s.a.string,cssModule:s.a.object},b=function(e){var a=e.className,t=e.cssModule,l=e.row,r=e.disabled,s=e.check,i=e.inline,f=e.tag,b=Object(o.a)(e,m),h=Object(u.mapToCssModules)(d()(a,!!l&&"row",s?"form-check":"form-group",!(!s||!i)&&"form-check-inline",!(!s||!r)&&"disabled"),t);return"fieldset"===f&&(b.disabled=r),n.a.createElement(f,Object(c.a)({},b,{className:h}))};b.propTypes=f,b.defaultProps={tag:"div"},a.a=b},889:function(e,a,t){}}]);
//# sourceMappingURL=104.c45a1ae1.chunk.js.map