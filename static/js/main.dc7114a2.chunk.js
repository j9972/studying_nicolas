(this.webpackJsonptwitter=this.webpackJsonptwitter||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(31),s=n.n(r),i=n(8),o=n(21),u=n(6),l=n(9),j=n.n(l),d=n(15),b=n(23),p=(n(39),n(41),n(52),{apiKey:"AIzaSyBLyhke55iBfY4TFajdoSzZaCK7D8ZX_vs",authDomain:"nwitter-7e49f.firebaseapp.com",projectId:"nwitter-7e49f",storageBucket:"nwitter-7e49f.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/studying_nicolas",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyBLyhke55iBfY4TFajdoSzZaCK7D8ZX_vs",REACT_APP_AUTH_DOMAIN:"nwitter-7e49f.firebaseapp.com",REACT_APP_PROJECT_ID:"nwitter-7e49f",REACT_APP_STORAGE_BUCKET:"nwitter-7e49f.appspot.com",REACT_APP_MESSAGE_ID:"465951404655",REACT_APP_APP_ID:"1:465951404655:web:e3728237d08c3a3f5d139a"}).REACT_APP_MESSAGIN_ID,appId:"1:465951404655:web:e3728237d08c3a3f5d139a"});b.a.initializeApp(p);var f=b.a,O=b.a.auth(),h=b.a.firestore(),m=b.a.storage(),x=n(1),v=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(!0),b=Object(i.a)(l,2),p=b[0],f=b[1],h=Object(a.useState)(""),m=Object(i.a)(h,2),v=m[0],g=m[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&u(a),console.log(e.target.name)},w=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(n,o);case 5:e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(n,o);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),g(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:w,className:"container",children:[Object(x.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(x.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:y,className:"authInput"}),Object(x.jsx)("input",{type:"submit",value:p?"Create Account":"Sign In"}),v&&Object(x.jsx)("span",{className:"authError",children:v})]}),Object(x.jsx)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:p?"Sign In":"Create Account"})]})},g=n(10),y=n(22),w=function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new f.auth.GoogleAuthProvider:"github"===n&&(a=new f.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"authContainer ",children:[Object(x.jsx)(g.a,{icon:y.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(x.jsx)(v,{}),Object(x.jsxs)("div",{className:"authBtns",children:[Object(x.jsxs)("button",{name:"google",className:"authBtns",onClick:e,children:["Continue with Google ",Object(x.jsx)(g.a,{icon:y.b})]}),Object(x.jsxs)("button",{name:"github",className:"authBtns",onClick:e,children:["Continue with Github ",Object(x.jsx)(g.a,{icon:y.a})]})]})]})},_=n(33),A=n(18),S=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(t.text),l=Object(i.a)(u,2),b=l[0],p=l[1],f=function(){var e=Object(d.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.confirm("r u sure?"),console.log(n),!n){e.next=7;break}return e.next=5,h.doc("nweets/".concat(t.id)).delete();case 5:return e.next=7,m.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){return o((function(e){return!e}))},v=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(t,b),e.next=4,h.doc("nweets/".concat(t.id)).update({text:b});case 4:o(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"nweet",children:s?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:v,className:"container nweetEdit",children:[Object(x.jsx)("input",{type:"text",placeholder:"edit ur nweet",value:b,required:!0,onChange:function(e){var t=e.target.value;p(t)},className:"formInput"}),Object(x.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(x.jsx)("button",{onClick:O,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(x.jsx)("img",{src:t.attachmentUrl}),n&&Object(x.jsxs)("div",{class:"nweet__actions",children:[Object(x.jsx)("span",{onClick:f,children:Object(x.jsx)(g.a,{icon:A.d})}),Object(x.jsx)("span",{onClick:O,children:Object(x.jsx)(g.a,{icon:A.a})})]})]})})},N=n(54),C=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],b=u[1],p=function(){var e=Object(d.a)(j.a.mark((function e(n){var a,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==r){e.next=3;break}return e.abrupt("return");case 3:if(a="",""===l){e.next=12;break}return c=m.ref().child("".concat(t.uid,"/").concat(Object(N.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,h.collection("nweets").add(o);case 15:s(""),b("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(x.jsxs)("div",{className:"factoryInput__container",children:[Object(x.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(x.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(x.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(x.jsx)("span",{children:"Add photos"}),Object(x.jsx)(g.a,{icon:A.b})]}),Object(x.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;b(t)},Boolean(t)&&n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(x.jsxs)("div",{className:"factoryForm__attachment",children:[Object(x.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(x.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return b("")},children:[Object(x.jsx)("span",{children:"Remove"}),Object(x.jsx)(g.a,{icon:A.c})]})]})]})},P=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){h.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(_.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(C,{userObj:t}),Object(x.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(x.jsx)(S,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},I=function(e){var t=e.refreshUser,n=e.userObj,c=Object(u.f)(),r=Object(a.useState)(n.displayName),s=Object(i.a)(r,2),o=s[0],l=s[1],b=function(){var e=Object(d.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===o){e.next=5;break}return e.next=4,n.updateProfile({displayName:o});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("form",{onSubmit:b,className:"profileForm",children:[Object(x.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",placeholder:"Display name",value:o,autoFocus:!0,className:"formInput"}),Object(x.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(x.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){O.signOut(),c.push("/")},children:"Log Out"})]})},E=function(e){var t=e.userObj;return Object(x.jsx)("nav",{children:Object(x.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(x.jsx)(g.a,{icon:y.c,color:"#04AAFF",size:"2x"})})}),Object(x.jsx)("li",{children:Object(x.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(x.jsx)(g.a,{icon:A.e,color:"#04AAFF",size:"2x"}),Object(x.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},k=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(x.jsxs)(o.a,{children:[n&&Object(x.jsx)(E,{userObj:a}),Object(x.jsx)(u.c,{children:n?Object(x.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(x.jsx)(u.a,{exact:!0,path:"/",children:Object(x.jsx)(P,{userObj:a})}),Object(x.jsx)(u.a,{exact:!0,path:"/profile",children:Object(x.jsx)(I,{userObj:a,refreshUser:t})})]}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(u.a,{exact:!0,path:"/",children:Object(x.jsx)(w,{})})})})]})};var T=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){O.onAuthStateChanged((function(e){u(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(x.jsx)(x.Fragment,{children:n?Object(x.jsx)(k,{refreshUser:function(){var e=O.currentUser;u({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"Initializing..."})};n(50);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(T,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.dc7114a2.chunk.js.map