(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={content:"Statistics_content__or_zn"}},,,,,,function(e,t,n){e.exports={btn:"FeedbackOptions_btn__2gBfm"}},function(e,t,n){e.exports={box:"Section_box__16-Wn"}},function(e,t,n){e.exports={message:"Notoficatin_message__1soJO"}},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(4),s=n.n(o),r=(n(17),n(5)),i=n(6),b=n(7),l=n(12),d=n(11),u=(n(18),n(8)),j=n.n(u),h=n(0),f=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e,t){return Object(h.jsx)(c.Fragment,{children:Object(h.jsx)("button",{className:j.a.btn,onClick:function(){return n(e)},type:"button",children:e})},t)}))},p=n(9),O=n.n(p),x=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{className:O.a.box,children:[Object(h.jsx)("h1",{children:t}),n]})},v=n(2),g=n.n(v),k=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,o=e.positivePercentage;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{className:g.a.content,children:["Good: ",t]}),Object(h.jsxs)("p",{className:g.a.content,children:["Neutral: ",n]}),Object(h.jsxs)("p",{className:g.a.content,children:["Bad: ",c]}),Object(h.jsxs)("p",{className:g.a.content,children:["Total: ",a]}),Object(h.jsxs)("p",{className:g.a.content,children:["Positive feedback: ",o]})]})},m=n(10),_=n.n(m),N=function(e){var t=e.message;return Object(h.jsx)("p",{className:_.a.message,children:t})},F=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=Math.round(t/e.countTotalFeedback()*100);return n||0},e.handleButtonClick=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(x,{title:"Please leave feedback",children:Object(h.jsx)(f,{options:Object.keys(this.state),onLeaveFeedback:this.handleButtonClick})}),Object(h.jsx)(x,{title:"Statistics",children:this.countTotalFeedback()?Object(h.jsx)(k,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:"".concat(this.countPositiveFeedbackPercentage(),"%")}):Object(h.jsx)(N,{message:"There is no feedback"})})]})}}]),n}(c.Component),P=F;s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.a07e4066.chunk.js.map