(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(3),c=n.n(r),h=(n(13),n(4)),l=n(5),o=n(6),i=n(8),j=n(7),b=(n(14),n(0)),d=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={sex:"men",comment:"",username:"",password:"",remember:!1,color:""},e.handlerChange=function(t){var n=t.target,a=n.name,s=n.value,r=n.type,c=n.checked;console.log(s),e.setState(Object(h.a)({},a,"checkbox"===r?c:s))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"App",style:{padding:"20px"},children:[Object(b.jsx)("h1",{children:"Mate"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log(e.state)},children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("label",{htmlFor:"sex_m",children:[Object(b.jsx)("input",{type:"radio",name:"sex",id:"sex_m",value:"men",onChange:this.handlerChange,checked:"men"===this.state.sex}),"Male"]}),Object(b.jsxs)("label",{htmlFor:"sex_f",children:[Object(b.jsx)("input",{type:"radio",name:"sex",id:"sex_f",value:"female",onChange:this.handlerChange,checked:"female"===this.state.sex}),"Female"]})]}),Object(b.jsxs)("select",{name:"color",id:"",value:this.state.color,onChange:this.handlerChange,children:[Object(b.jsx)("option",{value:"",children:"Choose a color"}),Object(b.jsx)("option",{value:"green",children:"Green"}),Object(b.jsx)("option",{value:"red",children:"Red"}),Object(b.jsx)("option",{value:"blue",children:"Blue"})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{htmlFor:"remember",children:[Object(b.jsx)("input",{type:"checkbox",id:"remember",name:"remember",checked:this.state.remember,onChange:this.handlerChange}),"Remember me"]}),Object(b.jsx)("br",{}),Object(b.jsx)("textarea",{name:"comment",value:this.state.comment,onChange:this.handlerChange}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",name:"username",placeholder:"Username",onChange:this.handlerChange}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"password",name:"password",placeholder:"Password",onChange:this.handlerChange}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",children:"Sign in"})]})]})}}]),n}(s.a.Component);c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.67210270.chunk.js.map