(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function o(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(u){if(u.ep)return;u.ep=!0;const f=o(u);fetch(u.href,f)}})();var Nc={exports:{}},ur={};var up;function e1(){if(up)return ur;up=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(l,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var g in u)g!=="key"&&(f[g]=u[g])}else f=u;return u=f.ref,{$$typeof:a,type:l,key:h,ref:u!==void 0?u:null,props:f}}return ur.Fragment=r,ur.jsx=o,ur.jsxs=o,ur}var dp;function t1(){return dp||(dp=1,Nc.exports=e1()),Nc.exports}var D=t1(),Gc={exports:{}},ae={};var hp;function n1(){if(hp)return ae;hp=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;function C(A){return A===null||typeof A!="object"?null:(A=S&&A[S]||A["@@iterator"],typeof A=="function"?A:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,G={};function N(A,k,I){this.props=A,this.context=k,this.refs=G,this.updater=I||x}N.prototype.isReactComponent={},N.prototype.setState=function(A,k){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,k,"setState")},N.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function H(){}H.prototype=N.prototype;function _(A,k,I){this.props=A,this.context=k,this.refs=G,this.updater=I||x}var q=_.prototype=new H;q.constructor=_,L(q,N.prototype),q.isPureReactComponent=!0;var ne=Array.isArray;function le(){}var Y={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function Ee(A,k,I){var Q=I.ref;return{$$typeof:a,type:A,key:k,ref:Q!==void 0?Q:null,props:I}}function te(A,k){return Ee(A.type,k,A.props)}function ve(A){return typeof A=="object"&&A!==null&&A.$$typeof===a}function we(A){var k={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(I){return k[I]})}var rt=/\/+/g;function Pe(A,k){return typeof A=="object"&&A!==null&&A.key!=null?we(""+A.key):k.toString(36)}function Le(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(le,le):(A.status="pending",A.then(function(k){A.status==="pending"&&(A.status="fulfilled",A.value=k)},function(k){A.status==="pending"&&(A.status="rejected",A.reason=k)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function V(A,k,I,Q,ie){var ce=typeof A;(ce==="undefined"||ce==="boolean")&&(A=null);var Se=!1;if(A===null)Se=!0;else switch(ce){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(A.$$typeof){case a:case r:Se=!0;break;case v:return Se=A._init,V(Se(A._payload),k,I,Q,ie)}}if(Se)return ie=ie(A),Se=Q===""?"."+Pe(A,0):Q,ne(ie)?(I="",Se!=null&&(I=Se.replace(rt,"$&/")+"/"),V(ie,k,I,"",function(yi){return yi})):ie!=null&&(ve(ie)&&(ie=te(ie,I+(ie.key==null||A&&A.key===ie.key?"":(""+ie.key).replace(rt,"$&/")+"/")+Se)),k.push(ie)),1;Se=0;var st=Q===""?".":Q+":";if(ne(A))for(var Ne=0;Ne<A.length;Ne++)Q=A[Ne],ce=st+Pe(Q,Ne),Se+=V(Q,k,I,ce,ie);else if(Ne=C(A),typeof Ne=="function")for(A=Ne.call(A),Ne=0;!(Q=A.next()).done;)Q=Q.value,ce=st+Pe(Q,Ne++),Se+=V(Q,k,I,ce,ie);else if(ce==="object"){if(typeof A.then=="function")return V(Le(A),k,I,Q,ie);throw k=String(A),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return Se}function P(A,k,I){if(A==null)return A;var Q=[],ie=0;return V(A,Q,"","",function(ce){return k.call(I,ce,ie++)}),Q}function X(A){if(A._status===-1){var k=A._result;k=k(),k.then(function(I){(A._status===0||A._status===-1)&&(A._status=1,A._result=I)},function(I){(A._status===0||A._status===-1)&&(A._status=2,A._result=I)}),A._status===-1&&(A._status=0,A._result=k)}if(A._status===1)return A._result.default;throw A._result}var se=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},me={map:P,forEach:function(A,k,I){P(A,function(){k.apply(this,arguments)},I)},count:function(A){var k=0;return P(A,function(){k++}),k},toArray:function(A){return P(A,function(k){return k})||[]},only:function(A){if(!ve(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ae.Activity=b,ae.Children=me,ae.Component=N,ae.Fragment=o,ae.Profiler=u,ae.PureComponent=_,ae.StrictMode=l,ae.Suspense=y,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,ae.__COMPILER_RUNTIME={__proto__:null,c:function(A){return Y.H.useMemoCache(A)}},ae.cache=function(A){return function(){return A.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(A,k,I){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var Q=L({},A.props),ie=A.key;if(k!=null)for(ce in k.key!==void 0&&(ie=""+k.key),k)!W.call(k,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&k.ref===void 0||(Q[ce]=k[ce]);var ce=arguments.length-2;if(ce===1)Q.children=I;else if(1<ce){for(var Se=Array(ce),st=0;st<ce;st++)Se[st]=arguments[st+2];Q.children=Se}return Ee(A.type,ie,Q)},ae.createContext=function(A){return A={$$typeof:h,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:f,_context:A},A},ae.createElement=function(A,k,I){var Q,ie={},ce=null;if(k!=null)for(Q in k.key!==void 0&&(ce=""+k.key),k)W.call(k,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(ie[Q]=k[Q]);var Se=arguments.length-2;if(Se===1)ie.children=I;else if(1<Se){for(var st=Array(Se),Ne=0;Ne<Se;Ne++)st[Ne]=arguments[Ne+2];ie.children=st}if(A&&A.defaultProps)for(Q in Se=A.defaultProps,Se)ie[Q]===void 0&&(ie[Q]=Se[Q]);return Ee(A,ce,ie)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(A){return{$$typeof:g,render:A}},ae.isValidElement=ve,ae.lazy=function(A){return{$$typeof:v,_payload:{_status:-1,_result:A},_init:X}},ae.memo=function(A,k){return{$$typeof:m,type:A,compare:k===void 0?null:k}},ae.startTransition=function(A){var k=Y.T,I={};Y.T=I;try{var Q=A(),ie=Y.S;ie!==null&&ie(I,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(le,se)}catch(ce){se(ce)}finally{k!==null&&I.types!==null&&(k.types=I.types),Y.T=k}},ae.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},ae.use=function(A){return Y.H.use(A)},ae.useActionState=function(A,k,I){return Y.H.useActionState(A,k,I)},ae.useCallback=function(A,k){return Y.H.useCallback(A,k)},ae.useContext=function(A){return Y.H.useContext(A)},ae.useDebugValue=function(){},ae.useDeferredValue=function(A,k){return Y.H.useDeferredValue(A,k)},ae.useEffect=function(A,k){return Y.H.useEffect(A,k)},ae.useEffectEvent=function(A){return Y.H.useEffectEvent(A)},ae.useId=function(){return Y.H.useId()},ae.useImperativeHandle=function(A,k,I){return Y.H.useImperativeHandle(A,k,I)},ae.useInsertionEffect=function(A,k){return Y.H.useInsertionEffect(A,k)},ae.useLayoutEffect=function(A,k){return Y.H.useLayoutEffect(A,k)},ae.useMemo=function(A,k){return Y.H.useMemo(A,k)},ae.useOptimistic=function(A,k){return Y.H.useOptimistic(A,k)},ae.useReducer=function(A,k,I){return Y.H.useReducer(A,k,I)},ae.useRef=function(A){return Y.H.useRef(A)},ae.useState=function(A){return Y.H.useState(A)},ae.useSyncExternalStore=function(A,k,I){return Y.H.useSyncExternalStore(A,k,I)},ae.useTransition=function(){return Y.H.useTransition()},ae.version="19.2.8",ae}var fp;function Ou(){return fp||(fp=1,Gc.exports=n1()),Gc.exports}var J=Ou(),_c={exports:{}},dr={},Pc={exports:{}},Hc={};var mp;function a1(){return mp||(mp=1,(function(a){function r(V,P){var X=V.length;V.push(P);e:for(;0<X;){var se=X-1>>>1,me=V[se];if(0<u(me,P))V[se]=P,V[X]=me,X=se;else break e}}function o(V){return V.length===0?null:V[0]}function l(V){if(V.length===0)return null;var P=V[0],X=V.pop();if(X!==P){V[0]=X;e:for(var se=0,me=V.length,A=me>>>1;se<A;){var k=2*(se+1)-1,I=V[k],Q=k+1,ie=V[Q];if(0>u(I,X))Q<me&&0>u(ie,I)?(V[se]=ie,V[Q]=X,se=Q):(V[se]=I,V[k]=X,se=k);else if(Q<me&&0>u(ie,X))V[se]=ie,V[Q]=X,se=Q;else break e}}return P}function u(V,P){var X=V.sortIndex-P.sortIndex;return X!==0?X:V.id-P.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var h=Date,g=h.now();a.unstable_now=function(){return h.now()-g}}var y=[],m=[],v=1,b=null,S=3,C=!1,x=!1,L=!1,G=!1,N=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function q(V){for(var P=o(m);P!==null;){if(P.callback===null)l(m);else if(P.startTime<=V)l(m),P.sortIndex=P.expirationTime,r(y,P);else break;P=o(m)}}function ne(V){if(L=!1,q(V),!x)if(o(y)!==null)x=!0,le||(le=!0,we());else{var P=o(m);P!==null&&Le(ne,P.startTime-V)}}var le=!1,Y=-1,W=5,Ee=-1;function te(){return G?!0:!(a.unstable_now()-Ee<W)}function ve(){if(G=!1,le){var V=a.unstable_now();Ee=V;var P=!0;try{e:{x=!1,L&&(L=!1,H(Y),Y=-1),C=!0;var X=S;try{t:{for(q(V),b=o(y);b!==null&&!(b.expirationTime>V&&te());){var se=b.callback;if(typeof se=="function"){b.callback=null,S=b.priorityLevel;var me=se(b.expirationTime<=V);if(V=a.unstable_now(),typeof me=="function"){b.callback=me,q(V),P=!0;break t}b===o(y)&&l(y),q(V)}else l(y);b=o(y)}if(b!==null)P=!0;else{var A=o(m);A!==null&&Le(ne,A.startTime-V),P=!1}}break e}finally{b=null,S=X,C=!1}P=void 0}}finally{P?we():le=!1}}}var we;if(typeof _=="function")we=function(){_(ve)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Pe=rt.port2;rt.port1.onmessage=ve,we=function(){Pe.postMessage(null)}}else we=function(){N(ve,0)};function Le(V,P){Y=N(function(){V(a.unstable_now())},P)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(V){V.callback=null},a.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<V?Math.floor(1e3/V):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function(V){switch(S){case 1:case 2:case 3:var P=3;break;default:P=S}var X=S;S=P;try{return V()}finally{S=X}},a.unstable_requestPaint=function(){G=!0},a.unstable_runWithPriority=function(V,P){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var X=S;S=V;try{return P()}finally{S=X}},a.unstable_scheduleCallback=function(V,P,X){var se=a.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?se+X:se):X=se,V){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=X+me,V={id:v++,callback:P,priorityLevel:V,startTime:X,expirationTime:me,sortIndex:-1},X>se?(V.sortIndex=X,r(m,V),o(y)===null&&V===o(m)&&(L?(H(Y),Y=-1):L=!0,Le(ne,X-se))):(V.sortIndex=me,r(y,V),x||C||(x=!0,le||(le=!0,we()))),V},a.unstable_shouldYield=te,a.unstable_wrapCallback=function(V){var P=S;return function(){var X=S;S=P;try{return V.apply(this,arguments)}finally{S=X}}}})(Hc)),Hc}var pp;function i1(){return pp||(pp=1,Pc.exports=a1()),Pc.exports}var Ic={exports:{}},it={};var gp;function r1(){if(gp)return it;gp=1;var a=Ou();function r(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(y,m,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:y,containerInfo:m,implementation:v}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,it.createPortal=function(y,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return f(y,m,null,v)},it.flushSync=function(y){var m=h.T,v=l.p;try{if(h.T=null,l.p=2,y)return y()}finally{h.T=m,l.p=v,l.d.f()}},it.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,l.d.C(y,m))},it.prefetchDNS=function(y){typeof y=="string"&&l.d.D(y)},it.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var v=m.as,b=g(v,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,C=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?l.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:C}):v==="script"&&l.d.X(y,{crossOrigin:b,integrity:S,fetchPriority:C,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},it.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=g(m.as,m.crossOrigin);l.d.M(y,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&l.d.M(y)},it.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,b=g(v,m.crossOrigin);l.d.L(y,v,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},it.preloadModule=function(y,m){if(typeof y=="string")if(m){var v=g(m.as,m.crossOrigin);l.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else l.d.m(y)},it.requestFormReset=function(y){l.d.r(y)},it.unstable_batchedUpdates=function(y,m){return y(m)},it.useFormState=function(y,m,v){return h.H.useFormState(y,m,v)},it.useFormStatus=function(){return h.H.useHostTransitionStatus()},it.version="19.2.8",it}var yp;function s1(){if(yp)return Ic.exports;yp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Ic.exports=r1(),Ic.exports}var vp;function o1(){if(vp)return dr;vp=1;var a=i1(),r=Ou(),o=s1();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(f(e)!==e)throw Error(l(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var c=s.alternate;if(c===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===n)return y(s),e;if(c===i)return y(s),t;c=c.sibling}throw Error(l(188))}if(n.return!==i.return)n=s,i=c;else{for(var d=!1,p=s.child;p;){if(p===n){d=!0,n=s,i=c;break}if(p===i){d=!0,i=s,n=c;break}p=p.sibling}if(!d){for(p=c.child;p;){if(p===n){d=!0,n=c,i=s;break}if(p===i){d=!0,i=c,n=s;break}p=p.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==i)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),_=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function we(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function Pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case N:return"Profiler";case G:return"StrictMode";case ne:return"Suspense";case le:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case _:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:Pe(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return Pe(e(t))}catch{}}return null}var Le=Array.isArray,V=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},se=[],me=-1;function A(e){return{current:e}}function k(e){0>me||(e.current=se[me],se[me]=null,me--)}function I(e,t){me++,se[me]=e.current,e.current=t}var Q=A(null),ie=A(null),ce=A(null),Se=A(null);function st(e,t){switch(I(ce,t),I(ie,e),I(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Om(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Om(t),e=jm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k(Q),I(Q,e)}function Ne(){k(Q),k(ie),k(ce)}function yi(e){e.memoizedState!==null&&I(Se,e);var t=Q.current,n=jm(t,e.type);t!==n&&(I(ie,e),I(Q,n))}function zr(e){ie.current===e&&(k(Q),k(ie)),Se.current===e&&(k(Se),sr._currentValue=X)}var So,ld;function Wn(e){if(So===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);So=t&&t[1]||"",ld=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+So+e+ld}var wo=!1;function To(e,t){if(!e||wo)return"";wo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(R){var M=R}Reflect.construct(e,[],B)}else{try{B.call()}catch(R){M=R}e.call(B.prototype)}}else{try{throw Error()}catch(R){M=R}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(R){if(R&&M&&typeof R.stack=="string")return[R.stack,M.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),d=c[0],p=c[1];if(d&&p){var w=d.split(`
`),U=p.split(`
`);for(s=i=0;i<w.length&&!w[i].includes("DetermineComponentFrameRoot");)i++;for(;s<U.length&&!U[s].includes("DetermineComponentFrameRoot");)s++;if(i===w.length||s===U.length)for(i=w.length-1,s=U.length-1;1<=i&&0<=s&&w[i]!==U[s];)s--;for(;1<=i&&0<=s;i--,s--)if(w[i]!==U[s]){if(i!==1||s!==1)do if(i--,s--,0>s||w[i]!==U[s]){var O=`
`+w[i].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=i&&0<=s);break}}}finally{wo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Wn(n):""}function Rv(e,t){switch(e.tag){case 26:case 27:case 5:return Wn(e.type);case 16:return Wn("Lazy");case 13:return e.child!==t&&t!==null?Wn("Suspense Fallback"):Wn("Suspense");case 19:return Wn("SuspenseList");case 0:case 15:return To(e.type,!1);case 11:return To(e.type.render,!1);case 1:return To(e.type,!0);case 31:return Wn("Activity");default:return""}}function cd(e){try{var t="",n=null;do t+=Rv(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ao=Object.prototype.hasOwnProperty,Eo=a.unstable_scheduleCallback,Co=a.unstable_cancelCallback,Vv=a.unstable_shouldYield,Ov=a.unstable_requestPaint,yt=a.unstable_now,jv=a.unstable_getCurrentPriorityLevel,ud=a.unstable_ImmediatePriority,dd=a.unstable_UserBlockingPriority,Ur=a.unstable_NormalPriority,Bv=a.unstable_LowPriority,hd=a.unstable_IdlePriority,kv=a.log,Lv=a.unstable_setDisableYieldValue,vi=null,vt=null;function Tn(e){if(typeof kv=="function"&&Lv(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(vi,e)}catch{}}var bt=Math.clz32?Math.clz32:_v,Nv=Math.log,Gv=Math.LN2;function _v(e){return e>>>=0,e===0?32:31-(Nv(e)/Gv|0)|0}var xr=256,Mr=262144,Dr=4194304;function $n(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Rr(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,c=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var p=i&134217727;return p!==0?(i=p&~c,i!==0?s=$n(i):(d&=p,d!==0?s=$n(d):n||(n=p&~e,n!==0&&(s=$n(n))))):(p=i&~c,p!==0?s=$n(p):d!==0?s=$n(d):n||(n=i&~e,n!==0&&(s=$n(n)))),s===0?0:t!==0&&t!==s&&(t&c)===0&&(c=s&-s,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:s}function bi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Pv(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fd(){var e=Dr;return Dr<<=1,(Dr&62914560)===0&&(Dr=4194304),e}function zo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Si(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hv(e,t,n,i,s,c){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var p=e.entanglements,w=e.expirationTimes,U=e.hiddenUpdates;for(n=d&~n;0<n;){var O=31-bt(n),B=1<<O;p[O]=0,w[O]=-1;var M=U[O];if(M!==null)for(U[O]=null,O=0;O<M.length;O++){var R=M[O];R!==null&&(R.lane&=-536870913)}n&=~B}i!==0&&md(e,i,0),c!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=c&~(d&~t))}function md(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-bt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function pd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-bt(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function gd(e,t){var n=t&-t;return n=(n&42)!==0?1:Uo(n),(n&(e.suspendedLanes|t))!==0?0:n}function Uo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function yd(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:ap(e.type))}function vd(e,t){var n=P.p;try{return P.p=e,t()}finally{P.p=n}}var An=Math.random().toString(36).slice(2),Je="__reactFiber$"+An,ut="__reactProps$"+An,Aa="__reactContainer$"+An,Mo="__reactEvents$"+An,Iv="__reactListeners$"+An,qv="__reactHandles$"+An,bd="__reactResources$"+An,wi="__reactMarker$"+An;function Do(e){delete e[Je],delete e[ut],delete e[Mo],delete e[Iv],delete e[qv]}function Ea(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Aa]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pm(e);e!==null;){if(n=e[Je])return n;e=Pm(e)}return t}e=n,n=e.parentNode}return null}function Ca(e){if(e=e[Je]||e[Aa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ti(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function za(e){var t=e[bd];return t||(t=e[bd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[wi]=!0}var Sd=new Set,wd={};function ea(e,t){Ua(e,t),Ua(e+"Capture",t)}function Ua(e,t){for(wd[e]=t,e=0;e<t.length;e++)Sd.add(t[e])}var Xv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Td={},Ad={};function Fv(e){return Ao.call(Ad,e)?!0:Ao.call(Td,e)?!1:Xv.test(e)?Ad[e]=!0:(Td[e]=!0,!1)}function Vr(e,t,n){if(Fv(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Or(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function tn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ed(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yv(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,c=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(d){n=""+d,c.call(this,d)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ro(e){if(!e._valueTracker){var t=Ed(e)?"checked":"value";e._valueTracker=Yv(e,t,""+e[t])}}function Cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ed(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kv=/[\n"\\]/g;function Mt(e){return e.replace(Kv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Vo(e,t,n,i,s,c,d,p){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Oo(e,d,xt(t)):n!=null?Oo(e,d,xt(n)):i!=null&&e.removeAttribute("value"),s==null&&c!=null&&(e.defaultChecked=!!c),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+xt(p):e.removeAttribute("name")}function zd(e,t,n,i,s,c,d,p){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Ro(e);return}n=n!=null?""+xt(n):"",t=t!=null?""+xt(t):n,p||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=p?e.checked:!!i,e.defaultChecked=!!i,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Ro(e)}function Oo(e,t,n){t==="number"&&jr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function xa(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ud(e,t,n){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+xt(n):""}function xd(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(l(92));if(Le(i)){if(1<i.length)throw Error(l(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=xt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Ro(e)}function Ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Md(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Qv.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Dd(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Md(e,s,i)}else for(var c in t)t.hasOwnProperty(c)&&Md(e,c,t[c])}function jo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Br(e){return Jv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function nn(){}var Bo=null;function ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Da=null,Ra=null;function Rd(e){var t=Ca(e);if(t&&(e=t.stateNode)){var n=e[ut]||null;e:switch(e=t.stateNode,t.type){case"input":if(Vo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[ut]||null;if(!s)throw Error(l(90));Vo(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Cd(i)}break e;case"textarea":Ud(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&xa(e,!!n.multiple,t,!1)}}}var Lo=!1;function Vd(e,t,n){if(Lo)return e(t,n);Lo=!0;try{var i=e(t);return i}finally{if(Lo=!1,(Da!==null||Ra!==null)&&(Ts(),Da&&(t=Da,e=Ra,Ra=Da=null,Rd(t),e)))for(t=0;t<e.length;t++)Rd(e[t])}}function Ai(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ut]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),No=!1;if(an)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){No=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{No=!1}var En=null,Go=null,kr=null;function Od(){if(kr)return kr;var e,t=Go,n=t.length,i,s="value"in En?En.value:En.textContent,c=s.length;for(e=0;e<n&&t[e]===s[e];e++);var d=n-e;for(i=1;i<=d&&t[n-i]===s[c-i];i++);return kr=s.slice(e,1<i?1-i:void 0)}function Lr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function jd(){return!1}function dt(e){function t(n,i,s,c,d){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(c):c[p]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Nr:jd,this.isPropagationStopped=jd,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),t}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gr=dt(ta),Ci=b({},ta,{view:0,detail:0}),Wv=dt(Ci),_o,Po,zi,_r=b({},Ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Io,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zi&&(zi&&e.type==="mousemove"?(_o=e.screenX-zi.screenX,Po=e.screenY-zi.screenY):Po=_o=0,zi=e),_o)},movementY:function(e){return"movementY"in e?e.movementY:Po}}),Bd=dt(_r),$v=b({},_r,{dataTransfer:0}),e0=dt($v),t0=b({},Ci,{relatedTarget:0}),Ho=dt(t0),n0=b({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),a0=dt(n0),i0=b({},ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),r0=dt(i0),s0=b({},ta,{data:0}),kd=dt(s0),o0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=c0[e])?!!t[e]:!1}function Io(){return u0}var d0=b({},Ci,{key:function(e){if(e.key){var t=o0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Lr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?l0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Io,charCode:function(e){return e.type==="keypress"?Lr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),h0=dt(d0),f0=b({},_r,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ld=dt(f0),m0=b({},Ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Io}),p0=dt(m0),g0=b({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),y0=dt(g0),v0=b({},_r,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),b0=dt(v0),S0=b({},ta,{newState:0,oldState:0}),w0=dt(S0),T0=[9,13,27,32],qo=an&&"CompositionEvent"in window,Ui=null;an&&"documentMode"in document&&(Ui=document.documentMode);var A0=an&&"TextEvent"in window&&!Ui,Nd=an&&(!qo||Ui&&8<Ui&&11>=Ui),Gd=" ",_d=!1;function Pd(e,t){switch(e){case"keyup":return T0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Va=!1;function E0(e,t){switch(e){case"compositionend":return Hd(t);case"keypress":return t.which!==32?null:(_d=!0,Gd);case"textInput":return e=t.data,e===Gd&&_d?null:e;default:return null}}function C0(e,t){if(Va)return e==="compositionend"||!qo&&Pd(e,t)?(e=Od(),kr=Go=En=null,Va=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nd&&t.locale!=="ko"?null:t.data;default:return null}}var z0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!z0[e.type]:t==="textarea"}function qd(e,t,n,i){Da?Ra?Ra.push(i):Ra=[i]:Da=i,t=Ms(t,"onChange"),0<t.length&&(n=new Gr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var xi=null,Mi=null;function U0(e){Um(e,0)}function Pr(e){var t=Ti(e);if(Cd(t))return e}function Xd(e,t){if(e==="change")return t}var Fd=!1;if(an){var Xo;if(an){var Fo="oninput"in document;if(!Fo){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),Fo=typeof Yd.oninput=="function"}Xo=Fo}else Xo=!1;Fd=Xo&&(!document.documentMode||9<document.documentMode)}function Kd(){xi&&(xi.detachEvent("onpropertychange",Qd),Mi=xi=null)}function Qd(e){if(e.propertyName==="value"&&Pr(Mi)){var t=[];qd(t,Mi,e,ko(e)),Vd(U0,t)}}function x0(e,t,n){e==="focusin"?(Kd(),xi=t,Mi=n,xi.attachEvent("onpropertychange",Qd)):e==="focusout"&&Kd()}function M0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pr(Mi)}function D0(e,t){if(e==="click")return Pr(t)}function R0(e,t){if(e==="input"||e==="change")return Pr(t)}function V0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:V0;function Di(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Ao.call(t,s)||!St(e[s],t[s]))return!1}return!0}function Zd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jd(e,t){var n=Zd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zd(n)}}function Wd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $d(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=jr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jr(e.document)}return t}function Yo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var O0=an&&"documentMode"in document&&11>=document.documentMode,Oa=null,Ko=null,Ri=null,Qo=!1;function eh(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qo||Oa==null||Oa!==jr(i)||(i=Oa,"selectionStart"in i&&Yo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ri&&Di(Ri,i)||(Ri=i,i=Ms(Ko,"onSelect"),0<i.length&&(t=new Gr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Oa)))}function na(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ja={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionrun:na("Transition","TransitionRun"),transitionstart:na("Transition","TransitionStart"),transitioncancel:na("Transition","TransitionCancel"),transitionend:na("Transition","TransitionEnd")},Zo={},th={};an&&(th=document.createElement("div").style,"AnimationEvent"in window||(delete ja.animationend.animation,delete ja.animationiteration.animation,delete ja.animationstart.animation),"TransitionEvent"in window||delete ja.transitionend.transition);function aa(e){if(Zo[e])return Zo[e];if(!ja[e])return e;var t=ja[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in th)return Zo[e]=t[n];return e}var nh=aa("animationend"),ah=aa("animationiteration"),ih=aa("animationstart"),j0=aa("transitionrun"),B0=aa("transitionstart"),k0=aa("transitioncancel"),rh=aa("transitionend"),sh=new Map,Jo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jo.push("scrollEnd");function Pt(e,t){sh.set(e,t),ea(t,[e])}var Hr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Dt=[],Ba=0,Wo=0;function Ir(){for(var e=Ba,t=Wo=Ba=0;t<e;){var n=Dt[t];Dt[t++]=null;var i=Dt[t];Dt[t++]=null;var s=Dt[t];Dt[t++]=null;var c=Dt[t];if(Dt[t++]=null,i!==null&&s!==null){var d=i.pending;d===null?s.next=s:(s.next=d.next,d.next=s),i.pending=s}c!==0&&oh(n,s,c)}}function qr(e,t,n,i){Dt[Ba++]=e,Dt[Ba++]=t,Dt[Ba++]=n,Dt[Ba++]=i,Wo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function $o(e,t,n,i){return qr(e,t,n,i),Xr(e)}function ia(e,t){return qr(e,null,null,t),Xr(e)}function oh(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,c=e.return;c!==null;)c.childLanes|=n,i=c.alternate,i!==null&&(i.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(s=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,s&&t!==null&&(s=31-bt(n),e=c.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),c):null}function Xr(e){if(50<$i)throw $i=0,lc=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ka={};function L0(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,i){return new L0(e,t,n,i)}function el(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rn(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function lh(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Fr(e,t,n,i,s,c){var d=0;if(i=e,typeof e=="function")el(e)&&(d=1);else if(typeof e=="string")d=Hb(e,n,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=wt(31,n,t,s),e.elementType=Ee,e.lanes=c,e;case L:return ra(n.children,s,c,t);case G:d=8,s|=24;break;case N:return e=wt(12,n,t,s|2),e.elementType=N,e.lanes=c,e;case ne:return e=wt(13,n,t,s),e.elementType=ne,e.lanes=c,e;case le:return e=wt(19,n,t,s),e.elementType=le,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:d=10;break e;case H:d=9;break e;case q:d=11;break e;case Y:d=14;break e;case W:d=16,i=null;break e}d=29,n=Error(l(130,e===null?"null":typeof e,"")),i=null}return t=wt(d,n,t,s),t.elementType=e,t.type=i,t.lanes=c,t}function ra(e,t,n,i){return e=wt(7,e,i,t),e.lanes=n,e}function tl(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function ch(e){var t=wt(18,null,null,0);return t.stateNode=e,t}function nl(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var uh=new WeakMap;function Rt(e,t){if(typeof e=="object"&&e!==null){var n=uh.get(e);return n!==void 0?n:(t={value:e,source:t,stack:cd(t)},uh.set(e,t),t)}return{value:e,source:t,stack:cd(t)}}var La=[],Na=0,Yr=null,Vi=0,Vt=[],Ot=0,Cn=null,Yt=1,Kt="";function sn(e,t){La[Na++]=Vi,La[Na++]=Yr,Yr=e,Vi=t}function dh(e,t,n){Vt[Ot++]=Yt,Vt[Ot++]=Kt,Vt[Ot++]=Cn,Cn=e;var i=Yt;e=Kt;var s=32-bt(i)-1;i&=~(1<<s),n+=1;var c=32-bt(t)+s;if(30<c){var d=s-s%5;c=(i&(1<<d)-1).toString(32),i>>=d,s-=d,Yt=1<<32-bt(t)+s|n<<s|i,Kt=c+e}else Yt=1<<c|n<<s|i,Kt=e}function al(e){e.return!==null&&(sn(e,1),dh(e,1,0))}function il(e){for(;e===Yr;)Yr=La[--Na],La[Na]=null,Vi=La[--Na],La[Na]=null;for(;e===Cn;)Cn=Vt[--Ot],Vt[Ot]=null,Kt=Vt[--Ot],Vt[Ot]=null,Yt=Vt[--Ot],Vt[Ot]=null}function hh(e,t){Vt[Ot++]=Yt,Vt[Ot++]=Kt,Vt[Ot++]=Cn,Yt=t.id,Kt=t.overflow,Cn=e}var We=null,Re=null,pe=!1,zn=null,jt=!1,rl=Error(l(519));function Un(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Oi(Rt(t,e)),rl}function fh(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Je]=e,t[ut]=i,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<tr.length;n++)de(tr[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),zd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),xd(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Rm(t.textContent,n)?(i.popover!=null&&(de("beforetoggle",t),de("toggle",t)),i.onScroll!=null&&de("scroll",t),i.onScrollEnd!=null&&de("scrollend",t),i.onClick!=null&&(t.onclick=nn),t=!0):t=!1,t||Un(e,!0)}function mh(e){for(We=e.return;We;)switch(We.tag){case 5:case 31:case 13:jt=!1;return;case 27:case 3:jt=!0;return;default:We=We.return}}function Ga(e){if(e!==We)return!1;if(!pe)return mh(e),pe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ac(e.type,e.memoizedProps)),n=!n),n&&Re&&Un(e),mh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Re=_m(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Re=_m(e)}else t===27?(t=Re,Pn(e.type)?(e=xc,xc=null,Re=e):Re=t):Re=We?kt(e.stateNode.nextSibling):null;return!0}function sa(){Re=We=null,pe=!1}function sl(){var e=zn;return e!==null&&(pt===null?pt=e:pt.push.apply(pt,e),zn=null),e}function Oi(e){zn===null?zn=[e]:zn.push(e)}var ol=A(null),oa=null,on=null;function xn(e,t,n){I(ol,t._currentValue),t._currentValue=n}function ln(e){e._currentValue=ol.current,k(ol)}function ll(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function cl(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var c=s.dependencies;if(c!==null){var d=s.child;c=c.firstContext;e:for(;c!==null;){var p=c;c=s;for(var w=0;w<t.length;w++)if(p.context===t[w]){c.lanes|=n,p=c.alternate,p!==null&&(p.lanes|=n),ll(c.return,n,e),i||(d=null);break e}c=p.next}}else if(s.tag===18){if(d=s.return,d===null)throw Error(l(341));d.lanes|=n,c=d.alternate,c!==null&&(c.lanes|=n),ll(d,n,e),d=null}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===e){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}}function _a(e,t,n,i){e=null;for(var s=t,c=!1;s!==null;){if(!c){if((s.flags&524288)!==0)c=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var d=s.alternate;if(d===null)throw Error(l(387));if(d=d.memoizedProps,d!==null){var p=s.type;St(s.pendingProps.value,d.value)||(e!==null?e.push(p):e=[p])}}else if(s===Se.current){if(d=s.alternate,d===null)throw Error(l(387));d.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(sr):e=[sr])}s=s.return}e!==null&&cl(t,e,n,i),t.flags|=262144}function Kr(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function la(e){oa=e,on=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return ph(oa,e)}function Qr(e,t){return oa===null&&la(e),ph(e,t)}function ph(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},on===null){if(e===null)throw Error(l(308));on=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else on=on.next=t;return n}var N0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},G0=a.unstable_scheduleCallback,_0=a.unstable_NormalPriority,He={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ul(){return{controller:new N0,data:new Map,refCount:0}}function ji(e){e.refCount--,e.refCount===0&&G0(_0,function(){e.controller.abort()})}var Bi=null,dl=0,Pa=0,Ha=null;function P0(e,t){if(Bi===null){var n=Bi=[];dl=0,Pa=mc(),Ha={status:"pending",value:void 0,then:function(i){n.push(i)}}}return dl++,t.then(gh,gh),t}function gh(){if(--dl===0&&Bi!==null){Ha!==null&&(Ha.status="fulfilled");var e=Bi;Bi=null,Pa=0,Ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function H0(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var yh=V.S;V.S=function(e,t){tm=yt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&P0(e,t),yh!==null&&yh(e,t)};var ca=A(null);function hl(){var e=ca.current;return e!==null?e:xe.pooledCache}function Zr(e,t){t===null?I(ca,ca.current):I(ca,t.pool)}function vh(){var e=hl();return e===null?null:{parent:He._currentValue,pool:e}}var Ia=Error(l(460)),fl=Error(l(474)),Jr=Error(l(542)),Wr={then:function(){}};function bh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(nn,nn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Th(e),e;default:if(typeof t.status=="string")t.then(nn,nn);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Th(e),e}throw da=t,Ia}}function ua(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(da=n,Ia):n}}var da=null;function wh(){if(da===null)throw Error(l(459));var e=da;return da=null,e}function Th(e){if(e===Ia||e===Jr)throw Error(l(483))}var qa=null,ki=0;function $r(e){var t=ki;return ki+=1,qa===null&&(qa=[]),Sh(qa,e,t)}function Li(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function es(e,t){throw t.$$typeof===S?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ah(e){function t(E,T){if(e){var z=E.deletions;z===null?(E.deletions=[T],E.flags|=16):z.push(T)}}function n(E,T){if(!e)return null;for(;T!==null;)t(E,T),T=T.sibling;return null}function i(E){for(var T=new Map;E!==null;)E.key!==null?T.set(E.key,E):T.set(E.index,E),E=E.sibling;return T}function s(E,T){return E=rn(E,T),E.index=0,E.sibling=null,E}function c(E,T,z){return E.index=z,e?(z=E.alternate,z!==null?(z=z.index,z<T?(E.flags|=67108866,T):z):(E.flags|=67108866,T)):(E.flags|=1048576,T)}function d(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function p(E,T,z,j){return T===null||T.tag!==6?(T=tl(z,E.mode,j),T.return=E,T):(T=s(T,z),T.return=E,T)}function w(E,T,z,j){var $=z.type;return $===L?O(E,T,z.props.children,j,z.key):T!==null&&(T.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===W&&ua($)===T.type)?(T=s(T,z.props),Li(T,z),T.return=E,T):(T=Fr(z.type,z.key,z.props,null,E.mode,j),Li(T,z),T.return=E,T)}function U(E,T,z,j){return T===null||T.tag!==4||T.stateNode.containerInfo!==z.containerInfo||T.stateNode.implementation!==z.implementation?(T=nl(z,E.mode,j),T.return=E,T):(T=s(T,z.children||[]),T.return=E,T)}function O(E,T,z,j,$){return T===null||T.tag!==7?(T=ra(z,E.mode,j,$),T.return=E,T):(T=s(T,z),T.return=E,T)}function B(E,T,z){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=tl(""+T,E.mode,z),T.return=E,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case C:return z=Fr(T.type,T.key,T.props,null,E.mode,z),Li(z,T),z.return=E,z;case x:return T=nl(T,E.mode,z),T.return=E,T;case W:return T=ua(T),B(E,T,z)}if(Le(T)||we(T))return T=ra(T,E.mode,z,null),T.return=E,T;if(typeof T.then=="function")return B(E,$r(T),z);if(T.$$typeof===_)return B(E,Qr(E,T),z);es(E,T)}return null}function M(E,T,z,j){var $=T!==null?T.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return $!==null?null:p(E,T,""+z,j);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case C:return z.key===$?w(E,T,z,j):null;case x:return z.key===$?U(E,T,z,j):null;case W:return z=ua(z),M(E,T,z,j)}if(Le(z)||we(z))return $!==null?null:O(E,T,z,j,null);if(typeof z.then=="function")return M(E,T,$r(z),j);if(z.$$typeof===_)return M(E,T,Qr(E,z),j);es(E,z)}return null}function R(E,T,z,j,$){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return E=E.get(z)||null,p(T,E,""+j,$);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case C:return E=E.get(j.key===null?z:j.key)||null,w(T,E,j,$);case x:return E=E.get(j.key===null?z:j.key)||null,U(T,E,j,$);case W:return j=ua(j),R(E,T,z,j,$)}if(Le(j)||we(j))return E=E.get(z)||null,O(T,E,j,$,null);if(typeof j.then=="function")return R(E,T,z,$r(j),$);if(j.$$typeof===_)return R(E,T,z,Qr(T,j),$);es(T,j)}return null}function F(E,T,z,j){for(var $=null,ge=null,Z=T,oe=T=0,fe=null;Z!==null&&oe<z.length;oe++){Z.index>oe?(fe=Z,Z=null):fe=Z.sibling;var ye=M(E,Z,z[oe],j);if(ye===null){Z===null&&(Z=fe);break}e&&Z&&ye.alternate===null&&t(E,Z),T=c(ye,T,oe),ge===null?$=ye:ge.sibling=ye,ge=ye,Z=fe}if(oe===z.length)return n(E,Z),pe&&sn(E,oe),$;if(Z===null){for(;oe<z.length;oe++)Z=B(E,z[oe],j),Z!==null&&(T=c(Z,T,oe),ge===null?$=Z:ge.sibling=Z,ge=Z);return pe&&sn(E,oe),$}for(Z=i(Z);oe<z.length;oe++)fe=R(Z,E,oe,z[oe],j),fe!==null&&(e&&fe.alternate!==null&&Z.delete(fe.key===null?oe:fe.key),T=c(fe,T,oe),ge===null?$=fe:ge.sibling=fe,ge=fe);return e&&Z.forEach(function(Fn){return t(E,Fn)}),pe&&sn(E,oe),$}function ee(E,T,z,j){if(z==null)throw Error(l(151));for(var $=null,ge=null,Z=T,oe=T=0,fe=null,ye=z.next();Z!==null&&!ye.done;oe++,ye=z.next()){Z.index>oe?(fe=Z,Z=null):fe=Z.sibling;var Fn=M(E,Z,ye.value,j);if(Fn===null){Z===null&&(Z=fe);break}e&&Z&&Fn.alternate===null&&t(E,Z),T=c(Fn,T,oe),ge===null?$=Fn:ge.sibling=Fn,ge=Fn,Z=fe}if(ye.done)return n(E,Z),pe&&sn(E,oe),$;if(Z===null){for(;!ye.done;oe++,ye=z.next())ye=B(E,ye.value,j),ye!==null&&(T=c(ye,T,oe),ge===null?$=ye:ge.sibling=ye,ge=ye);return pe&&sn(E,oe),$}for(Z=i(Z);!ye.done;oe++,ye=z.next())ye=R(Z,E,oe,ye.value,j),ye!==null&&(e&&ye.alternate!==null&&Z.delete(ye.key===null?oe:ye.key),T=c(ye,T,oe),ge===null?$=ye:ge.sibling=ye,ge=ye);return e&&Z.forEach(function($b){return t(E,$b)}),pe&&sn(E,oe),$}function Ue(E,T,z,j){if(typeof z=="object"&&z!==null&&z.type===L&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case C:e:{for(var $=z.key;T!==null;){if(T.key===$){if($=z.type,$===L){if(T.tag===7){n(E,T.sibling),j=s(T,z.props.children),j.return=E,E=j;break e}}else if(T.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===W&&ua($)===T.type){n(E,T.sibling),j=s(T,z.props),Li(j,z),j.return=E,E=j;break e}n(E,T);break}else t(E,T);T=T.sibling}z.type===L?(j=ra(z.props.children,E.mode,j,z.key),j.return=E,E=j):(j=Fr(z.type,z.key,z.props,null,E.mode,j),Li(j,z),j.return=E,E=j)}return d(E);case x:e:{for($=z.key;T!==null;){if(T.key===$)if(T.tag===4&&T.stateNode.containerInfo===z.containerInfo&&T.stateNode.implementation===z.implementation){n(E,T.sibling),j=s(T,z.children||[]),j.return=E,E=j;break e}else{n(E,T);break}else t(E,T);T=T.sibling}j=nl(z,E.mode,j),j.return=E,E=j}return d(E);case W:return z=ua(z),Ue(E,T,z,j)}if(Le(z))return F(E,T,z,j);if(we(z)){if($=we(z),typeof $!="function")throw Error(l(150));return z=$.call(z),ee(E,T,z,j)}if(typeof z.then=="function")return Ue(E,T,$r(z),j);if(z.$$typeof===_)return Ue(E,T,Qr(E,z),j);es(E,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,T!==null&&T.tag===6?(n(E,T.sibling),j=s(T,z),j.return=E,E=j):(n(E,T),j=tl(z,E.mode,j),j.return=E,E=j),d(E)):n(E,T)}return function(E,T,z,j){try{ki=0;var $=Ue(E,T,z,j);return qa=null,$}catch(Z){if(Z===Ia||Z===Jr)throw Z;var ge=wt(29,Z,null,E.mode);return ge.lanes=j,ge.return=E,ge}}}var ha=Ah(!0),Eh=Ah(!1),Mn=!1;function ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Dn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Rn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(be&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Xr(e),oh(e,null,n),t}return qr(e,i,t,n),Xr(e)}function Ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,pd(e,n)}}function gl(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?s=c=d:c=c.next=d,n=n.next}while(n!==null);c===null?s=c=t:c=c.next=t}else s=c=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var yl=!1;function Gi(){if(yl){var e=Ha;if(e!==null)throw e}}function _i(e,t,n,i){yl=!1;var s=e.updateQueue;Mn=!1;var c=s.firstBaseUpdate,d=s.lastBaseUpdate,p=s.shared.pending;if(p!==null){s.shared.pending=null;var w=p,U=w.next;w.next=null,d===null?c=U:d.next=U,d=w;var O=e.alternate;O!==null&&(O=O.updateQueue,p=O.lastBaseUpdate,p!==d&&(p===null?O.firstBaseUpdate=U:p.next=U,O.lastBaseUpdate=w))}if(c!==null){var B=s.baseState;d=0,O=U=w=null,p=c;do{var M=p.lane&-536870913,R=M!==p.lane;if(R?(he&M)===M:(i&M)===M){M!==0&&M===Pa&&(yl=!0),O!==null&&(O=O.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var F=e,ee=p;M=t;var Ue=n;switch(ee.tag){case 1:if(F=ee.payload,typeof F=="function"){B=F.call(Ue,B,M);break e}B=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=ee.payload,M=typeof F=="function"?F.call(Ue,B,M):F,M==null)break e;B=b({},B,M);break e;case 2:Mn=!0}}M=p.callback,M!==null&&(e.flags|=64,R&&(e.flags|=8192),R=s.callbacks,R===null?s.callbacks=[M]:R.push(M))}else R={lane:M,tag:p.tag,payload:p.payload,callback:p.callback,next:null},O===null?(U=O=R,w=B):O=O.next=R,d|=M;if(p=p.next,p===null){if(p=s.shared.pending,p===null)break;R=p,p=R.next,R.next=null,s.lastBaseUpdate=R,s.shared.pending=null}}while(!0);O===null&&(w=B),s.baseState=w,s.firstBaseUpdate=U,s.lastBaseUpdate=O,c===null&&(s.shared.lanes=0),kn|=d,e.lanes=d,e.memoizedState=B}}function Ch(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function zh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ch(n[e],t)}var Xa=A(null),ts=A(0);function Uh(e,t){e=yn,I(ts,e),I(Xa,t),yn=e|t.baseLanes}function vl(){I(ts,yn),I(Xa,Xa.current)}function bl(){yn=ts.current,k(Xa),k(ts)}var Tt=A(null),Bt=null;function Vn(e){var t=e.alternate;I(Ge,Ge.current&1),I(Tt,e),Bt===null&&(t===null||Xa.current!==null||t.memoizedState!==null)&&(Bt=e)}function Sl(e){I(Ge,Ge.current),I(Tt,e),Bt===null&&(Bt=e)}function xh(e){e.tag===22?(I(Ge,Ge.current),I(Tt,e),Bt===null&&(Bt=e)):On()}function On(){I(Ge,Ge.current),I(Tt,Tt.current)}function At(e){k(Tt),Bt===e&&(Bt=null),k(Ge)}var Ge=A(0);function ns(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||zc(n)||Uc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cn=0,re=null,Ce=null,Ie=null,as=!1,Fa=!1,fa=!1,is=0,Pi=0,Ya=null,I0=0;function je(){throw Error(l(321))}function wl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Tl(e,t,n,i,s,c){return cn=c,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,V.H=e===null||e.memoizedState===null?hf:Ll,fa=!1,c=n(i,s),fa=!1,Fa&&(c=Dh(t,n,i,s)),Mh(e),c}function Mh(e){V.H=qi;var t=Ce!==null&&Ce.next!==null;if(cn=0,Ie=Ce=re=null,as=!1,Pi=0,Ya=null,t)throw Error(l(300));e===null||qe||(e=e.dependencies,e!==null&&Kr(e)&&(qe=!0))}function Dh(e,t,n,i){re=e;var s=0;do{if(Fa&&(Ya=null),Pi=0,Fa=!1,25<=s)throw Error(l(301));if(s+=1,Ie=Ce=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}V.H=ff,c=t(n,i)}while(Fa);return c}function q0(){var e=V.H,t=e.useState()[0];return t=typeof t.then=="function"?Hi(t):t,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(re.flags|=1024),t}function Al(){var e=is!==0;return is=0,e}function El(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Cl(e){if(as){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}as=!1}cn=0,Ie=Ce=re=null,Fa=!1,Pi=is=0,Ya=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?re.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function _e(){if(Ce===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Ie===null?re.memoizedState:Ie.next;if(t!==null)Ie=t,Ce=e;else{if(e===null)throw re.alternate===null?Error(l(467)):Error(l(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ie===null?re.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function rs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hi(e){var t=Pi;return Pi+=1,Ya===null&&(Ya=[]),e=Sh(Ya,e,t),t=re,(Ie===null?t.memoizedState:Ie.next)===null&&(t=t.alternate,V.H=t===null||t.memoizedState===null?hf:Ll),e}function ss(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Hi(e);if(e.$$typeof===_)return $e(e)}throw Error(l(438,String(e)))}function zl(e){var t=null,n=re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=re.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=rs(),re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=te;return t.index++,n}function un(e,t){return typeof t=="function"?t(e):t}function os(e){var t=_e();return Ul(t,Ce,e)}function Ul(e,t,n){var i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=n;var s=e.baseQueue,c=i.pending;if(c!==null){if(s!==null){var d=s.next;s.next=c.next,c.next=d}t.baseQueue=s=c,i.pending=null}if(c=e.baseState,s===null)e.memoizedState=c;else{t=s.next;var p=d=null,w=null,U=t,O=!1;do{var B=U.lane&-536870913;if(B!==U.lane?(he&B)===B:(cn&B)===B){var M=U.revertLane;if(M===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),B===Pa&&(O=!0);else if((cn&M)===M){U=U.next,M===Pa&&(O=!0);continue}else B={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},w===null?(p=w=B,d=c):w=w.next=B,re.lanes|=M,kn|=M;B=U.action,fa&&n(c,B),c=U.hasEagerState?U.eagerState:n(c,B)}else M={lane:B,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},w===null?(p=w=M,d=c):w=w.next=M,re.lanes|=B,kn|=B;U=U.next}while(U!==null&&U!==t);if(w===null?d=c:w.next=p,!St(c,e.memoizedState)&&(qe=!0,O&&(n=Ha,n!==null)))throw n;e.memoizedState=c,e.baseState=d,e.baseQueue=w,i.lastRenderedState=c}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function xl(e){var t=_e(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,c=t.memoizedState;if(s!==null){n.pending=null;var d=s=s.next;do c=e(c,d.action),d=d.next;while(d!==s);St(c,t.memoizedState)||(qe=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,i]}function Rh(e,t,n){var i=re,s=_e(),c=pe;if(c){if(n===void 0)throw Error(l(407));n=n()}else n=t();var d=!St((Ce||s).memoizedState,n);if(d&&(s.memoizedState=n,qe=!0),s=s.queue,Rl(jh.bind(null,i,s,e),[e]),s.getSnapshot!==t||d||Ie!==null&&Ie.memoizedState.tag&1){if(i.flags|=2048,Ka(9,{destroy:void 0},Oh.bind(null,i,s,n,t),null),xe===null)throw Error(l(349));c||(cn&127)!==0||Vh(i,t,n)}return n}function Vh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t=rs(),re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Oh(e,t,n,i){t.value=n,t.getSnapshot=i,Bh(t)&&kh(e)}function jh(e,t,n){return n(function(){Bh(t)&&kh(e)})}function Bh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function kh(e){var t=ia(e,2);t!==null&&gt(t,e,2)}function Ml(e){var t=ot();if(typeof e=="function"){var n=e;if(e=n(),fa){Tn(!0);try{n()}finally{Tn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:e},t}function Lh(e,t,n,i){return e.baseState=n,Ul(e,Ce,typeof i=="function"?i:un)}function X0(e,t,n,i,s){if(us(e))throw Error(l(485));if(e=t.action,e!==null){var c={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){c.listeners.push(d)}};V.T!==null?n(!0):c.isTransition=!1,i(c),n=t.pending,n===null?(c.next=t.pending=c,Nh(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Nh(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var c=V.T,d={};V.T=d;try{var p=n(s,i),w=V.S;w!==null&&w(d,p),Gh(e,t,p)}catch(U){Dl(e,t,U)}finally{c!==null&&d.types!==null&&(c.types=d.types),V.T=c}}else try{c=n(s,i),Gh(e,t,c)}catch(U){Dl(e,t,U)}}function Gh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){_h(e,t,i)},function(i){return Dl(e,t,i)}):_h(e,t,n)}function _h(e,t,n){t.status="fulfilled",t.value=n,Ph(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Nh(e,n)))}function Dl(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Ph(t),t=t.next;while(t!==i)}e.action=null}function Ph(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Hh(e,t){return t}function Ih(e,t){if(pe){var n=xe.formState;if(n!==null){e:{var i=re;if(pe){if(Re){t:{for(var s=Re,c=jt;s.nodeType!==8;){if(!c){s=null;break t}if(s=kt(s.nextSibling),s===null){s=null;break t}}c=s.data,s=c==="F!"||c==="F"?s:null}if(s){Re=kt(s.nextSibling),i=s.data==="F!";break e}}Un(i)}i=!1}i&&(t=n[0])}}return n=ot(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hh,lastRenderedState:t},n.queue=i,n=cf.bind(null,re,i),i.dispatch=n,i=Ml(!1),c=kl.bind(null,re,!1,i.queue),i=ot(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=X0.bind(null,re,s,c,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function qh(e){var t=_e();return Xh(t,Ce,e)}function Xh(e,t,n){if(t=Ul(e,t,Hh)[0],e=os(un)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Hi(t)}catch(d){throw d===Ia?Jr:d}else i=t;t=_e();var s=t.queue,c=s.dispatch;return n!==t.memoizedState&&(re.flags|=2048,Ka(9,{destroy:void 0},F0.bind(null,s,n),null)),[i,c,e]}function F0(e,t){e.action=t}function Fh(e){var t=_e(),n=Ce;if(n!==null)return Xh(t,n,e);_e(),t=t.memoizedState,n=_e();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ka(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=re.updateQueue,t===null&&(t=rs(),re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Yh(){return _e().memoizedState}function ls(e,t,n,i){var s=ot();re.flags|=e,s.memoizedState=Ka(1|t,{destroy:void 0},n,i===void 0?null:i)}function cs(e,t,n,i){var s=_e();i=i===void 0?null:i;var c=s.memoizedState.inst;Ce!==null&&i!==null&&wl(i,Ce.memoizedState.deps)?s.memoizedState=Ka(t,c,n,i):(re.flags|=e,s.memoizedState=Ka(1|t,c,n,i))}function Kh(e,t){ls(8390656,8,e,t)}function Rl(e,t){cs(2048,8,e,t)}function Y0(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=rs(),re.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Qh(e){var t=_e().memoizedState;return Y0({ref:t,nextImpl:e}),function(){if((be&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function Zh(e,t){return cs(4,2,e,t)}function Jh(e,t){return cs(4,4,e,t)}function Wh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $h(e,t,n){n=n!=null?n.concat([e]):null,cs(4,4,Wh.bind(null,t,e),n)}function Vl(){}function ef(e,t){var n=_e();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&wl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function tf(e,t){var n=_e();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&wl(t,i[1]))return i[0];if(i=e(),fa){Tn(!0);try{e()}finally{Tn(!1)}}return n.memoizedState=[i,t],i}function Ol(e,t,n){return n===void 0||(cn&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=am(),re.lanes|=e,kn|=e,n)}function nf(e,t,n,i){return St(n,t)?n:Xa.current!==null?(e=Ol(e,n,i),St(e,t)||(qe=!0),e):(cn&42)===0||(cn&1073741824)!==0&&(he&261930)===0?(qe=!0,e.memoizedState=n):(e=am(),re.lanes|=e,kn|=e,t)}function af(e,t,n,i,s){var c=P.p;P.p=c!==0&&8>c?c:8;var d=V.T,p={};V.T=p,kl(e,!1,t,n);try{var w=s(),U=V.S;if(U!==null&&U(p,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var O=H0(w,i);Ii(e,t,O,zt(e))}else Ii(e,t,i,zt(e))}catch(B){Ii(e,t,{then:function(){},status:"rejected",reason:B},zt())}finally{P.p=c,d!==null&&p.types!==null&&(d.types=p.types),V.T=d}}function K0(){}function jl(e,t,n,i){if(e.tag!==5)throw Error(l(476));var s=rf(e).queue;af(e,s,t,X,n===null?K0:function(){return sf(e),n(i)})}function rf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:X},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function sf(e){var t=rf(e);t.next===null&&(t=e.alternate.memoizedState),Ii(e,t.next.queue,{},zt())}function Bl(){return $e(sr)}function of(){return _e().memoizedState}function lf(){return _e().memoizedState}function Q0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=zt();e=Dn(n);var i=Rn(t,e,n);i!==null&&(gt(i,t,n),Ni(i,t,n)),t={cache:ul()},e.payload=t;return}t=t.return}}function Z0(e,t,n){var i=zt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},us(e)?uf(t,n):(n=$o(e,t,n,i),n!==null&&(gt(n,e,i),df(n,t,i)))}function cf(e,t,n){var i=zt();Ii(e,t,n,i)}function Ii(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(us(e))uf(t,s);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var d=t.lastRenderedState,p=c(d,n);if(s.hasEagerState=!0,s.eagerState=p,St(p,d))return qr(e,t,s,0),xe===null&&Ir(),!1}catch{}if(n=$o(e,t,s,i),n!==null)return gt(n,e,i),df(n,t,i),!0}return!1}function kl(e,t,n,i){if(i={lane:2,revertLane:mc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},us(e)){if(t)throw Error(l(479))}else t=$o(e,n,i,2),t!==null&&gt(t,e,2)}function us(e){var t=e.alternate;return e===re||t!==null&&t===re}function uf(e,t){Fa=as=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function df(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,pd(e,n)}}var qi={readContext:$e,use:ss,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je};qi.useEffectEvent=je;var hf={readContext:$e,use:ss,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:Kh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ls(4194308,4,Wh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){ls(4,2,e,t)},useMemo:function(e,t){var n=ot();t=t===void 0?null:t;var i=e();if(fa){Tn(!0);try{e()}finally{Tn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=ot();if(n!==void 0){var s=n(t);if(fa){Tn(!0);try{n(t)}finally{Tn(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=Z0.bind(null,re,e),[i.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=Ml(e);var t=e.queue,n=cf.bind(null,re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Vl,useDeferredValue:function(e,t){var n=ot();return Ol(n,e,t)},useTransition:function(){var e=Ml(!1);return e=af.bind(null,re,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=re,s=ot();if(pe){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),xe===null)throw Error(l(349));(he&127)!==0||Vh(i,t,n)}s.memoizedState=n;var c={value:n,getSnapshot:t};return s.queue=c,Kh(jh.bind(null,i,c,e),[e]),i.flags|=2048,Ka(9,{destroy:void 0},Oh.bind(null,i,c,n,t),null),n},useId:function(){var e=ot(),t=xe.identifierPrefix;if(pe){var n=Kt,i=Yt;n=(i&~(1<<32-bt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=is++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=I0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Bl,useFormState:Ih,useActionState:Ih,useOptimistic:function(e){var t=ot();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=kl.bind(null,re,!0,n),n.dispatch=t,[e,t]},useMemoCache:zl,useCacheRefresh:function(){return ot().memoizedState=Q0.bind(null,re)},useEffectEvent:function(e){var t=ot(),n={impl:e};return t.memoizedState=n,function(){if((be&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}},Ll={readContext:$e,use:ss,useCallback:ef,useContext:$e,useEffect:Rl,useImperativeHandle:$h,useInsertionEffect:Zh,useLayoutEffect:Jh,useMemo:tf,useReducer:os,useRef:Yh,useState:function(){return os(un)},useDebugValue:Vl,useDeferredValue:function(e,t){var n=_e();return nf(n,Ce.memoizedState,e,t)},useTransition:function(){var e=os(un)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:Hi(e),t]},useSyncExternalStore:Rh,useId:of,useHostTransitionStatus:Bl,useFormState:qh,useActionState:qh,useOptimistic:function(e,t){var n=_e();return Lh(n,Ce,e,t)},useMemoCache:zl,useCacheRefresh:lf};Ll.useEffectEvent=Qh;var ff={readContext:$e,use:ss,useCallback:ef,useContext:$e,useEffect:Rl,useImperativeHandle:$h,useInsertionEffect:Zh,useLayoutEffect:Jh,useMemo:tf,useReducer:xl,useRef:Yh,useState:function(){return xl(un)},useDebugValue:Vl,useDeferredValue:function(e,t){var n=_e();return Ce===null?Ol(n,e,t):nf(n,Ce.memoizedState,e,t)},useTransition:function(){var e=xl(un)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:Hi(e),t]},useSyncExternalStore:Rh,useId:of,useHostTransitionStatus:Bl,useFormState:Fh,useActionState:Fh,useOptimistic:function(e,t){var n=_e();return Ce!==null?Lh(n,Ce,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:zl,useCacheRefresh:lf};ff.useEffectEvent=Qh;function Nl(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gl={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=zt(),s=Dn(i);s.payload=t,n!=null&&(s.callback=n),t=Rn(e,s,i),t!==null&&(gt(t,e,i),Ni(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=zt(),s=Dn(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Rn(e,s,i),t!==null&&(gt(t,e,i),Ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zt(),i=Dn(n);i.tag=2,t!=null&&(i.callback=t),t=Rn(e,i,n),t!==null&&(gt(t,e,n),Ni(t,e,n))}};function mf(e,t,n,i,s,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,d):t.prototype&&t.prototype.isPureReactComponent?!Di(n,i)||!Di(s,c):!0}function pf(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Gl.enqueueReplaceState(t,t.state,null)}function ma(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=b({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function gf(e){Hr(e)}function yf(e){console.error(e)}function vf(e){Hr(e)}function ds(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function bf(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function _l(e,t,n){return n=Dn(n),n.tag=3,n.payload={element:null},n.callback=function(){ds(e,t)},n}function Sf(e){return e=Dn(e),e.tag=3,e}function wf(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var c=i.value;e.payload=function(){return s(c)},e.callback=function(){bf(t,n,i)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){bf(t,n,i),typeof s!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var p=i.stack;this.componentDidCatch(i.value,{componentStack:p!==null?p:""})})}function J0(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&_a(t,n,s,!0),n=Tt.current,n!==null){switch(n.tag){case 31:case 13:return Bt===null?As():n.alternate===null&&Be===0&&(Be=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Wr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),dc(e,i,s)),!1;case 22:return n.flags|=65536,i===Wr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),dc(e,i,s)),!1}throw Error(l(435,n.tag))}return dc(e,i,s),As(),!1}if(pe)return t=Tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==rl&&(e=Error(l(422),{cause:i}),Oi(Rt(e,n)))):(i!==rl&&(t=Error(l(423),{cause:i}),Oi(Rt(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Rt(i,n),s=_l(e.stateNode,i,s),gl(e,s),Be!==4&&(Be=2)),!1;var c=Error(l(520),{cause:i});if(c=Rt(c,n),Wi===null?Wi=[c]:Wi.push(c),Be!==4&&(Be=2),t===null)return!0;i=Rt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=_l(n.stateNode,i,e),gl(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ln===null||!Ln.has(c))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Sf(s),wf(s,e,n,i),gl(n,s),!1}n=n.return}while(n!==null);return!1}var Pl=Error(l(461)),qe=!1;function et(e,t,n,i){t.child=e===null?Eh(t,null,n,i):ha(t,e.child,n,i)}function Tf(e,t,n,i,s){n=n.render;var c=t.ref;if("ref"in i){var d={};for(var p in i)p!=="ref"&&(d[p]=i[p])}else d=i;return la(t),i=Tl(e,t,n,d,c,s),p=Al(),e!==null&&!qe?(El(e,t,s),dn(e,t,s)):(pe&&p&&al(t),t.flags|=1,et(e,t,i,s),t.child)}function Af(e,t,n,i,s){if(e===null){var c=n.type;return typeof c=="function"&&!el(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,Ef(e,t,c,i,s)):(e=Fr(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Ql(e,s)){var d=c.memoizedProps;if(n=n.compare,n=n!==null?n:Di,n(d,i)&&e.ref===t.ref)return dn(e,t,s)}return t.flags|=1,e=rn(c,i),e.ref=t.ref,e.return=t,t.child=e}function Ef(e,t,n,i,s){if(e!==null){var c=e.memoizedProps;if(Di(c,i)&&e.ref===t.ref)if(qe=!1,t.pendingProps=i=c,Ql(e,s))(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,dn(e,t,s)}return Hl(e,t,n,i,s)}function Cf(e,t,n,i){var s=i.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~c}else i=0,t.child=null;return zf(e,t,c,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zr(t,c!==null?c.cachePool:null),c!==null?Uh(t,c):vl(),xh(t);else return i=t.lanes=536870912,zf(e,t,c!==null?c.baseLanes|n:n,n,i)}else c!==null?(Zr(t,c.cachePool),Uh(t,c),On(),t.memoizedState=null):(e!==null&&Zr(t,null),vl(),On());return et(e,t,s,n),t.child}function Xi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function zf(e,t,n,i,s){var c=hl();return c=c===null?null:{parent:He._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&Zr(t,null),vl(),xh(t),e!==null&&_a(e,t,i,!0),t.childLanes=s,null}function hs(e,t){return t=ms({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Uf(e,t,n){return ha(t,e.child,null,n),e=hs(t,t.pendingProps),e.flags|=2,At(t),t.memoizedState=null,e}function W0(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(pe){if(i.mode==="hidden")return e=hs(t,i),t.lanes=536870912,Xi(null,e);if(Sl(t),(e=Re)?(e=Gm(e,jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Cn!==null?{id:Yt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},n=ch(e),n.return=t,t.child=n,We=t,Re=null)):e=null,e===null)throw Un(t);return t.lanes=536870912,null}return hs(t,i)}var c=e.memoizedState;if(c!==null){var d=c.dehydrated;if(Sl(t),s)if(t.flags&256)t.flags&=-257,t=Uf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(qe||_a(e,t,n,!1),s=(n&e.childLanes)!==0,qe||s){if(i=xe,i!==null&&(d=gd(i,n),d!==0&&d!==c.retryLane))throw c.retryLane=d,ia(e,d),gt(i,e,d),Pl;As(),t=Uf(e,t,n)}else e=c.treeContext,Re=kt(d.nextSibling),We=t,pe=!0,zn=null,jt=!1,e!==null&&hh(t,e),t=hs(t,i),t.flags|=4096;return t}return e=rn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Hl(e,t,n,i,s){return la(t),n=Tl(e,t,n,i,void 0,s),i=Al(),e!==null&&!qe?(El(e,t,s),dn(e,t,s)):(pe&&i&&al(t),t.flags|=1,et(e,t,n,s),t.child)}function xf(e,t,n,i,s,c){return la(t),t.updateQueue=null,n=Dh(t,i,n,s),Mh(e),i=Al(),e!==null&&!qe?(El(e,t,c),dn(e,t,c)):(pe&&i&&al(t),t.flags|=1,et(e,t,n,c),t.child)}function Mf(e,t,n,i,s){if(la(t),t.stateNode===null){var c=ka,d=n.contextType;typeof d=="object"&&d!==null&&(c=$e(d)),c=new n(i,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Gl,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=i,c.state=t.memoizedState,c.refs={},ml(t),d=n.contextType,c.context=typeof d=="object"&&d!==null?$e(d):ka,c.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Nl(t,n,d,i),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(d=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),d!==c.state&&Gl.enqueueReplaceState(c,c.state,null),_i(t,i,c,s),Gi(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){c=t.stateNode;var p=t.memoizedProps,w=ma(n,p);c.props=w;var U=c.context,O=n.contextType;d=ka,typeof O=="object"&&O!==null&&(d=$e(O));var B=n.getDerivedStateFromProps;O=typeof B=="function"||typeof c.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,O||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p||U!==d)&&pf(t,c,i,d),Mn=!1;var M=t.memoizedState;c.state=M,_i(t,i,c,s),Gi(),U=t.memoizedState,p||M!==U||Mn?(typeof B=="function"&&(Nl(t,n,B,i),U=t.memoizedState),(w=Mn||mf(t,n,w,i,M,U,d))?(O||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=U),c.props=i,c.state=U,c.context=d,i=w):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{c=t.stateNode,pl(e,t),d=t.memoizedProps,O=ma(n,d),c.props=O,B=t.pendingProps,M=c.context,U=n.contextType,w=ka,typeof U=="object"&&U!==null&&(w=$e(U)),p=n.getDerivedStateFromProps,(U=typeof p=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==B||M!==w)&&pf(t,c,i,w),Mn=!1,M=t.memoizedState,c.state=M,_i(t,i,c,s),Gi();var R=t.memoizedState;d!==B||M!==R||Mn||e!==null&&e.dependencies!==null&&Kr(e.dependencies)?(typeof p=="function"&&(Nl(t,n,p,i),R=t.memoizedState),(O=Mn||mf(t,n,O,i,M,R,w)||e!==null&&e.dependencies!==null&&Kr(e.dependencies))?(U||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,R,w),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,R,w)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=R),c.props=i,c.state=R,c.context=w,i=O):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),i=!1)}return c=i,fs(e,t),i=(t.flags&128)!==0,c||i?(c=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&i?(t.child=ha(t,e.child,null,s),t.child=ha(t,null,n,s)):et(e,t,n,s),t.memoizedState=c.state,e=t.child):e=dn(e,t,s),e}function Df(e,t,n,i){return sa(),t.flags|=256,et(e,t,n,i),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ql(e){return{baseLanes:e,cachePool:vh()}}function Xl(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ct),e}function Rf(e,t,n){var i=t.pendingProps,s=!1,c=(t.flags&128)!==0,d;if((d=c)||(d=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),d&&(s=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(pe){if(s?Vn(t):On(),(e=Re)?(e=Gm(e,jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Cn!==null?{id:Yt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},n=ch(e),n.return=t,t.child=n,We=t,Re=null)):e=null,e===null)throw Un(t);return Uc(e)?t.lanes=32:t.lanes=536870912,null}var p=i.children;return i=i.fallback,s?(On(),s=t.mode,p=ms({mode:"hidden",children:p},s),i=ra(i,s,n,null),p.return=t,i.return=t,p.sibling=i,t.child=p,i=t.child,i.memoizedState=ql(n),i.childLanes=Xl(e,d,n),t.memoizedState=Il,Xi(null,i)):(Vn(t),Fl(t,p))}var w=e.memoizedState;if(w!==null&&(p=w.dehydrated,p!==null)){if(c)t.flags&256?(Vn(t),t.flags&=-257,t=Yl(e,t,n)):t.memoizedState!==null?(On(),t.child=e.child,t.flags|=128,t=null):(On(),p=i.fallback,s=t.mode,i=ms({mode:"visible",children:i.children},s),p=ra(p,s,n,null),p.flags|=2,i.return=t,p.return=t,i.sibling=p,t.child=i,ha(t,e.child,null,n),i=t.child,i.memoizedState=ql(n),i.childLanes=Xl(e,d,n),t.memoizedState=Il,t=Xi(null,i));else if(Vn(t),Uc(p)){if(d=p.nextSibling&&p.nextSibling.dataset,d)var U=d.dgst;d=U,i=Error(l(419)),i.stack="",i.digest=d,Oi({value:i,source:null,stack:null}),t=Yl(e,t,n)}else if(qe||_a(e,t,n,!1),d=(n&e.childLanes)!==0,qe||d){if(d=xe,d!==null&&(i=gd(d,n),i!==0&&i!==w.retryLane))throw w.retryLane=i,ia(e,i),gt(d,e,i),Pl;zc(p)||As(),t=Yl(e,t,n)}else zc(p)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,Re=kt(p.nextSibling),We=t,pe=!0,zn=null,jt=!1,e!==null&&hh(t,e),t=Fl(t,i.children),t.flags|=4096);return t}return s?(On(),p=i.fallback,s=t.mode,w=e.child,U=w.sibling,i=rn(w,{mode:"hidden",children:i.children}),i.subtreeFlags=w.subtreeFlags&65011712,U!==null?p=rn(U,p):(p=ra(p,s,n,null),p.flags|=2),p.return=t,i.return=t,i.sibling=p,t.child=i,Xi(null,i),i=t.child,p=e.child.memoizedState,p===null?p=ql(n):(s=p.cachePool,s!==null?(w=He._currentValue,s=s.parent!==w?{parent:w,pool:w}:s):s=vh(),p={baseLanes:p.baseLanes|n,cachePool:s}),i.memoizedState=p,i.childLanes=Xl(e,d,n),t.memoizedState=Il,Xi(e.child,i)):(Vn(t),n=e.child,e=n.sibling,n=rn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Fl(e,t){return t=ms({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ms(e,t){return e=wt(22,e,null,t),e.lanes=0,e}function Yl(e,t,n){return ha(t,e.child,null,n),e=Fl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vf(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ll(e.return,t,n)}function Kl(e,t,n,i,s,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:c}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=n,d.tailMode=s,d.treeForkCount=c)}function Of(e,t,n){var i=t.pendingProps,s=i.revealOrder,c=i.tail;i=i.children;var d=Ge.current,p=(d&2)!==0;if(p?(d=d&1|2,t.flags|=128):d&=1,I(Ge,d),et(e,t,i,n),i=pe?Vi:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vf(e,n,t);else if(e.tag===19)Vf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ns(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Kl(t,!1,s,n,c,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ns(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Kl(t,!0,n,null,c,i);break;case"together":Kl(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(_a(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ql(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Kr(e)))}function $0(e,t,n){switch(t.tag){case 3:st(t,t.stateNode.containerInfo),xn(t,He,e.memoizedState.cache),sa();break;case 27:case 5:yi(t);break;case 4:st(t,t.stateNode.containerInfo);break;case 10:xn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Sl(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Vn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Rf(e,t,n):(Vn(t),e=dn(e,t,n),e!==null?e.sibling:null);Vn(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(_a(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Of(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),I(Ge,Ge.current),i)break;return null;case 22:return t.lanes=0,Cf(e,t,n,t.pendingProps);case 24:xn(t,He,e.memoizedState.cache)}return dn(e,t,n)}function jf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!Ql(e,n)&&(t.flags&128)===0)return qe=!1,$0(e,t,n);qe=(e.flags&131072)!==0}else qe=!1,pe&&(t.flags&1048576)!==0&&dh(t,Vi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ua(t.elementType),t.type=e,typeof e=="function")el(e)?(i=ma(e,i),t.tag=1,t=Mf(null,t,e,i,n)):(t.tag=0,t=Hl(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===q){t.tag=11,t=Tf(null,t,e,i,n);break e}else if(s===Y){t.tag=14,t=Af(null,t,e,i,n);break e}}throw t=Pe(e)||e,Error(l(306,t,""))}}return t;case 0:return Hl(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=ma(i,t.pendingProps),Mf(e,t,i,s,n);case 3:e:{if(st(t,t.stateNode.containerInfo),e===null)throw Error(l(387));i=t.pendingProps;var c=t.memoizedState;s=c.element,pl(e,t),_i(t,i,null,n);var d=t.memoizedState;if(i=d.cache,xn(t,He,i),i!==c.cache&&cl(t,[He],n,!0),Gi(),i=d.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Df(e,t,i,n);break e}else if(i!==s){s=Rt(Error(l(424)),t),Oi(s),t=Df(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=kt(e.firstChild),We=t,pe=!0,zn=null,jt=!0,n=Eh(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sa(),i===s){t=dn(e,t,n);break e}et(e,t,i,n)}t=t.child}return t;case 26:return fs(e,t),e===null?(n=Xm(t.type,null,t.pendingProps,null))?t.memoizedState=n:pe||(n=t.type,e=t.pendingProps,i=Ds(ce.current).createElement(n),i[Je]=t,i[ut]=e,tt(i,n,e),Qe(i),t.stateNode=i):t.memoizedState=Xm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return yi(t),e===null&&pe&&(i=t.stateNode=Hm(t.type,t.pendingProps,ce.current),We=t,jt=!0,s=Re,Pn(t.type)?(xc=s,Re=kt(i.firstChild)):Re=s),et(e,t,t.pendingProps.children,n),fs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&pe&&((s=i=Re)&&(i=Mb(i,t.type,t.pendingProps,jt),i!==null?(t.stateNode=i,We=t,Re=kt(i.firstChild),jt=!1,s=!0):s=!1),s||Un(t)),yi(t),s=t.type,c=t.pendingProps,d=e!==null?e.memoizedProps:null,i=c.children,Ac(s,c)?i=null:d!==null&&Ac(s,d)&&(t.flags|=32),t.memoizedState!==null&&(s=Tl(e,t,q0,null,null,n),sr._currentValue=s),fs(e,t),et(e,t,i,n),t.child;case 6:return e===null&&pe&&((e=n=Re)&&(n=Db(n,t.pendingProps,jt),n!==null?(t.stateNode=n,We=t,Re=null,e=!0):e=!1),e||Un(t)),null;case 13:return Rf(e,t,n);case 4:return st(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ha(t,null,i,n):et(e,t,i,n),t.child;case 11:return Tf(e,t,t.type,t.pendingProps,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,xn(t,t.type,i.value),et(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,la(t),s=$e(s),i=i(s),t.flags|=1,et(e,t,i,n),t.child;case 14:return Af(e,t,t.type,t.pendingProps,n);case 15:return Ef(e,t,t.type,t.pendingProps,n);case 19:return Of(e,t,n);case 31:return W0(e,t,n);case 22:return Cf(e,t,n,t.pendingProps);case 24:return la(t),i=$e(He),e===null?(s=hl(),s===null&&(s=xe,c=ul(),s.pooledCache=c,c.refCount++,c!==null&&(s.pooledCacheLanes|=n),s=c),t.memoizedState={parent:i,cache:s},ml(t),xn(t,He,s)):((e.lanes&n)!==0&&(pl(e,t),_i(t,null,null,n),Gi()),s=e.memoizedState,c=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),xn(t,He,i)):(i=c.cache,xn(t,He,i),i!==s.cache&&cl(t,[He],n,!0))),et(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function hn(e){e.flags|=4}function Zl(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(om())e.flags|=8192;else throw da=Wr,fl}else e.flags&=-16777217}function Bf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zm(t))if(om())e.flags|=8192;else throw da=Wr,fl}function ps(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?fd():536870912,e.lanes|=t,Wa|=t)}function Fi(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function eb(e,t,n){var i=t.pendingProps;switch(il(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ln(He),Ne(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ga(t)?hn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,sl())),Ve(t),null;case 26:var s=t.type,c=t.memoizedState;return e===null?(hn(t),c!==null?(Ve(t),Bf(t,c)):(Ve(t),Zl(t,s,null,i,n))):c?c!==e.memoizedState?(hn(t),Ve(t),Bf(t,c)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&hn(t),Ve(t),Zl(t,s,e,i,n)),null;case 27:if(zr(t),n=ce.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&hn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Ve(t),null}e=Q.current,Ga(t)?fh(t):(e=Hm(s,i,n),t.stateNode=e,hn(t))}return Ve(t),null;case 5:if(zr(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&hn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Ve(t),null}if(c=Q.current,Ga(t))fh(t);else{var d=Ds(ce.current);switch(c){case 1:c=d.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:c=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":c=d.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":c=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":c=d.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?d.createElement(s,{is:i.is}):d.createElement(s)}}c[Je]=t,c[ut]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)c.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=c;e:switch(tt(c,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&hn(t)}}return Ve(t),Zl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&hn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(e=ce.current,Ga(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=We,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[Je]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Rm(e.nodeValue,n)),e||Un(t,!0)}else e=Ds(e).createTextNode(i),e[Je]=t,t.stateNode=e}return Ve(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ga(t),n!==null){if(e===null){if(!i)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[Je]=t}else sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else n=sl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(At(t),t):(At(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Ve(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Ga(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[Je]=t}else sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),s=!1}else s=sl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(At(t),t):(At(t),null)}return At(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ps(t,t.updateQueue),Ve(t),null);case 4:return Ne(),e===null&&vc(t.stateNode.containerInfo),Ve(t),null;case 10:return ln(t.type),Ve(t),null;case 19:if(k(Ge),i=t.memoizedState,i===null)return Ve(t),null;if(s=(t.flags&128)!==0,c=i.rendering,c===null)if(s)Fi(i,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=ns(e),c!==null){for(t.flags|=128,Fi(i,!1),e=c.updateQueue,t.updateQueue=e,ps(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)lh(n,e),n=n.sibling;return I(Ge,Ge.current&1|2),pe&&sn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&yt()>Ss&&(t.flags|=128,s=!0,Fi(i,!1),t.lanes=4194304)}else{if(!s)if(e=ns(c),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,ps(t,e),Fi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!pe)return Ve(t),null}else 2*yt()-i.renderingStartTime>Ss&&n!==536870912&&(t.flags|=128,s=!0,Fi(i,!1),t.lanes=4194304);i.isBackwards?(c.sibling=t.child,t.child=c):(e=i.last,e!==null?e.sibling=c:t.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=yt(),e.sibling=null,n=Ge.current,I(Ge,s?n&1|2:n&1),pe&&sn(t,i.treeForkCount),e):(Ve(t),null);case 22:case 23:return At(t),bl(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),n=t.updateQueue,n!==null&&ps(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&k(ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ln(He),Ve(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function tb(e,t){switch(il(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ln(He),Ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return zr(t),null;case 31:if(t.memoizedState!==null){if(At(t),t.alternate===null)throw Error(l(340));sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(At(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return k(Ge),null;case 4:return Ne(),null;case 10:return ln(t.type),null;case 22:case 23:return At(t),bl(),e!==null&&k(ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ln(He),null;case 25:return null;default:return null}}function kf(e,t){switch(il(t),t.tag){case 3:ln(He),Ne();break;case 26:case 27:case 5:zr(t);break;case 4:Ne();break;case 31:t.memoizedState!==null&&At(t);break;case 13:At(t);break;case 19:k(Ge);break;case 10:ln(t.type);break;case 22:case 23:At(t),bl(),e!==null&&k(ca);break;case 24:ln(He)}}function Yi(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var c=n.create,d=n.inst;i=c(),d.destroy=i}n=n.next}while(n!==s)}}catch(p){Ae(t,t.return,p)}}function jn(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var c=s.next;i=c;do{if((i.tag&e)===e){var d=i.inst,p=d.destroy;if(p!==void 0){d.destroy=void 0,s=t;var w=n,U=p;try{U()}catch(O){Ae(s,w,O)}}}i=i.next}while(i!==c)}}catch(O){Ae(t,t.return,O)}}function Lf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{zh(t,n)}catch(i){Ae(e,e.return,i)}}}function Nf(e,t,n){n.props=ma(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ae(e,t,i)}}function Ki(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){Ae(e,t,s)}}function Qt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){Ae(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Ae(e,t,s)}else n.current=null}function Gf(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){Ae(e,e.return,s)}}function Jl(e,t,n){try{var i=e.stateNode;Ab(i,e.type,n,t),i[ut]=t}catch(s){Ae(e,e.return,s)}}function _f(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pn(e.type)||e.tag===4}function Wl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $l(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nn));else if(i!==4&&(i===27&&Pn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($l(e,t,n),e=e.sibling;e!==null;)$l(e,t,n),e=e.sibling}function gs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Pn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}function Pf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);tt(t,i,n),t[Je]=e,t[ut]=n}catch(c){Ae(e,e.return,c)}}var fn=!1,Xe=!1,ec=!1,Hf=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function nb(e,t){if(e=e.containerInfo,wc=Ls,e=$d(e),Yo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var d=0,p=-1,w=-1,U=0,O=0,B=e,M=null;t:for(;;){for(var R;B!==n||s!==0&&B.nodeType!==3||(p=d+s),B!==c||i!==0&&B.nodeType!==3||(w=d+i),B.nodeType===3&&(d+=B.nodeValue.length),(R=B.firstChild)!==null;)M=B,B=R;for(;;){if(B===e)break t;if(M===n&&++U===s&&(p=d),M===c&&++O===i&&(w=d),(R=B.nextSibling)!==null)break;B=M,M=B.parentNode}B=R}n=p===-1||w===-1?null:{start:p,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tc={focusedElem:e,selectionRange:n},Ls=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,s=c.memoizedProps,c=c.memoizedState,i=n.stateNode;try{var F=ma(n.type,s);e=i.getSnapshotBeforeUpdate(F,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ae(n,n.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Cc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function If(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:pn(e,n),i&4&&Yi(5,n);break;case 1:if(pn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){Ae(n,n.return,d)}else{var s=ma(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ae(n,n.return,d)}}i&64&&Lf(n),i&512&&Ki(n,n.return);break;case 3:if(pn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{zh(e,t)}catch(d){Ae(n,n.return,d)}}break;case 27:t===null&&i&4&&Pf(n);case 26:case 5:pn(e,n),t===null&&i&4&&Gf(n),i&512&&Ki(n,n.return);break;case 12:pn(e,n);break;case 31:pn(e,n),i&4&&Ff(e,n);break;case 13:pn(e,n),i&4&&Yf(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=db.bind(null,n),Rb(e,n))));break;case 22:if(i=n.memoizedState!==null||fn,!i){t=t!==null&&t.memoizedState!==null||Xe,s=fn;var c=Xe;fn=i,(Xe=t)&&!c?gn(e,n,(n.subtreeFlags&8772)!==0):pn(e,n),fn=s,Xe=c}break;case 30:break;default:pn(e,n)}}function qf(e){var t=e.alternate;t!==null&&(e.alternate=null,qf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Do(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,ht=!1;function mn(e,t,n){for(n=n.child;n!==null;)Xf(e,t,n),n=n.sibling}function Xf(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(vi,n)}catch{}switch(n.tag){case 26:Xe||Qt(n,t),mn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xe||Qt(n,t);var i=Oe,s=ht;Pn(n.type)&&(Oe=n.stateNode,ht=!1),mn(e,t,n),ar(n.stateNode),Oe=i,ht=s;break;case 5:Xe||Qt(n,t);case 6:if(i=Oe,s=ht,Oe=null,mn(e,t,n),Oe=i,ht=s,Oe!==null)if(ht)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(n.stateNode)}catch(c){Ae(n,t,c)}else try{Oe.removeChild(n.stateNode)}catch(c){Ae(n,t,c)}break;case 18:Oe!==null&&(ht?(e=Oe,Lm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),si(e)):Lm(Oe,n.stateNode));break;case 4:i=Oe,s=ht,Oe=n.stateNode.containerInfo,ht=!0,mn(e,t,n),Oe=i,ht=s;break;case 0:case 11:case 14:case 15:jn(2,n,t),Xe||jn(4,n,t),mn(e,t,n);break;case 1:Xe||(Qt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Nf(n,t,i)),mn(e,t,n);break;case 21:mn(e,t,n);break;case 22:Xe=(i=Xe)||n.memoizedState!==null,mn(e,t,n),Xe=i;break;default:mn(e,t,n)}}function Ff(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{si(e)}catch(n){Ae(t,t.return,n)}}}function Yf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{si(e)}catch(n){Ae(t,t.return,n)}}function ab(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Hf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Hf),t;default:throw Error(l(435,e.tag))}}function ys(e,t){var n=ab(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=hb.bind(null,e,i);i.then(s,s)}})}function ft(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],c=e,d=t,p=d;e:for(;p!==null;){switch(p.tag){case 27:if(Pn(p.type)){Oe=p.stateNode,ht=!1;break e}break;case 5:Oe=p.stateNode,ht=!1;break e;case 3:case 4:Oe=p.stateNode.containerInfo,ht=!0;break e}p=p.return}if(Oe===null)throw Error(l(160));Xf(c,d,s),Oe=null,ht=!1,c=s.alternate,c!==null&&(c.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Kf(t,e),t=t.sibling}var Ht=null;function Kf(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ft(t,e),mt(e),i&4&&(jn(3,e,e.return),Yi(3,e),jn(5,e,e.return));break;case 1:ft(t,e),mt(e),i&512&&(Xe||n===null||Qt(n,n.return)),i&64&&fn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=Ht;if(ft(t,e),mt(e),i&512&&(Xe||n===null||Qt(n,n.return)),i&4){var c=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;t:switch(i){case"title":c=s.getElementsByTagName("title")[0],(!c||c[wi]||c[Je]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=s.createElement(i),s.head.insertBefore(c,s.querySelector("head > title"))),tt(c,i,n),c[Je]=e,Qe(c),i=c;break e;case"link":var d=Km("link","href",s).get(i+(n.href||""));if(d){for(var p=0;p<d.length;p++)if(c=d[p],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(p,1);break t}}c=s.createElement(i),tt(c,i,n),s.head.appendChild(c);break;case"meta":if(d=Km("meta","content",s).get(i+(n.content||""))){for(p=0;p<d.length;p++)if(c=d[p],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(p,1);break t}}c=s.createElement(i),tt(c,i,n),s.head.appendChild(c);break;default:throw Error(l(468,i))}c[Je]=e,Qe(c),i=c}e.stateNode=i}else Qm(s,e.type,e.stateNode);else e.stateNode=Ym(s,i,e.memoizedProps);else c!==i?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,i===null?Qm(s,e.type,e.stateNode):Ym(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Jl(e,e.memoizedProps,n.memoizedProps)}break;case 27:ft(t,e),mt(e),i&512&&(Xe||n===null||Qt(n,n.return)),n!==null&&i&4&&Jl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ft(t,e),mt(e),i&512&&(Xe||n===null||Qt(n,n.return)),e.flags&32){s=e.stateNode;try{Ma(s,"")}catch(F){Ae(e,e.return,F)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Jl(e,s,n!==null?n.memoizedProps:s)),i&1024&&(ec=!0);break;case 6:if(ft(t,e),mt(e),i&4){if(e.stateNode===null)throw Error(l(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(F){Ae(e,e.return,F)}}break;case 3:if(Os=null,s=Ht,Ht=Rs(t.containerInfo),ft(t,e),Ht=s,mt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{si(t.containerInfo)}catch(F){Ae(e,e.return,F)}ec&&(ec=!1,Qf(e));break;case 4:i=Ht,Ht=Rs(e.stateNode.containerInfo),ft(t,e),mt(e),Ht=i;break;case 12:ft(t,e),mt(e);break;case 31:ft(t,e),mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ys(e,i)));break;case 13:ft(t,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(bs=yt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ys(e,i)));break;case 22:s=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,U=fn,O=Xe;if(fn=U||s,Xe=O||w,ft(t,e),Xe=O,fn=U,mt(e),i&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||w||fn||Xe||pa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(c=w.stateNode,s)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{p=w.stateNode;var B=w.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null;p.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(F){Ae(w,w.return,F)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=s?"":w.memoizedProps}catch(F){Ae(w,w.return,F)}}}else if(t.tag===18){if(n===null){w=t;try{var R=w.stateNode;s?Nm(R,!0):Nm(w.stateNode,!1)}catch(F){Ae(w,w.return,F)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,ys(e,n))));break;case 19:ft(t,e),mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ys(e,i)));break;case 30:break;case 21:break;default:ft(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(_f(i)){n=i;break}i=i.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var s=n.stateNode,c=Wl(e);gs(e,c,s);break;case 5:var d=n.stateNode;n.flags&32&&(Ma(d,""),n.flags&=-33);var p=Wl(e);gs(e,p,d);break;case 3:case 4:var w=n.stateNode.containerInfo,U=Wl(e);$l(e,U,w);break;default:throw Error(l(161))}}catch(O){Ae(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Qf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function pn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)If(e,t.alternate,t),t=t.sibling}function pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:jn(4,t,t.return),pa(t);break;case 1:Qt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Nf(t,t.return,n),pa(t);break;case 27:ar(t.stateNode);case 26:case 5:Qt(t,t.return),pa(t);break;case 22:t.memoizedState===null&&pa(t);break;case 30:pa(t);break;default:pa(t)}e=e.sibling}}function gn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,c=t,d=c.flags;switch(c.tag){case 0:case 11:case 15:gn(s,c,n),Yi(4,c);break;case 1:if(gn(s,c,n),i=c,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(U){Ae(i,i.return,U)}if(i=c,s=i.updateQueue,s!==null){var p=i.stateNode;try{var w=s.shared.hiddenCallbacks;if(w!==null)for(s.shared.hiddenCallbacks=null,s=0;s<w.length;s++)Ch(w[s],p)}catch(U){Ae(i,i.return,U)}}n&&d&64&&Lf(c),Ki(c,c.return);break;case 27:Pf(c);case 26:case 5:gn(s,c,n),n&&i===null&&d&4&&Gf(c),Ki(c,c.return);break;case 12:gn(s,c,n);break;case 31:gn(s,c,n),n&&d&4&&Ff(s,c);break;case 13:gn(s,c,n),n&&d&4&&Yf(s,c);break;case 22:c.memoizedState===null&&gn(s,c,n),Ki(c,c.return);break;case 30:break;default:gn(s,c,n)}t=t.sibling}}function tc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ji(n))}function nc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ji(e))}function It(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zf(e,t,n,i),t=t.sibling}function Zf(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:It(e,t,n,i),s&2048&&Yi(9,t);break;case 1:It(e,t,n,i);break;case 3:It(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ji(e)));break;case 12:if(s&2048){It(e,t,n,i),e=t.stateNode;try{var c=t.memoizedProps,d=c.id,p=c.onPostCommit;typeof p=="function"&&p(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Ae(t,t.return,w)}}else It(e,t,n,i);break;case 31:It(e,t,n,i);break;case 13:It(e,t,n,i);break;case 23:break;case 22:c=t.stateNode,d=t.alternate,t.memoizedState!==null?c._visibility&2?It(e,t,n,i):Qi(e,t):c._visibility&2?It(e,t,n,i):(c._visibility|=2,Qa(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&tc(d,t);break;case 24:It(e,t,n,i),s&2048&&nc(t.alternate,t);break;default:It(e,t,n,i)}}function Qa(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,d=t,p=n,w=i,U=d.flags;switch(d.tag){case 0:case 11:case 15:Qa(c,d,p,w,s),Yi(8,d);break;case 23:break;case 22:var O=d.stateNode;d.memoizedState!==null?O._visibility&2?Qa(c,d,p,w,s):Qi(c,d):(O._visibility|=2,Qa(c,d,p,w,s)),s&&U&2048&&tc(d.alternate,d);break;case 24:Qa(c,d,p,w,s),s&&U&2048&&nc(d.alternate,d);break;default:Qa(c,d,p,w,s)}t=t.sibling}}function Qi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Qi(n,i),s&2048&&tc(i.alternate,i);break;case 24:Qi(n,i),s&2048&&nc(i.alternate,i);break;default:Qi(n,i)}t=t.sibling}}var Zi=8192;function Za(e,t,n){if(e.subtreeFlags&Zi)for(e=e.child;e!==null;)Jf(e,t,n),e=e.sibling}function Jf(e,t,n){switch(e.tag){case 26:Za(e,t,n),e.flags&Zi&&e.memoizedState!==null&&Ib(n,Ht,e.memoizedState,e.memoizedProps);break;case 5:Za(e,t,n);break;case 3:case 4:var i=Ht;Ht=Rs(e.stateNode.containerInfo),Za(e,t,n),Ht=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Zi,Zi=16777216,Za(e,t,n),Zi=i):Za(e,t,n));break;default:Za(e,t,n)}}function Wf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,em(i,e)}Wf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$f(e),e=e.sibling}function $f(e){switch(e.tag){case 0:case 11:case 15:Ji(e),e.flags&2048&&jn(9,e,e.return);break;case 3:Ji(e);break;case 12:Ji(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,vs(e)):Ji(e);break;default:Ji(e)}}function vs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,em(i,e)}Wf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:jn(8,t,t.return),vs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,vs(t));break;default:vs(t)}e=e.sibling}}function em(e,t){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:jn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ji(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ze=i;else e:for(n=e;Ze!==null;){i=Ze;var s=i.sibling,c=i.return;if(qf(i),i===n){Ze=null;break e}if(s!==null){s.return=c,Ze=s;break e}Ze=c}}}var ib={getCacheForType:function(e){var t=$e(He),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $e(He).controller.signal}},rb=typeof WeakMap=="function"?WeakMap:Map,be=0,xe=null,ue=null,he=0,Te=0,Et=null,Bn=!1,Ja=!1,ac=!1,yn=0,Be=0,kn=0,ga=0,ic=0,Ct=0,Wa=0,Wi=null,pt=null,rc=!1,bs=0,tm=0,Ss=1/0,ws=null,Ln=null,Ye=0,Nn=null,$a=null,vn=0,sc=0,oc=null,nm=null,$i=0,lc=null;function zt(){return(be&2)!==0&&he!==0?he&-he:V.T!==null?mc():yd()}function am(){if(Ct===0)if((he&536870912)===0||pe){var e=Mr;Mr<<=1,(Mr&3932160)===0&&(Mr=262144),Ct=e}else Ct=536870912;return e=Tt.current,e!==null&&(e.flags|=32),Ct}function gt(e,t,n){(e===xe&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(ei(e,0),Gn(e,he,Ct,!1)),Si(e,n),((be&2)===0||e!==xe)&&(e===xe&&((be&2)===0&&(ga|=n),Be===4&&Gn(e,he,Ct,!1)),Zt(e))}function im(e,t,n){if((be&6)!==0)throw Error(l(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||bi(e,t),s=i?lb(e,t):uc(e,t,!0),c=i;do{if(s===0){Ja&&!i&&Gn(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!sb(n)){s=uc(e,t,!1),c=!1;continue}if(s===2){if(c=t,e.errorRecoveryDisabledLanes&c)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var p=e;s=Wi;var w=p.current.memoizedState.isDehydrated;if(w&&(ei(p,d).flags|=256),d=uc(p,d,!1),d!==2){if(ac&&!w){p.errorRecoveryDisabledLanes|=c,ga|=c,s=4;break e}c=pt,pt=s,c!==null&&(pt===null?pt=c:pt.push.apply(pt,c))}s=d}if(c=!1,s!==2)continue}}if(s===1){ei(e,0),Gn(e,t,0,!0);break}e:{switch(i=e,c=s,c){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:Gn(i,t,Ct,!Bn);break e;case 2:pt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(s=bs+300-yt(),10<s)){if(Gn(i,t,Ct,!Bn),Rr(i,0,!0)!==0)break e;vn=t,i.timeoutHandle=Bm(rm.bind(null,i,n,pt,ws,rc,t,Ct,ga,Wa,Bn,c,"Throttled",-0,0),s);break e}rm(i,n,pt,ws,rc,t,Ct,ga,Wa,Bn,c,null,-0,0)}}break}while(!0);Zt(e)}function rm(e,t,n,i,s,c,d,p,w,U,O,B,M,R){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},Jf(t,c,B);var F=(c&62914560)===c?bs-yt():(c&4194048)===c?tm-yt():0;if(F=qb(B,F),F!==null){vn=c,e.cancelPendingCommit=F(fm.bind(null,e,t,c,n,i,s,d,p,w,O,B,null,M,R)),Gn(e,c,d,!U);return}}fm(e,t,c,n,i,s,d,p,w)}function sb(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],c=s.getSnapshot;s=s.value;try{if(!St(c(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gn(e,t,n,i){t&=~ic,t&=~ga,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var c=31-bt(s),d=1<<c;i[c]=-1,s&=~d}n!==0&&md(e,n,t)}function Ts(){return(be&6)===0?(er(0),!1):!0}function cc(){if(ue!==null){if(Te===0)var e=ue.return;else e=ue,on=oa=null,Cl(e),qa=null,ki=0,e=ue;for(;e!==null;)kf(e.alternate,e),e=e.return;ue=null}}function ei(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,zb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),vn=0,cc(),xe=e,ue=n=rn(e.current,null),he=t,Te=0,Et=null,Bn=!1,Ja=bi(e,t),ac=!1,Wa=Ct=ic=ga=kn=Be=0,pt=Wi=null,rc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-bt(i),c=1<<s;t|=e[s],i&=~c}return yn=t,Ir(),n}function sm(e,t){re=null,V.H=qi,t===Ia||t===Jr?(t=wh(),Te=3):t===fl?(t=wh(),Te=4):Te=t===Pl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Et=t,ue===null&&(Be=1,ds(e,Rt(t,e.current)))}function om(){var e=Tt.current;return e===null?!0:(he&4194048)===he?Bt===null:(he&62914560)===he||(he&536870912)!==0?e===Bt:!1}function lm(){var e=V.H;return V.H=qi,e===null?qi:e}function cm(){var e=V.A;return V.A=ib,e}function As(){Be=4,Bn||(he&4194048)!==he&&Tt.current!==null||(Ja=!0),(kn&134217727)===0&&(ga&134217727)===0||xe===null||Gn(xe,he,Ct,!1)}function uc(e,t,n){var i=be;be|=2;var s=lm(),c=cm();(xe!==e||he!==t)&&(ws=null,ei(e,t)),t=!1;var d=Be;e:do try{if(Te!==0&&ue!==null){var p=ue,w=Et;switch(Te){case 8:cc(),d=6;break e;case 3:case 2:case 9:case 6:Tt.current===null&&(t=!0);var U=Te;if(Te=0,Et=null,ti(e,p,w,U),n&&Ja){d=0;break e}break;default:U=Te,Te=0,Et=null,ti(e,p,w,U)}}ob(),d=Be;break}catch(O){sm(e,O)}while(!0);return t&&e.shellSuspendCounter++,on=oa=null,be=i,V.H=s,V.A=c,ue===null&&(xe=null,he=0,Ir()),d}function ob(){for(;ue!==null;)um(ue)}function lb(e,t){var n=be;be|=2;var i=lm(),s=cm();xe!==e||he!==t?(ws=null,Ss=yt()+500,ei(e,t)):Ja=bi(e,t);e:do try{if(Te!==0&&ue!==null){t=ue;var c=Et;t:switch(Te){case 1:Te=0,Et=null,ti(e,t,c,1);break;case 2:case 9:if(bh(c)){Te=0,Et=null,dm(t);break}t=function(){Te!==2&&Te!==9||xe!==e||(Te=7),Zt(e)},c.then(t,t);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:bh(c)?(Te=0,Et=null,dm(t)):(Te=0,Et=null,ti(e,t,c,7));break;case 5:var d=null;switch(ue.tag){case 26:d=ue.memoizedState;case 5:case 27:var p=ue;if(d?Zm(d):p.stateNode.complete){Te=0,Et=null;var w=p.sibling;if(w!==null)ue=w;else{var U=p.return;U!==null?(ue=U,Es(U)):ue=null}break t}}Te=0,Et=null,ti(e,t,c,5);break;case 6:Te=0,Et=null,ti(e,t,c,6);break;case 8:cc(),Be=6;break e;default:throw Error(l(462))}}cb();break}catch(O){sm(e,O)}while(!0);return on=oa=null,V.H=i,V.A=s,be=n,ue!==null?0:(xe=null,he=0,Ir(),Be)}function cb(){for(;ue!==null&&!Vv();)um(ue)}function um(e){var t=jf(e.alternate,e,yn);e.memoizedProps=e.pendingProps,t===null?Es(e):ue=t}function dm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=xf(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=xf(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Cl(t);default:kf(n,t),t=ue=lh(t,yn),t=jf(n,t,yn)}e.memoizedProps=e.pendingProps,t===null?Es(e):ue=t}function ti(e,t,n,i){on=oa=null,Cl(t),qa=null,ki=0;var s=t.return;try{if(J0(e,s,t,n,he)){Be=1,ds(e,Rt(n,e.current)),ue=null;return}}catch(c){if(s!==null)throw ue=s,c;Be=1,ds(e,Rt(n,e.current)),ue=null;return}t.flags&32768?(pe||i===1?e=!0:Ja||(he&536870912)!==0?e=!1:(Bn=e=!0,(i===2||i===9||i===3||i===6)&&(i=Tt.current,i!==null&&i.tag===13&&(i.flags|=16384))),hm(t,e)):Es(t)}function Es(e){var t=e;do{if((t.flags&32768)!==0){hm(t,Bn);return}e=t.return;var n=eb(t.alternate,t,yn);if(n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);Be===0&&(Be=5)}function hm(e,t){do{var n=tb(e.alternate,e);if(n!==null){n.flags&=32767,ue=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=n}while(e!==null);Be=6,ue=null}function fm(e,t,n,i,s,c,d,p,w){e.cancelPendingCommit=null;do Cs();while(Ye!==0);if((be&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(c=t.lanes|t.childLanes,c|=Wo,Hv(e,n,c,d,p,w),e===xe&&(ue=xe=null,he=0),$a=t,Nn=e,vn=n,sc=c,oc=s,nm=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fb(Ur,function(){return vm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=V.T,V.T=null,s=P.p,P.p=2,d=be,be|=4;try{nb(e,t,n)}finally{be=d,P.p=s,V.T=i}}Ye=1,mm(),pm(),gm()}}function mm(){if(Ye===1){Ye=0;var e=Nn,t=$a,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=V.T,V.T=null;var i=P.p;P.p=2;var s=be;be|=4;try{Kf(t,e);var c=Tc,d=$d(e.containerInfo),p=c.focusedElem,w=c.selectionRange;if(d!==p&&p&&p.ownerDocument&&Wd(p.ownerDocument.documentElement,p)){if(w!==null&&Yo(p)){var U=w.start,O=w.end;if(O===void 0&&(O=U),"selectionStart"in p)p.selectionStart=U,p.selectionEnd=Math.min(O,p.value.length);else{var B=p.ownerDocument||document,M=B&&B.defaultView||window;if(M.getSelection){var R=M.getSelection(),F=p.textContent.length,ee=Math.min(w.start,F),Ue=w.end===void 0?ee:Math.min(w.end,F);!R.extend&&ee>Ue&&(d=Ue,Ue=ee,ee=d);var E=Jd(p,ee),T=Jd(p,Ue);if(E&&T&&(R.rangeCount!==1||R.anchorNode!==E.node||R.anchorOffset!==E.offset||R.focusNode!==T.node||R.focusOffset!==T.offset)){var z=B.createRange();z.setStart(E.node,E.offset),R.removeAllRanges(),ee>Ue?(R.addRange(z),R.extend(T.node,T.offset)):(z.setEnd(T.node,T.offset),R.addRange(z))}}}}for(B=[],R=p;R=R.parentNode;)R.nodeType===1&&B.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<B.length;p++){var j=B[p];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Ls=!!wc,Tc=wc=null}finally{be=s,P.p=i,V.T=n}}e.current=t,Ye=2}}function pm(){if(Ye===2){Ye=0;var e=Nn,t=$a,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=V.T,V.T=null;var i=P.p;P.p=2;var s=be;be|=4;try{If(e,t.alternate,t)}finally{be=s,P.p=i,V.T=n}}Ye=3}}function gm(){if(Ye===4||Ye===3){Ye=0,Ov();var e=Nn,t=$a,n=vn,i=nm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,$a=Nn=null,ym(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Ln=null),xo(n),t=t.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(vi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=V.T,s=P.p,P.p=2,V.T=null;try{for(var c=e.onRecoverableError,d=0;d<i.length;d++){var p=i[d];c(p.value,{componentStack:p.stack})}}finally{V.T=t,P.p=s}}(vn&3)!==0&&Cs(),Zt(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===lc?$i++:($i=0,lc=e):$i=0,er(0)}}function ym(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ji(t)))}function Cs(){return mm(),pm(),gm(),vm()}function vm(){if(Ye!==5)return!1;var e=Nn,t=sc;sc=0;var n=xo(vn),i=V.T,s=P.p;try{P.p=32>n?32:n,V.T=null,n=oc,oc=null;var c=Nn,d=vn;if(Ye=0,$a=Nn=null,vn=0,(be&6)!==0)throw Error(l(331));var p=be;if(be|=4,$f(c.current),Zf(c,c.current,d,n),be=p,er(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(vi,c)}catch{}return!0}finally{P.p=s,V.T=i,ym(e,t)}}function bm(e,t,n){t=Rt(n,t),t=_l(e.stateNode,t,2),e=Rn(e,t,2),e!==null&&(Si(e,2),Zt(e))}function Ae(e,t,n){if(e.tag===3)bm(e,e,n);else for(;t!==null;){if(t.tag===3){bm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ln===null||!Ln.has(i))){e=Rt(n,e),n=Sf(2),i=Rn(t,n,2),i!==null&&(wf(n,i,t,e),Si(i,2),Zt(i));break}}t=t.return}}function dc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new rb;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(ac=!0,s.add(n),e=ub.bind(null,e,t,n),t.then(e,e))}function ub(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,xe===e&&(he&n)===n&&(Be===4||Be===3&&(he&62914560)===he&&300>yt()-bs?(be&2)===0&&ei(e,0):ic|=n,Wa===he&&(Wa=0)),Zt(e)}function Sm(e,t){t===0&&(t=fd()),e=ia(e,t),e!==null&&(Si(e,t),Zt(e))}function db(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sm(e,n)}function hb(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(l(314))}i!==null&&i.delete(t),Sm(e,n)}function fb(e,t){return Eo(e,t)}var zs=null,ni=null,hc=!1,Us=!1,fc=!1,_n=0;function Zt(e){e!==ni&&e.next===null&&(ni===null?zs=ni=e:ni=ni.next=e),Us=!0,hc||(hc=!0,pb())}function er(e,t){if(!fc&&Us){fc=!0;do for(var n=!1,i=zs;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var c=0;else{var d=i.suspendedLanes,p=i.pingedLanes;c=(1<<31-bt(42|e)+1)-1,c&=s&~(d&~p),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Em(i,c))}else c=he,c=Rr(i,i===xe?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||bi(i,c)||(n=!0,Em(i,c));i=i.next}while(n);fc=!1}}function mb(){wm()}function wm(){Us=hc=!1;var e=0;_n!==0&&Cb()&&(e=_n);for(var t=yt(),n=null,i=zs;i!==null;){var s=i.next,c=Tm(i,t);c===0?(i.next=null,n===null?zs=s:n.next=s,s===null&&(ni=n)):(n=i,(e!==0||(c&3)!==0)&&(Us=!0)),i=s}Ye!==0&&Ye!==5||er(e),_n!==0&&(_n=0)}function Tm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var d=31-bt(c),p=1<<d,w=s[d];w===-1?((p&n)===0||(p&i)!==0)&&(s[d]=Pv(p,t)):w<=t&&(e.expiredLanes|=p),c&=~p}if(t=xe,n=he,n=Rr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Co(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||bi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Co(i),xo(n)){case 2:case 8:n=dd;break;case 32:n=Ur;break;case 268435456:n=hd;break;default:n=Ur}return i=Am.bind(null,e),n=Eo(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Co(i),e.callbackPriority=2,e.callbackNode=null,2}function Am(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Cs()&&e.callbackNode!==n)return null;var i=he;return i=Rr(e,e===xe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(im(e,i,t),Tm(e,yt()),e.callbackNode!=null&&e.callbackNode===n?Am.bind(null,e):null)}function Em(e,t){if(Cs())return null;im(e,t,!0)}function pb(){Ub(function(){(be&6)!==0?Eo(ud,mb):wm()})}function mc(){if(_n===0){var e=Pa;e===0&&(e=xr,xr<<=1,(xr&261888)===0&&(xr=256)),_n=e}return _n}function Cm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Br(""+e)}function zm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function gb(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var c=Cm((s[ut]||null).action),d=i.submitter;d&&(t=(t=d[ut]||null)?Cm(t.formAction):d.getAttribute("formAction"),t!==null&&(c=t,d=null));var p=new Gr("action","action",null,i,s);e.push({event:p,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(_n!==0){var w=d?zm(s,d):new FormData(s);jl(n,{pending:!0,data:w,method:s.method,action:c},null,w)}}else typeof c=="function"&&(p.preventDefault(),w=d?zm(s,d):new FormData(s),jl(n,{pending:!0,data:w,method:s.method,action:c},c,w))},currentTarget:s}]})}}for(var pc=0;pc<Jo.length;pc++){var gc=Jo[pc],yb=gc.toLowerCase(),vb=gc[0].toUpperCase()+gc.slice(1);Pt(yb,"on"+vb)}Pt(nh,"onAnimationEnd"),Pt(ah,"onAnimationIteration"),Pt(ih,"onAnimationStart"),Pt("dblclick","onDoubleClick"),Pt("focusin","onFocus"),Pt("focusout","onBlur"),Pt(j0,"onTransitionRun"),Pt(B0,"onTransitionStart"),Pt(k0,"onTransitionCancel"),Pt(rh,"onTransitionEnd"),Ua("onMouseEnter",["mouseout","mouseover"]),Ua("onMouseLeave",["mouseout","mouseover"]),Ua("onPointerEnter",["pointerout","pointerover"]),Ua("onPointerLeave",["pointerout","pointerover"]),ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tr));function Um(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var d=i.length-1;0<=d;d--){var p=i[d],w=p.instance,U=p.currentTarget;if(p=p.listener,w!==c&&s.isPropagationStopped())break e;c=p,s.currentTarget=U;try{c(s)}catch(O){Hr(O)}s.currentTarget=null,c=w}else for(d=0;d<i.length;d++){if(p=i[d],w=p.instance,U=p.currentTarget,p=p.listener,w!==c&&s.isPropagationStopped())break e;c=p,s.currentTarget=U;try{c(s)}catch(O){Hr(O)}s.currentTarget=null,c=w}}}}function de(e,t){var n=t[Mo];n===void 0&&(n=t[Mo]=new Set);var i=e+"__bubble";n.has(i)||(xm(t,e,2,!1),n.add(i))}function yc(e,t,n){var i=0;t&&(i|=4),xm(n,e,i,t)}var xs="_reactListening"+Math.random().toString(36).slice(2);function vc(e){if(!e[xs]){e[xs]=!0,Sd.forEach(function(n){n!=="selectionchange"&&(bb.has(n)||yc(n,!1,e),yc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xs]||(t[xs]=!0,yc("selectionchange",!1,t))}}function xm(e,t,n,i){switch(ap(t)){case 2:var s=Yb;break;case 8:s=Kb;break;default:s=Oc}n=s.bind(null,t,n,e),s=void 0,!No||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function bc(e,t,n,i,s){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var p=i.stateNode.containerInfo;if(p===s)break;if(d===4)for(d=i.return;d!==null;){var w=d.tag;if((w===3||w===4)&&d.stateNode.containerInfo===s)return;d=d.return}for(;p!==null;){if(d=Ea(p),d===null)return;if(w=d.tag,w===5||w===6||w===26||w===27){i=c=d;continue e}p=p.parentNode}}i=i.return}Vd(function(){var U=c,O=ko(n),B=[];e:{var M=sh.get(e);if(M!==void 0){var R=Gr,F=e;switch(e){case"keypress":if(Lr(n)===0)break e;case"keydown":case"keyup":R=h0;break;case"focusin":F="focus",R=Ho;break;case"focusout":F="blur",R=Ho;break;case"beforeblur":case"afterblur":R=Ho;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=e0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=p0;break;case nh:case ah:case ih:R=a0;break;case rh:R=y0;break;case"scroll":case"scrollend":R=Wv;break;case"wheel":R=b0;break;case"copy":case"cut":case"paste":R=r0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Ld;break;case"toggle":case"beforetoggle":R=w0}var ee=(t&4)!==0,Ue=!ee&&(e==="scroll"||e==="scrollend"),E=ee?M!==null?M+"Capture":null:M;ee=[];for(var T=U,z;T!==null;){var j=T;if(z=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||z===null||E===null||(j=Ai(T,E),j!=null&&ee.push(nr(T,j,z))),Ue)break;T=T.return}0<ee.length&&(M=new R(M,F,null,n,O),B.push({event:M,listeners:ee}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",M&&n!==Bo&&(F=n.relatedTarget||n.fromElement)&&(Ea(F)||F[Aa]))break e;if((R||M)&&(M=O.window===O?O:(M=O.ownerDocument)?M.defaultView||M.parentWindow:window,R?(F=n.relatedTarget||n.toElement,R=U,F=F?Ea(F):null,F!==null&&(Ue=f(F),ee=F.tag,F!==Ue||ee!==5&&ee!==27&&ee!==6)&&(F=null)):(R=null,F=U),R!==F)){if(ee=Bd,j="onMouseLeave",E="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Ld,j="onPointerLeave",E="onPointerEnter",T="pointer"),Ue=R==null?M:Ti(R),z=F==null?M:Ti(F),M=new ee(j,T+"leave",R,n,O),M.target=Ue,M.relatedTarget=z,j=null,Ea(O)===U&&(ee=new ee(E,T+"enter",F,n,O),ee.target=z,ee.relatedTarget=Ue,j=ee),Ue=j,R&&F)t:{for(ee=Sb,E=R,T=F,z=0,j=E;j;j=ee(j))z++;j=0;for(var $=T;$;$=ee($))j++;for(;0<z-j;)E=ee(E),z--;for(;0<j-z;)T=ee(T),j--;for(;z--;){if(E===T||T!==null&&E===T.alternate){ee=E;break t}E=ee(E),T=ee(T)}ee=null}else ee=null;R!==null&&Mm(B,M,R,ee,!1),F!==null&&Ue!==null&&Mm(B,Ue,F,ee,!0)}}e:{if(M=U?Ti(U):window,R=M.nodeName&&M.nodeName.toLowerCase(),R==="select"||R==="input"&&M.type==="file")var ge=Xd;else if(Id(M))if(Fd)ge=R0;else{ge=M0;var Z=x0}else R=M.nodeName,!R||R.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?U&&jo(U.elementType)&&(ge=Xd):ge=D0;if(ge&&(ge=ge(e,U))){qd(B,ge,n,O);break e}Z&&Z(e,M,U),e==="focusout"&&U&&M.type==="number"&&U.memoizedProps.value!=null&&Oo(M,"number",M.value)}switch(Z=U?Ti(U):window,e){case"focusin":(Id(Z)||Z.contentEditable==="true")&&(Oa=Z,Ko=U,Ri=null);break;case"focusout":Ri=Ko=Oa=null;break;case"mousedown":Qo=!0;break;case"contextmenu":case"mouseup":case"dragend":Qo=!1,eh(B,n,O);break;case"selectionchange":if(O0)break;case"keydown":case"keyup":eh(B,n,O)}var oe;if(qo)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Va?Pd(e,n)&&(fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(fe="onCompositionStart");fe&&(Nd&&n.locale!=="ko"&&(Va||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Va&&(oe=Od()):(En=O,Go="value"in En?En.value:En.textContent,Va=!0)),Z=Ms(U,fe),0<Z.length&&(fe=new kd(fe,e,null,n,O),B.push({event:fe,listeners:Z}),oe?fe.data=oe:(oe=Hd(n),oe!==null&&(fe.data=oe)))),(oe=A0?E0(e,n):C0(e,n))&&(fe=Ms(U,"onBeforeInput"),0<fe.length&&(Z=new kd("onBeforeInput","beforeinput",null,n,O),B.push({event:Z,listeners:fe}),Z.data=oe)),gb(B,e,U,n,O)}Um(B,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ms(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,c=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||c===null||(s=Ai(e,n),s!=null&&i.unshift(nr(e,s,c)),s=Ai(e,t),s!=null&&i.push(nr(e,s,c))),e.tag===3)return i;e=e.return}return[]}function Sb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mm(e,t,n,i,s){for(var c=t._reactName,d=[];n!==null&&n!==i;){var p=n,w=p.alternate,U=p.stateNode;if(p=p.tag,w!==null&&w===i)break;p!==5&&p!==26&&p!==27||U===null||(w=U,s?(U=Ai(n,c),U!=null&&d.unshift(nr(n,U,w))):s||(U=Ai(n,c),U!=null&&d.push(nr(n,U,w)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var wb=/\r\n?/g,Tb=/\u0000|\uFFFD/g;function Dm(e){return(typeof e=="string"?e:""+e).replace(wb,`
`).replace(Tb,"")}function Rm(e,t){return t=Dm(t),Dm(e)===t}function ze(e,t,n,i,s,c){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ma(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ma(e,""+i);break;case"className":Or(e,"class",i);break;case"tabIndex":Or(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Or(e,n,i);break;case"style":Dd(e,i,c);break;case"data":if(t!=="object"){Or(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Br(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&ze(e,t,"name",s.name,s,null),ze(e,t,"formEncType",s.formEncType,s,null),ze(e,t,"formMethod",s.formMethod,s,null),ze(e,t,"formTarget",s.formTarget,s,null)):(ze(e,t,"encType",s.encType,s,null),ze(e,t,"method",s.method,s,null),ze(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Br(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=nn);break;case"onScroll":i!=null&&de("scroll",e);break;case"onScrollEnd":i!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Br(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":de("beforetoggle",e),de("toggle",e),Vr(e,"popover",i);break;case"xlinkActuate":tn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":tn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":tn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":tn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":tn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":tn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":tn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":tn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":tn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Vr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Zv.get(n)||n,Vr(e,n,i))}}function Sc(e,t,n,i,s,c){switch(n){case"style":Dd(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ma(e,i):(typeof i=="number"||typeof i=="bigint")&&Ma(e,""+i);break;case"onScroll":i!=null&&de("scroll",e);break;case"onScrollEnd":i!=null&&de("scrollend",e);break;case"onClick":i!=null&&(e.onclick=nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),c=e[ut]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,s),typeof i=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Vr(e,n,i)}}}function tt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var i=!1,s=!1,c;for(c in n)if(n.hasOwnProperty(c)){var d=n[c];if(d!=null)switch(c){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:ze(e,t,c,d,n,null)}}s&&ze(e,t,"srcSet",n.srcSet,n,null),i&&ze(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var p=c=d=s=null,w=null,U=null;for(i in n)if(n.hasOwnProperty(i)){var O=n[i];if(O!=null)switch(i){case"name":s=O;break;case"type":d=O;break;case"checked":w=O;break;case"defaultChecked":U=O;break;case"value":c=O;break;case"defaultValue":p=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(l(137,t));break;default:ze(e,t,i,O,n,null)}}zd(e,c,p,w,U,d,s,!1);return;case"select":de("invalid",e),i=d=c=null;for(s in n)if(n.hasOwnProperty(s)&&(p=n[s],p!=null))switch(s){case"value":c=p;break;case"defaultValue":d=p;break;case"multiple":i=p;default:ze(e,t,s,p,n,null)}t=c,n=d,e.multiple=!!i,t!=null?xa(e,!!i,t,!1):n!=null&&xa(e,!!i,n,!0);return;case"textarea":de("invalid",e),c=s=i=null;for(d in n)if(n.hasOwnProperty(d)&&(p=n[d],p!=null))switch(d){case"value":i=p;break;case"defaultValue":s=p;break;case"children":c=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(l(91));break;default:ze(e,t,d,p,n,null)}xd(e,i,s,c);return;case"option":for(w in n)n.hasOwnProperty(w)&&(i=n[w],i!=null)&&(w==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ze(e,t,w,i,n,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(i=0;i<tr.length;i++)de(tr[i],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in n)if(n.hasOwnProperty(U)&&(i=n[U],i!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:ze(e,t,U,i,n,null)}return;default:if(jo(t)){for(O in n)n.hasOwnProperty(O)&&(i=n[O],i!==void 0&&Sc(e,t,O,i,n,void 0));return}}for(p in n)n.hasOwnProperty(p)&&(i=n[p],i!=null&&ze(e,t,p,i,n,null))}function Ab(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,c=null,d=null,p=null,w=null,U=null,O=null;for(R in n){var B=n[R];if(n.hasOwnProperty(R)&&B!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":w=B;default:i.hasOwnProperty(R)||ze(e,t,R,null,i,B)}}for(var M in i){var R=i[M];if(B=n[M],i.hasOwnProperty(M)&&(R!=null||B!=null))switch(M){case"type":c=R;break;case"name":s=R;break;case"checked":U=R;break;case"defaultChecked":O=R;break;case"value":d=R;break;case"defaultValue":p=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(l(137,t));break;default:R!==B&&ze(e,t,M,R,i,B)}}Vo(e,d,p,w,U,O,c,s);return;case"select":R=d=p=M=null;for(c in n)if(w=n[c],n.hasOwnProperty(c)&&w!=null)switch(c){case"value":break;case"multiple":R=w;default:i.hasOwnProperty(c)||ze(e,t,c,null,i,w)}for(s in i)if(c=i[s],w=n[s],i.hasOwnProperty(s)&&(c!=null||w!=null))switch(s){case"value":M=c;break;case"defaultValue":p=c;break;case"multiple":d=c;default:c!==w&&ze(e,t,s,c,i,w)}t=p,n=d,i=R,M!=null?xa(e,!!n,M,!1):!!i!=!!n&&(t!=null?xa(e,!!n,t,!0):xa(e,!!n,n?[]:"",!1));return;case"textarea":R=M=null;for(p in n)if(s=n[p],n.hasOwnProperty(p)&&s!=null&&!i.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:ze(e,t,p,null,i,s)}for(d in i)if(s=i[d],c=n[d],i.hasOwnProperty(d)&&(s!=null||c!=null))switch(d){case"value":M=s;break;case"defaultValue":R=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==c&&ze(e,t,d,s,i,c)}Ud(e,M,R);return;case"option":for(var F in n)M=n[F],n.hasOwnProperty(F)&&M!=null&&!i.hasOwnProperty(F)&&(F==="selected"?e.selected=!1:ze(e,t,F,null,i,M));for(w in i)M=i[w],R=n[w],i.hasOwnProperty(w)&&M!==R&&(M!=null||R!=null)&&(w==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":ze(e,t,w,M,i,R));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in n)M=n[ee],n.hasOwnProperty(ee)&&M!=null&&!i.hasOwnProperty(ee)&&ze(e,t,ee,null,i,M);for(U in i)if(M=i[U],R=n[U],i.hasOwnProperty(U)&&M!==R&&(M!=null||R!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(l(137,t));break;default:ze(e,t,U,M,i,R)}return;default:if(jo(t)){for(var Ue in n)M=n[Ue],n.hasOwnProperty(Ue)&&M!==void 0&&!i.hasOwnProperty(Ue)&&Sc(e,t,Ue,void 0,i,M);for(O in i)M=i[O],R=n[O],!i.hasOwnProperty(O)||M===R||M===void 0&&R===void 0||Sc(e,t,O,M,i,R);return}}for(var E in n)M=n[E],n.hasOwnProperty(E)&&M!=null&&!i.hasOwnProperty(E)&&ze(e,t,E,null,i,M);for(B in i)M=i[B],R=n[B],!i.hasOwnProperty(B)||M===R||M==null&&R==null||ze(e,t,B,M,i,R)}function Vm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Eb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],c=s.transferSize,d=s.initiatorType,p=s.duration;if(c&&p&&Vm(d)){for(d=0,p=s.responseEnd,i+=1;i<n.length;i++){var w=n[i],U=w.startTime;if(U>p)break;var O=w.transferSize,B=w.initiatorType;O&&Vm(B)&&(w=w.responseEnd,d+=O*(w<p?1:(p-U)/(w-U)))}if(--i,t+=8*(c+d)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wc=null,Tc=null;function Ds(e){return e.nodeType===9?e:e.ownerDocument}function Om(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ac(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ec=null;function Cb(){var e=window.event;return e&&e.type==="popstate"?e===Ec?!1:(Ec=e,!0):(Ec=null,!1)}var Bm=typeof setTimeout=="function"?setTimeout:void 0,zb=typeof clearTimeout=="function"?clearTimeout:void 0,km=typeof Promise=="function"?Promise:void 0,Ub=typeof queueMicrotask=="function"?queueMicrotask:typeof km<"u"?function(e){return km.resolve(null).then(e).catch(xb)}:Bm;function xb(e){setTimeout(function(){throw e})}function Pn(e){return e==="head"}function Lm(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),si(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")ar(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ar(n);for(var c=n.firstChild;c;){var d=c.nextSibling,p=c.nodeName;c[wi]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=d}}else n==="body"&&ar(e.ownerDocument.body);n=s}while(n);si(t)}function Nm(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Cc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Cc(n),Do(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Mb(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[wi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=kt(e.nextSibling),e===null)break}return null}function Db(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=kt(e.nextSibling),e===null))return null;return e}function Gm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=kt(e.nextSibling),e===null))return null;return e}function zc(e){return e.data==="$?"||e.data==="$~"}function Uc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Rb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xc=null;function _m(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return kt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Pm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Hm(e,t,n){switch(t=Ds(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function ar(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Do(e)}var Lt=new Map,Im=new Set;function Rs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var bn=P.d;P.d={f:Vb,r:Ob,D:jb,C:Bb,L:kb,m:Lb,X:Gb,S:Nb,M:_b};function Vb(){var e=bn.f(),t=Ts();return e||t}function Ob(e){var t=Ca(e);t!==null&&t.tag===5&&t.type==="form"?sf(t):bn.r(e)}var ai=typeof document>"u"?null:document;function qm(e,t,n){var i=ai;if(i&&typeof t=="string"&&t){var s=Mt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Im.has(s)||(Im.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),tt(t,"link",e),Qe(t),i.head.appendChild(t)))}}function jb(e){bn.D(e),qm("dns-prefetch",e,null)}function Bb(e,t){bn.C(e,t),qm("preconnect",e,t)}function kb(e,t,n){bn.L(e,t,n);var i=ai;if(i&&e&&t){var s='link[rel="preload"][as="'+Mt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Mt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Mt(n.imageSizes)+'"]')):s+='[href="'+Mt(e)+'"]';var c=s;switch(t){case"style":c=ii(e);break;case"script":c=ri(e)}Lt.has(c)||(e=b({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Lt.set(c,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(ir(c))||t==="script"&&i.querySelector(rr(c))||(t=i.createElement("link"),tt(t,"link",e),Qe(t),i.head.appendChild(t)))}}function Lb(e,t){bn.m(e,t);var n=ai;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Mt(i)+'"][href="'+Mt(e)+'"]',c=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ri(e)}if(!Lt.has(c)&&(e=b({rel:"modulepreload",href:e},t),Lt.set(c,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(rr(c)))return}i=n.createElement("link"),tt(i,"link",e),Qe(i),n.head.appendChild(i)}}}function Nb(e,t,n){bn.S(e,t,n);var i=ai;if(i&&e){var s=za(i).hoistableStyles,c=ii(e);t=t||"default";var d=s.get(c);if(!d){var p={loading:0,preload:null};if(d=i.querySelector(ir(c)))p.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Lt.get(c))&&Mc(e,n);var w=d=i.createElement("link");Qe(w),tt(w,"link",e),w._p=new Promise(function(U,O){w.onload=U,w.onerror=O}),w.addEventListener("load",function(){p.loading|=1}),w.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Vs(d,t,i)}d={type:"stylesheet",instance:d,count:1,state:p},s.set(c,d)}}}function Gb(e,t){bn.X(e,t);var n=ai;if(n&&e){var i=za(n).hoistableScripts,s=ri(e),c=i.get(s);c||(c=n.querySelector(rr(s)),c||(e=b({src:e,async:!0},t),(t=Lt.get(s))&&Dc(e,t),c=n.createElement("script"),Qe(c),tt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(s,c))}}function _b(e,t){bn.M(e,t);var n=ai;if(n&&e){var i=za(n).hoistableScripts,s=ri(e),c=i.get(s);c||(c=n.querySelector(rr(s)),c||(e=b({src:e,async:!0,type:"module"},t),(t=Lt.get(s))&&Dc(e,t),c=n.createElement("script"),Qe(c),tt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(s,c))}}function Xm(e,t,n,i){var s=(s=ce.current)?Rs(s):null;if(!s)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ii(n.href),n=za(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ii(n.href);var c=za(s).hoistableStyles,d=c.get(e);if(d||(s=s.ownerDocument||s,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=s.querySelector(ir(e)))&&!c._p&&(d.instance=c,d.state.loading=5),Lt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Lt.set(e,n),c||Pb(s,e,n,d.state))),t&&i===null)throw Error(l(528,""));return d}if(t&&i!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ri(n),n=za(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function ii(e){return'href="'+Mt(e)+'"'}function ir(e){return'link[rel="stylesheet"]['+e+"]"}function Fm(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Pb(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),tt(t,"link",n),Qe(t),e.head.appendChild(t))}function ri(e){return'[src="'+Mt(e)+'"]'}function rr(e){return"script[async]"+e}function Ym(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Mt(n.href)+'"]');if(i)return t.instance=i,Qe(i),i;var s=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Qe(i),tt(i,"style",s),Vs(i,n.precedence,e),t.instance=i;case"stylesheet":s=ii(n.href);var c=e.querySelector(ir(s));if(c)return t.state.loading|=4,t.instance=c,Qe(c),c;i=Fm(n),(s=Lt.get(s))&&Mc(i,s),c=(e.ownerDocument||e).createElement("link"),Qe(c);var d=c;return d._p=new Promise(function(p,w){d.onload=p,d.onerror=w}),tt(c,"link",i),t.state.loading|=4,Vs(c,n.precedence,e),t.instance=c;case"script":return c=ri(n.src),(s=e.querySelector(rr(c)))?(t.instance=s,Qe(s),s):(i=n,(s=Lt.get(c))&&(i=b({},n),Dc(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),Qe(s),tt(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Vs(i,n.precedence,e));return t.instance}function Vs(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,c=s,d=0;d<i.length;d++){var p=i[d];if(p.dataset.precedence===t)c=p;else if(c!==s)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Os=null;function Km(e,t,n){if(Os===null){var i=new Map,s=Os=new Map;s.set(n,i)}else s=Os,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var c=n[s];if(!(c[wi]||c[Je]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var d=c.getAttribute(t)||"";d=e+d;var p=i.get(d);p?p.push(c):i.set(d,[c])}}return i}function Qm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Hb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Zm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ib(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=ii(i.href),c=t.querySelector(ir(s));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=js.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,Qe(c);return}c=t.ownerDocument||t,i=Fm(i),(s=Lt.get(s))&&Mc(i,s),c=c.createElement("link"),Qe(c);var d=c;d._p=new Promise(function(p,w){d.onload=p,d.onerror=w}),tt(c,"link",i),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=js.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Rc=0;function qb(e,t){return e.stylesheets&&e.count===0&&ks(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&ks(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Rc===0&&(Rc=62500*Eb());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ks(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Rc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function js(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ks(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bs=null;function ks(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bs=new Map,t.forEach(Xb,e),Bs=null,js.call(e))}function Xb(e,t){if(!(t.state.loading&4)){var n=Bs.get(e);if(n)var i=n.get(null);else{n=new Map,Bs.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<s.length;c++){var d=s[c];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),i=d)}i&&n.set(null,i)}s=t.instance,d=s.getAttribute("data-precedence"),c=n.get(d)||i,c===i&&n.set(null,s),n.set(d,s),this.count++,i=js.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),c?c.parentNode.insertBefore(s,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var sr={$$typeof:_,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function Fb(e,t,n,i,s,c,d,p,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.hiddenUpdates=zo(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=c,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Jm(e,t,n,i,s,c,d,p,w,U,O,B){return e=new Fb(e,t,n,d,w,U,O,B,p),t=1,c===!0&&(t|=24),c=wt(3,null,null,t),e.current=c,c.stateNode=e,t=ul(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:i,isDehydrated:n,cache:t},ml(c),e}function Wm(e){return e?(e=ka,e):ka}function $m(e,t,n,i,s,c){s=Wm(s),i.context===null?i.context=s:i.pendingContext=s,i=Dn(t),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Rn(e,i,t),n!==null&&(gt(n,e,t),Ni(n,e,t))}function ep(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vc(e,t){ep(e,t),(e=e.alternate)&&ep(e,t)}function tp(e){if(e.tag===13||e.tag===31){var t=ia(e,67108864);t!==null&&gt(t,e,67108864),Vc(e,67108864)}}function np(e){if(e.tag===13||e.tag===31){var t=zt();t=Uo(t);var n=ia(e,t);n!==null&&gt(n,e,t),Vc(e,t)}}var Ls=!0;function Yb(e,t,n,i){var s=V.T;V.T=null;var c=P.p;try{P.p=2,Oc(e,t,n,i)}finally{P.p=c,V.T=s}}function Kb(e,t,n,i){var s=V.T;V.T=null;var c=P.p;try{P.p=8,Oc(e,t,n,i)}finally{P.p=c,V.T=s}}function Oc(e,t,n,i){if(Ls){var s=jc(i);if(s===null)bc(e,t,i,Ns,n),ip(e,i);else if(Zb(s,e,t,n,i))i.stopPropagation();else if(ip(e,i),t&4&&-1<Qb.indexOf(e)){for(;s!==null;){var c=Ca(s);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var d=$n(c.pendingLanes);if(d!==0){var p=c;for(p.pendingLanes|=2,p.entangledLanes|=2;d;){var w=1<<31-bt(d);p.entanglements[1]|=w,d&=~w}Zt(c),(be&6)===0&&(Ss=yt()+500,er(0))}}break;case 31:case 13:p=ia(c,2),p!==null&&gt(p,c,2),Ts(),Vc(c,2)}if(c=jc(i),c===null&&bc(e,t,i,Ns,n),c===s)break;s=c}s!==null&&i.stopPropagation()}else bc(e,t,i,null,n)}}function jc(e){return e=ko(e),Bc(e)}var Ns=null;function Bc(e){if(Ns=null,e=Ea(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ns=e,null}function ap(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jv()){case ud:return 2;case dd:return 8;case Ur:case Bv:return 32;case hd:return 268435456;default:return 32}default:return 32}}var kc=!1,Hn=null,In=null,qn=null,or=new Map,lr=new Map,Xn=[],Qb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ip(e,t){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(t.pointerId)}}function cr(e,t,n,i,s,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:c,targetContainers:[s]},t!==null&&(t=Ca(t),t!==null&&tp(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Zb(e,t,n,i,s){switch(t){case"focusin":return Hn=cr(Hn,e,t,n,i,s),!0;case"dragenter":return In=cr(In,e,t,n,i,s),!0;case"mouseover":return qn=cr(qn,e,t,n,i,s),!0;case"pointerover":var c=s.pointerId;return or.set(c,cr(or.get(c)||null,e,t,n,i,s)),!0;case"gotpointercapture":return c=s.pointerId,lr.set(c,cr(lr.get(c)||null,e,t,n,i,s)),!0}return!1}function rp(e){var t=Ea(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,vd(e.priority,function(){np(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,vd(e.priority,function(){np(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Bo=i,n.target.dispatchEvent(i),Bo=null}else return t=Ca(n),t!==null&&tp(t),e.blockedOn=n,!1;t.shift()}return!0}function sp(e,t,n){Gs(e)&&n.delete(t)}function Jb(){kc=!1,Hn!==null&&Gs(Hn)&&(Hn=null),In!==null&&Gs(In)&&(In=null),qn!==null&&Gs(qn)&&(qn=null),or.forEach(sp),lr.forEach(sp)}function _s(e,t){e.blockedOn===t&&(e.blockedOn=null,kc||(kc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Jb)))}var Ps=null;function op(e){Ps!==e&&(Ps=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Ps===e&&(Ps=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Bc(i||n)===null)continue;break}var c=Ca(n);c!==null&&(e.splice(t,3),t-=3,jl(c,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function si(e){function t(w){return _s(w,e)}Hn!==null&&_s(Hn,e),In!==null&&_s(In,e),qn!==null&&_s(qn,e),or.forEach(t),lr.forEach(t);for(var n=0;n<Xn.length;n++){var i=Xn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)rp(n),n.blockedOn===null&&Xn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],c=n[i+1],d=s[ut]||null;if(typeof c=="function")d||op(n);else if(d){var p=null;if(c&&c.hasAttribute("formAction")){if(s=c,d=c[ut]||null)p=d.formAction;else if(Bc(s)!==null)continue}else p=d.action;typeof p=="function"?n[i+1]=p:(n.splice(i,3),i-=3),op(n)}}}function lp(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(d){return s=d})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Lc(e){this._internalRoot=e}Hs.prototype.render=Lc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,i=zt();$m(n,i,e,t,null,null)},Hs.prototype.unmount=Lc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$m(e.current,2,null,e,null,null),Ts(),t[Aa]=null}};function Hs(e){this._internalRoot=e}Hs.prototype.unstable_scheduleHydration=function(e){if(e){var t=yd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xn.length&&t!==0&&t<Xn[n].priority;n++);Xn.splice(n,0,e),n===0&&rp(e)}};var cp=r.version;if(cp!=="19.2.8")throw Error(l(527,cp,"19.2.8"));P.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=m(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Wb={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Is.isDisabled&&Is.supportsFiber)try{vi=Is.inject(Wb),vt=Is}catch{}}return dr.createRoot=function(e,t){if(!u(e))throw Error(l(299));var n=!1,i="",s=gf,c=yf,d=vf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Jm(e,1,!1,null,null,n,i,null,s,c,d,lp),e[Aa]=t.current,vc(e),new Lc(t)},dr.hydrateRoot=function(e,t,n){if(!u(e))throw Error(l(299));var i=!1,s="",c=gf,d=yf,p=vf,w=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.formState!==void 0&&(w=n.formState)),t=Jm(e,1,!0,t,n??null,i,s,w,c,d,p,lp),t.context=Wm(null),n=t.current,i=zt(),i=Uo(i),s=Dn(i),s.callback=null,Rn(n,s,i),n=i,t.current.lanes=n,Si(t,n),Zt(t),e[Aa]=t.current,vc(e),new Hs(t)},dr.version="19.2.8",dr}var bp;function l1(){if(bp)return _c.exports;bp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),_c.exports=o1(),_c.exports}var c1=l1();const Gg=J.createContext(null);function fi(){const a=J.use(Gg);if(!a)throw new Error("useLanguage must be used inside LanguageProvider.");return a}function u1(){const{copy:a,locale:r}=fi();return D.jsxs("footer",{className:"site-footer",children:[D.jsxs("div",{className:"footer-identity",children:[D.jsx("img",{src:"/media/avatar.jpg",alt:"",width:"640",height:"640",loading:"lazy"}),D.jsxs("div",{children:[D.jsx("strong",{children:a.footer.copyright}),D.jsx("span",{children:a.hero.role})]})]}),D.jsx("p",{children:r==="zh"?"技术美术 · 引擎工具 · AIGC":"Technical art · Engine tools · AIGC"}),D.jsxs("a",{href:"#top",children:[r==="zh"?"回到顶部":"Back to top"," ",D.jsx("span",{"aria-hidden":"true",children:"↑"})]})]})}function d1(){const{locale:a,copy:r,setLocale:o}=fi(),[l,u]=J.useState(""),f=h=>{h!==a&&(o(h),u(h==="zh"?"语言已切换为中文。":"Language changed to English."))};return D.jsxs(D.Fragment,{children:[D.jsxs("div",{className:"language-toggle",role:"group","aria-label":r.language.label,children:[D.jsxs("button",{type:"button",className:a==="en"?"is-active":void 0,"aria-pressed":a==="en",onClick:()=>f("en"),children:["EN",D.jsx("span",{className:"sr-only",children:r.language.english})]}),D.jsx("button",{type:"button",className:a==="zh"?"is-active":void 0,"aria-pressed":a==="zh",onClick:()=>f("zh"),children:"中文"})]}),D.jsx("span",{className:"sr-only","aria-live":"polite",children:l})]})}function h1(){const{copy:a}=fi();return D.jsxs("header",{className:"site-header",children:[D.jsxs("a",{className:"brand-link",href:"#top","aria-label":"Lucas Shen, home",children:[D.jsx("span",{lang:"zh-CN",children:"沈裕焱"}),D.jsx("span",{children:"Lucas Shen"})]}),D.jsxs("div",{className:"header-actions",children:[D.jsx("nav",{className:"site-nav","aria-label":a.nav.aria,children:D.jsx("a",{href:"#portfolio",children:a.nav.work})}),D.jsx(d1,{})]})]})}function f1(){const{copy:a,locale:r}=fi(),o=r==="zh"?[["犹他大学｜娱乐艺术与工程（技术美术/游戏工程）硕士","2025.08 — 2027.05"],["上海交通大学｜工业工程本科","2020.09 — 2024.06"]]:[["University of Utah | M.E.A.E., Technical Art","Aug 2025 — May 2027"],["Shanghai Jiao Tong University | B.Eng., Industrial Engineering","Sep 2020 — Jun 2024"]],l=r==="zh"?[["腾讯光子工作室｜AI 工具技术美术实习生","2026.03 — 2026.08"],["广州四三九九信息科技有限公司｜系统策划","2024.05 — 2024.11"],["Whitedot 游戏工作室｜Unity 客户端开发实习生","2024.01 — 2024.04"],["上海如为电力｜UE 数字孪生开发实习生","2023.04 — 2023.08"]]:[["Tencent Lightspeed Studios | AI Tools Technical Art Intern","Mar 2026 — Aug 2026"],["4399 Network | Systems Designer","May 2024 — Nov 2024"],["Whitedot Game Studio | Unity Client Development Intern","Jan 2024 — Apr 2024"],["Shanghai Ruwei Electric Power | UE5 Client Development Intern","Apr 2023 — Aug 2023"]];return D.jsxs("section",{className:"profile-strip","aria-labelledby":"hero-title",children:[D.jsx("img",{src:"/media/avatar.jpg",alt:"Lucas Shen hand-drawn avatar",width:"640",height:"640",fetchPriority:"high"}),D.jsxs("div",{className:"profile-name",children:[D.jsxs("h1",{id:"hero-title",children:[D.jsx("span",{lang:"zh-CN",children:"沈裕焱"}),D.jsx("span",{children:"Lucas Shen"})]}),D.jsx("p",{children:a.hero.role})]}),D.jsx("p",{className:"profile-intro",children:r==="zh"?"游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线作品。":"Games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines."}),D.jsxs("div",{className:"profile-history",children:[D.jsxs("section",{children:[D.jsx("h2",{children:r==="zh"?"教育经历":"Education"}),D.jsx("ul",{children:o.map(([u,f])=>D.jsxs("li",{children:[D.jsx("span",{children:u}),D.jsxs("time",{children:["· ",f]})]},u))})]}),D.jsxs("section",{children:[D.jsx("h2",{children:r==="zh"?"实习与工作经历":"Internship & Work Experience"}),D.jsx("ul",{children:l.map(([u,f])=>D.jsxs("li",{children:[D.jsx("span",{children:u}),D.jsxs("time",{children:["· ",f]})]},u))})]})]})]})}const _g=J.createContext({});function m1(a){const r=J.useRef(null);return r.current===null&&(r.current=a()),r.current}const p1=typeof window<"u",g1=p1?J.useLayoutEffect:J.useEffect,ju=J.createContext(null);function Bu(a,r){a.indexOf(r)===-1&&a.push(r)}function ao(a,r){const o=a.indexOf(r);o>-1&&a.splice(o,1)}const en=(a,r,o)=>o>r?r:o<a?a:o;let po=()=>{};const Qn={},Pg=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),Hg=a=>typeof a=="object"&&a!==null,Ig=a=>/^0[^.\s]+$/u.test(a);function qg(a){let r;return()=>(r===void 0&&(r=a()),r)}const _t=a=>a,Tr=(...a)=>a.reduce((r,o)=>l=>o(r(l))),vr=(a,r,o)=>{const l=r-a;return l?(o-a)/l:1};class ku{constructor(){this.subscriptions=[]}add(r){return Bu(this.subscriptions,r),()=>ao(this.subscriptions,r)}notify(r,o,l){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](r,o,l);else for(let f=0;f<u;f++){const h=this.subscriptions[f];h&&h(r,o,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ut=a=>a*1e3,Gt=a=>a/1e3,Xg=(a,r)=>r?a*(1e3/r):0,Fg=(a,r,o)=>(((1-3*o+3*r)*a+(3*o-6*r))*a+3*r)*a,y1=1e-7,v1=12;function b1(a,r,o,l,u){let f,h,g=0;do h=r+(o-r)/2,f=Fg(h,l,u)-a,f>0?o=h:r=h;while(Math.abs(f)>y1&&++g<v1);return h}function Ar(a,r,o,l){if(a===r&&o===l)return _t;const u=f=>b1(f,0,1,a,o);return f=>f===0||f===1?f:Fg(u(f),r,l)}const Yg=a=>r=>r<=.5?a(2*r)/2:(2-a(2*(1-r)))/2,Kg=a=>r=>1-a(1-r),Qg=Ar(.33,1.53,.69,.99),Lu=Kg(Qg),Zg=Yg(Lu),Jg=a=>a>=1?1:(a*=2)<1?.5*Lu(a):.5*(2-Math.pow(2,-10*(a-1))),Nu=a=>1-Math.sin(Math.acos(a)),Wg=Kg(Nu),$g=Yg(Nu),S1=Ar(.42,0,1,1),w1=Ar(0,0,.58,1),ey=Ar(.42,0,.58,1),T1=a=>Array.isArray(a)&&typeof a[0]!="number",ty=a=>Array.isArray(a)&&typeof a[0]=="number",A1={linear:_t,easeIn:S1,easeInOut:ey,easeOut:w1,circIn:Nu,circInOut:$g,circOut:Wg,backIn:Lu,backInOut:Zg,backOut:Qg,anticipate:Jg},E1=a=>typeof a=="string",Sp=a=>{if(ty(a)){po(a.length===4);const[r,o,l,u]=a;return Ar(r,o,l,u)}else if(E1(a))return A1[a];return a},qs=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function C1(a){let r=new Set,o=new Set,l=!1,u=!1;const f=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function g(m){f.has(m)&&(y.schedule(m),a()),m(h)}const y={schedule:(m,v=!1,b=!1)=>{const C=b&&l?r:o;return v&&f.add(m),C.add(m),m},cancel:m=>{o.delete(m),f.delete(m)},process:m=>{if(h=m,l){u=!0;return}l=!0;const v=r;r=o,o=v,r.forEach(g),r.clear(),l=!1,u&&(u=!1,y.process(m))}};return y}const z1=40;function ny(a,r){let o=!1,l=!0;const u={delta:0,timestamp:0,isProcessing:!1},f=()=>o=!0,h=qs.reduce((_,q)=>(_[q]=C1(f),_),{}),{setup:g,read:y,resolveKeyframes:m,preUpdate:v,update:b,preRender:S,render:C,postRender:x}=h,L=()=>{const _=Qn.useManualTiming,q=_?u.timestamp:performance.now();o=!1,_||(u.delta=l?1e3/60:Math.max(Math.min(q-u.timestamp,z1),1)),u.timestamp=q,u.isProcessing=!0,g.process(u),y.process(u),m.process(u),v.process(u),b.process(u),S.process(u),C.process(u),x.process(u),u.isProcessing=!1,o&&r&&(l=!1,a(L))},G=()=>{o=!0,l=!0,u.isProcessing||a(L)};return{schedule:qs.reduce((_,q)=>{const ne=h[q];return _[q]=(le,Y=!1,W=!1)=>(o||G(),ne.schedule(le,Y,W)),_},{}),cancel:_=>{for(let q=0;q<qs.length;q++)h[qs[q]].cancel(_)},state:u,steps:h}}const{schedule:De,cancel:Zn,state:nt,steps:qc}=ny(typeof requestAnimationFrame<"u"?requestAnimationFrame:_t,!0);let Ks;function U1(){Ks=void 0}const lt={now:()=>(Ks===void 0&&lt.set(nt.isProcessing||Qn.useManualTiming?nt.timestamp:performance.now()),Ks),set:a=>{Ks=a,queueMicrotask(U1)}},ay=a=>r=>typeof r=="string"&&r.startsWith(a),iy=ay("--"),x1=ay("var(--"),Gu=a=>x1(a)?M1.test(a.split("/*")[0].trim()):!1,M1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function wp(a){return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")}const mi={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},br={...mi,transform:a=>en(0,1,a)},Xs={...mi,default:1},mr=a=>Math.round(a*1e5)/1e5,_u=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function D1(a){return a==null}const R1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Pu=(a,r)=>o=>!!(typeof o=="string"&&R1.test(o)&&o.startsWith(a)||r&&!D1(o)&&Object.prototype.hasOwnProperty.call(o,r)),ry=(a,r,o)=>l=>{if(typeof l!="string")return l;const[u,f,h,g]=l.match(_u);return{[a]:parseFloat(u),[r]:parseFloat(f),[o]:parseFloat(h),alpha:g!==void 0?parseFloat(g):1}},V1=a=>en(0,255,a),Xc={...mi,transform:a=>Math.round(V1(a))},ba={test:Pu("rgb","red"),parse:ry("red","green","blue"),transform:({red:a,green:r,blue:o,alpha:l=1})=>"rgba("+Xc.transform(a)+", "+Xc.transform(r)+", "+Xc.transform(o)+", "+mr(br.transform(l))+")"};function O1(a){let r="",o="",l="",u="";return a.length>5?(r=a.substring(1,3),o=a.substring(3,5),l=a.substring(5,7),u=a.substring(7,9)):(r=a.substring(1,2),o=a.substring(2,3),l=a.substring(3,4),u=a.substring(4,5),r+=r,o+=o,l+=l,u+=u),{red:parseInt(r,16),green:parseInt(o,16),blue:parseInt(l,16),alpha:u?parseInt(u,16)/255:1}}const ou={test:Pu("#"),parse:O1,transform:ba.transform},Er=a=>({test:r=>typeof r=="string"&&r.endsWith(a)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${a}`}),wn=Er("deg"),$t=Er("%"),K=Er("px"),j1=Er("vh"),B1=Er("vw"),Tp={...$t,parse:a=>$t.parse(a)/100,transform:a=>$t.transform(a*100)},li={test:Pu("hsl","hue"),parse:ry("hue","saturation","lightness"),transform:({hue:a,saturation:r,lightness:o,alpha:l=1})=>"hsla("+Math.round(a)+", "+$t.transform(mr(r))+", "+$t.transform(mr(o))+", "+mr(br.transform(l))+")"},Fe={test:a=>ba.test(a)||ou.test(a)||li.test(a),parse:a=>ba.test(a)?ba.parse(a):li.test(a)?li.parse(a):ou.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?ba.transform(a):li.transform(a),getAnimatableNone:a=>{const r=Fe.parse(a);return r.alpha=0,Fe.transform(r)}},k1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function L1(a){return isNaN(a)&&typeof a=="string"&&(a.match(_u)?.length||0)+(a.match(k1)?.length||0)>0}const sy="number",oy="color",N1="var",G1="var(",Ap="${}",_1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function di(a){const r=a.toString(),o=[],l={color:[],number:[],var:[]},u=[];let f=0;const g=r.replace(_1,y=>(Fe.test(y)?(l.color.push(f),u.push(oy),o.push(Fe.parse(y))):y.startsWith(G1)?(l.var.push(f),u.push(N1),o.push(y)):(l.number.push(f),u.push(sy),o.push(parseFloat(y))),++f,Ap)).split(Ap);return{values:o,split:g,indexes:l,types:u}}function P1(a){return di(a).values}function ly({split:a,types:r}){const o=a.length;return l=>{let u="";for(let f=0;f<o;f++)if(u+=a[f],l[f]!==void 0){const h=r[f];h===sy?u+=mr(l[f]):h===oy?u+=Fe.transform(l[f]):u+=l[f]}return u}}function H1(a){return ly(di(a))}const I1=a=>typeof a=="number"?0:Fe.test(a)?Fe.getAnimatableNone(a):a,q1=(a,r)=>typeof a=="number"?r?.trim().endsWith("/")?a:0:I1(a);function X1(a){const r=di(a);return ly(r)(r.values.map((l,u)=>q1(l,r.split[u])))}const Ft={test:L1,parse:P1,createTransformer:H1,getAnimatableNone:X1};function Fc(a,r,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?a+(r-a)*6*o:o<1/2?r:o<2/3?a+(r-a)*(2/3-o)*6:a}function F1({hue:a,saturation:r,lightness:o,alpha:l}){a/=360,r/=100,o/=100;let u=0,f=0,h=0;if(!r)u=f=h=o;else{const g=o<.5?o*(1+r):o+r-o*r,y=2*o-g;u=Fc(y,g,a+1/3),f=Fc(y,g,a),h=Fc(y,g,a-1/3)}return{red:Math.round(u*255),green:Math.round(f*255),blue:Math.round(h*255),alpha:l}}function io(a,r){return o=>o>0?r:a}const Me=(a,r,o)=>a+(r-a)*o,Yc=(a,r,o)=>{const l=a*a,u=o*(r*r-l)+l;return u<0?0:Math.sqrt(u)},Y1=[ou,ba,li],K1=a=>Y1.find(r=>r.test(a));function Ep(a){const r=K1(a);if(!r)return!1;let o=r.parse(a);return r===li&&(o=F1(o)),o}const Cp=(a,r)=>{const o=Ep(a),l=Ep(r);if(!o||!l)return io(a,r);const u={...o};return f=>(u.red=Yc(o.red,l.red,f),u.green=Yc(o.green,l.green,f),u.blue=Yc(o.blue,l.blue,f),u.alpha=Me(o.alpha,l.alpha,f),ba.transform(u))},lu=new Set(["none","hidden"]);function Q1(a,r){return lu.has(a)?o=>o<=0?a:r:o=>o>=1?r:a}function Z1(a,r){return o=>Me(a,r,o)}function Hu(a){return typeof a=="number"?Z1:typeof a=="string"?Gu(a)?io:Fe.test(a)?Cp:$1:Array.isArray(a)?cy:typeof a=="object"?Fe.test(a)?Cp:J1:io}function cy(a,r){const o=[...a],l=o.length,u=a.map((f,h)=>Hu(f)(f,r[h]));return f=>{for(let h=0;h<l;h++)o[h]=u[h](f);return o}}function J1(a,r){const o={...a,...r},l={};for(const u in o)a[u]!==void 0&&r[u]!==void 0&&(l[u]=Hu(a[u])(a[u],r[u]));return u=>{for(const f in l)o[f]=l[f](u);return o}}function W1(a,r){const o=[],l={color:0,var:0,number:0};for(let u=0;u<r.values.length;u++){const f=r.types[u],h=a.indexes[f][l[f]],g=a.values[h]??0;o[u]=g,l[f]++}return o}const $1=(a,r)=>{const o=Ft.createTransformer(r),l=di(a),u=di(r);return l.indexes.var.length===u.indexes.var.length&&l.indexes.color.length===u.indexes.color.length&&l.indexes.number.length>=u.indexes.number.length?lu.has(a)&&!u.values.length||lu.has(r)&&!l.values.length?Q1(a,r):Tr(cy(W1(l,u),u.values),o):io(a,r)};function uy(a,r,o){return typeof a=="number"&&typeof r=="number"&&typeof o=="number"?Me(a,r,o):Hu(a)(a,r)}const e2=a=>{const r=({timestamp:o})=>a(o);return{start:(o=!0)=>De.update(r,o),stop:()=>Zn(r),now:()=>nt.isProcessing?nt.timestamp:lt.now()}},dy=(a,r,o=10)=>{let l="";const u=Math.max(Math.round(r/o),2);for(let f=0;f<u;f++)l+=Math.round(a(f/(u-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},ro=2e4;function Iu(a){let r=0;const o=50;let l=a.next(r);for(;!l.done&&r<ro;)r+=o,l=a.next(r);return r>=ro?1/0:r}function t2(a,r=100,o){const l=o({...a,keyframes:[0,r]}),u=Math.min(Iu(l),ro);return{type:"keyframes",ease:f=>l.next(u*f).value/r,duration:Gt(u)}}const ke={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function cu(a,r){return a*Math.sqrt(1-r*r)}const n2=12;function a2(a,r,o){let l=o;for(let u=1;u<n2;u++)l=l-a(l)/r(l);return l}const Kc=.001;function i2({duration:a=ke.duration,bounce:r=ke.bounce,velocity:o=ke.velocity,mass:l=ke.mass}){let u,f,h=1-r;h=en(ke.minDamping,ke.maxDamping,h),a=en(ke.minDuration,ke.maxDuration,Gt(a)),h<1?(u=m=>{const v=m*h,b=v*a,S=v-o,C=cu(m,h),x=Math.exp(-b);return Kc-S/C*x},f=m=>{const b=m*h*a,S=b*o+o,C=Math.pow(h,2)*Math.pow(m,2)*a,x=Math.exp(-b),L=cu(Math.pow(m,2),h);return(-u(m)+Kc>0?-1:1)*((S-C)*x)/L}):(u=m=>{const v=Math.exp(-m*a),b=(m-o)*a+1;return-Kc+v*b},f=m=>{const v=Math.exp(-m*a),b=(o-m)*(a*a);return v*b});const g=5/a,y=a2(u,f,g);if(a=Ut(a),isNaN(y))return{stiffness:ke.stiffness,damping:ke.damping,duration:a};{const m=Math.pow(y,2)*l;return{stiffness:m,damping:h*2*Math.sqrt(l*m),duration:a}}}const r2=["duration","bounce"],s2=["stiffness","damping","mass"];function zp(a,r){return r.some(o=>a[o]!==void 0)}function o2(a){let r={velocity:ke.velocity,stiffness:ke.stiffness,damping:ke.damping,mass:ke.mass,isResolvedFromDuration:!1,...a};if(!zp(a,s2)&&zp(a,r2))if(r.velocity=0,a.visualDuration){const o=a.visualDuration,l=2*Math.PI/(o*1.2),u=l*l,f=2*en(.05,1,1-(a.bounce||0))*Math.sqrt(u);r={...r,mass:ke.mass,stiffness:u,damping:f}}else{const o=i2({...a,velocity:0});r={...r,...o,mass:ke.mass},r.isResolvedFromDuration=!0}return r}function so(a=ke.visualDuration,r=ke.bounce){const o=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:r}:a;let{restSpeed:l,restDelta:u}=o;const f=o.keyframes[0],h=o.keyframes[o.keyframes.length-1],g={done:!1,value:f},{stiffness:y,damping:m,mass:v,duration:b,velocity:S,isResolvedFromDuration:C}=o2({...o,velocity:-Gt(o.velocity||0)}),x=S||0,L=m/(2*Math.sqrt(y*v)),G=h-f,N=Gt(Math.sqrt(y/v)),H=Math.abs(G)<5;l||(l=H?ke.restSpeed.granular:ke.restSpeed.default),u||(u=H?ke.restDelta.granular:ke.restDelta.default);let _,q,ne,le,Y,W;if(L<1)ne=cu(N,L),le=(x+L*N*G)/ne,_=te=>{const ve=Math.exp(-L*N*te);return h-ve*(le*Math.sin(ne*te)+G*Math.cos(ne*te))},Y=L*N*le+G*ne,W=L*N*G-le*ne,q=te=>Math.exp(-L*N*te)*(Y*Math.sin(ne*te)+W*Math.cos(ne*te));else if(L===1){_=ve=>h-Math.exp(-N*ve)*(G+(x+N*G)*ve);const te=x+N*G;q=ve=>Math.exp(-N*ve)*(N*te*ve-x)}else{const te=N*Math.sqrt(L*L-1);_=Pe=>{const Le=Math.exp(-L*N*Pe),V=Math.min(te*Pe,300);return h-Le*((x+L*N*G)*Math.sinh(V)+te*G*Math.cosh(V))/te};const ve=(x+L*N*G)/te,we=L*N*ve-G*te,rt=L*N*G-ve*te;q=Pe=>{const Le=Math.exp(-L*N*Pe),V=Math.min(te*Pe,300);return Le*(we*Math.sinh(V)+rt*Math.cosh(V))}}const Ee={calculatedDuration:C&&b||null,velocity:te=>Ut(q(te)),next:te=>{if(!C&&L<1){const we=Math.exp(-L*N*te),rt=Math.sin(ne*te),Pe=Math.cos(ne*te),Le=h-we*(le*rt+G*Pe),V=Ut(we*(Y*rt+W*Pe));return g.done=Math.abs(V)<=l&&Math.abs(h-Le)<=u,g.value=g.done?h:Le,g}const ve=_(te);if(C)g.done=te>=b;else{const we=Ut(q(te));g.done=Math.abs(we)<=l&&Math.abs(h-ve)<=u}return g.value=g.done?h:ve,g},toString:()=>{const te=Math.min(Iu(Ee),ro),ve=dy(we=>Ee.next(te*we).value,te,30);return te+"ms "+ve},toTransition:()=>{}};return Ee}so.applyToOptions=a=>{const r=t2(a,100,so);return a.ease=r.ease,a.duration=Ut(r.duration),a.type="keyframes",a};const l2=5;function hy(a,r,o){const l=Math.max(r-l2,0);return Xg(o-a(l),r-l)}function uu({keyframes:a,velocity:r=0,power:o=.8,timeConstant:l=325,bounceDamping:u=10,bounceStiffness:f=500,modifyTarget:h,min:g,max:y,restDelta:m=.5,restSpeed:v}){const b=a[0],S={done:!1,value:b},C=W=>g!==void 0&&W<g||y!==void 0&&W>y,x=W=>g===void 0?y:y===void 0||Math.abs(g-W)<Math.abs(y-W)?g:y;let L=o*r;const G=b+L,N=h===void 0?G:h(G);N!==G&&(L=N-b);const H=W=>-L*Math.exp(-W/l),_=W=>N+H(W),q=W=>{const Ee=H(W),te=_(W);S.done=Math.abs(Ee)<=m,S.value=S.done?N:te};let ne,le;const Y=W=>{C(S.value)&&(ne=W,le=so({keyframes:[S.value,x(S.value)],velocity:hy(_,W,S.value),damping:u,stiffness:f,restDelta:m,restSpeed:v}))};return Y(0),{calculatedDuration:null,next:W=>{let Ee=!1;return!le&&ne===void 0&&(Ee=!0,q(W),Y(W)),ne!==void 0&&W>=ne?le.next(W-ne):(!Ee&&q(W),S)}}}function c2(a,r,o){const l=[],u=o||Qn.mix||uy,f=a.length-1;for(let h=0;h<f;h++){let g=u(a[h],a[h+1]);if(r){const y=Array.isArray(r)?r[h]||_t:r;g=Tr(y,g)}l.push(g)}return l}function u2(a,r,{clamp:o=!0,ease:l,mixer:u}={}){const f=a.length;if(po(f===r.length),f===1)return()=>r[0];if(f===2&&r[0]===r[1])return()=>r[1];const h=a[0]===a[1];a[0]>a[f-1]&&(a=[...a].reverse(),r=[...r].reverse());const g=c2(r,l,u),y=g.length,m=v=>{if(h&&v<a[0])return r[0];let b=0;if(y>1)for(;b<a.length-2&&!(v<a[b+1]);b++);const S=vr(a[b],a[b+1],v);return g[b](S)};return o?v=>m(en(a[0],a[f-1],v)):m}function d2(a,r){const o=a[a.length-1];for(let l=1;l<=r;l++){const u=vr(0,r,l);a.push(Me(o,1,u))}}function h2(a){const r=[0];return d2(r,a.length-1),r}function f2(a,r){return a.map(o=>o*r)}function m2(a,r){return a.map(()=>r||ey).splice(0,a.length-1)}function pr({duration:a=300,keyframes:r,times:o,ease:l="easeInOut"}){const u=T1(l)?l.map(Sp):Sp(l),f={done:!1,value:r[0]},h=f2(o&&o.length===r.length?o:h2(r),a),g=u2(h,r,{ease:Array.isArray(u)?u:m2(r,u)});return{calculatedDuration:a,next:y=>(f.value=g(y),f.done=y>=a,f)}}const p2=a=>a!==null;function go(a,{repeat:r,repeatType:o="loop"},l,u=1){const f=a.filter(p2),g=u<0||r&&o!=="loop"&&r%2===1?0:f.length-1;return!g||l===void 0?f[g]:l}const g2={decay:uu,inertia:uu,tween:pr,keyframes:pr,spring:so};function fy(a){typeof a.type=="string"&&(a.type=g2[a.type])}class qu{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(r=>{this.resolve=r})}notifyFinished(){this.resolve()}then(r,o){return this.finished.then(r,o)}}const y2=a=>a/100;class oo extends qu{constructor(r){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:o}=this.options;o&&o.updatedAt!==lt.now()&&this.tick(lt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=r,this.initAnimation(),this.play(),r.autoplay===!1&&this.pause()}initAnimation(){const{options:r}=this;fy(r);const{type:o=pr,repeat:l=0,repeatDelay:u=0,repeatType:f,velocity:h=0}=r;let{keyframes:g}=r;const y=o||pr;y!==pr&&typeof g[0]!="number"&&(this.mixKeyframes=Tr(y2,uy(g[0],g[1])),g=[0,100]);const m=y({...r,keyframes:g});f==="mirror"&&(this.mirroredGenerator=y({...r,keyframes:[...g].reverse(),velocity:-h})),m.calculatedDuration===null&&(m.calculatedDuration=Iu(m));const{calculatedDuration:v}=m;this.calculatedDuration=v,this.resolvedDuration=v+u,this.totalDuration=this.resolvedDuration*(l+1)-u,this.generator=m}updateTime(r){const o=Math.round(r-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(r,o=!1){const{generator:l,totalDuration:u,mixKeyframes:f,mirroredGenerator:h,resolvedDuration:g,calculatedDuration:y}=this;if(this.startTime===null)return l.next(0);const{delay:m=0,keyframes:v,repeat:b,repeatType:S,repeatDelay:C,type:x,onUpdate:L,finalKeyframe:G}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-u/this.speed,this.startTime)),o?this.currentTime=r:this.updateTime(r);const N=this.currentTime-m*(this.playbackSpeed>=0?1:-1),H=this.playbackSpeed>=0?N<0:N>u;this.currentTime=Math.max(N,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let _=this.currentTime,q=l;if(b){const W=Math.min(this.currentTime,u)/g;let Ee=Math.floor(W),te=W%1;!te&&W>=1&&(te=1),te===1&&Ee--,Ee=Math.min(Ee,b+1),Ee%2&&(S==="reverse"?(te=1-te,C&&(te-=C/g)):S==="mirror"&&(q=h)),_=en(0,1,te)*g}let ne;H?(this.delayState.value=v[0],ne=this.delayState):ne=q.next(_),f&&!H&&(ne.value=f(ne.value));let{done:le}=ne;!H&&y!==null&&(le=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const Y=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&le);return Y&&x!==uu&&(ne.value=go(v,this.options,G,this.speed)),L&&L(ne.value),Y&&this.finish(),ne}then(r,o){return this.finished.then(r,o)}get duration(){return Gt(this.calculatedDuration)}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Gt(r)}get time(){return Gt(this.currentTime)}set time(r){r=Ut(r),this.currentTime=r,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=r,this.tick(r))}getGeneratorVelocity(){const r=this.currentTime;if(r<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(r);const o=this.generator.next(r).value;return hy(l=>this.generator.next(l).value,r,o)}get speed(){return this.playbackSpeed}set speed(r){const o=this.playbackSpeed!==r;o&&this.driver&&this.updateTime(lt.now()),this.playbackSpeed=r,o&&this.driver&&(this.time=Gt(this.currentTime))}play(){if(this.isStopped)return;const{driver:r=e2,startTime:o}=this.options;this.driver||(this.driver=r(u=>this.tick(u))),this.options.onPlay?.();const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=o??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(lt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}attachTimeline(r){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),r.observe(this)}}function v2(a){for(let r=1;r<a.length;r++)a[r]??(a[r]=a[r-1])}const Sa=a=>a*180/Math.PI,du=a=>{const r=Sa(Math.atan2(a[1],a[0]));return hu(r)},b2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:du,rotateZ:du,skewX:a=>Sa(Math.atan(a[1])),skewY:a=>Sa(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},hu=a=>(a=a%360,a<0&&(a+=360),a),Up=du,xp=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),Mp=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),S2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:xp,scaleY:Mp,scale:a=>(xp(a)+Mp(a))/2,rotateX:a=>hu(Sa(Math.atan2(a[6],a[5]))),rotateY:a=>hu(Sa(Math.atan2(-a[2],a[0]))),rotateZ:Up,rotate:Up,skewX:a=>Sa(Math.atan(a[4])),skewY:a=>Sa(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function fu(a){return a.includes("scale")?1:0}function mu(a,r){if(!a||a==="none")return fu(r);const o=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,u;if(o)l=S2,u=o;else{const g=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=b2,u=g}if(!u)return fu(r);const f=l[r],h=u[1].split(",").map(T2);return typeof f=="function"?f(h):h[f]}const w2=(a,r)=>{const{transform:o="none"}=getComputedStyle(a);return mu(o,r)};function T2(a){return parseFloat(a.trim())}const pi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gi=new Set([...pi,"pathRotation"]),Dp=a=>a===mi||a===K,A2=new Set(["x","y","z"]),E2=pi.filter(a=>!A2.has(a));function C2(a){const r=[];return E2.forEach(o=>{const l=a.getValue(o);l!==void 0&&(r.push([o,l.get()]),l.set(o.startsWith("scale")?1:0))}),r}const Kn={width:({x:a},{paddingLeft:r="0",paddingRight:o="0",boxSizing:l})=>{const u=a.max-a.min;return l==="border-box"?u:u-parseFloat(r)-parseFloat(o)},height:({y:a},{paddingTop:r="0",paddingBottom:o="0",boxSizing:l})=>{const u=a.max-a.min;return l==="border-box"?u:u-parseFloat(r)-parseFloat(o)},top:(a,{top:r})=>parseFloat(r),left:(a,{left:r})=>parseFloat(r),bottom:({y:a},{top:r})=>parseFloat(r)+(a.max-a.min),right:({x:a},{left:r})=>parseFloat(r)+(a.max-a.min),x:(a,{transform:r})=>mu(r,"x"),y:(a,{transform:r})=>mu(r,"y")};Kn.translateX=Kn.x;Kn.translateY=Kn.y;const wa=new Set;let pu=!1,gu=!1,yu=!1;function my(){if(gu){const a=Array.from(wa).filter(l=>l.needsMeasurement),r=new Set(a.map(l=>l.element)),o=new Map;r.forEach(l=>{const u=C2(l);u.length&&(o.set(l,u),l.render())}),a.forEach(l=>l.measureInitialState()),r.forEach(l=>{l.render();const u=o.get(l);u&&u.forEach(([f,h])=>{l.getValue(f)?.set(h)})}),a.forEach(l=>l.measureEndState()),a.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}gu=!1,pu=!1,wa.forEach(a=>a.complete(yu)),wa.clear()}function py(){wa.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(gu=!0)})}function z2(){yu=!0,py(),my(),yu=!1}class Xu{constructor(r,o,l,u,f,h=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...r],this.onComplete=o,this.name=l,this.motionValue=u,this.element=f,this.isAsync=h}scheduleResolve(){this.state="scheduled",this.isAsync?(wa.add(this),pu||(pu=!0,De.read(py),De.resolveKeyframes(my))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:o,element:l,motionValue:u}=this;if(r[0]===null){const f=u?.get(),h=r[r.length-1];if(f!==void 0)r[0]=f;else if(l&&o){const g=l.readValue(o,h);g!=null&&(r[0]=g)}r[0]===void 0&&(r[0]=h),u&&f===void 0&&u.set(r[0])}v2(r)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(r=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,r),wa.delete(this)}cancel(){this.state==="scheduled"&&(wa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const U2=a=>a.startsWith("--");function gy(a,r,o){U2(r)?a.style.setProperty(r,o):a.style[r]=o}const x2={};function yy(a,r){const o=qg(a);return()=>x2[r]??o()}const M2=yy(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),vy=yy(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),fr=([a,r,o,l])=>`cubic-bezier(${a}, ${r}, ${o}, ${l})`,Rp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fr([0,.65,.55,1]),circOut:fr([.55,0,1,.45]),backIn:fr([.31,.01,.66,-.59]),backOut:fr([.33,1.53,.69,.99])};function by(a,r){if(a)return typeof a=="function"?vy()?dy(a,r):"ease-out":ty(a)?fr(a):Array.isArray(a)?a.map(o=>by(o,r)||Rp.easeOut):Rp[a]}function D2(a,r,o,{delay:l=0,duration:u=300,repeat:f=0,repeatType:h="loop",ease:g="easeOut",times:y}={},m=void 0){const v={[r]:o};y&&(v.offset=y);const b=by(g,u);Array.isArray(b)&&(v.easing=b);const S={delay:l,duration:u,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:f+1,direction:h==="reverse"?"alternate":"normal"};return m&&(S.pseudoElement=m),a.animate(v,S)}function Sy(a){return typeof a=="function"&&"applyToOptions"in a}function R2({type:a,...r}){return Sy(a)&&vy()?a.applyToOptions(r):(r.duration??(r.duration=300),r.ease??(r.ease="easeOut"),r)}class wy extends qu{constructor(r){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!r)return;const{element:o,name:l,keyframes:u,pseudoElement:f,allowFlatten:h=!1,finalKeyframe:g,onComplete:y}=r;this.isPseudoElement=!!f,this.allowFlatten=h,this.options=r,po(typeof r.type!="string");const m=R2(r);this.animation=D2(o,l,u,m,f),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const v=go(u,this.options,g,this.speed);this.updateMotionValue&&this.updateMotionValue(v),gy(o,l,v),this.animation.cancel()}y?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:r}=this;r==="idle"||r==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const r=this.options?.element;!this.isPseudoElement&&r?.isConnected&&this.animation.commitStyles?.()}get duration(){const r=this.animation.effect?.getComputedTiming?.().duration||0;return Gt(Number(r))}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Gt(r)}get time(){return Gt(Number(this.animation.currentTime)||0)}set time(r){const o=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ut(r),o&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(r){r<0&&(this.finishedTime=null),this.animation.playbackRate=r}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(r){this.manualStartTime=this.animation.startTime=r}attachTimeline({timeline:r,rangeStart:o,rangeEnd:l,observe:u}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,r&&M2()?(this.animation.timeline=r,o&&(this.animation.rangeStart=o),l&&(this.animation.rangeEnd=l),_t):u(this)}}const Ty={anticipate:Jg,backInOut:Zg,circInOut:$g};function V2(a){return a in Ty}function O2(a){typeof a.ease=="string"&&V2(a.ease)&&(a.ease=Ty[a.ease])}const Qc=10;class j2 extends wy{constructor(r){O2(r),fy(r),super(r),r.startTime!==void 0&&r.autoplay!==!1&&(this.startTime=r.startTime),this.options=r}updateMotionValue(r){const{motionValue:o,onUpdate:l,onComplete:u,element:f,...h}=this.options;if(!o)return;if(r!==void 0){o.set(r);return}const g=new oo({...h,autoplay:!1}),y=Math.max(Qc,lt.now()-this.startTime),m=en(0,Qc,y-Qc),v=g.sample(y).value,{name:b}=this.options;f&&b&&gy(f,b,v),o.setWithVelocity(g.sample(Math.max(0,y-m)).value,v,m),g.stop()}}const Vp=(a,r)=>r==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Ft.test(a)||a==="0")&&!a.startsWith("url("));function B2(a){const r=a[0];if(a.length===1)return!0;for(let o=0;o<a.length;o++)if(a[o]!==r)return!0}function k2(a,r,o,l){const u=a[0];if(u===null)return!1;if(r==="display"||r==="visibility")return!0;const f=a[a.length-1],h=Vp(u,r),g=Vp(f,r);return!h||!g?!1:B2(a)||(o==="spring"||Sy(o))&&l}function vu(a){a.duration=0,a.type="keyframes"}const Ay=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),L2=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function N2(a){for(let r=0;r<a.length;r++)if(typeof a[r]=="string"&&L2.test(a[r]))return!0;return!1}const G2=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),_2=qg(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function P2(a){const{motionValue:r,name:o,repeatDelay:l,repeatType:u,damping:f,type:h,keyframes:g}=a,y=r?.owner?.current;if(!(y instanceof HTMLElement)&&!(y instanceof SVGElement))return!1;const{onUpdate:m,transformTemplate:v}=r.owner.getProps();return _2()&&o&&(Ay.has(o)||G2.has(o)&&N2(g))&&(o!=="transform"||!v)&&!m&&!l&&u!=="mirror"&&f!==0&&h!=="inertia"}const H2=40;class I2 extends qu{constructor({autoplay:r=!0,delay:o=0,type:l="keyframes",repeat:u=0,repeatDelay:f=0,repeatType:h="loop",keyframes:g,name:y,motionValue:m,element:v,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=lt.now();const S={autoplay:r,delay:o,type:l,repeat:u,repeatDelay:f,repeatType:h,name:y,motionValue:m,element:v,...b},C=v?.KeyframeResolver||Xu;this.keyframeResolver=new C(g,(x,L,G)=>this.onKeyframesResolved(x,L,S,!G),y,m,v),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(r,o,l,u){this.keyframeResolver=void 0;const{name:f,type:h,velocity:g,delay:y,isHandoff:m,onUpdate:v}=l;this.resolvedAt=lt.now();let b=!0;k2(r,f,h,g)||(b=!1,(Qn.instantAnimations||!y)&&v?.(go(r,l,o)),r[0]=r[r.length-1],vu(l),l.repeat=0);const C={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>H2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...l,keyframes:r},x=b&&!m&&P2(C),L=C.motionValue?.owner?.current;let G;if(x)try{G=new j2({...C,element:L})}catch{G=new oo(C)}else G=new oo(C);G.finished.then(()=>{this.notifyFinished()}).catch(_t),this.pendingTimeline&&(this.stopTimeline=G.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=G}get finished(){return this._animation?this.animation.finished:this._finished}then(r,o){return this.finished.finally(r).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),z2()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(r){this.animation.time=r}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(r){this.animation.speed=r}get startTime(){return this.animation.startTime}attachTimeline(r){return this._animation?this.stopTimeline=this.animation.attachTimeline(r):this.pendingTimeline=r,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function Ey(a,r,o,l=0,u=1){const f=Array.from(a).sort((m,v)=>m.sortNodePosition(v)).indexOf(r),h=a.size,g=(h-1)*l;return typeof o=="function"?o(f,h):u===1?f*l:g-f*l}const Op=30,q2=a=>!isNaN(parseFloat(a));class X2{constructor(r,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{const u=lt.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty()},this.hasAnimated=!1,this.setCurrent(r),this.owner=o.owner}setCurrent(r){this.current=r,this.updatedAt=lt.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=q2(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,o){this.events[r]||(this.events[r]=new ku);const l=this.events[r].add(o);return r==="change"?()=>{l(),De.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,o){this.passiveEffect=r,this.stopPassiveEffect=o}set(r){this.passiveEffect?this.passiveEffect(r,this.updateAndNotify):this.updateAndNotify(r)}setWithVelocity(r,o,l){this.set(o),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-l}jump(r,o=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(r){this.dependents||(this.dependents=new Set),this.dependents.add(r)}removeDependent(r){this.dependents&&this.dependents.delete(r)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=lt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>Op)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Op);return Xg(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(r){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=r(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function hi(a,r){return new X2(a,r)}function Cy(a,r){if(a?.inherit&&r){const{inherit:o,...l}=a;return{...r,...l}}return a}function Fu(a,r){const o=a?.[r]??a?.default??a;return o!==a?Cy(o,a):o}const F2={type:"spring",stiffness:500,damping:25,restSpeed:10},Y2=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),K2={type:"keyframes",duration:.8},Q2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Z2=(a,{keyframes:r})=>r.length>2?K2:gi.has(a)?a.startsWith("scale")?Y2(r[1]):F2:Q2,J2=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function W2(a){for(const r in a)if(!J2.has(r))return!0;return!1}const Yu=(a,r,o,l={},u,f)=>h=>{const g=Fu(l,a)||{},y=g.delay||l.delay||0;let{elapsed:m=0}=l;m=m-Ut(y);const v={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:r.getVelocity(),...g,delay:-m,onUpdate:S=>{r.set(S),g.onUpdate&&g.onUpdate(S)},onComplete:()=>{h(),g.onComplete&&g.onComplete()},name:a,motionValue:r,element:f?void 0:u};W2(g)||Object.assign(v,Z2(a,v)),v.duration&&(v.duration=Ut(v.duration)),v.repeatDelay&&(v.repeatDelay=Ut(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let b=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(vu(v),v.delay===0&&(b=!0)),(Qn.instantAnimations||Qn.skipAnimations||u?.shouldSkipAnimations||g.skipAnimations)&&(b=!0,vu(v),v.delay=0),v.allowFlatten=!g.type&&!g.ease,b&&!f&&r.get()!==void 0){const S=go(v.keyframes,g);if(S!==void 0){De.update(()=>{v.onUpdate(S),v.onComplete()});return}}return g.isSync?new oo(v):new I2(v)},$2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function eS(a){const r=$2.exec(a);if(!r)return[,];const[,o,l,u]=r;return[`--${o??l}`,u]}function zy(a,r,o=1){const[l,u]=eS(a);if(!l)return;const f=window.getComputedStyle(r).getPropertyValue(l);if(f){const h=f.trim();return Pg(h)?parseFloat(h):h}return Gu(u)?zy(u,r,o+1):u}function jp(a){const r=[{},{}];return a?.values.forEach((o,l)=>{r[0][l]=o.get(),r[1][l]=o.getVelocity()}),r}function Ku(a,r,o,l){if(typeof r=="function"){const[u,f]=jp(l);r=r(o!==void 0?o:a.custom,u,f)}if(typeof r=="string"&&(r=a.variants&&a.variants[r]),typeof r=="function"){const[u,f]=jp(l);r=r(o!==void 0?o:a.custom,u,f)}return r}function Ta(a,r,o){const l=a.getProps();return Ku(l,r,o!==void 0?o:l.custom,a)}const Uy=new Set(["width","height","top","left","right","bottom",...pi]),bu=a=>Array.isArray(a);function tS(a,r,o){a.hasValue(r)?a.getValue(r).set(o):a.addValue(r,hi(o))}function nS(a){return bu(a)?a[a.length-1]||0:a}function aS(a,r){const o=Ta(a,r);let{transitionEnd:l={},transition:u={},...f}=o||{};f={...f,...l};for(const h in f){const g=nS(f[h]);tS(a,h,g)}}const at=a=>!!(a&&a.getVelocity);function iS(a){return!!(at(a)&&a.add)}function Su(a,r){const o=a.getValue("willChange");if(iS(o))return o.add(r);if(!o&&Qn.WillChange){const l=new Qn.WillChange("auto");a.addValue("willChange",l),l.add(r)}}function Qu(a){return a.replace(/([A-Z])/g,r=>`-${r.toLowerCase()}`)}const rS="framerAppearId",xy="data-"+Qu(rS);function My(a){return a.props[xy]}function sS({protectedKeys:a,needsAnimating:r},o){const l=a.hasOwnProperty(o)&&r[o]!==!0;return r[o]=!1,l}function Dy(a,r,{delay:o=0,transitionOverride:l,type:u}={}){let{transition:f,transitionEnd:h,...g}=r;const y=a.getDefaultTransition();f=f?Cy(f,y):y;const m=f?.reduceMotion,v=f?.skipAnimations;l&&(f=l);const b=[],S=u&&a.animationState&&a.animationState.getState()[u],C=f?.path;C&&C.animateVisualElement(a,g,f,o,b);for(const x in g){const L=a.getValue(x,a.latestValues[x]??null),G=g[x];if(G===void 0||S&&sS(S,x))continue;const N={delay:o,...Fu(f||{},x)};v&&(N.skipAnimations=!0);const H=L.get();if(H!==void 0&&!L.isAnimating()&&!Array.isArray(G)&&G===H&&!N.velocity){De.update(()=>L.set(G));continue}let _=!1;if(window.MotionHandoffAnimation){const le=My(a);if(le){const Y=window.MotionHandoffAnimation(le,x,De);Y!==null&&(N.startTime=Y,_=!0)}}Su(a,x);const q=m??a.shouldReduceMotion;L.start(Yu(x,L,G,q&&Uy.has(x)?{type:!1}:N,a,_));const ne=L.animation;ne&&b.push(ne)}if(h){const x=()=>De.update(()=>{h&&aS(a,h)});b.length?Promise.all(b).then(x):x()}return b}function wu(a,r,o={}){const l=Ta(a,r,o.type==="exit"?a.presenceContext?.custom:void 0);let{transition:u=a.getDefaultTransition()||{}}=l||{};o.transitionOverride&&(u=o.transitionOverride);const f=l?()=>Promise.all(Dy(a,l,o)):()=>Promise.resolve(),h=a.variantChildren&&a.variantChildren.size?(y=0)=>{const{delayChildren:m=0,staggerChildren:v,staggerDirection:b}=u;return oS(a,r,y,m,v,b,o)}:()=>Promise.resolve(),{when:g}=u;if(g){const[y,m]=g==="beforeChildren"?[f,h]:[h,f];return y().then(()=>m())}else return Promise.all([f(),h(o.delay)])}function oS(a,r,o=0,l=0,u=0,f=1,h){const g=[];for(const y of a.variantChildren)y.notify("AnimationStart",r),g.push(wu(y,r,{...h,delay:o+(typeof l=="function"?0:l)+Ey(a.variantChildren,y,l,u,f)}).then(()=>y.notify("AnimationComplete",r)));return Promise.all(g)}function lS(a,r,o={}){a.notify("AnimationStart",r);let l;if(Array.isArray(r)){const u=r.map(f=>wu(a,f,o));l=Promise.all(u)}else if(typeof r=="string")l=wu(a,r,o);else{const u=typeof r=="function"?Ta(a,r,o.custom):r;l=Promise.all(Dy(a,u,o))}return l.then(()=>{a.notify("AnimationComplete",r)})}const cS={test:a=>a==="auto",parse:a=>a},Ry=a=>r=>r.test(a),Vy=[mi,K,$t,wn,B1,j1,cS],Bp=a=>Vy.find(Ry(a));function uS(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||Ig(a):!0}const dS=new Set(["brightness","contrast","saturate","opacity"]);function hS(a){const[r,o]=a.slice(0,-1).split("(");if(r==="drop-shadow")return a;const[l]=o.match(_u)||[];if(!l)return a;const u=o.replace(l,"");let f=dS.has(r)?1:0;return l!==o&&(f*=100),r+"("+f+u+")"}const fS=/\b([a-z-]*)\(.*?\)/gu,Tu={...Ft,getAnimatableNone:a=>{const r=a.match(fS);return r?r.map(hS).join(" "):a}},Au={...Ft,getAnimatableNone:a=>{const r=Ft.parse(a);return Ft.createTransformer(a)(r.map(l=>typeof l=="number"?0:typeof l=="object"?{...l,alpha:1}:l))}},kp={...mi,transform:Math.round},mS={rotate:wn,pathRotation:wn,rotateX:wn,rotateY:wn,rotateZ:wn,scale:Xs,scaleX:Xs,scaleY:Xs,scaleZ:Xs,skew:wn,skewX:wn,skewY:wn,distance:K,translateX:K,translateY:K,translateZ:K,x:K,y:K,z:K,perspective:K,transformPerspective:K,opacity:br,originX:Tp,originY:Tp,originZ:K},lo={borderWidth:K,borderTopWidth:K,borderRightWidth:K,borderBottomWidth:K,borderLeftWidth:K,borderRadius:K,borderTopLeftRadius:K,borderTopRightRadius:K,borderBottomRightRadius:K,borderBottomLeftRadius:K,width:K,maxWidth:K,height:K,maxHeight:K,top:K,right:K,bottom:K,left:K,inset:K,insetBlock:K,insetBlockStart:K,insetBlockEnd:K,insetInline:K,insetInlineStart:K,insetInlineEnd:K,padding:K,paddingTop:K,paddingRight:K,paddingBottom:K,paddingLeft:K,paddingBlock:K,paddingBlockStart:K,paddingBlockEnd:K,paddingInline:K,paddingInlineStart:K,paddingInlineEnd:K,margin:K,marginTop:K,marginRight:K,marginBottom:K,marginLeft:K,marginBlock:K,marginBlockStart:K,marginBlockEnd:K,marginInline:K,marginInlineStart:K,marginInlineEnd:K,fontSize:K,backgroundPositionX:K,backgroundPositionY:K,...mS,zIndex:kp,fillOpacity:br,strokeOpacity:br,numOctaves:kp},pS={...lo,color:Fe,backgroundColor:Fe,outlineColor:Fe,fill:Fe,stroke:Fe,borderColor:Fe,borderTopColor:Fe,borderRightColor:Fe,borderBottomColor:Fe,borderLeftColor:Fe,filter:Tu,WebkitFilter:Tu,mask:Au,WebkitMask:Au},Oy=a=>pS[a],gS=new Set([Tu,Au]);function jy(a,r){let o=Oy(a);return gS.has(o)||(o=Ft),o.getAnimatableNone?o.getAnimatableNone(r):void 0}const yS=new Set(["auto","none","0"]);function vS(a,r,o){let l=0,u;for(;l<a.length&&!u;){const f=a[l];typeof f=="string"&&!yS.has(f)&&di(f).values.length&&(u=a[l]),l++}if(u&&o)for(const f of r)a[f]=jy(o,u)}class bS extends Xu{constructor(r,o,l,u,f){super(r,o,l,u,f,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:o,name:l}=this;if(!o||!o.current)return;super.readKeyframes();for(let v=0;v<r.length;v++){let b=r[v];if(typeof b=="string"&&(b=b.trim(),Gu(b))){const S=zy(b,o.current);S!==void 0&&(r[v]=S),v===r.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!Uy.has(l)||r.length!==2)return;const[u,f]=r,h=Bp(u),g=Bp(f),y=wp(u),m=wp(f);if(y!==m&&Kn[l]){this.needsMeasurement=!0;return}if(h!==g)if(Dp(h)&&Dp(g))for(let v=0;v<r.length;v++){const b=r[v];typeof b=="string"&&(r[v]=parseFloat(b))}else Kn[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:o}=this,l=[];for(let u=0;u<r.length;u++)(r[u]===null||uS(r[u]))&&l.push(u);l.length&&vS(r,l,o)}measureInitialState(){const{element:r,unresolvedKeyframes:o,name:l}=this;if(!r||!r.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Kn[l](r.measureViewportBox(),window.getComputedStyle(r.current)),o[0]=this.measuredOrigin;const u=o[o.length-1];u!==void 0&&r.getValue(l,u).jump(u,!1)}measureEndState(){const{element:r,name:o,unresolvedKeyframes:l}=this;if(!r||!r.current)return;const u=r.getValue(o);u&&u.jump(this.measuredOrigin,!1);const f=l.length-1,h=l[f];l[f]=Kn[o](r.measureViewportBox(),window.getComputedStyle(r.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),this.removedTransforms?.length&&this.removedTransforms.forEach(([g,y])=>{r.getValue(g).set(y)}),this.resolveNoneKeyframes()}}const Zu=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function By(a,r,o){if(a==null)return[];if(a instanceof EventTarget)return[a];if(typeof a=="string"){let l=document;const u=o?.[a]??l.querySelectorAll(a);return u?Array.from(u):[]}return Array.from(a).filter(l=>l!=null)}const Eu=(a,r)=>r&&typeof a=="number"?r.transform(a):a;function SS(a){return Hg(a)&&"offsetHeight"in a&&!("ownerSVGElement"in a)}const{schedule:Ju}=ny(queueMicrotask,!1),Xt={x:!1,y:!1};function ky(){return Xt.x||Xt.y}function wS(a){return a==="x"||a==="y"?Xt[a]?null:(Xt[a]=!0,()=>{Xt[a]=!1}):Xt.x||Xt.y?null:(Xt.x=Xt.y=!0,()=>{Xt.x=Xt.y=!1})}function Ly(a,r){const o=By(a),l=new AbortController,u={passive:!0,...r,signal:l.signal};return[o,u,()=>l.abort()]}function TS(a){return!(a.pointerType==="touch"||ky())}function AS(a,r,o={}){const[l,u,f]=Ly(a,o);return l.forEach(h=>{let g=!1,y=!1,m;const v=()=>{h.removeEventListener("pointerleave",x)},b=G=>{m&&(m(G),m=void 0),v()},S=G=>{g=!1,window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),y&&(y=!1,b(G))},C=()=>{g=!0,window.addEventListener("pointerup",S,u),window.addEventListener("pointercancel",S,u)},x=G=>{if(G.pointerType!=="touch"){if(g){y=!0;return}b(G)}},L=G=>{if(!TS(G))return;y=!1;const N=r(h,G);typeof N=="function"&&(m=N,h.addEventListener("pointerleave",x,u))};h.addEventListener("pointerenter",L,u),h.addEventListener("pointerdown",C,u)}),f}const Ny=(a,r)=>r?a===r?!0:Ny(a,r.parentElement):!1,Wu=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,ES=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function CS(a){return ES.has(a.tagName)||a.isContentEditable===!0}const zS=new Set(["INPUT","SELECT","TEXTAREA"]);function US(a){return zS.has(a.tagName)||a.isContentEditable===!0}const Qs=new WeakSet;function Lp(a){return r=>{r.key==="Enter"&&a(r)}}function Zc(a,r){a.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const xS=(a,r)=>{const o=a.currentTarget;if(!o)return;const l=Lp(()=>{if(Qs.has(o))return;Zc(o,"down");const u=Lp(()=>{Zc(o,"up")}),f=()=>Zc(o,"cancel");o.addEventListener("keyup",u,r),o.addEventListener("blur",f,r)});o.addEventListener("keydown",l,r),o.addEventListener("blur",()=>o.removeEventListener("keydown",l),r)};function Np(a){return Wu(a)&&!ky()}const Gp=new WeakSet;function MS(a,r,o={}){const[l,u,f]=Ly(a,o),h=g=>{const y=g.currentTarget;if(!Np(g)||Gp.has(g))return;Qs.add(y),o.stopPropagation&&Gp.add(g);const m=r(y,g),v={...u,capture:!0},b=(x,L)=>{window.removeEventListener("pointerup",S,v),window.removeEventListener("pointercancel",C,v),Qs.has(y)&&Qs.delete(y),Np(x)&&typeof m=="function"&&m(x,{success:L})},S=x=>{b(x,y===window||y===document||o.useGlobalTarget||Ny(y,x.target))},C=x=>{b(x,!1)};window.addEventListener("pointerup",S,v),window.addEventListener("pointercancel",C,v)};return l.forEach(g=>{(o.useGlobalTarget?window:g).addEventListener("pointerdown",h,u),SS(g)&&(g.addEventListener("focus",m=>xS(m,u)),!CS(g)&&!g.hasAttribute("tabindex")&&(g.tabIndex=0))}),f}function $u(a){return Hg(a)&&"ownerSVGElement"in a}const Zs=new WeakMap;let Js;const Gy=(a,r,o)=>(l,u)=>u&&u[0]?u[0][a+"Size"]:$u(l)&&"getBBox"in l?l.getBBox()[r]:l[o],DS=Gy("inline","width","offsetWidth"),RS=Gy("block","height","offsetHeight");function VS({target:a,borderBoxSize:r}){Zs.get(a)?.forEach(o=>{o(a,{get width(){return DS(a,r)},get height(){return RS(a,r)}})})}function OS(a){a.forEach(VS)}function jS(){typeof ResizeObserver>"u"||(Js=new ResizeObserver(OS))}function BS(a,r){Js||jS();const o=By(a);return o.forEach(l=>{let u=Zs.get(l);u||(u=new Set,Zs.set(l,u)),u.add(r),Js?.observe(l)}),()=>{o.forEach(l=>{const u=Zs.get(l);u?.delete(r),u?.size||Js?.unobserve(l)})}}const Ws=new Set;let ci;function kS(){ci=()=>{const a={get width(){return window.innerWidth},get height(){return window.innerHeight}};Ws.forEach(r=>r(a))},window.addEventListener("resize",ci)}function LS(a){return Ws.add(a),ci||kS(),()=>{Ws.delete(a),!Ws.size&&typeof ci=="function"&&(window.removeEventListener("resize",ci),ci=void 0)}}function _p(a,r){return typeof a=="function"?LS(a):BS(a,r)}function NS(a){return $u(a)&&a.tagName==="svg"}const GS=[...Vy,Fe,Ft],_S=a=>GS.find(Ry(a)),Pp=()=>({translate:0,scale:1,origin:0,originPoint:0}),ui=()=>({x:Pp(),y:Pp()}),Hp=()=>({min:0,max:0}),Ke=()=>({x:Hp(),y:Hp()}),PS=new WeakMap;function yo(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function Sr(a){return typeof a=="string"||Array.isArray(a)}const ed=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],td=["initial",...ed];function vo(a){return yo(a.animate)||td.some(r=>Sr(a[r]))}function _y(a){return!!(vo(a)||a.variants)}function HS(a,r,o){for(const l in r){const u=r[l],f=o[l];if(at(u))a.addValue(l,u);else if(at(f))a.addValue(l,hi(u,{owner:a}));else if(f!==u)if(a.hasValue(l)){const h=a.getValue(l);h.liveStyle===!0?h.jump(u):h.hasAnimated||h.set(u)}else{const h=a.getStaticValue(l);a.addValue(l,hi(h!==void 0?h:u,{owner:a}))}}for(const l in o)r[l]===void 0&&a.removeValue(l);return r}const co={current:null},nd={current:!1},IS=typeof window<"u";function Py(){if(nd.current=!0,!!IS)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),r=()=>co.current=a.matches;a.addEventListener("change",r),r()}else co.current=!1}const Ip=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let uo={};function Hy(a){uo=a}function qS(){return uo}class XS{scrapeMotionValuesFromProps(r,o,l){return{}}constructor({parent:r,props:o,presenceContext:l,reducedMotionConfig:u,skipAnimations:f,blockInitialAnimation:h,visualState:g},y={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Xu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const C=lt.now();this.renderScheduledAt<C&&(this.renderScheduledAt=C,De.render(this.render,!1,!0))};const{latestValues:m,renderState:v}=g;this.latestValues=m,this.baseTarget={...m},this.initialValues=o.initial?{...m}:{},this.renderState=v,this.parent=r,this.props=o,this.presenceContext=l,this.depth=r?r.depth+1:0,this.reducedMotionConfig=u,this.skipAnimationsConfig=f,this.options=y,this.blockInitialAnimation=!!h,this.isControllingVariants=vo(o),this.isVariantNode=_y(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:b,...S}=this.scrapeMotionValuesFromProps(o,{},this);for(const C in S){const x=S[C];m[C]!==void 0&&at(x)&&x.set(m[C])}}mount(r){if(this.hasBeenMounted)for(const o in this.initialValues)this.values.get(o)?.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=r,PS.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,l)=>this.bindToMotionValue(l,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(nd.current||Py(),this.shouldReduceMotion=co.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Zn(this.notifyUpdate),Zn(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const o=this.features[r];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(r){this.children.add(r),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(r)}removeChild(r){this.children.delete(r),this.enteringChildren&&this.enteringChildren.delete(r)}bindToMotionValue(r,o){if(this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)(),o.accelerate&&Ay.has(r)&&this.current instanceof HTMLElement){const{factory:h,keyframes:g,times:y,ease:m,duration:v}=o.accelerate,b=new wy({element:this.current,name:r,keyframes:g,times:y,ease:m,duration:Ut(v)}),S=h(b);this.valueSubscriptions.set(r,()=>{S(),b.cancel()});return}const l=gi.has(r);l&&this.onBindTransform&&this.onBindTransform();const u=o.on("change",h=>{this.latestValues[r]=h,this.props.onUpdate&&De.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;typeof window<"u"&&window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,r,o)),this.valueSubscriptions.set(r,()=>{u(),f&&f()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in uo){const o=uo[r];if(!o)continue;const{isEnabled:l,Feature:u}=o;if(!this.features[r]&&u&&l(this.props)&&(this.features[r]=new u(this)),this.features[r]){const f=this.features[r];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ke()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,o){this.latestValues[r]=o}update(r,o){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let l=0;l<Ip.length;l++){const u=Ip[l];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const f="on"+u,h=r[f];h&&(this.propEventSubscriptions[u]=this.on(u,h))}this.prevMotionValues=HS(this,this.scrapeMotionValuesFromProps(r,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(r),()=>o.variantChildren.delete(r)}addValue(r,o){const l=this.values.get(r);o!==l&&(l&&this.removeValue(r),this.bindToMotionValue(r,o),this.values.set(r,o),this.latestValues[r]=o.get())}removeValue(r){this.values.delete(r);const o=this.valueSubscriptions.get(r);o&&(o(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,o){if(this.props.values&&this.props.values[r])return this.props.values[r];let l=this.values.get(r);return l===void 0&&o!==void 0&&(l=hi(o===null?void 0:o,{owner:this}),this.addValue(r,l)),l}readValue(r,o){let l=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:this.getBaseTargetFromProps(this.props,r)??this.readValueFromInstance(this.current,r,this.options);return l!=null&&(typeof l=="string"&&(Pg(l)||Ig(l))?l=parseFloat(l):!_S(l)&&Ft.test(o)&&(l=jy(r,o)),this.setBaseTarget(r,at(l)?l.get():l)),at(l)?l.get():l}setBaseTarget(r,o){this.baseTarget[r]=o}getBaseTarget(r){const{initial:o}=this.props;let l;if(typeof o=="string"||typeof o=="object"){const f=Ku(this.props,o,this.presenceContext?.custom);f&&(l=f[r])}if(o&&l!==void 0)return l;const u=this.getBaseTargetFromProps(this.props,r);return u!==void 0&&!at(u)?u:this.initialValues[r]!==void 0&&l===void 0?void 0:this.baseTarget[r]}on(r,o){return this.events[r]||(this.events[r]=new ku),this.events[r].add(o)}notify(r,...o){this.events[r]&&this.events[r].notify(...o)}scheduleRenderMicrotask(){Ju.render(this.render)}}class Iy extends XS{constructor(){super(...arguments),this.KeyframeResolver=bS}sortInstanceNodePosition(r,o){return r.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(r,o){const l=r.style;return l?l[o]:void 0}removeValueFromRenderState(r,{vars:o,style:l}){delete o[r],delete l[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;at(r)&&(this.childSubscription=r.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}class Jn{constructor(r){this.isMounted=!1,this.node=r}update(){}}function qy({top:a,left:r,right:o,bottom:l}){return{x:{min:r,max:o},y:{min:a,max:l}}}function FS({x:a,y:r}){return{top:r.min,right:a.max,bottom:r.max,left:a.min}}function YS(a,r){if(!r)return a;const o=r({x:a.left,y:a.top}),l=r({x:a.right,y:a.bottom});return{top:o.y,left:o.x,bottom:l.y,right:l.x}}function Jc(a){return a===void 0||a===1}function Cu({scale:a,scaleX:r,scaleY:o}){return!Jc(a)||!Jc(r)||!Jc(o)}function va(a){return Cu(a)||Xy(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function Xy(a){return qp(a.x)||qp(a.y)}function qp(a){return a&&a!=="0%"}function ho(a,r,o){const l=a-o,u=r*l;return o+u}function Xp(a,r,o,l,u){return u!==void 0&&(a=ho(a,u,l)),ho(a,o,l)+r}function zu(a,r=0,o=1,l,u){a.min=Xp(a.min,r,o,l,u),a.max=Xp(a.max,r,o,l,u)}function Fy(a,{x:r,y:o}){zu(a.x,r.translate,r.scale,r.originPoint),zu(a.y,o.translate,o.scale,o.originPoint)}const Fp=.999999999999,Yp=1.0000000000001;function KS(a,r,o,l=!1){const u=o.length;if(!u)return;r.x=r.y=1;let f,h;for(let g=0;g<u;g++){f=o[g],h=f.projectionDelta;const{visualElement:y}=f.options;y&&y.props.style&&y.props.style.display==="contents"||(l&&f.options.layoutScroll&&f.scroll&&f!==f.root&&(Wt(a.x,-f.scroll.offset.x),Wt(a.y,-f.scroll.offset.y)),h&&(r.x*=h.x.scale,r.y*=h.y.scale,Fy(a,h)),l&&va(f.latestValues)&&$s(a,f.latestValues,f.layout?.layoutBox))}r.x<Yp&&r.x>Fp&&(r.x=1),r.y<Yp&&r.y>Fp&&(r.y=1)}function Wt(a,r){a.min+=r,a.max+=r}function Kp(a,r,o,l,u=.5){const f=Me(a.min,a.max,u);zu(a,r,o,f,l)}function Qp(a,r){return typeof a=="string"?parseFloat(a)/100*(r.max-r.min):a}function $s(a,r,o){const l=o??a;Kp(a.x,Qp(r.x,l.x),r.scaleX,r.scale,r.originX),Kp(a.y,Qp(r.y,l.y),r.scaleY,r.scale,r.originY)}function Yy(a,r){return qy(YS(a.getBoundingClientRect(),r))}function QS(a,r,o){const l=Yy(a,o),{scroll:u}=r;return u&&(Wt(l.x,u.offset.x),Wt(l.y,u.offset.y)),l}const ZS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},JS=pi.length;function WS(a,r,o){let l="",u=!0;for(let h=0;h<JS;h++){const g=pi[h],y=a[g];if(y===void 0)continue;let m=!0;if(typeof y=="number")m=y===(g.startsWith("scale")?1:0);else{const v=parseFloat(y);m=g.startsWith("scale")?v===1:v===0}if(!m||o){const v=Eu(y,lo[g]);if(!m){u=!1;const b=ZS[g]||g;l+=`${b}(${v}) `}o&&(r[g]=v)}}const f=a.pathRotation;return f&&(u=!1,l+=`rotate(${Eu(f,lo.pathRotation)}) `),l=l.trim(),o?l=o(r,u?"":l):u&&(l="none"),l}function ad(a,r,o){const{style:l,vars:u,transformOrigin:f}=a;let h=!1,g=!1;for(const y in r){const m=r[y];if(gi.has(y)){h=!0;continue}else if(iy(y)){u[y]=m;continue}else{const v=Eu(m,lo[y]);y.startsWith("origin")?(g=!0,f[y]=v):l[y]=v}}if(r.transform||(h||o?l.transform=WS(r,a.transform,o):l.transform&&(l.transform="none")),g){const{originX:y="50%",originY:m="50%",originZ:v=0}=f;l.transformOrigin=`${y} ${m} ${v}`}}function Ky(a,{style:r,vars:o},l,u){const f=a.style;let h;for(h in r)f[h]=r[h];u?.applyProjectionStyles(f,l);for(h in o)f.setProperty(h,o[h])}function Zp(a,r){return r.max===r.min?0:a/(r.max-r.min)*100}const hr={correct:(a,r)=>{if(!r.target)return a;if(typeof a=="string")if(K.test(a))a=parseFloat(a);else return a;const o=Zp(a,r.target.x),l=Zp(a,r.target.y);return`${o}% ${l}%`}},$S={correct:(a,{treeScale:r,projectionDelta:o})=>{const l=a,u=Ft.parse(a);if(u.length>5)return l;const f=Ft.createTransformer(a),h=typeof u[0]!="number"?1:0,g=o.x.scale*r.x,y=o.y.scale*r.y;u[0+h]/=g,u[1+h]/=y;const m=Me(g,y,.5);return typeof u[2+h]=="number"&&(u[2+h]/=m),typeof u[3+h]=="number"&&(u[3+h]/=m),f(u)}},Uu={borderRadius:{...hr,applyTo:[...Zu]},borderTopLeftRadius:hr,borderTopRightRadius:hr,borderBottomLeftRadius:hr,borderBottomRightRadius:hr,boxShadow:$S};function Qy(a,{layout:r,layoutId:o}){return gi.has(a)||a.startsWith("origin")||(r||o!==void 0)&&(!!Uu[a]||a==="opacity")}function id(a,r,o){const l=a.style,u=r?.style,f={};if(!l)return f;for(const h in l)(at(l[h])||u&&at(u[h])||Qy(h,a)||o?.getValue(h)?.liveStyle!==void 0)&&(f[h]=l[h]);return f}function ew(a){return window.getComputedStyle(a)}class tw extends Iy{constructor(){super(...arguments),this.type="html",this.renderInstance=Ky}mount(r){po(!!r.style),super.mount(r)}readValueFromInstance(r,o){if(gi.has(o))return this.projection?.isProjecting?fu(o):w2(r,o);{const l=ew(r),u=(iy(o)?l.getPropertyValue(o):l[o])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(r,{transformPagePoint:o}){return Yy(r,o)}build(r,o,l){ad(r,o,l.transformTemplate)}scrapeMotionValuesFromProps(r,o,l){return id(r,o,l)}}const nw={offset:"stroke-dashoffset",array:"stroke-dasharray"},aw={offset:"strokeDashoffset",array:"strokeDasharray"};function iw(a,r,o=1,l=0,u=!0){a.pathLength=1;const f=u?nw:aw;a[f.offset]=`${-l}`,a[f.array]=`${r} ${o}`}const rw=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Zy(a,{attrX:r,attrY:o,attrScale:l,pathLength:u,pathSpacing:f=1,pathOffset:h=0,...g},y,m,v){if(ad(a,g,m),y){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:b,style:S}=a;b.transform&&(S.transform=b.transform,delete b.transform),(S.transform||b.transformOrigin)&&(S.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),S.transform&&(S.transformBox=v?.transformBox??"fill-box",delete b.transformBox);for(const C of rw)b[C]!==void 0&&(S[C]=b[C],delete b[C]);r!==void 0&&(b.x=r),o!==void 0&&(b.y=o),l!==void 0&&(b.scale=l),u!==void 0&&iw(b,u,f,h,!1)}const Jy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Wy=a=>typeof a=="string"&&a.toLowerCase()==="svg";function sw(a,r,o,l){Ky(a,r,void 0,l);for(const u in r.attrs)a.setAttribute(Jy.has(u)?u:Qu(u),r.attrs[u])}function $y(a,r,o){const l=id(a,r,o);for(const u in a)if(at(a[u])||at(r[u])){const f=pi.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;l[f]=a[u]}return l}class ow extends Iy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ke}getBaseTargetFromProps(r,o){return r[o]}readValueFromInstance(r,o){if(gi.has(o)){const l=Oy(o);return l&&l.default||0}return o=Jy.has(o)?o:Qu(o),r.getAttribute(o)}scrapeMotionValuesFromProps(r,o,l){return $y(r,o,l)}build(r,o,l){Zy(r,o,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(r,o,l,u){sw(r,o,l,u)}mount(r){this.isSVGTag=Wy(r.tagName),super.mount(r)}}const lw=td.length;function ev(a){if(!a)return;if(!a.isControllingVariants){const o=a.parent?ev(a.parent)||{}:{};return a.props.initial!==void 0&&(o.initial=a.props.initial),o}const r={};for(let o=0;o<lw;o++){const l=td[o],u=a.props[l];(Sr(u)||u===!1)&&(r[l]=u)}return r}function tv(a,r){if(!Array.isArray(r))return!1;const o=r.length;if(o!==a.length)return!1;for(let l=0;l<o;l++)if(r[l]!==a[l])return!1;return!0}const cw=[...ed].reverse(),uw=ed.length;function dw(a){return r=>Promise.all(r.map(({animation:o,options:l})=>lS(a,o,l)))}function hw(a){let r=dw(a),o=Jp(),l=!0,u=!1;const f=m=>(v,b)=>{const S=Ta(a,b,m==="exit"?a.presenceContext?.custom:void 0);if(S){const{transition:C,transitionEnd:x,...L}=S;v={...v,...L,...x}}return v};function h(m){r=m(a)}function g(m){const{props:v}=a,b=ev(a.parent)||{},S=[],C=new Set;let x={},L=1/0;for(let N=0;N<uw;N++){const H=cw[N],_=o[H],q=v[H]!==void 0?v[H]:b[H],ne=Sr(q),le=H===m?_.isActive:null;le===!1&&(L=N);let Y=q===b[H]&&q!==v[H]&&ne;if(Y&&(l||u)&&a.manuallyAnimateOnMount&&(Y=!1),_.protectedKeys={...x},!_.isActive&&le===null||!q&&!_.prevProp||yo(q)||typeof q=="boolean")continue;if(H==="exit"&&_.isActive&&le!==!0){_.prevResolvedValues&&(x={...x,..._.prevResolvedValues});continue}const W=fw(_.prevProp,q);let Ee=W||H===m&&_.isActive&&!Y&&ne||N>L&&ne,te=!1;const ve=Array.isArray(q)?q:[q];let we=ve.reduce(f(H),{});le===!1&&(we={});const{prevResolvedValues:rt={}}=_,Pe={...rt,...we},Le=X=>{Ee=!0,C.has(X)&&(te=!0,C.delete(X)),_.needsAnimating[X]=!0;const se=a.getValue(X);se&&(se.liveStyle=!1)};for(const X in Pe){const se=we[X],me=rt[X];if(x.hasOwnProperty(X))continue;let A=!1;bu(se)&&bu(me)?A=!tv(se,me)||W:A=se!==me,A?se!=null?Le(X):C.add(X):se!==void 0&&C.has(X)?Le(X):_.protectedKeys[X]=!0}_.prevProp=q,_.prevResolvedValues=we,_.isActive&&(x={...x,...we}),(l||u)&&a.blockInitialAnimation&&(Ee=!1);const V=Y&&W;Ee&&(!V||te)&&S.push(...ve.map(X=>{const se={type:H};if(typeof X=="string"&&(l||u)&&!V&&a.manuallyAnimateOnMount&&a.parent){const{parent:me}=a,A=Ta(me,X);if(me.enteringChildren&&A){const{delayChildren:k}=A.transition||{};se.delay=Ey(me.enteringChildren,a,k)}}return{animation:X,options:se}}))}if(C.size){const N={};if(typeof v.initial!="boolean"){const H=Ta(a,Array.isArray(v.initial)?v.initial[0]:v.initial);H&&H.transition&&(N.transition=H.transition)}C.forEach(H=>{const _=a.getBaseTarget(H),q=a.getValue(H);q&&(q.liveStyle=!0),N[H]=_??null}),S.push({animation:N})}let G=!!S.length;return l&&(v.initial===!1||v.initial===v.animate)&&!a.manuallyAnimateOnMount&&(G=!1),l=!1,u=!1,G?r(S):Promise.resolve()}function y(m,v){if(o[m].isActive===v)return Promise.resolve();a.variantChildren?.forEach(S=>S.animationState?.setActive(m,v)),o[m].isActive=v;const b=g(m);for(const S in o)o[S].protectedKeys={};return b}return{animateChanges:g,setActive:y,setAnimateFunction:h,getState:()=>o,reset:()=>{o=Jp(),u=!0}}}function fw(a,r){return typeof r=="string"?r!==a:Array.isArray(r)?!tv(r,a):!1}function ya(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Jp(){return{animate:ya(!0),whileInView:ya(),whileHover:ya(),whileTap:ya(),whileDrag:ya(),whileFocus:ya(),exit:ya()}}function xu(a,r){a.min=r.min,a.max=r.max}function qt(a,r){xu(a.x,r.x),xu(a.y,r.y)}function Wp(a,r){a.translate=r.translate,a.scale=r.scale,a.originPoint=r.originPoint,a.origin=r.origin}const nv=1e-4,mw=1-nv,pw=1+nv,av=.01,gw=0-av,yw=0+av;function ct(a){return a.max-a.min}function vw(a,r,o){return Math.abs(a-r)<=o}function $p(a,r,o,l=.5){a.origin=l,a.originPoint=Me(r.min,r.max,a.origin),a.scale=ct(o)/ct(r),a.translate=Me(o.min,o.max,a.origin)-a.originPoint,(a.scale>=mw&&a.scale<=pw||isNaN(a.scale))&&(a.scale=1),(a.translate>=gw&&a.translate<=yw||isNaN(a.translate))&&(a.translate=0)}function gr(a,r,o,l){$p(a.x,r.x,o.x,l?l.originX:void 0),$p(a.y,r.y,o.y,l?l.originY:void 0)}function eg(a,r,o,l=0){const u=l?Me(o.min,o.max,l):o.min;a.min=u+r.min,a.max=a.min+ct(r)}function bw(a,r,o,l){eg(a.x,r.x,o.x,l?.x),eg(a.y,r.y,o.y,l?.y)}function tg(a,r,o,l=0){const u=l?Me(o.min,o.max,l):o.min;a.min=r.min-u,a.max=a.min+ct(r)}function fo(a,r,o,l){tg(a.x,r.x,o.x,l?.x),tg(a.y,r.y,o.y,l?.y)}function ng(a,r,o,l,u){return a-=r,a=ho(a,1/o,l),u!==void 0&&(a=ho(a,1/u,l)),a}function Sw(a,r=0,o=1,l=.5,u,f=a,h=a){if($t.test(r)&&(r=parseFloat(r),r=Me(h.min,h.max,r/100)-h.min),typeof r!="number")return;let g=Me(f.min,f.max,l);a===f&&(g-=r),a.min=ng(a.min,r,o,g,u),a.max=ng(a.max,r,o,g,u)}function ag(a,r,[o,l,u],f,h){Sw(a,r[o],r[l],r[u],r.scale,f,h)}const ww=["x","scaleX","originX"],Tw=["y","scaleY","originY"];function ig(a,r,o,l){ag(a.x,r,ww,o?o.x:void 0,l?l.x:void 0),ag(a.y,r,Tw,o?o.y:void 0,l?l.y:void 0)}function rg(a){return a.translate===0&&a.scale===1}function iv(a){return rg(a.x)&&rg(a.y)}function sg(a,r){return a.min===r.min&&a.max===r.max}function Aw(a,r){return sg(a.x,r.x)&&sg(a.y,r.y)}function og(a,r){return Math.round(a.min)===Math.round(r.min)&&Math.round(a.max)===Math.round(r.max)}function rv(a,r){return og(a.x,r.x)&&og(a.y,r.y)}function lg(a){return ct(a.x)/ct(a.y)}function cg(a,r){return a.translate===r.translate&&a.scale===r.scale&&a.originPoint===r.originPoint}function Jt(a){return[a("x"),a("y")]}function Ew(a,r,o){let l="";const u=a.x.translate/r.x,f=a.y.translate/r.y,h=o?.z||0;if((u||f||h)&&(l=`translate3d(${u}px, ${f}px, ${h}px) `),(r.x!==1||r.y!==1)&&(l+=`scale(${1/r.x}, ${1/r.y}) `),o){const{transformPerspective:m,rotate:v,pathRotation:b,rotateX:S,rotateY:C,skewX:x,skewY:L}=o;m&&(l=`perspective(${m}px) ${l}`),v&&(l+=`rotate(${v}deg) `),b&&(l+=`rotate(${b}deg) `),S&&(l+=`rotateX(${S}deg) `),C&&(l+=`rotateY(${C}deg) `),x&&(l+=`skewX(${x}deg) `),L&&(l+=`skewY(${L}deg) `)}const g=a.x.scale*r.x,y=a.y.scale*r.y;return(g!==1||y!==1)&&(l+=`scale(${g}, ${y})`),l||"none"}const Cw=Zu.length,ug=a=>typeof a=="string"?parseFloat(a):a,dg=a=>typeof a=="number"||K.test(a);function zw(a,r,o,l,u,f){u?(a.opacity=Me(0,o.opacity??1,Uw(l)),a.opacityExit=Me(r.opacity??1,0,xw(l))):f&&(a.opacity=Me(r.opacity??1,o.opacity??1,l));for(let h=0;h<Cw;h++){const g=Zu[h];let y=hg(r,g),m=hg(o,g);if(y===void 0&&m===void 0)continue;y||(y=0),m||(m=0),y===0||m===0||dg(y)===dg(m)?(a[g]=Math.max(Me(ug(y),ug(m),l),0),($t.test(m)||$t.test(y))&&(a[g]+="%")):a[g]=m}(r.rotate||o.rotate)&&(a.rotate=Me(r.rotate||0,o.rotate||0,l))}function hg(a,r){return a[r]!==void 0?a[r]:a.borderRadius}const Uw=sv(0,.5,Wg),xw=sv(.5,.95,_t);function sv(a,r,o){return l=>l<a?0:l>r?1:o(vr(a,r,l))}function Mw(a,r,o){const l=at(a)?a:hi(a);return l.start(Yu("",l,r,o)),l.animation}function wr(a,r,o,l={passive:!0}){return a.addEventListener(r,o,l),()=>a.removeEventListener(r,o,l)}const Dw=(a,r)=>a.depth-r.depth;class Rw{constructor(){this.children=[],this.isDirty=!1}add(r){Bu(this.children,r),this.isDirty=!0}remove(r){ao(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(Dw),this.isDirty=!1,this.children.forEach(r)}}function Vw(a,r){const o=lt.now(),l=({timestamp:u})=>{const f=u-o;f>=r&&(Zn(l),a(f-r))};return De.setup(l,!0),()=>Zn(l)}function eo(a){return at(a)?a.get():a}class Ow{constructor(){this.members=[]}add(r){Bu(this.members,r);for(let o=this.members.length-1;o>=0;o--){const l=this.members[o];if(l===r||l===this.lead||l===this.prevLead)continue;const u=l.instance;(!u||u.isConnected===!1)&&!l.snapshot&&(ao(this.members,l),l.unmount())}r.scheduleRender()}remove(r){if(ao(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(r){for(let o=this.members.indexOf(r)-1;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1&&l.instance?.isConnected!==!1)return this.promote(l),!0}return!1}promote(r,o){const l=this.lead;if(r!==l&&(this.prevLead=l,this.lead=r,r.show(),l)){l.updateSnapshot(),r.scheduleRender();const{layoutDependency:u}=l.options,{layoutDependency:f}=r.options;(u===void 0||u!==f)&&(r.resumeFrom=l,o&&(l.preserveOpacity=!0),l.snapshot&&(r.snapshot=l.snapshot,r.snapshot.latestValues=l.animationValues||l.latestValues),r.root?.isUpdating&&(r.isLayoutDirty=!0)),r.options.crossfade===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(r=>{r.options.onExitComplete?.(),r.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(r=>r.instance&&r.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const to={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Wc=["","X","Y","Z"],jw=1e3;let Bw=0;function $c(a,r,o,l){const{latestValues:u}=r;u[a]&&(o[a]=u[a],r.setStaticValue(a,0),l&&(l[a]=0))}function ov(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:r}=a.options;if(!r)return;const o=My(r);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:u,layoutId:f}=a.options;window.MotionCancelOptimisedAnimation(o,"transform",De,!(u||f))}const{parent:l}=a;l&&!l.hasCheckedOptimisedAppear&&ov(l)}function lv({attachResizeListener:a,defaultParent:r,measureScroll:o,checkIsScrollRoot:l,resetTransform:u}){return class{constructor(h={},g=r?.()){this.id=Bw++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Nw),this.nodes.forEach(qw),this.nodes.forEach(Xw),this.nodes.forEach(Gw)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=h,this.root=g?g.root||g:this,this.path=g?[...g.path,g]:[],this.parent=g,this.depth=g?g.depth+1:0;for(let y=0;y<this.path.length;y++)this.path[y].shouldResetTransform=!0;this.root===this&&(this.nodes=new Rw)}addEventListener(h,g){return this.eventHandlers.has(h)||this.eventHandlers.set(h,new ku),this.eventHandlers.get(h).add(g)}notifyListeners(h,...g){const y=this.eventHandlers.get(h);y&&y.notify(...g)}hasListeners(h){return this.eventHandlers.has(h)}mount(h){if(this.instance)return;this.isSVG=$u(h)&&!NS(h),this.instance=h;const{layoutId:g,layout:y,visualElement:m}=this.options;if(m&&!m.current&&m.mount(h),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(y||g)&&(this.isLayoutDirty=!0),a){let v,b=0;const S=()=>this.root.updateBlockedByResize=!1;De.read(()=>{b=window.innerWidth}),a(h,()=>{const C=window.innerWidth;C!==b&&(b=C,this.root.updateBlockedByResize=!0,v&&v(),v=Vw(S,250),to.hasAnimatedSinceResize&&(to.hasAnimatedSinceResize=!1,this.nodes.forEach(pg)))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&m&&(g||y)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:b,hasRelativeLayoutChanged:S,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||m.getDefaultTransition()||Zw,{onLayoutAnimationStart:L,onLayoutAnimationComplete:G}=m.getProps(),N=!this.targetLayout||!rv(this.targetLayout,C),H=!b&&S;if(this.options.layoutRoot||this.resumeFrom||H||b&&(N||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const _={...Fu(x,"layout"),onPlay:L,onComplete:G};(m.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_),this.setAnimationOrigin(v,H,_.path)}else b||pg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const h=this.getStack();h&&h.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Zn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Fw),this.animationId++)}getTransformTemplate(){const{visualElement:h}=this.options;return h&&h.getProps().transformTemplate}willUpdate(h=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ov(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const b=this.path[v];b.shouldResetTransform=!0,(typeof b.latestValues.x=="string"||typeof b.latestValues.y=="string")&&(b.isLayoutDirty=!0),b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:g,layout:y}=this.options;if(g===void 0&&!y)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),h&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const y=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),y&&this.nodes.forEach(Pw),this.nodes.forEach(fg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(mg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Hw),this.nodes.forEach(Iw),this.nodes.forEach(kw),this.nodes.forEach(Lw)):this.nodes.forEach(mg),this.clearAllSnapshots();const g=lt.now();nt.delta=en(0,1e3/60,g-nt.timestamp),nt.timestamp=g,nt.isProcessing=!0,qc.update.process(nt),qc.preRender.process(nt),qc.render.process(nt),nt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ju.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(_w),this.sharedNodes.forEach(Yw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,De.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){De.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ct(this.snapshot.measuredBox.x)&&!ct(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let y=0;y<this.path.length;y++)this.path[y].updateScroll();const h=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Ke()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:g}=this.options;g&&g.notify("LayoutMeasure",this.layout.layoutBox,h?h.layoutBox:void 0)}updateScroll(h="measure"){let g=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===h&&(g=!1),g&&this.instance){const y=l(this.instance);this.scroll={animationId:this.root.animationId,phase:h,isRoot:y,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:y}}}resetTransform(){if(!u)return;const h=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,g=this.projectionDelta&&!iv(this.projectionDelta),y=this.getTransformTemplate(),m=y?y(this.latestValues,""):void 0,v=m!==this.prevTransformTemplateValue;h&&this.instance&&(g||va(this.latestValues)||v)&&(u(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(h=!0){const g=this.measurePageBox();let y=this.removeElementScroll(g);return h&&(y=this.removeTransform(y)),Jw(y),{animationId:this.root.animationId,measuredBox:g,layoutBox:y,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:h}=this.options;if(!h)return Ke();const g=h.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Ww))){const{scroll:m}=this.root;m&&(Wt(g.x,m.offset.x),Wt(g.y,m.offset.y))}return g}removeElementScroll(h){const g=Ke();if(qt(g,h),this.scroll?.wasRoot)return g;for(let y=0;y<this.path.length;y++){const m=this.path[y],{scroll:v,options:b}=m;m!==this.root&&v&&b.layoutScroll&&(v.wasRoot&&qt(g,h),Wt(g.x,v.offset.x),Wt(g.y,v.offset.y))}return g}applyTransform(h,g=!1,y){const m=y||Ke();qt(m,h);for(let v=0;v<this.path.length;v++){const b=this.path[v];!g&&b.options.layoutScroll&&b.scroll&&b!==b.root&&(Wt(m.x,-b.scroll.offset.x),Wt(m.y,-b.scroll.offset.y)),va(b.latestValues)&&$s(m,b.latestValues,b.layout?.layoutBox)}return va(this.latestValues)&&$s(m,this.latestValues,this.layout?.layoutBox),m}removeTransform(h){const g=Ke();qt(g,h);for(let y=0;y<this.path.length;y++){const m=this.path[y];if(!va(m.latestValues))continue;let v;m.instance&&(Cu(m.latestValues)&&m.updateSnapshot(),v=Ke(),qt(v,m.measurePageBox())),ig(g,m.latestValues,m.snapshot?.layoutBox,v)}return va(this.latestValues)&&ig(g,this.latestValues),g}setTargetDelta(h){this.targetDelta=h,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(h){this.options={...this.options,...h,crossfade:h.crossfade!==void 0?h.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==nt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(h=!1){const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const y=!!this.resumingFrom||this!==g;if(!(h||y&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:b}=this.options;if(!this.layout||!(v||b))return;this.resolvedRelativeTargetAt=nt.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ke(),this.targetWithTransforms=Ke()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),bw(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):qt(this.target,this.layout.layoutBox),Fy(this.target,this.targetDelta)):qt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Cu(this.parent.latestValues)||Xy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(h,g,y){this.relativeParent=h,this.linkedParentVersion=h.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ke(),this.relativeTargetOrigin=Ke(),fo(this.relativeTargetOrigin,g,y,this.options.layoutAnchor||void 0),qt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const h=this.getLead(),g=!!this.resumingFrom||this!==h;let y=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(y=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(y=!1),this.resolvedRelativeTargetAt===nt.timestamp&&(y=!1),y)return;const{layout:m,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||v))return;qt(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,S=this.treeScale.y;KS(this.layoutCorrected,this.treeScale,this.path,g),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=Ke());const{target:C}=h;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Wp(this.prevProjectionDelta.x,this.projectionDelta.x),Wp(this.prevProjectionDelta.y,this.projectionDelta.y)),gr(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==S||!cg(this.projectionDelta.x,this.prevProjectionDelta.x)||!cg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(h=!0){if(this.options.visualElement?.scheduleRender(),h){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ui(),this.projectionDelta=ui(),this.projectionDeltaWithTransform=ui()}setAnimationOrigin(h,g=!1,y){const m=this.snapshot,v=m?m.latestValues:{},b={...this.latestValues},S=ui();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!g;const C=Ke(),x=m?m.source:void 0,L=this.layout?this.layout.source:void 0,G=x!==L,N=this.getStack(),H=!N||N.members.length<=1,_=!!(G&&!H&&this.options.crossfade===!0&&!this.path.some(Qw));this.animationProgress=0;let q;const ne=y?.interpolateProjection(h);this.mixTargetDelta=le=>{const Y=le/1e3,W=ne?.(Y);W?(S.x.translate=W.x,S.x.scale=Me(h.x.scale,1,Y),S.x.origin=h.x.origin,S.x.originPoint=h.x.originPoint,S.y.translate=W.y,S.y.scale=Me(h.y.scale,1,Y),S.y.origin=h.y.origin,S.y.originPoint=h.y.originPoint):(gg(S.x,h.x,Y),gg(S.y,h.y,Y)),this.setTargetDelta(S),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fo(C,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Kw(this.relativeTarget,this.relativeTargetOrigin,C,Y),q&&Aw(this.relativeTarget,q)&&(this.isProjectionDirty=!1),q||(q=Ke()),qt(q,this.relativeTarget)),G&&(this.animationValues=b,zw(b,v,this.latestValues,Y,_,H)),W&&W.rotate!==void 0&&(this.animationValues||(this.animationValues=b),this.animationValues.pathRotation=W.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Y},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(h){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Zn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=De.update(()=>{to.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=hi(0)),this.motionValue.jump(0,!1),this.currentAnimation=Mw(this.motionValue,[0,1e3],{...h,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),h.onUpdate&&h.onUpdate(g)},onComplete:()=>{h.onComplete&&h.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const h=this.getStack();h&&h.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(jw),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const h=this.getLead();let{targetWithTransforms:g,target:y,layout:m,latestValues:v}=h;if(!(!g||!y||!m)){if(this!==h&&this.layout&&m&&cv(this.options.animationType,this.layout.layoutBox,m.layoutBox)){y=this.target||Ke();const b=ct(this.layout.layoutBox.x);y.x.min=h.target.x.min,y.x.max=y.x.min+b;const S=ct(this.layout.layoutBox.y);y.y.min=h.target.y.min,y.y.max=y.y.min+S}qt(g,y),$s(g,v),gr(this.projectionDeltaWithTransform,this.layoutCorrected,g,v)}}registerSharedNode(h,g){this.sharedNodes.has(h)||this.sharedNodes.set(h,new Ow),this.sharedNodes.get(h).add(g);const m=g.options.initialPromotionConfig;g.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(g):void 0})}isLead(){const h=this.getStack();return h?h.lead===this:!0}getLead(){const{layoutId:h}=this.options;return h?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:h}=this.options;return h?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:h}=this.options;if(h)return this.root.sharedNodes.get(h)}promote({needsReset:h,transition:g,preserveFollowOpacity:y}={}){const m=this.getStack();m&&m.promote(this,y),h&&(this.projectionDelta=void 0,this.needsReset=!0),g&&this.setOptions({transition:g})}relegate(){const h=this.getStack();return h?h.relegate(this):!1}resetSkewAndRotation(){const{visualElement:h}=this.options;if(!h)return;let g=!1;const{latestValues:y}=h;if((y.z||y.rotate||y.rotateX||y.rotateY||y.rotateZ||y.skewX||y.skewY)&&(g=!0),!g)return;const m={};y.z&&$c("z",h,m,this.animationValues);for(let v=0;v<Wc.length;v++)$c(`rotate${Wc[v]}`,h,m,this.animationValues),$c(`skew${Wc[v]}`,h,m,this.animationValues);h.render();for(const v in m)h.setStaticValue(v,m[v]),this.animationValues&&(this.animationValues[v]=m[v]);h.scheduleRender()}applyProjectionStyles(h,g){if(!this.instance||this.isSVG)return;if(!this.isVisible){h.visibility="hidden";return}const y=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,h.visibility="",h.opacity="",h.pointerEvents=eo(g?.pointerEvents)||"",h.transform=y?y(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(h.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,h.pointerEvents=eo(g?.pointerEvents)||""),this.hasProjected&&!va(this.latestValues)&&(h.transform=y?y({},""):"none",this.hasProjected=!1);return}h.visibility="";const v=m.animationValues||m.latestValues;this.applyTransformsToTarget();let b=Ew(this.projectionDeltaWithTransform,this.treeScale,v);y&&(b=y(v,b)),h.transform=b;const{x:S,y:C}=this.projectionDelta;h.transformOrigin=`${S.origin*100}% ${C.origin*100}% 0`,m.animationValues?h.opacity=m===this?v.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=m===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const x in Uu){if(v[x]===void 0)continue;const{correct:L,applyTo:G,isCSSVariable:N}=Uu[x],H=b==="none"?v[x]:L(v[x],m);if(G){const _=G.length;for(let q=0;q<_;q++)h[G[q]]=H}else N?this.options.visualElement.renderState.vars[x]=H:h[x]=H}this.options.layoutId&&(h.pointerEvents=m===this?eo(g?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(h=>h.currentAnimation?.stop()),this.root.nodes.forEach(fg),this.root.sharedNodes.clear()}}}function kw(a){a.updateLayout()}function Lw(a){const r=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&r&&a.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:l}=a.layout,{animationType:u}=a.options,f=r.source!==a.layout.source;if(u==="size")Jt(v=>{const b=f?r.measuredBox[v]:r.layoutBox[v],S=ct(b);b.min=o[v].min,b.max=b.min+S});else if(u==="x"||u==="y"){const v=u==="x"?"y":"x";xu(f?r.measuredBox[v]:r.layoutBox[v],o[v])}else cv(u,r.layoutBox,o)&&Jt(v=>{const b=f?r.measuredBox[v]:r.layoutBox[v],S=ct(o[v]);b.max=b.min+S,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[v].max=a.relativeTarget[v].min+S)});const h=ui();gr(h,o,r.layoutBox);const g=ui();f?gr(g,a.applyTransform(l,!0),r.measuredBox):gr(g,o,r.layoutBox);const y=!iv(h);let m=!1;if(!a.resumeFrom){const v=a.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:b,layout:S}=v;if(b&&S){const C=a.options.layoutAnchor||void 0,x=Ke();fo(x,r.layoutBox,b.layoutBox,C);const L=Ke();fo(L,o,S.layoutBox,C),rv(x,L)||(m=!0),v.options.layoutRoot&&(a.relativeTarget=L,a.relativeTargetOrigin=x,a.relativeParent=v)}}}a.notifyListeners("didUpdate",{layout:o,snapshot:r,delta:g,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:m})}else if(a.isLead()){const{onExitComplete:o}=a.options;o&&o()}a.options.transition=void 0}function Nw(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function Gw(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function _w(a){a.clearSnapshot()}function fg(a){a.clearMeasurements()}function Pw(a){a.isLayoutDirty=!0,a.updateLayout()}function mg(a){a.isLayoutDirty=!1}function Hw(a){a.isAnimationBlocked&&a.layout&&!a.isLayoutDirty&&(a.snapshot=a.layout,a.isLayoutDirty=!0)}function Iw(a){const{visualElement:r}=a.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),a.resetTransform()}function pg(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function qw(a){a.resolveTargetDelta()}function Xw(a){a.calcProjection()}function Fw(a){a.resetSkewAndRotation()}function Yw(a){a.removeLeadSnapshot()}function gg(a,r,o){a.translate=Me(r.translate,0,o),a.scale=Me(r.scale,1,o),a.origin=r.origin,a.originPoint=r.originPoint}function yg(a,r,o,l){a.min=Me(r.min,o.min,l),a.max=Me(r.max,o.max,l)}function Kw(a,r,o,l){yg(a.x,r.x,o.x,l),yg(a.y,r.y,o.y,l)}function Qw(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const Zw={duration:.45,ease:[.4,0,.1,1]},vg=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),bg=vg("applewebkit/")&&!vg("chrome/")?Math.round:_t;function Sg(a){a.min=bg(a.min),a.max=bg(a.max)}function Jw(a){Sg(a.x),Sg(a.y)}function cv(a,r,o){return a==="position"||a==="preserve-aspect"&&!vw(lg(r),lg(o),.2)}function Ww(a){return a!==a.root&&a.scroll?.wasRoot}const $w=lv({attachResizeListener:(a,r)=>wr(a,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),eu={current:void 0},uv=lv({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!eu.current){const a=new $w({});a.mount(window),a.setOptions({layoutScroll:!0}),eu.current=a}return eu.current},resetTransform:(a,r)=>{a.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),dv=J.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function eT(a=!0){const r=J.useContext(ju);if(r===null)return[!0,null];const{isPresent:o,onExitComplete:l,register:u}=r,f=J.useId();J.useEffect(()=>{if(a)return u(f)},[a]);const h=J.useCallback(()=>a&&l&&l(f),[f,l,a]);return!o&&l?[!1,h]:[!0]}const hv=J.createContext({strict:!1}),wg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Tg=!1;function tT(){if(Tg)return;const a={};for(const r in wg)a[r]={isEnabled:o=>wg[r].some(l=>!!o[l])};Hy(a),Tg=!0}function fv(){return tT(),qS()}function nT(a){const r=fv();for(const o in a)r[o]={...r[o],...a[o]};Hy(r)}const aT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function mo(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||aT.has(a)}let mv=a=>!mo(a);function iT(a){typeof a=="function"&&(mv=r=>r.startsWith("on")?!mo(r):a(r))}try{iT(require("@emotion/is-prop-valid").default)}catch{}function rT(a,r,o){const l={};for(const u in a)u==="values"&&typeof a.values=="object"||at(a[u])||(mv(u)||o===!0&&mo(u)||!r&&!mo(u)||a.draggable&&u.startsWith("onDrag"))&&(l[u]=a[u]);return l}const bo=J.createContext({});function sT(a,r){if(vo(a)){const{initial:o,animate:l}=a;return{initial:o===!1||Sr(o)?o:void 0,animate:Sr(l)?l:void 0}}return a.inherit!==!1?r:{}}function oT(a){const{initial:r,animate:o}=sT(a,J.useContext(bo));return J.useMemo(()=>({initial:r,animate:o}),[Ag(r),Ag(o)])}function Ag(a){return Array.isArray(a)?a.join(" "):a}const rd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function pv(a,r,o){for(const l in r)!at(r[l])&&!Qy(l,o)&&(a[l]=r[l])}function lT({transformTemplate:a},r){return J.useMemo(()=>{const o=rd();return ad(o,r,a),Object.assign({},o.vars,o.style)},[r])}function cT(a,r){const o=a.style||{},l={};return pv(l,o,a),Object.assign(l,lT(a,r)),l}function uT(a,r){const o={},l=cT(a,r);return a.drag&&a.dragListener!==!1&&(o.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(o.tabIndex=0),o.style=l,o}const gv=()=>({...rd(),attrs:{}});function dT(a,r,o,l){const u=J.useMemo(()=>{const f=gv();return Zy(f,r,Wy(l),a.transformTemplate,a.style),{...f.attrs,style:{...f.style}}},[r]);if(a.style){const f={};pv(f,a.style,a),u.style={...f,...u.style}}return u}const hT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function sd(a){return typeof a!="string"||a.includes("-")?!1:!!(hT.indexOf(a)>-1||/[A-Z]/u.test(a))}function fT(a,r,o,{latestValues:l},u,f=!1,h){const y=(h??sd(a)?dT:uT)(r,l,u,a),m=rT(r,typeof a=="string",f),v=a!==J.Fragment?{...m,...y,ref:o}:{},{children:b}=r,S=J.useMemo(()=>at(b)?b.get():b,[b]);return J.createElement(a,{...v,children:S})}function mT({scrapeMotionValuesFromProps:a,createRenderState:r},o,l,u){return{latestValues:pT(o,l,u,a),renderState:r()}}function pT(a,r,o,l){const u={},f=l(a,{});for(const S in f)u[S]=eo(f[S]);let{initial:h,animate:g}=a;const y=vo(a),m=_y(a);r&&m&&!y&&a.inherit!==!1&&(h===void 0&&(h=r.initial),g===void 0&&(g=r.animate));let v=o?o.initial===!1:!1;v=v||h===!1;const b=v?g:h;if(b&&typeof b!="boolean"&&!yo(b)){const S=Array.isArray(b)?b:[b];for(let C=0;C<S.length;C++){const x=Ku(a,S[C]);if(x){const{transitionEnd:L,transition:G,...N}=x;for(const H in N){let _=N[H];if(Array.isArray(_)){const q=v?_.length-1:0;_=_[q]}_!==null&&(u[H]=_)}for(const H in L)u[H]=L[H]}}}return u}const yv=a=>(r,o)=>{const l=J.useContext(bo),u=J.useContext(ju),f=()=>mT(a,r,l,u);return o?f():m1(f)},gT=yv({scrapeMotionValuesFromProps:id,createRenderState:rd}),yT=yv({scrapeMotionValuesFromProps:$y,createRenderState:gv}),vT=Symbol.for("motionComponentSymbol");function bT(a,r,o){const l=J.useRef(o);J.useInsertionEffect(()=>{l.current=o});const u=J.useRef(null);return J.useCallback(f=>{f&&a.onMount?.(f),r&&(f?r.mount(f):r.unmount());const h=l.current;if(typeof h=="function")if(f){const g=h(f);typeof g=="function"&&(u.current=g)}else u.current?(u.current(),u.current=null):h(f);else h&&(h.current=f)},[r])}const vv=J.createContext({});function oi(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function ST(a,r,o,l,u,f){const{visualElement:h}=J.useContext(bo),g=J.useContext(hv),y=J.useContext(ju),m=J.useContext(dv),v=m.reducedMotion,b=m.skipAnimations,S=J.useRef(null),C=J.useRef(!1);l=l||g.renderer,!S.current&&l&&(S.current=l(a,{visualState:r,parent:h,props:o,presenceContext:y,blockInitialAnimation:y?y.initial===!1:!1,reducedMotionConfig:v,skipAnimations:b,isSVG:f}),C.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));const x=S.current,L=J.useContext(vv);x&&!x.projection&&u&&(x.type==="html"||x.type==="svg")&&wT(S.current,o,u,L);const G=J.useRef(!1);J.useInsertionEffect(()=>{x&&G.current&&x.update(o,y)});const N=o[xy],H=J.useRef(!!N&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(N)&&window.MotionHasOptimisedAnimation?.(N));return g1(()=>{C.current=!0,x&&(G.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),x.scheduleRenderMicrotask(),H.current&&x.animationState&&x.animationState.animateChanges())}),J.useEffect(()=>{x&&(!H.current&&x.animationState&&x.animationState.animateChanges(),H.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(N)}),H.current=!1),x.enteringChildren=void 0)}),x}function wT(a,r,o,l){const{layoutId:u,layout:f,drag:h,dragConstraints:g,layoutScroll:y,layoutRoot:m,layoutAnchor:v,layoutCrossfade:b}=r;a.projection=new o(a.latestValues,r["data-framer-portal-id"]?void 0:bv(a.parent)),a.projection.setOptions({layoutId:u,layout:f,alwaysMeasureLayout:!!h||g&&oi(g),visualElement:a,animationType:typeof f=="string"?f:"both",initialPromotionConfig:l,crossfade:b,layoutScroll:y,layoutRoot:m,layoutAnchor:v})}function bv(a){if(a)return a.options.allowProjection!==!1?a.projection:bv(a.parent)}function tu(a,{forwardMotionProps:r=!1,type:o}={},l,u){l&&nT(l);const f=o?o==="svg":sd(a),h=f?yT:gT;function g(m,v){let b;const S={...J.useContext(dv),...m,layoutId:TT(m)},{isStatic:C}=S,x=oT(m),L=h(m,C);if(!C&&typeof window<"u"){AT();const G=ET(S);b=G.MeasureLayout,x.visualElement=ST(a,L,S,u,G.ProjectionNode,f)}return D.jsxs(bo.Provider,{value:x,children:[b&&x.visualElement?D.jsx(b,{visualElement:x.visualElement,...S}):null,fT(a,m,bT(L,x.visualElement,v),L,C,r,f)]})}g.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const y=J.forwardRef(g);return y[vT]=a,y}function TT({layoutId:a}){const r=J.useContext(_g).id;return r&&a!==void 0?r+"-"+a:a}function AT(a,r){J.useContext(hv).strict}function ET(a){const r=fv(),{drag:o,layout:l}=r;if(!o&&!l)return{};const u={...o,...l};return{MeasureLayout:o?.isEnabled(a)||l?.isEnabled(a)?u.MeasureLayout:void 0,ProjectionNode:u.ProjectionNode}}function CT(a,r){if(typeof Proxy>"u")return tu;const o=new Map,l=(f,h)=>tu(f,h,a,r),u=(f,h)=>l(f,h);return new Proxy(u,{get:(f,h)=>h==="create"?l:(o.has(h)||o.set(h,tu(h,void 0,a,r)),o.get(h))})}const zT=(a,r)=>r.isSVG??sd(a)?new ow(r):new tw(r,{allowProjection:a!==J.Fragment});class UT extends Jn{constructor(r){super(r),r.animationState||(r.animationState=hw(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();yo(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:o}=this.node.prevProps||{};r!==o&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let xT=0;class MT extends Jn{constructor(){super(...arguments),this.id=xT++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:o}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===l)return;if(r&&l===!1){if(this.isExitComplete){const{initial:f,custom:h}=this.node.getProps();if(typeof f=="string"||typeof f=="object"&&f!==null&&!Array.isArray(f)){const g=Ta(this.node,f,h);if(g){const{transition:y,transitionEnd:m,...v}=g;for(const b in v)this.node.getValue(b)?.jump(v[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const u=this.node.animationState.setActive("exit",!r);o&&!r&&u.then(()=>{this.isExitComplete=!0,o(this.id)})}mount(){const{register:r,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),r&&(this.unmount=r(this.id))}unmount(){}}const DT={animation:{Feature:UT},exit:{Feature:MT}};function Cr(a){return{point:{x:a.pageX,y:a.pageY}}}const RT=a=>r=>Wu(r)&&a(r,Cr(r));function yr(a,r,o,l){return wr(a,r,RT(o),l)}const Sv=({current:a})=>a?a.ownerDocument.defaultView:null,Eg=(a,r)=>Math.abs(a-r);function VT(a,r){const o=Eg(a.x,r.x),l=Eg(a.y,r.y);return Math.sqrt(o**2+l**2)}const Cg=new Set(["auto","scroll"]);class wv{constructor(r,o,{transformPagePoint:l,contextWindow:u=window,dragSnapToOrigin:f=!1,distanceThreshold:h=3,element:g}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=x=>{this.handleScroll(x.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Fs(this.lastRawMoveEventInfo,this.transformPagePoint));const x=nu(this.lastMoveEventInfo,this.history),L=this.startEvent!==null,G=VT(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!L&&!G)return;const{point:N}=x,{timestamp:H}=nt;this.history.push({...N,timestamp:H});const{onStart:_,onMove:q}=this.handlers;L||(_&&_(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),q&&q(this.lastMoveEvent,x)},this.handlePointerMove=(x,L)=>{this.lastMoveEvent=x,this.lastRawMoveEventInfo=L,this.lastMoveEventInfo=Fs(L,this.transformPagePoint),De.update(this.updatePoint,!0)},this.handlePointerUp=(x,L)=>{this.end();const{onEnd:G,onSessionEnd:N,resumeAnimation:H}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&H&&H(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const _=nu(x.type==="pointercancel"?this.lastMoveEventInfo:Fs(L,this.transformPagePoint),this.history);this.startEvent&&G&&G(x,_),N&&N(x,_)},!Wu(r))return;this.dragSnapToOrigin=f,this.handlers=o,this.transformPagePoint=l,this.distanceThreshold=h,this.contextWindow=u||window;const y=Cr(r),m=Fs(y,this.transformPagePoint),{point:v}=m,{timestamp:b}=nt;this.history=[{...v,timestamp:b}];const{onSessionStart:S}=o;S&&S(r,nu(m,this.history));const C={passive:!0,capture:!0};this.removeListeners=Tr(yr(this.contextWindow,"pointermove",this.handlePointerMove,C),yr(this.contextWindow,"pointerup",this.handlePointerUp,C),yr(this.contextWindow,"pointercancel",this.handlePointerUp,C)),g&&this.startScrollTracking(g)}startScrollTracking(r){let o=r.parentElement;for(;o;){const l=getComputedStyle(o);(Cg.has(l.overflowX)||Cg.has(l.overflowY))&&this.scrollPositions.set(o,{x:o.scrollLeft,y:o.scrollTop}),o=o.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(r){const o=this.scrollPositions.get(r);if(!o)return;const l=r===window,u=l?{x:window.scrollX,y:window.scrollY}:{x:r.scrollLeft,y:r.scrollTop},f={x:u.x-o.x,y:u.y-o.y};f.x===0&&f.y===0||(l?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=f.x,this.lastMoveEventInfo.point.y+=f.y):this.history.length>0&&(this.history[0].x-=f.x,this.history[0].y-=f.y),this.scrollPositions.set(r,u),De.update(this.updatePoint,!0))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Zn(this.updatePoint)}}function Fs(a,r){return r?{point:r(a.point)}:a}function zg(a,r){return{x:a.x-r.x,y:a.y-r.y}}function nu({point:a},r){return{point:a,delta:zg(a,Tv(r)),offset:zg(a,OT(r)),velocity:jT(r,.1)}}function OT(a){return a[0]}function Tv(a){return a[a.length-1]}function jT(a,r){if(a.length<2)return{x:0,y:0};let o=a.length-1,l=null;const u=Tv(a);for(;o>=0&&(l=a[o],!(u.timestamp-l.timestamp>Ut(r)));)o--;if(!l)return{x:0,y:0};l===a[0]&&a.length>2&&u.timestamp-l.timestamp>Ut(r)*2&&(l=a[1]);const f=Gt(u.timestamp-l.timestamp);if(f===0)return{x:0,y:0};const h={x:(u.x-l.x)/f,y:(u.y-l.y)/f};return h.x===1/0&&(h.x=0),h.y===1/0&&(h.y=0),h}function BT(a,{min:r,max:o},l){return r!==void 0&&a<r?a=l?Me(r,a,l.min):Math.max(a,r):o!==void 0&&a>o&&(a=l?Me(o,a,l.max):Math.min(a,o)),a}function Ug(a,r,o){return{min:r!==void 0?a.min+r:void 0,max:o!==void 0?a.max+o-(a.max-a.min):void 0}}function kT(a,{top:r,left:o,bottom:l,right:u}){return{x:Ug(a.x,o,u),y:Ug(a.y,r,l)}}function xg(a,r){let o=r.min-a.min,l=r.max-a.max;return r.max-r.min<a.max-a.min&&([o,l]=[l,o]),{min:o,max:l}}function LT(a,r){return{x:xg(a.x,r.x),y:xg(a.y,r.y)}}function NT(a,r){let o=.5;const l=ct(a),u=ct(r);return u>l?o=vr(r.min,r.max-l,a.min):l>u&&(o=vr(a.min,a.max-u,r.min)),en(0,1,o)}function GT(a,r){const o={};return r.min!==void 0&&(o.min=r.min-a.min),r.max!==void 0&&(o.max=r.max-a.min),o}const Mu=.35;function _T(a=Mu){return a===!1?a=0:a===!0&&(a=Mu),{x:Mg(a,"left","right"),y:Mg(a,"top","bottom")}}function Mg(a,r,o){return{min:Dg(a,r),max:Dg(a,o)}}function Dg(a,r){return typeof a=="number"?a:a[r]||0}const PT=new WeakMap;class HT{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ke(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=r}start(r,{snapToCursor:o=!1,distanceThreshold:l}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const f=b=>{o&&this.snapToCursor(Cr(b).point),this.stopAnimation()},h=(b,S)=>{const{drag:C,dragPropagation:x,onDragStart:L}=this.getProps();if(C&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=wS(C),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Jt(N=>{let H=this.getAxisMotionValue(N).get()||0;if($t.test(H)){const{projection:_}=this.visualElement;if(_&&_.layout){const q=_.layout.layoutBox[N];q&&(H=ct(q)*(parseFloat(H)/100))}}this.originPoint[N]=H}),L&&De.update(()=>L(b,S),!1,!0),Su(this.visualElement,"transform");const{animationState:G}=this.visualElement;G&&G.setActive("whileDrag",!0)},g=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S;const{dragPropagation:C,dragDirectionLock:x,onDirectionLock:L,onDrag:G}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:N}=S;if(x&&this.currentDirection===null){this.currentDirection=qT(N),this.currentDirection!==null&&L&&L(this.currentDirection);return}this.updateAxis("x",S.point,N),this.updateAxis("y",S.point,N),this.visualElement.render(),G&&De.update(()=>G(b,S),!1,!0)},y=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S,this.stop(b,S),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>{const{dragSnapToOrigin:b}=this.getProps();(b||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:v}=this.getProps();this.panSession=new wv(r,{onSessionStart:f,onStart:h,onMove:g,onSessionEnd:y,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:v,distanceThreshold:l,contextWindow:Sv(this.visualElement),element:this.visualElement.current})}stop(r,o){const l=r||this.latestPointerEvent,u=o||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!u||!l)return;const{velocity:h}=u;this.startAnimation(h);const{onDragEnd:g}=this.getProps();g&&De.postRender(()=>g(l,u))}cancel(){this.isDragging=!1;const{projection:r,animationState:o}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(r,o,l){const{drag:u}=this.getProps();if(!l||!Ys(r,u,this.currentDirection))return;const f=this.getAxisMotionValue(r);let h=this.originPoint[r]+l[r];this.constraints&&this.constraints[r]&&(h=BT(h,this.constraints[r],this.elastic[r])),f.set(h)}resolveConstraints(){const{dragConstraints:r,dragElastic:o}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;r&&oi(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&l?this.constraints=kT(l.layoutBox,r):this.constraints=!1,this.elastic=_T(o),u!==this.constraints&&!oi(r)&&l&&this.constraints&&!this.hasMutatedConstraints&&Jt(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=GT(l.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:o}=this.getProps();if(!r||!oi(r))return!1;const l=r.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;u.root&&(u.root.scroll=void 0,u.root.updateScroll());const f=QS(l,u.root,this.visualElement.getTransformPagePoint());let h=LT(u.layout.layoutBox,f);if(o){const g=o(FS(h));this.hasMutatedConstraints=!!g,g&&(h=qy(g))}return h}startAnimation(r){const{drag:o,dragMomentum:l,dragElastic:u,dragTransition:f,dragSnapToOrigin:h,onDragTransitionEnd:g}=this.getProps(),y=this.constraints||{},m=Jt(v=>{if(!Ys(v,o,this.currentDirection))return;let b=y&&y[v]||{};(h===!0||h===v)&&(b={min:0,max:0});const S=u?200:1e6,C=u?40:1e7,x={type:"inertia",velocity:l?r[v]:0,bounceStiffness:S,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...f,...b};return this.startAxisValueAnimation(v,x)});return Promise.all(m).then(g)}startAxisValueAnimation(r,o){const l=this.getAxisMotionValue(r);return Su(this.visualElement,r),l.start(Yu(r,l,0,o,this.visualElement,!1))}stopAnimation(){Jt(r=>this.getAxisMotionValue(r).stop())}getAxisMotionValue(r){const o=`_drag${r.toUpperCase()}`,u=this.visualElement.getProps()[o];return u||this.visualElement.getValue(r,this.visualElement.latestValues[r]??0)}snapToCursor(r){Jt(o=>{const{drag:l}=this.getProps();if(!Ys(o,l,this.currentDirection))return;const{projection:u}=this.visualElement,f=this.getAxisMotionValue(o);if(u&&u.layout){const{min:h,max:g}=u.layout.layoutBox[o],y=f.get()||0;f.set(r[o]-Me(h,g,.5)+y)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:o}=this.getProps(),{projection:l}=this.visualElement;if(!oi(o)||!l||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Jt(h=>{const g=this.getAxisMotionValue(h);if(g&&this.constraints!==!1){const y=g.get();u[h]=NT({min:y,max:y},this.constraints[h])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.constraints=!1,this.resolveConstraints(),Jt(h=>{if(!Ys(h,r,null))return;const g=this.getAxisMotionValue(h),{min:y,max:m}=this.constraints[h];g.set(Me(y,m,u[h]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;PT.set(this.visualElement,this);const r=this.visualElement.current,o=yr(r,"pointerdown",m=>{const{drag:v,dragListener:b=!0}=this.getProps(),S=m.target,C=S!==r&&US(S);v&&b&&!C&&this.start(m)});let l;const u=()=>{const{dragConstraints:m}=this.getProps();oi(m)&&m.current&&(this.constraints=this.resolveRefConstraints(),l||(l=IT(r,m.current,()=>this.scalePositionWithinConstraints())))},{projection:f}=this.visualElement,h=f.addEventListener("measure",u);f&&!f.layout&&(f.root&&f.root.updateScroll(),f.updateLayout()),De.read(u);const g=wr(window,"resize",()=>this.scalePositionWithinConstraints()),y=f.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:v})=>{this.isDragging&&v&&(Jt(b=>{const S=this.getAxisMotionValue(b);S&&(this.originPoint[b]+=m[b].translate,S.set(S.get()+m[b].translate))}),this.visualElement.render())}));return()=>{g(),o(),h(),y&&y(),l&&l()}}getProps(){const r=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:l=!1,dragPropagation:u=!1,dragConstraints:f=!1,dragElastic:h=Mu,dragMomentum:g=!0}=r;return{...r,drag:o,dragDirectionLock:l,dragPropagation:u,dragConstraints:f,dragElastic:h,dragMomentum:g}}}function Rg(a){let r=!0;return()=>{if(r){r=!1;return}a()}}function IT(a,r,o){const l=_p(a,Rg(o)),u=_p(r,Rg(o));return()=>{l(),u()}}function Ys(a,r,o){return(r===!0||r===a)&&(o===null||o===a)}function qT(a,r=10){let o=null;return Math.abs(a.y)>r?o="y":Math.abs(a.x)>r&&(o="x"),o}class XT extends Jn{constructor(r){super(r),this.removeGroupControls=_t,this.removeListeners=_t,this.controls=new HT(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||_t}update(){const{dragControls:r}=this.node.getProps(),{dragControls:o}=this.node.prevProps||{};r!==o&&(this.removeGroupControls(),r&&(this.removeGroupControls=r.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const au=a=>(r,o)=>{a&&De.update(()=>a(r,o),!1,!0)};class FT extends Jn{constructor(){super(...arguments),this.removePointerDownListener=_t}onPointerDown(r){this.session=new wv(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Sv(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:o,onPan:l,onPanEnd:u}=this.node.getProps();return{onSessionStart:au(r),onStart:au(o),onMove:au(l),onEnd:(f,h)=>{delete this.session,u&&De.postRender(()=>u(f,h))}}}mount(){this.removePointerDownListener=yr(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let iu=!1;class YT extends J.Component{componentDidMount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:l,layoutId:u}=this.props,{projection:f}=r;f&&(o.group&&o.group.add(f),l&&l.register&&u&&l.register(f),iu&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),to.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:o,visualElement:l,drag:u,isPresent:f}=this.props,{projection:h}=l;return h&&(h.isPresent=f,r.layoutDependency!==o&&h.setOptions({...h.options,layoutDependency:o}),iu=!0,u||r.layoutDependency!==o||o===void 0||r.isPresent!==f?h.willUpdate():this.safeToRemove(),r.isPresent!==f&&(f?h.promote():h.relegate()||De.postRender(()=>{const g=h.getStack();(!g||!g.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:r,layoutAnchor:o}=this.props,{projection:l}=r;l&&(l.options.layoutAnchor=o,l.root.didUpdate(),Ju.postRender(()=>{!l.currentAnimation&&l.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:l}=this.props,{projection:u}=r;iu=!0,u&&(u.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(u),l&&l.deregister&&l.deregister(u))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function Av(a){const[r,o]=eT(),l=J.useContext(_g);return D.jsx(YT,{...a,layoutGroup:l,switchLayoutGroup:J.useContext(vv),isPresent:r,safeToRemove:o})}const KT={pan:{Feature:FT},drag:{Feature:XT,ProjectionNode:uv,MeasureLayout:Av}};function Vg(a,r,o){const{props:l}=a;a.animationState&&l.whileHover&&a.animationState.setActive("whileHover",o==="Start");const u="onHover"+o,f=l[u];f&&De.postRender(()=>f(r,Cr(r)))}class QT extends Jn{mount(){const{current:r}=this.node;r&&(this.unmount=AS(r,(o,l)=>(Vg(this.node,l,"Start"),u=>Vg(this.node,u,"End"))))}unmount(){}}class ZT extends Jn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Tr(wr(this.node.current,"focus",()=>this.onFocus()),wr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Og(a,r,o){const{props:l}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&l.whileTap&&a.animationState.setActive("whileTap",o==="Start");const u="onTap"+(o==="End"?"":o),f=l[u];f&&De.postRender(()=>f(r,Cr(r)))}class JT extends Jn{mount(){const{current:r}=this.node;if(!r)return;const{globalTapTarget:o,propagate:l}=this.node.props;this.unmount=MS(r,(u,f)=>(Og(this.node,f,"Start"),(h,{success:g})=>Og(this.node,h,g?"End":"Cancel")),{useGlobalTarget:o,stopPropagation:l?.tap===!1})}unmount(){}}const Du=new WeakMap,ru=new WeakMap,WT=a=>{const r=Du.get(a.target);r&&r(a)},$T=a=>{a.forEach(WT)};function eA({root:a,...r}){const o=a||document;ru.has(o)||ru.set(o,{});const l=ru.get(o),u=JSON.stringify(r);return l[u]||(l[u]=new IntersectionObserver($T,{root:a,...r})),l[u]}function tA(a,r,o){const l=eA(r);return Du.set(a,o),l.observe(a),()=>{Du.delete(a),l.unobserve(a)}}const nA={some:0,all:1};class aA extends Jn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:r={}}=this.node.getProps(),{root:o,margin:l,amount:u="some",once:f}=r,h={root:o?o.current:void 0,rootMargin:l,threshold:typeof u=="number"?u:nA[u]},g=y=>{const{isIntersecting:m}=y;if(this.isInView===m||(this.isInView=m,f&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:v,onViewportLeave:b}=this.node.getProps(),S=m?v:b;S&&S(y)};this.stopObserver=tA(this.node.current,h,g)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:o}=this.node;["amount","margin","root"].some(iA(r,o))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}function iA({viewport:a={}},{viewport:r={}}={}){return o=>a[o]!==r[o]}const rA={inView:{Feature:aA},tap:{Feature:JT},focus:{Feature:ZT},hover:{Feature:QT}},sA={layout:{ProjectionNode:uv,MeasureLayout:Av}},oA={...DT,...rA,...KT,...sA},lA=CT(oA,zT);function Ev(){!nd.current&&Py();const[a]=J.useState(co.current);return a}const Cv=lA,cA=[{id:"fathom",portfolioCategory:"engine-games",title:"实体控制器潜艇协作游戏",period:"2026",category:{zh:"Unreal 游戏 / 硬件交互",en:"Unreal game / hardware interaction"},summary:{zh:"面向实体控制器的潜艇协作游戏。我担任主要程序与玩法架构负责人，完成任务循环、小游戏、UI 数据流和硬件接入。",en:"A physical-console submarine co-op game. I owned gameplay architecture, task loops, minigames, UI data flow, and hardware integration."},contribution:[{zh:"搭建 GameMode、角色控制、任务生成、小游戏接口与 UI/HUD 数据绑定。",en:"Built GameMode, character control, task generation, minigame interfaces, and UI/HUD data binding."},{zh:"实现 Server / Client 外部输入模块，将硬件信号解析为 Unreal 内的游戏指令。",en:"Implemented a server/client input module that translated physical-device signals into Unreal gameplay commands."},{zh:"通过异步接收、缓冲与插值处理输入延迟，并为关键链路补充状态校验和容错。",en:"Reduced input latency with asynchronous receiving, buffering, and interpolation, then added validation and fallback handling."}],stack:["Unreal Engine","Blueprint","Networking","Hardware I/O","UI"],images:[{src:"/media/projects/fathom-task.png",alt:{zh:"Fathom 任务玩法与绿色 HUD",en:"Fathom task gameplay with green HUD"},caption:{zh:"任务系统与实时 HUD",en:"Task system and realtime HUD"},position:"center"},{src:"/media/projects/fathom-sonar.png",alt:{zh:"Fathom 潜艇舱室画面",en:"Fathom submarine interior"},caption:{zh:"潜艇场景与硬件交互目标",en:"Submarine environment and hardware interaction target"},position:"center"}]},{id:"house-of-vampires",portfolioCategory:"engine-games",title:"哥特式吸血鬼城堡解谜游戏",period:"2025",category:{zh:"Unreal 蓝图游戏",en:"Unreal Blueprint game"},summary:{zh:"已上线 itch.io 的哥特式恐怖解谜游戏。我担任主要蓝图程序与技术美术开发，整合交互、谜题、手部动画和特效。",en:"A gothic puzzle-horror game released on itch.io. I led Blueprint and technical-art development across interactions, puzzles, hand animation, and VFX."},contribution:[{zh:"使用 Unreal Blueprint 实现玩法流程、交互、谜题、状态管理与手柄支持。",en:"Implemented gameplay flow, interaction, puzzles, state management, and controller support in Unreal Blueprints."},{zh:"制作第一人称手部绑定与动画，并将动画状态接入交互流程。",en:"Created the first-person hand rig and animation and connected it to gameplay interactions."},{zh:"参与完整打包与上线交付，项目可在 itch.io 下载。",en:"Contributed through packaging and public release; the game is available on itch.io."}],stack:["Unreal Engine","Blueprint","Gameplay","Rigging","Animation"],images:[{src:"/media/projects/house-of-vampires.webp",alt:{zh:"House of Vampires 的 itch.io 项目页与游戏截图",en:"House of Vampires itch.io page and screenshots"},caption:{zh:"已上线的 itch.io 页面与实机画面",en:"Published itch.io page and in-game captures"},position:"top"}],link:{label:{zh:"打开 itch.io 项目页",en:"Open the itch.io page"},href:"https://musitive.itch.io/hov"},youtubeId:"aY36FtqdGAw",story:{title:{zh:"你能逃出德古拉的城堡吗？",en:"Can you survive Dracula's Castle?"},intro:{zh:"进入《House of Vampires》中这座受经典恐怖电影启发的哥特式城堡。利用宅邸里散落的物品以及自己的身体，解开逃离城堡所需的谜题。",en:"Enter the classic horror-inspired gothic castle in House of Vampires! Use items scattered around the mansion as well as your own body to solve the puzzles needed to escape the castle."},features:[{title:{zh:"多种谜题",en:"Various Puzzles"},detail:{zh:"要成功逃出城堡，你需要只利用自己能够携带的物品，解决多种不同的谜题。",en:"To successfully escape the castle, you will need to solve several different puzzles using only what you can carry."}},{title:{zh:"德古拉",en:"Dracula"},detail:{zh:"游戏重新塑造了德古拉这一角色；在这个可怕的怪物抓住你之前，你必须设法逃脱。",en:"Featuring a new take on Dracula as a character, you must escape this terrifying monster before he catches you."}},{title:{zh:"手柄支持",en:"Controller Support"},detail:{zh:"游戏完整支持键盘鼠标和 Xbox 手柄。",en:"The game fully functions with not only Keyboard & Mouse but Xbox Controllers as well."}},{title:{zh:"经典恐怖电影质感",en:"Classic Horror Film Look"},detail:{zh:"游戏通过后期处理还原经典恐怖电影的胶片质感。",en:"Using post-processing, the game captures that film look from classic horror films."}}],note:{zh:"建议佩戴耳机游玩。",en:"Best experienced with headphones."}}},{id:"through-other-eyes",portfolioCategory:"engine-games",title:"VR 视障体验与无障碍叙事游戏",period:"2025",category:{zh:"VR 无障碍体验",en:"VR accessibility experience"},summary:{zh:"两人团队完成的 VR 视障体验。我兼任玩法策划、程序与技术美术，负责地图路线、事件设计、场景交互和角色绑定。",en:"A two-person VR accessibility project. I worked across game design, programming, and technical art, owning routes, events, interactions, and character rigging."},contribution:[{zh:"协助把关卡规划落成可游玩的 VR 场景，布置道路、障碍和关键交互点。",en:"Translated the level plan into a playable VR scene with streets, obstacles, and interaction points."},{zh:"编写事件交互逻辑，并制作简单的导盲犬绑定与动画。",en:"Authored event interaction logic and created a simple guide-dog rig and animation."},{zh:"围绕受限视觉信息设计引导、反馈和空间节奏。",en:"Worked on guidance, feedback, and spatial pacing under intentionally limited visual information."}],stack:["VR","Unreal Engine","Level Design","Interaction","Rigging"],images:[{src:"/media/projects/through-other-eyes-cover.webp",alt:{zh:"Through Other Eyes 项目海报",en:"Through Other Eyes project poster"},caption:{zh:"项目 One Sheet",en:"Project one-sheet"},position:"center 32%"},{src:"/media/projects/through-other-eyes-vr.png",alt:{zh:"VR 中的视障模拟画面",en:"Visual-impairment simulation in VR"},caption:{zh:"头显内的受限视觉效果",en:"Restricted-vision effect inside the headset"},position:"center"},{src:"/media/projects/through-other-eyes-level.webp",alt:{zh:"Through Other Eyes 关卡规划图",en:"Through Other Eyes level plan"},caption:{zh:"关卡路径与交互点规划",en:"Route and interaction-point planning"},position:"center"}]},{id:"retro-arcade",portfolioCategory:"engine-games",title:"复古像素风 3D 街机游戏原型",period:"2025",category:{zh:"Unity 游戏与 Shader",en:"Unity gameplay and shader"},summary:{zh:"复古 3D 街机游戏原型。我负责完整 Gameplay、角色与动画状态，并尝试把 3D 动画烘焙成带法线信息的像素序列帧。",en:"A retro 3D arcade prototype. I owned gameplay and character state and explored baking 3D animation into pixel sprites with normal information."},contribution:[{zh:"实现角色状态、动画状态、关卡逻辑和核心玩法循环。",en:"Implemented character state, animation state, level logic, and the core gameplay loop."},{zh:"制作部分 2D 角色素材，并完成 3D 到 2D 序列帧的实验流程。",en:"Created part of the 2D character art and completed a 3D-to-2D sprite-sequence experiment."},{zh:"编写利用颜色、Alpha 与法线贴图的像素化实时 Shader，并记录方案未进入最终版本的原因。",en:"Wrote a pixel-rendering shader using color, alpha, and normal data and documented why the experiment was not adopted."}],stack:["Unity","C#","Shader","Gameplay","2D / 3D Pipeline"],images:[{src:"/media/projects/retro-arcade-shader.png",alt:{zh:"Unity 中的像素角色 Shader 实验",en:"Pixel-character shader experiment in Unity"},caption:{zh:"3D 动画到像素序列帧与法线光照实验",en:"3D animation to pixel sprites with normal-lighting experiment"},position:"center"},{src:"/media/projects/retro-arcade-sprites.png",alt:{zh:"复古街机角色序列帧素材",en:"Retro arcade character sprite sheets"},caption:{zh:"本人制作的角色序列帧素材",en:"Character sprite sheets I created"},position:"center"}]},{id:"digital-twin",portfolioCategory:"engine-games",title:"火力发电检测 UE5 数字孪生客户端",period:"2023",category:{zh:"UE5 客户端开发",en:"UE5 client development"},summary:{zh:"面向火力发电检测业务的 UE5 / Web 双客户端数字孪生系统，由公司服务器协调三端低时延双向数据与操作同步。",en:"A UE5/Web dual-client digital-twin system for thermal-power inspection, with a company server coordinating low-latency bidirectional state and operation synchronization."},contribution:[{zh:"使用 C++、Blueprint 与组件化架构实现锅炉、汽轮机、发电机及监测设备的启停、联锁、参数变化、告警联动和巡检流程。",en:"Implemented startup, interlocks, telemetry changes, alarms, and inspection flows for boilers, steam turbines, generators, and monitoring equipment with C++, Blueprint, and a component-based architecture."},{zh:"把 UE5 的组件化、状态机、事件总线和分层设计迁移到 Vue 3 / Three.js Web 端，复用设备 ID、状态模型与指令协议。",en:"Transferred UE5 component, state-machine, event-bus, and layered patterns to Vue 3 / Three.js while sharing device IDs, state models, and command contracts."},{zh:"以公司服务器为权威状态源，通过 HTTP + WebSocket 实现 UE5 / Server / Web 三端低时延双向同步、操作回传与异常恢复。",en:"Used the company server as the authoritative state source for low-latency UE5-server-Web synchronization, operation relay, and recovery over HTTP and WebSocket."}],stack:["UE5 / C++ / Blueprint","Vue 3 / Three.js","Node.js / Express","WebSocket","状态同步"],images:[{src:"/media/projects/digital-twin.png",alt:{zh:"工业数字孪生建筑线框与显示控制面板",en:"Industrial digital twin with building outlines and display controls"},caption:{zh:"城市建筑数据与显示参数控制",en:"Building data and display-parameter controls"},position:"center"}],link:{label:{zh:"查看 Web 展示端仓库",en:"View the Web viewer repository"},href:"https://github.com/Ubik42/Vue3_Digital_Twin"}}];function Yn(a,r){return a[r]}const uA=`# UE5 Digital-Twin Client for Thermal-Power Inspection

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
`,dA=`# 火力发电检测 UE5 数字孪生客户端

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
`,hA=`# Fathom

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
`,fA=`# Fathom

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
`,mA=`# House of Vampires

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
`,pA=`# House of Vampires

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
`,gA=`# Retro 3D Arcade Prototype

A retro Unity game based on a Q*bert-like loop. I owned the complete gameplay implementation: character movement and state, animation flow, tile feedback, enemies, level logic, and the loop from start through failure and restart. I also led the custom shader-pipeline experiment and created part of the 2D character art.

## 3D animation to pixel sprites

I modeled and animated a Q*bert character, then exported sprite sequences containing color, alpha, and normal information. A Unity shader reconstructed the silhouette and used the normal channel for realtime lighting.

![3D-to-2D sprite and shader experiment](/media/projects/retro-diary/image-000.png)

The pipeline worked but was not adopted: detailed characters produced excessive noise at the chosen 45-degree view, and the schedule did not allow the full 3D asset set to be completed.

## Character concepts and 2D art

![Character and animation sprite sheets](/media/projects/retro-diary/image-001.png)

The available material primarily documents the pipeline experiment; no sufficiently clear final gameplay capture is presented as a finished result.
`,yA=`# Retro 3D Arcade Prototype

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
`,vA=`# Through Other Eyes

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
`,bA=`# Through Other Eyes

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
`,jg={fathom:{zh:fA,en:hA},"house-of-vampires":{zh:pA,en:mA},"through-other-eyes":{zh:bA,en:vA},"retro-arcade":{zh:yA,en:gA},"digital-twin":{zh:dA,en:uA}},SA=[{slug:"toon",title:"UE Toon 卡通光照与描边",label:"引擎渲染 · 风格化着色",summary:"以三段明暗色块和反向壳描边表现雕塑轮廓，研究材质级卡通光照与环境之间的视觉关系。",summaryEn:"Material-level toon lighting with three shading bands and inverted-hull outlines on a sculptural subject.",tags:["UE 5.8","HLSL","Toon Shading","轮廓描边"],map:"01_Toon",source:"BV11Sej6kEGi",detail:`## 明暗色块与轮廓

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

BuildFracture generates the chunks, and M_Dissolve and M_Sparks provide the disappearance effect. The scene does not include arbitrary-mesh repair, general runtime cutting, or a breakable bond graph.`}],wA=SA.map(a=>({id:`aita-${a.slug}`,title:a.title,category:"engine-games",categoryLabel:{zh:a.label,en:"Unreal rendering and simulation"},summary:{zh:a.summary,en:a.summaryEn},cover:`/media/repositories/aita-systems/${a.slug}.webp`,tags:a.tags,repositoryUrl:`https://github.com/Ubik42/AITASystems58/tree/main/Content/AITA/Demos/${a.map}`,story:{zh:`# ${a.title}

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

The recording captures the actual editor window at a fixed simulation timestep; it is not a performance benchmark. Rocks, the statue, and bushes use Epic Starter Content. Reference videos and external Epic assets are not redistributed with the source.`}},TA=[...wA,{id:"frostbound-gate",title:"霜隙之门 · Frostbound Gate",category:"general-ta",categoryLabel:{zh:"Unity 场景特效",en:"Unity scene VFX"},summary:{zh:"雪地遗迹中的冰晶传送门。旅人靠近时凝结，穿越后传送，远离时碎裂消散；包含昼夜变化、分层冰材质和程序生成资产。",en:"An ice-crystal portal in snowy ruins: approach to form it, cross to teleport, and retreat to dissolve it. Includes a day–night cycle, layered ice shading, and procedural assets."},cover:"/media/repositories/frostbound-gate/hero.webp",tags:["Unity 6","URP","Shader","程序化建模","场景交互"],repositoryUrl:"https://github.com/Ubik42/FrostboundGate",story:{zh:`# 霜隙之门

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

Version 0.1.0 is verified on Windows with Python 3.12 and DuckDB 1.5.5. It uses deterministic synthetic data and bounded question routing; it does not claim arbitrary enterprise analysis, causal automation, or unrestricted code execution.`},images:[{src:"/media/repositories/gameops-insight-agent/metric-choice.png",alt:{zh:"崩溃率两个有效分母的执行前口径选择",en:"Pre-query selection between two valid crash-rate denominators"}},{src:"/media/repositories/gameops-insight-agent/sql-blocked.png",alt:{zh:"外部文件读取 SQL 在执行前被拦截",en:"External-file SQL blocked before execution"}}]},{id:"lyra-hero-arena",title:"Lyra Hero Arena：五英雄多人对战游戏",category:"engine-games",categoryLabel:{zh:"多人游戏与 Gameplay 架构",en:"Multiplayer game and gameplay architecture"},summary:{zh:"基于 UE5 Lyra 扩展五英雄射击玩法，以 GAS、Game Feature、PawnData 与服务器权威状态组织选人、战斗、死亡、重生和结算；项目仍在持续开发。",en:"An in-progress UE5 Lyra hero shooter using GAS, Game Features, PawnData, and server-authoritative state for selection, combat, death, respawn, and results."},cover:"/media/repositories/lyra-hero-arena/hero-select.jpg",tags:["UE 5.7","Lyra","C++ / GAS","Game Features"],repositoryUrl:"https://github.com/Ubik42/LyraHeroArena",story:{zh:`# Lyra Hero Arena：五英雄多人对战游戏

这是一个基于 Unreal Engine 5.7 与 Lyra Starter Game 持续开发的多人英雄射击项目。当前重点不是复制 Lyra 示例内容，而是在它已有的武器、队伍、GAS、PawnData、CommonUI 和网络框架上建立一套可扩展的英雄与比赛循环。

## 游戏与 Gameplay 架构

- 五名英雄以 AbilitySet、装备和数据定义组合差异，不复制整套 Pawn；
- 服务器保存并校验英雄选择，客户端只提交意图，避免本地状态成为比赛权威；
- 自有玩法放在 HeroArena Game Feature 中，减少主工程对具体模式的反向依赖；
- 选人、出生、交战、目标、死亡、重生、换人与结算沿用同一状态路径；
- 伤害、治疗、队伍、库存和武器 TargetData 尽量复用 Lyra 原有边界。

## 当前状态

仓库公开的是自研 C++ 模块、结构说明和真实运行截图，不重新分发 Lyra、Fab 或 Unreal Engine 资产。核心架构与主要比赛环节已经落地，但角色内容、玩法平衡、界面表现和完整发布流程仍在继续开发。`,en:`# Lyra Hero Arena

An in-progress multiplayer hero-shooter project built on Unreal Engine 5.7 and Lyra. Five heroes are composed from Ability Sets, equipment, and data definitions, while server-authoritative selection and a HeroArena Game Feature keep gameplay boundaries explicit. The repository publishes original C++ modules and real screenshots without redistributing Lyra or Fab assets.`},images:[{src:"/media/repositories/lyra-hero-arena/gameplay.jpg",alt:{zh:"Lyra 英雄射击实际交战场景",en:"Live combat in the Lyra hero shooter"}}]},{id:"lyra-performance-lab",title:"多角色高负载场景性能优化",category:"engine-games",categoryLabel:{zh:"UE 性能分析与优化",en:"UE performance analysis and optimization"},summary:{zh:"在固定地图和角色负载下，分别比较 AI、寻路、动画、渲染与网络调整前后的性能指标和场景状态。",en:"Independent, attributable before-and-after studies across AI, navigation, animation, rendering, and networking under high multi-character load."},cover:"/media/repositories/lyra-hero-arena/gameplay.jpg",tags:["Unreal Insights","CSV Profiler","Slate","A/B Benchmark"],repositoryUrl:"https://github.com/Ubik42/LyraHeroArena/tree/main/Plugins/PerformanceLab",story:{zh:`# 多角色高负载场景性能优化

这项作品研究大量角色同时运行 AI、寻路、动画、渲染和网络行为时的性能开销。实验固定地图、随机种子、镜头、画质、RHI 和角色负载；200 个真实 Lyra Pawn 是其中一组标准配置。每个案例分别采集修改前后的性能数据和场景状态。

## 可复现的性能实验

- AI：目标查询、共享战场事实与决策更新；
- Navigation：路径请求、重规划、拥堵和到达率；
- Animation：骨骼更新、IK、远景 LOD 与可见性策略；
- Rendering：角色材质、阴影、附件和可见距离；
- Networking：服务器出站、空间相关性与多客户端拓扑；
- Physics / VFX：先通过 Profile 找到明确热点，再建立独立案例。

比较结果同时列出角色存活、移动、到达率、请求失败、最长等待、近景动画更新、阴影数量和连接数，用于确认两组运行的负载与表现条件一致。`,en:`# Multi-Character Performance Optimization

Fixed maps, seeds, viewpoints, graphics settings, RHI, and character loads create repeatable single-variable studies across AI, navigation, animation, rendering, and networking. Performance gains are accepted only when behavior and visual quality conditions remain valid.`},images:[{src:"/media/repositories/lyra-hero-arena/workbench-network.png",alt:{zh:"网络优化实验的 Baseline 与 Optimized 对比",en:"Baseline and optimized comparison for the networking experiment"}},{src:"/media/repositories/lyra-hero-arena/gameplay.jpg",alt:{zh:"性能压力实验所依托的 Lyra Gameplay 场景",en:"Lyra gameplay environment used by the performance stress studies"}}]},{id:"ue-performance-workbench",title:"UE Performance Workbench：性能实验工作台",category:"engine-games",categoryLabel:{zh:"Unreal Editor 性能工具",en:"Unreal Editor performance tooling"},summary:{zh:"在 Unreal Editor 内启动单机、服务器和多客户端实验，校验负载与质量条件，并聚合同一实验的 Baseline / Optimized 正式结果。",en:"An Unreal Editor workbench for launching standalone and networked experiments, validating load and quality conditions, and aggregating formal baseline/optimized results."},cover:"/media/repositories/lyra-hero-arena/workbench-network.png",tags:["UE 5.7","Slate","CSV Profiler","Multi-process"],repositoryUrl:"https://github.com/Ubik42/LyraHeroArena/tree/main/Plugins/PerformanceWorkbench",story:{zh:`# UE Performance Workbench：性能实验工作台

这是一个运行在 Unreal Editor 内的中文性能实验工具。它把零散的启动参数、Profile 命令和结果表格整理成一条可复跑的工程流程，既服务多角色高负载实验，也用于验证 Lyra Hero Arena 开发过程中对渲染、网络和 Gameplay 架构的改进。

## 从实验定义到正式结论

- 用版本化 Preset 保存地图、Experience、负载、种子、RHI、画质、采样时长与进程拓扑；
- 从 Editor 启动单机、服务器和多个客户端，统一运行编号与输出目录；
- 汇集 CSV Profiler、AI、Navigation、Animation、Rendering 与 Network 指标；
- 以 Required Guard 检查角色负载、运行条件、画质与网络拓扑，未满足条件的样本标记为不可比较；
- 聚合同一合同下的 Baseline 3 次与 Optimized 3 次，展示中位数、P95、变化率以及相应的行为和画质指标；
- 显示缺失样本、不可比较结果、失败条件和回归提示，并保留原始 CSV 与运行配置。

运行时 PerformanceLab 负责压力、采样和结果文件，Editor 侧 PerformanceWorkbench 只负责实验编排与比较。游戏逻辑不依赖性能 UI，两者通过 JSON 实验合同和结果连接。`,en:`# UE Performance Workbench

A Chinese Unreal Editor tool that turns profiling setup into repeatable experiments. Versioned presets define maps, loads, seeds, RHI, graphics settings, capture duration, and process topology. The workbench launches standalone, server, and client processes, validates required load and quality conditions, and aggregates matched 3+3 baseline and optimized samples with medians, P95 values, deltas, and quality costs.`},images:[{src:"/media/repositories/lyra-hero-arena/workbench-render.png",alt:{zh:"渲染实验的正式结果对比",en:"Formal rendering experiment comparison"}},{src:"/media/repositories/lyra-hero-arena/workbench-network.png",alt:{zh:"网络实验的多进程结果对比",en:"Multi-process network experiment comparison"}}]},{id:"noemancer",title:"Noemancer：面向人与 AI 协作的自研游戏引擎",category:"engine-games",categoryLabel:{zh:"自研游戏引擎",en:"Custom game engine"},summary:{zh:"Noemancer v0.2.0 Preview 1 是一套处于 pre-alpha 的 C++20 游戏引擎与编辑器，当前在 Windows x64 上贯通 Scene/Project 编辑、C# Gameplay、Jolt 物理、ozz 动画、SDL_GPU D3D12/Vulkan Raster、资产 Cook、Package 与独立 Player；Editor、CLI 和 MCP 通过稳定 ID、Schema、Revision 与 Receipt 共享状态观察和受控修改。",en:"Noemancer v0.2.0 Preview 1 is a pre-alpha C++20 engine and editor, currently verified end to end on Windows x64 across Scene/Project authoring, C# gameplay, Jolt physics, ozz animation, SDL_GPU D3D12/Vulkan raster rendering, asset Cook, Package, and a standalone Player. Editor, CLI, and MCP share stable IDs, schemas, revisions, and receipts for structured observation and bounded mutation."},cover:"/media/repositories/major-updates/noemancer-sponza-atrium.webp",tags:["C++20","D3D12 / Vulkan","C#","MCP"],repositoryUrl:"https://github.com/Ubik42/Noemancer",story:{zh:`# Noemancer：面向人与 AI 协作的自研游戏引擎

Noemancer v0.2.0 Preview 1 是一套仍处于 pre-alpha 的 C++20 游戏引擎与编辑器。当前在 Windows x64 上把通用项目从编辑、运行、Cook、打包到独立 Player 串成一条可复核链路，并让 Editor、CLI、MCP 共享同一套状态与命令合同。

## 从建立工程到独立运行

- Project Hub 管理创建、打开和恢复工程；Scene View、Outliner、Inspector、Asset Browser、Console、Animation Graph 与 Scene Flow Canvas 组成编辑工作区，音频、VFX、Sprite 和材质作者面板接入同一 Editor。
- Edit World 与 Play World 互相隔离，运行时改动不会污染编辑场景；需要的结果可选择性 Apply Back，并进入同一套 Undo / Redo。
- Gameplay 层使用 .NET 10 / C# 项目脚本，支持编译、热重载状态迁移与调试会话；Runtime 集成 Flecs ECS、Jolt 物理、ozz 骨骼动画、GPU Skinning、RmlUi、输入、音频、VFX、Prefab 和存档，并提供确定性延迟/重复事件、实体池与增量 Prefab 生成/销毁。
- NoemancerPlatformer 已经贯通“项目 UI / 输入 → C# Gameplay → Cook → Package → 独立 Player”，用于验证游戏侧的完整生命周期。

## D3D12 / Vulkan 渲染管线

- SDL_GPU 后端让 D3D12 与 Vulkan 共享资源、Shader 和 Render Graph 合同，同时保留各后端的 Pass 时间与诊断回执。
- Raster 主路径包含 Forward PBR、split-sum IBL、四级 CSM、Point/Spot 阴影、GPU 视锥裁剪与间接绘制。
- 画面管线已接入四 LUT 动态天空、Aerial Perspective、共享 HiZ、SSR、SSGI、TAA、GTAO、双边降噪、Bloom、曝光调色和 ACES Tone Mapping。
- RenderLab 使用 Intel Sponza 2022 进行实时验证：约 205 万顶点、1124 万索引、405 个 primitive 和 72 张纹理。页面中的画面均来自 Release 运行捕获。
- RTX 4080 上已完成 D3D12/Vulkan 的 BLAS/TLAS、Pipeline、SBT、Trace 与 Readback 闭环；D3D12 已接入真实 SceneRenderer 几何并形成可见线性直接光，Vulkan 仍是私有全帧输出。项目可见的生产 RTGI、VSM、完整光追材质与 Vulkan SDL 安全呈现仍在后续路线中。

## 资产 Cook 与发布

- 导入 GLB、JSON glTF 与 FBX，使用 meshoptimizer 处理几何，烘焙 Mesh、Animation、KTX2、Sprite Atlas 和 Tilemap 数据。
- Cook 产物由源文件、配方、目标 Profile 和工具版本共同寻址；Runtime 加载前复核范围、Schema 与 SHA-256。
- Windows Player 只带运行时资产、app-local .NET、VC Runtime、Shader Manifest 和第三方 NOTICE，不会在玩家机器上临时解析源 FBX / glTF。

## 编辑器与 Agent 共用命令系统

引擎的 C++ Command Registry 同时服务 Editor、direct JSON、CLI 和 MCP。场景、项目、资产注册表和运行时诊断以稳定 ID、Schema、Revision 和有限观察结果公开；自动化遵循 **Observe → Plan → Apply → Receipt → Undo / Redo**，连接当前 Editor 的权威 World 与撤销记录，不建立第二份场景数据库，也不把 Flecs、Jolt 或 SDL 句柄暴露给 Agent。

## 当前状态

项目处于 Pre-alpha，目前主要验证 Windows x64。Sprite 元数据与 Atlas 仍是计划态，材质作者台尚无完整资产持久化事务；稳定插件 SDK、跨平台发行、生产网络、签名安装器、生产 RTGI/VSM，以及真实 Provider→Staging 的 AIGC 管线仍在后续计划中。当前展示对应 v0.2.0 Preview 1 的 Editor—Runtime—Cook—Player 链路与实时渲染结果。`,en:`# Noemancer

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

The project is pre-alpha and currently verified end to end on Windows x64. Raster SSR, SSGI, and dynamic atmosphere are current verified paths. Native RT has experimental D3D12/Vulkan execution and D3D12 scene-tracing foundations; production RTGI, VSM, Vulkan presentation, durable Sprite/Material asset authoring, clean-machine/cross-platform release, provider-backed AIGC, and a stable plug-in SDK remain unfinished.`},images:[{src:"/media/repositories/major-updates/noemancer-editor.webp",alt:{zh:"Noemancer 中文 Editor：场景、层级、Inspector、资产与 Agent Context",en:"Noemancer Chinese editor workspace"}},{src:"/media/repositories/major-updates/noemancer-sponza-atrium.webp",alt:{zh:"D3D12 中实时运行的 Intel Sponza 2022 宫殿中庭",en:"Intel Sponza 2022 atrium running in real time on D3D12"}},{src:"/media/repositories/major-updates/noemancer-sponza-balcony.webp",alt:{zh:"Sponza 上层回廊与外部 glTF 材质依赖",en:"Sponza balcony and external glTF material dependencies"}},{src:"/media/repositories/major-updates/noemancer-commercial-raster.webp",alt:{zh:"PBR、阴影、Bloom 与 ACES 的商业 Raster 基准",en:"Commercial raster benchmark with PBR, shadows, Bloom, and ACES"}},{src:"/media/repositories/major-updates/noemancer-sky.webp",alt:{zh:"四 LUT 动态天空、大气与 Aerial Perspective",en:"Four-LUT dynamic sky, atmosphere, and aerial perspective"}},{src:"/media/repositories/major-updates/noemancer-ssr-ssgi.webp",alt:{zh:"RenderLab 中启用 SSR、SSGI 与时域处理",en:"SSR, SSGI, and temporal processing in RenderLab"}}]},{id:"siggraph-physics-lab",title:"UE5 SIGGRAPH 物理复现实验室",category:"engine-games",categoryLabel:{zh:"UE 物理与论文复现",en:"UE physics and paper reproduction"},summary:{zh:"围绕布料、软体、流体、可微物理和物理角色控制，把 SIGGRAPH 研究中的求解思想接入 UE 5.4、Chaos 与真实引擎资产。",en:"Five UE 5.4 studies connect SIGGRAPH research on cloth, soft bodies, fluids, differentiable physics, and physical character control to Chaos and real engine assets."},cover:"/media/repositories/siggraph-physics-lab/cover.png",tags:["UE 5.4.4","Chaos","RDG / D3D12","Physics"],repositoryUrl:"https://github.com/Ubik42/ue5-siggraph-physics-lab",story:{zh:`# UE5 SIGGRAPH 物理复现实验室

这是我的个人 UE 物理实验室。我从近年的 SIGGRAPH / SIGGRAPH Asia 物理论文中选择适合实时验证的部分，把公式里的状态、约束和求解过程接到 UE 5.4.4、Lyra、Chaos 与真实资产工作流中。

项目由五个独立 Case 组成：

- **接触感知 GPU 布料**：读取 Assassin 的 Clothing 拓扑、动画蒙皮目标与 Physics Asset，在 RDG Compute 中实现 Jacobi、低频模态、NDB、rank-one 接触和 CCD，并与 Chaos Cloth 共用输入。
- **多尺度 GPU 软体**：用四面体 XPBD 研究高分辨率下的局部传播停滞，以两模态全局校正改善中高档收敛，再通过体积 Cage 驱动 Dragon 表面。
- **Particle Flow Map 流体**：实现 2D MAC 网格、粒子 Flow Map、Jacobian 输运和压力投影，让 Chaos 刚体成为实时运动边界。
- **可微物理与反向设计**：对离散动力学推进前向切线，用有限差分验证梯度，并把反演参数送回 Chaos Constraint 重放。
- **物理驱动角色**：连接 Chaos 多刚体、Physics Control、ALS 起身动画与 Lyra 服务器权威，处理跌倒、恢复判据和物理—动画交接。

每个 Case 都保留标准结果、单变量失败、固定步数据、GPU 或 CPU 计时和自动化验证。公开仓库不重新分发 Fab 商业资产，只提交个人源码、Shader、文档和运行截图。`,en:`# UE5 SIGGRAPH Physics Lab

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

Version 0.3.1 provides two Maya 2025 workflows: safe three-input UV/position transfer and controllable thickness generation for open garment meshes. Both use zero-write previews, a single undo chunk, read-back validation, and automatic rollback. A redistributable CC0 halter dress provides real garment evidence in addition to deterministic demo scenes.`},images:[{src:"/media/repositories/production-tools/maya-garment-public-input.png",alt:{zh:"公开 CC0 挂脖连衣裙输入",en:"Public CC0 halter dress input"}},{src:"/media/repositories/production-tools/maya-garment-public-result.png",alt:{zh:"厚度生成后的领口侧壁与真实服装轮廓",en:"Generated opening sidewalls on the real garment silhouette"}},{src:"/media/repositories/production-tools/maya-garment-thickness-preview.png",alt:{zh:"双向居中厚度的零写入预览",en:"Zero-write centered thickness preview"}},{src:"/media/repositories/production-tools/maya-garment-thickness-complete.png",alt:{zh:"厚度执行完成、实测结果与本次 History",en:"Completed thickness operation with measured results and owned history"}}]},{id:"game-unpack-agent",title:"Game Unpack Agent：Unity / Unreal 受控解包",category:"engine-games",categoryLabel:{zh:"跨引擎资源容器识别与受控解包",en:"Cross-engine container detection and controlled extraction"},summary:{zh:"面向自有或明确获授权的 Unity / Unreal 包执行 scan → plan → run → verify；v0.1.0 已在 Windows x64 / .NET 9 下验证 Unity AssetBundle 7/7 与 Unreal Pak 4/4。",en:"Runs scan → plan → run → verify for owned or explicitly authorized Unity and Unreal packages; v0.1.0 validates a 7/7 Unity AssetBundle case and a 4/4 Unreal Pak case on Windows x64 and .NET 9."},cover:"/media/repositories/production-tools/game-unpack-agent.svg",tags:["v0.1.0",".NET 9","Unity AssetBundle","Unreal Pak"],repositoryUrl:"https://github.com/Ubik42/Game-Unpack-Agent",story:{zh:`# Game Unpack Agent：Unity / Unreal 受控解包

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

A read-only Unreal 5.8.1 Editor plug-in. Native C++ collects host metadata while Python applies versioned profiles and produces reports. Dedicated mesh, texture, and material tracks retain their own evidence; a mixed-delivery summary exposes coverage, blocking issues, hotspots, and drill-down links without modifying production assets.`},images:[{src:"/media/repositories/production-tools/unreal-auditor-current.png",alt:{zh:"UE 5.8.1 中按项目 Profile 执行批量资产验收",en:"Profile-driven batch asset acceptance in UE 5.8.1"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-overview.png",alt:{zh:"24 个 Static Mesh 的资产总览、通过项和问题项",en:"Overview of 24 Static Mesh assets with passing and failing states"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-issues.png",alt:{zh:"规则、实测值、阈值与中文 Evidence",en:"Rules, measured values, thresholds, and localized evidence"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-running.png",alt:{zh:"可观察、可在批次间安全取消的审计任务",en:"Observable audit task with safe cancellation between batches"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-regression.png",alt:{zh:"同一 Profile 下修复前后的回归比较",en:"Before-and-after regression under the same profile"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-handoff.png",alt:{zh:"无需 Unreal 即可阅读的中文团队交接报告",en:"Chinese team handoff report readable without Unreal"}}]},{id:"unreal-toolsmith-agent",title:"UE 编辑器工具开发与诊断 Agent",category:"engine-games",categoryLabel:{zh:"UE 编辑器工具开发、构建诊断与宿主验证",en:"Unreal editor tooling, build diagnosis, and host validation"},summary:{zh:"把中文 UE 工具需求编译为版本化任务合同与可审阅 Patch，串联 UBT、Automation、官方 MCP 只读发现和真实 Slate 生命周期验证。",en:"Compiles Chinese Unreal tooling requests into versioned task contracts and reviewable patches, then connects UBT, Automation, official read-only MCP discovery, and real Slate lifecycle validation."},cover:"/media/repositories/production-tools/unreal-toolsmith-agent.png",tags:["v0.1.1","UE 5.8.1","C++ / Slate","MCP / Automation"],repositoryUrl:"https://github.com/Ubik42/Unreal-Toolsmith-Agent",story:{zh:`# UE 编辑器工具开发与诊断 Agent

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

The repository includes a real local ComfyUI output, its API workflow, and the receipt written by the package. The nodes remain model- and renderer-independent.`},images:[{src:"/media/repositories/comfyui-production-nodes/workflow-overview.png",alt:{zh:"中文生产预检与下游交接工作流总览",en:"Chinese production workflow overview"}},{src:"/media/repositories/comfyui-production-nodes/dependency-check.png",alt:{zh:"环境清单与依赖预检通过",en:"Environment inventory and dependency check"}},{src:"/media/repositories/comfyui-production-nodes/budget-validation.png",alt:{zh:"批量与像素预算超限被集中拦截",en:"Batch and pixel budget validation"}},{src:"/media/repositories/comfyui-production-nodes/contract-validation.png",alt:{zh:"工作流必需输入与参数范围检查",en:"Workflow input and parameter validation"}},{src:"/media/repositories/comfyui-production-nodes/receipt-writer.png",alt:{zh:"生成收据预览与受限工作区写入",en:"Generation receipt and contained write"}},{src:"/media/repositories/comfyui-production-nodes/dcc-handoff.png",alt:{zh:"面向 DCC 与引擎的批次交接清单",en:"DCC and engine batch handoff manifest"}},{src:"/media/repositories/comfyui-production-nodes/local-generation.png",alt:{zh:"本机 ComfyUI 真实生成结果",en:"Locally generated ComfyUI output"}}]}];function Nt(a,r){return a[r]}const AA=[{id:"maya-plugin",portfolioCategory:"pipeline",artstationUrl:"https://www.artstation.com/artwork/XJGnR3",title:{en:"Maya Plugin",zh:"Maya 综合工具集"},cover:"/media/visual-works/maya-toolset-video-cover.jpg",category:{en:"DCC tool development",zh:"DCC 工具开发"},summary:{en:"A modular Maya tool suite covering nine production areas, with separated interface and utility layers.",zh:"面向 Maya 生产流程的综合工具集，覆盖属性、绑定、约束、骨骼、控制器、命名、连接、工程与动画九类功能。"},process:[{en:"Separated PySide interfaces from reusable backend utility classes.",zh:"以 PySide 界面层调用后端 Utility 类，拆分交互、业务逻辑与公共功能。"},{en:"Implemented production-oriented operations for rigging, attributes, constraints, naming, and connections.",zh:"实现绑定、属性、约束、命名与驱动连接等面向实际制作的批量操作。"},{en:"Added persistent theme, window state, responsive layout, and contextual tooltips.",zh:"补充主题与窗口状态记忆、弹性布局、字号适配及悬停提示。"}],tools:["Maya","Python","PySide","DCC Pipeline"],youtubeId:"7rUuqI9Pil0",images:[{src:"/media/visual-works/maya-main.webp",alt:{en:"Main Maya plugin window",zh:"Maya 综合工具集主界面"},caption:{en:"Main window and attribute tools",zh:"主窗口与属性工具"}},{src:"/media/visual-works/maya-rig.webp",alt:{en:"Rigging tools in the Maya plugin",zh:"Maya 工具集中的绑定功能"},caption:{en:"Rigging utilities",zh:"绑定工具页"}},{src:"/media/visual-works/maya-connections.webp",alt:{en:"Attribute connection tools",zh:"属性连接与驱动关系工具"},caption:{en:"Connection editor",zh:"属性连接编辑器"}}]},{id:"stylized-road-material",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/Bk918D",title:{en:"Stylized Road Material",zh:"风格化道路材质"},cover:"/media/artstation/stylized-road-material.jpg",category:{en:"Procedural material",zh:"程序化材质"},summary:{en:"A stylized road material authored procedurally in Substance Designer.",zh:"使用 Substance Designer 制作的风格化道路材质，通过 Flood Fill、层级拆分与多层噪声构建砖块、花纹、草地、花瓣、泥土和潮湿变化。"},process:[{en:"Constructed the brick base and spiral motif as reusable procedural patterns.",zh:"程序化构建砖块基底与旋涡纹样，并保持图案参数可调。"},{en:"Used Flood Fill and deformation mixing to break repetition.",zh:"使用 Flood Fill 与形变混合打散重复，建立砖块尺度和方向变化。"},{en:"Layered grass, petals, dirt, moisture, and unified color grading.",zh:"分层加入草地、花瓣、泥土、潮湿区域，最后统一整体色彩。"}],tools:["Substance Designer","Flood Fill","Procedural Material"],youtubeId:"D2jptqFjUZE",images:[{src:"/media/visual-works/road-material.webp",alt:{en:"Final stylized road material",zh:"风格化道路材质最终效果"},caption:{en:"Final material maps and surface",zh:"最终材质与贴图效果"}},{src:"/media/visual-works/road-graph.webp",alt:{en:"Substance Designer material graph",zh:"Substance Designer 材质节点网络"},caption:{en:"Procedural graph",zh:"程序化节点网络"}}]},{id:"rigging-animation",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/vb42ev",title:{en:"Rigging & Animation",zh:"角色绑定与动画"},cover:"/media/artstation/rigging-animation.jpg",category:{en:"Rigging and gameplay",zh:"绑定与游戏角色"},summary:{en:"A complete path from a mechanical character rig in Maya to a playable Unreal Engine character.",zh:"将 T-200 机器人从 Maya 骨骼与控制器绑定推进到 Unreal Engine 过场动画和可操控角色，处理机械轴、武器链条、舱门、灯光与攻击动画。"},process:[{en:"Built a mechanical rig with specialized IK, weapon-chain constraints, doors, ladder, and spotlight controls.",zh:"针对机械结构制作腿部 IK、武器链条约束、舱门、梯子与探照灯控制。"},{en:"Authored a startup cutscene in Level Sequencer.",zh:"在 Level Sequencer 中制作角色进入机体与机器人启动的过场动画。"},{en:"Implemented locomotion, upper-body attack blending, VFX states, and spotlight input.",zh:"通过 AnimGraph 与蓝图实现移动、上半身攻击混合、烟雾状态和探照灯输入。"}],tools:["Maya","Unreal Engine","Sequencer","AnimGraph","Blueprint"],youtubeId:"wd1gCuZZ2EY",featured:!0,images:[{src:"/media/visual-works/rig-result.webp",alt:{en:"Playable T-200 robot in Unreal Engine",zh:"Unreal Engine 中可操控的 T-200 机器人"},caption:{en:"Playable character result",zh:"可操控角色最终效果"}},{src:"/media/visual-works/rig-maya.webp",alt:{en:"Mechanical robot rig in Maya",zh:"Maya 中的机器人机械绑定"},caption:{en:"Maya rig and controls",zh:"Maya 骨骼与控制器"}},{src:"/media/visual-works/rig-animgraph.webp",alt:{en:"Unreal Engine animation graph",zh:"Unreal Engine 动画状态图"},caption:{en:"Animation state and blending",zh:"动画状态与分层混合"}}]},{id:"unity-sdf-shader",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/XJGnQl",title:{en:"Unity SDF Shader",zh:"Unity SDF 体积云 Shader"},cover:"/media/artstation/unity-sdf-shader.jpg",category:{en:"Realtime shader",zh:"实时 Shader"},summary:{en:"A Unity volume-cloud shader using signed distance fields and ray marching.",zh:"在 Unity 中以有向距离场描述云体，使用 Ray Marching 进行密度采样，并结合光线包围盒求交、噪声、吸收和散射计算完成体积云渲染。"},process:[{en:"Combined sphere and box SDF primitives through smooth union and subtraction.",zh:"组合球体与盒体 SDF，并以平滑并集和差集构造可变化的云体形态。"},{en:"Implemented ray-box intersection and density sampling in HLSL.",zh:"在 HLSL 中实现光线与包围盒求交、步进采样和密度计算。"},{en:"Exposed noise, absorption, ambient density, and light intensity for art direction.",zh:"开放噪声、吸收、环境密度与光照强度参数，支持在 Unity Inspector 中调整。"}],tools:["Unity","HLSL","SDF","Ray Marching"],youtubeId:"vSrJBlIisTs",images:[{src:"/media/visual-works/sdf-properties.webp",alt:{en:"Unity SDF shader properties",zh:"Unity SDF Shader 参数定义"},caption:{en:"Artist-facing parameters",zh:"可调渲染参数"}},{src:"/media/visual-works/sdf-raymarch.webp",alt:{en:"Ray marching fragment shader code",zh:"体积云 Ray Marching 片元着色代码"},caption:{en:"Density sampling and lighting",zh:"密度采样与光照计算"}}]},{id:"houdini-lightning",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/5W1Xkg",title:{en:"Houdini Lightning VFX",zh:"Houdini 闪电特效"},cover:"/media/artstation/houdini-lighting.jpg",category:{en:"Procedural VFX",zh:"程序化特效"},summary:{en:"A procedural lightning system that strikes nearby geometry and activates localized destruction.",zh:"使用 Houdini 构建的程序化闪电与破碎交互：电流自动寻找周围目标，生成不同形态与频率的闪电，并在命中位置激活对应刚体簇。"},process:[{en:"Projected source points onto nearby surfaces to establish valid strike targets.",zh:"沿球体法线向周围场景投射散点，筛选有效距离内的闪电命中目标。"},{en:"Built animated lightning forms with curve attributes, VOP noise, particles, and color flow.",zh:"结合曲线属性、VOP 噪声、粒子与颜色流动构建主电流和次级电流。"},{en:"Connected hit regions to clustered rigid-body activation in DOPs.",zh:"在 DOP 中将命中区域连接到预切割刚体簇，实现局部优先崩解。"}],tools:["Houdini","VOP","DOP","Particles","Rigid Bodies"],images:[{src:"/media/visual-works/lightning-form.webp",alt:{en:"Procedural lightning curves",zh:"程序化生成的闪电曲线"},caption:{en:"Lightning form generation",zh:"闪电形态生成"}},{src:"/media/visual-works/lightning-stream.webp",alt:{en:"Secondary electric current effect",zh:"次级电流与颜色流动效果"},caption:{en:"Secondary current",zh:"次级电流效果"}},{src:"/media/visual-works/lightning-destruction.webp",alt:{en:"Wall destruction driven by lightning strikes",zh:"闪电命中驱动的墙体破碎"},caption:{en:"Strike-driven rigid-body destruction",zh:"命中驱动的刚体破碎"}}]},{id:"unreal-stylized-world",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/kNZDbK",title:{en:"Unreal Engine Stylized World",zh:"Unreal 风格化世界"},cover:"/media/artstation/unreal-stylized-world.jpg",category:{en:"Realtime environment",zh:"实时场景"},summary:{en:"A stylized realtime environment built from a Houdini heightfield HDA, then authored and optimized in Unreal Engine.",zh:"使用 Houdini 生成高度场与散布数据，将 HDA 接入 Unreal Engine，完成风格化材质、植被替换、水面、灯光与后处理。"},process:[{en:"Generated, eroded, and smoothed the terrain in Houdini, with placeholders for rocks and four tree variants.",zh:"在 Houdini 中生成、侵蚀并平滑地形，同时为岩石和四类树木建立程序化散布占位。"},{en:"Built distance-aware terrain, water, grass, and foliage materials in Unreal Engine.",zh:"在 Unreal Engine 中制作分远近层级的地表、水面、草地与植被材质。"},{en:"Completed scene dressing, lighting, sharpening post process, and final realtime presentation.",zh:"完成场景布置、灯光、锐化后处理与最终实时画面。"}],tools:["Unreal Engine","Houdini","HDA","Material Editor"],youtubeId:"GRVpU7MBSTg",featured:!0,images:[{src:"/media/visual-works/world-final.webp",alt:{en:"Final stylized environment in Unreal Engine",zh:"Unreal Engine 中的风格化世界最终画面"},caption:{en:"Final realtime environment",zh:"最终实时场景"}},{src:"/media/visual-works/world-heightfield.webp",alt:{en:"Houdini heightfield and placement visualization",zh:"Houdini 高度场与模型占位可视化"},caption:{en:"Heightfield and procedural placement data",zh:"高度场与程序化散布数据"}}]},{id:"houdini-cluster",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/Zl3GrN",title:{en:"Houdini Interactive Cluster",zh:"Houdini 交互式花簇"},cover:"/media/artstation/houdini-cluster.jpg",category:{en:"Procedural interaction",zh:"程序化交互"},summary:{en:"A fully procedural flower cluster that bends and blooms in response to a moving reference point.",zh:"完全由 Houdini 程序生成的交互式花簇。参考点靠近时，花茎会向目标弯曲并逐渐开放；远离后则恢复闭合状态。"},process:[{en:"Scattered stems and used VEX to calculate distance-attenuated orientation toward the target.",zh:"散布花茎，并用 VEX 计算指向目标的方向、距离衰减、噪声和平滑。"},{en:"Generated petal rings and blended their normals by target proximity.",zh:"程序化生成花瓣环，根据参考点距离混合花瓣法线以控制开合。"},{en:"Added randomized orientation and color variation without external models.",zh:"不依赖外部模型，为花簇加入方向扰动和颜色变化，完成整体生成网络。"}],tools:["Houdini","VEX","Procedural Modeling","Interaction"],images:[{src:"/media/visual-works/cluster-response.webp",alt:{en:"Flower cluster responding to a reference point",zh:"花簇对参考点产生弯曲与开放响应"},caption:{en:"Interactive bloom response",zh:"交互式开放效果"}},{src:"/media/visual-works/cluster-network.webp",alt:{en:"Complete Houdini flower network",zh:"Houdini 花簇完整节点网络"},caption:{en:"Complete procedural network",zh:"完整程序化网络"}}]},{id:"unreal-vfx",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/oJWA5k",title:{en:"Unreal Engine VFX",zh:"Unreal 水墨战斗特效"},cover:"/media/artstation/unreal-vfx.jpg",category:{en:"Realtime VFX",zh:"实时特效"},summary:{en:"A Chinese ink-inspired combat VFX set built across Unreal materials, Niagara, animation, and post process.",zh:"以中国水墨视觉为方向，综合 Unreal 材质、Niagara、动画通知、Sequencer 与后处理，制作刀光、地裂、墨迹喷溅、聚合和画面冲击效果。"},process:[{en:"Created trail meshes and materials for dissolution, blur, refraction, cracks, and screen distortion.",zh:"制作刀光轨迹网格，以及溶解、拖尾、折射、裂纹和屏幕扰动材质。"},{en:"Layered multiple Niagara systems for blade arcs, dust, smoke, ink splashes, stones, and cohesion.",zh:"分层组合刀光、尘土、烟雾、墨迹喷溅、碎石和聚合等 Niagara 系统。"},{en:"Triggered VFX through animation slots and notifies, then added impact post process.",zh:"通过动画 Slot 与 Notify 触发特效，并在重击阶段加入水墨与模糊后处理。"}],tools:["Unreal Engine","Niagara","Material Editor","Animation"],youtubeId:"hbdYTygLQBw",images:[{src:"/media/visual-works/vfx-blade.webp",alt:{en:"Layered sword trail effect",zh:"多层组合的水墨刀光效果"},caption:{en:"Sword trail composition",zh:"刀光特效组合"}},{src:"/media/visual-works/vfx-ground.webp",alt:{en:"Large-scale ink ground fissure effect",zh:"大范围水墨地裂效果"},caption:{en:"Ground fissure layers",zh:"地裂效果分层"}},{src:"/media/visual-works/vfx-final.webp",alt:{en:"Final combat VFX in Unreal Engine",zh:"Unreal Engine 水墨战斗特效最终画面"},caption:{en:"Final realtime presentation",zh:"最终实时画面"}}]},{id:"houdini-tower",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/nJWYm1",title:{en:"Houdini PCG Tower",zh:"Houdini 程序化高塔"},cover:"/media/artstation/houdini-pcg-tower.jpg",category:{en:"Procedural modeling",zh:"程序化建模"},summary:{en:"A parameterized tower generator with independently authored walls, columns, transitions, body, and top.",zh:"在 Houdini 中拆分墙体、立柱、过渡结构、塔身与塔顶五个模块，建立相互约束的参数化生成逻辑，并生成可直接应用材质的 UV。"},process:[{en:"Built modular wall, window, pillar, railing, body, and roof generators.",zh:"分别构建墙体与窗框、立柱、栏杆、塔身装饰和塔顶结构生成器。"},{en:"Used normals, edge groups, VOP-authored attributes, loops, and resampling to control structure.",zh:"使用法线、边组、VOP 属性、循环和重采样控制结构细节与拼装位置。"},{en:"Exposed base, body, and top parameters while maintaining valid joins and UVs.",zh:"将底座、塔身与塔顶参数集中开放，并保持模块衔接和 UV 结果有效。"}],tools:["Houdini","Procedural Modeling","VOP","UV"],youtubeId:"IxTV5AredLw",images:[{src:"/media/visual-works/tower-wall.webp",alt:{en:"Procedural wall and window module",zh:"程序化墙体与窗框模块"},caption:{en:"Wall generator",zh:"墙体生成模块"}},{src:"/media/visual-works/tower-body.webp",alt:{en:"Assembled procedural tower body",zh:"组合后的程序化塔身"},caption:{en:"Tower body assembly",zh:"塔身模块组合"}},{src:"/media/visual-works/tower-top.webp",alt:{en:"Procedural tower top assembly",zh:"程序化塔顶结构"},caption:{en:"Tower top module",zh:"塔顶生成模块"}}]}],EA=`# Houdini Interactive Cluster\r
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
`,CA=`# Houdini 交互式花簇\r
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
`,zA=`# Houdini Lightning VFX\r
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
`,UA=`# Houdini 闪电特效\r
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
`,xA=`# Houdini PCG Tower\r
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
`,MA=`# Houdini PCG 塔楼\r
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
`,DA=`# Maya Plugin\r
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
`,RA=`# Maya 插件\r
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
`,VA=`# Rigging & Animation\r
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
`,OA=`# 绑定与动画\r
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
`,jA=`# Stylized Road Material\r
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
`,BA=`# 风格化道路材质\r
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
`,kA=`# Unity SDF Shader\r
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
`,LA=`# Unity SDF 着色器\r
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
`,NA=`# Unreal Engine Stylized World\r
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
`,GA=`# Unreal Engine 风格化世界\r
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
`,_A=`# Unreal Engine VFX\r
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
`,PA=`# Unreal Engine VFX\r
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
`,HA={"unreal-stylized-world":{zh:GA,en:NA},"maya-plugin":{zh:RA,en:DA},"stylized-road-material":{zh:BA,en:jA},"rigging-animation":{zh:OA,en:VA},"unity-sdf-shader":{zh:LA,en:kA},"houdini-lightning":{zh:UA,en:zA},"houdini-cluster":{zh:CA,en:EA},"unreal-vfx":{zh:PA,en:_A},"houdini-tower":{zh:MA,en:xA}},zv=/^!\[(.*?)\]\((.*?)\)$/,Uv=/^@\[video(?::\s*(.*?))?\]\((.*?)\)$/,xv=/^(#{1,6})\s+(.+)$/,Ru=/^\s*-\s+(.+)$/,Vu=/^\s*\d+\.\s+(.+)$/,IA=/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)]+)/g;function no(a){return a.replace(/^\s*>\s?/,"").trimEnd()}function qA(a){const r=no(a).trim();return!r||r==="<aside>"||r==="</aside>"||zv.test(r)||Uv.test(r)||xv.test(r)||Ru.test(r)||Vu.test(r)}function XA(a){const r=a.replace(/\r\n/g,`
`).split(`
`),o=[];for(let l=0;l<r.length;){const u=no(r[l]).trim();if(!u||u==="<aside>"||u==="</aside>"){l+=1;continue}const f=u.match(zv);if(f){o.push({type:"image",alt:f[1],src:f[2]}),l+=1;continue}const h=u.match(Uv);if(h){o.push({type:"video",caption:h[1]??"",src:h[2]}),l+=1;continue}const g=u.match(xv);if(g){o.push({type:"heading",level:g[1].length,text:g[2].replace(/^\*\*|\*\*$/g,"")}),l+=1;continue}const y=u.match(Ru),m=u.match(Vu);if(y||m){const b=!!m,S=[];for(;l<r.length;){const x=no(r[l]).trim().match(b?Vu:Ru);if(!x)break;S.push(x[1]),l+=1}o.push({type:"list",ordered:b,items:S});continue}const v=[u];for(l+=1;l<r.length&&!qA(r[l]);)v.push(no(r[l]).trim()),l+=1;o.push({type:"paragraph",text:v.join(" ")})}return o}function FA(a){let r=a;for(let u=0;u<2;u+=1)try{r=decodeURIComponent(r)}catch{break}if(r==="image.png")return"/media/notion/image-000.webp";if(r==="texture.png")return"/media/notion/texture.webp";if(r==="PixPin_2024-11-13_18-17-55.gif")return"/media/notion/vfx-fluctuation.gif";const o=r.match(/^image (\d+)\.png$/);if(o)return`/media/notion/image-${o[1]}.webp`;const l=r.match(/^图片(\d+)\.png$/);return l?`/media/notion/cover-${l[1]}.webp`:a}function su(a){return a.split(IA).filter(Boolean).map((r,o)=>{if(r.startsWith("`")&&r.endsWith("`"))return D.jsx("code",{children:r.slice(1,-1)},o);if(r.startsWith("**")&&r.endsWith("**"))return D.jsx("strong",{children:r.slice(2,-2)},o);const l=r.match(/^\[([^\]]+)\]\(([^)]+)\)$/);return l?D.jsx("a",{href:l[2],target:"_blank",rel:"noreferrer",children:l[1]},o):/^https?:\/\//.test(r)?D.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:r},o):r})}function od({markdown:a,title:r}){const o=XA(a),l=o.findIndex(u=>u.type==="heading"&&u.level===1);return D.jsx("div",{className:"notion-story",children:o.map((u,f)=>{if(f===l)return null;if(u.type==="image")return D.jsx("figure",{children:D.jsx("img",{src:FA(u.src),alt:u.alt||r,loading:"lazy"})},`${u.src}-${f}`);if(u.type==="video")return D.jsxs("figure",{className:"story-video",children:[D.jsx("video",{src:u.src,controls:!0,preload:"metadata",playsInline:!0}),u.caption&&D.jsx("figcaption",{children:u.caption})]},`${u.src}-${f}`);if(u.type==="heading"){const h=u.level<=2?"h3":"h4";return D.jsx(h,{children:su(u.text)},f)}if(u.type==="list"){const h=u.ordered?"ol":"ul";return D.jsx(h,{children:u.items.map((g,y)=>D.jsx("li",{children:su(g)},`${g}-${y}`))},f)}return D.jsx("p",{children:su(u.text)},f)})})}const YA=[{id:"all",zh:"全部作品",en:"All work"},{id:"pipeline",zh:"工具管线",en:"Tool pipelines"},{id:"ai-agent",zh:"AIGC & Agent",en:"AIGC & Agent"},{id:"engine-games",zh:"引擎与游戏",en:"Engines & games"},{id:"general-ta",zh:"通用技术美术技能",en:"General technical art"},{id:"other-tools",zh:"部分其他工具",en:"Selected other tools"}],Bg=new Map(["art-pipeline-skill","advanced-skeleton-python-refactor","rez-studio-launcher","blender-toolsmith-agent","internship-art-pipeline","maya-garment-preparation","mayascope","mayacraft","asset-delivery-organizer","maya-scene-checker","maya-plugin"].map((a,r)=>[a,r])),kg=new Map(["siggraph-physics-lab","noemancer","lyra-hero-arena","lyra-performance-lab","ue-performance-workbench","resonance-forge","game-unpack-agent","unreal-asset-batch-auditor","noemancer-software-rasterizer"].map((a,r)=>[a,r])),Lg=new Map(["artflow-agent","comfyui-production-nodes"].map((a,r)=>[a,r])),Ng=new Map([["pipeline",0],["ai-agent",1],["engine-games",2],["general-ta",3],["other-tools",4]]);function KA(){const{locale:a}=fi(),r=Ev()??!1,[o,l]=J.useState("all"),[u,f]=J.useState(null),h=J.useRef(null),g=J.useMemo(()=>[...TA.map(C=>({kind:"repository",id:C.id,category:C.category,title:C.title,label:Nt(C.categoryLabel,a),summary:Nt(C.summary,a),cover:C.cover,tags:C.tags,value:C})),...AA.map(C=>({kind:"visual",id:C.id,category:C.portfolioCategory,title:Nt(C.title,a),label:Nt(C.category,a),summary:Nt(C.summary,a),cover:C.cover,tags:C.tools,value:C})),...cA.map(C=>({kind:"project",id:C.id,category:C.portfolioCategory,title:C.title,label:Yn(C.category,a),summary:Yn(C.summary,a),cover:C.images[0].src,tags:C.stack,value:C}))].map((C,x)=>({item:C,sourceIndex:x})).sort((C,x)=>{const L=(Ng.get(C.item.category)??Number.MAX_SAFE_INTEGER)-(Ng.get(x.item.category)??Number.MAX_SAFE_INTEGER);return L!==0?L:C.item.category==="pipeline"?(Bg.get(C.item.id)??Number.MAX_SAFE_INTEGER)-(Bg.get(x.item.id)??Number.MAX_SAFE_INTEGER):C.item.category==="engine-games"?(kg.get(C.item.id)??Number.MAX_SAFE_INTEGER)-(kg.get(x.item.id)??Number.MAX_SAFE_INTEGER):C.item.category==="ai-agent"?(Lg.get(C.item.id)??Number.MAX_SAFE_INTEGER)-(Lg.get(x.item.id)??Number.MAX_SAFE_INTEGER):C.sourceIndex-x.sourceIndex}).map(({item:C})=>C),[a]),y=o==="all"?g:g.filter(S=>S.category===o),m=(S,C="replace")=>{const x=new URL(window.location.href);S?x.searchParams.set("work",S):x.searchParams.delete("work"),window.history[C==="push"?"pushState":"replaceState"]({},"",`${x.pathname}${x.search}${x.hash}`)},v=S=>{m(S.id,"push"),f(S)},b=()=>{m(null),f(null)};return J.useEffect(()=>{const S=()=>{const C=new URLSearchParams(window.location.search).get("work");C===Sn.id?f({kind:"repository",id:Sn.id,category:Sn.category,title:Sn.title,label:Nt(Sn.categoryLabel,a),summary:Nt(Sn.summary,a),cover:Sn.cover,tags:Sn.tags,value:Sn}):f(C?g.find(x=>x.id===C)??null:null)};return S(),window.addEventListener("popstate",S),()=>window.removeEventListener("popstate",S)},[g,a]),J.useEffect(()=>{const S=h.current;if(S)return u?(S.open||S.showModal(),S.scrollTop=0,document.body.classList.add("has-project-dialog")):(S.open&&S.close(),document.body.classList.remove("has-project-dialog")),()=>document.body.classList.remove("has-project-dialog")},[u]),D.jsxs("section",{id:"portfolio",className:"portfolio-gallery","aria-labelledby":"portfolio-title",children:[D.jsxs("header",{className:"portfolio-gallery-header",children:[D.jsxs("div",{children:[D.jsx("h2",{id:"portfolio-title",children:a==="zh"?"作品":"Work"}),D.jsx("span",{children:String(g.length).padStart(2,"0")})]}),D.jsx("p",{children:a==="zh"?"完整图文、演示与源码链接集中收录于各项目详情。":"Full case studies, demos, and source links are collected in each project detail."})]}),D.jsx("div",{className:"portfolio-filters",role:"group","aria-label":a==="zh"?"筛选作品":"Filter work",children:YA.map(S=>D.jsx("button",{type:"button","data-filter":S.id,className:o===S.id?"is-active":"","aria-pressed":o===S.id,onClick:()=>l(S.id),children:a==="zh"?S.zh:S.en},S.id))}),D.jsx("div",{className:"portfolio-grid",children:y.map(S=>D.jsxs(Cv.button,{type:"button",className:"portfolio-tile","data-category":S.category,onClick:()=>v(S),whileHover:r?void 0:{y:-4},transition:{duration:.18},children:[D.jsx("figure",{children:D.jsx("img",{src:S.cover,alt:"",loading:"eager"})}),D.jsxs("div",{className:"portfolio-tile-copy",children:[D.jsx("small",{children:S.label}),D.jsx("h3",{children:S.title}),D.jsx("p",{children:S.summary}),D.jsx("div",{children:S.tags.slice(0,4).map(C=>D.jsx("span",{children:C},C))})]})]},`${S.kind}-${S.id}`))}),D.jsx("dialog",{ref:h,className:`project-dialog unified-dialog ${u?.kind==="visual"?"visual-work-dialog":""}`,onCancel:S=>{S.preventDefault(),b()},onClose:b,onClick:S=>{S.target===S.currentTarget&&b()},children:u&&D.jsx(QA,{item:u,locale:a,close:b})})]})}function QA({item:a,locale:r,close:o}){const l=Ev()??!1;return D.jsxs(Cv.article,{initial:l?!1:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.2},children:[D.jsx("button",{className:"project-dialog-close",type:"button",onClick:o,"aria-label":r==="zh"?"关闭项目详情":"Close project details",children:"×"}),D.jsxs("div",{className:"project-dialog-heading","data-work-id":a.id,children:[D.jsxs("p",{children:[a.label," · ",a.tags.join(" · ")]}),D.jsx("h2",{children:a.title}),D.jsx("p",{children:a.summary})]}),a.kind==="repository"&&D.jsx(ZA,{work:a.value,locale:r}),a.kind==="visual"&&D.jsx(JA,{work:a.value,locale:r}),a.kind==="project"&&D.jsx(WA,{project:a.value,locale:r})]},`${a.kind}-${a.id}`)}function ZA({work:a,locale:r}){const o=a.images?.filter(u=>u.src!==a.cover)??[],l=a.id==="noemancer"||a.id==="artflow-agent"?"cover":"contain";return D.jsxs(D.Fragment,{children:[a.repositoryUrl&&D.jsxs("a",{className:"project-dialog-source",href:a.repositoryUrl,target:"_blank",rel:"noreferrer",children:[D.jsx("span",{children:r==="zh"?"查看 GitHub 仓库":"View GitHub repository"}),D.jsx("span",{"aria-hidden":"true",children:"↗"})]}),D.jsx($A,{src:a.cover,alt:`${a.title} ${r==="zh"?"项目画面":"project view"}`,fit:l}),D.jsx(od,{markdown:Nt(a.story,r),title:a.title}),o.length>0&&D.jsx(eE,{fit:"contain",images:o.map(u=>({src:u.src,alt:Nt(u.alt,r),caption:Nt(u.alt,r)}))})]})}function JA({work:a,locale:r}){return D.jsxs(D.Fragment,{children:[D.jsxs("a",{className:"project-dialog-source",href:a.artstationUrl,target:"_blank",rel:"noreferrer",children:[D.jsx("span",{children:r==="zh"?"查看原始 ArtStation 项目":"View the original ArtStation project"}),D.jsx("span",{"aria-hidden":"true",children:"↗"})]}),a.youtubeId&&D.jsx(Mv,{youtubeId:a.youtubeId,title:Nt(a.title,r)}),D.jsx(od,{markdown:HA[a.id][r],title:Nt(a.title,r)})]})}function WA({project:a,locale:r}){return D.jsxs(D.Fragment,{children:[a.link&&D.jsxs("a",{className:"project-dialog-source",href:a.link.href,target:"_blank",rel:"noreferrer",children:[D.jsx("span",{children:Yn(a.link.label,r)}),D.jsx("span",{"aria-hidden":"true",children:"↗"})]}),a.youtubeId&&D.jsx(Mv,{youtubeId:a.youtubeId,title:a.title}),jg[a.id]?D.jsx(od,{markdown:jg[a.id][r],title:a.title}):a.story&&D.jsxs("section",{className:"project-dialog-story",children:[D.jsx("h3",{children:Yn(a.story.title,r)}),D.jsx("p",{children:Yn(a.story.intro,r)}),D.jsx("h4",{children:r==="zh"?"玩法与特色":"Gameplay & Features"}),D.jsx("dl",{children:a.story.features.map(o=>D.jsxs("div",{children:[D.jsx("dt",{children:Yn(o.title,r)}),D.jsx("dd",{children:Yn(o.detail,r)})]},o.title.en))}),a.story.note&&D.jsx("p",{className:"project-dialog-note",children:Yn(a.story.note,r)})]})]})}function $A({src:a,alt:r,fit:o}){return D.jsx("figure",{className:`project-dialog-lead-media ${o==="contain"?"is-contain":""}`,children:D.jsx("img",{src:a,alt:r})})}function Mv({youtubeId:a,title:r}){return D.jsx("div",{className:"project-dialog-video",children:D.jsx("iframe",{src:`https://www.youtube-nocookie.com/embed/${a}?rel=0`,title:`${r} demo video`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})})}function eE({images:a,fit:r="cover"}){return D.jsx("div",{className:`project-dialog-gallery ${r==="contain"?"is-contain":""}`,children:a.map(o=>D.jsxs("figure",{children:[D.jsx("img",{src:o.src,alt:o.alt,style:{objectPosition:o.position},loading:"lazy"}),o.caption&&D.jsx("figcaption",{children:o.caption})]},o.src))})}function tE(){const{locale:a,copy:r}=fi();return D.jsxs("div",{className:"site","data-locale":a,children:[D.jsx("a",{className:"skip-link",href:"#main",children:a==="zh"?"跳到主要内容":"Skip to main content"}),D.jsx("span",{id:"top"}),D.jsx(h1,{}),D.jsxs("main",{id:"main",children:[D.jsx(f1,{}),D.jsx(KA,{})]}),D.jsx(u1,{}),D.jsx("div",{className:"locale-status sr-only","aria-live":"polite",children:r.language.changed})]})}const nE={en:{meta:{title:"Lucas Shen | AI Tool-Pipeline TA & Engine Tools",description:"Games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines by Lucas Shen."},nav:{work:"Projects",practice:"Experience",links:"Links",aria:"Primary navigation"},language:{label:"Language",english:"English",changed:"Language changed to English."},hero:{role:"AI Tool-Pipeline TA & Engine Tool Development",primaryAction:"Selected projects"},personal:{intro:"My work spans games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines, with running builds, project captures, and implementation details.",storyAction:"About me",aboutTitle:"About me",aboutBody:["I’m Lucas, a technical artist from China. My path crosses industrial engineering, game development, realtime graphics, and production tools. That mix helps me move between an artist’s problem and the system behind it.","I enjoy reverse-engineering workflows, turning repeated work into tools, and testing where AI is genuinely useful. Outside the toolchain, I keep learning through games, animation, music, graphics experiments, and public documentation."],traits:[{title:"What I work on",detail:"DCC tools, AI workflows, realtime graphics, games, and animation."},{title:"How I learn",detail:"Build a real workflow, inspect the evidence, then improve the system."},{title:"How I collaborate",detail:"Keep creative decisions human and make repeated production steps dependable."}],linksTitle:"Public channels",linksIntro:"Code, visual work, demos, and ongoing notes live across these profiles.",social:[{name:"GitHub",detail:"Code, tools, and public engineering evidence.",href:"https://github.com/Ubik42",mark:"GH"},{name:"Visual work",detail:"Realtime graphics, materials, shaders, rigging, and procedural work.",href:"#visual-work",mark:"TA"},{name:"Bilibili",detail:"Tool demos, tutorials, and longer videos.",href:"https://space.bilibili.com/12367861?spm_id_from=333.1007.0.0",mark:"Bi"},{name:"Xiaohongshu",detail:"Notes, resources, and everyday discoveries.",href:"https://www.xiaohongshu.com/user/profile/670526b2000000001e001891",mark:"RED"}]},practice:{title:"Experience and education",items:[{period:"2026.03 – 2026.08",title:"AI Tool Technical Artist Intern",place:"Tencent Photon",detail:"Built AI-assisted production tools across DCC, engine, and design workflows, with explicit execution and review boundaries."},{period:"2025.08 – 2027.05",title:"M.S. in EAE, Technical Art",place:"University of Utah",detail:"Studying realtime graphics, tools, pipelines, and collaborative game production in Entertainment Arts and Engineering."},{period:"2020.09 – 2024.06",title:"B.S. in Industrial Engineering",place:"Shanghai Jiao Tong University",detail:"Built a systems and optimization foundation, then applied it through game systems, UE5 client work, and industrial digital twins."}]},footer:{copyright:"Lucas (Yuyan) Shen / 沈裕焱"}},zh:{meta:{title:"沈裕焱 | AI 工具管线 TA & 引擎工具开发",description:"沈裕焱的游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线作品集。"},nav:{work:"作品",practice:"经历",links:"链接",aria:"主导航"},language:{label:"语言",english:"English",changed:"语言已切换为中文。"},hero:{role:"AI 工具管线 TA & 引擎工具开发",primaryAction:"项目作品"},personal:{intro:"作品覆盖游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线，包含运行画面、项目素材和具体实现。",storyAction:"关于我",aboutTitle:"关于我",aboutBody:["我是沈裕焱，一名来自中国的技术美术。我的经历横跨工业工程、游戏开发、实时图形和生产工具，因此我习惯同时理解创作者遇到的问题，以及问题背后的代码与系统。","我喜欢拆解工作流，把重复劳动做成工具，也会认真验证 AI 适合参与哪一步。工具之外，我持续从游戏、动画、音乐、图形实验和公开文档中学习。"],traits:[{title:"我在做什么",detail:"DCC 工具、AI 工作流、实时图形、游戏与动画。"},{title:"我的学习方式",detail:"先做出真实工作流，检查证据，再改进整个系统。"},{title:"我的协作方式",detail:"让创作决定留给人，让重复的生产环节变得可靠。"}],linksTitle:"公开渠道",linksIntro:"代码、视觉作品、演示和持续记录分布在这些公开主页中。",social:[{name:"GitHub",detail:"代码、工具与公开工程证据。",href:"https://github.com/Ubik42",mark:"GH"},{name:"视觉作品",detail:"实时场景、材质、Shader、绑定与程序化内容。",href:"#visual-work",mark:"TA"},{name:"哔哩哔哩",detail:"工具演示、教程和长视频。",href:"https://space.bilibili.com/12367861?spm_id_from=333.1007.0.0",mark:"Bi"},{name:"小红书",detail:"笔记、资源和日常发现。",href:"https://www.xiaohongshu.com/user/profile/670526b2000000001e001891",mark:"RED"}]},practice:{title:"经历与教育",items:[{period:"2026.03 – 2026.08",title:"AI 工具技术美术实习生",place:"腾讯光子",detail:"围绕 DCC、引擎与设计流程开发 AI 辅助美术生产工具，覆盖工具接入、执行边界与人工审查。"},{period:"2025.08 – 2027.05",title:"EAE 技术美术硕士",place:"犹他大学",detail:"在 Entertainment Arts and Engineering 项目中学习实时图形、工具、管线与协作式游戏生产。"},{period:"2020.09 – 2024.06",title:"工业工程学士",place:"上海交通大学",detail:"建立优化与系统方法基础，并逐步扩展到游戏系统、UE5 客户端与工业数字孪生开发。"}]},footer:{copyright:"Lucas (Yuyan) Shen / 沈裕焱"}}},Dv="portfolio.locale.v2";function aE(){try{const a=window.localStorage.getItem(Dv);if(a==="en"||a==="zh")return a}catch{}return"zh"}function iE(a){const r=document.querySelector('meta[name="description"]');r&&(r.content=a)}function rE({children:a}){const[r,o]=J.useState(aE),l=nE[r];J.useEffect(()=>{document.documentElement.lang=r==="zh"?"zh-CN":"en",document.title=l.meta.title,iE(l.meta.description);try{window.localStorage.setItem(Dv,r)}catch{}},[l.meta.description,l.meta.title,r]);const u=J.useMemo(()=>({locale:r,copy:l,setLocale(f){J.startTransition(()=>o(f))}}),[l,r]);return D.jsx(Gg,{value:u,children:a})}c1.createRoot(document.getElementById("root")).render(D.jsx(J.StrictMode,{children:D.jsx(rE,{children:D.jsx(tE,{})})}));
//# sourceMappingURL=index-DfZnj6Yo-portfolio-refresh.js.map
