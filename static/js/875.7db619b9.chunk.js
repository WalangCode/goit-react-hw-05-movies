"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[875],{713:function(e,r,t){t.d(r,{Hx:function(){return p},Y5:function(){return o},mv:function(){return i},uV:function(){return f},wr:function(){return c}});var n=t(861),a=t(757),s=t.n(a),u=t(759);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:"816408416ada48598c4e0b413e98bb37"};var c=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day");case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?query=".concat(r));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(r));case 2:return t=e.sent,console.log("response from api",t),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(r,"/credits?"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(r,"/reviews?"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},875:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=t(861),a=t(439),s=t(757),u=t.n(s),c=t(791),i=t(689),o=t(713),f="Reviews_reviewsContainer__bHfUv",p="Reviews_reviewItem__ax7Fo",v="Reviews_reviewAuthor__f4lkL",l="Reviews_reviewContent__oX1fD",d="Reviews_noReviews__TJWdg",h=t(184),w=function(){var e=(0,i.UO)().movieId,r=(0,c.useState)([]),t=(0,a.Z)(r,2),s=t[0],w=t[1];return(0,c.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o.Hx)(e);case 3:t=r.sent,w(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,h.jsx)(h.Fragment,{children:0!==s.length?(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)("h2",{children:"Reviews"}),(0,h.jsx)("ul",{children:s.map((function(e){return(0,h.jsxs)("li",{className:p,children:[(0,h.jsx)("p",{className:v,children:e.author}),(0,h.jsx)("p",{className:l,children:e.content})]},e.id)}))})]}):(0,h.jsx)("div",{children:(0,h.jsx)("p",{className:d,children:"No reviews available for this movie"})})})}}}]);
//# sourceMappingURL=875.7db619b9.chunk.js.map