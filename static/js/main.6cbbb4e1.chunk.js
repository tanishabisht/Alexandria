(this.webpackJsonpodin=this.webpackJsonpodin||[]).push([[0],{115:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},120:function(e,t,c){},125:function(e,t,c){},136:function(e,t,c){},137:function(e,t,c){},138:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(12),s=c(14),r=c.n(s),i=(c(115),c(17)),o=c(16),l=(c(116),c(13)),u=(c(117),c(2)),j=function(){return Object(u.jsx)("div",{className:"footer_container",children:Object(u.jsxs)("p",{className:"footer_text text-center",children:["BUILT BY ",Object(u.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UCMiU0CuGRA4v7pXnGKyJtfw",children:"TEAM CaffeineOverflow"})]})})},d=(c(119),c(182)),b=c(174),m=(c(120),function(){return Object(u.jsxs)(d.a,{collapseOnSelect:!0,expand:"lg",variant:"light",children:[Object(u.jsx)(d.a.Brand,{className:"nav_logo",href:"#/home",children:"ODIN"}),Object(u.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsx)(d.a.Collapse,{id:"responsive-navbar-nav",children:Object(u.jsxs)("nav",{className:"ml-auto",children:[Object(u.jsx)(i.b,{activeClassName:"secLinkActive",className:"secLink",to:"/myprofile",children:"Profile"}),Object(u.jsx)(i.b,{activeClassName:"secLinkActive",className:"secLink",to:"/newRepo",children:"New Repo"}),Object(u.jsx)(i.b,{activeClassName:"secLinkActive",className:"secLink",to:"/myRepos",children:"My Repos"}),Object(u.jsx)(i.b,{activeClassName:"secLinkActive",className:"secLink",to:"/searchRepos",children:"Search Repos"}),Object(u.jsx)(i.b,{className:"secLink",to:"/signin",children:Object(u.jsx)(b.a,{onClick:function(){localStorage.removeItem("token")},children:"Logout"})}),Object(u.jsx)(i.b,{className:"secLink",to:"/signin",children:Object(u.jsx)(b.a,{onClick:function(){r.a.delete("users/me").then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},children:"Remove Account"})})]})})]})}),O=c.p+"static/media/iconLink.ced7c7eb.svg",h=c.p+"static/media/delIcon.2a3cf67e.svg",g=(c(125),function(e){var t=e.heading,c=e.para,a=e.link,n=Object(o.g)();return Object(u.jsxs)("div",{className:"repoCard",children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:c}),Object(u.jsxs)("p",{style:{textAlign:"right"},children:[Object(u.jsx)("img",{onClick:function(){return n.push("finalRepo/".concat(a))},className:"crudIcon",src:O,alt:"link"}),Object(u.jsx)("img",{onClick:function(){r.a.delete("repos/".concat(a)).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},className:"crudIcon",style:{marginLeft:"5px"},src:h,alt:"del"})]})]})}),f=(c(33),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){r.a.get("repos").then((function(e){n(e.data),console.log(e.data)}))}),[n]),Object(u.jsx)("div",{className:"myrepo_bg",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-4"}),Object(u.jsx)("div",{className:"col-8",children:c.map((function(e,t){var c=e._id,a=e.courseName,n=e.courseDesc;return Object(u.jsx)(g,{heading:a,para:n,link:c},t)}))})]})})})}),p=c(28),x=c(178),v=c(77),N=c(180),k=c(184),C=c(181),y=Object(x.a)({widthMax:{width:"80%",marginTop:20},topicInfoText:{width:"100%",marginBottom:10,marginRight:10},btn:{margin:10},bgBlur:{width:"80%",marginTop:20,borderRadius:"10px",backdropFilter:"blur(5px)"}}),S=function(){var e=y(),t=Object(o.g)(),c=Object(a.useState)(""),n=Object(l.a)(c,2),s=n[0],i=n[1],j=Object(a.useState)(""),d=Object(l.a)(j,2),m=d[0],O=d[1],g={topic:"",topicDesc:""},f=Object(a.useState)([g]),x=Object(l.a)(f,2),S=x[0],w=x[1],I={linkTopic:"",link:""},T=Object(a.useState)([I]),B=Object(l.a)(T,2),R=B[0],L=B[1];return Object(u.jsxs)("form",{className:"newrepo_bg",autoComplete:"off",children:[Object(u.jsx)(v.a,{onChange:function(e){return function(e){return i(e.target.value)}(e)},className:e.bgBlur,id:"course-name",label:"Course Name ...",variant:"outlined"}),Object(u.jsx)(v.a,{onChange:function(e){return function(e){return O(e.target.value)}(e)},className:e.bgBlur,multiline:!0,id:"course-desc",label:"Course Description ...",variant:"outlined"}),Object(u.jsxs)(N.a,{className:e.widthMax,children:[Object(u.jsx)(k.a,{title:"TOPIC INFO"}),Object(u.jsxs)(C.a,{children:[Object(u.jsx)(b.a,{onClick:function(){var e=Object(p.a)(S);e.push(g),w(e)},variant:"contained",color:"primary",children:"ADD NEW TOPIC"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),S.map((function(t,c){return Object(u.jsxs)("div",{className:"newrepo_topicInfo",children:[Object(u.jsx)(v.a,{onChange:function(e){return function(e,t){var c=Object(p.a)(S);c[t].topic=e.target.value,w(c),console.log(c)}(e,c)},className:e.topicInfoText,id:"topic-name-".concat(c),label:"Topic ...",variant:"outlined"}),Object(u.jsx)(v.a,{onChange:function(e){return function(e,t){var c=Object(p.a)(S);c[t].topicDesc=e.target.value,w(c),console.log(c)}(e,c)},className:e.topicInfoText,multiline:!0,id:"topic-desc-".concat(c),label:"Topic Description ...",variant:"outlined"}),Object(u.jsx)("img",{onClick:function(){return function(e){var t=Object(p.a)(S);t.splice(e,1),w(t)}(c)},className:"crudIcon",src:h,alt:"delete icon"})]},c)}))]})]}),Object(u.jsxs)(N.a,{className:e.widthMax,children:[Object(u.jsx)(k.a,{title:"Link LINKS"}),Object(u.jsxs)(C.a,{children:[Object(u.jsx)(b.a,{onClick:function(){var e=Object(p.a)(R);e.push(I),L(e)},variant:"contained",color:"primary",children:"ADD NEW LINK"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),R.map((function(t,c){return Object(u.jsxs)("div",{className:"newrepo_topicInfo",children:[Object(u.jsx)(v.a,{onChange:function(e){return function(e,t){var c=Object(p.a)(R);c[t].linkTopic=e.target.value,L(c),console.log(c)}(e,c)},className:e.topicInfoText,id:"link-name-".concat(c),label:"Topic ...",variant:"outlined"}),Object(u.jsx)(v.a,{onChange:function(e){return function(e,t){var c=Object(p.a)(R);c[t].link=e.target.value,L(c),console.log(c)}(e,c)},className:e.topicInfoText,id:"link-desc-".concat(c),label:"Topic Link ...",variant:"outlined"}),Object(u.jsx)("img",{onClick:function(){return function(e){var t=Object(p.a)(R);t.splice(e,1),L(t)}(c)},className:"crudIcon",src:h,alt:"delete icon"})]},c)}))]})]}),Object(u.jsx)(b.a,{onClick:function(){var e={courseName:s,courseDesc:m,topicInfo:S,courseLinks:R};r.a.post("repo",e).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),t.push("myRepos")},className:e.btn,variant:"contained",color:"primary",children:"CREATE REPOSITORY"})]})},w=c.p+"static/media/profile.dabd8598.svg",I=c.p+"static/media/profilePic.c5842155.jpeg",T=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(I),i=Object(l.a)(s,2),o=i[0],j=i[1];Object(a.useEffect)((function(){r.a.get("users/myprofile").then((function(e){n(e.data),j("data:image/jpeg;base64,".concat(e.data.profile_photo)),console.log(e.data)}))}),[n,j]);return Object(u.jsx)("div",{className:"profile_bg",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",style:{height:"88vh"},children:[Object(u.jsxs)("div",{className:"col-md-12 col-lg-6 my-auto",children:[Object(u.jsx)("label",{htmlFor:"file-input",children:Object(u.jsx)("img",{className:"profile_dp",src:o,alt:"profile pic"})}),Object(u.jsx)("input",{onChange:function(e){return function(e){var t=new FormData;t.append("profile_photo",e.target.files[0],e.target.files[0].name),console.log(t),r.a.post("users/me/upload",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}(e)},id:"file-input",type:"file"}),Object(u.jsx)("h2",{children:c.username}),Object(u.jsx)("h4",{children:c.collegeName}),Object(u.jsx)("p",{className:"profile_content",children:c.desc})]}),Object(u.jsx)("div",{className:"col-md-12 col-lg-6 my-auto",children:Object(u.jsx)("img",{className:"profile_hero",src:w,alt:"profile hero img .."})})]})})})},B=c(57),R=c(183),L=Object(x.a)({searchBox:{marginBottom:40,marginTop:40}}),_=function(){var e=L(),t=Object(a.useState)("repos"),c=Object(l.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)([]),o=Object(l.a)(i,2),j=o[0],d=o[1];Object(a.useEffect)((function(){console.log("INSIDE USE EFFECT"),r.a.get(n).then((function(e){return d(e.data)})).catch((function(e){return console.log(e)}))}),[n,d]);var b=["","tag1","tag2"],m=Object(a.useState)(b[0]),O=Object(l.a)(m,2),h=O[0],f=O[1],p=function(e,t){var c;f(t),c=t,console.log(c),s("getrepoBytags/".concat(c))};return Object(u.jsx)("div",{className:"searchrepo_bg",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-4"}),Object(u.jsxs)("div",{className:"col-8",children:[Object(u.jsx)(R.a,{className:e.searchBox,options:b,getOptionLabel:function(e){return e},renderInput:function(e){return Object(u.jsx)(v.a,Object(B.a)(Object(B.a)({},e),{},{label:"Search ...",variant:"outlined"}))},value:h,onChange:function(e,t){return p(0,t)}}),j.map((function(e,t){var c=e.courseName,a=e.courseDesc;return Object(u.jsx)(g,{heading:c,para:a},t)}))]})]})})})},E=c(32),M=(c(72),c(22)),D=c.p+"static/media/authSvg.ecd59e61.svg",q=Object(x.a)({textfield:{width:"90%",marginBottom:10},heading:{marginBottom:20},buttonStyle:{marginTop:20}}),U=function(){var e=q(),t=Object(o.g)(),c=Object(a.useState)(""),n=Object(l.a)(c,2),s=n[0],i=n[1],j=Object(a.useState)(""),d=Object(l.a)(j,2),m=d[0],O=d[1],h=function(){console.log(s,m);var e={email:s,password:m};r.a.post("users/login",e).then((function(e){E.b.success("User logged in successfully"),localStorage.setItem("token",e.data.token),console.log(e),t.push("/myprofile")})).catch((function(e){console.log(e),E.b.error("User could not be logged in")}))},g=Object(a.createRef)(),f=Object(a.createRef)();return Object(u.jsxs)("div",{className:"auth_bg",children:[Object(u.jsx)(E.a,{autoClose:3e3,hideProgressBar:!1,pauseOnHover:!0}),Object(u.jsx)("div",{className:"container",style:{height:"100vh"},children:Object(u.jsxs)("div",{className:"row",style:{height:"100vh"},children:[Object(u.jsx)("div",{className:"col-md-12 col-lg-6 my-auto",children:Object(u.jsx)("img",{className:"authSvg",src:D,alt:"signinsvg"})}),Object(u.jsxs)("div",{className:"col-md-12 col-lg-6 my-auto login_form",children:[Object(u.jsx)("h2",{className:e.heading,children:"SIGN IN"}),Object(u.jsxs)(M.ValidatorForm,{onSubmit:h,instantValidate:!1,children:[Object(u.jsx)(M.TextValidator,{className:e.textfield,type:"email",id:"email",label:"Email ...",variant:"outlined",onChange:function(e){return i(e.target.value)},ref:g,onBlur:function(e){return g.current.validate(e.target.value)},validators:["required"],errorMessages:["username field is required"]}),Object(u.jsx)(M.TextValidator,{className:e.textfield,type:"password",id:"password",label:"Password ...",variant:"outlined",onChange:function(e){return O(e.target.value)},ref:f,onBlur:function(e){return f.current.validate(e.target.value)},validators:["required"],errorMessages:["username field is required"]}),Object(u.jsx)(b.a,{onClick:h,className:e.buttonStyle,variant:"contained",color:"primary",type:"submit",children:"SUBMIT"})]})]})]})})]})},A=Object(x.a)({textfield:{width:"90%",marginBottom:10},heading:{marginBottom:20},buttonStyle:{marginTop:20}}),V=function(){var e=A(),t=Object(o.g)(),c=Object(a.useState)(""),n=Object(l.a)(c,2),s=n[0],i=n[1],j=Object(a.useState)(""),d=Object(l.a)(j,2),m=d[0],O=d[1],h=Object(a.useState)(""),g=Object(l.a)(h,2),f=g[0],p=g[1],x=Object(a.useState)(""),v=Object(l.a)(x,2),N=v[0],k=v[1],C=Object(a.useState)(""),y=Object(l.a)(C,2),S=y[0],w=y[1],I=function(){console.log(s,m,f,N,S);var e={username:s,email:m,password:f,collegeName:N,desc:S};r.a.post("users",e).then((function(e){console.log(e),E.b.success("User registered successfully"),t.push("/signin")})).catch((function(e){console.log(e),E.b.error("User could not be registered")}))},T=Object(a.createRef)(),B=Object(a.createRef)(),R=Object(a.createRef)(),L=Object(a.createRef)(),_=Object(a.createRef)();return Object(u.jsxs)("div",{className:"auth_bg",children:[Object(u.jsx)(E.a,{autoClose:3e3,hideProgressBar:!1,pauseOnHover:!0}),Object(u.jsx)("div",{className:"container",style:{height:"100vh"},children:Object(u.jsxs)("div",{className:"row",style:{height:"100vh"},children:[Object(u.jsx)("div",{className:"col-md-12 col-lg-6 my-auto",children:Object(u.jsx)("img",{className:"authSvg",src:D,alt:"signupsvg"})}),Object(u.jsxs)("div",{className:"col-md-12 col-lg-6 my-auto login_form",children:[Object(u.jsx)("h2",{className:e.heading,children:"SIGN UP"}),Object(u.jsxs)(M.ValidatorForm,{onSubmit:I,instantValidate:!1,children:[Object(u.jsx)(M.TextValidator,{id:"username",label:"Username ...",variant:"outlined",className:e.textfield,onChange:function(e){return i(e.target.value)},ref:T,onBlur:function(e){return T.current.validate(e.target.value)},validators:["required"],errorMessages:["username field is required"]}),Object(u.jsx)(M.TextValidator,{id:"email",type:"email",label:"Email ...",variant:"outlined",className:e.textfield,onChange:function(e){return O(e.target.value)},ref:B,onBlur:function(e){return B.current.validate(e.target.value)},validators:["required","isEmail"],errorMessages:["email field is required","email is not valid"]}),Object(u.jsx)(M.TextValidator,{id:"password",type:"password",label:"Password ...",variant:"outlined",className:e.textfield,onChange:function(e){return p(e.target.value)},ref:R,onBlur:function(e){return R.current.validate(e.target.value)},validators:["required"],errorMessages:["password field is required"]}),Object(u.jsx)(M.TextValidator,{id:"college",label:"College Name ...",variant:"outlined",className:e.textfield,onChange:function(e){return k(e.target.value)},ref:L,onBlur:function(e){return L.current.validate(e.target.value)},validators:["required"],errorMessages:["college name field is required"]}),Object(u.jsx)(M.TextValidator,{multiline:!0,id:"desc",label:"Tell something about yourself ...",variant:"outlined",className:e.textfield,onChange:function(e){return w(e.target.value)},ref:_,onBlur:function(e){return _.current.validate(e.target.value)},validators:["required"],errorMessages:["description field is required"]}),Object(u.jsx)(b.a,{onClick:I,className:e.buttonStyle,variant:"contained",color:"primary",type:"submit",children:"SUBMIT"})]})]})]})})]})},P=(c(136),c(137),function(e){var t=e.children;return Object(u.jsx)("button",{className:"skillsBtn",children:t})}),F=Object(x.a)({widthMax:{width:"80%",marginTop:20},topicInfoText:{width:"100%",marginBottom:10,marginRight:10},btn:{margin:10}}),G=function(){F(),Object(o.g)();var e=Object(o.h)().repoId,t=Object(a.useState)(""),c=Object(l.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){r.a.get("repos/".concat(e)).then((function(e){return s(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsx)("div",{className:"finalrepo_bg",children:Object(u.jsxs)("div",{className:"container finalrepo_container",children:[Object(u.jsx)("h1",{children:n.courseName}),Object(u.jsx)("p",{children:n.courseDesc}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),n?n.topicInfo.map((function(e){var t=e.topic,c=e.topicDesc;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:c})]})})):null,Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"COURSE LINKS"}),n?n.courseLinks.map((function(e){var t=e.linkTopic,c=e.link;return Object(u.jsx)("a",{target:"_blank",href:c,children:Object(u.jsx)(P,{children:t})})})):null]})})};var K=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.a,{from:"/",to:"/signup",exact:!0}),Object(u.jsx)(o.b,{exact:!0,path:"/signin",component:U}),Object(u.jsx)(o.b,{exact:!0,path:"/signup",component:V}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{}),Object(u.jsx)(o.b,{exact:!0,path:"/myprofile",component:T}),Object(u.jsx)(o.b,{exact:!0,path:"/newRepo",component:S}),Object(u.jsx)(o.b,{exact:!0,path:"/myRepos",component:f}),Object(u.jsx)(o.b,{exact:!0,path:"/searchRepos",component:_}),Object(u.jsx)(o.b,{exact:!0,path:"/finalRepo/:repoId",component:G}),Object(u.jsx)(j,{})]})]})})};r.a.defaults.baseURL="https://vit-backend-coffee.herokuapp.com/",localStorage.getItem("token")&&(r.a.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token")),Object(n.render)(Object(u.jsx)(a.StrictMode,{children:Object(u.jsx)(K,{})}),document.getElementById("root"))},33:function(e,t,c){}},[[138,1,2]]]);
//# sourceMappingURL=main.6cbbb4e1.chunk.js.map