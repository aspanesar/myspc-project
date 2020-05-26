(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{Pt19:function(e,t,a){e.exports={locationList:"spc-pages-auth-login-steps-style-locationList",active:"spc-pages-auth-login-steps-style-active"}},SIyL:function(e,t,a){"use strict";a.r(t);a("2qtc");var r=a("kLXV"),n=(a("IzEo"),a("bx4M")),o=(a("+L6B"),a("2/Rp")),s=a("0Owb"),c=a("k1fw"),l=a("tJVT"),i=a("q1tI"),E=a.n(i),u=a("9kvl"),m=a("ufJv"),T=a.n(m),g=(a("14J3"),a("BMrR")),O=(a("jCWc"),a("kPKH")),I=(a("sRBo"),a("kaz8")),d=(a("y8nQ"),a("Vl3Y")),A=(a("5NDa"),a("5rEg")),p=(a("tU7J"),a("wFql")),L=a("hyrn"),N=a("Pt19"),S=a.n(N),f=p["a"].Text,b=function(e){var t=Object(i["useState"])(!1),a=Object(l["a"])(t,2),r=a[0],n=a[1],s=Object(i["useState"])(0),u=Object(l["a"])(s,2),m=u[0],T=u[1],p=Object(i["useRef"])(),N=e.dispatch,S=function(e){e.remember?localStorage.setItem("practiceId",e.practiceId):localStorage.removeItem("practiceId");var t={practiceId:e.practiceId};N({type:"login/Practice",payload:Object(c["a"])({},t)})};return Object(i["useEffect"])((function(){var t=!1;return p.current.focus(),!t&&e.userLogin.practiceId.count>m&&200===e.userLogin.practiceId.statusCode?(n(!1),T(e.userLogin.practiceId.count),e.successCall(e.userLogin.practiceId)):!t&&e.userLogin.practiceId.count>m&&401===e.userLogin.practiceId.statusCode&&(n(!0),T(e.userLogin.practiceId.count)),function(){t=!0}})),E.a.createElement(i["Fragment"],null,E.a.createElement("p",{style:{marginBottom:15}},"Enter your Practice ID to log in to your account."),r&&E.a.createElement(L["a"],{content:e.userLogin.practiceId.message,type:"error"}),E.a.createElement(d["a"],{layout:"vertical",name:"normal_login",className:"login-form",initialValues:{remember:!!localStorage.getItem("practiceId"),practiceId:localStorage.getItem("practiceId")||""},onFinish:S},E.a.createElement(d["a"].Item,{label:"PRACTICE ID",name:"practiceId",validateStatus:r?"error":"",rules:[{required:!0,message:"This field is required."},{pattern:/[0-4]/g,message:"Please enter valid Practice ID!"}]},E.a.createElement(A["a"],{className:"hasLeftPrefix",prefix:E.a.createElement("i",{className:"fas fa-address-card"}),placeholder:"Practice ID",autoFocus:!0,ref:p})),E.a.createElement(g["a"],{justify:"space-between"},E.a.createElement(O["a"],null,E.a.createElement(d["a"].Item,{name:"remember",style:{marginBottom:10},valuePropName:"checked"},E.a.createElement(I["a"],null,E.a.createElement(f,{type:"secondary"},"Remember my Practice ID"))))),E.a.createElement(d["a"].Item,{style:{textAlign:"right",margin:0}},E.a.createElement(o["a"],{type:"primary",htmlType:"submit",className:"btn-w25"},"Log in"))))},R=Object(u["a"])()(b),y=a("55Ip"),C=p["a"].Text,U=function(e){var t=Object(i["useState"])(0),a=Object(l["a"])(t,2),r=a[0],n=a[1],s=Object(i["useState"])(!1),u=Object(l["a"])(s,2),m=u[0],T=u[1],p=Object(i["useState"])(!1),N=Object(l["a"])(p,2),S=N[0],f=N[1],b=Object(i["useRef"])(),R=d["a"].useForm(),U=Object(l["a"])(R,1),F=U[0],h=e.dispatch,D=function(t){t.remember?localStorage.setItem("username",t.username):localStorage.removeItem("username"),t.practiceId=e.userLogin.practiceId.data,delete t["remember"],h({type:"login/userlogin",payload:Object(c["a"])({},t)})};return Object(i["useEffect"])((function(){var t=!1;if(b.current.focus(),!t&&e.userLogin.login.count>r&&200===e.userLogin.login.statusCode){f(!1);var a=e.userLogin.login;n(a.count),e.responseCall(a)}else!t&&e.userLogin.login.count>r&&e.userLogin.login.statusCode>=400&&(f(!0),n(e.userLogin.login.count));return function(){t=!0}})),E.a.createElement(i["Fragment"],null,E.a.createElement("p",{style:{marginBottom:15}},"Enter your username / email and password to continue logging in to your account."),S&&E.a.createElement(L["a"],{content:e.userLogin.login.message,type:"error",time:3}),E.a.createElement(d["a"],{form:F,layout:"vertical",name:"login",className:"login-form",onFinish:D,initialValues:{remember:!0,username:localStorage.getItem("username")||""}},E.a.createElement(d["a"].Item,{name:"username",label:"USERNAME / EMAIL",validateStatus:S?"error":"",rules:[{required:!0,message:"This field is required."},function(e){var t=e.setFieldsValue,a=e.getFieldValue;return{validator:function(e,r){return r?(t({username:a("username").toLowerCase()}),Promise.resolve()):Promise.reject("")}}}]},E.a.createElement(A["a"],{className:"hasLeftPrefix",prefix:E.a.createElement("i",{className:"fas fa-user"}),placeholder:"Username / Email",autoFocus:!0,ref:b})),E.a.createElement(d["a"].Item,{name:"password",label:"PASSWORD",validateStatus:S?"error":"",rules:[{required:!0,message:"This field is required."}]},E.a.createElement(A["a"],{type:m?"text":"password",className:"hasLeftPrefix hasEyeIcon",prefix:E.a.createElement("i",{className:"fas fa-key",name:"key"}),suffix:E.a.createElement("i",{onClick:function(){return T(!m)},className:"far "+(m?"fa-eye":"fa-eye-slash")}),placeholder:"Password"})),E.a.createElement(g["a"],{justify:"space-between"},E.a.createElement(O["a"],null,E.a.createElement(d["a"].Item,{name:"remember",style:{marginBottom:10},valuePropName:"checked"},E.a.createElement(I["a"],null,E.a.createElement(C,{type:"secondary"},"Remember me")))),E.a.createElement(O["a"],{style:{paddingTop:6}},E.a.createElement(y["Link"],{className:"login-form-forgot",to:"/user/forgot"},E.a.createElement(C,{type:"secondary"},"Forgot your password?")))),E.a.createElement(d["a"].Item,{style:{textAlign:"right",margin:0}},E.a.createElement(o["a"],{type:"primary",htmlType:"submit",className:"btn-w25"},"Log In"))))},F=Object(u["a"])((function(e){var t=e.login,a=e.loading;return{userLogin:t,submitting:a.effects["login/login"]}}))(U),h=(a("Mwp2"),a("VXEj")),D=(p["a"].Text,function(e){var t=Object(i["useState"])(!1),a=Object(l["a"])(t,2),r=a[0],n=a[1],s=Object(i["useState"])({}),u=Object(l["a"])(s,2),m=u[0],T=u[1],g=Object(i["useState"])([]),O=Object(l["a"])(g,2),I=O[0],d=O[1],A=e.dispatch;Object(i["useEffect"])((function(){var t=!1;return e.userLogin.login&&d(e.userLogin.login.data.locationAccess),!t&&e.userLogin.defLoc&&200===e.userLogin.defLoc.statusCode&&(e.userLogin.login.data.isFirstTime?e.history.push("/user/register"):(A({type:"global/avtiveUser",payload:e.userLogin.login.data}),localStorage.setItem("token",e.userLogin.login.data.token),e.history.push("/"))),function(){t=!0}}));var p=function(e){n(!0),T(e)},L=function(t){var a={locationAccessId:m._id,userId:e.userLogin.login.data._id,isDefault:!0};A({type:"login/defaultLoc",payload:Object(c["a"])({},a)})};return E.a.createElement(i["Fragment"],null,E.a.createElement("p",{style:{marginBottom:"8px"}},"Select the location you\u2019ll be working from today."),E.a.createElement(h["a"],{itemLayout:"horizontal",dataSource:I,className:S.a.locationList,renderItem:function(e){return E.a.createElement(h["a"].Item,{style:{border:0},className:m._id===e._id?S.a.active:"",onClick:function(){return p(e)}},E.a.createElement(h["a"].Item.Meta,{avatar:E.a.createElement("i",{className:"fad fa-map-marker-alt"}),title:e.shortName+"-"+e.locationName,description:e.city+", "+e.state}))}}),E.a.createElement("div",{style:{textAlign:"right"}},E.a.createElement(o["a"],{type:"primary",htmlType:"submit",onClick:L,className:(r?"":"btn-disabled")+" btn-w25",disabled:!r},"Log in")))}),H=Object(u["a"])((function(e){var t=e.login,a=e.global,r=e.loading;return{userLogin:t,global:a,submitting:r.effects["login/login"]}}))(D),Y=function(e){var t=Object(i["useState"])(!1),a=Object(l["a"])(t,2),u=a[0],m=a[1],g=Object(i["useState"])(!1),O=Object(l["a"])(g,2),I=O[0],d=O[1],A=Object(i["useState"])(0),p=Object(l["a"])(A,2),L=p[0],N=p[1],S=Object(i["useState"])(0),f=Object(l["a"])(S,2),b=f[0],y=f[1],C=Object(i["useState"])(!0),U=Object(l["a"])(C,2),h=U[0],D=U[1],Y=e.dispatch;Object(i["useEffect"])((function(){Y&&(Y({type:"login/clearReset"}),Y({type:"register/clearAll"}))}),[Y]),Object(i["useEffect"])((function(){var t=!1,a=e.userLogin;if(!t&&a.forgot.count>0&&Y({type:"login/clearFP"}),!t&&a.accept.count>b&&200===a.accept.statusCode){if(y(a.accept.count),m(!1),console.log(e.userLogin.login),e.userLogin.login.data.isRecentPwdUpdated)return e.history.push("/user/rest-password");if(e.userLogin.login.data.isFirstTime)return e.history.push("/user/register");if(e.userLogin.login.data.locationAccess.length>1)N(2);else{var r={locationAccessId:e.userLogin.login.data.locationAccess[0]._id,userId:e.userLogin.login.data._id,isDefault:!0};Y({type:"login/defaultLoc",payload:Object(c["a"])({},r)})}}return function(){t=!0}})),Object(i["useEffect"])((function(){var t=!1;return!t&&e.userLogin.defLoc&&200===e.userLogin.defLoc.statusCode&&(localStorage.setItem("token",e.userLogin.login.data.token),Y({type:"global/avtiveUser",payload:e.userLogin.login.data}),e.history.push("/")),function(){t=!0}}));var v=function(e){200===e.statusCode&&N(1)},j=function(e){e.data.acceptAgreement?M():m(!0)},M=function(t){var a={acceptAgreement:!0,userId:e.userLogin.login.data._id};Y({type:"login/acceptTerm",payload:Object(c["a"])({},a)})},B=function(e){var t=document.getElementById("termsBox");t.scrollTop>t.scrollHeight/2-10?d(!0):d(!1)},w=function(){D(!1),m(!1)};return E.a.createElement(i["Fragment"],null,E.a.createElement(n["a"],{className:T.a.main,title:"Login"},0===L&&E.a.createElement(R,Object(s["a"])({},e,{successCall:v})),1===L&&E.a.createElement(F,Object(s["a"])({},e,{responseCall:j})),2===L&&E.a.createElement(H,e),E.a.createElement(r["a"],{title:"End User License Agreement",className:T.a.termModel,visible:u&&h,onCancel:w,footer:[E.a.createElement(o["a"],{key:"back",onClick:w},"Cancel"),E.a.createElement(o["a"],{key:"submit",type:"primary",className:(I?"":"btn-disabled")+" btn-w25",disabled:!I,onClick:M},"Accept")]},E.a.createElement("p",null,"Please read the following license agreement carefully before continuing. You must scroll to the bottom of the agreement to Accept."),E.a.createElement(n["a"],{style:{width:"100%",maxHeight:408,overflowY:"auto"},bodyStyle:{padding:10},id:"termsBox",onScroll:B},E.a.createElement("p",{style:{fontFamily:"Averta-Semibold",marginBottom:16}},"End-User License Agreement (\u201cEULA\u201d)"),E.a.createElement("p",null,"THIS EULA IS A LEGAL DOCUMENT BETWEEN YOU AND CRYSTAL CLEAR DIGITAL MARKETING, LLC (\u201cCRYSTAL CLEAR\u201d). READ IT CAREFULLY BEFORE COMPLETING THE INSTALLATION PROCESS AND USING THE SOFTWARE. IT PROVIDES A LICENSE TO USE THE SOFTWARE AND CONTAINS IMPORTANT CONDITIONS OF USE, WARRANTY INFORMATION AND LIABILITY DISCLAIMERS. BY USING THE SOFTWARE, YOU ARE CONFIRMING ACCEPTANCE OF THE SOFTWARE AND AGREEING TO BECOME BOUND BY THE TERMS OF THIS EULA. IF YOU DO NOT WISH TO DO SO, DO NOT INSTALL AND USE THE SOFTWARE. IF YOU ARE ENTERING INTO THIS EULA ON BEHALF OF AN ENITITY, YOU REPRESENT THAT YOU HAVE AUTHORITY TO BIND THAT ENTITY. IF YOU DO NOT HAVE SUCH AUTHORITY OR YOU DO NOT AGREE TO THE TERMS OF THIS EULA, NEITHER YOU NOR THE ENTITY MAY USE THE SOFTWARE. "),E.a.createElement("p",null,"THE LIMITED WARRANTY, EXCLUSIVE REMEDIES AND LIMITED LIABILITY TERMS SET FORTH BELOW ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE EULA BETWEEN CRYSTAL CLEAR AND YOU. Crystal Clear would not be able to provide the Software on an economic basis without such limitations."),E.a.createElement("p",null,"The term SOFTWARE includes all software, subscriptions, data, lists, passwords,"),E.a.createElement("p",{style:{fontFamily:"Averta-Semibold",marginBottom:16}},"End-User License Agreement (\u201cEULA\u201d)"),E.a.createElement("p",null,"THIS EULA IS A LEGAL DOCUMENT BETWEEN YOU AND CRYSTAL CLEAR DIGITAL MARKETING, LLC (\u201cCRYSTAL CLEAR\u201d). READ IT CAREFULLY BEFORE COMPLETING THE INSTALLATION PROCESS AND USING THE SOFTWARE. IT PROVIDES A LICENSE TO USE THE SOFTWARE AND CONTAINS IMPORTANT CONDITIONS OF USE, WARRANTY INFORMATION AND LIABILITY DISCLAIMERS. BY USING THE SOFTWARE, YOU ARE CONFIRMING ACCEPTANCE OF THE SOFTWARE AND AGREEING TO BECOME BOUND BY THE TERMS OF THIS EULA. IF YOU DO NOT WISH TO DO SO, DO NOT INSTALL AND USE THE SOFTWARE. IF YOU ARE ENTERING INTO THIS EULA ON BEHALF OF AN ENITITY, YOU REPRESENT THAT YOU HAVE AUTHORITY TO BIND THAT ENTITY. IF YOU DO NOT HAVE SUCH AUTHORITY OR YOU DO NOT AGREE TO THE TERMS OF THIS EULA, NEITHER YOU NOR THE ENTITY MAY USE THE SOFTWARE. "),E.a.createElement("p",null,"THE LIMITED WARRANTY, EXCLUSIVE REMEDIES AND LIMITED LIABILITY TERMS SET FORTH BELOW ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE EULA BETWEEN CRYSTAL CLEAR AND YOU. Crystal Clear would not be able to provide the Software on an economic basis without such limitations."),E.a.createElement("p",null,"The term SOFTWARE includes all software, subscriptions, data, lists, passwords,")))))};t["default"]=Object(u["a"])((function(e){var t=e.login,a=e.register,r=e.global,n=e.loading;return{userLogin:t,register:a,global:r,submitting:n.effects["login/login"]}}))(Y)},ufJv:function(e,t,a){e.exports={main:"spc-pages-auth-login-style-main",icon:"spc-pages-auth-login-style-icon",other:"spc-pages-auth-login-style-other",register:"spc-pages-auth-login-style-register",termModel:"spc-pages-auth-login-style-termModel"}}}]);