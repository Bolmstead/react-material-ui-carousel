(this["webpackJsonpreact-material-ui-carousel-demo"]=this["webpackJsonpreact-material-ui-carousel-demo"]||[]).push([[0],{75:function(t,e,a){},92:function(t,e,a){},93:function(t,e,a){},95:function(t,e,a){"use strict";a.r(e);var i=a(2),s=a(0),n=a.n(s),o=a(13),l=a.n(o),c=(a(75),a(39)),r=a(40),u=a(27),h=a(50),m=a(49),d=a(41),b=a.n(d),j=a(34),y=a.n(j),v=(a(92),a(116)),g=a(117),p=a(100),x=a(118),O=a(119),f=a(120),w=a(128),A=a(121),B=a(124),N=a(126),C=a(123),I=a(125);function k(t){t.newProp&&console.log(t.newProp);for(var e=t.contentPosition?t.contentPosition:"left",a=t.length?t.length:3,s=a-1,n=[],o=Object(i.jsx)(v.a,{item:!0,xs:12/a,children:Object(i.jsxs)(g.a,{className:"Content",children:[Object(i.jsx)(p.a,{className:"Title",children:t.item.Name}),Object(i.jsx)(p.a,{className:"Caption",children:t.item.Caption}),Object(i.jsx)(x.a,{variant:"outlined",className:"ViewButton",children:"View Now"})]})},"content"),l=0;l<s;l++){var c=t.item.Items[l],r=Object(i.jsx)(v.a,{item:!0,xs:12/a,children:Object(i.jsx)(O.a,{className:"Media",image:c.Image,title:c.Name,children:Object(i.jsx)(p.a,{className:"MediaCaption",children:c.Name})})},c.Name);n.push(r)}return"left"===e?n.unshift(o):"right"===e?n.push(o):"middle"===e&&n.splice(n.length/2,0,o),Object(i.jsx)(f.a,{raised:!0,className:"Banner",children:Object(i.jsx)(v.a,{container:!0,spacing:0,className:"BannerGrid",children:n})})}var P=[{Name:"Electronics",Caption:"Electrify your friends!",contentPosition:"left",Items:[{Name:"Macbook Pro",Image:"https://source.unsplash.com/featured/?macbook"},{Name:"iPhone",Image:"https://source.unsplash.com/featured/?iphone"}]},{Name:"Home Appliances",Caption:"Say no to manual home labour!",contentPosition:"middle",Items:[{Name:"Washing Machine WX9102",Image:"https://source.unsplash.com/featured/?washingmachine"},{Name:"Learus Vacuum Cleaner",Image:"https://source.unsplash.com/featured/?vacuum,cleaner"}]},{Name:"Decoratives",Caption:"Give style and color to your living room!",contentPosition:"right",Items:[{Name:"Living Room Lamp",Image:"https://source.unsplash.com/featured/?lamp"},{Name:"Floral Vase",Image:"https://source.unsplash.com/featured/?vase"}]}],V=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(t){var i;return Object(c.a)(this,a),(i=e.call(this,t)).state={autoPlay:!0,timer:500,animation:"fade",indicators:!0,timeout:500,navButtonsAlwaysVisible:!1,navButtonsAlwaysInvisible:!1},y()(Object(u.a)(i)),i}return Object(r.a)(a,[{key:"toggleAutoPlay",value:function(){this.setState({autoPlay:!this.state.autoPlay})}},{key:"toggleIndicators",value:function(){this.setState({indicators:!this.state.indicators})}},{key:"toggleNavButtonsAlwaysVisible",value:function(){this.setState({navButtonsAlwaysVisible:!this.state.navButtonsAlwaysVisible})}},{key:"toggleNavButtonsAlwaysInvisible",value:function(){this.setState({navButtonsAlwaysInvisible:!this.state.navButtonsAlwaysInvisible})}},{key:"changeAnimation",value:function(t){this.setState({animation:t.target.value})}},{key:"changeTimeout",value:function(t,e){this.setState({timeout:e})}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{style:{marginTop:"50px",color:"#494949"},children:[Object(i.jsx)("h2",{children:"Example: eBay\u2122 style"}),Object(i.jsx)(b.a,{className:"Example",autoPlay:this.state.autoPlay,timer:this.state.timer,animation:this.state.animation,indicators:this.state.indicators,timeout:this.state.timeout,navButtonsAlwaysVisible:this.state.navButtonsAlwaysVisible,navButtonsAlwaysInvisible:this.state.navButtonsAlwaysInvisible,next:function(t,e){return console.log("Next User Callback: Now displaying child".concat(t,". Previously displayed child").concat(e))},prev:function(t,e){return console.log("Prev User Callback: Now displaying child".concat(t,". Previously displayed child").concat(e))},onChange:function(t,e){return console.log("OnChange User Callback: Now displaying child".concat(t,". Previously displayed child").concat(e))},children:P.map((function(t,e){return Object(i.jsx)(k,{item:t,contentPosition:t.contentPosition},e)}))}),Object(i.jsx)(w.a,{component:"legend",children:"Options"}),Object(i.jsx)(A.a,{control:Object(i.jsx)(B.a,{onChange:this.toggleAutoPlay,checked:this.state.autoPlay,value:"autoplay",color:"primary"}),label:"Auto-play"}),Object(i.jsx)(A.a,{control:Object(i.jsx)(B.a,{onChange:this.toggleIndicators,checked:this.state.indicators,value:"indicators",color:"primary"}),label:"Indicators"}),Object(i.jsx)(A.a,{control:Object(i.jsx)(B.a,{onChange:this.toggleNavButtonsAlwaysVisible,checked:this.state.navButtonsAlwaysVisible,value:"indicators",color:"primary"}),label:"NavButtonsAlwaysVisible"}),Object(i.jsx)(A.a,{control:Object(i.jsx)(B.a,{onChange:this.toggleNavButtonsAlwaysInvisible,checked:this.state.toggleNavButtonsAlwaysInvisible,value:"indicators",color:"primary"}),label:"NavButtonsAlwaysInvisible"}),Object(i.jsx)(A.a,{control:Object(i.jsxs)(N.a,{name:"animation",value:this.state.animation,onChange:this.changeAnimation,row:!0,style:{marginLeft:"10px"},children:[Object(i.jsx)(A.a,{value:"fade",control:Object(i.jsx)(C.a,{color:"primary"}),label:"Fade"}),Object(i.jsx)(A.a,{value:"slide",control:Object(i.jsx)(C.a,{color:"primary"}),label:"Slide"})]})}),Object(i.jsx)(A.a,{control:Object(i.jsxs)("div",{style:{width:300},children:[Object(i.jsx)(p.a,{id:"discrete-slider",gutterBottom:!0,children:"Animation Duration (Timeout) in ms"}),Object(i.jsx)(I.a,{defaultValue:500,getAriaValueText:function(){return"".concat(t.state.timeout,"ms")},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:100,marks:!0,min:100,max:2e3,onChange:this.changeTimeout})]})})]})}}]),a}(n.a.Component),S=a(101);a(93);function T(t){return Object(i.jsxs)(S.a,{className:"Project",style:{backgroundColor:t.item.color},elevation:10,children:[Object(i.jsx)("h2",{children:t.item.name}),Object(i.jsx)("p",{children:t.item.description}),Object(i.jsx)(x.a,{className:"CheckButton",children:"Check it out!"})]})}var E=[{name:"Lear Music Reader",description:"A PDF Reader specially designed for musicians.",color:"#64ACC8"},{name:"Hash Code 2019",description:"My Solution on the 2019 Hash Code by Google Slideshow problem.",color:"#7D85B1"},{name:"Terrio",description:"A exciting mobile game game made in the Unity Engine.",color:"#CE7E78"},{name:"React Carousel",description:"A Generic carousel UI component for React using material ui.",color:"#C9A27E"}],L=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(t){var i;return Object(c.a)(this,a),(i=e.call(this,t)).state={autoPlay:!0,timer:500,animation:"fade",indicators:!0,timeout:500,navButtonsAlwaysVisible:!1,navButtonsAlwaysInvisible:!1},y()(Object(u.a)(i)),i}return Object(r.a)(a,[{key:"toggleAutoPlay",value:function(){this.setState({autoPlay:!this.state.autoPlay})}},{key:"toggleIndicators",value:function(){this.setState({indicators:!this.state.indicators})}},{key:"toggleNavButtonsAlwaysVisible",value:function(){this.setState({navButtonsAlwaysVisible:!this.state.navButtonsAlwaysVisible})}},{key:"toggleNavButtonsAlwaysInvisible",value:function(){this.setState({navButtonsAlwaysInvisible:!this.state.navButtonsAlwaysInvisible})}},{key:"changeAnimation",value:function(t){this.setState({animation:t.target.value})}},{key:"changeTimeout",value:function(t,e){this.setState({timeout:e})}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{style:{marginTop:"50px",color:"#494949"},children:[Object(i.jsx)("h2",{children:"Example: Learus Projects (random)"}),Object(i.jsx)(b.a,{className:"SecondExample",autoPlay:this.state.autoPlay,timer:this.state.timer,animation:this.state.animation,indicators:this.state.indicators,timeout:this.state.timeout,navButtonsAlwaysVisible:this.state.navButtonsAlwaysVisible,navButtonsAlwaysInvisible:this.state.navButtonsAlwaysInvisible,children:E.map((function(t,e){return Object(i.jsx)(T,{item:t},e)}))}),Object(i.jsx)(w.a,{component:"legend",children:"Options"}),Object(i.jsx)(A.a,{control:Object(i.jsx)(B.a,{onChange:this.toggleAutoPlay,checked:this.state.autoPlay,value:"autoplay",color:"primary"}),label:"Auto-play"}),Object(i.jsx)(A.a,{control:Object(i.jsx)(B.a,{onChange:this.toggleIndicators,checked:this.state.indicators,value:"indicators",color:"primary"}),label:"Indicators"}),Object(i.jsx)(A.a,{control:Object(i.jsx)(B.a,{onChange:this.toggleNavButtonsAlwaysVisible,checked:this.state.navButtonsAlwaysVisible,value:"indicators",color:"primary"}),label:"NavButtonsAlwaysVisible"}),Object(i.jsx)(A.a,{control:Object(i.jsx)(B.a,{onChange:this.toggleNavButtonsAlwaysInvisible,checked:this.state.navButtonsAlwaysInvisible,value:"indicators",color:"primary"}),label:"NavButtonsAlwaysInvisible"}),Object(i.jsx)(A.a,{control:Object(i.jsxs)(N.a,{name:"animation",value:this.state.animation,onChange:this.changeAnimation,row:!0,style:{marginLeft:"10px"},children:[Object(i.jsx)(A.a,{value:"fade",control:Object(i.jsx)(C.a,{color:"primary"}),label:"Fade"}),Object(i.jsx)(A.a,{value:"slide",control:Object(i.jsx)(C.a,{color:"primary"}),label:"Slide"})]})}),Object(i.jsx)(A.a,{control:Object(i.jsxs)("div",{style:{width:300},children:[Object(i.jsx)(p.a,{id:"discrete-slider",gutterBottom:!0,children:"Animation Duration (Timeout) in ms"}),Object(i.jsx)(I.a,{defaultValue:500,getAriaValueText:function(){return"".concat(t.state.timeout,"ms")},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:100,marks:!0,min:100,max:2e3,onChange:this.changeTimeout})]})})]})}}]),a}(n.a.Component),D=function(){return Object(i.jsxs)("div",{style:{padding:"40px 100px",backgroundColor:"#ebebeb"},children:[Object(i.jsx)("h1",{style:{color:"#494949"},children:"React Material UI Carousel Demo"}),Object(i.jsxs)("p",{style:{marginBottom:"30px"},children:["by ",Object(i.jsx)("a",{href:"http://learus.github.io",style:{textDecoration:"none",color:"cornflowerblue"},children:"Learus"}),Object(i.jsx)("br",{}),Object(i.jsx)("a",{href:"https://github.com/Learus/react-material-ui-carousel.git",style:{textDecoration:"none",color:"cornflowerblue"},children:"GitHub Repo"})]}),Object(i.jsx)(V,{}),Object(i.jsx)(L,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(i.jsx)(D,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[95,1,2]]]);
//# sourceMappingURL=main.ccfdd520.chunk.js.map