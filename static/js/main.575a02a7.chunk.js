(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{48:function(e,t,a){e.exports=a(60)},53:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),s=a.n(r),o=(a(53),a(26)),l=a(16),c=a(35),u=a(36),m=a(43),d=a(42),p=a(10),g=a(3),f=a(37),b=a(18),h=a(101),v=a(93),E=a(95),O=a(92),w=a(98),j=a(29),y=a(97),q=a(96),S=a(39),P=a.n(S),k=a(40),x=a.n(k),C=a(41),N=a.n(C),B=a(102),D=a(99),R=a(100),A=a(31),H=a.n(A),I=a(32),M=a.n(I);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var J=Object(f.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:240},title:{flexGrow:1},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:G({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-start"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginRight:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:0}}}));function L(){var e=J(),t=Object(b.a)(),a=i.a.useState(!1),n=Object(d.a)(a,2),r=n[0],s=n[1];return i.a.createElement("div",{className:e.root},i.a.createElement(O.a,null),i.a.createElement(v.a,{position:"fixed",className:Object(g.a)(e.appBar,Object(p.a)({},e.appBarShift,r))},i.a.createElement(E.a,null,i.a.createElement(j.a,{variant:"h6",noWrap:!0,className:e.title},"Persistent drawer"),i.a.createElement(q.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:function(){s(!0)},className:Object(g.a)(r&&e.hide)},i.a.createElement(P.a,null)))),i.a.createElement("main",{className:Object(g.a)(e.content,Object(p.a)({},e.contentShift,r))},i.a.createElement("div",{className:e.drawerHeader}),i.a.createElement(j.a,{paragraph:!0},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."),i.a.createElement(j.a,{paragraph:!0},"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.")),i.a.createElement(h.a,{className:e.drawer,variant:"persistent",anchor:"right",open:r,classes:{paper:e.drawerPaper}},i.a.createElement("div",{className:e.drawerHeader},i.a.createElement(q.a,{onClick:function(){s(!1)}},"rtl"===t.direction?i.a.createElement(x.a,null):i.a.createElement(N.a,null))),i.a.createElement(y.a,null),i.a.createElement(w.a,null,["Inbox","Starred","Send email","Drafts"].map((function(e,t){return i.a.createElement(B.a,{button:!0,key:e},i.a.createElement(D.a,null,t%2===0?i.a.createElement(H.a,null):i.a.createElement(M.a,null)),i.a.createElement(R.a,{primary:e}))}))),i.a.createElement(y.a,null),i.a.createElement(w.a,null,["All mail","Trash","Spam"].map((function(e,t){return i.a.createElement(B.a,{button:!0,key:e},i.a.createElement(D.a,null,t%2===0?i.a.createElement(H.a,null):i.a.createElement(M.a,null)),i.a.createElement(R.a,{primary:e}))})))))}a(59);var F=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(L,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.575a02a7.chunk.js.map