(this.webpackJsonpblogapp=this.webpackJsonpblogapp||[]).push([[0],{51:function(e,t,n){e.exports=n(80)},56:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(25),i=n.n(o),c=(n(56),n(9)),u=n(10),l=n(12),s=n(11),p=n(13),d=n(18),f=n(4),h=n(2),m=n(23),b=n(3),g=n(17),v=n.n(g),E=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},x=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),localStorage.removeItem("userName"),{type:"AUTH_LOGOUT"}},O=function(e){return function(t){setTimeout((function(){t(x())}),1e3*e)}},w=n(32);function j(){var e=Object(h.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  border-radius: 10px;\n  background-color: white;\n  border: none;\n"]);return j=function(){return e},e}function y(){var e=Object(h.a)(["\n  width: 70%;\n  border: none;\n  justify-self: center;\n  background-color: white;\n  color: red;\n  font-weight: bold;\n  font-size: 15px;\n  white-space: nowrap;\n  cursor: pointer;\n  :focus {\n    outline: 0;\n  }\n"]);return y=function(){return e},e}function S(){var e=Object(h.a)(["\n  width: 70%;\n  height: auto;\n  border-top: 5px;\n  padding: 5px;\n  border: 1px solid #e84855;\n  justify-self: center;\n  border-radius: 5px;\n  font-weight: bold;\n  cursor: pointer;\n"]);return S=function(){return e},e}function k(){var e=Object(h.a)(["\n  width: 60%;\n  height: auto;\n  display: grid;\n  grid-row-gap: 20px;\n  align-content: center;\n"]);return k=function(){return e},e}function T(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  margin: 100px auto;\n  width: 50%;\n  height: auto;\n  box-shadow: 0 2px 3px #ccc;\n  border: 1px solid #eee;\n  padding: 10px;\n  box-sizing: border-box;\n\n  @media (max-width: 400px) {\n    width: 400px;\n  }\n"]);return T=function(){return e},e}var I=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={email:"",password:"",isLogin:!0},n.handleChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.switchAuthModeHandler=function(){n.setState((function(e){return{isLogin:!e.isLogin}}))},n.onSubmitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.email,n.state.password,n.state.isLogin),n.setState({email:"",password:""})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){"/"!==this.props.authRedirectPath&&this.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=null;this.props.isAuthenticated&&(e=a.a.createElement(d.a,{to:this.props.authRedirectPath}));var t=this.props.error?a.a.createElement("p",{style:{color:"red"}},this.props.error.message):null;return a.a.createElement(C,null,e,a.a.createElement(L,{onSubmit:this.onSubmitHandler,autocomplete:"off"},a.a.createElement("h1",{style:{color:"#e84855"}},"Welcome !"),t,a.a.createElement(_,{type:"email",name:"email",autocomplete:"off",placeholder:"Email",value:this.state.email,onChange:this.handleChange}),a.a.createElement(_,{type:"password",name:"password",autocomplete:"off",placeholder:"Password",value:this.state.password,onChange:this.handleChange}),a.a.createElement(U,{type:"submit"},this.state.isLogin?"Login":"Registration"),a.a.createElement(R,{onClick:this.switchAuthModeHandler},"Switch to ",this.state.isLogin?"Registration":"Login")))}}]),t}(r.Component),A=Object(f.b)((function(e){return{error:e.auth.error,isAuthenticated:null!==e.auth.token,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,r){return e(function(e,t,n){return function(r){r({type:"AUTH_START",userName:e});var a={email:e,password:t,returnSecureToken:!0},o=e.substring(0,e.lastIndexOf("@"));localStorage.setItem("userName",o);var i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzhZE2lUwl41epDFtbyMfDiVgVF48BTT8";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzhZE2lUwl41epDFtbyMfDiVgVF48BTT8"),v.a.post(i,a).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),r(E(e.data.idToken,e.data.localId)),r(O(e.data.expiresIn))})).catch((function(e){r({type:"AUTH_FAIL",error:e.response.data.error})}))}}(t,n,r))},onSetAuthRedirectPath:function(){return e({type:"SET_AUTH_REDIRECT_PATH",path:"/"})}}}))(I),C=b.a.div(T()),L=b.a.form(k()),U=b.a.button(S()),R=b.a.button(y()),_=b.a.input(j()),D=n(19);n(79);function N(){var e=Object(h.a)(["\n  color: white;\n  text-decoration: none;\n  width: 100%;\n  box-sizing: border-box;\n  display: block;\n\n  &:hover {\n    color: blue;\n  }\n"]);return N=function(){return e},e}function H(){var e=Object(h.a)(["\n  margin: 10px 0;\n  padding: 10px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  color: white;\n  font-weight: bold;\n  display: block;\n  width: 100%;\n"]);return H=function(){return e},e}function P(){var e=Object(h.a)(["\n  margin: 0;\n  padding: 10px;\n  list-style: none;\n  display: flex;\n  flex-flow: row;\n  height: 100%;\n"]);return P=function(){return e},e}function F(){var e=Object(h.a)(["\n  height: 70px;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #00203fff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  box-sizing: border-box;\n  z-index: 90;\n"]);return F=function(){return e},e}var z=Object(f.b)((function(e){return{userName:e.auth.userName}}),(function(e){return{onLogout:function(){return e(x())}}}))((function(e){var t=localStorage.getItem("userName");return a.a.createElement(M,null,a.a.createElement("div",null,a.a.createElement("h1",null,a.a.createElement(W,{to:"/"},"Hello ",a.a.createElement("span",{style:{color:"#adefd1ff"}},t)))),a.a.createElement("nav",null,a.a.createElement(B,null,a.a.createElement(G,null,a.a.createElement(W,{activeClassName:"Active-nav",to:"/users"},"List of Users")),a.a.createElement(G,null,a.a.createElement(W,{activeClassName:"Active-nav",to:"/feed"},"My feed")),a.a.createElement(G,{onClick:e.onLogout},a.a.createElement(W,{to:"/login"},"Logout")))))})),M=b.a.header(F()),B=b.a.ul(P()),G=b.a.li(H()),W=Object(b.a)(D.b)(N());function V(){var e=Object(h.a)(["\n  margin: 5px 0;\n  width: 30%;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #e84855;\n  color: #fa923f;\n  cursor: pointer;\n\n  &:hover {\n    color: blue;\n  }\n"]);return V=function(){return e},e}function J(){var e=Object(h.a)(["\n  display: block;\n  width: 80%;\n  box-sizing: border-box;\n  border: 1px solid #00203fff;\n  border-radius: 5px;\n  outline: none;\n  font: inherit;\n  margin: auto;\n"]);return J=function(){return e},e}function Z(){var e=Object(h.a)(["\n  display: block;\n  width: 80%;\n  box-sizing: border-box;\n  border: 1px solid #00203fff;\n  border-radius: 5px;\n  outline: none;\n  font: inherit;\n  margin: auto;\n"]);return Z=function(){return e},e}function q(){var e=Object(h.a)(["\n  display: block;\n  margin: 10px auto;\n  color: #00203fff;\n  text-align: center;\n  font-weight: bold;\n"]);return q=function(){return e},e}function $(){var e=Object(h.a)(["\n  width: 80%;\n  height: auto;\n  margin: 20px auto;\n  border: 1px solid #eee;\n  box-shadow: 0 2px 3px #ccc;\n  text-align: center;\n"]);return $=function(){return e},e}var K=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={title:"",content:""},n.onPressBtn=function(){var e=localStorage.getItem("userName"),t={title:n.state.title,content:n.state.content,userName:e,userId:n.props.userId};v.a.post("https://postsapp-adcf2.firebaseio.com/post.json?auth="+n.props.token,t).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),n.setState({title:"",content:""})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(X,null,a.a.createElement("h1",{style:{color:"#e84855"}},"Write a Post"),a.a.createElement(Y,null,"Title"),a.a.createElement(ee,{type:"text",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}}),a.a.createElement(Y,null,"Content"),a.a.createElement(te,{rows:"4",value:this.state.content,onChange:function(t){return e.setState({content:t.target.value})}}),a.a.createElement(ne,{onClick:this.onPressBtn},"Post"))}}]),t}(r.Component),Q=Object(f.b)((function(e){return{userName:e.auth.userName,userId:e.auth.userId,token:e.auth.token}}))(K),X=b.a.div($()),Y=b.a.label(q()),ee=b.a.input(Z()),te=b.a.textarea(J()),ne=b.a.button(V()),re=function(){return a.a.createElement("div",null,a.a.createElement(z,null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(Q,null))};function ae(){var e=Object(h.a)(["\n  list-style: none;\n  color: #e84855;\n  font-weight: bold;\n  font-weight: 20px;\n  cursor: pointer;\n"]);return ae=function(){return e},e}function oe(){var e=Object(h.a)(["\n  width: 50%;\n  height: auto;\n  margin: 50px auto;\n  border: 1px solid #eee;\n  box-shadow: 0 2px 3px #ccc;\n  text-align: center;\n"]);return oe=function(){return e},e}var ie=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).handleUserClick=function(e){n.setState(Object(m.a)({},e,!n.state[e])),n.props.onClickUser(e,n.state[e],n.props.followList)},n.state={},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onGetUsers()}},{key:"render",value:function(){var e=this;console.log(this.props.followList);var t=[];this.props.data&&(t=Object.values(this.props.data).map((function(e){return e.userName}))),t=t.filter((function(e,n){return t.indexOf(e)===n}));var n=localStorage.getItem("userName"),r=t.indexOf(n);r>=0&&t.splice(r,1);var o=t.map((function(t){return a.a.createElement(le,{onClick:function(){return e.handleUserClick(t)},key:t},t," ",e.state[t]?" + ":null)}));return a.a.createElement(ue,null,a.a.createElement("p",{style:{color:"red"}},"Click on the user to Follow :) "),a.a.createElement("ul",null,o))}}]),t}(r.Component),ce=Object(f.b)((function(e){return{token:e.auth.token,data:e.users.data,followList:e.users.followList}}),(function(e){return{onGetUsers:function(){return e((function(e){e({type:"GET_USERS_START"}),v.a.get("https://postsapp-adcf2.firebaseio.com/post.json?auth="+localStorage.getItem("token")).then((function(t){e({type:"GET_USERS_SUCCESS",data:t.data})})).catch((function(t){e({type:"GET_USERS_FAIL",error:t.response.data.error})}))}))},onClickUser:function(t,n,r){return e(function(e,t,n){return function(r){var a=Object(w.a)(n).concat(e);console.log("[USERNAME]: ",e),console.log("[AFTER CONCAT]: ",a),t&&(a=Object(w.a)(a).filter((function(t){return t!==e}))),console.log("[AFTER FILTER]: ",a),r(function(e){return{type:"FOLLOW__USERS_HANDLER",followList:e}}(a))}}(t,n,r))}}}))(ie),ue=b.a.div(oe()),le=b.a.li(ae()),se=function(){return a.a.createElement("div",null,a.a.createElement(z,null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(ce,null))};function pe(){var e=Object(h.a)(["\n  width: 50%;\n  height: auto;\n  padding: 10px;\n  margin: 50px auto;\n  border: 1px solid #eee;\n  box-shadow: 0 2px 3px #ccc;\n  text-align: center;\n  display: grid;\n  grid-gap: 5px;\n  grid-template-columns: 2fr 8fr;\n"]);return pe=function(){return e},e}var de=function(e){return a.a.createElement(fe,null,a.a.createElement("header",{style:{color:"#e84855",fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center"}},e.title),a.a.createElement("article",{style:{whiteSpace:"normal",wordBreak:"break-all"}},e.content))},fe=b.a.div(pe());function he(){var e=Object(h.a)(["\n  display: grid;\n  grid-gap: 10px;\n"]);return he=function(){return e},e}var me=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={OutputData:[]},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="?auth="+this.props.token+'&orderBy="userId"&equalTo="'+this.props.userId+'"';v.a.get("https://postsapp-adcf2.firebaseio.com/post.json"+t).then((function(t){e.setState({OutputData:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=null;return this.state.OutputData&&(e=Object.values(this.state.OutputData).map((function(e){return a.a.createElement(de,{key:e.title,title:e.title,content:e.content})}))),a.a.createElement(ge,null,a.a.createElement(z,null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",null,e))}}]),t}(r.Component),be=Object(f.b)((function(e){return{token:e.auth.token,userId:e.auth.userId,data:e.users.data,followList:e.users.followList}}))(me),ge=b.a.div(he()),ve=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(d.a,{to:"/login"})}}]),t}(r.Component),Ee=Object(f.b)(null,(function(e){return{onLogout:function(){return e(x())}}}))(ve),xe=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(d.d,null,a.a.createElement(d.b,{exact:!0,path:"/login",component:A}),a.a.createElement(d.a,{to:"/login"}));return this.props.isAuth&&(e=a.a.createElement(d.d,null,a.a.createElement(d.b,{exact:!0,path:"/login",component:A}),a.a.createElement(d.b,{exact:!0,path:"/",component:re}),a.a.createElement(d.b,{exact:!0,path:"/logout",component:Ee}),a.a.createElement(d.b,{exact:!0,path:"/users",component:se}),a.a.createElement(d.b,{exact:!0,path:"/feed",component:be}),a.a.createElement(d.a,{to:"/"}))),a.a.createElement("div",null,e)}}]),t}(r.Component),Oe=Object(f.b)((function(e){return{isAuth:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<new Date)e(x());else{var r=localStorage.getItem("userId");e(E(t,r)),e(O((n.getTime()-(new Date).getTime())/1e3))}}else e(x())}))}}}))(xe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we=n(21),je=n(48),ye=n(22),Se=function(e,t){return Object(ye.a)({},e,{},t)},ke={email:"",password:"",token:null,userId:null,error:null,userName:null,authRedirectPath:"/"},Te=function(e,t){return Se(e,{error:null,userName:t.userName})},Ie=function(e,t){return Se(e,{token:t.idToken,userId:t.userId,error:null})},Ae=function(e,t){return Se(e,{error:t.error})},Ce=function(e,t){return Se(e,{token:null,userId:null,userName:null})},Le=function(e,t){return Se(e,{authRedirectPath:t.path})},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return Te(e,t);case"AUTH_SUCCESS":return Ie(e,t);case"AUTH_FAIL":return Ae(e,t);case"AUTH_LOGOUT":return Ce(e);case"SET_AUTH_REDIRECT_PATH":return Le(e,t);default:return e}},Re={data:null,followList:[],error:""},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USERS_START":return Object(ye.a)({},e);case"GET_USERS_SUCCESS":return Object(ye.a)({},e,{data:t.data});case"GET_USERS_FAIL":return Object(ye.a)({},e,{error:t.error});case"FOLLOW__USERS_HANDLER":return Object(ye.a)({},e,{followList:t.followList});default:return e}},De=Object(we.c)({auth:Ue,users:_e}),Ne=we.d,He=Object(we.e)(De,Ne(Object(we.a)(je.a))),Pe=a.a.createElement(f.a,{store:He},a.a.createElement(D.a,null,a.a.createElement(Oe,null)));i.a.render(Pe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.33469285.chunk.js.map