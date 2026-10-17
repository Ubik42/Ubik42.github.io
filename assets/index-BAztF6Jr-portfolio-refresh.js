(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function l(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function o(u){if(u.ep)return;u.ep=!0;const m=l(u);fetch(u.href,m)}})();var Pc={exports:{}},ur={};var up;function a1(){if(up)return ur;up=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function l(o,u,m){var h=null;if(m!==void 0&&(h=""+m),u.key!==void 0&&(h=""+u.key),"key"in u){m={};for(var p in u)p!=="key"&&(m[p]=u[p])}else m=u;return u=m.ref,{$$typeof:a,type:o,key:h,ref:u!==void 0?u:null,props:m}}return ur.Fragment=r,ur.jsx=l,ur.jsxs=l,ur}var dp;function i1(){return dp||(dp=1,Pc.exports=a1()),Pc.exports}var S=i1(),Hc={exports:{}},ae={};var hp;function r1(){if(hp)return ae;hp=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),w=Symbol.iterator;function E(C){return C===null||typeof C!="object"?null:(C=w&&C[w]||C["@@iterator"],typeof C=="function"?C:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,H={};function P(C,O,I){this.props=C,this.context=O,this.refs=H,this.updater=I||M}P.prototype.isReactComponent={},P.prototype.setState=function(C,O){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,O,"setState")},P.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function N(){}N.prototype=P.prototype;function G(C,O,I){this.props=C,this.context=O,this.refs=H,this.updater=I||M}var q=G.prototype=new N;q.constructor=G,V(q,P.prototype),q.isPureReactComponent=!0;var ne=Array.isArray;function le(){}var Y={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function Ce(C,O,I){var Q=I.ref;return{$$typeof:a,type:C,key:O,ref:Q!==void 0?Q:null,props:I}}function te(C,O){return Ce(C.type,O,C.props)}function ve(C){return typeof C=="object"&&C!==null&&C.$$typeof===a}function we(C){var O={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(I){return O[I]})}var rt=/\/+/g;function _e(C,O){return typeof C=="object"&&C!==null&&C.key!=null?we(""+C.key):O.toString(36)}function Ve(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(le,le):(C.status="pending",C.then(function(O){C.status==="pending"&&(C.status="fulfilled",C.value=O)},function(O){C.status==="pending"&&(C.status="rejected",C.reason=O)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function k(C,O,I,Q,ie){var ce=typeof C;(ce==="undefined"||ce==="boolean")&&(C=null);var Se=!1;if(C===null)Se=!0;else switch(ce){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(C.$$typeof){case a:case r:Se=!0;break;case v:return Se=C._init,k(Se(C._payload),O,I,Q,ie)}}if(Se)return ie=ie(C),Se=Q===""?"."+_e(C,0):Q,ne(ie)?(I="",Se!=null&&(I=Se.replace(rt,"$&/")+"/"),k(ie,O,I,"",function(yi){return yi})):ie!=null&&(ve(ie)&&(ie=te(ie,I+(ie.key==null||C&&C.key===ie.key?"":(""+ie.key).replace(rt,"$&/")+"/")+Se)),O.push(ie)),1;Se=0;var st=Q===""?".":Q+":";if(ne(C))for(var Pe=0;Pe<C.length;Pe++)Q=C[Pe],ce=st+_e(Q,Pe),Se+=k(Q,O,I,ce,ie);else if(Pe=E(C),typeof Pe=="function")for(C=Pe.call(C),Pe=0;!(Q=C.next()).done;)Q=Q.value,ce=st+_e(Q,Pe++),Se+=k(Q,O,I,ce,ie);else if(ce==="object"){if(typeof C.then=="function")return k(Ve(C),O,I,Q,ie);throw O=String(C),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return Se}function _(C,O,I){if(C==null)return C;var Q=[],ie=0;return k(C,Q,"","",function(ce){return O.call(I,ce,ie++)}),Q}function X(C){if(C._status===-1){var O=C._result;O=O(),O.then(function(I){(C._status===0||C._status===-1)&&(C._status=1,C._result=I)},function(I){(C._status===0||C._status===-1)&&(C._status=2,C._result=I)}),C._status===-1&&(C._status=0,C._result=O)}if(C._status===1)return C._result.default;throw C._result}var se=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},fe={map:_,forEach:function(C,O,I){_(C,function(){O.apply(this,arguments)},I)},count:function(C){var O=0;return _(C,function(){O++}),O},toArray:function(C){return _(C,function(O){return O})||[]},only:function(C){if(!ve(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return ae.Activity=b,ae.Children=fe,ae.Component=P,ae.Fragment=l,ae.Profiler=u,ae.PureComponent=G,ae.StrictMode=o,ae.Suspense=y,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,ae.__COMPILER_RUNTIME={__proto__:null,c:function(C){return Y.H.useMemoCache(C)}},ae.cache=function(C){return function(){return C.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(C,O,I){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var Q=V({},C.props),ie=C.key;if(O!=null)for(ce in O.key!==void 0&&(ie=""+O.key),O)!W.call(O,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&O.ref===void 0||(Q[ce]=O[ce]);var ce=arguments.length-2;if(ce===1)Q.children=I;else if(1<ce){for(var Se=Array(ce),st=0;st<ce;st++)Se[st]=arguments[st+2];Q.children=Se}return Ce(C.type,ie,Q)},ae.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:m,_context:C},C},ae.createElement=function(C,O,I){var Q,ie={},ce=null;if(O!=null)for(Q in O.key!==void 0&&(ce=""+O.key),O)W.call(O,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(ie[Q]=O[Q]);var Se=arguments.length-2;if(Se===1)ie.children=I;else if(1<Se){for(var st=Array(Se),Pe=0;Pe<Se;Pe++)st[Pe]=arguments[Pe+2];ie.children=st}if(C&&C.defaultProps)for(Q in Se=C.defaultProps,Se)ie[Q]===void 0&&(ie[Q]=Se[Q]);return Ce(C,ce,ie)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(C){return{$$typeof:p,render:C}},ae.isValidElement=ve,ae.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:X}},ae.memo=function(C,O){return{$$typeof:f,type:C,compare:O===void 0?null:O}},ae.startTransition=function(C){var O=Y.T,I={};Y.T=I;try{var Q=C(),ie=Y.S;ie!==null&&ie(I,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(le,se)}catch(ce){se(ce)}finally{O!==null&&I.types!==null&&(O.types=I.types),Y.T=O}},ae.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},ae.use=function(C){return Y.H.use(C)},ae.useActionState=function(C,O,I){return Y.H.useActionState(C,O,I)},ae.useCallback=function(C,O){return Y.H.useCallback(C,O)},ae.useContext=function(C){return Y.H.useContext(C)},ae.useDebugValue=function(){},ae.useDeferredValue=function(C,O){return Y.H.useDeferredValue(C,O)},ae.useEffect=function(C,O){return Y.H.useEffect(C,O)},ae.useEffectEvent=function(C){return Y.H.useEffectEvent(C)},ae.useId=function(){return Y.H.useId()},ae.useImperativeHandle=function(C,O,I){return Y.H.useImperativeHandle(C,O,I)},ae.useInsertionEffect=function(C,O){return Y.H.useInsertionEffect(C,O)},ae.useLayoutEffect=function(C,O){return Y.H.useLayoutEffect(C,O)},ae.useMemo=function(C,O){return Y.H.useMemo(C,O)},ae.useOptimistic=function(C,O){return Y.H.useOptimistic(C,O)},ae.useReducer=function(C,O,I){return Y.H.useReducer(C,O,I)},ae.useRef=function(C){return Y.H.useRef(C)},ae.useState=function(C){return Y.H.useState(C)},ae.useSyncExternalStore=function(C,O,I){return Y.H.useSyncExternalStore(C,O,I)},ae.useTransition=function(){return Y.H.useTransition()},ae.version="19.2.8",ae}var mp;function ju(){return mp||(mp=1,Hc.exports=r1()),Hc.exports}var J=ju(),Gc={exports:{}},dr={},_c={exports:{}},Nc={};var fp;function s1(){return fp||(fp=1,(function(a){function r(k,_){var X=k.length;k.push(_);e:for(;0<X;){var se=X-1>>>1,fe=k[se];if(0<u(fe,_))k[se]=_,k[X]=fe,X=se;else break e}}function l(k){return k.length===0?null:k[0]}function o(k){if(k.length===0)return null;var _=k[0],X=k.pop();if(X!==_){k[0]=X;e:for(var se=0,fe=k.length,C=fe>>>1;se<C;){var O=2*(se+1)-1,I=k[O],Q=O+1,ie=k[Q];if(0>u(I,X))Q<fe&&0>u(ie,I)?(k[se]=ie,k[Q]=X,se=Q):(k[se]=I,k[O]=X,se=O);else if(Q<fe&&0>u(ie,X))k[se]=ie,k[Q]=X,se=Q;else break e}}return _}function u(k,_){var X=k.sortIndex-_.sortIndex;return X!==0?X:k.id-_.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;a.unstable_now=function(){return m.now()}}else{var h=Date,p=h.now();a.unstable_now=function(){return h.now()-p}}var y=[],f=[],v=1,b=null,w=3,E=!1,M=!1,V=!1,H=!1,P=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function q(k){for(var _=l(f);_!==null;){if(_.callback===null)o(f);else if(_.startTime<=k)o(f),_.sortIndex=_.expirationTime,r(y,_);else break;_=l(f)}}function ne(k){if(V=!1,q(k),!M)if(l(y)!==null)M=!0,le||(le=!0,we());else{var _=l(f);_!==null&&Ve(ne,_.startTime-k)}}var le=!1,Y=-1,W=5,Ce=-1;function te(){return H?!0:!(a.unstable_now()-Ce<W)}function ve(){if(H=!1,le){var k=a.unstable_now();Ce=k;var _=!0;try{e:{M=!1,V&&(V=!1,N(Y),Y=-1),E=!0;var X=w;try{t:{for(q(k),b=l(y);b!==null&&!(b.expirationTime>k&&te());){var se=b.callback;if(typeof se=="function"){b.callback=null,w=b.priorityLevel;var fe=se(b.expirationTime<=k);if(k=a.unstable_now(),typeof fe=="function"){b.callback=fe,q(k),_=!0;break t}b===l(y)&&o(y),q(k)}else o(y);b=l(y)}if(b!==null)_=!0;else{var C=l(f);C!==null&&Ve(ne,C.startTime-k),_=!1}}break e}finally{b=null,w=X,E=!1}_=void 0}}finally{_?we():le=!1}}}var we;if(typeof G=="function")we=function(){G(ve)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,_e=rt.port2;rt.port1.onmessage=ve,we=function(){_e.postMessage(null)}}else we=function(){P(ve,0)};function Ve(k,_){Y=P(function(){k(a.unstable_now())},_)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(k){k.callback=null},a.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<k?Math.floor(1e3/k):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(k){switch(w){case 1:case 2:case 3:var _=3;break;default:_=w}var X=w;w=_;try{return k()}finally{w=X}},a.unstable_requestPaint=function(){H=!0},a.unstable_runWithPriority=function(k,_){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var X=w;w=k;try{return _()}finally{w=X}},a.unstable_scheduleCallback=function(k,_,X){var se=a.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?se+X:se):X=se,k){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=X+fe,k={id:v++,callback:_,priorityLevel:k,startTime:X,expirationTime:fe,sortIndex:-1},X>se?(k.sortIndex=X,r(f,k),l(y)===null&&k===l(f)&&(V?(N(Y),Y=-1):V=!0,Ve(ne,X-se))):(k.sortIndex=fe,r(y,k),M||E||(M=!0,le||(le=!0,we()))),k},a.unstable_shouldYield=te,a.unstable_wrapCallback=function(k){var _=w;return function(){var X=w;w=_;try{return k.apply(this,arguments)}finally{w=X}}}})(Nc)),Nc}var pp;function o1(){return pp||(pp=1,_c.exports=s1()),_c.exports}var Ic={exports:{}},it={};var gp;function l1(){if(gp)return it;gp=1;var a=ju();function r(y){var f="https://react.dev/errors/"+y;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)f+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(r(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function m(y,f,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:y,containerInfo:f,implementation:v}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,f){if(y==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,it.createPortal=function(y,f){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(r(299));return m(y,f,null,v)},it.flushSync=function(y){var f=h.T,v=o.p;try{if(h.T=null,o.p=2,y)return y()}finally{h.T=f,o.p=v,o.d.f()}},it.preconnect=function(y,f){typeof y=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,o.d.C(y,f))},it.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},it.preinit=function(y,f){if(typeof y=="string"&&f&&typeof f.as=="string"){var v=f.as,b=p(v,f.crossOrigin),w=typeof f.integrity=="string"?f.integrity:void 0,E=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;v==="style"?o.d.S(y,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:E}):v==="script"&&o.d.X(y,{crossOrigin:b,integrity:w,fetchPriority:E,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},it.preinitModule=function(y,f){if(typeof y=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var v=p(f.as,f.crossOrigin);o.d.M(y,{crossOrigin:v,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&o.d.M(y)},it.preload=function(y,f){if(typeof y=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var v=f.as,b=p(v,f.crossOrigin);o.d.L(y,v,{crossOrigin:b,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},it.preloadModule=function(y,f){if(typeof y=="string")if(f){var v=p(f.as,f.crossOrigin);o.d.m(y,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:v,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else o.d.m(y)},it.requestFormReset=function(y){o.d.r(y)},it.unstable_batchedUpdates=function(y,f){return y(f)},it.useFormState=function(y,f,v){return h.H.useFormState(y,f,v)},it.useFormStatus=function(){return h.H.useHostTransitionStatus()},it.version="19.2.8",it}var yp;function c1(){if(yp)return Ic.exports;yp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Ic.exports=l1(),Ic.exports}var vp;function u1(){if(vp)return dr;vp=1;var a=o1(),r=ju(),l=c1();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(m(e)!==e)throw Error(o(188))}function f(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var c=s.alternate;if(c===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===n)return y(s),e;if(c===i)return y(s),t;c=c.sibling}throw Error(o(188))}if(n.return!==i.return)n=s,i=c;else{for(var d=!1,g=s.child;g;){if(g===n){d=!0,n=s,i=c;break}if(g===i){d=!0,i=s,n=c;break}g=g.sibling}if(!d){for(g=c.child;g;){if(g===n){d=!0,n=c,i=s;break}if(g===i){d=!0,i=c,n=s;break}g=g.sibling}if(!d)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,w=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),G=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),Ce=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function we(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function _e(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case P:return"Profiler";case H:return"StrictMode";case ne:return"Suspense";case le:return"SuspenseList";case Ce:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case G:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:_e(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return _e(e(t))}catch{}}return null}var Ve=Array.isArray,k=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},se=[],fe=-1;function C(e){return{current:e}}function O(e){0>fe||(e.current=se[fe],se[fe]=null,fe--)}function I(e,t){fe++,se[fe]=e.current,e.current=t}var Q=C(null),ie=C(null),ce=C(null),Se=C(null);function st(e,t){switch(I(ce,t),I(ie,e),I(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?jf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=jf(t),e=Bf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(Q),I(Q,e)}function Pe(){O(Q),O(ie),O(ce)}function yi(e){e.memoizedState!==null&&I(Se,e);var t=Q.current,n=Bf(t,e.type);t!==n&&(I(ie,e),I(Q,n))}function Er(e){ie.current===e&&(O(Q),O(ie)),Se.current===e&&(O(Se),sr._currentValue=X)}var So,ld;function Wn(e){if(So===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);So=t&&t[1]||"",ld=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+So+e+ld}var wo=!1;function Ao(e,t){if(!e||wo)return"";wo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(R){var D=R}Reflect.construct(e,[],L)}else{try{L.call()}catch(R){D=R}e.call(L.prototype)}}else{try{throw Error()}catch(R){D=R}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(R){if(R&&D&&typeof R.stack=="string")return[R.stack,D.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),d=c[0],g=c[1];if(d&&g){var A=d.split(`
`),z=g.split(`
`);for(s=i=0;i<A.length&&!A[i].includes("DetermineComponentFrameRoot");)i++;for(;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;if(i===A.length||s===z.length)for(i=A.length-1,s=z.length-1;1<=i&&0<=s&&A[i]!==z[s];)s--;for(;1<=i&&0<=s;i--,s--)if(A[i]!==z[s]){if(i!==1||s!==1)do if(i--,s--,0>s||A[i]!==z[s]){var j=`
`+A[i].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=i&&0<=s);break}}}finally{wo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Wn(n):""}function B0(e,t){switch(e.tag){case 26:case 27:case 5:return Wn(e.type);case 16:return Wn("Lazy");case 13:return e.child!==t&&t!==null?Wn("Suspense Fallback"):Wn("Suspense");case 19:return Wn("SuspenseList");case 0:case 15:return Ao(e.type,!1);case 11:return Ao(e.type.render,!1);case 1:return Ao(e.type,!0);case 31:return Wn("Activity");default:return""}}function cd(e){try{var t="",n=null;do t+=B0(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var To=Object.prototype.hasOwnProperty,Co=a.unstable_scheduleCallback,xo=a.unstable_cancelCallback,L0=a.unstable_shouldYield,O0=a.unstable_requestPaint,yt=a.unstable_now,V0=a.unstable_getCurrentPriorityLevel,ud=a.unstable_ImmediatePriority,dd=a.unstable_UserBlockingPriority,Ur=a.unstable_NormalPriority,P0=a.unstable_LowPriority,hd=a.unstable_IdlePriority,H0=a.log,G0=a.unstable_setDisableYieldValue,vi=null,vt=null;function An(e){if(typeof H0=="function"&&G0(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(vi,e)}catch{}}var bt=Math.clz32?Math.clz32:I0,_0=Math.log,N0=Math.LN2;function I0(e){return e>>>=0,e===0?32:31-(_0(e)/N0|0)|0}var zr=256,Mr=262144,Dr=4194304;function $n(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Rr(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,c=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var g=i&134217727;return g!==0?(i=g&~c,i!==0?s=$n(i):(d&=g,d!==0?s=$n(d):n||(n=g&~e,n!==0&&(s=$n(n))))):(g=i&~c,g!==0?s=$n(g):d!==0?s=$n(d):n||(n=i&~e,n!==0&&(s=$n(n)))),s===0?0:t!==0&&t!==s&&(t&c)===0&&(c=s&-s,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:s}function bi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function q0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function md(){var e=Dr;return Dr<<=1,(Dr&62914560)===0&&(Dr=4194304),e}function Eo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Si(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function X0(e,t,n,i,s,c){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,A=e.expirationTimes,z=e.hiddenUpdates;for(n=d&~n;0<n;){var j=31-bt(n),L=1<<j;g[j]=0,A[j]=-1;var D=z[j];if(D!==null)for(z[j]=null,j=0;j<D.length;j++){var R=D[j];R!==null&&(R.lane&=-536870913)}n&=~L}i!==0&&fd(e,i,0),c!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=c&~(d&~t))}function fd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-bt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function pd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-bt(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function gd(e,t){var n=t&-t;return n=(n&42)!==0?1:Uo(n),(n&(e.suspendedLanes|t))!==0?0:n}function Uo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function yd(){var e=_.p;return e!==0?e:(e=window.event,e===void 0?32:ap(e.type))}function vd(e,t){var n=_.p;try{return _.p=e,t()}finally{_.p=n}}var Tn=Math.random().toString(36).slice(2),Je="__reactFiber$"+Tn,ut="__reactProps$"+Tn,Ta="__reactContainer$"+Tn,Mo="__reactEvents$"+Tn,F0="__reactListeners$"+Tn,Y0="__reactHandles$"+Tn,bd="__reactResources$"+Tn,wi="__reactMarker$"+Tn;function Do(e){delete e[Je],delete e[ut],delete e[Mo],delete e[F0],delete e[Y0]}function Ca(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ta]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_f(e);e!==null;){if(n=e[Je])return n;e=_f(e)}return t}e=n,n=e.parentNode}return null}function xa(e){if(e=e[Je]||e[Ta]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ai(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Ea(e){var t=e[bd];return t||(t=e[bd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[wi]=!0}var Sd=new Set,wd={};function ea(e,t){Ua(e,t),Ua(e+"Capture",t)}function Ua(e,t){for(wd[e]=t,e=0;e<t.length;e++)Sd.add(t[e])}var K0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ad={},Td={};function Q0(e){return To.call(Td,e)?!0:To.call(Ad,e)?!1:K0.test(e)?Td[e]=!0:(Ad[e]=!0,!1)}function kr(e,t,n){if(Q0(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function jr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function tn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Z0(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,c=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(d){n=""+d,c.call(this,d)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ro(e){if(!e._valueTracker){var t=Cd(e)?"checked":"value";e._valueTracker=Z0(e,t,""+e[t])}}function xd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Cd(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var J0=/[\n"\\]/g;function Mt(e){return e.replace(J0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ko(e,t,n,i,s,c,d,g){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+zt(t)):e.value!==""+zt(t)&&(e.value=""+zt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?jo(e,d,zt(t)):n!=null?jo(e,d,zt(n)):i!=null&&e.removeAttribute("value"),s==null&&c!=null&&(e.defaultChecked=!!c),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+zt(g):e.removeAttribute("name")}function Ed(e,t,n,i,s,c,d,g){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Ro(e);return}n=n!=null?""+zt(n):"",t=t!=null?""+zt(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=g?e.checked:!!i,e.defaultChecked=!!i,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Ro(e)}function jo(e,t,n){t==="number"&&Br(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function za(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ud(e,t,n){if(t!=null&&(t=""+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+zt(n):""}function zd(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(Ve(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=zt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Ro(e)}function Ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var W0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Md(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||W0.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Dd(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Md(e,s,i)}else for(var c in t)t.hasOwnProperty(c)&&Md(e,c,t[c])}function Bo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ev=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lr(e){return ev.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function nn(){}var Lo=null;function Oo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Da=null,Ra=null;function Rd(e){var t=xa(e);if(t&&(e=t.stateNode)){var n=e[ut]||null;e:switch(e=t.stateNode,t.type){case"input":if(ko(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[ut]||null;if(!s)throw Error(o(90));ko(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&xd(i)}break e;case"textarea":Ud(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&za(e,!!n.multiple,t,!1)}}}var Vo=!1;function kd(e,t,n){if(Vo)return e(t,n);Vo=!0;try{var i=e(t);return i}finally{if(Vo=!1,(Da!==null||Ra!==null)&&(As(),Da&&(t=Da,e=Ra,Ra=Da=null,Rd(t),e)))for(t=0;t<e.length;t++)Rd(e[t])}}function Ti(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ut]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Po=!1;if(an)try{var Ci={};Object.defineProperty(Ci,"passive",{get:function(){Po=!0}}),window.addEventListener("test",Ci,Ci),window.removeEventListener("test",Ci,Ci)}catch{Po=!1}var Cn=null,Ho=null,Or=null;function jd(){if(Or)return Or;var e,t=Ho,n=t.length,i,s="value"in Cn?Cn.value:Cn.textContent,c=s.length;for(e=0;e<n&&t[e]===s[e];e++);var d=n-e;for(i=1;i<=d&&t[n-i]===s[c-i];i++);return Or=s.slice(e,1<i?1-i:void 0)}function Vr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pr(){return!0}function Bd(){return!1}function dt(e){function t(n,i,s,c,d){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(c):c[g]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Pr:Bd,this.isPropagationStopped=Bd,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pr)},persist:function(){},isPersistent:Pr}),t}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hr=dt(ta),xi=b({},ta,{view:0,detail:0}),tv=dt(xi),Go,_o,Ei,Gr=b({},xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Io,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(Go=e.screenX-Ei.screenX,_o=e.screenY-Ei.screenY):_o=Go=0,Ei=e),Go)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),Ld=dt(Gr),nv=b({},Gr,{dataTransfer:0}),av=dt(nv),iv=b({},xi,{relatedTarget:0}),No=dt(iv),rv=b({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),sv=dt(rv),ov=b({},ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lv=dt(ov),cv=b({},ta,{data:0}),Od=dt(cv),uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hv[e])?!!t[e]:!1}function Io(){return mv}var fv=b({},xi,{key:function(e){if(e.key){var t=uv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Io,charCode:function(e){return e.type==="keypress"?Vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pv=dt(fv),gv=b({},Gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=dt(gv),yv=b({},xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Io}),vv=dt(yv),bv=b({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sv=dt(bv),wv=b({},Gr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Av=dt(wv),Tv=b({},ta,{newState:0,oldState:0}),Cv=dt(Tv),xv=[9,13,27,32],qo=an&&"CompositionEvent"in window,Ui=null;an&&"documentMode"in document&&(Ui=document.documentMode);var Ev=an&&"TextEvent"in window&&!Ui,Pd=an&&(!qo||Ui&&8<Ui&&11>=Ui),Hd=" ",Gd=!1;function _d(e,t){switch(e){case"keyup":return xv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ka=!1;function Uv(e,t){switch(e){case"compositionend":return Nd(t);case"keypress":return t.which!==32?null:(Gd=!0,Hd);case"textInput":return e=t.data,e===Hd&&Gd?null:e;default:return null}}function zv(e,t){if(ka)return e==="compositionend"||!qo&&_d(e,t)?(e=jd(),Or=Ho=Cn=null,ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pd&&t.locale!=="ko"?null:t.data;default:return null}}var Mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mv[e.type]:t==="textarea"}function qd(e,t,n,i){Da?Ra?Ra.push(i):Ra=[i]:Da=i,t=Ms(t,"onChange"),0<t.length&&(n=new Hr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var zi=null,Mi=null;function Dv(e){Uf(e,0)}function _r(e){var t=Ai(e);if(xd(t))return e}function Xd(e,t){if(e==="change")return t}var Fd=!1;if(an){var Xo;if(an){var Fo="oninput"in document;if(!Fo){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),Fo=typeof Yd.oninput=="function"}Xo=Fo}else Xo=!1;Fd=Xo&&(!document.documentMode||9<document.documentMode)}function Kd(){zi&&(zi.detachEvent("onpropertychange",Qd),Mi=zi=null)}function Qd(e){if(e.propertyName==="value"&&_r(Mi)){var t=[];qd(t,Mi,e,Oo(e)),kd(Dv,t)}}function Rv(e,t,n){e==="focusin"?(Kd(),zi=t,Mi=n,zi.attachEvent("onpropertychange",Qd)):e==="focusout"&&Kd()}function kv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _r(Mi)}function jv(e,t){if(e==="click")return _r(t)}function Bv(e,t){if(e==="input"||e==="change")return _r(t)}function Lv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:Lv;function Di(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!To.call(t,s)||!St(e[s],t[s]))return!1}return!0}function Zd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jd(e,t){var n=Zd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zd(n)}}function Wd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $d(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Br(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function Yo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ov=an&&"documentMode"in document&&11>=document.documentMode,ja=null,Ko=null,Ri=null,Qo=!1;function eh(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qo||ja==null||ja!==Br(i)||(i=ja,"selectionStart"in i&&Yo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ri&&Di(Ri,i)||(Ri=i,i=Ms(Ko,"onSelect"),0<i.length&&(t=new Hr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ja)))}function na(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ba={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionrun:na("Transition","TransitionRun"),transitionstart:na("Transition","TransitionStart"),transitioncancel:na("Transition","TransitionCancel"),transitionend:na("Transition","TransitionEnd")},Zo={},th={};an&&(th=document.createElement("div").style,"AnimationEvent"in window||(delete Ba.animationend.animation,delete Ba.animationiteration.animation,delete Ba.animationstart.animation),"TransitionEvent"in window||delete Ba.transitionend.transition);function aa(e){if(Zo[e])return Zo[e];if(!Ba[e])return e;var t=Ba[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in th)return Zo[e]=t[n];return e}var nh=aa("animationend"),ah=aa("animationiteration"),ih=aa("animationstart"),Vv=aa("transitionrun"),Pv=aa("transitionstart"),Hv=aa("transitioncancel"),rh=aa("transitionend"),sh=new Map,Jo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jo.push("scrollEnd");function _t(e,t){sh.set(e,t),ea(t,[e])}var Nr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Dt=[],La=0,Wo=0;function Ir(){for(var e=La,t=Wo=La=0;t<e;){var n=Dt[t];Dt[t++]=null;var i=Dt[t];Dt[t++]=null;var s=Dt[t];Dt[t++]=null;var c=Dt[t];if(Dt[t++]=null,i!==null&&s!==null){var d=i.pending;d===null?s.next=s:(s.next=d.next,d.next=s),i.pending=s}c!==0&&oh(n,s,c)}}function qr(e,t,n,i){Dt[La++]=e,Dt[La++]=t,Dt[La++]=n,Dt[La++]=i,Wo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function $o(e,t,n,i){return qr(e,t,n,i),Xr(e)}function ia(e,t){return qr(e,null,null,t),Xr(e)}function oh(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,c=e.return;c!==null;)c.childLanes|=n,i=c.alternate,i!==null&&(i.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(s=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,s&&t!==null&&(s=31-bt(n),e=c.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),c):null}function Xr(e){if(50<$i)throw $i=0,lc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Oa={};function Gv(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,i){return new Gv(e,t,n,i)}function el(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rn(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function lh(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Fr(e,t,n,i,s,c){var d=0;if(i=e,typeof e=="function")el(e)&&(d=1);else if(typeof e=="string")d=Xb(e,n,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ce:return e=wt(31,n,t,s),e.elementType=Ce,e.lanes=c,e;case V:return ra(n.children,s,c,t);case H:d=8,s|=24;break;case P:return e=wt(12,n,t,s|2),e.elementType=P,e.lanes=c,e;case ne:return e=wt(13,n,t,s),e.elementType=ne,e.lanes=c,e;case le:return e=wt(19,n,t,s),e.elementType=le,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:d=10;break e;case N:d=9;break e;case q:d=11;break e;case Y:d=14;break e;case W:d=16,i=null;break e}d=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=wt(d,n,t,s),t.elementType=e,t.type=i,t.lanes=c,t}function ra(e,t,n,i){return e=wt(7,e,i,t),e.lanes=n,e}function tl(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function ch(e){var t=wt(18,null,null,0);return t.stateNode=e,t}function nl(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var uh=new WeakMap;function Rt(e,t){if(typeof e=="object"&&e!==null){var n=uh.get(e);return n!==void 0?n:(t={value:e,source:t,stack:cd(t)},uh.set(e,t),t)}return{value:e,source:t,stack:cd(t)}}var Va=[],Pa=0,Yr=null,ki=0,kt=[],jt=0,xn=null,Yt=1,Kt="";function sn(e,t){Va[Pa++]=ki,Va[Pa++]=Yr,Yr=e,ki=t}function dh(e,t,n){kt[jt++]=Yt,kt[jt++]=Kt,kt[jt++]=xn,xn=e;var i=Yt;e=Kt;var s=32-bt(i)-1;i&=~(1<<s),n+=1;var c=32-bt(t)+s;if(30<c){var d=s-s%5;c=(i&(1<<d)-1).toString(32),i>>=d,s-=d,Yt=1<<32-bt(t)+s|n<<s|i,Kt=c+e}else Yt=1<<c|n<<s|i,Kt=e}function al(e){e.return!==null&&(sn(e,1),dh(e,1,0))}function il(e){for(;e===Yr;)Yr=Va[--Pa],Va[Pa]=null,ki=Va[--Pa],Va[Pa]=null;for(;e===xn;)xn=kt[--jt],kt[jt]=null,Kt=kt[--jt],kt[jt]=null,Yt=kt[--jt],kt[jt]=null}function hh(e,t){kt[jt++]=Yt,kt[jt++]=Kt,kt[jt++]=xn,Yt=t.id,Kt=t.overflow,xn=e}var We=null,Re=null,pe=!1,En=null,Bt=!1,rl=Error(o(519));function Un(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ji(Rt(t,e)),rl}function mh(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Je]=e,t[ut]=i,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<tr.length;n++)de(tr[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Ed(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),zd(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Rf(t.textContent,n)?(i.popover!=null&&(de("beforetoggle",t),de("toggle",t)),i.onScroll!=null&&de("scroll",t),i.onScrollEnd!=null&&de("scrollend",t),i.onClick!=null&&(t.onclick=nn),t=!0):t=!1,t||Un(e,!0)}function fh(e){for(We=e.return;We;)switch(We.tag){case 5:case 31:case 13:Bt=!1;return;case 27:case 3:Bt=!0;return;default:We=We.return}}function Ha(e){if(e!==We)return!1;if(!pe)return fh(e),pe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Tc(e.type,e.memoizedProps)),n=!n),n&&Re&&Un(e),fh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Re=Gf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Re=Gf(e)}else t===27?(t=Re,_n(e.type)?(e=zc,zc=null,Re=e):Re=t):Re=We?Ot(e.stateNode.nextSibling):null;return!0}function sa(){Re=We=null,pe=!1}function sl(){var e=En;return e!==null&&(pt===null?pt=e:pt.push.apply(pt,e),En=null),e}function ji(e){En===null?En=[e]:En.push(e)}var ol=C(null),oa=null,on=null;function zn(e,t,n){I(ol,t._currentValue),t._currentValue=n}function ln(e){e._currentValue=ol.current,O(ol)}function ll(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function cl(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var c=s.dependencies;if(c!==null){var d=s.child;c=c.firstContext;e:for(;c!==null;){var g=c;c=s;for(var A=0;A<t.length;A++)if(g.context===t[A]){c.lanes|=n,g=c.alternate,g!==null&&(g.lanes|=n),ll(c.return,n,e),i||(d=null);break e}c=g.next}}else if(s.tag===18){if(d=s.return,d===null)throw Error(o(341));d.lanes|=n,c=d.alternate,c!==null&&(c.lanes|=n),ll(d,n,e),d=null}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===e){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}}function Ga(e,t,n,i){e=null;for(var s=t,c=!1;s!==null;){if(!c){if((s.flags&524288)!==0)c=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var d=s.alternate;if(d===null)throw Error(o(387));if(d=d.memoizedProps,d!==null){var g=s.type;St(s.pendingProps.value,d.value)||(e!==null?e.push(g):e=[g])}}else if(s===Se.current){if(d=s.alternate,d===null)throw Error(o(387));d.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(sr):e=[sr])}s=s.return}e!==null&&cl(t,e,n,i),t.flags|=262144}function Kr(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function la(e){oa=e,on=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return ph(oa,e)}function Qr(e,t){return oa===null&&la(e),ph(e,t)}function ph(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},on===null){if(e===null)throw Error(o(308));on=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else on=on.next=t;return n}var _v=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Nv=a.unstable_scheduleCallback,Iv=a.unstable_NormalPriority,Ne={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ul(){return{controller:new _v,data:new Map,refCount:0}}function Bi(e){e.refCount--,e.refCount===0&&Nv(Iv,function(){e.controller.abort()})}var Li=null,dl=0,_a=0,Na=null;function qv(e,t){if(Li===null){var n=Li=[];dl=0,_a=fc(),Na={status:"pending",value:void 0,then:function(i){n.push(i)}}}return dl++,t.then(gh,gh),t}function gh(){if(--dl===0&&Li!==null){Na!==null&&(Na.status="fulfilled");var e=Li;Li=null,_a=0,Na=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xv(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var yh=k.S;k.S=function(e,t){ef=yt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&qv(e,t),yh!==null&&yh(e,t)};var ca=C(null);function hl(){var e=ca.current;return e!==null?e:ze.pooledCache}function Zr(e,t){t===null?I(ca,ca.current):I(ca,t.pool)}function vh(){var e=hl();return e===null?null:{parent:Ne._currentValue,pool:e}}var Ia=Error(o(460)),ml=Error(o(474)),Jr=Error(o(542)),Wr={then:function(){}};function bh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(nn,nn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ah(e),e;default:if(typeof t.status=="string")t.then(nn,nn);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ah(e),e}throw da=t,Ia}}function ua(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(da=n,Ia):n}}var da=null;function wh(){if(da===null)throw Error(o(459));var e=da;return da=null,e}function Ah(e){if(e===Ia||e===Jr)throw Error(o(483))}var qa=null,Oi=0;function $r(e){var t=Oi;return Oi+=1,qa===null&&(qa=[]),Sh(qa,e,t)}function Vi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function es(e,t){throw t.$$typeof===w?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Th(e){function t(x,T){if(e){var U=x.deletions;U===null?(x.deletions=[T],x.flags|=16):U.push(T)}}function n(x,T){if(!e)return null;for(;T!==null;)t(x,T),T=T.sibling;return null}function i(x){for(var T=new Map;x!==null;)x.key!==null?T.set(x.key,x):T.set(x.index,x),x=x.sibling;return T}function s(x,T){return x=rn(x,T),x.index=0,x.sibling=null,x}function c(x,T,U){return x.index=U,e?(U=x.alternate,U!==null?(U=U.index,U<T?(x.flags|=67108866,T):U):(x.flags|=67108866,T)):(x.flags|=1048576,T)}function d(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function g(x,T,U,B){return T===null||T.tag!==6?(T=tl(U,x.mode,B),T.return=x,T):(T=s(T,U),T.return=x,T)}function A(x,T,U,B){var $=U.type;return $===V?j(x,T,U.props.children,B,U.key):T!==null&&(T.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===W&&ua($)===T.type)?(T=s(T,U.props),Vi(T,U),T.return=x,T):(T=Fr(U.type,U.key,U.props,null,x.mode,B),Vi(T,U),T.return=x,T)}function z(x,T,U,B){return T===null||T.tag!==4||T.stateNode.containerInfo!==U.containerInfo||T.stateNode.implementation!==U.implementation?(T=nl(U,x.mode,B),T.return=x,T):(T=s(T,U.children||[]),T.return=x,T)}function j(x,T,U,B,$){return T===null||T.tag!==7?(T=ra(U,x.mode,B,$),T.return=x,T):(T=s(T,U),T.return=x,T)}function L(x,T,U){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=tl(""+T,x.mode,U),T.return=x,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case E:return U=Fr(T.type,T.key,T.props,null,x.mode,U),Vi(U,T),U.return=x,U;case M:return T=nl(T,x.mode,U),T.return=x,T;case W:return T=ua(T),L(x,T,U)}if(Ve(T)||we(T))return T=ra(T,x.mode,U,null),T.return=x,T;if(typeof T.then=="function")return L(x,$r(T),U);if(T.$$typeof===G)return L(x,Qr(x,T),U);es(x,T)}return null}function D(x,T,U,B){var $=T!==null?T.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return $!==null?null:g(x,T,""+U,B);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case E:return U.key===$?A(x,T,U,B):null;case M:return U.key===$?z(x,T,U,B):null;case W:return U=ua(U),D(x,T,U,B)}if(Ve(U)||we(U))return $!==null?null:j(x,T,U,B,null);if(typeof U.then=="function")return D(x,T,$r(U),B);if(U.$$typeof===G)return D(x,T,Qr(x,U),B);es(x,U)}return null}function R(x,T,U,B,$){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return x=x.get(U)||null,g(T,x,""+B,$);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case E:return x=x.get(B.key===null?U:B.key)||null,A(T,x,B,$);case M:return x=x.get(B.key===null?U:B.key)||null,z(T,x,B,$);case W:return B=ua(B),R(x,T,U,B,$)}if(Ve(B)||we(B))return x=x.get(U)||null,j(T,x,B,$,null);if(typeof B.then=="function")return R(x,T,U,$r(B),$);if(B.$$typeof===G)return R(x,T,U,Qr(T,B),$);es(T,B)}return null}function F(x,T,U,B){for(var $=null,ge=null,Z=T,oe=T=0,me=null;Z!==null&&oe<U.length;oe++){Z.index>oe?(me=Z,Z=null):me=Z.sibling;var ye=D(x,Z,U[oe],B);if(ye===null){Z===null&&(Z=me);break}e&&Z&&ye.alternate===null&&t(x,Z),T=c(ye,T,oe),ge===null?$=ye:ge.sibling=ye,ge=ye,Z=me}if(oe===U.length)return n(x,Z),pe&&sn(x,oe),$;if(Z===null){for(;oe<U.length;oe++)Z=L(x,U[oe],B),Z!==null&&(T=c(Z,T,oe),ge===null?$=Z:ge.sibling=Z,ge=Z);return pe&&sn(x,oe),$}for(Z=i(Z);oe<U.length;oe++)me=R(Z,x,oe,U[oe],B),me!==null&&(e&&me.alternate!==null&&Z.delete(me.key===null?oe:me.key),T=c(me,T,oe),ge===null?$=me:ge.sibling=me,ge=me);return e&&Z.forEach(function(Fn){return t(x,Fn)}),pe&&sn(x,oe),$}function ee(x,T,U,B){if(U==null)throw Error(o(151));for(var $=null,ge=null,Z=T,oe=T=0,me=null,ye=U.next();Z!==null&&!ye.done;oe++,ye=U.next()){Z.index>oe?(me=Z,Z=null):me=Z.sibling;var Fn=D(x,Z,ye.value,B);if(Fn===null){Z===null&&(Z=me);break}e&&Z&&Fn.alternate===null&&t(x,Z),T=c(Fn,T,oe),ge===null?$=Fn:ge.sibling=Fn,ge=Fn,Z=me}if(ye.done)return n(x,Z),pe&&sn(x,oe),$;if(Z===null){for(;!ye.done;oe++,ye=U.next())ye=L(x,ye.value,B),ye!==null&&(T=c(ye,T,oe),ge===null?$=ye:ge.sibling=ye,ge=ye);return pe&&sn(x,oe),$}for(Z=i(Z);!ye.done;oe++,ye=U.next())ye=R(Z,x,oe,ye.value,B),ye!==null&&(e&&ye.alternate!==null&&Z.delete(ye.key===null?oe:ye.key),T=c(ye,T,oe),ge===null?$=ye:ge.sibling=ye,ge=ye);return e&&Z.forEach(function(n1){return t(x,n1)}),pe&&sn(x,oe),$}function Ue(x,T,U,B){if(typeof U=="object"&&U!==null&&U.type===V&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case E:e:{for(var $=U.key;T!==null;){if(T.key===$){if($=U.type,$===V){if(T.tag===7){n(x,T.sibling),B=s(T,U.props.children),B.return=x,x=B;break e}}else if(T.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===W&&ua($)===T.type){n(x,T.sibling),B=s(T,U.props),Vi(B,U),B.return=x,x=B;break e}n(x,T);break}else t(x,T);T=T.sibling}U.type===V?(B=ra(U.props.children,x.mode,B,U.key),B.return=x,x=B):(B=Fr(U.type,U.key,U.props,null,x.mode,B),Vi(B,U),B.return=x,x=B)}return d(x);case M:e:{for($=U.key;T!==null;){if(T.key===$)if(T.tag===4&&T.stateNode.containerInfo===U.containerInfo&&T.stateNode.implementation===U.implementation){n(x,T.sibling),B=s(T,U.children||[]),B.return=x,x=B;break e}else{n(x,T);break}else t(x,T);T=T.sibling}B=nl(U,x.mode,B),B.return=x,x=B}return d(x);case W:return U=ua(U),Ue(x,T,U,B)}if(Ve(U))return F(x,T,U,B);if(we(U)){if($=we(U),typeof $!="function")throw Error(o(150));return U=$.call(U),ee(x,T,U,B)}if(typeof U.then=="function")return Ue(x,T,$r(U),B);if(U.$$typeof===G)return Ue(x,T,Qr(x,U),B);es(x,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,T!==null&&T.tag===6?(n(x,T.sibling),B=s(T,U),B.return=x,x=B):(n(x,T),B=tl(U,x.mode,B),B.return=x,x=B),d(x)):n(x,T)}return function(x,T,U,B){try{Oi=0;var $=Ue(x,T,U,B);return qa=null,$}catch(Z){if(Z===Ia||Z===Jr)throw Z;var ge=wt(29,Z,null,x.mode);return ge.lanes=B,ge.return=x,ge}}}var ha=Th(!0),Ch=Th(!1),Mn=!1;function fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Dn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Rn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(be&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Xr(e),oh(e,null,n),t}return qr(e,i,t,n),Xr(e)}function Pi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,pd(e,n)}}function gl(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?s=c=d:c=c.next=d,n=n.next}while(n!==null);c===null?s=c=t:c=c.next=t}else s=c=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var yl=!1;function Hi(){if(yl){var e=Na;if(e!==null)throw e}}function Gi(e,t,n,i){yl=!1;var s=e.updateQueue;Mn=!1;var c=s.firstBaseUpdate,d=s.lastBaseUpdate,g=s.shared.pending;if(g!==null){s.shared.pending=null;var A=g,z=A.next;A.next=null,d===null?c=z:d.next=z,d=A;var j=e.alternate;j!==null&&(j=j.updateQueue,g=j.lastBaseUpdate,g!==d&&(g===null?j.firstBaseUpdate=z:g.next=z,j.lastBaseUpdate=A))}if(c!==null){var L=s.baseState;d=0,j=z=A=null,g=c;do{var D=g.lane&-536870913,R=D!==g.lane;if(R?(he&D)===D:(i&D)===D){D!==0&&D===_a&&(yl=!0),j!==null&&(j=j.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var F=e,ee=g;D=t;var Ue=n;switch(ee.tag){case 1:if(F=ee.payload,typeof F=="function"){L=F.call(Ue,L,D);break e}L=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=ee.payload,D=typeof F=="function"?F.call(Ue,L,D):F,D==null)break e;L=b({},L,D);break e;case 2:Mn=!0}}D=g.callback,D!==null&&(e.flags|=64,R&&(e.flags|=8192),R=s.callbacks,R===null?s.callbacks=[D]:R.push(D))}else R={lane:D,tag:g.tag,payload:g.payload,callback:g.callback,next:null},j===null?(z=j=R,A=L):j=j.next=R,d|=D;if(g=g.next,g===null){if(g=s.shared.pending,g===null)break;R=g,g=R.next,R.next=null,s.lastBaseUpdate=R,s.shared.pending=null}}while(!0);j===null&&(A=L),s.baseState=A,s.firstBaseUpdate=z,s.lastBaseUpdate=j,c===null&&(s.shared.lanes=0),On|=d,e.lanes=d,e.memoizedState=L}}function xh(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Eh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)xh(n[e],t)}var Xa=C(null),ts=C(0);function Uh(e,t){e=yn,I(ts,e),I(Xa,t),yn=e|t.baseLanes}function vl(){I(ts,yn),I(Xa,Xa.current)}function bl(){yn=ts.current,O(Xa),O(ts)}var At=C(null),Lt=null;function kn(e){var t=e.alternate;I(He,He.current&1),I(At,e),Lt===null&&(t===null||Xa.current!==null||t.memoizedState!==null)&&(Lt=e)}function Sl(e){I(He,He.current),I(At,e),Lt===null&&(Lt=e)}function zh(e){e.tag===22?(I(He,He.current),I(At,e),Lt===null&&(Lt=e)):jn()}function jn(){I(He,He.current),I(At,At.current)}function Tt(e){O(At),Lt===e&&(Lt=null),O(He)}var He=C(0);function ns(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ec(n)||Uc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cn=0,re=null,xe=null,Ie=null,as=!1,Fa=!1,ma=!1,is=0,_i=0,Ya=null,Fv=0;function Be(){throw Error(o(321))}function wl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Al(e,t,n,i,s,c){return cn=c,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?dm:Vl,ma=!1,c=n(i,s),ma=!1,Fa&&(c=Dh(t,n,i,s)),Mh(e),c}function Mh(e){k.H=qi;var t=xe!==null&&xe.next!==null;if(cn=0,Ie=xe=re=null,as=!1,_i=0,Ya=null,t)throw Error(o(300));e===null||qe||(e=e.dependencies,e!==null&&Kr(e)&&(qe=!0))}function Dh(e,t,n,i){re=e;var s=0;do{if(Fa&&(Ya=null),_i=0,Fa=!1,25<=s)throw Error(o(301));if(s+=1,Ie=xe=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}k.H=hm,c=t(n,i)}while(Fa);return c}function Yv(){var e=k.H,t=e.useState()[0];return t=typeof t.then=="function"?Ni(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(re.flags|=1024),t}function Tl(){var e=is!==0;return is=0,e}function Cl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xl(e){if(as){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}as=!1}cn=0,Ie=xe=re=null,Fa=!1,_i=is=0,Ya=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?re.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Ge(){if(xe===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Ie===null?re.memoizedState:Ie.next;if(t!==null)Ie=t,xe=e;else{if(e===null)throw re.alternate===null?Error(o(467)):Error(o(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ie===null?re.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function rs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ni(e){var t=_i;return _i+=1,Ya===null&&(Ya=[]),e=Sh(Ya,e,t),t=re,(Ie===null?t.memoizedState:Ie.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?dm:Vl),e}function ss(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ni(e);if(e.$$typeof===G)return $e(e)}throw Error(o(438,String(e)))}function El(e){var t=null,n=re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=re.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=rs(),re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=te;return t.index++,n}function un(e,t){return typeof t=="function"?t(e):t}function os(e){var t=Ge();return Ul(t,xe,e)}function Ul(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var s=e.baseQueue,c=i.pending;if(c!==null){if(s!==null){var d=s.next;s.next=c.next,c.next=d}t.baseQueue=s=c,i.pending=null}if(c=e.baseState,s===null)e.memoizedState=c;else{t=s.next;var g=d=null,A=null,z=t,j=!1;do{var L=z.lane&-536870913;if(L!==z.lane?(he&L)===L:(cn&L)===L){var D=z.revertLane;if(D===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),L===_a&&(j=!0);else if((cn&D)===D){z=z.next,D===_a&&(j=!0);continue}else L={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},A===null?(g=A=L,d=c):A=A.next=L,re.lanes|=D,On|=D;L=z.action,ma&&n(c,L),c=z.hasEagerState?z.eagerState:n(c,L)}else D={lane:L,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},A===null?(g=A=D,d=c):A=A.next=D,re.lanes|=L,On|=L;z=z.next}while(z!==null&&z!==t);if(A===null?d=c:A.next=g,!St(c,e.memoizedState)&&(qe=!0,j&&(n=Na,n!==null)))throw n;e.memoizedState=c,e.baseState=d,e.baseQueue=A,i.lastRenderedState=c}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function zl(e){var t=Ge(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,c=t.memoizedState;if(s!==null){n.pending=null;var d=s=s.next;do c=e(c,d.action),d=d.next;while(d!==s);St(c,t.memoizedState)||(qe=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,i]}function Rh(e,t,n){var i=re,s=Ge(),c=pe;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=t();var d=!St((xe||s).memoizedState,n);if(d&&(s.memoizedState=n,qe=!0),s=s.queue,Rl(Bh.bind(null,i,s,e),[e]),s.getSnapshot!==t||d||Ie!==null&&Ie.memoizedState.tag&1){if(i.flags|=2048,Ka(9,{destroy:void 0},jh.bind(null,i,s,n,t),null),ze===null)throw Error(o(349));c||(cn&127)!==0||kh(i,t,n)}return n}function kh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t=rs(),re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jh(e,t,n,i){t.value=n,t.getSnapshot=i,Lh(t)&&Oh(e)}function Bh(e,t,n){return n(function(){Lh(t)&&Oh(e)})}function Lh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function Oh(e){var t=ia(e,2);t!==null&&gt(t,e,2)}function Ml(e){var t=ot();if(typeof e=="function"){var n=e;if(e=n(),ma){An(!0);try{n()}finally{An(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:e},t}function Vh(e,t,n,i){return e.baseState=n,Ul(e,xe,typeof i=="function"?i:un)}function Kv(e,t,n,i,s){if(us(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){c.listeners.push(d)}};k.T!==null?n(!0):c.isTransition=!1,i(c),n=t.pending,n===null?(c.next=t.pending=c,Ph(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Ph(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var c=k.T,d={};k.T=d;try{var g=n(s,i),A=k.S;A!==null&&A(d,g),Hh(e,t,g)}catch(z){Dl(e,t,z)}finally{c!==null&&d.types!==null&&(c.types=d.types),k.T=c}}else try{c=n(s,i),Hh(e,t,c)}catch(z){Dl(e,t,z)}}function Hh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Gh(e,t,i)},function(i){return Dl(e,t,i)}):Gh(e,t,n)}function Gh(e,t,n){t.status="fulfilled",t.value=n,_h(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ph(e,n)))}function Dl(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,_h(t),t=t.next;while(t!==i)}e.action=null}function _h(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Nh(e,t){return t}function Ih(e,t){if(pe){var n=ze.formState;if(n!==null){e:{var i=re;if(pe){if(Re){t:{for(var s=Re,c=Bt;s.nodeType!==8;){if(!c){s=null;break t}if(s=Ot(s.nextSibling),s===null){s=null;break t}}c=s.data,s=c==="F!"||c==="F"?s:null}if(s){Re=Ot(s.nextSibling),i=s.data==="F!";break e}}Un(i)}i=!1}i&&(t=n[0])}}return n=ot(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nh,lastRenderedState:t},n.queue=i,n=lm.bind(null,re,i),i.dispatch=n,i=Ml(!1),c=Ol.bind(null,re,!1,i.queue),i=ot(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=Kv.bind(null,re,s,c,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function qh(e){var t=Ge();return Xh(t,xe,e)}function Xh(e,t,n){if(t=Ul(e,t,Nh)[0],e=os(un)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ni(t)}catch(d){throw d===Ia?Jr:d}else i=t;t=Ge();var s=t.queue,c=s.dispatch;return n!==t.memoizedState&&(re.flags|=2048,Ka(9,{destroy:void 0},Qv.bind(null,s,n),null)),[i,c,e]}function Qv(e,t){e.action=t}function Fh(e){var t=Ge(),n=xe;if(n!==null)return Xh(t,n,e);Ge(),t=t.memoizedState,n=Ge();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ka(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=re.updateQueue,t===null&&(t=rs(),re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Yh(){return Ge().memoizedState}function ls(e,t,n,i){var s=ot();re.flags|=e,s.memoizedState=Ka(1|t,{destroy:void 0},n,i===void 0?null:i)}function cs(e,t,n,i){var s=Ge();i=i===void 0?null:i;var c=s.memoizedState.inst;xe!==null&&i!==null&&wl(i,xe.memoizedState.deps)?s.memoizedState=Ka(t,c,n,i):(re.flags|=e,s.memoizedState=Ka(1|t,c,n,i))}function Kh(e,t){ls(8390656,8,e,t)}function Rl(e,t){cs(2048,8,e,t)}function Zv(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=rs(),re.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Qh(e){var t=Ge().memoizedState;return Zv({ref:t,nextImpl:e}),function(){if((be&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Zh(e,t){return cs(4,2,e,t)}function Jh(e,t){return cs(4,4,e,t)}function Wh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $h(e,t,n){n=n!=null?n.concat([e]):null,cs(4,4,Wh.bind(null,t,e),n)}function kl(){}function em(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&wl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function tm(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&wl(t,i[1]))return i[0];if(i=e(),ma){An(!0);try{e()}finally{An(!1)}}return n.memoizedState=[i,t],i}function jl(e,t,n){return n===void 0||(cn&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=nf(),re.lanes|=e,On|=e,n)}function nm(e,t,n,i){return St(n,t)?n:Xa.current!==null?(e=jl(e,n,i),St(e,t)||(qe=!0),e):(cn&42)===0||(cn&1073741824)!==0&&(he&261930)===0?(qe=!0,e.memoizedState=n):(e=nf(),re.lanes|=e,On|=e,t)}function am(e,t,n,i,s){var c=_.p;_.p=c!==0&&8>c?c:8;var d=k.T,g={};k.T=g,Ol(e,!1,t,n);try{var A=s(),z=k.S;if(z!==null&&z(g,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var j=Xv(A,i);Ii(e,t,j,Et(e))}else Ii(e,t,i,Et(e))}catch(L){Ii(e,t,{then:function(){},status:"rejected",reason:L},Et())}finally{_.p=c,d!==null&&g.types!==null&&(d.types=g.types),k.T=d}}function Jv(){}function Bl(e,t,n,i){if(e.tag!==5)throw Error(o(476));var s=im(e).queue;am(e,s,t,X,n===null?Jv:function(){return rm(e),n(i)})}function im(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:X},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function rm(e){var t=im(e);t.next===null&&(t=e.alternate.memoizedState),Ii(e,t.next.queue,{},Et())}function Ll(){return $e(sr)}function sm(){return Ge().memoizedState}function om(){return Ge().memoizedState}function Wv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Et();e=Dn(n);var i=Rn(t,e,n);i!==null&&(gt(i,t,n),Pi(i,t,n)),t={cache:ul()},e.payload=t;return}t=t.return}}function $v(e,t,n){var i=Et();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},us(e)?cm(t,n):(n=$o(e,t,n,i),n!==null&&(gt(n,e,i),um(n,t,i)))}function lm(e,t,n){var i=Et();Ii(e,t,n,i)}function Ii(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(us(e))cm(t,s);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var d=t.lastRenderedState,g=c(d,n);if(s.hasEagerState=!0,s.eagerState=g,St(g,d))return qr(e,t,s,0),ze===null&&Ir(),!1}catch{}if(n=$o(e,t,s,i),n!==null)return gt(n,e,i),um(n,t,i),!0}return!1}function Ol(e,t,n,i){if(i={lane:2,revertLane:fc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},us(e)){if(t)throw Error(o(479))}else t=$o(e,n,i,2),t!==null&&gt(t,e,2)}function us(e){var t=e.alternate;return e===re||t!==null&&t===re}function cm(e,t){Fa=as=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function um(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,pd(e,n)}}var qi={readContext:$e,use:ss,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be};qi.useEffectEvent=Be;var dm={readContext:$e,use:ss,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:Kh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ls(4194308,4,Wh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){ls(4,2,e,t)},useMemo:function(e,t){var n=ot();t=t===void 0?null:t;var i=e();if(ma){An(!0);try{e()}finally{An(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=ot();if(n!==void 0){var s=n(t);if(ma){An(!0);try{n(t)}finally{An(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=$v.bind(null,re,e),[i.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=Ml(e);var t=e.queue,n=lm.bind(null,re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:kl,useDeferredValue:function(e,t){var n=ot();return jl(n,e,t)},useTransition:function(){var e=Ml(!1);return e=am.bind(null,re,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=re,s=ot();if(pe){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),ze===null)throw Error(o(349));(he&127)!==0||kh(i,t,n)}s.memoizedState=n;var c={value:n,getSnapshot:t};return s.queue=c,Kh(Bh.bind(null,i,c,e),[e]),i.flags|=2048,Ka(9,{destroy:void 0},jh.bind(null,i,c,n,t),null),n},useId:function(){var e=ot(),t=ze.identifierPrefix;if(pe){var n=Kt,i=Yt;n=(i&~(1<<32-bt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=is++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Fv++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ll,useFormState:Ih,useActionState:Ih,useOptimistic:function(e){var t=ot();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ol.bind(null,re,!0,n),n.dispatch=t,[e,t]},useMemoCache:El,useCacheRefresh:function(){return ot().memoizedState=Wv.bind(null,re)},useEffectEvent:function(e){var t=ot(),n={impl:e};return t.memoizedState=n,function(){if((be&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Vl={readContext:$e,use:ss,useCallback:em,useContext:$e,useEffect:Rl,useImperativeHandle:$h,useInsertionEffect:Zh,useLayoutEffect:Jh,useMemo:tm,useReducer:os,useRef:Yh,useState:function(){return os(un)},useDebugValue:kl,useDeferredValue:function(e,t){var n=Ge();return nm(n,xe.memoizedState,e,t)},useTransition:function(){var e=os(un)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Ni(e),t]},useSyncExternalStore:Rh,useId:sm,useHostTransitionStatus:Ll,useFormState:qh,useActionState:qh,useOptimistic:function(e,t){var n=Ge();return Vh(n,xe,e,t)},useMemoCache:El,useCacheRefresh:om};Vl.useEffectEvent=Qh;var hm={readContext:$e,use:ss,useCallback:em,useContext:$e,useEffect:Rl,useImperativeHandle:$h,useInsertionEffect:Zh,useLayoutEffect:Jh,useMemo:tm,useReducer:zl,useRef:Yh,useState:function(){return zl(un)},useDebugValue:kl,useDeferredValue:function(e,t){var n=Ge();return xe===null?jl(n,e,t):nm(n,xe.memoizedState,e,t)},useTransition:function(){var e=zl(un)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Ni(e),t]},useSyncExternalStore:Rh,useId:sm,useHostTransitionStatus:Ll,useFormState:Fh,useActionState:Fh,useOptimistic:function(e,t){var n=Ge();return xe!==null?Vh(n,xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:El,useCacheRefresh:om};hm.useEffectEvent=Qh;function Pl(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hl={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Et(),s=Dn(i);s.payload=t,n!=null&&(s.callback=n),t=Rn(e,s,i),t!==null&&(gt(t,e,i),Pi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Et(),s=Dn(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Rn(e,s,i),t!==null&&(gt(t,e,i),Pi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Et(),i=Dn(n);i.tag=2,t!=null&&(i.callback=t),t=Rn(e,i,n),t!==null&&(gt(t,e,n),Pi(t,e,n))}};function mm(e,t,n,i,s,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,d):t.prototype&&t.prototype.isPureReactComponent?!Di(n,i)||!Di(s,c):!0}function fm(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Hl.enqueueReplaceState(t,t.state,null)}function fa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=b({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function pm(e){Nr(e)}function gm(e){console.error(e)}function ym(e){Nr(e)}function ds(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function vm(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Gl(e,t,n){return n=Dn(n),n.tag=3,n.payload={element:null},n.callback=function(){ds(e,t)},n}function bm(e){return e=Dn(e),e.tag=3,e}function Sm(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var c=i.value;e.payload=function(){return s(c)},e.callback=function(){vm(t,n,i)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){vm(t,n,i),typeof s!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})})}function eb(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ga(t,n,s,!0),n=At.current,n!==null){switch(n.tag){case 31:case 13:return Lt===null?Ts():n.alternate===null&&Le===0&&(Le=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Wr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),dc(e,i,s)),!1;case 22:return n.flags|=65536,i===Wr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),dc(e,i,s)),!1}throw Error(o(435,n.tag))}return dc(e,i,s),Ts(),!1}if(pe)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==rl&&(e=Error(o(422),{cause:i}),ji(Rt(e,n)))):(i!==rl&&(t=Error(o(423),{cause:i}),ji(Rt(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Rt(i,n),s=Gl(e.stateNode,i,s),gl(e,s),Le!==4&&(Le=2)),!1;var c=Error(o(520),{cause:i});if(c=Rt(c,n),Wi===null?Wi=[c]:Wi.push(c),Le!==4&&(Le=2),t===null)return!0;i=Rt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Gl(n.stateNode,i,e),gl(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Vn===null||!Vn.has(c))))return n.flags|=65536,s&=-s,n.lanes|=s,s=bm(s),Sm(s,e,n,i),gl(n,s),!1}n=n.return}while(n!==null);return!1}var _l=Error(o(461)),qe=!1;function et(e,t,n,i){t.child=e===null?Ch(t,null,n,i):ha(t,e.child,n,i)}function wm(e,t,n,i,s){n=n.render;var c=t.ref;if("ref"in i){var d={};for(var g in i)g!=="ref"&&(d[g]=i[g])}else d=i;return la(t),i=Al(e,t,n,d,c,s),g=Tl(),e!==null&&!qe?(Cl(e,t,s),dn(e,t,s)):(pe&&g&&al(t),t.flags|=1,et(e,t,i,s),t.child)}function Am(e,t,n,i,s){if(e===null){var c=n.type;return typeof c=="function"&&!el(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,Tm(e,t,c,i,s)):(e=Fr(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Ql(e,s)){var d=c.memoizedProps;if(n=n.compare,n=n!==null?n:Di,n(d,i)&&e.ref===t.ref)return dn(e,t,s)}return t.flags|=1,e=rn(c,i),e.ref=t.ref,e.return=t,t.child=e}function Tm(e,t,n,i,s){if(e!==null){var c=e.memoizedProps;if(Di(c,i)&&e.ref===t.ref)if(qe=!1,t.pendingProps=i=c,Ql(e,s))(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,dn(e,t,s)}return Nl(e,t,n,i,s)}function Cm(e,t,n,i){var s=i.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~c}else i=0,t.child=null;return xm(e,t,c,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zr(t,c!==null?c.cachePool:null),c!==null?Uh(t,c):vl(),zh(t);else return i=t.lanes=536870912,xm(e,t,c!==null?c.baseLanes|n:n,n,i)}else c!==null?(Zr(t,c.cachePool),Uh(t,c),jn(),t.memoizedState=null):(e!==null&&Zr(t,null),vl(),jn());return et(e,t,s,n),t.child}function Xi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function xm(e,t,n,i,s){var c=hl();return c=c===null?null:{parent:Ne._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&Zr(t,null),vl(),zh(t),e!==null&&Ga(e,t,i,!0),t.childLanes=s,null}function hs(e,t){return t=fs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Em(e,t,n){return ha(t,e.child,null,n),e=hs(t,t.pendingProps),e.flags|=2,Tt(t),t.memoizedState=null,e}function tb(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(pe){if(i.mode==="hidden")return e=hs(t,i),t.lanes=536870912,Xi(null,e);if(Sl(t),(e=Re)?(e=Hf(e,Bt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xn!==null?{id:Yt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},n=ch(e),n.return=t,t.child=n,We=t,Re=null)):e=null,e===null)throw Un(t);return t.lanes=536870912,null}return hs(t,i)}var c=e.memoizedState;if(c!==null){var d=c.dehydrated;if(Sl(t),s)if(t.flags&256)t.flags&=-257,t=Em(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(qe||Ga(e,t,n,!1),s=(n&e.childLanes)!==0,qe||s){if(i=ze,i!==null&&(d=gd(i,n),d!==0&&d!==c.retryLane))throw c.retryLane=d,ia(e,d),gt(i,e,d),_l;Ts(),t=Em(e,t,n)}else e=c.treeContext,Re=Ot(d.nextSibling),We=t,pe=!0,En=null,Bt=!1,e!==null&&hh(t,e),t=hs(t,i),t.flags|=4096;return t}return e=rn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ms(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Nl(e,t,n,i,s){return la(t),n=Al(e,t,n,i,void 0,s),i=Tl(),e!==null&&!qe?(Cl(e,t,s),dn(e,t,s)):(pe&&i&&al(t),t.flags|=1,et(e,t,n,s),t.child)}function Um(e,t,n,i,s,c){return la(t),t.updateQueue=null,n=Dh(t,i,n,s),Mh(e),i=Tl(),e!==null&&!qe?(Cl(e,t,c),dn(e,t,c)):(pe&&i&&al(t),t.flags|=1,et(e,t,n,c),t.child)}function zm(e,t,n,i,s){if(la(t),t.stateNode===null){var c=Oa,d=n.contextType;typeof d=="object"&&d!==null&&(c=$e(d)),c=new n(i,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Hl,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=i,c.state=t.memoizedState,c.refs={},fl(t),d=n.contextType,c.context=typeof d=="object"&&d!==null?$e(d):Oa,c.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Pl(t,n,d,i),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(d=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),d!==c.state&&Hl.enqueueReplaceState(c,c.state,null),Gi(t,i,c,s),Hi(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){c=t.stateNode;var g=t.memoizedProps,A=fa(n,g);c.props=A;var z=c.context,j=n.contextType;d=Oa,typeof j=="object"&&j!==null&&(d=$e(j));var L=n.getDerivedStateFromProps;j=typeof L=="function"||typeof c.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,j||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g||z!==d)&&fm(t,c,i,d),Mn=!1;var D=t.memoizedState;c.state=D,Gi(t,i,c,s),Hi(),z=t.memoizedState,g||D!==z||Mn?(typeof L=="function"&&(Pl(t,n,L,i),z=t.memoizedState),(A=Mn||mm(t,n,A,i,D,z,d))?(j||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=z),c.props=i,c.state=z,c.context=d,i=A):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{c=t.stateNode,pl(e,t),d=t.memoizedProps,j=fa(n,d),c.props=j,L=t.pendingProps,D=c.context,z=n.contextType,A=Oa,typeof z=="object"&&z!==null&&(A=$e(z)),g=n.getDerivedStateFromProps,(z=typeof g=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==L||D!==A)&&fm(t,c,i,A),Mn=!1,D=t.memoizedState,c.state=D,Gi(t,i,c,s),Hi();var R=t.memoizedState;d!==L||D!==R||Mn||e!==null&&e.dependencies!==null&&Kr(e.dependencies)?(typeof g=="function"&&(Pl(t,n,g,i),R=t.memoizedState),(j=Mn||mm(t,n,j,i,D,R,A)||e!==null&&e.dependencies!==null&&Kr(e.dependencies))?(z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,R,A),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,R,A)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=R),c.props=i,c.state=R,c.context=A,i=j):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),i=!1)}return c=i,ms(e,t),i=(t.flags&128)!==0,c||i?(c=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&i?(t.child=ha(t,e.child,null,s),t.child=ha(t,null,n,s)):et(e,t,n,s),t.memoizedState=c.state,e=t.child):e=dn(e,t,s),e}function Mm(e,t,n,i){return sa(),t.flags|=256,et(e,t,n,i),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ql(e){return{baseLanes:e,cachePool:vh()}}function Xl(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=xt),e}function Dm(e,t,n){var i=t.pendingProps,s=!1,c=(t.flags&128)!==0,d;if((d=c)||(d=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),d&&(s=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(pe){if(s?kn(t):jn(),(e=Re)?(e=Hf(e,Bt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xn!==null?{id:Yt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},n=ch(e),n.return=t,t.child=n,We=t,Re=null)):e=null,e===null)throw Un(t);return Uc(e)?t.lanes=32:t.lanes=536870912,null}var g=i.children;return i=i.fallback,s?(jn(),s=t.mode,g=fs({mode:"hidden",children:g},s),i=ra(i,s,n,null),g.return=t,i.return=t,g.sibling=i,t.child=g,i=t.child,i.memoizedState=ql(n),i.childLanes=Xl(e,d,n),t.memoizedState=Il,Xi(null,i)):(kn(t),Fl(t,g))}var A=e.memoizedState;if(A!==null&&(g=A.dehydrated,g!==null)){if(c)t.flags&256?(kn(t),t.flags&=-257,t=Yl(e,t,n)):t.memoizedState!==null?(jn(),t.child=e.child,t.flags|=128,t=null):(jn(),g=i.fallback,s=t.mode,i=fs({mode:"visible",children:i.children},s),g=ra(g,s,n,null),g.flags|=2,i.return=t,g.return=t,i.sibling=g,t.child=i,ha(t,e.child,null,n),i=t.child,i.memoizedState=ql(n),i.childLanes=Xl(e,d,n),t.memoizedState=Il,t=Xi(null,i));else if(kn(t),Uc(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var z=d.dgst;d=z,i=Error(o(419)),i.stack="",i.digest=d,ji({value:i,source:null,stack:null}),t=Yl(e,t,n)}else if(qe||Ga(e,t,n,!1),d=(n&e.childLanes)!==0,qe||d){if(d=ze,d!==null&&(i=gd(d,n),i!==0&&i!==A.retryLane))throw A.retryLane=i,ia(e,i),gt(d,e,i),_l;Ec(g)||Ts(),t=Yl(e,t,n)}else Ec(g)?(t.flags|=192,t.child=e.child,t=null):(e=A.treeContext,Re=Ot(g.nextSibling),We=t,pe=!0,En=null,Bt=!1,e!==null&&hh(t,e),t=Fl(t,i.children),t.flags|=4096);return t}return s?(jn(),g=i.fallback,s=t.mode,A=e.child,z=A.sibling,i=rn(A,{mode:"hidden",children:i.children}),i.subtreeFlags=A.subtreeFlags&65011712,z!==null?g=rn(z,g):(g=ra(g,s,n,null),g.flags|=2),g.return=t,i.return=t,i.sibling=g,t.child=i,Xi(null,i),i=t.child,g=e.child.memoizedState,g===null?g=ql(n):(s=g.cachePool,s!==null?(A=Ne._currentValue,s=s.parent!==A?{parent:A,pool:A}:s):s=vh(),g={baseLanes:g.baseLanes|n,cachePool:s}),i.memoizedState=g,i.childLanes=Xl(e,d,n),t.memoizedState=Il,Xi(e.child,i)):(kn(t),n=e.child,e=n.sibling,n=rn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Fl(e,t){return t=fs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function fs(e,t){return e=wt(22,e,null,t),e.lanes=0,e}function Yl(e,t,n){return ha(t,e.child,null,n),e=Fl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ll(e.return,t,n)}function Kl(e,t,n,i,s,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:c}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=n,d.tailMode=s,d.treeForkCount=c)}function km(e,t,n){var i=t.pendingProps,s=i.revealOrder,c=i.tail;i=i.children;var d=He.current,g=(d&2)!==0;if(g?(d=d&1|2,t.flags|=128):d&=1,I(He,d),et(e,t,i,n),i=pe?ki:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rm(e,n,t);else if(e.tag===19)Rm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ns(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Kl(t,!1,s,n,c,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ns(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Kl(t,!0,n,null,c,i);break;case"together":Kl(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ql(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Kr(e)))}function nb(e,t,n){switch(t.tag){case 3:st(t,t.stateNode.containerInfo),zn(t,Ne,e.memoizedState.cache),sa();break;case 27:case 5:yi(t);break;case 4:st(t,t.stateNode.containerInfo);break;case 10:zn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Sl(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(kn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Dm(e,t,n):(kn(t),e=dn(e,t,n),e!==null?e.sibling:null);kn(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Ga(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return km(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),I(He,He.current),i)break;return null;case 22:return t.lanes=0,Cm(e,t,n,t.pendingProps);case 24:zn(t,Ne,e.memoizedState.cache)}return dn(e,t,n)}function jm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!Ql(e,n)&&(t.flags&128)===0)return qe=!1,nb(e,t,n);qe=(e.flags&131072)!==0}else qe=!1,pe&&(t.flags&1048576)!==0&&dh(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ua(t.elementType),t.type=e,typeof e=="function")el(e)?(i=fa(e,i),t.tag=1,t=zm(null,t,e,i,n)):(t.tag=0,t=Nl(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===q){t.tag=11,t=wm(null,t,e,i,n);break e}else if(s===Y){t.tag=14,t=Am(null,t,e,i,n);break e}}throw t=_e(e)||e,Error(o(306,t,""))}}return t;case 0:return Nl(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=fa(i,t.pendingProps),zm(e,t,i,s,n);case 3:e:{if(st(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var c=t.memoizedState;s=c.element,pl(e,t),Gi(t,i,null,n);var d=t.memoizedState;if(i=d.cache,zn(t,Ne,i),i!==c.cache&&cl(t,[Ne],n,!0),Hi(),i=d.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Mm(e,t,i,n);break e}else if(i!==s){s=Rt(Error(o(424)),t),ji(s),t=Mm(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=Ot(e.firstChild),We=t,pe=!0,En=null,Bt=!0,n=Ch(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sa(),i===s){t=dn(e,t,n);break e}et(e,t,i,n)}t=t.child}return t;case 26:return ms(e,t),e===null?(n=Xf(t.type,null,t.pendingProps,null))?t.memoizedState=n:pe||(n=t.type,e=t.pendingProps,i=Ds(ce.current).createElement(n),i[Je]=t,i[ut]=e,tt(i,n,e),Qe(i),t.stateNode=i):t.memoizedState=Xf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return yi(t),e===null&&pe&&(i=t.stateNode=Nf(t.type,t.pendingProps,ce.current),We=t,Bt=!0,s=Re,_n(t.type)?(zc=s,Re=Ot(i.firstChild)):Re=s),et(e,t,t.pendingProps.children,n),ms(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&pe&&((s=i=Re)&&(i=kb(i,t.type,t.pendingProps,Bt),i!==null?(t.stateNode=i,We=t,Re=Ot(i.firstChild),Bt=!1,s=!0):s=!1),s||Un(t)),yi(t),s=t.type,c=t.pendingProps,d=e!==null?e.memoizedProps:null,i=c.children,Tc(s,c)?i=null:d!==null&&Tc(s,d)&&(t.flags|=32),t.memoizedState!==null&&(s=Al(e,t,Yv,null,null,n),sr._currentValue=s),ms(e,t),et(e,t,i,n),t.child;case 6:return e===null&&pe&&((e=n=Re)&&(n=jb(n,t.pendingProps,Bt),n!==null?(t.stateNode=n,We=t,Re=null,e=!0):e=!1),e||Un(t)),null;case 13:return Dm(e,t,n);case 4:return st(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ha(t,null,i,n):et(e,t,i,n),t.child;case 11:return wm(e,t,t.type,t.pendingProps,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,zn(t,t.type,i.value),et(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,la(t),s=$e(s),i=i(s),t.flags|=1,et(e,t,i,n),t.child;case 14:return Am(e,t,t.type,t.pendingProps,n);case 15:return Tm(e,t,t.type,t.pendingProps,n);case 19:return km(e,t,n);case 31:return tb(e,t,n);case 22:return Cm(e,t,n,t.pendingProps);case 24:return la(t),i=$e(Ne),e===null?(s=hl(),s===null&&(s=ze,c=ul(),s.pooledCache=c,c.refCount++,c!==null&&(s.pooledCacheLanes|=n),s=c),t.memoizedState={parent:i,cache:s},fl(t),zn(t,Ne,s)):((e.lanes&n)!==0&&(pl(e,t),Gi(t,null,null,n),Hi()),s=e.memoizedState,c=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),zn(t,Ne,i)):(i=c.cache,zn(t,Ne,i),i!==s.cache&&cl(t,[Ne],n,!0))),et(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function hn(e){e.flags|=4}function Zl(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(of())e.flags|=8192;else throw da=Wr,ml}else e.flags&=-16777217}function Bm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zf(t))if(of())e.flags|=8192;else throw da=Wr,ml}function ps(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?md():536870912,e.lanes|=t,Wa|=t)}function Fi(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function ab(e,t,n){var i=t.pendingProps;switch(il(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return ke(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ln(Ne),Pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ha(t)?hn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,sl())),ke(t),null;case 26:var s=t.type,c=t.memoizedState;return e===null?(hn(t),c!==null?(ke(t),Bm(t,c)):(ke(t),Zl(t,s,null,i,n))):c?c!==e.memoizedState?(hn(t),ke(t),Bm(t,c)):(ke(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&hn(t),ke(t),Zl(t,s,e,i,n)),null;case 27:if(Er(t),n=ce.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&hn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return ke(t),null}e=Q.current,Ha(t)?mh(t):(e=Nf(s,i,n),t.stateNode=e,hn(t))}return ke(t),null;case 5:if(Er(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&hn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return ke(t),null}if(c=Q.current,Ha(t))mh(t);else{var d=Ds(ce.current);switch(c){case 1:c=d.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:c=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":c=d.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":c=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":c=d.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?d.createElement(s,{is:i.is}):d.createElement(s)}}c[Je]=t,c[ut]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)c.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=c;e:switch(tt(c,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&hn(t)}}return ke(t),Zl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&hn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=ce.current,Ha(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=We,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[Je]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Rf(e.nodeValue,n)),e||Un(t,!0)}else e=Ds(e).createTextNode(i),e[Je]=t,t.stateNode=e}return ke(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ha(t),n!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[Je]=t}else sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ke(t),e=!1}else n=sl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Tt(t),t):(Tt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return ke(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Ha(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[Je]=t}else sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ke(t),s=!1}else s=sl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Tt(t),t):(Tt(t),null)}return Tt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ps(t,t.updateQueue),ke(t),null);case 4:return Pe(),e===null&&vc(t.stateNode.containerInfo),ke(t),null;case 10:return ln(t.type),ke(t),null;case 19:if(O(He),i=t.memoizedState,i===null)return ke(t),null;if(s=(t.flags&128)!==0,c=i.rendering,c===null)if(s)Fi(i,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=ns(e),c!==null){for(t.flags|=128,Fi(i,!1),e=c.updateQueue,t.updateQueue=e,ps(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)lh(n,e),n=n.sibling;return I(He,He.current&1|2),pe&&sn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&yt()>Ss&&(t.flags|=128,s=!0,Fi(i,!1),t.lanes=4194304)}else{if(!s)if(e=ns(c),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,ps(t,e),Fi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!pe)return ke(t),null}else 2*yt()-i.renderingStartTime>Ss&&n!==536870912&&(t.flags|=128,s=!0,Fi(i,!1),t.lanes=4194304);i.isBackwards?(c.sibling=t.child,t.child=c):(e=i.last,e!==null?e.sibling=c:t.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=yt(),e.sibling=null,n=He.current,I(He,s?n&1|2:n&1),pe&&sn(t,i.treeForkCount),e):(ke(t),null);case 22:case 23:return Tt(t),bl(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),n=t.updateQueue,n!==null&&ps(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&O(ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ln(Ne),ke(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function ib(e,t){switch(il(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ln(Ne),Pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Er(t),null;case 31:if(t.memoizedState!==null){if(Tt(t),t.alternate===null)throw Error(o(340));sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Tt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(He),null;case 4:return Pe(),null;case 10:return ln(t.type),null;case 22:case 23:return Tt(t),bl(),e!==null&&O(ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ln(Ne),null;case 25:return null;default:return null}}function Lm(e,t){switch(il(t),t.tag){case 3:ln(Ne),Pe();break;case 26:case 27:case 5:Er(t);break;case 4:Pe();break;case 31:t.memoizedState!==null&&Tt(t);break;case 13:Tt(t);break;case 19:O(He);break;case 10:ln(t.type);break;case 22:case 23:Tt(t),bl(),e!==null&&O(ca);break;case 24:ln(Ne)}}function Yi(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var c=n.create,d=n.inst;i=c(),d.destroy=i}n=n.next}while(n!==s)}}catch(g){Te(t,t.return,g)}}function Bn(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var c=s.next;i=c;do{if((i.tag&e)===e){var d=i.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,s=t;var A=n,z=g;try{z()}catch(j){Te(s,A,j)}}}i=i.next}while(i!==c)}}catch(j){Te(t,t.return,j)}}function Om(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Eh(t,n)}catch(i){Te(e,e.return,i)}}}function Vm(e,t,n){n.props=fa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Te(e,t,i)}}function Ki(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){Te(e,t,s)}}function Qt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){Te(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Te(e,t,s)}else n.current=null}function Pm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){Te(e,e.return,s)}}function Jl(e,t,n){try{var i=e.stateNode;Eb(i,e.type,n,t),i[ut]=t}catch(s){Te(e,e.return,s)}}function Hm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_n(e.type)||e.tag===4}function Wl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_n(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $l(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nn));else if(i!==4&&(i===27&&_n(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($l(e,t,n),e=e.sibling;e!==null;)$l(e,t,n),e=e.sibling}function gs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&_n(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}function Gm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);tt(t,i,n),t[Je]=e,t[ut]=n}catch(c){Te(e,e.return,c)}}var mn=!1,Xe=!1,ec=!1,_m=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function rb(e,t){if(e=e.containerInfo,wc=Vs,e=$d(e),Yo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var d=0,g=-1,A=-1,z=0,j=0,L=e,D=null;t:for(;;){for(var R;L!==n||s!==0&&L.nodeType!==3||(g=d+s),L!==c||i!==0&&L.nodeType!==3||(A=d+i),L.nodeType===3&&(d+=L.nodeValue.length),(R=L.firstChild)!==null;)D=L,L=R;for(;;){if(L===e)break t;if(D===n&&++z===s&&(g=d),D===c&&++j===i&&(A=d),(R=L.nextSibling)!==null)break;L=D,D=L.parentNode}L=R}n=g===-1||A===-1?null:{start:g,end:A}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ac={focusedElem:e,selectionRange:n},Vs=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,s=c.memoizedProps,c=c.memoizedState,i=n.stateNode;try{var F=fa(n.type,s);e=i.getSnapshotBeforeUpdate(F,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Te(n,n.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)xc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function Nm(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:pn(e,n),i&4&&Yi(5,n);break;case 1:if(pn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){Te(n,n.return,d)}else{var s=fa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Te(n,n.return,d)}}i&64&&Om(n),i&512&&Ki(n,n.return);break;case 3:if(pn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Eh(e,t)}catch(d){Te(n,n.return,d)}}break;case 27:t===null&&i&4&&Gm(n);case 26:case 5:pn(e,n),t===null&&i&4&&Pm(n),i&512&&Ki(n,n.return);break;case 12:pn(e,n);break;case 31:pn(e,n),i&4&&Xm(e,n);break;case 13:pn(e,n),i&4&&Fm(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=fb.bind(null,n),Bb(e,n))));break;case 22:if(i=n.memoizedState!==null||mn,!i){t=t!==null&&t.memoizedState!==null||Xe,s=mn;var c=Xe;mn=i,(Xe=t)&&!c?gn(e,n,(n.subtreeFlags&8772)!==0):pn(e,n),mn=s,Xe=c}break;case 30:break;default:pn(e,n)}}function Im(e){var t=e.alternate;t!==null&&(e.alternate=null,Im(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Do(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,ht=!1;function fn(e,t,n){for(n=n.child;n!==null;)qm(e,t,n),n=n.sibling}function qm(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(vi,n)}catch{}switch(n.tag){case 26:Xe||Qt(n,t),fn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xe||Qt(n,t);var i=je,s=ht;_n(n.type)&&(je=n.stateNode,ht=!1),fn(e,t,n),ar(n.stateNode),je=i,ht=s;break;case 5:Xe||Qt(n,t);case 6:if(i=je,s=ht,je=null,fn(e,t,n),je=i,ht=s,je!==null)if(ht)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(n.stateNode)}catch(c){Te(n,t,c)}else try{je.removeChild(n.stateNode)}catch(c){Te(n,t,c)}break;case 18:je!==null&&(ht?(e=je,Vf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),si(e)):Vf(je,n.stateNode));break;case 4:i=je,s=ht,je=n.stateNode.containerInfo,ht=!0,fn(e,t,n),je=i,ht=s;break;case 0:case 11:case 14:case 15:Bn(2,n,t),Xe||Bn(4,n,t),fn(e,t,n);break;case 1:Xe||(Qt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Vm(n,t,i)),fn(e,t,n);break;case 21:fn(e,t,n);break;case 22:Xe=(i=Xe)||n.memoizedState!==null,fn(e,t,n),Xe=i;break;default:fn(e,t,n)}}function Xm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{si(e)}catch(n){Te(t,t.return,n)}}}function Fm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{si(e)}catch(n){Te(t,t.return,n)}}function sb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new _m),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new _m),t;default:throw Error(o(435,e.tag))}}function ys(e,t){var n=sb(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=pb.bind(null,e,i);i.then(s,s)}})}function mt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],c=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 27:if(_n(g.type)){je=g.stateNode,ht=!1;break e}break;case 5:je=g.stateNode,ht=!1;break e;case 3:case 4:je=g.stateNode.containerInfo,ht=!0;break e}g=g.return}if(je===null)throw Error(o(160));qm(c,d,s),je=null,ht=!1,c=s.alternate,c!==null&&(c.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ym(t,e),t=t.sibling}var Nt=null;function Ym(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),ft(e),i&4&&(Bn(3,e,e.return),Yi(3,e),Bn(5,e,e.return));break;case 1:mt(t,e),ft(e),i&512&&(Xe||n===null||Qt(n,n.return)),i&64&&mn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=Nt;if(mt(t,e),ft(e),i&512&&(Xe||n===null||Qt(n,n.return)),i&4){var c=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;t:switch(i){case"title":c=s.getElementsByTagName("title")[0],(!c||c[wi]||c[Je]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=s.createElement(i),s.head.insertBefore(c,s.querySelector("head > title"))),tt(c,i,n),c[Je]=e,Qe(c),i=c;break e;case"link":var d=Kf("link","href",s).get(i+(n.href||""));if(d){for(var g=0;g<d.length;g++)if(c=d[g],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(g,1);break t}}c=s.createElement(i),tt(c,i,n),s.head.appendChild(c);break;case"meta":if(d=Kf("meta","content",s).get(i+(n.content||""))){for(g=0;g<d.length;g++)if(c=d[g],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(g,1);break t}}c=s.createElement(i),tt(c,i,n),s.head.appendChild(c);break;default:throw Error(o(468,i))}c[Je]=e,Qe(c),i=c}e.stateNode=i}else Qf(s,e.type,e.stateNode);else e.stateNode=Yf(s,i,e.memoizedProps);else c!==i?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,i===null?Qf(s,e.type,e.stateNode):Yf(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Jl(e,e.memoizedProps,n.memoizedProps)}break;case 27:mt(t,e),ft(e),i&512&&(Xe||n===null||Qt(n,n.return)),n!==null&&i&4&&Jl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(mt(t,e),ft(e),i&512&&(Xe||n===null||Qt(n,n.return)),e.flags&32){s=e.stateNode;try{Ma(s,"")}catch(F){Te(e,e.return,F)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Jl(e,s,n!==null?n.memoizedProps:s)),i&1024&&(ec=!0);break;case 6:if(mt(t,e),ft(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(F){Te(e,e.return,F)}}break;case 3:if(js=null,s=Nt,Nt=Rs(t.containerInfo),mt(t,e),Nt=s,ft(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{si(t.containerInfo)}catch(F){Te(e,e.return,F)}ec&&(ec=!1,Km(e));break;case 4:i=Nt,Nt=Rs(e.stateNode.containerInfo),mt(t,e),ft(e),Nt=i;break;case 12:mt(t,e),ft(e);break;case 31:mt(t,e),ft(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ys(e,i)));break;case 13:mt(t,e),ft(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(bs=yt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ys(e,i)));break;case 22:s=e.memoizedState!==null;var A=n!==null&&n.memoizedState!==null,z=mn,j=Xe;if(mn=z||s,Xe=j||A,mt(t,e),Xe=j,mn=z,ft(e),i&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||A||mn||Xe||pa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){A=n=t;try{if(c=A.stateNode,s)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=A.stateNode;var L=A.memoizedProps.style,D=L!=null&&L.hasOwnProperty("display")?L.display:null;g.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(F){Te(A,A.return,F)}}}else if(t.tag===6){if(n===null){A=t;try{A.stateNode.nodeValue=s?"":A.memoizedProps}catch(F){Te(A,A.return,F)}}}else if(t.tag===18){if(n===null){A=t;try{var R=A.stateNode;s?Pf(R,!0):Pf(A.stateNode,!1)}catch(F){Te(A,A.return,F)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,ys(e,n))));break;case 19:mt(t,e),ft(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ys(e,i)));break;case 30:break;case 21:break;default:mt(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Hm(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var s=n.stateNode,c=Wl(e);gs(e,c,s);break;case 5:var d=n.stateNode;n.flags&32&&(Ma(d,""),n.flags&=-33);var g=Wl(e);gs(e,g,d);break;case 3:case 4:var A=n.stateNode.containerInfo,z=Wl(e);$l(e,z,A);break;default:throw Error(o(161))}}catch(j){Te(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Km(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Km(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function pn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Nm(e,t.alternate,t),t=t.sibling}function pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Bn(4,t,t.return),pa(t);break;case 1:Qt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Vm(t,t.return,n),pa(t);break;case 27:ar(t.stateNode);case 26:case 5:Qt(t,t.return),pa(t);break;case 22:t.memoizedState===null&&pa(t);break;case 30:pa(t);break;default:pa(t)}e=e.sibling}}function gn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,c=t,d=c.flags;switch(c.tag){case 0:case 11:case 15:gn(s,c,n),Yi(4,c);break;case 1:if(gn(s,c,n),i=c,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(z){Te(i,i.return,z)}if(i=c,s=i.updateQueue,s!==null){var g=i.stateNode;try{var A=s.shared.hiddenCallbacks;if(A!==null)for(s.shared.hiddenCallbacks=null,s=0;s<A.length;s++)xh(A[s],g)}catch(z){Te(i,i.return,z)}}n&&d&64&&Om(c),Ki(c,c.return);break;case 27:Gm(c);case 26:case 5:gn(s,c,n),n&&i===null&&d&4&&Pm(c),Ki(c,c.return);break;case 12:gn(s,c,n);break;case 31:gn(s,c,n),n&&d&4&&Xm(s,c);break;case 13:gn(s,c,n),n&&d&4&&Fm(s,c);break;case 22:c.memoizedState===null&&gn(s,c,n),Ki(c,c.return);break;case 30:break;default:gn(s,c,n)}t=t.sibling}}function tc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Bi(n))}function nc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bi(e))}function It(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qm(e,t,n,i),t=t.sibling}function Qm(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:It(e,t,n,i),s&2048&&Yi(9,t);break;case 1:It(e,t,n,i);break;case 3:It(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bi(e)));break;case 12:if(s&2048){It(e,t,n,i),e=t.stateNode;try{var c=t.memoizedProps,d=c.id,g=c.onPostCommit;typeof g=="function"&&g(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){Te(t,t.return,A)}}else It(e,t,n,i);break;case 31:It(e,t,n,i);break;case 13:It(e,t,n,i);break;case 23:break;case 22:c=t.stateNode,d=t.alternate,t.memoizedState!==null?c._visibility&2?It(e,t,n,i):Qi(e,t):c._visibility&2?It(e,t,n,i):(c._visibility|=2,Qa(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&tc(d,t);break;case 24:It(e,t,n,i),s&2048&&nc(t.alternate,t);break;default:It(e,t,n,i)}}function Qa(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,d=t,g=n,A=i,z=d.flags;switch(d.tag){case 0:case 11:case 15:Qa(c,d,g,A,s),Yi(8,d);break;case 23:break;case 22:var j=d.stateNode;d.memoizedState!==null?j._visibility&2?Qa(c,d,g,A,s):Qi(c,d):(j._visibility|=2,Qa(c,d,g,A,s)),s&&z&2048&&tc(d.alternate,d);break;case 24:Qa(c,d,g,A,s),s&&z&2048&&nc(d.alternate,d);break;default:Qa(c,d,g,A,s)}t=t.sibling}}function Qi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Qi(n,i),s&2048&&tc(i.alternate,i);break;case 24:Qi(n,i),s&2048&&nc(i.alternate,i);break;default:Qi(n,i)}t=t.sibling}}var Zi=8192;function Za(e,t,n){if(e.subtreeFlags&Zi)for(e=e.child;e!==null;)Zm(e,t,n),e=e.sibling}function Zm(e,t,n){switch(e.tag){case 26:Za(e,t,n),e.flags&Zi&&e.memoizedState!==null&&Fb(n,Nt,e.memoizedState,e.memoizedProps);break;case 5:Za(e,t,n);break;case 3:case 4:var i=Nt;Nt=Rs(e.stateNode.containerInfo),Za(e,t,n),Nt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Zi,Zi=16777216,Za(e,t,n),Zi=i):Za(e,t,n));break;default:Za(e,t,n)}}function Jm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,$m(i,e)}Jm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wm(e),e=e.sibling}function Wm(e){switch(e.tag){case 0:case 11:case 15:Ji(e),e.flags&2048&&Bn(9,e,e.return);break;case 3:Ji(e);break;case 12:Ji(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,vs(e)):Ji(e);break;default:Ji(e)}}function vs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,$m(i,e)}Jm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Bn(8,t,t.return),vs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,vs(t));break;default:vs(t)}e=e.sibling}}function $m(e,t){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:Bn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Bi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ze=i;else e:for(n=e;Ze!==null;){i=Ze;var s=i.sibling,c=i.return;if(Im(i),i===n){Ze=null;break e}if(s!==null){s.return=c,Ze=s;break e}Ze=c}}}var ob={getCacheForType:function(e){var t=$e(Ne),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $e(Ne).controller.signal}},lb=typeof WeakMap=="function"?WeakMap:Map,be=0,ze=null,ue=null,he=0,Ae=0,Ct=null,Ln=!1,Ja=!1,ac=!1,yn=0,Le=0,On=0,ga=0,ic=0,xt=0,Wa=0,Wi=null,pt=null,rc=!1,bs=0,ef=0,Ss=1/0,ws=null,Vn=null,Ye=0,Pn=null,$a=null,vn=0,sc=0,oc=null,tf=null,$i=0,lc=null;function Et(){return(be&2)!==0&&he!==0?he&-he:k.T!==null?fc():yd()}function nf(){if(xt===0)if((he&536870912)===0||pe){var e=Mr;Mr<<=1,(Mr&3932160)===0&&(Mr=262144),xt=e}else xt=536870912;return e=At.current,e!==null&&(e.flags|=32),xt}function gt(e,t,n){(e===ze&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(ei(e,0),Hn(e,he,xt,!1)),Si(e,n),((be&2)===0||e!==ze)&&(e===ze&&((be&2)===0&&(ga|=n),Le===4&&Hn(e,he,xt,!1)),Zt(e))}function af(e,t,n){if((be&6)!==0)throw Error(o(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||bi(e,t),s=i?db(e,t):uc(e,t,!0),c=i;do{if(s===0){Ja&&!i&&Hn(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!cb(n)){s=uc(e,t,!1),c=!1;continue}if(s===2){if(c=t,e.errorRecoveryDisabledLanes&c)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var g=e;s=Wi;var A=g.current.memoizedState.isDehydrated;if(A&&(ei(g,d).flags|=256),d=uc(g,d,!1),d!==2){if(ac&&!A){g.errorRecoveryDisabledLanes|=c,ga|=c,s=4;break e}c=pt,pt=s,c!==null&&(pt===null?pt=c:pt.push.apply(pt,c))}s=d}if(c=!1,s!==2)continue}}if(s===1){ei(e,0),Hn(e,t,0,!0);break}e:{switch(i=e,c=s,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Hn(i,t,xt,!Ln);break e;case 2:pt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(s=bs+300-yt(),10<s)){if(Hn(i,t,xt,!Ln),Rr(i,0,!0)!==0)break e;vn=t,i.timeoutHandle=Lf(rf.bind(null,i,n,pt,ws,rc,t,xt,ga,Wa,Ln,c,"Throttled",-0,0),s);break e}rf(i,n,pt,ws,rc,t,xt,ga,Wa,Ln,c,null,-0,0)}}break}while(!0);Zt(e)}function rf(e,t,n,i,s,c,d,g,A,z,j,L,D,R){if(e.timeoutHandle=-1,L=t.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},Zm(t,c,L);var F=(c&62914560)===c?bs-yt():(c&4194048)===c?ef-yt():0;if(F=Yb(L,F),F!==null){vn=c,e.cancelPendingCommit=F(mf.bind(null,e,t,c,n,i,s,d,g,A,j,L,null,D,R)),Hn(e,c,d,!z);return}}mf(e,t,c,n,i,s,d,g,A)}function cb(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],c=s.getSnapshot;s=s.value;try{if(!St(c(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Hn(e,t,n,i){t&=~ic,t&=~ga,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var c=31-bt(s),d=1<<c;i[c]=-1,s&=~d}n!==0&&fd(e,n,t)}function As(){return(be&6)===0?(er(0),!1):!0}function cc(){if(ue!==null){if(Ae===0)var e=ue.return;else e=ue,on=oa=null,xl(e),qa=null,Oi=0,e=ue;for(;e!==null;)Lm(e.alternate,e),e=e.return;ue=null}}function ei(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Mb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),vn=0,cc(),ze=e,ue=n=rn(e.current,null),he=t,Ae=0,Ct=null,Ln=!1,Ja=bi(e,t),ac=!1,Wa=xt=ic=ga=On=Le=0,pt=Wi=null,rc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-bt(i),c=1<<s;t|=e[s],i&=~c}return yn=t,Ir(),n}function sf(e,t){re=null,k.H=qi,t===Ia||t===Jr?(t=wh(),Ae=3):t===ml?(t=wh(),Ae=4):Ae=t===_l?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ct=t,ue===null&&(Le=1,ds(e,Rt(t,e.current)))}function of(){var e=At.current;return e===null?!0:(he&4194048)===he?Lt===null:(he&62914560)===he||(he&536870912)!==0?e===Lt:!1}function lf(){var e=k.H;return k.H=qi,e===null?qi:e}function cf(){var e=k.A;return k.A=ob,e}function Ts(){Le=4,Ln||(he&4194048)!==he&&At.current!==null||(Ja=!0),(On&134217727)===0&&(ga&134217727)===0||ze===null||Hn(ze,he,xt,!1)}function uc(e,t,n){var i=be;be|=2;var s=lf(),c=cf();(ze!==e||he!==t)&&(ws=null,ei(e,t)),t=!1;var d=Le;e:do try{if(Ae!==0&&ue!==null){var g=ue,A=Ct;switch(Ae){case 8:cc(),d=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var z=Ae;if(Ae=0,Ct=null,ti(e,g,A,z),n&&Ja){d=0;break e}break;default:z=Ae,Ae=0,Ct=null,ti(e,g,A,z)}}ub(),d=Le;break}catch(j){sf(e,j)}while(!0);return t&&e.shellSuspendCounter++,on=oa=null,be=i,k.H=s,k.A=c,ue===null&&(ze=null,he=0,Ir()),d}function ub(){for(;ue!==null;)uf(ue)}function db(e,t){var n=be;be|=2;var i=lf(),s=cf();ze!==e||he!==t?(ws=null,Ss=yt()+500,ei(e,t)):Ja=bi(e,t);e:do try{if(Ae!==0&&ue!==null){t=ue;var c=Ct;t:switch(Ae){case 1:Ae=0,Ct=null,ti(e,t,c,1);break;case 2:case 9:if(bh(c)){Ae=0,Ct=null,df(t);break}t=function(){Ae!==2&&Ae!==9||ze!==e||(Ae=7),Zt(e)},c.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:bh(c)?(Ae=0,Ct=null,df(t)):(Ae=0,Ct=null,ti(e,t,c,7));break;case 5:var d=null;switch(ue.tag){case 26:d=ue.memoizedState;case 5:case 27:var g=ue;if(d?Zf(d):g.stateNode.complete){Ae=0,Ct=null;var A=g.sibling;if(A!==null)ue=A;else{var z=g.return;z!==null?(ue=z,Cs(z)):ue=null}break t}}Ae=0,Ct=null,ti(e,t,c,5);break;case 6:Ae=0,Ct=null,ti(e,t,c,6);break;case 8:cc(),Le=6;break e;default:throw Error(o(462))}}hb();break}catch(j){sf(e,j)}while(!0);return on=oa=null,k.H=i,k.A=s,be=n,ue!==null?0:(ze=null,he=0,Ir(),Le)}function hb(){for(;ue!==null&&!L0();)uf(ue)}function uf(e){var t=jm(e.alternate,e,yn);e.memoizedProps=e.pendingProps,t===null?Cs(e):ue=t}function df(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Um(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Um(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:xl(t);default:Lm(n,t),t=ue=lh(t,yn),t=jm(n,t,yn)}e.memoizedProps=e.pendingProps,t===null?Cs(e):ue=t}function ti(e,t,n,i){on=oa=null,xl(t),qa=null,Oi=0;var s=t.return;try{if(eb(e,s,t,n,he)){Le=1,ds(e,Rt(n,e.current)),ue=null;return}}catch(c){if(s!==null)throw ue=s,c;Le=1,ds(e,Rt(n,e.current)),ue=null;return}t.flags&32768?(pe||i===1?e=!0:Ja||(he&536870912)!==0?e=!1:(Ln=e=!0,(i===2||i===9||i===3||i===6)&&(i=At.current,i!==null&&i.tag===13&&(i.flags|=16384))),hf(t,e)):Cs(t)}function Cs(e){var t=e;do{if((t.flags&32768)!==0){hf(t,Ln);return}e=t.return;var n=ab(t.alternate,t,yn);if(n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);Le===0&&(Le=5)}function hf(e,t){do{var n=ib(e.alternate,e);if(n!==null){n.flags&=32767,ue=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=n}while(e!==null);Le=6,ue=null}function mf(e,t,n,i,s,c,d,g,A){e.cancelPendingCommit=null;do xs();while(Ye!==0);if((be&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=Wo,X0(e,n,c,d,g,A),e===ze&&(ue=ze=null,he=0),$a=t,Pn=e,vn=n,sc=c,oc=s,tf=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,gb(Ur,function(){return vf(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=k.T,k.T=null,s=_.p,_.p=2,d=be,be|=4;try{rb(e,t,n)}finally{be=d,_.p=s,k.T=i}}Ye=1,ff(),pf(),gf()}}function ff(){if(Ye===1){Ye=0;var e=Pn,t=$a,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=k.T,k.T=null;var i=_.p;_.p=2;var s=be;be|=4;try{Ym(t,e);var c=Ac,d=$d(e.containerInfo),g=c.focusedElem,A=c.selectionRange;if(d!==g&&g&&g.ownerDocument&&Wd(g.ownerDocument.documentElement,g)){if(A!==null&&Yo(g)){var z=A.start,j=A.end;if(j===void 0&&(j=z),"selectionStart"in g)g.selectionStart=z,g.selectionEnd=Math.min(j,g.value.length);else{var L=g.ownerDocument||document,D=L&&L.defaultView||window;if(D.getSelection){var R=D.getSelection(),F=g.textContent.length,ee=Math.min(A.start,F),Ue=A.end===void 0?ee:Math.min(A.end,F);!R.extend&&ee>Ue&&(d=Ue,Ue=ee,ee=d);var x=Jd(g,ee),T=Jd(g,Ue);if(x&&T&&(R.rangeCount!==1||R.anchorNode!==x.node||R.anchorOffset!==x.offset||R.focusNode!==T.node||R.focusOffset!==T.offset)){var U=L.createRange();U.setStart(x.node,x.offset),R.removeAllRanges(),ee>Ue?(R.addRange(U),R.extend(T.node,T.offset)):(U.setEnd(T.node,T.offset),R.addRange(U))}}}}for(L=[],R=g;R=R.parentNode;)R.nodeType===1&&L.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<L.length;g++){var B=L[g];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}Vs=!!wc,Ac=wc=null}finally{be=s,_.p=i,k.T=n}}e.current=t,Ye=2}}function pf(){if(Ye===2){Ye=0;var e=Pn,t=$a,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=k.T,k.T=null;var i=_.p;_.p=2;var s=be;be|=4;try{Nm(e,t.alternate,t)}finally{be=s,_.p=i,k.T=n}}Ye=3}}function gf(){if(Ye===4||Ye===3){Ye=0,O0();var e=Pn,t=$a,n=vn,i=tf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,$a=Pn=null,yf(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Vn=null),zo(n),t=t.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(vi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=k.T,s=_.p,_.p=2,k.T=null;try{for(var c=e.onRecoverableError,d=0;d<i.length;d++){var g=i[d];c(g.value,{componentStack:g.stack})}}finally{k.T=t,_.p=s}}(vn&3)!==0&&xs(),Zt(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===lc?$i++:($i=0,lc=e):$i=0,er(0)}}function yf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Bi(t)))}function xs(){return ff(),pf(),gf(),vf()}function vf(){if(Ye!==5)return!1;var e=Pn,t=sc;sc=0;var n=zo(vn),i=k.T,s=_.p;try{_.p=32>n?32:n,k.T=null,n=oc,oc=null;var c=Pn,d=vn;if(Ye=0,$a=Pn=null,vn=0,(be&6)!==0)throw Error(o(331));var g=be;if(be|=4,Wm(c.current),Qm(c,c.current,d,n),be=g,er(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(vi,c)}catch{}return!0}finally{_.p=s,k.T=i,yf(e,t)}}function bf(e,t,n){t=Rt(n,t),t=Gl(e.stateNode,t,2),e=Rn(e,t,2),e!==null&&(Si(e,2),Zt(e))}function Te(e,t,n){if(e.tag===3)bf(e,e,n);else for(;t!==null;){if(t.tag===3){bf(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vn===null||!Vn.has(i))){e=Rt(n,e),n=bm(2),i=Rn(t,n,2),i!==null&&(Sm(n,i,t,e),Si(i,2),Zt(i));break}}t=t.return}}function dc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new lb;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(ac=!0,s.add(n),e=mb.bind(null,e,t,n),t.then(e,e))}function mb(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ze===e&&(he&n)===n&&(Le===4||Le===3&&(he&62914560)===he&&300>yt()-bs?(be&2)===0&&ei(e,0):ic|=n,Wa===he&&(Wa=0)),Zt(e)}function Sf(e,t){t===0&&(t=md()),e=ia(e,t),e!==null&&(Si(e,t),Zt(e))}function fb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sf(e,n)}function pb(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),Sf(e,n)}function gb(e,t){return Co(e,t)}var Es=null,ni=null,hc=!1,Us=!1,mc=!1,Gn=0;function Zt(e){e!==ni&&e.next===null&&(ni===null?Es=ni=e:ni=ni.next=e),Us=!0,hc||(hc=!0,vb())}function er(e,t){if(!mc&&Us){mc=!0;do for(var n=!1,i=Es;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var c=0;else{var d=i.suspendedLanes,g=i.pingedLanes;c=(1<<31-bt(42|e)+1)-1,c&=s&~(d&~g),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Cf(i,c))}else c=he,c=Rr(i,i===ze?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||bi(i,c)||(n=!0,Cf(i,c));i=i.next}while(n);mc=!1}}function yb(){wf()}function wf(){Us=hc=!1;var e=0;Gn!==0&&zb()&&(e=Gn);for(var t=yt(),n=null,i=Es;i!==null;){var s=i.next,c=Af(i,t);c===0?(i.next=null,n===null?Es=s:n.next=s,s===null&&(ni=n)):(n=i,(e!==0||(c&3)!==0)&&(Us=!0)),i=s}Ye!==0&&Ye!==5||er(e),Gn!==0&&(Gn=0)}function Af(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var d=31-bt(c),g=1<<d,A=s[d];A===-1?((g&n)===0||(g&i)!==0)&&(s[d]=q0(g,t)):A<=t&&(e.expiredLanes|=g),c&=~g}if(t=ze,n=he,n=Rr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&xo(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||bi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&xo(i),zo(n)){case 2:case 8:n=dd;break;case 32:n=Ur;break;case 268435456:n=hd;break;default:n=Ur}return i=Tf.bind(null,e),n=Co(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&xo(i),e.callbackPriority=2,e.callbackNode=null,2}function Tf(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(xs()&&e.callbackNode!==n)return null;var i=he;return i=Rr(e,e===ze?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(af(e,i,t),Af(e,yt()),e.callbackNode!=null&&e.callbackNode===n?Tf.bind(null,e):null)}function Cf(e,t){if(xs())return null;af(e,t,!0)}function vb(){Db(function(){(be&6)!==0?Co(ud,yb):wf()})}function fc(){if(Gn===0){var e=_a;e===0&&(e=zr,zr<<=1,(zr&261888)===0&&(zr=256)),Gn=e}return Gn}function xf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Lr(""+e)}function Ef(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function bb(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var c=xf((s[ut]||null).action),d=i.submitter;d&&(t=(t=d[ut]||null)?xf(t.formAction):d.getAttribute("formAction"),t!==null&&(c=t,d=null));var g=new Hr("action","action",null,i,s);e.push({event:g,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Gn!==0){var A=d?Ef(s,d):new FormData(s);Bl(n,{pending:!0,data:A,method:s.method,action:c},null,A)}}else typeof c=="function"&&(g.preventDefault(),A=d?Ef(s,d):new FormData(s),Bl(n,{pending:!0,data:A,method:s.method,action:c},c,A))},currentTarget:s}]})}}for(var pc=0;pc<Jo.length;pc++){var gc=Jo[pc],Sb=gc.toLowerCase(),wb=gc[0].toUpperCase()+gc.slice(1);_t(Sb,"on"+wb)}_t(nh,"onAnimationEnd"),_t(ah,"onAnimationIteration"),_t(ih,"onAnimationStart"),_t("dblclick","onDoubleClick"),_t("focusin","onFocus"),_t("focusout","onBlur"),_t(Vv,"onTransitionRun"),_t(Pv,"onTransitionStart"),_t(Hv,"onTransitionCancel"),_t(rh,"onTransitionEnd"),Ua("onMouseEnter",["mouseout","mouseover"]),Ua("onMouseLeave",["mouseout","mouseover"]),Ua("onPointerEnter",["pointerout","pointerover"]),Ua("onPointerLeave",["pointerout","pointerover"]),ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ab=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tr));function Uf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var d=i.length-1;0<=d;d--){var g=i[d],A=g.instance,z=g.currentTarget;if(g=g.listener,A!==c&&s.isPropagationStopped())break e;c=g,s.currentTarget=z;try{c(s)}catch(j){Nr(j)}s.currentTarget=null,c=A}else for(d=0;d<i.length;d++){if(g=i[d],A=g.instance,z=g.currentTarget,g=g.listener,A!==c&&s.isPropagationStopped())break e;c=g,s.currentTarget=z;try{c(s)}catch(j){Nr(j)}s.currentTarget=null,c=A}}}}function de(e,t){var n=t[Mo];n===void 0&&(n=t[Mo]=new Set);var i=e+"__bubble";n.has(i)||(zf(t,e,2,!1),n.add(i))}function yc(e,t,n){var i=0;t&&(i|=4),zf(n,e,i,t)}var zs="_reactListening"+Math.random().toString(36).slice(2);function vc(e){if(!e[zs]){e[zs]=!0,Sd.forEach(function(n){n!=="selectionchange"&&(Ab.has(n)||yc(n,!1,e),yc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zs]||(t[zs]=!0,yc("selectionchange",!1,t))}}function zf(e,t,n,i){switch(ap(t)){case 2:var s=Zb;break;case 8:s=Jb;break;default:s=jc}n=s.bind(null,t,n,e),s=void 0,!Po||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function bc(e,t,n,i,s){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var g=i.stateNode.containerInfo;if(g===s)break;if(d===4)for(d=i.return;d!==null;){var A=d.tag;if((A===3||A===4)&&d.stateNode.containerInfo===s)return;d=d.return}for(;g!==null;){if(d=Ca(g),d===null)return;if(A=d.tag,A===5||A===6||A===26||A===27){i=c=d;continue e}g=g.parentNode}}i=i.return}kd(function(){var z=c,j=Oo(n),L=[];e:{var D=sh.get(e);if(D!==void 0){var R=Hr,F=e;switch(e){case"keypress":if(Vr(n)===0)break e;case"keydown":case"keyup":R=pv;break;case"focusin":F="focus",R=No;break;case"focusout":F="blur",R=No;break;case"beforeblur":case"afterblur":R=No;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=vv;break;case nh:case ah:case ih:R=sv;break;case rh:R=Sv;break;case"scroll":case"scrollend":R=tv;break;case"wheel":R=Av;break;case"copy":case"cut":case"paste":R=lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Vd;break;case"toggle":case"beforetoggle":R=Cv}var ee=(t&4)!==0,Ue=!ee&&(e==="scroll"||e==="scrollend"),x=ee?D!==null?D+"Capture":null:D;ee=[];for(var T=z,U;T!==null;){var B=T;if(U=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||U===null||x===null||(B=Ti(T,x),B!=null&&ee.push(nr(T,B,U))),Ue)break;T=T.return}0<ee.length&&(D=new R(D,F,null,n,j),L.push({event:D,listeners:ee}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",D&&n!==Lo&&(F=n.relatedTarget||n.fromElement)&&(Ca(F)||F[Ta]))break e;if((R||D)&&(D=j.window===j?j:(D=j.ownerDocument)?D.defaultView||D.parentWindow:window,R?(F=n.relatedTarget||n.toElement,R=z,F=F?Ca(F):null,F!==null&&(Ue=m(F),ee=F.tag,F!==Ue||ee!==5&&ee!==27&&ee!==6)&&(F=null)):(R=null,F=z),R!==F)){if(ee=Ld,B="onMouseLeave",x="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Vd,B="onPointerLeave",x="onPointerEnter",T="pointer"),Ue=R==null?D:Ai(R),U=F==null?D:Ai(F),D=new ee(B,T+"leave",R,n,j),D.target=Ue,D.relatedTarget=U,B=null,Ca(j)===z&&(ee=new ee(x,T+"enter",F,n,j),ee.target=U,ee.relatedTarget=Ue,B=ee),Ue=B,R&&F)t:{for(ee=Tb,x=R,T=F,U=0,B=x;B;B=ee(B))U++;B=0;for(var $=T;$;$=ee($))B++;for(;0<U-B;)x=ee(x),U--;for(;0<B-U;)T=ee(T),B--;for(;U--;){if(x===T||T!==null&&x===T.alternate){ee=x;break t}x=ee(x),T=ee(T)}ee=null}else ee=null;R!==null&&Mf(L,D,R,ee,!1),F!==null&&Ue!==null&&Mf(L,Ue,F,ee,!0)}}e:{if(D=z?Ai(z):window,R=D.nodeName&&D.nodeName.toLowerCase(),R==="select"||R==="input"&&D.type==="file")var ge=Xd;else if(Id(D))if(Fd)ge=Bv;else{ge=kv;var Z=Rv}else R=D.nodeName,!R||R.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?z&&Bo(z.elementType)&&(ge=Xd):ge=jv;if(ge&&(ge=ge(e,z))){qd(L,ge,n,j);break e}Z&&Z(e,D,z),e==="focusout"&&z&&D.type==="number"&&z.memoizedProps.value!=null&&jo(D,"number",D.value)}switch(Z=z?Ai(z):window,e){case"focusin":(Id(Z)||Z.contentEditable==="true")&&(ja=Z,Ko=z,Ri=null);break;case"focusout":Ri=Ko=ja=null;break;case"mousedown":Qo=!0;break;case"contextmenu":case"mouseup":case"dragend":Qo=!1,eh(L,n,j);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":eh(L,n,j)}var oe;if(qo)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else ka?_d(e,n)&&(me="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(me="onCompositionStart");me&&(Pd&&n.locale!=="ko"&&(ka||me!=="onCompositionStart"?me==="onCompositionEnd"&&ka&&(oe=jd()):(Cn=j,Ho="value"in Cn?Cn.value:Cn.textContent,ka=!0)),Z=Ms(z,me),0<Z.length&&(me=new Od(me,e,null,n,j),L.push({event:me,listeners:Z}),oe?me.data=oe:(oe=Nd(n),oe!==null&&(me.data=oe)))),(oe=Ev?Uv(e,n):zv(e,n))&&(me=Ms(z,"onBeforeInput"),0<me.length&&(Z=new Od("onBeforeInput","beforeinput",null,n,j),L.push({event:Z,listeners:me}),Z.data=oe)),bb(L,e,z,n,j)}Uf(L,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ms(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,c=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||c===null||(s=Ti(e,n),s!=null&&i.unshift(nr(e,s,c)),s=Ti(e,t),s!=null&&i.push(nr(e,s,c))),e.tag===3)return i;e=e.return}return[]}function Tb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mf(e,t,n,i,s){for(var c=t._reactName,d=[];n!==null&&n!==i;){var g=n,A=g.alternate,z=g.stateNode;if(g=g.tag,A!==null&&A===i)break;g!==5&&g!==26&&g!==27||z===null||(A=z,s?(z=Ti(n,c),z!=null&&d.unshift(nr(n,z,A))):s||(z=Ti(n,c),z!=null&&d.push(nr(n,z,A)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Cb=/\r\n?/g,xb=/\u0000|\uFFFD/g;function Df(e){return(typeof e=="string"?e:""+e).replace(Cb,`
`).replace(xb,"")}function Rf(e,t){return t=Df(t),Df(e)===t}function Ee(e,t,n,i,s,c){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ma(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ma(e,""+i);break;case"className":jr(e,"class",i);break;case"tabIndex":jr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":jr(e,n,i);break;case"style":Dd(e,i,c);break;case"data":if(t!=="object"){jr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Lr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Ee(e,t,"name",s.name,s,null),Ee(e,t,"formEncType",s.formEncType,s,null),Ee(e,t,"formMethod",s.formMethod,s,null),Ee(e,t,"formTarget",s.formTarget,s,null)):(Ee(e,t,"encType",s.encType,s,null),Ee(e,t,"method",s.method,s,null),Ee(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Lr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=nn);break;case"onScroll":i!=null&&de("scroll",e);break;case"onScrollEnd":i!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Lr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":de("beforetoggle",e),de("toggle",e),kr(e,"popover",i);break;case"xlinkActuate":tn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":tn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":tn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":tn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":tn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":tn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":tn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":tn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":tn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":kr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=$0.get(n)||n,kr(e,n,i))}}function Sc(e,t,n,i,s,c){switch(n){case"style":Dd(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ma(e,i):(typeof i=="number"||typeof i=="bigint")&&Ma(e,""+i);break;case"onScroll":i!=null&&de("scroll",e);break;case"onScrollEnd":i!=null&&de("scrollend",e);break;case"onClick":i!=null&&(e.onclick=nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),c=e[ut]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,s),typeof i=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):kr(e,n,i)}}}function tt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var i=!1,s=!1,c;for(c in n)if(n.hasOwnProperty(c)){var d=n[c];if(d!=null)switch(c){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ee(e,t,c,d,n,null)}}s&&Ee(e,t,"srcSet",n.srcSet,n,null),i&&Ee(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var g=c=d=s=null,A=null,z=null;for(i in n)if(n.hasOwnProperty(i)){var j=n[i];if(j!=null)switch(i){case"name":s=j;break;case"type":d=j;break;case"checked":A=j;break;case"defaultChecked":z=j;break;case"value":c=j;break;case"defaultValue":g=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(o(137,t));break;default:Ee(e,t,i,j,n,null)}}Ed(e,c,g,A,z,d,s,!1);return;case"select":de("invalid",e),i=d=c=null;for(s in n)if(n.hasOwnProperty(s)&&(g=n[s],g!=null))switch(s){case"value":c=g;break;case"defaultValue":d=g;break;case"multiple":i=g;default:Ee(e,t,s,g,n,null)}t=c,n=d,e.multiple=!!i,t!=null?za(e,!!i,t,!1):n!=null&&za(e,!!i,n,!0);return;case"textarea":de("invalid",e),c=s=i=null;for(d in n)if(n.hasOwnProperty(d)&&(g=n[d],g!=null))switch(d){case"value":i=g;break;case"defaultValue":s=g;break;case"children":c=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(o(91));break;default:Ee(e,t,d,g,n,null)}zd(e,i,s,c);return;case"option":for(A in n)n.hasOwnProperty(A)&&(i=n[A],i!=null)&&(A==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ee(e,t,A,i,n,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(i=0;i<tr.length;i++)de(tr[i],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(i=n[z],i!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ee(e,t,z,i,n,null)}return;default:if(Bo(t)){for(j in n)n.hasOwnProperty(j)&&(i=n[j],i!==void 0&&Sc(e,t,j,i,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(i=n[g],i!=null&&Ee(e,t,g,i,n,null))}function Eb(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,c=null,d=null,g=null,A=null,z=null,j=null;for(R in n){var L=n[R];if(n.hasOwnProperty(R)&&L!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":A=L;default:i.hasOwnProperty(R)||Ee(e,t,R,null,i,L)}}for(var D in i){var R=i[D];if(L=n[D],i.hasOwnProperty(D)&&(R!=null||L!=null))switch(D){case"type":c=R;break;case"name":s=R;break;case"checked":z=R;break;case"defaultChecked":j=R;break;case"value":d=R;break;case"defaultValue":g=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,t));break;default:R!==L&&Ee(e,t,D,R,i,L)}}ko(e,d,g,A,z,j,c,s);return;case"select":R=d=g=D=null;for(c in n)if(A=n[c],n.hasOwnProperty(c)&&A!=null)switch(c){case"value":break;case"multiple":R=A;default:i.hasOwnProperty(c)||Ee(e,t,c,null,i,A)}for(s in i)if(c=i[s],A=n[s],i.hasOwnProperty(s)&&(c!=null||A!=null))switch(s){case"value":D=c;break;case"defaultValue":g=c;break;case"multiple":d=c;default:c!==A&&Ee(e,t,s,c,i,A)}t=g,n=d,i=R,D!=null?za(e,!!n,D,!1):!!i!=!!n&&(t!=null?za(e,!!n,t,!0):za(e,!!n,n?[]:"",!1));return;case"textarea":R=D=null;for(g in n)if(s=n[g],n.hasOwnProperty(g)&&s!=null&&!i.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ee(e,t,g,null,i,s)}for(d in i)if(s=i[d],c=n[d],i.hasOwnProperty(d)&&(s!=null||c!=null))switch(d){case"value":D=s;break;case"defaultValue":R=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==c&&Ee(e,t,d,s,i,c)}Ud(e,D,R);return;case"option":for(var F in n)D=n[F],n.hasOwnProperty(F)&&D!=null&&!i.hasOwnProperty(F)&&(F==="selected"?e.selected=!1:Ee(e,t,F,null,i,D));for(A in i)D=i[A],R=n[A],i.hasOwnProperty(A)&&D!==R&&(D!=null||R!=null)&&(A==="selected"?e.selected=D&&typeof D!="function"&&typeof D!="symbol":Ee(e,t,A,D,i,R));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in n)D=n[ee],n.hasOwnProperty(ee)&&D!=null&&!i.hasOwnProperty(ee)&&Ee(e,t,ee,null,i,D);for(z in i)if(D=i[z],R=n[z],i.hasOwnProperty(z)&&D!==R&&(D!=null||R!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,t));break;default:Ee(e,t,z,D,i,R)}return;default:if(Bo(t)){for(var Ue in n)D=n[Ue],n.hasOwnProperty(Ue)&&D!==void 0&&!i.hasOwnProperty(Ue)&&Sc(e,t,Ue,void 0,i,D);for(j in i)D=i[j],R=n[j],!i.hasOwnProperty(j)||D===R||D===void 0&&R===void 0||Sc(e,t,j,D,i,R);return}}for(var x in n)D=n[x],n.hasOwnProperty(x)&&D!=null&&!i.hasOwnProperty(x)&&Ee(e,t,x,null,i,D);for(L in i)D=i[L],R=n[L],!i.hasOwnProperty(L)||D===R||D==null&&R==null||Ee(e,t,L,D,i,R)}function kf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ub(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],c=s.transferSize,d=s.initiatorType,g=s.duration;if(c&&g&&kf(d)){for(d=0,g=s.responseEnd,i+=1;i<n.length;i++){var A=n[i],z=A.startTime;if(z>g)break;var j=A.transferSize,L=A.initiatorType;j&&kf(L)&&(A=A.responseEnd,d+=j*(A<g?1:(g-z)/(A-z)))}if(--i,t+=8*(c+d)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wc=null,Ac=null;function Ds(e){return e.nodeType===9?e:e.ownerDocument}function jf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Tc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cc=null;function zb(){var e=window.event;return e&&e.type==="popstate"?e===Cc?!1:(Cc=e,!0):(Cc=null,!1)}var Lf=typeof setTimeout=="function"?setTimeout:void 0,Mb=typeof clearTimeout=="function"?clearTimeout:void 0,Of=typeof Promise=="function"?Promise:void 0,Db=typeof queueMicrotask=="function"?queueMicrotask:typeof Of<"u"?function(e){return Of.resolve(null).then(e).catch(Rb)}:Lf;function Rb(e){setTimeout(function(){throw e})}function _n(e){return e==="head"}function Vf(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),si(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")ar(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ar(n);for(var c=n.firstChild;c;){var d=c.nextSibling,g=c.nodeName;c[wi]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=d}}else n==="body"&&ar(e.ownerDocument.body);n=s}while(n);si(t)}function Pf(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function xc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":xc(n),Do(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function kb(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[wi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Ot(e.nextSibling),e===null)break}return null}function jb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ot(e.nextSibling),e===null))return null;return e}function Hf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ot(e.nextSibling),e===null))return null;return e}function Ec(e){return e.data==="$?"||e.data==="$~"}function Uc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Bb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var zc=null;function Gf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ot(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function _f(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Nf(e,t,n){switch(t=Ds(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function ar(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Do(e)}var Vt=new Map,If=new Set;function Rs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var bn=_.d;_.d={f:Lb,r:Ob,D:Vb,C:Pb,L:Hb,m:Gb,X:Nb,S:_b,M:Ib};function Lb(){var e=bn.f(),t=As();return e||t}function Ob(e){var t=xa(e);t!==null&&t.tag===5&&t.type==="form"?rm(t):bn.r(e)}var ai=typeof document>"u"?null:document;function qf(e,t,n){var i=ai;if(i&&typeof t=="string"&&t){var s=Mt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),If.has(s)||(If.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),tt(t,"link",e),Qe(t),i.head.appendChild(t)))}}function Vb(e){bn.D(e),qf("dns-prefetch",e,null)}function Pb(e,t){bn.C(e,t),qf("preconnect",e,t)}function Hb(e,t,n){bn.L(e,t,n);var i=ai;if(i&&e&&t){var s='link[rel="preload"][as="'+Mt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Mt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Mt(n.imageSizes)+'"]')):s+='[href="'+Mt(e)+'"]';var c=s;switch(t){case"style":c=ii(e);break;case"script":c=ri(e)}Vt.has(c)||(e=b({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Vt.set(c,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(ir(c))||t==="script"&&i.querySelector(rr(c))||(t=i.createElement("link"),tt(t,"link",e),Qe(t),i.head.appendChild(t)))}}function Gb(e,t){bn.m(e,t);var n=ai;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Mt(i)+'"][href="'+Mt(e)+'"]',c=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ri(e)}if(!Vt.has(c)&&(e=b({rel:"modulepreload",href:e},t),Vt.set(c,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(rr(c)))return}i=n.createElement("link"),tt(i,"link",e),Qe(i),n.head.appendChild(i)}}}function _b(e,t,n){bn.S(e,t,n);var i=ai;if(i&&e){var s=Ea(i).hoistableStyles,c=ii(e);t=t||"default";var d=s.get(c);if(!d){var g={loading:0,preload:null};if(d=i.querySelector(ir(c)))g.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Vt.get(c))&&Mc(e,n);var A=d=i.createElement("link");Qe(A),tt(A,"link",e),A._p=new Promise(function(z,j){A.onload=z,A.onerror=j}),A.addEventListener("load",function(){g.loading|=1}),A.addEventListener("error",function(){g.loading|=2}),g.loading|=4,ks(d,t,i)}d={type:"stylesheet",instance:d,count:1,state:g},s.set(c,d)}}}function Nb(e,t){bn.X(e,t);var n=ai;if(n&&e){var i=Ea(n).hoistableScripts,s=ri(e),c=i.get(s);c||(c=n.querySelector(rr(s)),c||(e=b({src:e,async:!0},t),(t=Vt.get(s))&&Dc(e,t),c=n.createElement("script"),Qe(c),tt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(s,c))}}function Ib(e,t){bn.M(e,t);var n=ai;if(n&&e){var i=Ea(n).hoistableScripts,s=ri(e),c=i.get(s);c||(c=n.querySelector(rr(s)),c||(e=b({src:e,async:!0,type:"module"},t),(t=Vt.get(s))&&Dc(e,t),c=n.createElement("script"),Qe(c),tt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(s,c))}}function Xf(e,t,n,i){var s=(s=ce.current)?Rs(s):null;if(!s)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ii(n.href),n=Ea(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ii(n.href);var c=Ea(s).hoistableStyles,d=c.get(e);if(d||(s=s.ownerDocument||s,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=s.querySelector(ir(e)))&&!c._p&&(d.instance=c,d.state.loading=5),Vt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Vt.set(e,n),c||qb(s,e,n,d.state))),t&&i===null)throw Error(o(528,""));return d}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ri(n),n=Ea(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function ii(e){return'href="'+Mt(e)+'"'}function ir(e){return'link[rel="stylesheet"]['+e+"]"}function Ff(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function qb(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),tt(t,"link",n),Qe(t),e.head.appendChild(t))}function ri(e){return'[src="'+Mt(e)+'"]'}function rr(e){return"script[async]"+e}function Yf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Mt(n.href)+'"]');if(i)return t.instance=i,Qe(i),i;var s=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Qe(i),tt(i,"style",s),ks(i,n.precedence,e),t.instance=i;case"stylesheet":s=ii(n.href);var c=e.querySelector(ir(s));if(c)return t.state.loading|=4,t.instance=c,Qe(c),c;i=Ff(n),(s=Vt.get(s))&&Mc(i,s),c=(e.ownerDocument||e).createElement("link"),Qe(c);var d=c;return d._p=new Promise(function(g,A){d.onload=g,d.onerror=A}),tt(c,"link",i),t.state.loading|=4,ks(c,n.precedence,e),t.instance=c;case"script":return c=ri(n.src),(s=e.querySelector(rr(c)))?(t.instance=s,Qe(s),s):(i=n,(s=Vt.get(c))&&(i=b({},n),Dc(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),Qe(s),tt(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ks(i,n.precedence,e));return t.instance}function ks(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,c=s,d=0;d<i.length;d++){var g=i[d];if(g.dataset.precedence===t)c=g;else if(c!==s)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var js=null;function Kf(e,t,n){if(js===null){var i=new Map,s=js=new Map;s.set(n,i)}else s=js,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var c=n[s];if(!(c[wi]||c[Je]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var d=c.getAttribute(t)||"";d=e+d;var g=i.get(d);g?g.push(c):i.set(d,[c])}}return i}function Qf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Xb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Zf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Fb(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=ii(i.href),c=t.querySelector(ir(s));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Bs.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,Qe(c);return}c=t.ownerDocument||t,i=Ff(i),(s=Vt.get(s))&&Mc(i,s),c=c.createElement("link"),Qe(c);var d=c;d._p=new Promise(function(g,A){d.onload=g,d.onerror=A}),tt(c,"link",i),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Bs.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Rc=0;function Yb(e,t){return e.stylesheets&&e.count===0&&Os(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Os(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Rc===0&&(Rc=62500*Ub());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Os(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Rc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Bs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Os(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ls=null;function Os(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ls=new Map,t.forEach(Kb,e),Ls=null,Bs.call(e))}function Kb(e,t){if(!(t.state.loading&4)){var n=Ls.get(e);if(n)var i=n.get(null);else{n=new Map,Ls.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<s.length;c++){var d=s[c];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),i=d)}i&&n.set(null,i)}s=t.instance,d=s.getAttribute("data-precedence"),c=n.get(d)||i,c===i&&n.set(null,s),n.set(d,s),this.count++,i=Bs.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),c?c.parentNode.insertBefore(s,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var sr={$$typeof:G,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function Qb(e,t,n,i,s,c,d,g,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Eo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eo(0),this.hiddenUpdates=Eo(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=c,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Jf(e,t,n,i,s,c,d,g,A,z,j,L){return e=new Qb(e,t,n,d,A,z,j,L,g),t=1,c===!0&&(t|=24),c=wt(3,null,null,t),e.current=c,c.stateNode=e,t=ul(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:i,isDehydrated:n,cache:t},fl(c),e}function Wf(e){return e?(e=Oa,e):Oa}function $f(e,t,n,i,s,c){s=Wf(s),i.context===null?i.context=s:i.pendingContext=s,i=Dn(t),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Rn(e,i,t),n!==null&&(gt(n,e,t),Pi(n,e,t))}function ep(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kc(e,t){ep(e,t),(e=e.alternate)&&ep(e,t)}function tp(e){if(e.tag===13||e.tag===31){var t=ia(e,67108864);t!==null&&gt(t,e,67108864),kc(e,67108864)}}function np(e){if(e.tag===13||e.tag===31){var t=Et();t=Uo(t);var n=ia(e,t);n!==null&&gt(n,e,t),kc(e,t)}}var Vs=!0;function Zb(e,t,n,i){var s=k.T;k.T=null;var c=_.p;try{_.p=2,jc(e,t,n,i)}finally{_.p=c,k.T=s}}function Jb(e,t,n,i){var s=k.T;k.T=null;var c=_.p;try{_.p=8,jc(e,t,n,i)}finally{_.p=c,k.T=s}}function jc(e,t,n,i){if(Vs){var s=Bc(i);if(s===null)bc(e,t,i,Ps,n),ip(e,i);else if($b(s,e,t,n,i))i.stopPropagation();else if(ip(e,i),t&4&&-1<Wb.indexOf(e)){for(;s!==null;){var c=xa(s);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var d=$n(c.pendingLanes);if(d!==0){var g=c;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var A=1<<31-bt(d);g.entanglements[1]|=A,d&=~A}Zt(c),(be&6)===0&&(Ss=yt()+500,er(0))}}break;case 31:case 13:g=ia(c,2),g!==null&&gt(g,c,2),As(),kc(c,2)}if(c=Bc(i),c===null&&bc(e,t,i,Ps,n),c===s)break;s=c}s!==null&&i.stopPropagation()}else bc(e,t,i,null,n)}}function Bc(e){return e=Oo(e),Lc(e)}var Ps=null;function Lc(e){if(Ps=null,e=Ca(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ps=e,null}function ap(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(V0()){case ud:return 2;case dd:return 8;case Ur:case P0:return 32;case hd:return 268435456;default:return 32}default:return 32}}var Oc=!1,Nn=null,In=null,qn=null,or=new Map,lr=new Map,Xn=[],Wb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ip(e,t){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(t.pointerId)}}function cr(e,t,n,i,s,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:c,targetContainers:[s]},t!==null&&(t=xa(t),t!==null&&tp(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function $b(e,t,n,i,s){switch(t){case"focusin":return Nn=cr(Nn,e,t,n,i,s),!0;case"dragenter":return In=cr(In,e,t,n,i,s),!0;case"mouseover":return qn=cr(qn,e,t,n,i,s),!0;case"pointerover":var c=s.pointerId;return or.set(c,cr(or.get(c)||null,e,t,n,i,s)),!0;case"gotpointercapture":return c=s.pointerId,lr.set(c,cr(lr.get(c)||null,e,t,n,i,s)),!0}return!1}function rp(e){var t=Ca(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,vd(e.priority,function(){np(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,vd(e.priority,function(){np(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Lo=i,n.target.dispatchEvent(i),Lo=null}else return t=xa(n),t!==null&&tp(t),e.blockedOn=n,!1;t.shift()}return!0}function sp(e,t,n){Hs(e)&&n.delete(t)}function e1(){Oc=!1,Nn!==null&&Hs(Nn)&&(Nn=null),In!==null&&Hs(In)&&(In=null),qn!==null&&Hs(qn)&&(qn=null),or.forEach(sp),lr.forEach(sp)}function Gs(e,t){e.blockedOn===t&&(e.blockedOn=null,Oc||(Oc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,e1)))}var _s=null;function op(e){_s!==e&&(_s=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){_s===e&&(_s=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Lc(i||n)===null)continue;break}var c=xa(n);c!==null&&(e.splice(t,3),t-=3,Bl(c,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function si(e){function t(A){return Gs(A,e)}Nn!==null&&Gs(Nn,e),In!==null&&Gs(In,e),qn!==null&&Gs(qn,e),or.forEach(t),lr.forEach(t);for(var n=0;n<Xn.length;n++){var i=Xn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)rp(n),n.blockedOn===null&&Xn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],c=n[i+1],d=s[ut]||null;if(typeof c=="function")d||op(n);else if(d){var g=null;if(c&&c.hasAttribute("formAction")){if(s=c,d=c[ut]||null)g=d.formAction;else if(Lc(s)!==null)continue}else g=d.action;typeof g=="function"?n[i+1]=g:(n.splice(i,3),i-=3),op(n)}}}function lp(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(d){return s=d})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Vc(e){this._internalRoot=e}Ns.prototype.render=Vc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=Et();$f(n,i,e,t,null,null)},Ns.prototype.unmount=Vc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$f(e.current,2,null,e,null,null),As(),t[Ta]=null}};function Ns(e){this._internalRoot=e}Ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=yd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xn.length&&t!==0&&t<Xn[n].priority;n++);Xn.splice(n,0,e),n===0&&rp(e)}};var cp=r.version;if(cp!=="19.2.8")throw Error(o(527,cp,"19.2.8"));_.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=f(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var t1={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Is.isDisabled&&Is.supportsFiber)try{vi=Is.inject(t1),vt=Is}catch{}}return dr.createRoot=function(e,t){if(!u(e))throw Error(o(299));var n=!1,i="",s=pm,c=gm,d=ym;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Jf(e,1,!1,null,null,n,i,null,s,c,d,lp),e[Ta]=t.current,vc(e),new Vc(t)},dr.hydrateRoot=function(e,t,n){if(!u(e))throw Error(o(299));var i=!1,s="",c=pm,d=gm,g=ym,A=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(A=n.formState)),t=Jf(e,1,!0,t,n??null,i,s,A,c,d,g,lp),t.context=Wf(null),n=t.current,i=Et(),i=Uo(i),s=Dn(i),s.callback=null,Rn(n,s,i),n=i,t.current.lanes=n,Si(t,n),Zt(t),e[Ta]=t.current,vc(e),new Ns(t)},dr.version="19.2.8",dr}var bp;function d1(){if(bp)return Gc.exports;bp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Gc.exports=u1(),Gc.exports}var h1=d1();const Ng=J.createContext(null);function mi(){const a=J.use(Ng);if(!a)throw new Error("useLanguage must be used inside LanguageProvider.");return a}function m1(){const{copy:a,locale:r}=mi();return S.jsxs("footer",{className:"site-footer",children:[S.jsxs("div",{className:"footer-identity",children:[S.jsx("img",{src:"/media/avatar.jpg",alt:"",width:"640",height:"640",loading:"lazy"}),S.jsxs("div",{children:[S.jsx("strong",{children:a.footer.copyright}),S.jsx("span",{children:a.hero.role})]})]}),S.jsx("p",{children:r==="zh"?"技术美术 · 引擎工具 · AIGC":"Technical art · Engine tools · AIGC"}),S.jsxs("a",{href:"#top",children:[r==="zh"?"回到顶部":"Back to top"," ",S.jsx("span",{"aria-hidden":"true",children:"↑"})]})]})}function f1(){const{locale:a,copy:r,setLocale:l}=mi(),[o,u]=J.useState(""),m=h=>{h!==a&&(l(h),u(h==="zh"?"语言已切换为中文。":"Language changed to English."))};return S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"language-toggle",role:"group","aria-label":r.language.label,children:[S.jsxs("button",{type:"button",className:a==="en"?"is-active":void 0,"aria-pressed":a==="en",onClick:()=>m("en"),children:["EN",S.jsx("span",{className:"sr-only",children:r.language.english})]}),S.jsx("button",{type:"button",className:a==="zh"?"is-active":void 0,"aria-pressed":a==="zh",onClick:()=>m("zh"),children:"中文"})]}),S.jsx("span",{className:"sr-only","aria-live":"polite",children:o})]})}function p1(){const{copy:a}=mi();return S.jsxs("header",{className:"site-header",children:[S.jsxs("a",{className:"brand-link",href:"#top","aria-label":"Lucas Shen, home",children:[S.jsx("span",{lang:"zh-CN",children:"沈裕焱"}),S.jsx("span",{children:"Lucas Shen"})]}),S.jsxs("div",{className:"header-actions",children:[S.jsx("nav",{className:"site-nav","aria-label":a.nav.aria,children:S.jsx("a",{href:"#portfolio",children:a.nav.work})}),S.jsx(f1,{})]})]})}function g1(){const{copy:a,locale:r}=mi(),l=r==="zh"?[["犹他大学｜娱乐艺术与工程（技术美术/游戏工程）硕士","2025.08 — 2027.05"],["上海交通大学｜工业工程本科","2020.09 — 2024.06"]]:[["University of Utah | M.E.A.E., Technical Art","Aug 2025 — May 2027"],["Shanghai Jiao Tong University | B.Eng., Industrial Engineering","Sep 2020 — Jun 2024"]],o=r==="zh"?[["腾讯光子工作室｜AI 工具技术美术实习生","2026.03 — 2026.08"],["广州四三九九信息科技有限公司｜系统策划","2024.05 — 2024.11"],["Whitedot 游戏工作室｜Unity 客户端开发实习生","2024.01 — 2024.04"],["上海如为电力｜UE 数字孪生开发实习生","2023.04 — 2023.08"]]:[["Tencent Lightspeed Studios | AI Tools Technical Art Intern","Mar 2026 — Aug 2026"],["4399 Network | Systems Designer","May 2024 — Nov 2024"],["Whitedot Game Studio | Unity Client Development Intern","Jan 2024 — Apr 2024"],["Shanghai Ruwei Electric Power | UE5 Client Development Intern","Apr 2023 — Aug 2023"]];return S.jsxs("section",{className:"profile-strip","aria-labelledby":"hero-title",children:[S.jsx("img",{src:"/media/avatar.jpg",alt:"Lucas Shen hand-drawn avatar",width:"640",height:"640",fetchPriority:"high"}),S.jsxs("div",{className:"profile-name",children:[S.jsxs("h1",{id:"hero-title",children:[S.jsx("span",{lang:"zh-CN",children:"沈裕焱"}),S.jsx("span",{children:"Lucas Shen"})]}),S.jsx("p",{children:a.hero.role})]}),S.jsx("p",{className:"profile-intro",children:r==="zh"?"游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线作品。":"Games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines."}),S.jsxs("div",{className:"profile-history",children:[S.jsxs("section",{children:[S.jsx("h2",{children:r==="zh"?"教育经历":"Education"}),S.jsx("ul",{children:l.map(([u,m])=>S.jsxs("li",{children:[S.jsx("span",{children:u}),S.jsxs("time",{children:["· ",m]})]},u))})]}),S.jsxs("section",{children:[S.jsx("h2",{children:r==="zh"?"实习与工作经历":"Internship & Work Experience"}),S.jsx("ul",{children:o.map(([u,m])=>S.jsxs("li",{children:[S.jsx("span",{children:u}),S.jsxs("time",{children:["· ",m]})]},u))})]})]})]})}const Ig=J.createContext({});function y1(a){const r=J.useRef(null);return r.current===null&&(r.current=a()),r.current}const v1=typeof window<"u",b1=v1?J.useLayoutEffect:J.useEffect,Bu=J.createContext(null);function Lu(a,r){a.indexOf(r)===-1&&a.push(r)}function ao(a,r){const l=a.indexOf(r);l>-1&&a.splice(l,1)}const en=(a,r,l)=>l>r?r:l<a?a:l;let po=()=>{};const Qn={},qg=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),Xg=a=>typeof a=="object"&&a!==null,Fg=a=>/^0[^.\s]+$/u.test(a);function Yg(a){let r;return()=>(r===void 0&&(r=a()),r)}const Gt=a=>a,Ar=(...a)=>a.reduce((r,l)=>o=>l(r(o))),vr=(a,r,l)=>{const o=r-a;return o?(l-a)/o:1};class Ou{constructor(){this.subscriptions=[]}add(r){return Lu(this.subscriptions,r),()=>ao(this.subscriptions,r)}notify(r,l,o){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](r,l,o);else for(let m=0;m<u;m++){const h=this.subscriptions[m];h&&h(r,l,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ut=a=>a*1e3,Ht=a=>a/1e3,Kg=(a,r)=>r?a*(1e3/r):0,Qg=(a,r,l)=>(((1-3*l+3*r)*a+(3*l-6*r))*a+3*r)*a,S1=1e-7,w1=12;function A1(a,r,l,o,u){let m,h,p=0;do h=r+(l-r)/2,m=Qg(h,o,u)-a,m>0?l=h:r=h;while(Math.abs(m)>S1&&++p<w1);return h}function Tr(a,r,l,o){if(a===r&&l===o)return Gt;const u=m=>A1(m,0,1,a,l);return m=>m===0||m===1?m:Qg(u(m),r,o)}const Zg=a=>r=>r<=.5?a(2*r)/2:(2-a(2*(1-r)))/2,Jg=a=>r=>1-a(1-r),Wg=Tr(.33,1.53,.69,.99),Vu=Jg(Wg),$g=Zg(Vu),ey=a=>a>=1?1:(a*=2)<1?.5*Vu(a):.5*(2-Math.pow(2,-10*(a-1))),Pu=a=>1-Math.sin(Math.acos(a)),ty=Jg(Pu),ny=Zg(Pu),T1=Tr(.42,0,1,1),C1=Tr(0,0,.58,1),ay=Tr(.42,0,.58,1),x1=a=>Array.isArray(a)&&typeof a[0]!="number",iy=a=>Array.isArray(a)&&typeof a[0]=="number",E1={linear:Gt,easeIn:T1,easeInOut:ay,easeOut:C1,circIn:Pu,circInOut:ny,circOut:ty,backIn:Vu,backInOut:$g,backOut:Wg,anticipate:ey},U1=a=>typeof a=="string",Sp=a=>{if(iy(a)){po(a.length===4);const[r,l,o,u]=a;return Tr(r,l,o,u)}else if(U1(a))return E1[a];return a},qs=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function z1(a){let r=new Set,l=new Set,o=!1,u=!1;const m=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(f){m.has(f)&&(y.schedule(f),a()),f(h)}const y={schedule:(f,v=!1,b=!1)=>{const E=b&&o?r:l;return v&&m.add(f),E.add(f),f},cancel:f=>{l.delete(f),m.delete(f)},process:f=>{if(h=f,o){u=!0;return}o=!0;const v=r;r=l,l=v,r.forEach(p),r.clear(),o=!1,u&&(u=!1,y.process(f))}};return y}const M1=40;function ry(a,r){let l=!1,o=!0;const u={delta:0,timestamp:0,isProcessing:!1},m=()=>l=!0,h=qs.reduce((G,q)=>(G[q]=z1(m),G),{}),{setup:p,read:y,resolveKeyframes:f,preUpdate:v,update:b,preRender:w,render:E,postRender:M}=h,V=()=>{const G=Qn.useManualTiming,q=G?u.timestamp:performance.now();l=!1,G||(u.delta=o?1e3/60:Math.max(Math.min(q-u.timestamp,M1),1)),u.timestamp=q,u.isProcessing=!0,p.process(u),y.process(u),f.process(u),v.process(u),b.process(u),w.process(u),E.process(u),M.process(u),u.isProcessing=!1,l&&r&&(o=!1,a(V))},H=()=>{l=!0,o=!0,u.isProcessing||a(V)};return{schedule:qs.reduce((G,q)=>{const ne=h[q];return G[q]=(le,Y=!1,W=!1)=>(l||H(),ne.schedule(le,Y,W)),G},{}),cancel:G=>{for(let q=0;q<qs.length;q++)h[qs[q]].cancel(G)},state:u,steps:h}}const{schedule:De,cancel:Zn,state:nt,steps:qc}=ry(typeof requestAnimationFrame<"u"?requestAnimationFrame:Gt,!0);let Ks;function D1(){Ks=void 0}const lt={now:()=>(Ks===void 0&&lt.set(nt.isProcessing||Qn.useManualTiming?nt.timestamp:performance.now()),Ks),set:a=>{Ks=a,queueMicrotask(D1)}},sy=a=>r=>typeof r=="string"&&r.startsWith(a),oy=sy("--"),R1=sy("var(--"),Hu=a=>R1(a)?k1.test(a.split("/*")[0].trim()):!1,k1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function wp(a){return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")}const fi={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},br={...fi,transform:a=>en(0,1,a)},Xs={...fi,default:1},fr=a=>Math.round(a*1e5)/1e5,Gu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function j1(a){return a==null}const B1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,_u=(a,r)=>l=>!!(typeof l=="string"&&B1.test(l)&&l.startsWith(a)||r&&!j1(l)&&Object.prototype.hasOwnProperty.call(l,r)),ly=(a,r,l)=>o=>{if(typeof o!="string")return o;const[u,m,h,p]=o.match(Gu);return{[a]:parseFloat(u),[r]:parseFloat(m),[l]:parseFloat(h),alpha:p!==void 0?parseFloat(p):1}},L1=a=>en(0,255,a),Xc={...fi,transform:a=>Math.round(L1(a))},ba={test:_u("rgb","red"),parse:ly("red","green","blue"),transform:({red:a,green:r,blue:l,alpha:o=1})=>"rgba("+Xc.transform(a)+", "+Xc.transform(r)+", "+Xc.transform(l)+", "+fr(br.transform(o))+")"};function O1(a){let r="",l="",o="",u="";return a.length>5?(r=a.substring(1,3),l=a.substring(3,5),o=a.substring(5,7),u=a.substring(7,9)):(r=a.substring(1,2),l=a.substring(2,3),o=a.substring(3,4),u=a.substring(4,5),r+=r,l+=l,o+=o,u+=u),{red:parseInt(r,16),green:parseInt(l,16),blue:parseInt(o,16),alpha:u?parseInt(u,16)/255:1}}const ou={test:_u("#"),parse:O1,transform:ba.transform},Cr=a=>({test:r=>typeof r=="string"&&r.endsWith(a)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${a}`}),wn=Cr("deg"),$t=Cr("%"),K=Cr("px"),V1=Cr("vh"),P1=Cr("vw"),Ap={...$t,parse:a=>$t.parse(a)/100,transform:a=>$t.transform(a*100)},li={test:_u("hsl","hue"),parse:ly("hue","saturation","lightness"),transform:({hue:a,saturation:r,lightness:l,alpha:o=1})=>"hsla("+Math.round(a)+", "+$t.transform(fr(r))+", "+$t.transform(fr(l))+", "+fr(br.transform(o))+")"},Fe={test:a=>ba.test(a)||ou.test(a)||li.test(a),parse:a=>ba.test(a)?ba.parse(a):li.test(a)?li.parse(a):ou.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?ba.transform(a):li.transform(a),getAnimatableNone:a=>{const r=Fe.parse(a);return r.alpha=0,Fe.transform(r)}},H1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function G1(a){return isNaN(a)&&typeof a=="string"&&(a.match(Gu)?.length||0)+(a.match(H1)?.length||0)>0}const cy="number",uy="color",_1="var",N1="var(",Tp="${}",I1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function di(a){const r=a.toString(),l=[],o={color:[],number:[],var:[]},u=[];let m=0;const p=r.replace(I1,y=>(Fe.test(y)?(o.color.push(m),u.push(uy),l.push(Fe.parse(y))):y.startsWith(N1)?(o.var.push(m),u.push(_1),l.push(y)):(o.number.push(m),u.push(cy),l.push(parseFloat(y))),++m,Tp)).split(Tp);return{values:l,split:p,indexes:o,types:u}}function q1(a){return di(a).values}function dy({split:a,types:r}){const l=a.length;return o=>{let u="";for(let m=0;m<l;m++)if(u+=a[m],o[m]!==void 0){const h=r[m];h===cy?u+=fr(o[m]):h===uy?u+=Fe.transform(o[m]):u+=o[m]}return u}}function X1(a){return dy(di(a))}const F1=a=>typeof a=="number"?0:Fe.test(a)?Fe.getAnimatableNone(a):a,Y1=(a,r)=>typeof a=="number"?r?.trim().endsWith("/")?a:0:F1(a);function K1(a){const r=di(a);return dy(r)(r.values.map((o,u)=>Y1(o,r.split[u])))}const Ft={test:G1,parse:q1,createTransformer:X1,getAnimatableNone:K1};function Fc(a,r,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(r-a)*6*l:l<1/2?r:l<2/3?a+(r-a)*(2/3-l)*6:a}function Q1({hue:a,saturation:r,lightness:l,alpha:o}){a/=360,r/=100,l/=100;let u=0,m=0,h=0;if(!r)u=m=h=l;else{const p=l<.5?l*(1+r):l+r-l*r,y=2*l-p;u=Fc(y,p,a+1/3),m=Fc(y,p,a),h=Fc(y,p,a-1/3)}return{red:Math.round(u*255),green:Math.round(m*255),blue:Math.round(h*255),alpha:o}}function io(a,r){return l=>l>0?r:a}const Me=(a,r,l)=>a+(r-a)*l,Yc=(a,r,l)=>{const o=a*a,u=l*(r*r-o)+o;return u<0?0:Math.sqrt(u)},Z1=[ou,ba,li],J1=a=>Z1.find(r=>r.test(a));function Cp(a){const r=J1(a);if(!r)return!1;let l=r.parse(a);return r===li&&(l=Q1(l)),l}const xp=(a,r)=>{const l=Cp(a),o=Cp(r);if(!l||!o)return io(a,r);const u={...l};return m=>(u.red=Yc(l.red,o.red,m),u.green=Yc(l.green,o.green,m),u.blue=Yc(l.blue,o.blue,m),u.alpha=Me(l.alpha,o.alpha,m),ba.transform(u))},lu=new Set(["none","hidden"]);function W1(a,r){return lu.has(a)?l=>l<=0?a:r:l=>l>=1?r:a}function $1(a,r){return l=>Me(a,r,l)}function Nu(a){return typeof a=="number"?$1:typeof a=="string"?Hu(a)?io:Fe.test(a)?xp:n2:Array.isArray(a)?hy:typeof a=="object"?Fe.test(a)?xp:e2:io}function hy(a,r){const l=[...a],o=l.length,u=a.map((m,h)=>Nu(m)(m,r[h]));return m=>{for(let h=0;h<o;h++)l[h]=u[h](m);return l}}function e2(a,r){const l={...a,...r},o={};for(const u in l)a[u]!==void 0&&r[u]!==void 0&&(o[u]=Nu(a[u])(a[u],r[u]));return u=>{for(const m in o)l[m]=o[m](u);return l}}function t2(a,r){const l=[],o={color:0,var:0,number:0};for(let u=0;u<r.values.length;u++){const m=r.types[u],h=a.indexes[m][o[m]],p=a.values[h]??0;l[u]=p,o[m]++}return l}const n2=(a,r)=>{const l=Ft.createTransformer(r),o=di(a),u=di(r);return o.indexes.var.length===u.indexes.var.length&&o.indexes.color.length===u.indexes.color.length&&o.indexes.number.length>=u.indexes.number.length?lu.has(a)&&!u.values.length||lu.has(r)&&!o.values.length?W1(a,r):Ar(hy(t2(o,u),u.values),l):io(a,r)};function my(a,r,l){return typeof a=="number"&&typeof r=="number"&&typeof l=="number"?Me(a,r,l):Nu(a)(a,r)}const a2=a=>{const r=({timestamp:l})=>a(l);return{start:(l=!0)=>De.update(r,l),stop:()=>Zn(r),now:()=>nt.isProcessing?nt.timestamp:lt.now()}},fy=(a,r,l=10)=>{let o="";const u=Math.max(Math.round(r/l),2);for(let m=0;m<u;m++)o+=Math.round(a(m/(u-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},ro=2e4;function Iu(a){let r=0;const l=50;let o=a.next(r);for(;!o.done&&r<ro;)r+=l,o=a.next(r);return r>=ro?1/0:r}function i2(a,r=100,l){const o=l({...a,keyframes:[0,r]}),u=Math.min(Iu(o),ro);return{type:"keyframes",ease:m=>o.next(u*m).value/r,duration:Ht(u)}}const Oe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function cu(a,r){return a*Math.sqrt(1-r*r)}const r2=12;function s2(a,r,l){let o=l;for(let u=1;u<r2;u++)o=o-a(o)/r(o);return o}const Kc=.001;function o2({duration:a=Oe.duration,bounce:r=Oe.bounce,velocity:l=Oe.velocity,mass:o=Oe.mass}){let u,m,h=1-r;h=en(Oe.minDamping,Oe.maxDamping,h),a=en(Oe.minDuration,Oe.maxDuration,Ht(a)),h<1?(u=f=>{const v=f*h,b=v*a,w=v-l,E=cu(f,h),M=Math.exp(-b);return Kc-w/E*M},m=f=>{const b=f*h*a,w=b*l+l,E=Math.pow(h,2)*Math.pow(f,2)*a,M=Math.exp(-b),V=cu(Math.pow(f,2),h);return(-u(f)+Kc>0?-1:1)*((w-E)*M)/V}):(u=f=>{const v=Math.exp(-f*a),b=(f-l)*a+1;return-Kc+v*b},m=f=>{const v=Math.exp(-f*a),b=(l-f)*(a*a);return v*b});const p=5/a,y=s2(u,m,p);if(a=Ut(a),isNaN(y))return{stiffness:Oe.stiffness,damping:Oe.damping,duration:a};{const f=Math.pow(y,2)*o;return{stiffness:f,damping:h*2*Math.sqrt(o*f),duration:a}}}const l2=["duration","bounce"],c2=["stiffness","damping","mass"];function Ep(a,r){return r.some(l=>a[l]!==void 0)}function u2(a){let r={velocity:Oe.velocity,stiffness:Oe.stiffness,damping:Oe.damping,mass:Oe.mass,isResolvedFromDuration:!1,...a};if(!Ep(a,c2)&&Ep(a,l2))if(r.velocity=0,a.visualDuration){const l=a.visualDuration,o=2*Math.PI/(l*1.2),u=o*o,m=2*en(.05,1,1-(a.bounce||0))*Math.sqrt(u);r={...r,mass:Oe.mass,stiffness:u,damping:m}}else{const l=o2({...a,velocity:0});r={...r,...l,mass:Oe.mass},r.isResolvedFromDuration=!0}return r}function so(a=Oe.visualDuration,r=Oe.bounce){const l=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:r}:a;let{restSpeed:o,restDelta:u}=l;const m=l.keyframes[0],h=l.keyframes[l.keyframes.length-1],p={done:!1,value:m},{stiffness:y,damping:f,mass:v,duration:b,velocity:w,isResolvedFromDuration:E}=u2({...l,velocity:-Ht(l.velocity||0)}),M=w||0,V=f/(2*Math.sqrt(y*v)),H=h-m,P=Ht(Math.sqrt(y/v)),N=Math.abs(H)<5;o||(o=N?Oe.restSpeed.granular:Oe.restSpeed.default),u||(u=N?Oe.restDelta.granular:Oe.restDelta.default);let G,q,ne,le,Y,W;if(V<1)ne=cu(P,V),le=(M+V*P*H)/ne,G=te=>{const ve=Math.exp(-V*P*te);return h-ve*(le*Math.sin(ne*te)+H*Math.cos(ne*te))},Y=V*P*le+H*ne,W=V*P*H-le*ne,q=te=>Math.exp(-V*P*te)*(Y*Math.sin(ne*te)+W*Math.cos(ne*te));else if(V===1){G=ve=>h-Math.exp(-P*ve)*(H+(M+P*H)*ve);const te=M+P*H;q=ve=>Math.exp(-P*ve)*(P*te*ve-M)}else{const te=P*Math.sqrt(V*V-1);G=_e=>{const Ve=Math.exp(-V*P*_e),k=Math.min(te*_e,300);return h-Ve*((M+V*P*H)*Math.sinh(k)+te*H*Math.cosh(k))/te};const ve=(M+V*P*H)/te,we=V*P*ve-H*te,rt=V*P*H-ve*te;q=_e=>{const Ve=Math.exp(-V*P*_e),k=Math.min(te*_e,300);return Ve*(we*Math.sinh(k)+rt*Math.cosh(k))}}const Ce={calculatedDuration:E&&b||null,velocity:te=>Ut(q(te)),next:te=>{if(!E&&V<1){const we=Math.exp(-V*P*te),rt=Math.sin(ne*te),_e=Math.cos(ne*te),Ve=h-we*(le*rt+H*_e),k=Ut(we*(Y*rt+W*_e));return p.done=Math.abs(k)<=o&&Math.abs(h-Ve)<=u,p.value=p.done?h:Ve,p}const ve=G(te);if(E)p.done=te>=b;else{const we=Ut(q(te));p.done=Math.abs(we)<=o&&Math.abs(h-ve)<=u}return p.value=p.done?h:ve,p},toString:()=>{const te=Math.min(Iu(Ce),ro),ve=fy(we=>Ce.next(te*we).value,te,30);return te+"ms "+ve},toTransition:()=>{}};return Ce}so.applyToOptions=a=>{const r=i2(a,100,so);return a.ease=r.ease,a.duration=Ut(r.duration),a.type="keyframes",a};const d2=5;function py(a,r,l){const o=Math.max(r-d2,0);return Kg(l-a(o),r-o)}function uu({keyframes:a,velocity:r=0,power:l=.8,timeConstant:o=325,bounceDamping:u=10,bounceStiffness:m=500,modifyTarget:h,min:p,max:y,restDelta:f=.5,restSpeed:v}){const b=a[0],w={done:!1,value:b},E=W=>p!==void 0&&W<p||y!==void 0&&W>y,M=W=>p===void 0?y:y===void 0||Math.abs(p-W)<Math.abs(y-W)?p:y;let V=l*r;const H=b+V,P=h===void 0?H:h(H);P!==H&&(V=P-b);const N=W=>-V*Math.exp(-W/o),G=W=>P+N(W),q=W=>{const Ce=N(W),te=G(W);w.done=Math.abs(Ce)<=f,w.value=w.done?P:te};let ne,le;const Y=W=>{E(w.value)&&(ne=W,le=so({keyframes:[w.value,M(w.value)],velocity:py(G,W,w.value),damping:u,stiffness:m,restDelta:f,restSpeed:v}))};return Y(0),{calculatedDuration:null,next:W=>{let Ce=!1;return!le&&ne===void 0&&(Ce=!0,q(W),Y(W)),ne!==void 0&&W>=ne?le.next(W-ne):(!Ce&&q(W),w)}}}function h2(a,r,l){const o=[],u=l||Qn.mix||my,m=a.length-1;for(let h=0;h<m;h++){let p=u(a[h],a[h+1]);if(r){const y=Array.isArray(r)?r[h]||Gt:r;p=Ar(y,p)}o.push(p)}return o}function m2(a,r,{clamp:l=!0,ease:o,mixer:u}={}){const m=a.length;if(po(m===r.length),m===1)return()=>r[0];if(m===2&&r[0]===r[1])return()=>r[1];const h=a[0]===a[1];a[0]>a[m-1]&&(a=[...a].reverse(),r=[...r].reverse());const p=h2(r,o,u),y=p.length,f=v=>{if(h&&v<a[0])return r[0];let b=0;if(y>1)for(;b<a.length-2&&!(v<a[b+1]);b++);const w=vr(a[b],a[b+1],v);return p[b](w)};return l?v=>f(en(a[0],a[m-1],v)):f}function f2(a,r){const l=a[a.length-1];for(let o=1;o<=r;o++){const u=vr(0,r,o);a.push(Me(l,1,u))}}function p2(a){const r=[0];return f2(r,a.length-1),r}function g2(a,r){return a.map(l=>l*r)}function y2(a,r){return a.map(()=>r||ay).splice(0,a.length-1)}function pr({duration:a=300,keyframes:r,times:l,ease:o="easeInOut"}){const u=x1(o)?o.map(Sp):Sp(o),m={done:!1,value:r[0]},h=g2(l&&l.length===r.length?l:p2(r),a),p=m2(h,r,{ease:Array.isArray(u)?u:y2(r,u)});return{calculatedDuration:a,next:y=>(m.value=p(y),m.done=y>=a,m)}}const v2=a=>a!==null;function go(a,{repeat:r,repeatType:l="loop"},o,u=1){const m=a.filter(v2),p=u<0||r&&l!=="loop"&&r%2===1?0:m.length-1;return!p||o===void 0?m[p]:o}const b2={decay:uu,inertia:uu,tween:pr,keyframes:pr,spring:so};function gy(a){typeof a.type=="string"&&(a.type=b2[a.type])}class qu{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(r=>{this.resolve=r})}notifyFinished(){this.resolve()}then(r,l){return this.finished.then(r,l)}}const S2=a=>a/100;class oo extends qu{constructor(r){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:l}=this.options;l&&l.updatedAt!==lt.now()&&this.tick(lt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=r,this.initAnimation(),this.play(),r.autoplay===!1&&this.pause()}initAnimation(){const{options:r}=this;gy(r);const{type:l=pr,repeat:o=0,repeatDelay:u=0,repeatType:m,velocity:h=0}=r;let{keyframes:p}=r;const y=l||pr;y!==pr&&typeof p[0]!="number"&&(this.mixKeyframes=Ar(S2,my(p[0],p[1])),p=[0,100]);const f=y({...r,keyframes:p});m==="mirror"&&(this.mirroredGenerator=y({...r,keyframes:[...p].reverse(),velocity:-h})),f.calculatedDuration===null&&(f.calculatedDuration=Iu(f));const{calculatedDuration:v}=f;this.calculatedDuration=v,this.resolvedDuration=v+u,this.totalDuration=this.resolvedDuration*(o+1)-u,this.generator=f}updateTime(r){const l=Math.round(r-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(r,l=!1){const{generator:o,totalDuration:u,mixKeyframes:m,mirroredGenerator:h,resolvedDuration:p,calculatedDuration:y}=this;if(this.startTime===null)return o.next(0);const{delay:f=0,keyframes:v,repeat:b,repeatType:w,repeatDelay:E,type:M,onUpdate:V,finalKeyframe:H}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-u/this.speed,this.startTime)),l?this.currentTime=r:this.updateTime(r);const P=this.currentTime-f*(this.playbackSpeed>=0?1:-1),N=this.playbackSpeed>=0?P<0:P>u;this.currentTime=Math.max(P,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let G=this.currentTime,q=o;if(b){const W=Math.min(this.currentTime,u)/p;let Ce=Math.floor(W),te=W%1;!te&&W>=1&&(te=1),te===1&&Ce--,Ce=Math.min(Ce,b+1),Ce%2&&(w==="reverse"?(te=1-te,E&&(te-=E/p)):w==="mirror"&&(q=h)),G=en(0,1,te)*p}let ne;N?(this.delayState.value=v[0],ne=this.delayState):ne=q.next(G),m&&!N&&(ne.value=m(ne.value));let{done:le}=ne;!N&&y!==null&&(le=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const Y=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&le);return Y&&M!==uu&&(ne.value=go(v,this.options,H,this.speed)),V&&V(ne.value),Y&&this.finish(),ne}then(r,l){return this.finished.then(r,l)}get duration(){return Ht(this.calculatedDuration)}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Ht(r)}get time(){return Ht(this.currentTime)}set time(r){r=Ut(r),this.currentTime=r,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=r,this.tick(r))}getGeneratorVelocity(){const r=this.currentTime;if(r<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(r);const l=this.generator.next(r).value;return py(o=>this.generator.next(o).value,r,l)}get speed(){return this.playbackSpeed}set speed(r){const l=this.playbackSpeed!==r;l&&this.driver&&this.updateTime(lt.now()),this.playbackSpeed=r,l&&this.driver&&(this.time=Ht(this.currentTime))}play(){if(this.isStopped)return;const{driver:r=a2,startTime:l}=this.options;this.driver||(this.driver=r(u=>this.tick(u))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=l??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(lt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}attachTimeline(r){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),r.observe(this)}}function w2(a){for(let r=1;r<a.length;r++)a[r]??(a[r]=a[r-1])}const Sa=a=>a*180/Math.PI,du=a=>{const r=Sa(Math.atan2(a[1],a[0]));return hu(r)},A2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:du,rotateZ:du,skewX:a=>Sa(Math.atan(a[1])),skewY:a=>Sa(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},hu=a=>(a=a%360,a<0&&(a+=360),a),Up=du,zp=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),Mp=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),T2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:zp,scaleY:Mp,scale:a=>(zp(a)+Mp(a))/2,rotateX:a=>hu(Sa(Math.atan2(a[6],a[5]))),rotateY:a=>hu(Sa(Math.atan2(-a[2],a[0]))),rotateZ:Up,rotate:Up,skewX:a=>Sa(Math.atan(a[4])),skewY:a=>Sa(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function mu(a){return a.includes("scale")?1:0}function fu(a,r){if(!a||a==="none")return mu(r);const l=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,u;if(l)o=T2,u=l;else{const p=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=A2,u=p}if(!u)return mu(r);const m=o[r],h=u[1].split(",").map(x2);return typeof m=="function"?m(h):h[m]}const C2=(a,r)=>{const{transform:l="none"}=getComputedStyle(a);return fu(l,r)};function x2(a){return parseFloat(a.trim())}const pi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gi=new Set([...pi,"pathRotation"]),Dp=a=>a===fi||a===K,E2=new Set(["x","y","z"]),U2=pi.filter(a=>!E2.has(a));function z2(a){const r=[];return U2.forEach(l=>{const o=a.getValue(l);o!==void 0&&(r.push([l,o.get()]),o.set(l.startsWith("scale")?1:0))}),r}const Kn={width:({x:a},{paddingLeft:r="0",paddingRight:l="0",boxSizing:o})=>{const u=a.max-a.min;return o==="border-box"?u:u-parseFloat(r)-parseFloat(l)},height:({y:a},{paddingTop:r="0",paddingBottom:l="0",boxSizing:o})=>{const u=a.max-a.min;return o==="border-box"?u:u-parseFloat(r)-parseFloat(l)},top:(a,{top:r})=>parseFloat(r),left:(a,{left:r})=>parseFloat(r),bottom:({y:a},{top:r})=>parseFloat(r)+(a.max-a.min),right:({x:a},{left:r})=>parseFloat(r)+(a.max-a.min),x:(a,{transform:r})=>fu(r,"x"),y:(a,{transform:r})=>fu(r,"y")};Kn.translateX=Kn.x;Kn.translateY=Kn.y;const wa=new Set;let pu=!1,gu=!1,yu=!1;function yy(){if(gu){const a=Array.from(wa).filter(o=>o.needsMeasurement),r=new Set(a.map(o=>o.element)),l=new Map;r.forEach(o=>{const u=z2(o);u.length&&(l.set(o,u),o.render())}),a.forEach(o=>o.measureInitialState()),r.forEach(o=>{o.render();const u=l.get(o);u&&u.forEach(([m,h])=>{o.getValue(m)?.set(h)})}),a.forEach(o=>o.measureEndState()),a.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}gu=!1,pu=!1,wa.forEach(a=>a.complete(yu)),wa.clear()}function vy(){wa.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(gu=!0)})}function M2(){yu=!0,vy(),yy(),yu=!1}class Xu{constructor(r,l,o,u,m,h=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...r],this.onComplete=l,this.name=o,this.motionValue=u,this.element=m,this.isAsync=h}scheduleResolve(){this.state="scheduled",this.isAsync?(wa.add(this),pu||(pu=!0,De.read(vy),De.resolveKeyframes(yy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:l,element:o,motionValue:u}=this;if(r[0]===null){const m=u?.get(),h=r[r.length-1];if(m!==void 0)r[0]=m;else if(o&&l){const p=o.readValue(l,h);p!=null&&(r[0]=p)}r[0]===void 0&&(r[0]=h),u&&m===void 0&&u.set(r[0])}w2(r)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(r=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,r),wa.delete(this)}cancel(){this.state==="scheduled"&&(wa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const D2=a=>a.startsWith("--");function by(a,r,l){D2(r)?a.style.setProperty(r,l):a.style[r]=l}const R2={};function Sy(a,r){const l=Yg(a);return()=>R2[r]??l()}const k2=Sy(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),wy=Sy(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),mr=([a,r,l,o])=>`cubic-bezier(${a}, ${r}, ${l}, ${o})`,Rp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:mr([0,.65,.55,1]),circOut:mr([.55,0,1,.45]),backIn:mr([.31,.01,.66,-.59]),backOut:mr([.33,1.53,.69,.99])};function Ay(a,r){if(a)return typeof a=="function"?wy()?fy(a,r):"ease-out":iy(a)?mr(a):Array.isArray(a)?a.map(l=>Ay(l,r)||Rp.easeOut):Rp[a]}function j2(a,r,l,{delay:o=0,duration:u=300,repeat:m=0,repeatType:h="loop",ease:p="easeOut",times:y}={},f=void 0){const v={[r]:l};y&&(v.offset=y);const b=Ay(p,u);Array.isArray(b)&&(v.easing=b);const w={delay:o,duration:u,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:m+1,direction:h==="reverse"?"alternate":"normal"};return f&&(w.pseudoElement=f),a.animate(v,w)}function Ty(a){return typeof a=="function"&&"applyToOptions"in a}function B2({type:a,...r}){return Ty(a)&&wy()?a.applyToOptions(r):(r.duration??(r.duration=300),r.ease??(r.ease="easeOut"),r)}class Cy extends qu{constructor(r){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!r)return;const{element:l,name:o,keyframes:u,pseudoElement:m,allowFlatten:h=!1,finalKeyframe:p,onComplete:y}=r;this.isPseudoElement=!!m,this.allowFlatten=h,this.options=r,po(typeof r.type!="string");const f=B2(r);this.animation=j2(l,o,u,f,m),f.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!m){const v=go(u,this.options,p,this.speed);this.updateMotionValue&&this.updateMotionValue(v),by(l,o,v),this.animation.cancel()}y?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:r}=this;r==="idle"||r==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const r=this.options?.element;!this.isPseudoElement&&r?.isConnected&&this.animation.commitStyles?.()}get duration(){const r=this.animation.effect?.getComputedTiming?.().duration||0;return Ht(Number(r))}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Ht(r)}get time(){return Ht(Number(this.animation.currentTime)||0)}set time(r){const l=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ut(r),l&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(r){r<0&&(this.finishedTime=null),this.animation.playbackRate=r}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(r){this.manualStartTime=this.animation.startTime=r}attachTimeline({timeline:r,rangeStart:l,rangeEnd:o,observe:u}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,r&&k2()?(this.animation.timeline=r,l&&(this.animation.rangeStart=l),o&&(this.animation.rangeEnd=o),Gt):u(this)}}const xy={anticipate:ey,backInOut:$g,circInOut:ny};function L2(a){return a in xy}function O2(a){typeof a.ease=="string"&&L2(a.ease)&&(a.ease=xy[a.ease])}const Qc=10;class V2 extends Cy{constructor(r){O2(r),gy(r),super(r),r.startTime!==void 0&&r.autoplay!==!1&&(this.startTime=r.startTime),this.options=r}updateMotionValue(r){const{motionValue:l,onUpdate:o,onComplete:u,element:m,...h}=this.options;if(!l)return;if(r!==void 0){l.set(r);return}const p=new oo({...h,autoplay:!1}),y=Math.max(Qc,lt.now()-this.startTime),f=en(0,Qc,y-Qc),v=p.sample(y).value,{name:b}=this.options;m&&b&&by(m,b,v),l.setWithVelocity(p.sample(Math.max(0,y-f)).value,v,f),p.stop()}}const kp=(a,r)=>r==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Ft.test(a)||a==="0")&&!a.startsWith("url("));function P2(a){const r=a[0];if(a.length===1)return!0;for(let l=0;l<a.length;l++)if(a[l]!==r)return!0}function H2(a,r,l,o){const u=a[0];if(u===null)return!1;if(r==="display"||r==="visibility")return!0;const m=a[a.length-1],h=kp(u,r),p=kp(m,r);return!h||!p?!1:P2(a)||(l==="spring"||Ty(l))&&o}function vu(a){a.duration=0,a.type="keyframes"}const Ey=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),G2=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function _2(a){for(let r=0;r<a.length;r++)if(typeof a[r]=="string"&&G2.test(a[r]))return!0;return!1}const N2=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),I2=Yg(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function q2(a){const{motionValue:r,name:l,repeatDelay:o,repeatType:u,damping:m,type:h,keyframes:p}=a,y=r?.owner?.current;if(!(y instanceof HTMLElement)&&!(y instanceof SVGElement))return!1;const{onUpdate:f,transformTemplate:v}=r.owner.getProps();return I2()&&l&&(Ey.has(l)||N2.has(l)&&_2(p))&&(l!=="transform"||!v)&&!f&&!o&&u!=="mirror"&&m!==0&&h!=="inertia"}const X2=40;class F2 extends qu{constructor({autoplay:r=!0,delay:l=0,type:o="keyframes",repeat:u=0,repeatDelay:m=0,repeatType:h="loop",keyframes:p,name:y,motionValue:f,element:v,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=lt.now();const w={autoplay:r,delay:l,type:o,repeat:u,repeatDelay:m,repeatType:h,name:y,motionValue:f,element:v,...b},E=v?.KeyframeResolver||Xu;this.keyframeResolver=new E(p,(M,V,H)=>this.onKeyframesResolved(M,V,w,!H),y,f,v),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(r,l,o,u){this.keyframeResolver=void 0;const{name:m,type:h,velocity:p,delay:y,isHandoff:f,onUpdate:v}=o;this.resolvedAt=lt.now();let b=!0;H2(r,m,h,p)||(b=!1,(Qn.instantAnimations||!y)&&v?.(go(r,o,l)),r[0]=r[r.length-1],vu(o),o.repeat=0);const E={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>X2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...o,keyframes:r},M=b&&!f&&q2(E),V=E.motionValue?.owner?.current;let H;if(M)try{H=new V2({...E,element:V})}catch{H=new oo(E)}else H=new oo(E);H.finished.then(()=>{this.notifyFinished()}).catch(Gt),this.pendingTimeline&&(this.stopTimeline=H.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=H}get finished(){return this._animation?this.animation.finished:this._finished}then(r,l){return this.finished.finally(r).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),M2()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(r){this.animation.time=r}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(r){this.animation.speed=r}get startTime(){return this.animation.startTime}attachTimeline(r){return this._animation?this.stopTimeline=this.animation.attachTimeline(r):this.pendingTimeline=r,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function Uy(a,r,l,o=0,u=1){const m=Array.from(a).sort((f,v)=>f.sortNodePosition(v)).indexOf(r),h=a.size,p=(h-1)*o;return typeof l=="function"?l(m,h):u===1?m*o:p-m*o}const jp=30,Y2=a=>!isNaN(parseFloat(a));class K2{constructor(r,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const u=lt.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const m of this.dependents)m.dirty()},this.hasAnimated=!1,this.setCurrent(r),this.owner=l.owner}setCurrent(r){this.current=r,this.updatedAt=lt.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=Y2(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,l){this.events[r]||(this.events[r]=new Ou);const o=this.events[r].add(l);return r==="change"?()=>{o(),De.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,l){this.passiveEffect=r,this.stopPassiveEffect=l}set(r){this.passiveEffect?this.passiveEffect(r,this.updateAndNotify):this.updateAndNotify(r)}setWithVelocity(r,l,o){this.set(l),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-o}jump(r,l=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(r){this.dependents||(this.dependents=new Set),this.dependents.add(r)}removeDependent(r){this.dependents&&this.dependents.delete(r)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=lt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>jp)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,jp);return Kg(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(r){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=r(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function hi(a,r){return new K2(a,r)}function zy(a,r){if(a?.inherit&&r){const{inherit:l,...o}=a;return{...r,...o}}return a}function Fu(a,r){const l=a?.[r]??a?.default??a;return l!==a?zy(l,a):l}const Q2={type:"spring",stiffness:500,damping:25,restSpeed:10},Z2=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),J2={type:"keyframes",duration:.8},W2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},$2=(a,{keyframes:r})=>r.length>2?J2:gi.has(a)?a.startsWith("scale")?Z2(r[1]):Q2:W2,eS=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function tS(a){for(const r in a)if(!eS.has(r))return!0;return!1}const Yu=(a,r,l,o={},u,m)=>h=>{const p=Fu(o,a)||{},y=p.delay||o.delay||0;let{elapsed:f=0}=o;f=f-Ut(y);const v={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:r.getVelocity(),...p,delay:-f,onUpdate:w=>{r.set(w),p.onUpdate&&p.onUpdate(w)},onComplete:()=>{h(),p.onComplete&&p.onComplete()},name:a,motionValue:r,element:m?void 0:u};tS(p)||Object.assign(v,$2(a,v)),v.duration&&(v.duration=Ut(v.duration)),v.repeatDelay&&(v.repeatDelay=Ut(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let b=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(vu(v),v.delay===0&&(b=!0)),(Qn.instantAnimations||Qn.skipAnimations||u?.shouldSkipAnimations||p.skipAnimations)&&(b=!0,vu(v),v.delay=0),v.allowFlatten=!p.type&&!p.ease,b&&!m&&r.get()!==void 0){const w=go(v.keyframes,p);if(w!==void 0){De.update(()=>{v.onUpdate(w),v.onComplete()});return}}return p.isSync?new oo(v):new F2(v)},nS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function aS(a){const r=nS.exec(a);if(!r)return[,];const[,l,o,u]=r;return[`--${l??o}`,u]}function My(a,r,l=1){const[o,u]=aS(a);if(!o)return;const m=window.getComputedStyle(r).getPropertyValue(o);if(m){const h=m.trim();return qg(h)?parseFloat(h):h}return Hu(u)?My(u,r,l+1):u}function Bp(a){const r=[{},{}];return a?.values.forEach((l,o)=>{r[0][o]=l.get(),r[1][o]=l.getVelocity()}),r}function Ku(a,r,l,o){if(typeof r=="function"){const[u,m]=Bp(o);r=r(l!==void 0?l:a.custom,u,m)}if(typeof r=="string"&&(r=a.variants&&a.variants[r]),typeof r=="function"){const[u,m]=Bp(o);r=r(l!==void 0?l:a.custom,u,m)}return r}function Aa(a,r,l){const o=a.getProps();return Ku(o,r,l!==void 0?l:o.custom,a)}const Dy=new Set(["width","height","top","left","right","bottom",...pi]),bu=a=>Array.isArray(a);function iS(a,r,l){a.hasValue(r)?a.getValue(r).set(l):a.addValue(r,hi(l))}function rS(a){return bu(a)?a[a.length-1]||0:a}function sS(a,r){const l=Aa(a,r);let{transitionEnd:o={},transition:u={},...m}=l||{};m={...m,...o};for(const h in m){const p=rS(m[h]);iS(a,h,p)}}const at=a=>!!(a&&a.getVelocity);function oS(a){return!!(at(a)&&a.add)}function Su(a,r){const l=a.getValue("willChange");if(oS(l))return l.add(r);if(!l&&Qn.WillChange){const o=new Qn.WillChange("auto");a.addValue("willChange",o),o.add(r)}}function Qu(a){return a.replace(/([A-Z])/g,r=>`-${r.toLowerCase()}`)}const lS="framerAppearId",Ry="data-"+Qu(lS);function ky(a){return a.props[Ry]}function cS({protectedKeys:a,needsAnimating:r},l){const o=a.hasOwnProperty(l)&&r[l]!==!0;return r[l]=!1,o}function jy(a,r,{delay:l=0,transitionOverride:o,type:u}={}){let{transition:m,transitionEnd:h,...p}=r;const y=a.getDefaultTransition();m=m?zy(m,y):y;const f=m?.reduceMotion,v=m?.skipAnimations;o&&(m=o);const b=[],w=u&&a.animationState&&a.animationState.getState()[u],E=m?.path;E&&E.animateVisualElement(a,p,m,l,b);for(const M in p){const V=a.getValue(M,a.latestValues[M]??null),H=p[M];if(H===void 0||w&&cS(w,M))continue;const P={delay:l,...Fu(m||{},M)};v&&(P.skipAnimations=!0);const N=V.get();if(N!==void 0&&!V.isAnimating()&&!Array.isArray(H)&&H===N&&!P.velocity){De.update(()=>V.set(H));continue}let G=!1;if(window.MotionHandoffAnimation){const le=ky(a);if(le){const Y=window.MotionHandoffAnimation(le,M,De);Y!==null&&(P.startTime=Y,G=!0)}}Su(a,M);const q=f??a.shouldReduceMotion;V.start(Yu(M,V,H,q&&Dy.has(M)?{type:!1}:P,a,G));const ne=V.animation;ne&&b.push(ne)}if(h){const M=()=>De.update(()=>{h&&sS(a,h)});b.length?Promise.all(b).then(M):M()}return b}function wu(a,r,l={}){const o=Aa(a,r,l.type==="exit"?a.presenceContext?.custom:void 0);let{transition:u=a.getDefaultTransition()||{}}=o||{};l.transitionOverride&&(u=l.transitionOverride);const m=o?()=>Promise.all(jy(a,o,l)):()=>Promise.resolve(),h=a.variantChildren&&a.variantChildren.size?(y=0)=>{const{delayChildren:f=0,staggerChildren:v,staggerDirection:b}=u;return uS(a,r,y,f,v,b,l)}:()=>Promise.resolve(),{when:p}=u;if(p){const[y,f]=p==="beforeChildren"?[m,h]:[h,m];return y().then(()=>f())}else return Promise.all([m(),h(l.delay)])}function uS(a,r,l=0,o=0,u=0,m=1,h){const p=[];for(const y of a.variantChildren)y.notify("AnimationStart",r),p.push(wu(y,r,{...h,delay:l+(typeof o=="function"?0:o)+Uy(a.variantChildren,y,o,u,m)}).then(()=>y.notify("AnimationComplete",r)));return Promise.all(p)}function dS(a,r,l={}){a.notify("AnimationStart",r);let o;if(Array.isArray(r)){const u=r.map(m=>wu(a,m,l));o=Promise.all(u)}else if(typeof r=="string")o=wu(a,r,l);else{const u=typeof r=="function"?Aa(a,r,l.custom):r;o=Promise.all(jy(a,u,l))}return o.then(()=>{a.notify("AnimationComplete",r)})}const hS={test:a=>a==="auto",parse:a=>a},By=a=>r=>r.test(a),Ly=[fi,K,$t,wn,P1,V1,hS],Lp=a=>Ly.find(By(a));function mS(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||Fg(a):!0}const fS=new Set(["brightness","contrast","saturate","opacity"]);function pS(a){const[r,l]=a.slice(0,-1).split("(");if(r==="drop-shadow")return a;const[o]=l.match(Gu)||[];if(!o)return a;const u=l.replace(o,"");let m=fS.has(r)?1:0;return o!==l&&(m*=100),r+"("+m+u+")"}const gS=/\b([a-z-]*)\(.*?\)/gu,Au={...Ft,getAnimatableNone:a=>{const r=a.match(gS);return r?r.map(pS).join(" "):a}},Tu={...Ft,getAnimatableNone:a=>{const r=Ft.parse(a);return Ft.createTransformer(a)(r.map(o=>typeof o=="number"?0:typeof o=="object"?{...o,alpha:1}:o))}},Op={...fi,transform:Math.round},yS={rotate:wn,pathRotation:wn,rotateX:wn,rotateY:wn,rotateZ:wn,scale:Xs,scaleX:Xs,scaleY:Xs,scaleZ:Xs,skew:wn,skewX:wn,skewY:wn,distance:K,translateX:K,translateY:K,translateZ:K,x:K,y:K,z:K,perspective:K,transformPerspective:K,opacity:br,originX:Ap,originY:Ap,originZ:K},lo={borderWidth:K,borderTopWidth:K,borderRightWidth:K,borderBottomWidth:K,borderLeftWidth:K,borderRadius:K,borderTopLeftRadius:K,borderTopRightRadius:K,borderBottomRightRadius:K,borderBottomLeftRadius:K,width:K,maxWidth:K,height:K,maxHeight:K,top:K,right:K,bottom:K,left:K,inset:K,insetBlock:K,insetBlockStart:K,insetBlockEnd:K,insetInline:K,insetInlineStart:K,insetInlineEnd:K,padding:K,paddingTop:K,paddingRight:K,paddingBottom:K,paddingLeft:K,paddingBlock:K,paddingBlockStart:K,paddingBlockEnd:K,paddingInline:K,paddingInlineStart:K,paddingInlineEnd:K,margin:K,marginTop:K,marginRight:K,marginBottom:K,marginLeft:K,marginBlock:K,marginBlockStart:K,marginBlockEnd:K,marginInline:K,marginInlineStart:K,marginInlineEnd:K,fontSize:K,backgroundPositionX:K,backgroundPositionY:K,...yS,zIndex:Op,fillOpacity:br,strokeOpacity:br,numOctaves:Op},vS={...lo,color:Fe,backgroundColor:Fe,outlineColor:Fe,fill:Fe,stroke:Fe,borderColor:Fe,borderTopColor:Fe,borderRightColor:Fe,borderBottomColor:Fe,borderLeftColor:Fe,filter:Au,WebkitFilter:Au,mask:Tu,WebkitMask:Tu},Oy=a=>vS[a],bS=new Set([Au,Tu]);function Vy(a,r){let l=Oy(a);return bS.has(l)||(l=Ft),l.getAnimatableNone?l.getAnimatableNone(r):void 0}const SS=new Set(["auto","none","0"]);function wS(a,r,l){let o=0,u;for(;o<a.length&&!u;){const m=a[o];typeof m=="string"&&!SS.has(m)&&di(m).values.length&&(u=a[o]),o++}if(u&&l)for(const m of r)a[m]=Vy(l,u)}class AS extends Xu{constructor(r,l,o,u,m){super(r,l,o,u,m,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:l,name:o}=this;if(!l||!l.current)return;super.readKeyframes();for(let v=0;v<r.length;v++){let b=r[v];if(typeof b=="string"&&(b=b.trim(),Hu(b))){const w=My(b,l.current);w!==void 0&&(r[v]=w),v===r.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!Dy.has(o)||r.length!==2)return;const[u,m]=r,h=Lp(u),p=Lp(m),y=wp(u),f=wp(m);if(y!==f&&Kn[o]){this.needsMeasurement=!0;return}if(h!==p)if(Dp(h)&&Dp(p))for(let v=0;v<r.length;v++){const b=r[v];typeof b=="string"&&(r[v]=parseFloat(b))}else Kn[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:l}=this,o=[];for(let u=0;u<r.length;u++)(r[u]===null||mS(r[u]))&&o.push(u);o.length&&wS(r,o,l)}measureInitialState(){const{element:r,unresolvedKeyframes:l,name:o}=this;if(!r||!r.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Kn[o](r.measureViewportBox(),window.getComputedStyle(r.current)),l[0]=this.measuredOrigin;const u=l[l.length-1];u!==void 0&&r.getValue(o,u).jump(u,!1)}measureEndState(){const{element:r,name:l,unresolvedKeyframes:o}=this;if(!r||!r.current)return;const u=r.getValue(l);u&&u.jump(this.measuredOrigin,!1);const m=o.length-1,h=o[m];o[m]=Kn[l](r.measureViewportBox(),window.getComputedStyle(r.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,y])=>{r.getValue(p).set(y)}),this.resolveNoneKeyframes()}}const Zu=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function Py(a,r,l){if(a==null)return[];if(a instanceof EventTarget)return[a];if(typeof a=="string"){let o=document;const u=l?.[a]??o.querySelectorAll(a);return u?Array.from(u):[]}return Array.from(a).filter(o=>o!=null)}const Cu=(a,r)=>r&&typeof a=="number"?r.transform(a):a;function TS(a){return Xg(a)&&"offsetHeight"in a&&!("ownerSVGElement"in a)}const{schedule:Ju}=ry(queueMicrotask,!1),Xt={x:!1,y:!1};function Hy(){return Xt.x||Xt.y}function CS(a){return a==="x"||a==="y"?Xt[a]?null:(Xt[a]=!0,()=>{Xt[a]=!1}):Xt.x||Xt.y?null:(Xt.x=Xt.y=!0,()=>{Xt.x=Xt.y=!1})}function Gy(a,r){const l=Py(a),o=new AbortController,u={passive:!0,...r,signal:o.signal};return[l,u,()=>o.abort()]}function xS(a){return!(a.pointerType==="touch"||Hy())}function ES(a,r,l={}){const[o,u,m]=Gy(a,l);return o.forEach(h=>{let p=!1,y=!1,f;const v=()=>{h.removeEventListener("pointerleave",M)},b=H=>{f&&(f(H),f=void 0),v()},w=H=>{p=!1,window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",w),y&&(y=!1,b(H))},E=()=>{p=!0,window.addEventListener("pointerup",w,u),window.addEventListener("pointercancel",w,u)},M=H=>{if(H.pointerType!=="touch"){if(p){y=!0;return}b(H)}},V=H=>{if(!xS(H))return;y=!1;const P=r(h,H);typeof P=="function"&&(f=P,h.addEventListener("pointerleave",M,u))};h.addEventListener("pointerenter",V,u),h.addEventListener("pointerdown",E,u)}),m}const _y=(a,r)=>r?a===r?!0:_y(a,r.parentElement):!1,Wu=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,US=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function zS(a){return US.has(a.tagName)||a.isContentEditable===!0}const MS=new Set(["INPUT","SELECT","TEXTAREA"]);function DS(a){return MS.has(a.tagName)||a.isContentEditable===!0}const Qs=new WeakSet;function Vp(a){return r=>{r.key==="Enter"&&a(r)}}function Zc(a,r){a.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const RS=(a,r)=>{const l=a.currentTarget;if(!l)return;const o=Vp(()=>{if(Qs.has(l))return;Zc(l,"down");const u=Vp(()=>{Zc(l,"up")}),m=()=>Zc(l,"cancel");l.addEventListener("keyup",u,r),l.addEventListener("blur",m,r)});l.addEventListener("keydown",o,r),l.addEventListener("blur",()=>l.removeEventListener("keydown",o),r)};function Pp(a){return Wu(a)&&!Hy()}const Hp=new WeakSet;function kS(a,r,l={}){const[o,u,m]=Gy(a,l),h=p=>{const y=p.currentTarget;if(!Pp(p)||Hp.has(p))return;Qs.add(y),l.stopPropagation&&Hp.add(p);const f=r(y,p),v={...u,capture:!0},b=(M,V)=>{window.removeEventListener("pointerup",w,v),window.removeEventListener("pointercancel",E,v),Qs.has(y)&&Qs.delete(y),Pp(M)&&typeof f=="function"&&f(M,{success:V})},w=M=>{b(M,y===window||y===document||l.useGlobalTarget||_y(y,M.target))},E=M=>{b(M,!1)};window.addEventListener("pointerup",w,v),window.addEventListener("pointercancel",E,v)};return o.forEach(p=>{(l.useGlobalTarget?window:p).addEventListener("pointerdown",h,u),TS(p)&&(p.addEventListener("focus",f=>RS(f,u)),!zS(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),m}function $u(a){return Xg(a)&&"ownerSVGElement"in a}const Zs=new WeakMap;let Js;const Ny=(a,r,l)=>(o,u)=>u&&u[0]?u[0][a+"Size"]:$u(o)&&"getBBox"in o?o.getBBox()[r]:o[l],jS=Ny("inline","width","offsetWidth"),BS=Ny("block","height","offsetHeight");function LS({target:a,borderBoxSize:r}){Zs.get(a)?.forEach(l=>{l(a,{get width(){return jS(a,r)},get height(){return BS(a,r)}})})}function OS(a){a.forEach(LS)}function VS(){typeof ResizeObserver>"u"||(Js=new ResizeObserver(OS))}function PS(a,r){Js||VS();const l=Py(a);return l.forEach(o=>{let u=Zs.get(o);u||(u=new Set,Zs.set(o,u)),u.add(r),Js?.observe(o)}),()=>{l.forEach(o=>{const u=Zs.get(o);u?.delete(r),u?.size||Js?.unobserve(o)})}}const Ws=new Set;let ci;function HS(){ci=()=>{const a={get width(){return window.innerWidth},get height(){return window.innerHeight}};Ws.forEach(r=>r(a))},window.addEventListener("resize",ci)}function GS(a){return Ws.add(a),ci||HS(),()=>{Ws.delete(a),!Ws.size&&typeof ci=="function"&&(window.removeEventListener("resize",ci),ci=void 0)}}function Gp(a,r){return typeof a=="function"?GS(a):PS(a,r)}function _S(a){return $u(a)&&a.tagName==="svg"}const NS=[...Ly,Fe,Ft],IS=a=>NS.find(By(a)),_p=()=>({translate:0,scale:1,origin:0,originPoint:0}),ui=()=>({x:_p(),y:_p()}),Np=()=>({min:0,max:0}),Ke=()=>({x:Np(),y:Np()}),qS=new WeakMap;function yo(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function Sr(a){return typeof a=="string"||Array.isArray(a)}const ed=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],td=["initial",...ed];function vo(a){return yo(a.animate)||td.some(r=>Sr(a[r]))}function Iy(a){return!!(vo(a)||a.variants)}function XS(a,r,l){for(const o in r){const u=r[o],m=l[o];if(at(u))a.addValue(o,u);else if(at(m))a.addValue(o,hi(u,{owner:a}));else if(m!==u)if(a.hasValue(o)){const h=a.getValue(o);h.liveStyle===!0?h.jump(u):h.hasAnimated||h.set(u)}else{const h=a.getStaticValue(o);a.addValue(o,hi(h!==void 0?h:u,{owner:a}))}}for(const o in l)r[o]===void 0&&a.removeValue(o);return r}const co={current:null},nd={current:!1},FS=typeof window<"u";function qy(){if(nd.current=!0,!!FS)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),r=()=>co.current=a.matches;a.addEventListener("change",r),r()}else co.current=!1}const Ip=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let uo={};function Xy(a){uo=a}function YS(){return uo}class KS{scrapeMotionValuesFromProps(r,l,o){return{}}constructor({parent:r,props:l,presenceContext:o,reducedMotionConfig:u,skipAnimations:m,blockInitialAnimation:h,visualState:p},y={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Xu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const E=lt.now();this.renderScheduledAt<E&&(this.renderScheduledAt=E,De.render(this.render,!1,!0))};const{latestValues:f,renderState:v}=p;this.latestValues=f,this.baseTarget={...f},this.initialValues=l.initial?{...f}:{},this.renderState=v,this.parent=r,this.props=l,this.presenceContext=o,this.depth=r?r.depth+1:0,this.reducedMotionConfig=u,this.skipAnimationsConfig=m,this.options=y,this.blockInitialAnimation=!!h,this.isControllingVariants=vo(l),this.isVariantNode=Iy(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:b,...w}=this.scrapeMotionValuesFromProps(l,{},this);for(const E in w){const M=w[E];f[E]!==void 0&&at(M)&&M.set(f[E])}}mount(r){if(this.hasBeenMounted)for(const l in this.initialValues)this.values.get(l)?.jump(this.initialValues[l]),this.latestValues[l]=this.initialValues[l];this.current=r,qS.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,o)=>this.bindToMotionValue(o,l)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(nd.current||qy(),this.shouldReduceMotion=co.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Zn(this.notifyUpdate),Zn(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const l=this.features[r];l&&(l.unmount(),l.isMounted=!1)}this.current=null}addChild(r){this.children.add(r),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(r)}removeChild(r){this.children.delete(r),this.enteringChildren&&this.enteringChildren.delete(r)}bindToMotionValue(r,l){if(this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)(),l.accelerate&&Ey.has(r)&&this.current instanceof HTMLElement){const{factory:h,keyframes:p,times:y,ease:f,duration:v}=l.accelerate,b=new Cy({element:this.current,name:r,keyframes:p,times:y,ease:f,duration:Ut(v)}),w=h(b);this.valueSubscriptions.set(r,()=>{w(),b.cancel()});return}const o=gi.has(r);o&&this.onBindTransform&&this.onBindTransform();const u=l.on("change",h=>{this.latestValues[r]=h,this.props.onUpdate&&De.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let m;typeof window<"u"&&window.MotionCheckAppearSync&&(m=window.MotionCheckAppearSync(this,r,l)),this.valueSubscriptions.set(r,()=>{u(),m&&m()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in uo){const l=uo[r];if(!l)continue;const{isEnabled:o,Feature:u}=l;if(!this.features[r]&&u&&o(this.props)&&(this.features[r]=new u(this)),this.features[r]){const m=this.features[r];m.isMounted?m.update():(m.mount(),m.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ke()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,l){this.latestValues[r]=l}update(r,l){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let o=0;o<Ip.length;o++){const u=Ip[o];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const m="on"+u,h=r[m];h&&(this.propEventSubscriptions[u]=this.on(u,h))}this.prevMotionValues=XS(this,this.scrapeMotionValuesFromProps(r,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(r),()=>l.variantChildren.delete(r)}addValue(r,l){const o=this.values.get(r);l!==o&&(o&&this.removeValue(r),this.bindToMotionValue(r,l),this.values.set(r,l),this.latestValues[r]=l.get())}removeValue(r){this.values.delete(r);const l=this.valueSubscriptions.get(r);l&&(l(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,l){if(this.props.values&&this.props.values[r])return this.props.values[r];let o=this.values.get(r);return o===void 0&&l!==void 0&&(o=hi(l===null?void 0:l,{owner:this}),this.addValue(r,o)),o}readValue(r,l){let o=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:this.getBaseTargetFromProps(this.props,r)??this.readValueFromInstance(this.current,r,this.options);return o!=null&&(typeof o=="string"&&(qg(o)||Fg(o))?o=parseFloat(o):!IS(o)&&Ft.test(l)&&(o=Vy(r,l)),this.setBaseTarget(r,at(o)?o.get():o)),at(o)?o.get():o}setBaseTarget(r,l){this.baseTarget[r]=l}getBaseTarget(r){const{initial:l}=this.props;let o;if(typeof l=="string"||typeof l=="object"){const m=Ku(this.props,l,this.presenceContext?.custom);m&&(o=m[r])}if(l&&o!==void 0)return o;const u=this.getBaseTargetFromProps(this.props,r);return u!==void 0&&!at(u)?u:this.initialValues[r]!==void 0&&o===void 0?void 0:this.baseTarget[r]}on(r,l){return this.events[r]||(this.events[r]=new Ou),this.events[r].add(l)}notify(r,...l){this.events[r]&&this.events[r].notify(...l)}scheduleRenderMicrotask(){Ju.render(this.render)}}class Fy extends KS{constructor(){super(...arguments),this.KeyframeResolver=AS}sortInstanceNodePosition(r,l){return r.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(r,l){const o=r.style;return o?o[l]:void 0}removeValueFromRenderState(r,{vars:l,style:o}){delete l[r],delete o[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;at(r)&&(this.childSubscription=r.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}class Jn{constructor(r){this.isMounted=!1,this.node=r}update(){}}function Yy({top:a,left:r,right:l,bottom:o}){return{x:{min:r,max:l},y:{min:a,max:o}}}function QS({x:a,y:r}){return{top:r.min,right:a.max,bottom:r.max,left:a.min}}function ZS(a,r){if(!r)return a;const l=r({x:a.left,y:a.top}),o=r({x:a.right,y:a.bottom});return{top:l.y,left:l.x,bottom:o.y,right:o.x}}function Jc(a){return a===void 0||a===1}function xu({scale:a,scaleX:r,scaleY:l}){return!Jc(a)||!Jc(r)||!Jc(l)}function va(a){return xu(a)||Ky(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function Ky(a){return qp(a.x)||qp(a.y)}function qp(a){return a&&a!=="0%"}function ho(a,r,l){const o=a-l,u=r*o;return l+u}function Xp(a,r,l,o,u){return u!==void 0&&(a=ho(a,u,o)),ho(a,l,o)+r}function Eu(a,r=0,l=1,o,u){a.min=Xp(a.min,r,l,o,u),a.max=Xp(a.max,r,l,o,u)}function Qy(a,{x:r,y:l}){Eu(a.x,r.translate,r.scale,r.originPoint),Eu(a.y,l.translate,l.scale,l.originPoint)}const Fp=.999999999999,Yp=1.0000000000001;function JS(a,r,l,o=!1){const u=l.length;if(!u)return;r.x=r.y=1;let m,h;for(let p=0;p<u;p++){m=l[p],h=m.projectionDelta;const{visualElement:y}=m.options;y&&y.props.style&&y.props.style.display==="contents"||(o&&m.options.layoutScroll&&m.scroll&&m!==m.root&&(Wt(a.x,-m.scroll.offset.x),Wt(a.y,-m.scroll.offset.y)),h&&(r.x*=h.x.scale,r.y*=h.y.scale,Qy(a,h)),o&&va(m.latestValues)&&$s(a,m.latestValues,m.layout?.layoutBox))}r.x<Yp&&r.x>Fp&&(r.x=1),r.y<Yp&&r.y>Fp&&(r.y=1)}function Wt(a,r){a.min+=r,a.max+=r}function Kp(a,r,l,o,u=.5){const m=Me(a.min,a.max,u);Eu(a,r,l,m,o)}function Qp(a,r){return typeof a=="string"?parseFloat(a)/100*(r.max-r.min):a}function $s(a,r,l){const o=l??a;Kp(a.x,Qp(r.x,o.x),r.scaleX,r.scale,r.originX),Kp(a.y,Qp(r.y,o.y),r.scaleY,r.scale,r.originY)}function Zy(a,r){return Yy(ZS(a.getBoundingClientRect(),r))}function WS(a,r,l){const o=Zy(a,l),{scroll:u}=r;return u&&(Wt(o.x,u.offset.x),Wt(o.y,u.offset.y)),o}const $S={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ew=pi.length;function tw(a,r,l){let o="",u=!0;for(let h=0;h<ew;h++){const p=pi[h],y=a[p];if(y===void 0)continue;let f=!0;if(typeof y=="number")f=y===(p.startsWith("scale")?1:0);else{const v=parseFloat(y);f=p.startsWith("scale")?v===1:v===0}if(!f||l){const v=Cu(y,lo[p]);if(!f){u=!1;const b=$S[p]||p;o+=`${b}(${v}) `}l&&(r[p]=v)}}const m=a.pathRotation;return m&&(u=!1,o+=`rotate(${Cu(m,lo.pathRotation)}) `),o=o.trim(),l?o=l(r,u?"":o):u&&(o="none"),o}function ad(a,r,l){const{style:o,vars:u,transformOrigin:m}=a;let h=!1,p=!1;for(const y in r){const f=r[y];if(gi.has(y)){h=!0;continue}else if(oy(y)){u[y]=f;continue}else{const v=Cu(f,lo[y]);y.startsWith("origin")?(p=!0,m[y]=v):o[y]=v}}if(r.transform||(h||l?o.transform=tw(r,a.transform,l):o.transform&&(o.transform="none")),p){const{originX:y="50%",originY:f="50%",originZ:v=0}=m;o.transformOrigin=`${y} ${f} ${v}`}}function Jy(a,{style:r,vars:l},o,u){const m=a.style;let h;for(h in r)m[h]=r[h];u?.applyProjectionStyles(m,o);for(h in l)m.setProperty(h,l[h])}function Zp(a,r){return r.max===r.min?0:a/(r.max-r.min)*100}const hr={correct:(a,r)=>{if(!r.target)return a;if(typeof a=="string")if(K.test(a))a=parseFloat(a);else return a;const l=Zp(a,r.target.x),o=Zp(a,r.target.y);return`${l}% ${o}%`}},nw={correct:(a,{treeScale:r,projectionDelta:l})=>{const o=a,u=Ft.parse(a);if(u.length>5)return o;const m=Ft.createTransformer(a),h=typeof u[0]!="number"?1:0,p=l.x.scale*r.x,y=l.y.scale*r.y;u[0+h]/=p,u[1+h]/=y;const f=Me(p,y,.5);return typeof u[2+h]=="number"&&(u[2+h]/=f),typeof u[3+h]=="number"&&(u[3+h]/=f),m(u)}},Uu={borderRadius:{...hr,applyTo:[...Zu]},borderTopLeftRadius:hr,borderTopRightRadius:hr,borderBottomLeftRadius:hr,borderBottomRightRadius:hr,boxShadow:nw};function Wy(a,{layout:r,layoutId:l}){return gi.has(a)||a.startsWith("origin")||(r||l!==void 0)&&(!!Uu[a]||a==="opacity")}function id(a,r,l){const o=a.style,u=r?.style,m={};if(!o)return m;for(const h in o)(at(o[h])||u&&at(u[h])||Wy(h,a)||l?.getValue(h)?.liveStyle!==void 0)&&(m[h]=o[h]);return m}function aw(a){return window.getComputedStyle(a)}class iw extends Fy{constructor(){super(...arguments),this.type="html",this.renderInstance=Jy}mount(r){po(!!r.style),super.mount(r)}readValueFromInstance(r,l){if(gi.has(l))return this.projection?.isProjecting?mu(l):C2(r,l);{const o=aw(r),u=(oy(l)?o.getPropertyValue(l):o[l])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(r,{transformPagePoint:l}){return Zy(r,l)}build(r,l,o){ad(r,l,o.transformTemplate)}scrapeMotionValuesFromProps(r,l,o){return id(r,l,o)}}const rw={offset:"stroke-dashoffset",array:"stroke-dasharray"},sw={offset:"strokeDashoffset",array:"strokeDasharray"};function ow(a,r,l=1,o=0,u=!0){a.pathLength=1;const m=u?rw:sw;a[m.offset]=`${-o}`,a[m.array]=`${r} ${l}`}const lw=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function $y(a,{attrX:r,attrY:l,attrScale:o,pathLength:u,pathSpacing:m=1,pathOffset:h=0,...p},y,f,v){if(ad(a,p,f),y){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:b,style:w}=a;b.transform&&(w.transform=b.transform,delete b.transform),(w.transform||b.transformOrigin)&&(w.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),w.transform&&(w.transformBox=v?.transformBox??"fill-box",delete b.transformBox);for(const E of lw)b[E]!==void 0&&(w[E]=b[E],delete b[E]);r!==void 0&&(b.x=r),l!==void 0&&(b.y=l),o!==void 0&&(b.scale=o),u!==void 0&&ow(b,u,m,h,!1)}const e0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),t0=a=>typeof a=="string"&&a.toLowerCase()==="svg";function cw(a,r,l,o){Jy(a,r,void 0,o);for(const u in r.attrs)a.setAttribute(e0.has(u)?u:Qu(u),r.attrs[u])}function n0(a,r,l){const o=id(a,r,l);for(const u in a)if(at(a[u])||at(r[u])){const m=pi.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;o[m]=a[u]}return o}class uw extends Fy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ke}getBaseTargetFromProps(r,l){return r[l]}readValueFromInstance(r,l){if(gi.has(l)){const o=Oy(l);return o&&o.default||0}return l=e0.has(l)?l:Qu(l),r.getAttribute(l)}scrapeMotionValuesFromProps(r,l,o){return n0(r,l,o)}build(r,l,o){$y(r,l,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(r,l,o,u){cw(r,l,o,u)}mount(r){this.isSVGTag=t0(r.tagName),super.mount(r)}}const dw=td.length;function a0(a){if(!a)return;if(!a.isControllingVariants){const l=a.parent?a0(a.parent)||{}:{};return a.props.initial!==void 0&&(l.initial=a.props.initial),l}const r={};for(let l=0;l<dw;l++){const o=td[l],u=a.props[o];(Sr(u)||u===!1)&&(r[o]=u)}return r}function i0(a,r){if(!Array.isArray(r))return!1;const l=r.length;if(l!==a.length)return!1;for(let o=0;o<l;o++)if(r[o]!==a[o])return!1;return!0}const hw=[...ed].reverse(),mw=ed.length;function fw(a){return r=>Promise.all(r.map(({animation:l,options:o})=>dS(a,l,o)))}function pw(a){let r=fw(a),l=Jp(),o=!0,u=!1;const m=f=>(v,b)=>{const w=Aa(a,b,f==="exit"?a.presenceContext?.custom:void 0);if(w){const{transition:E,transitionEnd:M,...V}=w;v={...v,...V,...M}}return v};function h(f){r=f(a)}function p(f){const{props:v}=a,b=a0(a.parent)||{},w=[],E=new Set;let M={},V=1/0;for(let P=0;P<mw;P++){const N=hw[P],G=l[N],q=v[N]!==void 0?v[N]:b[N],ne=Sr(q),le=N===f?G.isActive:null;le===!1&&(V=P);let Y=q===b[N]&&q!==v[N]&&ne;if(Y&&(o||u)&&a.manuallyAnimateOnMount&&(Y=!1),G.protectedKeys={...M},!G.isActive&&le===null||!q&&!G.prevProp||yo(q)||typeof q=="boolean")continue;if(N==="exit"&&G.isActive&&le!==!0){G.prevResolvedValues&&(M={...M,...G.prevResolvedValues});continue}const W=gw(G.prevProp,q);let Ce=W||N===f&&G.isActive&&!Y&&ne||P>V&&ne,te=!1;const ve=Array.isArray(q)?q:[q];let we=ve.reduce(m(N),{});le===!1&&(we={});const{prevResolvedValues:rt={}}=G,_e={...rt,...we},Ve=X=>{Ce=!0,E.has(X)&&(te=!0,E.delete(X)),G.needsAnimating[X]=!0;const se=a.getValue(X);se&&(se.liveStyle=!1)};for(const X in _e){const se=we[X],fe=rt[X];if(M.hasOwnProperty(X))continue;let C=!1;bu(se)&&bu(fe)?C=!i0(se,fe)||W:C=se!==fe,C?se!=null?Ve(X):E.add(X):se!==void 0&&E.has(X)?Ve(X):G.protectedKeys[X]=!0}G.prevProp=q,G.prevResolvedValues=we,G.isActive&&(M={...M,...we}),(o||u)&&a.blockInitialAnimation&&(Ce=!1);const k=Y&&W;Ce&&(!k||te)&&w.push(...ve.map(X=>{const se={type:N};if(typeof X=="string"&&(o||u)&&!k&&a.manuallyAnimateOnMount&&a.parent){const{parent:fe}=a,C=Aa(fe,X);if(fe.enteringChildren&&C){const{delayChildren:O}=C.transition||{};se.delay=Uy(fe.enteringChildren,a,O)}}return{animation:X,options:se}}))}if(E.size){const P={};if(typeof v.initial!="boolean"){const N=Aa(a,Array.isArray(v.initial)?v.initial[0]:v.initial);N&&N.transition&&(P.transition=N.transition)}E.forEach(N=>{const G=a.getBaseTarget(N),q=a.getValue(N);q&&(q.liveStyle=!0),P[N]=G??null}),w.push({animation:P})}let H=!!w.length;return o&&(v.initial===!1||v.initial===v.animate)&&!a.manuallyAnimateOnMount&&(H=!1),o=!1,u=!1,H?r(w):Promise.resolve()}function y(f,v){if(l[f].isActive===v)return Promise.resolve();a.variantChildren?.forEach(w=>w.animationState?.setActive(f,v)),l[f].isActive=v;const b=p(f);for(const w in l)l[w].protectedKeys={};return b}return{animateChanges:p,setActive:y,setAnimateFunction:h,getState:()=>l,reset:()=>{l=Jp(),u=!0}}}function gw(a,r){return typeof r=="string"?r!==a:Array.isArray(r)?!i0(r,a):!1}function ya(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Jp(){return{animate:ya(!0),whileInView:ya(),whileHover:ya(),whileTap:ya(),whileDrag:ya(),whileFocus:ya(),exit:ya()}}function zu(a,r){a.min=r.min,a.max=r.max}function qt(a,r){zu(a.x,r.x),zu(a.y,r.y)}function Wp(a,r){a.translate=r.translate,a.scale=r.scale,a.originPoint=r.originPoint,a.origin=r.origin}const r0=1e-4,yw=1-r0,vw=1+r0,s0=.01,bw=0-s0,Sw=0+s0;function ct(a){return a.max-a.min}function ww(a,r,l){return Math.abs(a-r)<=l}function $p(a,r,l,o=.5){a.origin=o,a.originPoint=Me(r.min,r.max,a.origin),a.scale=ct(l)/ct(r),a.translate=Me(l.min,l.max,a.origin)-a.originPoint,(a.scale>=yw&&a.scale<=vw||isNaN(a.scale))&&(a.scale=1),(a.translate>=bw&&a.translate<=Sw||isNaN(a.translate))&&(a.translate=0)}function gr(a,r,l,o){$p(a.x,r.x,l.x,o?o.originX:void 0),$p(a.y,r.y,l.y,o?o.originY:void 0)}function eg(a,r,l,o=0){const u=o?Me(l.min,l.max,o):l.min;a.min=u+r.min,a.max=a.min+ct(r)}function Aw(a,r,l,o){eg(a.x,r.x,l.x,o?.x),eg(a.y,r.y,l.y,o?.y)}function tg(a,r,l,o=0){const u=o?Me(l.min,l.max,o):l.min;a.min=r.min-u,a.max=a.min+ct(r)}function mo(a,r,l,o){tg(a.x,r.x,l.x,o?.x),tg(a.y,r.y,l.y,o?.y)}function ng(a,r,l,o,u){return a-=r,a=ho(a,1/l,o),u!==void 0&&(a=ho(a,1/u,o)),a}function Tw(a,r=0,l=1,o=.5,u,m=a,h=a){if($t.test(r)&&(r=parseFloat(r),r=Me(h.min,h.max,r/100)-h.min),typeof r!="number")return;let p=Me(m.min,m.max,o);a===m&&(p-=r),a.min=ng(a.min,r,l,p,u),a.max=ng(a.max,r,l,p,u)}function ag(a,r,[l,o,u],m,h){Tw(a,r[l],r[o],r[u],r.scale,m,h)}const Cw=["x","scaleX","originX"],xw=["y","scaleY","originY"];function ig(a,r,l,o){ag(a.x,r,Cw,l?l.x:void 0,o?o.x:void 0),ag(a.y,r,xw,l?l.y:void 0,o?o.y:void 0)}function rg(a){return a.translate===0&&a.scale===1}function o0(a){return rg(a.x)&&rg(a.y)}function sg(a,r){return a.min===r.min&&a.max===r.max}function Ew(a,r){return sg(a.x,r.x)&&sg(a.y,r.y)}function og(a,r){return Math.round(a.min)===Math.round(r.min)&&Math.round(a.max)===Math.round(r.max)}function l0(a,r){return og(a.x,r.x)&&og(a.y,r.y)}function lg(a){return ct(a.x)/ct(a.y)}function cg(a,r){return a.translate===r.translate&&a.scale===r.scale&&a.originPoint===r.originPoint}function Jt(a){return[a("x"),a("y")]}function Uw(a,r,l){let o="";const u=a.x.translate/r.x,m=a.y.translate/r.y,h=l?.z||0;if((u||m||h)&&(o=`translate3d(${u}px, ${m}px, ${h}px) `),(r.x!==1||r.y!==1)&&(o+=`scale(${1/r.x}, ${1/r.y}) `),l){const{transformPerspective:f,rotate:v,pathRotation:b,rotateX:w,rotateY:E,skewX:M,skewY:V}=l;f&&(o=`perspective(${f}px) ${o}`),v&&(o+=`rotate(${v}deg) `),b&&(o+=`rotate(${b}deg) `),w&&(o+=`rotateX(${w}deg) `),E&&(o+=`rotateY(${E}deg) `),M&&(o+=`skewX(${M}deg) `),V&&(o+=`skewY(${V}deg) `)}const p=a.x.scale*r.x,y=a.y.scale*r.y;return(p!==1||y!==1)&&(o+=`scale(${p}, ${y})`),o||"none"}const zw=Zu.length,ug=a=>typeof a=="string"?parseFloat(a):a,dg=a=>typeof a=="number"||K.test(a);function Mw(a,r,l,o,u,m){u?(a.opacity=Me(0,l.opacity??1,Dw(o)),a.opacityExit=Me(r.opacity??1,0,Rw(o))):m&&(a.opacity=Me(r.opacity??1,l.opacity??1,o));for(let h=0;h<zw;h++){const p=Zu[h];let y=hg(r,p),f=hg(l,p);if(y===void 0&&f===void 0)continue;y||(y=0),f||(f=0),y===0||f===0||dg(y)===dg(f)?(a[p]=Math.max(Me(ug(y),ug(f),o),0),($t.test(f)||$t.test(y))&&(a[p]+="%")):a[p]=f}(r.rotate||l.rotate)&&(a.rotate=Me(r.rotate||0,l.rotate||0,o))}function hg(a,r){return a[r]!==void 0?a[r]:a.borderRadius}const Dw=c0(0,.5,ty),Rw=c0(.5,.95,Gt);function c0(a,r,l){return o=>o<a?0:o>r?1:l(vr(a,r,o))}function kw(a,r,l){const o=at(a)?a:hi(a);return o.start(Yu("",o,r,l)),o.animation}function wr(a,r,l,o={passive:!0}){return a.addEventListener(r,l,o),()=>a.removeEventListener(r,l,o)}const jw=(a,r)=>a.depth-r.depth;class Bw{constructor(){this.children=[],this.isDirty=!1}add(r){Lu(this.children,r),this.isDirty=!0}remove(r){ao(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(jw),this.isDirty=!1,this.children.forEach(r)}}function Lw(a,r){const l=lt.now(),o=({timestamp:u})=>{const m=u-l;m>=r&&(Zn(o),a(m-r))};return De.setup(o,!0),()=>Zn(o)}function eo(a){return at(a)?a.get():a}class Ow{constructor(){this.members=[]}add(r){Lu(this.members,r);for(let l=this.members.length-1;l>=0;l--){const o=this.members[l];if(o===r||o===this.lead||o===this.prevLead)continue;const u=o.instance;(!u||u.isConnected===!1)&&!o.snapshot&&(ao(this.members,o),o.unmount())}r.scheduleRender()}remove(r){if(ao(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(r){for(let l=this.members.indexOf(r)-1;l>=0;l--){const o=this.members[l];if(o.isPresent!==!1&&o.instance?.isConnected!==!1)return this.promote(o),!0}return!1}promote(r,l){const o=this.lead;if(r!==o&&(this.prevLead=o,this.lead=r,r.show(),o)){o.updateSnapshot(),r.scheduleRender();const{layoutDependency:u}=o.options,{layoutDependency:m}=r.options;(u===void 0||u!==m)&&(r.resumeFrom=o,l&&(o.preserveOpacity=!0),o.snapshot&&(r.snapshot=o.snapshot,r.snapshot.latestValues=o.animationValues||o.latestValues),r.root?.isUpdating&&(r.isLayoutDirty=!0)),r.options.crossfade===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(r=>{r.options.onExitComplete?.(),r.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(r=>r.instance&&r.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const to={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Wc=["","X","Y","Z"],Vw=1e3;let Pw=0;function $c(a,r,l,o){const{latestValues:u}=r;u[a]&&(l[a]=u[a],r.setStaticValue(a,0),o&&(o[a]=0))}function u0(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:r}=a.options;if(!r)return;const l=ky(r);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:u,layoutId:m}=a.options;window.MotionCancelOptimisedAnimation(l,"transform",De,!(u||m))}const{parent:o}=a;o&&!o.hasCheckedOptimisedAppear&&u0(o)}function d0({attachResizeListener:a,defaultParent:r,measureScroll:l,checkIsScrollRoot:o,resetTransform:u}){return class{constructor(h={},p=r?.()){this.id=Pw++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(_w),this.nodes.forEach(Yw),this.nodes.forEach(Kw),this.nodes.forEach(Nw)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=h,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let y=0;y<this.path.length;y++)this.path[y].shouldResetTransform=!0;this.root===this&&(this.nodes=new Bw)}addEventListener(h,p){return this.eventHandlers.has(h)||this.eventHandlers.set(h,new Ou),this.eventHandlers.get(h).add(p)}notifyListeners(h,...p){const y=this.eventHandlers.get(h);y&&y.notify(...p)}hasListeners(h){return this.eventHandlers.has(h)}mount(h){if(this.instance)return;this.isSVG=$u(h)&&!_S(h),this.instance=h;const{layoutId:p,layout:y,visualElement:f}=this.options;if(f&&!f.current&&f.mount(h),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(y||p)&&(this.isLayoutDirty=!0),a){let v,b=0;const w=()=>this.root.updateBlockedByResize=!1;De.read(()=>{b=window.innerWidth}),a(h,()=>{const E=window.innerWidth;E!==b&&(b=E,this.root.updateBlockedByResize=!0,v&&v(),v=Lw(w,250),to.hasAnimatedSinceResize&&(to.hasAnimatedSinceResize=!1,this.nodes.forEach(pg)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&f&&(p||y)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:b,hasRelativeLayoutChanged:w,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||f.getDefaultTransition()||$w,{onLayoutAnimationStart:V,onLayoutAnimationComplete:H}=f.getProps(),P=!this.targetLayout||!l0(this.targetLayout,E),N=!b&&w;if(this.options.layoutRoot||this.resumeFrom||N||b&&(P||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const G={...Fu(M,"layout"),onPlay:V,onComplete:H};(f.shouldReduceMotion||this.options.layoutRoot)&&(G.delay=0,G.type=!1),this.startAnimation(G),this.setAnimationOrigin(v,N,G.path)}else b||pg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const h=this.getStack();h&&h.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Zn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Qw),this.animationId++)}getTransformTemplate(){const{visualElement:h}=this.options;return h&&h.getProps().transformTemplate}willUpdate(h=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&u0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const b=this.path[v];b.shouldResetTransform=!0,(typeof b.latestValues.x=="string"||typeof b.latestValues.y=="string")&&(b.isLayoutDirty=!0),b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:p,layout:y}=this.options;if(p===void 0&&!y)return;const f=this.getTransformTemplate();this.prevTransformTemplateValue=f?f(this.latestValues,""):void 0,this.updateSnapshot(),h&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const y=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),y&&this.nodes.forEach(qw),this.nodes.forEach(mg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(fg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Xw),this.nodes.forEach(Fw),this.nodes.forEach(Hw),this.nodes.forEach(Gw)):this.nodes.forEach(fg),this.clearAllSnapshots();const p=lt.now();nt.delta=en(0,1e3/60,p-nt.timestamp),nt.timestamp=p,nt.isProcessing=!0,qc.update.process(nt),qc.preRender.process(nt),qc.render.process(nt),nt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ju.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Iw),this.sharedNodes.forEach(Zw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,De.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){De.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ct(this.snapshot.measuredBox.x)&&!ct(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let y=0;y<this.path.length;y++)this.path[y].updateScroll();const h=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Ke()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,h?h.layoutBox:void 0)}updateScroll(h="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===h&&(p=!1),p&&this.instance){const y=o(this.instance);this.scroll={animationId:this.root.animationId,phase:h,isRoot:y,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:y}}}resetTransform(){if(!u)return;const h=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!o0(this.projectionDelta),y=this.getTransformTemplate(),f=y?y(this.latestValues,""):void 0,v=f!==this.prevTransformTemplateValue;h&&this.instance&&(p||va(this.latestValues)||v)&&(u(this.instance,f),this.shouldResetTransform=!1,this.scheduleRender())}measure(h=!0){const p=this.measurePageBox();let y=this.removeElementScroll(p);return h&&(y=this.removeTransform(y)),eA(y),{animationId:this.root.animationId,measuredBox:p,layoutBox:y,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:h}=this.options;if(!h)return Ke();const p=h.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(tA))){const{scroll:f}=this.root;f&&(Wt(p.x,f.offset.x),Wt(p.y,f.offset.y))}return p}removeElementScroll(h){const p=Ke();if(qt(p,h),this.scroll?.wasRoot)return p;for(let y=0;y<this.path.length;y++){const f=this.path[y],{scroll:v,options:b}=f;f!==this.root&&v&&b.layoutScroll&&(v.wasRoot&&qt(p,h),Wt(p.x,v.offset.x),Wt(p.y,v.offset.y))}return p}applyTransform(h,p=!1,y){const f=y||Ke();qt(f,h);for(let v=0;v<this.path.length;v++){const b=this.path[v];!p&&b.options.layoutScroll&&b.scroll&&b!==b.root&&(Wt(f.x,-b.scroll.offset.x),Wt(f.y,-b.scroll.offset.y)),va(b.latestValues)&&$s(f,b.latestValues,b.layout?.layoutBox)}return va(this.latestValues)&&$s(f,this.latestValues,this.layout?.layoutBox),f}removeTransform(h){const p=Ke();qt(p,h);for(let y=0;y<this.path.length;y++){const f=this.path[y];if(!va(f.latestValues))continue;let v;f.instance&&(xu(f.latestValues)&&f.updateSnapshot(),v=Ke(),qt(v,f.measurePageBox())),ig(p,f.latestValues,f.snapshot?.layoutBox,v)}return va(this.latestValues)&&ig(p,this.latestValues),p}setTargetDelta(h){this.targetDelta=h,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(h){this.options={...this.options,...h,crossfade:h.crossfade!==void 0?h.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==nt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(h=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const y=!!this.resumingFrom||this!==p;if(!(h||y&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:b}=this.options;if(!this.layout||!(v||b))return;this.resolvedRelativeTargetAt=nt.timestamp;const w=this.getClosestProjectingParent();w&&this.linkedParentVersion!==w.layoutVersion&&!w.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&w&&w.layout?this.createRelativeTarget(w,this.layout.layoutBox,w.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ke(),this.targetWithTransforms=Ke()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Aw(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):qt(this.target,this.layout.layoutBox),Qy(this.target,this.targetDelta)):qt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?this.createRelativeTarget(w,this.target,w.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||xu(this.parent.latestValues)||Ky(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(h,p,y){this.relativeParent=h,this.linkedParentVersion=h.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ke(),this.relativeTargetOrigin=Ke(),mo(this.relativeTargetOrigin,p,y,this.options.layoutAnchor||void 0),qt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const h=this.getLead(),p=!!this.resumingFrom||this!==h;let y=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(y=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(y=!1),this.resolvedRelativeTargetAt===nt.timestamp&&(y=!1),y)return;const{layout:f,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||v))return;qt(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,w=this.treeScale.y;JS(this.layoutCorrected,this.treeScale,this.path,p),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=Ke());const{target:E}=h;if(!E){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Wp(this.prevProjectionDelta.x,this.projectionDelta.x),Wp(this.prevProjectionDelta.y,this.projectionDelta.y)),gr(this.projectionDelta,this.layoutCorrected,E,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==w||!cg(this.projectionDelta.x,this.prevProjectionDelta.x)||!cg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(h=!0){if(this.options.visualElement?.scheduleRender(),h){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ui(),this.projectionDelta=ui(),this.projectionDeltaWithTransform=ui()}setAnimationOrigin(h,p=!1,y){const f=this.snapshot,v=f?f.latestValues:{},b={...this.latestValues},w=ui();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const E=Ke(),M=f?f.source:void 0,V=this.layout?this.layout.source:void 0,H=M!==V,P=this.getStack(),N=!P||P.members.length<=1,G=!!(H&&!N&&this.options.crossfade===!0&&!this.path.some(Ww));this.animationProgress=0;let q;const ne=y?.interpolateProjection(h);this.mixTargetDelta=le=>{const Y=le/1e3,W=ne?.(Y);W?(w.x.translate=W.x,w.x.scale=Me(h.x.scale,1,Y),w.x.origin=h.x.origin,w.x.originPoint=h.x.originPoint,w.y.translate=W.y,w.y.scale=Me(h.y.scale,1,Y),w.y.origin=h.y.origin,w.y.originPoint=h.y.originPoint):(gg(w.x,h.x,Y),gg(w.y,h.y,Y)),this.setTargetDelta(w),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(mo(E,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Jw(this.relativeTarget,this.relativeTargetOrigin,E,Y),q&&Ew(this.relativeTarget,q)&&(this.isProjectionDirty=!1),q||(q=Ke()),qt(q,this.relativeTarget)),H&&(this.animationValues=b,Mw(b,v,this.latestValues,Y,G,N)),W&&W.rotate!==void 0&&(this.animationValues||(this.animationValues=b),this.animationValues.pathRotation=W.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Y},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(h){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Zn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=De.update(()=>{to.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=hi(0)),this.motionValue.jump(0,!1),this.currentAnimation=kw(this.motionValue,[0,1e3],{...h,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),h.onUpdate&&h.onUpdate(p)},onComplete:()=>{h.onComplete&&h.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const h=this.getStack();h&&h.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Vw),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const h=this.getLead();let{targetWithTransforms:p,target:y,layout:f,latestValues:v}=h;if(!(!p||!y||!f)){if(this!==h&&this.layout&&f&&h0(this.options.animationType,this.layout.layoutBox,f.layoutBox)){y=this.target||Ke();const b=ct(this.layout.layoutBox.x);y.x.min=h.target.x.min,y.x.max=y.x.min+b;const w=ct(this.layout.layoutBox.y);y.y.min=h.target.y.min,y.y.max=y.y.min+w}qt(p,y),$s(p,v),gr(this.projectionDeltaWithTransform,this.layoutCorrected,p,v)}}registerSharedNode(h,p){this.sharedNodes.has(h)||this.sharedNodes.set(h,new Ow),this.sharedNodes.get(h).add(p);const f=p.options.initialPromotionConfig;p.promote({transition:f?f.transition:void 0,preserveFollowOpacity:f&&f.shouldPreserveFollowOpacity?f.shouldPreserveFollowOpacity(p):void 0})}isLead(){const h=this.getStack();return h?h.lead===this:!0}getLead(){const{layoutId:h}=this.options;return h?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:h}=this.options;return h?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:h}=this.options;if(h)return this.root.sharedNodes.get(h)}promote({needsReset:h,transition:p,preserveFollowOpacity:y}={}){const f=this.getStack();f&&f.promote(this,y),h&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const h=this.getStack();return h?h.relegate(this):!1}resetSkewAndRotation(){const{visualElement:h}=this.options;if(!h)return;let p=!1;const{latestValues:y}=h;if((y.z||y.rotate||y.rotateX||y.rotateY||y.rotateZ||y.skewX||y.skewY)&&(p=!0),!p)return;const f={};y.z&&$c("z",h,f,this.animationValues);for(let v=0;v<Wc.length;v++)$c(`rotate${Wc[v]}`,h,f,this.animationValues),$c(`skew${Wc[v]}`,h,f,this.animationValues);h.render();for(const v in f)h.setStaticValue(v,f[v]),this.animationValues&&(this.animationValues[v]=f[v]);h.scheduleRender()}applyProjectionStyles(h,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){h.visibility="hidden";return}const y=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,h.visibility="",h.opacity="",h.pointerEvents=eo(p?.pointerEvents)||"",h.transform=y?y(this.latestValues,""):"none";return}const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){this.options.layoutId&&(h.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,h.pointerEvents=eo(p?.pointerEvents)||""),this.hasProjected&&!va(this.latestValues)&&(h.transform=y?y({},""):"none",this.hasProjected=!1);return}h.visibility="";const v=f.animationValues||f.latestValues;this.applyTransformsToTarget();let b=Uw(this.projectionDeltaWithTransform,this.treeScale,v);y&&(b=y(v,b)),h.transform=b;const{x:w,y:E}=this.projectionDelta;h.transformOrigin=`${w.origin*100}% ${E.origin*100}% 0`,f.animationValues?h.opacity=f===this?v.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=f===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const M in Uu){if(v[M]===void 0)continue;const{correct:V,applyTo:H,isCSSVariable:P}=Uu[M],N=b==="none"?v[M]:V(v[M],f);if(H){const G=H.length;for(let q=0;q<G;q++)h[H[q]]=N}else P?this.options.visualElement.renderState.vars[M]=N:h[M]=N}this.options.layoutId&&(h.pointerEvents=f===this?eo(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(h=>h.currentAnimation?.stop()),this.root.nodes.forEach(mg),this.root.sharedNodes.clear()}}}function Hw(a){a.updateLayout()}function Gw(a){const r=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&r&&a.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:o}=a.layout,{animationType:u}=a.options,m=r.source!==a.layout.source;if(u==="size")Jt(v=>{const b=m?r.measuredBox[v]:r.layoutBox[v],w=ct(b);b.min=l[v].min,b.max=b.min+w});else if(u==="x"||u==="y"){const v=u==="x"?"y":"x";zu(m?r.measuredBox[v]:r.layoutBox[v],l[v])}else h0(u,r.layoutBox,l)&&Jt(v=>{const b=m?r.measuredBox[v]:r.layoutBox[v],w=ct(l[v]);b.max=b.min+w,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[v].max=a.relativeTarget[v].min+w)});const h=ui();gr(h,l,r.layoutBox);const p=ui();m?gr(p,a.applyTransform(o,!0),r.measuredBox):gr(p,l,r.layoutBox);const y=!o0(h);let f=!1;if(!a.resumeFrom){const v=a.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:b,layout:w}=v;if(b&&w){const E=a.options.layoutAnchor||void 0,M=Ke();mo(M,r.layoutBox,b.layoutBox,E);const V=Ke();mo(V,l,w.layoutBox,E),l0(M,V)||(f=!0),v.options.layoutRoot&&(a.relativeTarget=V,a.relativeTargetOrigin=M,a.relativeParent=v)}}}a.notifyListeners("didUpdate",{layout:l,snapshot:r,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:f})}else if(a.isLead()){const{onExitComplete:l}=a.options;l&&l()}a.options.transition=void 0}function _w(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function Nw(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function Iw(a){a.clearSnapshot()}function mg(a){a.clearMeasurements()}function qw(a){a.isLayoutDirty=!0,a.updateLayout()}function fg(a){a.isLayoutDirty=!1}function Xw(a){a.isAnimationBlocked&&a.layout&&!a.isLayoutDirty&&(a.snapshot=a.layout,a.isLayoutDirty=!0)}function Fw(a){const{visualElement:r}=a.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),a.resetTransform()}function pg(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function Yw(a){a.resolveTargetDelta()}function Kw(a){a.calcProjection()}function Qw(a){a.resetSkewAndRotation()}function Zw(a){a.removeLeadSnapshot()}function gg(a,r,l){a.translate=Me(r.translate,0,l),a.scale=Me(r.scale,1,l),a.origin=r.origin,a.originPoint=r.originPoint}function yg(a,r,l,o){a.min=Me(r.min,l.min,o),a.max=Me(r.max,l.max,o)}function Jw(a,r,l,o){yg(a.x,r.x,l.x,o),yg(a.y,r.y,l.y,o)}function Ww(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const $w={duration:.45,ease:[.4,0,.1,1]},vg=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),bg=vg("applewebkit/")&&!vg("chrome/")?Math.round:Gt;function Sg(a){a.min=bg(a.min),a.max=bg(a.max)}function eA(a){Sg(a.x),Sg(a.y)}function h0(a,r,l){return a==="position"||a==="preserve-aspect"&&!ww(lg(r),lg(l),.2)}function tA(a){return a!==a.root&&a.scroll?.wasRoot}const nA=d0({attachResizeListener:(a,r)=>wr(a,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),eu={current:void 0},m0=d0({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!eu.current){const a=new nA({});a.mount(window),a.setOptions({layoutScroll:!0}),eu.current=a}return eu.current},resetTransform:(a,r)=>{a.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),f0=J.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function aA(a=!0){const r=J.useContext(Bu);if(r===null)return[!0,null];const{isPresent:l,onExitComplete:o,register:u}=r,m=J.useId();J.useEffect(()=>{if(a)return u(m)},[a]);const h=J.useCallback(()=>a&&o&&o(m),[m,o,a]);return!l&&o?[!1,h]:[!0]}const p0=J.createContext({strict:!1}),wg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Ag=!1;function iA(){if(Ag)return;const a={};for(const r in wg)a[r]={isEnabled:l=>wg[r].some(o=>!!l[o])};Xy(a),Ag=!0}function g0(){return iA(),YS()}function rA(a){const r=g0();for(const l in a)r[l]={...r[l],...a[l]};Xy(r)}const sA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function fo(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||sA.has(a)}let y0=a=>!fo(a);function oA(a){typeof a=="function"&&(y0=r=>r.startsWith("on")?!fo(r):a(r))}try{oA(require("@emotion/is-prop-valid").default)}catch{}function lA(a,r,l){const o={};for(const u in a)u==="values"&&typeof a.values=="object"||at(a[u])||(y0(u)||l===!0&&fo(u)||!r&&!fo(u)||a.draggable&&u.startsWith("onDrag"))&&(o[u]=a[u]);return o}const bo=J.createContext({});function cA(a,r){if(vo(a)){const{initial:l,animate:o}=a;return{initial:l===!1||Sr(l)?l:void 0,animate:Sr(o)?o:void 0}}return a.inherit!==!1?r:{}}function uA(a){const{initial:r,animate:l}=cA(a,J.useContext(bo));return J.useMemo(()=>({initial:r,animate:l}),[Tg(r),Tg(l)])}function Tg(a){return Array.isArray(a)?a.join(" "):a}const rd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function v0(a,r,l){for(const o in r)!at(r[o])&&!Wy(o,l)&&(a[o]=r[o])}function dA({transformTemplate:a},r){return J.useMemo(()=>{const l=rd();return ad(l,r,a),Object.assign({},l.vars,l.style)},[r])}function hA(a,r){const l=a.style||{},o={};return v0(o,l,a),Object.assign(o,dA(a,r)),o}function mA(a,r){const l={},o=hA(a,r);return a.drag&&a.dragListener!==!1&&(l.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(l.tabIndex=0),l.style=o,l}const b0=()=>({...rd(),attrs:{}});function fA(a,r,l,o){const u=J.useMemo(()=>{const m=b0();return $y(m,r,t0(o),a.transformTemplate,a.style),{...m.attrs,style:{...m.style}}},[r]);if(a.style){const m={};v0(m,a.style,a),u.style={...m,...u.style}}return u}const pA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function sd(a){return typeof a!="string"||a.includes("-")?!1:!!(pA.indexOf(a)>-1||/[A-Z]/u.test(a))}function gA(a,r,l,{latestValues:o},u,m=!1,h){const y=(h??sd(a)?fA:mA)(r,o,u,a),f=lA(r,typeof a=="string",m),v=a!==J.Fragment?{...f,...y,ref:l}:{},{children:b}=r,w=J.useMemo(()=>at(b)?b.get():b,[b]);return J.createElement(a,{...v,children:w})}function yA({scrapeMotionValuesFromProps:a,createRenderState:r},l,o,u){return{latestValues:vA(l,o,u,a),renderState:r()}}function vA(a,r,l,o){const u={},m=o(a,{});for(const w in m)u[w]=eo(m[w]);let{initial:h,animate:p}=a;const y=vo(a),f=Iy(a);r&&f&&!y&&a.inherit!==!1&&(h===void 0&&(h=r.initial),p===void 0&&(p=r.animate));let v=l?l.initial===!1:!1;v=v||h===!1;const b=v?p:h;if(b&&typeof b!="boolean"&&!yo(b)){const w=Array.isArray(b)?b:[b];for(let E=0;E<w.length;E++){const M=Ku(a,w[E]);if(M){const{transitionEnd:V,transition:H,...P}=M;for(const N in P){let G=P[N];if(Array.isArray(G)){const q=v?G.length-1:0;G=G[q]}G!==null&&(u[N]=G)}for(const N in V)u[N]=V[N]}}}return u}const S0=a=>(r,l)=>{const o=J.useContext(bo),u=J.useContext(Bu),m=()=>yA(a,r,o,u);return l?m():y1(m)},bA=S0({scrapeMotionValuesFromProps:id,createRenderState:rd}),SA=S0({scrapeMotionValuesFromProps:n0,createRenderState:b0}),wA=Symbol.for("motionComponentSymbol");function AA(a,r,l){const o=J.useRef(l);J.useInsertionEffect(()=>{o.current=l});const u=J.useRef(null);return J.useCallback(m=>{m&&a.onMount?.(m),r&&(m?r.mount(m):r.unmount());const h=o.current;if(typeof h=="function")if(m){const p=h(m);typeof p=="function"&&(u.current=p)}else u.current?(u.current(),u.current=null):h(m);else h&&(h.current=m)},[r])}const w0=J.createContext({});function oi(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function TA(a,r,l,o,u,m){const{visualElement:h}=J.useContext(bo),p=J.useContext(p0),y=J.useContext(Bu),f=J.useContext(f0),v=f.reducedMotion,b=f.skipAnimations,w=J.useRef(null),E=J.useRef(!1);o=o||p.renderer,!w.current&&o&&(w.current=o(a,{visualState:r,parent:h,props:l,presenceContext:y,blockInitialAnimation:y?y.initial===!1:!1,reducedMotionConfig:v,skipAnimations:b,isSVG:m}),E.current&&w.current&&(w.current.manuallyAnimateOnMount=!0));const M=w.current,V=J.useContext(w0);M&&!M.projection&&u&&(M.type==="html"||M.type==="svg")&&CA(w.current,l,u,V);const H=J.useRef(!1);J.useInsertionEffect(()=>{M&&H.current&&M.update(l,y)});const P=l[Ry],N=J.useRef(!!P&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(P)&&window.MotionHasOptimisedAnimation?.(P));return b1(()=>{E.current=!0,M&&(H.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),N.current&&M.animationState&&M.animationState.animateChanges())}),J.useEffect(()=>{M&&(!N.current&&M.animationState&&M.animationState.animateChanges(),N.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(P)}),N.current=!1),M.enteringChildren=void 0)}),M}function CA(a,r,l,o){const{layoutId:u,layout:m,drag:h,dragConstraints:p,layoutScroll:y,layoutRoot:f,layoutAnchor:v,layoutCrossfade:b}=r;a.projection=new l(a.latestValues,r["data-framer-portal-id"]?void 0:A0(a.parent)),a.projection.setOptions({layoutId:u,layout:m,alwaysMeasureLayout:!!h||p&&oi(p),visualElement:a,animationType:typeof m=="string"?m:"both",initialPromotionConfig:o,crossfade:b,layoutScroll:y,layoutRoot:f,layoutAnchor:v})}function A0(a){if(a)return a.options.allowProjection!==!1?a.projection:A0(a.parent)}function tu(a,{forwardMotionProps:r=!1,type:l}={},o,u){o&&rA(o);const m=l?l==="svg":sd(a),h=m?SA:bA;function p(f,v){let b;const w={...J.useContext(f0),...f,layoutId:xA(f)},{isStatic:E}=w,M=uA(f),V=h(f,E);if(!E&&typeof window<"u"){EA();const H=UA(w);b=H.MeasureLayout,M.visualElement=TA(a,V,w,u,H.ProjectionNode,m)}return S.jsxs(bo.Provider,{value:M,children:[b&&M.visualElement?S.jsx(b,{visualElement:M.visualElement,...w}):null,gA(a,f,AA(V,M.visualElement,v),V,E,r,m)]})}p.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const y=J.forwardRef(p);return y[wA]=a,y}function xA({layoutId:a}){const r=J.useContext(Ig).id;return r&&a!==void 0?r+"-"+a:a}function EA(a,r){J.useContext(p0).strict}function UA(a){const r=g0(),{drag:l,layout:o}=r;if(!l&&!o)return{};const u={...l,...o};return{MeasureLayout:l?.isEnabled(a)||o?.isEnabled(a)?u.MeasureLayout:void 0,ProjectionNode:u.ProjectionNode}}function zA(a,r){if(typeof Proxy>"u")return tu;const l=new Map,o=(m,h)=>tu(m,h,a,r),u=(m,h)=>o(m,h);return new Proxy(u,{get:(m,h)=>h==="create"?o:(l.has(h)||l.set(h,tu(h,void 0,a,r)),l.get(h))})}const MA=(a,r)=>r.isSVG??sd(a)?new uw(r):new iw(r,{allowProjection:a!==J.Fragment});class DA extends Jn{constructor(r){super(r),r.animationState||(r.animationState=pw(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();yo(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:l}=this.node.prevProps||{};r!==l&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let RA=0;class kA extends Jn{constructor(){super(...arguments),this.id=RA++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:l}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===o)return;if(r&&o===!1){if(this.isExitComplete){const{initial:m,custom:h}=this.node.getProps();if(typeof m=="string"||typeof m=="object"&&m!==null&&!Array.isArray(m)){const p=Aa(this.node,m,h);if(p){const{transition:y,transitionEnd:f,...v}=p;for(const b in v)this.node.getValue(b)?.jump(v[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const u=this.node.animationState.setActive("exit",!r);l&&!r&&u.then(()=>{this.isExitComplete=!0,l(this.id)})}mount(){const{register:r,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),r&&(this.unmount=r(this.id))}unmount(){}}const jA={animation:{Feature:DA},exit:{Feature:kA}};function xr(a){return{point:{x:a.pageX,y:a.pageY}}}const BA=a=>r=>Wu(r)&&a(r,xr(r));function yr(a,r,l,o){return wr(a,r,BA(l),o)}const T0=({current:a})=>a?a.ownerDocument.defaultView:null,Cg=(a,r)=>Math.abs(a-r);function LA(a,r){const l=Cg(a.x,r.x),o=Cg(a.y,r.y);return Math.sqrt(l**2+o**2)}const xg=new Set(["auto","scroll"]);class C0{constructor(r,l,{transformPagePoint:o,contextWindow:u=window,dragSnapToOrigin:m=!1,distanceThreshold:h=3,element:p}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=M=>{this.handleScroll(M.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Fs(this.lastRawMoveEventInfo,this.transformPagePoint));const M=nu(this.lastMoveEventInfo,this.history),V=this.startEvent!==null,H=LA(M.offset,{x:0,y:0})>=this.distanceThreshold;if(!V&&!H)return;const{point:P}=M,{timestamp:N}=nt;this.history.push({...P,timestamp:N});const{onStart:G,onMove:q}=this.handlers;V||(G&&G(this.lastMoveEvent,M),this.startEvent=this.lastMoveEvent),q&&q(this.lastMoveEvent,M)},this.handlePointerMove=(M,V)=>{this.lastMoveEvent=M,this.lastRawMoveEventInfo=V,this.lastMoveEventInfo=Fs(V,this.transformPagePoint),De.update(this.updatePoint,!0)},this.handlePointerUp=(M,V)=>{this.end();const{onEnd:H,onSessionEnd:P,resumeAnimation:N}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&N&&N(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const G=nu(M.type==="pointercancel"?this.lastMoveEventInfo:Fs(V,this.transformPagePoint),this.history);this.startEvent&&H&&H(M,G),P&&P(M,G)},!Wu(r))return;this.dragSnapToOrigin=m,this.handlers=l,this.transformPagePoint=o,this.distanceThreshold=h,this.contextWindow=u||window;const y=xr(r),f=Fs(y,this.transformPagePoint),{point:v}=f,{timestamp:b}=nt;this.history=[{...v,timestamp:b}];const{onSessionStart:w}=l;w&&w(r,nu(f,this.history));const E={passive:!0,capture:!0};this.removeListeners=Ar(yr(this.contextWindow,"pointermove",this.handlePointerMove,E),yr(this.contextWindow,"pointerup",this.handlePointerUp,E),yr(this.contextWindow,"pointercancel",this.handlePointerUp,E)),p&&this.startScrollTracking(p)}startScrollTracking(r){let l=r.parentElement;for(;l;){const o=getComputedStyle(l);(xg.has(o.overflowX)||xg.has(o.overflowY))&&this.scrollPositions.set(l,{x:l.scrollLeft,y:l.scrollTop}),l=l.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(r){const l=this.scrollPositions.get(r);if(!l)return;const o=r===window,u=o?{x:window.scrollX,y:window.scrollY}:{x:r.scrollLeft,y:r.scrollTop},m={x:u.x-l.x,y:u.y-l.y};m.x===0&&m.y===0||(o?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=m.x,this.lastMoveEventInfo.point.y+=m.y):this.history.length>0&&(this.history[0].x-=m.x,this.history[0].y-=m.y),this.scrollPositions.set(r,u),De.update(this.updatePoint,!0))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Zn(this.updatePoint)}}function Fs(a,r){return r?{point:r(a.point)}:a}function Eg(a,r){return{x:a.x-r.x,y:a.y-r.y}}function nu({point:a},r){return{point:a,delta:Eg(a,x0(r)),offset:Eg(a,OA(r)),velocity:VA(r,.1)}}function OA(a){return a[0]}function x0(a){return a[a.length-1]}function VA(a,r){if(a.length<2)return{x:0,y:0};let l=a.length-1,o=null;const u=x0(a);for(;l>=0&&(o=a[l],!(u.timestamp-o.timestamp>Ut(r)));)l--;if(!o)return{x:0,y:0};o===a[0]&&a.length>2&&u.timestamp-o.timestamp>Ut(r)*2&&(o=a[1]);const m=Ht(u.timestamp-o.timestamp);if(m===0)return{x:0,y:0};const h={x:(u.x-o.x)/m,y:(u.y-o.y)/m};return h.x===1/0&&(h.x=0),h.y===1/0&&(h.y=0),h}function PA(a,{min:r,max:l},o){return r!==void 0&&a<r?a=o?Me(r,a,o.min):Math.max(a,r):l!==void 0&&a>l&&(a=o?Me(l,a,o.max):Math.min(a,l)),a}function Ug(a,r,l){return{min:r!==void 0?a.min+r:void 0,max:l!==void 0?a.max+l-(a.max-a.min):void 0}}function HA(a,{top:r,left:l,bottom:o,right:u}){return{x:Ug(a.x,l,u),y:Ug(a.y,r,o)}}function zg(a,r){let l=r.min-a.min,o=r.max-a.max;return r.max-r.min<a.max-a.min&&([l,o]=[o,l]),{min:l,max:o}}function GA(a,r){return{x:zg(a.x,r.x),y:zg(a.y,r.y)}}function _A(a,r){let l=.5;const o=ct(a),u=ct(r);return u>o?l=vr(r.min,r.max-o,a.min):o>u&&(l=vr(a.min,a.max-u,r.min)),en(0,1,l)}function NA(a,r){const l={};return r.min!==void 0&&(l.min=r.min-a.min),r.max!==void 0&&(l.max=r.max-a.min),l}const Mu=.35;function IA(a=Mu){return a===!1?a=0:a===!0&&(a=Mu),{x:Mg(a,"left","right"),y:Mg(a,"top","bottom")}}function Mg(a,r,l){return{min:Dg(a,r),max:Dg(a,l)}}function Dg(a,r){return typeof a=="number"?a:a[r]||0}const qA=new WeakMap;class XA{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ke(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=r}start(r,{snapToCursor:l=!1,distanceThreshold:o}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const m=b=>{l&&this.snapToCursor(xr(b).point),this.stopAnimation()},h=(b,w)=>{const{drag:E,dragPropagation:M,onDragStart:V}=this.getProps();if(E&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=CS(E),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Jt(P=>{let N=this.getAxisMotionValue(P).get()||0;if($t.test(N)){const{projection:G}=this.visualElement;if(G&&G.layout){const q=G.layout.layoutBox[P];q&&(N=ct(q)*(parseFloat(N)/100))}}this.originPoint[P]=N}),V&&De.update(()=>V(b,w),!1,!0),Su(this.visualElement,"transform");const{animationState:H}=this.visualElement;H&&H.setActive("whileDrag",!0)},p=(b,w)=>{this.latestPointerEvent=b,this.latestPanInfo=w;const{dragPropagation:E,dragDirectionLock:M,onDirectionLock:V,onDrag:H}=this.getProps();if(!E&&!this.openDragLock)return;const{offset:P}=w;if(M&&this.currentDirection===null){this.currentDirection=YA(P),this.currentDirection!==null&&V&&V(this.currentDirection);return}this.updateAxis("x",w.point,P),this.updateAxis("y",w.point,P),this.visualElement.render(),H&&De.update(()=>H(b,w),!1,!0)},y=(b,w)=>{this.latestPointerEvent=b,this.latestPanInfo=w,this.stop(b,w),this.latestPointerEvent=null,this.latestPanInfo=null},f=()=>{const{dragSnapToOrigin:b}=this.getProps();(b||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:v}=this.getProps();this.panSession=new C0(r,{onSessionStart:m,onStart:h,onMove:p,onSessionEnd:y,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:v,distanceThreshold:o,contextWindow:T0(this.visualElement),element:this.visualElement.current})}stop(r,l){const o=r||this.latestPointerEvent,u=l||this.latestPanInfo,m=this.isDragging;if(this.cancel(),!m||!u||!o)return;const{velocity:h}=u;this.startAnimation(h);const{onDragEnd:p}=this.getProps();p&&De.postRender(()=>p(o,u))}cancel(){this.isDragging=!1;const{projection:r,animationState:l}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(r,l,o){const{drag:u}=this.getProps();if(!o||!Ys(r,u,this.currentDirection))return;const m=this.getAxisMotionValue(r);let h=this.originPoint[r]+o[r];this.constraints&&this.constraints[r]&&(h=PA(h,this.constraints[r],this.elastic[r])),m.set(h)}resolveConstraints(){const{dragConstraints:r,dragElastic:l}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;r&&oi(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&o?this.constraints=HA(o.layoutBox,r):this.constraints=!1,this.elastic=IA(l),u!==this.constraints&&!oi(r)&&o&&this.constraints&&!this.hasMutatedConstraints&&Jt(m=>{this.constraints!==!1&&this.getAxisMotionValue(m)&&(this.constraints[m]=NA(o.layoutBox[m],this.constraints[m]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:l}=this.getProps();if(!r||!oi(r))return!1;const o=r.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;u.root&&(u.root.scroll=void 0,u.root.updateScroll());const m=WS(o,u.root,this.visualElement.getTransformPagePoint());let h=GA(u.layout.layoutBox,m);if(l){const p=l(QS(h));this.hasMutatedConstraints=!!p,p&&(h=Yy(p))}return h}startAnimation(r){const{drag:l,dragMomentum:o,dragElastic:u,dragTransition:m,dragSnapToOrigin:h,onDragTransitionEnd:p}=this.getProps(),y=this.constraints||{},f=Jt(v=>{if(!Ys(v,l,this.currentDirection))return;let b=y&&y[v]||{};(h===!0||h===v)&&(b={min:0,max:0});const w=u?200:1e6,E=u?40:1e7,M={type:"inertia",velocity:o?r[v]:0,bounceStiffness:w,bounceDamping:E,timeConstant:750,restDelta:1,restSpeed:10,...m,...b};return this.startAxisValueAnimation(v,M)});return Promise.all(f).then(p)}startAxisValueAnimation(r,l){const o=this.getAxisMotionValue(r);return Su(this.visualElement,r),o.start(Yu(r,o,0,l,this.visualElement,!1))}stopAnimation(){Jt(r=>this.getAxisMotionValue(r).stop())}getAxisMotionValue(r){const l=`_drag${r.toUpperCase()}`,u=this.visualElement.getProps()[l];return u||this.visualElement.getValue(r,this.visualElement.latestValues[r]??0)}snapToCursor(r){Jt(l=>{const{drag:o}=this.getProps();if(!Ys(l,o,this.currentDirection))return;const{projection:u}=this.visualElement,m=this.getAxisMotionValue(l);if(u&&u.layout){const{min:h,max:p}=u.layout.layoutBox[l],y=m.get()||0;m.set(r[l]-Me(h,p,.5)+y)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:l}=this.getProps(),{projection:o}=this.visualElement;if(!oi(l)||!o||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Jt(h=>{const p=this.getAxisMotionValue(h);if(p&&this.constraints!==!1){const y=p.get();u[h]=_A({min:y,max:y},this.constraints[h])}});const{transformTemplate:m}=this.visualElement.getProps();this.visualElement.current.style.transform=m?m({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.constraints=!1,this.resolveConstraints(),Jt(h=>{if(!Ys(h,r,null))return;const p=this.getAxisMotionValue(h),{min:y,max:f}=this.constraints[h];p.set(Me(y,f,u[h]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;qA.set(this.visualElement,this);const r=this.visualElement.current,l=yr(r,"pointerdown",f=>{const{drag:v,dragListener:b=!0}=this.getProps(),w=f.target,E=w!==r&&DS(w);v&&b&&!E&&this.start(f)});let o;const u=()=>{const{dragConstraints:f}=this.getProps();oi(f)&&f.current&&(this.constraints=this.resolveRefConstraints(),o||(o=FA(r,f.current,()=>this.scalePositionWithinConstraints())))},{projection:m}=this.visualElement,h=m.addEventListener("measure",u);m&&!m.layout&&(m.root&&m.root.updateScroll(),m.updateLayout()),De.read(u);const p=wr(window,"resize",()=>this.scalePositionWithinConstraints()),y=m.addEventListener("didUpdate",(({delta:f,hasLayoutChanged:v})=>{this.isDragging&&v&&(Jt(b=>{const w=this.getAxisMotionValue(b);w&&(this.originPoint[b]+=f[b].translate,w.set(w.get()+f[b].translate))}),this.visualElement.render())}));return()=>{p(),l(),h(),y&&y(),o&&o()}}getProps(){const r=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:o=!1,dragPropagation:u=!1,dragConstraints:m=!1,dragElastic:h=Mu,dragMomentum:p=!0}=r;return{...r,drag:l,dragDirectionLock:o,dragPropagation:u,dragConstraints:m,dragElastic:h,dragMomentum:p}}}function Rg(a){let r=!0;return()=>{if(r){r=!1;return}a()}}function FA(a,r,l){const o=Gp(a,Rg(l)),u=Gp(r,Rg(l));return()=>{o(),u()}}function Ys(a,r,l){return(r===!0||r===a)&&(l===null||l===a)}function YA(a,r=10){let l=null;return Math.abs(a.y)>r?l="y":Math.abs(a.x)>r&&(l="x"),l}class KA extends Jn{constructor(r){super(r),this.removeGroupControls=Gt,this.removeListeners=Gt,this.controls=new XA(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Gt}update(){const{dragControls:r}=this.node.getProps(),{dragControls:l}=this.node.prevProps||{};r!==l&&(this.removeGroupControls(),r&&(this.removeGroupControls=r.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const au=a=>(r,l)=>{a&&De.update(()=>a(r,l),!1,!0)};class QA extends Jn{constructor(){super(...arguments),this.removePointerDownListener=Gt}onPointerDown(r){this.session=new C0(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:T0(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:l,onPan:o,onPanEnd:u}=this.node.getProps();return{onSessionStart:au(r),onStart:au(l),onMove:au(o),onEnd:(m,h)=>{delete this.session,u&&De.postRender(()=>u(m,h))}}}mount(){this.removePointerDownListener=yr(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let iu=!1;class ZA extends J.Component{componentDidMount(){const{visualElement:r,layoutGroup:l,switchLayoutGroup:o,layoutId:u}=this.props,{projection:m}=r;m&&(l.group&&l.group.add(m),o&&o.register&&u&&o.register(m),iu&&m.root.didUpdate(),m.addEventListener("animationComplete",()=>{this.safeToRemove()}),m.setOptions({...m.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),to.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:l,visualElement:o,drag:u,isPresent:m}=this.props,{projection:h}=o;return h&&(h.isPresent=m,r.layoutDependency!==l&&h.setOptions({...h.options,layoutDependency:l}),iu=!0,u||r.layoutDependency!==l||l===void 0||r.isPresent!==m?h.willUpdate():this.safeToRemove(),r.isPresent!==m&&(m?h.promote():h.relegate()||De.postRender(()=>{const p=h.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:r,layoutAnchor:l}=this.props,{projection:o}=r;o&&(o.options.layoutAnchor=l,o.root.didUpdate(),Ju.postRender(()=>{!o.currentAnimation&&o.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:l,switchLayoutGroup:o}=this.props,{projection:u}=r;iu=!0,u&&(u.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(u),o&&o.deregister&&o.deregister(u))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function E0(a){const[r,l]=aA(),o=J.useContext(Ig);return S.jsx(ZA,{...a,layoutGroup:o,switchLayoutGroup:J.useContext(w0),isPresent:r,safeToRemove:l})}const JA={pan:{Feature:QA},drag:{Feature:KA,ProjectionNode:m0,MeasureLayout:E0}};function kg(a,r,l){const{props:o}=a;a.animationState&&o.whileHover&&a.animationState.setActive("whileHover",l==="Start");const u="onHover"+l,m=o[u];m&&De.postRender(()=>m(r,xr(r)))}class WA extends Jn{mount(){const{current:r}=this.node;r&&(this.unmount=ES(r,(l,o)=>(kg(this.node,o,"Start"),u=>kg(this.node,u,"End"))))}unmount(){}}class $A extends Jn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ar(wr(this.node.current,"focus",()=>this.onFocus()),wr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function jg(a,r,l){const{props:o}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&o.whileTap&&a.animationState.setActive("whileTap",l==="Start");const u="onTap"+(l==="End"?"":l),m=o[u];m&&De.postRender(()=>m(r,xr(r)))}class eT extends Jn{mount(){const{current:r}=this.node;if(!r)return;const{globalTapTarget:l,propagate:o}=this.node.props;this.unmount=kS(r,(u,m)=>(jg(this.node,m,"Start"),(h,{success:p})=>jg(this.node,h,p?"End":"Cancel")),{useGlobalTarget:l,stopPropagation:o?.tap===!1})}unmount(){}}const Du=new WeakMap,ru=new WeakMap,tT=a=>{const r=Du.get(a.target);r&&r(a)},nT=a=>{a.forEach(tT)};function aT({root:a,...r}){const l=a||document;ru.has(l)||ru.set(l,{});const o=ru.get(l),u=JSON.stringify(r);return o[u]||(o[u]=new IntersectionObserver(nT,{root:a,...r})),o[u]}function iT(a,r,l){const o=aT(r);return Du.set(a,l),o.observe(a),()=>{Du.delete(a),o.unobserve(a)}}const rT={some:0,all:1};class sT extends Jn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:r={}}=this.node.getProps(),{root:l,margin:o,amount:u="some",once:m}=r,h={root:l?l.current:void 0,rootMargin:o,threshold:typeof u=="number"?u:rT[u]},p=y=>{const{isIntersecting:f}=y;if(this.isInView===f||(this.isInView=f,m&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:v,onViewportLeave:b}=this.node.getProps(),w=f?v:b;w&&w(y)};this.stopObserver=iT(this.node.current,h,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:l}=this.node;["amount","margin","root"].some(oT(r,l))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}function oT({viewport:a={}},{viewport:r={}}={}){return l=>a[l]!==r[l]}const lT={inView:{Feature:sT},tap:{Feature:eT},focus:{Feature:$A},hover:{Feature:WA}},cT={layout:{ProjectionNode:m0,MeasureLayout:E0}},uT={...jA,...lT,...JA,...cT},dT=zA(uT,MA);function U0(){!nd.current&&qy();const[a]=J.useState(co.current);return a}const z0=dT,hT=[{id:"fathom",portfolioCategory:"engine-games",title:"实体控制器潜艇协作游戏",period:"2026",category:{zh:"Unreal 游戏 / 硬件交互",en:"Unreal game / hardware interaction"},summary:{zh:"面向实体控制器的潜艇协作游戏。我担任主要程序与玩法架构负责人，完成任务循环、小游戏、UI 数据流和硬件接入。",en:"A physical-console submarine co-op game. I owned gameplay architecture, task loops, minigames, UI data flow, and hardware integration."},contribution:[{zh:"搭建 GameMode、角色控制、任务生成、小游戏接口与 UI/HUD 数据绑定。",en:"Built GameMode, character control, task generation, minigame interfaces, and UI/HUD data binding."},{zh:"实现 Server / Client 外部输入模块，将硬件信号解析为 Unreal 内的游戏指令。",en:"Implemented a server/client input module that translated physical-device signals into Unreal gameplay commands."},{zh:"通过异步接收、缓冲与插值处理输入延迟，并为关键链路补充状态校验和容错。",en:"Reduced input latency with asynchronous receiving, buffering, and interpolation, then added validation and fallback handling."}],stack:["Unreal Engine","Blueprint","Networking","Hardware I/O","UI"],images:[{src:"/media/projects/fathom-task.png",alt:{zh:"Fathom 任务玩法与绿色 HUD",en:"Fathom task gameplay with green HUD"},caption:{zh:"任务系统与实时 HUD",en:"Task system and realtime HUD"},position:"center"},{src:"/media/projects/fathom-sonar.png",alt:{zh:"Fathom 潜艇舱室画面",en:"Fathom submarine interior"},caption:{zh:"潜艇场景与硬件交互目标",en:"Submarine environment and hardware interaction target"},position:"center"}]},{id:"house-of-vampires",portfolioCategory:"engine-games",title:"哥特式吸血鬼城堡解谜游戏",period:"2025",category:{zh:"Unreal 蓝图游戏",en:"Unreal Blueprint game"},summary:{zh:"已上线 itch.io 的哥特式恐怖解谜游戏。我担任主要蓝图程序与技术美术开发，整合交互、谜题、手部动画和特效。",en:"A gothic puzzle-horror game released on itch.io. I led Blueprint and technical-art development across interactions, puzzles, hand animation, and VFX."},contribution:[{zh:"使用 Unreal Blueprint 实现玩法流程、交互、谜题、状态管理与手柄支持。",en:"Implemented gameplay flow, interaction, puzzles, state management, and controller support in Unreal Blueprints."},{zh:"制作第一人称手部绑定与动画，并将动画状态接入交互流程。",en:"Created the first-person hand rig and animation and connected it to gameplay interactions."},{zh:"参与完整打包与上线交付，项目可在 itch.io 下载。",en:"Contributed through packaging and public release; the game is available on itch.io."}],stack:["Unreal Engine","Blueprint","Gameplay","Rigging","Animation"],images:[{src:"/media/projects/house-of-vampires.webp",alt:{zh:"House of Vampires 的 itch.io 项目页与游戏截图",en:"House of Vampires itch.io page and screenshots"},caption:{zh:"已上线的 itch.io 页面与实机画面",en:"Published itch.io page and in-game captures"},position:"top"}],link:{label:{zh:"打开 itch.io 项目页",en:"Open the itch.io page"},href:"https://musitive.itch.io/hov"},youtubeId:"aY36FtqdGAw",story:{title:{zh:"你能逃出德古拉的城堡吗？",en:"Can you survive Dracula's Castle?"},intro:{zh:"进入《House of Vampires》中这座受经典恐怖电影启发的哥特式城堡。利用宅邸里散落的物品以及自己的身体，解开逃离城堡所需的谜题。",en:"Enter the classic horror-inspired gothic castle in House of Vampires! Use items scattered around the mansion as well as your own body to solve the puzzles needed to escape the castle."},features:[{title:{zh:"多种谜题",en:"Various Puzzles"},detail:{zh:"要成功逃出城堡，你需要只利用自己能够携带的物品，解决多种不同的谜题。",en:"To successfully escape the castle, you will need to solve several different puzzles using only what you can carry."}},{title:{zh:"德古拉",en:"Dracula"},detail:{zh:"游戏重新塑造了德古拉这一角色；在这个可怕的怪物抓住你之前，你必须设法逃脱。",en:"Featuring a new take on Dracula as a character, you must escape this terrifying monster before he catches you."}},{title:{zh:"手柄支持",en:"Controller Support"},detail:{zh:"游戏完整支持键盘鼠标和 Xbox 手柄。",en:"The game fully functions with not only Keyboard & Mouse but Xbox Controllers as well."}},{title:{zh:"经典恐怖电影质感",en:"Classic Horror Film Look"},detail:{zh:"游戏通过后期处理还原经典恐怖电影的胶片质感。",en:"Using post-processing, the game captures that film look from classic horror films."}}],note:{zh:"建议佩戴耳机游玩。",en:"Best experienced with headphones."}}},{id:"through-other-eyes",portfolioCategory:"engine-games",title:"VR 视障体验与无障碍叙事游戏",period:"2025",category:{zh:"VR 无障碍体验",en:"VR accessibility experience"},summary:{zh:"两人团队完成的 VR 视障体验。我兼任玩法策划、程序与技术美术，负责地图路线、事件设计、场景交互和角色绑定。",en:"A two-person VR accessibility project. I worked across game design, programming, and technical art, owning routes, events, interactions, and character rigging."},contribution:[{zh:"协助把关卡规划落成可游玩的 VR 场景，布置道路、障碍和关键交互点。",en:"Translated the level plan into a playable VR scene with streets, obstacles, and interaction points."},{zh:"编写事件交互逻辑，并制作简单的导盲犬绑定与动画。",en:"Authored event interaction logic and created a simple guide-dog rig and animation."},{zh:"围绕受限视觉信息设计引导、反馈和空间节奏。",en:"Worked on guidance, feedback, and spatial pacing under intentionally limited visual information."}],stack:["VR","Unreal Engine","Level Design","Interaction","Rigging"],images:[{src:"/media/projects/through-other-eyes-cover.webp",alt:{zh:"Through Other Eyes 项目海报",en:"Through Other Eyes project poster"},caption:{zh:"项目 One Sheet",en:"Project one-sheet"},position:"center 32%"},{src:"/media/projects/through-other-eyes-vr.png",alt:{zh:"VR 中的视障模拟画面",en:"Visual-impairment simulation in VR"},caption:{zh:"头显内的受限视觉效果",en:"Restricted-vision effect inside the headset"},position:"center"},{src:"/media/projects/through-other-eyes-level.webp",alt:{zh:"Through Other Eyes 关卡规划图",en:"Through Other Eyes level plan"},caption:{zh:"关卡路径与交互点规划",en:"Route and interaction-point planning"},position:"center"}]},{id:"retro-arcade",portfolioCategory:"engine-games",title:"复古像素风 3D 街机游戏原型",period:"2025",category:{zh:"Unity 游戏与 Shader",en:"Unity gameplay and shader"},summary:{zh:"复古 3D 街机游戏原型。我负责完整 Gameplay、角色与动画状态，并尝试把 3D 动画烘焙成带法线信息的像素序列帧。",en:"A retro 3D arcade prototype. I owned gameplay and character state and explored baking 3D animation into pixel sprites with normal information."},contribution:[{zh:"实现角色状态、动画状态、关卡逻辑和核心玩法循环。",en:"Implemented character state, animation state, level logic, and the core gameplay loop."},{zh:"制作部分 2D 角色素材，并完成 3D 到 2D 序列帧的实验流程。",en:"Created part of the 2D character art and completed a 3D-to-2D sprite-sequence experiment."},{zh:"编写利用颜色、Alpha 与法线贴图的像素化实时 Shader，并记录方案未进入最终版本的原因。",en:"Wrote a pixel-rendering shader using color, alpha, and normal data and documented why the experiment was not adopted."}],stack:["Unity","C#","Shader","Gameplay","2D / 3D Pipeline"],images:[{src:"/media/projects/retro-arcade-shader.png",alt:{zh:"Unity 中的像素角色 Shader 实验",en:"Pixel-character shader experiment in Unity"},caption:{zh:"3D 动画到像素序列帧与法线光照实验",en:"3D animation to pixel sprites with normal-lighting experiment"},position:"center"},{src:"/media/projects/retro-arcade-sprites.png",alt:{zh:"复古街机角色序列帧素材",en:"Retro arcade character sprite sheets"},caption:{zh:"本人制作的角色序列帧素材",en:"Character sprite sheets I created"},position:"center"}]},{id:"digital-twin",portfolioCategory:"engine-games",title:"火力发电检测 UE5 数字孪生客户端",period:"2023",category:{zh:"UE5 客户端开发",en:"UE5 client development"},summary:{zh:"面向火力发电检测业务的 UE5 / Web 双客户端数字孪生系统，由公司服务器协调三端低时延双向数据与操作同步。",en:"A UE5/Web dual-client digital-twin system for thermal-power inspection, with a company server coordinating low-latency bidirectional state and operation synchronization."},contribution:[{zh:"使用 C++、Blueprint 与组件化架构实现锅炉、汽轮机、发电机及监测设备的启停、联锁、参数变化、告警联动和巡检流程。",en:"Implemented startup, interlocks, telemetry changes, alarms, and inspection flows for boilers, steam turbines, generators, and monitoring equipment with C++, Blueprint, and a component-based architecture."},{zh:"把 UE5 的组件化、状态机、事件总线和分层设计迁移到 Vue 3 / Three.js Web 端，复用设备 ID、状态模型与指令协议。",en:"Transferred UE5 component, state-machine, event-bus, and layered patterns to Vue 3 / Three.js while sharing device IDs, state models, and command contracts."},{zh:"以公司服务器为权威状态源，通过 HTTP + WebSocket 实现 UE5 / Server / Web 三端低时延双向同步、操作回传与异常恢复。",en:"Used the company server as the authoritative state source for low-latency UE5-server-Web synchronization, operation relay, and recovery over HTTP and WebSocket."}],stack:["UE5 / C++ / Blueprint","Vue 3 / Three.js","Node.js / Express","WebSocket","状态同步"],images:[{src:"/media/projects/digital-twin.png",alt:{zh:"工业数字孪生建筑线框与显示控制面板",en:"Industrial digital twin with building outlines and display controls"},caption:{zh:"城市建筑数据与显示参数控制",en:"Building data and display-parameter controls"},position:"center"}],link:{label:{zh:"查看 Web 展示端仓库",en:"View the Web viewer repository"},href:"https://github.com/Ubik42/Vue3_Digital_Twin"}}];function Yn(a,r){return a[r]}const mT=`# UE5 Digital-Twin Client for Thermal-Power Inspection

During my UE5 client development internship at Shanghai Ruwei Electric Power, I worked on a server-coordinated digital-twin system for thermal-power inspection. UE5 handled the high-interaction 3D simulation while the Web client provided browser access and lightweight operations. Both clients shared state and command semantics and synchronized bidirectionally with the company server.

![Industrial digital twin capture](/media/projects/digital-twin.png)

> The public capture and repository show the companion Web viewer. The company UE5 client, internal assets, APIs, and operational data are not public.

## UE5 client work

- Structured equipment, monitoring points, interactions, and business services with C++, Blueprint, Actor Components, and Subsystems.
- Implemented equipment startup, operating-state transitions, telemetry, alarm linkage, inspection steps, and result feedback.
- Connected state machines and events to scene animation, materials, UI, and operation permissions.
- Used Data Assets, Asset Manager, asynchronous loading, object pooling, LOD, and Unreal Insights for runtime organization and profiling.

## Transferring UE5 patterns to the Web

- Transferred UE5 component, state-machine, event-bus, configuration-driven, and data/business/presentation patterns to Vue 3 and Three.js.
- Shared device IDs, state fields, event names, and command contracts across UE5, Web, and server code.
- Mapped Actor lifecycle and Game Thread constraints to Web state composition, subscriptions, and component mount/unmount rules.
- Built equivalent monitoring, equipment-operation, and camera interactions with UMG/Enhanced Input and Vue/Element Plus.

## UE5-server-Web synchronization

- Used the company server as the authoritative state source: HTTP supplied initial snapshots while WebSocket delivered telemetry, alarms, operations, and incremental state.
- Relayed UE5 and Web operations through server validation before broadcasting the accepted state to the other client.
- Used device IDs, operation IDs, sequence numbers, and timestamps for ordering, de-duplication, optimistic feedback, conflict rollback, and stale-message rejection.
- Added heartbeat, timeout, reconnection, snapshot recovery, UE5 Game Thread dispatch, and Web Store updates.
- Throttled and coalesced continuous telemetry while preserving acknowledged delivery for user operations.

## Web full-stack implementation

- Added the DigitalTwin page, routing configuration, and industrial-scene entry.
- Imported multiple FBX equipment and scene assets and handled hierarchy, transforms, and browser-side loading.
- Connected TresJS / Three.js TransformControls, parameter panels, and mechanical joint rotation.
- Built equipment-selection and control UI with Tweakpane and Element Plus.
- Organized scene initialization, selection state, controller switching, and debugging into a complete interaction loop.

The Web client uses Vue 3, TresJS / Three.js, Element Plus, and Express to carry the UE5-side device model, state machine, and interaction contracts into the browser. The upstream icegl / TresJS framework supplies general city, globe, and visualization modules; my work covers the industrial page, equipment assets, mechanical controls, state integration, and interaction-debugging layer.
`,fT=`# 火力发电检测 UE5 数字孪生客户端

这是我在上海如为电力担任 UE 数字孪生开发实习生期间参与的火力发电检测项目。主要工作不是单纯展示模型，而是把发电设备、运行状态、监测参数、告警和巡检任务组织成一套由公司服务器协调的数字孪生系统：UE5 承担高交互三维仿真，Web 承担浏览器访问与轻量操作，两端共享状态模型和指令语义，并与服务器进行低时延双向同步。

![工业数字孪生项目画面](/media/projects/digital-twin.png)

> 当前公开截图与仓库来自配套 Web 展示端；公司 UE5 客户端及业务数据未公开。以下内容按个人负责范围整理，不包含公司内部接口、资产和监测数据。

## UE5 仿真与业务场景

- 使用 C++、Blueprint、Actor Component 与 Subsystem 组织设备、监测点、交互对象和业务服务，降低场景对象与业务数据的直接耦合；
- 编写锅炉、汽轮机、发电机及监测设备的仿真场景逻辑，覆盖设备启停、联锁、运行状态切换、参数变化、告警联动、巡检步骤和结果反馈；
- 以状态机和事件分发连接设备状态、场景表现与 UI，使同一份业务状态能够同步驱动动画、材质、提示和操作权限；
- 使用 Data Asset 管理设备和流程配置，结合 Asset Manager、异步加载和对象池组织大型场景资源，并通过 LOD、Unreal Insights 检查运行时开销。

## 从 UE5 设计模式迁移到 Web

- Web 端不是一套割裂的展示页面，而是复用 UE5 客户端已经验证的组件化、状态机、事件总线、配置驱动和“数据--业务--表现”分层；
- 为 UE5、Web 与服务器统一设备 ID、状态字段、事件名称和指令协议，让同一设备操作在两类客户端中保持一致语义；
- UE5 使用 UMG / Enhanced Input 组织设备面板、趋势监控、告警、相机漫游和场景热点；Web 使用 Vue 3、Three.js、Element Plus 与相同状态模型完成浏览器侧交互；
- 将 UE5 的 Actor 生命周期和 Game Thread 更新约束，转换为 Web 端的组合式状态、事件订阅和组件挂载/卸载规则，避免页面切换后残留订阅或出现重复操作。

## UE5 / Server / Web 三端同步

- 以公司服务器作为权威状态源：客户端先通过 HTTP 获取设备、场景和权限快照，再通过 WebSocket 接收监测数据、告警和操作结果的增量更新；
- UE5 与 Web 发起的设备控制、参数修改和巡检操作都回传服务器校验，由服务器更新权威状态并广播给另一端，避免两个客户端各自维护互相冲突的状态；
- 为消息附加设备 ID、操作 ID、序列号和时间戳，处理乱序、重复消息和过期回包；本地操作先做乐观回显，收到服务器确认后提交，冲突时回滚到权威状态；
- 处理心跳、超时、断线重连和恢复后的快照补偿；UE5 网络消息先进入线程安全队列，再派发至 Game Thread 驱动场景对象和 UMG，Web 端则通过统一 Store 更新页面与 Three.js 场景；
- 对连续监测数据采用节流、合并和增量更新，操作指令保持可靠确认，使实时趋势、设备动画和用户控制在响应速度与一致性之间取得平衡。

## Web 全栈实现

- 新增 DigitalTwin 页面、路由配置与工业场景入口，把演示能力收拢为清晰的业务操作流程。
- 整理并导入多组 FBX 工业设备与场景资产，处理模型层级、位置、旋转、缩放和浏览器侧加载。
- 扩展 Three.js / TresJS 交互，将 TransformControls、参数面板和机械关节旋转连接起来。
- 使用 Tweakpane 与 Element Plus 组织显示参数、设备选择和工业控制按钮，让非图形开发人员也能直接调整状态。
- 处理场景初始化、选中状态、控制器切换和调试入口，使模型查看、参数修改与交互反馈形成完整闭环。

Web 端使用 Vue 3、TresJS / Three.js、Element Plus 与 Express，把 UE5 客户端的设备模型、状态机和交互协议迁移到浏览器，并承担轻量查看、参数控制和接口联调。公开仓库基于开源 icegl / TresJS 框架继续开发；通用城市、地球与数据可视化模块来自上游，我完成的是工业业务页面、设备资产接入、机械控制、状态衔接和交互调试部分。
`,pT=`# Fathom

Fathom is a submarine co-op game built around a physical control console. As primary programmer and gameplay-architecture owner, I organized navigation stages, routine maintenance, emergency faults, sonar minigames, health penalties, and progression into an extensible task loop. I also owned Game Mode, player input, minigame interfaces, UI/HUD data flow, and the complete hardware-to-Unreal path.

## Task gameplay

@[video: Task system and realtime HUD](/media/projects/fathom-task.mp4)

## Gameplay architecture

\`BP_FathomGameMode\` owns submarine stages, task scheduling, timers, success, failure, and progression. \`BP_FathomPlayerController\` centralizes keyboard, test, and external-controller events. Structs and Data Tables hold task type, duration, objective, and penalty data, while \`WBP_GameBase\` gives minigames a common enter, resolve, and exit interface.

When task-generation rules changed, I replaced a growing branch chain with a modular data-driven event system covering emergency interruption, routine rotation, countdown, resolution, and health penalties. Its state is bound to the task manager, alerts, minigames, and HUD.

## Physical controller path

Input travels through **Arduino Serial → Python Sender → MQTT → Python Receiver → OSC → Unreal PlayerController**. The bridge scans serial devices, parses the fixed field format, filters continuous and threshold inputs, and emits discrete gameplay events.

## Sonar gameplay

@[video: Sonar minigame capture](/media/projects/fathom-sonar.mp4)

Sonar is a schedulable gameplay module rather than an isolated demo: Game Mode issues the objective, the shared interface owns its state, physical controls drive scanning and confirmation, and the result returns to the task manager and HUD. The same path supports fast keyboard testing and the final exhibition console.

## Final integration

I audited the Game Mode, input pipeline, and minigame handoffs for null references, event ordering, and unexpected hardware values, then added validation gates, bounds checks, and fallback handling. I also wrote the first programming guide used to onboard engineers who joined mid-project.
`,gT=`# Fathom

Fathom 是一款围绕实体控制台设计的潜艇协作游戏。我担任主要程序与玩法架构负责人，把潜艇航行阶段、常规维护、紧急故障、声呐小游戏、失败扣血和最终推进组织成一套可扩展的任务循环，并负责 Game Mode、角色与输入、小游戏接口、UI/HUD 数据联动，以及 Arduino 控制器进入 Unreal 的完整通信链路。

> 展示说明：下方视频与图片只覆盖公开可见的部分实机画面，不能完整呈现蓝图架构、任务数据、硬件通信和异常处理等程序工作。程序职责按模块整理如下。

### 主要程序模块

- **游戏流程与阶段管理**：组织开局、潜航、常规任务、紧急故障、小游戏、失败扣血、最终推进与结束条件；
- **数据驱动任务系统**：用 Struct、Data Table 和统一任务接口描述任务类型、时限、目标、优先级、奖励与惩罚；
- **玩家与输入层**：集中处理键鼠、调试输入、实体旋钮、按钮、摇杆和传感器事件，并把设备值转换为游戏业务指令；
- **小游戏框架**：提供进入、运行、结算和退出生命周期，使声呐等玩法可以被 Game Mode 调度并把结果回写任务系统；
- **UI/HUD 数据流**：连接任务管理器、倒计时、警报、状态提示、小游戏界面与潜艇生命值，避免各界面自行维护重复状态；
- **通信与容错**：处理串口、MQTT、OSC、异步接收、缓冲、插值、空引用、事件乱序、越界输入和硬件断开后的回退。

## 任务玩法

@[video: 任务系统与实时 HUD 实机录像](/media/projects/fathom-task.mp4)

## Gameplay 架构

项目基于 Unreal Engine 5.5.4 First Person 模板。\`BP_FathomGameMode\` 负责潜艇阶段、常规任务与紧急任务的调度、计时、成功失败和推进条件；\`BP_FathomPlayerController\` 集中处理键鼠、测试输入与外部控制器事件；Struct 和 Data Table 保存任务类型、持续时间、目标与惩罚配置；\`WBP_GameBase\` 为声呐等小游戏提供统一的进入、结算与退出接口。

当策划在中期显著调整任务生成规则时，我没有继续堆叠分支，而是重构任务数据和事件调用链，把紧急任务插队、常规任务轮转、倒计时、成功回收与失败扣血拆成数据驱动结构。后端状态通过绑定同步到 Task Manager、警报弹窗、小游戏和 HUD，使新的任务组合可以沿用同一套生命周期，而不必重写整条蓝图链。

## 实体控制器链路

实体设备输入依次经过 **Arduino Serial → Python Sender → MQTT → Python Receiver → OSC → Unreal PlayerController**。Sender 自动扫描串口并转发固定格式字段；Receiver 解析 \`POT\`、\`ENC\`、\`FSR\`、\`JOYX\`、按钮和按键，对连续值做方向与阈值判断，再把离散事件发送给 Unreal。

早期同步测试中，输入包到达时间不稳定，导致角色抖动。我把接收工作移出阻塞主流程，加入缓冲、边界判断和角色侧插值，同时避免让 OSC 直接模拟 Enhanced Input 按键，最终改为由 PlayerController 发出业务事件。

## 声呐玩法

@[video: 声呐小游戏实机录像](/media/projects/fathom-sonar.mp4)

声呐不是独立演示，而是任务系统中的一个可调度模块：Game Mode 下发目标，统一接口接管小游戏状态，玩家通过实体旋钮和按键完成扫描与确认，结果再回写任务管理器和 HUD。这样既能用键鼠快速测试，也能在最终展览中切换到真实控制台。

## 最终冲刺与稳定性

联合调试暴露出空引用、事件乱序和硬件异常值等问题。我重新审计 Game Mode、输入管线和小游戏接口，在关键交接点加入 Null Check、状态门、范围检查和回退逻辑，并扩展接口适配最后确定的新控制器部件。

这一阶段让我从“逐个完成功能”转向检查系统之间的数据流、生命周期和失败路径。我还整理了项目第一份程序技术手册，用于帮助中途加入的工程同学理解蓝图层级、输入协议和任务接口。
`,yT=`# House of Vampires

## Can you survive Dracula's Castle?

Enter a gothic castle inspired by classic horror films. Use items scattered around the mansion—and your own body—to solve puzzles and escape before Dracula catches you. The game supports keyboard and mouse as well as Xbox controllers, with post processing designed around a classic film look.

## My role and seven-week timeline

I was the primary Blueprint and technical-art developer, integrating first-person exploration, pickup and throwing, readable-item UI, hand animation, and puzzle feedback into a continuous interaction chain. Over seven weeks I also delivered the swarm system, blood-reveal effect, material tests, hand rig, animation refinement, and final gameplay integration.

![Seven-week timeline and hand asset](/media/projects/hov-diary/image-000.png)

## Hand rig, animation, and Blueprint integration

![Hand animation sequence](/media/projects/hov-diary/image-001.png)

![Animation integration in Unreal](/media/projects/hov-diary/image-002.png)

## Readable pickup interaction

![Pickup prompt and reading interface](/media/projects/hov-diary/image-003.png)

## Swarm algorithm and VFX

![Swarm and clustering tests](/media/projects/hov-diary/image-004.png)

## Particle and virtual-material interaction

![Particle interaction test](/media/projects/hov-diary/image-005.png)

![Blood splatter revealing hidden text](/media/projects/hov-diary/image-006.png)

## Public release

![Published itch.io page](/media/projects/hov/itch-page.webp)
`,vT=`# House of Vampires

## 你能逃出德古拉的城堡吗？

进入这座受经典恐怖电影启发的哥特式城堡。玩家需要利用宅邸里散落的物品以及自己的身体解开谜题，在德古拉抓住自己之前逃离城堡。游戏完整支持键盘鼠标与 Xbox 手柄，并通过后期处理塑造经典恐怖片的胶片质感。

建议佩戴耳机游玩。

> 展示说明：下方素材主要记录手部绑定、特效和公开页面，只是我在项目中的部分工作。游戏程序以 Unreal Blueprint 为主，完整职责还包括 Gameplay 框架、交互系统、谜题状态和关卡流程。

## Gameplay 蓝图框架与程序模块

在七周开发周期内，我将基础玩法拆成可以重复使用的蓝图模块，使谜题、物品和 UI 不需要各自维护一套互不兼容的逻辑：

- **游戏流程与状态管理**：组织开始、探索、谜题推进、德古拉追逐、失败重置和逃离结算等阶段；
- **玩家与输入模块**：统一键鼠与 Xbox 手柄输入，并管理移动、视角、交互、持有、投掷、阅读和退出阅读等状态；
- **可交互对象框架**：用接口和基础蓝图区分拾取物、信件、机关与场景触发物，统一焦点检测、提示、执行和失效条件；
- **物品生命周期**：处理场景物品被发现、拾取、持有、投掷、使用、销毁或重新生成时的状态与引用；
- **谜题与事件链**：把道具条件、机关状态、环境反馈和后续事件连接起来，避免关卡逻辑散落在单个 Actor 中；
- **UI 与反馈层**：联动交互提示、读信界面、谜题反馈、声音、动画与 VFX，并保证界面打开时玩家输入状态正确切换；
- **关卡稳定性与发布**：检查空引用、重复触发、状态未复位和手柄路径，完成 Windows 打包及 itch.io 上线版本收口。

## 我的职责与七周开发过程

我担任主要蓝图程序与技术美术开发，把第一人称探索、物品拾取、持有与投掷、读信 UI、手部动画和谜题反馈整合为可连续游玩的交互链。七周内还完成鼠群算法、血液显字特效、材质实验、手部绑定与动画优化，并参与最终关卡机制收口。

![七周开发时间线与手部资产](/media/projects/hov-diary/image-000.png)

## 手部绑定、动画与引擎接入

第一人称交互需要双手拾取、持有、投掷和翻阅物品。我建立手部资产和动画序列，将动画状态接入蓝图交互，并在后期持续修正姿态和切换效果。

![手部动画序列](/media/projects/hov-diary/image-001.png)

![手部动画在 Unreal 蓝图中的接入](/media/projects/hov-diary/image-002.png)

## 可拾取读信系统

读信交互包含物品提示、拾取状态、阅读 UI 和退出阅读的完整流程。蓝图把场景中的可拾取物、玩家手部动画和界面状态连接在一起。

![可拾取信件、交互提示与阅读界面](/media/projects/hov-diary/image-003.png)

## 鼠群算法与 VFX

鼠群效果先通过群集与 PBD 方向的实验验证移动和聚集，再结合关卡目标调整密度与视觉表现。

![鼠群算法与群集效果测试](/media/projects/hov-diary/image-004.png)

## 粒子与虚拟材质交互

血液显字效果让粒子命中表面后改变虚拟材质中的显示区域，使隐藏文字随着喷溅逐步显现。

![粒子与虚拟材质交互测试](/media/projects/hov-diary/image-005.png)

![血液喷溅逐步显现文字的最终效果](/media/projects/hov-diary/image-006.png)

## 公开上线

项目完成 Windows 打包并发布到 itch.io。下面保留上线页面与实机截图，游戏介绍、下载入口和玩家信息均来自实际发布页。

![House of Vampires 的 itch.io 上线页面](/media/projects/hov/itch-page.webp)
`,bT=`# Retro 3D Arcade Prototype

A retro Unity game based on a Q*bert-like loop. I owned the complete gameplay implementation: character movement and state, animation flow, tile feedback, enemies, level logic, and the loop from start through failure and restart. I also led the custom shader-pipeline experiment and created part of the 2D character art.

## 3D animation to pixel sprites

I modeled and animated a Q*bert character, then exported sprite sequences containing color, alpha, and normal information. A Unity shader reconstructed the silhouette and used the normal channel for realtime lighting.

![3D-to-2D sprite and shader experiment](/media/projects/retro-diary/image-000.png)

The pipeline worked but was not adopted: detailed characters produced excessive noise at the chosen 45-degree view, and the schedule did not allow the full 3D asset set to be completed.

## Character concepts and 2D art

![Character and animation sprite sheets](/media/projects/retro-diary/image-001.png)

The available material primarily documents the pipeline experiment; no sufficiently clear final gameplay capture is presented as a finished result.
`,ST=`# Retro 3D Arcade Prototype

这是一个以 Q*bert / 吃豆人式循环为原型的复古 3D Unity 游戏。我负责完整玩法程序与核心循环：角色移动和状态机、动画状态、踩格反馈、敌人与关卡逻辑，以及从开局到失败重开的流程；同时主导特殊 Shader 管线实验，并绘制部分 2D 角色素材。

> 展示说明：目前公开素材重点记录 Shader 与角色制作实验，只是项目的一部分；完整 Gameplay 工作主要由 Unity C# 脚本、状态机和关卡数据承担。

## Unity Gameplay 程序模块

- **游戏流程控制**：管理开局、游戏中、过关、失败、暂停和重新开始，并统一清理上一局状态；
- **角色移动与状态机**：实现基于格点/方向的移动规则、输入锁定、跳跃落点、受击和动画状态切换；
- **方块与踩格系统**：维护格子占用、踩踏结果、视觉变化和关卡完成度，使不同关卡可以复用同一规则；
- **敌人与关卡逻辑**：组织敌人生成、移动目标、碰撞结果和玩家失败条件，并将难度参数从具体角色脚本中拆出；
- **动画与表现适配层**：让同一玩法状态可以驱动 3D 动画或像素序列帧，便于在两种美术方案之间切换；
- **UI 与重开链路**：同步分数、进度和失败反馈，确保重新开始后角色、敌人、格子和界面状态一起复位；
- **Shader 数据管线**：输出颜色、Alpha 与法线序列帧，并在 Unity 中重建轮廓和实时受光表现。

## 原型与美术方向

项目早期确定 Q*bert 式踩格玩法，并把踩过方块后的视觉反馈设计为魔法阵，让整体气质更偏“邪异”而不是纯恐怖。

## 从 3D 动画烘焙像素序列帧

我尝试复现《Dead Cells》式 3D 到 2D 流程：建模并绑定原始 Q*bert 角色，制作动画，再输出包含颜色、Alpha 与法线信息的序列帧材质。

![3D 动画转像素序列帧与 Unity Shader 实验](/media/projects/retro-diary/image-000.png)

Unity Shader 根据 Alpha 重建轮廓，并利用法线贴图让 2D Sprite 响应实时光照。整条流程成功运行，但没有进入最终迭代：45 度视角下，细节较多的角色会产生明显噪点；同时项目周期不足以完成全部 3D 资产。

## 角色概念与 2D 素材

在后续阶段，我参与主角和敌人的概念设计，并第一次独立绘制用于展示和动画的 PNG 序列帧。

![本人绘制的角色与动画序列帧](/media/projects/retro-diary/image-001.png)

程序与美术实验最终共用同一套角色状态和动画驱动方式，使玩法原型可以在 3D 角色与像素序列帧方案之间切换。当前保留的素材重点记录这条技术管线；没有足够清晰的最终录像，因此页面不以实验画面冒充成品 Gameplay。
`,wT=`# Through Other Eyes

A VR experience about navigating a city with restricted vision. In a two-person team, I worked across programming, technical art, and game design: shaping the core experience, designing the map route and event pacing, building scenes and interaction logic, and producing the guide-dog and foot rigs, shaders, VFX, UI, and opening scene.

![Project one sheet](/media/projects/through-other-eyes-cover.webp)

## Route and interaction plan

I translated the theme into a playable route: obstacles control pacing, broadcasts and the phone provide audio cues, while traffic and the guide dog change how the player reads the space. The route plan maps those triggers and events into one continuous experience.

![Level route and interaction points](/media/projects/through-other-eyes-level.webp)

## VR captures

![Guide dog encounter](/media/projects/through-other-eyes-vr.png)

![Cane exploration and city broadcast](/media/projects/through-other-eyes/screenshot2.png)

![Collision feedback](/media/projects/through-other-eyes/screenshot3.png)

![Phone broadcast interaction](/media/projects/through-other-eyes/screenshot4.png)

No suitable VR recording was available, so the page keeps actual headset captures rather than substituting unrelated footage.

## From experience design to VR implementation

![Shader and rendering tests](/media/projects/through-other-eyes-diary/image-000.png)

![Floating-ink shader experiment](/media/projects/through-other-eyes-diary/image-001.png)

![VFX tests](/media/projects/through-other-eyes-diary/image-002.png)

![Guide-dog rigging work](/media/projects/through-other-eyes-diary/image-003.png)

![Puzzle and UI feedback](/media/projects/through-other-eyes-diary/image-005.png)

![Interaction prompt design](/media/projects/through-other-eyes-diary/image-007.png)

![Opening scene](/media/projects/through-other-eyes-diary/image-009.png)

The project required design, level scripting, programming, and technical art to be considered as one system. A visual effect stayed only when it helped players understand the space and move the event chain forward.
`,AT=`# Through Other Eyes

这是一个运行于 VR 的视障体验项目。玩家以受限视觉穿过城市，通过白杖、声音、广播和导盲犬理解空间并寻找前进方向。在两人团队中，我同时承担程序、技术美术与玩法策划工作：参与定义核心体验，负责地图路线、事件节奏与交互节点设计，并完成场景搭建、事件逻辑、导盲犬和角色脚部绑定动画，以及 Shader、VFX、UI 和 Opening Scene。

> 展示说明：下方图片以关卡规划、VR 实机与 TA 制作过程为主，只展示了部分工作；程序部分主要存在于 VR Pawn、交互蓝图和关卡事件链中，静态截图无法完整呈现。

## VR Gameplay 与事件框架

- **VR Pawn 与输入**：组织头显、手柄、白杖和移动输入，统一可交互对象的检测、提示与执行入口；
- **路线状态管理**：按城市路线记录当前阶段、已完成事件和可触发节点，避免玩家回头或重复进入区域时破坏流程；
- **关卡事件调度**：用 Trigger、事件分发和状态条件串联车辆、广播、手机、障碍物、导盲犬与 Opening Scene；
- **声音与空间引导**：将广播、环境声和事件提示绑定到位置与任务状态，让受限视觉下的导航仍有可读反馈；
- **碰撞与失败反馈**：处理白杖探测、障碍碰撞、提示 UI 和事件复位，使玩家可以理解错误方向并重新尝试；
- **角色与导盲犬接入**：把导盲犬及脚部绑定动画连接到事件状态和场景触发，而不是作为独立播放的展示动画；
- **调试与体验收口**：提供关键事件的快速触发和复位路径，持续检查 VR 舒适度、提示时机与路线可读性。

![项目 One Sheet](/media/projects/through-other-eyes-cover.webp)

## 路线与交互点

我把抽象的“视障体验”拆成一条可以实际游玩的城市路线：用障碍物控制行进节奏，以广播和手机提供声音线索，再通过车辆、导盲犬等事件改变玩家对空间的判断。关卡规划图标出了路线、触发区和关键事件，场景搭建与事件脚本均围绕这套节奏展开。

![完整关卡路线与交互点规划](/media/projects/through-other-eyes-level.webp)

## VR 实机画面

![在城市中找到导盲犬](/media/projects/through-other-eyes-vr.png)

![白杖探索与城市广播文字](/media/projects/through-other-eyes/screenshot2.png)

![障碍碰撞反馈](/media/projects/through-other-eyes/screenshot3.png)

![手机广播交互](/media/projects/through-other-eyes/screenshot4.png)

项目没有合适的 VR 录制版本，因此这里保留头显中的实际截图，而不使用与成品无关的替代视频。

## 从体验设计到 VR 落地

前期集中探索受限视觉下的渲染语言与 Shader，并尝试让地面物体产生漂浮墨水效果。测试后发现它会干扰路线阅读，因此没有为了保留效果而强行采用。

![Shader 与渲染效果测试](/media/projects/through-other-eyes-diary/image-000.png)

![浮动墨水 Shader 实验](/media/projects/through-other-eyes-diary/image-001.png)

中后期我把工作重点转向可玩的事件链：补齐 VFX 与 UI 反馈，制作导盲犬及脚部绑定动画，搭建 Opening Scene，并把地图中的提示、碰撞、广播和移动事件串成完整体验。

![VFX 测试](/media/projects/through-other-eyes-diary/image-002.png)

![导盲犬模型与绑定工作](/media/projects/through-other-eyes-diary/image-003.png)

![谜题与 UI 反馈设计](/media/projects/through-other-eyes-diary/image-005.png)

![交互提示设计](/media/projects/through-other-eyes-diary/image-007.png)

![Opening Scene 与标题画面](/media/projects/through-other-eyes-diary/image-009.png)

这个项目让我在极小团队中把策划、关卡、程序和技术美术放在同一条体验链上思考：视觉效果是否保留，不取决于它单独是否漂亮，而取决于它能否帮助玩家读懂空间并推动事件。
`,Bg={fathom:{zh:gT,en:pT},"house-of-vampires":{zh:vT,en:yT},"through-other-eyes":{zh:AT,en:wT},"retro-arcade":{zh:ST,en:bT},"digital-twin":{zh:fT,en:mT}},TT=[{slug:"toon",title:"UE Toon 卡通光照与描边",label:"引擎渲染 · 风格化着色",summary:"以三段明暗色块和反向壳描边表现雕塑轮廓，研究材质级卡通光照与环境之间的视觉关系。",summaryEn:"Material-level toon lighting with three shading bands and inverted-hull outlines on a sculptural subject.",tags:["UE 5.8","HLSL","Toon Shading","轮廓描边"],map:"01_Toon",source:"BV11Sej6kEGi",detail:`## 明暗色块与轮廓

将表面朝向与光照方向的关系分成三个亮度区间，分别赋予亮面、过渡面和暗面的颜色。反向壳描边沿法线扩张模型轮廓，从背景中勾出主体。雕塑置于石质柱廊中，镜头缓慢移动，展示色块和外轮廓随观察角度的变化。

材质由 Python 脚本生成，HLSL 保存在 build_showcase.py 中；场景由 C++ 构造。当前为材质级实现，未修改 Substrate 引擎源码，也未实现专用面部 SDF。雕塑使用 Epic Starter Content。`,detailEn:`## Shading bands and silhouette

Surface orientation relative to the light is divided into three color bands. An inverted hull expands the mesh along its normals to outline the silhouette. A moving camera presents the sculpture against a stone colonnade.

Python generates the materials from HLSL stored in build_showcase.py, while C++ constructs the scene. This is a material-level study, without Substrate source modifications or a dedicated face SDF. The statue uses Epic Starter Content.`},{slug:"wind",title:"GPU 风场与交互植被",label:"引擎模拟 · 风场与植被",summary:"64×64 GPU 风场驱动约 3.3 万草叶；球体经过时草叶弯折，离开后按弹簧状态逐渐回弹。",summaryEn:"A 64×64 GPU wind field drives roughly 33,000 grass blades, with sphere interaction and spring recovery.",tags:["UE 5.8","Compute Shader","双缓冲","WPO"],map:"02_Wind",source:"BV1Epej6wECw",detail:`## 风场、弯曲与回弹

计算着色器更新 64×64 的风场及草叶弯曲状态，前后两份缓冲交替读写，保留上一帧的运动结果。草叶材质读取这些状态，通过顶点位置偏移（WPO）改变叶片形状；移动球体施加局部影响，离开后由弹簧响应恢复。

起伏地形上布置约 3.3 万草叶，配合灌木、岩石和花朵，观察同一片风场如何作用于不同位置。模拟逻辑位于 Simulation.usf 的 Mode 0，AITAGPU.cpp 负责 RDG 调度。当前只展示一个场域，未提供通用多风源编辑器。`,detailEn:`## Wind, bending, and recovery

A compute shader updates a 64×64 wind field and bending state using alternating read/write buffers. The grass material reads this state through World Position Offset. A moving sphere bends nearby blades, which recover through a spring response.

Approximately 33,000 blades cover rolling terrain with bushes, rocks, and flowers. Simulation.usf Mode 0 implements the update; AITAGPU.cpp schedules it through RDG. The current scene uses one field rather than a general multi-source wind editor.`},{slug:"schooling",title:"GPU 鱼群与群体行为",label:"引擎模拟 · GPU 群体",summary:"1,024 条鱼在 GPU 上独立更新位置与速度，通过分离、对齐、聚合与障碍回避形成连续群游。",summaryEn:"1,024 GPU agents form a moving school through separation, alignment, cohesion, and obstacle avoidance.",tags:["UE 5.8","GPU Boids","Compute Shader","WPO"],map:"03_GPUAgents",source:"BV1bxeJ6dEgf",detail:`## 个体规则形成群体运动

每条鱼保留自己的位置与速度：距离过近时分开，参考邻居的速度调整方向，并向邻居的中心靠拢；接近障碍时增加避让。计算着色器更新 1,024 个个体，材质读取结果后驱动鱼的网格位置和朝向。

演示用海底色调、分枝珊瑚与岩石呈现群游路径。更新逻辑位于 Simulation.usf 的 Mode 1。当前采用全邻域比较，复杂度为 O(N²)，尚未使用空间网格加速；也未扩展为鸟群或通用生物模拟插件。`,detailEn:`## Local rules, collective motion

Each fish stores its own position and velocity. Separation avoids crowding, alignment follows neighboring velocities, cohesion moves toward the local center, and obstacle avoidance adds a steering response. A compute shader updates all 1,024 agents; the material reads the resulting positions and directions.

The scene places the school among branching coral and rocks. Simulation.usf Mode 1 uses an all-pairs O(N²) neighborhood search, without spatial-grid acceleration or a general-purpose creature simulation plugin.`},{slug:"cloth",title:"XPBD 布料与碰撞解算",label:"引擎物理 · 布料模拟",summary:"1,025 顶点的织物响应风力和球体碰撞，通过距离、剪切与弯曲约束保持形状，并实时更新法线。",summaryEn:"A 1,025-vertex cloth responds to wind and sphere collisions through distance, shear, and bending constraints.",tags:["UE 5.8","C++","CPU XPBD","碰撞解算"],map:"04_ClothMaterials",source:"BV1n5eA6FEAH",detail:`## 约束求解与表面更新

布料由 1,025 个顶点组成。风力改变顶点运动，XPBD 求解器再迭代修正相邻点的距离、网格剪切与跨点弯曲关系，使织物保持连接；与球体接触的顶点被修正到碰撞表面外。变形后更新法线，让光照随褶皱变化。

BuildCloth 构造网格和约束，StepCloth 在 CPU 上推进模拟。当前弯曲以跨点距离约束近似，没有复现参考方案的 GPU 二面角求解器；此演示也不代表完整服装解算系统。`,detailEn:`## Constraint solving and surface updates

Wind moves the 1,025 cloth vertices. The XPBD solver iteratively corrects distance, shear, and cross-point bending constraints, while sphere contacts move vertices outside the collision surface. Normals update with the deformation.

BuildCloth creates the mesh and constraints; StepCloth advances the simulation on CPU. Bending is approximated by cross-point distances rather than the reference's GPU dihedral solver. This is a focused cloth study, not a complete garment solver.`},{slug:"cosmos",title:"程序化行星与宇宙渲染",label:"引擎渲染 · 程序化宇宙",summary:"差速云带、几何星环、星云和流星共同构成行星场景，以程序化材质组织近景纹理与远景空间层次。",summaryEn:"Procedural planetary bands, geometric rings, nebulae, and meteors create a layered moving space scene.",tags:["UE 5.8","HLSL","程序化材质","星环与星云"],map:"05_Cosmos",source:"BV1uUeu6cEmG",detail:`## 云带、星环与远景

球体材质生成不同速度的云带，环形网格呈现星环细纹；远处叠加星点和分形噪声星云，流星按解析轨迹运动。相机缓慢绕行，让行星、星环与背景保持不同的空间层次。

核心材质包括 M_Planet、M_Ring、M_Nebula 和 M_Meteor，源码位于材质生成脚本。当前使用球体与环形网格，未复现参考视频的等面积方向域、球面流场与 GPU 历史输运框架。`,detailEn:`## Bands, rings, and distant space

The sphere material generates planetary bands with different motion rates. Ring geometry carries fine detail, while stars and a fractal-noise nebula provide the distant background. Meteors follow analytic trajectories as the camera orbits.

M_Planet, M_Ring, M_Nebula, and M_Meteor are generated from the material script. This version uses sphere and ring meshes rather than the reference's equal-area direction domain, spherical flow, or GPU history-transport framework.`},{slug:"fog",title:"光线步进体积雾与光束",label:"引擎渲染 · 体积光照",summary:"沿视线做 64 步体积积分，累计雾密度、吸收与光照贡献，结合短程自遮蔽呈现柱廊中的流动雾层。",summaryEn:"64-step ray marching accumulates density, absorption, and light, with short-range self-shadowing through a ruined colonnade.",tags:["UE 5.8","Ray Marching","体积积分","程序化密度"],map:"06_VolumetricFog",source:"BV1oUe66hEfa",detail:`## 视线中的密度与光

对每个像素沿视线采样 64 次，读取程序化空间密度，逐步累计光照并按吸收关系衰减透射率。多层噪声产生不均匀的雾层，短程自遮蔽和解析光束共同表现明暗。柱廊与岩石提供尺度参照，观察雾随时间和视角的变化。

主要实现位于 M_Fog 的 HLSL，源码保存在 build_showcase.py。当前密度由程序化函数产生，没有 MAC 流体压力求解、Froxel 网格或历史重投影。`,detailEn:`## Density and light along the view ray

For each pixel, 64 samples accumulate lighting through procedural density while absorption reduces transmittance. Layered noise shapes the fog; short-range self-shadowing and analytic beams add contrast. Columns and rocks provide spatial context.

The implementation lives in M_Fog, with HLSL stored in build_showcase.py. Density is procedural: this version does not implement a MAC fluid pressure solver, froxel grids, or temporal reprojection.`},{slug:"fracture",title:"Chaos 破碎与程序化溶解",label:"引擎物理与渲染 · 破碎特效",summary:"48 个 Voronoi 凸块通过 Chaos 刚体模拟散落，再用溶解边缘和同场碎屑串起破碎到消散的过程。",summaryEn:"48 pre-cut convex Voronoi chunks scatter through Chaos physics, then dissolve with edge highlights and debris.",tags:["UE 5.8","Chaos","Voronoi 分块","溶解 Shader"],map:"07_FractureDissolve",source:"BV1Tteb6jEEr",detail:`## 从刚体破碎到材质消散

石柱预先分为 48 个凸 Voronoi 块，交给 Chaos 处理运动与碰撞。分块散落后，溶解材质逐渐移除表面，并保留发亮的边缘；同场碎屑衔接实体破碎与最终消失的视觉过程。

BuildFracture 生成分块，M_Dissolve 和 M_Sparks 控制消散表现。当前为预切石柱演示，没有任意网格修复、运行时通用切割或可断裂连接图。`,detailEn:`## From rigid fragments to dissolution

A column is pre-cut into 48 convex Voronoi chunks. Chaos simulates their movement and collisions; a dissolve material removes their surfaces while retaining a bright edge, with debris continuing the visual transition.

BuildFracture generates the chunks, and M_Dissolve and M_Sparks provide the disappearance effect. The scene does not include arbitrary-mesh repair, general runtime cutting, or a breakable bond graph.`}],CT=TT.map(a=>({id:`aita-${a.slug}`,title:a.title,category:"engine-games",categoryLabel:{zh:a.label,en:"Unreal rendering and simulation"},summary:{zh:a.summary,en:a.summaryEn},cover:`/media/repositories/aita-systems/${a.slug}.webp`,tags:a.tags,repositoryUrl:`https://github.com/Ubik42/AITASystems58/tree/main/Content/AITA/Demos/${a.map}`,story:{zh:`# ${a.title}

@[video: ${a.title} · UE 编辑器实录](/media/repositories/aita-systems/${a.slug}.mp4)

${a.detail}

## 工程与来源

本项与另外六项演示共用 [AITASystems58 工程](https://github.com/Ubik42/AITASystems58)，有独立关卡入口。[查看全部七项](?work=aita-systems)。基于[夏末冬至烧冻鸡翅的原视频](https://www.bilibili.com/video/${a.source}/)进行学习复现，以上描述为本地工程的实际实现。

录像保留真实 UE 编辑器窗口，按固定时间步长采集，不作为实时帧率测试。环境岩石、雕塑和灌木使用 Epic Starter Content，首次运行需按工程 README 添加。`,en:`# ${a.title}

@[video: Unreal Editor recording](/media/repositories/aita-systems/${a.slug}.mp4)

${a.detailEn}

## Project and reference

This study shares the [AITASystems58 repository](https://github.com/Ubik42/AITASystems58) with six other demos and has its own map. [View all seven](?work=aita-systems). It is an independent learning reproduction inspired by [the original video](https://www.bilibili.com/video/${a.source}/); the description above documents the local implementation.

The footage captures the real editor at a fixed simulation timestep, not a performance benchmark. Rocks, the statue, and bushes use Epic Starter Content, which must be added following the repository README.`}})),Sn={id:"aita-systems",title:"UE 实时图形实验室：七项渲染与模拟",category:"engine-games",categoryLabel:{zh:"渲染与物理模拟 · 学习复现",en:"Rendering and simulation studies"},summary:{zh:"一个 UE 5.8 C++ 工程，串联 Toon、交互草地、GPU 鱼群、布料、宇宙、体积雾与破碎溶解；附真实编辑器录像和可切换的七个展项。",en:"Seven interactive UE 5.8 C++ studies covering toon shading, grass, GPU schooling, cloth, planets, volumetric fog, and fracture, with actual editor recordings."},cover:"/media/repositories/aita-systems/overview.png",tags:["UE 5.8","C++ / HLSL","RDG / Compute","Chaos / XPBD"],repositoryUrl:"https://github.com/Ubik42/AITASystems58",story:{zh:`# UE 实时图形实验室

参考[夏末冬至烧冻鸡翅的七条技术美术演示](https://space.bilibili.com/1080308077)，把渲染与模拟方向组织成一个独立学习复现工程。场景共用材质生成、GPU 状态更新和展示控制，运行后用左右方向键切换。

独立项目：[Toon 卡通光照](?work=aita-toon) · [风场植被](?work=aita-wind) · [GPU 鱼群](?work=aita-schooling) · [XPBD 布料](?work=aita-cloth) · [宇宙渲染](?work=aita-cosmos) · [体积雾](?work=aita-fog) · [破碎溶解](?work=aita-fracture)。

@[video: 七项演示 · 真实 UE 编辑器窗口 · 约 42 秒](/media/repositories/aita-systems/showcase.mp4)

## 七个展项

- **光与色块**：三段光照与反向壳描边，观察轮廓和明暗色块。
- **风过草甸**：64×64 GPU 风场驱动约 3.3 万草叶，移动球体压弯草叶后逐渐回弹。
- **群游**：1,024 条鱼在 GPU 上更新位置与速度，按分离、对齐和聚合规则移动并避开障碍。
- **风中的织物**：1,025 个顶点通过 CPU XPBD 约束求解保持织物形状，响应风力与球体碰撞。
- **遥远的轨道**：程序化云带、星环、星空与流星，在缓慢移动的镜头下展示层次。
- **雾中有光**：沿视线做 64 步体积积分，累计程序化雾密度的吸收与光束贡献。
- **瓦解与新生**：48 个预切 Voronoi 凸块由 Chaos 模拟碰撞，再结合溶解边缘与碎屑呈现消散。

## 工程与范围

源码、项目材质、主展示关卡及七个独立关卡均在仓库。GPU 模拟使用计算着色器与 RDG 调度；展示场景在运行时生成。首次运行需要编译 C++ 模块，并按 README 添加 Epic Starter Content。

当前为效果方向的学习复现：Toon 未修改引擎源码，布料使用 CPU 求解，雾密度没有流体压力求解，破碎使用预切凸块。逐项差异与七条原视频链接收录在仓库，未接入 AI 模型运行时。

录像完整保留 UE 编辑器边框，采用固定时间步长采集，不代表实时性能基准。岩石、雕塑和灌木来自 Epic Starter Content；原作者视频与 Epic 外部资产不随源码重新分发。`,en:`# UE Realtime Graphics Lab

An independent learning project inspired by [seven technical-art videos by 夏末冬至烧冻鸡翅](https://space.bilibili.com/1080308077). One UE 5.8 C++ project shares GPU state updates, material generation, and gallery controls across seven scenes.

@[video: Seven studies recorded in the actual Unreal Editor, approximately 42 seconds](/media/repositories/aita-systems/showcase.mp4)

## The seven studies

- Three-band toon shading and inverted-hull outlines.
- Approximately 33,000 grass blades driven by a 64×64 GPU wind field, with sphere interaction and spring recovery.
- 1,024 GPU schooling agents with separation, alignment, cohesion, and obstacle avoidance.
- A 1,025-vertex CPU XPBD cloth responding to wind and sphere collisions.
- Procedural planetary bands, geometric rings, stars, and meteors.
- 64-step volumetric integration with procedural density and analytic light beams.
- 48 pre-cut convex Voronoi chunks with Chaos physics, dissolve edges, and debris.

## Scope and setup

The repository includes C++, HLSL, generated project materials, the main gallery, and seven standalone maps. Build the C++ module and add Epic Starter Content as described in the README. Scenes are constructed at runtime.

These are effect studies rather than a complete reproduction of the reference frameworks: toon shading is material-level, cloth runs on CPU, fog has no fluid pressure solver, and fracture uses pre-cut chunks. No AI model runs at runtime. The repository lists all seven reference videos and implementation differences.

The recording captures the actual editor window at a fixed simulation timestep; it is not a performance benchmark. Rocks, the statue, and bushes use Epic Starter Content. Reference videos and external Epic assets are not redistributed with the source.`}},xT={id:"ray-tracing-hardware",title:"光线追踪架构与性能实验",category:"engine-games",categoryLabel:{zh:"C++ 渲染与硬件模拟",en:"C++ rendering & architecture simulation"},summary:{zh:"球体求交单元实现 2.54 倍模拟周期加速。基于 Arches / TRaX 完成并行 kernel、缓存配置与 RISC-V 指令实验，以图像和日志验证结果。",en:"Parallel ray-tracing kernels, cache experiments, RISC-V instructions, and a dedicated sphere pipeline. A three-sphere workload achieves a 2.54× simulated-cycle speedup with matching images."},cover:"/media/repositories/ray-tracing-hardware/teapot-shading.webp",tags:["C++","Arches / TRaX","RISC-V","光线追踪","缓存与流水线"],story:{zh:`# 光线追踪架构与性能实验

围绕像素任务调度、缓存层级、自定义指令和专用求交流水线完成的个人课程项目。基于犹他大学 CS 6959 的 Arches / TRaX 教学框架，在现有架构上实现 kernel、修改硬件配置，并用图像和模拟日志验证结果。上方为重心插值指令生成的茶壶着色画面。

## 结果与实验条件

- **球体求交加速 2.54 倍**：设备内存软件版 206,818 周期，专用单元版 81,485 周期，输出逐像素一致。
- **初始 L3 方案的周期减少 37.8%**：从 158,135 降至 98,287；原始 64 TM 方案为 95,902 周期。
- **打通 RISC-V 指令与模拟硬件**：从内联汇编、解码和寄存器依赖，到缓存请求、流水线处理和结果写回。

性能数据来自 Arches 周期级模拟。上述对照实验使用 1024×1024 图像、1,515 MHz 模拟核心频率；各组固定自己的工作负载。球体实验和茶壶实验分别比较，不合并为同一个加速比。

## 并行 kernel 与像素分组

使用 RISC-V 工具链编译 C++ kernel，通过 fchthrd() 领取唯一任务编号，将每个任务映射到 framebuffer 中的一个像素。先完成渐变与日落图案，再将每组 32 个线程映射到 4×8 像素矩形，使相邻主光线有机会复用同一 TM 的 L1 缓存。

![自定义像素 kernel：渐变、太阳与棋盘前景](/media/repositories/ray-tracing-hardware/custom-pattern.webp)

350×350 的分组测试保留了右侧两列未覆盖的边界，并增加越界写入检查。主光线 kernel 使用相机生成光线，初始化 Hit，再调用 traceray 得到最近交点；茶壶命中区域与背景分别着色。

![主光线可见性：茶壶命中区域与背景](/media/repositories/ray-tracing-hardware/primary-visibility.webp)

## 缓存层级：性能与共享方式

固定茶壶场景和每像素一个样本、最多三次光线迭代的环境遮蔽 kernel，比较 8 TM、64 TM、新增 L3 和调整后的 L3 配置。

![四组缓存与计算配置的模拟周期](/media/repositories/ray-tracing-hardware/cache-zh.svg)

TM 从 8 个增加到 64 个，周期从 456,551 降至 95,902，约加速 4.76 倍。新增局部 L2 和 480 周期 L3 后，周期上升到 158,135，L2 的 MSHR 等待计数达到 395,182。

后续将局部 L2 从每 8 个 TM 共享改为每 4 个 TM 共享，并共同调整缓存容量、bank 数、MSHR 数和访问延迟。周期降至 98,287，L2 MSHR 等待计数降至 40。此组同时改变了多项资源与延迟参数，测量反映整组配置的效果。

这次实验展示了命中率之外的瓶颈：最终局部 L2 命中率更低，但并发请求处理能力改善，整体运行更快。新增 L3 时还扩展了 cache bypass mask，保证 framebuffer store 的访问路径正确。

## 自定义指令：三维重心插值

将三个顶点向量按重心坐标插值，封装为 BaryInterp3 指令。输入使用 f0–f10，结果写入 f28–f30；通过 custom-0 opcode 和内联汇编生成指令字 0x0001800b，在 Arches 中实现解码、运算回调与寄存器依赖检查。

软件版 90,455 周期，自定义指令版 87,257 周期，图像逐像素一致。本阶段将插值建模为 TP 内部的一周期操作；这一假设是解释性能结果的条件。

## 专用单元：带访存的球体求交流水线

实现三个阶段：硬编码球体的软件求交、读取设备内存的软件求交，以及专用硬件单元求交。每个球体用 16 字节存储球心与半径；kernel 通过寄存器传入光线和球体地址。

每个 TM 配置一个求交单元，包含 4 条深度为 44 周期的流水线，接收间隔为 1 周期。请求经过输入 crossbar，向 L1 加载球体，进入求交流水线，再经返回网络写入目标寄存器。等待表保存线程、处理器和寄存器信息；pending 状态阻止结果返回前的错误读取。

![球体求交单元输出：三个球体的主光线可见性](/media/repositories/ray-tracing-hardware/spheres.webp)

![设备内存软件版与专用单元的周期比较](/media/repositories/ray-tracing-hardware/sphere-zh.svg)

1024×1024 条主光线各测试三个球体，日志记录 3,145,728 次求交，与预期工作量一致。44 周期描述球体数据到达后的算术流水线，实际请求还包含缓存与排队延迟。

## 六次实践与技术范围

- 环境与基准：构建 Arches，运行课程提供的 Sponza kernel，区分模拟器运行耗时与模拟硬件帧时间。
- 程序与调度：编写像素 kernel，理解线程、tile、TP、TM 和延迟隐藏。
- 光线与局部性：完成 4×8 像素映射，以及 triangle / teapot 主光线可见性。
- 架构与分析：修改缓存拓扑和配置，结合周期与等待统计比较结果。
- 指令扩展：实现重心插值的编码、调用、解码和依赖检查。
- 专用流水线：连接设备内存、求交单元和寄存器返回路径。

项目展示 C++ 渲染实现、体系结构理解和性能分析能力。当前内容为前六次课程实验；期末项目的像素布局与缓存共享研究仍处于选题阶段。

## 记录与来源

[性能数据 CSV](/media/repositories/ray-tracing-hardware/measurements.csv) · [初始 L3 日志](/media/repositories/ray-tracing-hardware/cache-l3-initial.txt) · [调整后 L3 日志](/media/repositories/ray-tracing-hardware/cache-l3-tuned.txt)

[软件求交日志](/media/repositories/ray-tracing-hardware/sphere-software.txt) · [硬件求交日志](/media/repositories/ray-tracing-hardware/sphere-hardware.txt) · [插值指令日志](/media/repositories/ray-tracing-hardware/interpolation-custom-instruction.txt)

课程与实验设计来自 [犹他大学 CS 6959](https://graphics.cs.utah.edu/courses/cs6959/fall2026/)，模拟框架来自 [Utah Graphics Lab / Arches](https://github.com/Utah-Graphics-Lab/arches)。茶壶及课程场景用作测试输入，页面图片来自实际实验输出。实现、调试和资料整理包含 Codex 辅助。公开日志仅替换本地数据集路径，保留测量值。`,en:`# Ray Tracing Architecture and Performance

An individual course project covering parallel kernels, cache hierarchy experiments, custom instructions, and a dedicated intersection pipeline. Built on the Arches / TRaX teaching framework for the University of Utah CS 6959 course. The lead image is the teapot shaded with the custom barycentric interpolation instruction.

## Results and conditions

- **2.54× sphere-intersection speedup:** 206,818 simulated cycles for device-memory software versus 81,485 for the dedicated unit, with pixel-identical output.
- **37.8% fewer cycles than the initial L3 design:** 158,135 reduced to 98,287. The original 64-TM configuration remains faster at 95,902 cycles.
- **An end-to-end instruction path:** inline assembly, decoding, register dependencies, cache requests, pipelined execution, and result writeback.

These are Arches cycle-level simulation results at a simulated 1,515 MHz core clock and 1024×1024 resolution. Each experiment keeps its own workload fixed. Sphere and teapot results use separate baselines.

## Parallel kernels and pixel mapping

Compiled C++ kernels with the RISC-V toolchain and used fchthrd() to assign unique pixel work. After gradient and sunset patterns, groups of 32 threads were mapped to 4×8 pixel rectangles to encourage L1 reuse between nearby primary rays.

![Custom pixel kernel: gradient, sun, and checkerboard foreground](/media/repositories/ray-tracing-hardware/custom-pattern.webp)

The 350×350 mapping test retains two uncovered columns and adds bounds checks. Primary-visibility kernels generate camera rays, initialize hit records, and call traceray to distinguish the closest hit from a miss.

![Primary visibility of the teapot](/media/repositories/ray-tracing-hardware/primary-visibility.webp)

## Cache hierarchy and contention

Compared four configurations with a fixed teapot ambient-occlusion kernel, one sample per pixel, and up to three ray iterations.

![Simulated cycles across four configurations](/media/repositories/ray-tracing-hardware/cache-en.svg)

Increasing TMs from 8 to 64 reduced cycles from 456,551 to 95,902, a 4.76× speedup. Adding local L2 caches and a 480-cycle L3 increased the total to 158,135 cycles and produced 395,182 L2 MSHR stalls.

The tuned configuration shares each L2 among four TMs instead of eight and changes capacity, banks, MSHRs, and latency together. It completes in 98,287 cycles with 40 L2 MSHR stalls. This comparison measures the combined configuration change, including additional resources and different latency assumptions. The cache bypass mask was also expanded for the new cache level.

## Custom barycentric interpolation instruction

BaryInterp3 interpolates three vertex vectors using barycentric coordinates. Inputs occupy f0–f10, outputs f28–f30. Inline assembly emits custom-0 instruction word 0x0001800b; the simulator implements decoding, arithmetic, and register dependency checks.

Software takes 90,455 cycles and the instruction version 87,257, with pixel-identical images. This stage models interpolation as a one-cycle TP operation, an explicit assumption behind the comparison.

## A memory-connected sphere intersection unit

Implemented hardcoded software, device-memory software, and dedicated-unit versions of a three-sphere scene. Each sphere occupies 16 bytes. Registers pass the ray and sphere address to the unit.

Each of 64 TMs has a unit with four 44-cycle pipelines and a one-cycle initiation interval. A request crossbar feeds L1 sphere loads, followed by intersection and a return crossbar. Pending register state and destination tokens preserve dependencies until writeback.

![Primary visibility from the sphere unit](/media/repositories/ray-tracing-hardware/spheres.webp)

![Software and dedicated-unit cycle comparison](/media/repositories/ray-tracing-hardware/sphere-en.svg)

The log records 3,145,728 intersection tests: 1024×1024 primary rays, each testing three spheres. Software and hardware output match pixel for pixel. The 44-cycle depth covers arithmetic after data arrival; cache and queue delays add to total request latency.

## Scope and records

The six exercises cover simulator setup, kernel authoring, primary visibility, cache configuration, instruction extension, and dedicated hardware modeling. They demonstrate C++ rendering implementation and architecture performance analysis. A final-project study of pixel mapping and cache sharing is still at the topic-selection stage.

[Measurements CSV](/media/repositories/ray-tracing-hardware/measurements.csv) · [Initial L3 log](/media/repositories/ray-tracing-hardware/cache-l3-initial.txt) · [Tuned L3 log](/media/repositories/ray-tracing-hardware/cache-l3-tuned.txt)

[Software sphere log](/media/repositories/ray-tracing-hardware/sphere-software.txt) · [Hardware sphere log](/media/repositories/ray-tracing-hardware/sphere-hardware.txt) · [Custom instruction log](/media/repositories/ray-tracing-hardware/interpolation-custom-instruction.txt)

Course and exercise design: [University of Utah CS 6959](https://graphics.cs.utah.edu/courses/cs6959/fall2026/). Framework: [Utah Graphics Lab / Arches](https://github.com/Utah-Graphics-Lab/arches). Course scene assets serve as test inputs; images are actual experiment outputs. Implementation, debugging, and documentation include Codex assistance. Public logs replace local dataset paths while retaining measurement values.`}},ET={id:"animation-aigc-lab",title:"AI 角色生成与视频动作重定向",category:"ai-agent",categoryLabel:{zh:"AIGC 角色与动画制作",en:"AI-assisted character and animation production"},summary:{zh:"从多视图生成角色，经四边面重建、PBR 烘焙、身体与手指绑定，将两段真人视频动作重定向到三个不同体型的角色。",en:"Three generated characters share two video-driven motions through quad remeshing, PBR baking, body and finger rigging, and motion retargeting."},cover:"/media/repositories/animation-aigc-lab/hero.webp",tags:["Meshy","Blender","MediaPipe","Python","动画重定向"],story:{zh:`# AI 角色生成与视频动作重定向

## 从生成模型到可动角色

Meshy 根据角色多视图生成带材质的网格，随后单独重建四边面，通过 FBX 导入 Blender。重新展开 UV 后，将源模型的颜色、法线、粗糙度和金属度烘焙到新网格。

Moss Courier 保留 19,433 个面和 2K 贴图；新角色 Aster Runner 与 Cobalt Sentinel 分别为 35,042、36,318 个面，烘焙输出为 4K。自动四边面重建改善了网格组织，但没有代替人工布置关节环线。

## 身体、手指与蒙皮

三个角色都使用 54 根骨骼，其中 30 根控制手指。身体权重从自动绑定模型转移到重建网格；手指关节根据手部近景投射回实际表面，机器人手部改用人工标定。每个顶点最多保留四个有效骨骼影响，并统一归一化。

制作中检查了张手、半握、握拳、屈肘、屈膝和举臂。修正指骨局部轴翻转，并清理指尖残留的前臂影响，避免弯曲时反折或拉出薄片。

## 同一动作，适配不同体型

MediaPipe 提取身体与手部姿态。二维与三维关节点先做时间平滑，再驱动躯干、四肢、头部和手腕；双腿 IK 与脚接触约束处理支撑，最后将结果烘焙成骨骼关键帧并清理高频抖动。

舞蹈手指使用检测到的弯曲值，缺失帧插值。武术中的握拳按参考补成可编辑姿势，手腕保持中立并随前臂运动；低速支撑脚增加接地约束，避免将透视造成的画面高度差误判为抬脚。这些补正不等同于精确手指动捕。

## 交付与当前范围

本地交付保留三套绑定资产、可编辑 IK 工程、烘焙动画、GLB、四通道贴图及六个真人／角色同步对照。每条 GLB 重新导入，抽查五个时间点的十根身体与手指骨骼。

本页展示实际 Blender 渲染，未合入真人参考画面或音乐。AI 用于制作阶段，不是游戏运行时服务。单目深度、遮挡、脚步与拳路仍有估计误差；结果尚未经过动画师逐帧精修，Blender 的保持体积蒙皮与 GLB 线性蒙皮在极端弯曲时也可能不同。

动作参考：[首段室内舞蹈 · Tencent/MimicMotion](https://github.com/Tencent/MimicMotion/blob/main/assets/example_data/videos/pose1.mp4)、[正面武术 · olia danilevich / Pexels](https://www.pexels.com/video/girl-doing-taekwondo-6005332/)。MimicMotion 仅提供参考视频，本项目没有运行其视频生成模型。`,en:`# AI-assisted character generation and motion retargeting

## Production pipeline

Meshy multi-view generation produces the textured source mesh. A separate quad-remesh pass is imported into Blender through FBX, unwrapped, and baked into base-color, normal, roughness, and metallic maps. Moss Courier retains 19,433 faces and 2K maps; Aster Runner and Cobalt Sentinel use 35,042 and 36,318 faces with 4K bake outputs.

## Rigging and skinning

Each character has 54 bones, including 30 finger bones. Body weights are transferred onto the rebuilt surface; finger anchors are fitted from close-up mesh renders, with manual calibration for the robot. Weights are normalized and limited to four effective influences. Open hands, fists, bent elbows, bent knees, and raised arms were inspected; inconsistent finger roll and stray forearm weights were corrected.

## Video-driven animation

MediaPipe body and hand observations are temporally filtered and retargeted, followed by leg IK, support constraints, keyframe baking, and quaternion cleanup. Dance finger curls use detected values with interpolation. Combat fists and neutral wrists are authored constraints based on the reference, not precise finger capture.

## Deliverables and scope

The local project retains editable rigs, IK scenes, baked animation, GLB exports, PBR maps, and six synchronized reference comparisons. Exported GLBs were reimported and checked at five times across ten body and finger bones. These public clips show the Blender-rendered characters only, without reference footage or music.

AI is used during asset production, not at game runtime. Monocular depth, occlusion, foot placement, and punch trajectories remain approximate; these are not animator-polished commercial motion-capture results.

Motion references: [indoor dance / Tencent MimicMotion](https://github.com/Tencent/MimicMotion/blob/main/assets/example_data/videos/pose1.mp4) and [frontal martial arts / olia danilevich, Pexels](https://www.pexels.com/video/girl-doing-taekwondo-6005332/). MimicMotion is a reference-video source only; its generation model is not used.`}},UT={id:"als-director",title:"AI 接入 UE 动画：可中断的多步动作执行",category:"ai-agent",categoryLabel:{zh:"运行时 AI 与技术动画",en:"Runtime AI and technical animation"},summary:{zh:"将“抱着箱子走过去，途中看向门口”拆成可验证的动作计划，在 Unreal 中控制步态、姿态、移动与注视；支持途中改口、连续动作和急停。",en:"Natural-language direction becomes validated movement, gait, overlay, stance, and gaze plans in Unreal, with live revisions, queued actions, and emergency stops."},cover:"/media/repositories/als-director/hero.webp",tags:["Unreal Engine 5.8","C++","GPT / Codex","ALS-Refactored","运行时动画"],story:{zh:`# AI 接入 UE 动画

## 移动中修改，急停后隔离旧回复

@[video: 连续实机：途中修改保留路线、急停隔离旧回复与新请求恢复](/media/repositories/als-director/interruptions.mp4)

本次录像运行明确标记为 test 的固定测试计划，专门检验引擎端的执行与中断逻辑。角色沿“红色标柱-青箱-停止”队列慢步移动，途中下发包含 style、look_at、stance 的动作补丁。运行记录显示 move_target 维持 red_target，remaining_steps 保持为 3，ALS Overlay 成功切为 Box 并转入蹲伏。随后提交换路线请求并故意暂缓回复，角色维持原移动；触发急停操作后，系统清空 PendingId 和队列并执行 StopMovementImmediately。此时注入旧回复，主循环因 PendingId 为空直接跳过读取，注入旧回复后的 3 秒仿真观察中，角色速度低于 1 cm/s，起止坐标一致。

再次下发新请求后，角色可正常站立并恢复步行。此录像为 2026-10-17 的本机独立程序实测：447 张连续原生帧，1578×884，按 30 Hz 游戏步长编排为 14.9 秒，没有剪去中间等待。固定步录制不用于衡量模型推理延迟或显卡性能。

| 视频时点 | 引擎中的变化 |
| --- | --- |
| 2.5 秒 / 4.8 秒 | 切换抱箱 / 蹲伏，目的地保持为红柱，队列仍有 3 步 |
| 6.9 秒 | 新请求等待回复，原移动继续 |
| 8.0 秒 | 急停清空请求编号和队列，速度归零 |
| 9.0—12.0 秒 | 注入旧回复后持续观察，接收计划数未增加，位置保持 |
| 12.3 秒 | 新请求正常生效，站起并向青箱步行 |

[查看本次实际状态与时间点](/media/repositories/als-director/interruptions.json)。旧回复文件仍留在本地，因没有匹配的待处理请求而未被读取；来源标签仅用于展示，本机文件桥不提供公共网络服务的身份认证。

## 自然语言到动作计划：原始演示

“慢慢走向青色箱子，像抱着一个重箱子，目光看向门口。”这句话同时改变目的地、步态、上身姿态和注视方向。角色移动期间，还可以改成受伤姿态、蹲伏，或重新指定路线。

@[video: 动作导演实机演示：复合指令、姿态修改、连续动作和停止](/media/repositories/als-director/showcase.mp4)

视频来自独立 Windows 程序的实际渲染，剪去了部分等待画面。语言计划由本次 Codex 对话中的 GPT 生成，经本地文件桥送入游戏；没有用关键词匹配器冒充模型。捕获采用 30 fps 固定游戏步长，不用于衡量推理延迟或显卡性能。演示也保留了异步控制的限制：原动作在等待回复时继续，部分姿态修改在到达后才生效；途中修改与队列保留另见下方回归录像。

## 意图与动画执行分开

GPT 读取自然语言、场景目标与当前角色状态，只能返回有限的结构化计划。例如同一步可以包含移动到青箱、步行、抱箱、站立、注视门口五项要求。游戏先检查整份计划，再更新 ALS 的步态、姿态与旋转状态。

省略的字段保留当前值。途中“改成受伤的样子”只改表现，不清空目的地或后续路线；连续计划等待当前目标到达后才进入下一步。模型不直接操作骨骼，也不参与逐帧动画计算。

## 中断与可追溯执行

每次启动拥有独立会话，每条指令拥有独立请求编号。新请求使旧回复失效；立即停止同时清空移动与后续动作，迟到的回复不能再次启动角色。非法动作、未知目标和错误字段在执行前整份拒绝。

导演台显示真实速度、目的地、注视目标、执行来源与计划。事件记录保留请求、计划接收、到达、拒绝、停止和录制帧号，用于对照画面与测试结果。

## 独立程序回归

@[video: 十二项运行时回归：真实状态检查，输入明确标为自动化测试夹具](/media/repositories/als-director/regression.mp4)

回归覆盖角色复位、实际跑步、移动中蹲伏、抱箱、受伤与注视、多步骤到达、途中修改保留队列、非法计划拒绝、旧会话隔离、新请求覆盖、急停后迟到回复，以及最终恢复。测试计划是固定夹具，界面明确标注，不作为 GPT 在线理解能力的证据。

## 技术分工与边界

本项目实现自然语言桥、动作合同、执行队列、表现补丁、导演界面、跟随与全景镜头、测试场景、日志和录制工具。角色、动画、脚部处理、叠加姿态与道具附着复用 [ALS-Refactored](https://github.com/Sixze/ALS-Refactored)，不将其包装成原创或神经网络生成动画。

当前接入依赖活动中的 Codex 对话，不是脱离对话后独立运行的 GPT 服务。抱箱和受伤是已有动画姿态，不是重量仿真或文本生成新动作。移动采用简单直线接近，没有障碍绕行；未支持语音识别和多人同步。

[下载工程源码与重建脚本](/media/repositories/als-director/ALSDirector-source-v1.zip) · [查看运行测试结果](/media/repositories/als-director/acceptance.json)

源码包不含 Unreal Engine 或 ALS 插件资产；安装 UE 5.8 后运行依赖脚本，从固定上游提交获取 ALS 并构建。`,en:`# AI Plans in Unreal Animation

## Interrupted movement and stale replies

@[video: Continuous runtime: preserve the route during pose patches, cancel a pending reply, and resume](/media/repositories/als-director/interruptions.mp4)

This 14.9-second recording uses explicitly labelled test fixtures. A three-step route remains active while carrying and crouching patches change ALS state. An emergency stop clears the pending request and queue. Injecting the old reply does not increment the accepted-plan count or restart movement during the following three seconds; a fresh request then resumes walking. The 447 native 1578×884 frames are continuous at a fixed 30 Hz simulation step, with no waiting removed. This tests engine execution, not live model inference or response latency.

[Observed states and timestamps](/media/repositories/als-director/interruptions.json). Recorded on 2026-10-17 in the packaged Windows application. The local file channel is trusted-process transport, not an authenticated public network service.

## Original language-to-plan demonstration

@[video: Live Windows application: compound direction, revisions, queued movement, and stops](/media/repositories/als-director/showcase.mp4)

An active GPT/Codex conversation interprets the direction and current game state. A local file bridge carries a validated plan into Unreal; there is no keyword parser masquerading as a language model. The game owns frame-by-frame execution, combining ALS gait, stance, overlay, and gaze. Some waiting footage is removed. Existing motion continues while awaiting a reply, so some revisions in this take arrive after the destination is reached; the regression below separately demonstrates mid-motion patches.

Live adjustments preserve the current destination and queued route. Whole-plan validation, session/request correlation, superseding requests, and emergency cancellation prevent invalid or late replies from starting unwanted movement.

@[video: Twelve runtime regression cases using explicitly labelled test fixtures](/media/repositories/als-director/regression.mp4)

The regression checks actual game state for movement, crouch, carrying, injury, gaze, sequencing, live patches, invalid plans, stale sessions, supersession, emergency cancellation, and reset. Fixtures are not model inference. Both videos are actual rendered frames captured at a fixed 30 fps simulation step, not latency or GPU benchmarks.

This project implements the language bridge, execution contract, queue, director UI, cameras, stage, logs, tests, and recording tools. Character animation, foot handling, overlays, and attached props come from [ALS-Refactored](https://github.com/Sixze/ALS-Refactored). It does not generate animation, simulate weight, navigate obstacles, or run GPT without an active Codex conversation. Speech input and multiplayer are out of scope.

[Source and rebuild scripts](/media/repositories/als-director/ALSDirector-source-v1.zip) · [Runtime test report](/media/repositories/als-director/acceptance.json)

The source archive excludes Unreal Engine and ALS dependency assets. Setup retrieves the pinned upstream dependency and builds against a locally installed UE 5.8.`}},zT={id:"pcg-workbench",title:"UE 程序化工具集 · PCG Workbench",category:"general-ta",categoryLabel:{zh:"程序化建模与引擎工具",en:"Procedural modeling and engine tools"},summary:{zh:"在 Unreal 中用参数和样条生成房屋、城墙、阶梯、地形与植被，并实现贴面藤蔓和交互水波。七项效果共用可编辑工程与自动录制流程。",en:"Seven editable Unreal demonstrations: parametric houses, spline walls and stairs, terrain shaping, vegetation scattering, surface-guided vines, and interactive water waves."},cover:"/media/repositories/pcg-workbench/hero.webp",tags:["Unreal Engine 5.8","C++","程序化网格","Spline","数值模拟"],story:{zh:`# UE 程序化工具集

@[video: 七项工具演示：房屋、城墙、阶梯、地形、散布、水波与藤蔓](/media/repositories/pcg-workbench/showcase.mp4)

67 秒演示来自 UE 编辑器的实际渲染，包含生成结果、参数切换和模拟过程。画面按固定时间步采集后剪辑，字幕用于标明操作，不作为实时性能测试。

## 参数驱动的场景构件

- 房屋：宽度、进深、层数与屋顶高度共同驱动墙体、木梁、门窗、窗台、瓦顶和烟囱，改变层数时重新排列立面构件。
- 城墙：沿可编辑样条排布石块、压顶和垛口，路径、高度与分段数分别控制走向、轮廓和块面密度。
- 阶梯：按曲线路径生成等高递增的踏步，支持改变总高、宽度和踏步数量。
- 地形：在独立高度场上叠加多个平滑衰减的塑形区域，正值抬起丘陵，负值压出凹地。
- 散布：在控制点周围生成带随机尺度的树形几何，通过最小间距约束分布；固定种子可以重现同一布局。

![参数房屋、曲线城墙与阶梯、地形塑形、植被散布和水波的实际画面](/media/repositories/pcg-workbench/gallery.webp)

## 贴面藤蔓

藤蔓从多个起点生长，吸引点决定分枝方向，再沿指定方向投影到目标表面。枝条按后续分枝量调整粗细，叶片使用独立生成的五裂网格。种子、叶片密度和尺寸可分别调整，结果可以保存到关卡或烘焙成静态网格。

![拱门石墙上的程序化藤蔓](/media/repositories/pcg-workbench/vines.webp)

## 水波与工具实现

水面使用 CPU 二维阻尼波动方程求解高度与速度，时间步根据网格间距限制。局部脉冲产生波纹，圆柱障碍和池壁形成反射；顶点位置、法线与颜色随求解结果更新。

工具使用 C++ 生成程序化网格，通过 Unreal 原生参数面板和样条控制点编辑。Editor Python 负责建立展示场景、切换参数、采集画面与检查保存结果。验证覆盖固定种子重复生成、参数改变后的几何差异、水波持续演化，以及关卡重新加载后的网格一致性。

## 实现范围

当前版本侧重可编辑的生成效果。水波采用 CPU 求解，地形为独立网格，散布由样条控制点定义范围；尚未实现 GPU 浅水求解、Landscape Edit Layer、视口绘制笔刷和房屋相交裁决。

参考 [KisaragiTomi / PCGPlugins](https://github.com/KisaragiTomi/PCGPlugins) 的工具思路，生成算法、网格构建与展示流程在本工程中独立实现。`,en:`# PCG Workbench

@[video: Seven Unreal tools: houses, walls, stairs, terrain, scattering, waves, and vines](/media/repositories/pcg-workbench/showcase.mp4)

The 67-second reel uses actual Unreal Editor renders, captured at fixed steps and edited with parameter captions. It is not a real-time performance benchmark.

## Editable procedural geometry

- Houses regenerate walls, timber beams, windows, doors, tiled roofs, and chimneys from dimensions, floor count, and roof height.
- Walls distribute masonry and battlements along editable splines; stairs create progressively elevated treads along a curved path.
- Terrain combines smooth radial height influences and noise on an independent mesh, supporting both hills and depressions.
- Vegetation scattering uses control-point regions, minimum spacing, variable scale, and deterministic seeds.

![Six procedural tools rendered in Unreal](/media/repositories/pcg-workbench/gallery.webp)

## Surface-guided vines and interactive waves

Vines grow from multiple roots toward attraction points and project onto selected surfaces. Descendant branches determine stem thickness; independently generated lobed leaves expose density and size controls. Results persist in the level and can be baked into static meshes.

![Generated vines on an arched stone wall](/media/repositories/pcg-workbench/vines.webp)

Water uses a CPU damped two-dimensional wave equation with a grid-dependent stable time step. Local impulses propagate and reflect from a circular obstacle and pool boundaries. Positions, normals, and vertex colors update with the simulation.

C++ owns geometry and simulation; Editor Python builds scenes, changes parameters, captures frames, and checks saved geometry. Validation covers deterministic generation, parameter sensitivity, wave evolution, and geometry consistency after reopening the level.

## Scope and reference

This implementation provides independent procedural effects. GPU shallow-water solving, Landscape Edit Layers, viewport point painting, and house-intersection resolution are not implemented.

Inspired by the tool concepts in [KisaragiTomi / PCGPlugins](https://github.com/KisaragiTomi/PCGPlugins). Generation algorithms, mesh construction, and the showcase workflow were implemented independently.`}},MT={id:"maya-parkour-animation",title:"八秒跑酷：Maya 角色关键帧动画",category:"general-ta",categoryLabel:{zh:"角色动画 · 跨越与前翻",en:"Character animation · vaulting and forward rotation"},summary:{zh:"角色连续完成跑步、跨越障碍、空中前翻和落地。制作拆解展示整体位移与身体控制的分工、左右脚的步态节奏、前翻旋转曲线，以及角色绑定与场景的层级关系。",en:"An eight-second parkour sequence with running, takeoff, obstacle traversal, and landing, accompanied by rig controls, animation curves, and scene hierarchy."},cover:"/media/parkour-animation/cover.jpg",tags:["Maya","角色动画","关键帧","IK / FK","动作衔接"],story:{zh:`# 八秒跑酷：Maya 角色关键帧动画

## 最终动画

这段角色动画把跑步、跨越障碍、空中前翻和落地接成一个连续镜头。动画共 200 帧，以 24 帧/秒播放，时长约 8.33 秒。我在 Maya 中通过角色控制器调整动作，并用关键帧组织身体姿态、脚步和镜头运动。

@[video: 最终版 · 完整动作](/media/parkour-animation/final.mp4)

## 动作拆解：跨越与前翻怎样接回跑步

下图从最终视频中抽取八个姿态。图片按从左到右、从上到下排列，分别对应第 17、27、38、107、122、142、153、163 帧。

![关键姿态：17、27、38、107、122、142、153、163 帧](/media/parkour-animation/action-breakdown.jpg)

- **第 17—46 帧，跨越障碍。** 角色从前倾跑步进入腾空姿态。第 27 帧的身体控制器明显抬高，躯干前倾，腿部收起，让身体通过障碍上方。随后身体回落，脚端重新靠近支撑面。
- **第 46—105 帧，恢复跑步节奏。** 身体升降与左右脚抬起呈重复变化。左右脚的抬起时间错开，形成交替迈步的节奏。躯干保持前倾，让跨越后的动作继续朝前推进。
- **第 107—158 帧，第二次腾空与前翻。** 第 122 帧显示身体收起，第 142 帧显示身体向前展开，第 153 帧显示角色接近倒转后的姿态。身体的 X 旋转持续增加，跨过 360° 后进入落地与恢复动作。
- **第 163—200 帧，接回跑步。** 身体高度和脚步曲线重新出现前半段的重复节奏。前翻后的跑步在同一套控制器上继续，镜头也继续跟随角色前进。

## 控制器分工：整体前进、身体动作与脚端位置

下面的视频保留角色控制器。头部、躯干、手臂与脚端的控制形状随动作一起显示，便于对应角色姿态与控制位置。

@[video: 最终工程 · 显示角色控制器](/media/parkour-animation/controls.mp4)

**Character 负责整体前进。** 它是身体控制和 IK 控制的共同父节点。它的 Z 位移建立角色在场景中的基础前进路径。

**Upper_Body 负责身体动作。** 它的 Y 位移组织身体升降，Z 位移补充动作中的前进量，X 旋转组织前倾与前翻。这个控制器让身体姿态可以在整体前进路径上继续变化。

**左右腿部 IK 控制器负责脚端位置。** IK 是通过脚端位置计算腿部关节姿态的控制方式。LeftLeg_IK_Leg 与 RightLeg_IK_Leg 分别控制左右脚；身体下压、抬高和旋转时，脚端位置可以单独调整。骨盆的 Spine_Pelvis_FK 则通过旋转补充躯干姿态。FK 是通过关节或控制器旋转逐级控制姿态的方式。

## 曲线拆解：每条变化对应哪个动作

下图从最终工程逐帧读取六组属性。横轴统一显示第 1—200 帧，每张图使用独立纵轴。曲线上的圆点是原工程的关键帧。蓝灰背景标出跨越段，紫灰背景标出前翻段。

![整体前进、身体前进补偿、升降、前翻、左右脚与骨盆曲线](/media/parkour-animation/semantic-curves.svg)

### 整体位移与局部位移共同形成前进

Character 的 Z 位移从第 1 帧约 −1826.6 cm 增加到第 107 帧约 576.6 cm。在第 107—158 帧，这条曲线保持在 576.6 cm。此时 Upper_Body 的局部 Z 位移从约 53 cm 增加到约 800 cm，继续带动身体向前运动。两个通道分工共同形成这段动作的前进过程。

这些数值属于各控制器相对父节点的局部属性。角色的最终位置还受到父节点、控制器与绑定关系共同影响。因此，单独一条曲线的水平段需要结合其他控制器和视口动作阅读。

### 身体升降区分跑步、腾空与收身

Upper_Body 的 Y 位移在普通跑步段主要交替落在约 −17.6 cm 与 −25.1 cm，形成重复的身体起伏。第 27 帧的数值升到约 81 cm，对应第一次跨越时的明显腾空。前翻段的曲线改变了这种重复形态；第 153 帧的数值降到约 −70.8 cm，与角色收身、倒转后的姿态一起变化。

这条曲线展示身体控制器的局部升降。它与身体旋转、脚端位置共同决定最终姿态，图中的负值表示相对父节点的偏移。

### 连续旋转保留前翻方向

Upper_Body 的 X 旋转在普通跑步段主要在约 33°—46°之间变化，维持躯干前倾。前翻段依次经过第 135 帧约 45.3°、第 142 帧约 96.7°、第 150 帧约 150.6°，并在第 158 帧达到约 387°。

超过 360°的数值保留了这次完整旋转的累计角度。动画因此能够沿同一个方向继续前翻，并在翻转结束后衔接下一段跑步姿态。骨盆曲线同时补充身体内部的弯曲与展开。

### 左右脚错开抬起，建立步态节奏

普通跑步段的左右脚 Y 曲线呈错开的重复波形。例如第 53 帧，左脚局部 Y 为 0 cm，右脚约为 8.8 cm；第 62 帧，右脚为 0 cm，左脚约为 8.8 cm。这组对照展示了左右脚交替抬起与回落的节奏。

腾空与前翻期间，两条曲线离开普通跑步的重复模式，配合身体收起、展开和恢复动作。脚端曲线与身体曲线需要共同判断接触姿态；脚控制器的局部 Y 值本身无法单独表示脚是否接触地面。

## 场景层级：身体和脚怎样分开控制

下图按最终工程的实际父子关系整理。图中保留节点原名，并注明每组节点在本动画中的作用。省略号表示中间绑定节点。

![角色几何体、Character、Upper_Body、IK 分支、场景障碍与相机的层级和职责](/media/parkour-animation/scene-structure.svg)

**rig_group 将角色几何体与控制层放在同一个角色组内。** geo_group 下保留 proxy_geoGroup；Character 下分别组织 Upper_Body 与 IK 分支。场景中的障碍和相机位于角色组之外，角色运动时可以继续使用同一套场景参照。

**Upper_Body 与 IK 是两个并列分支。** Upper_Body 下的 JOINTS 保存骨骼层，RIG 保存躯干等控制结构；IK 分支包含左右腿部控制器。这个组织方式让身体升降与前翻、脚端位置分别通过对应控制器调整。Character 作为它们的共同父节点提供整体位移。

**障碍与相机各自承担场景职责。** pCube1—pCube6 与 pPlane1—pPlane2 构成简化障碍、平台和地面。persp1 下的 perspShape2 是演示相机。persp1 的位置也有关键帧，镜头会随着动作前进，并在腾空段调整高度，保持角色与障碍同时进入画面。

![最终 Maya 工程：角色控制器、场景大纲、显示层与时间轴](/media/parkour-animation/workspace.png)`,en:`# Eight-second parkour animation

A 200-frame Maya character animation played at 24 fps. The character runs, jumps across obstacles, lands, and resumes running.

@[video: Final animation](/media/parkour-animation/final.mp4)

![Frames 17, 27, 38, 107, 122, 142, 153 and 163](/media/parkour-animation/action-breakdown.jpg)

## Rig controls

@[video: Final Maya scene with visible controls](/media/parkour-animation/controls.mp4)

## Animation channels and scene hierarchy

The plots use values evaluated from the final scene. Character provides overall Z travel, while Upper_Body adds local travel, vertical movement and forward rotation. Character holds at about 576.6 cm during frames 107–158, while Upper_Body advances locally from about 53 to 800 cm. Upper_Body reaches about 387 degrees of X rotation at frame 158. Left and right foot-height channels alternate during running. These values describe local control attributes.

![Evaluated animation channels and original keys](/media/parkour-animation/semantic-curves.svg)

rig_group contains geo_group and Character. Upper_Body and IK are sibling branches below Character. Body poses and foot positions can therefore be adjusted through their respective controls. JOINTS and RIG are below Upper_Body. Obstacles and the animated persp1 camera are outside the character hierarchy.

![Scene hierarchy and control responsibilities](/media/parkour-animation/scene-structure.svg)

![Maya scene, controls, and Outliner](/media/parkour-animation/workspace.png)`}},DT=`# 多角色高负载场景性能优化

## 场景与本人实现

基于 Epic Lyra 的角色移动与基础动画管线，搭建 200 AI 高负载测试场景。地图采用 L_ShooterPerf，固定随机种子 1337；本人负责**距离重要度策略**、路径生成与采样工作台，并为本轮录制补充开发机位切换和只读动画状态快照。

## 动画更新如何分配

重要度每 0.1 秒刷新一次。本地角色及 1200 uu 内的角色作为保护对象，**关闭 URO、保留完整动画更新**与包含 FootPlant IK 的 Post Process AnimBP。其余角色启用引擎原生 URO；非近景且未渲染的角色使用 \`OnlyTickMontagesWhenNotRendered\`，2400 uu 外进一步停用后处理动画。

源码包含远景最低 LOD 为 2 的目标，并按资产实际 LOD 数量截断。**本轮 201 个角色网格都只有一个 LOD，实际始终使用 LOD0**。这组画面展示的是更新频次与后处理裁剪，不能归因于网格减面；历史测试也未单独拆分各项策略的收益。

## 画面对照与质量取舍

2026-10-17 在两个独立编辑器进程中分别运行单机 PIE，沿用相同场景、200 AI、种子、路径生成规则与相机参数。两次运行中的角色轨迹并非逐帧一致。成片包含全景 5 秒、近景 5 秒，以及首段全景原帧的局部放大 5 秒，按游戏时间回放，无插帧、无声。录帧本身影响运行开销，因此录像不用于计算性能收益。

优化组近景镜头末尾的快照记录：**15 个角色受到完整更新保护**（含本地角色），186 个启用 URO，102 个停用后处理动画。启用 URO 的角色，其 UpdateRate 在采样时主要为 3、少量为 4；具体频率由引擎决定。保护角色关闭 URO 后，旧参数结构中的数值可能保留，不能据此认定它仍在跳帧。

降低远处的姿态更新密度、停用足部贴地后处理，会改变动画的连续性和接地细节。当前对照覆盖人群移动，快速动作、斜坡与距离阈值附近的变化仍需专门观察；本项目不将这组结果描述为画面无损。

[本轮相机、快照与剪辑范围](/media/repositories/lyra-hero-arena/animation-quality.json)。第三个长焦机位被墙体遮挡，未纳入成片；该机位状态仅作为原始记录保留。

## 寻路取舍

早期曾尝试集中分配寻路预算减少请求，但卡住角色数超过既定阈值，因而弃用；最终保留独立寻路，改用重规划冷却与目标合并来减少重复计算。

## 历史性能数据

复算 2026-08-31 留存的 6 份运行摘要，分别取两组三次结果的中位数（5 秒预热、15 秒采样）：受控 AI 均稳定在 200，移动中约 185 人。优化后动画平均耗时由 15.18 ms 降至 10.99 ms，动画 P95 由 18.08 ms 降至 12.78 ms，整帧 P95 由 65.17 ms 降至 58.48 ms。短窗口测试仅反映当前负载下的耗时差异，无法外推长期稳定性，也不能证明画面无损。

## 其他实验方向

- AI：目标查询、共享战场事实与决策更新；
- Navigation：路径请求、重规划、拥堵和到达率；
- Rendering：角色材质、阴影、附件和可见距离；
- Networking：服务器出站、空间相关性与多客户端拓扑；
- Physics / VFX：先通过 Profile 找到明确热点，再建立独立案例。

比较结果同时记录角色存活、移动、到达率、请求失败、最长等待、近景动画更新、阴影数量和连接数，用于确认两组运行的负载与表现条件。

角色资产、基础移动与动画框架来自 Epic Lyra；负载组织、策略与采样由本项目扩展。公开仓库提供三个自有插件快照及开发录制入口，宿主 LyraCharacter / SignificanceManager 的接入仍依赖完整工程。历史数据源码版本为 \`d1b2455\`，本轮录像与历史性能采样分开。

[动画策略与录制接入说明](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/动画质量对照.md) · [开发相机与状态读取源码](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/PerformanceLab/Source/PerformanceLab/Private/PerformanceLabModule.cpp)
`,RT=`# UE 性能实验工作台

## 工作台设计

基于 Lyra 开发了 Slate 编辑器插件 PerformanceWorkbench 与运行时采样模块 PerformanceLab，通过 JSON 传递配置与结果实现模块隔离。测试按 ABBAAB 顺序交替运行 3 次基线与 3 次改动，记录硬件、驱动、分辨率、RHI、Seed 并导出原始 CSV。对比前自动校验受控角色数、固定镜头与 RHI；早期因预设漏注册误将 9 Bot 按 200 NPC 校验导致无效，修复后重新采样并保留了失败批次。

## HUD：常规状态分频更新

基于 Lyra 扩展的 \`UHeroArenaCombatHUDWidget\` 承载技能冷却、状态标签、目标信息与队伍阵容。优化针对原先每帧查询的冷却、状态和目标信息，阵容沿用独立的 0.25 秒更新间隔。

Widget 保留 Tick，通过 **FPlatformTime 单调时钟**决定何时刷新常规状态。在 NativeTick 中达到 NextRuntimeRefreshTime 后，才调用 RefreshRuntimeState 与对应目标刷新；每次将下一时点设置为当前时间加 0.1 秒。配置上限为 10 Hz，实际频率还受帧调度影响。

冷却由 UI 只读查询 ASC 中带标签 GameplayEffect 的剩余时间，技能结算仍由 GAS 负责。**SetTextIfChanged** 通过 FText::EqualTo 比较新旧文字，相同内容跳过 SetText；它减少重复文本设置，调用前的查询和字符串构建仍可能执行。

## 关键反馈与生命周期

英雄变化委托直接触发刷新；占点、重生及技能失败通过 **GameplayMessageSubsystem 消息回调**更新，独立于低频轮询。失败提示先匹配所属 PlayerController，再显示 1.8 秒，NativeTick 到时将其隐藏。NativeDestruct 移除英雄变化委托并注销消息监听，避免旧界面继续接收通知。

常规冷却和状态文字会等待下一次刷新，可能跳过某个 0.1 秒显示档位；低帧率下，间隔还会延长。这项取舍减少重复查询、格式化和文本设置，同时保留关键消息的独立触发路径。本轮没有测量输入到屏幕像素的精确延迟。

## 实机状态对照

2026-10-17，在两个串行独立编辑器进程中分别运行单机 PIE，采用同一地图、Phase 英雄、起点朝向与 Enhanced Input 输入序列。场景为 1 玩家、9 Bot，录制前开启无敌保护以避免死亡打断；战场状态并非逐帧一致。

**同一长度的 12.5 秒窗口里，状态刷新为 370 次与 103 次。** 两组都显示回溯倒计时及返回就绪、闪现充能变化与恢复，并各记录三次“前方空间不足，无法闪现”提示。视频放大的是原生技能栏，计数来自 RefreshRuntimeState 的开发记录，表示函数调用次数。

降频组本次约每秒 8.3 次，低于配置上限。录像按游戏时间回放，无固定游戏步长、无声；录帧和状态记录都有开销，因此这组次数与画面仅说明更新行为，不用于计算性能收益。[本轮状态摘要](/media/repositories/lyra-hero-arena/hud-quality.json)

## 历史性能数据

2026-08-31 的独立测试采用 1 玩家、9 Bot，8 秒预热、10 秒采样，两组三次分别取中位数。局部 HUD 刷新平均耗时由 **0.0620 ms 降至 0.00574 ms**，UI 总平均耗时由 **1.666 ms 降至 1.554 ms**。整帧 P95 为 11.268 ms 与 11.242 ms，基本持平；局部降幅不能作为整帧收益。该批刷新频率为 103.9 次/秒与 9.6 次/秒，与本轮录制条件不同。

## 实验编排

- 用版本化 Preset 保存地图、Experience、负载、种子、RHI、画质、采样时长与进程拓扑；
- 从 Editor 启动单机、服务器和多个客户端，统一运行编号与输出目录；
- 汇集 CSV Profiler、AI、Navigation、Animation、Rendering 与 Network 指标；
- 检查角色负载、运行条件、画质与网络拓扑，未满足条件的样本标记为不可比较；
- 显示缺失样本、失败条件和回归提示，并保留原始 CSV 与运行配置。

运行时 PerformanceLab 负责压力、采样和结果文件，Editor 侧 PerformanceWorkbench 负责实验编排与比较。游戏逻辑不依赖性能 UI。

页面中的工作台截图来自历史渲染与网络实验，用于展示界面与结果组织；上方 HUD 图表来自 2026-08-31 的另一批运行记录，源码版本为 712a1cd。

本人实现战术 HUD、更新策略、工作台与运行采样；ASC、消息系统及基础框架沿用 Lyra。公开仓提供自有源码覆盖层，完整运行仍需合法宿主与项目资产。

[HUD 更新实现](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/UI/HeroArenaCombatHUDWidget.cpp) · [录制与复现条件](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/HUD更新质量对照.md)
`,kT=`# Lyra 英雄射击：GAS 深度实践与技能架构

## 游戏概述

基于 UE 5.7.4 与 Lyra 架构搭建的五英雄射击原型，目前处于持续开发阶段。项目以独立的 HeroArena GameFeature 插件组织玩法扩展，包含五位英雄的数据资产、专属能力组合、A/B/C 轮换控制点与战术 HUD，并为机器人补充前排、输出与支援的技能决策。底层的角色移动预测、网络同步武器、GAS 基础架构、动画资产、死亡镜头与自动重生流程复用 Lyra 的原生能力。

## 游骑：射击、恢复场与轮换控制点

游骑 Striker 的技能与占点规则由 HeroArena 扩展实现，基础移动、武器、动画及重生流程复用 Lyra。下方为单机 1 玩家加 9 Bot 的连续片段：脚本读取只读寻路和视线可达敌人的位置，通过既有 Enhanced Input 输入移动、射击与技能。

@[video: 游骑连续实机片段，约 65 秒，无声。保留完整过程与等待，按游戏时间播放；自动输入，未开启无敌、传送、伤害注入或强制占点。](/media/repositories/lyra-hero-arena/striker-combat.mp4)

### 恢复场：权威治疗与脉冲反馈

**RecoveryField** 采用 LocalPredicted GameplayAbility。激活时先执行 CommitAbility 处理冷却等提交，只有 Authority 分支生成恢复场 Actor。Actor 记录所属队伍与到期时间，服务器定时检索范围内友方，通过标准 **GameplayEffect** 路径应用治疗。实际治疗成功后递增 HealingPulseSequence 并触发 ForceNetUpdate，客户端由 **OnRep** 驱动 Niagara 脉冲。治疗计算由服务器负责，客户端按复制结果播放反馈；本段录像覆盖单机流程。

### 目标轮换：分离玩法坐标与隐藏状态

控制点组件保存各点的原始 Transform。原逻辑将非活动点移入地下 100000 单位隐藏，预告下一目标时误读其实时坐标，目标高度变为约 −99948，导致导航失败。修复后读取 **OriginalTransforms** 中的初始位置，避免临时位移污染玩法坐标。单机测试已验证初始预告与 A 到 B 轮换，目标高度和寻路恢复正常。

实现入口：[恢复场能力](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Abilities/HeroArenaGameplayAbility_RecoveryField.cpp)、[恢复场 Actor](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Actors/HeroArenaRecoveryField.cpp)、[控制点轮换](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Components/HeroArenaControlPointRotationComponent.cpp)。

## Phase 闪回：闪现充能与历史状态回溯

在 HeroArena GameFeature 中，基于 Lyra 的 GAS 框架与角色资产，为 Phase 实现闪现与回溯。GameplayAbility 组织技能激活，PlayerState 组件维护充能和历史记录，战术 HUD 显示剩余次数、冷却与失败原因。

@[video: 闪回技能机制，两段实机案例，约 19 秒。1 玩家 + 9 Bot；Enhanced Input 自动输入，录制前设置起点、选人并开启无敌保护，无声。](/media/repositories/lyra-hero-arena/phase-gameplay.mp4)

### 胶囊体检测与闪现落点

Blink 使用 **LocalPredicted GameplayAbility**。激活时沿角色朝向发起最长 700 单位的 Capsule Sweep；遇到障碍物时缩短位移，若有效距离不足 80 单位则拒绝释放，保留充能。检测通过后位移，并触发冲刺 Montage 与 GameplayCue。撞墙拒绝和充能不足均通过失败消息显示中文原因。

### 三格充能与失败反馈

闪现的 3 格充能由 **PlayerState 自定义组件**维护，服务器按序每 4 秒恢复 1 格，仅向拥有客户端同步。本地施法通过独立的待确认请求记录预测扣减，收到服务器确认或拒绝后更新 HUD。充能耗尽时，GAS 失败 Tag 触发 Lyra 消息；战术 HUD 匹配所属 PlayerController，显示 1.8 秒提示，并在界面销毁时注销监听。

### 服务器采样与状态回溯

Recall 使用 **ServerOnly GameplayAbility**。服务器每 0.1 秒记录 Pawn 的位置、朝向、生命及当前手枪实例的弹匣，保留约 4 秒历史。技能定位约 3 秒前的样本，校验 Pawn、武器实例与落点碰撞；落点受阻时尝试较新的合法样本。成功后恢复历史位置、生命与弹匣，清空旧记录并进入 8 秒冷却。重生、换人或武器变化时清除不匹配记录。

两段录像分别展示充能耗尽，以及碰撞拒绝后回溯位置和弹匣。第二段回溯采用约 3.04 秒前的记录，弹匣从 10 发恢复到 11 发。生命同样按历史值恢复，可能降低；录像启用了无敌保护，生命保持不变。上方两段演示覆盖单机技能流程；Blink 的双端预测与弱网验证见下节。

实现入口：[闪现能力](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Abilities/HeroArenaGameplayAbility_Blink.cpp)、[充能组件](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Components/HeroArenaBlinkChargeComponent.cpp)、[回溯历史](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Components/HeroArenaRecallHistoryComponent.cpp)。

## 闪现充能预测回滚与网络同步修复

在 Phase 闪现（LocalPredicted GA）的原实现中，客户端直接修改收到的服务器充能值，以呈现预测扣减。通过开发指令仅在服务端阻止激活时，CMC 纠正了客户端位移，但客户端充能状态因缺乏回退机制滞留在 2 格，服务端为 3 格；2.4 秒后仍未恢复。

@[video: 双 PIE 弱网演示，14 秒，无声。两端各配置 150 ms 出站延迟与 2% 丢包；预设起点、自动输入，开发指令注入服务器拒绝。双视角顺序采样，按各自时间戳播放，展示预测扣减、拒绝恢复、成功释放及充能。](/media/repositories/lyra-hero-arena/blink-network.mp4)

修复采用**预测键结算模型**：客户端通过 **PendingPredictionKeys** 独立记录待确认扣减。收到 **FPredictionKey** 拒绝回调时撤销对应扣减；服务端处理成功或在技能内因碰撞拒绝后，将已处理键与充能状态一起复制，在 **OnRep** 中统一结算。**ResetEpoch** 隔离换人、重生前后的请求，弱引用委托避免组件销毁后继续调用。

普通网络与模拟弱网均在同进程监听服务器和拥有客户端间验证。弱网下，两端 NetDriver 各配置 150 ms 出站延迟与 2% 出站丢包；日志记录了以下变化：

| 阶段 | 服务器充能 | 客户端显示 | 客户端待确认请求 |
| --- | --- | --- | --- |
| 客户端已预测，服务器尚未处理 | 3 | 2 | 1 |
| 收到服务器拒绝 | 3 | 3 | 0 |
| 正常释放一次并确认 | 2 | 2 | 0 |
| 再连续释放两次并确认 | 0 | 0 | 0 |
| 恢复一格充能 | 1 | 1 | 0 |
| 换人重置 | 3 | 3 | 0 |

表格来自独立的连续释放测试；视频展示一次拒绝和一次成功释放。延迟与丢包为模拟器配置，未将其等同于实测 RTT。跨进程、专用服务器、长时间对战及更多技能组合仍待验证。[双端记录与测试条件](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/data/blink-network.json)

## GAS 技能架构：选择数据跨重生保留与装备应用

@[video: 重生换人连续演示，约 13 秒。1 玩家 + 9 Bot；开发命令触发死亡与换人，无声。](/media/repositories/lyra-hero-arena/hero-respawn.mp4)

为支持阵亡期间换人，英雄选择状态与 Pawn 生命周期解耦，由挂载于 **PlayerState** 的 HeroSelectionComponent 管理。客户端通过 RequestHeroSelection 发起换人请求，经 ServerRequestHeroSelection 在服务器端完成英雄名单、锁定状态、HeroId 合法性及重复选择校验后返回确认状态，再通过复制属性 **SelectedHero** 与 OnHeroChanged 广播更新客户端表现。

换人时，系统先撤销旧 **AbilitySet 授予句柄**，再授予新技能组；清理 QuickBar 槽位中的旧物品，通过 Inventory 与 Equipment 组件装配新主武器。新 Pawn 生成后，等待其能力系统初始化完毕，再应用 PlayerState 中保留的英雄配置。

![重生窗口内切换至闪回，界面显示英雄选择成功](/media/repositories/lyra-hero-arena/respawn-confirmed-20261017.jpg)

## GAS 英雄切换与重生的双端复制验证

在同进程 D3D12 双 PIE 环境下，通过开发指令触发了 **Striker 到 Phase** 的换人与重生验证。通过 \`PlayerId=257\` 对齐双端只读日志：

- **切换前：**服务器与拥有客户端均持有 7 项来源为 Striker 的 AbilitySpec，包含工程期选人及 Bot 辅助能力。
- **切换后：**双端均变更为 Phase 的 4 项专属能力：Blink、PhasePistolTuning、Recall、StickyBomb，Striker 来源能力无残留。
- **重生后：**服务器与客户端的 Pawn 分别由 C_10 和 C_0 重建为 C_14，两端 ASC Avatar 均正确绑定新 Pawn，技能集保持为上述 4 项且无重复授予。

第二名玩家保持 Striker 状态；拥有客户端查看远端玩家时，其 AbilitySpec 计数为零，符合所有者复制的可见范围。

![拥有客户端换人重生后的实机画面：Phase 的闪现、回溯、被动与终极技能状态已更新；顶部目标提示与比分栏分离](/media/repositories/lyra-hero-arena/network-respawn-client-20261017.jpg)

## CommonUI 选人界面的栈管理

选人界面基于 CommonUI 制作。CommonActivatableWidget 停用并退出 UI 栈后，直接调用 ActivateWidget 无法重新显示。流程改为在监听到重生开始消息时触发 PushSelectionScreen，调用 **PushContentToLayer_ForPlayer** 将界面重新压入 UI.Layer.Menu，收到重生完成消息后关闭界面。

选人卡片的职业文字曾因区域过窄被截断。现在拓宽了卡片布局，职业说明自动换行，小窗口下整体等比缩放，保留五名英雄的完整描述。

## 验证与演示范围

2026 年 10 月的 D3D12 实机复测使用 **1 名本地玩家与 9 名 Bot**。通过开发命令触发死亡，在倒计时内使用方向键和回车切换至 Phase（闪回）；日志确认 PlayerState 选择成功，新 Pawn 保留该选择并装配 ID_Pistol_C。上方连续录像单独重录，死亡与换人请求由开发命令触发，走现有选择、确认和重生路径。

**监听服务器与拥有客户端** 的换人和重生结果通过只读日志与截图对齐；Blink 另有弱网双视角演示。当前尚未完成跨进程网络环境及完整对局复测。

公开仓库提供自有 C++ 模块、结构说明及运行截图，不重新分发 Lyra、Fab 或 Unreal Engine 资产。

相关性能案例：[200 角色动画更新优化](/?work=lyra-performance-lab)、[战术 HUD 刷新与 UE 性能实验工作台](/?work=ue-performance-workbench)。
`,jT=`# UE5 SIGGRAPH 物理复现实验室

这是我的个人 UE 物理实验室。我从近年的 SIGGRAPH / SIGGRAPH Asia 物理论文中选择适合实时验证的部分，把公式里的状态、约束和求解过程接到 UE 5.4.4、Lyra、Chaos 与真实资产工作流中。

## 角色物理：相同冲量下的两种响应

@[video: UE 5.4.4 实机 · 被动 Chaos 与 Physics Control 同冲量对比 · 固定 60 Hz · 无声](/media/repositories/siggraph-physics-lab/character-impulse.mp4)

A/B 测试采用相同 Manny 资产，每路 22 个刚体，在 60 Hz 固定步长下记录 6 秒、360 个样本。0.5 秒时向两路 \`spine_03\` 施加相同的 \`5200 kg·cm/s\` 冲量。

- **左侧：被动 Chaos。** 保留原生刚体、关节约束与地面碰撞，受力后进入布娃娃运动。
- **右侧：Chaos + Physics Control。** 配置 21 个父空间姿态控制和 1 个 pelvis 世界空间控制，pelvis 目标固定在初始位置。

这组配置中，\`MaxForce / MaxTorque = 0\` 表示不限力。实验观察的是目标姿态追踪和抗扰响应，pelvis 的世界空间控制提供位置约束。

## 结果怎样量测

每个 PostPhysics 阶段记录骨骼姿态与 pelvis 位置。姿态误差是 22 个刚体相对各自初始旋转的角距离均值；位移是 pelvis 与初始位置的距离。

2026-10-17 按原配置复测，360 个固定步样本通过校验，以下终态数值与 2026-08-30 的记录一致：

- **平均姿态角误差：107.604° → 27.144°。** 对比被动 Chaos 与主动控制。
- **pelvis 位移：152.214 cm → 2.996 cm。** 主动路包含固定世界空间目标。

[源码与实验记录](https://github.com/Ubik42/ue5-siggraph-physics-lab/blob/main/Docs/Cases/Case05_物理驱动角色.md)

[本次与历史采样数据](/media/repositories/siggraph-physics-lab/character-evidence.json)

视频节选仿真时间 0.3—6 秒，末帧停留 2 秒；开头的材质准备画面已剪去。数据记录覆盖完整 6 秒。录制使用固定步推进，画面编码耗时不作为性能指标。

## 连续起身与恢复移动

@[video: UE 5.4.4 连续实机 · 受击、倒地、起身与恢复移动 · 固定 60 Hz · 无声](/media/repositories/siggraph-physics-lab/character-getup.mp4)

独立连续模式使用标准 ACharacter 串联走动、受击、Chaos 倒地、稳定判定、ALS 仰卧起身、站立目标追踪与 CharacterMovement 恢复。录像通过脚本调用操作入口，在单机、60 Hz 固定游戏步长下运行。

### 倒地解耦与稳定状态估计

受击时停用 CharacterMovement 与胶囊体碰撞，分离 Mesh，关闭 Physics Asset 的关节驱动并交由 Chaos 模拟。起身请求只记录意图；接触地面后，骨盆变换有小幅往返，原始速度也持续波动，因此采集 pelvis 刚体的实际世界变换，以变换差分和 **0.12 秒时间常数滤波**估计稳定运动。

原始速度超过 100 cm/s 或 4 rad/s 时仍直接拒绝起身。估计速度须持续 **0.35 秒**低于 18 cm/s 和 0.9 rad/s，且姿态明确、处于接地状态，才进入起身阶段。原始速度、估计速度和状态变化均输出 CSV。

### 动画目标驱动物理，再归还移动控制

起身前根据朝向选择 ALS Front / Back 片段，视频展示本次仰卧分支。**21 个父空间控制与 1 个 pelvis 世界空间控制**驱动身体。重定位动画目标坐标系时，保存并恢复实际刚体的世界位姿与速度；固定目标坐标系，避免驱动结果反过来移动自身目标。

ALS CLF 动作结束在蹲姿，随后继续追踪站立 Idle。骨盆高度与朝向满足条件并保持 **0.25 秒**后，销毁 Controls 与 Body Modifiers，关闭骨骼模拟，重新附着 Mesh，切回 \`MOVE_Walking\`。恢复后的移动用于检查控制权确实归还。

[连续过程的源码与复现](https://github.com/Ubik42/ue5-siggraph-physics-lab/blob/main/Docs/Development/CONTINUOUS_GETUP.md)

[状态、位移与采样摘要](/media/repositories/siggraph-physics-lab/getup-evidence.json)

本次采用不限力的 Physics Control，动画切换尚未接入惯性化混合；覆盖平地、单机仰卧起身。连续模式与已有服务器权威组件分别验证，联机物理同步和复杂地形适配仍需补充。

![独立起身场景：俯卧、仰卧与高速拒绝三路对照](/media/repositories/siggraph-physics-lab/character-getup.png)

三路场景截图采集于 2026-08-30；上方连续视频采集于 2026-10-17。旧速度拒绝示例中的强制分支修正已移除，当前判定来自实际测量。

Lyra 的可恢复跌倒组件与死亡状态分开，**DeathState 优先**。客户端发送起身请求，服务器根据角色状态确认恢复，再交回 Character Movement。这部分保留原有独立验证记录。

## 实现分工

底层 Chaos、Physics Control 与 Lyra 框架由 Epic 提供，起身动作源自 ALS。个人工作涵盖 A/B 扰动负载设计、时序数据采样与导出、起身条件判断、控制权交接、Game Feature 模块接入及失败用例分析。当前实现采用确定性控制，论文用于系统分层设计参考。

## 五个研究案例

- **接触感知 GPU 布料**：读取 Assassin 的 Clothing 拓扑、动画蒙皮目标与 Physics Asset，在 RDG Compute 中实现 Jacobi、低频模态、NDB、rank-one 接触和 CCD，并与 Chaos Cloth 共用输入。
- **多尺度 GPU 软体**：用四面体 XPBD 研究高分辨率下的局部传播停滞，以两模态全局校正改善中高档收敛，再通过体积 Cage 驱动 Dragon 表面。
- **Particle Flow Map 流体**：实现 2D MAC 网格、粒子 Flow Map、Jacobian 输运和压力投影，让 Chaos 刚体成为实时运动边界。
- **可微物理与反向设计**：对离散动力学推进前向切线，用有限差分验证梯度，并把反演参数送回 Chaos Constraint 重放。
- **物理驱动角色**：连接 Chaos 多刚体、Physics Control、ALS 起身动画与 Lyra 服务器权威，处理跌倒、恢复判据和物理—动画交接。

每个 Case 都保留标准结果、单变量失败、固定步数据、GPU 或 CPU 计时和自动化验证。公开仓库不重新分发 Fab 商业资产，只提交个人源码、Shader、文档和运行截图。
`,BT=`# Noemancer：面向人与 AI 协作的自研游戏引擎

Noemancer 是基于 C++20 构建的游戏引擎与编辑器，当前处于 v0.2.0 Preview 1（pre-alpha）阶段，主要在 Windows x64 本机验证。个人研发重心集中在引擎领域模型、外部库适配、命令编辑系统、资产处理管线以及渲染架构组织；实体管理使用 Flecs ECS，物理与骨骼动画分别集成 Jolt Physics 和 ozz-animation，渲染对接 SDL_GPU，音频接入 miniaudio。

## 编辑、试玩与项目保存

工程管理覆盖 Scene、Prefab、Asset Registry、C# 脚本以及项目 HUD 布局。编辑器将编辑环境与试玩环境隔离，试玩产生的数据变动可选择性写回编辑世界并支持撤销。

- Project Hub 管理创建、打开和恢复工程。Scene View、Outliner、Inspector、Asset Browser、Console、Animation Graph 与 Scene Flow Canvas 组成编辑工作区；音频、VFX、Sprite 和材质作者面板接入同一 Editor。
- Scene 中的实体使用稳定 ID。修改 Transform 时可先预检查，再根据版本号提交；旧版本号的请求被拒绝，避免自动化覆盖刚完成的编辑。
- 2026-10-17 在独立 serve 会话中，将一个台阶的 Y 坐标从 **0.35 调整至 1.35**：预检查保持场景不变，提交后拒绝旧版本请求，撤销恢复原场景，重做并保存。五个 HUD 中文标签通过 UI 源文档事务完成持久化与运行时热应用。

## C# Gameplay 与平台跳跃样板

游戏逻辑基于 **.NET 10 与 HostFXR** 托管执行。脚本编译出错时，引擎保留运行中的旧程序集；热重载时迁移带有标记字段的状态数据。项目逻辑通过稳定的数据视图和 World Command Buffer 操作引擎，不向外暴露 Flecs、Jolt 或 SDL 的原始句柄。

NoemancerPlatformer 用 2.5D 灰盒关卡验证这些接口：CharacterMotor2D 与 CameraFollow2D 负责角色和镜头；加减速、斜坡行走、离地跳跃宽限、跳跃缓冲与可变跳高共同控制手感。关卡包含单向平台、移动平台、收集物、检查点、危险区重生和条件终点。HUD 读取 C# 导出的收集数、完成状态及逻辑输入值，游戏专属规则保存在项目脚本中。当前主角仍以灰盒呈现。

运行时还集成 GPU Skinning、RmlUi、输入、音频、GPU VFX、Prefab 和存档，并提供确定性延迟/重复事件、实体池与增量生成/销毁。

## D3D12 / Vulkan 渲染管线

- SDL_GPU 后端让 D3D12 与 Vulkan 共用资源、Shader 和 Render Graph 合同，同时保留各后端的 Pass 时间与诊断信息。
- Raster 主路径包含 Forward PBR、split-sum IBL、四级 CSM、Point/Spot 阴影、GPU 视锥裁剪与间接绘制。
- 画面管线接入四 LUT 动态天空、Aerial Perspective、共享 HiZ、SSR、SSGI、TAA、GTAO、双边降噪、Bloom、曝光调色和 ACES Tone Mapping。
- RenderLab 中的 Intel Sponza 2022 约含 **205 万顶点、1124 万索引、405 个 primitive 和 72 张纹理**。本页保留其 Release 实时运行捕获；大型场景的 Cook / Package 尚未收口。
- RTX 4080 上已有 D3D12 / Vulkan 的 BLAS/TLAS、Pipeline、SBT、Trace 与 Readback 实验。D3D12 接入真实 SceneRenderer 几何并输出可见线性直接光，Vulkan 原生光追仍为私有全帧输出；生产 RTGI、VSM、完整光追材质和原生光追结果经 SDL 呈现仍在后续路线中。

## 资产 Cook 与独立 Player

资产 Cook 管线根据启动场景和显式配置的打包清单收集依赖。Windows 包自带项目程序集、app-local .NET、VC Runtime、Shader Manifest 及第三方 NOTICE，Player 从包内加载场景、资产与脚本。

2026-10-17 使用同一平台跳跃工程完成本机打包和独立 Player 运行。源项目与包内项目分别运行 90 个固定步，均执行 C# CourierController，主角公共状态一致。GPU 运行另行输入移动和跳跃并采集画面；这组记录覆盖本机运行，干净机器部署仍待验证。

- 导入 GLB、JSON glTF 与 FBX，使用 meshoptimizer 处理几何，烘焙 Mesh、Animation、KTX2、Sprite Atlas 和 Tilemap 数据。
- Cook 产物由源文件、配方、目标 Profile 和工具版本共同寻址；Runtime 加载前复核范围、Schema 与 SHA-256。
- Sprite 图集已经支持 Cook 与分发；Sprite、材质源资产在编辑器中的完整持久化流程仍在完善。

## Editor 与 Agent 的协作接口

**C++ Command Registry** 为编辑器、CLI 与 MCP 提供统一命令和 Schema。可撤销的场景编辑通过稳定实体 ID、版本号、dryRun 预检查和事务组织，修改结果能继续撤销或重做；有限观察接口控制一次返回的数据范围。

MCP 可以连接当前 Editor，也可以使用独立 serve 进程。前者已有同一 World 的实体创建、撤销，以及 Editor Context 选择与焦点的真实接入记录；后者维护独立 World。本页台阶修改与 HUD 事务使用独立 serve，随后重新加载保存的工程采集画面。各子系统的撤销范围以其具体接口为准。

## 当前开发范围

项目处于 Windows x64 本机 pre-alpha 阶段。独立干净机器部署、跨平台发行、稳定插件 SDK、生产网络、生产 RTGI/VSM，以及真实模型 Provider 到 Staging 的 AIGC 流程仍待完成。Vulkan Raster 已有运行记录；原生光追结果经 SDL 的安全呈现仍未完成。

Sponza 展示证明大型外部场景的实时画面；平台跳跃样板用于验证编辑、C#、UI 与打包流程，两者的验证范围分别记录。Sponza 2022 由 Frank Meinl 制作、Intel 发布，采用 CC BY 4.0。
`,LT=[xT,MT,UT,zT,ET,...CT,{id:"frostbound-gate",title:"霜隙之门 · Frostbound Gate",category:"general-ta",categoryLabel:{zh:"Unity 场景特效",en:"Unity scene VFX"},summary:{zh:"雪地遗迹中的冰晶传送门。旅人靠近时凝结，穿越后传送，远离时碎裂消散；包含昼夜变化、分层冰材质和程序生成资产。",en:"An ice-crystal portal in snowy ruins: approach to form it, cross to teleport, and retreat to dissolve it. Includes a day–night cycle, layered ice shading, and procedural assets."},cover:"/media/repositories/frostbound-gate/hero.webp",tags:["Unity 6","URP","Shader","程序化建模","场景交互"],repositoryUrl:"https://github.com/Ubik42/FrostboundGate",story:{zh:`# 霜隙之门

一座冰门立在雪地遗迹中，冷色冰晶与暖色石灯共同标出入口。这个独立场景项目把结晶、生长、消散和昼夜变化放进同一个可以游玩的场景，让效果随着角色行动发生。

## 60 秒实机演示

@[video: Unity Player 实机演示：场景、角色交互、昼夜变化、冰晶细节与凝结消散](/media/repositories/frostbound-gate/showcase.mp4)

视频来自 Unity Player 的真实渲染画面。字幕和下方章节条在剪辑阶段加入；固定步长录制用于保持动画与镜头连续，不作为性能测量。

## 角色行动带动效果

旅人接近后，地面霜纹展开，34 段冰晶依次形成不对称门拱，符文和门芯逐渐点亮。穿越开启的门面会触发传送，角色远离后冰门消散，配合 48 枚碎片散开。

进入和离开使用不同的距离边界，角色在临界位置小幅移动时不会反复开关。中途折返会从当前进度继续变化。WASD 可以手动移动，F2 切换自动行走，E 可在开启的门附近交互。

## 冰晶与环境

冰材质分开表现切面反光、内部裂隙、云雾与颗粒。霜纹使用分支贴图，门芯由着色器绘制旋涡和环形图案。门芯并非另一场景的相机画面，实际传送由角色逻辑完成。

![冰晶切面、符文与旋涡门芯](/media/repositories/frostbound-gate/detail.webp)

昼夜变化同时控制主光方向、天空与环境色、魔法亮度。白天保留冰晶轮廓和裂隙，夜间由门芯、符文和石灯建立明暗关系。

![日间光照下的雪地遗迹](/media/repositories/frostbound-gate/day.webp)

## 工程与性能

工程使用 Unity 6000.3.21f1 / URP 17.3.0。冰晶、地形、石件、旅人和纹理由项目代码生成或组合制作，生成后的资源已包含在仓库中，可以直接打开场景。代码、程序资产和文档包含 Codex 辅助。

独立 Player 在 i7-13700F / RTX 4080、1920×1080、Direct3D 11、MSAA 4×、关闭垂直同步和帧率上限的条件下测量：完全开启时平均帧间隔 2.051 ms，p95 为 3.898 ms；生成—开启—消散循环平均 1.520 ms，p95 为 3.183 ms。p95 表示 95% 样本不超过该值。这是本机该次采样结果，不代表其他硬件的运行保证。

仓库提供运行说明、制作说明和原始 CSV，可核对测试条件及有效 GPU 样本。[查看性能记录](https://github.com/Ubik42/FrostboundGate/blob/main/Docs/Public/性能记录.md) · [下载 1080p 演示](https://github.com/Ubik42/FrostboundGate/releases/tag/v0.1.0)。`,en:`# Frostbound Gate

An independent Unity scene project set in snowy ruins. Cold crystal shapes and warm stone lanterns frame an interactive portal, combining formation, dissolution, and a day–night cycle in one playable scene.

## 60-second in-engine showcase

@[video: Unity Player footage: environment, interaction, day–night lighting, ice detail, and formation / dissolution](/media/repositories/frostbound-gate/showcase.mp4)

Captured from actual Unity Player rendering, with captions and chapter markers added in editing. Fixed-step recording keeps the animation consistent and is separate from runtime benchmarking.

## Interaction and materials

Approaching the gate reveals ground frost and forms an asymmetric arch of 34 crystal segments. Crossing the open portal teleports the traveller; retreat dissolves the gate with 48 shards. Separate entry and exit thresholds prevent rapid toggling at the boundary, and interrupted transitions continue from their current progress. WASD moves the character, F2 toggles the automatic walk, and E interacts near the open gate.

Ice shading separates facet highlights, fractures, cloudiness, and grain. The portal core uses procedural swirl and ring patterns, rather than a camera view into another scene. Day–night controls coordinate the main light, sky, ambient color, and magical emission.

![Crystal facets and procedural portal core](/media/repositories/frostbound-gate/detail.webp)

![The ruins under daytime lighting](/media/repositories/frostbound-gate/day.webp)

## Implementation and measurements

Built with Unity 6000.3.21f1 and URP 17.3.0. Crystals, terrain, stonework, the traveller, and textures are generated or assembled by project code; ready-to-open generated assets are included. Code, procedural assets, and documentation include Codex assistance.

Standalone Player measurements on an i7-13700F / RTX 4080 at 1920×1080, Direct3D 11, MSAA 4×, with VSync and the frame cap disabled: fully open mean frame interval 2.051 ms / p95 3.898 ms; formation–open–dissolution cycle mean 1.520 ms / p95 3.183 ms. These are measurements of this build on this machine, not guarantees for other hardware. The repository includes test conditions and raw CSV data.`}},{id:"gameops-insight-agent",title:"GameOps Insight Agent：游戏运营数据 BI Agent",category:"other-tools",categoryLabel:{zh:"游戏运营 BI Agent",en:"Game operations BI agent"},summary:{zh:"把中文业务问题编译为指标口径、分析计划和受限只读查询，再用真实表格、图表、证据哈希与 Run 回放交付可复算结论。",en:"Compiles Chinese business questions into metric contracts, analysis plans, and restricted read-only queries, then delivers reproducible findings with real tables, charts, evidence hashes, and replayable runs."},cover:"/media/repositories/gameops-insight-agent/golden.png",tags:["BI Agent","DuckDB","FastAPI","SQLGlot"],repositoryUrl:"https://github.com/Ubik42/GameOps-Insight-Agent",story:{zh:`# GameOps Insight Agent：游戏运营数据 BI Agent

这是一个中文优先、本地运行的游戏运营与客户端质量分析作品。重点不是生成一组静态 KPI 卡片，而是把一次业务判断拆成可以审阅和复算的分析过程：中文问题先匹配版本化指标口径，形成 AnalysisPlan，再进入受限只读查询、结果复检、图表与表格，最后保存证据绑定和 Run。

## 从问题到证据的完整链路

- 9 个版本化指标记录名称、公式、粒度、分母、允许维度、负责人和冲突关系；
- “本周崩溃率”存在按会话和按玩家两个有效分母，系统会在执行 SQL 前要求选择，不静默猜测；
- SQLGlot AST 只允许单条只读查询，DuckDB 连接关闭外部访问与扩展加载，并限制执行时间、内存、线程和返回行数；
- 查询结果继续检查空结果、零分母、缺日、重复粒度、异常规模、样本量和截断，复检错误会阻断业务结论；
- 每条结论绑定数据集、字段和 SHA-256，Run 保存计划、SQL、参数、快照、结果、耗时、复检、证据、限制与异常。

## 五类游戏 BI 问题

固定种子合成数据覆盖 1,200 名虚构玩家，以及会话、客户端性能、崩溃、英雄对局和活动事件。当前版本可以稳定复演：

- 版本上线后的玩家活跃、会话崩溃和 GPU 帧时变化；
- 地图性能回归是否集中在高强度战斗与特定设备；
- 英雄胜率和选用率变化是否集中在高分段打野；
- 活动漏斗最大流失步骤及平台分群；
- 当前观测数据为什么只能说明时间相关，不能证明版本发布造成流失。

## 运行可靠性与边界

分析任务独立落盘，运行中可以主动取消；服务重启后，未完成任务会标记为中断，并从原问题创建关联重跑，不会把部分结果伪装成成功。数据生成先在同盘暂存，完整性检查通过后才原子替换正式快照；Run 也在临时目录完成后整体提交。

v0.1.0 已在 Windows、Python 3.12 和 DuckDB 1.5.5 验证，21 项核心测试与 9/9 固定 BI 评测通过。当前只支持仓库自带的合成数据和确定性问题路由，不宣称任意问题、真实企业数据、自动因果判断或开放式代码执行。`,en:`# GameOps Insight Agent

A Chinese-first, locally runnable BI agent for game operations and client-quality analysis. It turns a business question into versioned metric contracts and an inspectable AnalysisPlan before running restricted read-only DuckDB queries. Results are validated, rendered as real tables and charts, and stored with SQL, parameters, snapshot hashes, evidence bindings, limitations, and replayable Run artifacts.

Five distinct scenarios cover release regression, map performance, hero balance, activity funnels, and causal-evidence gaps. Ambiguous crash-rate questions stop before SQL until the user selects a denominator. Empty results, zero denominators, missing dates, duplicate grain, unexpected result size, small samples, and truncation are checked before findings are written.

Version 0.1.0 is verified on Windows with Python 3.12 and DuckDB 1.5.5. It uses deterministic synthetic data and bounded question routing; it does not claim arbitrary enterprise analysis, causal automation, or unrestricted code execution.`},images:[{src:"/media/repositories/gameops-insight-agent/metric-choice.png",alt:{zh:"崩溃率两个有效分母的执行前口径选择",en:"Pre-query selection between two valid crash-rate denominators"}},{src:"/media/repositories/gameops-insight-agent/sql-blocked.png",alt:{zh:"外部文件读取 SQL 在执行前被拦截",en:"External-file SQL blocked before execution"}}]},{id:"lyra-hero-arena",title:"Lyra 英雄射击：GAS 深度实践与技能架构",category:"engine-games",categoryLabel:{zh:"多人游戏与 Gameplay 架构",en:"Multiplayer game and gameplay architecture"},summary:{zh:"基于 UE 5.7.4 与 Lyra 的五英雄射击原型，深入实践 GAS 技能架构：以 AbilitySet 管理技能授予与撤销，由 PlayerState 保存选择并交给服务器校验，在重生 Pawn 初始化后重新装配技能与武器。",en:"An in-progress UE5 Lyra hero shooter using GAS, Game Features, PawnData, and server-authoritative state for selection, combat, death, respawn, and results."},cover:"/media/repositories/lyra-hero-arena/respawn-confirmed-20261017.jpg",tags:["UE 5.7","Lyra","C++ / GAS","Game Features"],repositoryUrl:"https://github.com/Ubik42/LyraHeroArena",story:{zh:kT,en:`# Lyra Hero Arena

An in-progress multiplayer hero-shooter project built on Unreal Engine 5.7 and Lyra. Five heroes are composed from Ability Sets, equipment, and data definitions, while server-authoritative selection and a HeroArena Game Feature keep gameplay boundaries explicit. The repository publishes original C++ modules and real screenshots without redistributing Lyra or Fab assets.`},images:[{src:"/media/repositories/lyra-hero-arena/gameplay.jpg",alt:{zh:"Lyra 英雄射击实际交战场景",en:"Live combat in the Lyra hero shooter"}}]},{id:"lyra-performance-lab",title:"多角色高负载场景性能优化",category:"engine-games",categoryLabel:{zh:"UE 性能分析与优化",en:"UE performance analysis and optimization"},summary:{zh:"基于 Lyra 搭建 200 个受控 AI 的测试场景，通过距离分段、原生 URO 与动画后处理裁剪降低开销，展示实际采样与技术取舍。",en:"Independent, attributable before-and-after studies across AI, navigation, animation, rendering, and networking under high multi-character load."},cover:"/media/repositories/lyra-hero-arena/animation-crowd.jpg",tags:["URO / 动画分级","CSV Profiler","200 AI","A/B 对照"],repositoryUrl:"https://github.com/Ubik42/LyraHeroArena/tree/main/Plugins/PerformanceLab",story:{zh:DT,en:`# Multi-Character Performance Optimization

Fixed maps, seeds, viewpoints, graphics settings, RHI, and character loads create repeatable single-variable studies across AI, navigation, animation, rendering, and networking. Performance gains are accepted only when behavior and visual quality conditions remain valid.`},images:[{src:"/media/repositories/lyra-hero-arena/workbench-network.png",alt:{zh:"网络优化实验的 Baseline 与 Optimized 对比",en:"Baseline and optimized comparison for the networking experiment"}},{src:"/media/repositories/lyra-hero-arena/gameplay.jpg",alt:{zh:"性能压力实验所依托的 Lyra Gameplay 场景",en:"Lyra gameplay environment used by the performance stress studies"}}]},{id:"ue-performance-workbench",title:"UE 性能实验工作台",category:"engine-games",categoryLabel:{zh:"Unreal Editor 性能工具",en:"Unreal Editor performance tooling"},summary:{zh:"在 Unreal Editor 内编排、采集和比较性能实验；以战术 HUD 为例，分开呈现局部刷新、UI 总耗时与整帧表现。",en:"An Unreal Editor workbench for launching standalone and networked experiments, validating load and quality conditions, and aggregating formal baseline/optimized results."},cover:"/media/repositories/lyra-hero-arena/workbench-network.png",tags:["UE 5.7","Slate","CSV Profiler","Multi-process"],repositoryUrl:"https://github.com/Ubik42/LyraHeroArena/tree/main/Plugins/PerformanceWorkbench",story:{zh:RT,en:`# UE Performance Workbench

A Chinese Unreal Editor tool that turns profiling setup into repeatable experiments. Versioned presets define maps, loads, seeds, RHI, graphics settings, capture duration, and process topology. The workbench launches standalone, server, and client processes, validates required load and quality conditions, and aggregates matched 3+3 baseline and optimized samples with medians, P95 values, deltas, and quality costs.`},images:[{src:"/media/repositories/lyra-hero-arena/workbench-render.png",alt:{zh:"渲染实验的正式结果对比",en:"Formal rendering experiment comparison"}},{src:"/media/repositories/lyra-hero-arena/workbench-network.png",alt:{zh:"网络实验的多进程结果对比",en:"Multi-process network experiment comparison"}}]},{id:"noemancer",title:"Noemancer：面向人与 AI 协作的自研游戏引擎",category:"engine-games",categoryLabel:{zh:"自研游戏引擎",en:"Custom game engine"},summary:{zh:"Noemancer v0.2.0 Preview 1 是一套处于 pre-alpha 的 C++20 游戏引擎与编辑器，当前在 Windows x64 上贯通 Scene/Project 编辑、C# Gameplay、Jolt 物理、ozz 动画、SDL_GPU D3D12/Vulkan Raster、资产 Cook、Package 与独立 Player；Editor、CLI 和 MCP 通过稳定 ID、Schema、Revision 与 Receipt 共享状态观察和受控修改。",en:"Noemancer v0.2.0 Preview 1 is a pre-alpha C++20 engine and editor, currently verified end to end on Windows x64 across Scene/Project authoring, C# gameplay, Jolt physics, ozz animation, SDL_GPU D3D12/Vulkan raster rendering, asset Cook, Package, and a standalone Player. Editor, CLI, and MCP share stable IDs, schemas, revisions, and receipts for structured observation and bounded mutation."},cover:"/media/repositories/major-updates/noemancer-sponza-atrium.webp",tags:["C++20","D3D12 / Vulkan","C#","MCP"],repositoryUrl:"https://github.com/Ubik42/Noemancer",story:{zh:BT,en:`# Noemancer

Noemancer v0.2.0 Preview 1 is a pre-alpha C++20 game engine and editor. It provides a verifiable Windows x64 path from authoring and runtime execution through asset Cook, packaging, and a standalone Player, with the Editor, CLI, and MCP sharing one state and command contract.

## Current capabilities

- Native project and scene authoring, input and project UI.
- Isolated Play World execution with selective Apply Back.
- Scene Flow Canvas plus Audio, VFX, Sprite, and Material authoring surfaces.
- Deterministic delayed/repeating gameplay events, runtime pools, and incremental prefab spawn/despawn.
- SDL_GPU rendering on D3D12 / Vulkan with Forward PBR, shadows, dynamic sky, SSR, SSGI, TAA, GTAO, Bloom, and ACES tone mapping.
- GLB / FBX import, cooked mesh and animation formats, KTX2 assets, and Windows Player packaging.
- Stable IDs, schemas, revisions, receipts, and undoable commands shared by the Editor and agent tools.

## Current boundary

The project is pre-alpha and currently verified end to end on Windows x64. Raster SSR, SSGI, and dynamic atmosphere are current verified paths. Native RT has experimental D3D12/Vulkan execution and D3D12 scene-tracing foundations; production RTGI, VSM, Vulkan presentation, durable Sprite/Material asset authoring, clean-machine/cross-platform release, provider-backed AIGC, and a stable plug-in SDK remain unfinished.`},images:[{src:"/media/repositories/major-updates/noemancer-editor.webp",alt:{zh:"Noemancer 中文 Editor：场景、层级、Inspector、资产与 Agent Context",en:"Noemancer Chinese editor workspace"}},{src:"/media/repositories/major-updates/noemancer-sponza-atrium.webp",alt:{zh:"D3D12 中实时运行的 Intel Sponza 2022 宫殿中庭",en:"Intel Sponza 2022 atrium running in real time on D3D12"}},{src:"/media/repositories/major-updates/noemancer-sponza-balcony.webp",alt:{zh:"Sponza 上层回廊与外部 glTF 材质依赖",en:"Sponza balcony and external glTF material dependencies"}},{src:"/media/repositories/major-updates/noemancer-commercial-raster.webp",alt:{zh:"PBR、阴影、Bloom 与 ACES 的商业 Raster 基准",en:"Commercial raster benchmark with PBR, shadows, Bloom, and ACES"}},{src:"/media/repositories/major-updates/noemancer-sky.webp",alt:{zh:"四 LUT 动态天空、大气与 Aerial Perspective",en:"Four-LUT dynamic sky, atmosphere, and aerial perspective"}},{src:"/media/repositories/major-updates/noemancer-ssr-ssgi.webp",alt:{zh:"RenderLab 中启用 SSR、SSGI 与时域处理",en:"SSR, SSGI, and temporal processing in RenderLab"}}]},{id:"siggraph-physics-lab",title:"UE5 SIGGRAPH 物理复现实验室",category:"engine-games",categoryLabel:{zh:"UE 物理与论文复现",en:"UE physics and paper reproduction"},summary:{zh:"围绕布料、软体、流体、可微物理和物理角色控制，把 SIGGRAPH 研究中的求解思想接入 UE 5.4、Chaos 与真实引擎资产。",en:"Five UE 5.4 studies connect SIGGRAPH research on cloth, soft bodies, fluids, differentiable physics, and physical character control to Chaos and real engine assets."},cover:"/media/repositories/siggraph-physics-lab/cover.png",tags:["UE 5.4.4","Chaos","RDG / D3D12","Physics"],repositoryUrl:"https://github.com/Ubik42/ue5-siggraph-physics-lab",story:{zh:jT,en:`# UE5 SIGGRAPH Physics Lab

This is my personal Unreal physics laboratory. Five independent cases bring selected ideas from recent SIGGRAPH and SIGGRAPH Asia papers into UE 5.4.4, Lyra, Chaos, RDG compute, and real engine asset workflows.

The cases cover contact-aware GPU cloth, multiscale tetrahedral soft bodies, particle flow-map fluids, differentiable inverse design, and physics-driven character recovery. Each case keeps a normal run, a controlled failure, fixed-step measurements, and explicit reproduction boundaries.`},images:[{src:"/media/repositories/siggraph-physics-lab/case01-cloth.png",alt:{zh:"Case01 Assassin Clothing 与 Chaos Cloth 同输入的 GPU 布料实验",en:"Case01 GPU cloth using the same Assassin inputs as Chaos Cloth"}},{src:"/media/repositories/siggraph-physics-lab/case02-softbody.png",alt:{zh:"Case02 Dragon 表面与四面体 Cage 的 GPU 软体接触实验",en:"Case02 Dragon surface driven by a tetrahedral GPU cage"}},{src:"/media/repositories/siggraph-physics-lab/case03-flowmap.png",alt:{zh:"Case03 Particle Flow Map 流体与 Chaos 运动边界",en:"Case03 particle flow-map fluid with a live Chaos boundary"}},{src:"/media/repositories/siggraph-physics-lab/case04-inverse.png",alt:{zh:"Case04 可微反演模型与 Chaos Constraint 参数重放",en:"Case04 differentiable inversion and Chaos Constraint replay"}},{src:"/media/repositories/siggraph-physics-lab/case05-character.png",alt:{zh:"Case05 Chaos 多刚体与 Physics Control 角色恢复",en:"Case05 Chaos rigid bodies and Physics Control character recovery"}}]},{id:"noemancer-software-rasterizer",title:"CPU 软件光栅化实验室",category:"engine-games",categoryLabel:{zh:"实时图形与渲染基础",en:"Realtime graphics fundamentals"},summary:{zh:"C++20 CPU 参考光栅器：手动完成三角形覆盖、透视正确插值、Z-Buffer 与逐像素着色，一次导出十种效果和诊断缓冲。",en:"A C++20 CPU reference rasterizer with triangle coverage, perspective-correct interpolation, Z-buffering, pixel shading, and ten visual or diagnostic outputs."},cover:"/media/repositories/software-rasterizer/07_matcap.png",tags:["C++20","CPU Raster","OpenMP","Graphics Debugging"],repositoryUrl:"https://github.com/Ubik42/NoemancerSoftwareRasterizer",story:{zh:`# CPU 软件光栅化实验室

这是一个与 Noemancer 完整 GPU 渲染器互补的小型图形学实验。它不调用 OpenGL、DirectX 或 Vulkan 生成场景像素，而是在 CPU 上显式执行顶点变换、三角形覆盖、重心坐标、\`1/w\` 透视校正、深度测试和 Fragment Shader。

## 一次运行，十张可检查结果

- 最终着色、深度、视空间法线与透视校正 UV 用于验证基础管线；
- Toon、Fresnel 风格边缘光与 MatCap 展示基于法线和视线关系的风格化着色；
- 线框与重心坐标图直接显示三角形内部插值；
- Overdraw 在深度测试前累计片元覆盖次数，并用对数热力色带定位重复绘制区域。

## 实测结果

Windows Release 构建以 800×800 渲染 Diablo Pose 示例模型的 5,022 个三角形，执行 8 个 CPU Raster Pass，并自动写出 10 张 TGA。最后一次完整运行约 417 ms，计时包含模型加载、光栅化与文件写盘，不与 GPU 帧时间直接比较。

## 工程边界

项目基于 TinyRenderer 教学实现进行工程化扩展，保留原始 Git 历史、MIT 许可证和素材授权说明。新增内容集中在多 Pass 组织、风格化 Shader、Overdraw 诊断、Windows 一键演示、JSON 摘要、中文文档与十张真实截图；它用于证明光栅化基础，不冒充完整商业引擎。`,en:`# CPU Software Raster Lab

This compact graphics study complements the full GPU renderer in Noemancer. It explicitly performs transforms, triangle coverage, barycentric interpolation, \`1/w\` perspective correction, depth testing, and fragment shading on the CPU.

A single run exports ten real outputs: final shading, depth, view-space normals, corrected UVs, toon shading, rim lighting, MatCap shading, wireframe, overdraw heat, and barycentric interpolation. The Windows Release run processes 5,022 triangles at 800×800 across eight raster passes.

The project is an engineering extension of the MIT-licensed TinyRenderer teaching implementation. Original history and asset notices are retained, while the portfolio work focuses on additional passes, shaders, diagnostics, automation, structured output, and documentation.`},images:[{src:"/media/repositories/software-rasterizer/07_matcap.png",alt:{zh:"视空间法线驱动的 MatCap 着色",en:"View-space-normal-driven MatCap shading"}},{src:"/media/repositories/software-rasterizer/01_shaded.png",alt:{zh:"法线贴图与高光组合的最终着色",en:"Final shading with normal mapping and highlights"}},{src:"/media/repositories/software-rasterizer/02_depth.png",alt:{zh:"Z-Buffer 有效深度范围可视化",en:"Visualization of the valid Z-buffer depth range"}},{src:"/media/repositories/software-rasterizer/03_view_normals.png",alt:{zh:"视空间法线插值结果",en:"Interpolated view-space normals"}},{src:"/media/repositories/software-rasterizer/04_perspective_uv.png",alt:{zh:"透视正确 UV 棋盘",en:"Perspective-correct UV checkerboard"}},{src:"/media/repositories/software-rasterizer/05_toon.png",alt:{zh:"N·L 离散量化的 Toon 色阶",en:"Toon bands from quantized N dot L"}},{src:"/media/repositories/software-rasterizer/06_rim_light.png",alt:{zh:"Fresnel 风格青色边缘光",en:"Fresnel-style cyan rim lighting"}},{src:"/media/repositories/software-rasterizer/08_wireframe.png",alt:{zh:"由重心坐标生成的三角形线框",en:"Triangle wireframe generated from barycentric coordinates"}},{src:"/media/repositories/software-rasterizer/09_overdraw.png",alt:{zh:"深度测试前片元覆盖次数热力图",en:"Pre-depth-test fragment coverage heatmap"}},{src:"/media/repositories/software-rasterizer/10_barycentric.png",alt:{zh:"三角形重心坐标连续插值",en:"Continuous triangle barycentric interpolation"}}]},{id:"resonance-forge",title:"共振铸造台 Resonance Forge",category:"engine-games",categoryLabel:{zh:"UE 技术音频与编辑器工具",en:"UE technical audio and editor tooling"},summary:{zh:"在 UE 场景里把碰撞与 MIDI 变成可调声音：标定冲量，塑造模态或波导共振，再交给 Wwise、WAV 与可复用配方。",en:"Turns scene collisions and MIDI into tunable sound in UE: calibrate impact, shape modal or waveguide resonance, then deliver through Wwise, WAV, and reusable recipes."},cover:"/media/repositories/resonance-forge/keybed.png",tags:["UE 5.8 / C++","Wwise 2025.1","Modal / Waveguide","MIDI"],repositoryUrl:"https://github.com/Ubik42/resonance-forge",story:{zh:`# 共振铸造台：UE × Wwise 物理声源工作台

共振铸造台是一套运行在 Unreal Engine 5.8.1 中的技术音频工具。它从场景对象出发，把“这次碰撞有多重、物体如何共振、声音从哪条出口离开”放进同一个中文工作台里。

## 从一次碰撞开始

冲量标定砧尺把静默门槛、半响、满响和最近的碰撞标在同一条刻度上。每个场景对象保留自己的 12 次碰撞拓印；采到足够的弱碰与强碰后，可以按样本范围重算门槛和灵敏度，并把结果写回编辑地图中的对象。相对速度单独进入明亮度，不会因为调响度而一起改变音色。

## 两种声源，同一套演奏入口

- 模态撞击体把钢、木、玻璃的共振峰做成可编辑齿列，敲击位置会重新分配各模态的能量；
- 八复音数字波导弦共享音高、阻尼、箱体耦合与拾音位置，支持指腹、拨片、锤击和持续弓擦；
- 没有 MIDI 键盘时，可以直接使用十三键试音床和弓行轨；接入硬件后，Note、Velocity、CC1 与 Aftertouch 进入同一条演奏链。

## 从试听到交付

监听闸门可以在 UE 原声、Wwise 出口和双路叠听之间切换。Wwise 路由资产只管理 3 个材质 Event 与 Energy、Brightness、ObjectSize 三条 RTPC；声学配方则单独保存模态、弦床和演奏状态。调好的声音可以 A/B 往返、压入本地配方槽、保存为 Content 资产，或离线铸成 48 kHz WAV 与 JSON 声源铭牌。

仓库包含插件源码、独立演示工程、可重建的测试声音与 PBR 材质，以及插件自身导出的多张实机截图。当前交付范围是 Windows Editor；Wwise SDK 与 Unreal Integration 需要使用者通过 Audiokinetic Launcher 自行安装。`,en:`# Resonance Forge: UE × Wwise Physical Audio Workbench

Resonance Forge is a UE 5.8.1 technical-audio tool that turns scene collisions and MIDI gestures into tunable sound. Its impulse ruler records per-object collision samples and can recalibrate impact thresholds; editable modal bodies and an eight-voice digital waveguide string share a mouse/MIDI performance layer. A monitoring gate compares native UE synthesis with Wwise Events and three RTPCs, while acoustic recipes and Wwise routing remain separate assets. Finished sounds can be compared, stored, exported as 48 kHz WAV plus JSON recipe labels, or saved as reusable Content assets.`},images:[{src:"/media/repositories/resonance-forge/wwise-route.png",alt:{zh:"Wwise 路由织机、共享配方与声源铸样区",en:"Wwise routing loom, shared recipes, and sample export area"}},{src:"/media/repositories/resonance-forge/mode-rack.png",alt:{zh:"可编辑模态齿列与敲击位置塑形",en:"Editable modal rack and strike-position shaping"}},{src:"/media/repositories/resonance-forge/keybed.png",alt:{zh:"鼠标试音键床、弓行轨与力度曲线",en:"Mouse keybed, bowing rail, and velocity curves"}},{src:"/media/repositories/resonance-forge/workbench-details.png",alt:{zh:"声源铭牌、余响拓片与配方回炉",en:"Sample labels, decay print, and recipe recall"}}]},{id:"art-pipeline-skill",title:"可验证的跨 DCC 美术管线审计 Skill",category:"pipeline",categoryLabel:{zh:"跨工具审计与 Agent 能力边界",en:"Cross-tool audit and agent capability boundaries"},summary:{zh:"把供应商目录、Maya 场景与 Unreal 资产检查串成可追溯、可恢复、默认只读的组合审计，并复核版本、Schema、哈希与零写入证据。",en:"Combines supplier delivery, Maya scene, and Unreal asset checks into a traceable, recoverable, read-only audit with version, schema, hash, and zero-write verification."},cover:"/media/repositories/production-tools/art-pipeline-skill-cover.svg",tags:["Skill","Maya / Unreal","Pydantic / JSON Schema","幂等恢复"],repositoryUrl:"https://github.com/Ubik42/art-pipeline-skill",story:{zh:`# 可验证的跨 DCC 美术管线审计 Skill

这个项目不让 Agent 临时拼脚本碰生产资产，而是把三个已经独立发布的确定性工具接入同一条审计链：供应商交付目录扫描、Maya 场景检查和 Unreal Static Mesh 批量审计。Skill 只负责编排、验证和汇总，不复制兄弟工具的业务规则。

## 一次黄金审计

- 先锁定三个工具的发布版本、Git commit、能力声明和关键合同文件；
- 分别核验供应商目录、Maya 2025 后台扫描和 UE 5.8.1 后台审计；
- 用 Pydantic 模型和版本化 JSON Schema 拒绝未知字段、过期报告和格式漂移；
- 对输入目录、Maya 场景和 Unreal 资产复算 SHA-256，证明审计期间没有写入；
- 将三个工具的结果汇成同一份机器报告和中文摘要。

固定黄金路径实际得到 21 个检查发现、2 个采集失败、0 次输入写入。采集失败不会被伪装成“零问题”，发现也只代表需要 TA 复核，不替团队擅自作出交付结论。

## Agent 边界与恢复

Agent 只能调用注册表中已经声明版本、输入范围和风险等级的能力。任意 Python、Shell、Maya 命令或 Unreal Console Command 都不会被直接暴露。Workflow Plan、Checkpoint、幂等键和步骤级收据使流程能从故障点恢复，并跳过已经成功的步骤。

这也是项目被设计成 Skill 而不是专用聊天 Agent 的原因：通用 Agent 理解意图，Skill 约束领域流程，独立工具负责确定性执行，薄宿主桥只提供必要的宿主身份与状态。`,en:`# Verifiable Cross-DCC Art Pipeline Audit Skill

This project composes three independently released deterministic tools—supplier delivery scanning, Maya scene checking, and Unreal Static Mesh auditing—into one traceable, recoverable, read-only workflow.

The golden run produced 21 findings and 2 collection failures with zero writes to the inputs. Versioned Pydantic contracts, JSON Schema, pinned release commits, SHA-256 identities, capability handshakes, checkpoints, and idempotent receipts prevent an agent from turning the workflow into arbitrary host scripting.`},images:[{src:"/media/repositories/production-tools/art-pipeline-composite.png",alt:{zh:"三工具组合黄金审计：21 个发现、2 个采集失败、0 次输入写入",en:"Composite audit with 21 findings, 2 collection failures, and zero input writes"}},{src:"/media/repositories/production-tools/art-pipeline-overview-v2.png",alt:{zh:"供应商目录、Maya 与 Unreal 三类工具连接总览",en:"Connection overview for delivery, Maya, and Unreal tools"}},{src:"/media/repositories/production-tools/art-pipeline-unreal.png",alt:{zh:"Unreal 批量审计的版本、宿主与证据状态",en:"Version, host, and evidence state for Unreal batch auditing"}},{src:"/media/repositories/production-tools/art-pipeline-blocked-v2.png",alt:{zh:"工具版本漂移时失败关闭",en:"Fail-closed behavior on tool version drift"}}]},{id:"internship-art-pipeline",title:"光子 AI 工具向实习内容总结",category:"pipeline",categoryLabel:{zh:"腾讯光子｜AI 工具技术美术实习",en:"Tencent Lightspeed AI tools internship"},summary:{zh:"覆盖 Maya / Unreal 宿主工具、8 个 Figma 插件、FastAPI 数据服务、视觉检索、AIGC 自动化、DCC 批处理与可回归交付。",en:"Maya and Unreal tools, eight Figma plug-ins, FastAPI data services, visual retrieval, AIGC automation, DCC batch processing, and regression-ready delivery."},cover:"/media/repositories/production-tools/photon-ai-internship-cover.png",tags:["Maya / Unreal","Figma","Python / C++","React / FastAPI"],story:{zh:`# 光子 AI 工具向实习内容总结

这是我在腾讯光子担任 AI 工具技术美术实习生期间的工作总结。工作范围横跨 Maya、Unreal Editor、Figma 插件沙箱、Python / C++、TypeScript / React、FastAPI、SQLite、视觉检索、AIGC 长时任务、版本化软件环境和持续集成。

## 工作重点

- 在 Maya 和 Unreal Editor 中开发直接服务于美术生产的宿主工具，处理场景状态、资源引用、可撤销写入与真实宿主回归；
- 持续开发 8 个 Figma 插件，覆盖 AI 对话、批量翻译、任务交付、视觉语义搜索、组件查重、母版更新、切图与布局标注；
- 建立共用 FastAPI 数据服务、SQLite 快照、缩略图缓存和 SigLIP 向量索引，同时保持各插件独立版本化与回滚边界；
- 将 AIGC、DCC 批处理与多版本 Maya 任务做成有进度、日志、心跳、断点和结果台账的长时流程；
- 参与工具的 Rez 打包、依赖解析、增量构建、持续集成、宿主验收和面向项目组的迭代交付。

下方保留了具体技术实现与验证方法。为避免暴露生产信息，项目名、平台、账号、接口地址、业务数据、资产、仓库路径、原始截图与录屏已移除。

## Maya：LOD 材质整理与资产检查

- 遍历 Maya 场景层级和工程贴图，检查命名、层级、重复对象、贴图缺失及材质连接，把问题划分为“可安全自动修复”和“必须由美术确认”两类。
- 检查通过后执行统一命名、标准贴图连接、材质整理与导出，避免修复脚本在信息不足时直接改坏资产。
- Python 继续承担 Maya 宿主逻辑，使用嵌入 Qt 的 Web 前端展示步骤、错误列表、进度与最终结果；前端发送事件，Python 回传结构化状态。
- 使用正常资产、贴图缺失、错误层级、重复名称和异常导出等样例回归，同时处理窗口重复打开、关闭与刷新、资源路径、宿主线程和异常回传。

## Maya：既有烘焙工具的半分辨率贴图扩展

- 在原有贴图烘焙流程中增加原尺寸 / 半尺寸分支，根据输入宽高计算目标分辨率，并处理奇数尺寸、最小值和比例边界。
- 将新选项接回既有参数保存与任务执行，保持文件格式、Alpha、命名和输出目录规则一致。
- 分别核对两条分支的尺寸、通道、文件名和目录，并重跑旧流程，确认新增功能没有改变默认导出行为。

## Unreal Editor：多 Actor 拍屏预设

- 从编辑器选择集中读取 Skeletal Mesh Actor，同时记录视口、相机和标准灯光状态；空选择、失效资源和字段缺失在执行前拦截。
- 使用 C++ 定义可序列化的数据结构，覆盖骨骼网格、Transform、相机焦距、视口、灯光、LOD 与默认值。
- 使用 Python 编排创建模型、保存预设、读取应用、删除预设、错误提示和执行顺序，再把稳定操作注册到蓝图函数库，接入既有角色选择与构建流程。
- 原型通过后将预设资源化为 Data Asset，使配置可以共享、提交版本并追溯修改。
- 对复杂角色维护主角色、武器和挂件的父子关系与相对状态；重复应用时避免附属物重复生成，只清理本次预设创建并登记的对象，保留场景原有内容。
- 通过“保存—主动修改—恢复—再次应用—清理”的连续测试检查 Outliner 数量、父级、资源引用和单项失败记录。

## Figma AI 工具族：8 个插件的持续开发

### AI 管家

- 递归读取选区中的文本、尺寸、层级、组件和节点关系，将当前页面与选区压缩为结构化摘要，再与用户问题和历史消息共同组成提示词上下文，避免无差别发送整份设计文件。
- 实现流式回复、停止生成、历史记录、Markdown、长文本滚动、网络中断后的已返回内容保留，以及可控的上下文窗口。
- 补齐登录、主题、配置、窗口重开、重复监听、流式残留和异常恢复，使 AI 对话从演示能力进入设计师可持续使用的插件。

### AI 翻译

- 遍历选中 Frame 的文本节点，保留原文、节点 ID、目标语言与错误对象，分批调用模型并按 ID 将结果写回对应节点。
- 将 AI 请求、字体加载和画布写回拆成不同阶段；支持进度、取消、撤销、失败对象单独重试与部分成功保留。
- 随插件分发所需字体并检测本机缺失状态；写回后自动检查文本溢出、缺字、空结果和原文残留，把“翻译正确”推进到“画布可验收”。

### 任务与交付插件

- 完成登录、项目空间、版本与任务树、本地缓存和重开状态恢复，并加入列表、筛选、右键操作、交付物查看和任务状态回写。
- 将 Figma 本地文件、任务和交付版本建立绑定；上传成功后保存文件标识、版本和接口响应。
- 将上传、任务评论和消息通知拆成可恢复步骤：后续通知失败时只重试通知，不重复创建已经完成的版本，界面保留每一步完成时间和失败对象。

### 组件精灵：视觉语义搜索

- 支持文本描述、截图和当前选中节点三种输入，使用 SigLIP 视觉语义特征在大规模组件索引中召回候选。
- 统一组件元数据、缩略图缓存、向量索引和资源 URL；同文件直接定位，跨文件打开来源，权限允许时依据组件 key 创建保持链接的 Instance。
- 视觉模型只负责扩大召回范围，来源、权限、组件 key 与发布状态仍由程序确定性核验。

### 组件查重

- 提取缩略图、尺寸、节点类型、层级深度、名称和 Instance 特征，以视觉向量召回外观相似候选，再结合结构特征重新排序。
- 对远端图片、API 回源与本地缓存建立降级链路，向设计师展示相似度、来源文件、Page / Frame 和元数据，由人工完成最终合并判断。

### 母版更新

- 扫描外部 Instance，读取组件 key、来源文件、更新时间和已发布母版信息；视觉匹配负责召回名称变化或跨文件的相近候选。
- 用户确认后调用 Figma 原生 Swap，保留变量、Variant 和覆盖关系；批量处理中独立记录失败对象，不回滚已经完成的替换。

### 切图与布局工具

- 切图工具读取矢量轮廓、透明像素、可见内容和选区边界：普通图形计算几何质心，复杂轮廓结合像素分布估计视觉中心，再生成统一 Frame、缩放和对齐内容。
- 布局工具读取对象边界与相对位置，批量生成水平、垂直间距和尺寸标注，并支持更新、清除与异常对象提示。
- 图标审核结合可见内容、视觉中心、轮廓占比和安全区规则判断正常、贴边、超界与复杂轮廓，结果写回 Figma 画布供设计师逐项调整。

## 公共后端、插件工程与数据服务

- 八个插件保持独立仓库、独立版本化软件包与单插件回滚边界；统一 app / plugin / scripts 目录、manifest、入口、主题、构建脚本和消息格式。
- 通过 Python entry point 发现插件包并动态挂载 FastAPI 路由；统一处理 CORS / OPTIONS、认证信息、超时、open-url 和 JSON 错误。单个插件导入失败会被隔离，其余服务仍可启动。
- FastAPI 服务维护 SQLite 快照、团队空间、缩略图缓存和 REST API fallback；大文件按 Page / Frame 分段拉取并保存断点，调用方根据状态读取实时数据、缓存或本地快照。
- 多个组件插件共享元数据、缩略图与 SigLIP 向量索引，但运行时仍保持独立交付，避免把全部需求耦合进一个大工程。
- Figma Webview 无法直接访问部分本地图片路由时，由服务读取资源并返回 base64 data URI；前端按 data URI、远端 URL、默认图标三级降级。
- 渐进缩略图只在临近视口时入队，限制全局并发；离开视口通过 AbortController 取消请求，组件卸载时回收 Object URL，避免大量图片拖慢文字与视觉搜索。
- 快速测试脚本扫描插件和公共运行包：未变化时复用构建结果，有变化时增量编译、组装依赖、启动服务，并继续核验插件注册与基础路由。

## AIGC 工作流与生产自动化

- 将任务输入、角色与品牌素材、尺寸、命名和输出目录写成配置，自动创建或复用 Figma 画布、替换素材、生成页面，并输出 Banner、引擎图集、压缩包和交付记录。
- 对浏览器端生成工作流解析 Workflow JSON，为每个流程准备差异化输入，创建或复用画布、替换资源、触发节点并等待生成。
- 针对长时间任务记录步骤状态、心跳、日志和结果台账，支持断点续跑、下载和失败定位。
- 模型负责图片生成、局部编辑或视频节点等不可完全规则化的视觉结果；流程解析、素材替换、命名、尺寸校验、节点执行与产物保存由确定性程序控制，最终质量由人工验收。

## DCC Checker：无界面检查、修复与报告

- 根据扩展名、文件头和配置识别 DCC 类型与版本，路由到对应 Maya / 3ds Max 批处理宿主，区分正常文件、损坏文件和版本不匹配。
- 无界面运行 Pyblish Pipeline，采集 Context、Instance 和各检查插件结果；对可自动修复项执行修复后重新检查。
- 输出 JSON 与 HTML 报告，记录宿主、耗时、日志及修复前后状态，并准备命令行和服务两种调用入口。
- 使用超大场景、编码异常、无引用、损坏资源、多宿主版本和超时退出等样例做压力验证，避免工具只在单一演示文件上成功。

## 跨 Maya 版本的场景与 FBX 批处理

- 将上游输入收敛为业务版本、模型标识和源文件位置，由脚本建立固定目录、生成场景名并检查输入文件。
- 在不同 Maya 版本中依次生成绑定、召唤、角色配置和多组动作场景，处理宿主版本、路径、命名和输出规则差异。
- 通过作业队列顺序执行 Maya 任务，批量导出 Mesh 与动画 FBX；结束后回读文件数量、大小、缺失项和零字节产物。
- 目录生成、宿主处理、批量导出和结果校验已用真实样例跑通；尚未获得正式上游接口时使用 Adapter 模拟调用，并明确保留联调边界。

## 线上维护、发布与文档

- 面对上游接口分页行为变化造成的任务树空白，修正分页策略、加入同条件降级重试并补回归测试。
- 对外部 AI 服务工作区休眠导致的调用失败完成恢复，并将后端归属、维护入口和故障判断写进 README 与构建配置。
- 清理多个插件仓的旧分支和失效引用前先生成、验证恢复 Bundle；保留仍有价值的功能分支，保证治理操作可恢复。
- 把代码评审、持续集成、包构建、入口发现、发布与真实宿主验证固化为检查表；线上问题回写开发日志和本地知识库。
- 输出新人环境配置、Webhook 联通性测试、一键运行脚本及各插件使用文档，使开发、测试和用户入口形成闭环。

## 失败：Figma 交互稿自动生成视觉稿实验

这个实验要做的是一个 Figma 插件：读取交互稿的页面结构、节点属性和截图，让模型判断页面用途，从团队组件库中选择合适的母版，再把母版复制到目标文件，自动替换文案、图片和组件，最终生成设计师可以继续编辑的视觉稿，而不是只输出一张扁平图片。

真实 Figma 文件测试后，实验没有达到可交付标准，主要失败在：

- **母版选择不稳定**：同一类页面存在多个相似母版，模型能解释页面大意，却无法稳定判断业务状态、信息优先级和应该使用的组件变体；
- **跨文件复制后结构容易损坏**：组件 ID、字体、变量和资源依赖无法仅凭截图恢复，复制到目标文件后会出现缺失组件或引用关系变化；
- **Auto Layout 与 Instance 无法可靠写回**：嵌套布局、约束、Variant 和 Instance Override 相互影响，替换文案或图片后经常发生尺寸、层级和对齐错误；
- **结果看起来像视觉稿，但不能稳定继续编辑**：单次截图可能“看起来差不多”，实际节点结构、团队规范和重复运行结果都不可靠，设计师仍需大量返工。

因此我停止了这个 Figma 自动出视觉稿方向，没有把它包装成完成产品。实验确认了更实际的边界：AI 可以理解页面意图、搜索候选母版并给出局部建议；确定性的 Figma 节点操作可以由插件执行和复检；跨文件资产写入、复杂布局修改与最终视觉决策仍需要明确规则和人工确认。

## 公开边界

原始答辩材料与媒体只作为本地工作记录，不进入公开站点。公开页面没有复用内部资产或界面截图，所有名称、数据和接口均经过抽象处理；这里展示的是本人负责过的技术问题、实现方式、验证方法和能力边界。`,en:`# Game-art production tools, Figma AI plug-ins, and automation pipelines

This work comes from an AI tools technical-art internship at a large game studio. It covered Maya, Unreal Editor, the Figma plug-in sandbox, Python and C++, TypeScript and React, FastAPI, SQLite, visual-vector retrieval, versioned environments, and CI. The public case keeps the engineering problems and verification methods while removing internal project names, platforms, accounts, endpoints, business data, assets, repositories, paths, screenshots, and recordings.

## Maya and Unreal Editor tooling

- Built Maya hierarchy, naming, duplicate-object, texture, and material checks, separating safe repairs from artist-confirmed changes before organized export.
- Kept Maya host logic in Python while an embedded web UI reported structured steps, errors, progress, and results; tested window lifecycle, resource paths, host threads, and exception propagation.
- Extended an existing baking tool with original and half-resolution branches while preserving format, alpha, naming, directory, saved parameters, and legacy behavior.
- Designed serializable Unreal preset data in C++ for meshes, transforms, camera, viewport, lighting, LOD, and defaults; orchestrated save/apply/delete flows in Python and exposed stable operations through Blueprint libraries.
- Productized the preset as a Data Asset and handled nested actors, repeat application, attachment state, partial failure, and cleanup limited to objects created by the preset.

## Eight Figma production plug-ins

- AI assistant: compressed selected text, dimensions, hierarchy, components, and node relationships into bounded context; implemented streaming, stop, retry, history, Markdown, long-text handling, and recovery.
- AI translation: batched text nodes with stable IDs, separated model calls from font loading and canvas writes, preserved partial success, and checked overflow, missing glyphs, empty output, and untranslated text.
- Task and delivery tooling: restored login and project state, bound local files to tasks and versions, and split upload, comment, and notification into independently retryable steps.
- Component search and deduplication: combined SigLIP retrieval with component metadata and structural features, thumbnail caching, REST fallback, source, permission, and publication checks.
- Master updates: used visual matching only for candidate recall, then required user confirmation before native instance swap so variables, variants, and overrides remained intact.
- Icon and layout tools: estimated visual centers from vectors, alpha, visible pixels, and silhouette data; generated standard frames, spacing annotations, and safe-area feedback with deterministic canvas output.

## Shared services and delivery engineering

- Preserved independent repositories, versioned packages, and rollback boundaries while standardizing app/plugin/scripts layout, manifests, entry points, themes, build scripts, and message formats.
- Discovered plug-in packages through Python entry points and mounted FastAPI routes dynamically, isolating failed imports while standardizing CORS, authentication, timeouts, URLs, and JSON errors.
- Maintained SQLite snapshots, team-space data, thumbnail caches, segmented REST fallback, checkpoints, and a shared visual-vector index.
- Added progressive thumbnail queues, bounded concurrency, AbortController cancellation, Object URL cleanup, and multi-level image fallback for constrained Figma webviews.
- Built an incremental validation path covering source scanning, compilation, dependency assembly, service startup, plug-in discovery, and route checks, then delivered through review, CI, versioned packages, and real-host regression.

## AIGC automation and DCC batch systems

- Automated configuration-driven asset preparation, Figma page generation, AIGC workflow execution, banner and engine-atlas output, size and naming validation, packaging, and delivery records.
- Parsed workflow JSON and managed long-running generation with explicit step state, heartbeat, checkpoints, resume, downloads, logs, and result ledgers. Models produced visual candidates; deterministic automation controlled execution and humans judged quality.
- Routed Maya and 3ds Max files into headless Pyblish checks, optional repair and recheck, and JSON/HTML reports, with stress cases for corrupt files, version mismatch, large scenes, encoding, and timeout.
- Orchestrated multi-version Maya jobs that generated binding, configuration, and animation scenes before batch FBX export and post-run validation for counts, file sizes, missing outputs, and zero-byte artifacts.

## Failed Figma experiment: interaction drafts to editable visual layouts

The Figma plug-in was intended to read an interaction draft, infer the page purpose, retrieve a team master, copy it into the target file, replace content and components, and leave an editable visual layout. Real-file tests failed at production quality: master selection was inconsistent; cross-file components lost fonts, variables, and references; nested Auto Layout, variants, and instance overrides broke after replacement; and visually plausible screenshots still concealed unusable node structure and large manual rework. The experiment was stopped rather than presented as a finished product. Models remained useful for intent interpretation and candidate retrieval, while deterministic plug-in operations and human review were still required for writes, layout changes, and visual decisions.

The original presentation and media remain local work records. This public page uses only sanitized technical descriptions and a newly drawn abstract cover.`}},{id:"asset-delivery-organizer",title:"美术资产交付整理工作台",category:"pipeline",categoryLabel:{zh:"外包资产审计与安全整理",en:"Supplier asset audit and safe organization"},summary:{zh:"七工作区中文桌面工具：可视化配置项目规则，检查目录、格式、命名、贴图和版本，并以 dry-run、哈希复检、回滚与收据安全整理交付。",en:"A seven-workspace desktop tool for visual project rules, delivery auditing, dry-run organization, hash rechecks, rollback, and receipts."},cover:"/media/repositories/production-tools/asset-delivery-profile.png",tags:["PySide6","可视化 Profile","事务回滚","Windows Release"],repositoryUrl:"https://github.com/Ubik42/asset-delivery-organizer",story:{zh:`# 美术资产交付整理工作台

真实外包交付往往同时包含模型、贴图、UDIM、历史版本和供应商说明。这个工具把交付设置、项目规则、文件浏览、问题审查、整理方案、审计记录和报告导出组织成七个中文工作区，让 TA 能从“制定项目标准”一直走到“完成复检并留下收据”。

## 不再手写 JSON 规则

用户可以从环境资产或角色资产模板创建 Profile，在界面中配置允许目录、文件格式、命名正则、贴图通道和版本保留策略。字段即时校验，危险路径和无效正则在保存前就会阻断；保存后的 Profile 仍是严格、可被 CLI、Skill 和 CI 共用的版本化合同。

## 安全整理闭环

- 审计阶段严格只读，记录稳定相对路径、SHA-256、媒体类型和命名字段；
- 检查目录边界、格式白名单、命名、贴图完整性和旧版本，同时防止路径穿越、符号链接逃逸和大小写冲突；
- 整理前必须生成可编辑 dry-run 方案，并重新核对全部源哈希和目标冲突；
- 执行失败会逆序回滚，完成后再次扫描，并在交付目录外写入 JSON 收据；
- Windows 1.1.0 可移植发行包不要求安装 Python，桌面、CLI 与 API 复用同一业务核心。

仓库提供 5 组不可变合成场景，共 109 个文件。推荐案例从 12 个文件中识别 5 个问题并生成 3 项整理计划；缺失贴图会如实保留给人工处理，不会被工具伪造。`,en:`# Asset Delivery Organizer

A Chinese PySide6 workbench spanning delivery setup, visual profile editing, file browsing, issue review, organization plans, audit history, and report export. Audits remain read-only; approved organization uses source hashes, collision and boundary checks, rollback, post-audit, and external receipts. A verified Windows 1.1.0 portable release runs without Python.`},images:[{src:"/media/repositories/production-tools/asset-delivery-profile.png",alt:{zh:"无需手写 JSON 的项目规则编辑器",en:"Visual project profile editor without hand-written JSON"}},{src:"/media/repositories/production-tools/asset-delivery-boundary.png",alt:{zh:"交付目录白名单问题与可定位证据",en:"Delivery path allowlist issues and locatable evidence"}},{src:"/media/repositories/production-tools/asset-delivery-plan-v2.png",alt:{zh:"可编辑整理方案与执行前预检",en:"Editable organization plan and preflight"}},{src:"/media/repositories/production-tools/asset-delivery-portable.png",alt:{zh:"Windows 1.1.0 可移植程序真实运行",en:"Verified Windows 1.1.0 portable application"}}]},{id:"maya-scene-checker",title:"Maya 场景质量与交付检查工具",category:"pipeline",categoryLabel:{zh:"Maya 只读交付门禁",en:"Read-only Maya delivery gate"},summary:{zh:"在 Maya 2025 中扫描拓扑、命名、引用与场景状态，把问题落成可定位 Evidence 和可交付报告。",en:"A Maya 2025 checker that turns topology, naming, reference, and scene findings into locatable evidence and delivery reports."},cover:"/media/repositories/production-tools/maya-scene-overview.png",tags:["Maya 2025","PySide6","拓扑检查","Evidence"],repositoryUrl:"https://github.com/Ubik42/maya-scene-checker",story:{zh:`# Maya 场景质量与交付检查工具

这是面向模型美术、外包验收和 TA 的 Maya 只读交付检查器。它先对场景建立稳定快照，再用 Rule、Issue 和 Evidence 回答三个问题：哪个对象出错、具体落在哪个面 / 边 / 点、它为什么会阻碍交付。整个检查过程不修改场景。

## 从扫描到定位与报告

- 检查 N 边面、非流形边、Lamina Face、零面积面、退化边、命名、引用与场景级状态；
- 按严重度筛选问题，选中问题即可定位到 Maya 对象、面、边或点，并能恢复原选择；
- 对修改前后的稳定对象身份建立定位索引，避免改名后报告完全失效；
- 导出 JSON 与 Markdown 报告，保留规则版本、证据、场景身份与统计结果；
- 所有检查默认只读，错误和高风险状态在修改发生前明确拦截。

## 真实验证与素材

版本 0.2.0 已在 Maya 2025.3.3 完成可见宿主验收，并通过 Maya 2025 mayapy 自动验证。仓库包含五组程序化生成的 Maya ASCII 场景，覆盖干净交付、拓扑问题、外包场景级错误、混合资产批量排查和改名后的证据定位；八张中文截图展示空态、通过、问题详情、拦截与报告导出。`,en:`# Maya Scene Delivery Checker

A read-only Maya 2025 delivery gate that produces versioned rules, issues, locatable component evidence, and JSON/Markdown reports. Version 0.2.0 has passed visible Maya 2025.3.3 host acceptance and mayapy validation with five deterministic demo scenes.`},images:[{src:"/media/repositories/production-tools/maya-scene-overview.png",alt:{zh:"Maya 场景拓扑问题总览",en:"Maya topology issue overview"}},{src:"/media/repositories/production-tools/maya-scene-evidence.png",alt:{zh:"N 边面问题的组件级证据详情",en:"Component-level evidence for an n-gon"}},{src:"/media/repositories/production-tools/maya-scene-blocked.png",alt:{zh:"非流形边高风险交付拦截",en:"High-risk non-manifold delivery block"}},{src:"/media/repositories/production-tools/maya-scene-report.png",alt:{zh:"结构化报告导出完成状态",en:"Structured report export complete"}}]},{id:"maya-garment-preparation",title:"Maya 服装传递与厚度准备工具",category:"pipeline",categoryLabel:{zh:"Maya 服装生产准备插件",en:"Maya garment production preparation plug-in"},summary:{zh:"把三输入 UV/位置传递与开放服装 Mesh 厚度生成收束成可预检、可预览、可复检、可一次撤销的 Maya 2025 流程。",en:"Combines three-input UV/position transfer and open-garment thickness generation into previewable, validated, one-undo Maya 2025 workflows."},cover:"/media/repositories/production-tools/maya-garment-public-result.png",tags:["Maya 2025","UV / 位置传递","厚度生成","Undo"],repositoryUrl:"https://github.com/Ubik42/maya-garment-preparation",story:{zh:`# Maya 服装传递与厚度准备工具

服装进入 Maya 后常有两段高风险手工操作：从基础版片保留 UV、从高模取得造型并传给重拓扑网格，以及把单层薄面生成可控厚度。0.3.1 将两者做成同一个中文插件，但仍保持两条边界清晰的工作流。

## 两条生产路径

- UV / 位置传递会校验三类输入、选择顺序、拓扑、UV、引用和既有 History，再分两步调用 transferAttributes；
- 厚度准备支持向外、向内与双向居中，生成内外层和边界侧壁，并实测最终厚度；
- Preview 全程零写入，真正修改只发生在单个 Undo Chunk 中；
- 只管理本次创建的节点，不执行 Delete All History，也不在多解时猜测对应关系；
- 执行异常或读回复检失败会整体回滚。

## 真实服装证据

除 13 套确定性演示场景外，仓库还使用公开 CC0 挂脖连衣裙验证真实服装轮廓、多开口和 2031 顶点网格。输入、Maya 2025 Viewport 2 结果、素材来源、哈希和机器证据均公开保存；它证明的是已验证案例，不冒充对任意商业服装的全面支持。`,en:`# Maya Garment Transfer and Thickness Preparation

Version 0.3.1 provides two Maya 2025 workflows: safe three-input UV/position transfer and controllable thickness generation for open garment meshes. Both use zero-write previews, a single undo chunk, read-back validation, and automatic rollback. A redistributable CC0 halter dress provides real garment evidence in addition to deterministic demo scenes.`},images:[{src:"/media/repositories/production-tools/maya-garment-public-input.png",alt:{zh:"公开 CC0 挂脖连衣裙输入",en:"Public CC0 halter dress input"}},{src:"/media/repositories/production-tools/maya-garment-public-result.png",alt:{zh:"厚度生成后的领口侧壁与真实服装轮廓",en:"Generated opening sidewalls on the real garment silhouette"}},{src:"/media/repositories/production-tools/maya-garment-thickness-preview.png",alt:{zh:"双向居中厚度的零写入预览",en:"Zero-write centered thickness preview"}},{src:"/media/repositories/production-tools/maya-garment-thickness-complete.png",alt:{zh:"厚度执行完成、实测结果与本次 History",en:"Completed thickness operation with measured results and owned history"}}]},{id:"game-unpack-agent",title:"Game Unpack Agent：Unity / Unreal 受控解包",category:"other-tools",categoryLabel:{zh:"跨引擎资源容器识别与受控解包",en:"Cross-engine container detection and controlled extraction"},summary:{zh:"面向自有或明确获授权的 Unity / Unreal 包执行 scan → plan → run → verify；v0.1.0 已在 Windows x64 / .NET 9 下验证 Unity AssetBundle 7/7 与 Unreal Pak 4/4。",en:"Runs scan → plan → run → verify for owned or explicitly authorized Unity and Unreal packages; v0.1.0 validates a 7/7 Unity AssetBundle case and a 4/4 Unreal Pak case on Windows x64 and .NET 9."},cover:"/media/repositories/production-tools/game-unpack-agent.svg",tags:["v0.1.0",".NET 9","Unity AssetBundle","Unreal Pak"],repositoryUrl:"https://github.com/Ubik42/Game-Unpack-Agent",story:{zh:`# Game Unpack Agent：Unity / Unreal 受控解包

这是一个面向 Windows 的本地解包 CLI，用于研究自有或明确获授权的 Unity / Unreal 构建。它从资源容器的只读指纹开始，匹配已登记且身份固定的工具，在全新隔离目录中实际解出文件，并用清单、SHA-256、失败项和 Run Receipt 复核结果。

## 当前工作流

- **scan**：读取文件 Magic、目录结构、版本证据和 SHA-256，不修改输入；
- **plan**：匹配 ToolCard，生成带 PlanId 的命令预览、来源 Manifest 与输出预算；
- **run**：确认计划后，将输入副本和固定工具放入独立 Run，记录命令、PID、退出码和日志；
- **verify**：检查全部输出是否位于 Run/output，重新计算输入与产物哈希，并生成 UnpackManifest、ContainerInventory、SemanticLoss 和 RunReceipt。

## v0.1.0 已验证结果

- Unity 6000.3.21f1c1 AssetBundle 通过 UnityDataTools v2.2.0 完成 archive list、archive extract、dump 与 analyze；7/7 个固定语义项保留，0 missing；
- UnrealPak 5.8.1 对自建最小 Pak 完成 List 与 Extract；4/4 个文件的路径、大小和 SHA-256 与源 Manifest 一致；
- 两个最终 Run 均确认原输入未变化、原路径未暴露给工具、进程已经结束，并且没有超出隔离输出边界的文件。

## 当前边界

结论只覆盖仓库自建、未加密样本。当前未验证 Addressables、IoStore、完整 Cook / Stage 游戏包、其他引擎版本或商业游戏，也不把对象文本导出描述为完整 Unity 工程恢复。项目不绕过 DRM、签名、加密、反作弊或访问控制，不搜索密钥，也不执行从输入中发现的脚本、程序或插件。

仓库当前未附带开源许可证；UnityDataTools、UnrealPak 和其他候选解包器不随仓库复制或分发。`,en:`# Game Unpack Agent

A local Windows CLI for extracting owned or explicitly authorized Unity and Unreal packages. It detects container evidence, selects a pinned registered tool, executes extraction inside a fresh isolated run, and verifies the result through manifests, SHA-256 hashes, failure records, and a run receipt.

Version 0.1.0 validates two self-generated, unencrypted cases: a Unity 6000.3.21f1c1 AssetBundle processed with UnityDataTools v2.2.0, preserving 7/7 fixed semantic checks; and an UnrealPak 5.8.1 Pak whose 4/4 extracted paths, sizes, and hashes match the source manifest. Both final runs retain unchanged inputs and contained outputs.

The current release does not claim Addressables, IoStore, full cooked-game recovery, encrypted packages, commercial games, or broad engine-version coverage. It does not bypass DRM, signatures, encryption, anti-cheat, or access controls, and third-party extraction binaries are not redistributed. The repository currently has no open-source license.`}},{id:"unreal-asset-batch-auditor",title:"Unreal 资产批量质量审计工具",category:"engine-games",categoryLabel:{zh:"Unreal 资产验收与交付证据",en:"Unreal asset acceptance and delivery evidence"},summary:{zh:"UE 5.8.1 原生中文 Slate 工作台：用项目 Profile 分别审计模型、纹理与材质，并把混合交付汇总为可下钻、可追溯的三轨验收结论。",en:"A native UE 5.8.1 Slate workbench that audits meshes, textures, and materials under project profiles, then summarizes mixed deliveries as traceable, drill-down acceptance results."},cover:"/media/repositories/production-tools/unreal-auditor-current.png",tags:["Unreal 5.8","C++ / Python","Slate","版本化证据"],repositoryUrl:"https://github.com/Ubik42/unreal-asset-batch-auditor",story:{zh:`# Unreal 资产批量质量审计工具

这是面向 Unreal 美术交付的只读验收工作台。Editor-only C++ 读取宿主元数据，Python 负责项目规则、任务编排和版本化 JSON Report，中文 Slate UI 只呈现领域状态，不在界面层复制规则判断。

## 三条专业轨道

- 模型轨道检查几何预算、LOD、材质槽、Nanite、碰撞、Lightmap、命名与目录；
- 纹理轨道检查尺寸、Mip、Texture Group、压缩、色彩空间、Virtual Texture 与流送状态；
- 材质轨道检查 Domain、Blend、双面、Shading、父级链和纹理负载。

内置规则只作为格式与演示样例。项目 Profile 可复制到工程配置后评审和修改；Issue 始终保留实测值、期望值、规则指针与 Evidence ID。

## 混合交付总检

“交付包总检”一次读取 Content Browser 的混合选择，稳定分类为模型、纹理、材质三条泳道。每条泳道使用自己的 Profile、任务状态和原始 Report；总摘要只汇总覆盖、通过、需处理、阻断问题与风险热区，并允许下钻回专业台账。未知类型明确列为未纳入，不自动扩展依赖。

## 生产可靠性与交付

- 每个 Editor Tick 最多推进一个批次，界面显示阶段、对象进度和已完成批次数；
- 取消只在批次边界生效，已完成结果会保存为合法的部分 Report，但不会被误用作回归基线；
- 历史会话按稳定 asset path + rule id 比较修复前后变化；
- 一键导出中文单文件 HTML、Excel 可读 CSV 和 SHA-256 清单，未安装 Unreal 的制片、主美或外包同事也能复核；
- v0.10.0 发布 ZIP 已完成全新项目安装、升级、卸载和独立 UE 5.8.1 宿主验证；主开发线的三轨与项目标准工作台处于下一版本开发阶段。

扫描接口不会保存资产、重建网格、修改 Nanite 或改写材质图。仓库保留真实 UE 宿主截图、Demo 生成方法、任务状态与报告哈希，并把离线 fixture 与真实 Unreal 验证明确区分。`,en:`# Unreal Asset Batch Auditor

A read-only Unreal 5.8.1 Editor plug-in. Native C++ collects host metadata while Python applies versioned profiles and produces reports. Dedicated mesh, texture, and material tracks retain their own evidence; a mixed-delivery summary exposes coverage, blocking issues, hotspots, and drill-down links without modifying production assets.`},images:[{src:"/media/repositories/production-tools/unreal-auditor-current.png",alt:{zh:"UE 5.8.1 中按项目 Profile 执行批量资产验收",en:"Profile-driven batch asset acceptance in UE 5.8.1"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-overview.png",alt:{zh:"24 个 Static Mesh 的资产总览、通过项和问题项",en:"Overview of 24 Static Mesh assets with passing and failing states"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-issues.png",alt:{zh:"规则、实测值、阈值与中文 Evidence",en:"Rules, measured values, thresholds, and localized evidence"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-running.png",alt:{zh:"可观察、可在批次间安全取消的审计任务",en:"Observable audit task with safe cancellation between batches"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-regression.png",alt:{zh:"同一 Profile 下修复前后的回归比较",en:"Before-and-after regression under the same profile"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-handoff.png",alt:{zh:"无需 Unreal 即可阅读的中文团队交接报告",en:"Chinese team handoff report readable without Unreal"}}]},{id:"unreal-toolsmith-agent",title:"UE 编辑器工具开发与诊断 Agent",category:"other-tools",categoryLabel:{zh:"UE 编辑器工具开发、构建诊断与宿主验证",en:"Unreal editor tooling, build diagnosis, and host validation"},summary:{zh:"把中文 UE 工具需求编译为版本化任务合同与可审阅 Patch，串联 UBT、Automation、官方 MCP 只读发现和真实 Slate 生命周期验证。",en:"Compiles Chinese Unreal tooling requests into versioned task contracts and reviewable patches, then connects UBT, Automation, official read-only MCP discovery, and real Slate lifecycle validation."},cover:"/media/repositories/production-tools/unreal-toolsmith-agent.png",tags:["v0.1.1","UE 5.8.1","C++ / Slate","MCP / Automation"],repositoryUrl:"https://github.com/Ubik42/Unreal-Toolsmith-Agent",story:{zh:`# UE 编辑器工具开发与诊断 Agent

这是一个面向 UE 客户端、TA 与工具程序开发者的本地开发 Harness。它读取精确引擎和项目上下文，把中文需求整理为 ToolTaskSpec 与 ChangePlan，在隔离 Sandbox 中预览并应用插件 Patch，再通过 UBT、Automation、官方 Unreal MCP 只读发现和真实 Editor 生命周期完成验证。

## 已完成纵切

- 交付 Editor-only 静态网格只读审计插件，读取 Content Browser 显式选择并显示 LOD、材质槽、Nanite 和简单碰撞；
- 六个严格 JSON 合同覆盖引擎、项目、任务、改动、验证和最终 RunReceipt；
- Patch 应用前后用 SHA-256 对照模板与 Sandbox 副本，构建日志可归类 Target、依赖与链接错误；
- UE 5.8.1 中已通过 3 个 Automation Case，并完成面板首次打开、关闭、重开和进程清理；
- v0.1.1 演示读取四个引擎 BasicShapes，源资产运行前后哈希一致，报告只写入项目 Saved。

当前范围只覆盖 UE 5.8.1 和这一条只读工具纵切。MCP 仅调用本机回环的只读发现，不执行宽权限工具；仓库不包含 Unreal Engine 内容或编译二进制。`,en:`# Unreal Toolsmith Agent

A local development harness for Unreal client, technical-art, and tools engineers. It turns tooling requests into versioned contracts and reviewable patches, applies them in an isolated sandbox, and validates the result through UBT, Automation, official read-only Unreal MCP discovery, and a real Editor lifecycle.

Version 0.1.1 ships an Editor-only static-mesh audit slice validated on Unreal Engine 5.8.1. Three Automation cases pass, the Slate panel opens, closes, and reopens in an isolated Editor process, and four built-in BasicShapes retain identical hashes before and after the run. The current release does not claim a multi-version matrix, arbitrary MCP execution, or automatic asset repair.`},images:[{src:"/media/repositories/production-tools/unreal-toolsmith-agent.png",alt:{zh:"UE 5.8.1 中读取四个 BasicShapes 的静态网格只读审计面板",en:"Read-only static-mesh audit panel inspecting four BasicShapes in UE 5.8.1"}}]},{id:"rez-studio-launcher",title:"DCC 项目环境与插件启动器",category:"pipeline",categoryLabel:{zh:"项目环境、插件与 DCC 工具运行时",en:"Project environment, plug-in, and DCC tool runtime"},summary:{zh:"按项目解析隔离的 Rez 环境，并把插件方案、工具清单、宿主装载和诊断日志组织成可追溯的 DCC 工作站入口。",en:"Resolves isolated Rez environments per project and manages plug-in schemes, tool manifests, host loading, and diagnostics as one traceable DCC workstation entry point."},cover:"/media/repositories/major-updates/rez-overview.png",tags:["Rez 3.4","Maya 2025","Tool Runtime","Tauri 2"],repositoryUrl:"https://github.com/Ubik42/rez-studio-launcher",story:{zh:`# DCC 项目环境与插件启动器

Rez Studio 是一个面向 Windows 制作工作站的项目感知启动器。对美术来说，操作仍然是“选项目、选软件、点击启动”；它在后台根据用户身份、项目成员关系、DCC 版本和插件方案解析 Rez 环境，并在启动前把缺少软件、版本冲突和制品问题说清楚。

这个项目的核心是让“某个项目应该用哪套 Maya 和插件”成为可版本化、可诊断的项目配置，而不是每台电脑各自维护一组快捷方式和环境变量。

## 美术家看到的工作流

- 登录后只显示当前用户可访问的项目；Atlas 与 Ember 等演示项目会为同一 DCC 给出不同版本、工具与状态。
- 同一项目/DCC 支持“完整制作”“基础工具”“TD 纯净排障”等插件方案，成员身份限制可用组合。
- 扫描 Maya、Blender、Houdini、Substance Designer、3ds Max、MotionBuilder、Unreal 和 Unity 的常见安装位置，并显示版本与可执行文件来源。
- 从本机可执行文件提取真实 DCC / Engine 图标，同时记录来源与 SHA-256；未发现软件时显示明确原因与厂商入口。
- Rez 3.4 使用项目私有 package path 执行真实 ResolvedContext，把版本请求、依赖、环境变量和插件路径组合成隔离启动环境。

## 插件方案与可追溯制品

- 演示插件目录包含 Maya USD、BlenderKit、SideFX Labs 和 ParamCopy 的 Release 元数据；
- 公开制品只允许来自配置白名单，下载后必须经过 SHA-256、Manifest 和 Provenance 复核才能晋升为 Rez 包；
- Tool Manifest 采用严格 schema 做无副作用发现，宿主加载仍与发现阶段分离；
- 界面区分可启动、缺少 DCC、有更新、待复核和策略阻断，失败原因直接落在对应软件与诊断页，不需要美术去翻终端日志。

## 桌面实现与分发

React 19 负责软件库和状态反馈，Tauri 2 / Rust 负责桌面生命周期与信任边界，Python Sidecar 承载身份、项目目录、制品缓存、DCC 检测和 Rez 领域逻辑。Windows NSIS 安装包内置冻结 Python 服务、Rez Runtime 与演示中央仓，不要求目标机器预装 Python、uv 或 Rez；商业 DCC 本体和许可证不随包分发。

## CLI 与 Agent 接入

rezstudio.cmd 以稳定 JSON 信封提供 project list、profile list/resolve/validate/diff、doctor 和 telemetry status。只读观察和 dry-run 适合交给 Agent；制品晋升、发布与未来写操作仍要求显式确认。UI 与 CLI 复用同一领域能力，避免自动化依赖鼠标点击。

## 真实 DCC 工具运行时

v0.4 将启动器从“打开正确版本的软件”推进到“在正确环境里装载正确工具”。严格的 tool-manifest/1 描述工具入口、宿主兼容性和生命周期；Rez Profile 解析完成后，运行时会在 Maya 2025 主线程创建 workspaceControl 面板，并统一处理首次装载、重复打开、热重载与关闭清理。一次启动同时留下解析、宿主、工具与会话四类 JSONL 日志，便于定位环境问题究竟发生在 Rez、宿主适配层还是工具本身。

## 当前边界

当前完成的是一套可本地安装、可启动演示 DCC Profile、可装载真实 Maya 工具并运行 CLI 诊断的作品集实现。AI 能力仍停留在 v0.5 规划中的只读诊断层，当前版本没有接入模型。进入真实企业环境后，身份层需要接入 AD / LDAP / SSO、服务端授权和公司软件许可证管理。遥测默认仅写入本机 SQLite，用户可查看和关闭。`,en:`# Rez Studio

A project-aware Windows DCC launcher. It selects the approved DCC version, plug-in set, and Rez environment for the current project instead of opening a fixed executable.

The Tauri 2 and React desktop application connects to Rez through a Python service, exposes launch diagnostics, and ships a Windows installer plus a documented CLI protocol.`},images:[{src:"/media/repositories/major-updates/rez-overview.png",alt:{zh:"Rez Studio 项目软件库、DCC 版本与插件方案",en:"Rez Studio project library, DCC versions, and plug-in schemes"}},{src:"/media/repositories/major-updates/rez-maya-runtime.png",alt:{zh:"由 Rez Profile 装载到 Maya 2025 的真实工具运行时面板",en:"A real tool runtime panel loaded into Maya 2025 through a Rez profile"}},{src:"/media/repositories/major-updates/rez-login.png",alt:{zh:"Rez Studio 本地身份登录与项目入口",en:"Rez Studio local identity and project entry"}}]},{id:"blender-toolsmith-agent",title:"Blender 插件开发与场景诊断 Agent",category:"pipeline",categoryLabel:{zh:"Blender Extension 开发与场景诊断",en:"Blender Extension development and scene diagnostics"},summary:{zh:"把中文插件需求、现有脚本或错误现象整理为结构化任务，在隔离 Blender 配置中完成受控 Patch、场景检查、真实 GUI 验证与可复演交付。",en:"Turns plug-in requirements, existing scripts, and error reports into structured tasks, then runs controlled patches, scene checks, real GUI validation, and reproducible delivery in an isolated Blender configuration."},cover:"/media/repositories/production-tools/blender-toolsmith-agent.png",tags:["Blender 5.2 LTS","Extension API","Undo / Redo","Python 3.13"],repositoryUrl:"https://github.com/Ubik42/Blender-Toolsmith-Agent",story:{zh:`# Blender 插件开发与场景诊断 Agent

这是一套面向 Blender Extension / Add-on 研发的受控工具链。它将中文插件需求、现有脚本或明确错误现象整理为结构化任务，在隔离的 Blender 配置中完成开发、场景诊断、真实 GUI 验证与发布交付。

## 从任务合同到受控修改

- 用 AddonTaskSpec 固定目标 Extension、入口、对象范围、副作用、验收条件和允许修改的文件；
- 用 ContextRequirement 描述 Mode、Window、Area、Region、活动对象与选择集，定位 Operator poll failed 的具体缺失条件；
- Patch 在预览和应用前检查任务归属、规范化路径、文件白名单与基线 SHA-256；
- 工具链不提供 execute_python、eval、exec 或等价的任意代码执行入口。

## 中文场景交付检查 Extension

随仓库发布的 Extension 检查场景单位、网格命名、对象层级和缺失贴图。失败场景稳定检出 4 个问题，并预览 3 项可以确定执行的命名与层级修复；单位选择和贴图路径继续交由用户确认。修复只作用于单次运行目录中的场景副本，真实 Panel 操作支持一步 Undo 与一步 Redo。

## v0.1.0 验证结果

- 已验证环境为 Windows 11 x64、Blender 5.2.0 LTS 与 CPython 3.13.13；
- 通过 Blender 官方 extension validate、build、install-file 和 remove；
- 三轮注册、卸载与热重载后，Class、Property、Menu、Handler 和 Timer 均无累积残留；
- Array Modifier 的 evaluated Mesh 为 24 顶点，清理临时 Mesh 后 original Mesh 保持 8 顶点且签名不变；
- 14 项宿主外快速测试通过，Release 提供 Extension 安装包、成功/失败/边界场景、日志、截图、Manifest、Receipt 与哈希清单。

当前兼容性证据只覆盖 Windows x64 与 Blender 5.2.0。自动修复只覆盖网格命名和对象层级。`,en:`# Blender Plug-in Development and Scene Diagnostics Agent

A controlled toolchain for Blender Extension and Add-on development. It converts plug-in requirements, existing scripts, and explicit error reports into structured tasks, then develops, diagnoses, validates, and packages them inside isolated Blender configurations.

AddonTaskSpec and ContextRequirement define the target extension, allowed files, side effects, acceptance conditions, and required Blender context. Patches verify normalized paths, file allowlists, and baseline SHA-256 values before preview or application; arbitrary Python execution is not exposed.

The included Chinese Scene Delivery Check extension audits units, mesh naming, object hierarchy, and missing textures. The failing demo scene reports four issues and previews three deterministic naming and hierarchy repairs. A real Panel workflow supports one-step undo and redo while working only on a run-specific scene copy.

Version 0.1.0 is verified on Windows 11 x64 with Blender 5.2.0 LTS and CPython 3.13.13. It passes Blender's official extension validate, build, install-file, and remove commands, three registration and hot-reload cycles, context diagnostics, depsgraph original/evaluated mesh checks, a real GUI workflow, and 14 host-independent tests. The release includes the installable extension, success/failure/boundary scenes, logs, screenshots, manifests, receipts, and hashes.

Current compatibility evidence is limited to Windows x64 and Blender 5.2.0. Automatic repair is limited to mesh naming and object hierarchy.`},images:[{src:"/media/repositories/production-tools/blender-toolsmith-agent.png",alt:{zh:"Blender 5.2 中运行的中文场景交付检查面板",en:"Chinese Scene Delivery Check panel running in Blender 5.2"}}]},{id:"advanced-skeleton-python-refactor",title:"AdvancedSkeleton Python 架构重构",category:"pipeline",categoryLabel:{zh:"Maya 角色绑定架构与跨 DCC 迁移研究",en:"Maya rigging architecture and cross-DCC migration research"},summary:{zh:"公开的 Maya-first Python 绑定重构：标准 Fit 骨架可生成基础完整角色 Rig，覆盖 Body、FK/IK、空间切换、蒙皮与脊柱替换，并已在 Maya 2024 可见界面验证。",en:"A public Maya-first Python rigging refactor: a standard Fit skeleton builds a complete base character rig with Body, FK/IK, space switching, skinning, and spine replacement, validated in a visible Maya 2024 session."},cover:"/media/repositories/production-tools/advanced-skeleton-rigged-character.png",tags:["公开仓库","v0.96.0","Maya 2024","Python Rig"],repositoryUrl:"https://github.com/Ubik42/advanced-skeleton-python-refactor",story:{zh:`# AdvancedSkeleton Python 架构重构

这是一个围绕本机已授权 AdvancedSkeleton 安装开展的公开 Python 重构工程。v0.96.0 先在 Maya 中重建绑定行为，再把稳定语义整理为 DCC 无关的 Python 合同。Blender 是第二阶段目标。

## 当前结果

- Fit、Body、Arm / Leg / Hand FK/IK、Skin、Root Motion、FBX、MoCap 与基础 Face 工作流已有自生成场景验证；
- 自生成素材覆盖 30 关节基础 Body、70 关节五指 Body 和 31 关节独立导出骨架；
- FitSkeleton、Hand Pose 与 Skin Weight 使用路径无关的 JSON 文档和 SHA-256 内容摘要；
- 392 项纯 Python 回归测试通过；Maya 2024 standalone 已验证绑定构建、动画、撤销／重做及保存重开；
- 不同脊柱段数的角色替换已在自生成单／双 Skin、动画附件和嵌套命名空间场景验证，提交前检查误差并保留原 Skin。
- Maya 图形入口已按 AdvancedSkeleton 的顶层和子栏目顺序改为左侧折叠导航；真实 Maya 2024 会话已验证面板停靠、Body → Fit 操作入口和 18 关节 Fit 文档导出。

## 已完成的工作流

- Fit 与 Body：FitSkeleton 创建、导入、导出和安全增量合并，30/70 关节 Body 构建及 provenance / ReBuild 检查；
- 角色控制与蒙皮：双臂、双腿和双手控制，FK/IK 匹配、stretch、twist、volume、reverse-foot，以及显式蒙皮权重工作流；
- 动画与导出：Root Motion、独立 Export Skeleton、完整 TRS bake、显式 FBX Profile，以及 MoCap 来源检查、映射和临时驱动。
- 脊柱替换：四段、六段与八段角色间迁移 FK／IK 动画，接管显式声明的蒙皮、附件和数据节点；失败时回滚，成功后可单次撤销。

## 分层与写入边界

纯 Python Core 保存数据、数学、计划和校验，不导入 \`maya.cmds\` 或 \`bpy\`。Application 层组织场景捕获、事务和结果复检；Maya Adapter 负责 DAG、DG、约束、关键帧和文件导出。Maya 写入在修改前检查对象与连接，在单一 Undo Chunk 中提交，并从场景重新读取关键结果。

仓库公开可读，不包含 AdvancedSkeleton 原始 MEL、模板、图标、场景或文档；当前未提供开源许可证。当前界面完成了原版页面层级和已实现操作入口的对照，外部生产资产、完整原工具行为覆盖与 Blender 正式迁移仍在后续范围。`,en:`# AdvancedSkeleton Python Architecture Refactor

A public Python refactor project around a locally licensed AdvancedSkeleton installation. Version 0.96.0 follows a Maya-first, Blender-second sequence: behavior is rebuilt and verified in Maya before stable semantics are captured as DCC-independent Python contracts.

The current baseline covers Fit, 30/70-joint bodies, arm/leg/hand and spine FK/IK, skinning, root motion, FBX, MoCap, baseline Face workflows, and controlled replacement between characters with different spine segment counts. It has 392 passing pure-Python regression tests and self-generated Maya 2024 standalone scene validation, including undo/redo and reopening saved scenes. The visible Maya 2024 session also validates the docked AdvancedSkeleton-style navigation, Body → Fit routing, and an 18-joint Fit export. External production assets, full legacy behavior coverage, and formal Blender migration remain open. No original AdvancedSkeleton MEL, templates, icons, scenes, or documentation are redistributed. The public repository currently does not grant an open-source license.`},images:[{src:"/media/repositories/production-tools/advanced-skeleton-rigged-character.png",alt:{zh:"AdvancedSkeleton 官方 Sam 示例绑定在 Maya 2024 中的角色、控制器与 Outliner 层级",en:"Official AdvancedSkeleton Sam sample rig with its character, controls, and Outliner hierarchy in Maya 2024"}},{src:"/media/repositories/production-tools/advanced-skeleton-python-dock.png",alt:{zh:"Maya 2024 中按原版层级排列的左侧折叠导航",en:"Docked AdvancedSkeleton-style navigation running in Maya 2024"}},{src:"/media/repositories/production-tools/advanced-skeleton-python-detail.png",alt:{zh:"Body / Fit 操作入口打开的中文参数窗口",en:"Chinese Body / Fit operation window opened from the dock"}},{src:"/media/repositories/production-tools/advanced-skeleton-python-refactor.svg",alt:{zh:"Maya-first、Blender-second 的 Python 分层迁移架构与验证基线",en:"Maya-first, Blender-second layered Python migration architecture and validation baseline"}}]},{id:"mayascope",title:"Maya 场景根因调查与运行时诊断工具",category:"pipeline",categoryLabel:{zh:"大型 Maya 场景调查工作区",en:"Large-scale Maya scene investigation workspace"},summary:{zh:"用 Scene Atlas、根因镜头、依赖谱系与运行时证据调查复杂 Maya 场景，并以签名快照、回归比较和可恢复队列交付结论。",en:"Investigates complex Maya scenes through Scene Atlas, Root Cause Lens, dependency lineage, and runtime evidence, then delivers signed snapshots, regression comparisons, and recoverable queues."},cover:"/media/repositories/production-tools/mayascope-project-queue.png",tags:["Maya 2025","Root Cause Lens","Runtime Observatory","Signed Audit"],repositoryUrl:"https://github.com/Ubik42/MayaScope",story:{zh:`# Maya 场景调查与运行时诊断工具

MayaScope 由原 MayaIndieTool 演进而来，是一个面向复杂 Maya 场景的调查与运行时诊断工作区。它处理的不是某一条孤立检查规则，而是“这个场景为什么变慢、变得脆弱，或者换一台机器就无法正常打开”。项目与角色绑定工具 MayaCraft 彼此独立。

工具先将 DG / DAG、引用、插件依赖和运行时足迹采集为不可变 SceneSnapshot，再投影到可交互 Atlas。调查者可以从一条 Finding 反向追到具体节点、引用链、所需插件、失败的 reference edit 与脚本行为，从“看到问题”继续走到“找到问题从哪里传过来”。

## 从发现异常到解释根因

- Scene Clinic 将规则、项目基线和快照差异聚合为带来源的 Finding；Root Cause Lens 再沿图关系追踪最可能的上游诱因，而不是只列一张问题清单；
- Reference Orbit、Dependency Lineage 与 Plugin Ghost Signal 展示引用来源、失败 edits、外部文件、unknown nodes、script nodes 和缺失插件如何共同影响当前场景；
- Counterfactual 用只读模拟回答“临时忽略这个引用或插件后，哪些问题会消失”；Failure Prism 将崩溃与失败证据按宿主、插件、引用和脚本维度交叉比较；
- Runtime Observatory 明确区分“值为零”和“当前宿主不可观测”，避免把 batch 模式缺失数据误判为正常；
- 每次调查可以导出签名快照与回归报告。项目队列支持安全暂停、批次门控、取消与继续，长时间扫描中断后不需要从头开始。

底层 Query Kernel 使用整数 CSR 图索引、有界 LRU 缓存和 deadline 限制邻域、路径与根因查询；Scene Atlas 对百万级结果使用虚拟窗口和折叠聚焦。当前 v3.0.0 展示版已在 Maya 2025 验证启动、重复打开、热重载、关闭、回调清理以及项目队列恢复。`,en:`# MayaScope

MayaIndieTool has evolved into MayaScope, an investigative Maya 2025 workspace for Scene Atlas, Root Cause Lens, dependency lineage, runtime observability, counterfactual queries, signed regression evidence, and recoverable project queues. Version 3.0.0 is validated through a real Maya 2025 GUI lifecycle.`},images:[{src:"/media/repositories/production-tools/mayascope-root-cause.png",alt:{zh:"Root Cause Lens 将问题追溯到上游场景关系",en:"Root Cause Lens tracing findings to upstream scene relationships"}},{src:"/media/repositories/production-tools/mayascope-dependency-v2.png",alt:{zh:"外部文件、引用与插件的依赖谱系",en:"Dependency lineage across external files, references, and plug-ins"}},{src:"/media/repositories/production-tools/mayascope-reference.png",alt:{zh:"Reference Orbit 引用关系与失败 edit 证据",en:"Reference Orbit with reference relationships and failed-edit evidence"}},{src:"/media/repositories/production-tools/mayascope-project-queue.png",alt:{zh:"支持安全暂停、取消和恢复的项目调查队列",en:"Recoverable project investigation queue with safe pause and cancellation"}},{src:"/media/repositories/production-tools/mayascope-million-window.png",alt:{zh:"面向超大场景的虚拟化 Scene Atlas 窗口",en:"Virtualized Scene Atlas window for very large scenes"}}]},{id:"mayacraft",title:"Maya 角色绑定与动画工作台",category:"pipeline",categoryLabel:{zh:"Maya 角色绑定与动画工具",en:"Maya character rigging and animation tools"},summary:{zh:"Maya 2025 中文角色工作区：四元数 Twist、带时间语义的 FK/IK 无跳变匹配、受保护空间切换，以及绑定、形变和重定向诊断。",en:"A Chinese Maya 2025 character workspace for quaternion Twist, time-aware no-pop FK/IK matching, protected space switching, rigging, deformation, and retarget diagnostics."},cover:"/media/repositories/production-tools/mayacraft-twist-verified.png",tags:["Maya 2025","Quaternion Twist","FK / IK Match","Retarget"],repositoryUrl:"https://github.com/Ubik42/MayaCraft",story:{zh:`# Maya 角色绑定与动画工作台

MayaCraft 是独立开发的 Maya 2025 角色绑定与动画工作区。它把角色发现、Rig 构建、形变诊断、运动分析、重定向和接触修正组织在同一个中文界面中。工作区会从当前场景发现角色，投影关节结构，并与 Maya Selection 双向同步。

对于实际修改，工具统一采用“预览 → 应用 → 读回验证 → Undo”的操作节奏，让绑定和动画工具不仅能产生结果，也能在写入前看到差异、写入后核对结果。

## 当前可演示的角色流程

- 声明式 Rig Graph 使用 Module、Socket、Node 和物理行为合同生成结构 diff，再增量构建真实 FK / RP IK / Pole 与基础 Space Switch；
- Deformation MRI 从 skinCluster 读取权重，显示归一化、熵、碎片与缺失 influence，并支持可撤销修复；
- Motion Magnetism 分析速度、加速度、jerk、轨迹与接触区间；
- Retarget 工作区处理 namespace、比例、轴空间和 jointOrient 差异，以 Ghost Pose 预览并写入独立 Animation Layer；
- Contact IK 通过 FABRIK 和共同骨盆补偿形成零写入预览，应用后逐帧验证脚底锚点。

## 最新角色动画能力

- v2.2 使用四元数 swing-twist 分解驱动 Twist 关节，预览分布、应用后读回并验证真实关节旋转，避免欧拉角拆分在复杂姿态下翻转；
- FK / IK Match 读取指定时间点的世界空间姿态，计算控制器目标后生成差异预览，再在同一事务中写入并校验，减少切换帧跳变；
- Space Switch 在保护世界空间姿态的前提下切换父空间并处理关键帧，操作前后都保留可比较证据；
- 所有 Hero 操作继续遵循“零写入预览 → 单事务应用 → 宿主读回验证 → 一步 Undo”。

展示版已在 Maya 2025 完成真实 GUI 生命周期、Twist、FK/IK Match 和 Space Switch 验证。Face PSD / RBF 与拓扑变化后的蒙皮迁移仍在后续路线中。`,en:`# MayaCraft

MayaCraft is a Chinese Maya 2025 character workspace for scene-aware character discovery, declarative rig graphs, deformation diagnostics, quaternion swing-twist joints, time-aware no-pop FK/IK matching, protected space switching, read-back validation, and single-transaction undo.`},images:[{src:"/media/repositories/production-tools/mayacraft-workspace.png",alt:{zh:"MayaCraft 角色工作区与场景角色投影",en:"MayaCraft character workspace"}},{src:"/media/repositories/production-tools/mayacraft-twist-preview.png",alt:{zh:"四元数 Twist 分解与关节分布预览",en:"Quaternion Twist decomposition and joint-distribution preview"}},{src:"/media/repositories/production-tools/mayacraft-twist-verified.png",alt:{zh:"Twist 应用后的 Maya 真实场景读回验证",en:"Read-back verification from the real Maya scene after applying Twist"}},{src:"/media/repositories/production-tools/mayacraft-match-preview.png",alt:{zh:"指定时间点的 FK/IK 无跳变匹配预览",en:"Time-aware no-pop FK/IK match preview"}},{src:"/media/repositories/production-tools/mayacraft-match-verified.png",alt:{zh:"FK/IK 匹配应用与误差验证",en:"Applied FK/IK match with error verification"}}]},{id:"tinyhttpd",title:"从 Socket 到 CGI 的轻量 HTTP 服务器",category:"other-tools",categoryLabel:{zh:"C 网络与系统编程",en:"C networking and systems programming"},summary:{zh:"以经典 tinyhttpd 为基线，重做 C11 / POSIX HTTP 服务器：有界线程池、静态文件、受限 CGI、路径安全与自动化验证。",en:"A C11/POSIX modernization of classic tinyhttpd with a bounded thread pool, static files, restricted CGI, path safety, and automated verification."},cover:"/media/repositories/tinyhttpd/github-readme.png",tags:["C11","POSIX Socket","线程池","CGI"],repositoryUrl:"https://github.com/Ubik42/tinyhttpd",story:{zh:`# 从 Socket 到 CGI 的轻量 HTTP 服务器

这个项目以 J. David Blackstone 在 1999 年发布的 tinyhttpd 为历史基线，保留其教学价值和 GPL-3.0 来源说明，同时把不足 500 行的示例重新整理为一套可构建、可测试、可解释的 C11 / POSIX 网络工程。

## 现代化的请求处理链

- 支持 GET、HEAD、POST，处理 HTTP/1.0 核心语义和常见的 HTTP/1.1 单请求；
- 默认使用有界线程池调度连接，并保留“一连接一线程”的对照模式；
- 以阻塞 Socket、超时和可靠读写完成连接生命周期，提供静态文件、MIME、Content-Length 与 HEAD 响应；
- CGI 只允许从受限目录执行，通过 fork、execve 和管道传递请求，并设置执行超时。

## 安全与工程验证

路径会先规范化并检查长度和目录穿越，CGI 不通过 Shell 字符串拼接执行。工程使用 CMake / CTest、结构化日志和 Sanitizer；在 Ubuntu 24.04、GCC 与真实 Socket / CGI 环境中完成 3/3 测试、48 并发请求以及 ASan、UBSan、LeakSanitizer 验证。

它是一项网络与系统编程练习，不被包装成可直接暴露在公网的生产级服务器。`,en:`# Lightweight HTTP Server from Socket to CGI

This project modernizes the GPL-3.0 tinyhttpd teaching server as a C11/POSIX codebase. It adds a bounded thread pool, static-file and HEAD handling, restricted CGI through fork/execve and pipes, path normalization, timeouts, CMake/CTest, structured logging, and sanitizer-backed validation. It is presented as a systems-programming study rather than a production public server.`},images:[{src:"/media/repositories/tinyhttpd/home-desktop.png",alt:{zh:"tinyhttpd 桌面端验证主页与运行指标",en:"tinyhttpd desktop validation page and metrics"}},{src:"/media/repositories/tinyhttpd/cgi-panel.png",alt:{zh:"真实 CGI 表单与响应演示",en:"Real CGI form and response demonstration"}},{src:"/media/repositories/tinyhttpd/home-mobile.png",alt:{zh:"移动端响应式页面",en:"Responsive mobile page"}}]},{id:"xv6-riscv-labs",title:"RISC-V 操作系统核心机制实验",category:"other-tools",categoryLabel:{zh:"操作系统与底层机制",en:"Operating systems and low-level mechanisms"},summary:{zh:"围绕页表、Trap、线程切换、写时复制和 mmap 完成五组 xv6 实验，在真实 RISC-V / QEMU 环境取得 451 / 451，并公开验证证据与中文笔记。",en:"Five xv6 labs covering page tables, traps, thread switching, copy-on-write, and mmap, with a verified 451/451 score on RISC-V/QEMU."},cover:"/media/repositories/xv6-riscv-labs/grade-report.png",tags:["RISC-V","xv6","虚拟内存","451 / 451"],repositoryUrl:"https://github.com/Ubik42/xv6-riscv-labs",story:{zh:`# RISC-V 操作系统核心机制实验

这组工程以 MIT xv6 RISC-V 为实验环境，沿着进程如何进入内核、如何切换执行上下文、如何管理和共享虚拟内存的主线完成五组实验。验证环境为 Ubuntu 24.04、RISC-V GCC 13.3 与 QEMU 8.2.2。

## 五组机制实验

- **Page Tables（46 / 46）**：页表打印、用户页表映射与页访问检测；
- **Traps（95 / 95）**：系统调用回溯、Alarm 与中断后的上下文恢复；
- **Thread（60 / 60）**：用户级线程上下文切换和并发同步；
- **Copy-on-Write（110 / 110）**：延迟复制、写缺页处理、引用计数和并发释放；
- **mmap（140 / 140）**：文件映射、懒分配、脏页回写与 unmap 生命周期。

五组官方评分合计 **451 / 451**。公开仓库保留实验说明、中文机制笔记、评分摘要和可复查证据；完整解答代码仍保留在本地实验分支，避免把课程答案直接公开。`,en:`# RISC-V Operating-System Core Labs

This portfolio repository documents five MIT xv6 RISC-V labs: page tables, traps, user-level thread switching, copy-on-write fork, and mmap. The work was validated on Ubuntu 24.04 with RISC-V GCC 13.3 and QEMU 8.2.2 for a combined official score of 451/451. Public material contains technical notes and evidence while full solution branches remain private.`},images:[{src:"/media/repositories/xv6-riscv-labs/grade-report.png",alt:{zh:"xv6 五组实验 451 / 451 验证总览",en:"Verified 451/451 overview for five xv6 labs"}}]},{id:"notion-nexus",title:"Notion 本地工作区与自动化中枢",category:"other-tools",categoryLabel:{zh:"本地数据与 Notion 自动化",en:"Local data and Notion automation"},summary:{zh:"把本地文件、Excel 与 Notion 工作区连接起来，提供空间扫描、字段映射、文件监听和可视化自动化编排。",en:"Connects local files and Excel data with Notion through workspace scanning, field mapping, file watching, and visual automation."},cover:"/media/repositories/other-tools/notion-nexus.svg",tags:["Notion API","FastAPI","React","SQLite"],repositoryUrl:"https://github.com/Ubik42/NotionNexus",story:{zh:`# Notion 本地工作区与自动化中枢

NotionNexus 是一个本地优先的 Notion 管理工具，用于把散落在文件系统和 Excel 中的数据接入 Notion，而不是依赖手工复制和逐项维护。

- FastAPI 后端负责集成认证、工作区扫描、同步任务、模板和自动化路由；
- Scanner 抓取 Notion 页面结构并建立本地影子数据库，前端可以用树形视图快速浏览和选择页面；
- Excel 同步向导读取本地表格、映射列与数据库属性，再执行批量同步；
- 自动化引擎把 page.create、block.append 等操作登记为原子 Action，并按流程组合执行；
- 文件监听器监控本地 Markdown 与文本模板的变化，使本地内容可以进入统一的模板管理流程。

前端使用 React / Vite 提供 Dashboard、集成管理、空间扫描、Excel 映射、自动化编排和模板管理页面。`,en:`# Notion local workspace and automation hub

NotionNexus is a local-first FastAPI and React application connecting files, Excel data, and Notion. It includes a workspace scanner and shadow database, an Excel mapping wizard, atomic automation actions, file watching, templates, integrations, and a visual task builder.`}},{id:"shadertoy-knowledge-library",title:"Shader 案例学习、渲染与 AI 检索知识库",category:"other-tools",categoryLabel:{zh:"实时图形知识工程",en:"Realtime graphics knowledge engineering"},summary:{zh:"整理 1000 个 Shadertoy 案例、本地 GLSL 渲染、中文深读、学习路径和可供 AI 调用的检索服务。",en:"Organizes 1,000 Shadertoy cases with local GLSL rendering, Chinese deep dives, learning paths, and AI-ready retrieval."},cover:"/media/repositories/other-tools/shadertoy-library.svg",tags:["GLSL","WebGL","知识检索","AI Context"],repositoryUrl:"https://github.com/Ubik42/shadertoy-lib",story:{zh:`# Shader 案例学习、渲染与 AI 检索知识库

这个工程将 Shadertoy 案例从零散收藏整理为可以搜索、渲染、学习和被 AI 调用的本地知识库。

- 抓取并标准化 1000 个高质量 Shader，拆分 Image、Buffer 和 Common 等 GLSL Pass，同时镜像必要媒体资源；
- 使用本地 Web 查看器渲染 Shader，浏览源码、元数据、中文分析和逐篇深读；
- 从 1000 篇报告和 1812 个 GLSL Pass 构建机制分类、技术前置关系与分阶段学习路径；
- 提供中英术语扩展、相似案例、主题与预览能力过滤，以及适合直接交给 AI 的 Context Pack；
- 用 Schema 校验、检索回归、随机端口服务 Smoke Test 和渲染报告检查知识库质量。

它既是 Shader 学习工具，也是面向技术美术和图形开发任务的案例检索基础设施。`,en:`# Shader learning, rendering, and AI retrieval library

This project turns 1,000 Shadertoy cases and 1,812 GLSL passes into a local renderer, Chinese deep-reading corpus, mechanism taxonomy, staged learning path, similarity index, and AI-ready context service with validation and retrieval regression tests.`}},{id:"shortcut-manager",title:"跨软件快捷键采集与查询工具",category:"other-tools",categoryLabel:{zh:"桌面效率资料工具",en:"Desktop productivity reference tool"},summary:{zh:"集中采集常用软件快捷键来源、截图与 OCR 结果，整理为 Markdown，并接入可视化键盘映射项目。",en:"Collects shortcut sources, screenshots, OCR results, Markdown references, and a visual keyboard-mapping subproject."},cover:"/media/repositories/other-tools/shortcut-manager.svg",tags:["OCR","Markdown","快捷键","Git Submodule"],repositoryUrl:"https://github.com/Ubik42/ShortcutManager",story:{zh:`# 跨软件快捷键采集与查询工具

ShortcutManager 用于集中维护不同软件的快捷键资料，减少截图、网页和个人笔记分散后无法检索的问题。

- 保存快捷键来源、界面截图、OCR 结果和采集脚本；
- 将已经整理的内容统一输出为便于搜索和版本管理的 Markdown；
- 通过 Git 子模块接入可视化 ShortcutMapper，用键盘布局展示按键与组合键；
- 将原始证据、文字整理和可视化界面分层，便于继续补充更多软件。

项目重点不是重新发明快捷键，而是把资料采集、文字校对、版本维护和可视化查询组成一条可持续更新的流程。`,en:`# Cross-application shortcut collection and query tool

ShortcutManager collects shortcut sources, screenshots, OCR output, and acquisition scripts, normalizes reviewed material into searchable Markdown, and integrates a visual ShortcutMapper through a Git submodule.`}},{id:"pyarsenal",title:"Python 脚本整理与运行工具",category:"other-tools",categoryLabel:{zh:"Python 脚本管理器",en:"Python script manager"},summary:{zh:"通过标签、环境隔离和一键编译管理分散 Python 脚本的桌面工具。",en:"A desktop tool for organizing scattered Python scripts with tags, isolated environments, and one-click compilation."},cover:"/media/repositories/pyarsenal.png",tags:["Python","Desktop App","Script Library"],repositoryUrl:"https://github.com/Ubik42/PyArsenal",story:{zh:`# Python 脚本整理与运行工具

PyArsenal 面向需要维护大量零散脚本的 Python 开发者。它把脚本登记、标签检索、运行环境和编译入口集中到一个图形界面中，减少“脚本在哪、依赖是什么、如何交付”的重复管理成本。

具体能力与使用方式以仓库当前 README 和实现为准。`,en:`# PyArsenal

PyArsenal is a graphical manager for Python developers who maintain many scripts. It centralizes registration, tags, execution environments, and compilation so a script library remains searchable and deliverable.`}},{id:"levelwright-agent",title:"Levelwright Agent：UE 关卡灰盒搭建智能体",category:"other-tools",categoryLabel:{zh:"UE 关卡设计与可玩性验证",en:"UE level design and playability validation"},summary:{zh:"把关卡 Brief、玩家尺度、节拍与技术约束转换为两个可比较的 UE 5.8.1 灰盒候选，并用稳定语义 ID、真实导航、碰撞射线和 Playtest 轨迹支持局部修订。",en:"Turns level briefs, player metrics, pacing, and technical constraints into two comparable UE 5.8.1 blockout candidates, with stable semantic IDs, real navigation, collision traces, and playtest trajectories for local revision."},cover:"/media/repositories/levelwright-agent/observation.png",tags:["v0.2.0","Unreal 5.8.1","Level Design","Python / C++"],repositoryUrl:"https://github.com/Ubik42/Levelwright-Agent",story:{zh:`# Levelwright Agent：UE 关卡灰盒搭建智能体

Levelwright Agent 面向第三人称动作 / 射击关卡的灰盒阶段。它从结构化 Brief、角色尺度、节拍图和知识卡生成候选布局，在独立 Unreal Level 中搭建入口、观察区、双路线、遭遇区与撤离点，再把引擎测量结果整理为可定位报告。

## 从设计意图到两个候选

- LevelBrief、MetricProfile、BeatGraph 与 LayoutPlan 四类版本化 Schema 保留目标、尺度、节奏和空间约束；
- 30 张带来源与适用边界的关卡知识卡参与确定性规划；
- candidate.a 使用等长双分支，candidate.b 使用短内线与长外线，便于比较路线取舍；
- Actor 使用稳定语义 ID，通过 dry-run、单事务 reconcile 和候选归属标签执行 Create / Update / Delete，避免重建无关区域。

## UE 5.8.1 真实验证

v0.2.0 在 Unreal Engine 5.8.1（CL 56057345）中生成 candidate.b，并完成 33 项检查：空间和尺寸、碰撞、Nav、受管对象预算、目标视线，以及 Encounter 容量、出生间距与出生点遮挡。当前候选包含 34 个受管 Actor；同输入复跑为 34 个 unchanged。

最新独立游戏态路径长 6506.76 cm，标准第三人称 Character 到达终点后距离 11.85 cm。运行保存 49 个轨迹点与真实截图。两个敌人出生标记相距 1500 cm，并分别被对应遮挡体从固定观察点遮住。

## 当前边界

敌人出生点目前是 Gameplay Marker，不包含敌人 AI、战斗逻辑或平衡结论。角色尺度仍是项目占位基线；固定机位射线和自动导航不能替代真人 Playtest。当前公开仓库未授予复制、修改或再分发许可证。`,en:`# Levelwright Agent

Levelwright Agent supports third-person action/shooter blockout work. Versioned LevelBrief, MetricProfile, BeatGraph, and LayoutPlan schemas turn design intent, player metrics, pacing, and constraints into two isolated UE candidates. Stable semantic IDs, dry-run reconciliation, and candidate ownership keep revisions local.

Version 0.2.0 was verified in Unreal Engine 5.8.1 (CL 56057345). Candidate B passes 33 checks covering geometry, dimensions, collision, navigation, budgets, target sightlines, encounter capacity, spawn spacing, and spawn occlusion. A standalone game run produced a valid 6506.76 cm path and finished 11.85 cm from the goal, with 49 trajectory samples.

Enemy spawns are currently gameplay markers rather than combat AI. Automated navigation and fixed-view traces do not replace human playtesting. No reuse license is currently granted.`},images:[{src:"/media/repositories/levelwright-agent/overview.png",alt:{zh:"candidate.b 双路线灰盒俯视图",en:"Top-down view of candidate B and its two routes"}},{src:"/media/repositories/levelwright-agent/play.png",alt:{zh:"标准第三人称角色到达撤离点的真实运行画面",en:"Standalone third-person run reaching the extraction goal"}}]},{id:"threeui-agent",title:"ThreeUI 组件选型与资产规划 Agent",category:"other-tools",categoryLabel:{zh:"Three.js 组件检索与视觉选型",en:"Three.js component retrieval and visual selection"},summary:{zh:"结合中文需求、参考图和前端工程环境，从 176 个可安装 Community 结果与 462 个官网公开页面中返回最多三个候选，并明确源码、许可与兼容边界。",en:"Returns up to three candidates from 176 installable Community results and 462 public catalog pages using the request, reference images, and target frontend environment."},cover:"/media/repositories/threeui-agent/dark-cyan-particle-flow.webp",tags:["v0.3.0","ThreeUI / Three.js","自然语言 + 参考图","Codex Skill"],repositoryUrl:"https://github.com/Ubik42/ThreeUI-Agent",story:{zh:`# ThreeUI 组件选型与资产规划 Agent

ThreeUI Agent 面向需要为 React / Three.js 页面选择背景、交互、动效和 3D 展示组件的开发者。它读取中文需求、可选参考图与目标工程配置，从固定 Community 快照和无需登录的官网公开目录中筛选候选，并把可安装源码与公开视觉参考分开处理。

## v0.3.0 已完成

- 从 ThreeUI Community 固定提交建立 176 条可安装结果的离线索引，保留来源 revision、运行时、源码文件和 MIT 许可；
- 按官方 robots.txt 与 sitemap.xml 抓取 462 个公开页面和 399 张唯一缩略图，首次全量运行页面与媒体错误均为 0；
- 中文检索最多返回三个候选，说明匹配原因、兼容性、改造成本、冲突、取舍和来源；
- 只读扫描 React、Next.js、Vite、Three.js、lockfile 与静态资产条件，不读取 .env，也不执行目标工程脚本；
- 对项目自生成参考图提取色板、亮度、密度、构图和运动线索，只在硬约束通过后调整顺序；
- 精确确认候选后生成 AssetRequirement 与 GenerationPlan，计划确认本身不启动模型、Blender 或工程写入。

## 数据与源码边界

与固定 MIT Community 索引对应的条目标记为可安装；无法确认开源许可的 286 个官网页面统一标记为 public-preview-only，只保留官网来源并用于视觉方向参考。抓取器不登录、不携带 Cookie，不访问成员 API、受保护源码、source map 或预览视频。当前流程不购买 ThreeUI Pro，也不依赖官方 Pro MCP。

## 当前状态

v0.3.0 以 CLI 和可安装 Codex Skill 交付，已在 Windows 11 与 Python 3.14.3 上通过 18 项自动化测试和 M1–M4 轻量评测。Web UI、资产执行和组件自动接入尚未包含；下一阶段计划完成确认计划到 Blender 5.2、GLB、预览图与 AssetManifest 的单一隔离生成闭环。`,en:`# ThreeUI component selection and asset-planning agent

ThreeUI Agent helps React and Three.js developers select backgrounds, interactions, motion effects, and 3D presentation components from a fixed Community snapshot and the public no-login catalog.

Version 0.3.0 indexes 176 installable Community results and crawls 462 public catalog pages with 399 unique thumbnails. It combines Chinese natural-language requests, optional reference images, and a read-only target-project profile, then returns at most three candidates with compatibility, adaptation cost, tradeoffs, source, and license boundaries.

Community matches retain their pinned MIT source revision. The remaining 286 public pages are marked public-preview-only and are used only as visual references. The crawler does not authenticate, send cookies, access member APIs, or download protected source. The current path does not require ThreeUI Pro or its MCP.

The v0.3.0 release ships a CLI and installable Codex Skill, validated on Windows 11 and Python 3.14.3 with 18 automated tests and the M1–M4 lightweight evaluations. Web UI, asset execution, and automatic project integration are not included yet.`},images:[{src:"/media/repositories/threeui-agent/bright-silver-liquid-glass.webp",alt:{zh:"项目自行生成的明亮液态金属参考图输入",en:"Project-generated bright liquid-metal reference input"}},{src:"/media/repositories/threeui-agent/warm-halftone-wave.webp",alt:{zh:"项目自行生成的暖色半调波浪参考图输入",en:"Project-generated warm halftone-wave reference input"}}]},{id:"comfyui-workflow-lab",title:"ComfyUI 工作流智能推荐 Agent",category:"other-tools",categoryLabel:{zh:"本地工作流检索与推荐 Agent",en:"Local workflow retrieval and recommendation agent"},summary:{zh:"从 617 个官方工作流中结合中文需求、参考图、本机模型、节点、版本、16GB 显存与许可证约束，返回最多三个可解释候选，并在确认后安全导出。",en:"Recommends up to three explainable candidates from 617 official workflows using the request, reference image, local models, nodes, versions, VRAM, and license constraints."},cover:"/media/repositories/comfyui-workflow-lab/reference-recommendation.png",tags:["ComfyUI","Agent Skill","多模态检索","本地兼容检查"],repositoryUrl:"https://github.com/Ubik42/ComfyUI-Workflow-Lab",story:{zh:`# ComfyUI 工作流智能推荐 Agent

面对数量不断增长的 ComfyUI 模板，真正费时间的往往不是点击“运行”，而是判断哪个工作流符合当前生成目标、参考图、本机模型、已安装节点、ComfyUI 版本、16GB 显存和使用许可证。这个项目把工作流选型做成一个中文优先、本地优先、结果可解释的推荐 Agent，而不是再做一个让模型随意拼接节点的聊天入口。

## 从 617 个官方工作流中先筛选，再解释

系统将 617 个官方工作流整理为带来源 revision 的 Workflow Card，记录任务类型、输入模态、模型、节点、显存、许可证和兼容要求。用户输入中文需求并可附参考图后，Agent 会形成 SearchIntent 与 VisualIntent：任务、输入和许可证等事实作为硬约束，中文词项、离线字符 Embedding 与参考图视觉特征用于软排序。

最终只返回最多三个候选，并逐项说明推荐原因、所需模型与节点、许可证、本机可运行性和风险。视觉相似度只能调整通过硬约束后的顺序，不会覆盖缺失依赖或许可证事实。

## 推荐前读取真实本机环境

项目会检查本机 ComfyUI、模型目录、自定义节点、版本和 16GB 显存条件，把候选区分为：

- 可以直接使用；
- 缺少模型或节点；
- 当前需求没有可信匹配；
- 已选择候选，等待用户确认导出。

缺少依赖时直接列出差异，不伪装成“推荐成功”；没有可信结果时保留空结果，也不会为了凑满三个候选降低硬约束。

## 写入前确认，保持推荐工具的安全边界

推荐阶段只读。只有用户明确选择候选后，系统才把工作流和说明导出到受限目录。它不会自动下载大型模型、安装未知节点或提交 ComfyUI 队列，避免一次选型操作在后台改变环境。

同一套能力通过稳定 CLI、结构化 JSON、可安装 Agent Skill 和中文 Web 界面交付，可以被 Codex 等 Agent 调用，也能独立运行。接口层与检索内核分离，方便后续替换 UI 或接入其他 Harness。

## 真实 ComfyUI 验证

展示案例不是静态 Mock：候选工作流已经在 RTX 4080 16GB 环境中加载并使用 Z-Image-Turbo 完成真实生成。项目保留推荐结果、环境检查、失败状态、写入确认、ComfyUI 载入和最终产物，形成从自然语言需求到可运行工作流的完整证据链。

## 项目边界

它负责可信地回答“当前应该选哪个工作流、为什么、这台机器能否运行”，不试图取代 ComfyUI 本身，也不把官方模板重新包装成私有资产。下一阶段重点是用固定查询集评估 Top-k 命中、约束违反率、依赖诊断和解释正确率，而不是无限增加控制工具。`,en:`# ComfyUI workflow recommendation agent

This Chinese-first, offline-first agent recommends up to three explainable candidates from a revisioned catalog of 617 official ComfyUI workflows. It combines natural-language intent and an optional reference image with hard constraints for task, input, license, local models, custom nodes, version, and 16 GB VRAM.

It exposes honest ready, missing-dependency, no-match, and confirmation states. Recommendation is read-only; export occurs only after explicit confirmation, while model downloads, node installation, and queue submission remain outside its scope. The same core is delivered through a CLI, structured JSON, an installable Agent Skill, and a Web UI. A selected Z-Image-Turbo workflow was loaded and executed on a real RTX 4080 16 GB environment.`},images:[{src:"/media/repositories/comfyui-workflow-lab/reference-recommendation.png",alt:{zh:"结合中文需求与参考图返回三个可解释工作流候选",en:"Three explainable workflow candidates from a Chinese request and reference image"}},{src:"/media/repositories/comfyui-workflow-lab/missing-dependencies.png",alt:{zh:"模型与自定义节点缺失诊断",en:"Missing model and custom-node diagnostics"}},{src:"/media/repositories/comfyui-workflow-lab/no-match.png",alt:{zh:"硬约束下没有可信候选的明确状态",en:"Explicit no-match state under hard constraints"}},{src:"/media/repositories/comfyui-workflow-lab/confirm-before-export.png",alt:{zh:"选择候选后、写入工作区前的确认步骤",en:"Confirmation after selection and before workspace export"}},{src:"/media/repositories/comfyui-workflow-lab/comfyui-real-generation.png",alt:{zh:"候选工作流在本机 ComfyUI 中真实运行",en:"Recommended workflow running in local ComfyUI"}},{src:"/media/repositories/comfyui-workflow-lab/z-image-turbo-real-4080.png",alt:{zh:"RTX 4080 16GB 上的 Z-Image-Turbo 真实生成结果",en:"Real Z-Image-Turbo result generated on an RTX 4080 16 GB"}}]},{id:"artflow-agent",title:"面向引擎接入的新时代 AIGC 框架",category:"ai-agent",categoryLabel:{zh:"引擎场景 AIGC 智能体框架",en:"Engine-scene AIGC agent framework"},summary:{zh:"把 Unreal 场景事实编译成类型化变更计划，协调 ComfyUI、GPT Image 2 与图生 3D，在候选关卡中完成执行、评价、定向纠正和发布。",en:"Compiles Unreal scene facts into typed change plans and coordinates ComfyUI, GPT Image 2, and image-to-3D providers for execution, judging, targeted correction, and publishing in candidate levels."},cover:"/media/repositories/major-updates/artflow-scene-lab-3d.png",tags:["Unreal 5.8","ComfyUI / GPT Image 2","Image-to-3D","Scene Agent"],repositoryUrl:"https://github.com/Ubik42/ArtFlow-Agent",story:{zh:`# 面向引擎接入的新时代 AIGC 框架

ArtFlow Agent 是位于生成模型与 Unreal 之间的受约束场景智能体控制层。它读取真实 UE 5.8 场景、生成类型化 SceneChangePlan，并把材质、资产、PCG、灯光与布局变更落到候选关卡；源关卡不被直接覆盖，所有外部生成物都要经过来源、格式、预算和场景约束验证。

项目重点不是再封装一个聊天界面，而是让 AIGC 结果成为可执行、可评价、可纠正、可恢复并能安全回到引擎的生产变更。

## 四个真实生产案例

- **参考图到可用 3D 资产**：GPT Image 2 生成参考图，图生 3D Provider 返回 GLB；系统依次检查许可、URI、文件格式、几何体、材质与三角面预算，再通过 Unreal Interchange 导入候选关卡。
- **PBR 材质闭环**：ComfyUI 生成 Base Color、Normal、Roughness、Metallic、AO 五通道材质，通道语义、尺寸与来源验证通过后自动创建材质实例并绑定目标对象。
- **多域场景改造**：同一计划协调材质、PCG、灯光与资产调整，以依赖 DAG 控制执行顺序；演示案例完成 12 处 PCG 变更，同时保持保护区域零侵入。
- **只修失败域**：技术评审与视觉评审分离。若候选只在灯光上失败，Agent 仅生成灯光纠正计划；回执丢失时通过 reconcile 恢复，避免重复导入和重复写场景。

## 1. 场景数字孪生与执行约束

- UE 5.8 场景桥导出固定相机的 beauty、depth、world normal 与 object ID 四 Pass；
- Scene Package 同时保存受保护轮廓、可编辑区域、对象身份和美术方向，并逐文件记录 SHA-256；
- 生成器只能执行已登记的 Provider 能力与 Recipe；ComfyUI 和 GPT Image 2 共用同一份场景约束，候选结果因此可以在同一基准上比较。

## 2. 生成与评价分离

确定性 Constraint Judge 先检查相机、主体轮廓、结构和保护区域；通过硬约束的候选再交给多模态 Visual Critic 评价风格与完成度。展示样例中，一张视觉表现更强但改动了场景结构的负对照被直接排除。评价结果、策略版本、候选身份与最终选择都保存在事件日志中。

## 3. 只修改指定区域，再回流 Unreal

确定方向后，编排器根据对象 ID 和蒙版调用 GPT Image 2 做局部修订。当前主运行的第二次 feathered composite 改变了蒙版内 42,803 个像素，蒙版外 1,530,358 个像素保持零变化。通过验证的资产导入 /Game/ArtFlow/Returns，并绑定回目标 Actor；本次闭环的 9 个来源文件哈希全部匹配。

## 4. 长时任务、中断与恢复

- SQLite append-only 事件、哈希链和确定性 Reducer 让页面刷新或进程重启后可以重建相同状态；
- reserve / submit / reconcile 区分“尚未执行”“已完成”和“结果未知”；6 组故障注入测试中没有发生重复外部写入；
- 上下文装配只保留稳定前缀、当前 Reducer 状态、最近观察和来源绑定记忆，排除陈旧观察与无关信息；
- Capability Registry 记录输入输出、读写域、风险、超时、幂等和验证信号；不可用能力与权限漂移直接失败关闭；
- episodic、semantic、procedural 三类生产记忆都绑定来源，冲突、伪造来源和越权共享会被拒绝；
- OpenTelemetry 关联完整 Trace，冻结 Harness 的 20/20 命名案例和恢复/记忆矩阵可以独立复核。

## 5. 可复核的作品集交付

发布包只保留审阅所需的画面、评价、来源和恢复证据，排除 Prompt、凭据、隐藏推理和完整 SQLite 数据库。随包验证器会重新检查文件哈希、Run / Event 头、Harness、恢复矩阵、记忆与 Provenance。当前 C2PA 为 compatible unsigned sidecar，尚未接入签名证书。

## 当前边界

当前四个生产案例覆盖图生 3D、PBR、多域场景变更和定向纠正，但还不是开放域生成质量 Benchmark。PydanticAI 只承担类型化模型交互；状态、策略、执行权限和恢复逻辑由项目本身的确定性系统管理。`,en:`# ArtFlow Agent

ArtFlow Agent is a constrained scene-agent control plane between generation providers and Unreal. It compiles scene facts into typed change plans and coordinates ComfyUI, GPT Image 2, image-to-3D providers, Unreal Interchange, judging, targeted correction, recovery, and candidate-level publishing. Four production cases cover image-to-3D, five-channel PBR, multi-domain scene changes, and correction of the failed domain only.`},images:[{src:"/media/repositories/major-updates/artflow-scene-lab-3d.png",alt:{zh:"参考图生成、GLB 验证与 Unreal 候选关卡导入",en:"Reference generation, GLB validation, and Unreal candidate-level import"}},{src:"/media/repositories/major-updates/artflow-scene-lab-pbr.png",alt:{zh:"ComfyUI 五通道 PBR 生成与材质实例回流",en:"Five-channel ComfyUI PBR generation and material-instance return"}},{src:"/media/repositories/major-updates/artflow-scene-lab-multi.png",alt:{zh:"材质、PCG、灯光和资产的多域场景变更",en:"Multi-domain scene changes across materials, PCG, lighting, and assets"}},{src:"/media/repositories/major-updates/artflow-scene-lab-correction.png",alt:{zh:"只针对失败域执行定向纠正与恢复",en:"Targeted correction and recovery for the failed domain only"}},{src:"/media/repositories/major-updates/artflow-architecture.png",alt:{zh:"场景智能体控制层、能力注册与候选关卡架构",en:"Scene-agent control plane, capability registry, and candidate-level architecture"}}]},{id:"comfyui-production-nodes",title:"ComfyUI 生产检查与交付节点",category:"ai-agent",categoryLabel:{zh:"AIGC 生产节点",en:"ComfyUI custom nodes"},summary:{zh:"插入现有 ComfyUI 工作流，在生成前检查参数与依赖，生成后记录收据并整理 DCC、引擎交付信息。",en:"Custom nodes adding constraint checks, dependency checks, generation receipts, and DCC / engine handoff manifests."},cover:"/media/repositories/comfyui-production-nodes/workflow-overview.png",tags:["ComfyUI","Python","工作流检查","DCC / 引擎交付"],repositoryUrl:"https://github.com/Ubik42/ComfyUI-Production-Nodes",story:{zh:`# ComfyUI 生产检查与交付节点

这是一套可以直接安装到 ComfyUI 的自定义节点。它不替换采样器和模型，而是补齐生成任务前后的制作流程：任务开始前检查尺寸、批量、Denoise、像素预算、模型与自定义节点依赖；生成完成后记录 Prompt、Seed、模型、LoRA 和工作流信息，并整理交给 Maya、Blender、Houdini、Unreal Engine 或 Unity 的资产清单。

## 一套可直接插入现有工作流的节点

当前版本包含 8 个节点，分为三组：

- **生成前检查**：扫描本机 ComfyUI 环境，一次列出缺失的模型与自定义节点；检查宽高、Batch、Denoise 和总像素预算，避免错误参数进入昂贵任务。
- **工作流约定**：检查必须提供的输入和参数范围，让团队模板在换机器、换操作者后仍能发现缺项。
- **结果记录与交付**：生成可复查的任务收据，在指定工作区内安全写入 JSON，并为 DCC 与引擎整理文件角色、坐标系、单位和来源编号。

## 中文生产模板

仓库提供“生产预检与下游交接”模板。画布按照真实操作顺序分成环境检查、参数预算、工作流检查、生成收据和 DCC / 引擎交付几部分；检查报告可以直接显示在 ComfyUI 画布中，不需要离开节点图查看日志。

示例专门保留了三类可复现问题：缺少依赖、Batch 与像素预算超限、必需输入为空且 Steps 越界。节点会集中返回全部问题，而不是修正一个后再暴露下一个。

## 安全写入与可移交信息

只有“收据安全写入”节点会修改磁盘。它只能写入用户指定工作区中的相对 JSON 路径，拒绝绝对路径、目录穿越和默认覆盖。批次交接清单不复制资产，而是明确记录目标软件、项目、坐标系、单位、文件角色与 Receipt ID，方便后续工具继续处理。

## 真实运行与验证

页面中的界面截图来自加载当前仓库代码的独立 ComfyUI 实例；本地生成图来自 RTX 4080 上的真实 ComfyUI 任务。仓库同时保存对应的 API Workflow 与 Generation Receipt。版本 1.1.0 已验证 8 个节点发现、模板导入、CPU 集成流程、受限写入和交付元数据链路。`,en:`# ComfyUI Production Nodes

This package adds production checks around an existing ComfyUI graph: dimensions and budget validation, dependency inventory, workflow contracts, generation receipts, contained JSON writes, and portable DCC / engine handoff manifests.

The repository includes a real local ComfyUI output, its API workflow, and the receipt written by the package. The nodes remain model- and renderer-independent.`},images:[{src:"/media/repositories/comfyui-production-nodes/workflow-overview.png",alt:{zh:"中文生产预检与下游交接工作流总览",en:"Chinese production workflow overview"}},{src:"/media/repositories/comfyui-production-nodes/dependency-check.png",alt:{zh:"环境清单与依赖预检通过",en:"Environment inventory and dependency check"}},{src:"/media/repositories/comfyui-production-nodes/budget-validation.png",alt:{zh:"批量与像素预算超限被集中拦截",en:"Batch and pixel budget validation"}},{src:"/media/repositories/comfyui-production-nodes/contract-validation.png",alt:{zh:"工作流必需输入与参数范围检查",en:"Workflow input and parameter validation"}},{src:"/media/repositories/comfyui-production-nodes/receipt-writer.png",alt:{zh:"生成收据预览与受限工作区写入",en:"Generation receipt and contained write"}},{src:"/media/repositories/comfyui-production-nodes/dcc-handoff.png",alt:{zh:"面向 DCC 与引擎的批次交接清单",en:"DCC and engine batch handoff manifest"}},{src:"/media/repositories/comfyui-production-nodes/local-generation.png",alt:{zh:"本机 ComfyUI 真实生成结果",en:"Locally generated ComfyUI output"}}]}];function Pt(a,r){return a[r]}const OT=[{id:"maya-plugin",portfolioCategory:"pipeline",artstationUrl:"https://www.artstation.com/artwork/XJGnR3",title:{en:"Maya Plugin",zh:"Maya 综合工具集"},cover:"/media/visual-works/maya-toolset-video-cover.jpg",category:{en:"DCC tool development",zh:"DCC 工具开发"},summary:{en:"A modular Maya tool suite covering nine production areas, with separated interface and utility layers.",zh:"面向 Maya 生产流程的综合工具集，覆盖属性、绑定、约束、骨骼、控制器、命名、连接、工程与动画九类功能。"},process:[{en:"Separated PySide interfaces from reusable backend utility classes.",zh:"以 PySide 界面层调用后端 Utility 类，拆分交互、业务逻辑与公共功能。"},{en:"Implemented production-oriented operations for rigging, attributes, constraints, naming, and connections.",zh:"实现绑定、属性、约束、命名与驱动连接等面向实际制作的批量操作。"},{en:"Added persistent theme, window state, responsive layout, and contextual tooltips.",zh:"补充主题与窗口状态记忆、弹性布局、字号适配及悬停提示。"}],tools:["Maya","Python","PySide","DCC Pipeline"],youtubeId:"7rUuqI9Pil0",images:[{src:"/media/visual-works/maya-main.webp",alt:{en:"Main Maya plugin window",zh:"Maya 综合工具集主界面"},caption:{en:"Main window and attribute tools",zh:"主窗口与属性工具"}},{src:"/media/visual-works/maya-rig.webp",alt:{en:"Rigging tools in the Maya plugin",zh:"Maya 工具集中的绑定功能"},caption:{en:"Rigging utilities",zh:"绑定工具页"}},{src:"/media/visual-works/maya-connections.webp",alt:{en:"Attribute connection tools",zh:"属性连接与驱动关系工具"},caption:{en:"Connection editor",zh:"属性连接编辑器"}}]},{id:"stylized-road-material",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/Bk918D",title:{en:"Stylized Road Material",zh:"风格化道路材质"},cover:"/media/artstation/stylized-road-material.jpg",category:{en:"Procedural material",zh:"程序化材质"},summary:{en:"A stylized road material authored procedurally in Substance Designer.",zh:"使用 Substance Designer 制作的风格化道路材质，通过 Flood Fill、层级拆分与多层噪声构建砖块、花纹、草地、花瓣、泥土和潮湿变化。"},process:[{en:"Constructed the brick base and spiral motif as reusable procedural patterns.",zh:"程序化构建砖块基底与旋涡纹样，并保持图案参数可调。"},{en:"Used Flood Fill and deformation mixing to break repetition.",zh:"使用 Flood Fill 与形变混合打散重复，建立砖块尺度和方向变化。"},{en:"Layered grass, petals, dirt, moisture, and unified color grading.",zh:"分层加入草地、花瓣、泥土、潮湿区域，最后统一整体色彩。"}],tools:["Substance Designer","Flood Fill","Procedural Material"],youtubeId:"D2jptqFjUZE",images:[{src:"/media/visual-works/road-material.webp",alt:{en:"Final stylized road material",zh:"风格化道路材质最终效果"},caption:{en:"Final material maps and surface",zh:"最终材质与贴图效果"}},{src:"/media/visual-works/road-graph.webp",alt:{en:"Substance Designer material graph",zh:"Substance Designer 材质节点网络"},caption:{en:"Procedural graph",zh:"程序化节点网络"}}]},{id:"rigging-animation",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/vb42ev",title:{en:"Rigging & Animation",zh:"角色绑定与动画"},cover:"/media/artstation/rigging-animation.jpg",category:{en:"Rigging and gameplay",zh:"绑定与游戏角色"},summary:{en:"A complete path from a mechanical character rig in Maya to a playable Unreal Engine character.",zh:"将 T-200 机器人从 Maya 骨骼与控制器绑定推进到 Unreal Engine 过场动画和可操控角色，处理机械轴、武器链条、舱门、灯光与攻击动画。"},process:[{en:"Built a mechanical rig with specialized IK, weapon-chain constraints, doors, ladder, and spotlight controls.",zh:"针对机械结构制作腿部 IK、武器链条约束、舱门、梯子与探照灯控制。"},{en:"Authored a startup cutscene in Level Sequencer.",zh:"在 Level Sequencer 中制作角色进入机体与机器人启动的过场动画。"},{en:"Implemented locomotion, upper-body attack blending, VFX states, and spotlight input.",zh:"通过 AnimGraph 与蓝图实现移动、上半身攻击混合、烟雾状态和探照灯输入。"}],tools:["Maya","Unreal Engine","Sequencer","AnimGraph","Blueprint"],youtubeId:"wd1gCuZZ2EY",featured:!0,images:[{src:"/media/visual-works/rig-result.webp",alt:{en:"Playable T-200 robot in Unreal Engine",zh:"Unreal Engine 中可操控的 T-200 机器人"},caption:{en:"Playable character result",zh:"可操控角色最终效果"}},{src:"/media/visual-works/rig-maya.webp",alt:{en:"Mechanical robot rig in Maya",zh:"Maya 中的机器人机械绑定"},caption:{en:"Maya rig and controls",zh:"Maya 骨骼与控制器"}},{src:"/media/visual-works/rig-animgraph.webp",alt:{en:"Unreal Engine animation graph",zh:"Unreal Engine 动画状态图"},caption:{en:"Animation state and blending",zh:"动画状态与分层混合"}}]},{id:"unity-sdf-shader",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/XJGnQl",title:{en:"Unity SDF Shader",zh:"Unity SDF 体积云 Shader"},cover:"/media/artstation/unity-sdf-shader.jpg",category:{en:"Realtime shader",zh:"实时 Shader"},summary:{en:"A Unity volume-cloud shader using signed distance fields and ray marching.",zh:"在 Unity 中以有向距离场描述云体，使用 Ray Marching 进行密度采样，并结合光线包围盒求交、噪声、吸收和散射计算完成体积云渲染。"},process:[{en:"Combined sphere and box SDF primitives through smooth union and subtraction.",zh:"组合球体与盒体 SDF，并以平滑并集和差集构造可变化的云体形态。"},{en:"Implemented ray-box intersection and density sampling in HLSL.",zh:"在 HLSL 中实现光线与包围盒求交、步进采样和密度计算。"},{en:"Exposed noise, absorption, ambient density, and light intensity for art direction.",zh:"开放噪声、吸收、环境密度与光照强度参数，支持在 Unity Inspector 中调整。"}],tools:["Unity","HLSL","SDF","Ray Marching"],youtubeId:"vSrJBlIisTs",images:[{src:"/media/visual-works/sdf-properties.webp",alt:{en:"Unity SDF shader properties",zh:"Unity SDF Shader 参数定义"},caption:{en:"Artist-facing parameters",zh:"可调渲染参数"}},{src:"/media/visual-works/sdf-raymarch.webp",alt:{en:"Ray marching fragment shader code",zh:"体积云 Ray Marching 片元着色代码"},caption:{en:"Density sampling and lighting",zh:"密度采样与光照计算"}}]},{id:"houdini-lightning",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/5W1Xkg",title:{en:"Houdini Lightning VFX",zh:"Houdini 闪电特效"},cover:"/media/artstation/houdini-lighting.jpg",category:{en:"Procedural VFX",zh:"程序化特效"},summary:{en:"A procedural lightning system that strikes nearby geometry and activates localized destruction.",zh:"使用 Houdini 构建的程序化闪电与破碎交互：电流自动寻找周围目标，生成不同形态与频率的闪电，并在命中位置激活对应刚体簇。"},process:[{en:"Projected source points onto nearby surfaces to establish valid strike targets.",zh:"沿球体法线向周围场景投射散点，筛选有效距离内的闪电命中目标。"},{en:"Built animated lightning forms with curve attributes, VOP noise, particles, and color flow.",zh:"结合曲线属性、VOP 噪声、粒子与颜色流动构建主电流和次级电流。"},{en:"Connected hit regions to clustered rigid-body activation in DOPs.",zh:"在 DOP 中将命中区域连接到预切割刚体簇，实现局部优先崩解。"}],tools:["Houdini","VOP","DOP","Particles","Rigid Bodies"],images:[{src:"/media/visual-works/lightning-form.webp",alt:{en:"Procedural lightning curves",zh:"程序化生成的闪电曲线"},caption:{en:"Lightning form generation",zh:"闪电形态生成"}},{src:"/media/visual-works/lightning-stream.webp",alt:{en:"Secondary electric current effect",zh:"次级电流与颜色流动效果"},caption:{en:"Secondary current",zh:"次级电流效果"}},{src:"/media/visual-works/lightning-destruction.webp",alt:{en:"Wall destruction driven by lightning strikes",zh:"闪电命中驱动的墙体破碎"},caption:{en:"Strike-driven rigid-body destruction",zh:"命中驱动的刚体破碎"}}]},{id:"unreal-stylized-world",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/kNZDbK",title:{en:"Unreal Engine Stylized World",zh:"Unreal 风格化世界"},cover:"/media/artstation/unreal-stylized-world.jpg",category:{en:"Realtime environment",zh:"实时场景"},summary:{en:"A stylized realtime environment built from a Houdini heightfield HDA, then authored and optimized in Unreal Engine.",zh:"使用 Houdini 生成高度场与散布数据，将 HDA 接入 Unreal Engine，完成风格化材质、植被替换、水面、灯光与后处理。"},process:[{en:"Generated, eroded, and smoothed the terrain in Houdini, with placeholders for rocks and four tree variants.",zh:"在 Houdini 中生成、侵蚀并平滑地形，同时为岩石和四类树木建立程序化散布占位。"},{en:"Built distance-aware terrain, water, grass, and foliage materials in Unreal Engine.",zh:"在 Unreal Engine 中制作分远近层级的地表、水面、草地与植被材质。"},{en:"Completed scene dressing, lighting, sharpening post process, and final realtime presentation.",zh:"完成场景布置、灯光、锐化后处理与最终实时画面。"}],tools:["Unreal Engine","Houdini","HDA","Material Editor"],youtubeId:"GRVpU7MBSTg",featured:!0,images:[{src:"/media/visual-works/world-final.webp",alt:{en:"Final stylized environment in Unreal Engine",zh:"Unreal Engine 中的风格化世界最终画面"},caption:{en:"Final realtime environment",zh:"最终实时场景"}},{src:"/media/visual-works/world-heightfield.webp",alt:{en:"Houdini heightfield and placement visualization",zh:"Houdini 高度场与模型占位可视化"},caption:{en:"Heightfield and procedural placement data",zh:"高度场与程序化散布数据"}}]},{id:"houdini-cluster",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/Zl3GrN",title:{en:"Houdini Interactive Cluster",zh:"Houdini 交互式花簇"},cover:"/media/artstation/houdini-cluster.jpg",category:{en:"Procedural interaction",zh:"程序化交互"},summary:{en:"A fully procedural flower cluster that bends and blooms in response to a moving reference point.",zh:"完全由 Houdini 程序生成的交互式花簇。参考点靠近时，花茎会向目标弯曲并逐渐开放；远离后则恢复闭合状态。"},process:[{en:"Scattered stems and used VEX to calculate distance-attenuated orientation toward the target.",zh:"散布花茎，并用 VEX 计算指向目标的方向、距离衰减、噪声和平滑。"},{en:"Generated petal rings and blended their normals by target proximity.",zh:"程序化生成花瓣环，根据参考点距离混合花瓣法线以控制开合。"},{en:"Added randomized orientation and color variation without external models.",zh:"不依赖外部模型，为花簇加入方向扰动和颜色变化，完成整体生成网络。"}],tools:["Houdini","VEX","Procedural Modeling","Interaction"],images:[{src:"/media/visual-works/cluster-response.webp",alt:{en:"Flower cluster responding to a reference point",zh:"花簇对参考点产生弯曲与开放响应"},caption:{en:"Interactive bloom response",zh:"交互式开放效果"}},{src:"/media/visual-works/cluster-network.webp",alt:{en:"Complete Houdini flower network",zh:"Houdini 花簇完整节点网络"},caption:{en:"Complete procedural network",zh:"完整程序化网络"}}]},{id:"unreal-vfx",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/oJWA5k",title:{en:"Unreal Engine VFX",zh:"Unreal 水墨战斗特效"},cover:"/media/artstation/unreal-vfx.jpg",category:{en:"Realtime VFX",zh:"实时特效"},summary:{en:"A Chinese ink-inspired combat VFX set built across Unreal materials, Niagara, animation, and post process.",zh:"以中国水墨视觉为方向，综合 Unreal 材质、Niagara、动画通知、Sequencer 与后处理，制作刀光、地裂、墨迹喷溅、聚合和画面冲击效果。"},process:[{en:"Created trail meshes and materials for dissolution, blur, refraction, cracks, and screen distortion.",zh:"制作刀光轨迹网格，以及溶解、拖尾、折射、裂纹和屏幕扰动材质。"},{en:"Layered multiple Niagara systems for blade arcs, dust, smoke, ink splashes, stones, and cohesion.",zh:"分层组合刀光、尘土、烟雾、墨迹喷溅、碎石和聚合等 Niagara 系统。"},{en:"Triggered VFX through animation slots and notifies, then added impact post process.",zh:"通过动画 Slot 与 Notify 触发特效，并在重击阶段加入水墨与模糊后处理。"}],tools:["Unreal Engine","Niagara","Material Editor","Animation"],youtubeId:"hbdYTygLQBw",images:[{src:"/media/visual-works/vfx-blade.webp",alt:{en:"Layered sword trail effect",zh:"多层组合的水墨刀光效果"},caption:{en:"Sword trail composition",zh:"刀光特效组合"}},{src:"/media/visual-works/vfx-ground.webp",alt:{en:"Large-scale ink ground fissure effect",zh:"大范围水墨地裂效果"},caption:{en:"Ground fissure layers",zh:"地裂效果分层"}},{src:"/media/visual-works/vfx-final.webp",alt:{en:"Final combat VFX in Unreal Engine",zh:"Unreal Engine 水墨战斗特效最终画面"},caption:{en:"Final realtime presentation",zh:"最终实时画面"}}]},{id:"houdini-tower",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/nJWYm1",title:{en:"Houdini PCG Tower",zh:"Houdini 程序化高塔"},cover:"/media/artstation/houdini-pcg-tower.jpg",category:{en:"Procedural modeling",zh:"程序化建模"},summary:{en:"A parameterized tower generator with independently authored walls, columns, transitions, body, and top.",zh:"在 Houdini 中拆分墙体、立柱、过渡结构、塔身与塔顶五个模块，建立相互约束的参数化生成逻辑，并生成可直接应用材质的 UV。"},process:[{en:"Built modular wall, window, pillar, railing, body, and roof generators.",zh:"分别构建墙体与窗框、立柱、栏杆、塔身装饰和塔顶结构生成器。"},{en:"Used normals, edge groups, VOP-authored attributes, loops, and resampling to control structure.",zh:"使用法线、边组、VOP 属性、循环和重采样控制结构细节与拼装位置。"},{en:"Exposed base, body, and top parameters while maintaining valid joins and UVs.",zh:"将底座、塔身与塔顶参数集中开放，并保持模块衔接和 UV 结果有效。"}],tools:["Houdini","Procedural Modeling","VOP","UV"],youtubeId:"IxTV5AredLw",images:[{src:"/media/visual-works/tower-wall.webp",alt:{en:"Procedural wall and window module",zh:"程序化墙体与窗框模块"},caption:{en:"Wall generator",zh:"墙体生成模块"}},{src:"/media/visual-works/tower-body.webp",alt:{en:"Assembled procedural tower body",zh:"组合后的程序化塔身"},caption:{en:"Tower body assembly",zh:"塔身模块组合"}},{src:"/media/visual-works/tower-top.webp",alt:{en:"Procedural tower top assembly",zh:"程序化塔顶结构"},caption:{en:"Tower top module",zh:"塔顶生成模块"}}]}],VT=`# Houdini Interactive Cluster\r
\r
![图片2.png](%25E5%259B%25BE%25E7%2589%25872.png)\r
\r
> **Introduction:**\r
>\r
>\r
> This is an interactive flower cluster generated by Houdini.\r
>\r
\r
> **Features:**\r
>\r
>\r
> Moving the reference point will cause nearby flowers to shift towards it and produce a flowering effect.I didn’t use any external models.The flower effect and interactive function are both 100% generated by the program.\r
>\r
\r
> **Goal:**\r
>\r
>\r
> This work demonstrates my ability to use interactive blueprint-like objects in the Houdini generation engine, as well as the ability to write VEX code.\r
>\r
\r
# 1 Flower stem\r
\r
- Randomly scatter dots, programmatically set offset to generate flower stems.\r
\r
![image.png](image%20146.png)\r
\r
![image.png](image%20147.png)\r
\r
- VEX node obtains input reference point information, so that each flower stem points to the reference point.\r
- Remove directional influence and use length function to calculate vector size.\r
- Multiply the normalized vector by its own length to make the orientation of the flower decay.\r
\r
![image.png](image%20148.png)\r
\r
- Mix the orientation of the Y component of each segment of the stem with the downward direction using an interpolation function and attach it to the normal attribute.\r
- Add appropriate attenuation changes, noise, and smoothing to achieve a natural bending effect.\r
\r
![image.png](image%20149.png)\r
\r
![image.png](image%20150.png)\r
\r
# 2 Petals\r
\r
- Instantiate the circular ring to obtain the shape of unopened petals.\r
\r
![image.png](image%20151.png)\r
\r
- Based on the position and size of the reference point, set the switching mixture between the upward normal and the original normal.\r
- Copy the geometric petal grid and scatter points onto each flower stem to form a flower cluster.\r
\r
![image.png](image%20152.png)\r
\r
- When the reference point is too far away and the normal is inactive, the flower remains closed. When the reference point is close, the normal is emitted outward, causing the flower to open.\r
- Finally, add some random normal offsets and color variations of the flowers, and merge them to achieve the final effect.\r
\r
![image.png](image%20153.png)\r
\r
# 3 Overview\r
\r
![image.png](image%20154.png)\r
`,PT=`# Houdini 交互式花簇\r
\r
![图片2.png](%25E5%259B%25BE%25E7%2589%25872.png)\r
\r
> **简介：**\r
>\r
>\r
> 这是一个由 Houdini 生成的交互式花簇。\r
>\r
\r
> **特性：**\r
>\r
>\r
> 移动参考点会导致附近的花朵向其偏移并产生开花效果。我没有使用任何外部模型。花朵效果和交互功能均由程序 100% 生成。\r
>\r
\r
> **目标：**\r
>\r
>\r
> 该作品展示了我使用 Houdini 生成引擎中交互式蓝图类对象的能力，以及编写 VEX 代码的能力。\r
>\r
\r
# 1 花茎\r
\r
- 随机散布点，通过程序化设置偏移来生成花茎。\r
\r
![image.png](image%20146.png)\r
\r
![image.png](image%20147.png)\r
\r
- VEX 节点获取输入参考点信息，使每根花茎指向参考点。\r
- 移除方向影响，使用 length 函数计算向量大小。\r
- 将归一化向量乘以其自身长度，使花朵的朝向产生衰减。\r
\r
![image.png](image%20148.png)\r
\r
- 使用插值函数将花茎每段的 Y 分量朝向与向下方向混合，并将其附加到法线属性上。\r
- 添加适当的衰减变化、噪波和平滑处理，以实现自然的弯曲效果。\r
\r
![image.png](image%20149.png)\r
\r
![image.png](image%20150.png)\r
\r
# 2 花瓣\r
\r
- 实例化圆环以获得未开放花瓣的形状。\r
\r
![image.png](image%20151.png)\r
\r
- 基于参考点的位置和大小，设置向上法线与原始法线之间的切换混合。\r
- 复制几何花瓣网格，并将点散布到每根花茎上，形成花簇。\r
\r
![image.png](image%20152.png)\r
\r
- 当参考点距离过远且法线未激活时，花朵保持闭合状态。当参考点靠近时，法线向外发射，促使花朵开放。\r
- 最后，添加一些随机的法线偏移和花朵颜色变化，并将其合并以实现最终效果。\r
\r
![image.png](image%20153.png)\r
\r
# 3 总览\r
\r
![image.png](image%20154.png)\r
`,HT=`# Houdini Lightning VFX\r
\r
![图片3.png](%25E5%259B%25BE%25E7%2589%25873.png)\r
\r
> **Introduction:**\r
>\r
>\r
> This is an independent houdini effect.\r
>\r
\r
> **Features:**\r
>\r
>\r
> The blob will fire lightning bolts at the surrounding geometry, while the walls will begin to fall away, preferentially shattering where they are struck by the lightning bolts. In the project, a large number of DOP network and attributiVOP nodes were used to improve the lightning effects.\r
>\r
\r
> **Goal:**\r
>\r
>\r
> This work demonstrates my ability to use Houdini to create comprehensive effects, and my proficiency in using advanced Houdini features such as VOP and DOP.\r
>\r
\r
# 1 Generate lightning\r
\r
## 1.1 Create a polyglun sphere with normals to determine the source and target of lightning emissions\r
\r
- Sprinkle dots on the surface of the sphere.\r
- Use projection nodes to project these scattered points in the normal direction onto nearby scenes.\r
- Exclude points that have not been projected and points that are greater than the specified distance separately.\r
\r
<aside>\r
💡\r
\r
So the remaining points are the target strike positions of lightning.\r
\r
</aside>\r
\r
![image.png](image%20155.png)\r
\r
## 1.2 Construct lightning forms\r
\r
- Connect the line between the target point and the source point.\r
- Enter the VOP module and add appropriate noise based on the curve U direction.\r
- Extract the offset of the curve, use time drive on the X component, and obtain dynamic noise effect.\r
\r
![image.png](image%20156.png)\r
\r
![image.png](image%20157.png)\r
\r
## 1.3 Improve lightning morphology\r
\r
- Map the numbering of each line to a random value of 0-1 and add it as the Y component of the offset channe **\`So that each lightning bolt looks different in form.\`**\r
- Similarly, the line numbers are mapped to different random values, and appropriate speed multipliers are mapped to multiply the offset values driven by the current usage time. **So that the speed and frequency of each lightning bolt are different.**\r
- Based on the curve U attribute, map slope sliders with both ends approaching 0, which to some extent suppresses the dynamic effect of current at both ends.\r
- Resample to achieve higher line density, add permutation to enrich lightning details.\r
\r
![image.png](image%20158.png)\r
\r
![image.png](image%20159.png)\r
\r
## 1.4 Simulate lightning appearance by emitting particles from ground sources\r
\r
- Emit particles from the ground contact point, input them into the particle dynamics node, and adjust the particle's life and other attributes.\r
- Map the color gradient of particles.\r
- Based on color grayscale values, extract lines at the root and randomly retain some points for emission into the scene.\r
- Merge with the original point to form a line.\r
\r
![image.png](image%20160.png)\r
\r
## 1.5 Merge various modules and add colors to obtain lightning\r
\r
![image.png](image%20161.png)\r
\r
![image.png](image%20162.png)\r
\r
# 2 Set up the interaction between lightning and the scene\r
\r
## 2.1 electric current\r
\r
- Set the beginning and end of the main current curve in the U direction to white as a mask and remove the points in the black area In this way, the contact area between lightning and objects will always appear white.\r
- Add a certain amount of noise to the normal direction in VOP and normalize it, so that the length of the secondary current is uniformly 1.\r
- Set VOP parameters to control the shape and distribution area of lightning\r
- Package and merge to complete the current style.\r
- Set up current generation logic to achieve interval jump.\r
\r
![image.png](image%20163.png)\r
\r
- Based on the current curve U attribute mapping color, and taking the modulus of the current time value to drive the color shift change. Obtain a cyclic streamer effect.\r
\r
    ![image.png](image%20164.png)\r
\r
\r
## 2.2 Set up broken geometry\r
\r
- Pre cutting rigid bodies using woronoifracture nodes.\r
- Configure the grouping density in the rigid body cluster.\r
- Configure the basic rigid body framework in the VOP dynamics module.\r
\r
![image.png](image%20165.png)\r
\r
- Set the area of current contact as object understanding activation, and when the current hits the object, the corresponding rigid body group will detach.\r
- After merging, the effect is as shown in the cover.\r
\r
# 3 Overview\r
\r
![image.png](image%20166.png)\r
`,GT=`# Houdini 闪电特效\r
\r
![图片3.png](%25E5%259B%25BE%25E7%2589%25873.png)\r
\r
> **简介：**\r
>\r
>\r
> 这是一个独立的 Houdini 特效。\r
>\r
\r
> **特性：**\r
>\r
>\r
> 斑点会向周围的几何体发射闪电，同时墙壁开始倒塌，并优先在闪电击中的位置碎裂。在项目中，使用了大量的 DOP 网络和 attributiVOP 节点来提升闪电效果。\r
>\r
\r
> **目标：**\r
>\r
>\r
> 此作品展示了我使用 Houdini 创建综合特效的能力，以及我对 VOP 和 DOP 等高级 Houdini 功能的熟练运用。\r
>\r
\r
# 1 生成闪电\r
\r
## 1.1 创建带有法线的多边形球体，以确定闪电发射的源点和目标点\r
\r
- 在球体表面散布点。\r
- 使用投影节点将这些散布点沿法线方向投影到附近的场景上。\r
- 分别排除未成功投影的点以及距离大于指定值的点。\r
\r
<aside>\r
💡\r
\r
因此，剩余的点即为闪电的目标打击位置。\r
\r
</aside>\r
\r
![image.png](image%20155.png)\r
\r
## 1.2 构建闪电形态\r
\r
- 连接目标点与源点之间的线段。\r
- 进入 VOP 模块，基于曲线 U 方向添加适当的噪波。\r
- 提取曲线的偏移量，在 X 分量上使用时间驱动，获得动态噪波效果。\r
\r
![image.png](image%20156.png)\r
\r
![image.png](image%20157.png)\r
\r
## 1.3 优化闪电形态\r
\r
- 将每条线的编号映射为 0-1 的随机值，并将其作为偏移通道的 Y 分量添加 **\`使每条闪电在形态上各不相同。\`**\r
- 同样，将线编号映射为不同的随机值，并映射适当的速度倍率，乘以当前使用时间驱动的偏移值。 **使每条闪电的速度和频率各不相同。**\r
- 基于曲线 U 属性，映射两端趋近于 0 的斜率滑块，在一定程度上抑制电流两端的动态效果。\r
- 重新采样以获得更高的线密度，添加置换以丰富闪电细节。\r
\r
![image.png](image%20158.png)\r
\r
![image.png](image%20159.png)\r
\r
## 1.4 通过从地面源点发射粒子来模拟闪电外观\r
\r
- 从地面接触点发射粒子，将其输入粒子动力学节点，并调整粒子的生命值等属性。\r
- 映射粒子的颜色渐变。\r
- 基于颜色灰度值，在根部提取线条并随机保留部分点用于向场景中发射。\r
- 与原始点合并形成线条。\r
\r
![image.png](image%20160.png)\r
\r
## 1.5 合并各个模块并添加颜色以获得闪电\r
\r
![image.png](image%20161.png)\r
\r
![image.png](image%20162.png)\r
\r
# 2 设置闪电与场景之间的交互\r
\r
## 2.1 电流\r
\r
- 将主电流曲线在 U 方向上的起点和终点设置为白色作为遮罩，并移除黑色区域中的点 这样，闪电与物体接触的区域将始终呈现白色。\r
- 在 VOP 中沿法线方向添加一定量的噪波并进行归一化，使次级电流的长度统一为 1。\r
- 设置 VOP 参数以控制闪电的形状和分布区域。\r
- 打包并合并以完成电流样式。\r
- 设置电流生成逻辑以实现间隔跳跃。\r
\r
![image.png](image%20163.png)\r
\r
- 基于电流曲线 U 属性映射颜色，并对当前时间值取模以驱动颜色偏移变化。获得循环流光效果。\r
\r
    ![image.png](image%20164.png)\r
\r
\r
## 2.2 设置破碎几何体\r
\r
- 使用 voronoifracture 节点对刚体进行预切割。\r
- 在刚体簇中配置分组密度。\r
- 在 VOP 动力学模块中配置基本的刚体框架。\r
\r
![image.png](image%20165.png)\r
\r
- 将电流接触区域设置为物体解算激活区域，当电流击中物体时，相应的刚体组将分离。\r
- 合并后，效果如封面所示。\r
\r
# 3 总览\r
\r
![image.png](image%20166.png)\r
`,_T=`# Houdini PCG Tower\r
\r
![图片14.png](%25E5%259B%25BE%25E7%2589%258714.png)\r
\r
> **Introduction:**\r
>\r
>\r
> This is a work of procedurally generated models.\r
>\r
\r
> **Features:**\r
>\r
>\r
> The tower is divided into five parts: walls, columns, transitions, the main body, and the top. Each part is generated independently, with some constraints set to ensure the overall effect is correct during adjustments.I also generated appropriate UV texture coordinates to ensure that the exported assets can directly have texture materials applied.\r
>\r
\r
> **Goal:**\r
>\r
>\r
> This work exemplifies my ability to use Houdini to create complicated procedural models, as well as my understanding of modeling theory.\r
>\r
\r
# 1 Wall\r
\r
### 1.1 Produce the main shape of the wall through hexagonal extrusion\r
\r
![image.png](image%2091.png)\r
\r
![image.png](image%2092.png)\r
\r
### 1.2 Create geometric shapes for subtracting from walls to achieve window effects\r
\r
![image.png](image%2093.png)\r
\r
![image.png](image%2094.png)\r
\r
![image.png](image%2095.png)\r
\r
### 1.3 Split the wall surface with \`facet\` nodes and generate window and frame content based on normal vertex data\r
\r
![image.png](image%2096.png)\r
\r
![image.png](image%2097.png)\r
\r
![image.png](image%2098.png)\r
\r
### 1.4 Merge components and adapt to UV\r
\r
![image.png](image%2099.png)\r
\r
# 2 Pillar\r
\r
### 2.1 Draw the bottom and top of the column\r
\r
![image.png](image%20100.png)\r
\r
![image.png](image%20101.png)\r
\r
![image.png](image%20102.png)\r
\r
![image.png](image%20103.png)\r
\r
### 2.2 Copy the basic geometric column, assemble and package it, and insert components up and down\r
\r
![image.png](image%20104.png)\r
\r
![image.png](image%20105.png)\r
\r
### 2.3 Merge\r
\r
![image.png](image%20106.png)\r
\r
# 3 Transitional structure\r
\r
### 3.1 Create vertical geometric information attributes, draw using VOP, and convert the plane into a transition platform\r
\r
![image.png](image%20107.png)\r
\r
![image.png](image%20108.png)\r
\r
![image.png](image%20109.png)\r
\r
### 3.2 Create railings, recycle the geometric shape of the railings, and create railings that link the railings\r
\r
![image.png](image%20110.png)\r
\r
![image.png](image%20111.png)\r
\r
![image.png](image%20112.png)\r
\r
![image.png](image%20113.png)\r
\r
### 3.3 Merge\r
\r
![image.png](image%20114.png)\r
\r
# 4 tower body\r
\r
### 4.1 The sweep node constructs a tower body with some indentations\r
\r
![image.png](image%20115.png)\r
\r
![image.png](image%20116.png)\r
\r
### 4.2 Use divide to cut the plane to obtain edge information, and use \`edgegroup_to-curve\` to convert the edge information into a window frame model\r
\r
![image.png](image%20117.png)\r
\r
![image.png](image%20118.png)\r
\r
### 4.3 Adjust the curved column information used to construct the depression before adjustment, adjust the loop generation logic, resample and clean up unnecessary segments, and obtain the generation position of the window\r
\r
![image.png](image%20119.png)\r
\r
![image.png](image%20120.png)\r
\r
### 4.4 Split the tower body and obtain the center point of the patch to generate the geometry and windows for excavation\r
\r
![image.png](image%20121.png)\r
\r
![image.png](image%20122.png)\r
\r
![image.png](image%20123.png)\r
\r
### 4.5 VOP draws decorative panels and generates eaves based on tower body splitting information obtained from tower body\r
\r
![image.png](image%20124.png)\r
\r
![image.png](image%20125.png)\r
\r
![image.png](image%20126.png)\r
\r
### 4.6 Merge\r
\r
![image.png](image%20127.png)\r
\r
# 5 top\r
\r
### 5.1 VOP drawing layered tower top floor\r
\r
![image.png](image%20128.png)\r
\r
![image.png](image%20129.png)\r
\r
![image.png](image%20130.png)\r
\r
### 5.2 Resample the floor and use multi-path to generate edge shapes, which are used to replicate the basic geometry and form a fence\r
\r
![image.png](image%20131.png)\r
\r
![image.png](image%20132.png)\r
\r
![image.png](image%20133.png)\r
\r
## 5.3 Using similar VOP logic, draw the tower top building\r
\r
![image.png](image%20134.png)\r
\r
![image.png](image%20135.png)\r
\r
![image.png](image%20136.png)\r
\r
![image.png](image%20137.png)\r
\r
![image.png](image%20138.png)\r
\r
## 5.4 Using \`Subdivide\`  to Draw Hollow Structures\r
\r
![image.png](image%20139.png)\r
\r
![image.png](image%20140.png)\r
\r
![image.png](image%20141.png)\r
\r
## 5.5 merge\r
\r
![image.png](image%20142.png)\r
\r
# 6 all parameters\r
\r
![1 base](image%20143.png)\r
\r
1 base\r
\r
![2 body](image%20144.png)\r
\r
2 body\r
\r
![3 top](image%20145.png)\r
\r
3 top\r
`,NT=`# Houdini PCG 塔楼\r
\r
![图片14.png](%25E5%259B%25BE%25E7%2589%258714.png)\r
\r
> **简介：**\r
>\r
>\r
> 这是一个程序化生成的模型作品。\r
>\r
\r
> **功能特点：**\r
>\r
>\r
> 塔楼分为五个部分：墙体、立柱、过渡结构、塔身和塔顶。每个部分独立生成，并设置了一些约束条件，以确保在调整过程中整体效果的正确性。我还生成了合适的 UV 纹理坐标，以确保导出的资源可以直接应用纹理材质。\r
>\r
\r
> **目标：**\r
>\r
>\r
> 该作品展示了我在 Houdini 中创建复杂程序化模型的能力，以及我对建模理论的理解。\r
>\r
\r
# 1 墙体\r
\r
### 1.1 通过六边形挤压生成墙体主要形状\r
\r
![image.png](image%2091.png)\r
\r
![image.png](image%2092.png)\r
\r
### 1.2 创建用于从墙体中减除的几何形状，以实现窗户效果\r
\r
![image.png](image%2093.png)\r
\r
![image.png](image%2094.png)\r
\r
![image.png](image%2095.png)\r
\r
### 1.3 使用 \`facet\` 节点分割墙体表面，并根据法线顶点数据生成窗户和窗框内容\r
\r
![image.png](image%2096.png)\r
\r
![image.png](image%2097.png)\r
\r
![image.png](image%2098.png)\r
\r
### 1.4 合并组件并适配 UV\r
\r
![image.png](image%2099.png)\r
\r
# 2 立柱\r
\r
### 2.1 绘制柱子的底部和顶部\r
\r
![image.png](image%20100.png)\r
\r
![image.png](image%20101.png)\r
\r
![image.png](image%20102.png)\r
\r
![image.png](image%20103.png)\r
\r
### 2.2 复制基础几何柱体，组装并打包，上下插入组件\r
\r
![image.png](image%20104.png)\r
\r
![image.png](image%20105.png)\r
\r
### 2.3 合并\r
\r
![image.png](image%20106.png)\r
\r
# 3 过渡结构\r
\r
### 3.1 创建垂直几何信息属性，使用 VOP 绘制，并将平面转换为过渡平台\r
\r
![image.png](image%20107.png)\r
\r
![image.png](image%20108.png)\r
\r
![image.png](image%20109.png)\r
\r
### 3.2 创建栏杆，循环利用栏杆的几何形状，并创建连接栏杆的横杆\r
\r
![image.png](image%20110.png)\r
\r
![image.png](image%20111.png)\r
\r
![image.png](image%20112.png)\r
\r
![image.png](image%20113.png)\r
\r
### 3.3 合并\r
\r
![image.png](image%20114.png)\r
\r
# 4 塔身\r
\r
### 4.1 使用 sweep 节点构建带有一些内凹结构的塔身\r
\r
![image.png](image%20115.png)\r
\r
![image.png](image%20116.png)\r
\r
### 4.2 使用 divide 切割平面以获取边缘信息，并使用 \`edgegroup_to-curve\` 将边缘信息转换为窗框模型\r
\r
![image.png](image%20117.png)\r
\r
![image.png](image%20118.png)\r
\r
### 4.3 调整用于构建内凹结构的曲线柱信息，调整循环生成逻辑，重新采样并清理不必要的线段，获取窗户的生成位置\r
\r
![image.png](image%20119.png)\r
\r
![image.png](image%20120.png)\r
\r
### 4.4 分割塔身并获取面片的中心点，以生成用于挖空的几何体和窗户\r
\r
![image.png](image%20121.png)\r
\r
![image.png](image%20122.png)\r
\r
![image.png](image%20123.png)\r
\r
### 4.5 使用 VOP 绘制装饰面板，并根据从塔身获取的塔身分割信息生成屋檐\r
\r
![image.png](image%20124.png)\r
\r
![image.png](image%20125.png)\r
\r
![image.png](image%20126.png)\r
\r
### 4.6 合并\r
\r
![image.png](image%20127.png)\r
\r
# 5 塔顶\r
\r
### 5.1 使用 VOP 绘制分层塔顶楼层\r
\r
![image.png](image%20128.png)\r
\r
![image.png](image%20129.png)\r
\r
![image.png](image%20130.png)\r
\r
### 5.2 重新采样楼层并使用多路径生成边缘形状，用于复制基础几何体并形成围栏\r
\r
![image.png](image%20131.png)\r
\r
![image.png](image%20132.png)\r
\r
![image.png](image%20133.png)\r
\r
## 5.3 使用类似的 VOP 逻辑，绘制塔顶建筑\r
\r
![image.png](image%20134.png)\r
\r
![image.png](image%20135.png)\r
\r
![image.png](image%20136.png)\r
\r
![image.png](image%20137.png)\r
\r
![image.png](image%20138.png)\r
\r
## 5.4 使用 \`Subdivide\` 绘制镂空结构\r
\r
![image.png](image%20139.png)\r
\r
![image.png](image%20140.png)\r
\r
![image.png](image%20141.png)\r
\r
## 5.5 合并\r
\r
![image.png](image%20142.png)\r
\r
# 6 所有参数\r
\r
![1 基础](image%20143.png)\r
\r
1 基础\r
\r
![2 主体](image%20144.png)\r
\r
2 主体\r
\r
![3 顶部](image%20145.png)\r
\r
3 顶部\r
`,IT=`# Maya Plugin\r
\r
![图片10.png](%25E5%259B%25BE%25E7%2589%258710.png)\r
\r
> **Introduction:**\r
>\r
>\r
> This is a Maya comprehensive plugin that covers 9 different themes, providing a large number of functions and convenient operations.\r
>\r
\r
> **Features:**\r
>\r
>\r
> The plugin is developed using a large-scale scalable architecture, separate front-end and back-end, introduce object-oriented concepts, and reasonably architecture functional classes and method.\r
>\r
\r
> **Goal:**\r
>\r
>\r
> This work demonstrates my engineering programming fundamentals, my ability to develop DCC tools, and my interaction design skills.\r
>\r
\r
# 1 Architecture\r
\r
### 1.1 Project Structure\r
\r
![image.png](image.png)\r
\r
- Root Directory\r
    - \`core\`—Backend classes, script files are divided according to different functions.\r
        - \`fileUtils.py\`\r
        - \`controlUtils.py\`\r
        - \`jointUtils.py\`\r
        - \`……\`\r
    - \`pyside\`—Pyside code repository.\r
    - \`res\`—The folder to store material files and corresponding calling codes.\r
    - \`Tools\`—Front end functions, where ToolMain is the main menu entrance, and each other interface represents a tab for the corresponding function. All tabs injected into the main menu form the interface that users see.\r
        - \`ToolMain.py\`\r
        - \`Rig_Tool_main.py\`\r
        - \`Joint_Tool_main.py\`\r
        - \`……\`\r
\r
### 1.2 program mode\r
\r
- Some related functionalities are aggregated into core/XXXUtil.py, where most operations related to joints are placed in the \`jointUtils.py\` script. The XXXUtil itself is a class that inherits from object, providing various operation methods. Some methods are marked as @staticmethod to become static methods.\r
- The common pattern is that the frontend \`XXXTool.py\` defines interfaces, binds signals, and calls the corresponding functionality implemented in the backend \`XXXUtil.py\`.\r
\r
![                     the structure of the \`Constraint_Tool_main.py\`](image%201.png)\r
\r
                     the structure of the \`Constraint_Tool_main.py\`\r
\r
- Some backend utilities may have internal testing interface classes, such as Joint_Resampling, but these classes will not be referenced by the frontend. Sometimes, backend tools also call each other's functionalities, leading to the creation of auxiliary backend tools containing common logic, such as hierarchyUtils. Some simple functions are also built into the frontend.\r
\r
![image.png](image%202.png)\r
\r
# 3 Overview\r
\r
## 3.0  Main window\r
\r
- The plugin can memorize the **theme**,size and position of the window when you reopen it.\r
- The plugin use flexible layout and can adjust font size\r
- you can get hint information if you hang the pointer on the button\r
\r
![image.png](image%203.png)\r
\r
> **Reference:**\r
>\r
>\r
> theme qss file came from [https://github.com/GTRONICK/QSS/blob/master](https://github.com/GTRONICK/QSS/blob/master)\r
>\r
\r
## 3.1 Attr\r
\r
![image.png](image%204.png)\r
\r
- you can edit channel box and object attrubute here.\r
\r
## 3.2 Rig\r
\r
![image.png](image%205.png)\r
\r
- You can generate and create the required IK and FK styles for unified binding here.\r
- Some  utility functions which are useful for rigging are also placed here.Not all functions have been fully implemented.\r
\r
## 3.3 Constraint\r
\r
![image.png](image%206.png)\r
\r
- You can set the spatial properties of two objects here, conveniently adding various types of constraints for **one-to-many or many-to-one constraint** relationships.\r
\r
## 3.4 Joint\r
\r
![image.png](image%207.png)\r
\r
- Here is a collection of all the functions that binding technology artists may need when dealing with bones.Not all functions have been fully implemented.\r
\r
## 3.5 Control\r
\r
![image.png](image%208.png)\r
\r
- You can edit the shape, size, and rotation of the controller here to display it in the way you want. You can also upload new shapes as controllers, or use mirror and replace functions for quick editing\r
\r
> **Reference:**\r
>\r
>\r
> the inspiration of this part came from : https://gitee.com/lush_ma/controls\r
>\r
\r
## 3.6 Name\r
\r
![image.png](image%209.png)\r
\r
- Here, naming and renaming related functions are provided, and users have three different naming scopes to choose from.\r
\r
## 3.7 Connections\r
\r
![image.png](image%2010.png)\r
\r
- You can quickly set the connections and driving relationships between attributes here.\r
\r
## 3.8 Project\r
\r
![image.png](image%2011.png)\r
\r
- You can perform some common operations related to files and projects here.\r
\r
> bone templates come from famous maya plugin \`AdvancedSkeleteon\`\r
>\r
\r
## 3.9 Anim\r
\r
![image.png](image%2012.png)\r
\r
- Here are some basic animation features that allow users to accurately modify the positions of curves and points when using the graph editor, or export and import animation data in JSON format.\r
`,qT=`# Maya 插件\r
\r
![图片10.png](%25E5%259B%25BE%25E7%2589%258710.png)\r
\r
> **简介：**\r
>\r
>\r
> 这是一个涵盖9个不同主题的Maya综合插件，提供了大量功能和便捷操作。\r
>\r
\r
> **特性：**\r
>\r
>\r
> 该插件采用大规模可扩展架构开发，前后端分离，引入面向对象概念，合理架构功能类和方法。\r
>\r
\r
> **目标：**\r
>\r
>\r
> 本作品展示了我扎实的工程编程基础、DCC工具开发能力以及交互设计技能。\r
>\r
\r
# 1 架构\r
\r
### 1.1 项目结构\r
\r
![image.png](image.png)\r
\r
- 根目录\r
    - \`core\`—后端类，脚本文件根据功能不同进行划分。\r
        - \`fileUtils.py\`\r
        - \`controlUtils.py\`\r
        - \`jointUtils.py\`\r
        - \`……\`\r
    - \`pyside\`—Pyside代码库。\r
    - \`res\`—用于存储材质文件及相应调用代码的文件夹。\r
    - \`Tools\`—前端功能，其中ToolMain是主菜单入口，其他每个界面代表相应功能的一个选项卡。所有选项卡注入主菜单后形成用户所见的界面。\r
        - \`ToolMain.py\`\r
        - \`Rig_Tool_main.py\`\r
        - \`Joint_Tool_main.py\`\r
        - \`……\`\r
\r
### 1.2 程序模式\r
\r
- 一些相关功能被聚合到core/XXXUtil.py中，其中大多数与骨骼相关的操作都放在\`jointUtils.py\`脚本中。XXXUtil本身是一个继承自object的类，提供各种操作方法。某些方法被标记为@staticmethod以成为静态方法。\r
- 常见模式是前端\`XXXTool.py\`定义界面、绑定信号，并调用后端\`XXXUtil.py\`中实现的相应功能。\r
\r
![                     \`Constraint_Tool_main.py\`的结构](image%201.png)\r
\r
                     \`Constraint_Tool_main.py\`的结构\r
\r
- 一些后端工具可能包含内部测试接口类，例如Joint_Resampling，但这些类不会被前端引用。有时，后端工具也会相互调用功能，从而产生包含通用逻辑的辅助后端工具，例如hierarchyUtils。一些简单的功能也内置在前端中。\r
\r
![image.png](image%202.png)\r
\r
# 3 概述\r
\r
## 3.0 主窗口\r
\r
- 插件可以记住**主题**、窗口的大小和位置，以便重新打开时恢复。\r
- 插件采用灵活布局，可调整字体大小。\r
- 将指针悬停在按钮上可获取提示信息。\r
\r
![image.png](image%203.png)\r
\r
> **参考：**\r
>\r
>\r
> 主题qss文件来自 [https://github.com/GTRONICK/QSS/blob/master](https://github.com/GTRONICK/QSS/blob/master)\r
>\r
\r
## 3.1 属性\r
\r
![image.png](image%204.png)\r
\r
- 您可以在此处编辑通道盒和对象属性。\r
\r
## 3.2 绑定\r
\r
![image.png](image%205.png)\r
\r
- 您可以在此处生成并创建所需的IK和FK样式，用于统一绑定。\r
- 一些对绑定有用的实用功能也放置在此处。并非所有功能都已完全实现。\r
\r
## 3.3 约束\r
\r
![image.png](image%206.png)\r
\r
- 您可以在此处设置两个对象的空间属性，方便地为**一对多或多对一约束**关系添加各种类型的约束。\r
\r
## 3.4 骨骼\r
\r
![image.png](image%207.png)\r
\r
- 这里汇集了绑定技术美术在处理骨骼时可能需要用到的所有功能。并非所有功能都已完全实现。\r
\r
## 3.5 控制器\r
\r
![image.png](image%208.png)\r
\r
- 您可以在此处编辑控制器的形状、大小和旋转，以所需方式显示。您还可以上传新形状作为控制器，或使用镜像和替换功能进行快速编辑。\r
\r
> **参考：**\r
>\r
>\r
> 此部分的灵感来自： https://gitee.com/lush_ma/controls\r
>\r
\r
## 3.6 命名\r
\r
![image.png](image%209.png)\r
\r
- 这里提供了命名和重命名相关功能，用户有三种不同的命名范围可供选择。\r
\r
## 3.7 连接\r
\r
![image.png](image%2010.png)\r
\r
- 您可以在此处快速设置属性之间的连接和驱动关系。\r
\r
## 3.8 工程\r
\r
![image.png](image%2011.png)\r
\r
- 您可以在此处执行一些与文件和工程相关的常见操作。\r
\r
> 骨骼模板来自著名的Maya插件\`AdvancedSkeleteon\`\r
>\r
\r
## 3.9 动画\r
\r
![image.png](image%2012.png)\r
\r
- 这里提供了一些基础动画功能，允许用户在使用曲线图编辑器时精确修改曲线和点的位置，或以JSON格式导出和导入动画数据。\r
`,XT=`# Rigging & Animation\r
\r
![图片16.png](%25E5%259B%25BE%25E7%2589%258716.png)\r
\r
> **Introduction:**\r
>\r
>\r
> This is a project that transforms a model into a playable character.\r
>\r
\r
> **Features:**\r
>\r
>\r
> First, I  rigged a T-200 robot with bones and controllers and created a cutscene animation. Then, I set it up as a controllable game character.The joints and movements of the robot are different from those of ordinary bipedal organisms. For the special mechanisms of the model itself, I performed some specific rigging and animation processing.\r
>\r
\r
> **Goal:**\r
>\r
>\r
> This work demonstrates my ability to bind and animate models and set up the associated logic using UE blueprints and animation systems.\r
>\r
\r
# 1 Maya Rigging\r
\r
![image.png](image%2079.png)\r
\r
![image.png](image%2080.png)\r
\r
- When setting up the IK system for the legs, the robot's axle was taken into consideration.\r
- A chain structure connecting the machine gun was set up for the hands.\r
- The movable door and ladder on the robot's back and the lights on top of its head were rigged, which will be used in animation production.\r
\r
![image.png](image%2081.png)\r
\r
- The constraints set through the node editor primarily solve the chain for the hands to ensure that the chain follows the movement when the hands move.\r
\r
# 2 UE Demostration\r
\r
## 2.1 Sequence\r
\r
- **I first created a level sequencer where a male character will enter through a small door on the robot's back, and the robot will be turned on.The detailed video has been attached or can be seen on my portfolio website.**\r
- sequence info\r
\r
    ![image.png](image%2082.png)\r
\r
\r
> **Reference:**\r
>\r
>\r
> the soldier assert came from \`mixamo\`\r
>\r
> ![image.png](image%2083.png)\r
>\r
\r
## 2.2 Play as a T-200\r
\r
![image.png](image%2084.png)\r
\r
- After the robot starts moving:\r
    - Smoke sprays from the top.\r
    - The machine body will vibrate up and down at a certain frequency.\r
    - The blue spotlight (from the overhead light in the upper left corner) is turned on.\r
- Players can :\r
    - Control the robot's movement.\r
    - Press left mouse button to attack.\r
    - Control the spotlight's up, down, left, and right directions.\r
\r
## 2.3 AnimGraph\r
\r
![image.png](image%2085.png)\r
\r
- The robot's animation state is based on locomotion, and when an attack command is input, the upper body performs animation blending. At the same time, there is a setting that directly controls the rotation of the spotlight skeleton.\r
- animation assert\r
\r
    ![image.png](image%2086.png)\r
\r
\r
## 2.4 blueprint event graph\r
\r
![image.png](image%2087.png)\r
\r
![image.png](image%2088.png)\r
\r
![image.png](image%2089.png)\r
\r
![image.png](image%2090.png)\r
\r
- The blueprint receives input from the inputenhancer, sets variables, and notifies the animation state machine to set the animation state of the robot.\r
`,FT=`# 绑定与动画\r
\r
![图片16.png](%25E5%259B%25BE%25E7%2589%258716.png)\r
\r
> **简介：**\r
>\r
>\r
> 这是一个将模型转化为可操控角色的项目。\r
>\r
\r
> **特点：**\r
>\r
>\r
> 首先，我为T-200机器人绑定了骨骼和控制器，并制作了一段过场动画。然后，我将其设置为一个可操控的游戏角色。该机器人的关节和运动方式与普通双足生物不同。针对模型自身的特殊机制，我进行了一些特定的绑定和动画处理。\r
>\r
\r
> **目标：**\r
>\r
>\r
> 这项工作展示了我在模型绑定、动画制作以及使用UE蓝图和动画系统设置相关逻辑方面的能力。\r
>\r
\r
# 1 Maya绑定\r
\r
![image.png](image%2079.png)\r
\r
![image.png](image%2080.png)\r
\r
- 在为腿部设置IK系统时，考虑了机器人的车轴结构。\r
- 为手部设置了一个连接机枪的链条结构。\r
- 对机器人背部的可活动门和梯子以及头顶的灯光进行了绑定，这些将用于动画制作中。\r
\r
![image.png](image%2081.png)\r
\r
- 通过节点编辑器设置的约束主要解决手部的链条问题，确保手部移动时链条能够跟随运动。\r
\r
# 2 UE演示\r
\r
## 2.1 过场动画序列\r
\r
- **我首先创建了一个关卡序列，其中一名男性角色将从机器人背部的小门进入，随后机器人将被启动。详细视频已附上，或可在我的作品集网站上查看。**\r
- 序列信息\r
\r
    ![image.png](image%2082.png)\r
\r
\r
> **参考：**\r
>\r
>\r
> 士兵资源来自 \`mixamo\`\r
>\r
> ![image.png](image%2083.png)\r
>\r
\r
## 2.2 扮演T-200\r
\r
![image.png](image%2084.png)\r
\r
- 机器人启动后：\r
    - 顶部喷射烟雾。\r
    - 机身会以一定频率上下振动。\r
    - 蓝色聚光灯（来自左上角顶部的灯光）被打开。\r
- 玩家可以：\r
    - 控制机器人的移动。\r
    - 按下鼠标左键进行攻击。\r
    - 控制聚光灯的上下左右方向。\r
\r
## 2.3 动画蓝图\r
\r
![image.png](image%2085.png)\r
\r
- 机器人的动画状态基于移动状态，当输入攻击指令时，上半身执行动画混合。同时，有一个设置直接控制聚光灯骨骼的旋转。\r
- 动画资源\r
\r
    ![image.png](image%2086.png)\r
\r
\r
## 2.4 蓝图事件图\r
\r
![image.png](image%2087.png)\r
\r
![image.png](image%2088.png)\r
\r
![image.png](image%2089.png)\r
\r
![image.png](image%2090.png)\r
\r
- 蓝图接收来自输入增强器的输入，设置变量，并通知动画状态机来设置机器人的动画状态。\r
`,YT=`# Stylized Road Material\r
\r
![图片1.png](%25E5%259B%25BE%25E7%2589%25871.png)\r
\r
![texture.png](texture.png)\r
\r
> **Introduction:**\r
>\r
>\r
> This is a stylized road material made by substance designer.\r
>\r
\r
> **Features:**\r
>\r
>\r
> This is a composite example where I used a combination of Flood Fill nodes and hierarchical decomposition techniques to create the appearance of an object material. Elements such as ordered texture blending and noise are added to the road.\r
>\r
\r
> **Goal:**\r
>\r
>\r
> This work demonstrates my full grasp of SD and my ability to analyze and create materials.\r
>\r
\r
# 1 Create Brick Pattern\r
\r
![image.png](image%2067.png)\r
\r
# 2 Add spiral pattern\r
\r
![image.png](image%2068.png)\r
\r
# 3 FloodFill and add deformation mixing\r
\r
![image.png](image%2069.png)\r
\r
# 4 Extracte scatter patterns from grunge map\r
\r
![image.png](image%2070.png)\r
\r
# 5 Coloring, adjusting HSL and color parameters such as contrast\r
\r
![image.png](image%2071.png)\r
\r
# 6 Add grass detail\r
\r
![image.png](image%2072.png)\r
\r
# 7 Dirt and noise\r
\r
![image.png](image%2073.png)\r
\r
# 8 Add petals\r
\r
![image.png](image%2074.png)\r
\r
![image.png](image%2075.png)\r
\r
# 9 Add moist\r
\r
![image.png](image%2076.png)\r
\r
![image.png](image%2077.png)\r
\r
# 10 Uniform color\r
\r
![image.png](image%2078.png)\r
`,KT=`# 风格化道路材质\r
\r
![图片1.png](%25E5%259B%25BE%25E7%2589%25871.png)\r
\r
![texture.png](texture.png)\r
\r
> **简介：**\r
>\r
>\r
> 这是一个使用 Substance Designer 制作的风格化道路材质。\r
>\r
\r
> **特点：**\r
>\r
>\r
> 这是一个综合示例，我结合使用了 Flood Fill 节点和层级分解技术来创建物体材质的外观。在道路中添加了有序纹理混合和噪点等元素。\r
>\r
\r
> **目标：**\r
>\r
>\r
> 此作品展示了我对 SD 的全面掌握以及我分析和创建材质的能力。\r
>\r
\r
# 1 创建砖块图案\r
\r
![image.png](image%2067.png)\r
\r
# 2 添加螺旋图案\r
\r
![image.png](image%2068.png)\r
\r
# 3 FloodFill 并添加形变混合\r
\r
![image.png](image%2069.png)\r
\r
# 4 从污渍贴图中提取散布图案\r
\r
![image.png](image%2070.png)\r
\r
# 5 着色，调整 HSL 和对比度等颜色参数\r
\r
![image.png](image%2071.png)\r
\r
# 6 添加草地细节\r
\r
![image.png](image%2072.png)\r
\r
# 7 污垢与噪点\r
\r
![image.png](image%2073.png)\r
\r
# 8 添加花瓣\r
\r
![image.png](image%2074.png)\r
\r
![image.png](image%2075.png)\r
\r
# 9 添加湿润效果\r
\r
![image.png](image%2076.png)\r
\r
![image.png](image%2077.png)\r
\r
# 10 统一颜色\r
\r
![image.png](image%2078.png)\r
`,QT=`# Unity SDF Shader\r
\r
![图片13.png](%25E5%259B%25BE%25E7%2589%258713.png)\r
\r
> **Introduction:**\r
>\r
>\r
> This is a shader that uses signed distance function (SDF) to render volume clouds in Unity.\r
>\r
\r
> **Features:**\r
>\r
>\r
> This shader contains multiple customizable attributes that allow users to adjust the appearance of clouds, such as noise type, noise scaling, and absorption.This shader uses Ray Intersection technology for intersection detection at the GPU level, using a density-based algorithm to render the clouds.\r
>\r
\r
> **Goal:**\r
>\r
>\r
> This work demonstrates my familiarity with computer graphics and HLSL language.\r
>\r
\r
# 0.SDF principle\r
\r
- The signed distance function (SDF) is a mathematical method used to describe shapes. It provides a distance value for each point, which represents the shortest distance from that point to the surface of the shape. Specifically:\r
    - If the distance value is negative, it indicates that the point is inside the shape.\r
    - If the distance value is positive, it indicates that the point is outside the shape.\r
    - If the distance value is zero, it means that the point is located exactly on the surface of the shape.\r
- By combining multiple SDFs, complex shapes can be created. This method is very useful in computer graphics, especially when generating volume effects such as clouds, smoke, etc., as it allows for dynamic shape changes without the need for re modeling.\r
\r
# **1. Properties Definition**\r
\r
The shader begins with a section that defines adjustable properties:\r
\r
- **_SDF**: A 3D texture representing the signed distance field for cloud shapes.\r
- **_Noise**: A 3D texture used to add noise effects to the cloud density.\r
- **_Absorption**: Controls how much light is absorbed by the clouds.\r
- **_AmbientDensity** and **_AmbientIntensity**: Control ambient light effects on the clouds.\r
- **_LightIntensity**: Affects the overall brightness of the clouds.\r
\r
![image.png](image%2060.png)\r
\r
# **2. Vertex Shader (\`vert\`)**\r
\r
The Vertex Shader is responsible for processing vertex data:\r
\r
- **Input**: Receives vertex positions and UV coordinates.\r
- **Output**: Transforms vertex positions into world space and clip space, preparing them for use in the fragment shader.\r
\r
![image.png](image%2061.png)\r
\r
# **3. SDF Fusion Functions**\r
\r
These functions define geometric shapes and how to combine them:\r
\r
- **\`sdSphere()\`** defines spherical shapes in the SDF.\r
- **\`sdBox()\`**defines box shapes in the SDF.\r
- **\`opSmoothUnion()\`**combines two shapes smoothly.\r
- **\`opSmoothSubtraction()\`a**llows for complex shape creation by subtracting one shape from another.\r
\r
![image.png](image%2062.png)\r
\r
# **4. Cloud Density Calculation**\r
\r
- **\`cloud()\`**calculates cloud density based on position and applies noise to simulate cloud appearance.\r
\r
![image.png](image%2063.png)\r
\r
# **5. Main Fragment Shader (\`frag\`)**\r
\r
This is the core part of the rendering process:\r
\r
- Uses ray marching techniques to sample points within the volumetric clouds.\r
- Computes light scattering effects based on density and optical depth.\r
- Combines ambient light with scattered light to produce realistic cloud colors.\r
\r
![image.png](image%2064.png)\r
\r
![image.png](image%2065.png)\r
\r
# **6. Ray Intersection Detection**\r
\r
- **\`intersectAABB()\`**determines whether rays intersect with the cloud volume.\r
\r
![image.png](image%2066.png)\r
\r
<aside>\r
💡\r
\r
Some other Auxiliary ****functions assist with lighting calculations and color mapping:\r
\r
</aside>\r
\r
# **7 Summary**\r
\r
- The shader combines several advanced techniques:\r
    - **SDFs for Shape Definition**:Uses signed distance functions to dynamically define complex cloud shapes.\r
    - **Ray Marching for Volume Rendering**:Implements ray marching to simulate how light interacts with particles within clouds, allowing for realistic volumetric rendering.\r
    - **Customizable Parameters**:Provides properties that can be adjusted in Unity's editor for fine-tuning cloud appearance and behavior.\r
    - **Light Scattering Model**:Incorporates a scattering model that accounts for both ambient light and directional light sources, enhancing realism in rendering.\r
`,ZT=`# Unity SDF 着色器\r
\r
![图片13.png](%25E5%259B%25BE%25E7%2589%258713.png)\r
\r
> **简介：**\r
>\r
>\r
> 这是一个使用有符号距离函数（SDF）在 Unity 中渲染体积云的着色器。\r
>\r
\r
> **特性：**\r
>\r
>\r
> 该着色器包含多个可自定义属性，允许用户调整云的外观，例如噪声类型、噪声缩放和吸收率。该着色器在 GPU 层面使用射线相交技术进行相交检测，并采用基于密度的算法来渲染云。\r
>\r
\r
> **目标：**\r
>\r
>\r
> 此作品展示了我对计算机图形学和 HLSL 语言的熟悉程度。\r
>\r
\r
# 0. SDF 原理\r
\r
- 有符号距离函数（SDF）是一种用于描述形状的数学方法。它为每个点提供一个距离值，该值表示该点到形状表面的最短距离。具体来说：\r
    - 如果距离值为负，表示该点位于形状内部。\r
    - 如果距离值为正，表示该点位于形状外部。\r
    - 如果距离值为零，表示该点恰好位于形状表面上。\r
- 通过组合多个 SDF，可以创建复杂的形状。这种方法在计算机图形学中非常有用，尤其是在生成体积效果（如云、烟雾等）时，因为它允许动态改变形状而无需重新建模。\r
\r
# **1. 属性定义**\r
\r
着色器以定义可调整属性的部分开始：\r
\r
- **_SDF**：一个 3D 纹理，表示云形状的有符号距离场。\r
- **_Noise**：一个 3D 纹理，用于为云密度添加噪声效果。\r
- **_Absorption**：控制云对光的吸收程度。\r
- **_AmbientDensity** 和 **_AmbientIntensity**：控制环境光对云的影响。\r
- **_LightIntensity**：影响云的整体亮度。\r
\r
![image.png](image%2060.png)\r
\r
# **2. 顶点着色器 (\`vert\`)**\r
\r
顶点着色器负责处理顶点数据：\r
\r
- **输入**：接收顶点位置和 UV 坐标。\r
- **输出**：将顶点位置转换到世界空间和裁剪空间，为在片元着色器中使用做好准备。\r
\r
![image.png](image%2061.png)\r
\r
# **3. SDF 融合函数**\r
\r
这些函数定义了几何形状以及如何组合它们：\r
\r
- **\`sdSphere()\`** 在 SDF 中定义球形形状。\r
- **\`sdBox()\`** 在 SDF 中定义盒体形状。\r
- **\`opSmoothUnion()\`** 平滑地组合两个形状。\r
- **\`opSmoothSubtraction()\`** 通过从一个形状中减去另一个形状来创建复杂形状。\r
\r
![image.png](image%2062.png)\r
\r
# **4. 云密度计算**\r
\r
- **\`cloud()\`** 根据位置计算云密度，并应用噪声来模拟云的外观。\r
\r
![image.png](image%2063.png)\r
\r
# **5. 主要片元着色器 (\`frag\`)**\r
\r
这是渲染过程的核心部分：\r
\r
- 使用光线步进技术对体积云内的点进行采样。\r
- 基于密度和光学深度计算光散射效果。\r
- 将环境光与散射光相结合，产生逼真的云颜色。\r
\r
![image.png](image%2064.png)\r
\r
![image.png](image%2065.png)\r
\r
# **6. 射线相交检测**\r
\r
- **\`intersectAABB()\`** 确定射线是否与云体积相交。\r
\r
![image.png](image%2066.png)\r
\r
<aside>\r
💡\r
\r
一些其他辅助函数有助于光照计算和颜色映射：\r
\r
</aside>\r
\r
# **7 总结**\r
\r
- 该着色器结合了多种高级技术：\r
    - **用于形状定义的 SDF**：使用有符号距离函数动态定义复杂的云形状。\r
    - **用于体积渲染的光线步进**：实现光线步进来模拟光与云内粒子的相互作用，从而实现逼真的体积渲染。\r
    - **可自定义参数**：提供可在 Unity 编辑器中调整的属性，用于微调云的外观和行为。\r
    - **光散射模型**：结合了考虑环境光和方向光源的散射模型，增强了渲染的真实感。\r
`,JT=`# Unreal Engine Stylized World\r
\r
![图片12.png](%25E5%259B%25BE%25E7%2589%258712.png)\r
\r
> **Introduction:**\r
>\r
>\r
> This is a project of procedurally generated stylized scenes.\r
>\r
\r
> **Features:**\r
>\r
>\r
> I first generated height terrain in Houdini, then import the HDA file into UE, adding stylized materials and scene content.I tweaked the terrain materials in detail to get a stylized effect and optimize the scene display.\r
>\r
\r
> **Goal:**\r
>\r
>\r
> This work demonstrates my ability to create the full process of procedural terrain, as well as my ability to tweak UE materials and post-processing.\r
>\r
\r
# 1 generate heightfield data\r
\r
- Generate undulating terrain using noisy data, and then use maskbyfeature nodes to erode and smooth the terrain representation.\r
\r
![image.png](image%2044.png)\r
\r
![image.png](image%2045.png)\r
\r
# 2 scatter model placeholders and visulize the map\r
\r
![image.png](image%2046.png)\r
\r
![image.png](image%2047.png)\r
\r
- Cubes on the map are the placeholders of tree models and stone models.I will use specific models to replace these placeholders in UE.\r
\r
# 3 Import HDA into UE and set stylized material\r
\r
### 3.1 Land Material: Micro & Macro\r
\r
<aside>\r
💡\r
\r
The terrain material will add mixed details of grassland, rock, and sand to the terrain.\r
\r
</aside>\r
\r
![image.png](image%2048.png)\r
\r
> Reference:\r
>\r
>\r
> These texture materials come from the environmental assets of UE Market.\r
>\r
- The terrain details at different viewing distances will be handled independently based on the view distance attribute.\r
    - Sample the distant terrain at a lower level to optimize scene performance.\r
    - Use different noise masks on the grass to achieve a more random and noticeable wind blown grass movement effect when in close proximity.\r
\r
![image.png](image%2049.png)\r
\r
### 3.2 Water Material\r
\r
1. Set the blue background color of the water.\r
2. Add normal based specular reflection and adjustable transparency properties.\r
3. Set the refraction effect when the incident light deviates too much from the normal.\r
4. Increase the roughness effect to create more fluctuation on the water surface.\r
5. Use the foam map asset to add the foam effect to make the water surface appear white foam.\r
\r
![image.png](image%2050.png)\r
\r
### 3.3 Grass Material\r
\r
<aside>\r
💡\r
\r
Utilizing a noise texture to modify vertex data can create the illusion of grass swaying in the wind, enhancing the dynamic feel of the environment.\r
\r
</aside>\r
\r
![image.png](image%2051.png)\r
\r
### 4.5 Post-process effect: sharpren the SceneColor\r
\r
- Adjust the sharpness of the scene to achieve a more modern and stylized visual effect\r
\r
![image.png](image%2052.png)\r
\r
# 4 Edit the scene\r
\r
### 4.1 Add trees and stones\r
\r
- In houdini ,I have set up placeholders for four types of trees and four types of stones. Now place specific models at the previously scattered positions and adjust the folia material.\r
\r
![image.png](image%2053.png)\r
\r
![image.png](image%2054.png)\r
\r
<aside>\r
💡\r
\r
- Add a pixel depth based blend to the layered material of the leaves, so that the tree materials will be more covered by green when the camera is far away, appearing green, and will show their original **purple and yellow** colors when close. This reflects a sense of change in a stylized open world.\r
</aside>\r
\r
![image.png](image%2055.png)\r
\r
### 4.2 Add some foliage assert\r
\r
![image.png](image%2056.png)\r
\r
![image.png](image%2057.png)\r
\r
### 4.3 Set light and waterplane\r
\r
![image.png](image%2058.png)\r
\r
## 4.4 Final scene\r
\r
![image.png](image%2059.png)\r
`,WT=`# Unreal Engine 风格化世界\r
\r
![图片12.png](%25E5%259B%25BE%25E7%2589%258712.png)\r
\r
> **简介：**\r
>\r
>\r
> 这是一个程序化生成的风格化场景项目。\r
>\r
\r
> **功能特点：**\r
>\r
>\r
> 我首先在 Houdini 中生成高度地形，然后将 HDA 文件导入 UE，添加风格化材质和场景内容。我细致调整了地形材质以获得风格化效果，并优化了场景显示。\r
>\r
\r
> **目标：**\r
>\r
>\r
> 该作品展示了我创建程序化地形完整流程的能力，以及我调整 UE 材质和后期处理的能力。\r
>\r
\r
# 1 生成高度场数据\r
\r
- 使用噪声数据生成起伏地形，然后利用 maskbyfeature 节点对地形表现进行侵蚀和平滑处理。\r
\r
![image.png](image%2044.png)\r
\r
![image.png](image%2045.png)\r
\r
# 2 散布模型占位符并可视化地图\r
\r
![image.png](image%2046.png)\r
\r
![image.png](image%2047.png)\r
\r
- 地图上的立方体是树木模型和石头模型的占位符。我将在 UE 中使用具体模型替换这些占位符。\r
\r
# 3 将 HDA 导入 UE 并设置风格化材质\r
\r
### 3.1 地表材质：宏观与微观\r
\r
<aside>\r
💡\r
\r
地形材质将为地形添加草地、岩石和沙地的混合细节。\r
\r
</aside>\r
\r
![image.png](image%2048.png)\r
\r
> 参考：\r
>\r
>\r
> 这些纹理材质来自 UE 商城的自然环境资产。\r
>\r
- 不同观看距离下的地形细节将根据视图距离属性独立处理。\r
    - 在较低层级采样远处地形以优化场景性能。\r
    - 在草地上使用不同的噪声遮罩，以在近距离时实现更随机且明显的风吹草动效果。\r
\r
![image.png](image%2049.png)\r
\r
### 3.2 水体材质\r
\r
1. 设置水体的蓝色背景颜色。\r
2. 添加基于法线的镜面反射和可调节的透明度属性。\r
3. 设置入射光偏离法线过大时的折射效果。\r
4. 增加粗糙度效果以在水面产生更多波动。\r
5. 使用泡沫贴图资产添加泡沫效果，使水面呈现白色泡沫。\r
\r
![image.png](image%2050.png)\r
\r
### 3.3 草地材质\r
\r
<aside>\r
💡\r
\r
利用噪声纹理修改顶点数据可以营造草在风中摇曳的视觉效果，增强环境的动态感。\r
\r
</aside>\r
\r
![image.png](image%2051.png)\r
\r
### 4.5 后期处理效果：锐化 SceneColor\r
\r
- 调整场景的锐度以实现更现代、更风格化的视觉效果\r
\r
![image.png](image%2052.png)\r
\r
# 4 编辑场景\r
\r
### 4.1 添加树木和石头\r
\r
- 在 Houdini 中，我设置了四种树木和四种石头的占位符。现在将具体模型放置在此前散布的位置，并调整叶片材质。\r
\r
![image.png](image%2053.png)\r
\r
![image.png](image%2054.png)\r
\r
<aside>\r
💡\r
\r
- 为叶片的层叠材质添加基于像素深度的混合，这样当相机距离较远时，树木材质会被绿色更多覆盖，呈现绿色外观；而在近距离时则显示其原本的**紫色和黄色**。这体现了风格化开放世界中的变化感。\r
</aside>\r
\r
![image.png](image%2055.png)\r
\r
### 4.2 添加一些植被资产\r
\r
![image.png](image%2056.png)\r
\r
![image.png](image%2057.png)\r
\r
### 4.3 设置灯光和水面\r
\r
![image.png](image%2058.png)\r
\r
## 4.4 最终场景\r
\r
![image.png](image%2059.png)\r
`,$T=`# Unreal Engine VFX\r
\r
![图片11.png](%25E5%259B%25BE%25E7%2589%258711.png)\r
\r
> **Introduction:**\r
>\r
>\r
> This is a Chinese ink and wash style combat effect made with Unreal Engine.\r
>\r
\r
> **Features:**\r
>\r
>\r
> This work was inspired by some Chinese ink and wash style digital arts. I found that by setting up explosion effects and textures in Niagara, I could create such an effect only using universal resources.I comprehensively utilized various subsystems required for creating special effects in UE, finely adjusting the artistic presentation effects.\r
>\r
\r
> **Goal:**\r
>\r
>\r
> This work demonstrates my ability to synthesize the different subsystems of the UE engine, as well as my personal aesthetic understanding.\r
>\r
\r
# 1 Mesh\r
\r
- I used UE modeling tools to create some simple static mesh objects.\r
    - Some models representing curved motion trail.\r
    - The gravel model required for seismic effect.\r
\r
![image.png](image%2013.png)\r
\r
> **Reference:**\r
>\r
>\r
> The character model with animations was bought from the UE Marketplace.\r
>\r
\r
# 2 Material\r
\r
### 2.1 Motion trail material\r
\r
- A white triangle with blurred wake and dissolution effect can be used to represent the motion trail.\r
- Use strength parameters to control the strength of dissolution effect.\r
\r
    ![image.png](image%2014.png)\r
\r
- Use offset and mask settings to obtain a white material with blurred tail.\r
\r
    ![image.png](image%2015.png)\r
\r
    ![image.png](image%2016.png)\r
\r
    ![image.png](image%2017.png)\r
\r
\r
### 2.2 Fluctuating material\r
\r
- Use radius based vectors as a cheap, sample noise maps to obtain a fountain like perturbation effect.\r
\r
    ![image.png](image%2018.png)\r
\r
- Attach this perturbation effect to a crack map to create an unstable crack effect.\r
\r
    ![image.png](image%2019.png)\r
\r
- **Final Effect:**\r
\r
    ![PixPin_2024-11-13_18-17-55.gif](PixPin_2024-11-13_18-17-55.gif)\r
\r
\r
## 2.3 Bubble refraction effect\r
\r
- Use the center diffusion wave sampling basic map to obtain the surface halo effect.\r
\r
![image.png](image%2020.png)\r
\r
- Post process the screen position of the vertices so that the object wrapped in the material has a random offset when viewed from the outside. This offset is related to the normal, and the more edges there are, the greater the fluctuation is.\r
\r
![image.png](image%2021.png)\r
\r
- Mix the edge mask, blur displacement effect, and basic texture representation based on the screen position.\r
\r
![image.png](image%2022.png)\r
\r
- **Final Effect:**\r
\r
![image.png](image%2023.png)\r
\r
# 3 Niagara-Sword trail\r
\r
- Generate blade geometry with attached materials using particle system.\r
\r
![image.png](image%2024.png)\r
\r
![image.png](image%2025.png)\r
\r
- Similarly, generate sword light effects for other materials and overlay multiple knife light effects.\r
- Use the idea of creating explosion effects to create particles with different color levels, reflecting a sense of freedom, and synthesizing curved blade light.\r
- Blade Light Effect 2 follows the same approach as Blade Light Effect 1, using black and white to enhance the ink feel, and adding a little glowing blue to enhance the special effects expression.\r
- Add more black in the latter half of the special effects path to create a feeling of ink diffusion.\r
- Add a set of explosion effects and black particles (simulated ink) drifting backwards at the end of the path to enhance the impact force of the straight line. Finally, a straight blade light is obtained.\r
\r
![image.png](image%2026.png)\r
\r
![image.png](image%2027.png)\r
\r
![image.png](image%2028.png)\r
\r
- Add a glowing weapon model based on the curved blade light, and add some throwing effects in sequence according to the special effects path. The final result is an enhanced knife light effect.\r
\r
![image.png](image%2029.png)\r
\r
# 4 Niagara-Ground scattering\r
\r
- The niagara system mainly generates black particles with materials.\r
- By sampling different textures, create a rich sense of hierarchy.\r
\r
![image.png](image%2030.png)\r
\r
![image.png](image%2031.png)\r
\r
- Particles are mainly divided into ground diffusion (dust) and upward spraying (smoke) to simulate the feeling of ink through the traces of ground diffusion.\r
\r
![image.png](image%2032.png)\r
\r
- Other ground effects follow the same approach, increasing the generation and range of particles, combining small dot effects and ink splashing shapes to produce more pronounced effects.\r
\r
![image.png](image%2033.png)\r
\r
![image.png](image%2034.png)\r
\r
- **Large scale ground fissure effect = ink+black light smoke+rising smoke+vibrating stones+splashing sprite+screen effect.**\r
\r
![image.png](image%2035.png)\r
\r
![image.png](image%2036.png)\r
\r
![image.png](image%2037.png)\r
\r
# 5 Niagara-Cohesion\r
\r
- Randomly initialize objects within the range and move them towards the center point.\r
\r
![image.png](image%2038.png)\r
\r
- Use wave materials for flashing, the following effect is obtained by combining them.\r
\r
![image.png](image%2039.png)\r
\r
# 6 Animation & post process\r
\r
- Insert special effects into character animations through slots and notifications.\r
- The animations previously created were divided into two types, one requiring binding to specific bones. Another method is to determine the relative fixed playback position based on the position of the subject when the animation is triggered.\r
\r
![image.png](image%2040.png)\r
\r
- Animation setting\r
\r
![image.png](image%2041.png)\r
\r
- sequencer setting\r
\r
![image.png](image%2042.png)\r
\r
- Finally,use Volumnprocess for post-processing. Add ink and blur screen effects when delivering a powerful blow.\r
\r
![image.png](image%2043.png)\r
`,eC=`# Unreal Engine VFX\r
\r
![图片11.png](%25E5%259B%25BE%25E7%2589%258711.png)\r
\r
> **简介：**\r
>\r
>\r
> 这是一个使用虚幻引擎制作的中国水墨风格战斗特效。\r
>\r
\r
> **特点：**\r
>\r
>\r
> 这件作品的灵感来源于一些中国水墨风格的数字艺术。我发现通过在 Niagara 中设置爆炸效果和纹理，仅使用通用资源就能创造出这样的效果。我全面运用了 UE 中创建特效所需的各个子系统，并精细调整了艺术呈现效果。\r
>\r
\r
> **目标：**\r
>\r
>\r
> 这件作品展示了我综合运用 UE 引擎各个子系统的能力，以及我个人的审美理解。\r
>\r
\r
# 1 网格体\r
\r
- 我使用 UE 建模工具创建了一些简单的静态网格体对象。\r
    - 一些代表曲线运动轨迹的模型。\r
    - 地震效果所需的碎石模型。\r
\r
![image.png](image%2013.png)\r
\r
> **参考：**\r
>\r
>\r
> 带有动画的角色模型是从 UE 商城购买的。\r
>\r
\r
# 2 材质\r
\r
### 2.1 运动轨迹材质\r
\r
- 一个带有模糊尾迹和溶解效果的白色三角形可用于表示运动轨迹。\r
- 使用强度参数来控制溶解效果的强度。\r
\r
    ![image.png](image%2014.png)\r
\r
- 使用偏移和遮罩设置来获得带有模糊尾迹的白色材质。\r
\r
    ![image.png](image%2015.png)\r
\r
    ![image.png](image%2016.png)\r
\r
    ![image.png](image%2017.png)\r
\r
\r
### 2.2 波动材质\r
\r
- 使用基于半径的向量作为廉价的采样噪声贴图，以获得类似喷泉的扰动效果。\r
\r
    ![image.png](image%2018.png)\r
\r
- 将此扰动效果附加到裂纹贴图上，以创建不稳定的裂纹效果。\r
\r
    ![image.png](image%2019.png)\r
\r
- **最终效果：**\r
\r
    ![PixPin_2024-11-13_18-17-55.gif](PixPin_2024-11-13_18-17-55.gif)\r
\r
\r
## 2.3 气泡折射效果\r
\r
- 使用中心扩散波采样基础贴图来获得表面光晕效果。\r
\r
![image.png](image%2020.png)\r
\r
- 对顶点的屏幕位置进行后处理，使包裹该材质的物体从外部观察时产生随机偏移。此偏移与法线相关，边缘越多，波动越大。\r
\r
![image.png](image%2021.png)\r
\r
- 基于屏幕位置混合边缘遮罩、模糊位移效果和基础纹理表现。\r
\r
![image.png](image%2022.png)\r
\r
- **最终效果：**\r
\r
![image.png](image%2023.png)\r
\r
# 3 Niagara-刀光轨迹\r
\r
- 使用粒子系统生成带有附加材质的刀锋几何体。\r
\r
![image.png](image%2024.png)\r
\r
![image.png](image%2025.png)\r
\r
- 同样地，为其他材质生成刀光效果，并叠加多重刀光效果。\r
- 运用创建爆炸效果的理念来创建具有不同色彩层次的粒子，体现一种自由感，并合成曲线刀光。\r
- 刀光效果 2 采用与刀光效果 1 相同的方法，使用黑白来增强水墨感，并添加一点发光的蓝色来增强特效表现力。\r
- 在特效路径的后半段添加更多黑色，以营造水墨扩散的感觉。\r
- 在路径末端添加一组爆炸效果和向后飘散的黑色粒子（模拟墨水），以增强直线的冲击力。最终获得一道笔直的刀光。\r
\r
![image.png](image%2026.png)\r
\r
![image.png](image%2027.png)\r
\r
![image.png](image%2028.png)\r
\r
- 在曲线刀光的基础上添加发光武器模型，并根据特效路径依次添加一些投掷效果。最终结果是一个增强版的刀光效果。\r
\r
![image.png](image%2029.png)\r
\r
# 4 Niagara-地面扩散\r
\r
- Niagara 系统主要生成带有材质的黑色粒子。\r
- 通过采样不同的纹理，营造丰富的层次感。\r
\r
![image.png](image%2030.png)\r
\r
![image.png](image%2031.png)\r
\r
- 粒子主要分为地面扩散（尘土）和向上喷射（烟雾）两类，通过地面扩散的痕迹来模拟水墨的感觉。\r
\r
![image.png](image%2032.png)\r
\r
- 其他地面效果采用相同的方法，增加粒子的生成数量和范围，结合小点效果和墨迹飞溅形状，以产生更明显的效果。\r
\r
![image.png](image%2033.png)\r
\r
![image.png](image%2034.png)\r
\r
- **大规模地面裂缝效果 = 墨水 + 黑色光烟 + 上升烟雾 + 震动石块 + 飞溅精灵 + 屏幕效果。**\r
\r
![image.png](image%2035.png)\r
\r
![image.png](image%2036.png)\r
\r
![image.png](image%2037.png)\r
\r
# 5 Niagara-凝聚\r
\r
- 在范围内随机初始化对象，并将它们移向中心点。\r
\r
![image.png](image%2038.png)\r
\r
- 使用波动材质进行闪烁，组合后得到以下效果。\r
\r
![image.png](image%2039.png)\r
\r
# 6 动画与后处理\r
\r
- 通过插槽和通知将特效插入到角色动画中。\r
- 之前创建的动画分为两种类型，一种需要绑定到特定骨骼。另一种方法是在动画触发时根据主体的位置来确定相对的固定播放位置。\r
\r
![image.png](image%2040.png)\r
\r
- 动画设置\r
\r
![image.png](image%2041.png)\r
\r
- 过场动画设置\r
\r
![image.png](image%2042.png)\r
\r
- 最后，使用体积处理进行后处理。在发出强力一击时添加墨迹和模糊屏幕效果。\r
\r
![image.png](image%2043.png)\r
`,tC={"unreal-stylized-world":{zh:WT,en:JT},"maya-plugin":{zh:qT,en:IT},"stylized-road-material":{zh:KT,en:YT},"rigging-animation":{zh:FT,en:XT},"unity-sdf-shader":{zh:ZT,en:QT},"houdini-lightning":{zh:GT,en:HT},"houdini-cluster":{zh:PT,en:VT},"unreal-vfx":{zh:eC,en:$T},"houdini-tower":{zh:NT,en:_T}},M0=/^!\[(.*?)\]\((.*?)\)$/,D0=/^@\[video(?::\s*(.*?))?\]\((.*?)\)$/,R0=/^(#{1,6})\s+(.+)$/,Ru=/^\s*-\s+(.+)$/,ku=/^\s*\d+\.\s+(.+)$/,nC=/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)]+)/g;function no(a){return a.replace(/^\s*>\s?/,"").trimEnd()}function aC(a){const r=no(a).trim();return!r||r==="<aside>"||r==="</aside>"||M0.test(r)||D0.test(r)||R0.test(r)||Ru.test(r)||ku.test(r)}function iC(a){const r=a.replace(/\r\n/g,`
`).split(`
`),l=[];for(let o=0;o<r.length;){const u=no(r[o]).trim();if(!u||u==="<aside>"||u==="</aside>"){o+=1;continue}const m=u.match(M0);if(m){l.push({type:"image",alt:m[1],src:m[2]}),o+=1;continue}const h=u.match(D0);if(h){l.push({type:"video",caption:h[1]??"",src:h[2]}),o+=1;continue}const p=u.match(R0);if(p){l.push({type:"heading",level:p[1].length,text:p[2].replace(/^\*\*|\*\*$/g,"")}),o+=1;continue}const y=u.match(Ru),f=u.match(ku);if(y||f){const b=!!f,w=[];for(;o<r.length;){const M=no(r[o]).trim().match(b?ku:Ru);if(!M)break;w.push(M[1]),o+=1}l.push({type:"list",ordered:b,items:w});continue}const v=[u];for(o+=1;o<r.length&&!aC(r[o]);)v.push(no(r[o]).trim()),o+=1;l.push({type:"paragraph",text:v.join(" ")})}return l}function rC(a){let r=a;for(let u=0;u<2;u+=1)try{r=decodeURIComponent(r)}catch{break}if(r==="image.png")return"/media/notion/image-000.webp";if(r==="texture.png")return"/media/notion/texture.webp";if(r==="PixPin_2024-11-13_18-17-55.gif")return"/media/notion/vfx-fluctuation.gif";const l=r.match(/^image (\d+)\.png$/);if(l)return`/media/notion/image-${l[1]}.webp`;const o=r.match(/^图片(\d+)\.png$/);return o?`/media/notion/cover-${o[1]}.webp`:a}function su(a){return a.split(nC).filter(Boolean).map((r,l)=>{if(r.startsWith("`")&&r.endsWith("`"))return S.jsx("code",{children:r.slice(1,-1)},l);if(r.startsWith("**")&&r.endsWith("**"))return S.jsx("strong",{children:r.slice(2,-2)},l);const o=r.match(/^\[([^\]]+)\]\(([^)]+)\)$/);return o?S.jsx("a",{href:o[2],target:"_blank",rel:"noreferrer",children:o[1]},l):/^https?:\/\//.test(r)?S.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:r},l):r})}function od({markdown:a,title:r}){const l=iC(a),o=l.findIndex(u=>u.type==="heading"&&u.level===1);return S.jsx("div",{className:"notion-story",children:l.map((u,m)=>{if(m===o)return null;if(u.type==="image")return S.jsx("figure",{children:S.jsx("img",{src:rC(u.src),alt:u.alt||r,loading:"lazy"})},`${u.src}-${m}`);if(u.type==="video")return S.jsxs("figure",{className:"story-video",children:[S.jsx("video",{src:u.src,controls:!0,preload:"metadata",playsInline:!0}),u.caption&&S.jsx("figcaption",{children:u.caption})]},`${u.src}-${m}`);if(u.type==="heading"){const h=u.level<=2?"h3":"h4";return S.jsx(h,{children:su(u.text)},m)}if(u.type==="list"){const h=u.ordered?"ol":"ul";return S.jsx(h,{children:u.items.map((p,y)=>S.jsx("li",{children:su(p)},`${p}-${y}`))},m)}return S.jsx("p",{children:su(u.text)},m)})})}const sC=[{id:"moss",name:"Moss Courier",zh:"外套角色",en:"Stylized courier"},{id:"aster",name:"Aster Runner",zh:"运动服角色",en:"Athletic character"},{id:"cobalt",name:"Cobalt Sentinel",zh:"人形机器人",en:"Humanoid robot"}],oC=[{id:"dance",zh:"首段舞蹈 · 12 秒",en:"Indoor dance · 12 s"},{id:"combat",zh:"正面武术 · 7 秒",en:"Frontal martial arts · 7 s"}],Lg="/media/repositories/animation-aigc-lab";function lC({locale:a}){return S.jsx("section",{className:"animation-aigc-showcase","aria-label":a==="zh"?"三个角色、两种动作":"Three characters, two motions",children:sC.map(r=>S.jsxs("section",{children:[S.jsxs("h3",{children:[r.name," ",S.jsxs("span",{children:["· ",r[a]]})]}),S.jsx("div",{className:"animation-aigc-pair",children:oC.map(l=>S.jsxs("figure",{children:[S.jsx("video",{controls:!0,playsInline:!0,preload:"none",poster:`${Lg}/${r.id}-${l.id}.webp`,src:`${Lg}/${r.id}-${l.id}.mp4`,"aria-label":`${r.name} · ${l[a]}`}),S.jsx("figcaption",{children:l[a]})]},l.id))})]},r.id))})}const cC=JSON.parse('{"animation":{"sessionId":"formal-crowd-200-animation-20260831-165343","conditions":{"sourceRevision":"d1b2455","presetId":"crowd-200-animation","map":"L_ShooterPerf","seed":1337,"targetAgentCount":200,"rhiName":"D3D12","warmupSeconds":5,"measurementSeconds":15,"environment":{"cpu":"13th Gen Intel(R) Core(TM) i7-13700F","gpu":"NVIDIA GeForce RTX 4080","gpuDriverInternal":"32.0.15.9186","gpuDriverUser":"591.86","gpuVendorId":4318,"gpuDeviceId":9988,"os":"10.0.26200.1.256.64bit","resolutionX":1280,"resolutionY":720,"windowed":true}},"metrics":[{"metric":"csvAnimationTimeMs","statistic":"mean","label":{"zh":"动画平均耗时","en":"Animation mean"},"unit":"ms","baseline":15.17960918727914,"optimized":10.989284935897432,"changePercent":-27.604954776393686},{"metric":"csvAnimationTimeMs","statistic":"p95","label":{"zh":"动画 P95","en":"Animation P95"},"unit":"ms","baseline":18.0835,"optimized":12.7786,"changePercent":-29.33558216053308},{"metric":"frameTimeMs","statistic":"p95","label":{"zh":"整帧 P95","en":"Frame P95"},"unit":"ms","baseline":65.1697963476181,"optimized":58.480098843574524,"changePercent":-10.265027480461175}],"quality":{"possessedAIPawnCount":{"Baseline":200,"Optimized":200},"navMovingAgentCount":{"Baseline":184.8671586715867,"Optimized":185.9503311258278},"animationFullRateProtectedCount":{"Baseline":0,"Optimized":61.83112582781457},"animationPostProcessDisabledCount":{"Baseline":0,"Optimized":26.28205128205128}},"runs":[{"runId":"formal-crowd-200-animation-20260831-165343-run-01-baseline","variant":"Baseline","sampleCount":271,"metrics":{"animationFullRateProtectedCount":{"sampleCount":271,"mean":0,"p95":0,"min":0,"max":0},"possessedAIPawnCount":{"sampleCount":271,"mean":200,"p95":200,"min":200,"max":200},"csvAnimationTimeMs":{"sampleCount":271,"mean":15.843934686346874,"p95":20.0324,"min":12.6265,"max":25.3132},"navMovingAgentCount":{"sampleCount":271,"mean":184.8671586715867,"p95":191,"min":176,"max":192},"animationPostProcessDisabledCount":{"sampleCount":271,"mean":0,"p95":0,"min":0,"max":0},"frameTimeMs":{"sampleCount":271,"mean":55.51807418795529,"p95":72.07009941339493,"min":43.953102082014084,"max":84.81340110301971}},"summarySha256":"12bb08fd9fdbcbfd2e73632b82d168c003326eaffbe5068b4c4e93e3eeefc92b","csvSha256":"f720a0549b65c15168b053e751d2469a7b53636a1234c7d59279428d25b7597b"},{"runId":"formal-crowd-200-animation-20260831-165343-run-02-optimized","variant":"Optimized","sampleCount":313,"metrics":{"animationFullRateProtectedCount":{"sampleCount":313,"mean":61.61980830670927,"p95":66,"min":56,"max":67},"possessedAIPawnCount":{"sampleCount":313,"mean":200,"p95":200,"min":200,"max":200},"csvAnimationTimeMs":{"sampleCount":313,"mean":10.818294568690096,"p95":12.6556,"min":8.3696,"max":18.8459},"navMovingAgentCount":{"sampleCount":313,"mean":187.0223642172524,"p95":193,"min":177,"max":195},"animationPostProcessDisabledCount":{"sampleCount":313,"mean":26.536741214057507,"p95":32,"min":19,"max":33},"frameTimeMs":{"sampleCount":313,"mean":48.01032651727573,"p95":58.480098843574524,"min":39.24209997057915,"max":81.2705010175705}},"summarySha256":"ba50447a0754230587ec48c4ae65f4178cbc2f576980d43d7e77925398b8172d","csvSha256":"2b2f66159eb8b7e084d8c126b791d2051dd25152b4bf7bb2cd57a7348c799286"},{"runId":"formal-crowd-200-animation-20260831-165343-run-03-optimized","variant":"Optimized","sampleCount":312,"metrics":{"animationFullRateProtectedCount":{"sampleCount":312,"mean":63.01923076923077,"p95":65,"min":59,"max":67},"possessedAIPawnCount":{"sampleCount":312,"mean":200,"p95":200,"min":200,"max":200},"csvAnimationTimeMs":{"sampleCount":312,"mean":10.989284935897432,"p95":12.7786,"min":8.7445,"max":17.9197},"navMovingAgentCount":{"sampleCount":312,"mean":183.7403846153846,"p95":188,"min":176,"max":192},"animationPostProcessDisabledCount":{"sampleCount":312,"mean":26.28205128205128,"p95":31,"min":19,"max":33},"frameTimeMs":{"sampleCount":312,"mean":48.14283011290125,"p95":58.205898851156235,"min":38.31550106406212,"max":81.05549961328506}},"summarySha256":"a9446b5be83d0e4fa0c0513f8bf652ed14802368402732db87fa5ceeb6a9ed7d","csvSha256":"cd82afabcb95860b3008b46e0465b69038516c0f2aad70d225dd517e316c64f1"},{"runId":"formal-crowd-200-animation-20260831-165343-run-04-baseline","variant":"Baseline","sampleCount":283,"metrics":{"animationFullRateProtectedCount":{"sampleCount":283,"mean":0,"p95":0,"min":0,"max":0},"possessedAIPawnCount":{"sampleCount":283,"mean":200,"p95":200,"min":200,"max":200},"csvAnimationTimeMs":{"sampleCount":283,"mean":15.17960918727914,"p95":18.063,"min":12.5876,"max":23.6251},"navMovingAgentCount":{"sampleCount":283,"mean":185.98939929328623,"p95":191,"min":178,"max":194},"animationPostProcessDisabledCount":{"sampleCount":283,"mean":0,"p95":0,"min":0,"max":0},"frameTimeMs":{"sampleCount":283,"mean":53.14202506634877,"p95":63.06689977645874,"min":43.789900839328766,"max":76.7986997961998}},"summarySha256":"f1b678a6167e0606296b2edf610d913a9bb642ea99a629d342e326858d6f3221","csvSha256":"435fcc10e2a1b918408061e6e6385c2388b0f88ce8a45a3dd4a4208fedc3e653"},{"runId":"formal-crowd-200-animation-20260831-165343-run-05-baseline","variant":"Baseline","sampleCount":280,"metrics":{"animationFullRateProtectedCount":{"sampleCount":280,"mean":0,"p95":0,"min":0,"max":0},"possessedAIPawnCount":{"sampleCount":280,"mean":200,"p95":200,"min":200,"max":200},"csvAnimationTimeMs":{"sampleCount":280,"mean":15.158002857142852,"p95":18.0835,"min":12.4403,"max":24.4416},"navMovingAgentCount":{"sampleCount":280,"mean":183.19642857142858,"p95":188,"min":173,"max":190},"animationPostProcessDisabledCount":{"sampleCount":280,"mean":0,"p95":0,"min":0,"max":0},"frameTimeMs":{"sampleCount":280,"mean":53.591944303895744,"p95":65.1697963476181,"min":43.690696358680725,"max":79.99490201473236}},"summarySha256":"46014375b7d76fabe7ff1b7eb85df76270e5169c61aa485d9c99a7c93c6bc0d5","csvSha256":"4134c8ba93f4b2000ff8639aeb36c1b11b79823b1a69da299d0f6c969750efdc"},{"runId":"formal-crowd-200-animation-20260831-165343-run-06-optimized","variant":"Optimized","sampleCount":302,"metrics":{"animationFullRateProtectedCount":{"sampleCount":302,"mean":61.83112582781457,"p95":64,"min":59,"max":65},"possessedAIPawnCount":{"sampleCount":302,"mean":200,"p95":200,"min":200,"max":200},"csvAnimationTimeMs":{"sampleCount":302,"mean":11.202510596026489,"p95":13.4434,"min":8.9452,"max":18.1323},"navMovingAgentCount":{"sampleCount":302,"mean":185.9503311258278,"p95":191,"min":177,"max":193},"animationPostProcessDisabledCount":{"sampleCount":302,"mean":26.25496688741722,"p95":33,"min":18,"max":35},"frameTimeMs":{"sampleCount":302,"mean":49.755924449160396,"p95":62.47600167989731,"min":39.654698222875595,"max":76.74530148506165}},"summarySha256":"ee6f3f4d557b535fcca587d9e24fd6fdd8d826ca1cbc3d1660e5e2fcedc87ce6","csvSha256":"0b2657325953bcbe59be8f1a87489125ef3e831295535f9297672db77d1e5c44"}]},"hud":{"sessionId":"formal-hero-arena-hud-refresh-20260831-203159","conditions":{"sourceRevision":"712a1cd","presetId":"hero-arena-hud-refresh","map":"L_Convolution_Blockout","seed":1337,"targetAgentCount":9,"rhiName":"D3D12","warmupSeconds":8,"measurementSeconds":10,"environment":{"cpu":"13th Gen Intel(R) Core(TM) i7-13700F","gpu":"NVIDIA GeForce RTX 4080","gpuDriverInternal":"32.0.15.9186","gpuDriverUser":"591.86","gpuVendorId":4318,"gpuDeviceId":9988,"os":"10.0.26200.1.256.64bit","resolutionX":1280,"resolutionY":720,"windowed":true}},"metrics":[{"metric":"csvHeroArenaHUDRefreshTimeMs","statistic":"mean","label":{"zh":"HUD 刷新平均耗时","en":"HUD refresh mean"},"unit":"ms","baseline":0.062023869104908654,"optimized":0.005739769452449568,"changePercent":-90.74587004119142},{"metric":"csvUITimeMs","statistic":"mean","label":{"zh":"UI 总平均耗时","en":"UI total mean"},"unit":"ms","baseline":1.6659563868613176,"optimized":1.5535463016330457,"changePercent":-6.747480673251827},{"metric":"frameTimeMs","statistic":"p95","label":{"zh":"整帧 P95","en":"Frame P95"},"unit":"ms","baseline":11.26759871840477,"optimized":11.242400854825974,"changePercent":-0.22363117651357234}],"quality":{"possessedAIPawnCount":{"Baseline":9,"Optimized":9},"csvHeroArenaHUDRefreshCountPerSecond":{"Baseline":103.9,"Optimized":9.6}},"runs":[{"runId":"formal-hero-arena-hud-refresh-20260831-203159-run-01-baseline","variant":"Baseline","sampleCount":1096,"metrics":{"csvUITimeMs":{"sampleCount":1096,"mean":1.6659563868613176,"p95":2.2962,"min":1.1024,"max":3.433},"csvHeroArenaHUDRefreshCountPerSecond":{"sampleCount":1,"mean":109.6,"p95":109.6,"min":109.6,"max":109.6},"possessedAIPawnCount":{"sampleCount":1096,"mean":8.989051094890511,"p95":9,"min":8,"max":9},"csvHeroArenaHUDRefreshTimeMs":{"sampleCount":1096,"mean":0.059192244525547395,"p95":0.0912,"min":0.0345,"max":0.2342},"frameTimeMs":{"sampleCount":1096,"mean":9.128662223934475,"p95":10.660100728273392,"min":6.913401186466217,"max":117.50639975070953}},"summarySha256":"e2c01eb3ad6010c5c5f708fc07f52cc5ae783de296b621a2be971d188af90c80","csvSha256":"0b6a27cf15b9d1af64296fd814829439e49a0784574ccb7e5878bb5548960aa7"},{"runId":"formal-hero-arena-hud-refresh-20260831-203159-run-02-optimized","variant":"Optimized","sampleCount":1041,"metrics":{"csvUITimeMs":{"sampleCount":1041,"mean":1.5535463016330457,"p95":2.1256,"min":0.9224,"max":3.4201},"csvHeroArenaHUDRefreshCountPerSecond":{"sampleCount":1,"mean":9.6,"p95":9.6,"min":9.6,"max":9.6},"possessedAIPawnCount":{"sampleCount":1041,"mean":9,"p95":9,"min":9,"max":9},"csvHeroArenaHUDRefreshTimeMs":{"sampleCount":1041,"mean":0.005739769452449568,"p95":0.0562,"min":0,"max":0.1538},"frameTimeMs":{"sampleCount":1041,"mean":9.607442460531917,"p95":11.28220185637474,"min":6.767198443412781,"max":87.0652049779892}},"summarySha256":"e8fd64d094415870512343e918ef07835ecc6f1e6a003ed54f7e665308f9bd0b","csvSha256":"73e876de6cd03019f6d92eaf7432bc5efcbf34721efa1e03d21b277a1acd5855"},{"runId":"formal-hero-arena-hud-refresh-20260831-203159-run-03-optimized","variant":"Optimized","sampleCount":1065,"metrics":{"csvUITimeMs":{"sampleCount":1065,"mean":1.6210412206572775,"p95":2.3061,"min":0.959,"max":4.6654},"csvHeroArenaHUDRefreshCountPerSecond":{"sampleCount":1,"mean":9.6,"p95":9.6,"min":9.6,"max":9.6},"possessedAIPawnCount":{"sampleCount":1065,"mean":9,"p95":9,"min":9,"max":9},"csvHeroArenaHUDRefreshTimeMs":{"sampleCount":1065,"mean":0.005804788732394369,"p95":0.0568,"min":0,"max":0.1282},"frameTimeMs":{"sampleCount":1065,"mean":9.394750513241325,"p95":11.242400854825974,"min":7.073402404785156,"max":84.3258947134018}},"summarySha256":"542666db8aec92416a98a1793bfd4cfc4ae7734e9ad61198d508b0f53bf8ba13","csvSha256":"32167020b4d8b0a0651dc59b2f79d1e2c02eafb769b801e29f0dab2ab7dea2f5"},{"runId":"formal-hero-arena-hud-refresh-20260831-203159-run-04-baseline","variant":"Baseline","sampleCount":1000,"metrics":{"csvUITimeMs":{"sampleCount":1000,"mean":1.7033154999999998,"p95":2.2958,"min":1.0177,"max":3.9479},"csvHeroArenaHUDRefreshCountPerSecond":{"sampleCount":1,"mean":100,"p95":100,"min":100,"max":100},"possessedAIPawnCount":{"sampleCount":1000,"mean":9,"p95":9,"min":9,"max":9},"csvHeroArenaHUDRefreshTimeMs":{"sampleCount":1000,"mean":0.06500280000000001,"p95":0.0987,"min":0.0366,"max":0.6722},"frameTimeMs":{"sampleCount":1000,"mean":10.00766310468316,"p95":11.751599609851837,"min":7.7052004635334015,"max":118.20590496063232}},"summarySha256":"5e08897f88d31748c4555a2d83d4b46cde719f32d67468b1a055df984902dd80","csvSha256":"edb5806b61ec3684960287207917ac3bcb4255a314519577d6efe4f8a3142d8b"},{"runId":"formal-hero-arena-hud-refresh-20260831-203159-run-05-baseline","variant":"Baseline","sampleCount":1039,"metrics":{"csvUITimeMs":{"sampleCount":1039,"mean":1.630626948989412,"p95":2.2123,"min":1.017,"max":3.1122},"csvHeroArenaHUDRefreshCountPerSecond":{"sampleCount":1,"mean":103.9,"p95":103.9,"min":103.9,"max":103.9},"possessedAIPawnCount":{"sampleCount":1039,"mean":9,"p95":9,"min":9,"max":9},"csvHeroArenaHUDRefreshTimeMs":{"sampleCount":1039,"mean":0.062023869104908654,"p95":0.0967,"min":0.0355,"max":0.2028},"frameTimeMs":{"sampleCount":1039,"mean":9.628997877225839,"p95":11.26759871840477,"min":7.142499089241028,"max":137.17089593410492}},"summarySha256":"560d184b83705443014f7b48a1724c372988b2ce5fc3d5ebfdaa8c52d2b94f4b","csvSha256":"636cc6beaf20b11208520c7b135736c6c8b91336ba52d9d819a8fb4df28b9206"},{"runId":"formal-hero-arena-hud-refresh-20260831-203159-run-06-optimized","variant":"Optimized","sampleCount":1079,"metrics":{"csvUITimeMs":{"sampleCount":1079,"mean":1.5192962928637626,"p95":2.051,"min":0.9699,"max":3.1721},"csvHeroArenaHUDRefreshCountPerSecond":{"sampleCount":1,"mean":9.6,"p95":9.6,"min":9.6,"max":9.6},"possessedAIPawnCount":{"sampleCount":1079,"mean":9,"p95":9,"min":9,"max":9},"csvHeroArenaHUDRefreshTimeMs":{"sampleCount":1079,"mean":0.005529101019462466,"p95":0.0532,"min":0,"max":0.1364},"frameTimeMs":{"sampleCount":1079,"mean":9.272901671036623,"p95":11.176198720932007,"min":6.800901144742966,"max":77.37450301647186}},"summarySha256":"84dc40e5cef25b0bd87586fb2efeba6218c56208d3883d5e7b63eff5a90de904","csvSha256":"102fe09e2c3e5a42975c87440accdffa239315dd07c9019cd98eca0f827e37d2"}]}}'),uC={cases:cC};function Og({study:a,locale:r}){const l=uC.cases[a],o=r==="zh",u=m=>m.toFixed(m<.1?4:2);return S.jsxs("section",{className:"performance-evidence","aria-label":o?"实际运行结果对比":"Recorded runtime comparison",children:[S.jsxs("header",{children:[S.jsx("p",{className:"performance-kicker",children:o?"同机实测 · 改动前 3 次 / 改动后 3 次":"Same machine · 3 baseline / 3 optimized runs"}),S.jsx("h3",{children:a==="animation"?o?"200 个角色，按距离分配动画开销":"Animation budgets for 200 characters":o?"HUD 刷新变快，整帧改善有多少？":"A faster HUD. What changes for the frame?"}),S.jsx("p",{children:o?"下方为 2026-08-31 的运行记录；各组三次统计值取中位数。":"Recorded on 2026-08-31. Each value is the median of three per-run statistics."})]}),S.jsx("div",{className:"performance-metrics",children:l.metrics.map(m=>S.jsxs("figure",{children:[S.jsxs("figcaption",{children:[m.label[r]," ",S.jsxs("strong",{className:Math.abs(m.changePercent)<1?"is-flat":"",children:[m.changePercent.toFixed(1),"%",Math.abs(m.changePercent)<1&&S.jsx("small",{children:o?"基本持平":"Essentially unchanged"})]})]}),["baseline","optimized"].map(h=>S.jsxs("div",{className:`performance-bar-row ${h}`,children:[S.jsx("span",{children:h==="baseline"?o?"改动前":"Before":o?"改动后":"After"}),S.jsx("div",{className:"performance-bar-track","aria-hidden":"true",children:S.jsx("div",{style:{width:`${m[h]/Math.max(m.baseline,m.optimized)*100}%`}})}),S.jsxs("b",{children:[u(m[h]),S.jsx("small",{children:" ms"})]})]},h))]},`${m.metric}-${m.statistic}`))}),S.jsx("p",{className:"performance-reading-note",children:o?"每项使用独立的零起点刻度；耗时越低越好。P95 表示每次采样中 95% 的帧不超过该耗时，再对三次结果取中位数。":"Each metric has its own zero-based scale. Lower is better. P95 is calculated per run, then the median of three runs is shown."}),a==="animation"&&S.jsxs("ol",{className:"performance-policy","aria-label":o?"动画更新距离策略":"Distance-based animation policy",children:[S.jsxs("li",{children:[S.jsx("span",{children:o?"本地角色 / 12 m 内":"Local player / within 12 m"}),S.jsx("strong",{children:o?"保留完整更新":"Full updates"}),S.jsx("p",{children:o?"近景动作与玩家控制优先。":"Prioritize the player and nearby motion."})]}),S.jsxs("li",{children:[S.jsx("span",{children:o?"12–24 m 非本地角色":"Non-local characters at 12–24 m"}),S.jsx("strong",{children:o?"启用 URO":"Enable URO"}),S.jsx("p",{children:o?"降低更新频率；不可见时仅更新 Montage。":"Reduce update frequency; tick only montages while hidden."})]}),S.jsxs("li",{children:[S.jsx("span",{children:o?"24 m 外非本地角色":"Non-local characters beyond 24 m"}),S.jsx("strong",{children:o?"关闭后处理动画":"Disable post-process animation"}),S.jsx("p",{children:o?"省去 FootPlant IK；本轮资产仅有 LOD0，未减少网格细节。":"Skip FootPlant IK. Current meshes have only LOD0; no mesh detail reduction."})]})]}),S.jsxs("details",{className:"performance-details",children:[S.jsx("summary",{children:o?"实验条件与六次采样":"Conditions and all six runs"}),S.jsxs("dl",{children:[S.jsxs("div",{children:[S.jsx("dt",{children:o?"硬件":"Hardware"}),S.jsx("dd",{children:"i7-13700F · RTX 4080"})]}),S.jsxs("div",{children:[S.jsx("dt",{children:o?"环境":"Environment"}),S.jsx("dd",{children:"UE 5.7.4 · D3D12 · 1280 × 720"})]}),S.jsxs("div",{children:[S.jsx("dt",{children:o?"场景":"Scene"}),S.jsxs("dd",{children:[l.conditions.map," · ",l.conditions.targetAgentCount," AI · Seed ",l.conditions.seed]})]}),S.jsxs("div",{children:[S.jsx("dt",{children:o?"每轮时长":"Per run"}),S.jsx("dd",{children:o?`预热 ${l.conditions.warmupSeconds} s / 采样 ${l.conditions.measurementSeconds} s`:`${l.conditions.warmupSeconds} s warmup / ${l.conditions.measurementSeconds} s capture`})]}),S.jsxs("div",{children:[S.jsx("dt",{children:o?"源码版本":"Source revision"}),S.jsx("dd",{children:S.jsx("code",{children:l.conditions.sourceRevision})})]})]}),S.jsx("div",{className:"performance-run-table",tabIndex:0,role:"region","aria-label":o?"六次采样明细，可横向滚动":"Six-run details, horizontally scrollable",children:S.jsxs("table",{children:[S.jsx("caption",{children:o?"ABBAAB 顺序；表中每行是一次运行的统计值。":"ABBAAB order; each row contains statistics from one run."}),S.jsx("thead",{children:S.jsxs("tr",{children:[S.jsx("th",{children:o?"运行":"Run"}),l.metrics.map(m=>S.jsxs("th",{children:[m.label[r]," (ms)"]},`${m.metric}-${m.statistic}`))]})}),S.jsx("tbody",{children:l.runs.map((m,h)=>S.jsxs("tr",{children:[S.jsxs("th",{scope:"row",children:[h+1," · ",m.variant==="Baseline"?o?"改动前":"Before":o?"改动后":"After"]}),l.metrics.map(p=>{const y=m.metrics;return S.jsx("td",{children:u(y[p.metric][p.statistic])},`${p.metric}-${p.statistic}`)})]},m.runId))})]})}),S.jsx("a",{href:"/media/repositories/lyra-hero-arena/performance-results.json",target:"_blank",rel:"noreferrer",children:o?"查看运行摘要与原文件指纹 ↗":"Run summaries and source hashes ↗"})]})]})}function dC({locale:a}){const r=a==="zh";return S.jsxs("section",{className:"animation-quality","aria-label":r?"动画质量实机对照":"Recorded animation quality comparison",children:[S.jsx("p",{className:"performance-kicker",children:r?"2026-10-17 · 200 AI 实机对照":"2026-10-17 · 200 AI capture"}),S.jsx("h3",{children:r?"完整更新与距离分级，同机位并排展示":"Full updates and distance-based updates, side by side"}),S.jsx("video",{controls:!0,playsInline:!0,preload:"metadata",poster:"/media/repositories/lyra-hero-arena/animation-quality-poster.jpg","aria-label":r?"200 AI 动画质量并排对照":"200 AI animation comparison",src:"/media/repositories/lyra-hero-arena/animation-quality.mp4"}),S.jsx("p",{children:r?"全景、近景及全景局部放大，共 15 秒。两次独立单机运行，按游戏时间回放；下方性能数字来自另一次独立采样。":"Wide, close and enlarged wide views, 15 seconds. Independent standalone runs replayed by game time. The performance figures below come from a separate capture."})]})}function hC({locale:a}){const r=a==="zh";return S.jsxs("section",{className:"animation-quality hud-quality","aria-label":r?"战术 HUD 更新实机对照":"Recorded tactical HUD comparison",children:[S.jsx("p",{className:"performance-kicker",children:r?"2026-10-17 · 同组输入实机对照":"2026-10-17 · Matched input sequence"}),S.jsx("h3",{children:r?"减少重复刷新，关键提示独立触发":"Fewer repeated refreshes, separate critical notifications"}),S.jsx("video",{controls:!0,playsInline:!0,preload:"metadata",poster:"/media/repositories/lyra-hero-arena/hud-quality-poster.jpg","aria-label":r?"战术 HUD 每帧与分频更新对照":"Per-frame and throttled HUD updates",src:"/media/repositories/lyra-hero-arena/hud-quality.mp4"}),S.jsx("p",{children:r?"12.5 秒并排实机，附原生技能栏放大。相同窗口内状态刷新 370 次与 103 次；计数只表示该函数调用，不代表整帧性能。":"12.5 seconds of side-by-side footage with enlarged native skill bars. 370 and 103 state refresh calls in equal windows; these counts are not frame-time measurements."})]})}const Vg=[{image:"editor-before",zh:"修改前",en:"Before",value:"Y = 0.35",caption:{zh:"工程中的原始台阶。世界大纲选中 02 Training Step，右侧检查器显示位置。",en:"The original step, selected in the outliner with its position visible in the inspector."}},{image:"editor-after",zh:"保存后",en:"After save",value:"Y = 1.35",caption:{zh:"命令提交、撤销、重做并保存后，重新打开同一工程。台阶抬高，检查器与场景保持一致。",en:"The saved project reopened after apply, undo and redo. The raised step and inspector agree."}},{image:"player",zh:"独立运行",en:"Packaged player",value:"Windows Player",caption:{zh:"从打包目录启动 Player，读取包内场景与 C# 程序集，运行移动和跳跃输入。画面不带编辑器面板。",en:"The packaged player loads its scene and C# assembly, with movement and jump input. No editor panels are present."}}];function mC({locale:a}){const[r,l]=J.useState(0),o=Vg[r],u=a==="zh";return S.jsxs("section",{className:"noemancer-workflow","aria-labelledby":"noemancer-workflow-title",children:[S.jsxs("header",{children:[S.jsx("p",{children:u?"实际工程 · 2026-10-17 · D3D12":"Project capture · 2026-10-17 · D3D12"}),S.jsx("h3",{id:"noemancer-workflow-title",children:u?"一个台阶，从编辑到独立运行":"One platform, from editing to a player build"}),S.jsx("p",{children:u?"场景变更、中文 HUD 与 C# 玩法共用同一个工程。":"Scene changes, a Chinese HUD and C# gameplay in one project."})]}),S.jsx("div",{className:"noemancer-workflow-switch",role:"group","aria-label":u?"工作流画面":"Workflow views",children:Vg.map((m,h)=>S.jsxs("button",{type:"button","aria-pressed":r===h,onClick:()=>l(h),children:[S.jsxs("span",{"aria-hidden":"true",children:["0",h+1]}),m[a],S.jsx("small",{children:m.value})]},m.image))}),S.jsxs("figure",{children:[S.jsx("a",{href:`/media/repositories/noemancer-workflow/${o.image}.webp`,target:"_blank",rel:"noreferrer","aria-label":u?`${o.zh}：打开原尺寸画面`:`Open full-size ${o.en.toLowerCase()} image`,children:S.jsx("img",{src:`/media/repositories/noemancer-workflow/${o.image}.webp`,width:"1600",height:"900",alt:o.caption[a]})}),S.jsxs("figcaption",{"aria-live":"polite",children:[S.jsx("strong",{children:o.value}),o.caption[a]]})]}),S.jsxs("details",{children:[S.jsx("summary",{children:u?"修改如何校验与恢复":"Validation and recovery"}),S.jsxs("ol",{children:[S.jsx("li",{children:u?"预检查不修改场景；正式提交后，旧版本请求返回版本冲突。":"Dry-run leaves the scene untouched; a stale request is rejected after commit."}),S.jsx("li",{children:u?"撤销恢复完整场景，重做后保存；重新打开工程确认位置。":"Undo restores the complete scene; redo and save persist the change."}),S.jsx("li",{children:u?"HUD 的五个中文标签通过 UI 源文档事务保存并热应用。":"Five Chinese HUD labels are persisted and hot-applied through UI source transactions."})]}),S.jsx("p",{children:u?"画面来自原生 GPU 捕获。场景修改在独立命令会话完成，截图阶段连接当前编辑器选中目标；此组为流程截图，完整连续操作录像仍待补充。原工程保持不变，演示副本修正了环境 Sprite 元数据。":"Native GPU captures. Scene edits use an isolated command session; capture selection connects to the live editor. These are workflow stills; a continuous recording remains pending. The original project is unchanged; environment Sprite metadata was corrected in the demonstration copy."}),S.jsx("a",{href:"/media/repositories/noemancer-workflow/results.json",target:"_blank",rel:"noreferrer",children:u?"运行摘要与文件指纹 ↗":"Run summary and file hashes ↗"})]})]})}const fC=[{id:"all",zh:"全部作品",en:"All work"},{id:"engine-games",zh:"引擎与游戏",en:"Engines & games"},{id:"pipeline",zh:"工具管线",en:"Tool pipelines"},{id:"ai-agent",zh:"AIGC & Agent",en:"AIGC & Agent"},{id:"general-ta",zh:"通用技术美术技能",en:"General technical art"},{id:"other-tools",zh:"部分其他工具",en:"Selected other tools"}],Pg=new Map(["rez-studio-launcher","advanced-skeleton-python-refactor","art-pipeline-skill","maya-plugin","internship-art-pipeline","maya-garment-preparation","mayascope","mayacraft","asset-delivery-organizer","maya-scene-checker","blender-toolsmith-agent"].map((a,r)=>[a,r])),Hg=new Map(["ray-tracing-hardware","house-of-vampires","siggraph-physics-lab","noemancer","noemancer-software-rasterizer","aita-toon","aita-wind","aita-schooling","aita-cloth","aita-cosmos","aita-fog","aita-fracture","lyra-hero-arena","lyra-performance-lab","ue-performance-workbench","resonance-forge","unreal-asset-batch-auditor"].map((a,r)=>[a,r])),Gg=new Map(["als-director","animation-aigc-lab","artflow-agent","comfyui-production-nodes"].map((a,r)=>[a,r])),_g=new Map([["engine-games",0],["pipeline",1],["ai-agent",2],["general-ta",3],["other-tools",4]]);function pC(){const{locale:a}=mi(),r=U0()??!1,[l,o]=J.useState("all"),[u,m]=J.useState(null),h=J.useRef(null),p=J.useMemo(()=>[...LT.map(E=>({kind:"repository",id:E.id,category:E.category,title:E.title,label:Pt(E.categoryLabel,a),summary:Pt(E.summary,a),cover:E.cover,tags:E.tags,value:E})),...OT.map(E=>({kind:"visual",id:E.id,category:E.portfolioCategory,title:Pt(E.title,a),label:Pt(E.category,a),summary:Pt(E.summary,a),cover:E.cover,tags:E.tools,value:E})),...hT.map(E=>({kind:"project",id:E.id,category:E.portfolioCategory,title:E.title,label:Yn(E.category,a),summary:Yn(E.summary,a),cover:E.images[0].src,tags:E.stack,value:E}))].map((E,M)=>({item:E,sourceIndex:M})).sort((E,M)=>{const V=(_g.get(E.item.category)??Number.MAX_SAFE_INTEGER)-(_g.get(M.item.category)??Number.MAX_SAFE_INTEGER);return V!==0?V:E.item.category==="pipeline"?(Pg.get(E.item.id)??Number.MAX_SAFE_INTEGER)-(Pg.get(M.item.id)??Number.MAX_SAFE_INTEGER):E.item.category==="engine-games"?(Hg.get(E.item.id)??Number.MAX_SAFE_INTEGER)-(Hg.get(M.item.id)??Number.MAX_SAFE_INTEGER):E.item.category==="ai-agent"?(Gg.get(E.item.id)??Number.MAX_SAFE_INTEGER)-(Gg.get(M.item.id)??Number.MAX_SAFE_INTEGER):E.sourceIndex-M.sourceIndex}).map(({item:E})=>E),[a]),y=l==="all"?p:p.filter(w=>w.category===l),f=(w,E="replace")=>{const M=new URL(window.location.href);w?M.searchParams.set("work",w):M.searchParams.delete("work"),window.history[E==="push"?"pushState":"replaceState"]({},"",`${M.pathname}${M.search}${M.hash}`)},v=w=>{f(w.id,"push"),m(w)},b=()=>{f(null),m(null)};return J.useEffect(()=>{const w=()=>{const E=new URLSearchParams(window.location.search).get("work");E===Sn.id?m({kind:"repository",id:Sn.id,category:Sn.category,title:Sn.title,label:Pt(Sn.categoryLabel,a),summary:Pt(Sn.summary,a),cover:Sn.cover,tags:Sn.tags,value:Sn}):m(E?p.find(M=>M.id===E)??null:null)};return w(),window.addEventListener("popstate",w),()=>window.removeEventListener("popstate",w)},[p,a]),J.useEffect(()=>{const w=h.current;if(w)return u?(w.open||w.showModal(),w.scrollTop=0,document.body.classList.add("has-project-dialog")):(w.open&&w.close(),document.body.classList.remove("has-project-dialog")),()=>document.body.classList.remove("has-project-dialog")},[u]),S.jsxs("section",{id:"portfolio",className:"portfolio-gallery","aria-labelledby":"portfolio-title",children:[S.jsxs("header",{className:"portfolio-gallery-header",children:[S.jsxs("div",{children:[S.jsx("h2",{id:"portfolio-title",children:a==="zh"?"作品":"Work"}),S.jsx("span",{children:String(p.length).padStart(2,"0")})]}),S.jsx("p",{children:a==="zh"?"完整图文、演示与源码链接集中收录于各项目详情。":"Full case studies, demos, and source links are collected in each project detail."})]}),S.jsx("div",{className:"portfolio-filters",role:"group","aria-label":a==="zh"?"筛选作品":"Filter work",children:fC.map(w=>S.jsx("button",{type:"button","data-filter":w.id,className:l===w.id?"is-active":"","aria-pressed":l===w.id,onClick:()=>o(w.id),children:a==="zh"?w.zh:w.en},w.id))}),S.jsx("div",{className:"portfolio-grid",children:y.map(w=>S.jsxs(z0.button,{type:"button",className:"portfolio-tile","data-category":w.category,onClick:()=>v(w),whileHover:r?void 0:{y:-4},transition:{duration:.18},children:[S.jsx("figure",{children:S.jsx("img",{src:w.cover,alt:"",loading:"eager"})}),S.jsxs("div",{className:"portfolio-tile-copy",children:[S.jsx("small",{children:w.label}),S.jsx("h3",{children:w.title}),S.jsx("p",{children:w.summary}),S.jsx("div",{children:w.tags.slice(0,4).map(E=>S.jsx("span",{children:E},E))})]})]},`${w.kind}-${w.id}`))}),S.jsx("dialog",{ref:h,className:`project-dialog unified-dialog ${u?.kind==="visual"?"visual-work-dialog":""}`,onCancel:w=>{w.preventDefault(),b()},onClose:b,onClick:w=>{w.target===w.currentTarget&&b()},children:u&&S.jsx(gC,{item:u,locale:a,close:b})})]})}function gC({item:a,locale:r,close:l}){const o=U0()??!1;return S.jsxs(z0.article,{initial:o?!1:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.2},children:[S.jsx("button",{className:"project-dialog-close",type:"button",onClick:l,"aria-label":r==="zh"?"关闭项目详情":"Close project details",children:"×"}),S.jsxs("div",{className:"project-dialog-heading","data-work-id":a.id,children:[S.jsxs("p",{children:[a.label," · ",a.tags.join(" · ")]}),S.jsx("h2",{children:a.title}),S.jsx("p",{children:a.summary})]}),a.kind==="repository"&&S.jsx(yC,{work:a.value,locale:r}),a.kind==="visual"&&S.jsx(vC,{work:a.value,locale:r}),a.kind==="project"&&S.jsx(bC,{project:a.value,locale:r})]},`${a.kind}-${a.id}`)}function yC({work:a,locale:r}){const l=a.images?.filter(u=>u.src!==a.cover)??[],o=a.id==="noemancer"||a.id==="artflow-agent"||a.id==="ray-tracing-hardware"?"cover":"contain";return S.jsxs(S.Fragment,{children:[a.repositoryUrl&&S.jsxs("a",{className:"project-dialog-source",href:a.repositoryUrl,target:"_blank",rel:"noreferrer",children:[S.jsx("span",{children:r==="zh"?"查看 GitHub 仓库":"View GitHub repository"}),S.jsx("span",{"aria-hidden":"true",children:"↗"})]}),S.jsx(SC,{src:a.cover,alt:`${a.title} ${r==="zh"?"项目画面":"project view"}`,fit:o}),a.id==="lyra-performance-lab"&&S.jsxs(S.Fragment,{children:[S.jsx(dC,{locale:r}),S.jsx(Og,{study:"animation",locale:r})]}),a.id==="ue-performance-workbench"&&S.jsxs(S.Fragment,{children:[S.jsx(hC,{locale:r}),S.jsx(Og,{study:"hud",locale:r})]}),a.id==="animation-aigc-lab"&&S.jsx(lC,{locale:r}),a.id==="noemancer"&&S.jsx(mC,{locale:r}),S.jsx(od,{markdown:Pt(a.story,r),title:a.title}),l.length>0&&S.jsx(wC,{fit:"contain",images:l.map(u=>({src:u.src,alt:Pt(u.alt,r),caption:Pt(u.alt,r)}))})]})}function vC({work:a,locale:r}){return S.jsxs(S.Fragment,{children:[S.jsxs("a",{className:"project-dialog-source",href:a.artstationUrl,target:"_blank",rel:"noreferrer",children:[S.jsx("span",{children:r==="zh"?"查看原始 ArtStation 项目":"View the original ArtStation project"}),S.jsx("span",{"aria-hidden":"true",children:"↗"})]}),a.youtubeId&&S.jsx(k0,{youtubeId:a.youtubeId,title:Pt(a.title,r)}),S.jsx(od,{markdown:tC[a.id][r],title:Pt(a.title,r)})]})}function bC({project:a,locale:r}){return S.jsxs(S.Fragment,{children:[a.link&&S.jsxs("a",{className:"project-dialog-source",href:a.link.href,target:"_blank",rel:"noreferrer",children:[S.jsx("span",{children:Yn(a.link.label,r)}),S.jsx("span",{"aria-hidden":"true",children:"↗"})]}),a.youtubeId&&S.jsx(k0,{youtubeId:a.youtubeId,title:a.title}),Bg[a.id]?S.jsx(od,{markdown:Bg[a.id][r],title:a.title}):a.story&&S.jsxs("section",{className:"project-dialog-story",children:[S.jsx("h3",{children:Yn(a.story.title,r)}),S.jsx("p",{children:Yn(a.story.intro,r)}),S.jsx("h4",{children:r==="zh"?"玩法与特色":"Gameplay & Features"}),S.jsx("dl",{children:a.story.features.map(l=>S.jsxs("div",{children:[S.jsx("dt",{children:Yn(l.title,r)}),S.jsx("dd",{children:Yn(l.detail,r)})]},l.title.en))}),a.story.note&&S.jsx("p",{className:"project-dialog-note",children:Yn(a.story.note,r)})]})]})}function SC({src:a,alt:r,fit:l}){return S.jsx("figure",{className:`project-dialog-lead-media ${l==="contain"?"is-contain":""}`,children:S.jsx("img",{src:a,alt:r})})}function k0({youtubeId:a,title:r}){return S.jsx("div",{className:"project-dialog-video",children:S.jsx("iframe",{src:`https://www.youtube-nocookie.com/embed/${a}?rel=0`,title:`${r} demo video`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})})}function wC({images:a,fit:r="cover"}){return S.jsx("div",{className:`project-dialog-gallery ${r==="contain"?"is-contain":""}`,children:a.map(l=>S.jsxs("figure",{children:[S.jsx("img",{src:l.src,alt:l.alt,style:{objectPosition:l.position},loading:"lazy"}),l.caption&&S.jsx("figcaption",{children:l.caption})]},l.src))})}function AC(){const{locale:a,copy:r}=mi();return S.jsxs("div",{className:"site","data-locale":a,children:[S.jsx("a",{className:"skip-link",href:"#main",children:a==="zh"?"跳到主要内容":"Skip to main content"}),S.jsx("span",{id:"top"}),S.jsx(p1,{}),S.jsxs("main",{id:"main",children:[S.jsx(g1,{}),S.jsx(pC,{})]}),S.jsx(m1,{}),S.jsx("div",{className:"locale-status sr-only","aria-live":"polite",children:r.language.changed})]})}const TC={en:{meta:{title:"Lucas Shen | AI Tool-Pipeline TA & Engine Tools",description:"Games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines by Lucas Shen."},nav:{work:"Projects",practice:"Experience",links:"Links",aria:"Primary navigation"},language:{label:"Language",english:"English",changed:"Language changed to English."},hero:{role:"AI Tool-Pipeline TA & Engine Tool Development",primaryAction:"Selected projects"},personal:{intro:"My work spans games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines, with running builds, project captures, and implementation details.",storyAction:"About me",aboutTitle:"About me",aboutBody:["I’m Lucas, a technical artist from China. My path crosses industrial engineering, game development, realtime graphics, and production tools. That mix helps me move between an artist’s problem and the system behind it.","I enjoy reverse-engineering workflows, turning repeated work into tools, and testing where AI is genuinely useful. Outside the toolchain, I keep learning through games, animation, music, graphics experiments, and public documentation."],traits:[{title:"What I work on",detail:"DCC tools, AI workflows, realtime graphics, games, and animation."},{title:"How I learn",detail:"Build a real workflow, inspect the evidence, then improve the system."},{title:"How I collaborate",detail:"Keep creative decisions human and make repeated production steps dependable."}],linksTitle:"Public channels",linksIntro:"Code, visual work, demos, and ongoing notes live across these profiles.",social:[{name:"GitHub",detail:"Code, tools, and public engineering evidence.",href:"https://github.com/Ubik42",mark:"GH"},{name:"Visual work",detail:"Realtime graphics, materials, shaders, rigging, and procedural work.",href:"#visual-work",mark:"TA"},{name:"Bilibili",detail:"Tool demos, tutorials, and longer videos.",href:"https://space.bilibili.com/12367861?spm_id_from=333.1007.0.0",mark:"Bi"},{name:"Xiaohongshu",detail:"Notes, resources, and everyday discoveries.",href:"https://www.xiaohongshu.com/user/profile/670526b2000000001e001891",mark:"RED"}]},practice:{title:"Experience and education",items:[{period:"2026.03 – 2026.08",title:"AI Tool Technical Artist Intern",place:"Tencent Photon",detail:"Built AI-assisted production tools across DCC, engine, and design workflows, with explicit execution and review boundaries."},{period:"2025.08 – 2027.05",title:"M.S. in EAE, Technical Art",place:"University of Utah",detail:"Studying realtime graphics, tools, pipelines, and collaborative game production in Entertainment Arts and Engineering."},{period:"2020.09 – 2024.06",title:"B.S. in Industrial Engineering",place:"Shanghai Jiao Tong University",detail:"Built a systems and optimization foundation, then applied it through game systems, UE5 client work, and industrial digital twins."}]},footer:{copyright:"Lucas (Yuyan) Shen / 沈裕焱"}},zh:{meta:{title:"沈裕焱 | AI 工具管线 TA & 引擎工具开发",description:"沈裕焱的游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线作品集。"},nav:{work:"作品",practice:"经历",links:"链接",aria:"主导航"},language:{label:"语言",english:"English",changed:"语言已切换为中文。"},hero:{role:"AI 工具管线 TA & 引擎工具开发",primaryAction:"项目作品"},personal:{intro:"作品覆盖游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线，包含运行画面、项目素材和具体实现。",storyAction:"关于我",aboutTitle:"关于我",aboutBody:["我是沈裕焱，一名来自中国的技术美术。我的经历横跨工业工程、游戏开发、实时图形和生产工具，因此我习惯同时理解创作者遇到的问题，以及问题背后的代码与系统。","我喜欢拆解工作流，把重复劳动做成工具，也会认真验证 AI 适合参与哪一步。工具之外，我持续从游戏、动画、音乐、图形实验和公开文档中学习。"],traits:[{title:"我在做什么",detail:"DCC 工具、AI 工作流、实时图形、游戏与动画。"},{title:"我的学习方式",detail:"先做出真实工作流，检查证据，再改进整个系统。"},{title:"我的协作方式",detail:"让创作决定留给人，让重复的生产环节变得可靠。"}],linksTitle:"公开渠道",linksIntro:"代码、视觉作品、演示和持续记录分布在这些公开主页中。",social:[{name:"GitHub",detail:"代码、工具与公开工程证据。",href:"https://github.com/Ubik42",mark:"GH"},{name:"视觉作品",detail:"实时场景、材质、Shader、绑定与程序化内容。",href:"#visual-work",mark:"TA"},{name:"哔哩哔哩",detail:"工具演示、教程和长视频。",href:"https://space.bilibili.com/12367861?spm_id_from=333.1007.0.0",mark:"Bi"},{name:"小红书",detail:"笔记、资源和日常发现。",href:"https://www.xiaohongshu.com/user/profile/670526b2000000001e001891",mark:"RED"}]},practice:{title:"经历与教育",items:[{period:"2026.03 – 2026.08",title:"AI 工具技术美术实习生",place:"腾讯光子",detail:"围绕 DCC、引擎与设计流程开发 AI 辅助美术生产工具，覆盖工具接入、执行边界与人工审查。"},{period:"2025.08 – 2027.05",title:"EAE 技术美术硕士",place:"犹他大学",detail:"在 Entertainment Arts and Engineering 项目中学习实时图形、工具、管线与协作式游戏生产。"},{period:"2020.09 – 2024.06",title:"工业工程学士",place:"上海交通大学",detail:"建立优化与系统方法基础，并逐步扩展到游戏系统、UE5 客户端与工业数字孪生开发。"}]},footer:{copyright:"Lucas (Yuyan) Shen / 沈裕焱"}}},j0="portfolio.locale.v2";function CC(){try{const a=window.localStorage.getItem(j0);if(a==="en"||a==="zh")return a}catch{}return"zh"}function xC(a){const r=document.querySelector('meta[name="description"]');r&&(r.content=a)}function EC({children:a}){const[r,l]=J.useState(CC),o=TC[r];J.useEffect(()=>{document.documentElement.lang=r==="zh"?"zh-CN":"en",document.title=o.meta.title,xC(o.meta.description);try{window.localStorage.setItem(j0,r)}catch{}},[o.meta.description,o.meta.title,r]);const u=J.useMemo(()=>({locale:r,copy:o,setLocale(m){J.startTransition(()=>l(m))}}),[o,r]);return S.jsx(Ng,{value:u,children:a})}h1.createRoot(document.getElementById("root")).render(S.jsx(J.StrictMode,{children:S.jsx(EC,{children:S.jsx(AC,{})})}));
//# sourceMappingURL=index-BAztF6Jr-portfolio-refresh.js.map
