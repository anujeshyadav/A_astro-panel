(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[104],{1004:function(e,t,a){},1996:function(e,t,a){"use strict";a.r(t);var n=a(13),o=a(14),s=a(16),r=a(15),i=a(0),c=a.n(i),l=a(1254),d=a(1252),m=a(1253),u=a(187),p=a(1257),b=a(811),f=(a(827),a(939)),h=a(940),g=(a(1156),a(1004),a(97)),E=a(27),N=a(924),C=a.n(N),j=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).onEditorStateChange=function(e){o.setState({editorState:e,desc:Object(f.convertToRaw)(e.getCurrentContent())})},o.submitHandler=function(e){e.preventDefault(),(new FormData).append("desc",o.state.desc),g.a.post("/admin/add_termscondition",o.state).then((function(e){console.log(e),o.props.history.push("/app/termscondition/TermConditionList"),C()("Good job!","You clicked the button!","success")})).catch((function(e){console.log(e)}))},o.state={dealer:"",desc:"",editorState:f.EditorState.createEmpty()},o}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(l.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(m.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Term And Condition")),c.a.createElement(m.a,null,c.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/termscondition/TermConditionList")}},"Back"))),c.a.createElement(p.a,null,c.a.createElement(b.a,{onSubmit:this.submitHandler},c.a.createElement(h.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}),c.a.createElement("br",null),c.a.createElement(u.a,{color:"primary"}," Submit"))))}}]),a}(c.a.Component);t.default=j},811:function(e,t,a){"use strict";var n=a(5),o=a(7),s=a(11),r=a(12),i=a(0),c=a.n(i),l=a(1),d=a.n(l),m=a(4),u=a.n(m),p=a(3),b=["className","cssModule","inline","tag","innerRef"],f={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,r=e.tag,i=e.innerRef,l=Object(o.a)(e,b),d=Object(p.mapToCssModules)(u()(t,!!s&&"form-inline"),a);return c.a.createElement(r,Object(n.a)({},l,{ref:i,className:d}))},t}(i.Component);h.propTypes=f,h.defaultProps={tag:"form"},t.a=h},827:function(e,t,a){}}]);
//# sourceMappingURL=104.4209ef0d.chunk.js.map