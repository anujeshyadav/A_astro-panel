(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[139],{1172:function(e,a,l){},2010:function(e,a,l){"use strict";l.r(a);var t=l(29),n=l(0),o=l.n(n),c=l(27),d=l(1254),i=l(1252),s=l(1253),m=l(187),r=l(804),u=l(97),v=(l(1172),l(179),l(809),l(810),l(572),l(802),l(924)),p=l.n(v),g=function(){var e=Object(n.useState)({}),a=Object(t.a)(e,2),l=a[0],v=a[1],g=Object(n.useState)({}),E=Object(t.a)(g,2);E[0],E[1];return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement(i.a,null,o.a.createElement(s.a,{lg:"3",sm:"3",md:"3"},o.a.createElement("div",{className:"d-flex container"},o.a.createElement("div",null,o.a.createElement("h3",{className:"mt-2 mb-1 mx-3"}," Upload ")))),o.a.createElement(s.a,null,o.a.createElement("div",{className:"d-flex justify-content-end container mt-2 mr-1"},o.a.createElement("div",null,o.a.createElement(m.a,{onClick:function(){c.a.goBack()},color:"primary"}," ","Back"))))),o.a.createElement(i.a,null,o.a.createElement(s.a,{className:"mb-2 mt-2"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"uplodsdata"},o.a.createElement(i.a,{className:"uploadmain"},o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement(r.a,{name:"file",onChange:function(e){return v(e.target.files[0])},accept:"video/*,.png, .jpg, .jpeg",type:"file"}))),o.a.createElement(s.a,null,o.a.createElement("div",{className:"buttonuploadv"},o.a.createElement(m.a,{onClick:function(){var e,a,t,n,o=localStorage.getItem("astroId"),c=new FormData;"image"===(null===l||void 0===l||null===(e=l.type)||void 0===e?void 0:e.split("/")[0])&&(c.append("astroId",o),c.append("image",l),u.a.post("/admin/upload_astrogallery",c).then((function(e){console.log(null===e||void 0===e?void 0:e.data.message),"success"===(null===e||void 0===e?void 0:e.data.message)&&p()("Image Uploaded Sucessfully")})).catch((function(e){console.log(e)}))),"video"===(null===l||void 0===l||null===(a=l.type)||void 0===a?void 0:a.split("/")[0])&&(c.append("astroId",o),c.append("video",l),u.a.post("/admin/upload_astrogallery",c).then((function(e){console.log(e),"success"===(null===e||void 0===e?void 0:e.data.message)&&p()("Video Uploaded Sucessfully")})).catch((function(e){console.log(e)}))),console.log("video","video"===(null===l||void 0===l||null===(t=l.type)||void 0===t?void 0:t.split("/")[0])),console.log("video","image"===(null===l||void 0===l||null===(n=l.type)||void 0===n?void 0:n.split("/")[0]))},size:"sm",className:"bntuploadsvideo",color:"primary"},"Upload"))))))))))))};g.defaultProps={},a.default=g}}]);
//# sourceMappingURL=139.7b32f7ae.chunk.js.map