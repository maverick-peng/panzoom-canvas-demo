const Xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}};Xe();var Te="/panzoom-canvas-demo/assets/bg.2a8ecdad.png";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var V=function(e,t){return V=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])},V(e,t)};function ee(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");V(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}function xe(e,t,r,n){function i(o){return o instanceof r?o:new r(function(u){u(o)})}return new(r||(r=Promise))(function(o,u){function s(f){try{c(n.next(f))}catch(y){u(y)}}function a(f){try{c(n.throw(f))}catch(y){u(y)}}function c(f){f.done?o(f.value):i(f.value).then(s,a)}c((n=n.apply(e,t||[])).next())})}function de(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,u;return u={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function s(c){return function(f){return a([c,f])}}function a(c){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,i=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){r.label=c[1];break}if(c[0]===6&&r.label<o[1]){r.label=o[1],o=c;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(c);break}o[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(f){c=[6,f],i=0}finally{n=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function L(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function I(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),i,o=[],u;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(s){u={error:s}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(u)throw u.error}}return o}function M(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,o;n<i;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}function x(e){return this instanceof x?(this.v=e,this):new x(e)}function Ee(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(e,t||[]),i,o=[];return i={},u("next"),u("throw"),u("return"),i[Symbol.asyncIterator]=function(){return this},i;function u(h){n[h]&&(i[h]=function(m){return new Promise(function(g,p){o.push([h,m,g,p])>1||s(h,m)})})}function s(h,m){try{a(n[h](m))}catch(g){y(o[0][3],g)}}function a(h){h.value instanceof x?Promise.resolve(h.value.v).then(c,f):y(o[0][2],h)}function c(h){s("next",h)}function f(h){s("throw",h)}function y(h,m){h(m),o.shift(),o.length&&s(o[0][0],o[0][1])}}function Ie(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],r;return t?t.call(e):(e=typeof L=="function"?L(e):e[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(o){r[o]=e[o]&&function(u){return new Promise(function(s,a){u=e[o](u),i(s,a,u.done,u.value)})}}function i(o,u,s,a){Promise.resolve(a).then(function(c){o({value:c,done:s})},u)}}function d(e){return typeof e=="function"}function _e(e){var t=function(n){Error.call(n),n.stack=new Error().stack},r=e(t);return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}var $=_e(function(e){return function(r){e(this),this.message=r?r.length+` errors occurred during unsubscription:
`+r.map(function(n,i){return i+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=r}});function ie(e,t){if(e){var r=e.indexOf(t);0<=r&&e.splice(r,1)}}var he=function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,r,n,i,o;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var s=L(u),a=s.next();!a.done;a=s.next()){var c=a.value;c.remove(this)}}catch(p){t={error:p}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(t)throw t.error}}else u.remove(this);var f=this.initialTeardown;if(d(f))try{f()}catch(p){o=p instanceof $?p.errors:[p]}var y=this._finalizers;if(y){this._finalizers=null;try{for(var h=L(y),m=h.next();!m.done;m=h.next()){var g=m.value;try{ue(g)}catch(p){o=o!=null?o:[],p instanceof $?o=M(M([],I(o)),I(p.errors)):o.push(p)}}}catch(p){n={error:p}}finally{try{m&&!m.done&&(i=h.return)&&i.call(h)}finally{if(n)throw n.error}}}if(o)throw new $(o)}},e.prototype.add=function(t){var r;if(t&&t!==this)if(this.closed)ue(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(r=this._finalizers)!==null&&r!==void 0?r:[]).push(t)}},e.prototype._hasParent=function(t){var r=this._parentage;return r===t||Array.isArray(r)&&r.includes(t)},e.prototype._addParent=function(t){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(t),r):r?[r,t]:t},e.prototype._removeParent=function(t){var r=this._parentage;r===t?this._parentage=null:Array.isArray(r)&&ie(r,t)},e.prototype.remove=function(t){var r=this._finalizers;r&&ie(r,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}();function pe(e){return e instanceof he||e&&"closed"in e&&d(e.remove)&&d(e.add)&&d(e.unsubscribe)}function ue(e){d(e)?e():e.unsubscribe()}var C={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},G={setTimeout:function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i=G.delegate;return i!=null&&i.setTimeout?i.setTimeout.apply(i,M([e,t],I(r))):setTimeout.apply(void 0,M([e,t],I(r)))},clearTimeout:function(e){var t=G.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function ve(e){G.setTimeout(function(){var t=C.onUnhandledError;if(t)t(e);else throw e})}function Z(){}var Ae=function(){return re("C",void 0,void 0)}();function Oe(e){return re("E",void 0,e)}function Pe(e){return re("N",e,void 0)}function re(e,t,r){return{kind:e,value:t,error:r}}var j=null;function Le(e){if(C.useDeprecatedSynchronousErrorHandling){var t=!j;if(t&&(j={errorThrown:!1,error:null}),e(),t){var r=j,n=r.errorThrown,i=r.error;if(j=null,n)throw i}}else e()}var te=function(e){ee(t,e);function t(r){var n=e.call(this)||this;return n.isStopped=!1,r?(n.destination=r,pe(r)&&r.add(n)):n.destination=Re,n}return t.create=function(r,n,i){return new N(r,n,i)},t.prototype.next=function(r){this.isStopped?B(Pe(r),this):this._next(r)},t.prototype.error=function(r){this.isStopped?B(Oe(r),this):(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped?B(Ae,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(he),Me=Function.prototype.bind;function z(e,t){return Me.call(e,t)}var ke=function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var r=this.partialObserver;if(r.next)try{r.next(t)}catch(n){H(n)}},e.prototype.error=function(t){var r=this.partialObserver;if(r.error)try{r.error(t)}catch(n){H(n)}else H(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(r){H(r)}},e}(),N=function(e){ee(t,e);function t(r,n,i){var o=e.call(this)||this,u;if(d(r)||!r)u={next:r!=null?r:void 0,error:n!=null?n:void 0,complete:i!=null?i:void 0};else{var s;o&&C.useDeprecatedNextContext?(s=Object.create(r),s.unsubscribe=function(){return o.unsubscribe()},u={next:r.next&&z(r.next,s),error:r.error&&z(r.error,s),complete:r.complete&&z(r.complete,s)}):u=r}return o.destination=new ke(u),o}return t}(te);function H(e){ve(e)}function Ce(e){throw e}function B(e,t){var r=C.onStoppedNotification;r&&G.setTimeout(function(){return r(e,t)})}var Re={closed:!0,next:Z,error:Ce,complete:Z},ne=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function ye(e){return e}function Ue(e){return e.length===0?ye:e.length===1?e[0]:function(r){return e.reduce(function(n,i){return i(n)},r)}}var X=function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(t,r,n){var i=this,o=Fe(t)?t:new N(t,r,n);return Le(function(){var u=i,s=u.operator,a=u.source;o.add(s?s.call(o,a):a?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){t.error(r)}},e.prototype.forEach=function(t,r){var n=this;return r=ce(r),new r(function(i,o){var u=new N({next:function(s){try{t(s)}catch(a){o(a),u.unsubscribe()}},error:o,complete:i});n.subscribe(u)})},e.prototype._subscribe=function(t){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(t)},e.prototype[ne]=function(){return this},e.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Ue(t)(this)},e.prototype.toPromise=function(t){var r=this;return t=ce(t),new t(function(n,i){var o;r.subscribe(function(u){return o=u},function(u){return i(u)},function(){return n(o)})})},e.create=function(t){return new e(t)},e}();function ce(e){var t;return(t=e!=null?e:C.Promise)!==null&&t!==void 0?t:Promise}function De(e){return e&&d(e.next)&&d(e.error)&&d(e.complete)}function Fe(e){return e&&e instanceof te||De(e)&&pe(e)}function je(e){return d(e==null?void 0:e.lift)}function R(e){return function(t){if(je(t))return t.lift(function(r){try{return e(r,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function T(e,t,r,n,i){return new He(e,t,r,n,i)}var He=function(e){ee(t,e);function t(r,n,i,o,u,s){var a=e.call(this,r)||this;return a.onFinalize=u,a.shouldUnsubscribe=s,a._next=n?function(c){try{n(c)}catch(f){r.error(f)}}:e.prototype._next,a._error=o?function(c){try{o(c)}catch(f){r.error(f)}finally{this.unsubscribe()}}:e.prototype._error,a._complete=i?function(){try{i()}catch(c){r.error(c)}finally{this.unsubscribe()}}:e.prototype._complete,a}return t.prototype.unsubscribe=function(){var r;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;e.prototype.unsubscribe.call(this),!n&&((r=this.onFinalize)===null||r===void 0||r.call(this))}},t}(te),me=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function qe(e){return d(e==null?void 0:e.then)}function Ge(e){return d(e[ne])}function We(e){return Symbol.asyncIterator&&d(e==null?void 0:e[Symbol.asyncIterator])}function Je(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Ke(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Qe=Ke();function $e(e){return d(e==null?void 0:e[Qe])}function ze(e){return Ee(this,arguments,function(){var r,n,i,o;return de(this,function(u){switch(u.label){case 0:r=e.getReader(),u.label=1;case 1:u.trys.push([1,,9,10]),u.label=2;case 2:return[4,x(r.read())];case 3:return n=u.sent(),i=n.value,o=n.done,o?[4,x(void 0)]:[3,5];case 4:return[2,u.sent()];case 5:return[4,x(i)];case 6:return[4,u.sent()];case 7:return u.sent(),[3,2];case 8:return[3,10];case 9:return r.releaseLock(),[7];case 10:return[2]}})})}function Be(e){return d(e==null?void 0:e.getReader)}function _(e){if(e instanceof X)return e;if(e!=null){if(Ge(e))return Ve(e);if(me(e))return Ze(e);if(qe(e))return Ne(e);if(We(e))return be(e);if($e(e))return er(e);if(Be(e))return rr(e)}throw Je(e)}function Ve(e){return new X(function(t){var r=e[ne]();if(d(r.subscribe))return r.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Ze(e){return new X(function(t){for(var r=0;r<e.length&&!t.closed;r++)t.next(e[r]);t.complete()})}function Ne(e){return new X(function(t){e.then(function(r){t.closed||(t.next(r),t.complete())},function(r){return t.error(r)}).then(null,ve)})}function er(e){return new X(function(t){var r,n;try{for(var i=L(e),o=i.next();!o.done;o=i.next()){var u=o.value;if(t.next(u),t.closed)return}}catch(s){r={error:s}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}t.complete()})}function be(e){return new X(function(t){tr(e,t).catch(function(r){return t.error(r)})})}function rr(e){return be(ze(e))}function tr(e,t){var r,n,i,o;return xe(this,void 0,void 0,function(){var u,s;return de(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),r=Ie(e),a.label=1;case 1:return[4,r.next()];case 2:if(n=a.sent(),!!n.done)return[3,4];if(u=n.value,t.next(u),t.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=a.sent(),i={error:s},[3,11];case 6:return a.trys.push([6,,9,10]),n&&!n.done&&(o=r.return)?[4,o.call(r)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function nr(e,t,r,n,i){n===void 0&&(n=0),i===void 0&&(i=!1);var o=t.schedule(function(){r(),i?e.add(this.schedule(null,n)):this.unsubscribe()},n);if(e.add(o),!i)return o}function we(e,t){return R(function(r,n){var i=0;r.subscribe(T(n,function(o){n.next(e.call(t,o,i++))}))})}var or=Array.isArray;function ir(e,t){return or(t)?e.apply(void 0,M([],I(t))):e(t)}function ur(e){return we(function(t){return ir(e,t)})}function cr(e,t,r,n,i,o,u,s){var a=[],c=0,f=0,y=!1,h=function(){y&&!a.length&&!c&&t.complete()},m=function(p){return c<n?g(p):a.push(p)},g=function(p){o&&t.next(p),c++;var oe=!1;_(r(p,f++)).subscribe(T(t,function(A){i==null||i(A),o?m(A):t.next(A)},function(){oe=!0},void 0,function(){if(oe)try{c--;for(var A=function(){var F=a.shift();u?nr(t,u,function(){return g(F)}):g(F)};a.length&&c<n;)A();h()}catch(F){t.error(F)}}))};return e.subscribe(T(t,m,function(){y=!0,h()})),function(){s==null||s()}}function ge(e,t,r){return r===void 0&&(r=1/0),d(t)?ge(function(n,i){return we(function(o,u){return t(n,o,i,u)})(_(e(n,i)))},r):(typeof t=="number"&&(r=t),R(function(n,i){return cr(n,i,e,r)}))}function ar(e){return new X(function(t){_(e()).subscribe(t)})}var sr=["addListener","removeListener"],lr=["addEventListener","removeEventListener"],fr=["on","off"];function b(e,t,r,n){if(d(r)&&(n=r,r=void 0),n)return b(e,t,r).pipe(ur(n));var i=I(pr(e)?lr.map(function(s){return function(a){return e[s](t,a,r)}}):dr(e)?sr.map(ae(e,t)):hr(e)?fr.map(ae(e,t)):[],2),o=i[0],u=i[1];if(!o&&me(e))return ge(function(s){return b(s,t,r)})(_(e));if(!o)throw new TypeError("Invalid event target");return new X(function(s){var a=function(){for(var c=[],f=0;f<arguments.length;f++)c[f]=arguments[f];return s.next(1<c.length?c:c[0])};return o(a),function(){return u(a)}})}function ae(e,t){return function(r){return function(n){return e[r](t,n)}}}function dr(e){return d(e.addListener)&&d(e.removeListener)}function hr(e){return d(e.on)&&d(e.off)}function pr(e){return d(e.addEventListener)&&d(e.removeEventListener)}function vr(e,t,r){return ar(function(){return e()?t:r})}function Se(e,t){return R(function(r,n){var i=null,o=0,u=!1,s=function(){return u&&!i&&n.complete()};r.subscribe(T(n,function(a){i==null||i.unsubscribe();var c=0,f=o++;_(e(a,f)).subscribe(i=T(n,function(y){return n.next(t?t(a,y,f,c++):y)},function(){i=null,s()}))},function(){u=!0,s()}))})}function W(e){return R(function(t,r){_(e).subscribe(T(r,function(){return r.complete()},Z)),!r.closed&&t.subscribe(r)})}function E(e,t,r){var n=d(e)||t||r?{next:e,error:t,complete:r}:e;return n?R(function(i,o){var u;(u=n.subscribe)===null||u===void 0||u.call(n);var s=!0;i.subscribe(T(o,function(a){var c;(c=n.next)===null||c===void 0||c.call(n,a),o.next(a)},function(){var a;s=!1,(a=n.complete)===null||a===void 0||a.call(n),o.complete()},function(a){var c;s=!1,(c=n.error)===null||c===void 0||c.call(n,a),o.error(a)},function(){var a,c;s&&((a=n.unsubscribe)===null||a===void 0||a.call(n)),(c=n.finalize)===null||c===void 0||c.call(n)}))}):ye}CanvasRenderingContext2D.prototype.roundRect=function(e,t,r,n,i){return this.beginPath(),this.moveTo(e+i,t),this.arcTo(e+r,t,e+r,t+n,i),this.arcTo(e+r,t+n,e,t+n,i),this.arcTo(e,t+n,e,t,i),this.arcTo(e,t,e+r,t,i),this.fill(),this};var v=document.querySelector("canvas"),q=v.getContext("2d");v.width=window.innerWidth*.7;v.height=window.innerHeight;let w=v.width/1920,U=0,D=0,J=0,K=0;const l={screenX:0,screenY:0,realX:0,realY:0},P=new Image;P.src=Te;P.onload=function(){Q()};function k(e,t){l.bounds=v.getBoundingClientRect(),l.screenX=e-l.bounds.left,l.screenY=t-l.bounds.top}function Ye(e,t){const r=l.realX,n=l.realY;k(e,t),l.realX=S(l.screenX),l.realY=Y(l.screenY);const i=l.realX-r,o=l.realY-n;U-=i,D-=o,l.realX=S(l.screenX),l.realY=Y(l.screenY),Q()}b(v,"mousedown").pipe(E(e=>{k(e.clientX,e.clientY),l.realX=S(l.screenX),l.realY=Y(l.screenY)}),Se(()=>b(v,"mousemove").pipe(E(e=>Ye(e.clientX,e.clientY)),W(b(v,"mouseout")),W(b(v,"mouseup"))))).subscribe();b(v,"wheel",{passive:!1}).pipe(E(e=>{e.preventDefault(),e.deltaY<0?w=Math.min(5,w*1.1):w=Math.max(.1,w*(1/1.1)),k(e.clientX,e.clientY),l.realX=S(l.screenX),l.realY=Y(l.screenY),console.log(l),U=l.realX,D=l.realY,J=l.screenX,K=l.screenY,l.realX=S(l.screenX),l.realY=Y(l.screenY),Q()})).subscribe();let se=0;b(v,"touchstart").pipe(E(e=>{k(e.touches[0].clientX,e.touches[0].clientY),l.realX=S(l.screenX),l.realY=Y(l.screenY)}),Se(e=>{e.touches.length===2&&(se=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY));const t=w;return vr(()=>e.touches.length===2,b(v,"touchmove",{passive:!1}).pipe(E(r=>{const n=Math.hypot(r.touches[0].clientX-r.touches[1].clientX,r.touches[0].clientY-r.touches[1].clientY);w=t*(n/se);const i=(r.touches[0].clientX+r.touches[1].clientX)/2,o=(r.touches[0].clientY+r.touches[1].clientY)/2;k(i,o),l.realX=S(l.screenX),l.realY=Y(l.screenY),console.log(l),U=l.realX,D=l.realY,J=l.screenX,K=l.screenY,l.realX=S(l.screenX),l.realY=Y(l.screenY),Q()})),b(v,"touchmove").pipe(E(r=>Ye(r.touches[0].clientX,r.touches[0].clientY)))).pipe(W(b(v,"touchend")),W(b(v,"touchcancel")))})).subscribe(()=>{},()=>{},()=>{alert("complete")});function O(e){return Math.floor(e*w)}function le(e){return Math.floor((e-U)*w+J)}function fe(e){return Math.floor((e-D)*w+K)}function S(e){return Math.floor((e-J)*(1/w)+U)}function Y(e){return Math.floor((e-K)*(1/w)+D)}function Q(){q.clearRect(0,0,v.width,v.height),q.drawImage(P,le(0),fe(0),O(P.naturalWidth),O(P.naturalHeight)),q.fillStyle="lineargradiant(0, 0, blue, red)",q.roundRect(le(194),fe(350),O(100),O(100),O(10))}