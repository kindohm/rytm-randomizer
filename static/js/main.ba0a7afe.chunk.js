(this["webpackJsonprytm-randomizer"]=this["webpackJsonprytm-randomizer"]||[]).push([[0],[,,,,,,,,function(e,n,a){},,,,,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var c=a(0),t=a(1),r=a.n(t),i=a(9),m=a.n(i),o=a(3),d=a(2),s=a(10),l=[{name:"Synth",randomize:!0,params:[{name:"Level",cc:16,randomize:!0},{name:"Synth Param 2",cc:17,randomize:!0},{name:"Synth Param 3",cc:18,randomize:!0},{name:"Synth Param 4",cc:19,randomize:!0},{name:"Synth Param 5",cc:20,randomize:!0},{name:"Synth Param 6",cc:21,randomize:!0},{name:"Synth Param 7",cc:22,randomize:!0},{name:"Synth Param 8",cc:23,randomize:!0}]},{name:"Filter",randomize:!0,params:[{name:"Attack Time",cc:70,randomize:!0},{name:"Decay Time",cc:71,randomize:!0},{name:"Sustain Level",cc:72,randomize:!0},{name:"Release Time",cc:73,randomize:!0},{name:"Frequency",cc:74,randomize:!0},{name:"Resonance",cc:75,min:0,max:50,randomize:!0},{name:"Mode",cc:76,min:0,max:6,randomize:!0},{name:"Env Depth",cc:77,randomize:!0}]},{name:"Amp",randomize:!0,params:[{name:"Attack Time",cc:78,min:0,max:30,randomize:!0},{name:"Hold Time",cc:79,randomize:!0},{name:"Decay Time",cc:80,randomize:!0},{name:"Overdrive",cc:81,randomize:!0},{name:"Delay Send",cc:82,min:0,max:100,randomize:!0},{name:"Reverb Send",cc:83,min:0,max:100,randomize:!0},{name:"Pan",cc:10,min:0,max:127,value:64,randomize:!1}]},{name:"LFO",randomize:!0,params:[{name:"Speed",cc:102,randomize:!0},{name:"Mult",cc:103,min:0,max:23,randomize:!0},{name:"Fade",cc:104,randomize:!0},{name:"Destination",cc:105,min:0,max:28,randomize:!0},{name:"Waveform",cc:106,min:0,max:6,randomize:!0},{name:"Start Phase",cc:107,randomize:!0},{name:"Trig Mode",cc:108,min:0,max:4,randomize:!0},{name:"Depth",cc:109,randomize:!0}]},{name:"Sample",randomize:!0,params:[{name:"Tune",cc:24,randomize:!0},{name:"Fine Tune",cc:25,randomize:!0},{name:"Bit Reduction",cc:26,randomize:!0},{name:"Slot",cc:27,randomize:!0},{name:"Start",cc:28,randomize:!0},{name:"End",cc:29,randomize:!0},{name:"Loop",cc:30,randomize:!0},{name:"Level",cc:31,min:0,max:100,randomize:!0}]},{name:"Delay",randomize:!0,validChannels:[13],params:[{name:"Time",cc:16,randomize:!0},{name:"Pingpong",cc:17,randomize:!0},{name:"Stereo Width",cc:18,randomize:!0},{name:"Feedback",cc:19,min:0,max:63,randomize:!0},{name:"Highpass",cc:20,randomize:!0},{name:"Lowpass",cc:21,randomize:!0},{name:"Reverb Send",cc:22,randomize:!0},{name:"Mix",cc:23,randomize:!0}]},{name:"Reverb",randomize:!0,validChannels:[13],params:[{name:"Pre Delay",cc:24,randomize:!0},{name:"Decay Time",cc:25,randomize:!0},{name:"Shelving Freq",cc:26,randomize:!0},{name:"Shelving Gain",cc:27,randomize:!0},{name:"Highpass",cc:28,randomize:!0},{name:"Lowpass",cc:29,randomize:!0},{name:"Mix",cc:31,randomize:!0}]}],u=function(e){var n=e.pageName,a=e.param,r=e.onParamToggled,i=a.randomize,m=Object(t.useState)(i),d=Object(o.a)(m,2),s=d[0],l=d[1];return Object(c.jsx)("li",{children:Object(c.jsxs)("label",{className:"checkLabel",children:[Object(c.jsx)("input",{type:"checkbox",onChange:function(e){var c=!s;l(c),r(n,a,c)},checked:s,disabled:a.disabled})," ",a.name,Object(c.jsx)("span",{className:"checkmark"})]})},a.name)},j=(a(8),function(e){var n=e.page,a=e.onPageToggled,r=e.onParamToggled,i=n.name,m=n.randomize,d=Object(t.useState)(m),s=Object(o.a)(d,2),l=s[0],j=s[1];return Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)("h3",{children:i}),Object(c.jsx)("p",{children:Object(c.jsxs)("label",{className:"checkLabel",children:[Object(c.jsx)("input",{type:"checkbox",onChange:function(e){var n=!l;j(n),a(i,n)},checked:l})," ","Randomize",Object(c.jsx)("span",{className:"checkmark"})]})}),Object(c.jsx)("ul",{className:"paramList",children:n.params.map((function(e){return Object(c.jsx)(u,{pageName:n.name,param:e,onParamToggled:r},e.name)}))})]})}),b=function(e){var n=e.channels,a=e.onChannelToggled;return Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)("h3",{children:"Channels"}),Object(c.jsx)("ul",{className:"paramList",children:n.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsxs)("label",{className:"checkLabel",children:[Object(c.jsx)("input",{type:"checkbox",onChange:function(){return n=e.number,void a(n);var n},checked:e.randomize})," ",e.name,Object(c.jsx)("span",{className:"checkmark"})]})},e.number)}))})]})},h=function(e){var n=e.pages,a=e.channels,t=e.onPageToggled,r=e.onParamToggled,i=e.onChannelToggled,m=n.map((function(e){return Object(c.jsx)(j,{page:e,onPageToggled:t,onParamToggled:r},e.name)}));return[Object(c.jsx)(b,{onChannelToggled:i,channels:a},"channelpage")].concat(m)},p=(a(16),function(e){var n=e.pages,a=e.channels,r=e.onParamToggled,i=e.onPageToggled,m=e.onChannelToggled,d=Object(t.useState)(!1),s=Object(o.a)(d,2),l=s[0],u=s[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("button",{className:"linkButton",onClick:function(){u(!l)},children:l?"Hide advanced options":"Show advanced options"})}),l?Object(c.jsx)("div",{className:"container pagesContainer",children:Object(c.jsx)(h,{channels:a,pages:n,onChannelToggled:m,onParamToggled:r,onPageToggled:function(e,n){return i(e,n)}})}):null]})}),f=(a(17),function(e){var n=e.onComplexityChange,a=e.complexity;return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("p",{children:"Randomization complexity:"}),Object(c.jsx)("p",{children:Object(c.jsx)("input",{type:"range",value:a,min:"0",max:"1",step:"0.01",onChange:n})})]})}),O=(a(18),a(6)),g=function(e){var n=e.onDeviceChange,a=e.onNotSupported,r=Object(t.useState)([]),i=Object(o.a)(r,2),m=i[0],d=i[1],s=Object(t.useState)([]),l=Object(o.a)(s,2),u=l[0],j=l[1];Object(t.useEffect)((function(){O.enable((function(e){if(e)return console.log("WebMidi could not be enabled.",e),void a();var n=[{value:"",name:"No device selected"}].concat(O.outputs.map((function(e){return{value:e.name,name:e.name}})));d(O.outputs),j(n)}))}));return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("p",{children:"Select your RYTM MIDI device:"}),Object(c.jsx)("select",{onChange:function(e){var a=m.find((function(n){return n.name===e.target.value}));n(a)},className:"deviceSelect",children:u.map((function(e){return Object(c.jsx)("option",{value:e.value,children:e.name},e.name)}))})]})},v=(a(19),function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("footer",{children:Object(c.jsxs)("small",{children:["Developed by ",Object(c.jsx)("a",{href:"//kindohm.com",children:"kindohm"}),". Inspired by the"," ",Object(c.jsx)("a",{href:"//algorithmic-instruments.com/dsi-tempest-randomizer",children:"DSI Tempest Randomizer"})]})})})}),z=function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("p",{children:["Your web browser does not support access to Web MIDI. Please refer to"," ",Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess#browser_compatibility",target:"_blank",rel:"noreferrer",children:"Web MIDI browser compatibility."})]})})},x=(a(20),function(e){var n=e.onRandomize,a=e.disabled;return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("button",{className:"randomizeButton",onClick:n,disabled:a,children:"Randomize"})})}),S=(a(21),function(e){var n=e?e.filter((function(e){return!e.validChannels||!e.validChannels.includes(13)})):null,a=e?e.filter((function(e){return e.validChannels&&e.validChannels.includes(13)})):null;return Object(s.a)(Array(12)).map((function(e,a){return{number:a+1,name:a+1,pages:n}})).concat([{number:13,name:"FX",pages:a}])}),T=function(){var e=Object(t.useState)(null),n=Object(o.a)(e,2),a=n[0],r=n[1],i=Object(t.useState)(.666),m=Object(o.a)(i,2),s=m[0],u=m[1],j=Object(t.useState)(l),b=Object(o.a)(j,2),h=b[0],O=b[1],T=Object(t.useState)(!1),y=Object(o.a)(T,2),C=y[0],P=y[1],k=Object(t.useState)(S(l)),N=Object(o.a)(k,2),D=N[0],M=N[1],R=Object(t.useState)(S().map((function(e){return Object(d.a)(Object(d.a)({},e),{},{randomize:!0})}))),L=Object(o.a)(R,2),F=L[0],I=L[1],w=function(e,n,a){return function(e,n){var a=Math.ceil(e),c=Math.floor(n);return Math.floor(Math.random()*(c-a+1)+a)}(a-(a-e)*s,a+(n-a)*s)};return Object(c.jsxs)("div",{className:"mainContainer",children:[Object(c.jsx)("h1",{children:"RYTM Randomizer"}),C?Object(c.jsx)(z,{}):Object(c.jsxs)("div",{children:[Object(c.jsx)(g,{onDeviceChange:function(e){r(e)},onNotSupported:function(){P(!0)}}),Object(c.jsx)(x,{onRandomize:function(){var e=D.map((function(e){if(!F.find((function(n){return n.number===e.number})).randomize)return e;var n=e.pages.map((function(e){var n=h.find((function(n){return n.name===e.name}));if(!n.randomize)return e;var a=e.params,c=n.params,t=a.map((function(e){var n=e.min,a=void 0===n?0:n,t=e.max,r=void 0===t?127:t,i=e.value,m=void 0===i?64:i;if(!c.find((function(n){return n.name===e.name})).randomize)return e;var o=w(a,r,m);return Object(d.a)(Object(d.a)({},e),{},{value:o})}));return Object(d.a)(Object(d.a)({},e),{},{params:t})}));return Object(d.a)(Object(d.a)({},e),{},{pages:n})}));M(e),a?e.forEach((function(e){var n=e.pages;F.find((function(n){return n.number===e.number})).randomize&&n.forEach((function(n){var c=n.params;if(h.find((function(e){return e.name===n.name})).randomize){!function n(c,t){var r=c[t],i=r.cc,m=r.value;a.sendControlChange(i,m,e.number),t<c.length-1&&setTimeout((function(){n(c,t+1)}),1)}(c,0)}}))})):console.log("no device")},disabled:!a}),Object(c.jsx)(f,{onComplexityChange:function(e){u(parseFloat(e.target.value))},complexity:s}),Object(c.jsx)(p,{pages:h,channels:F,onParamToggled:function(e,n,a){var c=h.find((function(n){return n.name===e})),t=c.params,r=t.find((function(e){return e.name===n.name})),i=Object(d.a)(Object(d.a)({},r),{},{randomize:a}),m=t.map((function(e){return e.name===n.name?i:e})),o=Object(d.a)(Object(d.a)({},c),{},{params:m}),s=h.map((function(n){return n.name===e?o:n}));O(s)},onPageToggled:function(e,n){var a=h.find((function(n){return n.name===e})),c=a.params.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{disabled:!n})})),t=Object(d.a)(Object(d.a)({},a),{},{params:c,randomize:n}),r=h.map((function(n){return n.name===e?t:n}));O(r)},onChannelToggled:function(e){var n=F.map((function(n){return n.number!==e?n:Object(d.a)(Object(d.a)({},n),{},{randomize:!n.randomize})}));I(n)}})]}),Object(c.jsx)(v,{})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(n){var a=n.getCLS,c=n.getFID,t=n.getFCP,r=n.getLCP,i=n.getTTFB;a(e),c(e),t(e),r(e),i(e)}))};m.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(T,{})}),document.getElementById("root")),y()}],[[22,1,2]]]);
//# sourceMappingURL=main.ba0a7afe.chunk.js.map