(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,n,t){e.exports=t(68)},68:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(6),i=t.n(o),c=t(5),u=t.n(c),l=t(16),s=t(33),d=t(7),p=t(8),f=t(10),m=t(9),b=t(11),g=t(27),v=t(17),h=t.n(v),j=t(28),x=t.n(j).a.create({baseURL:"http://localhost:3000"}),E=t(2),O=t(3);t(62);function y(){var e=Object(E.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    background: #7159c1;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n"]);return y=function(){return e},e}var w=Object(O.a)(y());function k(){var e=Object(E.a)(["\n  width: 100%;\n  max-width: 400px;\n  margin: 30px;\n  background: #fff;\n  border-radius: 4px;\n  padding: 20px;\n"]);return k=function(){return e},e}function D(){var e=Object(E.a)(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return D=function(){return e},e}var F=O.c.div(D()),z=O.c.div(k()),U=t(34);function R(){var e=Object(E.a)(["\n  display: flex;\n  color: ",";\n  justify-content: center;\n  align-items: center;\n  padding: 15px 0;\n"]);return R=function(){return e},e}function A(){var e=Object(E.a)(["\n  border: 1px dashed #ddd;\n  border-radius: 4px;\n  cursor: pointer;\n\n  transition: height 0.2s ease;\n\n  ",";\n  ",";\n"]);return A=function(){return e},e}function S(){var e=Object(E.a)(["\n  border-color: #e57878;\n"]);return S=function(){return e},e}function q(){var e=Object(E.a)(["\n  border-color: #78e5d5;\n"]);return q=function(){return e},e}var L=Object(O.b)(q()),I=Object(O.b)(S()),M=O.c.div.attrs({className:"dropzone"})(A(),function(e){return e.isDragActive&&L},function(e){return e.isDragReject&&I}),C={default:"#999",error:"#e57878",success:"#78e5d5"},P=O.c.p(R(),function(e){return C[e.type||"default"]}),_=function(e){function n(){var e,t;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=Object(f.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(o)))).renderDragMessage=function(e,n){return e?n?a.a.createElement(P,{type:"error"},"Arquivo n\xe3o suportado"):a.a.createElement(P,{type:"success"},"Solte os arquivos aqui"):a.a.createElement(P,null,"Arraste arquivos aqui...")},t}return Object(b.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this,n=this.props.onUpload;return a.a.createElement(U.a,{accept:"image/*",onDropAccepted:n},function(n){var t=n.getRootProps,r=n.getInputProps,o=n.isDragActive,i=n.isDragReject;return a.a.createElement(M,Object.assign({},t(),{isDragActive:o,isDragReject:i}),a.a.createElement("input",r()),e.renderDragMessage(o,i))})}}]),n}(r.Component),J=t(32),W=t.n(J),B=t(13);function H(){var e=Object(E.a)(["\n  width: 36px;\n  height: 36px;\n  border-radius: 5px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  margin-right: 10px;\n"]);return H=function(){return e},e}function N(){var e=Object(E.a)(["\n  display: flex;\n  align-items: center;\n\n  div {\n    display: flex;\n    flex-direction: column;\n\n    span {\n      font-size: 12px;\n      color: #999;\n      margin-top: 5px;\n\n      button {\n        border: 0;\n        background: transparent;\n        color: #e57878;\n        margin-left: 5px;\n        cursor: pointer;\n      }\n    }\n  }\n"]);return N=function(){return e},e}function G(){var e=Object(E.a)(["\n  margin-top: 20px;\n\n  li {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #444;\n\n    & + li {\n      margin-top: 15px;\n    }\n  }\n"]);return G=function(){return e},e}var K=O.c.ul(G()),Q=O.c.div(N()),T=O.c.div(H(),function(e){return e.src}),V=function(e){var n=e.files,t=e.onDelete;return a.a.createElement(K,null,n.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(Q,null,a.a.createElement(T,{src:e.preview}),a.a.createElement("div",null,a.a.createElement("strong",null,e.name),a.a.createElement("span",null,e.readableSize," ",!!e.url&&a.a.createElement("button",{onClick:function(){return t(e.id)}},"Excluir")))),a.a.createElement("div",null,!e.uploaded&&!e.error&&a.a.createElement(W.a,{styles:{root:{width:24},path:{stroke:"#7159c1"}},strokeWidth:10,percentage:e.progress}),e.url&&a.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},a.a.createElement(B.c,{style:{marginRight:8},size:24,color:"#222"})),e.uploaded&&a.a.createElement(B.a,{size:24,color:"#78e5d5"}),e.error&&a.a.createElement(B.b,{size:24,color:"#e57878"})))}))},X=function(e){function n(){var e,t;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(f.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).state={uploadedFiles:[]},t.handleUpload=function(e){var n=e.map(function(e){return{file:e,id:Object(g.uniqueId)(),name:e.name,readableSize:h()(e.size),preview:URL.createObjectURL(e),progress:0,uploaded:!1,error:!1,url:null}});t.setState({uploadedFiles:t.state.uploadedFiles.concat(n)}),n.forEach(t.processUpload)},t.updateFile=function(e,n){t.setState({uploadedFiles:t.state.uploadedFiles.map(function(t){return e===t.id?Object(s.a)({},t,n):t})})},t.processUpload=function(e){var n=new FormData;n.append("file",e.file,e.name),x.post("posts",n,{onUploadProgress:function(n){var r=parseInt(Math.round(100*n.loaded/n.total));t.updateFile(e.id,{progress:r})}}).then(function(n){t.updateFile(e.id,{uploaded:!0,id:n.data._id,url:n.data.url})}).catch(function(){t.updateFile(e.id,{error:!0})})},t.handleDelete=function(){var e=Object(l.a)(u.a.mark(function e(n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.delete("posts/".concat(n));case 2:t.setState({uploadedFiles:t.state.uploadedFiles.filter(function(e){return e.id!==n})});case 3:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(b.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark(function e(){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("posts");case 2:n=e.sent,this.setState({uploadedFiles:n.data.map(function(e){return{id:e._id,name:e.name,readableSize:h()(e.size),preview:e.url,uploaded:!0,url:e.url}})});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.state.uploadedFiles.forEach(function(e){return URL.revokeObjectURL(e.preview)})}},{key:"render",value:function(){var e=this.state.uploadedFiles;return a.a.createElement(F,null,a.a.createElement(z,null,a.a.createElement(_,{onUpload:this.handleUpload}),!!e.length&&a.a.createElement(V,{files:e,onDelete:this.handleDelete})),a.a.createElement(w,null))}}]),n}(r.Component);i.a.render(a.a.createElement(X,null),document.getElementById("root"))}},[[36,2,1]]]);
//# sourceMappingURL=main.cd65e586.chunk.js.map