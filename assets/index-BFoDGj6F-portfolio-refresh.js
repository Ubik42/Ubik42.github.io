(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function l(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(u){if(u.ep)return;u.ep=!0;const m=l(u);fetch(u.href,m)}})();var Hc={exports:{}},dr={};var mp;function p1(){if(mp)return dr;mp=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(s,u,m){var h=null;if(m!==void 0&&(h=""+m),u.key!==void 0&&(h=""+u.key),"key"in u){m={};for(var p in u)p!=="key"&&(m[p]=u[p])}else m=u;return u=m.ref,{$$typeof:a,type:s,key:h,ref:u!==void 0?u:null,props:m}}return dr.Fragment=i,dr.jsx=l,dr.jsxs=l,dr}var fp;function g1(){return fp||(fp=1,Hc.exports=p1()),Hc.exports}var f=g1(),Gc={exports:{}},ae={};var pp;function y1(){if(pp)return ae;pp=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),w=Symbol.iterator;function k(T){return T===null||typeof T!="object"?null:(T=w&&T[w]||T["@@iterator"],typeof T=="function"?T:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,N={};function _(T,V,q){this.props=T,this.context=V,this.refs=N,this.updater=q||z}_.prototype.isReactComponent={},_.prototype.setState=function(T,V){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,V,"setState")},_.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function R(){}R.prototype=_.prototype;function D(T,V,q){this.props=T,this.context=V,this.refs=N,this.updater=q||z}var G=D.prototype=new R;G.constructor=D,H(G,_.prototype),G.isPureReactComponent=!0;var W=Array.isArray;function le(){}var K={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function Te(T,V,q){var Z=q.ref;return{$$typeof:a,type:T,key:V,ref:Z!==void 0?Z:null,props:q}}function ne(T,V){return Te(T.type,V,T.props)}function ve(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function we(T){var V={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(q){return V[q]})}var rt=/\/+/g;function Ne(T,V){return typeof T=="object"&&T!==null&&T.key!=null?we(""+T.key):V.toString(36)}function Oe(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(le,le):(T.status="pending",T.then(function(V){T.status==="pending"&&(T.status="fulfilled",T.value=V)},function(V){T.status==="pending"&&(T.status="rejected",T.reason=V)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function P(T,V,q,Z,ie){var ce=typeof T;(ce==="undefined"||ce==="boolean")&&(T=null);var Se=!1;if(T===null)Se=!0;else switch(ce){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(T.$$typeof){case a:case i:Se=!0;break;case b:return Se=T._init,P(Se(T._payload),V,q,Z,ie)}}if(Se)return ie=ie(T),Se=Z===""?"."+Ne(T,0):Z,W(ie)?(q="",Se!=null&&(q=Se.replace(rt,"$&/")+"/"),P(ie,V,q,"",function(vi){return vi})):ie!=null&&(ve(ie)&&(ie=ne(ie,q+(ie.key==null||T&&T.key===ie.key?"":(""+ie.key).replace(rt,"$&/")+"/")+Se)),V.push(ie)),1;Se=0;var st=Z===""?".":Z+":";if(W(T))for(var Ve=0;Ve<T.length;Ve++)Z=T[Ve],ce=st+Ne(Z,Ve),Se+=P(Z,V,q,ce,ie);else if(Ve=k(T),typeof Ve=="function")for(T=Ve.call(T),Ve=0;!(Z=T.next()).done;)Z=Z.value,ce=st+Ne(Z,Ve++),Se+=P(Z,V,q,ce,ie);else if(ce==="object"){if(typeof T.then=="function")return P(Oe(T),V,q,Z,ie);throw V=String(T),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return Se}function I(T,V,q){if(T==null)return T;var Z=[],ie=0;return P(T,Z,"","",function(ce){return V.call(q,ce,ie++)}),Z}function X(T){if(T._status===-1){var V=T._result;V=V(),V.then(function(q){(T._status===0||T._status===-1)&&(T._status=1,T._result=q)},function(q){(T._status===0||T._status===-1)&&(T._status=2,T._result=q)}),T._status===-1&&(T._status=0,T._result=V)}if(T._status===1)return T._result.default;throw T._result}var se=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},fe={map:I,forEach:function(T,V,q){I(T,function(){V.apply(this,arguments)},q)},count:function(T){var V=0;return I(T,function(){V++}),V},toArray:function(T){return I(T,function(V){return V})||[]},only:function(T){if(!ve(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return ae.Activity=S,ae.Children=fe,ae.Component=_,ae.Fragment=l,ae.Profiler=u,ae.PureComponent=D,ae.StrictMode=s,ae.Suspense=v,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,ae.__COMPILER_RUNTIME={__proto__:null,c:function(T){return K.H.useMemoCache(T)}},ae.cache=function(T){return function(){return T.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(T,V,q){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var Z=H({},T.props),ie=T.key;if(V!=null)for(ce in V.key!==void 0&&(ie=""+V.key),V)!$.call(V,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&V.ref===void 0||(Z[ce]=V[ce]);var ce=arguments.length-2;if(ce===1)Z.children=q;else if(1<ce){for(var Se=Array(ce),st=0;st<ce;st++)Se[st]=arguments[st+2];Z.children=Se}return Te(T.type,ie,Z)},ae.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:m,_context:T},T},ae.createElement=function(T,V,q){var Z,ie={},ce=null;if(V!=null)for(Z in V.key!==void 0&&(ce=""+V.key),V)$.call(V,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ie[Z]=V[Z]);var Se=arguments.length-2;if(Se===1)ie.children=q;else if(1<Se){for(var st=Array(Se),Ve=0;Ve<Se;Ve++)st[Ve]=arguments[Ve+2];ie.children=st}if(T&&T.defaultProps)for(Z in Se=T.defaultProps,Se)ie[Z]===void 0&&(ie[Z]=Se[Z]);return Te(T,ce,ie)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(T){return{$$typeof:p,render:T}},ae.isValidElement=ve,ae.lazy=function(T){return{$$typeof:b,_payload:{_status:-1,_result:T},_init:X}},ae.memo=function(T,V){return{$$typeof:g,type:T,compare:V===void 0?null:V}},ae.startTransition=function(T){var V=K.T,q={};K.T=q;try{var Z=T(),ie=K.S;ie!==null&&ie(q,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(le,se)}catch(ce){se(ce)}finally{V!==null&&q.types!==null&&(V.types=q.types),K.T=V}},ae.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},ae.use=function(T){return K.H.use(T)},ae.useActionState=function(T,V,q){return K.H.useActionState(T,V,q)},ae.useCallback=function(T,V){return K.H.useCallback(T,V)},ae.useContext=function(T){return K.H.useContext(T)},ae.useDebugValue=function(){},ae.useDeferredValue=function(T,V){return K.H.useDeferredValue(T,V)},ae.useEffect=function(T,V){return K.H.useEffect(T,V)},ae.useEffectEvent=function(T){return K.H.useEffectEvent(T)},ae.useId=function(){return K.H.useId()},ae.useImperativeHandle=function(T,V,q){return K.H.useImperativeHandle(T,V,q)},ae.useInsertionEffect=function(T,V){return K.H.useInsertionEffect(T,V)},ae.useLayoutEffect=function(T,V){return K.H.useLayoutEffect(T,V)},ae.useMemo=function(T,V){return K.H.useMemo(T,V)},ae.useOptimistic=function(T,V){return K.H.useOptimistic(T,V)},ae.useReducer=function(T,V,q){return K.H.useReducer(T,V,q)},ae.useRef=function(T){return K.H.useRef(T)},ae.useState=function(T){return K.H.useState(T)},ae.useSyncExternalStore=function(T,V,q){return K.H.useSyncExternalStore(T,V,q)},ae.useTransition=function(){return K.H.useTransition()},ae.version="19.2.8",ae}var gp;function Bu(){return gp||(gp=1,Gc.exports=y1()),Gc.exports}var F=Bu(),Nc={exports:{}},hr={},_c={exports:{}},Ic={};var yp;function v1(){return yp||(yp=1,(function(a){function i(P,I){var X=P.length;P.push(I);e:for(;0<X;){var se=X-1>>>1,fe=P[se];if(0<u(fe,I))P[se]=I,P[X]=fe,X=se;else break e}}function l(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var I=P[0],X=P.pop();if(X!==I){P[0]=X;e:for(var se=0,fe=P.length,T=fe>>>1;se<T;){var V=2*(se+1)-1,q=P[V],Z=V+1,ie=P[Z];if(0>u(q,X))Z<fe&&0>u(ie,q)?(P[se]=ie,P[Z]=X,se=Z):(P[se]=q,P[V]=X,se=V);else if(Z<fe&&0>u(ie,X))P[se]=ie,P[Z]=X,se=Z;else break e}}return I}function u(P,I){var X=P.sortIndex-I.sortIndex;return X!==0?X:P.id-I.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;a.unstable_now=function(){return m.now()}}else{var h=Date,p=h.now();a.unstable_now=function(){return h.now()-p}}var v=[],g=[],b=1,S=null,w=3,k=!1,z=!1,H=!1,N=!1,_=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function G(P){for(var I=l(g);I!==null;){if(I.callback===null)s(g);else if(I.startTime<=P)s(g),I.sortIndex=I.expirationTime,i(v,I);else break;I=l(g)}}function W(P){if(H=!1,G(P),!z)if(l(v)!==null)z=!0,le||(le=!0,we());else{var I=l(g);I!==null&&Oe(W,I.startTime-P)}}var le=!1,K=-1,$=5,Te=-1;function ne(){return N?!0:!(a.unstable_now()-Te<$)}function ve(){if(N=!1,le){var P=a.unstable_now();Te=P;var I=!0;try{e:{z=!1,H&&(H=!1,R(K),K=-1),k=!0;var X=w;try{t:{for(G(P),S=l(v);S!==null&&!(S.expirationTime>P&&ne());){var se=S.callback;if(typeof se=="function"){S.callback=null,w=S.priorityLevel;var fe=se(S.expirationTime<=P);if(P=a.unstable_now(),typeof fe=="function"){S.callback=fe,G(P),I=!0;break t}S===l(v)&&s(v),G(P)}else s(v);S=l(v)}if(S!==null)I=!0;else{var T=l(g);T!==null&&Oe(W,T.startTime-P),I=!1}}break e}finally{S=null,w=X,k=!1}I=void 0}}finally{I?we():le=!1}}}var we;if(typeof D=="function")we=function(){D(ve)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Ne=rt.port2;rt.port1.onmessage=ve,we=function(){Ne.postMessage(null)}}else we=function(){_(ve,0)};function Oe(P,I){K=_(function(){P(a.unstable_now())},I)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(P){P.callback=null},a.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<P?Math.floor(1e3/P):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(P){switch(w){case 1:case 2:case 3:var I=3;break;default:I=w}var X=w;w=I;try{return P()}finally{w=X}},a.unstable_requestPaint=function(){N=!0},a.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var X=w;w=P;try{return I()}finally{w=X}},a.unstable_scheduleCallback=function(P,I,X){var se=a.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?se+X:se):X=se,P){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=X+fe,P={id:b++,callback:I,priorityLevel:P,startTime:X,expirationTime:fe,sortIndex:-1},X>se?(P.sortIndex=X,i(g,P),l(v)===null&&P===l(g)&&(H?(R(K),K=-1):H=!0,Oe(W,X-se))):(P.sortIndex=fe,i(v,P),z||k||(z=!0,le||(le=!0,we()))),P},a.unstable_shouldYield=ne,a.unstable_wrapCallback=function(P){var I=w;return function(){var X=w;w=I;try{return P.apply(this,arguments)}finally{w=X}}}})(Ic)),Ic}var vp;function b1(){return vp||(vp=1,_c.exports=v1()),_c.exports}var qc={exports:{}},it={};var bp;function S1(){if(bp)return it;bp=1;var a=Bu();function i(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)g+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function m(v,g,b){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:S==null?null:""+S,children:v,containerInfo:g,implementation:b}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,it.createPortal=function(v,g){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return m(v,g,null,b)},it.flushSync=function(v){var g=h.T,b=s.p;try{if(h.T=null,s.p=2,v)return v()}finally{h.T=g,s.p=b,s.d.f()}},it.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(v,g))},it.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},it.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var b=g.as,S=p(b,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;b==="style"?s.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:k}):b==="script"&&s.d.X(v,{crossOrigin:S,integrity:w,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},it.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var b=p(g.as,g.crossOrigin);s.d.M(v,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(v)},it.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var b=g.as,S=p(b,g.crossOrigin);s.d.L(v,b,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},it.preloadModule=function(v,g){if(typeof v=="string")if(g){var b=p(g.as,g.crossOrigin);s.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(v)},it.requestFormReset=function(v){s.d.r(v)},it.unstable_batchedUpdates=function(v,g){return v(g)},it.useFormState=function(v,g,b){return h.H.useFormState(v,g,b)},it.useFormStatus=function(){return h.H.useHostTransitionStatus()},it.version="19.2.8",it}var Sp;function Zg(){if(Sp)return qc.exports;Sp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),qc.exports=S1(),qc.exports}var wp;function w1(){if(wp)return hr;wp=1;var a=b1(),i=Bu(),l=Zg();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(m(e)!==e)throw Error(s(188))}function g(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var c=o.alternate;if(c===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===n)return v(o),e;if(c===r)return v(o),t;c=c.sibling}throw Error(s(188))}if(n.return!==r.return)n=o,r=c;else{for(var d=!1,y=o.child;y;){if(y===n){d=!0,n=o,r=c;break}if(y===r){d=!0,r=o,n=c;break}y=y.sibling}if(!d){for(y=c.child;y;){if(y===n){d=!0,n=c,r=o;break}if(y===r){d=!0,r=c,n=o;break}y=y.sibling}if(!d)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,w=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),D=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),Te=Symbol.for("react.activity"),ne=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function we(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function Ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case _:return"Profiler";case N:return"StrictMode";case W:return"Suspense";case le:return"SuspenseList";case Te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case D:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case G:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:Ne(e.type)||"Memo";case $:t=e._payload,e=e._init;try{return Ne(e(t))}catch{}}return null}var Oe=Array.isArray,P=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},se=[],fe=-1;function T(e){return{current:e}}function V(e){0>fe||(e.current=se[fe],se[fe]=null,fe--)}function q(e,t){fe++,se[fe]=e.current,e.current=t}var Z=T(null),ie=T(null),ce=T(null),Se=T(null);function st(e,t){switch(q(ce,t),q(ie,e),q(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Lf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Lf(t),e=Of(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(Z),q(Z,e)}function Ve(){V(Z),V(ie),V(ce)}function vi(e){e.memoizedState!==null&&q(Se,e);var t=Z.current,n=Of(t,e.type);t!==n&&(q(ie,e),q(Z,n))}function zr(e){ie.current===e&&(V(Z),V(ie)),Se.current===e&&(V(Se),or._currentValue=X)}var wo,dd;function $n(e){if(wo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wo=t&&t[1]||"",dd=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wo+e+dd}var Ao=!1;function Co(e,t){if(!e||Ao)return"";Ao=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(j){var M=j}Reflect.construct(e,[],O)}else{try{O.call()}catch(j){M=j}e.call(O.prototype)}}else{try{throw Error()}catch(j){M=j}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(j){if(j&&M&&typeof j.stack=="string")return[j.stack,M.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),d=c[0],y=c[1];if(d&&y){var A=d.split(`
`),U=y.split(`
`);for(o=r=0;r<A.length&&!A[r].includes("DetermineComponentFrameRoot");)r++;for(;o<U.length&&!U[o].includes("DetermineComponentFrameRoot");)o++;if(r===A.length||o===U.length)for(r=A.length-1,o=U.length-1;1<=r&&0<=o&&A[r]!==U[o];)o--;for(;1<=r&&0<=o;r--,o--)if(A[r]!==U[o]){if(r!==1||o!==1)do if(r--,o--,0>o||A[r]!==U[o]){var B=`
`+A[r].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=r&&0<=o);break}}}finally{Ao=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?$n(n):""}function X0(e,t){switch(e.tag){case 26:case 27:case 5:return $n(e.type);case 16:return $n("Lazy");case 13:return e.child!==t&&t!==null?$n("Suspense Fallback"):$n("Suspense");case 19:return $n("SuspenseList");case 0:case 15:return Co(e.type,!1);case 11:return Co(e.type.render,!1);case 1:return Co(e.type,!0);case 31:return $n("Activity");default:return""}}function hd(e){try{var t="",n=null;do t+=X0(e,n),n=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var To=Object.prototype.hasOwnProperty,xo=a.unstable_scheduleCallback,Eo=a.unstable_cancelCallback,Y0=a.unstable_shouldYield,K0=a.unstable_requestPaint,yt=a.unstable_now,Q0=a.unstable_getCurrentPriorityLevel,md=a.unstable_ImmediatePriority,fd=a.unstable_UserBlockingPriority,Mr=a.unstable_NormalPriority,Z0=a.unstable_LowPriority,pd=a.unstable_IdlePriority,W0=a.log,J0=a.unstable_setDisableYieldValue,bi=null,vt=null;function Cn(e){if(typeof W0=="function"&&J0(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(bi,e)}catch{}}var bt=Math.clz32?Math.clz32:tv,$0=Math.log,ev=Math.LN2;function tv(e){return e>>>=0,e===0?32:31-($0(e)/ev|0)|0}var Dr=256,Rr=262144,jr=4194304;function ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function kr(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var o=0,c=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var y=r&134217727;return y!==0?(r=y&~c,r!==0?o=ea(r):(d&=y,d!==0?o=ea(d):n||(n=y&~e,n!==0&&(o=ea(n))))):(y=r&~c,y!==0?o=ea(y):d!==0?o=ea(d):n||(n=r&~e,n!==0&&(o=ea(n)))),o===0?0:t!==0&&t!==o&&(t&c)===0&&(c=o&-o,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:o}function Si(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nv(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gd(){var e=jr;return jr<<=1,(jr&62914560)===0&&(jr=4194304),e}function Uo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function av(e,t,n,r,o,c){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,A=e.expirationTimes,U=e.hiddenUpdates;for(n=d&~n;0<n;){var B=31-bt(n),O=1<<B;y[B]=0,A[B]=-1;var M=U[B];if(M!==null)for(U[B]=null,B=0;B<M.length;B++){var j=M[B];j!==null&&(j.lane&=-536870913)}n&=~O}r!==0&&yd(e,r,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(d&~t))}function yd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-bt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function vd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}function bd(e,t){var n=t&-t;return n=(n&42)!==0?1:zo(n),(n&(e.suspendedLanes|t))!==0?0:n}function zo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Sd(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:sp(e.type))}function wd(e,t){var n=I.p;try{return I.p=e,t()}finally{I.p=n}}var Tn=Math.random().toString(36).slice(2),We="__reactFiber$"+Tn,ut="__reactProps$"+Tn,Ta="__reactContainer$"+Tn,Do="__reactEvents$"+Tn,iv="__reactListeners$"+Tn,rv="__reactHandles$"+Tn,Ad="__reactResources$"+Tn,Ai="__reactMarker$"+Tn;function Ro(e){delete e[We],delete e[ut],delete e[Do],delete e[iv],delete e[rv]}function xa(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ta]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qf(e);e!==null;){if(n=e[We])return n;e=qf(e)}return t}e=n,n=e.parentNode}return null}function Ea(e){if(e=e[We]||e[Ta]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ci(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ua(e){var t=e[Ad];return t||(t=e[Ad]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[Ai]=!0}var Cd=new Set,Td={};function ta(e,t){za(e,t),za(e+"Capture",t)}function za(e,t){for(Td[e]=t,e=0;e<t.length;e++)Cd.add(t[e])}var sv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xd={},Ed={};function ov(e){return To.call(Ed,e)?!0:To.call(xd,e)?!1:sv.test(e)?Ed[e]=!0:(xd[e]=!0,!1)}function Pr(e,t,n){if(ov(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Br(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function tn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ud(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lv(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(d){n=""+d,c.call(this,d)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jo(e){if(!e._valueTracker){var t=Ud(e)?"checked":"value";e._valueTracker=lv(e,t,""+e[t])}}function zd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ud(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var cv=/[\n"\\]/g;function Mt(e){return e.replace(cv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ko(e,t,n,r,o,c,d,y){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+zt(t)):e.value!==""+zt(t)&&(e.value=""+zt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Po(e,d,zt(t)):n!=null?Po(e,d,zt(n)):r!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+zt(y):e.removeAttribute("name")}function Md(e,t,n,r,o,c,d,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){jo(e);return}n=n!=null?""+zt(n):"",t=t!=null?""+zt(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}r=r??o,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=y?e.checked:!!r,e.defaultChecked=!!r,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),jo(e)}function Po(e,t,n){t==="number"&&Lr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ma(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Dd(e,t,n){if(t!=null&&(t=""+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+zt(n):""}function Rd(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(Oe(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r),jo(e)}function Da(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var uv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jd(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||uv.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function kd(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var o in t)r=t[o],t.hasOwnProperty(o)&&n[o]!==r&&jd(e,o,r)}else for(var c in t)t.hasOwnProperty(c)&&jd(e,c,t[c])}function Bo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Or(e){return hv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function nn(){}var Lo=null;function Oo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ra=null,ja=null;function Pd(e){var t=Ea(e);if(t&&(e=t.stateNode)){var n=e[ut]||null;e:switch(e=t.stateNode,t.type){case"input":if(ko(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=r[ut]||null;if(!o)throw Error(s(90));ko(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&zd(r)}break e;case"textarea":Dd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ma(e,!!n.multiple,t,!1)}}}var Vo=!1;function Bd(e,t,n){if(Vo)return e(t,n);Vo=!0;try{var r=e(t);return r}finally{if(Vo=!1,(Ra!==null||ja!==null)&&(Ts(),Ra&&(t=Ra,e=ja,ja=Ra=null,Pd(t),e)))for(t=0;t<e.length;t++)Pd(e[t])}}function Ti(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ut]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ho=!1;if(an)try{var xi={};Object.defineProperty(xi,"passive",{get:function(){Ho=!0}}),window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{Ho=!1}var xn=null,Go=null,Vr=null;function Ld(){if(Vr)return Vr;var e,t=Go,n=t.length,r,o="value"in xn?xn.value:xn.textContent,c=o.length;for(e=0;e<n&&t[e]===o[e];e++);var d=n-e;for(r=1;r<=d&&t[n-r]===o[c-r];r++);return Vr=o.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gr(){return!0}function Od(){return!1}function dt(e){function t(n,r,o,c,d){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Gr:Od,this.isPropagationStopped=Od,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gr)},persist:function(){},isPersistent:Gr}),t}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nr=dt(na),Ei=S({},na,{view:0,detail:0}),mv=dt(Ei),No,_o,Ui,_r=S({},Ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ui&&(Ui&&e.type==="mousemove"?(No=e.screenX-Ui.screenX,_o=e.screenY-Ui.screenY):_o=No=0,Ui=e),No)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),Vd=dt(_r),fv=S({},_r,{dataTransfer:0}),pv=dt(fv),gv=S({},Ei,{relatedTarget:0}),Io=dt(gv),yv=S({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),vv=dt(yv),bv=S({},na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sv=dt(bv),wv=S({},na,{data:0}),Hd=dt(wv),Av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tv[e])?!!t[e]:!1}function qo(){return xv}var Ev=S({},Ei,{key:function(e){if(e.key){var t=Av[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qo,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uv=dt(Ev),zv=S({},_r,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gd=dt(zv),Mv=S({},Ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qo}),Dv=dt(Mv),Rv=S({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),jv=dt(Rv),kv=S({},_r,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pv=dt(kv),Bv=S({},na,{newState:0,oldState:0}),Lv=dt(Bv),Ov=[9,13,27,32],Fo=an&&"CompositionEvent"in window,zi=null;an&&"documentMode"in document&&(zi=document.documentMode);var Vv=an&&"TextEvent"in window&&!zi,Nd=an&&(!Fo||zi&&8<zi&&11>=zi),_d=" ",Id=!1;function qd(e,t){switch(e){case"keyup":return Ov.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ka=!1;function Hv(e,t){switch(e){case"compositionend":return Fd(t);case"keypress":return t.which!==32?null:(Id=!0,_d);case"textInput":return e=t.data,e===_d&&Id?null:e;default:return null}}function Gv(e,t){if(ka)return e==="compositionend"||!Fo&&qd(e,t)?(e=Ld(),Vr=Go=xn=null,ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nd&&t.locale!=="ko"?null:t.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nv[e.type]:t==="textarea"}function Yd(e,t,n,r){Ra?ja?ja.push(r):ja=[r]:Ra=r,t=Rs(t,"onChange"),0<t.length&&(n=new Nr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mi=null,Di=null;function _v(e){Df(e,0)}function Ir(e){var t=Ci(e);if(zd(t))return e}function Kd(e,t){if(e==="change")return t}var Qd=!1;if(an){var Xo;if(an){var Yo="oninput"in document;if(!Yo){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),Yo=typeof Zd.oninput=="function"}Xo=Yo}else Xo=!1;Qd=Xo&&(!document.documentMode||9<document.documentMode)}function Wd(){Mi&&(Mi.detachEvent("onpropertychange",Jd),Di=Mi=null)}function Jd(e){if(e.propertyName==="value"&&Ir(Di)){var t=[];Yd(t,Di,e,Oo(e)),Bd(_v,t)}}function Iv(e,t,n){e==="focusin"?(Wd(),Mi=t,Di=n,Mi.attachEvent("onpropertychange",Jd)):e==="focusout"&&Wd()}function qv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ir(Di)}function Fv(e,t){if(e==="click")return Ir(t)}function Xv(e,t){if(e==="input"||e==="change")return Ir(t)}function Yv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:Yv;function Ri(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!To.call(t,o)||!St(e[o],t[o]))return!1}return!0}function $d(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eh(e,t){var n=$d(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$d(n)}}function th(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?th(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Lr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lr(e.document)}return t}function Ko(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Kv=an&&"documentMode"in document&&11>=document.documentMode,Pa=null,Qo=null,ji=null,Zo=!1;function ah(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zo||Pa==null||Pa!==Lr(r)||(r=Pa,"selectionStart"in r&&Ko(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ji&&Ri(ji,r)||(ji=r,r=Rs(Qo,"onSelect"),0<r.length&&(t=new Nr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pa)))}function aa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ba={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionrun:aa("Transition","TransitionRun"),transitionstart:aa("Transition","TransitionStart"),transitioncancel:aa("Transition","TransitionCancel"),transitionend:aa("Transition","TransitionEnd")},Wo={},ih={};an&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete Ba.animationend.animation,delete Ba.animationiteration.animation,delete Ba.animationstart.animation),"TransitionEvent"in window||delete Ba.transitionend.transition);function ia(e){if(Wo[e])return Wo[e];if(!Ba[e])return e;var t=Ba[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ih)return Wo[e]=t[n];return e}var rh=ia("animationend"),sh=ia("animationiteration"),oh=ia("animationstart"),Qv=ia("transitionrun"),Zv=ia("transitionstart"),Wv=ia("transitioncancel"),lh=ia("transitionend"),ch=new Map,Jo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jo.push("scrollEnd");function Nt(e,t){ch.set(e,t),ta(t,[e])}var qr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Dt=[],La=0,$o=0;function Fr(){for(var e=La,t=$o=La=0;t<e;){var n=Dt[t];Dt[t++]=null;var r=Dt[t];Dt[t++]=null;var o=Dt[t];Dt[t++]=null;var c=Dt[t];if(Dt[t++]=null,r!==null&&o!==null){var d=r.pending;d===null?o.next=o:(o.next=d.next,d.next=o),r.pending=o}c!==0&&uh(n,o,c)}}function Xr(e,t,n,r){Dt[La++]=e,Dt[La++]=t,Dt[La++]=n,Dt[La++]=r,$o|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function el(e,t,n,r){return Xr(e,t,n,r),Yr(e)}function ra(e,t){return Xr(e,null,null,t),Yr(e)}function uh(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var o=!1,c=e.return;c!==null;)c.childLanes|=n,r=c.alternate,r!==null&&(r.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&t!==null&&(o=31-bt(n),e=c.hiddenUpdates,r=e[o],r===null?e[o]=[t]:r.push(t),t.lane=n|536870912),c):null}function Yr(e){if(50<er)throw er=0,cc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Oa={};function Jv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,r){return new Jv(e,t,n,r)}function tl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rn(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function dh(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Kr(e,t,n,r,o,c){var d=0;if(r=e,typeof e=="function")tl(e)&&(d=1);else if(typeof e=="string")d=a1(e,n,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Te:return e=wt(31,n,t,o),e.elementType=Te,e.lanes=c,e;case H:return sa(n.children,o,c,t);case N:d=8,o|=24;break;case _:return e=wt(12,n,t,o|2),e.elementType=_,e.lanes=c,e;case W:return e=wt(13,n,t,o),e.elementType=W,e.lanes=c,e;case le:return e=wt(19,n,t,o),e.elementType=le,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:d=10;break e;case R:d=9;break e;case G:d=11;break e;case K:d=14;break e;case $:d=16,r=null;break e}d=29,n=Error(s(130,e===null?"null":typeof e,"")),r=null}return t=wt(d,n,t,o),t.elementType=e,t.type=r,t.lanes=c,t}function sa(e,t,n,r){return e=wt(7,e,r,t),e.lanes=n,e}function nl(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function hh(e){var t=wt(18,null,null,0);return t.stateNode=e,t}function al(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mh=new WeakMap;function Rt(e,t){if(typeof e=="object"&&e!==null){var n=mh.get(e);return n!==void 0?n:(t={value:e,source:t,stack:hd(t)},mh.set(e,t),t)}return{value:e,source:t,stack:hd(t)}}var Va=[],Ha=0,Qr=null,ki=0,jt=[],kt=0,En=null,Yt=1,Kt="";function sn(e,t){Va[Ha++]=ki,Va[Ha++]=Qr,Qr=e,ki=t}function fh(e,t,n){jt[kt++]=Yt,jt[kt++]=Kt,jt[kt++]=En,En=e;var r=Yt;e=Kt;var o=32-bt(r)-1;r&=~(1<<o),n+=1;var c=32-bt(t)+o;if(30<c){var d=o-o%5;c=(r&(1<<d)-1).toString(32),r>>=d,o-=d,Yt=1<<32-bt(t)+o|n<<o|r,Kt=c+e}else Yt=1<<c|n<<o|r,Kt=e}function il(e){e.return!==null&&(sn(e,1),fh(e,1,0))}function rl(e){for(;e===Qr;)Qr=Va[--Ha],Va[Ha]=null,ki=Va[--Ha],Va[Ha]=null;for(;e===En;)En=jt[--kt],jt[kt]=null,Kt=jt[--kt],jt[kt]=null,Yt=jt[--kt],jt[kt]=null}function ph(e,t){jt[kt++]=Yt,jt[kt++]=Kt,jt[kt++]=En,Yt=t.id,Kt=t.overflow,En=e}var Je=null,Re=null,pe=!1,Un=null,Pt=!1,sl=Error(s(519));function zn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pi(Rt(t,e)),sl}function gh(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[We]=e,t[ut]=r,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<nr.length;n++)de(nr[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Md(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Rd(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||Pf(t.textContent,n)?(r.popover!=null&&(de("beforetoggle",t),de("toggle",t)),r.onScroll!=null&&de("scroll",t),r.onScrollEnd!=null&&de("scrollend",t),r.onClick!=null&&(t.onclick=nn),t=!0):t=!1,t||zn(e,!0)}function yh(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 31:case 13:Pt=!1;return;case 27:case 3:Pt=!0;return;default:Je=Je.return}}function Ga(e){if(e!==Je)return!1;if(!pe)return yh(e),pe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Tc(e.type,e.memoizedProps)),n=!n),n&&Re&&zn(e),yh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Re=If(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Re=If(e)}else t===27?(t=Re,_n(e.type)?(e=Mc,Mc=null,Re=e):Re=t):Re=Je?Lt(e.stateNode.nextSibling):null;return!0}function oa(){Re=Je=null,pe=!1}function ol(){var e=Un;return e!==null&&(pt===null?pt=e:pt.push.apply(pt,e),Un=null),e}function Pi(e){Un===null?Un=[e]:Un.push(e)}var ll=T(null),la=null,on=null;function Mn(e,t,n){q(ll,t._currentValue),t._currentValue=n}function ln(e){e._currentValue=ll.current,V(ll)}function cl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ul(e,t,n,r){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var d=o.child;c=c.firstContext;e:for(;c!==null;){var y=c;c=o;for(var A=0;A<t.length;A++)if(y.context===t[A]){c.lanes|=n,y=c.alternate,y!==null&&(y.lanes|=n),cl(c.return,n,e),r||(d=null);break e}c=y.next}}else if(o.tag===18){if(d=o.return,d===null)throw Error(s(341));d.lanes|=n,c=d.alternate,c!==null&&(c.lanes|=n),cl(d,n,e),d=null}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===e){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}}function Na(e,t,n,r){e=null;for(var o=t,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var d=o.alternate;if(d===null)throw Error(s(387));if(d=d.memoizedProps,d!==null){var y=o.type;St(o.pendingProps.value,d.value)||(e!==null?e.push(y):e=[y])}}else if(o===Se.current){if(d=o.alternate,d===null)throw Error(s(387));d.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(or):e=[or])}o=o.return}e!==null&&ul(t,e,n,r),t.flags|=262144}function Zr(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){la=e,on=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return vh(la,e)}function Wr(e,t){return la===null&&ca(e),vh(e,t)}function vh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},on===null){if(e===null)throw Error(s(308));on=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else on=on.next=t;return n}var $v=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},eb=a.unstable_scheduleCallback,tb=a.unstable_NormalPriority,_e={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dl(){return{controller:new $v,data:new Map,refCount:0}}function Bi(e){e.refCount--,e.refCount===0&&eb(tb,function(){e.controller.abort()})}var Li=null,hl=0,_a=0,Ia=null;function nb(e,t){if(Li===null){var n=Li=[];hl=0,_a=pc(),Ia={status:"pending",value:void 0,then:function(r){n.push(r)}}}return hl++,t.then(bh,bh),t}function bh(){if(--hl===0&&Li!==null){Ia!==null&&(Ia.status="fulfilled");var e=Li;Li=null,_a=0,Ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ab(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(r.status="rejected",r.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),r}var Sh=P.S;P.S=function(e,t){af=yt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&nb(e,t),Sh!==null&&Sh(e,t)};var ua=T(null);function ml(){var e=ua.current;return e!==null?e:ze.pooledCache}function Jr(e,t){t===null?q(ua,ua.current):q(ua,t.pool)}function wh(){var e=ml();return e===null?null:{parent:_e._currentValue,pool:e}}var qa=Error(s(460)),fl=Error(s(474)),$r=Error(s(542)),es={then:function(){}};function Ah(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ch(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(nn,nn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xh(e),e;default:if(typeof t.status=="string")t.then(nn,nn);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=r}},function(r){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xh(e),e}throw ha=t,qa}}function da(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ha=n,qa):n}}var ha=null;function Th(){if(ha===null)throw Error(s(459));var e=ha;return ha=null,e}function xh(e){if(e===qa||e===$r)throw Error(s(483))}var Fa=null,Oi=0;function ts(e){var t=Oi;return Oi+=1,Fa===null&&(Fa=[]),Ch(Fa,e,t)}function Vi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ns(e,t){throw t.$$typeof===w?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Eh(e){function t(x,C){if(e){var E=x.deletions;E===null?(x.deletions=[C],x.flags|=16):E.push(C)}}function n(x,C){if(!e)return null;for(;C!==null;)t(x,C),C=C.sibling;return null}function r(x){for(var C=new Map;x!==null;)x.key!==null?C.set(x.key,x):C.set(x.index,x),x=x.sibling;return C}function o(x,C){return x=rn(x,C),x.index=0,x.sibling=null,x}function c(x,C,E){return x.index=E,e?(E=x.alternate,E!==null?(E=E.index,E<C?(x.flags|=67108866,C):E):(x.flags|=67108866,C)):(x.flags|=1048576,C)}function d(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function y(x,C,E,L){return C===null||C.tag!==6?(C=nl(E,x.mode,L),C.return=x,C):(C=o(C,E),C.return=x,C)}function A(x,C,E,L){var ee=E.type;return ee===H?B(x,C,E.props.children,L,E.key):C!==null&&(C.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===$&&da(ee)===C.type)?(C=o(C,E.props),Vi(C,E),C.return=x,C):(C=Kr(E.type,E.key,E.props,null,x.mode,L),Vi(C,E),C.return=x,C)}function U(x,C,E,L){return C===null||C.tag!==4||C.stateNode.containerInfo!==E.containerInfo||C.stateNode.implementation!==E.implementation?(C=al(E,x.mode,L),C.return=x,C):(C=o(C,E.children||[]),C.return=x,C)}function B(x,C,E,L,ee){return C===null||C.tag!==7?(C=sa(E,x.mode,L,ee),C.return=x,C):(C=o(C,E),C.return=x,C)}function O(x,C,E){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=nl(""+C,x.mode,E),C.return=x,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case k:return E=Kr(C.type,C.key,C.props,null,x.mode,E),Vi(E,C),E.return=x,E;case z:return C=al(C,x.mode,E),C.return=x,C;case $:return C=da(C),O(x,C,E)}if(Oe(C)||we(C))return C=sa(C,x.mode,E,null),C.return=x,C;if(typeof C.then=="function")return O(x,ts(C),E);if(C.$$typeof===D)return O(x,Wr(x,C),E);ns(x,C)}return null}function M(x,C,E,L){var ee=C!==null?C.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return ee!==null?null:y(x,C,""+E,L);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case k:return E.key===ee?A(x,C,E,L):null;case z:return E.key===ee?U(x,C,E,L):null;case $:return E=da(E),M(x,C,E,L)}if(Oe(E)||we(E))return ee!==null?null:B(x,C,E,L,null);if(typeof E.then=="function")return M(x,C,ts(E),L);if(E.$$typeof===D)return M(x,C,Wr(x,E),L);ns(x,E)}return null}function j(x,C,E,L,ee){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return x=x.get(E)||null,y(C,x,""+L,ee);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case k:return x=x.get(L.key===null?E:L.key)||null,A(C,x,L,ee);case z:return x=x.get(L.key===null?E:L.key)||null,U(C,x,L,ee);case $:return L=da(L),j(x,C,E,L,ee)}if(Oe(L)||we(L))return x=x.get(E)||null,B(C,x,L,ee,null);if(typeof L.then=="function")return j(x,C,E,ts(L),ee);if(L.$$typeof===D)return j(x,C,E,Wr(C,L),ee);ns(C,L)}return null}function Y(x,C,E,L){for(var ee=null,ge=null,J=C,oe=C=0,me=null;J!==null&&oe<E.length;oe++){J.index>oe?(me=J,J=null):me=J.sibling;var ye=M(x,J,E[oe],L);if(ye===null){J===null&&(J=me);break}e&&J&&ye.alternate===null&&t(x,J),C=c(ye,C,oe),ge===null?ee=ye:ge.sibling=ye,ge=ye,J=me}if(oe===E.length)return n(x,J),pe&&sn(x,oe),ee;if(J===null){for(;oe<E.length;oe++)J=O(x,E[oe],L),J!==null&&(C=c(J,C,oe),ge===null?ee=J:ge.sibling=J,ge=J);return pe&&sn(x,oe),ee}for(J=r(J);oe<E.length;oe++)me=j(J,x,oe,E[oe],L),me!==null&&(e&&me.alternate!==null&&J.delete(me.key===null?oe:me.key),C=c(me,C,oe),ge===null?ee=me:ge.sibling=me,ge=me);return e&&J.forEach(function(Yn){return t(x,Yn)}),pe&&sn(x,oe),ee}function te(x,C,E,L){if(E==null)throw Error(s(151));for(var ee=null,ge=null,J=C,oe=C=0,me=null,ye=E.next();J!==null&&!ye.done;oe++,ye=E.next()){J.index>oe?(me=J,J=null):me=J.sibling;var Yn=M(x,J,ye.value,L);if(Yn===null){J===null&&(J=me);break}e&&J&&Yn.alternate===null&&t(x,J),C=c(Yn,C,oe),ge===null?ee=Yn:ge.sibling=Yn,ge=Yn,J=me}if(ye.done)return n(x,J),pe&&sn(x,oe),ee;if(J===null){for(;!ye.done;oe++,ye=E.next())ye=O(x,ye.value,L),ye!==null&&(C=c(ye,C,oe),ge===null?ee=ye:ge.sibling=ye,ge=ye);return pe&&sn(x,oe),ee}for(J=r(J);!ye.done;oe++,ye=E.next())ye=j(J,x,oe,ye.value,L),ye!==null&&(e&&ye.alternate!==null&&J.delete(ye.key===null?oe:ye.key),C=c(ye,C,oe),ge===null?ee=ye:ge.sibling=ye,ge=ye);return e&&J.forEach(function(f1){return t(x,f1)}),pe&&sn(x,oe),ee}function Ue(x,C,E,L){if(typeof E=="object"&&E!==null&&E.type===H&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case k:e:{for(var ee=E.key;C!==null;){if(C.key===ee){if(ee=E.type,ee===H){if(C.tag===7){n(x,C.sibling),L=o(C,E.props.children),L.return=x,x=L;break e}}else if(C.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===$&&da(ee)===C.type){n(x,C.sibling),L=o(C,E.props),Vi(L,E),L.return=x,x=L;break e}n(x,C);break}else t(x,C);C=C.sibling}E.type===H?(L=sa(E.props.children,x.mode,L,E.key),L.return=x,x=L):(L=Kr(E.type,E.key,E.props,null,x.mode,L),Vi(L,E),L.return=x,x=L)}return d(x);case z:e:{for(ee=E.key;C!==null;){if(C.key===ee)if(C.tag===4&&C.stateNode.containerInfo===E.containerInfo&&C.stateNode.implementation===E.implementation){n(x,C.sibling),L=o(C,E.children||[]),L.return=x,x=L;break e}else{n(x,C);break}else t(x,C);C=C.sibling}L=al(E,x.mode,L),L.return=x,x=L}return d(x);case $:return E=da(E),Ue(x,C,E,L)}if(Oe(E))return Y(x,C,E,L);if(we(E)){if(ee=we(E),typeof ee!="function")throw Error(s(150));return E=ee.call(E),te(x,C,E,L)}if(typeof E.then=="function")return Ue(x,C,ts(E),L);if(E.$$typeof===D)return Ue(x,C,Wr(x,E),L);ns(x,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,C!==null&&C.tag===6?(n(x,C.sibling),L=o(C,E),L.return=x,x=L):(n(x,C),L=nl(E,x.mode,L),L.return=x,x=L),d(x)):n(x,C)}return function(x,C,E,L){try{Oi=0;var ee=Ue(x,C,E,L);return Fa=null,ee}catch(J){if(J===qa||J===$r)throw J;var ge=wt(29,J,null,x.mode);return ge.lanes=L,ge.return=x,ge}}}var ma=Eh(!0),Uh=Eh(!1),Dn=!1;function pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Rn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(be&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,t=Yr(e),uh(e,null,n),t}return Xr(e,r,t,n),Yr(e)}function Hi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vd(e,n)}}function yl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?o=c=d:c=c.next=d,n=n.next}while(n!==null);c===null?o=c=t:c=c.next=t}else o=c=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var vl=!1;function Gi(){if(vl){var e=Ia;if(e!==null)throw e}}function Ni(e,t,n,r){vl=!1;var o=e.updateQueue;Dn=!1;var c=o.firstBaseUpdate,d=o.lastBaseUpdate,y=o.shared.pending;if(y!==null){o.shared.pending=null;var A=y,U=A.next;A.next=null,d===null?c=U:d.next=U,d=A;var B=e.alternate;B!==null&&(B=B.updateQueue,y=B.lastBaseUpdate,y!==d&&(y===null?B.firstBaseUpdate=U:y.next=U,B.lastBaseUpdate=A))}if(c!==null){var O=o.baseState;d=0,B=U=A=null,y=c;do{var M=y.lane&-536870913,j=M!==y.lane;if(j?(he&M)===M:(r&M)===M){M!==0&&M===_a&&(vl=!0),B!==null&&(B=B.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var Y=e,te=y;M=t;var Ue=n;switch(te.tag){case 1:if(Y=te.payload,typeof Y=="function"){O=Y.call(Ue,O,M);break e}O=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=te.payload,M=typeof Y=="function"?Y.call(Ue,O,M):Y,M==null)break e;O=S({},O,M);break e;case 2:Dn=!0}}M=y.callback,M!==null&&(e.flags|=64,j&&(e.flags|=8192),j=o.callbacks,j===null?o.callbacks=[M]:j.push(M))}else j={lane:M,tag:y.tag,payload:y.payload,callback:y.callback,next:null},B===null?(U=B=j,A=O):B=B.next=j,d|=M;if(y=y.next,y===null){if(y=o.shared.pending,y===null)break;j=y,y=j.next,j.next=null,o.lastBaseUpdate=j,o.shared.pending=null}}while(!0);B===null&&(A=O),o.baseState=A,o.firstBaseUpdate=U,o.lastBaseUpdate=B,c===null&&(o.shared.lanes=0),On|=d,e.lanes=d,e.memoizedState=O}}function zh(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Mh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)zh(n[e],t)}var Xa=T(null),as=T(0);function Dh(e,t){e=yn,q(as,e),q(Xa,t),yn=e|t.baseLanes}function bl(){q(as,yn),q(Xa,Xa.current)}function Sl(){yn=as.current,V(Xa),V(as)}var At=T(null),Bt=null;function kn(e){var t=e.alternate;q(He,He.current&1),q(At,e),Bt===null&&(t===null||Xa.current!==null||t.memoizedState!==null)&&(Bt=e)}function wl(e){q(He,He.current),q(At,e),Bt===null&&(Bt=e)}function Rh(e){e.tag===22?(q(He,He.current),q(At,e),Bt===null&&(Bt=e)):Pn()}function Pn(){q(He,He.current),q(At,At.current)}function Ct(e){V(At),Bt===e&&(Bt=null),V(He)}var He=T(0);function is(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Uc(n)||zc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cn=0,re=null,xe=null,Ie=null,rs=!1,Ya=!1,fa=!1,ss=0,_i=0,Ka=null,ib=0;function Pe(){throw Error(s(321))}function Al(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Cl(e,t,n,r,o,c){return cn=c,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?fm:Vl,fa=!1,c=n(r,o),fa=!1,Ya&&(c=kh(t,n,r,o)),jh(e),c}function jh(e){P.H=Fi;var t=xe!==null&&xe.next!==null;if(cn=0,Ie=xe=re=null,rs=!1,_i=0,Ka=null,t)throw Error(s(300));e===null||qe||(e=e.dependencies,e!==null&&Zr(e)&&(qe=!0))}function kh(e,t,n,r){re=e;var o=0;do{if(Ya&&(Ka=null),_i=0,Ya=!1,25<=o)throw Error(s(301));if(o+=1,Ie=xe=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}P.H=pm,c=t(n,r)}while(Ya);return c}function rb(){var e=P.H,t=e.useState()[0];return t=typeof t.then=="function"?Ii(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(re.flags|=1024),t}function Tl(){var e=ss!==0;return ss=0,e}function xl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function El(e){if(rs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}rs=!1}cn=0,Ie=xe=re=null,Ya=!1,_i=ss=0,Ka=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?re.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Ge(){if(xe===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Ie===null?re.memoizedState:Ie.next;if(t!==null)Ie=t,xe=e;else{if(e===null)throw re.alternate===null?Error(s(467)):Error(s(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ie===null?re.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function os(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ii(e){var t=_i;return _i+=1,Ka===null&&(Ka=[]),e=Ch(Ka,e,t),t=re,(Ie===null?t.memoizedState:Ie.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?fm:Vl),e}function ls(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ii(e);if(e.$$typeof===D)return $e(e)}throw Error(s(438,String(e)))}function Ul(e){var t=null,n=re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=re.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=os(),re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function un(e,t){return typeof t=="function"?t(e):t}function cs(e){var t=Ge();return zl(t,xe,e)}function zl(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var o=e.baseQueue,c=r.pending;if(c!==null){if(o!==null){var d=o.next;o.next=c.next,c.next=d}t.baseQueue=o=c,r.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{t=o.next;var y=d=null,A=null,U=t,B=!1;do{var O=U.lane&-536870913;if(O!==U.lane?(he&O)===O:(cn&O)===O){var M=U.revertLane;if(M===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),O===_a&&(B=!0);else if((cn&M)===M){U=U.next,M===_a&&(B=!0);continue}else O={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},A===null?(y=A=O,d=c):A=A.next=O,re.lanes|=M,On|=M;O=U.action,fa&&n(c,O),c=U.hasEagerState?U.eagerState:n(c,O)}else M={lane:O,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},A===null?(y=A=M,d=c):A=A.next=M,re.lanes|=O,On|=O;U=U.next}while(U!==null&&U!==t);if(A===null?d=c:A.next=y,!St(c,e.memoizedState)&&(qe=!0,B&&(n=Ia,n!==null)))throw n;e.memoizedState=c,e.baseState=d,e.baseQueue=A,r.lastRenderedState=c}return o===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ml(e){var t=Ge(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,c=t.memoizedState;if(o!==null){n.pending=null;var d=o=o.next;do c=e(c,d.action),d=d.next;while(d!==o);St(c,t.memoizedState)||(qe=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,r]}function Ph(e,t,n){var r=re,o=Ge(),c=pe;if(c){if(n===void 0)throw Error(s(407));n=n()}else n=t();var d=!St((xe||o).memoizedState,n);if(d&&(o.memoizedState=n,qe=!0),o=o.queue,jl(Oh.bind(null,r,o,e),[e]),o.getSnapshot!==t||d||Ie!==null&&Ie.memoizedState.tag&1){if(r.flags|=2048,Qa(9,{destroy:void 0},Lh.bind(null,r,o,n,t),null),ze===null)throw Error(s(349));c||(cn&127)!==0||Bh(r,t,n)}return n}function Bh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t=os(),re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lh(e,t,n,r){t.value=n,t.getSnapshot=r,Vh(t)&&Hh(e)}function Oh(e,t,n){return n(function(){Vh(t)&&Hh(e)})}function Vh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function Hh(e){var t=ra(e,2);t!==null&&gt(t,e,2)}function Dl(e){var t=ot();if(typeof e=="function"){var n=e;if(e=n(),fa){Cn(!0);try{n()}finally{Cn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:e},t}function Gh(e,t,n,r){return e.baseState=n,zl(e,xe,typeof r=="function"?r:un)}function sb(e,t,n,r,o){if(hs(e))throw Error(s(485));if(e=t.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){c.listeners.push(d)}};P.T!==null?n(!0):c.isTransition=!1,r(c),n=t.pending,n===null?(c.next=t.pending=c,Nh(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Nh(e,t){var n=t.action,r=t.payload,o=e.state;if(t.isTransition){var c=P.T,d={};P.T=d;try{var y=n(o,r),A=P.S;A!==null&&A(d,y),_h(e,t,y)}catch(U){Rl(e,t,U)}finally{c!==null&&d.types!==null&&(c.types=d.types),P.T=c}}else try{c=n(o,r),_h(e,t,c)}catch(U){Rl(e,t,U)}}function _h(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Ih(e,t,r)},function(r){return Rl(e,t,r)}):Ih(e,t,n)}function Ih(e,t,n){t.status="fulfilled",t.value=n,qh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Nh(e,n)))}function Rl(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,qh(t),t=t.next;while(t!==r)}e.action=null}function qh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Fh(e,t){return t}function Xh(e,t){if(pe){var n=ze.formState;if(n!==null){e:{var r=re;if(pe){if(Re){t:{for(var o=Re,c=Pt;o.nodeType!==8;){if(!c){o=null;break t}if(o=Lt(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){Re=Lt(o.nextSibling),r=o.data==="F!";break e}}zn(r)}r=!1}r&&(t=n[0])}}return n=ot(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fh,lastRenderedState:t},n.queue=r,n=dm.bind(null,re,r),r.dispatch=n,r=Dl(!1),c=Ol.bind(null,re,!1,r.queue),r=ot(),o={state:t,dispatch:null,action:e,pending:null},r.queue=o,n=sb.bind(null,re,o,c,n),o.dispatch=n,r.memoizedState=e,[t,n,!1]}function Yh(e){var t=Ge();return Kh(t,xe,e)}function Kh(e,t,n){if(t=zl(e,t,Fh)[0],e=cs(un)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Ii(t)}catch(d){throw d===qa?$r:d}else r=t;t=Ge();var o=t.queue,c=o.dispatch;return n!==t.memoizedState&&(re.flags|=2048,Qa(9,{destroy:void 0},ob.bind(null,o,n),null)),[r,c,e]}function ob(e,t){e.action=t}function Qh(e){var t=Ge(),n=xe;if(n!==null)return Kh(t,n,e);Ge(),t=t.memoizedState,n=Ge();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Qa(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=re.updateQueue,t===null&&(t=os(),re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Zh(){return Ge().memoizedState}function us(e,t,n,r){var o=ot();re.flags|=e,o.memoizedState=Qa(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var o=Ge();r=r===void 0?null:r;var c=o.memoizedState.inst;xe!==null&&r!==null&&Al(r,xe.memoizedState.deps)?o.memoizedState=Qa(t,c,n,r):(re.flags|=e,o.memoizedState=Qa(1|t,c,n,r))}function Wh(e,t){us(8390656,8,e,t)}function jl(e,t){ds(2048,8,e,t)}function lb(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=os(),re.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Jh(e){var t=Ge().memoizedState;return lb({ref:t,nextImpl:e}),function(){if((be&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function $h(e,t){return ds(4,2,e,t)}function em(e,t){return ds(4,4,e,t)}function tm(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nm(e,t,n){n=n!=null?n.concat([e]):null,ds(4,4,tm.bind(null,t,e),n)}function kl(){}function am(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Al(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function im(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Al(t,r[1]))return r[0];if(r=e(),fa){Cn(!0);try{e()}finally{Cn(!1)}}return n.memoizedState=[r,t],r}function Pl(e,t,n){return n===void 0||(cn&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=sf(),re.lanes|=e,On|=e,n)}function rm(e,t,n,r){return St(n,t)?n:Xa.current!==null?(e=Pl(e,n,r),St(e,t)||(qe=!0),e):(cn&42)===0||(cn&1073741824)!==0&&(he&261930)===0?(qe=!0,e.memoizedState=n):(e=sf(),re.lanes|=e,On|=e,t)}function sm(e,t,n,r,o){var c=I.p;I.p=c!==0&&8>c?c:8;var d=P.T,y={};P.T=y,Ol(e,!1,t,n);try{var A=o(),U=P.S;if(U!==null&&U(y,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var B=ab(A,r);qi(e,t,B,Et(e))}else qi(e,t,r,Et(e))}catch(O){qi(e,t,{then:function(){},status:"rejected",reason:O},Et())}finally{I.p=c,d!==null&&y.types!==null&&(d.types=y.types),P.T=d}}function cb(){}function Bl(e,t,n,r){if(e.tag!==5)throw Error(s(476));var o=om(e).queue;sm(e,o,t,X,n===null?cb:function(){return lm(e),n(r)})}function om(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:X},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function lm(e){var t=om(e);t.next===null&&(t=e.alternate.memoizedState),qi(e,t.next.queue,{},Et())}function Ll(){return $e(or)}function cm(){return Ge().memoizedState}function um(){return Ge().memoizedState}function ub(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Et();e=Rn(n);var r=jn(t,e,n);r!==null&&(gt(r,t,n),Hi(r,t,n)),t={cache:dl()},e.payload=t;return}t=t.return}}function db(e,t,n){var r=Et();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},hs(e)?hm(t,n):(n=el(e,t,n,r),n!==null&&(gt(n,e,r),mm(n,t,r)))}function dm(e,t,n){var r=Et();qi(e,t,n,r)}function qi(e,t,n,r){var o={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(hs(e))hm(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var d=t.lastRenderedState,y=c(d,n);if(o.hasEagerState=!0,o.eagerState=y,St(y,d))return Xr(e,t,o,0),ze===null&&Fr(),!1}catch{}if(n=el(e,t,o,r),n!==null)return gt(n,e,r),mm(n,t,r),!0}return!1}function Ol(e,t,n,r){if(r={lane:2,revertLane:pc(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},hs(e)){if(t)throw Error(s(479))}else t=el(e,n,r,2),t!==null&&gt(t,e,2)}function hs(e){var t=e.alternate;return e===re||t!==null&&t===re}function hm(e,t){Ya=rs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mm(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vd(e,n)}}var Fi={readContext:$e,use:ls,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useLayoutEffect:Pe,useInsertionEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useSyncExternalStore:Pe,useId:Pe,useHostTransitionStatus:Pe,useFormState:Pe,useActionState:Pe,useOptimistic:Pe,useMemoCache:Pe,useCacheRefresh:Pe};Fi.useEffectEvent=Pe;var fm={readContext:$e,use:ls,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:Wh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,us(4194308,4,tm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=ot();t=t===void 0?null:t;var r=e();if(fa){Cn(!0);try{e()}finally{Cn(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ot();if(n!==void 0){var o=n(t);if(fa){Cn(!0);try{n(t)}finally{Cn(!1)}}}else o=t;return r.memoizedState=r.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},r.queue=e,e=e.dispatch=db.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=Dl(e);var t=e.queue,n=dm.bind(null,re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:kl,useDeferredValue:function(e,t){var n=ot();return Pl(n,e,t)},useTransition:function(){var e=Dl(!1);return e=sm.bind(null,re,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=re,o=ot();if(pe){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),ze===null)throw Error(s(349));(he&127)!==0||Bh(r,t,n)}o.memoizedState=n;var c={value:n,getSnapshot:t};return o.queue=c,Wh(Oh.bind(null,r,c,e),[e]),r.flags|=2048,Qa(9,{destroy:void 0},Lh.bind(null,r,c,n,t),null),n},useId:function(){var e=ot(),t=ze.identifierPrefix;if(pe){var n=Kt,r=Yt;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ss++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=ib++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ll,useFormState:Xh,useActionState:Xh,useOptimistic:function(e){var t=ot();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ol.bind(null,re,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ul,useCacheRefresh:function(){return ot().memoizedState=ub.bind(null,re)},useEffectEvent:function(e){var t=ot(),n={impl:e};return t.memoizedState=n,function(){if((be&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Vl={readContext:$e,use:ls,useCallback:am,useContext:$e,useEffect:jl,useImperativeHandle:nm,useInsertionEffect:$h,useLayoutEffect:em,useMemo:im,useReducer:cs,useRef:Zh,useState:function(){return cs(un)},useDebugValue:kl,useDeferredValue:function(e,t){var n=Ge();return rm(n,xe.memoizedState,e,t)},useTransition:function(){var e=cs(un)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Ii(e),t]},useSyncExternalStore:Ph,useId:cm,useHostTransitionStatus:Ll,useFormState:Yh,useActionState:Yh,useOptimistic:function(e,t){var n=Ge();return Gh(n,xe,e,t)},useMemoCache:Ul,useCacheRefresh:um};Vl.useEffectEvent=Jh;var pm={readContext:$e,use:ls,useCallback:am,useContext:$e,useEffect:jl,useImperativeHandle:nm,useInsertionEffect:$h,useLayoutEffect:em,useMemo:im,useReducer:Ml,useRef:Zh,useState:function(){return Ml(un)},useDebugValue:kl,useDeferredValue:function(e,t){var n=Ge();return xe===null?Pl(n,e,t):rm(n,xe.memoizedState,e,t)},useTransition:function(){var e=Ml(un)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Ii(e),t]},useSyncExternalStore:Ph,useId:cm,useHostTransitionStatus:Ll,useFormState:Qh,useActionState:Qh,useOptimistic:function(e,t){var n=Ge();return xe!==null?Gh(n,xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ul,useCacheRefresh:um};pm.useEffectEvent=Jh;function Hl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gl={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Et(),o=Rn(r);o.payload=t,n!=null&&(o.callback=n),t=jn(e,o,r),t!==null&&(gt(t,e,r),Hi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Et(),o=Rn(r);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=jn(e,o,r),t!==null&&(gt(t,e,r),Hi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Et(),r=Rn(n);r.tag=2,t!=null&&(r.callback=t),t=jn(e,r,n),t!==null&&(gt(t,e,n),Hi(t,e,n))}};function gm(e,t,n,r,o,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,c,d):t.prototype&&t.prototype.isPureReactComponent?!Ri(n,r)||!Ri(o,c):!0}function ym(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gl.enqueueReplaceState(t,t.state,null)}function pa(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function vm(e){qr(e)}function bm(e){console.error(e)}function Sm(e){qr(e)}function ms(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function wm(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Nl(e,t,n){return n=Rn(n),n.tag=3,n.payload={element:null},n.callback=function(){ms(e,t)},n}function Am(e){return e=Rn(e),e.tag=3,e}function Cm(e,t,n,r){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var c=r.value;e.payload=function(){return o(c)},e.callback=function(){wm(t,n,r)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){wm(t,n,r),typeof o!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var y=r.stack;this.componentDidCatch(r.value,{componentStack:y!==null?y:""})})}function hb(e,t,n,r,o){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&Na(t,n,o,!0),n=At.current,n!==null){switch(n.tag){case 31:case 13:return Bt===null?xs():n.alternate===null&&Be===0&&(Be=3),n.flags&=-257,n.flags|=65536,n.lanes=o,r===es?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),hc(e,r,o)),!1;case 22:return n.flags|=65536,r===es?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),hc(e,r,o)),!1}throw Error(s(435,n.tag))}return hc(e,r,o),xs(),!1}if(pe)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,r!==sl&&(e=Error(s(422),{cause:r}),Pi(Rt(e,n)))):(r!==sl&&(t=Error(s(423),{cause:r}),Pi(Rt(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,r=Rt(r,n),o=Nl(e.stateNode,r,o),yl(e,o),Be!==4&&(Be=2)),!1;var c=Error(s(520),{cause:r});if(c=Rt(c,n),$i===null?$i=[c]:$i.push(c),Be!==4&&(Be=2),t===null)return!0;r=Rt(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Nl(n.stateNode,r,e),yl(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Vn===null||!Vn.has(c))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Am(o),Cm(o,e,n,r),yl(n,o),!1}n=n.return}while(n!==null);return!1}var _l=Error(s(461)),qe=!1;function et(e,t,n,r){t.child=e===null?Uh(t,null,n,r):ma(t,e.child,n,r)}function Tm(e,t,n,r,o){n=n.render;var c=t.ref;if("ref"in r){var d={};for(var y in r)y!=="ref"&&(d[y]=r[y])}else d=r;return ca(t),r=Cl(e,t,n,d,c,o),y=Tl(),e!==null&&!qe?(xl(e,t,o),dn(e,t,o)):(pe&&y&&il(t),t.flags|=1,et(e,t,r,o),t.child)}function xm(e,t,n,r,o){if(e===null){var c=n.type;return typeof c=="function"&&!tl(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,Em(e,t,c,r,o)):(e=Kr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Zl(e,o)){var d=c.memoizedProps;if(n=n.compare,n=n!==null?n:Ri,n(d,r)&&e.ref===t.ref)return dn(e,t,o)}return t.flags|=1,e=rn(c,r),e.ref=t.ref,e.return=t,t.child=e}function Em(e,t,n,r,o){if(e!==null){var c=e.memoizedProps;if(Ri(c,r)&&e.ref===t.ref)if(qe=!1,t.pendingProps=r=c,Zl(e,o))(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,dn(e,t,o)}return Il(e,t,n,r,o)}function Um(e,t,n,r){var o=r.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(r=t.child=e.child,o=0;r!==null;)o=o|r.lanes|r.childLanes,r=r.sibling;r=o&~c}else r=0,t.child=null;return zm(e,t,c,n,r)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Jr(t,c!==null?c.cachePool:null),c!==null?Dh(t,c):bl(),Rh(t);else return r=t.lanes=536870912,zm(e,t,c!==null?c.baseLanes|n:n,n,r)}else c!==null?(Jr(t,c.cachePool),Dh(t,c),Pn(),t.memoizedState=null):(e!==null&&Jr(t,null),bl(),Pn());return et(e,t,o,n),t.child}function Xi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function zm(e,t,n,r,o){var c=ml();return c=c===null?null:{parent:_e._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&Jr(t,null),bl(),Rh(t),e!==null&&Na(e,t,r,!0),t.childLanes=o,null}function fs(e,t){return t=gs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Mm(e,t,n){return ma(t,e.child,null,n),e=fs(t,t.pendingProps),e.flags|=2,Ct(t),t.memoizedState=null,e}function mb(e,t,n){var r=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(pe){if(r.mode==="hidden")return e=fs(t,r),t.lanes=536870912,Xi(null,e);if(wl(t),(e=Re)?(e=_f(e,Pt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:En!==null?{id:Yt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},n=hh(e),n.return=t,t.child=n,Je=t,Re=null)):e=null,e===null)throw zn(t);return t.lanes=536870912,null}return fs(t,r)}var c=e.memoizedState;if(c!==null){var d=c.dehydrated;if(wl(t),o)if(t.flags&256)t.flags&=-257,t=Mm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(qe||Na(e,t,n,!1),o=(n&e.childLanes)!==0,qe||o){if(r=ze,r!==null&&(d=bd(r,n),d!==0&&d!==c.retryLane))throw c.retryLane=d,ra(e,d),gt(r,e,d),_l;xs(),t=Mm(e,t,n)}else e=c.treeContext,Re=Lt(d.nextSibling),Je=t,pe=!0,Un=null,Pt=!1,e!==null&&ph(t,e),t=fs(t,r),t.flags|=4096;return t}return e=rn(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ps(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Il(e,t,n,r,o){return ca(t),n=Cl(e,t,n,r,void 0,o),r=Tl(),e!==null&&!qe?(xl(e,t,o),dn(e,t,o)):(pe&&r&&il(t),t.flags|=1,et(e,t,n,o),t.child)}function Dm(e,t,n,r,o,c){return ca(t),t.updateQueue=null,n=kh(t,r,n,o),jh(e),r=Tl(),e!==null&&!qe?(xl(e,t,c),dn(e,t,c)):(pe&&r&&il(t),t.flags|=1,et(e,t,n,c),t.child)}function Rm(e,t,n,r,o){if(ca(t),t.stateNode===null){var c=Oa,d=n.contextType;typeof d=="object"&&d!==null&&(c=$e(d)),c=new n(r,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Gl,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=r,c.state=t.memoizedState,c.refs={},pl(t),d=n.contextType,c.context=typeof d=="object"&&d!==null?$e(d):Oa,c.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Hl(t,n,d,r),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(d=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),d!==c.state&&Gl.enqueueReplaceState(c,c.state,null),Ni(t,r,c,o),Gi(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){c=t.stateNode;var y=t.memoizedProps,A=pa(n,y);c.props=A;var U=c.context,B=n.contextType;d=Oa,typeof B=="object"&&B!==null&&(d=$e(B));var O=n.getDerivedStateFromProps;B=typeof O=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,B||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||U!==d)&&ym(t,c,r,d),Dn=!1;var M=t.memoizedState;c.state=M,Ni(t,r,c,o),Gi(),U=t.memoizedState,y||M!==U||Dn?(typeof O=="function"&&(Hl(t,n,O,r),U=t.memoizedState),(A=Dn||gm(t,n,A,r,M,U,d))?(B||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=U),c.props=r,c.state=U,c.context=d,r=A):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,gl(e,t),d=t.memoizedProps,B=pa(n,d),c.props=B,O=t.pendingProps,M=c.context,U=n.contextType,A=Oa,typeof U=="object"&&U!==null&&(A=$e(U)),y=n.getDerivedStateFromProps,(U=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==O||M!==A)&&ym(t,c,r,A),Dn=!1,M=t.memoizedState,c.state=M,Ni(t,r,c,o),Gi();var j=t.memoizedState;d!==O||M!==j||Dn||e!==null&&e.dependencies!==null&&Zr(e.dependencies)?(typeof y=="function"&&(Hl(t,n,y,r),j=t.memoizedState),(B=Dn||gm(t,n,B,r,M,j,A)||e!==null&&e.dependencies!==null&&Zr(e.dependencies))?(U||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,j,A),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,j,A)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=j),c.props=r,c.state=j,c.context=A,r=B):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),r=!1)}return c=r,ps(e,t),r=(t.flags&128)!==0,c||r?(c=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&r?(t.child=ma(t,e.child,null,o),t.child=ma(t,null,n,o)):et(e,t,n,o),t.memoizedState=c.state,e=t.child):e=dn(e,t,o),e}function jm(e,t,n,r){return oa(),t.flags|=256,et(e,t,n,r),t.child}var ql={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fl(e){return{baseLanes:e,cachePool:wh()}}function Xl(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=xt),e}function km(e,t,n){var r=t.pendingProps,o=!1,c=(t.flags&128)!==0,d;if((d=c)||(d=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),d&&(o=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(pe){if(o?kn(t):Pn(),(e=Re)?(e=_f(e,Pt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:En!==null?{id:Yt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},n=hh(e),n.return=t,t.child=n,Je=t,Re=null)):e=null,e===null)throw zn(t);return zc(e)?t.lanes=32:t.lanes=536870912,null}var y=r.children;return r=r.fallback,o?(Pn(),o=t.mode,y=gs({mode:"hidden",children:y},o),r=sa(r,o,n,null),y.return=t,r.return=t,y.sibling=r,t.child=y,r=t.child,r.memoizedState=Fl(n),r.childLanes=Xl(e,d,n),t.memoizedState=ql,Xi(null,r)):(kn(t),Yl(t,y))}var A=e.memoizedState;if(A!==null&&(y=A.dehydrated,y!==null)){if(c)t.flags&256?(kn(t),t.flags&=-257,t=Kl(e,t,n)):t.memoizedState!==null?(Pn(),t.child=e.child,t.flags|=128,t=null):(Pn(),y=r.fallback,o=t.mode,r=gs({mode:"visible",children:r.children},o),y=sa(y,o,n,null),y.flags|=2,r.return=t,y.return=t,r.sibling=y,t.child=r,ma(t,e.child,null,n),r=t.child,r.memoizedState=Fl(n),r.childLanes=Xl(e,d,n),t.memoizedState=ql,t=Xi(null,r));else if(kn(t),zc(y)){if(d=y.nextSibling&&y.nextSibling.dataset,d)var U=d.dgst;d=U,r=Error(s(419)),r.stack="",r.digest=d,Pi({value:r,source:null,stack:null}),t=Kl(e,t,n)}else if(qe||Na(e,t,n,!1),d=(n&e.childLanes)!==0,qe||d){if(d=ze,d!==null&&(r=bd(d,n),r!==0&&r!==A.retryLane))throw A.retryLane=r,ra(e,r),gt(d,e,r),_l;Uc(y)||xs(),t=Kl(e,t,n)}else Uc(y)?(t.flags|=192,t.child=e.child,t=null):(e=A.treeContext,Re=Lt(y.nextSibling),Je=t,pe=!0,Un=null,Pt=!1,e!==null&&ph(t,e),t=Yl(t,r.children),t.flags|=4096);return t}return o?(Pn(),y=r.fallback,o=t.mode,A=e.child,U=A.sibling,r=rn(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&65011712,U!==null?y=rn(U,y):(y=sa(y,o,n,null),y.flags|=2),y.return=t,r.return=t,r.sibling=y,t.child=r,Xi(null,r),r=t.child,y=e.child.memoizedState,y===null?y=Fl(n):(o=y.cachePool,o!==null?(A=_e._currentValue,o=o.parent!==A?{parent:A,pool:A}:o):o=wh(),y={baseLanes:y.baseLanes|n,cachePool:o}),r.memoizedState=y,r.childLanes=Xl(e,d,n),t.memoizedState=ql,Xi(e.child,r)):(kn(t),n=e.child,e=n.sibling,n=rn(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Yl(e,t){return t=gs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function gs(e,t){return e=wt(22,e,null,t),e.lanes=0,e}function Kl(e,t,n){return ma(t,e.child,null,n),e=Yl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),cl(e.return,t,n)}function Ql(e,t,n,r,o,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o,treeForkCount:c}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=r,d.tail=n,d.tailMode=o,d.treeForkCount=c)}function Bm(e,t,n){var r=t.pendingProps,o=r.revealOrder,c=r.tail;r=r.children;var d=He.current,y=(d&2)!==0;if(y?(d=d&1|2,t.flags|=128):d&=1,q(He,d),et(e,t,r,n),r=pe?ki:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pm(e,n,t);else if(e.tag===19)Pm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&is(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ql(t,!1,o,n,c,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&is(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ql(t,!0,n,null,c,r);break;case"together":Ql(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Na(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zl(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Zr(e)))}function fb(e,t,n){switch(t.tag){case 3:st(t,t.stateNode.containerInfo),Mn(t,_e,e.memoizedState.cache),oa();break;case 27:case 5:vi(t);break;case 4:st(t,t.stateNode.containerInfo);break;case 10:Mn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wl(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(kn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?km(e,t,n):(kn(t),e=dn(e,t,n),e!==null?e.sibling:null);kn(t);break;case 19:var o=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(Na(e,t,n,!1),r=(n&t.childLanes)!==0),o){if(r)return Bm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),q(He,He.current),r)break;return null;case 22:return t.lanes=0,Um(e,t,n,t.pendingProps);case 24:Mn(t,_e,e.memoizedState.cache)}return dn(e,t,n)}function Lm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!Zl(e,n)&&(t.flags&128)===0)return qe=!1,fb(e,t,n);qe=(e.flags&131072)!==0}else qe=!1,pe&&(t.flags&1048576)!==0&&fh(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=da(t.elementType),t.type=e,typeof e=="function")tl(e)?(r=pa(e,r),t.tag=1,t=Rm(null,t,e,r,n)):(t.tag=0,t=Il(null,t,e,r,n));else{if(e!=null){var o=e.$$typeof;if(o===G){t.tag=11,t=Tm(null,t,e,r,n);break e}else if(o===K){t.tag=14,t=xm(null,t,e,r,n);break e}}throw t=Ne(e)||e,Error(s(306,t,""))}}return t;case 0:return Il(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,o=pa(r,t.pendingProps),Rm(e,t,r,o,n);case 3:e:{if(st(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var c=t.memoizedState;o=c.element,gl(e,t),Ni(t,r,null,n);var d=t.memoizedState;if(r=d.cache,Mn(t,_e,r),r!==c.cache&&ul(t,[_e],n,!0),Gi(),r=d.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=jm(e,t,r,n);break e}else if(r!==o){o=Rt(Error(s(424)),t),Pi(o),t=jm(e,t,r,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=Lt(e.firstChild),Je=t,pe=!0,Un=null,Pt=!0,n=Uh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oa(),r===o){t=dn(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 26:return ps(e,t),e===null?(n=Kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:pe||(n=t.type,e=t.pendingProps,r=js(ce.current).createElement(n),r[We]=t,r[ut]=e,tt(r,n,e),Qe(r),t.stateNode=r):t.memoizedState=Kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return vi(t),e===null&&pe&&(r=t.stateNode=Ff(t.type,t.pendingProps,ce.current),Je=t,Pt=!0,o=Re,_n(t.type)?(Mc=o,Re=Lt(r.firstChild)):Re=o),et(e,t,t.pendingProps.children,n),ps(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&pe&&((o=r=Re)&&(r=qb(r,t.type,t.pendingProps,Pt),r!==null?(t.stateNode=r,Je=t,Re=Lt(r.firstChild),Pt=!1,o=!0):o=!1),o||zn(t)),vi(t),o=t.type,c=t.pendingProps,d=e!==null?e.memoizedProps:null,r=c.children,Tc(o,c)?r=null:d!==null&&Tc(o,d)&&(t.flags|=32),t.memoizedState!==null&&(o=Cl(e,t,rb,null,null,n),or._currentValue=o),ps(e,t),et(e,t,r,n),t.child;case 6:return e===null&&pe&&((e=n=Re)&&(n=Fb(n,t.pendingProps,Pt),n!==null?(t.stateNode=n,Je=t,Re=null,e=!0):e=!1),e||zn(t)),null;case 13:return km(e,t,n);case 4:return st(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ma(t,null,r,n):et(e,t,r,n),t.child;case 11:return Tm(e,t,t.type,t.pendingProps,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Mn(t,t.type,r.value),et(e,t,r.children,n),t.child;case 9:return o=t.type._context,r=t.pendingProps.children,ca(t),o=$e(o),r=r(o),t.flags|=1,et(e,t,r,n),t.child;case 14:return xm(e,t,t.type,t.pendingProps,n);case 15:return Em(e,t,t.type,t.pendingProps,n);case 19:return Bm(e,t,n);case 31:return mb(e,t,n);case 22:return Um(e,t,n,t.pendingProps);case 24:return ca(t),r=$e(_e),e===null?(o=ml(),o===null&&(o=ze,c=dl(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=n),o=c),t.memoizedState={parent:r,cache:o},pl(t),Mn(t,_e,o)):((e.lanes&n)!==0&&(gl(e,t),Ni(t,null,null,n),Gi()),o=e.memoizedState,c=t.memoizedState,o.parent!==r?(o={parent:r,cache:r},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Mn(t,_e,r)):(r=c.cache,Mn(t,_e,r),r!==o.cache&&ul(t,[_e],n,!0))),et(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function hn(e){e.flags|=4}function Wl(e,t,n,r,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(uf())e.flags|=8192;else throw ha=es,fl}else e.flags&=-16777217}function Om(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$f(t))if(uf())e.flags|=8192;else throw ha=es,fl}function ys(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?gd():536870912,e.lanes|=t,$a|=t)}function Yi(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&65011712,r|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pb(e,t,n){var r=t.pendingProps;switch(rl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return je(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ln(_e),Ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ga(t)?hn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ol())),je(t),null;case 26:var o=t.type,c=t.memoizedState;return e===null?(hn(t),c!==null?(je(t),Om(t,c)):(je(t),Wl(t,o,null,r,n))):c?c!==e.memoizedState?(hn(t),je(t),Om(t,c)):(je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&hn(t),je(t),Wl(t,o,e,r,n)),null;case 27:if(zr(t),n=ce.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&hn(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return je(t),null}e=Z.current,Ga(t)?gh(t):(e=Ff(o,r,n),t.stateNode=e,hn(t))}return je(t),null;case 5:if(zr(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&hn(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return je(t),null}if(c=Z.current,Ga(t))gh(t);else{var d=js(ce.current);switch(c){case 1:c=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:c=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":c=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":c=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":c=d.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?d.createElement("select",{is:r.is}):d.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?d.createElement(o,{is:r.is}):d.createElement(o)}}c[We]=t,c[ut]=r;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)c.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=c;e:switch(tt(c,o,r),o){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&hn(t)}}return je(t),Wl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&hn(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(e=ce.current,Ga(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,o=Je,o!==null)switch(o.tag){case 27:case 5:r=o.memoizedProps}e[We]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||Pf(e.nodeValue,n)),e||zn(t,!0)}else e=js(e).createTextNode(r),e[We]=t,t.stateNode=e}return je(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ga(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[We]=t}else oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),e=!1}else n=ol(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ct(t),t):(Ct(t),null);if((t.flags&128)!==0)throw Error(s(558))}return je(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Ga(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(s(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[We]=t}else oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),o=!1}else o=ol(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Ct(t),t):(Ct(t),null)}return Ct(t),(t.flags&128)!==0?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,o=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(o=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==o&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ys(t,t.updateQueue),je(t),null);case 4:return Ve(),e===null&&bc(t.stateNode.containerInfo),je(t),null;case 10:return ln(t.type),je(t),null;case 19:if(V(He),r=t.memoizedState,r===null)return je(t),null;if(o=(t.flags&128)!==0,c=r.rendering,c===null)if(o)Yi(r,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=is(e),c!==null){for(t.flags|=128,Yi(r,!1),e=c.updateQueue,t.updateQueue=e,ys(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)dh(n,e),n=n.sibling;return q(He,He.current&1|2),pe&&sn(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&yt()>As&&(t.flags|=128,o=!0,Yi(r,!1),t.lanes=4194304)}else{if(!o)if(e=is(c),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,ys(t,e),Yi(r,!0),r.tail===null&&r.tailMode==="hidden"&&!c.alternate&&!pe)return je(t),null}else 2*yt()-r.renderingStartTime>As&&n!==536870912&&(t.flags|=128,o=!0,Yi(r,!1),t.lanes=4194304);r.isBackwards?(c.sibling=t.child,t.child=c):(e=r.last,e!==null?e.sibling=c:t.child=c,r.last=c)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=yt(),e.sibling=null,n=He.current,q(He,o?n&1|2:n&1),pe&&sn(t,r.treeForkCount),e):(je(t),null);case 22:case 23:return Ct(t),Sl(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),n=t.updateQueue,n!==null&&ys(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&V(ua),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ln(_e),je(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function gb(e,t){switch(rl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ln(_e),Ve(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return zr(t),null;case 31:if(t.memoizedState!==null){if(Ct(t),t.alternate===null)throw Error(s(340));oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ct(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(He),null;case 4:return Ve(),null;case 10:return ln(t.type),null;case 22:case 23:return Ct(t),Sl(),e!==null&&V(ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ln(_e),null;case 25:return null;default:return null}}function Vm(e,t){switch(rl(t),t.tag){case 3:ln(_e),Ve();break;case 26:case 27:case 5:zr(t);break;case 4:Ve();break;case 31:t.memoizedState!==null&&Ct(t);break;case 13:Ct(t);break;case 19:V(He);break;case 10:ln(t.type);break;case 22:case 23:Ct(t),Sl(),e!==null&&V(ua);break;case 24:ln(_e)}}function Ki(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var o=r.next;n=o;do{if((n.tag&e)===e){r=void 0;var c=n.create,d=n.inst;r=c(),d.destroy=r}n=n.next}while(n!==o)}}catch(y){Ce(t,t.return,y)}}function Bn(e,t,n){try{var r=t.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&e)===e){var d=r.inst,y=d.destroy;if(y!==void 0){d.destroy=void 0,o=t;var A=n,U=y;try{U()}catch(B){Ce(o,A,B)}}}r=r.next}while(r!==c)}}catch(B){Ce(t,t.return,B)}}function Hm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Mh(t,n)}catch(r){Ce(e,e.return,r)}}}function Gm(e,t,n){n.props=pa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Ce(e,t,r)}}function Qi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(o){Ce(e,t,o)}}function Qt(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(o){Ce(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Ce(e,t,o)}else n.current=null}function Nm(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(o){Ce(e,e.return,o)}}function Jl(e,t,n){try{var r=e.stateNode;Vb(r,e.type,n,t),r[ut]=t}catch(o){Ce(e,e.return,o)}}function _m(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_n(e.type)||e.tag===4}function $l(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_m(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_n(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nn));else if(r!==4&&(r===27&&_n(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ec(e,t,n),e=e.sibling;e!==null;)ec(e,t,n),e=e.sibling}function vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&_n(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(vs(e,t,n),e=e.sibling;e!==null;)vs(e,t,n),e=e.sibling}function Im(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);tt(t,r,n),t[We]=e,t[ut]=n}catch(c){Ce(e,e.return,c)}}var mn=!1,Fe=!1,tc=!1,qm=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function yb(e,t){if(e=e.containerInfo,Ac=Hs,e=nh(e),Ko(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var d=0,y=-1,A=-1,U=0,B=0,O=e,M=null;t:for(;;){for(var j;O!==n||o!==0&&O.nodeType!==3||(y=d+o),O!==c||r!==0&&O.nodeType!==3||(A=d+r),O.nodeType===3&&(d+=O.nodeValue.length),(j=O.firstChild)!==null;)M=O,O=j;for(;;){if(O===e)break t;if(M===n&&++U===o&&(y=d),M===c&&++B===r&&(A=d),(j=O.nextSibling)!==null)break;O=M,M=O.parentNode}O=j}n=y===-1||A===-1?null:{start:y,end:A}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cc={focusedElem:e,selectionRange:n},Hs=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,o=c.memoizedProps,c=c.memoizedState,r=n.stateNode;try{var Y=pa(n.type,o);e=r.getSnapshotBeforeUpdate(Y,c),r.__reactInternalSnapshotBeforeUpdate=e}catch(te){Ce(n,n.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ec(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ec(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function Fm(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:pn(e,n),r&4&&Ki(5,n);break;case 1:if(pn(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){Ce(n,n.return,d)}else{var o=pa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ce(n,n.return,d)}}r&64&&Hm(n),r&512&&Qi(n,n.return);break;case 3:if(pn(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Mh(e,t)}catch(d){Ce(n,n.return,d)}}break;case 27:t===null&&r&4&&Im(n);case 26:case 5:pn(e,n),t===null&&r&4&&Nm(n),r&512&&Qi(n,n.return);break;case 12:pn(e,n);break;case 31:pn(e,n),r&4&&Km(e,n);break;case 13:pn(e,n),r&4&&Qm(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Eb.bind(null,n),Xb(e,n))));break;case 22:if(r=n.memoizedState!==null||mn,!r){t=t!==null&&t.memoizedState!==null||Fe,o=mn;var c=Fe;mn=r,(Fe=t)&&!c?gn(e,n,(n.subtreeFlags&8772)!==0):pn(e,n),mn=o,Fe=c}break;case 30:break;default:pn(e,n)}}function Xm(e){var t=e.alternate;t!==null&&(e.alternate=null,Xm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ro(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,ht=!1;function fn(e,t,n){for(n=n.child;n!==null;)Ym(e,t,n),n=n.sibling}function Ym(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(bi,n)}catch{}switch(n.tag){case 26:Fe||Qt(n,t),fn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Fe||Qt(n,t);var r=ke,o=ht;_n(n.type)&&(ke=n.stateNode,ht=!1),fn(e,t,n),ir(n.stateNode),ke=r,ht=o;break;case 5:Fe||Qt(n,t);case 6:if(r=ke,o=ht,ke=null,fn(e,t,n),ke=r,ht=o,ke!==null)if(ht)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(n.stateNode)}catch(c){Ce(n,t,c)}else try{ke.removeChild(n.stateNode)}catch(c){Ce(n,t,c)}break;case 18:ke!==null&&(ht?(e=ke,Gf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),oi(e)):Gf(ke,n.stateNode));break;case 4:r=ke,o=ht,ke=n.stateNode.containerInfo,ht=!0,fn(e,t,n),ke=r,ht=o;break;case 0:case 11:case 14:case 15:Bn(2,n,t),Fe||Bn(4,n,t),fn(e,t,n);break;case 1:Fe||(Qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&Gm(n,t,r)),fn(e,t,n);break;case 21:fn(e,t,n);break;case 22:Fe=(r=Fe)||n.memoizedState!==null,fn(e,t,n),Fe=r;break;default:fn(e,t,n)}}function Km(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{oi(e)}catch(n){Ce(t,t.return,n)}}}function Qm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{oi(e)}catch(n){Ce(t,t.return,n)}}function vb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new qm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new qm),t;default:throw Error(s(435,e.tag))}}function bs(e,t){var n=vb(e);t.forEach(function(r){if(!n.has(r)){n.add(r);var o=Ub.bind(null,e,r);r.then(o,o)}})}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r],c=e,d=t,y=d;e:for(;y!==null;){switch(y.tag){case 27:if(_n(y.type)){ke=y.stateNode,ht=!1;break e}break;case 5:ke=y.stateNode,ht=!1;break e;case 3:case 4:ke=y.stateNode.containerInfo,ht=!0;break e}y=y.return}if(ke===null)throw Error(s(160));Ym(c,d,o),ke=null,ht=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Zm(t,e),t=t.sibling}var _t=null;function Zm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),ft(e),r&4&&(Bn(3,e,e.return),Ki(3,e),Bn(5,e,e.return));break;case 1:mt(t,e),ft(e),r&512&&(Fe||n===null||Qt(n,n.return)),r&64&&mn&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var o=_t;if(mt(t,e),ft(e),r&512&&(Fe||n===null||Qt(n,n.return)),r&4){var c=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(r){case"title":c=o.getElementsByTagName("title")[0],(!c||c[Ai]||c[We]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(r),o.head.insertBefore(c,o.querySelector("head > title"))),tt(c,r,n),c[We]=e,Qe(c),r=c;break e;case"link":var d=Wf("link","href",o).get(r+(n.href||""));if(d){for(var y=0;y<d.length;y++)if(c=d[y],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(y,1);break t}}c=o.createElement(r),tt(c,r,n),o.head.appendChild(c);break;case"meta":if(d=Wf("meta","content",o).get(r+(n.content||""))){for(y=0;y<d.length;y++)if(c=d[y],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(y,1);break t}}c=o.createElement(r),tt(c,r,n),o.head.appendChild(c);break;default:throw Error(s(468,r))}c[We]=e,Qe(c),r=c}e.stateNode=r}else Jf(o,e.type,e.stateNode);else e.stateNode=Zf(o,r,e.memoizedProps);else c!==r?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,r===null?Jf(o,e.type,e.stateNode):Zf(o,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Jl(e,e.memoizedProps,n.memoizedProps)}break;case 27:mt(t,e),ft(e),r&512&&(Fe||n===null||Qt(n,n.return)),n!==null&&r&4&&Jl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(mt(t,e),ft(e),r&512&&(Fe||n===null||Qt(n,n.return)),e.flags&32){o=e.stateNode;try{Da(o,"")}catch(Y){Ce(e,e.return,Y)}}r&4&&e.stateNode!=null&&(o=e.memoizedProps,Jl(e,o,n!==null?n.memoizedProps:o)),r&1024&&(tc=!0);break;case 6:if(mt(t,e),ft(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(Y){Ce(e,e.return,Y)}}break;case 3:if(Bs=null,o=_t,_t=ks(t.containerInfo),mt(t,e),_t=o,ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oi(t.containerInfo)}catch(Y){Ce(e,e.return,Y)}tc&&(tc=!1,Wm(e));break;case 4:r=_t,_t=ks(e.stateNode.containerInfo),mt(t,e),ft(e),_t=r;break;case 12:mt(t,e),ft(e);break;case 31:mt(t,e),ft(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,bs(e,r)));break;case 13:mt(t,e),ft(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ws=yt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,bs(e,r)));break;case 22:o=e.memoizedState!==null;var A=n!==null&&n.memoizedState!==null,U=mn,B=Fe;if(mn=U||o,Fe=B||A,mt(t,e),Fe=B,mn=U,ft(e),r&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||A||mn||Fe||ga(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){A=n=t;try{if(c=A.stateNode,o)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{y=A.stateNode;var O=A.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null;y.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(Y){Ce(A,A.return,Y)}}}else if(t.tag===6){if(n===null){A=t;try{A.stateNode.nodeValue=o?"":A.memoizedProps}catch(Y){Ce(A,A.return,Y)}}}else if(t.tag===18){if(n===null){A=t;try{var j=A.stateNode;o?Nf(j,!0):Nf(A.stateNode,!1)}catch(Y){Ce(A,A.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,bs(e,n))));break;case 19:mt(t,e),ft(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,bs(e,r)));break;case 30:break;case 21:break;default:mt(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(_m(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var o=n.stateNode,c=$l(e);vs(e,c,o);break;case 5:var d=n.stateNode;n.flags&32&&(Da(d,""),n.flags&=-33);var y=$l(e);vs(e,y,d);break;case 3:case 4:var A=n.stateNode.containerInfo,U=$l(e);ec(e,U,A);break;default:throw Error(s(161))}}catch(B){Ce(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function pn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Fm(e,t.alternate,t),t=t.sibling}function ga(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Bn(4,t,t.return),ga(t);break;case 1:Qt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Gm(t,t.return,n),ga(t);break;case 27:ir(t.stateNode);case 26:case 5:Qt(t,t.return),ga(t);break;case 22:t.memoizedState===null&&ga(t);break;case 30:ga(t);break;default:ga(t)}e=e.sibling}}function gn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,o=e,c=t,d=c.flags;switch(c.tag){case 0:case 11:case 15:gn(o,c,n),Ki(4,c);break;case 1:if(gn(o,c,n),r=c,o=r.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(U){Ce(r,r.return,U)}if(r=c,o=r.updateQueue,o!==null){var y=r.stateNode;try{var A=o.shared.hiddenCallbacks;if(A!==null)for(o.shared.hiddenCallbacks=null,o=0;o<A.length;o++)zh(A[o],y)}catch(U){Ce(r,r.return,U)}}n&&d&64&&Hm(c),Qi(c,c.return);break;case 27:Im(c);case 26:case 5:gn(o,c,n),n&&r===null&&d&4&&Nm(c),Qi(c,c.return);break;case 12:gn(o,c,n);break;case 31:gn(o,c,n),n&&d&4&&Km(o,c);break;case 13:gn(o,c,n),n&&d&4&&Qm(o,c);break;case 22:c.memoizedState===null&&gn(o,c,n),Qi(c,c.return);break;case 30:break;default:gn(o,c,n)}t=t.sibling}}function nc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Bi(n))}function ac(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bi(e))}function It(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jm(e,t,n,r),t=t.sibling}function Jm(e,t,n,r){var o=t.flags;switch(t.tag){case 0:case 11:case 15:It(e,t,n,r),o&2048&&Ki(9,t);break;case 1:It(e,t,n,r);break;case 3:It(e,t,n,r),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bi(e)));break;case 12:if(o&2048){It(e,t,n,r),e=t.stateNode;try{var c=t.memoizedProps,d=c.id,y=c.onPostCommit;typeof y=="function"&&y(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){Ce(t,t.return,A)}}else It(e,t,n,r);break;case 31:It(e,t,n,r);break;case 13:It(e,t,n,r);break;case 23:break;case 22:c=t.stateNode,d=t.alternate,t.memoizedState!==null?c._visibility&2?It(e,t,n,r):Zi(e,t):c._visibility&2?It(e,t,n,r):(c._visibility|=2,Za(e,t,n,r,(t.subtreeFlags&10256)!==0||!1)),o&2048&&nc(d,t);break;case 24:It(e,t,n,r),o&2048&&ac(t.alternate,t);break;default:It(e,t,n,r)}}function Za(e,t,n,r,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,d=t,y=n,A=r,U=d.flags;switch(d.tag){case 0:case 11:case 15:Za(c,d,y,A,o),Ki(8,d);break;case 23:break;case 22:var B=d.stateNode;d.memoizedState!==null?B._visibility&2?Za(c,d,y,A,o):Zi(c,d):(B._visibility|=2,Za(c,d,y,A,o)),o&&U&2048&&nc(d.alternate,d);break;case 24:Za(c,d,y,A,o),o&&U&2048&&ac(d.alternate,d);break;default:Za(c,d,y,A,o)}t=t.sibling}}function Zi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,o=r.flags;switch(r.tag){case 22:Zi(n,r),o&2048&&nc(r.alternate,r);break;case 24:Zi(n,r),o&2048&&ac(r.alternate,r);break;default:Zi(n,r)}t=t.sibling}}var Wi=8192;function Wa(e,t,n){if(e.subtreeFlags&Wi)for(e=e.child;e!==null;)$m(e,t,n),e=e.sibling}function $m(e,t,n){switch(e.tag){case 26:Wa(e,t,n),e.flags&Wi&&e.memoizedState!==null&&i1(n,_t,e.memoizedState,e.memoizedProps);break;case 5:Wa(e,t,n);break;case 3:case 4:var r=_t;_t=ks(e.stateNode.containerInfo),Wa(e,t,n),_t=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Wi,Wi=16777216,Wa(e,t,n),Wi=r):Wa(e,t,n));break;default:Wa(e,t,n)}}function ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Ze=r,nf(r,e)}ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tf(e),e=e.sibling}function tf(e){switch(e.tag){case 0:case 11:case 15:Ji(e),e.flags&2048&&Bn(9,e,e.return);break;case 3:Ji(e);break;case 12:Ji(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ss(e)):Ji(e);break;default:Ji(e)}}function Ss(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Ze=r,nf(r,e)}ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Bn(8,t,t.return),Ss(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ss(t));break;default:Ss(t)}e=e.sibling}}function nf(e,t){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:Bn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Bi(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Ze=r;else e:for(n=e;Ze!==null;){r=Ze;var o=r.sibling,c=r.return;if(Xm(r),r===n){Ze=null;break e}if(o!==null){o.return=c,Ze=o;break e}Ze=c}}}var bb={getCacheForType:function(e){var t=$e(_e),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $e(_e).controller.signal}},Sb=typeof WeakMap=="function"?WeakMap:Map,be=0,ze=null,ue=null,he=0,Ae=0,Tt=null,Ln=!1,Ja=!1,ic=!1,yn=0,Be=0,On=0,ya=0,rc=0,xt=0,$a=0,$i=null,pt=null,sc=!1,ws=0,af=0,As=1/0,Cs=null,Vn=null,Ye=0,Hn=null,ei=null,vn=0,oc=0,lc=null,rf=null,er=0,cc=null;function Et(){return(be&2)!==0&&he!==0?he&-he:P.T!==null?pc():Sd()}function sf(){if(xt===0)if((he&536870912)===0||pe){var e=Rr;Rr<<=1,(Rr&3932160)===0&&(Rr=262144),xt=e}else xt=536870912;return e=At.current,e!==null&&(e.flags|=32),xt}function gt(e,t,n){(e===ze&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(ti(e,0),Gn(e,he,xt,!1)),wi(e,n),((be&2)===0||e!==ze)&&(e===ze&&((be&2)===0&&(ya|=n),Be===4&&Gn(e,he,xt,!1)),Zt(e))}function of(e,t,n){if((be&6)!==0)throw Error(s(327));var r=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Si(e,t),o=r?Cb(e,t):dc(e,t,!0),c=r;do{if(o===0){Ja&&!r&&Gn(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!wb(n)){o=dc(e,t,!1),c=!1;continue}if(o===2){if(c=t,e.errorRecoveryDisabledLanes&c)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var y=e;o=$i;var A=y.current.memoizedState.isDehydrated;if(A&&(ti(y,d).flags|=256),d=dc(y,d,!1),d!==2){if(ic&&!A){y.errorRecoveryDisabledLanes|=c,ya|=c,o=4;break e}c=pt,pt=o,c!==null&&(pt===null?pt=c:pt.push.apply(pt,c))}o=d}if(c=!1,o!==2)continue}}if(o===1){ti(e,0),Gn(e,t,0,!0);break}e:{switch(r=e,c=o,c){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Gn(r,t,xt,!Ln);break e;case 2:pt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(o=ws+300-yt(),10<o)){if(Gn(r,t,xt,!Ln),kr(r,0,!0)!==0)break e;vn=t,r.timeoutHandle=Vf(lf.bind(null,r,n,pt,Cs,sc,t,xt,ya,$a,Ln,c,"Throttled",-0,0),o);break e}lf(r,n,pt,Cs,sc,t,xt,ya,$a,Ln,c,null,-0,0)}}break}while(!0);Zt(e)}function lf(e,t,n,r,o,c,d,y,A,U,B,O,M,j){if(e.timeoutHandle=-1,O=t.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},$m(t,c,O);var Y=(c&62914560)===c?ws-yt():(c&4194048)===c?af-yt():0;if(Y=r1(O,Y),Y!==null){vn=c,e.cancelPendingCommit=Y(gf.bind(null,e,t,c,n,r,o,d,y,A,B,O,null,M,j)),Gn(e,c,d,!U);return}}gf(e,t,c,n,r,o,d,y,A)}function wb(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var o=n[r],c=o.getSnapshot;o=o.value;try{if(!St(c(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gn(e,t,n,r){t&=~rc,t&=~ya,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var o=t;0<o;){var c=31-bt(o),d=1<<c;r[c]=-1,o&=~d}n!==0&&yd(e,n,t)}function Ts(){return(be&6)===0?(tr(0),!1):!0}function uc(){if(ue!==null){if(Ae===0)var e=ue.return;else e=ue,on=la=null,El(e),Fa=null,Oi=0,e=ue;for(;e!==null;)Vm(e.alternate,e),e=e.return;ue=null}}function ti(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Nb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),vn=0,uc(),ze=e,ue=n=rn(e.current,null),he=t,Ae=0,Tt=null,Ln=!1,Ja=Si(e,t),ic=!1,$a=xt=rc=ya=On=Be=0,pt=$i=null,sc=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var o=31-bt(r),c=1<<o;t|=e[o],r&=~c}return yn=t,Fr(),n}function cf(e,t){re=null,P.H=Fi,t===qa||t===$r?(t=Th(),Ae=3):t===fl?(t=Th(),Ae=4):Ae=t===_l?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,ue===null&&(Be=1,ms(e,Rt(t,e.current)))}function uf(){var e=At.current;return e===null?!0:(he&4194048)===he?Bt===null:(he&62914560)===he||(he&536870912)!==0?e===Bt:!1}function df(){var e=P.H;return P.H=Fi,e===null?Fi:e}function hf(){var e=P.A;return P.A=bb,e}function xs(){Be=4,Ln||(he&4194048)!==he&&At.current!==null||(Ja=!0),(On&134217727)===0&&(ya&134217727)===0||ze===null||Gn(ze,he,xt,!1)}function dc(e,t,n){var r=be;be|=2;var o=df(),c=hf();(ze!==e||he!==t)&&(Cs=null,ti(e,t)),t=!1;var d=Be;e:do try{if(Ae!==0&&ue!==null){var y=ue,A=Tt;switch(Ae){case 8:uc(),d=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var U=Ae;if(Ae=0,Tt=null,ni(e,y,A,U),n&&Ja){d=0;break e}break;default:U=Ae,Ae=0,Tt=null,ni(e,y,A,U)}}Ab(),d=Be;break}catch(B){cf(e,B)}while(!0);return t&&e.shellSuspendCounter++,on=la=null,be=r,P.H=o,P.A=c,ue===null&&(ze=null,he=0,Fr()),d}function Ab(){for(;ue!==null;)mf(ue)}function Cb(e,t){var n=be;be|=2;var r=df(),o=hf();ze!==e||he!==t?(Cs=null,As=yt()+500,ti(e,t)):Ja=Si(e,t);e:do try{if(Ae!==0&&ue!==null){t=ue;var c=Tt;t:switch(Ae){case 1:Ae=0,Tt=null,ni(e,t,c,1);break;case 2:case 9:if(Ah(c)){Ae=0,Tt=null,ff(t);break}t=function(){Ae!==2&&Ae!==9||ze!==e||(Ae=7),Zt(e)},c.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:Ah(c)?(Ae=0,Tt=null,ff(t)):(Ae=0,Tt=null,ni(e,t,c,7));break;case 5:var d=null;switch(ue.tag){case 26:d=ue.memoizedState;case 5:case 27:var y=ue;if(d?$f(d):y.stateNode.complete){Ae=0,Tt=null;var A=y.sibling;if(A!==null)ue=A;else{var U=y.return;U!==null?(ue=U,Es(U)):ue=null}break t}}Ae=0,Tt=null,ni(e,t,c,5);break;case 6:Ae=0,Tt=null,ni(e,t,c,6);break;case 8:uc(),Be=6;break e;default:throw Error(s(462))}}Tb();break}catch(B){cf(e,B)}while(!0);return on=la=null,P.H=r,P.A=o,be=n,ue!==null?0:(ze=null,he=0,Fr(),Be)}function Tb(){for(;ue!==null&&!Y0();)mf(ue)}function mf(e){var t=Lm(e.alternate,e,yn);e.memoizedProps=e.pendingProps,t===null?Es(e):ue=t}function ff(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Dm(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Dm(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:El(t);default:Vm(n,t),t=ue=dh(t,yn),t=Lm(n,t,yn)}e.memoizedProps=e.pendingProps,t===null?Es(e):ue=t}function ni(e,t,n,r){on=la=null,El(t),Fa=null,Oi=0;var o=t.return;try{if(hb(e,o,t,n,he)){Be=1,ms(e,Rt(n,e.current)),ue=null;return}}catch(c){if(o!==null)throw ue=o,c;Be=1,ms(e,Rt(n,e.current)),ue=null;return}t.flags&32768?(pe||r===1?e=!0:Ja||(he&536870912)!==0?e=!1:(Ln=e=!0,(r===2||r===9||r===3||r===6)&&(r=At.current,r!==null&&r.tag===13&&(r.flags|=16384))),pf(t,e)):Es(t)}function Es(e){var t=e;do{if((t.flags&32768)!==0){pf(t,Ln);return}e=t.return;var n=pb(t.alternate,t,yn);if(n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);Be===0&&(Be=5)}function pf(e,t){do{var n=gb(e.alternate,e);if(n!==null){n.flags&=32767,ue=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=n}while(e!==null);Be=6,ue=null}function gf(e,t,n,r,o,c,d,y,A){e.cancelPendingCommit=null;do Us();while(Ye!==0);if((be&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(c=t.lanes|t.childLanes,c|=$o,av(e,n,c,d,y,A),e===ze&&(ue=ze=null,he=0),ei=t,Hn=e,vn=n,oc=c,lc=o,rf=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,zb(Mr,function(){return wf(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,o=I.p,I.p=2,d=be,be|=4;try{yb(e,t,n)}finally{be=d,I.p=o,P.T=r}}Ye=1,yf(),vf(),bf()}}function yf(){if(Ye===1){Ye=0;var e=Hn,t=ei,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=P.T,P.T=null;var r=I.p;I.p=2;var o=be;be|=4;try{Zm(t,e);var c=Cc,d=nh(e.containerInfo),y=c.focusedElem,A=c.selectionRange;if(d!==y&&y&&y.ownerDocument&&th(y.ownerDocument.documentElement,y)){if(A!==null&&Ko(y)){var U=A.start,B=A.end;if(B===void 0&&(B=U),"selectionStart"in y)y.selectionStart=U,y.selectionEnd=Math.min(B,y.value.length);else{var O=y.ownerDocument||document,M=O&&O.defaultView||window;if(M.getSelection){var j=M.getSelection(),Y=y.textContent.length,te=Math.min(A.start,Y),Ue=A.end===void 0?te:Math.min(A.end,Y);!j.extend&&te>Ue&&(d=Ue,Ue=te,te=d);var x=eh(y,te),C=eh(y,Ue);if(x&&C&&(j.rangeCount!==1||j.anchorNode!==x.node||j.anchorOffset!==x.offset||j.focusNode!==C.node||j.focusOffset!==C.offset)){var E=O.createRange();E.setStart(x.node,x.offset),j.removeAllRanges(),te>Ue?(j.addRange(E),j.extend(C.node,C.offset)):(E.setEnd(C.node,C.offset),j.addRange(E))}}}}for(O=[],j=y;j=j.parentNode;)j.nodeType===1&&O.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<O.length;y++){var L=O[y];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}Hs=!!Ac,Cc=Ac=null}finally{be=o,I.p=r,P.T=n}}e.current=t,Ye=2}}function vf(){if(Ye===2){Ye=0;var e=Hn,t=ei,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=P.T,P.T=null;var r=I.p;I.p=2;var o=be;be|=4;try{Fm(e,t.alternate,t)}finally{be=o,I.p=r,P.T=n}}Ye=3}}function bf(){if(Ye===4||Ye===3){Ye=0,K0();var e=Hn,t=ei,n=vn,r=rf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,ei=Hn=null,Sf(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Vn=null),Mo(n),t=t.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(bi,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=P.T,o=I.p,I.p=2,P.T=null;try{for(var c=e.onRecoverableError,d=0;d<r.length;d++){var y=r[d];c(y.value,{componentStack:y.stack})}}finally{P.T=t,I.p=o}}(vn&3)!==0&&Us(),Zt(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===cc?er++:(er=0,cc=e):er=0,tr(0)}}function Sf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Bi(t)))}function Us(){return yf(),vf(),bf(),wf()}function wf(){if(Ye!==5)return!1;var e=Hn,t=oc;oc=0;var n=Mo(vn),r=P.T,o=I.p;try{I.p=32>n?32:n,P.T=null,n=lc,lc=null;var c=Hn,d=vn;if(Ye=0,ei=Hn=null,vn=0,(be&6)!==0)throw Error(s(331));var y=be;if(be|=4,tf(c.current),Jm(c,c.current,d,n),be=y,tr(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(bi,c)}catch{}return!0}finally{I.p=o,P.T=r,Sf(e,t)}}function Af(e,t,n){t=Rt(n,t),t=Nl(e.stateNode,t,2),e=jn(e,t,2),e!==null&&(wi(e,2),Zt(e))}function Ce(e,t,n){if(e.tag===3)Af(e,e,n);else for(;t!==null;){if(t.tag===3){Af(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vn===null||!Vn.has(r))){e=Rt(n,e),n=Am(2),r=jn(t,n,2),r!==null&&(Cm(n,r,t,e),wi(r,2),Zt(r));break}}t=t.return}}function hc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sb;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(ic=!0,o.add(n),e=xb.bind(null,e,t,n),t.then(e,e))}function xb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ze===e&&(he&n)===n&&(Be===4||Be===3&&(he&62914560)===he&&300>yt()-ws?(be&2)===0&&ti(e,0):rc|=n,$a===he&&($a=0)),Zt(e)}function Cf(e,t){t===0&&(t=gd()),e=ra(e,t),e!==null&&(wi(e,t),Zt(e))}function Eb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cf(e,n)}function Ub(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),Cf(e,n)}function zb(e,t){return xo(e,t)}var zs=null,ai=null,mc=!1,Ms=!1,fc=!1,Nn=0;function Zt(e){e!==ai&&e.next===null&&(ai===null?zs=ai=e:ai=ai.next=e),Ms=!0,mc||(mc=!0,Db())}function tr(e,t){if(!fc&&Ms){fc=!0;do for(var n=!1,r=zs;r!==null;){if(e!==0){var o=r.pendingLanes;if(o===0)var c=0;else{var d=r.suspendedLanes,y=r.pingedLanes;c=(1<<31-bt(42|e)+1)-1,c&=o&~(d&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Uf(r,c))}else c=he,c=kr(r,r===ze?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Si(r,c)||(n=!0,Uf(r,c));r=r.next}while(n);fc=!1}}function Mb(){Tf()}function Tf(){Ms=mc=!1;var e=0;Nn!==0&&Gb()&&(e=Nn);for(var t=yt(),n=null,r=zs;r!==null;){var o=r.next,c=xf(r,t);c===0?(r.next=null,n===null?zs=o:n.next=o,o===null&&(ai=n)):(n=r,(e!==0||(c&3)!==0)&&(Ms=!0)),r=o}Ye!==0&&Ye!==5||tr(e),Nn!==0&&(Nn=0)}function xf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var d=31-bt(c),y=1<<d,A=o[d];A===-1?((y&n)===0||(y&r)!==0)&&(o[d]=nv(y,t)):A<=t&&(e.expiredLanes|=y),c&=~y}if(t=ze,n=he,n=kr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Eo(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Si(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Eo(r),Mo(n)){case 2:case 8:n=fd;break;case 32:n=Mr;break;case 268435456:n=pd;break;default:n=Mr}return r=Ef.bind(null,e),n=xo(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Eo(r),e.callbackPriority=2,e.callbackNode=null,2}function Ef(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Us()&&e.callbackNode!==n)return null;var r=he;return r=kr(e,e===ze?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(of(e,r,t),xf(e,yt()),e.callbackNode!=null&&e.callbackNode===n?Ef.bind(null,e):null)}function Uf(e,t){if(Us())return null;of(e,t,!0)}function Db(){_b(function(){(be&6)!==0?xo(md,Mb):Tf()})}function pc(){if(Nn===0){var e=_a;e===0&&(e=Dr,Dr<<=1,(Dr&261888)===0&&(Dr=256)),Nn=e}return Nn}function zf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Or(""+e)}function Mf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Rb(e,t,n,r,o){if(t==="submit"&&n&&n.stateNode===o){var c=zf((o[ut]||null).action),d=r.submitter;d&&(t=(t=d[ut]||null)?zf(t.formAction):d.getAttribute("formAction"),t!==null&&(c=t,d=null));var y=new Nr("action","action",null,r,o);e.push({event:y,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Nn!==0){var A=d?Mf(o,d):new FormData(o);Bl(n,{pending:!0,data:A,method:o.method,action:c},null,A)}}else typeof c=="function"&&(y.preventDefault(),A=d?Mf(o,d):new FormData(o),Bl(n,{pending:!0,data:A,method:o.method,action:c},c,A))},currentTarget:o}]})}}for(var gc=0;gc<Jo.length;gc++){var yc=Jo[gc],jb=yc.toLowerCase(),kb=yc[0].toUpperCase()+yc.slice(1);Nt(jb,"on"+kb)}Nt(rh,"onAnimationEnd"),Nt(sh,"onAnimationIteration"),Nt(oh,"onAnimationStart"),Nt("dblclick","onDoubleClick"),Nt("focusin","onFocus"),Nt("focusout","onBlur"),Nt(Qv,"onTransitionRun"),Nt(Zv,"onTransitionStart"),Nt(Wv,"onTransitionCancel"),Nt(lh,"onTransitionEnd"),za("onMouseEnter",["mouseout","mouseover"]),za("onMouseLeave",["mouseout","mouseover"]),za("onPointerEnter",["pointerout","pointerover"]),za("onPointerLeave",["pointerout","pointerover"]),ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nr));function Df(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var c=void 0;if(t)for(var d=r.length-1;0<=d;d--){var y=r[d],A=y.instance,U=y.currentTarget;if(y=y.listener,A!==c&&o.isPropagationStopped())break e;c=y,o.currentTarget=U;try{c(o)}catch(B){qr(B)}o.currentTarget=null,c=A}else for(d=0;d<r.length;d++){if(y=r[d],A=y.instance,U=y.currentTarget,y=y.listener,A!==c&&o.isPropagationStopped())break e;c=y,o.currentTarget=U;try{c(o)}catch(B){qr(B)}o.currentTarget=null,c=A}}}}function de(e,t){var n=t[Do];n===void 0&&(n=t[Do]=new Set);var r=e+"__bubble";n.has(r)||(Rf(t,e,2,!1),n.add(r))}function vc(e,t,n){var r=0;t&&(r|=4),Rf(n,e,r,t)}var Ds="_reactListening"+Math.random().toString(36).slice(2);function bc(e){if(!e[Ds]){e[Ds]=!0,Cd.forEach(function(n){n!=="selectionchange"&&(Pb.has(n)||vc(n,!1,e),vc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ds]||(t[Ds]=!0,vc("selectionchange",!1,t))}}function Rf(e,t,n,r){switch(sp(t)){case 2:var o=l1;break;case 8:o=c1;break;default:o=Pc}n=o.bind(null,t,n,e),o=void 0,!Ho||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Sc(e,t,n,r,o){var c=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var d=r.tag;if(d===3||d===4){var y=r.stateNode.containerInfo;if(y===o)break;if(d===4)for(d=r.return;d!==null;){var A=d.tag;if((A===3||A===4)&&d.stateNode.containerInfo===o)return;d=d.return}for(;y!==null;){if(d=xa(y),d===null)return;if(A=d.tag,A===5||A===6||A===26||A===27){r=c=d;continue e}y=y.parentNode}}r=r.return}Bd(function(){var U=c,B=Oo(n),O=[];e:{var M=ch.get(e);if(M!==void 0){var j=Nr,Y=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":j=Uv;break;case"focusin":Y="focus",j=Io;break;case"focusout":Y="blur",j=Io;break;case"beforeblur":case"afterblur":j=Io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Dv;break;case rh:case sh:case oh:j=vv;break;case lh:j=jv;break;case"scroll":case"scrollend":j=mv;break;case"wheel":j=Pv;break;case"copy":case"cut":case"paste":j=Sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Gd;break;case"toggle":case"beforetoggle":j=Lv}var te=(t&4)!==0,Ue=!te&&(e==="scroll"||e==="scrollend"),x=te?M!==null?M+"Capture":null:M;te=[];for(var C=U,E;C!==null;){var L=C;if(E=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||E===null||x===null||(L=Ti(C,x),L!=null&&te.push(ar(C,L,E))),Ue)break;C=C.return}0<te.length&&(M=new j(M,Y,null,n,B),O.push({event:M,listeners:te}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",M&&n!==Lo&&(Y=n.relatedTarget||n.fromElement)&&(xa(Y)||Y[Ta]))break e;if((j||M)&&(M=B.window===B?B:(M=B.ownerDocument)?M.defaultView||M.parentWindow:window,j?(Y=n.relatedTarget||n.toElement,j=U,Y=Y?xa(Y):null,Y!==null&&(Ue=m(Y),te=Y.tag,Y!==Ue||te!==5&&te!==27&&te!==6)&&(Y=null)):(j=null,Y=U),j!==Y)){if(te=Vd,L="onMouseLeave",x="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(te=Gd,L="onPointerLeave",x="onPointerEnter",C="pointer"),Ue=j==null?M:Ci(j),E=Y==null?M:Ci(Y),M=new te(L,C+"leave",j,n,B),M.target=Ue,M.relatedTarget=E,L=null,xa(B)===U&&(te=new te(x,C+"enter",Y,n,B),te.target=E,te.relatedTarget=Ue,L=te),Ue=L,j&&Y)t:{for(te=Bb,x=j,C=Y,E=0,L=x;L;L=te(L))E++;L=0;for(var ee=C;ee;ee=te(ee))L++;for(;0<E-L;)x=te(x),E--;for(;0<L-E;)C=te(C),L--;for(;E--;){if(x===C||C!==null&&x===C.alternate){te=x;break t}x=te(x),C=te(C)}te=null}else te=null;j!==null&&jf(O,M,j,te,!1),Y!==null&&Ue!==null&&jf(O,Ue,Y,te,!0)}}e:{if(M=U?Ci(U):window,j=M.nodeName&&M.nodeName.toLowerCase(),j==="select"||j==="input"&&M.type==="file")var ge=Kd;else if(Xd(M))if(Qd)ge=Xv;else{ge=qv;var J=Iv}else j=M.nodeName,!j||j.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?U&&Bo(U.elementType)&&(ge=Kd):ge=Fv;if(ge&&(ge=ge(e,U))){Yd(O,ge,n,B);break e}J&&J(e,M,U),e==="focusout"&&U&&M.type==="number"&&U.memoizedProps.value!=null&&Po(M,"number",M.value)}switch(J=U?Ci(U):window,e){case"focusin":(Xd(J)||J.contentEditable==="true")&&(Pa=J,Qo=U,ji=null);break;case"focusout":ji=Qo=Pa=null;break;case"mousedown":Zo=!0;break;case"contextmenu":case"mouseup":case"dragend":Zo=!1,ah(O,n,B);break;case"selectionchange":if(Kv)break;case"keydown":case"keyup":ah(O,n,B)}var oe;if(Fo)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else ka?qd(e,n)&&(me="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(me="onCompositionStart");me&&(Nd&&n.locale!=="ko"&&(ka||me!=="onCompositionStart"?me==="onCompositionEnd"&&ka&&(oe=Ld()):(xn=B,Go="value"in xn?xn.value:xn.textContent,ka=!0)),J=Rs(U,me),0<J.length&&(me=new Hd(me,e,null,n,B),O.push({event:me,listeners:J}),oe?me.data=oe:(oe=Fd(n),oe!==null&&(me.data=oe)))),(oe=Vv?Hv(e,n):Gv(e,n))&&(me=Rs(U,"onBeforeInput"),0<me.length&&(J=new Hd("onBeforeInput","beforeinput",null,n,B),O.push({event:J,listeners:me}),J.data=oe)),Rb(O,e,U,n,B)}Df(O,t)})}function ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Rs(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=Ti(e,n),o!=null&&r.unshift(ar(e,o,c)),o=Ti(e,t),o!=null&&r.push(ar(e,o,c))),e.tag===3)return r;e=e.return}return[]}function Bb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jf(e,t,n,r,o){for(var c=t._reactName,d=[];n!==null&&n!==r;){var y=n,A=y.alternate,U=y.stateNode;if(y=y.tag,A!==null&&A===r)break;y!==5&&y!==26&&y!==27||U===null||(A=U,o?(U=Ti(n,c),U!=null&&d.unshift(ar(n,U,A))):o||(U=Ti(n,c),U!=null&&d.push(ar(n,U,A)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Lb=/\r\n?/g,Ob=/\u0000|\uFFFD/g;function kf(e){return(typeof e=="string"?e:""+e).replace(Lb,`
`).replace(Ob,"")}function Pf(e,t){return t=kf(t),kf(e)===t}function Ee(e,t,n,r,o,c){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||Da(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&Da(e,""+r);break;case"className":Br(e,"class",r);break;case"tabIndex":Br(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Br(e,n,r);break;case"style":kd(e,r,c);break;case"data":if(t!=="object"){Br(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Or(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Ee(e,t,"name",o.name,o,null),Ee(e,t,"formEncType",o.formEncType,o,null),Ee(e,t,"formMethod",o.formMethod,o,null),Ee(e,t,"formTarget",o.formTarget,o,null)):(Ee(e,t,"encType",o.encType,o,null),Ee(e,t,"method",o.method,o,null),Ee(e,t,"target",o.target,o,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Or(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=nn);break;case"onScroll":r!=null&&de("scroll",e);break;case"onScrollEnd":r!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=Or(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":de("beforetoggle",e),de("toggle",e),Pr(e,"popover",r);break;case"xlinkActuate":tn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":tn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":tn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":tn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":tn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":tn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":tn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":tn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":tn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Pr(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=dv.get(n)||n,Pr(e,n,r))}}function wc(e,t,n,r,o,c){switch(n){case"style":kd(e,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof r=="string"?Da(e,r):(typeof r=="number"||typeof r=="bigint")&&Da(e,""+r);break;case"onScroll":r!=null&&de("scroll",e);break;case"onScrollEnd":r!=null&&de("scrollend",e);break;case"onClick":r!=null&&(e.onclick=nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Td.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),c=e[ut]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,o),typeof r=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,o);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):Pr(e,n,r)}}}function tt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var r=!1,o=!1,c;for(c in n)if(n.hasOwnProperty(c)){var d=n[c];if(d!=null)switch(c){case"src":r=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ee(e,t,c,d,n,null)}}o&&Ee(e,t,"srcSet",n.srcSet,n,null),r&&Ee(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var y=c=d=o=null,A=null,U=null;for(r in n)if(n.hasOwnProperty(r)){var B=n[r];if(B!=null)switch(r){case"name":o=B;break;case"type":d=B;break;case"checked":A=B;break;case"defaultChecked":U=B;break;case"value":c=B;break;case"defaultValue":y=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,t));break;default:Ee(e,t,r,B,n,null)}}Md(e,c,y,A,U,d,o,!1);return;case"select":de("invalid",e),r=d=c=null;for(o in n)if(n.hasOwnProperty(o)&&(y=n[o],y!=null))switch(o){case"value":c=y;break;case"defaultValue":d=y;break;case"multiple":r=y;default:Ee(e,t,o,y,n,null)}t=c,n=d,e.multiple=!!r,t!=null?Ma(e,!!r,t,!1):n!=null&&Ma(e,!!r,n,!0);return;case"textarea":de("invalid",e),c=o=r=null;for(d in n)if(n.hasOwnProperty(d)&&(y=n[d],y!=null))switch(d){case"value":r=y;break;case"defaultValue":o=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(91));break;default:Ee(e,t,d,y,n,null)}Rd(e,r,o,c);return;case"option":for(A in n)n.hasOwnProperty(A)&&(r=n[A],r!=null)&&(A==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Ee(e,t,A,r,n,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(r=0;r<nr.length;r++)de(nr[r],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in n)if(n.hasOwnProperty(U)&&(r=n[U],r!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ee(e,t,U,r,n,null)}return;default:if(Bo(t)){for(B in n)n.hasOwnProperty(B)&&(r=n[B],r!==void 0&&wc(e,t,B,r,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(r=n[y],r!=null&&Ee(e,t,y,r,n,null))}function Vb(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,d=null,y=null,A=null,U=null,B=null;for(j in n){var O=n[j];if(n.hasOwnProperty(j)&&O!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":A=O;default:r.hasOwnProperty(j)||Ee(e,t,j,null,r,O)}}for(var M in r){var j=r[M];if(O=n[M],r.hasOwnProperty(M)&&(j!=null||O!=null))switch(M){case"type":c=j;break;case"name":o=j;break;case"checked":U=j;break;case"defaultChecked":B=j;break;case"value":d=j;break;case"defaultValue":y=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,t));break;default:j!==O&&Ee(e,t,M,j,r,O)}}ko(e,d,y,A,U,B,c,o);return;case"select":j=d=y=M=null;for(c in n)if(A=n[c],n.hasOwnProperty(c)&&A!=null)switch(c){case"value":break;case"multiple":j=A;default:r.hasOwnProperty(c)||Ee(e,t,c,null,r,A)}for(o in r)if(c=r[o],A=n[o],r.hasOwnProperty(o)&&(c!=null||A!=null))switch(o){case"value":M=c;break;case"defaultValue":y=c;break;case"multiple":d=c;default:c!==A&&Ee(e,t,o,c,r,A)}t=y,n=d,r=j,M!=null?Ma(e,!!n,M,!1):!!r!=!!n&&(t!=null?Ma(e,!!n,t,!0):Ma(e,!!n,n?[]:"",!1));return;case"textarea":j=M=null;for(y in n)if(o=n[y],n.hasOwnProperty(y)&&o!=null&&!r.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Ee(e,t,y,null,r,o)}for(d in r)if(o=r[d],c=n[d],r.hasOwnProperty(d)&&(o!=null||c!=null))switch(d){case"value":M=o;break;case"defaultValue":j=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:o!==c&&Ee(e,t,d,o,r,c)}Dd(e,M,j);return;case"option":for(var Y in n)M=n[Y],n.hasOwnProperty(Y)&&M!=null&&!r.hasOwnProperty(Y)&&(Y==="selected"?e.selected=!1:Ee(e,t,Y,null,r,M));for(A in r)M=r[A],j=n[A],r.hasOwnProperty(A)&&M!==j&&(M!=null||j!=null)&&(A==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":Ee(e,t,A,M,r,j));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in n)M=n[te],n.hasOwnProperty(te)&&M!=null&&!r.hasOwnProperty(te)&&Ee(e,t,te,null,r,M);for(U in r)if(M=r[U],j=n[U],r.hasOwnProperty(U)&&M!==j&&(M!=null||j!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,t));break;default:Ee(e,t,U,M,r,j)}return;default:if(Bo(t)){for(var Ue in n)M=n[Ue],n.hasOwnProperty(Ue)&&M!==void 0&&!r.hasOwnProperty(Ue)&&wc(e,t,Ue,void 0,r,M);for(B in r)M=r[B],j=n[B],!r.hasOwnProperty(B)||M===j||M===void 0&&j===void 0||wc(e,t,B,M,r,j);return}}for(var x in n)M=n[x],n.hasOwnProperty(x)&&M!=null&&!r.hasOwnProperty(x)&&Ee(e,t,x,null,r,M);for(O in r)M=r[O],j=n[O],!r.hasOwnProperty(O)||M===j||M==null&&j==null||Ee(e,t,O,M,r,j)}function Bf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var o=n[r],c=o.transferSize,d=o.initiatorType,y=o.duration;if(c&&y&&Bf(d)){for(d=0,y=o.responseEnd,r+=1;r<n.length;r++){var A=n[r],U=A.startTime;if(U>y)break;var B=A.transferSize,O=A.initiatorType;B&&Bf(O)&&(A=A.responseEnd,d+=B*(A<y?1:(y-U)/(A-U)))}if(--r,t+=8*(c+d)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ac=null,Cc=null;function js(e){return e.nodeType===9?e:e.ownerDocument}function Lf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Of(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Tc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xc=null;function Gb(){var e=window.event;return e&&e.type==="popstate"?e===xc?!1:(xc=e,!0):(xc=null,!1)}var Vf=typeof setTimeout=="function"?setTimeout:void 0,Nb=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,_b=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(e){return Hf.resolve(null).then(e).catch(Ib)}:Vf;function Ib(e){setTimeout(function(){throw e})}function _n(e){return e==="head"}function Gf(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(r===0){e.removeChild(o),oi(t);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")ir(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ir(n);for(var c=n.firstChild;c;){var d=c.nextSibling,y=c.nodeName;c[Ai]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=d}}else n==="body"&&ir(e.ownerDocument.body);n=o}while(n);oi(t)}function Nf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=r}while(n)}function Ec(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ec(n),Ro(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function qb(e,t,n,r){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ai])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Lt(e.nextSibling),e===null)break}return null}function Fb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Lt(e.nextSibling),e===null))return null;return e}function _f(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Lt(e.nextSibling),e===null))return null;return e}function Uc(e){return e.data==="$?"||e.data==="$~"}function zc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Xb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Mc=null;function If(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Lt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function qf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Ff(e,t,n){switch(t=js(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ir(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ro(e)}var Ot=new Map,Xf=new Set;function ks(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var bn=I.d;I.d={f:Yb,r:Kb,D:Qb,C:Zb,L:Wb,m:Jb,X:e1,S:$b,M:t1};function Yb(){var e=bn.f(),t=Ts();return e||t}function Kb(e){var t=Ea(e);t!==null&&t.tag===5&&t.type==="form"?lm(t):bn.r(e)}var ii=typeof document>"u"?null:document;function Yf(e,t,n){var r=ii;if(r&&typeof t=="string"&&t){var o=Mt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),Xf.has(o)||(Xf.add(o),e={rel:e,crossOrigin:n,href:t},r.querySelector(o)===null&&(t=r.createElement("link"),tt(t,"link",e),Qe(t),r.head.appendChild(t)))}}function Qb(e){bn.D(e),Yf("dns-prefetch",e,null)}function Zb(e,t){bn.C(e,t),Yf("preconnect",e,t)}function Wb(e,t,n){bn.L(e,t,n);var r=ii;if(r&&e&&t){var o='link[rel="preload"][as="'+Mt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Mt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+Mt(n.imageSizes)+'"]')):o+='[href="'+Mt(e)+'"]';var c=o;switch(t){case"style":c=ri(e);break;case"script":c=si(e)}Ot.has(c)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ot.set(c,e),r.querySelector(o)!==null||t==="style"&&r.querySelector(rr(c))||t==="script"&&r.querySelector(sr(c))||(t=r.createElement("link"),tt(t,"link",e),Qe(t),r.head.appendChild(t)))}}function Jb(e,t){bn.m(e,t);var n=ii;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Mt(r)+'"][href="'+Mt(e)+'"]',c=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=si(e)}if(!Ot.has(c)&&(e=S({rel:"modulepreload",href:e},t),Ot.set(c,e),n.querySelector(o)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(sr(c)))return}r=n.createElement("link"),tt(r,"link",e),Qe(r),n.head.appendChild(r)}}}function $b(e,t,n){bn.S(e,t,n);var r=ii;if(r&&e){var o=Ua(r).hoistableStyles,c=ri(e);t=t||"default";var d=o.get(c);if(!d){var y={loading:0,preload:null};if(d=r.querySelector(rr(c)))y.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ot.get(c))&&Dc(e,n);var A=d=r.createElement("link");Qe(A),tt(A,"link",e),A._p=new Promise(function(U,B){A.onload=U,A.onerror=B}),A.addEventListener("load",function(){y.loading|=1}),A.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Ps(d,t,r)}d={type:"stylesheet",instance:d,count:1,state:y},o.set(c,d)}}}function e1(e,t){bn.X(e,t);var n=ii;if(n&&e){var r=Ua(n).hoistableScripts,o=si(e),c=r.get(o);c||(c=n.querySelector(sr(o)),c||(e=S({src:e,async:!0},t),(t=Ot.get(o))&&Rc(e,t),c=n.createElement("script"),Qe(c),tt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(o,c))}}function t1(e,t){bn.M(e,t);var n=ii;if(n&&e){var r=Ua(n).hoistableScripts,o=si(e),c=r.get(o);c||(c=n.querySelector(sr(o)),c||(e=S({src:e,async:!0,type:"module"},t),(t=Ot.get(o))&&Rc(e,t),c=n.createElement("script"),Qe(c),tt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(o,c))}}function Kf(e,t,n,r){var o=(o=ce.current)?ks(o):null;if(!o)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ri(n.href),n=Ua(o).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ri(n.href);var c=Ua(o).hoistableStyles,d=c.get(e);if(d||(o=o.ownerDocument||o,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=o.querySelector(rr(e)))&&!c._p&&(d.instance=c,d.state.loading=5),Ot.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ot.set(e,n),c||n1(o,e,n,d.state))),t&&r===null)throw Error(s(528,""));return d}if(t&&r!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=si(n),n=Ua(o).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ri(e){return'href="'+Mt(e)+'"'}function rr(e){return'link[rel="stylesheet"]['+e+"]"}function Qf(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function n1(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),tt(t,"link",n),Qe(t),e.head.appendChild(t))}function si(e){return'[src="'+Mt(e)+'"]'}function sr(e){return"script[async]"+e}function Zf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Mt(n.href)+'"]');if(r)return t.instance=r,Qe(r),r;var o=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Qe(r),tt(r,"style",o),Ps(r,n.precedence,e),t.instance=r;case"stylesheet":o=ri(n.href);var c=e.querySelector(rr(o));if(c)return t.state.loading|=4,t.instance=c,Qe(c),c;r=Qf(n),(o=Ot.get(o))&&Dc(r,o),c=(e.ownerDocument||e).createElement("link"),Qe(c);var d=c;return d._p=new Promise(function(y,A){d.onload=y,d.onerror=A}),tt(c,"link",r),t.state.loading|=4,Ps(c,n.precedence,e),t.instance=c;case"script":return c=si(n.src),(o=e.querySelector(sr(c)))?(t.instance=o,Qe(o),o):(r=n,(o=Ot.get(c))&&(r=S({},n),Rc(r,o)),e=e.ownerDocument||e,o=e.createElement("script"),Qe(o),tt(o,"link",r),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Ps(r,n.precedence,e));return t.instance}function Ps(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,c=o,d=0;d<r.length;d++){var y=r[d];if(y.dataset.precedence===t)c=y;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Dc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Rc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Bs=null;function Wf(e,t,n){if(Bs===null){var r=new Map,o=Bs=new Map;o.set(n,r)}else o=Bs,r=o.get(n),r||(r=new Map,o.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var c=n[o];if(!(c[Ai]||c[We]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var d=c.getAttribute(t)||"";d=e+d;var y=r.get(d);y?y.push(c):r.set(d,[c])}}return r}function Jf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function a1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $f(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function i1(e,t,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=ri(r.href),c=t.querySelector(rr(o));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ls.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,Qe(c);return}c=t.ownerDocument||t,r=Qf(r),(o=Ot.get(o))&&Dc(r,o),c=c.createElement("link"),Qe(c);var d=c;d._p=new Promise(function(y,A){d.onload=y,d.onerror=A}),tt(c,"link",r),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ls.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var jc=0;function r1(e,t){return e.stylesheets&&e.count===0&&Vs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Vs(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&jc===0&&(jc=62500*Hb());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vs(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>jc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(o)}}:null}function Ls(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Os=null;function Vs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Os=new Map,t.forEach(s1,e),Os=null,Ls.call(e))}function s1(e,t){if(!(t.state.loading&4)){var n=Os.get(e);if(n)var r=n.get(null);else{n=new Map,Os.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var d=o[c];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),r=d)}r&&n.set(null,r)}o=t.instance,d=o.getAttribute("data-precedence"),c=n.get(d)||r,c===r&&n.set(null,o),n.set(d,o),this.count++,r=Ls.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var or={$$typeof:D,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function o1(e,t,n,r,o,c,d,y,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Uo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uo(0),this.hiddenUpdates=Uo(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function ep(e,t,n,r,o,c,d,y,A,U,B,O){return e=new o1(e,t,n,d,A,U,B,O,y),t=1,c===!0&&(t|=24),c=wt(3,null,null,t),e.current=c,c.stateNode=e,t=dl(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:r,isDehydrated:n,cache:t},pl(c),e}function tp(e){return e?(e=Oa,e):Oa}function np(e,t,n,r,o,c){o=tp(o),r.context===null?r.context=o:r.pendingContext=o,r=Rn(t),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=jn(e,r,t),n!==null&&(gt(n,e,t),Hi(n,e,t))}function ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kc(e,t){ap(e,t),(e=e.alternate)&&ap(e,t)}function ip(e){if(e.tag===13||e.tag===31){var t=ra(e,67108864);t!==null&&gt(t,e,67108864),kc(e,67108864)}}function rp(e){if(e.tag===13||e.tag===31){var t=Et();t=zo(t);var n=ra(e,t);n!==null&&gt(n,e,t),kc(e,t)}}var Hs=!0;function l1(e,t,n,r){var o=P.T;P.T=null;var c=I.p;try{I.p=2,Pc(e,t,n,r)}finally{I.p=c,P.T=o}}function c1(e,t,n,r){var o=P.T;P.T=null;var c=I.p;try{I.p=8,Pc(e,t,n,r)}finally{I.p=c,P.T=o}}function Pc(e,t,n,r){if(Hs){var o=Bc(r);if(o===null)Sc(e,t,r,Gs,n),op(e,r);else if(d1(o,e,t,n,r))r.stopPropagation();else if(op(e,r),t&4&&-1<u1.indexOf(e)){for(;o!==null;){var c=Ea(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var d=ea(c.pendingLanes);if(d!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;d;){var A=1<<31-bt(d);y.entanglements[1]|=A,d&=~A}Zt(c),(be&6)===0&&(As=yt()+500,tr(0))}}break;case 31:case 13:y=ra(c,2),y!==null&&gt(y,c,2),Ts(),kc(c,2)}if(c=Bc(r),c===null&&Sc(e,t,r,Gs,n),c===o)break;o=c}o!==null&&r.stopPropagation()}else Sc(e,t,r,null,n)}}function Bc(e){return e=Oo(e),Lc(e)}var Gs=null;function Lc(e){if(Gs=null,e=xa(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Gs=e,null}function sp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q0()){case md:return 2;case fd:return 8;case Mr:case Z0:return 32;case pd:return 268435456;default:return 32}default:return 32}}var Oc=!1,In=null,qn=null,Fn=null,lr=new Map,cr=new Map,Xn=[],u1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function op(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(t.pointerId)}}function ur(e,t,n,r,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:c,targetContainers:[o]},t!==null&&(t=Ea(t),t!==null&&ip(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function d1(e,t,n,r,o){switch(t){case"focusin":return In=ur(In,e,t,n,r,o),!0;case"dragenter":return qn=ur(qn,e,t,n,r,o),!0;case"mouseover":return Fn=ur(Fn,e,t,n,r,o),!0;case"pointerover":var c=o.pointerId;return lr.set(c,ur(lr.get(c)||null,e,t,n,r,o)),!0;case"gotpointercapture":return c=o.pointerId,cr.set(c,ur(cr.get(c)||null,e,t,n,r,o)),!0}return!1}function lp(e){var t=xa(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,wd(e.priority,function(){rp(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,wd(e.priority,function(){rp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ns(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bc(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Lo=r,n.target.dispatchEvent(r),Lo=null}else return t=Ea(n),t!==null&&ip(t),e.blockedOn=n,!1;t.shift()}return!0}function cp(e,t,n){Ns(e)&&n.delete(t)}function h1(){Oc=!1,In!==null&&Ns(In)&&(In=null),qn!==null&&Ns(qn)&&(qn=null),Fn!==null&&Ns(Fn)&&(Fn=null),lr.forEach(cp),cr.forEach(cp)}function _s(e,t){e.blockedOn===t&&(e.blockedOn=null,Oc||(Oc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,h1)))}var Is=null;function up(e){Is!==e&&(Is=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Is===e&&(Is=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],o=e[t+2];if(typeof r!="function"){if(Lc(r||n)===null)continue;break}var c=Ea(n);c!==null&&(e.splice(t,3),t-=3,Bl(c,{pending:!0,data:o,method:n.method,action:r},r,o))}}))}function oi(e){function t(A){return _s(A,e)}In!==null&&_s(In,e),qn!==null&&_s(qn,e),Fn!==null&&_s(Fn,e),lr.forEach(t),cr.forEach(t);for(var n=0;n<Xn.length;n++){var r=Xn[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)lp(n),n.blockedOn===null&&Xn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var o=n[r],c=n[r+1],d=o[ut]||null;if(typeof c=="function")d||up(n);else if(d){var y=null;if(c&&c.hasAttribute("formAction")){if(o=c,d=c[ut]||null)y=d.formAction;else if(Lc(o)!==null)continue}else y=d.action;typeof y=="function"?n[r+1]=y:(n.splice(r,3),r-=3),up(n)}}}function dp(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(d){return o=d})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Vc(e){this._internalRoot=e}qs.prototype.render=Vc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,r=Et();np(n,r,e,t,null,null)},qs.prototype.unmount=Vc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),Ts(),t[Ta]=null}};function qs(e){this._internalRoot=e}qs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xn.length&&t!==0&&t<Xn[n].priority;n++);Xn.splice(n,0,e),n===0&&lp(e)}};var hp=i.version;if(hp!=="19.2.8")throw Error(s(527,hp,"19.2.8"));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var m1={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fs.isDisabled&&Fs.supportsFiber)try{bi=Fs.inject(m1),vt=Fs}catch{}}return hr.createRoot=function(e,t){if(!u(e))throw Error(s(299));var n=!1,r="",o=vm,c=bm,d=Sm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,c,d,dp),e[Ta]=t.current,bc(e),new Vc(t)},hr.hydrateRoot=function(e,t,n){if(!u(e))throw Error(s(299));var r=!1,o="",c=vm,d=bm,y=Sm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(A=n.formState)),t=ep(e,1,!0,t,n??null,r,o,A,c,d,y,dp),t.context=tp(null),n=t.current,r=Et(),r=zo(r),o=Rn(r),o.callback=null,jn(n,o,r),n=r,t.current.lanes=n,wi(t,n),Zt(t),e[Ta]=t.current,bc(e),new qs(t)},hr.version="19.2.8",hr}var Ap;function A1(){if(Ap)return Nc.exports;Ap=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Nc.exports=w1(),Nc.exports}var C1=A1();const Wg=F.createContext(null);function An(){const a=F.use(Wg);if(!a)throw new Error("useLanguage must be used inside LanguageProvider.");return a}function T1(){const{copy:a,locale:i}=An();return f.jsxs("footer",{className:"site-footer",children:[f.jsxs("div",{className:"footer-identity",children:[f.jsx("img",{src:"/media/avatar.jpg",alt:"",width:"640",height:"640",loading:"lazy"}),f.jsxs("div",{children:[f.jsx("strong",{children:a.footer.copyright}),f.jsx("span",{children:a.hero.role})]})]}),f.jsx("p",{children:i==="zh"?"UE 客户端 · 引擎开发 · 技术美术":"Unreal gameplay · Engine development · Technical art"}),f.jsxs("a",{href:"#top",children:[i==="zh"?"回到顶部":"Back to top"," ",f.jsx("span",{"aria-hidden":"true",children:"↑"})]})]})}function x1(){const{locale:a,copy:i,setLocale:l}=An(),[s,u]=F.useState(""),m=h=>{h!==a&&(l(h),u(h==="zh"?"语言已切换为中文。":"Language changed to English."))};return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"language-toggle",role:"group","aria-label":i.language.label,children:[f.jsxs("button",{type:"button",className:a==="en"?"is-active":void 0,"aria-pressed":a==="en",onClick:()=>m("en"),children:["EN",f.jsx("span",{className:"sr-only",children:i.language.english})]}),f.jsx("button",{type:"button",className:a==="zh"?"is-active":void 0,"aria-pressed":a==="zh",onClick:()=>m("zh"),children:"中文"})]}),f.jsx("span",{className:"sr-only","aria-live":"polite",children:s})]})}function E1(){const{copy:a,locale:i}=An();return f.jsxs("header",{className:"site-header",children:[f.jsxs("a",{className:"brand-link",href:"#top","aria-label":i==="zh"?"沈裕焱，返回顶部":"Lucas Shen, home",children:[f.jsx("span",{lang:"zh-CN",children:"沈裕焱"}),f.jsx("span",{children:"Lucas Shen"})]}),f.jsxs("div",{className:"header-actions",children:[f.jsx("nav",{className:"site-nav","aria-label":a.nav.aria,children:f.jsx("a",{href:"#portfolio",children:a.nav.work})}),f.jsx(x1,{})]})]})}function U1(){const{locale:a}=An(),i=a==="zh"?[["犹他大学｜娱乐艺术与工程（技术美术/游戏工程双方向）硕士","2025.08 — 2027.05"],["上海交通大学｜工业工程本科","2020.09 — 2024.06"]]:[["University of Utah | M.E.A.E., dual focus in Technical Art / Game Engineering","Aug 2025 — May 2027"],["Shanghai Jiao Tong University | B.Eng., Industrial Engineering","Sep 2020 — Jun 2024"]],l=a==="zh"?[["腾讯光子工作室｜UE 引擎工具开发实习生","2026.03 — 2026.08"],["广州四三九九信息科技有限公司｜系统策划","2024.05 — 2024.11"],["Whitedot 游戏工作室｜Unity 客户端开发实习生","2024.01 — 2024.04"],["上海如为电力｜UE 客户端开发实习生","2023.04 — 2023.08"]]:[["Tencent Lightspeed Studios | UE Engine Tools Development Intern","Mar 2026 — Aug 2026"],["4399 Network | Systems Designer","May 2024 — Nov 2024"],["Whitedot Game Studio | Unity Client Development Intern","Jan 2024 — Apr 2024"],["Shanghai Ruwei Electric Power | UE5 Client Development Intern","Apr 2023 — Aug 2023"]];return f.jsxs("section",{className:"profile-strip","aria-labelledby":"hero-title",children:[f.jsx("img",{src:"/media/avatar.jpg",alt:a==="zh"?"沈裕焱的手绘头像":"Lucas Shen hand-drawn avatar",width:"640",height:"640",fetchPriority:"high"}),f.jsx("div",{className:"profile-name",children:f.jsxs("h1",{id:"hero-title",children:[f.jsx("span",{lang:"zh-CN",children:"沈裕焱"}),f.jsx("span",{children:"Lucas Shen"})]})}),f.jsx("p",{className:"profile-intro",children:a==="zh"?"Gameplay、GAS 与网络同步，角色动画与物理、实时渲染和引擎工具。":"Gameplay, GAS and networking; character animation, physics, realtime rendering and engine tools."}),f.jsxs("div",{className:"profile-history",children:[f.jsxs("section",{children:[f.jsx("h2",{children:a==="zh"?"教育经历":"Education"}),f.jsx("ul",{children:i.map(([s,u])=>f.jsxs("li",{children:[f.jsx("span",{children:s}),f.jsxs("time",{children:["· ",u]})]},s))})]}),f.jsxs("section",{children:[f.jsx("h2",{children:a==="zh"?"实习与工作经历":"Internship & Work Experience"}),f.jsx("ul",{children:l.map(([s,u])=>f.jsxs("li",{children:[f.jsx("span",{children:s}),f.jsxs("time",{children:["· ",u]})]},s))})]})]})]})}const Jg=F.createContext({});function z1(a){const i=F.useRef(null);return i.current===null&&(i.current=a()),i.current}const M1=typeof window<"u",D1=M1?F.useLayoutEffect:F.useEffect,Lu=F.createContext(null);function Ou(a,i){a.indexOf(i)===-1&&a.push(i)}function io(a,i){const l=a.indexOf(i);l>-1&&a.splice(l,1)}const en=(a,i,l)=>l>i?i:l<a?a:l;let go=()=>{};const Zn={},$g=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),ey=a=>typeof a=="object"&&a!==null,ty=a=>/^0[^.\s]+$/u.test(a);function ny(a){let i;return()=>(i===void 0&&(i=a()),i)}const Gt=a=>a,Tr=(...a)=>a.reduce((i,l)=>s=>l(i(s))),Sr=(a,i,l)=>{const s=i-a;return s?(l-a)/s:1};class Vu{constructor(){this.subscriptions=[]}add(i){return Ou(this.subscriptions,i),()=>io(this.subscriptions,i)}notify(i,l,s){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](i,l,s);else for(let m=0;m<u;m++){const h=this.subscriptions[m];h&&h(i,l,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ut=a=>a*1e3,Ht=a=>a/1e3,ay=(a,i)=>i?a*(1e3/i):0,iy=(a,i,l)=>(((1-3*l+3*i)*a+(3*l-6*i))*a+3*i)*a,R1=1e-7,j1=12;function k1(a,i,l,s,u){let m,h,p=0;do h=i+(l-i)/2,m=iy(h,s,u)-a,m>0?l=h:i=h;while(Math.abs(m)>R1&&++p<j1);return h}function xr(a,i,l,s){if(a===i&&l===s)return Gt;const u=m=>k1(m,0,1,a,l);return m=>m===0||m===1?m:iy(u(m),i,s)}const ry=a=>i=>i<=.5?a(2*i)/2:(2-a(2*(1-i)))/2,sy=a=>i=>1-a(1-i),oy=xr(.33,1.53,.69,.99),Hu=sy(oy),ly=ry(Hu),cy=a=>a>=1?1:(a*=2)<1?.5*Hu(a):.5*(2-Math.pow(2,-10*(a-1))),Gu=a=>1-Math.sin(Math.acos(a)),uy=sy(Gu),dy=ry(Gu),P1=xr(.42,0,1,1),B1=xr(0,0,.58,1),hy=xr(.42,0,.58,1),L1=a=>Array.isArray(a)&&typeof a[0]!="number",my=a=>Array.isArray(a)&&typeof a[0]=="number",O1={linear:Gt,easeIn:P1,easeInOut:hy,easeOut:B1,circIn:Gu,circInOut:dy,circOut:uy,backIn:Hu,backInOut:ly,backOut:oy,anticipate:cy},V1=a=>typeof a=="string",Cp=a=>{if(my(a)){go(a.length===4);const[i,l,s,u]=a;return xr(i,l,s,u)}else if(V1(a))return O1[a];return a},Xs=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function H1(a){let i=new Set,l=new Set,s=!1,u=!1;const m=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){m.has(g)&&(v.schedule(g),a()),g(h)}const v={schedule:(g,b=!1,S=!1)=>{const k=S&&s?i:l;return b&&m.add(g),k.add(g),g},cancel:g=>{l.delete(g),m.delete(g)},process:g=>{if(h=g,s){u=!0;return}s=!0;const b=i;i=l,l=b,i.forEach(p),i.clear(),s=!1,u&&(u=!1,v.process(g))}};return v}const G1=40;function fy(a,i){let l=!1,s=!0;const u={delta:0,timestamp:0,isProcessing:!1},m=()=>l=!0,h=Xs.reduce((D,G)=>(D[G]=H1(m),D),{}),{setup:p,read:v,resolveKeyframes:g,preUpdate:b,update:S,preRender:w,render:k,postRender:z}=h,H=()=>{const D=Zn.useManualTiming,G=D?u.timestamp:performance.now();l=!1,D||(u.delta=s?1e3/60:Math.max(Math.min(G-u.timestamp,G1),1)),u.timestamp=G,u.isProcessing=!0,p.process(u),v.process(u),g.process(u),b.process(u),S.process(u),w.process(u),k.process(u),z.process(u),u.isProcessing=!1,l&&i&&(s=!1,a(H))},N=()=>{l=!0,s=!0,u.isProcessing||a(H)};return{schedule:Xs.reduce((D,G)=>{const W=h[G];return D[G]=(le,K=!1,$=!1)=>(l||N(),W.schedule(le,K,$)),D},{}),cancel:D=>{for(let G=0;G<Xs.length;G++)h[Xs[G]].cancel(D)},state:u,steps:h}}const{schedule:De,cancel:Wn,state:nt,steps:Fc}=fy(typeof requestAnimationFrame<"u"?requestAnimationFrame:Gt,!0);let Zs;function N1(){Zs=void 0}const lt={now:()=>(Zs===void 0&&lt.set(nt.isProcessing||Zn.useManualTiming?nt.timestamp:performance.now()),Zs),set:a=>{Zs=a,queueMicrotask(N1)}},py=a=>i=>typeof i=="string"&&i.startsWith(a),gy=py("--"),_1=py("var(--"),Nu=a=>_1(a)?I1.test(a.split("/*")[0].trim()):!1,I1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Tp(a){return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")}const pi={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},wr={...pi,transform:a=>en(0,1,a)},Ys={...pi,default:1},gr=a=>Math.round(a*1e5)/1e5,_u=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function q1(a){return a==null}const F1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Iu=(a,i)=>l=>!!(typeof l=="string"&&F1.test(l)&&l.startsWith(a)||i&&!q1(l)&&Object.prototype.hasOwnProperty.call(l,i)),yy=(a,i,l)=>s=>{if(typeof s!="string")return s;const[u,m,h,p]=s.match(_u);return{[a]:parseFloat(u),[i]:parseFloat(m),[l]:parseFloat(h),alpha:p!==void 0?parseFloat(p):1}},X1=a=>en(0,255,a),Xc={...pi,transform:a=>Math.round(X1(a))},Sa={test:Iu("rgb","red"),parse:yy("red","green","blue"),transform:({red:a,green:i,blue:l,alpha:s=1})=>"rgba("+Xc.transform(a)+", "+Xc.transform(i)+", "+Xc.transform(l)+", "+gr(wr.transform(s))+")"};function Y1(a){let i="",l="",s="",u="";return a.length>5?(i=a.substring(1,3),l=a.substring(3,5),s=a.substring(5,7),u=a.substring(7,9)):(i=a.substring(1,2),l=a.substring(2,3),s=a.substring(3,4),u=a.substring(4,5),i+=i,l+=l,s+=s,u+=u),{red:parseInt(i,16),green:parseInt(l,16),blue:parseInt(s,16),alpha:u?parseInt(u,16)/255:1}}const lu={test:Iu("#"),parse:Y1,transform:Sa.transform},Er=a=>({test:i=>typeof i=="string"&&i.endsWith(a)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${a}`}),wn=Er("deg"),$t=Er("%"),Q=Er("px"),K1=Er("vh"),Q1=Er("vw"),xp={...$t,parse:a=>$t.parse(a)/100,transform:a=>$t.transform(a*100)},ui={test:Iu("hsl","hue"),parse:yy("hue","saturation","lightness"),transform:({hue:a,saturation:i,lightness:l,alpha:s=1})=>"hsla("+Math.round(a)+", "+$t.transform(gr(i))+", "+$t.transform(gr(l))+", "+gr(wr.transform(s))+")"},Xe={test:a=>Sa.test(a)||lu.test(a)||ui.test(a),parse:a=>Sa.test(a)?Sa.parse(a):ui.test(a)?ui.parse(a):lu.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?Sa.transform(a):ui.transform(a),getAnimatableNone:a=>{const i=Xe.parse(a);return i.alpha=0,Xe.transform(i)}},Z1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function W1(a){return isNaN(a)&&typeof a=="string"&&(a.match(_u)?.length||0)+(a.match(Z1)?.length||0)>0}const vy="number",by="color",J1="var",$1="var(",Ep="${}",e2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function mi(a){const i=a.toString(),l=[],s={color:[],number:[],var:[]},u=[];let m=0;const p=i.replace(e2,v=>(Xe.test(v)?(s.color.push(m),u.push(by),l.push(Xe.parse(v))):v.startsWith($1)?(s.var.push(m),u.push(J1),l.push(v)):(s.number.push(m),u.push(vy),l.push(parseFloat(v))),++m,Ep)).split(Ep);return{values:l,split:p,indexes:s,types:u}}function t2(a){return mi(a).values}function Sy({split:a,types:i}){const l=a.length;return s=>{let u="";for(let m=0;m<l;m++)if(u+=a[m],s[m]!==void 0){const h=i[m];h===vy?u+=gr(s[m]):h===by?u+=Xe.transform(s[m]):u+=s[m]}return u}}function n2(a){return Sy(mi(a))}const a2=a=>typeof a=="number"?0:Xe.test(a)?Xe.getAnimatableNone(a):a,i2=(a,i)=>typeof a=="number"?i?.trim().endsWith("/")?a:0:a2(a);function r2(a){const i=mi(a);return Sy(i)(i.values.map((s,u)=>i2(s,i.split[u])))}const Xt={test:W1,parse:t2,createTransformer:n2,getAnimatableNone:r2};function Yc(a,i,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(i-a)*6*l:l<1/2?i:l<2/3?a+(i-a)*(2/3-l)*6:a}function s2({hue:a,saturation:i,lightness:l,alpha:s}){a/=360,i/=100,l/=100;let u=0,m=0,h=0;if(!i)u=m=h=l;else{const p=l<.5?l*(1+i):l+i-l*i,v=2*l-p;u=Yc(v,p,a+1/3),m=Yc(v,p,a),h=Yc(v,p,a-1/3)}return{red:Math.round(u*255),green:Math.round(m*255),blue:Math.round(h*255),alpha:s}}function ro(a,i){return l=>l>0?i:a}const Me=(a,i,l)=>a+(i-a)*l,Kc=(a,i,l)=>{const s=a*a,u=l*(i*i-s)+s;return u<0?0:Math.sqrt(u)},o2=[lu,Sa,ui],l2=a=>o2.find(i=>i.test(a));function Up(a){const i=l2(a);if(!i)return!1;let l=i.parse(a);return i===ui&&(l=s2(l)),l}const zp=(a,i)=>{const l=Up(a),s=Up(i);if(!l||!s)return ro(a,i);const u={...l};return m=>(u.red=Kc(l.red,s.red,m),u.green=Kc(l.green,s.green,m),u.blue=Kc(l.blue,s.blue,m),u.alpha=Me(l.alpha,s.alpha,m),Sa.transform(u))},cu=new Set(["none","hidden"]);function c2(a,i){return cu.has(a)?l=>l<=0?a:i:l=>l>=1?i:a}function u2(a,i){return l=>Me(a,i,l)}function qu(a){return typeof a=="number"?u2:typeof a=="string"?Nu(a)?ro:Xe.test(a)?zp:m2:Array.isArray(a)?wy:typeof a=="object"?Xe.test(a)?zp:d2:ro}function wy(a,i){const l=[...a],s=l.length,u=a.map((m,h)=>qu(m)(m,i[h]));return m=>{for(let h=0;h<s;h++)l[h]=u[h](m);return l}}function d2(a,i){const l={...a,...i},s={};for(const u in l)a[u]!==void 0&&i[u]!==void 0&&(s[u]=qu(a[u])(a[u],i[u]));return u=>{for(const m in s)l[m]=s[m](u);return l}}function h2(a,i){const l=[],s={color:0,var:0,number:0};for(let u=0;u<i.values.length;u++){const m=i.types[u],h=a.indexes[m][s[m]],p=a.values[h]??0;l[u]=p,s[m]++}return l}const m2=(a,i)=>{const l=Xt.createTransformer(i),s=mi(a),u=mi(i);return s.indexes.var.length===u.indexes.var.length&&s.indexes.color.length===u.indexes.color.length&&s.indexes.number.length>=u.indexes.number.length?cu.has(a)&&!u.values.length||cu.has(i)&&!s.values.length?c2(a,i):Tr(wy(h2(s,u),u.values),l):ro(a,i)};function Ay(a,i,l){return typeof a=="number"&&typeof i=="number"&&typeof l=="number"?Me(a,i,l):qu(a)(a,i)}const f2=a=>{const i=({timestamp:l})=>a(l);return{start:(l=!0)=>De.update(i,l),stop:()=>Wn(i),now:()=>nt.isProcessing?nt.timestamp:lt.now()}},Cy=(a,i,l=10)=>{let s="";const u=Math.max(Math.round(i/l),2);for(let m=0;m<u;m++)s+=Math.round(a(m/(u-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},so=2e4;function Fu(a){let i=0;const l=50;let s=a.next(i);for(;!s.done&&i<so;)i+=l,s=a.next(i);return i>=so?1/0:i}function p2(a,i=100,l){const s=l({...a,keyframes:[0,i]}),u=Math.min(Fu(s),so);return{type:"keyframes",ease:m=>s.next(u*m).value/i,duration:Ht(u)}}const Le={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function uu(a,i){return a*Math.sqrt(1-i*i)}const g2=12;function y2(a,i,l){let s=l;for(let u=1;u<g2;u++)s=s-a(s)/i(s);return s}const Qc=.001;function v2({duration:a=Le.duration,bounce:i=Le.bounce,velocity:l=Le.velocity,mass:s=Le.mass}){let u,m,h=1-i;h=en(Le.minDamping,Le.maxDamping,h),a=en(Le.minDuration,Le.maxDuration,Ht(a)),h<1?(u=g=>{const b=g*h,S=b*a,w=b-l,k=uu(g,h),z=Math.exp(-S);return Qc-w/k*z},m=g=>{const S=g*h*a,w=S*l+l,k=Math.pow(h,2)*Math.pow(g,2)*a,z=Math.exp(-S),H=uu(Math.pow(g,2),h);return(-u(g)+Qc>0?-1:1)*((w-k)*z)/H}):(u=g=>{const b=Math.exp(-g*a),S=(g-l)*a+1;return-Qc+b*S},m=g=>{const b=Math.exp(-g*a),S=(l-g)*(a*a);return b*S});const p=5/a,v=y2(u,m,p);if(a=Ut(a),isNaN(v))return{stiffness:Le.stiffness,damping:Le.damping,duration:a};{const g=Math.pow(v,2)*s;return{stiffness:g,damping:h*2*Math.sqrt(s*g),duration:a}}}const b2=["duration","bounce"],S2=["stiffness","damping","mass"];function Mp(a,i){return i.some(l=>a[l]!==void 0)}function w2(a){let i={velocity:Le.velocity,stiffness:Le.stiffness,damping:Le.damping,mass:Le.mass,isResolvedFromDuration:!1,...a};if(!Mp(a,S2)&&Mp(a,b2))if(i.velocity=0,a.visualDuration){const l=a.visualDuration,s=2*Math.PI/(l*1.2),u=s*s,m=2*en(.05,1,1-(a.bounce||0))*Math.sqrt(u);i={...i,mass:Le.mass,stiffness:u,damping:m}}else{const l=v2({...a,velocity:0});i={...i,...l,mass:Le.mass},i.isResolvedFromDuration=!0}return i}function oo(a=Le.visualDuration,i=Le.bounce){const l=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:i}:a;let{restSpeed:s,restDelta:u}=l;const m=l.keyframes[0],h=l.keyframes[l.keyframes.length-1],p={done:!1,value:m},{stiffness:v,damping:g,mass:b,duration:S,velocity:w,isResolvedFromDuration:k}=w2({...l,velocity:-Ht(l.velocity||0)}),z=w||0,H=g/(2*Math.sqrt(v*b)),N=h-m,_=Ht(Math.sqrt(v/b)),R=Math.abs(N)<5;s||(s=R?Le.restSpeed.granular:Le.restSpeed.default),u||(u=R?Le.restDelta.granular:Le.restDelta.default);let D,G,W,le,K,$;if(H<1)W=uu(_,H),le=(z+H*_*N)/W,D=ne=>{const ve=Math.exp(-H*_*ne);return h-ve*(le*Math.sin(W*ne)+N*Math.cos(W*ne))},K=H*_*le+N*W,$=H*_*N-le*W,G=ne=>Math.exp(-H*_*ne)*(K*Math.sin(W*ne)+$*Math.cos(W*ne));else if(H===1){D=ve=>h-Math.exp(-_*ve)*(N+(z+_*N)*ve);const ne=z+_*N;G=ve=>Math.exp(-_*ve)*(_*ne*ve-z)}else{const ne=_*Math.sqrt(H*H-1);D=Ne=>{const Oe=Math.exp(-H*_*Ne),P=Math.min(ne*Ne,300);return h-Oe*((z+H*_*N)*Math.sinh(P)+ne*N*Math.cosh(P))/ne};const ve=(z+H*_*N)/ne,we=H*_*ve-N*ne,rt=H*_*N-ve*ne;G=Ne=>{const Oe=Math.exp(-H*_*Ne),P=Math.min(ne*Ne,300);return Oe*(we*Math.sinh(P)+rt*Math.cosh(P))}}const Te={calculatedDuration:k&&S||null,velocity:ne=>Ut(G(ne)),next:ne=>{if(!k&&H<1){const we=Math.exp(-H*_*ne),rt=Math.sin(W*ne),Ne=Math.cos(W*ne),Oe=h-we*(le*rt+N*Ne),P=Ut(we*(K*rt+$*Ne));return p.done=Math.abs(P)<=s&&Math.abs(h-Oe)<=u,p.value=p.done?h:Oe,p}const ve=D(ne);if(k)p.done=ne>=S;else{const we=Ut(G(ne));p.done=Math.abs(we)<=s&&Math.abs(h-ve)<=u}return p.value=p.done?h:ve,p},toString:()=>{const ne=Math.min(Fu(Te),so),ve=Cy(we=>Te.next(ne*we).value,ne,30);return ne+"ms "+ve},toTransition:()=>{}};return Te}oo.applyToOptions=a=>{const i=p2(a,100,oo);return a.ease=i.ease,a.duration=Ut(i.duration),a.type="keyframes",a};const A2=5;function Ty(a,i,l){const s=Math.max(i-A2,0);return ay(l-a(s),i-s)}function du({keyframes:a,velocity:i=0,power:l=.8,timeConstant:s=325,bounceDamping:u=10,bounceStiffness:m=500,modifyTarget:h,min:p,max:v,restDelta:g=.5,restSpeed:b}){const S=a[0],w={done:!1,value:S},k=$=>p!==void 0&&$<p||v!==void 0&&$>v,z=$=>p===void 0?v:v===void 0||Math.abs(p-$)<Math.abs(v-$)?p:v;let H=l*i;const N=S+H,_=h===void 0?N:h(N);_!==N&&(H=_-S);const R=$=>-H*Math.exp(-$/s),D=$=>_+R($),G=$=>{const Te=R($),ne=D($);w.done=Math.abs(Te)<=g,w.value=w.done?_:ne};let W,le;const K=$=>{k(w.value)&&(W=$,le=oo({keyframes:[w.value,z(w.value)],velocity:Ty(D,$,w.value),damping:u,stiffness:m,restDelta:g,restSpeed:b}))};return K(0),{calculatedDuration:null,next:$=>{let Te=!1;return!le&&W===void 0&&(Te=!0,G($),K($)),W!==void 0&&$>=W?le.next($-W):(!Te&&G($),w)}}}function C2(a,i,l){const s=[],u=l||Zn.mix||Ay,m=a.length-1;for(let h=0;h<m;h++){let p=u(a[h],a[h+1]);if(i){const v=Array.isArray(i)?i[h]||Gt:i;p=Tr(v,p)}s.push(p)}return s}function T2(a,i,{clamp:l=!0,ease:s,mixer:u}={}){const m=a.length;if(go(m===i.length),m===1)return()=>i[0];if(m===2&&i[0]===i[1])return()=>i[1];const h=a[0]===a[1];a[0]>a[m-1]&&(a=[...a].reverse(),i=[...i].reverse());const p=C2(i,s,u),v=p.length,g=b=>{if(h&&b<a[0])return i[0];let S=0;if(v>1)for(;S<a.length-2&&!(b<a[S+1]);S++);const w=Sr(a[S],a[S+1],b);return p[S](w)};return l?b=>g(en(a[0],a[m-1],b)):g}function x2(a,i){const l=a[a.length-1];for(let s=1;s<=i;s++){const u=Sr(0,i,s);a.push(Me(l,1,u))}}function E2(a){const i=[0];return x2(i,a.length-1),i}function U2(a,i){return a.map(l=>l*i)}function z2(a,i){return a.map(()=>i||hy).splice(0,a.length-1)}function yr({duration:a=300,keyframes:i,times:l,ease:s="easeInOut"}){const u=L1(s)?s.map(Cp):Cp(s),m={done:!1,value:i[0]},h=U2(l&&l.length===i.length?l:E2(i),a),p=T2(h,i,{ease:Array.isArray(u)?u:z2(i,u)});return{calculatedDuration:a,next:v=>(m.value=p(v),m.done=v>=a,m)}}const M2=a=>a!==null;function yo(a,{repeat:i,repeatType:l="loop"},s,u=1){const m=a.filter(M2),p=u<0||i&&l!=="loop"&&i%2===1?0:m.length-1;return!p||s===void 0?m[p]:s}const D2={decay:du,inertia:du,tween:yr,keyframes:yr,spring:oo};function xy(a){typeof a.type=="string"&&(a.type=D2[a.type])}class Xu{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,l){return this.finished.then(i,l)}}const R2=a=>a/100;class lo extends Xu{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:l}=this.options;l&&l.updatedAt!==lt.now()&&this.tick(lt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;xy(i);const{type:l=yr,repeat:s=0,repeatDelay:u=0,repeatType:m,velocity:h=0}=i;let{keyframes:p}=i;const v=l||yr;v!==yr&&typeof p[0]!="number"&&(this.mixKeyframes=Tr(R2,Ay(p[0],p[1])),p=[0,100]);const g=v({...i,keyframes:p});m==="mirror"&&(this.mirroredGenerator=v({...i,keyframes:[...p].reverse(),velocity:-h})),g.calculatedDuration===null&&(g.calculatedDuration=Fu(g));const{calculatedDuration:b}=g;this.calculatedDuration=b,this.resolvedDuration=b+u,this.totalDuration=this.resolvedDuration*(s+1)-u,this.generator=g}updateTime(i){const l=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(i,l=!1){const{generator:s,totalDuration:u,mixKeyframes:m,mirroredGenerator:h,resolvedDuration:p,calculatedDuration:v}=this;if(this.startTime===null)return s.next(0);const{delay:g=0,keyframes:b,repeat:S,repeatType:w,repeatDelay:k,type:z,onUpdate:H,finalKeyframe:N}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-u/this.speed,this.startTime)),l?this.currentTime=i:this.updateTime(i);const _=this.currentTime-g*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?_<0:_>u;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let D=this.currentTime,G=s;if(S){const $=Math.min(this.currentTime,u)/p;let Te=Math.floor($),ne=$%1;!ne&&$>=1&&(ne=1),ne===1&&Te--,Te=Math.min(Te,S+1),Te%2&&(w==="reverse"?(ne=1-ne,k&&(ne-=k/p)):w==="mirror"&&(G=h)),D=en(0,1,ne)*p}let W;R?(this.delayState.value=b[0],W=this.delayState):W=G.next(D),m&&!R&&(W.value=m(W.value));let{done:le}=W;!R&&v!==null&&(le=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const K=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&le);return K&&z!==du&&(W.value=yo(b,this.options,N,this.speed)),H&&H(W.value),K&&this.finish(),W}then(i,l){return this.finished.then(i,l)}get duration(){return Ht(this.calculatedDuration)}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Ht(i)}get time(){return Ht(this.currentTime)}set time(i){i=Ut(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=i,this.tick(i))}getGeneratorVelocity(){const i=this.currentTime;if(i<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(i);const l=this.generator.next(i).value;return Ty(s=>this.generator.next(s).value,i,l)}get speed(){return this.playbackSpeed}set speed(i){const l=this.playbackSpeed!==i;l&&this.driver&&this.updateTime(lt.now()),this.playbackSpeed=i,l&&this.driver&&(this.time=Ht(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=f2,startTime:l}=this.options;this.driver||(this.driver=i(u=>this.tick(u))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=l??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(lt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function j2(a){for(let i=1;i<a.length;i++)a[i]??(a[i]=a[i-1])}const wa=a=>a*180/Math.PI,hu=a=>{const i=wa(Math.atan2(a[1],a[0]));return mu(i)},k2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:hu,rotateZ:hu,skewX:a=>wa(Math.atan(a[1])),skewY:a=>wa(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},mu=a=>(a=a%360,a<0&&(a+=360),a),Dp=hu,Rp=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),jp=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),P2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Rp,scaleY:jp,scale:a=>(Rp(a)+jp(a))/2,rotateX:a=>mu(wa(Math.atan2(a[6],a[5]))),rotateY:a=>mu(wa(Math.atan2(-a[2],a[0]))),rotateZ:Dp,rotate:Dp,skewX:a=>wa(Math.atan(a[4])),skewY:a=>wa(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function fu(a){return a.includes("scale")?1:0}function pu(a,i){if(!a||a==="none")return fu(i);const l=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,u;if(l)s=P2,u=l;else{const p=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=k2,u=p}if(!u)return fu(i);const m=s[i],h=u[1].split(",").map(L2);return typeof m=="function"?m(h):h[m]}const B2=(a,i)=>{const{transform:l="none"}=getComputedStyle(a);return pu(l,i)};function L2(a){return parseFloat(a.trim())}const gi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],yi=new Set([...gi,"pathRotation"]),kp=a=>a===pi||a===Q,O2=new Set(["x","y","z"]),V2=gi.filter(a=>!O2.has(a));function H2(a){const i=[];return V2.forEach(l=>{const s=a.getValue(l);s!==void 0&&(i.push([l,s.get()]),s.set(l.startsWith("scale")?1:0))}),i}const Qn={width:({x:a},{paddingLeft:i="0",paddingRight:l="0",boxSizing:s})=>{const u=a.max-a.min;return s==="border-box"?u:u-parseFloat(i)-parseFloat(l)},height:({y:a},{paddingTop:i="0",paddingBottom:l="0",boxSizing:s})=>{const u=a.max-a.min;return s==="border-box"?u:u-parseFloat(i)-parseFloat(l)},top:(a,{top:i})=>parseFloat(i),left:(a,{left:i})=>parseFloat(i),bottom:({y:a},{top:i})=>parseFloat(i)+(a.max-a.min),right:({x:a},{left:i})=>parseFloat(i)+(a.max-a.min),x:(a,{transform:i})=>pu(i,"x"),y:(a,{transform:i})=>pu(i,"y")};Qn.translateX=Qn.x;Qn.translateY=Qn.y;const Aa=new Set;let gu=!1,yu=!1,vu=!1;function Ey(){if(yu){const a=Array.from(Aa).filter(s=>s.needsMeasurement),i=new Set(a.map(s=>s.element)),l=new Map;i.forEach(s=>{const u=H2(s);u.length&&(l.set(s,u),s.render())}),a.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const u=l.get(s);u&&u.forEach(([m,h])=>{s.getValue(m)?.set(h)})}),a.forEach(s=>s.measureEndState()),a.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}yu=!1,gu=!1,Aa.forEach(a=>a.complete(vu)),Aa.clear()}function Uy(){Aa.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(yu=!0)})}function G2(){vu=!0,Uy(),Ey(),vu=!1}class Yu{constructor(i,l,s,u,m,h=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=l,this.name=s,this.motionValue=u,this.element=m,this.isAsync=h}scheduleResolve(){this.state="scheduled",this.isAsync?(Aa.add(this),gu||(gu=!0,De.read(Uy),De.resolveKeyframes(Ey))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:l,element:s,motionValue:u}=this;if(i[0]===null){const m=u?.get(),h=i[i.length-1];if(m!==void 0)i[0]=m;else if(s&&l){const p=s.readValue(l,h);p!=null&&(i[0]=p)}i[0]===void 0&&(i[0]=h),u&&m===void 0&&u.set(i[0])}j2(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),Aa.delete(this)}cancel(){this.state==="scheduled"&&(Aa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const N2=a=>a.startsWith("--");function zy(a,i,l){N2(i)?a.style.setProperty(i,l):a.style[i]=l}const _2={};function My(a,i){const l=ny(a);return()=>_2[i]??l()}const I2=My(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Dy=My(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),fr=([a,i,l,s])=>`cubic-bezier(${a}, ${i}, ${l}, ${s})`,Pp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fr([0,.65,.55,1]),circOut:fr([.55,0,1,.45]),backIn:fr([.31,.01,.66,-.59]),backOut:fr([.33,1.53,.69,.99])};function Ry(a,i){if(a)return typeof a=="function"?Dy()?Cy(a,i):"ease-out":my(a)?fr(a):Array.isArray(a)?a.map(l=>Ry(l,i)||Pp.easeOut):Pp[a]}function q2(a,i,l,{delay:s=0,duration:u=300,repeat:m=0,repeatType:h="loop",ease:p="easeOut",times:v}={},g=void 0){const b={[i]:l};v&&(b.offset=v);const S=Ry(p,u);Array.isArray(S)&&(b.easing=S);const w={delay:s,duration:u,easing:Array.isArray(S)?"linear":S,fill:"both",iterations:m+1,direction:h==="reverse"?"alternate":"normal"};return g&&(w.pseudoElement=g),a.animate(b,w)}function jy(a){return typeof a=="function"&&"applyToOptions"in a}function F2({type:a,...i}){return jy(a)&&Dy()?a.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class ky extends Xu{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!i)return;const{element:l,name:s,keyframes:u,pseudoElement:m,allowFlatten:h=!1,finalKeyframe:p,onComplete:v}=i;this.isPseudoElement=!!m,this.allowFlatten=h,this.options=i,go(typeof i.type!="string");const g=F2(i);this.animation=q2(l,s,u,g,m),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!m){const b=yo(u,this.options,p,this.speed);this.updateMotionValue&&this.updateMotionValue(b),zy(l,s,b),this.animation.cancel()}v?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const i=this.options?.element;!this.isPseudoElement&&i?.isConnected&&this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return Ht(Number(i))}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Ht(i)}get time(){return Ht(Number(this.animation.currentTime)||0)}set time(i){const l=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ut(i),l&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(i){this.manualStartTime=this.animation.startTime=i}attachTimeline({timeline:i,rangeStart:l,rangeEnd:s,observe:u}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&I2()?(this.animation.timeline=i,l&&(this.animation.rangeStart=l),s&&(this.animation.rangeEnd=s),Gt):u(this)}}const Py={anticipate:cy,backInOut:ly,circInOut:dy};function X2(a){return a in Py}function Y2(a){typeof a.ease=="string"&&X2(a.ease)&&(a.ease=Py[a.ease])}const Zc=10;class K2 extends ky{constructor(i){Y2(i),xy(i),super(i),i.startTime!==void 0&&i.autoplay!==!1&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:l,onUpdate:s,onComplete:u,element:m,...h}=this.options;if(!l)return;if(i!==void 0){l.set(i);return}const p=new lo({...h,autoplay:!1}),v=Math.max(Zc,lt.now()-this.startTime),g=en(0,Zc,v-Zc),b=p.sample(v).value,{name:S}=this.options;m&&S&&zy(m,S,b),l.setWithVelocity(p.sample(Math.max(0,v-g)).value,b,g),p.stop()}}const Bp=(a,i)=>i==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Xt.test(a)||a==="0")&&!a.startsWith("url("));function Q2(a){const i=a[0];if(a.length===1)return!0;for(let l=0;l<a.length;l++)if(a[l]!==i)return!0}function Z2(a,i,l,s){const u=a[0];if(u===null)return!1;if(i==="display"||i==="visibility")return!0;const m=a[a.length-1],h=Bp(u,i),p=Bp(m,i);return!h||!p?!1:Q2(a)||(l==="spring"||jy(l))&&s}function bu(a){a.duration=0,a.type="keyframes"}const By=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),W2=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function J2(a){for(let i=0;i<a.length;i++)if(typeof a[i]=="string"&&W2.test(a[i]))return!0;return!1}const $2=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),eS=ny(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function tS(a){const{motionValue:i,name:l,repeatDelay:s,repeatType:u,damping:m,type:h,keyframes:p}=a,v=i?.owner?.current;if(!(v instanceof HTMLElement)&&!(v instanceof SVGElement))return!1;const{onUpdate:g,transformTemplate:b}=i.owner.getProps();return eS()&&l&&(By.has(l)||$2.has(l)&&J2(p))&&(l!=="transform"||!b)&&!g&&!s&&u!=="mirror"&&m!==0&&h!=="inertia"}const nS=40;class aS extends Xu{constructor({autoplay:i=!0,delay:l=0,type:s="keyframes",repeat:u=0,repeatDelay:m=0,repeatType:h="loop",keyframes:p,name:v,motionValue:g,element:b,...S}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=lt.now();const w={autoplay:i,delay:l,type:s,repeat:u,repeatDelay:m,repeatType:h,name:v,motionValue:g,element:b,...S},k=b?.KeyframeResolver||Yu;this.keyframeResolver=new k(p,(z,H,N)=>this.onKeyframesResolved(z,H,w,!N),v,g,b),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,l,s,u){this.keyframeResolver=void 0;const{name:m,type:h,velocity:p,delay:v,isHandoff:g,onUpdate:b}=s;this.resolvedAt=lt.now();let S=!0;Z2(i,m,h,p)||(S=!1,(Zn.instantAnimations||!v)&&b?.(yo(i,s,l)),i[0]=i[i.length-1],bu(s),s.repeat=0);const k={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>nS?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...s,keyframes:i},z=S&&!g&&tS(k),H=k.motionValue?.owner?.current;let N;if(z)try{N=new K2({...k,element:H})}catch{N=new lo(k)}else N=new lo(k);N.finished.then(()=>{this.notifyFinished()}).catch(Gt),this.pendingTimeline&&(this.stopTimeline=N.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=N}get finished(){return this._animation?this.animation.finished:this._finished}then(i,l){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),G2()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function Ly(a,i,l,s=0,u=1){const m=Array.from(a).sort((g,b)=>g.sortNodePosition(b)).indexOf(i),h=a.size,p=(h-1)*s;return typeof l=="function"?l(m,h):u===1?m*s:p-m*s}const Lp=30,iS=a=>!isNaN(parseFloat(a));class rS{constructor(i,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{const u=lt.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const m of this.dependents)m.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=l.owner}setCurrent(i){this.current=i,this.updatedAt=lt.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=iS(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,l){this.events[i]||(this.events[i]=new Vu);const s=this.events[i].add(l);return i==="change"?()=>{s(),De.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,l){this.passiveEffect=i,this.stopPassiveEffect=l}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,l,s){this.set(l),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,l=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=lt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>Lp)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,Lp);return ay(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(i){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=i(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fi(a,i){return new rS(a,i)}function Oy(a,i){if(a?.inherit&&i){const{inherit:l,...s}=a;return{...i,...s}}return a}function Ku(a,i){const l=a?.[i]??a?.default??a;return l!==a?Oy(l,a):l}const sS={type:"spring",stiffness:500,damping:25,restSpeed:10},oS=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),lS={type:"keyframes",duration:.8},cS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},uS=(a,{keyframes:i})=>i.length>2?lS:yi.has(a)?a.startsWith("scale")?oS(i[1]):sS:cS,dS=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function hS(a){for(const i in a)if(!dS.has(i))return!0;return!1}const Qu=(a,i,l,s={},u,m)=>h=>{const p=Ku(s,a)||{},v=p.delay||s.delay||0;let{elapsed:g=0}=s;g=g-Ut(v);const b={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:i.getVelocity(),...p,delay:-g,onUpdate:w=>{i.set(w),p.onUpdate&&p.onUpdate(w)},onComplete:()=>{h(),p.onComplete&&p.onComplete()},name:a,motionValue:i,element:m?void 0:u};hS(p)||Object.assign(b,uS(a,b)),b.duration&&(b.duration=Ut(b.duration)),b.repeatDelay&&(b.repeatDelay=Ut(b.repeatDelay)),b.from!==void 0&&(b.keyframes[0]=b.from);let S=!1;if((b.type===!1||b.duration===0&&!b.repeatDelay)&&(bu(b),b.delay===0&&(S=!0)),(Zn.instantAnimations||Zn.skipAnimations||u?.shouldSkipAnimations||p.skipAnimations)&&(S=!0,bu(b),b.delay=0),b.allowFlatten=!p.type&&!p.ease,S&&!m&&i.get()!==void 0){const w=yo(b.keyframes,p);if(w!==void 0){De.update(()=>{b.onUpdate(w),b.onComplete()});return}}return p.isSync?new lo(b):new aS(b)},mS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function fS(a){const i=mS.exec(a);if(!i)return[,];const[,l,s,u]=i;return[`--${l??s}`,u]}function Vy(a,i,l=1){const[s,u]=fS(a);if(!s)return;const m=window.getComputedStyle(i).getPropertyValue(s);if(m){const h=m.trim();return $g(h)?parseFloat(h):h}return Nu(u)?Vy(u,i,l+1):u}function Op(a){const i=[{},{}];return a?.values.forEach((l,s)=>{i[0][s]=l.get(),i[1][s]=l.getVelocity()}),i}function Zu(a,i,l,s){if(typeof i=="function"){const[u,m]=Op(s);i=i(l!==void 0?l:a.custom,u,m)}if(typeof i=="string"&&(i=a.variants&&a.variants[i]),typeof i=="function"){const[u,m]=Op(s);i=i(l!==void 0?l:a.custom,u,m)}return i}function Ca(a,i,l){const s=a.getProps();return Zu(s,i,l!==void 0?l:s.custom,a)}const Hy=new Set(["width","height","top","left","right","bottom",...gi]),Su=a=>Array.isArray(a);function pS(a,i,l){a.hasValue(i)?a.getValue(i).set(l):a.addValue(i,fi(l))}function gS(a){return Su(a)?a[a.length-1]||0:a}function yS(a,i){const l=Ca(a,i);let{transitionEnd:s={},transition:u={},...m}=l||{};m={...m,...s};for(const h in m){const p=gS(m[h]);pS(a,h,p)}}const at=a=>!!(a&&a.getVelocity);function vS(a){return!!(at(a)&&a.add)}function wu(a,i){const l=a.getValue("willChange");if(vS(l))return l.add(i);if(!l&&Zn.WillChange){const s=new Zn.WillChange("auto");a.addValue("willChange",s),s.add(i)}}function Wu(a){return a.replace(/([A-Z])/g,i=>`-${i.toLowerCase()}`)}const bS="framerAppearId",Gy="data-"+Wu(bS);function Ny(a){return a.props[Gy]}function SS({protectedKeys:a,needsAnimating:i},l){const s=a.hasOwnProperty(l)&&i[l]!==!0;return i[l]=!1,s}function _y(a,i,{delay:l=0,transitionOverride:s,type:u}={}){let{transition:m,transitionEnd:h,...p}=i;const v=a.getDefaultTransition();m=m?Oy(m,v):v;const g=m?.reduceMotion,b=m?.skipAnimations;s&&(m=s);const S=[],w=u&&a.animationState&&a.animationState.getState()[u],k=m?.path;k&&k.animateVisualElement(a,p,m,l,S);for(const z in p){const H=a.getValue(z,a.latestValues[z]??null),N=p[z];if(N===void 0||w&&SS(w,z))continue;const _={delay:l,...Ku(m||{},z)};b&&(_.skipAnimations=!0);const R=H.get();if(R!==void 0&&!H.isAnimating()&&!Array.isArray(N)&&N===R&&!_.velocity){De.update(()=>H.set(N));continue}let D=!1;if(window.MotionHandoffAnimation){const le=Ny(a);if(le){const K=window.MotionHandoffAnimation(le,z,De);K!==null&&(_.startTime=K,D=!0)}}wu(a,z);const G=g??a.shouldReduceMotion;H.start(Qu(z,H,N,G&&Hy.has(z)?{type:!1}:_,a,D));const W=H.animation;W&&S.push(W)}if(h){const z=()=>De.update(()=>{h&&yS(a,h)});S.length?Promise.all(S).then(z):z()}return S}function Au(a,i,l={}){const s=Ca(a,i,l.type==="exit"?a.presenceContext?.custom:void 0);let{transition:u=a.getDefaultTransition()||{}}=s||{};l.transitionOverride&&(u=l.transitionOverride);const m=s?()=>Promise.all(_y(a,s,l)):()=>Promise.resolve(),h=a.variantChildren&&a.variantChildren.size?(v=0)=>{const{delayChildren:g=0,staggerChildren:b,staggerDirection:S}=u;return wS(a,i,v,g,b,S,l)}:()=>Promise.resolve(),{when:p}=u;if(p){const[v,g]=p==="beforeChildren"?[m,h]:[h,m];return v().then(()=>g())}else return Promise.all([m(),h(l.delay)])}function wS(a,i,l=0,s=0,u=0,m=1,h){const p=[];for(const v of a.variantChildren)v.notify("AnimationStart",i),p.push(Au(v,i,{...h,delay:l+(typeof s=="function"?0:s)+Ly(a.variantChildren,v,s,u,m)}).then(()=>v.notify("AnimationComplete",i)));return Promise.all(p)}function AS(a,i,l={}){a.notify("AnimationStart",i);let s;if(Array.isArray(i)){const u=i.map(m=>Au(a,m,l));s=Promise.all(u)}else if(typeof i=="string")s=Au(a,i,l);else{const u=typeof i=="function"?Ca(a,i,l.custom):i;s=Promise.all(_y(a,u,l))}return s.then(()=>{a.notify("AnimationComplete",i)})}const CS={test:a=>a==="auto",parse:a=>a},Iy=a=>i=>i.test(a),qy=[pi,Q,$t,wn,Q1,K1,CS],Vp=a=>qy.find(Iy(a));function TS(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||ty(a):!0}const xS=new Set(["brightness","contrast","saturate","opacity"]);function ES(a){const[i,l]=a.slice(0,-1).split("(");if(i==="drop-shadow")return a;const[s]=l.match(_u)||[];if(!s)return a;const u=l.replace(s,"");let m=xS.has(i)?1:0;return s!==l&&(m*=100),i+"("+m+u+")"}const US=/\b([a-z-]*)\(.*?\)/gu,Cu={...Xt,getAnimatableNone:a=>{const i=a.match(US);return i?i.map(ES).join(" "):a}},Tu={...Xt,getAnimatableNone:a=>{const i=Xt.parse(a);return Xt.createTransformer(a)(i.map(s=>typeof s=="number"?0:typeof s=="object"?{...s,alpha:1}:s))}},Hp={...pi,transform:Math.round},zS={rotate:wn,pathRotation:wn,rotateX:wn,rotateY:wn,rotateZ:wn,scale:Ys,scaleX:Ys,scaleY:Ys,scaleZ:Ys,skew:wn,skewX:wn,skewY:wn,distance:Q,translateX:Q,translateY:Q,translateZ:Q,x:Q,y:Q,z:Q,perspective:Q,transformPerspective:Q,opacity:wr,originX:xp,originY:xp,originZ:Q},co={borderWidth:Q,borderTopWidth:Q,borderRightWidth:Q,borderBottomWidth:Q,borderLeftWidth:Q,borderRadius:Q,borderTopLeftRadius:Q,borderTopRightRadius:Q,borderBottomRightRadius:Q,borderBottomLeftRadius:Q,width:Q,maxWidth:Q,height:Q,maxHeight:Q,top:Q,right:Q,bottom:Q,left:Q,inset:Q,insetBlock:Q,insetBlockStart:Q,insetBlockEnd:Q,insetInline:Q,insetInlineStart:Q,insetInlineEnd:Q,padding:Q,paddingTop:Q,paddingRight:Q,paddingBottom:Q,paddingLeft:Q,paddingBlock:Q,paddingBlockStart:Q,paddingBlockEnd:Q,paddingInline:Q,paddingInlineStart:Q,paddingInlineEnd:Q,margin:Q,marginTop:Q,marginRight:Q,marginBottom:Q,marginLeft:Q,marginBlock:Q,marginBlockStart:Q,marginBlockEnd:Q,marginInline:Q,marginInlineStart:Q,marginInlineEnd:Q,fontSize:Q,backgroundPositionX:Q,backgroundPositionY:Q,...zS,zIndex:Hp,fillOpacity:wr,strokeOpacity:wr,numOctaves:Hp},MS={...co,color:Xe,backgroundColor:Xe,outlineColor:Xe,fill:Xe,stroke:Xe,borderColor:Xe,borderTopColor:Xe,borderRightColor:Xe,borderBottomColor:Xe,borderLeftColor:Xe,filter:Cu,WebkitFilter:Cu,mask:Tu,WebkitMask:Tu},Fy=a=>MS[a],DS=new Set([Cu,Tu]);function Xy(a,i){let l=Fy(a);return DS.has(l)||(l=Xt),l.getAnimatableNone?l.getAnimatableNone(i):void 0}const RS=new Set(["auto","none","0"]);function jS(a,i,l){let s=0,u;for(;s<a.length&&!u;){const m=a[s];typeof m=="string"&&!RS.has(m)&&mi(m).values.length&&(u=a[s]),s++}if(u&&l)for(const m of i)a[m]=Xy(l,u)}class kS extends Yu{constructor(i,l,s,u,m){super(i,l,s,u,m,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:l,name:s}=this;if(!l||!l.current)return;super.readKeyframes();for(let b=0;b<i.length;b++){let S=i[b];if(typeof S=="string"&&(S=S.trim(),Nu(S))){const w=Vy(S,l.current);w!==void 0&&(i[b]=w),b===i.length-1&&(this.finalKeyframe=S)}}if(this.resolveNoneKeyframes(),!Hy.has(s)||i.length!==2)return;const[u,m]=i,h=Vp(u),p=Vp(m),v=Tp(u),g=Tp(m);if(v!==g&&Qn[s]){this.needsMeasurement=!0;return}if(h!==p)if(kp(h)&&kp(p))for(let b=0;b<i.length;b++){const S=i[b];typeof S=="string"&&(i[b]=parseFloat(S))}else Qn[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:l}=this,s=[];for(let u=0;u<i.length;u++)(i[u]===null||TS(i[u]))&&s.push(u);s.length&&jS(i,s,l)}measureInitialState(){const{element:i,unresolvedKeyframes:l,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Qn[s](i.measureViewportBox(),window.getComputedStyle(i.current)),l[0]=this.measuredOrigin;const u=l[l.length-1];u!==void 0&&i.getValue(s,u).jump(u,!1)}measureEndState(){const{element:i,name:l,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const u=i.getValue(l);u&&u.jump(this.measuredOrigin,!1);const m=s.length-1,h=s[m];s[m]=Qn[l](i.measureViewportBox(),window.getComputedStyle(i.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,v])=>{i.getValue(p).set(v)}),this.resolveNoneKeyframes()}}const Ju=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function Yy(a,i,l){if(a==null)return[];if(a instanceof EventTarget)return[a];if(typeof a=="string"){let s=document;const u=l?.[a]??s.querySelectorAll(a);return u?Array.from(u):[]}return Array.from(a).filter(s=>s!=null)}const xu=(a,i)=>i&&typeof a=="number"?i.transform(a):a;function PS(a){return ey(a)&&"offsetHeight"in a&&!("ownerSVGElement"in a)}const{schedule:$u}=fy(queueMicrotask,!1),Ft={x:!1,y:!1};function Ky(){return Ft.x||Ft.y}function BS(a){return a==="x"||a==="y"?Ft[a]?null:(Ft[a]=!0,()=>{Ft[a]=!1}):Ft.x||Ft.y?null:(Ft.x=Ft.y=!0,()=>{Ft.x=Ft.y=!1})}function Qy(a,i){const l=Yy(a),s=new AbortController,u={passive:!0,...i,signal:s.signal};return[l,u,()=>s.abort()]}function LS(a){return!(a.pointerType==="touch"||Ky())}function OS(a,i,l={}){const[s,u,m]=Qy(a,l);return s.forEach(h=>{let p=!1,v=!1,g;const b=()=>{h.removeEventListener("pointerleave",z)},S=N=>{g&&(g(N),g=void 0),b()},w=N=>{p=!1,window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",w),v&&(v=!1,S(N))},k=()=>{p=!0,window.addEventListener("pointerup",w,u),window.addEventListener("pointercancel",w,u)},z=N=>{if(N.pointerType!=="touch"){if(p){v=!0;return}S(N)}},H=N=>{if(!LS(N))return;v=!1;const _=i(h,N);typeof _=="function"&&(g=_,h.addEventListener("pointerleave",z,u))};h.addEventListener("pointerenter",H,u),h.addEventListener("pointerdown",k,u)}),m}const Zy=(a,i)=>i?a===i?!0:Zy(a,i.parentElement):!1,ed=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,VS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function HS(a){return VS.has(a.tagName)||a.isContentEditable===!0}const GS=new Set(["INPUT","SELECT","TEXTAREA"]);function NS(a){return GS.has(a.tagName)||a.isContentEditable===!0}const Ws=new WeakSet;function Gp(a){return i=>{i.key==="Enter"&&a(i)}}function Wc(a,i){a.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const _S=(a,i)=>{const l=a.currentTarget;if(!l)return;const s=Gp(()=>{if(Ws.has(l))return;Wc(l,"down");const u=Gp(()=>{Wc(l,"up")}),m=()=>Wc(l,"cancel");l.addEventListener("keyup",u,i),l.addEventListener("blur",m,i)});l.addEventListener("keydown",s,i),l.addEventListener("blur",()=>l.removeEventListener("keydown",s),i)};function Np(a){return ed(a)&&!Ky()}const _p=new WeakSet;function IS(a,i,l={}){const[s,u,m]=Qy(a,l),h=p=>{const v=p.currentTarget;if(!Np(p)||_p.has(p))return;Ws.add(v),l.stopPropagation&&_p.add(p);const g=i(v,p),b={...u,capture:!0},S=(z,H)=>{window.removeEventListener("pointerup",w,b),window.removeEventListener("pointercancel",k,b),Ws.has(v)&&Ws.delete(v),Np(z)&&typeof g=="function"&&g(z,{success:H})},w=z=>{S(z,v===window||v===document||l.useGlobalTarget||Zy(v,z.target))},k=z=>{S(z,!1)};window.addEventListener("pointerup",w,b),window.addEventListener("pointercancel",k,b)};return s.forEach(p=>{(l.useGlobalTarget?window:p).addEventListener("pointerdown",h,u),PS(p)&&(p.addEventListener("focus",g=>_S(g,u)),!HS(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),m}function td(a){return ey(a)&&"ownerSVGElement"in a}const Js=new WeakMap;let $s;const Wy=(a,i,l)=>(s,u)=>u&&u[0]?u[0][a+"Size"]:td(s)&&"getBBox"in s?s.getBBox()[i]:s[l],qS=Wy("inline","width","offsetWidth"),FS=Wy("block","height","offsetHeight");function XS({target:a,borderBoxSize:i}){Js.get(a)?.forEach(l=>{l(a,{get width(){return qS(a,i)},get height(){return FS(a,i)}})})}function YS(a){a.forEach(XS)}function KS(){typeof ResizeObserver>"u"||($s=new ResizeObserver(YS))}function QS(a,i){$s||KS();const l=Yy(a);return l.forEach(s=>{let u=Js.get(s);u||(u=new Set,Js.set(s,u)),u.add(i),$s?.observe(s)}),()=>{l.forEach(s=>{const u=Js.get(s);u?.delete(i),u?.size||$s?.unobserve(s)})}}const eo=new Set;let di;function ZS(){di=()=>{const a={get width(){return window.innerWidth},get height(){return window.innerHeight}};eo.forEach(i=>i(a))},window.addEventListener("resize",di)}function WS(a){return eo.add(a),di||ZS(),()=>{eo.delete(a),!eo.size&&typeof di=="function"&&(window.removeEventListener("resize",di),di=void 0)}}function Ip(a,i){return typeof a=="function"?WS(a):QS(a,i)}function JS(a){return td(a)&&a.tagName==="svg"}const $S=[...qy,Xe,Xt],ew=a=>$S.find(Iy(a)),qp=()=>({translate:0,scale:1,origin:0,originPoint:0}),hi=()=>({x:qp(),y:qp()}),Fp=()=>({min:0,max:0}),Ke=()=>({x:Fp(),y:Fp()}),tw=new WeakMap;function vo(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function Ar(a){return typeof a=="string"||Array.isArray(a)}const nd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ad=["initial",...nd];function bo(a){return vo(a.animate)||ad.some(i=>Ar(a[i]))}function Jy(a){return!!(bo(a)||a.variants)}function nw(a,i,l){for(const s in i){const u=i[s],m=l[s];if(at(u))a.addValue(s,u);else if(at(m))a.addValue(s,fi(u,{owner:a}));else if(m!==u)if(a.hasValue(s)){const h=a.getValue(s);h.liveStyle===!0?h.jump(u):h.hasAnimated||h.set(u)}else{const h=a.getStaticValue(s);a.addValue(s,fi(h!==void 0?h:u,{owner:a}))}}for(const s in l)i[s]===void 0&&a.removeValue(s);return i}const uo={current:null},id={current:!1},aw=typeof window<"u";function $y(){if(id.current=!0,!!aw)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),i=()=>uo.current=a.matches;a.addEventListener("change",i),i()}else uo.current=!1}const Xp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ho={};function e0(a){ho=a}function iw(){return ho}class rw{scrapeMotionValuesFromProps(i,l,s){return{}}constructor({parent:i,props:l,presenceContext:s,reducedMotionConfig:u,skipAnimations:m,blockInitialAnimation:h,visualState:p},v={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Yu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const k=lt.now();this.renderScheduledAt<k&&(this.renderScheduledAt=k,De.render(this.render,!1,!0))};const{latestValues:g,renderState:b}=p;this.latestValues=g,this.baseTarget={...g},this.initialValues=l.initial?{...g}:{},this.renderState=b,this.parent=i,this.props=l,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=u,this.skipAnimationsConfig=m,this.options=v,this.blockInitialAnimation=!!h,this.isControllingVariants=bo(l),this.isVariantNode=Jy(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:S,...w}=this.scrapeMotionValuesFromProps(l,{},this);for(const k in w){const z=w[k];g[k]!==void 0&&at(z)&&z.set(g[k])}}mount(i){if(this.hasBeenMounted)for(const l in this.initialValues)this.values.get(l)?.jump(this.initialValues[l]),this.latestValues[l]=this.initialValues[l];this.current=i,tw.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,s)=>this.bindToMotionValue(s,l)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(id.current||$y(),this.shouldReduceMotion=uo.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Wn(this.notifyUpdate),Wn(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const l=this.features[i];l&&(l.unmount(),l.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,l){if(this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)(),l.accelerate&&By.has(i)&&this.current instanceof HTMLElement){const{factory:h,keyframes:p,times:v,ease:g,duration:b}=l.accelerate,S=new ky({element:this.current,name:i,keyframes:p,times:v,ease:g,duration:Ut(b)}),w=h(S);this.valueSubscriptions.set(i,()=>{w(),S.cancel()});return}const s=yi.has(i);s&&this.onBindTransform&&this.onBindTransform();const u=l.on("change",h=>{this.latestValues[i]=h,this.props.onUpdate&&De.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let m;typeof window<"u"&&window.MotionCheckAppearSync&&(m=window.MotionCheckAppearSync(this,i,l)),this.valueSubscriptions.set(i,()=>{u(),m&&m()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in ho){const l=ho[i];if(!l)continue;const{isEnabled:s,Feature:u}=l;if(!this.features[i]&&u&&s(this.props)&&(this.features[i]=new u(this)),this.features[i]){const m=this.features[i];m.isMounted?m.update():(m.mount(),m.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ke()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,l){this.latestValues[i]=l}update(i,l){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let s=0;s<Xp.length;s++){const u=Xp[s];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const m="on"+u,h=i[m];h&&(this.propEventSubscriptions[u]=this.on(u,h))}this.prevMotionValues=nw(this,this.scrapeMotionValuesFromProps(i,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(i),()=>l.variantChildren.delete(i)}addValue(i,l){const s=this.values.get(i);l!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,l),this.values.set(i,l),this.latestValues[i]=l.get())}removeValue(i){this.values.delete(i);const l=this.valueSubscriptions.get(i);l&&(l(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,l){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&l!==void 0&&(s=fi(l===null?void 0:l,{owner:this}),this.addValue(i,s)),s}readValue(i,l){let s=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return s!=null&&(typeof s=="string"&&($g(s)||ty(s))?s=parseFloat(s):!ew(s)&&Xt.test(l)&&(s=Xy(i,l)),this.setBaseTarget(i,at(s)?s.get():s)),at(s)?s.get():s}setBaseTarget(i,l){this.baseTarget[i]=l}getBaseTarget(i){const{initial:l}=this.props;let s;if(typeof l=="string"||typeof l=="object"){const m=Zu(this.props,l,this.presenceContext?.custom);m&&(s=m[i])}if(l&&s!==void 0)return s;const u=this.getBaseTargetFromProps(this.props,i);return u!==void 0&&!at(u)?u:this.initialValues[i]!==void 0&&s===void 0?void 0:this.baseTarget[i]}on(i,l){return this.events[i]||(this.events[i]=new Vu),this.events[i].add(l)}notify(i,...l){this.events[i]&&this.events[i].notify(...l)}scheduleRenderMicrotask(){$u.render(this.render)}}class t0 extends rw{constructor(){super(...arguments),this.KeyframeResolver=kS}sortInstanceNodePosition(i,l){return i.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(i,l){const s=i.style;return s?s[l]:void 0}removeValueFromRenderState(i,{vars:l,style:s}){delete l[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;at(i)&&(this.childSubscription=i.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}class Jn{constructor(i){this.isMounted=!1,this.node=i}update(){}}function n0({top:a,left:i,right:l,bottom:s}){return{x:{min:i,max:l},y:{min:a,max:s}}}function sw({x:a,y:i}){return{top:i.min,right:a.max,bottom:i.max,left:a.min}}function ow(a,i){if(!i)return a;const l=i({x:a.left,y:a.top}),s=i({x:a.right,y:a.bottom});return{top:l.y,left:l.x,bottom:s.y,right:s.x}}function Jc(a){return a===void 0||a===1}function Eu({scale:a,scaleX:i,scaleY:l}){return!Jc(a)||!Jc(i)||!Jc(l)}function ba(a){return Eu(a)||a0(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function a0(a){return Yp(a.x)||Yp(a.y)}function Yp(a){return a&&a!=="0%"}function mo(a,i,l){const s=a-l,u=i*s;return l+u}function Kp(a,i,l,s,u){return u!==void 0&&(a=mo(a,u,s)),mo(a,l,s)+i}function Uu(a,i=0,l=1,s,u){a.min=Kp(a.min,i,l,s,u),a.max=Kp(a.max,i,l,s,u)}function i0(a,{x:i,y:l}){Uu(a.x,i.translate,i.scale,i.originPoint),Uu(a.y,l.translate,l.scale,l.originPoint)}const Qp=.999999999999,Zp=1.0000000000001;function lw(a,i,l,s=!1){const u=l.length;if(!u)return;i.x=i.y=1;let m,h;for(let p=0;p<u;p++){m=l[p],h=m.projectionDelta;const{visualElement:v}=m.options;v&&v.props.style&&v.props.style.display==="contents"||(s&&m.options.layoutScroll&&m.scroll&&m!==m.root&&(Jt(a.x,-m.scroll.offset.x),Jt(a.y,-m.scroll.offset.y)),h&&(i.x*=h.x.scale,i.y*=h.y.scale,i0(a,h)),s&&ba(m.latestValues)&&to(a,m.latestValues,m.layout?.layoutBox))}i.x<Zp&&i.x>Qp&&(i.x=1),i.y<Zp&&i.y>Qp&&(i.y=1)}function Jt(a,i){a.min+=i,a.max+=i}function Wp(a,i,l,s,u=.5){const m=Me(a.min,a.max,u);Uu(a,i,l,m,s)}function Jp(a,i){return typeof a=="string"?parseFloat(a)/100*(i.max-i.min):a}function to(a,i,l){const s=l??a;Wp(a.x,Jp(i.x,s.x),i.scaleX,i.scale,i.originX),Wp(a.y,Jp(i.y,s.y),i.scaleY,i.scale,i.originY)}function r0(a,i){return n0(ow(a.getBoundingClientRect(),i))}function cw(a,i,l){const s=r0(a,l),{scroll:u}=i;return u&&(Jt(s.x,u.offset.x),Jt(s.y,u.offset.y)),s}const uw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},dw=gi.length;function hw(a,i,l){let s="",u=!0;for(let h=0;h<dw;h++){const p=gi[h],v=a[p];if(v===void 0)continue;let g=!0;if(typeof v=="number")g=v===(p.startsWith("scale")?1:0);else{const b=parseFloat(v);g=p.startsWith("scale")?b===1:b===0}if(!g||l){const b=xu(v,co[p]);if(!g){u=!1;const S=uw[p]||p;s+=`${S}(${b}) `}l&&(i[p]=b)}}const m=a.pathRotation;return m&&(u=!1,s+=`rotate(${xu(m,co.pathRotation)}) `),s=s.trim(),l?s=l(i,u?"":s):u&&(s="none"),s}function rd(a,i,l){const{style:s,vars:u,transformOrigin:m}=a;let h=!1,p=!1;for(const v in i){const g=i[v];if(yi.has(v)){h=!0;continue}else if(gy(v)){u[v]=g;continue}else{const b=xu(g,co[v]);v.startsWith("origin")?(p=!0,m[v]=b):s[v]=b}}if(i.transform||(h||l?s.transform=hw(i,a.transform,l):s.transform&&(s.transform="none")),p){const{originX:v="50%",originY:g="50%",originZ:b=0}=m;s.transformOrigin=`${v} ${g} ${b}`}}function s0(a,{style:i,vars:l},s,u){const m=a.style;let h;for(h in i)m[h]=i[h];u?.applyProjectionStyles(m,s);for(h in l)m.setProperty(h,l[h])}function $p(a,i){return i.max===i.min?0:a/(i.max-i.min)*100}const mr={correct:(a,i)=>{if(!i.target)return a;if(typeof a=="string")if(Q.test(a))a=parseFloat(a);else return a;const l=$p(a,i.target.x),s=$p(a,i.target.y);return`${l}% ${s}%`}},mw={correct:(a,{treeScale:i,projectionDelta:l})=>{const s=a,u=Xt.parse(a);if(u.length>5)return s;const m=Xt.createTransformer(a),h=typeof u[0]!="number"?1:0,p=l.x.scale*i.x,v=l.y.scale*i.y;u[0+h]/=p,u[1+h]/=v;const g=Me(p,v,.5);return typeof u[2+h]=="number"&&(u[2+h]/=g),typeof u[3+h]=="number"&&(u[3+h]/=g),m(u)}},zu={borderRadius:{...mr,applyTo:[...Ju]},borderTopLeftRadius:mr,borderTopRightRadius:mr,borderBottomLeftRadius:mr,borderBottomRightRadius:mr,boxShadow:mw};function o0(a,{layout:i,layoutId:l}){return yi.has(a)||a.startsWith("origin")||(i||l!==void 0)&&(!!zu[a]||a==="opacity")}function sd(a,i,l){const s=a.style,u=i?.style,m={};if(!s)return m;for(const h in s)(at(s[h])||u&&at(u[h])||o0(h,a)||l?.getValue(h)?.liveStyle!==void 0)&&(m[h]=s[h]);return m}function fw(a){return window.getComputedStyle(a)}class pw extends t0{constructor(){super(...arguments),this.type="html",this.renderInstance=s0}mount(i){go(!!i.style),super.mount(i)}readValueFromInstance(i,l){if(yi.has(l))return this.projection?.isProjecting?fu(l):B2(i,l);{const s=fw(i),u=(gy(l)?s.getPropertyValue(l):s[l])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(i,{transformPagePoint:l}){return r0(i,l)}build(i,l,s){rd(i,l,s.transformTemplate)}scrapeMotionValuesFromProps(i,l,s){return sd(i,l,s)}}const gw={offset:"stroke-dashoffset",array:"stroke-dasharray"},yw={offset:"strokeDashoffset",array:"strokeDasharray"};function vw(a,i,l=1,s=0,u=!0){a.pathLength=1;const m=u?gw:yw;a[m.offset]=`${-s}`,a[m.array]=`${i} ${l}`}const bw=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function l0(a,{attrX:i,attrY:l,attrScale:s,pathLength:u,pathSpacing:m=1,pathOffset:h=0,...p},v,g,b){if(rd(a,p,g),v){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:S,style:w}=a;S.transform&&(w.transform=S.transform,delete S.transform),(w.transform||S.transformOrigin)&&(w.transformOrigin=S.transformOrigin??"50% 50%",delete S.transformOrigin),w.transform&&(w.transformBox=b?.transformBox??"fill-box",delete S.transformBox);for(const k of bw)S[k]!==void 0&&(w[k]=S[k],delete S[k]);i!==void 0&&(S.x=i),l!==void 0&&(S.y=l),s!==void 0&&(S.scale=s),u!==void 0&&vw(S,u,m,h,!1)}const c0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),u0=a=>typeof a=="string"&&a.toLowerCase()==="svg";function Sw(a,i,l,s){s0(a,i,void 0,s);for(const u in i.attrs)a.setAttribute(c0.has(u)?u:Wu(u),i.attrs[u])}function d0(a,i,l){const s=sd(a,i,l);for(const u in a)if(at(a[u])||at(i[u])){const m=gi.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;s[m]=a[u]}return s}class ww extends t0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ke}getBaseTargetFromProps(i,l){return i[l]}readValueFromInstance(i,l){if(yi.has(l)){const s=Fy(l);return s&&s.default||0}return l=c0.has(l)?l:Wu(l),i.getAttribute(l)}scrapeMotionValuesFromProps(i,l,s){return d0(i,l,s)}build(i,l,s){l0(i,l,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(i,l,s,u){Sw(i,l,s,u)}mount(i){this.isSVGTag=u0(i.tagName),super.mount(i)}}const Aw=ad.length;function h0(a){if(!a)return;if(!a.isControllingVariants){const l=a.parent?h0(a.parent)||{}:{};return a.props.initial!==void 0&&(l.initial=a.props.initial),l}const i={};for(let l=0;l<Aw;l++){const s=ad[l],u=a.props[s];(Ar(u)||u===!1)&&(i[s]=u)}return i}function m0(a,i){if(!Array.isArray(i))return!1;const l=i.length;if(l!==a.length)return!1;for(let s=0;s<l;s++)if(i[s]!==a[s])return!1;return!0}const Cw=[...nd].reverse(),Tw=nd.length;function xw(a){return i=>Promise.all(i.map(({animation:l,options:s})=>AS(a,l,s)))}function Ew(a){let i=xw(a),l=eg(),s=!0,u=!1;const m=g=>(b,S)=>{const w=Ca(a,S,g==="exit"?a.presenceContext?.custom:void 0);if(w){const{transition:k,transitionEnd:z,...H}=w;b={...b,...H,...z}}return b};function h(g){i=g(a)}function p(g){const{props:b}=a,S=h0(a.parent)||{},w=[],k=new Set;let z={},H=1/0;for(let _=0;_<Tw;_++){const R=Cw[_],D=l[R],G=b[R]!==void 0?b[R]:S[R],W=Ar(G),le=R===g?D.isActive:null;le===!1&&(H=_);let K=G===S[R]&&G!==b[R]&&W;if(K&&(s||u)&&a.manuallyAnimateOnMount&&(K=!1),D.protectedKeys={...z},!D.isActive&&le===null||!G&&!D.prevProp||vo(G)||typeof G=="boolean")continue;if(R==="exit"&&D.isActive&&le!==!0){D.prevResolvedValues&&(z={...z,...D.prevResolvedValues});continue}const $=Uw(D.prevProp,G);let Te=$||R===g&&D.isActive&&!K&&W||_>H&&W,ne=!1;const ve=Array.isArray(G)?G:[G];let we=ve.reduce(m(R),{});le===!1&&(we={});const{prevResolvedValues:rt={}}=D,Ne={...rt,...we},Oe=X=>{Te=!0,k.has(X)&&(ne=!0,k.delete(X)),D.needsAnimating[X]=!0;const se=a.getValue(X);se&&(se.liveStyle=!1)};for(const X in Ne){const se=we[X],fe=rt[X];if(z.hasOwnProperty(X))continue;let T=!1;Su(se)&&Su(fe)?T=!m0(se,fe)||$:T=se!==fe,T?se!=null?Oe(X):k.add(X):se!==void 0&&k.has(X)?Oe(X):D.protectedKeys[X]=!0}D.prevProp=G,D.prevResolvedValues=we,D.isActive&&(z={...z,...we}),(s||u)&&a.blockInitialAnimation&&(Te=!1);const P=K&&$;Te&&(!P||ne)&&w.push(...ve.map(X=>{const se={type:R};if(typeof X=="string"&&(s||u)&&!P&&a.manuallyAnimateOnMount&&a.parent){const{parent:fe}=a,T=Ca(fe,X);if(fe.enteringChildren&&T){const{delayChildren:V}=T.transition||{};se.delay=Ly(fe.enteringChildren,a,V)}}return{animation:X,options:se}}))}if(k.size){const _={};if(typeof b.initial!="boolean"){const R=Ca(a,Array.isArray(b.initial)?b.initial[0]:b.initial);R&&R.transition&&(_.transition=R.transition)}k.forEach(R=>{const D=a.getBaseTarget(R),G=a.getValue(R);G&&(G.liveStyle=!0),_[R]=D??null}),w.push({animation:_})}let N=!!w.length;return s&&(b.initial===!1||b.initial===b.animate)&&!a.manuallyAnimateOnMount&&(N=!1),s=!1,u=!1,N?i(w):Promise.resolve()}function v(g,b){if(l[g].isActive===b)return Promise.resolve();a.variantChildren?.forEach(w=>w.animationState?.setActive(g,b)),l[g].isActive=b;const S=p(g);for(const w in l)l[w].protectedKeys={};return S}return{animateChanges:p,setActive:v,setAnimateFunction:h,getState:()=>l,reset:()=>{l=eg(),u=!0}}}function Uw(a,i){return typeof i=="string"?i!==a:Array.isArray(i)?!m0(i,a):!1}function va(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function eg(){return{animate:va(!0),whileInView:va(),whileHover:va(),whileTap:va(),whileDrag:va(),whileFocus:va(),exit:va()}}function Mu(a,i){a.min=i.min,a.max=i.max}function qt(a,i){Mu(a.x,i.x),Mu(a.y,i.y)}function tg(a,i){a.translate=i.translate,a.scale=i.scale,a.originPoint=i.originPoint,a.origin=i.origin}const f0=1e-4,zw=1-f0,Mw=1+f0,p0=.01,Dw=0-p0,Rw=0+p0;function ct(a){return a.max-a.min}function jw(a,i,l){return Math.abs(a-i)<=l}function ng(a,i,l,s=.5){a.origin=s,a.originPoint=Me(i.min,i.max,a.origin),a.scale=ct(l)/ct(i),a.translate=Me(l.min,l.max,a.origin)-a.originPoint,(a.scale>=zw&&a.scale<=Mw||isNaN(a.scale))&&(a.scale=1),(a.translate>=Dw&&a.translate<=Rw||isNaN(a.translate))&&(a.translate=0)}function vr(a,i,l,s){ng(a.x,i.x,l.x,s?s.originX:void 0),ng(a.y,i.y,l.y,s?s.originY:void 0)}function ag(a,i,l,s=0){const u=s?Me(l.min,l.max,s):l.min;a.min=u+i.min,a.max=a.min+ct(i)}function kw(a,i,l,s){ag(a.x,i.x,l.x,s?.x),ag(a.y,i.y,l.y,s?.y)}function ig(a,i,l,s=0){const u=s?Me(l.min,l.max,s):l.min;a.min=i.min-u,a.max=a.min+ct(i)}function fo(a,i,l,s){ig(a.x,i.x,l.x,s?.x),ig(a.y,i.y,l.y,s?.y)}function rg(a,i,l,s,u){return a-=i,a=mo(a,1/l,s),u!==void 0&&(a=mo(a,1/u,s)),a}function Pw(a,i=0,l=1,s=.5,u,m=a,h=a){if($t.test(i)&&(i=parseFloat(i),i=Me(h.min,h.max,i/100)-h.min),typeof i!="number")return;let p=Me(m.min,m.max,s);a===m&&(p-=i),a.min=rg(a.min,i,l,p,u),a.max=rg(a.max,i,l,p,u)}function sg(a,i,[l,s,u],m,h){Pw(a,i[l],i[s],i[u],i.scale,m,h)}const Bw=["x","scaleX","originX"],Lw=["y","scaleY","originY"];function og(a,i,l,s){sg(a.x,i,Bw,l?l.x:void 0,s?s.x:void 0),sg(a.y,i,Lw,l?l.y:void 0,s?s.y:void 0)}function lg(a){return a.translate===0&&a.scale===1}function g0(a){return lg(a.x)&&lg(a.y)}function cg(a,i){return a.min===i.min&&a.max===i.max}function Ow(a,i){return cg(a.x,i.x)&&cg(a.y,i.y)}function ug(a,i){return Math.round(a.min)===Math.round(i.min)&&Math.round(a.max)===Math.round(i.max)}function y0(a,i){return ug(a.x,i.x)&&ug(a.y,i.y)}function dg(a){return ct(a.x)/ct(a.y)}function hg(a,i){return a.translate===i.translate&&a.scale===i.scale&&a.originPoint===i.originPoint}function Wt(a){return[a("x"),a("y")]}function Vw(a,i,l){let s="";const u=a.x.translate/i.x,m=a.y.translate/i.y,h=l?.z||0;if((u||m||h)&&(s=`translate3d(${u}px, ${m}px, ${h}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),l){const{transformPerspective:g,rotate:b,pathRotation:S,rotateX:w,rotateY:k,skewX:z,skewY:H}=l;g&&(s=`perspective(${g}px) ${s}`),b&&(s+=`rotate(${b}deg) `),S&&(s+=`rotate(${S}deg) `),w&&(s+=`rotateX(${w}deg) `),k&&(s+=`rotateY(${k}deg) `),z&&(s+=`skewX(${z}deg) `),H&&(s+=`skewY(${H}deg) `)}const p=a.x.scale*i.x,v=a.y.scale*i.y;return(p!==1||v!==1)&&(s+=`scale(${p}, ${v})`),s||"none"}const Hw=Ju.length,mg=a=>typeof a=="string"?parseFloat(a):a,fg=a=>typeof a=="number"||Q.test(a);function Gw(a,i,l,s,u,m){u?(a.opacity=Me(0,l.opacity??1,Nw(s)),a.opacityExit=Me(i.opacity??1,0,_w(s))):m&&(a.opacity=Me(i.opacity??1,l.opacity??1,s));for(let h=0;h<Hw;h++){const p=Ju[h];let v=pg(i,p),g=pg(l,p);if(v===void 0&&g===void 0)continue;v||(v=0),g||(g=0),v===0||g===0||fg(v)===fg(g)?(a[p]=Math.max(Me(mg(v),mg(g),s),0),($t.test(g)||$t.test(v))&&(a[p]+="%")):a[p]=g}(i.rotate||l.rotate)&&(a.rotate=Me(i.rotate||0,l.rotate||0,s))}function pg(a,i){return a[i]!==void 0?a[i]:a.borderRadius}const Nw=v0(0,.5,uy),_w=v0(.5,.95,Gt);function v0(a,i,l){return s=>s<a?0:s>i?1:l(Sr(a,i,s))}function Iw(a,i,l){const s=at(a)?a:fi(a);return s.start(Qu("",s,i,l)),s.animation}function Cr(a,i,l,s={passive:!0}){return a.addEventListener(i,l,s),()=>a.removeEventListener(i,l,s)}const qw=(a,i)=>a.depth-i.depth;class Fw{constructor(){this.children=[],this.isDirty=!1}add(i){Ou(this.children,i),this.isDirty=!0}remove(i){io(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(qw),this.isDirty=!1,this.children.forEach(i)}}function Xw(a,i){const l=lt.now(),s=({timestamp:u})=>{const m=u-l;m>=i&&(Wn(s),a(m-i))};return De.setup(s,!0),()=>Wn(s)}function no(a){return at(a)?a.get():a}class Yw{constructor(){this.members=[]}add(i){Ou(this.members,i);for(let l=this.members.length-1;l>=0;l--){const s=this.members[l];if(s===i||s===this.lead||s===this.prevLead)continue;const u=s.instance;(!u||u.isConnected===!1)&&!s.snapshot&&(io(this.members,s),s.unmount())}i.scheduleRender()}remove(i){if(io(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(i){for(let l=this.members.indexOf(i)-1;l>=0;l--){const s=this.members[l];if(s.isPresent!==!1&&s.instance?.isConnected!==!1)return this.promote(s),!0}return!1}promote(i,l){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.updateSnapshot(),i.scheduleRender();const{layoutDependency:u}=s.options,{layoutDependency:m}=i.options;(u===void 0||u!==m)&&(i.resumeFrom=s,l&&(s.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root?.isUpdating&&(i.isLayoutDirty=!0)),i.options.crossfade===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{i.options.onExitComplete?.(),i.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(i=>i.instance&&i.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const ao={hasAnimatedSinceResize:!0,hasEverUpdated:!1},$c=["","X","Y","Z"],Kw=1e3;let Qw=0;function eu(a,i,l,s){const{latestValues:u}=i;u[a]&&(l[a]=u[a],i.setStaticValue(a,0),s&&(s[a]=0))}function b0(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:i}=a.options;if(!i)return;const l=Ny(i);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:u,layoutId:m}=a.options;window.MotionCancelOptimisedAnimation(l,"transform",De,!(u||m))}const{parent:s}=a;s&&!s.hasCheckedOptimisedAppear&&b0(s)}function S0({attachResizeListener:a,defaultParent:i,measureScroll:l,checkIsScrollRoot:s,resetTransform:u}){return class{constructor(h={},p=i?.()){this.id=Qw++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Jw),this.nodes.forEach(iA),this.nodes.forEach(rA),this.nodes.forEach($w)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=h,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let v=0;v<this.path.length;v++)this.path[v].shouldResetTransform=!0;this.root===this&&(this.nodes=new Fw)}addEventListener(h,p){return this.eventHandlers.has(h)||this.eventHandlers.set(h,new Vu),this.eventHandlers.get(h).add(p)}notifyListeners(h,...p){const v=this.eventHandlers.get(h);v&&v.notify(...p)}hasListeners(h){return this.eventHandlers.has(h)}mount(h){if(this.instance)return;this.isSVG=td(h)&&!JS(h),this.instance=h;const{layoutId:p,layout:v,visualElement:g}=this.options;if(g&&!g.current&&g.mount(h),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(v||p)&&(this.isLayoutDirty=!0),a){let b,S=0;const w=()=>this.root.updateBlockedByResize=!1;De.read(()=>{S=window.innerWidth}),a(h,()=>{const k=window.innerWidth;k!==S&&(S=k,this.root.updateBlockedByResize=!0,b&&b(),b=Xw(w,250),ao.hasAnimatedSinceResize&&(ao.hasAnimatedSinceResize=!1,this.nodes.forEach(vg)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||v)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:S,hasRelativeLayoutChanged:w,layout:k})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const z=this.options.transition||g.getDefaultTransition()||uA,{onLayoutAnimationStart:H,onLayoutAnimationComplete:N}=g.getProps(),_=!this.targetLayout||!y0(this.targetLayout,k),R=!S&&w;if(this.options.layoutRoot||this.resumeFrom||R||S&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const D={...Ku(z,"layout"),onPlay:H,onComplete:N};(g.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D),this.setAnimationOrigin(b,R,D.path)}else S||vg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=k})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const h=this.getStack();h&&h.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Wn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(sA),this.animationId++)}getTransformTemplate(){const{visualElement:h}=this.options;return h&&h.getProps().transformTemplate}willUpdate(h=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&b0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let b=0;b<this.path.length;b++){const S=this.path[b];S.shouldResetTransform=!0,(typeof S.latestValues.x=="string"||typeof S.latestValues.y=="string")&&(S.isLayoutDirty=!0),S.updateScroll("snapshot"),S.options.layoutRoot&&S.willUpdate(!1)}const{layoutId:p,layout:v}=this.options;if(p===void 0&&!v)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),h&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const v=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),v&&this.nodes.forEach(tA),this.nodes.forEach(gg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(yg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(nA),this.nodes.forEach(aA),this.nodes.forEach(Zw),this.nodes.forEach(Ww)):this.nodes.forEach(yg),this.clearAllSnapshots();const p=lt.now();nt.delta=en(0,1e3/60,p-nt.timestamp),nt.timestamp=p,nt.isProcessing=!0,Fc.update.process(nt),Fc.preRender.process(nt),Fc.render.process(nt),nt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$u.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(eA),this.sharedNodes.forEach(oA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,De.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){De.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ct(this.snapshot.measuredBox.x)&&!ct(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let v=0;v<this.path.length;v++)this.path[v].updateScroll();const h=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Ke()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,h?h.layoutBox:void 0)}updateScroll(h="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===h&&(p=!1),p&&this.instance){const v=s(this.instance);this.scroll={animationId:this.root.animationId,phase:h,isRoot:v,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:v}}}resetTransform(){if(!u)return;const h=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!g0(this.projectionDelta),v=this.getTransformTemplate(),g=v?v(this.latestValues,""):void 0,b=g!==this.prevTransformTemplateValue;h&&this.instance&&(p||ba(this.latestValues)||b)&&(u(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(h=!0){const p=this.measurePageBox();let v=this.removeElementScroll(p);return h&&(v=this.removeTransform(v)),dA(v),{animationId:this.root.animationId,measuredBox:p,layoutBox:v,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:h}=this.options;if(!h)return Ke();const p=h.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(hA))){const{scroll:g}=this.root;g&&(Jt(p.x,g.offset.x),Jt(p.y,g.offset.y))}return p}removeElementScroll(h){const p=Ke();if(qt(p,h),this.scroll?.wasRoot)return p;for(let v=0;v<this.path.length;v++){const g=this.path[v],{scroll:b,options:S}=g;g!==this.root&&b&&S.layoutScroll&&(b.wasRoot&&qt(p,h),Jt(p.x,b.offset.x),Jt(p.y,b.offset.y))}return p}applyTransform(h,p=!1,v){const g=v||Ke();qt(g,h);for(let b=0;b<this.path.length;b++){const S=this.path[b];!p&&S.options.layoutScroll&&S.scroll&&S!==S.root&&(Jt(g.x,-S.scroll.offset.x),Jt(g.y,-S.scroll.offset.y)),ba(S.latestValues)&&to(g,S.latestValues,S.layout?.layoutBox)}return ba(this.latestValues)&&to(g,this.latestValues,this.layout?.layoutBox),g}removeTransform(h){const p=Ke();qt(p,h);for(let v=0;v<this.path.length;v++){const g=this.path[v];if(!ba(g.latestValues))continue;let b;g.instance&&(Eu(g.latestValues)&&g.updateSnapshot(),b=Ke(),qt(b,g.measurePageBox())),og(p,g.latestValues,g.snapshot?.layoutBox,b)}return ba(this.latestValues)&&og(p,this.latestValues),p}setTargetDelta(h){this.targetDelta=h,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(h){this.options={...this.options,...h,crossfade:h.crossfade!==void 0?h.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==nt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(h=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const v=!!this.resumingFrom||this!==p;if(!(h||v&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:S}=this.options;if(!this.layout||!(b||S))return;this.resolvedRelativeTargetAt=nt.timestamp;const w=this.getClosestProjectingParent();w&&this.linkedParentVersion!==w.layoutVersion&&!w.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&w&&w.layout?this.createRelativeTarget(w,this.layout.layoutBox,w.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ke(),this.targetWithTransforms=Ke()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),kw(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):qt(this.target,this.layout.layoutBox),i0(this.target,this.targetDelta)):qt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?this.createRelativeTarget(w,this.target,w.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Eu(this.parent.latestValues)||a0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(h,p,v){this.relativeParent=h,this.linkedParentVersion=h.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ke(),this.relativeTargetOrigin=Ke(),fo(this.relativeTargetOrigin,p,v,this.options.layoutAnchor||void 0),qt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const h=this.getLead(),p=!!this.resumingFrom||this!==h;let v=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(v=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(v=!1),this.resolvedRelativeTargetAt===nt.timestamp&&(v=!1),v)return;const{layout:g,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||b))return;qt(this.layoutCorrected,this.layout.layoutBox);const S=this.treeScale.x,w=this.treeScale.y;lw(this.layoutCorrected,this.treeScale,this.path,p),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=Ke());const{target:k}=h;if(!k){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(tg(this.prevProjectionDelta.x,this.projectionDelta.x),tg(this.prevProjectionDelta.y,this.projectionDelta.y)),vr(this.projectionDelta,this.layoutCorrected,k,this.latestValues),(this.treeScale.x!==S||this.treeScale.y!==w||!hg(this.projectionDelta.x,this.prevProjectionDelta.x)||!hg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",k))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(h=!0){if(this.options.visualElement?.scheduleRender(),h){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=hi(),this.projectionDelta=hi(),this.projectionDeltaWithTransform=hi()}setAnimationOrigin(h,p=!1,v){const g=this.snapshot,b=g?g.latestValues:{},S={...this.latestValues},w=hi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const k=Ke(),z=g?g.source:void 0,H=this.layout?this.layout.source:void 0,N=z!==H,_=this.getStack(),R=!_||_.members.length<=1,D=!!(N&&!R&&this.options.crossfade===!0&&!this.path.some(cA));this.animationProgress=0;let G;const W=v?.interpolateProjection(h);this.mixTargetDelta=le=>{const K=le/1e3,$=W?.(K);$?(w.x.translate=$.x,w.x.scale=Me(h.x.scale,1,K),w.x.origin=h.x.origin,w.x.originPoint=h.x.originPoint,w.y.translate=$.y,w.y.scale=Me(h.y.scale,1,K),w.y.origin=h.y.origin,w.y.originPoint=h.y.originPoint):(bg(w.x,h.x,K),bg(w.y,h.y,K)),this.setTargetDelta(w),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fo(k,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),lA(this.relativeTarget,this.relativeTargetOrigin,k,K),G&&Ow(this.relativeTarget,G)&&(this.isProjectionDirty=!1),G||(G=Ke()),qt(G,this.relativeTarget)),N&&(this.animationValues=S,Gw(S,b,this.latestValues,K,D,R)),$&&$.rotate!==void 0&&(this.animationValues||(this.animationValues=S),this.animationValues.pathRotation=$.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=K},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(h){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Wn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=De.update(()=>{ao.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=fi(0)),this.motionValue.jump(0,!1),this.currentAnimation=Iw(this.motionValue,[0,1e3],{...h,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),h.onUpdate&&h.onUpdate(p)},onComplete:()=>{h.onComplete&&h.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const h=this.getStack();h&&h.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Kw),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const h=this.getLead();let{targetWithTransforms:p,target:v,layout:g,latestValues:b}=h;if(!(!p||!v||!g)){if(this!==h&&this.layout&&g&&w0(this.options.animationType,this.layout.layoutBox,g.layoutBox)){v=this.target||Ke();const S=ct(this.layout.layoutBox.x);v.x.min=h.target.x.min,v.x.max=v.x.min+S;const w=ct(this.layout.layoutBox.y);v.y.min=h.target.y.min,v.y.max=v.y.min+w}qt(p,v),to(p,b),vr(this.projectionDeltaWithTransform,this.layoutCorrected,p,b)}}registerSharedNode(h,p){this.sharedNodes.has(h)||this.sharedNodes.set(h,new Yw),this.sharedNodes.get(h).add(p);const g=p.options.initialPromotionConfig;p.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(p):void 0})}isLead(){const h=this.getStack();return h?h.lead===this:!0}getLead(){const{layoutId:h}=this.options;return h?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:h}=this.options;return h?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:h}=this.options;if(h)return this.root.sharedNodes.get(h)}promote({needsReset:h,transition:p,preserveFollowOpacity:v}={}){const g=this.getStack();g&&g.promote(this,v),h&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const h=this.getStack();return h?h.relegate(this):!1}resetSkewAndRotation(){const{visualElement:h}=this.options;if(!h)return;let p=!1;const{latestValues:v}=h;if((v.z||v.rotate||v.rotateX||v.rotateY||v.rotateZ||v.skewX||v.skewY)&&(p=!0),!p)return;const g={};v.z&&eu("z",h,g,this.animationValues);for(let b=0;b<$c.length;b++)eu(`rotate${$c[b]}`,h,g,this.animationValues),eu(`skew${$c[b]}`,h,g,this.animationValues);h.render();for(const b in g)h.setStaticValue(b,g[b]),this.animationValues&&(this.animationValues[b]=g[b]);h.scheduleRender()}applyProjectionStyles(h,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){h.visibility="hidden";return}const v=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,h.visibility="",h.opacity="",h.pointerEvents=no(p?.pointerEvents)||"",h.transform=v?v(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(h.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,h.pointerEvents=no(p?.pointerEvents)||""),this.hasProjected&&!ba(this.latestValues)&&(h.transform=v?v({},""):"none",this.hasProjected=!1);return}h.visibility="";const b=g.animationValues||g.latestValues;this.applyTransformsToTarget();let S=Vw(this.projectionDeltaWithTransform,this.treeScale,b);v&&(S=v(b,S)),h.transform=S;const{x:w,y:k}=this.projectionDelta;h.transformOrigin=`${w.origin*100}% ${k.origin*100}% 0`,g.animationValues?h.opacity=g===this?b.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:b.opacityExit:h.opacity=g===this?b.opacity!==void 0?b.opacity:"":b.opacityExit!==void 0?b.opacityExit:0;for(const z in zu){if(b[z]===void 0)continue;const{correct:H,applyTo:N,isCSSVariable:_}=zu[z],R=S==="none"?b[z]:H(b[z],g);if(N){const D=N.length;for(let G=0;G<D;G++)h[N[G]]=R}else _?this.options.visualElement.renderState.vars[z]=R:h[z]=R}this.options.layoutId&&(h.pointerEvents=g===this?no(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(h=>h.currentAnimation?.stop()),this.root.nodes.forEach(gg),this.root.sharedNodes.clear()}}}function Zw(a){a.updateLayout()}function Ww(a){const i=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&i&&a.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:s}=a.layout,{animationType:u}=a.options,m=i.source!==a.layout.source;if(u==="size")Wt(b=>{const S=m?i.measuredBox[b]:i.layoutBox[b],w=ct(S);S.min=l[b].min,S.max=S.min+w});else if(u==="x"||u==="y"){const b=u==="x"?"y":"x";Mu(m?i.measuredBox[b]:i.layoutBox[b],l[b])}else w0(u,i.layoutBox,l)&&Wt(b=>{const S=m?i.measuredBox[b]:i.layoutBox[b],w=ct(l[b]);S.max=S.min+w,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[b].max=a.relativeTarget[b].min+w)});const h=hi();vr(h,l,i.layoutBox);const p=hi();m?vr(p,a.applyTransform(s,!0),i.measuredBox):vr(p,l,i.layoutBox);const v=!g0(h);let g=!1;if(!a.resumeFrom){const b=a.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:S,layout:w}=b;if(S&&w){const k=a.options.layoutAnchor||void 0,z=Ke();fo(z,i.layoutBox,S.layoutBox,k);const H=Ke();fo(H,l,w.layoutBox,k),y0(z,H)||(g=!0),b.options.layoutRoot&&(a.relativeTarget=H,a.relativeTargetOrigin=z,a.relativeParent=b)}}}a.notifyListeners("didUpdate",{layout:l,snapshot:i,delta:p,layoutDelta:h,hasLayoutChanged:v,hasRelativeLayoutChanged:g})}else if(a.isLead()){const{onExitComplete:l}=a.options;l&&l()}a.options.transition=void 0}function Jw(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function $w(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function eA(a){a.clearSnapshot()}function gg(a){a.clearMeasurements()}function tA(a){a.isLayoutDirty=!0,a.updateLayout()}function yg(a){a.isLayoutDirty=!1}function nA(a){a.isAnimationBlocked&&a.layout&&!a.isLayoutDirty&&(a.snapshot=a.layout,a.isLayoutDirty=!0)}function aA(a){const{visualElement:i}=a.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),a.resetTransform()}function vg(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function iA(a){a.resolveTargetDelta()}function rA(a){a.calcProjection()}function sA(a){a.resetSkewAndRotation()}function oA(a){a.removeLeadSnapshot()}function bg(a,i,l){a.translate=Me(i.translate,0,l),a.scale=Me(i.scale,1,l),a.origin=i.origin,a.originPoint=i.originPoint}function Sg(a,i,l,s){a.min=Me(i.min,l.min,s),a.max=Me(i.max,l.max,s)}function lA(a,i,l,s){Sg(a.x,i.x,l.x,s),Sg(a.y,i.y,l.y,s)}function cA(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const uA={duration:.45,ease:[.4,0,.1,1]},wg=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),Ag=wg("applewebkit/")&&!wg("chrome/")?Math.round:Gt;function Cg(a){a.min=Ag(a.min),a.max=Ag(a.max)}function dA(a){Cg(a.x),Cg(a.y)}function w0(a,i,l){return a==="position"||a==="preserve-aspect"&&!jw(dg(i),dg(l),.2)}function hA(a){return a!==a.root&&a.scroll?.wasRoot}const mA=S0({attachResizeListener:(a,i)=>Cr(a,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),tu={current:void 0},A0=S0({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!tu.current){const a=new mA({});a.mount(window),a.setOptions({layoutScroll:!0}),tu.current=a}return tu.current},resetTransform:(a,i)=>{a.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),C0=F.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function fA(a=!0){const i=F.useContext(Lu);if(i===null)return[!0,null];const{isPresent:l,onExitComplete:s,register:u}=i,m=F.useId();F.useEffect(()=>{if(a)return u(m)},[a]);const h=F.useCallback(()=>a&&s&&s(m),[m,s,a]);return!l&&s?[!1,h]:[!0]}const T0=F.createContext({strict:!1}),Tg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let xg=!1;function pA(){if(xg)return;const a={};for(const i in Tg)a[i]={isEnabled:l=>Tg[i].some(s=>!!l[s])};e0(a),xg=!0}function x0(){return pA(),iw()}function gA(a){const i=x0();for(const l in a)i[l]={...i[l],...a[l]};e0(i)}const yA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function po(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||yA.has(a)}let E0=a=>!po(a);function vA(a){typeof a=="function"&&(E0=i=>i.startsWith("on")?!po(i):a(i))}try{vA(require("@emotion/is-prop-valid").default)}catch{}function bA(a,i,l){const s={};for(const u in a)u==="values"&&typeof a.values=="object"||at(a[u])||(E0(u)||l===!0&&po(u)||!i&&!po(u)||a.draggable&&u.startsWith("onDrag"))&&(s[u]=a[u]);return s}const So=F.createContext({});function SA(a,i){if(bo(a)){const{initial:l,animate:s}=a;return{initial:l===!1||Ar(l)?l:void 0,animate:Ar(s)?s:void 0}}return a.inherit!==!1?i:{}}function wA(a){const{initial:i,animate:l}=SA(a,F.useContext(So));return F.useMemo(()=>({initial:i,animate:l}),[Eg(i),Eg(l)])}function Eg(a){return Array.isArray(a)?a.join(" "):a}const od=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function U0(a,i,l){for(const s in i)!at(i[s])&&!o0(s,l)&&(a[s]=i[s])}function AA({transformTemplate:a},i){return F.useMemo(()=>{const l=od();return rd(l,i,a),Object.assign({},l.vars,l.style)},[i])}function CA(a,i){const l=a.style||{},s={};return U0(s,l,a),Object.assign(s,AA(a,i)),s}function TA(a,i){const l={},s=CA(a,i);return a.drag&&a.dragListener!==!1&&(l.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(l.tabIndex=0),l.style=s,l}const z0=()=>({...od(),attrs:{}});function xA(a,i,l,s){const u=F.useMemo(()=>{const m=z0();return l0(m,i,u0(s),a.transformTemplate,a.style),{...m.attrs,style:{...m.style}}},[i]);if(a.style){const m={};U0(m,a.style,a),u.style={...m,...u.style}}return u}const EA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ld(a){return typeof a!="string"||a.includes("-")?!1:!!(EA.indexOf(a)>-1||/[A-Z]/u.test(a))}function UA(a,i,l,{latestValues:s},u,m=!1,h){const v=(h??ld(a)?xA:TA)(i,s,u,a),g=bA(i,typeof a=="string",m),b=a!==F.Fragment?{...g,...v,ref:l}:{},{children:S}=i,w=F.useMemo(()=>at(S)?S.get():S,[S]);return F.createElement(a,{...b,children:w})}function zA({scrapeMotionValuesFromProps:a,createRenderState:i},l,s,u){return{latestValues:MA(l,s,u,a),renderState:i()}}function MA(a,i,l,s){const u={},m=s(a,{});for(const w in m)u[w]=no(m[w]);let{initial:h,animate:p}=a;const v=bo(a),g=Jy(a);i&&g&&!v&&a.inherit!==!1&&(h===void 0&&(h=i.initial),p===void 0&&(p=i.animate));let b=l?l.initial===!1:!1;b=b||h===!1;const S=b?p:h;if(S&&typeof S!="boolean"&&!vo(S)){const w=Array.isArray(S)?S:[S];for(let k=0;k<w.length;k++){const z=Zu(a,w[k]);if(z){const{transitionEnd:H,transition:N,..._}=z;for(const R in _){let D=_[R];if(Array.isArray(D)){const G=b?D.length-1:0;D=D[G]}D!==null&&(u[R]=D)}for(const R in H)u[R]=H[R]}}}return u}const M0=a=>(i,l)=>{const s=F.useContext(So),u=F.useContext(Lu),m=()=>zA(a,i,s,u);return l?m():z1(m)},DA=M0({scrapeMotionValuesFromProps:sd,createRenderState:od}),RA=M0({scrapeMotionValuesFromProps:d0,createRenderState:z0}),jA=Symbol.for("motionComponentSymbol");function kA(a,i,l){const s=F.useRef(l);F.useInsertionEffect(()=>{s.current=l});const u=F.useRef(null);return F.useCallback(m=>{m&&a.onMount?.(m),i&&(m?i.mount(m):i.unmount());const h=s.current;if(typeof h=="function")if(m){const p=h(m);typeof p=="function"&&(u.current=p)}else u.current?(u.current(),u.current=null):h(m);else h&&(h.current=m)},[i])}const D0=F.createContext({});function ci(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function PA(a,i,l,s,u,m){const{visualElement:h}=F.useContext(So),p=F.useContext(T0),v=F.useContext(Lu),g=F.useContext(C0),b=g.reducedMotion,S=g.skipAnimations,w=F.useRef(null),k=F.useRef(!1);s=s||p.renderer,!w.current&&s&&(w.current=s(a,{visualState:i,parent:h,props:l,presenceContext:v,blockInitialAnimation:v?v.initial===!1:!1,reducedMotionConfig:b,skipAnimations:S,isSVG:m}),k.current&&w.current&&(w.current.manuallyAnimateOnMount=!0));const z=w.current,H=F.useContext(D0);z&&!z.projection&&u&&(z.type==="html"||z.type==="svg")&&BA(w.current,l,u,H);const N=F.useRef(!1);F.useInsertionEffect(()=>{z&&N.current&&z.update(l,v)});const _=l[Gy],R=F.useRef(!!_&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return D1(()=>{k.current=!0,z&&(N.current=!0,window.MotionIsMounted=!0,z.updateFeatures(),z.scheduleRenderMicrotask(),R.current&&z.animationState&&z.animationState.animateChanges())}),F.useEffect(()=>{z&&(!R.current&&z.animationState&&z.animationState.animateChanges(),R.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),R.current=!1),z.enteringChildren=void 0)}),z}function BA(a,i,l,s){const{layoutId:u,layout:m,drag:h,dragConstraints:p,layoutScroll:v,layoutRoot:g,layoutAnchor:b,layoutCrossfade:S}=i;a.projection=new l(a.latestValues,i["data-framer-portal-id"]?void 0:R0(a.parent)),a.projection.setOptions({layoutId:u,layout:m,alwaysMeasureLayout:!!h||p&&ci(p),visualElement:a,animationType:typeof m=="string"?m:"both",initialPromotionConfig:s,crossfade:S,layoutScroll:v,layoutRoot:g,layoutAnchor:b})}function R0(a){if(a)return a.options.allowProjection!==!1?a.projection:R0(a.parent)}function nu(a,{forwardMotionProps:i=!1,type:l}={},s,u){s&&gA(s);const m=l?l==="svg":ld(a),h=m?RA:DA;function p(g,b){let S;const w={...F.useContext(C0),...g,layoutId:LA(g)},{isStatic:k}=w,z=wA(g),H=h(g,k);if(!k&&typeof window<"u"){OA();const N=VA(w);S=N.MeasureLayout,z.visualElement=PA(a,H,w,u,N.ProjectionNode,m)}return f.jsxs(So.Provider,{value:z,children:[S&&z.visualElement?f.jsx(S,{visualElement:z.visualElement,...w}):null,UA(a,g,kA(H,z.visualElement,b),H,k,i,m)]})}p.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const v=F.forwardRef(p);return v[jA]=a,v}function LA({layoutId:a}){const i=F.useContext(Jg).id;return i&&a!==void 0?i+"-"+a:a}function OA(a,i){F.useContext(T0).strict}function VA(a){const i=x0(),{drag:l,layout:s}=i;if(!l&&!s)return{};const u={...l,...s};return{MeasureLayout:l?.isEnabled(a)||s?.isEnabled(a)?u.MeasureLayout:void 0,ProjectionNode:u.ProjectionNode}}function HA(a,i){if(typeof Proxy>"u")return nu;const l=new Map,s=(m,h)=>nu(m,h,a,i),u=(m,h)=>s(m,h);return new Proxy(u,{get:(m,h)=>h==="create"?s:(l.has(h)||l.set(h,nu(h,void 0,a,i)),l.get(h))})}const GA=(a,i)=>i.isSVG??ld(a)?new ww(i):new pw(i,{allowProjection:a!==F.Fragment});class NA extends Jn{constructor(i){super(i),i.animationState||(i.animationState=Ew(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();vo(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:l}=this.node.prevProps||{};i!==l&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let _A=0;class IA extends Jn{constructor(){super(...arguments),this.id=_A++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:l}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;if(i&&s===!1){if(this.isExitComplete){const{initial:m,custom:h}=this.node.getProps();if(typeof m=="string"||typeof m=="object"&&m!==null&&!Array.isArray(m)){const p=Ca(this.node,m,h);if(p){const{transition:v,transitionEnd:g,...b}=p;for(const S in b)this.node.getValue(S)?.jump(b[S])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const u=this.node.animationState.setActive("exit",!i);l&&!i&&u.then(()=>{this.isExitComplete=!0,l(this.id)})}mount(){const{register:i,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const qA={animation:{Feature:NA},exit:{Feature:IA}};function Ur(a){return{point:{x:a.pageX,y:a.pageY}}}const FA=a=>i=>ed(i)&&a(i,Ur(i));function br(a,i,l,s){return Cr(a,i,FA(l),s)}const j0=({current:a})=>a?a.ownerDocument.defaultView:null,Ug=(a,i)=>Math.abs(a-i);function XA(a,i){const l=Ug(a.x,i.x),s=Ug(a.y,i.y);return Math.sqrt(l**2+s**2)}const zg=new Set(["auto","scroll"]);class k0{constructor(i,l,{transformPagePoint:s,contextWindow:u=window,dragSnapToOrigin:m=!1,distanceThreshold:h=3,element:p}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=z=>{this.handleScroll(z.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ks(this.lastRawMoveEventInfo,this.transformPagePoint));const z=au(this.lastMoveEventInfo,this.history),H=this.startEvent!==null,N=XA(z.offset,{x:0,y:0})>=this.distanceThreshold;if(!H&&!N)return;const{point:_}=z,{timestamp:R}=nt;this.history.push({..._,timestamp:R});const{onStart:D,onMove:G}=this.handlers;H||(D&&D(this.lastMoveEvent,z),this.startEvent=this.lastMoveEvent),G&&G(this.lastMoveEvent,z)},this.handlePointerMove=(z,H)=>{this.lastMoveEvent=z,this.lastRawMoveEventInfo=H,this.lastMoveEventInfo=Ks(H,this.transformPagePoint),De.update(this.updatePoint,!0)},this.handlePointerUp=(z,H)=>{this.end();const{onEnd:N,onSessionEnd:_,resumeAnimation:R}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&R&&R(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const D=au(z.type==="pointercancel"?this.lastMoveEventInfo:Ks(H,this.transformPagePoint),this.history);this.startEvent&&N&&N(z,D),_&&_(z,D)},!ed(i))return;this.dragSnapToOrigin=m,this.handlers=l,this.transformPagePoint=s,this.distanceThreshold=h,this.contextWindow=u||window;const v=Ur(i),g=Ks(v,this.transformPagePoint),{point:b}=g,{timestamp:S}=nt;this.history=[{...b,timestamp:S}];const{onSessionStart:w}=l;w&&w(i,au(g,this.history));const k={passive:!0,capture:!0};this.removeListeners=Tr(br(this.contextWindow,"pointermove",this.handlePointerMove,k),br(this.contextWindow,"pointerup",this.handlePointerUp,k),br(this.contextWindow,"pointercancel",this.handlePointerUp,k)),p&&this.startScrollTracking(p)}startScrollTracking(i){let l=i.parentElement;for(;l;){const s=getComputedStyle(l);(zg.has(s.overflowX)||zg.has(s.overflowY))&&this.scrollPositions.set(l,{x:l.scrollLeft,y:l.scrollTop}),l=l.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(i){const l=this.scrollPositions.get(i);if(!l)return;const s=i===window,u=s?{x:window.scrollX,y:window.scrollY}:{x:i.scrollLeft,y:i.scrollTop},m={x:u.x-l.x,y:u.y-l.y};m.x===0&&m.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=m.x,this.lastMoveEventInfo.point.y+=m.y):this.history.length>0&&(this.history[0].x-=m.x,this.history[0].y-=m.y),this.scrollPositions.set(i,u),De.update(this.updatePoint,!0))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Wn(this.updatePoint)}}function Ks(a,i){return i?{point:i(a.point)}:a}function Mg(a,i){return{x:a.x-i.x,y:a.y-i.y}}function au({point:a},i){return{point:a,delta:Mg(a,P0(i)),offset:Mg(a,YA(i)),velocity:KA(i,.1)}}function YA(a){return a[0]}function P0(a){return a[a.length-1]}function KA(a,i){if(a.length<2)return{x:0,y:0};let l=a.length-1,s=null;const u=P0(a);for(;l>=0&&(s=a[l],!(u.timestamp-s.timestamp>Ut(i)));)l--;if(!s)return{x:0,y:0};s===a[0]&&a.length>2&&u.timestamp-s.timestamp>Ut(i)*2&&(s=a[1]);const m=Ht(u.timestamp-s.timestamp);if(m===0)return{x:0,y:0};const h={x:(u.x-s.x)/m,y:(u.y-s.y)/m};return h.x===1/0&&(h.x=0),h.y===1/0&&(h.y=0),h}function QA(a,{min:i,max:l},s){return i!==void 0&&a<i?a=s?Me(i,a,s.min):Math.max(a,i):l!==void 0&&a>l&&(a=s?Me(l,a,s.max):Math.min(a,l)),a}function Dg(a,i,l){return{min:i!==void 0?a.min+i:void 0,max:l!==void 0?a.max+l-(a.max-a.min):void 0}}function ZA(a,{top:i,left:l,bottom:s,right:u}){return{x:Dg(a.x,l,u),y:Dg(a.y,i,s)}}function Rg(a,i){let l=i.min-a.min,s=i.max-a.max;return i.max-i.min<a.max-a.min&&([l,s]=[s,l]),{min:l,max:s}}function WA(a,i){return{x:Rg(a.x,i.x),y:Rg(a.y,i.y)}}function JA(a,i){let l=.5;const s=ct(a),u=ct(i);return u>s?l=Sr(i.min,i.max-s,a.min):s>u&&(l=Sr(a.min,a.max-u,i.min)),en(0,1,l)}function $A(a,i){const l={};return i.min!==void 0&&(l.min=i.min-a.min),i.max!==void 0&&(l.max=i.max-a.min),l}const Du=.35;function e5(a=Du){return a===!1?a=0:a===!0&&(a=Du),{x:jg(a,"left","right"),y:jg(a,"top","bottom")}}function jg(a,i,l){return{min:kg(a,i),max:kg(a,l)}}function kg(a,i){return typeof a=="number"?a:a[i]||0}const t5=new WeakMap;class n5{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ke(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:l=!1,distanceThreshold:s}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const m=S=>{l&&this.snapToCursor(Ur(S).point),this.stopAnimation()},h=(S,w)=>{const{drag:k,dragPropagation:z,onDragStart:H}=this.getProps();if(k&&!z&&(this.openDragLock&&this.openDragLock(),this.openDragLock=BS(k),!this.openDragLock))return;this.latestPointerEvent=S,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Wt(_=>{let R=this.getAxisMotionValue(_).get()||0;if($t.test(R)){const{projection:D}=this.visualElement;if(D&&D.layout){const G=D.layout.layoutBox[_];G&&(R=ct(G)*(parseFloat(R)/100))}}this.originPoint[_]=R}),H&&De.update(()=>H(S,w),!1,!0),wu(this.visualElement,"transform");const{animationState:N}=this.visualElement;N&&N.setActive("whileDrag",!0)},p=(S,w)=>{this.latestPointerEvent=S,this.latestPanInfo=w;const{dragPropagation:k,dragDirectionLock:z,onDirectionLock:H,onDrag:N}=this.getProps();if(!k&&!this.openDragLock)return;const{offset:_}=w;if(z&&this.currentDirection===null){this.currentDirection=i5(_),this.currentDirection!==null&&H&&H(this.currentDirection);return}this.updateAxis("x",w.point,_),this.updateAxis("y",w.point,_),this.visualElement.render(),N&&De.update(()=>N(S,w),!1,!0)},v=(S,w)=>{this.latestPointerEvent=S,this.latestPanInfo=w,this.stop(S,w),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:S}=this.getProps();(S||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:b}=this.getProps();this.panSession=new k0(i,{onSessionStart:m,onStart:h,onMove:p,onSessionEnd:v,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:b,distanceThreshold:s,contextWindow:j0(this.visualElement),element:this.visualElement.current})}stop(i,l){const s=i||this.latestPointerEvent,u=l||this.latestPanInfo,m=this.isDragging;if(this.cancel(),!m||!u||!s)return;const{velocity:h}=u;this.startAnimation(h);const{onDragEnd:p}=this.getProps();p&&De.postRender(()=>p(s,u))}cancel(){this.isDragging=!1;const{projection:i,animationState:l}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(i,l,s){const{drag:u}=this.getProps();if(!s||!Qs(i,u,this.currentDirection))return;const m=this.getAxisMotionValue(i);let h=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(h=QA(h,this.constraints[i],this.elastic[i])),m.set(h)}resolveConstraints(){const{dragConstraints:i,dragElastic:l}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;i&&ci(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=ZA(s.layoutBox,i):this.constraints=!1,this.elastic=e5(l),u!==this.constraints&&!ci(i)&&s&&this.constraints&&!this.hasMutatedConstraints&&Wt(m=>{this.constraints!==!1&&this.getAxisMotionValue(m)&&(this.constraints[m]=$A(s.layoutBox[m],this.constraints[m]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:l}=this.getProps();if(!i||!ci(i))return!1;const s=i.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;u.root&&(u.root.scroll=void 0,u.root.updateScroll());const m=cw(s,u.root,this.visualElement.getTransformPagePoint());let h=WA(u.layout.layoutBox,m);if(l){const p=l(sw(h));this.hasMutatedConstraints=!!p,p&&(h=n0(p))}return h}startAnimation(i){const{drag:l,dragMomentum:s,dragElastic:u,dragTransition:m,dragSnapToOrigin:h,onDragTransitionEnd:p}=this.getProps(),v=this.constraints||{},g=Wt(b=>{if(!Qs(b,l,this.currentDirection))return;let S=v&&v[b]||{};(h===!0||h===b)&&(S={min:0,max:0});const w=u?200:1e6,k=u?40:1e7,z={type:"inertia",velocity:s?i[b]:0,bounceStiffness:w,bounceDamping:k,timeConstant:750,restDelta:1,restSpeed:10,...m,...S};return this.startAxisValueAnimation(b,z)});return Promise.all(g).then(p)}startAxisValueAnimation(i,l){const s=this.getAxisMotionValue(i);return wu(this.visualElement,i),s.start(Qu(i,s,0,l,this.visualElement,!1))}stopAnimation(){Wt(i=>this.getAxisMotionValue(i).stop())}getAxisMotionValue(i){const l=`_drag${i.toUpperCase()}`,u=this.visualElement.getProps()[l];return u||this.visualElement.getValue(i,this.visualElement.latestValues[i]??0)}snapToCursor(i){Wt(l=>{const{drag:s}=this.getProps();if(!Qs(l,s,this.currentDirection))return;const{projection:u}=this.visualElement,m=this.getAxisMotionValue(l);if(u&&u.layout){const{min:h,max:p}=u.layout.layoutBox[l],v=m.get()||0;m.set(i[l]-Me(h,p,.5)+v)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:l}=this.getProps(),{projection:s}=this.visualElement;if(!ci(l)||!s||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Wt(h=>{const p=this.getAxisMotionValue(h);if(p&&this.constraints!==!1){const v=p.get();u[h]=JA({min:v,max:v},this.constraints[h])}});const{transformTemplate:m}=this.visualElement.getProps();this.visualElement.current.style.transform=m?m({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),Wt(h=>{if(!Qs(h,i,null))return;const p=this.getAxisMotionValue(h),{min:v,max:g}=this.constraints[h];p.set(Me(v,g,u[h]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;t5.set(this.visualElement,this);const i=this.visualElement.current,l=br(i,"pointerdown",g=>{const{drag:b,dragListener:S=!0}=this.getProps(),w=g.target,k=w!==i&&NS(w);b&&S&&!k&&this.start(g)});let s;const u=()=>{const{dragConstraints:g}=this.getProps();ci(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),s||(s=a5(i,g.current,()=>this.scalePositionWithinConstraints())))},{projection:m}=this.visualElement,h=m.addEventListener("measure",u);m&&!m.layout&&(m.root&&m.root.updateScroll(),m.updateLayout()),De.read(u);const p=Cr(window,"resize",()=>this.scalePositionWithinConstraints()),v=m.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:b})=>{this.isDragging&&b&&(Wt(S=>{const w=this.getAxisMotionValue(S);w&&(this.originPoint[S]+=g[S].translate,w.set(w.get()+g[S].translate))}),this.visualElement.render())}));return()=>{p(),l(),h(),v&&v(),s&&s()}}getProps(){const i=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:s=!1,dragPropagation:u=!1,dragConstraints:m=!1,dragElastic:h=Du,dragMomentum:p=!0}=i;return{...i,drag:l,dragDirectionLock:s,dragPropagation:u,dragConstraints:m,dragElastic:h,dragMomentum:p}}}function Pg(a){let i=!0;return()=>{if(i){i=!1;return}a()}}function a5(a,i,l){const s=Ip(a,Pg(l)),u=Ip(i,Pg(l));return()=>{s(),u()}}function Qs(a,i,l){return(i===!0||i===a)&&(l===null||l===a)}function i5(a,i=10){let l=null;return Math.abs(a.y)>i?l="y":Math.abs(a.x)>i&&(l="x"),l}class r5 extends Jn{constructor(i){super(i),this.removeGroupControls=Gt,this.removeListeners=Gt,this.controls=new n5(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Gt}update(){const{dragControls:i}=this.node.getProps(),{dragControls:l}=this.node.prevProps||{};i!==l&&(this.removeGroupControls(),i&&(this.removeGroupControls=i.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const iu=a=>(i,l)=>{a&&De.update(()=>a(i,l),!1,!0)};class s5 extends Jn{constructor(){super(...arguments),this.removePointerDownListener=Gt}onPointerDown(i){this.session=new k0(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:j0(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:l,onPan:s,onPanEnd:u}=this.node.getProps();return{onSessionStart:iu(i),onStart:iu(l),onMove:iu(s),onEnd:(m,h)=>{delete this.session,u&&De.postRender(()=>u(m,h))}}}mount(){this.removePointerDownListener=br(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let ru=!1;class o5 extends F.Component{componentDidMount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s,layoutId:u}=this.props,{projection:m}=i;m&&(l.group&&l.group.add(m),s&&s.register&&u&&s.register(m),ru&&m.root.didUpdate(),m.addEventListener("animationComplete",()=>{this.safeToRemove()}),m.setOptions({...m.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),ao.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:l,visualElement:s,drag:u,isPresent:m}=this.props,{projection:h}=s;return h&&(h.isPresent=m,i.layoutDependency!==l&&h.setOptions({...h.options,layoutDependency:l}),ru=!0,u||i.layoutDependency!==l||l===void 0||i.isPresent!==m?h.willUpdate():this.safeToRemove(),i.isPresent!==m&&(m?h.promote():h.relegate()||De.postRender(()=>{const p=h.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:i,layoutAnchor:l}=this.props,{projection:s}=i;s&&(s.options.layoutAnchor=l,s.root.didUpdate(),$u.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s}=this.props,{projection:u}=i;ru=!0,u&&(u.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(u),s&&s.deregister&&s.deregister(u))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function B0(a){const[i,l]=fA(),s=F.useContext(Jg);return f.jsx(o5,{...a,layoutGroup:s,switchLayoutGroup:F.useContext(D0),isPresent:i,safeToRemove:l})}const l5={pan:{Feature:s5},drag:{Feature:r5,ProjectionNode:A0,MeasureLayout:B0}};function Bg(a,i,l){const{props:s}=a;a.animationState&&s.whileHover&&a.animationState.setActive("whileHover",l==="Start");const u="onHover"+l,m=s[u];m&&De.postRender(()=>m(i,Ur(i)))}class c5 extends Jn{mount(){const{current:i}=this.node;i&&(this.unmount=OS(i,(l,s)=>(Bg(this.node,s,"Start"),u=>Bg(this.node,u,"End"))))}unmount(){}}class u5 extends Jn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Tr(Cr(this.node.current,"focus",()=>this.onFocus()),Cr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Lg(a,i,l){const{props:s}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&s.whileTap&&a.animationState.setActive("whileTap",l==="Start");const u="onTap"+(l==="End"?"":l),m=s[u];m&&De.postRender(()=>m(i,Ur(i)))}class d5 extends Jn{mount(){const{current:i}=this.node;if(!i)return;const{globalTapTarget:l,propagate:s}=this.node.props;this.unmount=IS(i,(u,m)=>(Lg(this.node,m,"Start"),(h,{success:p})=>Lg(this.node,h,p?"End":"Cancel")),{useGlobalTarget:l,stopPropagation:s?.tap===!1})}unmount(){}}const Ru=new WeakMap,su=new WeakMap,h5=a=>{const i=Ru.get(a.target);i&&i(a)},m5=a=>{a.forEach(h5)};function f5({root:a,...i}){const l=a||document;su.has(l)||su.set(l,{});const s=su.get(l),u=JSON.stringify(i);return s[u]||(s[u]=new IntersectionObserver(m5,{root:a,...i})),s[u]}function p5(a,i,l){const s=f5(i);return Ru.set(a,l),s.observe(a),()=>{Ru.delete(a),s.unobserve(a)}}const g5={some:0,all:1};class y5 extends Jn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:i={}}=this.node.getProps(),{root:l,margin:s,amount:u="some",once:m}=i,h={root:l?l.current:void 0,rootMargin:s,threshold:typeof u=="number"?u:g5[u]},p=v=>{const{isIntersecting:g}=v;if(this.isInView===g||(this.isInView=g,m&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:b,onViewportLeave:S}=this.node.getProps(),w=g?b:S;w&&w(v)};this.stopObserver=p5(this.node.current,h,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:l}=this.node;["amount","margin","root"].some(v5(i,l))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}function v5({viewport:a={}},{viewport:i={}}={}){return l=>a[l]!==i[l]}const b5={inView:{Feature:y5},tap:{Feature:d5},focus:{Feature:u5},hover:{Feature:c5}},S5={layout:{ProjectionNode:A0,MeasureLayout:B0}},w5={...qA,...b5,...l5,...S5},A5=HA(w5,GA);function L0(){!id.current&&$y();const[a]=F.useState(uo.current);return a}const O0=A5,C5=[{id:"fathom",portfolioCategory:"engine-games",title:"实体控制器潜艇协作游戏",period:"2026",category:{zh:"Unreal 游戏 / 硬件交互",en:"Unreal game / hardware interaction"},summary:{zh:"面向实体控制器的潜艇协作游戏。我担任主要程序与玩法架构负责人，完成任务循环、小游戏、UI 数据流和硬件接入。",en:"A physical-console submarine co-op game. I owned gameplay architecture, task loops, minigames, UI data flow, and hardware integration."},contribution:[{zh:"搭建 GameMode、角色控制、任务生成、小游戏接口与 UI/HUD 数据绑定。",en:"Built GameMode, character control, task generation, minigame interfaces, and UI/HUD data binding."},{zh:"实现 Server / Client 外部输入模块，将硬件信号解析为 Unreal 内的游戏指令。",en:"Implemented a server/client input module that translated physical-device signals into Unreal gameplay commands."},{zh:"通过异步接收、缓冲与插值处理输入延迟，并为关键链路补充状态校验和容错。",en:"Reduced input latency with asynchronous receiving, buffering, and interpolation, then added validation and fallback handling."}],stack:["Unreal Engine","Blueprint","Networking","Hardware I/O","UI"],images:[{src:"/media/projects/fathom-task.png",alt:{zh:"Fathom 任务玩法与绿色 HUD",en:"Fathom task gameplay with green HUD"},caption:{zh:"任务系统与实时 HUD",en:"Task system and realtime HUD"},position:"center"},{src:"/media/projects/fathom-sonar.png",alt:{zh:"Fathom 潜艇舱室画面",en:"Fathom submarine interior"},caption:{zh:"潜艇场景与硬件交互目标",en:"Submarine environment and hardware interaction target"},position:"center"}]},{id:"house-of-vampires",portfolioCategory:"engine-games",title:"哥特式吸血鬼城堡解谜游戏",period:"2025",category:{zh:"Unreal 蓝图游戏",en:"Unreal Blueprint game"},summary:{zh:"已上线 itch.io 的哥特式恐怖解谜游戏。我担任主要蓝图程序与技术美术开发，整合交互、谜题、手部动画和特效。",en:"A gothic puzzle-horror game released on itch.io. I led Blueprint and technical-art development across interactions, puzzles, hand animation, and VFX."},contribution:[{zh:"使用 Unreal Blueprint 实现玩法流程、交互、谜题、状态管理与手柄支持。",en:"Implemented gameplay flow, interaction, puzzles, state management, and controller support in Unreal Blueprints."},{zh:"制作第一人称手部绑定与动画，并将动画状态接入交互流程。",en:"Created the first-person hand rig and animation and connected it to gameplay interactions."},{zh:"参与完整打包与上线交付，项目可在 itch.io 下载。",en:"Contributed through packaging and public release; the game is available on itch.io."}],stack:["Unreal Engine","Blueprint","Gameplay","Rigging","Animation"],images:[{src:"/media/projects/hov/published-title.png",alt:{zh:"House of Vampires 发布版标题画面",en:"House of Vampires released title screen"},caption:{zh:"来自 itch.io 发布页的游戏画面",en:"Game capture from the itch.io release page"}},{src:"/media/projects/house-of-vampires.webp",alt:{zh:"House of Vampires 的 itch.io 项目页与游戏截图",en:"House of Vampires itch.io page and screenshots"},caption:{zh:"已上线的 itch.io 页面与实机画面",en:"Published itch.io page and in-game captures"},position:"top"}],link:{label:{zh:"打开 itch.io 项目页",en:"Open the itch.io page"},href:"https://musitive.itch.io/hov"},youtubeId:"aY36FtqdGAw",story:{title:{zh:"你能逃出德古拉的城堡吗？",en:"Can you survive Dracula's Castle?"},intro:{zh:"进入《House of Vampires》中这座受经典恐怖电影启发的哥特式城堡。利用宅邸里散落的物品以及自己的身体，解开逃离城堡所需的谜题。",en:"Enter the classic horror-inspired gothic castle in House of Vampires! Use items scattered around the mansion as well as your own body to solve the puzzles needed to escape the castle."},features:[{title:{zh:"多种谜题",en:"Various Puzzles"},detail:{zh:"要成功逃出城堡，你需要只利用自己能够携带的物品，解决多种不同的谜题。",en:"To successfully escape the castle, you will need to solve several different puzzles using only what you can carry."}},{title:{zh:"德古拉",en:"Dracula"},detail:{zh:"游戏重新塑造了德古拉这一角色；在这个可怕的怪物抓住你之前，你必须设法逃脱。",en:"Featuring a new take on Dracula as a character, you must escape this terrifying monster before he catches you."}},{title:{zh:"手柄支持",en:"Controller Support"},detail:{zh:"游戏完整支持键盘鼠标和 Xbox 手柄。",en:"The game fully functions with not only Keyboard & Mouse but Xbox Controllers as well."}},{title:{zh:"经典恐怖电影质感",en:"Classic Horror Film Look"},detail:{zh:"游戏通过后期处理还原经典恐怖电影的胶片质感。",en:"Using post-processing, the game captures that film look from classic horror films."}}],note:{zh:"建议佩戴耳机游玩。",en:"Best experienced with headphones."}}},{id:"through-other-eyes",portfolioCategory:"engine-games",title:"VR 视障体验与无障碍叙事游戏",period:"2025",category:{zh:"VR 无障碍体验",en:"VR accessibility experience"},summary:{zh:"两人团队完成的 VR 视障体验。我兼任玩法策划、程序与技术美术，负责地图路线、事件设计、场景交互和角色绑定。",en:"A two-person VR accessibility project. I worked across game design, programming, and technical art, owning routes, events, interactions, and character rigging."},contribution:[{zh:"协助把关卡规划落成可游玩的 VR 场景，布置道路、障碍和关键交互点。",en:"Translated the level plan into a playable VR scene with streets, obstacles, and interaction points."},{zh:"编写事件交互逻辑，并制作简单的导盲犬绑定与动画。",en:"Authored event interaction logic and created a simple guide-dog rig and animation."},{zh:"围绕受限视觉信息设计引导、反馈和空间节奏。",en:"Worked on guidance, feedback, and spatial pacing under intentionally limited visual information."}],stack:["VR","Unreal Engine","Level Design","Interaction","Rigging"],images:[{src:"/media/projects/through-other-eyes-cover.webp",alt:{zh:"Through Other Eyes 项目海报",en:"Through Other Eyes project poster"},caption:{zh:"项目 One Sheet",en:"Project one-sheet"},position:"center 32%"},{src:"/media/projects/through-other-eyes-vr.png",alt:{zh:"VR 中的视障模拟画面",en:"Visual-impairment simulation in VR"},caption:{zh:"头显内的受限视觉效果",en:"Restricted-vision effect inside the headset"},position:"center"},{src:"/media/projects/through-other-eyes-level.webp",alt:{zh:"Through Other Eyes 关卡规划图",en:"Through Other Eyes level plan"},caption:{zh:"关卡路径与交互点规划",en:"Route and interaction-point planning"},position:"center"}]},{id:"retro-arcade",portfolioCategory:"engine-games",title:"复古像素风 3D 街机游戏原型",period:"2025",category:{zh:"Unity 游戏与 Shader",en:"Unity gameplay and shader"},summary:{zh:"复古 3D 街机游戏原型。我负责完整 Gameplay、角色与动画状态，并尝试把 3D 动画烘焙成带法线信息的像素序列帧。",en:"A retro 3D arcade prototype. I owned gameplay and character state and explored baking 3D animation into pixel sprites with normal information."},contribution:[{zh:"实现角色状态、动画状态、关卡逻辑和核心玩法循环。",en:"Implemented character state, animation state, level logic, and the core gameplay loop."},{zh:"制作部分 2D 角色素材，并完成 3D 到 2D 序列帧的实验流程。",en:"Created part of the 2D character art and completed a 3D-to-2D sprite-sequence experiment."},{zh:"编写利用颜色、Alpha 与法线贴图的像素化实时 Shader，并记录方案未进入最终版本的原因。",en:"Wrote a pixel-rendering shader using color, alpha, and normal data and documented why the experiment was not adopted."}],stack:["Unity","C#","Shader","Gameplay","2D / 3D Pipeline"],images:[{src:"/media/projects/retro-arcade-shader.png",alt:{zh:"Unity 中的像素角色 Shader 实验",en:"Pixel-character shader experiment in Unity"},caption:{zh:"3D 动画到像素序列帧与法线光照实验",en:"3D animation to pixel sprites with normal-lighting experiment"},position:"center"},{src:"/media/projects/retro-arcade-sprites.png",alt:{zh:"复古街机角色序列帧素材",en:"Retro arcade character sprite sheets"},caption:{zh:"本人制作的角色序列帧素材",en:"Character sprite sheets I created"},position:"center"}]},{id:"digital-twin",portfolioCategory:"engine-games",title:"火力发电检测 UE5 数字孪生客户端",period:"2023",category:{zh:"UE5 客户端开发",en:"UE5 client development"},summary:{zh:"面向火力发电检测业务的 UE5 / Web 双客户端数字孪生系统，由公司服务器协调三端低时延双向数据与操作同步。",en:"A UE5/Web dual-client digital-twin system for thermal-power inspection, with a company server coordinating low-latency bidirectional state and operation synchronization."},contribution:[{zh:"使用 C++、Blueprint 与组件化架构实现锅炉、汽轮机、发电机及监测设备的启停、联锁、参数变化、告警联动和巡检流程。",en:"Implemented startup, interlocks, telemetry changes, alarms, and inspection flows for boilers, steam turbines, generators, and monitoring equipment with C++, Blueprint, and a component-based architecture."},{zh:"把 UE5 的组件化、状态机、事件总线和分层设计迁移到 Vue 3 / Three.js Web 端，复用设备 ID、状态模型与指令协议。",en:"Transferred UE5 component, state-machine, event-bus, and layered patterns to Vue 3 / Three.js while sharing device IDs, state models, and command contracts."},{zh:"以公司服务器为权威状态源，通过 HTTP + WebSocket 实现 UE5 / Server / Web 三端低时延双向同步、操作回传与异常恢复。",en:"Used the company server as the authoritative state source for low-latency UE5-server-Web synchronization, operation relay, and recovery over HTTP and WebSocket."}],stack:["UE5 / C++ / Blueprint","Vue 3 / Three.js","Node.js / Express","WebSocket","状态同步"],images:[{src:"/media/projects/digital-twin.png",alt:{zh:"工业数字孪生建筑线框与显示控制面板",en:"Industrial digital twin with building outlines and display controls"},caption:{zh:"城市建筑数据与显示参数控制",en:"Building data and display-parameter controls"},position:"center"}],link:{label:{zh:"查看 Web 展示端仓库",en:"View the Web viewer repository"},href:"https://github.com/Ubik42/Vue3_Digital_Twin"}}];function Kn(a,i){return a[i]}const T5=`# UE5 Digital-Twin Client for Thermal-Power Inspection

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
`,x5=`# 火力发电检测 UE5 数字孪生客户端

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
`,E5=`# Fathom

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
`,U5=`# Fathom

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
`,z5=`# House of Vampires

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
`,M5=`# House of Vampires

## 你能逃出德古拉的城堡吗？

进入这座受经典恐怖电影启发的哥特式城堡。玩家需要利用宅邸里散落的物品以及自己的身体解开谜题，在德古拉抓住自己之前逃离城堡。游戏完整支持键盘鼠标与 Xbox 手柄，并通过后期处理塑造经典恐怖片的胶片质感。

建议佩戴耳机游玩。

![发布版城堡走廊与可交互物件](/media/projects/hov/published-corridor.png)

![发布版书架与哥特式室内场景](/media/projects/hov/published-library.png)

游戏画面来自团队的 [itch.io 发布页](https://musitive.itch.io/hov)。

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
`,D5=`# Retro 3D Arcade Prototype

A retro Unity game based on a Q*bert-like loop. I owned the complete gameplay implementation: character movement and state, animation flow, tile feedback, enemies, level logic, and the loop from start through failure and restart. I also led the custom shader-pipeline experiment and created part of the 2D character art.

## 3D animation to pixel sprites

I modeled and animated a Q*bert character, then exported sprite sequences containing color, alpha, and normal information. A Unity shader reconstructed the silhouette and used the normal channel for realtime lighting.

![3D-to-2D sprite and shader experiment](/media/projects/retro-diary/image-000.png)

The pipeline worked but was not adopted: detailed characters produced excessive noise at the chosen 45-degree view, and the schedule did not allow the full 3D asset set to be completed.

## Character concepts and 2D art

![Character and animation sprite sheets](/media/projects/retro-diary/image-001.png)

The available material primarily documents the pipeline experiment; no sufficiently clear final gameplay capture is presented as a finished result.
`,R5=`# Retro 3D Arcade Prototype

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
`,j5=`# Through Other Eyes

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
`,k5=`# Through Other Eyes

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
`,Og={fathom:{zh:U5,en:E5},"house-of-vampires":{zh:M5,en:z5},"through-other-eyes":{zh:k5,en:j5},"retro-arcade":{zh:R5,en:D5},"digital-twin":{zh:x5,en:T5}},P5=[{slug:"toon",title:"UE Toon 卡通光照与描边",label:"引擎渲染 · 风格化着色",summary:"以三段明暗色块和反向壳描边表现雕塑轮廓，研究材质级卡通光照与环境之间的视觉关系。",summaryEn:"Material-level toon lighting with three shading bands and inverted-hull outlines on a sculptural subject.",tags:["UE 5.8","HLSL","Toon Shading","轮廓描边"],map:"01_Toon",source:"BV11Sej6kEGi",detail:`## 明暗色块与轮廓

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

BuildFracture generates the chunks, and M_Dissolve and M_Sparks provide the disappearance effect. The scene does not include arbitrary-mesh repair, general runtime cutting, or a breakable bond graph.`}],B5=P5.map(a=>({id:`aita-${a.slug}`,title:a.title,category:"engine-games",categoryLabel:{zh:a.label,en:"Unreal rendering and simulation"},summary:{zh:a.summary,en:a.summaryEn},cover:`/media/repositories/aita-systems/${a.slug}.webp`,tags:a.tags,repositoryUrl:`https://github.com/Ubik42/AITASystems58/tree/main/Content/AITA/Demos/${a.map}`,story:{zh:`# ${a.title}

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

The recording captures the actual editor window at a fixed simulation timestep; it is not a performance benchmark. Rocks, the statue, and bushes use Epic Starter Content. Reference videos and external Epic assets are not redistributed with the source.`}},L5={id:"ray-tracing-hardware",title:"光线追踪架构与性能实验",category:"engine-games",categoryLabel:{zh:"C++ 渲染与硬件模拟",en:"C++ rendering & architecture simulation"},summary:{zh:"球体求交单元实现 2.54 倍模拟周期加速。基于 Arches / TRaX 完成并行 kernel、缓存配置与 RISC-V 指令实验，以图像和日志验证结果。",en:"Parallel ray-tracing kernels, cache experiments, RISC-V instructions, and a dedicated sphere pipeline. A three-sphere workload achieves a 2.54× simulated-cycle speedup with matching images."},cover:"/media/repositories/ray-tracing-hardware/teapot-shading.webp",tags:["C++","Arches / TRaX","RISC-V","光线追踪","缓存与流水线"],story:{zh:`# 光线追踪架构与性能实验

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

Course and exercise design: [University of Utah CS 6959](https://graphics.cs.utah.edu/courses/cs6959/fall2026/). Framework: [Utah Graphics Lab / Arches](https://github.com/Utah-Graphics-Lab/arches). Course scene assets serve as test inputs; images are actual experiment outputs. Implementation, debugging, and documentation include Codex assistance. Public logs replace local dataset paths while retaining measurement values.`}},O5={id:"ue-engine-agent",title:"UE 引擎 Agent：原生工具调用与可恢复编辑",category:"ai-agent",categoryLabel:{zh:"UE 编辑器与 Agent 执行",en:"UE editor and agent execution"},summary:{zh:"模型通过 UE 官方 MCP 自主发现工具、修改材质并读回结果；13 轮真实调用完成参数编辑、保存与视口图像检查。",en:"Native UE MCP tool discovery and material editing, with durable steps, asset readback, and viewport feedback."},cover:"/media/repositories/ue-engine-agent/workbench.png",tags:["UE 5.8","官方 MCP","Python","SQLite","视觉反馈","独立模型循环"],story:{zh:`# UE 引擎 Agent：原生工具调用与可恢复编辑

## 带来源的工程知识检索

模型先搜索工程资料，再按需读取全文。当前知识库包含 6 张经过核对的资料卡，覆盖材质参数、对象组合、错误恢复、蓝图接口与 MCP；记录来源、版本、核验日期和内容摘要，本地源码变化时提示重新核对。

检索已参与真实材质任务：模型引用资料，读取当前参数后改为苔绿色哑光，保存并独立读回。执行中还发现资产路径定位不足，随后补入资产查找与对象加载工具。当前采用词项检索，范围为本工程操作知识；蓝图写入与更大规模文档检索继续开发。

## 中文任务工作台

输入任务后，工作台显示模型动作、真实工具结果与 UE 视口截图。历史任务可以查看原始结果；中断后继续同一会话，写入状态不明确时先读回。布局任务可保存修改前的组合关系，用于检查对象配对。

![中文任务工作台：紫色陶瓷调整的真实执行记录](/media/repositories/ue-engine-agent/workbench.png)

从网页提交材质目标后，模型完成 9 轮调用。它先猜错颜色参数名 BaseColor，收到 UE 的错误后改用实际参数 Tint；保存资产并独立读回，确认颜色、粗糙度与金属度。工作台将失败步骤与后续修正一起显示。

执行器区分明确的只读失败和结果不明确的写入：前者交回模型修正，后者保留现场并提供读回恢复。缺少布局基线时显示检查不可用，避免将模型结束等同于所有检查通过。

## 模型自主编辑与视觉反馈

输入冷蓝陶瓷的目标颜色、粗糙度和金属度，DeepSeek Flash 自行选择工具并读取真实 UE 返回值。13 轮 API 调用完成参数检查、修改、保存和截图观察。执行器负责校验与记录，具体编辑步骤由模型产生。

![自主执行后的冷蓝陶瓷，UE 原生视口](/media/repositories/ue-engine-agent/ceramic.png)

三项参数分别读回为 Roughness 0.25、Metallic 0、线性 Tint (0.035, 0.16, 0.42)。模型收到真实截图，描述了蓝色物体、保留的金色底座及灰色地板；随后单独调用 MCP 再次确认参数。源码包包含完整模型调用与工具返回记录。

会话可以跨进程恢复：模型回复先保存，再逐步执行。完成会话直接返回原结果；调用状态不明确时保留现场，等待读回。连续三次参数拒绝会停止当前轮，便于修正接口后继续。

## 场景布局：保留对象关系

将三组展品从横排改成三角形，每组包含蓝色目标物、深色底座和金色顶盘。模型读取真实 Actor 标签与变换，执行位置调整，保存地图并检查截图。

![重排后的三组展品](/media/repositories/ue-engine-agent/layout.png)

相同外观的底座发生交换时，截图仍可能看起来正确。项目因此增加基于修改前空间关系的检查：核对原始配对是否保留，以及高度、旋转、缩放是否变化。首次执行的错配与遗漏记录保留在源码包中。

最终一轮，模型通过检查工具读到三块金色顶盘仍在旧位置，自主修正后再次读回。6 项配对检查与 9 项高度、旋转、缩放检查全部通过。此规则面向自建展台，后续再扩展更复杂的场景关系。

## 写入已生效、回复丢失时如何继续

真实 UE 执行材质写入后，测试客户端主动丢弃返回。恢复入口读回目标参数，确认已经生效，随后继续会话，原写入只发送一次。当前自动恢复覆盖材质标量和向量设置；读回不匹配时保留现场。故障注入使用明确的测试夹具，与独立模型调用记录分别保存。

## 首次材质编辑与持久化验证

将展台中三个物体的青色金属改成暖色哑光涂层。Agent 先读取官方 MCP 返回的工具定义和材质参数，再形成编辑计划，修改共享材质实例并保存资产。重启编辑器后重新读取参数和视口，检查结果是否保留。

![修改后的暖色哑光材质，UE 原生视口截图](/media/repositories/ue-engine-agent/after.png)

| 参数 | 修改前 | 重启后读回 |
| --- | --- | --- |
| 粗糙度 Roughness | 0.08 | 0.65 |
| 金属度 Metallic | 0.85 | 0.05 |
| 线性色彩 Tint | 青色 (0.025, 0.24, 0.32) | 暖色 (0.46, 0.12, 0.035) |

![修改前的青色金属，保留编辑器辅助图标](/media/repositories/ue-engine-agent/before.png)

前图保留编辑器辅助图标，后图启用 Game View。模型计划来自活动中的 Codex 对话，依据真实参数和截图编写；本地运行器执行工具步骤并记录结果。

## 按任务加载工具定义

工具目录用于选择能力，具体工具的 JSON Schema 在执行前按需获取。这样可以保留实际参数约束，同时减少一次性塞入整个编辑器接口的上下文。当前案例实现材质参数读取、修改、资产保存和视口捕获。

## 执行记录连接修改与反馈

SQLite 保存计划摘要、步骤状态、返回值和时间。完成的步骤可以复用记录：本次材质计划重复运行时，8 个步骤均命中既有结果。调用结果不明确时保留现场，由新计划读回核实后继续。

首次截图请求暴露了接口细节：外层可选参数中的内部字段仍需要显式提供。失败记录保留，修正请求后重新捕获。资产保存成功后又启动一次编辑器，确认粗糙度、金属度与颜色仍为目标值。

## 当前实现与继续扩展

已完成独立模型循环、图像反馈、原生编辑器连接、按需工具发现、持久执行、材质案例及首次案例的重启读回。Actor 变换与展示组合检查已接入；中文操作界面已接入真实执行；工程知识检索已接入；蓝图/动画业务案例继续开发。展台由工程脚本生成，使用 UE 基础形体。

[下载源码与场景重建脚本](/media/repositories/ue-engine-agent/UE-Engine-Agent-source.zip)`,en:`# UE Engine Agent

A native UE 5.8 MCP editing case changes a shared material from teal metal to warm matte paint. Tool schemas and current values inform a plan authored by the active Codex conversation. SQLite records execution; a fresh editor process confirms that roughness 0.65, metallic 0.05, and the new tint survived asset saving. Replaying the completed plan reuses all eight steps.

![Native editor result](/media/repositories/ue-engine-agent/after.png)

The implementation includes lazy schema discovery, durable steps, bounded material writes, and native viewport capture. An independent DeepSeek Flash loop now completes material inspection, editing, saving, and native viewport review in 13 API turns. Model/tool transcripts and an independent parameter readback are included. Broader scene editing remains under development.

[Source and scene reconstruction scripts](/media/repositories/ue-engine-agent/UE-Engine-Agent-source.zip)`}},V5={id:"animation-aigc-lab",title:"AI 角色生成与视频动作重定向",category:"ai-agent",categoryLabel:{zh:"AIGC 角色与动画制作",en:"AI-assisted character and animation production"},summary:{zh:"从多视图生成角色，经四边面重建、PBR 烘焙、身体与手指绑定，将两段真人视频动作重定向到三个不同体型的角色。",en:"Three generated characters share two video-driven motions through quad remeshing, PBR baking, body and finger rigging, and motion retargeting."},cover:"/media/repositories/animation-aigc-lab/hero.webp",tags:["Meshy","Blender","MediaPipe","Python","动画重定向"],story:{zh:`# AI 角色生成与视频动作重定向

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

Motion references: [indoor dance / Tencent MimicMotion](https://github.com/Tencent/MimicMotion/blob/main/assets/example_data/videos/pose1.mp4) and [frontal martial arts / olia danilevich, Pexels](https://www.pexels.com/video/girl-doing-taekwondo-6005332/). MimicMotion is a reference-video source only; its generation model is not used.`}},H5={id:"als-director",title:"AI 接入 UE 动画：可中断的多步动作执行",category:"ai-agent",categoryLabel:{zh:"运行时 AI 与技术动画",en:"Runtime AI and technical animation"},summary:{zh:"将“抱着箱子走过去，途中看向门口”拆成可验证的动作计划，在 Unreal 中控制步态、姿态、移动与注视；支持途中改口、连续动作和急停。",en:"Natural-language direction becomes validated movement, gait, overlay, stance, and gaze plans in Unreal, with live revisions, queued actions, and emergency stops."},cover:"/media/repositories/als-director/hero.webp",tags:["Unreal Engine 5.8","C++","GPT / Codex","ALS-Refactored","运行时动画"],story:{zh:`# AI 接入 UE 动画

## 让计划读取当前状态和执行历史

新增上下文模块，将当前指令、实时角色状态与最近三次执行结果共同交给模型。上下文摘要、会话与请求编号随回复一起校验，SQLite 保存准备、提交和观察结果。

2026 年 11 月 1 日的两次实机请求由当前 Codex 对话生成计划。角色先抱箱步行至红柱并注视门口，随后收到“继续去原来的目标，保持抱箱，改为蹲着走”。生成上下文时角色仍以约 175 cm/s 移动；回复到达时已经抵达目标。执行器应用蹲姿，保留抱箱和注视，没有重新启动已完成的移动。

![模型回传后，角色在红柱附近保持抱箱并蹲伏](/media/repositories/als-director/agent-context.png)

这次运行记录了模型等待期间的状态变化。下方连续录像则专门展示修改在移动过程中生效时的路线保留。

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

@[flow](director)

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

The source archive excludes Unreal Engine and ALS dependency assets. Setup retrieves the pinned upstream dependency and builds against a locally installed UE 5.8.`}},G5={id:"pcg-workbench",title:"UE 程序化工具集 · PCG Workbench",category:"pipeline",categoryLabel:{zh:"程序化建模与引擎工具",en:"Procedural modeling and engine tools"},summary:{zh:"在 Unreal 中用参数和样条生成房屋、城墙、阶梯、地形与植被，并实现贴面藤蔓和交互水波。七项效果共用可编辑工程与自动录制流程。",en:"Seven editable Unreal demonstrations: parametric houses, spline walls and stairs, terrain shaping, vegetation scattering, surface-guided vines, and interactive water waves."},cover:"/media/repositories/pcg-workbench/gallery.webp",tags:["Unreal Engine 5.8","C++","程序化网格","Spline","数值模拟"],story:{zh:`# UE 程序化工具集

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

Inspired by the tool concepts in [KisaragiTomi / PCGPlugins](https://github.com/KisaragiTomi/PCGPlugins). Generation algorithms, mesh construction, and the showcase workflow were implemented independently.`}},N5={id:"maya-parkour-animation",title:"八秒跑酷：Maya 角色关键帧动画",category:"general-ta",categoryLabel:{zh:"角色动画 · 跨越与前翻",en:"Character animation · vaulting and forward rotation"},summary:{zh:"角色连续完成跑步、跨越障碍、空中前翻和落地。制作拆解展示整体位移与身体控制的分工、左右脚的步态节奏、前翻旋转曲线，以及角色绑定与场景的层级关系。",en:"An eight-second parkour sequence with running, takeoff, obstacle traversal, and landing, accompanied by rig controls, animation curves, and scene hierarchy."},cover:"/media/parkour-animation/cover.jpg",tags:["Maya","角色动画","关键帧","IK / FK","动作衔接"],story:{zh:`# 八秒跑酷：Maya 角色关键帧动画

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

![Maya scene, controls, and Outliner](/media/parkour-animation/workspace.png)`}},Vg=`# Vulkan 渲染通道与 Bloom 优化实验

[交互对照与逐轮数据](/experiments/renderpass/index.html) · [下载源码与演示](/downloads/RenderPassLab-source.zip)

@[video: 原生 Vulkan 镜头与同轨迹 Bloom 分屏对照；离线采集](/experiments/renderpass/media/renderpass-demo.mp4)

## 渲染链与资源生命周期

以 C++ / Vulkan 实现程序化 HDR 场景、雾、调色和色调映射，并比较独立 Render Pass、Subpass 输入附件与单 Draw 内联合成。场景使用 GGX 直接光、解析环境和局部补光，四子像素采样改善边缘。GPU 时间戳、逐帧 CSV、图像差分和 RenderDoc 捕获共同记录各条路径的结果。

逐像素后处理可在局部附件或单次着色中衔接；Bloom 的邻域采样需要访问周围像素，采用采样图像与全局依赖。分离卷积还需将原始 HDR 保留到最终合成，不能提前丢弃其内容。

## 同一高斯核的两种实现

参考路径使用 9×9 高斯核，采样间隔 3 像素；优化路径分为水平 9 tap 与垂直 9 tap。阈值、权重、增益和色调映射保持一致。含原图合成，每像素纹理读取由 82 次变为 19 次，代价是增加一次 Pass 和一张全分辨率 RGBA16F 中间图。

| 当前画面的测量 | 二维核 | 分离核 |
| --- | --- | --- |
| 整链 GPU 批次 P50 中位数 | 3.026 ms | 2.930 ms |
| 整链 Render Pass | 4 | 5 |
| Bloom 纹理读取 / 像素 | 82 | 19 |

Windows RTX 4080，1920×1080，六轮 ABBAAB；每轮预热 150 帧、采样 300 帧。计时包含场景与后处理，排除 CPU 等待、读回和呈现。该条件下整链时间下降约 3.18%，最大通道误差 1/255；原始逐轮 P50/P95 保留在交互页。当前没有手机 GPU 的性能结论。

## HDR 格式与精度

固定分离卷积路径，对比 RGBA32F 与 RGBA16F 的四张 HDR 中间图。1920×1080 下，驱动返回的分配需求为135→67.5 MiB；六轮交错测量的整链批次 P50 中位数为3.1483→3.0588 ms，最终图像最大通道差1/255。存储需求减半，整链时间变化约2.84%；场景着色仍占主要计算。alpha保留雾计算所需距离，避免直接换成三通道格式而丢失数据。交互页提供两种格式与差分切换。

## 实现与展示范围

常规网格路径新增12,320个三角形、顶点缓冲、透视变换和D32深度测试。相同几何与材质分别通过四个独立Pass和一个含四Subpass的Pass完成渲染；六轮最终图像逐像素一致，RenderDoc确认36,960顶点的场景绘制及三次后处理绘制。1080p整链批次P50中位数为0.183648与0.176768 ms，逐轮范围重叠。交互页保留网格画面、差分与各轮数据，展示附件组织在常规几何上的实现。

本人实现 Vulkan 资源与管线、Shader、采集脚本及对照界面。RenderDoc 捕获确认分离路径为五个 Pass、五次 Draw。中间图在1080p的逻辑大小约15.82 MiB，未将其等同于实测DRAM流量。

Android跨平台与交互：同一份C++代码通过NDK与JNI接入Android15应用。按钮切换独立Pass/Subpass，后台执行网格、深度和后处理，实时读回为Bitmap；运行状态、错误反馈和图片生命周期在Activity中管理。960×540下两条路径逐像素一致，提供应用截图、自动按钮场景录像与源码。后端使用宿主RTX4080，单次计时用于诊断，手机GPU性能留待真机测量。

视频由真实程序逐帧导出后合成，播放帧率不代表实时运行帧率。场景为解析渲染实验，环境光未实现完整物理全局光照。`,Hg=`# UE 场景提交与移动预览阴影优化

[阴影交互对照](/experiments/courtyard/index.html) · [下载 UE 工程与脚本](/downloads/MobileSceneLab-source.zip)

## 庭院材质与场景制作

![庭院展示关卡：倒角石材、三环雕塑与曲面植被](/experiments/courtyard/presentation/overview.webp)

[全景、石材近景与同机位制作前后](/experiments/courtyard/presentation/index.html) · [下载展示工程与原创源素材](/downloads/CourtyardPresentation-source.zip)

在独立展示关卡中保留原实例布局，为石块加入倒角与加权法线。原创石材纹理以世界坐标三向投射保持尺度，从高度导数构建微表面法线，并分开控制颜色与粗糙度。补充三环雕塑、曲面草叶、双面植被着色和远景地形，调整太阳方向、环境反射与相机。

这一版用于呈现场景和材质实现。以下 ISM、阴影与其他性能记录仍对应原实验关卡；新几何和材质的成本未纳入旧数字。

## 原场景的阴影运行对照

@[video: ES3.1 独立运行镜头与同轨迹阴影对照；固定时间步离线采集](/experiments/courtyard/media/courtyard-demo.mp4)

## 可复现的场景与对照

用 Editor Python 生成石墙、拱门、侧廊、铺地与展示台，搭配本人制作的藤蔓。场景有958个几何实例；两份同布局关卡分别使用独立组件和10组 ISM。相机、曝光、材质与光照保持一致，脚本保存运行参数、日志、逐帧CSV和截图。

## 实例组织与提交成本

桌面 D3D12 六轮对照中，CSV 系统分辨率为888×500，渲染线程批次 P50 中位数从1.768降至1.569 ms。总 RHI DrawCall 约151→74，主要差值来自遮挡查询；Basepass与阴影绘制数保持一致，GPU时间没有改善。通过分阶段计数与D3D12源码核对，避免将间接绘制的计数口径变化解释成减面收益。

## 按场景范围配置阴影预算

只读审计取得相机与几何包围盒，固定视点的最大场景深度约56米，方向光默认动态阴影距离400米。以相同移动预览关卡比较全范围配置与120米覆盖的庭院预算，同时将级联上限4→2、分辨率上限2048→1024。

| 六轮批次 P50 中位数 | 全范围 | 庭院预算 |
| --- | --- | --- |
| 整帧 GPU | 1.154 ms | 1.080 ms |
| ShadowDepths | 0.094 ms | 0.048 ms |
| ShadowProjection | 0.031 ms | 0.031 ms |
| 阴影 DrawCall | 14 | 10 |

运行环境为Windows RTX 4080、D3D11 ES3.1移动预览。CSV 系统分辨率为888×500，独立截图为1600×900。每轮取第300–779帧，截图不进入统计。此结果反映三个设置的联合取舍，未分离各参数的独立收益。展台与植被阴影边缘存在可见变化，交互页保留全尺寸分屏、差分与局部放大。

## 纹理采样与通道打包

[三次采样与RGB通道打包](/experiments/courtyard/sampling.html)：将共用UV的三张原创遮罩合并为一次RGB读取，保持源数据、过滤与输出公式一致。3840×2160桌面ES3.1预览，六轮交错测量的Basepass中位数0.0768→0.0349 ms，整帧GPU 0.8571→0.8121 ms，绘制调用保持19次；最大图像通道差1/255。保留逐轮数据，并说明打包对分辨率、Mip和流送需求的绑定，以及未压缩基准与实际压缩纹理之间的区别。

## 材质精度与坐标范围

[材质精度与坐标范围](/experiments/courtyard/precision.html)：用原生材质节点构建Full、Half和局部坐标三张同条件关卡。D3D11 ES3.1预览中Full与Half输出逐像素一致，保留原图与局部坐标差分；另用明确标注的binary16数值参考解释大坐标怎样丢失小数细节。结合MaterialFloat与平台类型映射说明精度设置的边界，不将属性名直接等同于原生FP16指令。

## 柔边卡片覆盖

[覆盖面积与运行图像对照](/experiments/courtyard/coverage.html)

以1,950个同布局半透明实例，对比2三角形矩形与6三角形贴边网格。局部几何面积减少52.45%；相同材质与UV下，888×500 六轮实验的透明阶段批次P50中位数为0.0870→0.0543 ms，整帧GPU时间未改善。独立1600×900截图平均RGB差约0.13–0.17/255，最大差3/255。固定源颜色以隔离透明混合顺序。长测量窗口同步记录GPU状态，关联样本均为P0。案例说明减少片元覆盖的局部收益及额外几何成本。

保持同一场景，在3840×2160运行视口完成另一组六轮对照：透明阶段0.8458→0.7281 ms，整帧GPU时间1.5002→1.3896 ms，约减少7.4%。请求尺寸、CSV系统分辨率与截图一致；最大RGB差3/255。两档负载展示覆盖优化的适用条件，数据均来自RTX 4080桌面移动预览。

## 材质继承整理与外观保持

[材质参数与同机位交互对照](/experiments/courtyard/material-lineage/index.html) · [下载独立 UE 工程](/downloads/MaterialLineageLab-source.zip)

![同一泵体的材质继承整理案例](/experiments/courtyard/material-lineage/original.png)

新增一个多部件泵体测试道具，十三个涂装部件共用材质实例。读取三级继承中最终生效的颜色、粗糙度、金属度、纹理与静态开关，按基础材质与有效参数筛选等效候选，再复制目标实例并缩短父级链：3层→1层。六个源实例的前后参数快照一致。

UE 5.8.1 中以同一几何、机位、光照和曝光渲染原实例、新副本及两个差异对照。1600×900下，原实例与新副本的RGB平均绝对差0.137/255、最大差3/255；改变粗糙度或关闭颜色分支会产生明显外观差异。交互页可切换参数对照、拖动分屏，并查看实际参数与脚本。当前覆盖单层材质的Global参数，父级链整理未计作GPU性能收益。

## 移动路径与工程处理

独立移动关卡使用指定环境Cubemap，修复桌面实时天空捕获在该路径下的暗部与反射缺失；显式保存ISM材质Usage，避免运行时回退材质。关卡序列驱动相同镜头，分别采集两种阴影配置。

## Android部署与实际运行

![Android庭院实际运行](/experiments/courtyard/media/android-courtyard.png)

完成UE Android x86_64包构建，覆盖C++编译、Shader Cook、Gradle打包、安装与启动；Android15模拟器日志确认Vulkan ES3.1及独立庭院地图。为移动展示配置双面Unlit天空网格，关闭默认虚拟摇杆，并保存设备信息、APK哈希、运行截图与关键日志。

该环境使用宿主RTX4080。上文性能对照保留Windows/D3D11 ES3.1条件；手机热降频与移动GPU带宽仍需真机测量。场景布局与藤蔓为自有制作，基础几何引用UE引擎资源，未使用商业游戏提取资产。`,_5=[{id:"vulkan-renderpass-lab",title:"Vulkan 渲染通道与 Bloom 优化实验",category:"engine-games",categoryLabel:{zh:"原生渲染与 GPU 优化",en:"Native rendering and GPU optimization"},summary:{zh:"实现 Render Pass、Subpass 与内联合成，比较同核 Bloom 分离卷积的 GPU 成本、图像误差和资源代价。",en:"Vulkan pass organization and same-kernel separable bloom, with GPU timing and image comparisons."},cover:"/experiments/renderpass/media/separable.png",tags:["C++","Vulkan","Shader","RenderDoc","GPU 时间戳"],story:{zh:Vg,en:Vg}},{id:"ue-mobile-scene-lab",title:"UE 场景提交与移动预览阴影优化",category:"engine-games",categoryLabel:{zh:"场景渲染与性能取舍",en:"Scene rendering and performance tradeoffs"},summary:{zh:"用同布局庭院对照独立组件与 ISM，按场景范围调整移动预览阴影预算，记录阶段耗时与局部画质变化。",en:"A reproducible courtyard for instancing, submission cost and mobile-preview shadow budget comparisons."},cover:"/experiments/courtyard/presentation/overview.webp",tags:["Unreal Engine","ISM","CSM","ES3.1","Python"],story:{zh:Hg,en:Hg}}],I5=`# 多角色动画预算与性能优化\r
\r
## 具体问题\r
\r
200个角色同时移动时，远处角色仍承担完整动画与足部贴地计算。距离策略保留玩家和近处角色的更新，降低中远景动作求值频次；需要同时观察CPU耗时与接地、动作连续性的变化。\r
\r
## 场景与本人实现\r
\r
基于 Epic Lyra 的角色移动与基础动画管线，搭建 200 AI 高负载测试场景。地图采用 L_ShooterPerf，固定随机种子 1337；本人负责**距离重要度策略**、路径生成与采样工作台，并为本轮录制补充开发机位切换和只读动画状态快照。\r
\r
## 动画更新如何分配\r
\r
重要度每 0.1 秒刷新一次。本地角色及 1200 uu 内的角色作为保护对象，**关闭 URO、保留完整动画更新**与包含 FootPlant IK 的 Post Process AnimBP。其余角色启用引擎原生 URO；非近景且未渲染的角色使用 \`OnlyTickMontagesWhenNotRendered\`，2400 uu 外进一步停用后处理动画。\r
\r
源码包含远景最低 LOD 为 2 的目标，并按资产实际 LOD 数量截断。**本轮 201 个角色网格都只有一个 LOD，实际始终使用 LOD0**。这组画面展示的是更新频次与后处理裁剪，不能归因于网格减面；历史测试也未单独拆分各项策略的收益。\r
\r
## 单角色坡道连续观察\r
\r
2026-11-01 增加一条独立的 **20° 碰撞坡道**。同一 AI 由 \`AddMovementInput\` 与 \`CharacterMovement\` 持续往返，观察模式暂时接管原控制器的移动决策；退出后恢复角色位置、移动配置与控制器 Tick。坡道和相机均为运行时临时对象，不改原地图资产。\r
\r
相机在约 6、18、28 米之间切换并返回近处，收窄 FOV 使角色保持可辨认大小；状态取自骨骼组件，包含距离、URO、后处理开关、左右脚骨位置和着地状态。原始录制 1,850 帧、约 21.97 秒，按游戏时间选取 659 张不同原生帧组成 30fps 视频，无动作插帧；中文标签显示最近状态采样时刻。成片裁去画面上下边缘，保留原始帧和状态记录。\r
\r
这条录像展示实际坡道行走与策略切换，12 AI 的四阶段快照补充了状态读数；两者与 200 AI 的历史计时分开。当前未量化脚底接触误差，也没有以逐帧相同姿态比较开关前后画质。\r
\r
[坡道录制与状态记录](/media/repositories/lyra-hero-arena/animation-observer/ramp-recording.json) · [观察模式源码与复现说明](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/动画策略观察.md)\r
\r
## 模块化装配与动画共享\r
\r
新增原创机器人骨骼样例，将头、上身和下身拆成三个网格。独立模式由三个动画实例分别播放同一动作；共享模式保留一个隐藏的完整骨架，通过 \`SetLeaderPoseComponent\` 驱动三个可见部件。驱动组件即使不可见也持续刷新骨骼，切换时沿用动画时间；退出演示后清理临时对象并恢复相机。\r
\r
实际运行中动画实例数量为 **3 → 1**，可见部件始终为 3，LOD0 材质分段始终为 7。共享姿态减少重复动画更新，分件渲染仍然保留；分段数量取自资产，不等于实际 Draw Call。头、左前臂和左脚的采样位置与驱动骨架一致，当前检查覆盖本例的同骨架资产。\r
\r
约 12 秒连续录像展示独立、共享、返回独立三个阶段。源码、原创 Blender/FBX、UE 资产及导入脚本一起公开，可在本地替换资产继续观察。该案例用于展示动画对象关系和装配取舍，未进行 CPU/GPU 耗时测量。\r
\r
[模块化角色实现与样例资产](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/模块化角色姿态共享.md)\r
\r
## 画面对照与质量取舍\r
\r
2026-10-17 在两个独立编辑器进程中分别运行单机 PIE，沿用相同场景、200 AI、种子、路径生成规则与相机参数。两次运行中的角色轨迹并非逐帧一致。成片包含全景 5 秒、近景 5 秒，以及首段全景原帧的局部放大 5 秒，按游戏时间回放，无插帧、无声。录帧本身影响运行开销，因此录像不用于计算性能收益。基线源素材约17.84秒、233张帧，采集密度约13张/秒；30fps成片会复用源帧。此片主要呈现场景与策略，流畅性判断仍受采集密度限制。\r
\r
优化组近景镜头末尾的快照记录：**15 个角色受到完整更新保护**（含本地角色），186 个启用 URO，102 个停用后处理动画。启用 URO 的角色，其 UpdateRate 在采样时主要为 3、少量为 4；具体频率由引擎决定。保护角色关闭 URO 后，旧参数结构中的数值可能保留，不能据此认定它仍在跳帧。\r
\r
降低远处的姿态更新密度、停用足部贴地后处理，会改变动画的连续性和接地细节。历史对照覆盖人群移动，本次追加了单角色坡道与距离策略观察。快速动作、同姿态对照和接地误差仍需独立实验；当前结果没有证明画面无损。\r
\r
[本轮相机、快照与剪辑范围](/media/repositories/lyra-hero-arena/animation-quality.json)。第三个长焦机位被墙体遮挡，未纳入成片；该机位状态仅作为原始记录保留。\r
\r
## 寻路取舍\r
\r
早期曾尝试集中分配寻路预算减少请求，但卡住角色数超过既定阈值，因而弃用；最终保留独立寻路，改用重规划冷却与目标合并来减少重复计算。\r
\r
## 历史性能数据\r
\r
复算 2026-08-31 留存的 6 份运行摘要，分别取两组三次结果的中位数（5 秒预热、15 秒采样）：受控 AI 均稳定在 200，移动中约 185 人。优化后动画平均耗时由 15.18 ms 降至 10.99 ms，动画 P95 由 18.08 ms 降至 12.78 ms，整帧 P95 由 65.17 ms 降至 58.48 ms。短窗口测试仅反映当前负载下的耗时差异，无法外推长期稳定性，也不能证明画面无损。\r
\r
## 同工程中的其他实验记录\r
\r
- AI：目标查询、共享战场事实与决策更新；\r
- Navigation：路径请求、重规划、拥堵和到达率；\r
- Rendering：角色材质、阴影、附件和可见距离；\r
- Networking：服务器出站、空间相关性与多客户端拓扑；\r
- Physics / VFX：先通过 Profile 找到明确热点，再建立独立案例。\r
\r
比较结果同时记录角色存活、移动、到达率、请求失败、最长等待、近景动画更新、阴影数量和连接数，用于确认两组运行的负载与表现条件。\r
\r
角色资产、基础移动与动画框架来自 Epic Lyra；负载组织、策略与采样由本项目扩展。公开仓库提供三个自有插件快照及开发录制入口，宿主 LyraCharacter / SignificanceManager 的接入仍依赖完整工程。历史数据源码版本为 \`d1b2455\`，本轮录像与历史性能采样分开。\r
\r
[动画策略与录制接入说明](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/动画质量对照.md) · [开发相机与状态读取源码](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/PerformanceLab/Source/PerformanceLab/Private/PerformanceLabModule.cpp)\r
`,q5=`# UE 性能实验工作台

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
`,F5=`# Lyra 英雄射击：GAS 深度实践与技能架构\r
\r
本项目为基于 **UE 5.7.4** 与 **Lyra** 架构搭建的五英雄射击原型，目前处于持续开发阶段。项目以独立的 **HeroArena** 插件承载玩法扩展，实现五位英雄专属能力组合、A/B/C 轮换控制点玩法以及配套战术 HUD，并为 Bot 补充前排、输出与支援的技能决策。\r
\r
### 个人实现\r
\r
- 负责 **HeroArena** 玩法扩展与 GAS 技能开发，实现闪现与范围治疗场等本地预测技能，以及基于服务器历史采样的回溯机制。\r
- 在 **PlayerState** 跨 Pawn 维护英雄选择，管理技能集合的撤销与重新授予，并在新 Pawn 能力系统就绪后重新应用英雄配置。\r
- 修复网络预测与倒计时偏差，建立基于预测键的状态回滚模型，管理 **CommonUI** 压栈唤起及战术 HUD 的失败反馈与注销。\r
\r
项目直接复用 **Lyra** 的基础架构，包括基于 CMC 的角色移动预测、网络同步武器、GAS 基础框架与动画资产；同时沿用其原生死亡镜头、自动重生流程、ShooterCore 占点计分结算及 SeamlessTravel 切局机制。\r
\r
## 连续玩法与占点规则\r
\r
演示展示游骑 Striker 在 A/B/C 轮换点与 Bot 连续交火、自动重生及释放恢复场的流程。技能通过本地预测提交并由服务端生成 Actor 执行范围治疗。单机 65 秒片段呈现局内对抗；展开区保留完整单机比赛，并新增独立服务器从开局、自然结算到下一局的连续联网录像。
\r
@[video: 游骑连续实机片段，约 65 秒，无声。保留完整过程与等待，按游戏时间播放；自动输入，未开启无敌、传送、伤害注入或强制占点。](/media/repositories/lyra-hero-arena/striker-combat.mp4)\r
\r
:::details 完整联网比赛 · 约 8 分 12 秒 · 自然结算与下一局

本项目基于 Lyra 框架，将自研英雄 GAS 技能、轮换控制点与战术 HUD，与宿主提供的移动、武器网络同步、ShooterCore 计分判定及切图流程协同运行。在独立专用服务器与拥有客户端的同机环境中，完成占点争夺、阵亡重生、自然结算并加载新世界，记录业务扩展与宿主比赛生命周期的衔接。

@[video: 独立服务器与拥有客户端，同机环回、9 Bot。两端各 80 ms 出站延迟及 1% 丢包；自动输入，按实际经过时间播放，无声。](/media/repositories/lyra-hero-arena/network-full-match.mp4)

比分从 **0:0** 正常推进至 **150:121**，队伍 1 达到目标分，进入原生 PostGame 并停止计分；随后双方切换到新世界，比分归零并再次进入 Playing。本次玩家属于队伍 2，游戏内显示失败；视频上方按固定队伍编号统计，游戏 HUD 按本方与敌方排列。

录制辅助读取服务器只读导航、视线目标和客户端视角，经 **Enhanced Input** 输入移动、开火与技能。未开启无敌、传送、伤害注入、强制占点或强制结算。原始画面共 6632 帧，最长约 2.21 秒没有新采集帧，按实际时长保留上一帧；采集影响运行开销，不作性能基准。此记录覆盖同机单客户端，公网、多客户端并发和重连需另行验证。

[完整联网比赛记录与源码入口](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/完整联网比赛.md)

:::

:::details 完整占点对局 · 约 6 分 20 秒 · 0:0 → 125:91
\r
项目基于 UE 5.7.4 / Lyra 搭建，展示 Striker 玩家在阵亡后自动重生并重返活动控制点参与交火的完整循环。\r
\r
@[video: 轮换占点完整对局，约 6 分 20 秒，无声、无剪切，按游戏时间播放。单机 1 玩家 + 9 Bot，脚本通过 Enhanced Input 操作；保留死亡等待与转点过程，未开启无敌、传送、伤害注入或强制占点。](/media/repositories/lyra-hero-arena/full-match.mp4)\r
\r
本次从 **0:0** 推进至 **125:91**，队伍 1 达到目标分后自然进入赛后阶段，比分停止增长。录像覆盖 A/B/C 三点轮换，赛后画面继续保留约 5.2 秒。\r
\r
结算复用 **ShooterCore 原生占点计分与终局逻辑**。自有轮换组件负责维护 A/B/C 点状态，在停用控制点时清空其占有者缓存，使轮出点不再贡献分数，同时扩展了战术 HUD 与不干扰对局的只读阶段诊断。\r
\r
[对局记录与实现分工](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/完整占点对局.md)\r
\r
:::\r
\r
:::details 恢复场与轮换控制点：实现细节及源码\r
\r
游骑 Striker 的技能与占点规则由 HeroArena 扩展实现，基础移动、武器、动画及重生流程复用 Lyra。65 秒录像为单机 1 玩家加 9 Bot 的连续片段：脚本读取只读寻路和视线可达敌人的位置，通过既有 Enhanced Input 输入移动、射击与技能。
\r
\r
### 恢复场：权威治疗与脉冲反馈\r
\r
**RecoveryField** 采用 LocalPredicted GameplayAbility。激活时先执行 CommitAbility 处理冷却等提交，只有 Authority 分支生成恢复场 Actor。Actor 记录所属队伍与到期时间，服务器定时检索范围内友方，通过标准 **GameplayEffect** 路径应用治疗。实际治疗成功后递增 HealingPulseSequence 并触发 ForceNetUpdate，客户端由 **OnRep** 驱动 Niagara 脉冲。治疗计算由服务器负责，客户端按复制结果播放反馈；本段录像覆盖单机流程。\r
\r
### 目标轮换：分离玩法坐标与隐藏状态\r
\r
控制点组件保存各点的原始 Transform。原逻辑将非活动点移入地下 100000 单位隐藏，预告下一目标时误读其实时坐标，目标高度变为约 −99948，导致导航失败。修复后读取 **OriginalTransforms** 中的初始位置，避免临时位移污染玩法坐标。单机测试已验证初始预告与 A 到 B 轮换，目标高度和寻路恢复正常。\r
\r
实现入口：[恢复场能力](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Abilities/HeroArenaGameplayAbility_RecoveryField.cpp)、[恢复场 Actor](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Actors/HeroArenaRecoveryField.cpp)、[控制点轮换](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Components/HeroArenaControlPointRotationComponent.cpp)。\r
\r
:::\r
\r
## GAS 闪现与历史回溯\r
\r
Phase 的闪现（Blink）采用 **LocalPredicted** 技能，激活时沿朝向发起胶囊体检测，遇障自动缩短位移或阻挡释放；充能由 PlayerState 组件独立维护，仅同步拥有客户端。回溯（Recall）为 **ServerOnly** 技能，服务端定时对 Pawn 的位置、朝向、生命和弹匣采样并保留数秒历史；施法时校验碰撞并回退状态。\r
\r
@[video: 闪回技能机制，两段实机案例，约 19 秒。1 玩家 + 9 Bot；Enhanced Input 自动输入，录制前设置起点、选人并开启无敌保护，无声。](/media/repositories/lyra-hero-arena/phase-gameplay.mp4)\r
\r
:::details 检测、充能、回溯采样与源码\r
\r
在 HeroArena GameFeature 中，基于 Lyra 的 GAS 框架与角色资产，为 Phase 实现闪现与回溯。GameplayAbility 组织技能激活，PlayerState 组件维护充能和历史记录，战术 HUD 显示剩余次数、冷却与失败原因。\r
\r
\r
### 胶囊体检测与闪现落点\r
\r
Blink 使用 **LocalPredicted GameplayAbility**。激活时沿角色朝向发起最长 700 单位的 Capsule Sweep；遇到障碍物时缩短位移，若有效距离不足 80 单位则拒绝释放，保留充能。检测通过后位移，并触发冲刺 Montage 与 GameplayCue。撞墙拒绝和充能不足均通过失败消息显示中文原因。\r
\r
### 三格充能与失败反馈\r
\r
闪现的 3 格充能由 **PlayerState 自定义组件**维护，服务器按序每 4 秒恢复 1 格，仅向拥有客户端同步。本地施法通过独立的待确认请求记录预测扣减，收到服务器确认或拒绝后更新 HUD。充能耗尽时，GAS 失败 Tag 触发 Lyra 消息；战术 HUD 匹配所属 PlayerController，显示 1.8 秒提示，并在界面销毁时注销监听。\r
\r
### 服务器采样与状态回溯\r
\r
Recall 使用 **ServerOnly GameplayAbility**。服务器每 0.1 秒记录 Pawn 的位置、朝向、生命及当前手枪实例的弹匣，保留约 4 秒历史。技能定位约 3 秒前的样本，校验 Pawn、武器实例与落点碰撞；落点受阻时尝试较新的合法样本。成功后恢复历史位置、生命与弹匣，清空旧记录并进入 8 秒冷却。重生、换人或武器变化时清除不匹配记录。\r
\r
两段录像分别展示充能耗尽，以及碰撞拒绝后回溯位置和弹匣。第二段回溯采用约 3.04 秒前的记录，弹匣从 10 发恢复到 11 发。生命同样按历史值恢复，可能降低；录像启用了无敌保护，生命保持不变。19 秒演示覆盖单机技能流程；Blink 双端验证单列在“预测回滚与弱网同步”章节。
\r
实现入口：[闪现能力](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Abilities/HeroArenaGameplayAbility_Blink.cpp)、[充能组件](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Components/HeroArenaBlinkChargeComponent.cpp)、[回溯历史](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Components/HeroArenaRecallHistoryComponent.cpp)。\r
\r
:::\r
\r
## 英雄切换、重生与 UI\r
\r
为支持阵亡期间换人，英雄选择状态脱离 Pawn 并由 **PlayerState** 挂载的组件持久化管理。换人请求经服务端校验后广播变更。系统在切换时先注销旧技能的 **AbilitySet 授予句柄**，再赋予新技能并清理槽位，通过 **Inventory** 与 **Equipment** 装配新武器。新 Pawn 生成并完成能力系统初始化后，绑定对应配置，英雄专属技能集合仅向其拥有客户端复制。\r
\r
@[video: 重生换人连续演示，约 13 秒。1 玩家 + 9 Bot；开发命令触发死亡与换人，无声。](/media/repositories/lyra-hero-arena/hero-respawn.mp4)\r
\r
针对 **CommonActivatableWidget** 退出栈后无法直接唤起的问题，界面在监听到重生开始消息时调用 **PushContentToLayer_ForPlayer** 重新压栈，重生完成后关闭。战术 HUD 匹配控制器显示技能失败中文提示，并在控件销毁时主动注销消息监听。\r
\r
:::details 选择数据跨重生保留：装配与 CommonUI 实现\r
\r
为支持阵亡期间换人，英雄选择状态与 Pawn 生命周期解耦，由挂载于 **PlayerState** 的 HeroSelectionComponent 管理。客户端通过 RequestHeroSelection 发起换人请求，经 ServerRequestHeroSelection 在服务器端完成英雄名单、锁定状态、HeroId 合法性及重复选择校验后返回确认状态，再通过复制属性 **SelectedHero** 与 OnHeroChanged 广播更新客户端表现。\r
\r
换人时，系统先撤销旧 **AbilitySet 授予句柄**，再授予新技能组；清理 QuickBar 槽位中的旧物品，通过 Inventory 与 Equipment 组件装配新主武器。新 Pawn 生成后，等待其能力系统初始化完毕，再应用 PlayerState 中保留的英雄配置。\r
\r
![重生窗口内切换至闪回，界面显示英雄选择成功](/media/repositories/lyra-hero-arena/respawn-confirmed-20261017.jpg)\r
\r
### CommonUI 选人界面的栈管理\r
\r
选人界面基于 CommonUI 制作。CommonActivatableWidget 停用并退出 UI 栈后，直接调用 ActivateWidget 无法重新显示。流程改为在监听到重生开始消息时触发 PushSelectionScreen，调用 **PushContentToLayer_ForPlayer** 将界面重新压入 UI.Layer.Menu，收到重生完成消息后关闭界面。\r
\r
选人卡片的职业文字曾因区域过窄被截断。现在拓宽了卡片布局，职业说明自动换行，小窗口下整体等比缩放，保留五名英雄的完整描述。\r
\r
:::\r
\r
:::details GAS 英雄切换与重生的双端复制验证\r
\r
在同进程 D3D12 双 PIE 环境下，通过开发指令触发了 **Striker 到 Phase** 的换人与重生验证。通过 \`PlayerId=257\` 对齐双端只读日志：\r
\r
- **切换前：**服务器与拥有客户端均持有 7 项来源为 Striker 的 AbilitySpec，包含工程期选人及 Bot 辅助能力。\r
- **切换后：**双端均变更为 Phase 的 4 项专属能力：Blink、PhasePistolTuning、Recall、StickyBomb，Striker 来源能力无残留。\r
- **重生后：**服务器与客户端的 Pawn 分别由 C_10 和 C_0 重建为 C_14，两端 ASC Avatar 均正确绑定新 Pawn，技能集保持为上述 4 项且无重复授予。\r
\r
第二名玩家保持 Striker 状态；拥有客户端查看远端玩家时，其 AbilitySpec 计数为零，符合所有者复制的可见范围。\r
\r
![拥有客户端换人重生后的实机画面：Phase 的闪现、回溯、被动与终极技能状态已更新；顶部目标提示与比分栏分离](/media/repositories/lyra-hero-arena/network-respawn-client-20261017.jpg)\r
\r
:::\r
\r
## 预测回滚与弱网同步

@[flow](blink)
\r
闪现原实现在本地预测扣减充能，当服务端拒绝激活时位移被 CMC 纠偏，但充能缺乏回退机制而发生不同步。为此引入预测键结算模型：客户端在 **PendingPredictionKeys** 记录待确认扣减；收到 **FPredictionKey** 拒绝回调时撤销扣减，服务端处理完成后复制状态在 **OnRep** 统一结算。引入 **ResetEpoch** 隔离换人与重生的生命周期请求。位置回滚由 CMC 负责，充能一致性由预测键管理。\r
\r
@[video: 双 PIE 弱网演示，14 秒，无声。两端各配置 150 ms 出站延迟与 2% 丢包；预设起点、自动输入，开发指令注入服务器拒绝。双视角顺序采样，按各自时间戳播放，展示预测扣减、拒绝恢复、成功释放及充能。](/media/repositories/lyra-hero-arena/blink-network.mp4)\r
\r
### 充能倒计时与权威状态分离\r
\r
旧逻辑混合客户端估算的服务器时间导致倒计时显示虚高。改进方案在充能结构中同步快照时间，在**同一服务器时钟基准**下计算初始剩余时长，随后由客户端本地时间递减显示。该方案隔离客户端时钟估算偏差，显示仍受状态复制延迟影响，服务端仍全权判定充能与技能激活。\r
\r
:::details 闪现充能预测回滚与网络同步修复：双 PIE 阶段记录\r
\r
在 Phase 闪现（LocalPredicted GA）的原实现中，客户端直接修改收到的服务器充能值，以呈现预测扣减。通过开发指令仅在服务端阻止激活时，CMC 纠正了客户端位移，但客户端充能状态因缺乏回退机制滞留在 2 格，服务端为 3 格；2.4 秒后仍未恢复。\r
\r
\r
修复采用**预测键结算模型**：客户端通过 **PendingPredictionKeys** 独立记录待确认扣减。收到 **FPredictionKey** 拒绝回调时撤销对应扣减；服务端处理成功或在技能内因碰撞拒绝后，将已处理键与充能状态一起复制，在 **OnRep** 中统一结算。**ResetEpoch** 隔离换人、重生前后的请求，弱引用委托避免组件销毁后继续调用。\r
\r
普通网络与模拟弱网均在同进程监听服务器和拥有客户端间验证。弱网下，两端 NetDriver 各配置 150 ms 出站延迟与 2% 出站丢包；日志记录了以下变化：\r
\r
- **客户端已预测、服务器尚未处理：**服务器 3 格，客户端显示 2 格，待确认请求 1 个。\r
- **收到服务器拒绝：**双端均为 3 格，待确认请求清零。\r
- **正常释放一次并确认：**双端均为 2 格，待确认请求为零。\r
- **再连续释放两次并确认：**双端均为 0 格，待确认请求为零。\r
- **恢复一格充能：**双端均为 1 格，待确认请求为零。\r
- **换人重置：**双端均为 3 格，待确认请求为零。\r
\r
以上记录来自独立的连续释放测试；视频展示一次拒绝和一次成功释放。延迟与丢包为模拟器配置，未将其等同于实测 RTT。[双 PIE 记录与测试条件](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/data/blink-network.json)\r
\r
:::\r
\r
:::details 独立服务器：闪现预测、换人与重生\r
\r
进一步将 Dedicated Server 与拥有客户端拆成两个独立进程，通过同机 Loopback UDP 连接。普通网络和双端各 **150 ms 出站延迟、2% 出站丢包**两组运行，均完成闪现拒绝、正常释放、充能补充、换人及重生流程；延迟配置不作为实测 RTT。\r
\r
- **预测拒绝与位置恢复：**客户端先显示 2 格充能、1 个待确认请求。开发入口仅在服务器阻止激活，GAS 拒绝返回后，客户端恢复 3 格，待确认清零，CMC 将角色拉回起点。解除阻止后再次释放，双端消耗至 2 格，实际位移约 205 cm；障碍检测缩短了最大 700 cm 的位移。\r
- **换人时替换能力集合：**切至 Striker 时，两端持有 7 项英雄来源 AbilitySpec；再切至 Phase 时为 4 项，无重复授予。充能补充单独检查同一 Pawn，避免将重生重置误判为冷却完成。\r
- **重生后重新绑定 Avatar：**使用 Lyra 标准自毁路径触发测试死亡，在约 9 秒后的采样中确认新 Pawn 与 ASC Avatar 对应，Phase 的 4 项能力和满充能状态正常。\r
\r
![独立拥有客户端重生后：Phase 的技能栏、充能和手枪正常显示；双端状态另由阶段记录核对](/media/repositories/lyra-hero-arena/standalone-respawn.png)\r
\r
本组测试使用开发专用跨进程驱动与双端状态检查，技能请求及复制仍走 UE NetDriver，GAS、CMC 和基础重生复用 Lyra。覆盖非打包、同机独立进程及单拥有客户端；完整联网比赛见前文独立录像，多人并发和公网仍待验证。[源码、阶段记录与复现方法](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/跨进程网络案例.md)
\r
:::\r
\r
:::details 闪现充能倒计时：隔离客户端时钟偏差\r
\r
Phase 每 4 秒恢复一格充能，上限 3 格。旧界面用服务器截止时间减去 GameState 在客户端估计的服务器时间，历史启动记录曾显示 7.54 秒。本次在仅向拥有者复制的充能结构中加入快照时间与周期编号：先在**同一服务器时钟基准**上计算剩余时长，再用客户端本地游戏时间递减。服务器继续负责充能恢复与技能激活判定。\r
\r
同一周期的后续状态只缩短显示，避免再次扣减或请求确认重启倒计时；新周期重新计时，ResetEpoch 隔离换人和重生。独立服务器测试中，两端各配置 150 ms 出站延迟与 2% 出站丢包，并向客户端一次性注入 −8 秒时钟偏差。收到同一条充能状态时，旧公式计算出 **4.818 秒**，新显示为 **4.000 秒**，随后连续递减。这是故障注入结果；本轮普通新启动未复现历史的 7.54 秒。\r
\r
显示仍受状态复制和传输延迟影响，服务器确认的可用次数始终优先。本地倒计时归零不会自行发放充能。[计时实现、运行记录与取舍](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/闪现充能倒计时.md)\r
\r
:::\r
\r
## 比赛结算与下一局\r
\r
为避免终局后 HUD 残留倒计时，服务端轮换组件在 **PostGame** 停止轮换并复制结束标记，客户端据此清理占点与失败提示。对局衔接复用原生 **SeamlessTravel** 流程。独立服务器定向测试验证了新局比分重置为 0:0，重新选人后两端 Avatar 正确绑定，无重复技能授予，充能恢复正常。\r
\r
:::details 比赛结算与下一局衔接：截图与双端记录\r
\r
原战术 HUD 仅读取控制点状态，结算后仍残留轮换倒计时。现在由服务器轮换组件识别 **PostGame**，停止轮换计时并复制结束标记；客户端清理占点、重生引导及技能失败提示，显示“比赛结束 · 等待下一局”。后续等待与 **SeamlessTravel** 复用 Lyra 原生流程，新世界实例重置结束标记。\r
\r
![主动触发结算后的拥有客户端：原生终局画面中，战术 HUD 显示“比赛结束 · 等待下一局”](/media/repositories/lyra-hero-arena/postgame.png)\r
\r
独立 Dedicated Server 与拥有客户端完成自动切局，新局比分为 **0:0**。重新选择 Phase 后，两端四项英雄来源 AbilitySpec 无重复，ASC Avatar 正确；释放闪现后充能 **3→2**、待确认清零，位移约 **205 cm** 且双端一致。\r
\r
![自动进入下一局：目标 A 提示恢复，Phase 释放一次闪现后剩余 2/3 充能](/media/repositories/lyra-hero-arena/next-round.png)\r
\r
这组截图来自主动触发结算的定向测试：非打包、同机 Loopback、单拥有客户端，两端各配置 150 ms 出站延迟与 2% 出站丢包。完整占点对局保留原始录像，其赛后 HUD 为旧版表现。[切局实现与双端记录](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/比赛结算与下一局.md)
\r
:::\r
\r
## 性能案例与源码范围\r
\r
相关性能案例：[200 角色动画更新优化](/?work=lyra-performance-lab)、[战术 HUD 刷新与 UE 性能实验工作台](/?work=ue-performance-workbench)。\r
\r
当前展示包含完整单机比赛、完整独立服务器比赛，以及闪现预测、换人重生与切局的定向测试，各段保留自己的采集条件。联网范围为同机 Loopback 单拥有客户端；多人并发、公网部署和重连尚未验证。公开代码仓库仅包含自有 C++ 模块与配置，不重新分发 UE、Lyra 或 Fab 的原生资源。
\r
:::details 演示采集条件与历史验证范围\r
\r
2026 年 10 月的 D3D12 实机复测使用 **1 名本地玩家与 9 名 Bot**。通过开发命令触发死亡，在倒计时内使用方向键和回车切换至 Phase（闪回）；日志确认 PlayerState 选择成功，新 Pawn 保留该选择并装配 ID_Pistol_C。13 秒重生换人录像单独重录，死亡与换人请求由开发命令触发，走现有选择、确认和重生路径。
\r
**监听服务器与拥有客户端**的换人和重生结果通过只读日志与截图对齐；Blink 另有弱网双视角演示，以及独立 Dedicated Server 的普通网络、弱网阶段记录。前文分别保留单机完整对局与新增的独立服务器完整对局，不将旧片段的验证范围混用。
\r
公开仓库提供自有 C++ 模块、结构说明及运行截图，不重新分发 Lyra、Fab 或 Unreal Engine 资产。\r
\r
相关性能案例：[200 角色动画更新优化](/?work=lyra-performance-lab)、[战术 HUD 刷新与 UE 性能实验工作台](/?work=ue-performance-workbench)。\r
\r
:::\r
\r
[HeroArena 自有源码与接入说明](https://github.com/Ubik42/LyraHeroArena)\r
`,X5=`# UE5 SIGGRAPH 物理复现实验室

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

@[flow](getup)

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
`,Y5=`# Noemancer：面向人与 AI 协作的自研游戏引擎

Noemancer 是基于 C++20 构建的游戏引擎与编辑器，当前处于 v0.2.0 Preview 1（pre-alpha）阶段，主要在 Windows x64 本机验证。个人研发重心集中在引擎领域模型、外部库适配、命令编辑系统、资产处理管线以及渲染架构组织；实体管理使用 Flecs ECS，物理与骨骼动画分别集成 Jolt Physics 和 ozz-animation，渲染对接 SDL_GPU，音频接入 miniaudio。

## 编辑、试玩与项目保存

工程管理覆盖 Scene、Prefab、Asset Registry、C# 脚本以及项目 HUD 布局。编辑器将编辑环境与试玩环境隔离，试玩产生的数据变动可选择性写回编辑世界并支持撤销。

- Project Hub 管理创建、打开和恢复工程。Scene View、Outliner、Inspector、Asset Browser、Console、Animation Graph 与 Scene Flow Canvas 组成编辑工作区；音频、VFX、Sprite 和材质作者面板接入同一 Editor。
- Scene 中的实体使用稳定 ID。修改 Transform 时可先预检查，再根据版本号提交；旧版本号的请求被拒绝，避免自动化覆盖刚完成的编辑。
- 2026-10-17 在独立 serve 会话中，将一个台阶的 Y 坐标从 **0.35 调整至 1.35**：预检查保持场景不变，提交后拒绝旧版本请求，撤销恢复原场景，重做并保存。五个 HUD 中文标签通过 UI 源文档事务完成持久化与运行时热应用。

新增连续演示使用 Platformer 工程副本，由自动化脚本调度，在单个 Editor 进程内完成试玩切回、通过 live 命令修改台阶坐标、撤销重做与场景保存；随后经 CLI 完成 Cook 与打包，启动独立 Player 验证导出的台阶改动。

**Edit World 与 Play World 分离**，GUI 与 live 命令共享编辑版本和撤销栈。针对 VFS 虚拟路径 \`project://\` 无法直接落盘的问题，由宿主在加载后将场景绑定至已校验的实体文件；保存时比对规范化内容并检测外部修改冲突。试玩世界的保存及另存为均被拒绝。

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

MCP 可以连接当前 Editor，也可以使用独立 serve 进程。前者已有同一 World 的实体创建、撤销，以及 Editor Context 选择与焦点的真实接入记录；后者维护独立 World。连续视频中的台阶修改、撤销、重做与保存连接当前 Editor；早期静态截图及 HUD 事务使用独立 serve，随后重新加载保存的工程采集画面。各子系统的撤销范围以其具体接口为准。

## 当前开发范围

项目处于 Windows x64 本机 pre-alpha 阶段。独立干净机器部署、跨平台发行、稳定插件 SDK、生产网络、生产 RTGI/VSM，以及真实模型 Provider 到 Staging 的 AIGC 流程仍待完成。Vulkan Raster 已有运行记录；原生光追结果经 SDL 的安全呈现仍未完成。

Sponza 展示证明大型外部场景的实时画面；平台跳跃样板用于验证编辑、C#、UI 与打包流程，两者的验证范围分别记录。Sponza 2022 由 Frank Meinl 制作、Intel 发布，采用 CC BY 4.0。
`,K5=[O5,..._5,L5,N5,H5,G5,V5,...B5,{id:"frostbound-gate",title:"霜隙之门 · Frostbound Gate",category:"general-ta",categoryLabel:{zh:"Unity 场景特效",en:"Unity scene VFX"},summary:{zh:"雪地遗迹中的冰晶传送门。旅人靠近时凝结，穿越后传送，远离时碎裂消散；包含昼夜变化、分层冰材质和程序生成资产。",en:"An ice-crystal portal in snowy ruins: approach to form it, cross to teleport, and retreat to dissolve it. Includes a day–night cycle, layered ice shading, and procedural assets."},cover:"/media/repositories/frostbound-gate/hero.webp",tags:["Unity 6","URP","Shader","程序化建模","场景交互"],repositoryUrl:"https://github.com/Ubik42/FrostboundGate",story:{zh:`# 霜隙之门

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

Version 0.1.0 is verified on Windows with Python 3.12 and DuckDB 1.5.5. It uses deterministic synthetic data and bounded question routing; it does not claim arbitrary enterprise analysis, causal automation, or unrestricted code execution.`},images:[{src:"/media/repositories/gameops-insight-agent/metric-choice.png",alt:{zh:"崩溃率两个有效分母的执行前口径选择",en:"Pre-query selection between two valid crash-rate denominators"}},{src:"/media/repositories/gameops-insight-agent/sql-blocked.png",alt:{zh:"外部文件读取 SQL 在执行前被拦截",en:"External-file SQL blocked before execution"}}]},{id:"lyra-hero-arena",title:"Lyra 英雄射击：GAS 深度实践与技能架构",category:"engine-games",categoryLabel:{zh:"多人游戏与 Gameplay 架构",en:"Multiplayer game and gameplay architecture"},summary:{zh:"基于 Lyra 的五英雄射击原型：GAS 技能、轮换占点、换人重生与闪现预测回滚；独立服务器与客户端在同机模拟弱网下完成整局结算和切局。",en:"An in-progress UE5 Lyra hero shooter using GAS, Game Features, PawnData, and server-authoritative state for selection, combat, death, respawn, and results."},cover:"/media/repositories/lyra-hero-arena/striker-combat-poster.jpg",tags:["UE 5.7","Lyra","C++ / GAS","Game Features"],repositoryUrl:"https://github.com/Ubik42/LyraHeroArena",story:{zh:F5,en:`# Lyra Hero Arena

An in-progress multiplayer hero-shooter project built on Unreal Engine 5.7 and Lyra. Five heroes are composed from Ability Sets, equipment, and data definitions, while server-authoritative selection and a HeroArena Game Feature keep gameplay boundaries explicit. The repository publishes original C++ modules and real screenshots without redistributing Lyra or Fab assets.`},images:[{src:"/media/repositories/lyra-hero-arena/gameplay.jpg",alt:{zh:"Lyra 英雄射击实际交战场景",en:"Live combat in the Lyra hero shooter"}}]},{id:"lyra-performance-lab",title:"多角色动画预算与性能优化",category:"engine-games",categoryLabel:{zh:"UE 性能分析与优化",en:"UE performance analysis and optimization"},summary:{zh:"基于 Lyra 搭建 200 个受控 AI 的测试场景，通过距离分段、原生 URO 与动画后处理裁剪降低开销，展示实际采样与技术取舍。",en:"Distance-based animation updates for 200 AI characters, with URO, post-process animation tradeoffs and recorded CPU measurements."},cover:"/media/repositories/lyra-hero-arena/animation-crowd.jpg",tags:["URO / 动画分级","CSV Profiler","200 AI","A/B 对照"],repositoryUrl:"https://github.com/Ubik42/LyraHeroArena/tree/main/Plugins/PerformanceLab",story:{zh:I5,en:`# Multi-Character Performance Optimization

Fixed maps, seeds, viewpoints, graphics settings, RHI, and character loads create repeatable single-variable studies across AI, navigation, animation, rendering, and networking. Performance gains are accepted only when behavior and visual quality conditions remain valid.`},images:[{src:"/media/repositories/lyra-hero-arena/workbench-network.png",alt:{zh:"历史网络实验：工作台的结果组织示例，与上方动画批次分开",en:"Baseline and optimized comparison for the networking experiment"}},{src:"/media/repositories/lyra-hero-arena/gameplay.jpg",alt:{zh:"性能压力实验所依托的 Lyra Gameplay 场景",en:"Lyra gameplay environment used by the performance stress studies"}}]},{id:"ue-performance-workbench",title:"UE 性能实验工作台",category:"engine-games",categoryLabel:{zh:"Unreal Editor 性能工具",en:"Unreal Editor performance tooling"},summary:{zh:"在 Unreal Editor 内编排、采集和比较性能实验；以战术 HUD 为例，分开呈现局部刷新、UI 总耗时与整帧表现。",en:"An Unreal Editor workbench for launching standalone and networked experiments, validating load and quality conditions, and aggregating formal baseline/optimized results."},cover:"/media/repositories/lyra-hero-arena/workbench-network.png",tags:["UE 5.7","Slate","CSV Profiler","Multi-process"],repositoryUrl:"https://github.com/Ubik42/LyraHeroArena/tree/main/Plugins/PerformanceWorkbench",story:{zh:q5,en:`# UE Performance Workbench

A Chinese Unreal Editor tool that turns profiling setup into repeatable experiments. Versioned presets define maps, loads, seeds, RHI, graphics settings, capture duration, and process topology. The workbench launches standalone, server, and client processes, validates required load and quality conditions, and aggregates matched 3+3 baseline and optimized samples with medians, P95 values, deltas, and quality costs.`},images:[{src:"/media/repositories/lyra-hero-arena/workbench-render.png",alt:{zh:"渲染实验的正式结果对比",en:"Formal rendering experiment comparison"}},{src:"/media/repositories/lyra-hero-arena/workbench-network.png",alt:{zh:"网络实验的多进程结果对比",en:"Multi-process network experiment comparison"}}]},{id:"noemancer",title:"Noemancer：面向人与 AI 协作的自研 C++ 游戏引擎",category:"engine-games",categoryLabel:{zh:"自研游戏引擎",en:"Custom game engine"},summary:{zh:"C++20 引擎与编辑器，覆盖 PBR 渲染、C# Gameplay、Jolt 物理、ozz 动画及 Cook / 打包；Editor、CLI 与 MCP 共享场景状态和可撤销编辑。当前为 Windows 本机验证的 pre-alpha。",en:"A pre-alpha C++20 engine and editor with PBR, C# gameplay, Jolt physics, ozz animation, Cook and packaging. Editor, CLI and MCP share scene state and undoable edits, currently validated on Windows."},cover:"/media/repositories/major-updates/noemancer-sponza-atrium.webp",tags:["C++20","D3D12 / Vulkan","C#","MCP"],repositoryUrl:"https://github.com/Ubik42/Noemancer",story:{zh:Y5,en:`# Noemancer

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

The project is pre-alpha and currently verified end to end on Windows x64. Raster SSR, SSGI, and dynamic atmosphere are current verified paths. Native RT has experimental D3D12/Vulkan execution and D3D12 scene-tracing foundations; production RTGI, VSM, Vulkan presentation, durable Sprite/Material asset authoring, clean-machine/cross-platform release, provider-backed AIGC, and a stable plug-in SDK remain unfinished.`},images:[{src:"/media/repositories/major-updates/noemancer-editor.webp",alt:{zh:"Noemancer 中文 Editor：场景、层级、Inspector、资产与 Agent Context",en:"Noemancer Chinese editor workspace"}},{src:"/media/repositories/major-updates/noemancer-sponza-atrium.webp",alt:{zh:"D3D12 中实时运行的 Intel Sponza 2022 宫殿中庭",en:"Intel Sponza 2022 atrium running in real time on D3D12"}},{src:"/media/repositories/major-updates/noemancer-sponza-balcony.webp",alt:{zh:"Sponza 上层回廊与外部 glTF 材质依赖",en:"Sponza balcony and external glTF material dependencies"}},{src:"/media/repositories/major-updates/noemancer-commercial-raster.webp",alt:{zh:"PBR、阴影、Bloom 与 ACES 的商业 Raster 基准",en:"Commercial raster benchmark with PBR, shadows, Bloom, and ACES"}},{src:"/media/repositories/major-updates/noemancer-sky.webp",alt:{zh:"四 LUT 动态天空、大气与 Aerial Perspective",en:"Four-LUT dynamic sky, atmosphere, and aerial perspective"}},{src:"/media/repositories/major-updates/noemancer-ssr-ssgi.webp",alt:{zh:"RenderLab 中启用 SSR、SSGI 与时域处理",en:"SSR, SSGI, and temporal processing in RenderLab"}}]},{id:"siggraph-physics-lab",title:"UE5 SIGGRAPH 物理论文复现实验室",category:"engine-games",categoryLabel:{zh:"UE 物理与论文复现",en:"UE physics and paper reproduction"},summary:{zh:"五类 UE 物理实验，覆盖布料、软体、流体、可微物理与角色控制；连续演示 Chaos 受击倒地、Physics Control 跟随 ALS 起身，以及恢复 CharacterMovement 行走。",en:"Five UE 5.4 studies connect SIGGRAPH research on cloth, soft bodies, fluids, differentiable physics, and physical character control to Chaos and real engine assets."},cover:"/media/repositories/siggraph-physics-lab/cover.png",tags:["UE 5.4.4","Chaos","RDG / D3D12","Physics"],repositoryUrl:"https://github.com/Ubik42/ue5-siggraph-physics-lab",story:{zh:X5,en:`# UE5 SIGGRAPH Physics Lab

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

## 用轨迹与知识检索修正设计判断

新增的上下文模块检索 30 张本地设计知识卡片，并组合布局与试玩轨迹，为模型保留来源、适用条件和文件摘要。当前采用可解释的词项检索，针对双路线与遭遇问题返回节奏对比、分支汇合、观察点等五类知识。

复核候选 B 的 49 个自动行走采样点后，发现角色距遭遇中心最近约 829 cm，却曾距右侧敌人出生标记仅约 84 cm。因此，“没有进入中心的 600 cm 判定圈”不足以判断绕过了整个遭遇。

下一轮设计建议先以区域及入口记录遭遇触发，再按侧路允许避战或必须参战的目标调整空间关系。当前敌人仍是设计标记，实际战斗触发待接入后验证；本轮分析保留了原有几何布局。

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

The repository includes a real local ComfyUI output, its API workflow, and the receipt written by the package. The nodes remain model- and renderer-independent.`},images:[{src:"/media/repositories/comfyui-production-nodes/workflow-overview.png",alt:{zh:"中文生产预检与下游交接工作流总览",en:"Chinese production workflow overview"}},{src:"/media/repositories/comfyui-production-nodes/dependency-check.png",alt:{zh:"环境清单与依赖预检通过",en:"Environment inventory and dependency check"}},{src:"/media/repositories/comfyui-production-nodes/budget-validation.png",alt:{zh:"批量与像素预算超限被集中拦截",en:"Batch and pixel budget validation"}},{src:"/media/repositories/comfyui-production-nodes/contract-validation.png",alt:{zh:"工作流必需输入与参数范围检查",en:"Workflow input and parameter validation"}},{src:"/media/repositories/comfyui-production-nodes/receipt-writer.png",alt:{zh:"生成收据预览与受限工作区写入",en:"Generation receipt and contained write"}},{src:"/media/repositories/comfyui-production-nodes/dcc-handoff.png",alt:{zh:"面向 DCC 与引擎的批次交接清单",en:"DCC and engine batch handoff manifest"}},{src:"/media/repositories/comfyui-production-nodes/local-generation.png",alt:{zh:"本机 ComfyUI 真实生成结果",en:"Locally generated ComfyUI output"}}]}];function Vt(a,i){return a[i]}const Q5=[{id:"maya-plugin",portfolioCategory:"pipeline",artstationUrl:"https://www.artstation.com/artwork/XJGnR3",title:{en:"Maya Plugin",zh:"Maya 综合工具集"},cover:"/media/visual-works/maya-toolset-video-cover.jpg",category:{en:"DCC tool development",zh:"DCC 工具开发"},summary:{en:"A modular Maya tool suite covering nine production areas, with separated interface and utility layers.",zh:"面向 Maya 生产流程的综合工具集，覆盖属性、绑定、约束、骨骼、控制器、命名、连接、工程与动画九类功能。"},process:[{en:"Separated PySide interfaces from reusable backend utility classes.",zh:"以 PySide 界面层调用后端 Utility 类，拆分交互、业务逻辑与公共功能。"},{en:"Implemented production-oriented operations for rigging, attributes, constraints, naming, and connections.",zh:"实现绑定、属性、约束、命名与驱动连接等面向实际制作的批量操作。"},{en:"Added persistent theme, window state, responsive layout, and contextual tooltips.",zh:"补充主题与窗口状态记忆、弹性布局、字号适配及悬停提示。"}],tools:["Maya","Python","PySide","DCC Pipeline"],youtubeId:"7rUuqI9Pil0",images:[{src:"/media/visual-works/maya-main.webp",alt:{en:"Main Maya plugin window",zh:"Maya 综合工具集主界面"},caption:{en:"Main window and attribute tools",zh:"主窗口与属性工具"}},{src:"/media/visual-works/maya-rig.webp",alt:{en:"Rigging tools in the Maya plugin",zh:"Maya 工具集中的绑定功能"},caption:{en:"Rigging utilities",zh:"绑定工具页"}},{src:"/media/visual-works/maya-connections.webp",alt:{en:"Attribute connection tools",zh:"属性连接与驱动关系工具"},caption:{en:"Connection editor",zh:"属性连接编辑器"}}]},{id:"stylized-road-material",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/Bk918D",title:{en:"Stylized Road Material",zh:"风格化道路材质"},cover:"/media/artstation/stylized-road-material.jpg",category:{en:"Procedural material",zh:"程序化材质"},summary:{en:"A stylized road material authored procedurally in Substance Designer.",zh:"使用 Substance Designer 制作的风格化道路材质，通过 Flood Fill、层级拆分与多层噪声构建砖块、花纹、草地、花瓣、泥土和潮湿变化。"},process:[{en:"Constructed the brick base and spiral motif as reusable procedural patterns.",zh:"程序化构建砖块基底与旋涡纹样，并保持图案参数可调。"},{en:"Used Flood Fill and deformation mixing to break repetition.",zh:"使用 Flood Fill 与形变混合打散重复，建立砖块尺度和方向变化。"},{en:"Layered grass, petals, dirt, moisture, and unified color grading.",zh:"分层加入草地、花瓣、泥土、潮湿区域，最后统一整体色彩。"}],tools:["Substance Designer","Flood Fill","Procedural Material"],youtubeId:"D2jptqFjUZE",images:[{src:"/media/visual-works/road-material.webp",alt:{en:"Final stylized road material",zh:"风格化道路材质最终效果"},caption:{en:"Final material maps and surface",zh:"最终材质与贴图效果"}},{src:"/media/visual-works/road-graph.webp",alt:{en:"Substance Designer material graph",zh:"Substance Designer 材质节点网络"},caption:{en:"Procedural graph",zh:"程序化节点网络"}}]},{id:"rigging-animation",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/vb42ev",title:{en:"Rigging & Animation",zh:"角色绑定与动画"},cover:"/media/artstation/rigging-animation.jpg",category:{en:"Rigging and gameplay",zh:"绑定与游戏角色"},summary:{en:"A complete path from a mechanical character rig in Maya to a playable Unreal Engine character.",zh:"将 T-200 机器人从 Maya 骨骼与控制器绑定推进到 Unreal Engine 过场动画和可操控角色，处理机械轴、武器链条、舱门、灯光与攻击动画。"},process:[{en:"Built a mechanical rig with specialized IK, weapon-chain constraints, doors, ladder, and spotlight controls.",zh:"针对机械结构制作腿部 IK、武器链条约束、舱门、梯子与探照灯控制。"},{en:"Authored a startup cutscene in Level Sequencer.",zh:"在 Level Sequencer 中制作角色进入机体与机器人启动的过场动画。"},{en:"Implemented locomotion, upper-body attack blending, VFX states, and spotlight input.",zh:"通过 AnimGraph 与蓝图实现移动、上半身攻击混合、烟雾状态和探照灯输入。"}],tools:["Maya","Unreal Engine","Sequencer","AnimGraph","Blueprint"],youtubeId:"wd1gCuZZ2EY",featured:!0,images:[{src:"/media/visual-works/rig-result.webp",alt:{en:"Playable T-200 robot in Unreal Engine",zh:"Unreal Engine 中可操控的 T-200 机器人"},caption:{en:"Playable character result",zh:"可操控角色最终效果"}},{src:"/media/visual-works/rig-maya.webp",alt:{en:"Mechanical robot rig in Maya",zh:"Maya 中的机器人机械绑定"},caption:{en:"Maya rig and controls",zh:"Maya 骨骼与控制器"}},{src:"/media/visual-works/rig-animgraph.webp",alt:{en:"Unreal Engine animation graph",zh:"Unreal Engine 动画状态图"},caption:{en:"Animation state and blending",zh:"动画状态与分层混合"}}]},{id:"unity-sdf-shader",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/XJGnQl",title:{en:"Unity SDF Shader",zh:"Unity SDF 体积云 Shader"},cover:"/media/artstation/unity-sdf-shader.jpg",category:{en:"Realtime shader",zh:"实时 Shader"},summary:{en:"A Unity volume-cloud shader using signed distance fields and ray marching.",zh:"在 Unity 中以有向距离场描述云体，使用 Ray Marching 进行密度采样，并结合光线包围盒求交、噪声、吸收和散射计算完成体积云渲染。"},process:[{en:"Combined sphere and box SDF primitives through smooth union and subtraction.",zh:"组合球体与盒体 SDF，并以平滑并集和差集构造可变化的云体形态。"},{en:"Implemented ray-box intersection and density sampling in HLSL.",zh:"在 HLSL 中实现光线与包围盒求交、步进采样和密度计算。"},{en:"Exposed noise, absorption, ambient density, and light intensity for art direction.",zh:"开放噪声、吸收、环境密度与光照强度参数，支持在 Unity Inspector 中调整。"}],tools:["Unity","HLSL","SDF","Ray Marching"],youtubeId:"vSrJBlIisTs",images:[{src:"/media/visual-works/sdf-properties.webp",alt:{en:"Unity SDF shader properties",zh:"Unity SDF Shader 参数定义"},caption:{en:"Artist-facing parameters",zh:"可调渲染参数"}},{src:"/media/visual-works/sdf-raymarch.webp",alt:{en:"Ray marching fragment shader code",zh:"体积云 Ray Marching 片元着色代码"},caption:{en:"Density sampling and lighting",zh:"密度采样与光照计算"}}]},{id:"houdini-lightning",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/5W1Xkg",title:{en:"Houdini Lightning VFX",zh:"Houdini 闪电特效"},cover:"/media/artstation/houdini-lighting.jpg",category:{en:"Procedural VFX",zh:"程序化特效"},summary:{en:"A procedural lightning system that strikes nearby geometry and activates localized destruction.",zh:"使用 Houdini 构建的程序化闪电与破碎交互：电流自动寻找周围目标，生成不同形态与频率的闪电，并在命中位置激活对应刚体簇。"},process:[{en:"Projected source points onto nearby surfaces to establish valid strike targets.",zh:"沿球体法线向周围场景投射散点，筛选有效距离内的闪电命中目标。"},{en:"Built animated lightning forms with curve attributes, VOP noise, particles, and color flow.",zh:"结合曲线属性、VOP 噪声、粒子与颜色流动构建主电流和次级电流。"},{en:"Connected hit regions to clustered rigid-body activation in DOPs.",zh:"在 DOP 中将命中区域连接到预切割刚体簇，实现局部优先崩解。"}],tools:["Houdini","VOP","DOP","Particles","Rigid Bodies"],images:[{src:"/media/visual-works/lightning-form.webp",alt:{en:"Procedural lightning curves",zh:"程序化生成的闪电曲线"},caption:{en:"Lightning form generation",zh:"闪电形态生成"}},{src:"/media/visual-works/lightning-stream.webp",alt:{en:"Secondary electric current effect",zh:"次级电流与颜色流动效果"},caption:{en:"Secondary current",zh:"次级电流效果"}},{src:"/media/visual-works/lightning-destruction.webp",alt:{en:"Wall destruction driven by lightning strikes",zh:"闪电命中驱动的墙体破碎"},caption:{en:"Strike-driven rigid-body destruction",zh:"命中驱动的刚体破碎"}}]},{id:"unreal-stylized-world",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/kNZDbK",title:{en:"Unreal Engine Stylized World",zh:"Unreal 风格化世界"},cover:"/media/artstation/unreal-stylized-world.jpg",category:{en:"Realtime environment",zh:"实时场景"},summary:{en:"A stylized realtime environment built from a Houdini heightfield HDA, then authored and optimized in Unreal Engine.",zh:"使用 Houdini 生成高度场与散布数据，将 HDA 接入 Unreal Engine，完成风格化材质、植被替换、水面、灯光与后处理。"},process:[{en:"Generated, eroded, and smoothed the terrain in Houdini, with placeholders for rocks and four tree variants.",zh:"在 Houdini 中生成、侵蚀并平滑地形，同时为岩石和四类树木建立程序化散布占位。"},{en:"Built distance-aware terrain, water, grass, and foliage materials in Unreal Engine.",zh:"在 Unreal Engine 中制作分远近层级的地表、水面、草地与植被材质。"},{en:"Completed scene dressing, lighting, sharpening post process, and final realtime presentation.",zh:"完成场景布置、灯光、锐化后处理与最终实时画面。"}],tools:["Unreal Engine","Houdini","HDA","Material Editor"],youtubeId:"GRVpU7MBSTg",featured:!0,images:[{src:"/media/visual-works/world-final.webp",alt:{en:"Final stylized environment in Unreal Engine",zh:"Unreal Engine 中的风格化世界最终画面"},caption:{en:"Final realtime environment",zh:"最终实时场景"}},{src:"/media/visual-works/world-heightfield.webp",alt:{en:"Houdini heightfield and placement visualization",zh:"Houdini 高度场与模型占位可视化"},caption:{en:"Heightfield and procedural placement data",zh:"高度场与程序化散布数据"}}]},{id:"houdini-cluster",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/Zl3GrN",title:{en:"Houdini Interactive Cluster",zh:"Houdini 交互式花簇"},cover:"/media/artstation/houdini-cluster.jpg",category:{en:"Procedural interaction",zh:"程序化交互"},summary:{en:"A fully procedural flower cluster that bends and blooms in response to a moving reference point.",zh:"完全由 Houdini 程序生成的交互式花簇。参考点靠近时，花茎会向目标弯曲并逐渐开放；远离后则恢复闭合状态。"},process:[{en:"Scattered stems and used VEX to calculate distance-attenuated orientation toward the target.",zh:"散布花茎，并用 VEX 计算指向目标的方向、距离衰减、噪声和平滑。"},{en:"Generated petal rings and blended their normals by target proximity.",zh:"程序化生成花瓣环，根据参考点距离混合花瓣法线以控制开合。"},{en:"Added randomized orientation and color variation without external models.",zh:"不依赖外部模型，为花簇加入方向扰动和颜色变化，完成整体生成网络。"}],tools:["Houdini","VEX","Procedural Modeling","Interaction"],images:[{src:"/media/visual-works/cluster-response.webp",alt:{en:"Flower cluster responding to a reference point",zh:"花簇对参考点产生弯曲与开放响应"},caption:{en:"Interactive bloom response",zh:"交互式开放效果"}},{src:"/media/visual-works/cluster-network.webp",alt:{en:"Complete Houdini flower network",zh:"Houdini 花簇完整节点网络"},caption:{en:"Complete procedural network",zh:"完整程序化网络"}}]},{id:"unreal-vfx",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/oJWA5k",title:{en:"Unreal Engine VFX",zh:"Unreal 水墨战斗特效"},cover:"/media/artstation/unreal-vfx.jpg",category:{en:"Realtime VFX",zh:"实时特效"},summary:{en:"A Chinese ink-inspired combat VFX set built across Unreal materials, Niagara, animation, and post process.",zh:"以中国水墨视觉为方向，综合 Unreal 材质、Niagara、动画通知、Sequencer 与后处理，制作刀光、地裂、墨迹喷溅、聚合和画面冲击效果。"},process:[{en:"Created trail meshes and materials for dissolution, blur, refraction, cracks, and screen distortion.",zh:"制作刀光轨迹网格，以及溶解、拖尾、折射、裂纹和屏幕扰动材质。"},{en:"Layered multiple Niagara systems for blade arcs, dust, smoke, ink splashes, stones, and cohesion.",zh:"分层组合刀光、尘土、烟雾、墨迹喷溅、碎石和聚合等 Niagara 系统。"},{en:"Triggered VFX through animation slots and notifies, then added impact post process.",zh:"通过动画 Slot 与 Notify 触发特效，并在重击阶段加入水墨与模糊后处理。"}],tools:["Unreal Engine","Niagara","Material Editor","Animation"],youtubeId:"hbdYTygLQBw",images:[{src:"/media/visual-works/vfx-blade.webp",alt:{en:"Layered sword trail effect",zh:"多层组合的水墨刀光效果"},caption:{en:"Sword trail composition",zh:"刀光特效组合"}},{src:"/media/visual-works/vfx-ground.webp",alt:{en:"Large-scale ink ground fissure effect",zh:"大范围水墨地裂效果"},caption:{en:"Ground fissure layers",zh:"地裂效果分层"}},{src:"/media/visual-works/vfx-final.webp",alt:{en:"Final combat VFX in Unreal Engine",zh:"Unreal Engine 水墨战斗特效最终画面"},caption:{en:"Final realtime presentation",zh:"最终实时画面"}}]},{id:"houdini-tower",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/nJWYm1",title:{en:"Houdini PCG Tower",zh:"Houdini 程序化高塔"},cover:"/media/artstation/houdini-pcg-tower.jpg",category:{en:"Procedural modeling",zh:"程序化建模"},summary:{en:"A parameterized tower generator with independently authored walls, columns, transitions, body, and top.",zh:"在 Houdini 中拆分墙体、立柱、过渡结构、塔身与塔顶五个模块，建立相互约束的参数化生成逻辑，并生成可直接应用材质的 UV。"},process:[{en:"Built modular wall, window, pillar, railing, body, and roof generators.",zh:"分别构建墙体与窗框、立柱、栏杆、塔身装饰和塔顶结构生成器。"},{en:"Used normals, edge groups, VOP-authored attributes, loops, and resampling to control structure.",zh:"使用法线、边组、VOP 属性、循环和重采样控制结构细节与拼装位置。"},{en:"Exposed base, body, and top parameters while maintaining valid joins and UVs.",zh:"将底座、塔身与塔顶参数集中开放，并保持模块衔接和 UV 结果有效。"}],tools:["Houdini","Procedural Modeling","VOP","UV"],youtubeId:"IxTV5AredLw",images:[{src:"/media/visual-works/tower-wall.webp",alt:{en:"Procedural wall and window module",zh:"程序化墙体与窗框模块"},caption:{en:"Wall generator",zh:"墙体生成模块"}},{src:"/media/visual-works/tower-body.webp",alt:{en:"Assembled procedural tower body",zh:"组合后的程序化塔身"},caption:{en:"Tower body assembly",zh:"塔身模块组合"}},{src:"/media/visual-works/tower-top.webp",alt:{en:"Procedural tower top assembly",zh:"程序化塔顶结构"},caption:{en:"Tower top module",zh:"塔顶生成模块"}}]}],Z5=`# Houdini Interactive Cluster\r
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
`,W5=`# Houdini 交互式花簇\r
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
`,J5=`# Houdini Lightning VFX\r
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
`,$5=`# Houdini 闪电特效\r
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
`,eC=`# Houdini PCG Tower\r
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
`,tC=`# Houdini PCG 塔楼\r
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
`,nC=`# Maya Plugin\r
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
`,aC=`# Maya 插件\r
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
`,iC=`# Rigging & Animation\r
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
`,rC=`# 绑定与动画\r
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
`,sC=`# Stylized Road Material\r
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
`,oC=`# 风格化道路材质\r
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
`,lC=`# Unity SDF Shader\r
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
`,cC=`# Unity SDF 着色器\r
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
`,uC=`# Unreal Engine Stylized World\r
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
`,dC=`# Unreal Engine 风格化世界\r
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
`,hC=`# Unreal Engine VFX\r
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
`,mC=`# Unreal Engine VFX\r
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
`,fC={"unreal-stylized-world":{zh:dC,en:uC},"maya-plugin":{zh:aC,en:nC},"stylized-road-material":{zh:oC,en:sC},"rigging-animation":{zh:rC,en:iC},"unity-sdf-shader":{zh:cC,en:lC},"houdini-lightning":{zh:$5,en:J5},"houdini-cluster":{zh:W5,en:Z5},"unreal-vfx":{zh:mC,en:hC},"houdini-tower":{zh:tC,en:eC}};var pC=Zg();function cd({src:a,alt:i,loading:l="lazy",style:s}){const{locale:u}=An(),m=u==="zh",[h,p]=F.useState(!1),[v,g]=F.useState(!1),b=F.useRef(null),S=F.useId();return F.useEffect(()=>{const w=b.current;h&&w&&!w.open&&w.showModal(),!h&&w?.open&&w.close()},[h]),f.jsxs(f.Fragment,{children:[f.jsxs("button",{className:"image-expand",type:"button","aria-label":`${m?"放大图片：":"Enlarge image: "}${i}`,onClick:()=>{g(!1),p(!0)},children:[f.jsx("img",{src:a,alt:i,loading:l,decoding:"async",style:s}),f.jsxs("span",{className:"image-expand-hint","aria-hidden":"true",children:["⤢ ",m?"放大":"Enlarge"]})]}),pC.createPortal(f.jsx("dialog",{className:"image-dialog",ref:b,"aria-labelledby":S,onCancel:w=>{w.preventDefault(),w.stopPropagation(),p(!1)},onClick:w=>{w.stopPropagation(),w.target===w.currentTarget&&p(!1)},children:h&&f.jsxs(f.Fragment,{children:[f.jsxs("header",{children:[f.jsx("p",{id:S,children:i}),f.jsxs("div",{children:[f.jsx("button",{type:"button","aria-pressed":v,onClick:()=>g(!v),children:v?m?"适应窗口":"Fit image":m?"原始尺寸":"Actual size"}),f.jsx("a",{href:a,target:"_blank",rel:"noreferrer",children:m?"打开原图 ↗":"Open original ↗"}),f.jsx("button",{type:"button",onClick:()=>p(!1),"aria-label":m?"关闭放大图片":"Close enlarged image",children:"×"})]})]}),f.jsx("div",{className:`image-dialog-canvas${v?" is-actual-size":""}`,children:f.jsx("img",{src:a,alt:i})})]})}),document.body)]})}const Gg={blink:{title:"闪现预测与权威状态",steps:[["拥有客户端","登记预测扣费","用 GAS PredictionKey 记录未确认扣费；显示值由权威充能减去待确认数量得到。"],["服务器","判定并维护充能","检查激活条件，决定执行或拒绝。真实充能数量与恢复周期由服务器维护。"],["拥有客户端","确认或回滚","接收同一快照中的充能与确认编号，清除已确认预测；拒绝回调撤销对应扣费。"]],branch:["换人 / 重生时","清理待确认记录，以 ResetEpoch 隔离旧周期，防止迟到回调修改新角色状态。"],note:"充能是项目扩展的状态；位移预测与纠正沿用 UE CharacterMovement。",source:"https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Components/HeroArenaBlinkChargeComponent.cpp"},getup:{title:"角色控制权交接",steps:[["Character → Chaos","受击与倒地","停用 CharacterMovement 与胶囊碰撞，分离 Mesh，交由刚体模拟。"],["状态估计","确认稳定与朝向","结合触地、骨盆速度、朝向和持续时间判断；过早的起身请求先保留。"],["Physics Control","跟随起身目标","21 个父空间控制与 1 个骨盆世界控制，依次跟随 ALS 起身和站立目标。"],["Chaos → Character","恢复行走","稳定站立后销毁控制、停模拟、重新挂接 Mesh，打开胶囊并恢复 Walking。"]],note:"连续演示已覆盖单机、平地仰卧起身。控制力未设上限，复杂地形和联机同步仍需单独验证。",source:"https://github.com/Ubik42/ue5-siggraph-physics-lab/blob/main/Docs/Development/CONTINUOUS_GETUP.md"},director:{title:"语言计划如何进入角色状态",steps:[["模型 / 文件桥","生成动作计划","结合场景目标和当前状态，生成受限的移动、步态、姿态和注视字段。"],["UE 执行器","校验后执行","核对会话、请求编号和整份计划，拒绝未知目标及非法动作，再更新队列。"],["ALS / 角色状态","推进移动与表现","队列推进直线移动，映射 ALS 步态与姿态；adjust 仅改表现，保留路线。"]],branch:["急停时","清空待处理请求与动作队列，停止移动。旧回复不再执行，新请求可独立恢复。"],note:"模型不参与逐帧骨骼计算。当前接入依赖活动 Codex 对话及本地文件桥。",source:"/media/repositories/als-director/ALSDirector-source-v1.zip"}};function gC({id:a}){if(!(a in Gg))return null;const i=Gg[a];return f.jsxs("figure",{className:"mechanism-flow","aria-label":i.title,children:[f.jsxs("figcaption",{children:[f.jsx("strong",{children:i.title}),f.jsx("span",{children:"状态与控制权"})]}),f.jsx("ol",{className:"mechanism-steps",style:{"--step-count":i.steps.length},children:i.steps.map(([l,s,u],m)=>f.jsxs("li",{children:[f.jsxs("small",{children:[f.jsx("b",{children:String(m+1).padStart(2,"0")}),l]}),f.jsx("h4",{children:s}),f.jsx("p",{children:u})]},s))}),"branch"in i&&f.jsxs("div",{className:"mechanism-branch",children:[f.jsx("strong",{children:i.branch[0]}),f.jsx("p",{children:i.branch[1]})]}),f.jsxs("footer",{children:[f.jsx("p",{children:i.note}),f.jsx("a",{href:i.source,target:"_blank",rel:"noreferrer",children:"实现与源码 ↗"})]})]})}const V0=/^!\[(.*?)\]\((.*?)\)$/,H0=/^@\[video(?::\s*(.*?))?\]\((.*?)\)$/,G0=/^(#{1,6})\s+(.+)$/,ju=/^\s*-\s+(.+)$/,ku=/^\s*\d+\.\s+(.+)$/,Pu=/^:::details\s+(.+)$/,N0=/^@\[flow\]\(([a-z-]+)\)$/,yC=/^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/,Ng=a=>a.trim().replace(/^\|/,"").replace(/\|$/,"").split(/(?<!\\)\|/).map(i=>i.trim().replace(/\\\|/g,"|")),vC=/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)]+)/g;function pr(a){return a.replace(/^\s*>\s?/,"").trimEnd()}function bC(a){const i=pr(a).trim();return!i||N0.test(i)||i.startsWith("```")||i.startsWith("|")||i==="<aside>"||i==="</aside>"||Pu.test(i)||i===":::"||V0.test(i)||H0.test(i)||G0.test(i)||ju.test(i)||ku.test(i)}function _0(a){const i=a.replace(/\r\n/g,`
`).split(`
`),l=[];for(let s=0;s<i.length;){const u=pr(i[s]).trim();if(!u||u==="<aside>"||u==="</aside>"){s+=1;continue}if(u.startsWith("```")){const k=[],z=u.slice(3).trim();for(s+=1;s<i.length&&!i[s].trim().startsWith("```");)k.push(i[s++]);s+=1,l.push({type:"code",language:z,text:k.join(`
`)});continue}if(u.includes("|")&&yC.test(i[s+1]?.trim()??"")){const k=Ng(u),z=[];for(s+=2;s<i.length&&i[s].trim().includes("|")&&i[s].trim();)z.push(Ng(i[s++]));l.push({type:"table",headers:k,rows:z});continue}const m=u.match(Pu),h=u.match(N0);if(h){l.push({type:"flow",id:h[1]}),s+=1;continue}if(m){const k=[];let z=1;for(s+=1;s<i.length;){const H=pr(i[s]).trim();if(Pu.test(H)&&(z+=1),H===":::"&&(z-=1),s+=1,z===0)break;k.push(i[s-1])}l.push({type:"details",summary:m[1],blocks:_0(k.join(`
`))});continue}const p=u.match(V0);if(p){l.push({type:"image",alt:p[1],src:p[2]}),s+=1;continue}const v=u.match(H0);if(v){l.push({type:"video",caption:v[1]??"",src:v[2]}),s+=1;continue}const g=u.match(G0);if(g){l.push({type:"heading",level:g[1].length,text:g[2].replace(/^\*\*|\*\*$/g,"")}),s+=1;continue}const b=u.match(ju),S=u.match(ku);if(b||S){const k=!!S,z=[];for(;s<i.length;){const N=pr(i[s]).trim().match(k?ku:ju);if(!N)break;z.push(N[1]),s+=1}l.push({type:"list",ordered:k,items:z});continue}const w=[u];for(s+=1;s<i.length&&!bC(i[s]);)w.push(pr(i[s]).trim()),s+=1;l.push({type:"paragraph",text:w.join(" ")})}return l}function SC(a){let i=a;for(let u=0;u<2;u+=1)try{i=decodeURIComponent(i)}catch{break}if(i==="image.png")return"/media/notion/image-000.webp";if(i==="texture.png")return"/media/notion/texture.webp";if(i==="PixPin_2024-11-13_18-17-55.gif")return"/media/notion/vfx-fluctuation.gif";const l=i.match(/^image (\d+)\.png$/);if(l)return`/media/notion/image-${l[1]}.webp`;const s=i.match(/^图片(\d+)\.png$/);return s?`/media/notion/cover-${s[1]}.webp`:a}function li(a){return a.split(vC).filter(Boolean).map((i,l)=>{if(i.startsWith("`")&&i.endsWith("`"))return f.jsx("code",{children:i.slice(1,-1)},l);if(i.startsWith("**")&&i.endsWith("**"))return f.jsx("strong",{children:i.slice(2,-2)},l);const s=i.match(/^\[([^\]]+)\]\(([^)]+)\)$/);return s?f.jsx("a",{href:s[2],target:"_blank",rel:"noreferrer",children:s[1]},l):/^https?:\/\//.test(i)?f.jsx("a",{href:i,target:"_blank",rel:"noreferrer",children:i},l):i})}function ud({markdown:a,title:i,outlineLabel:l,videoPosters:s}){const{locale:u}=An(),m=F.useRef(null),h=_0(a),p=!!l||h.filter(b=>b.type==="heading"&&b.level===2).length>=3,v=h.findIndex(b=>b.type==="heading"&&b.level===1),g=(b,S)=>{if(b.type==="flow")return f.jsx(gC,{id:b.id},S);if(b.type==="table")return f.jsx("div",{className:"story-table",role:"region",tabIndex:0,"aria-label":`${i} — ${u==="zh"?"数据表":"data table"}`,children:f.jsxs("table",{children:[f.jsx("thead",{children:f.jsx("tr",{children:b.headers.map((w,k)=>f.jsx("th",{scope:"col",children:li(w)},k))})}),f.jsx("tbody",{children:b.rows.map((w,k)=>f.jsx("tr",{children:b.headers.map((z,H)=>f.jsx("td",{children:li(w[H]??"")},H))},k))})]})},S);if(b.type==="code")return f.jsx("pre",{className:"story-code",tabIndex:0,"aria-label":b.language||(u==="zh"?"代码":"Code"),children:f.jsx("code",{children:b.text})},S);if(b.type==="details")return f.jsxs("details",{className:"story-details",onToggle:w=>{w.currentTarget.open||w.currentTarget.querySelectorAll("video").forEach(k=>k.pause())},children:[f.jsx("summary",{children:li(b.summary)}),f.jsx("div",{children:b.blocks.map((w,k)=>g(w,`${S}-${k}`))})]},S);if(b.type==="image")return f.jsx("figure",{children:f.jsx(cd,{src:SC(b.src),alt:b.alt||i})},S);if(b.type==="video")return f.jsxs("figure",{className:"story-video",children:[f.jsx("video",{src:b.src,poster:s?.[b.src],controls:!0,preload:"metadata",playsInline:!0}),b.caption&&f.jsx("figcaption",{children:b.caption})]},S);if(b.type==="heading"){const w=b.level<=2?"h3":"h4";return f.jsx(w,{id:`story-section-${S}`,children:li(b.text)},S)}if(b.type==="list"){const w=b.ordered?"ol":"ul";return f.jsx(w,{children:b.items.map((k,z)=>f.jsx("li",{children:li(k)},`${k}-${z}`))},S)}return f.jsx("p",{children:li(b.text)},S)};return f.jsxs("div",{className:`notion-story${p?" has-outline":""}`,ref:m,children:[p&&f.jsx("nav",{className:"story-outline","aria-label":l??(u==="zh"?"项目章节":"Project chapters"),children:h.map((b,S)=>b.type==="heading"&&b.level===2?f.jsx("button",{type:"button",onClick:()=>{m.current?.querySelector(`#story-section-${S}`)?.scrollIntoView({block:"start"})},children:b.text},S):null)}),h.map((b,S)=>S===v?null:g(b,String(S)))]})}const wC=[{id:"moss",name:"Moss Courier",zh:"外套角色",en:"Stylized courier"},{id:"aster",name:"Aster Runner",zh:"运动服角色",en:"Athletic character"},{id:"cobalt",name:"Cobalt Sentinel",zh:"人形机器人",en:"Humanoid robot"}],AC=[{id:"dance",zh:"首段舞蹈 · 12 秒",en:"Indoor dance · 12 s"},{id:"combat",zh:"正面武术 · 7 秒",en:"Frontal martial arts · 7 s"}],_g="/media/repositories/animation-aigc-lab";function CC({locale:a}){return f.jsx("section",{className:"animation-aigc-showcase","aria-label":a==="zh"?"三个角色、两种动作":"Three characters, two motions",children:wC.map(i=>f.jsxs("section",{children:[f.jsxs("h3",{children:[i.name," ",f.jsxs("span",{children:["· ",i[a]]})]}),f.jsx("div",{className:"animation-aigc-pair",children:AC.map(l=>f.jsxs("figure",{children:[f.jsx("video",{controls:!0,playsInline:!0,preload:"none",poster:`${_g}/${i.id}-${l.id}.webp`,src:`${_g}/${i.id}-${l.id}.mp4`,"aria-label":`${i.name} · ${l[a]}`}),f.jsx("figcaption",{children:l[a]})]},l.id))})]},i.id))})}const TC=JSON.parse('{"animation":{"sessionId":"formal-crowd-200-animation-20260831-165343","conditions":{"sourceRevision":"d1b2455","presetId":"crowd-200-animation","map":"L_ShooterPerf","seed":1337,"targetAgentCount":200,"rhiName":"D3D12","warmupSeconds":5,"measurementSeconds":15,"environment":{"cpu":"13th Gen Intel(R) Core(TM) i7-13700F","gpu":"NVIDIA GeForce RTX 4080","gpuDriverInternal":"32.0.15.9186","gpuDriverUser":"591.86","gpuVendorId":4318,"gpuDeviceId":9988,"os":"10.0.26200.1.256.64bit","resolutionX":1280,"resolutionY":720,"windowed":true}},"metrics":[{"metric":"csvAnimationTimeMs","statistic":"mean","label":{"zh":"动画平均耗时","en":"Animation mean"},"unit":"ms","baseline":15.17960918727914,"optimized":10.989284935897432,"changePercent":-27.604954776393686},{"metric":"csvAnimationTimeMs","statistic":"p95","label":{"zh":"动画 P95","en":"Animation P95"},"unit":"ms","baseline":18.0835,"optimized":12.7786,"changePercent":-29.33558216053308},{"metric":"frameTimeMs","statistic":"p95","label":{"zh":"整帧 P95","en":"Frame P95"},"unit":"ms","baseline":65.1697963476181,"optimized":58.480098843574524,"changePercent":-10.265027480461175}],"quality":{"possessedAIPawnCount":{"Baseline":200,"Optimized":200},"navMovingAgentCount":{"Baseline":184.8671586715867,"Optimized":185.9503311258278},"animationFullRateProtectedCount":{"Baseline":0,"Optimized":61.83112582781457},"animationPostProcessDisabledCount":{"Baseline":0,"Optimized":26.28205128205128}},"runs":[{"runId":"formal-crowd-200-animation-20260831-165343-run-01-baseline","variant":"Baseline","sampleCount":271,"metrics":{"animationFullRateProtectedCount":{"sampleCount":271,"mean":0,"p95":0,"min":0,"max":0},"possessedAIPawnCount":{"sampleCount":271,"mean":200,"p95":200,"min":200,"max":200},"csvAnimationTimeMs":{"sampleCount":271,"mean":15.843934686346874,"p95":20.0324,"min":12.6265,"max":25.3132},"navMovingAgentCount":{"sampleCount":271,"mean":184.8671586715867,"p95":191,"min":176,"max":192},"animationPostProcessDisabledCount":{"sampleCount":271,"mean":0,"p95":0,"min":0,"max":0},"frameTimeMs":{"sampleCount":271,"mean":55.51807418795529,"p95":72.07009941339493,"min":43.953102082014084,"max":84.81340110301971}},"summarySha256":"12bb08fd9fdbcbfd2e73632b82d168c003326eaffbe5068b4c4e93e3eeefc92b","csvSha256":"f720a0549b65c15168b053e751d2469a7b53636a1234c7d59279428d25b7597b"},{"runId":"formal-crowd-200-animation-20260831-165343-run-02-optimized","variant":"Optimized","sampleCount":313,"metrics":{"animationFullRateProtectedCount":{"sampleCount":313,"mean":61.61980830670927,"p95":66,"min":56,"max":67},"possessedAIPawnCount":{"sampleCount":313,"mean":200,"p95":200,"min":200,"max":200},"csvAnimationTimeMs":{"sampleCount":313,"mean":10.818294568690096,"p95":12.6556,"min":8.3696,"max":18.8459},"navMovingAgentCount":{"sampleCount":313,"mean":187.0223642172524,"p95":193,"min":177,"max":195},"animationPostProcessDisabledCount":{"sampleCount":313,"mean":26.536741214057507,"p95":32,"min":19,"max":33},"frameTimeMs":{"sampleCount":313,"mean":48.01032651727573,"p95":58.480098843574524,"min":39.24209997057915,"max":81.2705010175705}},"summarySha256":"ba50447a0754230587ec48c4ae65f4178cbc2f576980d43d7e77925398b8172d","csvSha256":"2b2f66159eb8b7e084d8c126b791d2051dd25152b4bf7bb2cd57a7348c799286"},{"runId":"formal-crowd-200-animation-20260831-165343-run-03-optimized","variant":"Optimized","sampleCount":312,"metrics":{"animationFullRateProtectedCount":{"sampleCount":312,"mean":63.01923076923077,"p95":65,"min":59,"max":67},"possessedAIPawnCount":{"sampleCount":312,"mean":200,"p95":200,"min":200,"max":200},"csvAnimationTimeMs":{"sampleCount":312,"mean":10.989284935897432,"p95":12.7786,"min":8.7445,"max":17.9197},"navMovingAgentCount":{"sampleCount":312,"mean":183.7403846153846,"p95":188,"min":176,"max":192},"animationPostProcessDisabledCount":{"sampleCount":312,"mean":26.28205128205128,"p95":31,"min":19,"max":33},"frameTimeMs":{"sampleCount":312,"mean":48.14283011290125,"p95":58.205898851156235,"min":38.31550106406212,"max":81.05549961328506}},"summarySha256":"a9446b5be83d0e4fa0c0513f8bf652ed14802368402732db87fa5ceeb6a9ed7d","csvSha256":"cd82afabcb95860b3008b46e0465b69038516c0f2aad70d225dd517e316c64f1"},{"runId":"formal-crowd-200-animation-20260831-165343-run-04-baseline","variant":"Baseline","sampleCount":283,"metrics":{"animationFullRateProtectedCount":{"sampleCount":283,"mean":0,"p95":0,"min":0,"max":0},"possessedAIPawnCount":{"sampleCount":283,"mean":200,"p95":200,"min":200,"max":200},"csvAnimationTimeMs":{"sampleCount":283,"mean":15.17960918727914,"p95":18.063,"min":12.5876,"max":23.6251},"navMovingAgentCount":{"sampleCount":283,"mean":185.98939929328623,"p95":191,"min":178,"max":194},"animationPostProcessDisabledCount":{"sampleCount":283,"mean":0,"p95":0,"min":0,"max":0},"frameTimeMs":{"sampleCount":283,"mean":53.14202506634877,"p95":63.06689977645874,"min":43.789900839328766,"max":76.7986997961998}},"summarySha256":"f1b678a6167e0606296b2edf610d913a9bb642ea99a629d342e326858d6f3221","csvSha256":"435fcc10e2a1b918408061e6e6385c2388b0f88ce8a45a3dd4a4208fedc3e653"},{"runId":"formal-crowd-200-animation-20260831-165343-run-05-baseline","variant":"Baseline","sampleCount":280,"metrics":{"animationFullRateProtectedCount":{"sampleCount":280,"mean":0,"p95":0,"min":0,"max":0},"possessedAIPawnCount":{"sampleCount":280,"mean":200,"p95":200,"min":200,"max":200},"csvAnimationTimeMs":{"sampleCount":280,"mean":15.158002857142852,"p95":18.0835,"min":12.4403,"max":24.4416},"navMovingAgentCount":{"sampleCount":280,"mean":183.19642857142858,"p95":188,"min":173,"max":190},"animationPostProcessDisabledCount":{"sampleCount":280,"mean":0,"p95":0,"min":0,"max":0},"frameTimeMs":{"sampleCount":280,"mean":53.591944303895744,"p95":65.1697963476181,"min":43.690696358680725,"max":79.99490201473236}},"summarySha256":"46014375b7d76fabe7ff1b7eb85df76270e5169c61aa485d9c99a7c93c6bc0d5","csvSha256":"4134c8ba93f4b2000ff8639aeb36c1b11b79823b1a69da299d0f6c969750efdc"},{"runId":"formal-crowd-200-animation-20260831-165343-run-06-optimized","variant":"Optimized","sampleCount":302,"metrics":{"animationFullRateProtectedCount":{"sampleCount":302,"mean":61.83112582781457,"p95":64,"min":59,"max":65},"possessedAIPawnCount":{"sampleCount":302,"mean":200,"p95":200,"min":200,"max":200},"csvAnimationTimeMs":{"sampleCount":302,"mean":11.202510596026489,"p95":13.4434,"min":8.9452,"max":18.1323},"navMovingAgentCount":{"sampleCount":302,"mean":185.9503311258278,"p95":191,"min":177,"max":193},"animationPostProcessDisabledCount":{"sampleCount":302,"mean":26.25496688741722,"p95":33,"min":18,"max":35},"frameTimeMs":{"sampleCount":302,"mean":49.755924449160396,"p95":62.47600167989731,"min":39.654698222875595,"max":76.74530148506165}},"summarySha256":"ee6f3f4d557b535fcca587d9e24fd6fdd8d826ca1cbc3d1660e5e2fcedc87ce6","csvSha256":"0b2657325953bcbe59be8f1a87489125ef3e831295535f9297672db77d1e5c44"}]},"hud":{"sessionId":"formal-hero-arena-hud-refresh-20260831-203159","conditions":{"sourceRevision":"712a1cd","presetId":"hero-arena-hud-refresh","map":"L_Convolution_Blockout","seed":1337,"targetAgentCount":9,"rhiName":"D3D12","warmupSeconds":8,"measurementSeconds":10,"environment":{"cpu":"13th Gen Intel(R) Core(TM) i7-13700F","gpu":"NVIDIA GeForce RTX 4080","gpuDriverInternal":"32.0.15.9186","gpuDriverUser":"591.86","gpuVendorId":4318,"gpuDeviceId":9988,"os":"10.0.26200.1.256.64bit","resolutionX":1280,"resolutionY":720,"windowed":true}},"metrics":[{"metric":"csvHeroArenaHUDRefreshTimeMs","statistic":"mean","label":{"zh":"HUD 刷新平均耗时","en":"HUD refresh mean"},"unit":"ms","baseline":0.062023869104908654,"optimized":0.005739769452449568,"changePercent":-90.74587004119142},{"metric":"csvUITimeMs","statistic":"mean","label":{"zh":"UI 总平均耗时","en":"UI total mean"},"unit":"ms","baseline":1.6659563868613176,"optimized":1.5535463016330457,"changePercent":-6.747480673251827},{"metric":"frameTimeMs","statistic":"p95","label":{"zh":"整帧 P95","en":"Frame P95"},"unit":"ms","baseline":11.26759871840477,"optimized":11.242400854825974,"changePercent":-0.22363117651357234}],"quality":{"possessedAIPawnCount":{"Baseline":9,"Optimized":9},"csvHeroArenaHUDRefreshCountPerSecond":{"Baseline":103.9,"Optimized":9.6}},"runs":[{"runId":"formal-hero-arena-hud-refresh-20260831-203159-run-01-baseline","variant":"Baseline","sampleCount":1096,"metrics":{"csvUITimeMs":{"sampleCount":1096,"mean":1.6659563868613176,"p95":2.2962,"min":1.1024,"max":3.433},"csvHeroArenaHUDRefreshCountPerSecond":{"sampleCount":1,"mean":109.6,"p95":109.6,"min":109.6,"max":109.6},"possessedAIPawnCount":{"sampleCount":1096,"mean":8.989051094890511,"p95":9,"min":8,"max":9},"csvHeroArenaHUDRefreshTimeMs":{"sampleCount":1096,"mean":0.059192244525547395,"p95":0.0912,"min":0.0345,"max":0.2342},"frameTimeMs":{"sampleCount":1096,"mean":9.128662223934475,"p95":10.660100728273392,"min":6.913401186466217,"max":117.50639975070953}},"summarySha256":"e2c01eb3ad6010c5c5f708fc07f52cc5ae783de296b621a2be971d188af90c80","csvSha256":"0b6a27cf15b9d1af64296fd814829439e49a0784574ccb7e5878bb5548960aa7"},{"runId":"formal-hero-arena-hud-refresh-20260831-203159-run-02-optimized","variant":"Optimized","sampleCount":1041,"metrics":{"csvUITimeMs":{"sampleCount":1041,"mean":1.5535463016330457,"p95":2.1256,"min":0.9224,"max":3.4201},"csvHeroArenaHUDRefreshCountPerSecond":{"sampleCount":1,"mean":9.6,"p95":9.6,"min":9.6,"max":9.6},"possessedAIPawnCount":{"sampleCount":1041,"mean":9,"p95":9,"min":9,"max":9},"csvHeroArenaHUDRefreshTimeMs":{"sampleCount":1041,"mean":0.005739769452449568,"p95":0.0562,"min":0,"max":0.1538},"frameTimeMs":{"sampleCount":1041,"mean":9.607442460531917,"p95":11.28220185637474,"min":6.767198443412781,"max":87.0652049779892}},"summarySha256":"e8fd64d094415870512343e918ef07835ecc6f1e6a003ed54f7e665308f9bd0b","csvSha256":"73e876de6cd03019f6d92eaf7432bc5efcbf34721efa1e03d21b277a1acd5855"},{"runId":"formal-hero-arena-hud-refresh-20260831-203159-run-03-optimized","variant":"Optimized","sampleCount":1065,"metrics":{"csvUITimeMs":{"sampleCount":1065,"mean":1.6210412206572775,"p95":2.3061,"min":0.959,"max":4.6654},"csvHeroArenaHUDRefreshCountPerSecond":{"sampleCount":1,"mean":9.6,"p95":9.6,"min":9.6,"max":9.6},"possessedAIPawnCount":{"sampleCount":1065,"mean":9,"p95":9,"min":9,"max":9},"csvHeroArenaHUDRefreshTimeMs":{"sampleCount":1065,"mean":0.005804788732394369,"p95":0.0568,"min":0,"max":0.1282},"frameTimeMs":{"sampleCount":1065,"mean":9.394750513241325,"p95":11.242400854825974,"min":7.073402404785156,"max":84.3258947134018}},"summarySha256":"542666db8aec92416a98a1793bfd4cfc4ae7734e9ad61198d508b0f53bf8ba13","csvSha256":"32167020b4d8b0a0651dc59b2f79d1e2c02eafb769b801e29f0dab2ab7dea2f5"},{"runId":"formal-hero-arena-hud-refresh-20260831-203159-run-04-baseline","variant":"Baseline","sampleCount":1000,"metrics":{"csvUITimeMs":{"sampleCount":1000,"mean":1.7033154999999998,"p95":2.2958,"min":1.0177,"max":3.9479},"csvHeroArenaHUDRefreshCountPerSecond":{"sampleCount":1,"mean":100,"p95":100,"min":100,"max":100},"possessedAIPawnCount":{"sampleCount":1000,"mean":9,"p95":9,"min":9,"max":9},"csvHeroArenaHUDRefreshTimeMs":{"sampleCount":1000,"mean":0.06500280000000001,"p95":0.0987,"min":0.0366,"max":0.6722},"frameTimeMs":{"sampleCount":1000,"mean":10.00766310468316,"p95":11.751599609851837,"min":7.7052004635334015,"max":118.20590496063232}},"summarySha256":"5e08897f88d31748c4555a2d83d4b46cde719f32d67468b1a055df984902dd80","csvSha256":"edb5806b61ec3684960287207917ac3bcb4255a314519577d6efe4f8a3142d8b"},{"runId":"formal-hero-arena-hud-refresh-20260831-203159-run-05-baseline","variant":"Baseline","sampleCount":1039,"metrics":{"csvUITimeMs":{"sampleCount":1039,"mean":1.630626948989412,"p95":2.2123,"min":1.017,"max":3.1122},"csvHeroArenaHUDRefreshCountPerSecond":{"sampleCount":1,"mean":103.9,"p95":103.9,"min":103.9,"max":103.9},"possessedAIPawnCount":{"sampleCount":1039,"mean":9,"p95":9,"min":9,"max":9},"csvHeroArenaHUDRefreshTimeMs":{"sampleCount":1039,"mean":0.062023869104908654,"p95":0.0967,"min":0.0355,"max":0.2028},"frameTimeMs":{"sampleCount":1039,"mean":9.628997877225839,"p95":11.26759871840477,"min":7.142499089241028,"max":137.17089593410492}},"summarySha256":"560d184b83705443014f7b48a1724c372988b2ce5fc3d5ebfdaa8c52d2b94f4b","csvSha256":"636cc6beaf20b11208520c7b135736c6c8b91336ba52d9d819a8fb4df28b9206"},{"runId":"formal-hero-arena-hud-refresh-20260831-203159-run-06-optimized","variant":"Optimized","sampleCount":1079,"metrics":{"csvUITimeMs":{"sampleCount":1079,"mean":1.5192962928637626,"p95":2.051,"min":0.9699,"max":3.1721},"csvHeroArenaHUDRefreshCountPerSecond":{"sampleCount":1,"mean":9.6,"p95":9.6,"min":9.6,"max":9.6},"possessedAIPawnCount":{"sampleCount":1079,"mean":9,"p95":9,"min":9,"max":9},"csvHeroArenaHUDRefreshTimeMs":{"sampleCount":1079,"mean":0.005529101019462466,"p95":0.0532,"min":0,"max":0.1364},"frameTimeMs":{"sampleCount":1079,"mean":9.272901671036623,"p95":11.176198720932007,"min":6.800901144742966,"max":77.37450301647186}},"summarySha256":"84dc40e5cef25b0bd87586fb2efeba6218c56208d3883d5e7b63eff5a90de904","csvSha256":"102fe09e2c3e5a42975c87440accdffa239315dd07c9019cd98eca0f827e37d2"}]}}'),xC={cases:TC};function Ig({study:a,locale:i}){const l=xC.cases[a],s=i==="zh",u=p=>p.toFixed(Math.abs(p)<.1?4:2),m=[...l.metrics].sort((p,v)=>+(v.metric==="frameTimeMs")-+(p.metric==="frameTimeMs")),h=(p,v)=>{const g=l.runs.filter(b=>b.variant===v).map(b=>b.metrics[p.metric][p.statistic]);return`${u(Math.min(...g))}–${u(Math.max(...g))}`};return f.jsxs("section",{className:"performance-evidence","aria-label":s?"实际运行结果对比":"Recorded runtime comparison",children:[f.jsxs("header",{children:[f.jsx("p",{className:"performance-kicker",children:s?"同机实测 · 改动前 3 次 / 改动后 3 次":"Same machine · 3 baseline / 3 optimized runs"}),f.jsx("h3",{children:a==="animation"?s?"动画开销下降，整帧仍有其他负载":"Lower animation cost within a larger frame":s?"常规刷新减少，整帧耗时基本持平":"Fewer routine updates, similar frame time"}),f.jsx("p",{children:s?"下方为 2026-08-31 的运行记录；各组三次统计值取中位数。":"Recorded on 2026-08-31. Each value is the median of three per-run statistics."})]}),f.jsx("div",{className:"performance-metrics",children:m.map(p=>f.jsxs("figure",{children:[f.jsxs("figcaption",{children:[p.label[i]," ",f.jsxs("strong",{className:Math.abs(p.changePercent)<1?"is-flat":"",children:[u(p.optimized-p.baseline),f.jsx("small",{children:"ms"})]}),f.jsxs("span",{className:"performance-relative-change",children:[p.changePercent.toFixed(1),"% · ",p.metric==="frameTimeMs"?s?"整帧指标":"Whole-frame metric":s?"局部指标":"Local metric",Math.abs(p.changePercent)<1&&(s?" · 基本持平":" · Essentially unchanged")]})]}),["baseline","optimized"].map(v=>f.jsxs("div",{className:`performance-bar-row ${v}`,children:[f.jsx("span",{children:v==="baseline"?s?"改动前":"Before":s?"改动后":"After"}),f.jsx("div",{className:"performance-bar-track","aria-hidden":"true",children:f.jsx("div",{style:{width:`${p[v]/Math.max(p.baseline,p.optimized)*100}%`}})}),f.jsxs("b",{children:[u(p[v]),f.jsx("small",{children:" ms"})]})]},v)),f.jsxs("p",{className:"performance-range",children:[s?"三轮范围":"Three-run range",f.jsx("br",{}),s?"改动前":"Before"," ",h(p,"Baseline")," ms",f.jsx("br",{}),s?"改动后":"After"," ",h(p,"Optimized")," ms"]})]},`${p.metric}-${p.statistic}`))}),f.jsx("p",{className:"performance-reading-note",children:s?"每项使用独立的零起点刻度；耗时越低越好。P95 表示每次采样中 95% 的帧不超过该耗时，再对三次结果取中位数。":"Each metric has its own zero-based scale. Lower is better. P95 is calculated per run, then the median of three runs is shown."}),a==="animation"&&f.jsxs("ol",{className:"performance-policy","aria-label":s?"动画更新距离策略":"Distance-based animation policy",children:[f.jsxs("li",{children:[f.jsx("span",{children:s?"本地角色 / 12 m 内":"Local player / within 12 m"}),f.jsx("strong",{children:s?"保留完整更新":"Full updates"}),f.jsx("p",{children:s?"近景动作与玩家控制优先。":"Prioritize the player and nearby motion."})]}),f.jsxs("li",{children:[f.jsx("span",{children:s?"12–24 m 非本地角色":"Non-local characters at 12–24 m"}),f.jsx("strong",{children:s?"启用 URO":"Enable URO"}),f.jsx("p",{children:s?"降低更新频率；不可见时仅更新 Montage。":"Reduce update frequency; tick only montages while hidden."})]}),f.jsxs("li",{children:[f.jsx("span",{children:s?"24 m 外非本地角色":"Non-local characters beyond 24 m"}),f.jsx("strong",{children:s?"关闭后处理动画":"Disable post-process animation"}),f.jsx("p",{children:s?"省去 FootPlant IK；本轮资产仅有 LOD0，未减少网格细节。":"Skip FootPlant IK. Current meshes have only LOD0; no mesh detail reduction."})]})]}),f.jsxs("details",{className:"performance-details",children:[f.jsx("summary",{children:s?"实验条件与六次采样":"Conditions and all six runs"}),f.jsxs("dl",{children:[f.jsxs("div",{children:[f.jsx("dt",{children:s?"硬件":"Hardware"}),f.jsx("dd",{children:"i7-13700F · RTX 4080"})]}),f.jsxs("div",{children:[f.jsx("dt",{children:s?"环境":"Environment"}),f.jsx("dd",{children:"UE 5.7.4 · D3D12 · 1280 × 720"})]}),f.jsxs("div",{children:[f.jsx("dt",{children:s?"场景":"Scene"}),f.jsxs("dd",{children:[l.conditions.map," · ",l.conditions.targetAgentCount," AI · Seed ",l.conditions.seed]})]}),f.jsxs("div",{children:[f.jsx("dt",{children:s?"每轮时长":"Per run"}),f.jsx("dd",{children:s?`预热 ${l.conditions.warmupSeconds} s / 采样 ${l.conditions.measurementSeconds} s`:`${l.conditions.warmupSeconds} s warmup / ${l.conditions.measurementSeconds} s capture`})]}),f.jsxs("div",{children:[f.jsx("dt",{children:s?"源码版本":"Source revision"}),f.jsx("dd",{children:f.jsx("code",{children:l.conditions.sourceRevision})})]})]}),f.jsx("div",{className:"performance-run-table",tabIndex:0,role:"region","aria-label":s?"六次采样明细，可横向滚动":"Six-run details, horizontally scrollable",children:f.jsxs("table",{children:[f.jsx("caption",{children:s?"ABBAAB 顺序；表中每行是一次运行的统计值。":"ABBAAB order; each row contains statistics from one run."}),f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:s?"运行":"Run"}),l.metrics.map(p=>f.jsxs("th",{children:[p.label[i]," (ms)"]},`${p.metric}-${p.statistic}`))]})}),f.jsx("tbody",{children:l.runs.map((p,v)=>f.jsxs("tr",{children:[f.jsxs("th",{scope:"row",children:[v+1," · ",p.variant==="Baseline"?s?"改动前":"Before":s?"改动后":"After"]}),l.metrics.map(g=>{const b=p.metrics;return f.jsx("td",{children:u(b[g.metric][g.statistic])},`${g.metric}-${g.statistic}`)})]},p.runId))})]})}),f.jsx("a",{href:"/media/repositories/lyra-hero-arena/performance-results.json",target:"_blank",rel:"noreferrer",children:s?"查看运行摘要与原文件指纹 ↗":"Run summaries and source hashes ↗"})]})]})}const EC=[{stage:"near",sampleGameTime:10.600087318569422,captureGameTime:10.577416516840458,captureFrame:801,actualAI:12,actor:{name:"B_Hero_ShooterMannequin_C_1",position:"X=-2359.195 Y=-788.726 Z=142.150",distance:614.0341634136648,speed:199.9999999999988,ai:!0,protected:!0,uro:!1,postProcessDisabled:!1,recentlyRendered:!0,lod:0,availableLODs:1,updateRate:3,evaluationRate:3},image:"/media/repositories/lyra-hero-arena/animation-observer/near.jpg"},{stage:"middle",sampleGameTime:13.832666117697954,captureGameTime:13.811564017087221,captureFrame:1102,actualAI:12,actor:{name:"B_Hero_ShooterMannequin_C_1",position:"X=-1834.477 Y=-755.508 Z=142.150",distance:1804.3350575766133,speed:0,ai:!0,protected:!1,uro:!0,postProcessDisabled:!1,recentlyRendered:!0,lod:0,availableLODs:1,updateRate:3,evaluationRate:3},image:"/media/repositories/lyra-hero-arena/animation-observer/middle.jpg"},{stage:"far",sampleGameTime:17.07833841815591,captureGameTime:17.058009017258883,captureFrame:1406,actualAI:12,actor:{name:"B_Hero_ShooterMannequin_C_1",position:"X=-2295.914 Y=-653.028 Z=142.150",distance:2804.97599992962,speed:249.56019587682133,ai:!0,protected:!1,uro:!0,postProcessDisabled:!0,recentlyRendered:!0,lod:0,availableLODs:1,updateRate:3,evaluationRate:3},image:"/media/repositories/lyra-hero-arena/animation-observer/far.jpg"},{stage:"return",sampleGameTime:20.32946041598916,captureGameTime:20.306633416563272,captureFrame:1700,actualAI:12,actor:{name:"B_Hero_ShooterMannequin_C_1",position:"X=-1991.823 Y=-948.220 Z=142.150",distance:608.3724655395007,speed:212.51129150390378,ai:!0,protected:!0,uro:!1,postProcessDisabled:!1,recentlyRendered:!0,lod:0,availableLODs:1,updateRate:3,evaluationRate:3},image:"/media/repositories/lyra-hero-arena/animation-observer/return.jpg"}],qg={samples:EC};function UC({locale:a}){const i=a==="zh",[l,s]=F.useState(0),u=i?["近处","中距离","远处","返回近处"]:["Near","Middle","Far","Return"],m=qg.samples[l],h=m.actor;return f.jsxs(f.Fragment,{children:[f.jsxs("section",{className:"animation-observer animation-ramp","aria-label":i?"坡道连续行走与动画距离分级":"Continuous slope walk with animation distance tiers",children:[f.jsxs("p",{className:"performance-kicker",children:["2026-11-01 · UE 5.7 · ",i?"单角色连续观察":"Continuous character observation"]}),f.jsx("h3",{children:i?"坡道往返：动画分级与足部后处理":"Slope traversal: animation tiers and foot processing"}),f.jsx("video",{controls:!0,playsInline:!0,preload:"metadata",poster:"/media/repositories/lyra-hero-arena/animation-observer/ramp-poster.png",src:"/media/repositories/lyra-hero-arena/animation-observer/ramp-walk.mp4","aria-label":i?"同一角色在20度坡道连续往返的实机录像":"One character walking continuously on a 20-degree ramp"}),f.jsx("p",{children:i?"同一角色在 20° 坡道上持续往返，由 CharacterMovement 处理移动与碰撞。相机依次位于约 6、18、28 米，再返回近处；长焦保持角色可辨，状态说明来自运行采样。":"CharacterMovement drives a continuous walk on a 20-degree ramp. The camera moves through approximately 6, 18 and 28 metres, then returns. Telephoto framing keeps the actor readable; labels use recorded runtime state."}),f.jsxs("p",{className:"observer-note",children:[i?"约 22 秒，原生帧按游戏时间回放，中文状态标出采样时刻。这组坡道观察与下方 200 AI 性能计时分别记录。":"About 22 seconds of native frames replayed by game time, with state sample timestamps. This slope observation is recorded separately from the 200-AI timings below."," ",f.jsx("a",{href:"/media/repositories/lyra-hero-arena/animation-observer/ramp-recording.json",target:"_blank",rel:"noreferrer",children:i?"录像与状态记录 ↗":"Recording data ↗"})]})]}),f.jsxs("section",{className:"animation-observer animation-ramp","aria-label":i?"模块化角色姿态共享":"Modular character pose sharing",children:[f.jsxs("p",{className:"performance-kicker",children:["UE 5.7 · Leader Pose · ",i?"原创骨骼样例":"Original skeletal fixture"]}),f.jsx("h3",{children:i?"三个角色部件，共用一套动画姿态":"Three character parts sharing one pose"}),f.jsx("video",{controls:!0,playsInline:!0,preload:"metadata",poster:"/media/repositories/lyra-hero-arena/modular-pose/poster.jpeg",src:"/media/repositories/lyra-hero-arena/modular-pose/modular-pose.mp4","aria-label":i?"独立动画与Leader Pose连续切换实录":"Live switching between independent animation and Leader Pose"}),f.jsx("p",{children:i?"头、上身、下身使用相同骨架。独立模式分别更新三个动画实例；共享模式由一个隐藏骨架计算姿态，三个可见部件读取结果。切换保留动画时间，画面持续运动。":"Head, upper body and lower body share a skeleton. Independent mode updates three animation instances. Shared mode evaluates one hidden skeleton and supplies its pose to all visible parts. Switching preserves animation time."}),f.jsxs("dl",{className:"observer-state",children:[f.jsxs("div",{children:[f.jsx("dt",{children:i?"动画实例":"Animation instances"}),f.jsx("dd",{children:"3 → 1"})]}),f.jsxs("div",{children:[f.jsx("dt",{children:i?"可见部件":"Visible parts"}),f.jsx("dd",{children:i?"始终 3 个":"3 throughout"})]}),f.jsxs("div",{children:[f.jsx("dt",{children:i?"LOD0 材质分段":"LOD0 sections"}),f.jsx("dd",{children:i?"始终 7 个":"7 throughout"})]})]}),f.jsxs("p",{className:"observer-note",children:[i?"约 12 秒实录；实例数来自运行组件，分段数来自资产。共享姿态保留分件渲染，本例未测量耗时收益。机器人模型、骨架、动作和切换工具均为本项目制作。":"About 12 seconds of native capture. Instance counts come from live components; section counts come from assets. Separate part rendering remains, and no timing gain was measured. Robot geometry, rig, animation and switching tools are original."," ",f.jsx("a",{href:"https://github.com/Ubik42/LyraHeroArena/blob/main/docs/模块化角色姿态共享.md",target:"_blank",rel:"noreferrer",children:i?"实现与样例资产 ↗":"Implementation and assets ↗"})," · ",f.jsx("a",{href:"/media/repositories/lyra-hero-arena/modular-pose/recording.json",target:"_blank",rel:"noreferrer",children:i?"运行记录 ↗":"Runtime record ↗"})]})]}),f.jsxs("details",{className:"animation-records",children:[f.jsx("summary",{children:i?"四阶段状态快照 · 12 AI 观察场景":"Four state snapshots · 12-AI observation"}),f.jsxs("section",{className:"animation-observer","aria-label":i?"同一角色的距离策略切换":"One character across distance tiers",children:[f.jsx("p",{className:"performance-kicker",children:"2026-11-01 · UE 5.7 · 12 AI"}),f.jsx("h3",{children:i?"同一个角色，从完整更新到远景裁剪":"One character: full updates to distant trimming"}),f.jsx("p",{children:i?"跟随画面中央的蓝色角色，拉远相机后收窄视角，观察同一角色在不同距离下的策略。状态直接读取运行中的骨骼网格组件。":"The camera follows the central blue character, narrowing its field of view at distance. State is read from its live skeletal mesh component."}),f.jsx("div",{className:"performance-chapters",children:qg.samples.map((p,v)=>f.jsxs("button",{type:"button","aria-pressed":l===v,onClick:()=>s(v),children:[f.jsxs("span",{children:[(p.actor.distance/100).toFixed(1)," m"]}),u[v]]},p.stage))}),f.jsxs("figure",{children:[f.jsx("img",{src:m.image,alt:i?`${u[l]}的角色运行画面`:`Character at ${u[l]} distance`,width:"1024",height:"576",loading:"lazy"}),f.jsxs("figcaption",{children:[i?"游戏时间":"Game time"," ",m.captureGameTime.toFixed(2)," s · ",i?"角色编号":"Actor"," 1 · LOD ",h.lod]})]}),f.jsxs("dl",{className:"observer-state","aria-live":"polite",children:[f.jsxs("div",{children:[f.jsx("dt",{children:i?"动画更新":"Animation updates"}),f.jsx("dd",{children:h.uro?i?`URO · 每 ${h.updateRate} 帧更新`:`URO · every ${h.updateRate} frames`:i?"完整频率 · URO 关闭":"Full rate · URO off"})]}),f.jsxs("div",{children:[f.jsx("dt",{children:i?"足部贴地后处理":"Foot-plant post process"}),f.jsx("dd",{children:h.postProcessDisabled?i?"远景关闭":"Disabled at distance":i?"开启":"Enabled"})]}),f.jsxs("div",{children:[f.jsx("dt",{children:i?"几何细节":"Geometry"}),f.jsx("dd",{children:i?"始终 LOD0 · 未减面":"LOD0 throughout"})]})]}),f.jsxs("p",{className:"observer-note",children:[i?"这是距离策略的状态快照；截图与状态在相邻帧采集。远处仍保留原模型，返回近处后恢复完整动画。此组观察不计入下方历史性能数据。":"State snapshots on adjacent frames, separate from the historical timings below. Original geometry is retained and full animation returns nearby."," ",f.jsx("a",{href:"/media/repositories/lyra-hero-arena/animation-observer/observation.json",target:"_blank",rel:"noreferrer",children:i?"查看状态记录 ↗":"State record ↗"})]})]})]})]})}function zC({locale:a}){const i=a==="zh",l=F.useRef(null),[s,u]=F.useState(0),m=i?["全景 · 人群负载","近景 · 角色动作","局部放大 · 更新细节"]:["Wide · crowd load","Close · character motion","Crop · motion detail"];return f.jsxs(f.Fragment,{children:[f.jsx(UC,{locale:a}),f.jsxs("details",{className:"animation-records",children:[f.jsx("summary",{children:i?"200 AI 历史录像 · 全景与近景对照":"Historical 200-AI footage · wide and close views"}),f.jsxs("section",{className:"animation-quality","aria-label":i?"动画质量实机对照":"Recorded animation quality comparison",children:[f.jsx("p",{className:"performance-kicker",children:i?"2026-10-17 · 200 AI 实机对照":"2026-10-17 · 200 AI capture"}),f.jsx("h3",{children:i?"近处保留完整动画，远处分配更新预算":"Full animation nearby, reduced updates at distance"}),f.jsx("video",{ref:l,controls:!0,playsInline:!0,preload:"metadata",onTimeUpdate:()=>u(Math.min(2,Math.floor((l.current?.currentTime??0)/5))),poster:"/media/repositories/lyra-hero-arena/animation-quality-poster.jpg","aria-label":i?"200 AI 动画质量并排对照":"200 AI animation comparison",src:"/media/repositories/lyra-hero-arena/animation-quality.mp4"}),f.jsx("div",{className:"performance-chapters","aria-label":i?"录像章节":"Video chapters",children:m.map((h,p)=>f.jsxs("button",{type:"button","aria-pressed":s===p,onClick:()=>{l.current&&(l.current.currentTime=p*5,u(p))},children:[f.jsxs("span",{children:["0:",String(p*5).padStart(2,"0")]}),h]},h))}),f.jsxs("div",{className:"performance-case-context",children:[f.jsxs("p",{children:[f.jsx("strong",{children:i?"调整内容":"Change"}),i?"近景保留完整更新；中远景启用 URO，远景关闭足部贴地后处理。":"Full updates nearby; URO and reduced foot-plant processing at distance."]}),f.jsxs("p",{children:[f.jsx("strong",{children:i?"画面取舍":"Tradeoff"}),i?"远景姿态更新更稀疏。当前资产只有 LOD0，几何细节保持不变。":"Sparser distant pose updates. Assets have only LOD0; geometry is unchanged."]})]}),f.jsx("p",{children:i?"全景、近景及全景局部放大，共 15 秒。两次独立单机运行，按游戏时间回放；下方性能数字来自另一次独立采样。":"Wide, close and enlarged wide views, 15 seconds. Independent standalone runs replayed by game time. The performance figures below come from a separate capture."})]})]})]})}function MC({locale:a}){const i=a==="zh";return f.jsxs("section",{className:"animation-quality hud-quality","aria-label":i?"战术 HUD 更新实机对照":"Recorded tactical HUD comparison",children:[f.jsx("p",{className:"performance-kicker",children:i?"2026-10-17 · 同组输入实机对照":"2026-10-17 · Matched input sequence"}),f.jsx("h3",{children:i?"减少重复刷新，关键提示独立触发":"Fewer repeated refreshes, separate critical notifications"}),f.jsx("video",{controls:!0,playsInline:!0,preload:"metadata",poster:"/media/repositories/lyra-hero-arena/hud-quality-poster.jpg","aria-label":i?"战术 HUD 每帧与分频更新对照":"Per-frame and throttled HUD updates",src:"/media/repositories/lyra-hero-arena/hud-quality.mp4"}),f.jsxs("div",{className:"performance-case-context",children:[f.jsxs("p",{children:[f.jsx("strong",{children:i?"常规状态":"Routine state"}),i?"冷却、状态与目标信息按 10 Hz 上限更新，相同文字跳过 SetText。":"Cooldowns, state and target information update at up to 10 Hz; unchanged text skips SetText."]}),f.jsxs("p",{children:[f.jsx("strong",{children:i?"关键反馈":"Critical feedback"}),i?"英雄切换、重生与技能失败由消息触发；冷却文字允许等待下一次刷新。":"Hero changes, respawns and ability failures use messages; cooldown text can wait until the next refresh."]})]}),f.jsx("p",{children:i?"12.5 秒并排实机，附原生技能栏放大。相同窗口内状态刷新 370 次与 103 次；计数只表示该函数调用，不代表整帧性能。":"12.5 seconds of side-by-side footage with enlarged native skill bars. 370 and 103 state refresh calls in equal windows; these counts are not frame-time measurements."})]})}const Fg=[{image:"editor-before",zh:"修改前",en:"Before",value:"Y = 0.35",caption:{zh:"工程中的原始台阶。世界大纲选中 02 Training Step，右侧检查器显示位置。",en:"The original step, selected in the outliner with its position visible in the inspector."}},{image:"editor-after",zh:"保存后",en:"After save",value:"Y = 1.35",caption:{zh:"命令提交、撤销、重做并保存后，重新打开同一工程。台阶抬高，检查器与场景保持一致。",en:"The saved project reopened after apply, undo and redo. The raised step and inspector agree."}},{image:"player",zh:"独立运行",en:"Packaged player",value:"Windows Player",caption:{zh:"从打包目录启动 Player，读取包内场景与 C# 程序集，运行移动和跳跃输入。画面不带编辑器面板。",en:"The packaged player loads its scene and C# assembly, with movement and jump input. No editor panels are present."}}];function DC({locale:a}){const[i,l]=F.useState(0),s=Fg[i],u=a==="zh";return f.jsxs("section",{className:"noemancer-workflow","aria-labelledby":"noemancer-workflow-title",children:[f.jsxs("header",{children:[f.jsx("p",{children:u?"实际工程 · 2026-10-17 · D3D12":"Project capture · 2026-10-17 · D3D12"}),f.jsx("h3",{id:"noemancer-workflow-title",children:u?"一个台阶，从编辑到独立运行":"One platform, from editing to a player build"}),f.jsx("p",{children:u?"场景变更、中文 HUD 与 C# 玩法共用同一个工程。":"Scene changes, a Chinese HUD and C# gameplay in one project."})]}),f.jsxs("figure",{className:"noemancer-motion",children:[f.jsxs("video",{controls:!0,playsInline:!0,preload:"metadata",width:"1600",height:"1140",poster:"/media/repositories/noemancer-workflow/motion-poster.png","aria-label":u?"Noemancer 编辑、撤销重做、保存及独立运行连续演示":"Noemancer editing, undo, redo, save and packaged player demonstration",children:[f.jsx("source",{src:"/media/repositories/noemancer-workflow/motion.mp4",type:"video/mp4"}),f.jsx("a",{href:"/media/repositories/noemancer-workflow/motion.mp4",children:u?"打开演示视频":"Open video"})]}),f.jsxs("figcaption",{children:[f.jsx("strong",{children:u?"23 秒连续流程":"23-second workflow"}),u?"同一 Editor 中试玩、修改台阶、撤销重做与保存，再启动打包后的独立 Player。自动操作、固定 60 Hz 游戏步长、无声；中间 2 秒停帧用于打包转场，不代表真实打包耗时。":"Play, edit, undo, redo and save in one Editor, then launch the packaged Player. Scripted input, fixed 60 Hz simulation, silent. The two-second packaging transition does not represent build time."]})]}),f.jsx("div",{className:"noemancer-workflow-switch",role:"group","aria-label":u?"工作流画面":"Workflow views",children:Fg.map((m,h)=>f.jsxs("button",{type:"button","aria-pressed":i===h,onClick:()=>l(h),children:[f.jsxs("span",{"aria-hidden":"true",children:["0",h+1]}),m[a],f.jsx("small",{children:m.value})]},m.image))}),f.jsxs("figure",{className:"noemancer-stills",children:[f.jsx("a",{href:`/media/repositories/noemancer-workflow/${s.image}.webp`,target:"_blank",rel:"noreferrer","aria-label":u?`${s.zh}：打开原尺寸画面`:`Open full-size ${s.en.toLowerCase()} image`,children:f.jsx("img",{src:`/media/repositories/noemancer-workflow/${s.image}.webp`,width:"1600",height:"900",alt:s.caption[a]})}),f.jsxs("figcaption",{"aria-live":"polite",children:[f.jsx("strong",{children:s.value}),s.caption[a]]})]}),f.jsxs("details",{children:[f.jsx("summary",{children:u?"修改如何校验与恢复":"Validation and recovery"}),f.jsxs("ol",{children:[f.jsx("li",{children:u?"预检查不修改场景；正式提交后，旧版本请求返回版本冲突。":"Dry-run leaves the scene untouched; a stale request is rejected after commit."}),f.jsx("li",{children:u?"撤销恢复完整场景，重做后保存；重新打开工程确认位置。":"Undo restores the complete scene; redo and save persist the change."}),f.jsx("li",{children:u?"HUD 的五个中文标签通过 UI 源文档事务保存并热应用。":"Five Chinese HUD labels are persisted and hot-applied through UI source transactions."})]}),f.jsx("p",{children:u?"录像来自原生 D3D12 连续帧。实时命令连接当前 Editor，在同一编辑世界中修改、撤销、重做并保存；打包与 Player 为后续独立运行。以上三张静态截图保留早期独立命令会话的记录。两批均使用工程副本，原工程保持不变。":"The video uses native D3D12 frames and live commands in the active Editor. Packaging and Player execution follow separately. The three stills preserve the earlier isolated command-session demonstration. Both runs use project copies; the original remains unchanged."}),f.jsx("a",{href:"/media/repositories/noemancer-workflow/motion.json",target:"_blank",rel:"noreferrer",children:u?"连续演示的操作与保存记录 ↗":"Video operations and save record ↗"})," · ",f.jsx("a",{href:"/media/repositories/noemancer-workflow/results.json",target:"_blank",rel:"noreferrer",children:u?"运行摘要与文件指纹 ↗":"Run summary and file hashes ↗"})]})]})}const RC={"/media/projects/hov/published-title.png":"/media/covers/published-title-e373dc99e0.webp","/media/repositories/siggraph-physics-lab/cover.png":"/media/covers/cover-19ba2599bf.webp","/media/repositories/major-updates/noemancer-sponza-atrium.webp":"/media/covers/noemancer-sponza-atrium-14c7f13c7d.webp","/media/repositories/lyra-hero-arena/striker-combat-poster.jpg":"/media/covers/striker-combat-poster-d9dcdc60d1.webp","/media/repositories/lyra-hero-arena/animation-crowd.jpg":"/media/covers/animation-crowd-e17f74645e.webp","/media/repositories/resonance-forge/keybed.png":"/media/covers/keybed-a0c8a6c4ea.webp","/media/repositories/production-tools/unreal-auditor-current.png":"/media/covers/unreal-auditor-current-d631ffb2e4.webp","/media/projects/fathom-task.png":"/media/covers/fathom-task-c3f9718594.webp","/media/projects/through-other-eyes-cover.webp":"/media/covers/through-other-eyes-cover-c3fdb65c21.webp","/media/projects/retro-arcade-shader.png":"/media/covers/retro-arcade-shader-02a7dba4ac.webp","/media/projects/digital-twin.png":"/media/covers/digital-twin-9a5168db23.webp","/media/repositories/production-tools/photon-ai-internship-cover.png":"/media/covers/photon-ai-internship-cover-24623ff85e.webp","/media/repositories/production-tools/mayascope-project-queue.png":"/media/covers/mayascope-project-queue-5d9510f797.webp","/media/repositories/production-tools/mayacraft-twist-verified.png":"/media/covers/mayacraft-twist-verified-21acd630b0.webp","/media/repositories/production-tools/maya-scene-overview.png":"/media/covers/maya-scene-overview-fad647760a.webp","/media/repositories/production-tools/blender-toolsmith-agent.png":"/media/covers/blender-toolsmith-agent-46b58530df.webp","/media/repositories/major-updates/artflow-scene-lab-3d.png":"/media/covers/artflow-scene-lab-3d-4197b31839.webp","/media/artstation/stylized-road-material.jpg":"/media/covers/stylized-road-material-1d352aecaa.webp","/media/artstation/rigging-animation.jpg":"/media/covers/rigging-animation-90eae97f36.webp","/media/artstation/unity-sdf-shader.jpg":"/media/covers/unity-sdf-shader-d878786d62.webp","/media/artstation/houdini-lighting.jpg":"/media/covers/houdini-lighting-87bc775478.webp","/media/artstation/unreal-stylized-world.jpg":"/media/covers/unreal-stylized-world-b815a4efd9.webp","/media/artstation/houdini-cluster.jpg":"/media/covers/houdini-cluster-fb09a6fb4b.webp","/media/artstation/unreal-vfx.jpg":"/media/covers/unreal-vfx-67ab708c50.webp","/media/artstation/houdini-pcg-tower.jpg":"/media/covers/houdini-pcg-tower-f38c24f1c3.webp","/media/repositories/gameops-insight-agent/golden.png":"/media/covers/golden-17562a086a.webp","/media/repositories/tinyhttpd/github-readme.png":"/media/covers/github-readme-a6a7e78f16.webp","/media/repositories/xv6-riscv-labs/grade-report.png":"/media/covers/grade-report-9c9db6a3ec.webp","/media/repositories/levelwright-agent/observation.png":"/media/covers/observation-31a71f4528.webp","/media/repositories/comfyui-workflow-lab/reference-recommendation.png":"/media/covers/reference-recommendation-19e5baa777.webp"},jC=a=>RC[a]??a,I0=[{id:"all",zh:"全部作品",en:"All work"},{id:"engine-games",zh:"引擎与游戏",en:"Engines & games"},{id:"pipeline",zh:"工具管线",en:"Tool pipelines"},{id:"ai-agent",zh:"AIGC & Agent",en:"AIGC & Agent"},{id:"general-ta",zh:"通用技术美术技能",en:"General technical art"},{id:"other-tools",zh:"部分其他工具",en:"Selected other tools"}],Xg=new Map(["pcg-workbench","rez-studio-launcher","advanced-skeleton-python-refactor","art-pipeline-skill","maya-plugin","internship-art-pipeline","maya-garment-preparation","mayascope","mayacraft","asset-delivery-organizer","maya-scene-checker","blender-toolsmith-agent"].map((a,i)=>[a,i])),Yg=new Map(["lyra-hero-arena","siggraph-physics-lab","noemancer","noemancer-software-rasterizer","aita-schooling","house-of-vampires","lyra-performance-lab","fathom","aita-toon","aita-wind","aita-cloth","aita-cosmos","aita-fog","aita-fracture","ue-performance-workbench","vulkan-renderpass-lab","ue-mobile-scene-lab","resonance-forge","unreal-asset-batch-auditor"].map((a,i)=>[a,i])),Kg=new Map(["als-director","animation-aigc-lab","artflow-agent","comfyui-production-nodes"].map((a,i)=>[a,i])),Qg=new Map([["engine-games",0],["pipeline",1],["ai-agent",2],["general-ta",3],["other-tools",4]]);function ou(){const a=new URLSearchParams(window.location.search);return{category:I0.find(l=>l.id===a.get("category"))?.id??"all",query:a.get("q")??""}}function kC(){const{locale:a,copy:i}=An(),l=L0()??!1,[s,u]=F.useState(()=>ou().category),[m,h]=F.useState(()=>ou().query),[p,v]=F.useState(null),g=F.useRef(null),b=F.useMemo(()=>[...K5.map(D=>({kind:"repository",id:D.id,category:D.category,title:D.title,label:Vt(D.categoryLabel,a),summary:Vt(D.summary,a),cover:D.cover,tags:D.tags,value:D})),...Q5.map(D=>({kind:"visual",id:D.id,category:D.portfolioCategory,title:Vt(D.title,a),label:Vt(D.category,a),summary:Vt(D.summary,a),cover:D.cover,tags:D.tools,value:D})),...C5.map(D=>({kind:"project",id:D.id,category:D.portfolioCategory,title:D.title,label:Kn(D.category,a),summary:Kn(D.summary,a),cover:D.images[0].src,tags:D.stack,value:D}))].map((D,G)=>({item:D,sourceIndex:G})).sort((D,G)=>{const W=(Qg.get(D.item.category)??Number.MAX_SAFE_INTEGER)-(Qg.get(G.item.category)??Number.MAX_SAFE_INTEGER);return W!==0?W:D.item.category==="pipeline"?(Xg.get(D.item.id)??Number.MAX_SAFE_INTEGER)-(Xg.get(G.item.id)??Number.MAX_SAFE_INTEGER):D.item.category==="engine-games"?D.item.id==="ray-tracing-hardware"?1:G.item.id==="ray-tracing-hardware"?-1:(Yg.get(D.item.id)??Number.MAX_SAFE_INTEGER)-(Yg.get(G.item.id)??Number.MAX_SAFE_INTEGER):D.item.category==="ai-agent"?(Kg.get(D.item.id)??Number.MAX_SAFE_INTEGER)-(Kg.get(G.item.id)??Number.MAX_SAFE_INTEGER):D.sourceIndex-G.sourceIndex}).map(({item:D})=>D),[a]),S=m.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean),w=b.filter(R=>(s==="all"||R.category===s)&&S.every(D=>[R.title,R.summary,R.label,...R.tags].join(" ").toLocaleLowerCase().includes(D))),k=w.findIndex(R=>R.id===p?.id),z=(R,D,G=!1)=>{u(R),h(D);const W=new URL(window.location.href);R==="all"?W.searchParams.delete("category"):W.searchParams.set("category",R),D.trim()?W.searchParams.set("q",D):W.searchParams.delete("q"),window.history[G?"pushState":"replaceState"]({},"",`${W.pathname}${W.search}${W.hash}`)},H=(R,D="replace")=>{const G=new URL(window.location.href);R?G.searchParams.set("work",R):G.searchParams.delete("work"),window.history[D==="push"?"pushState":"replaceState"]({},"",`${G.pathname}${G.search}${G.hash}`)},N=R=>{H(R.id,"push"),v(R)},_=()=>{H(null),v(null)};return F.useEffect(()=>{const R=()=>{const D=ou();u(D.category),h(D.query);const G=new URLSearchParams(window.location.search).get("work");G===Sn.id?v({kind:"repository",id:Sn.id,category:Sn.category,title:Sn.title,label:Vt(Sn.categoryLabel,a),summary:Vt(Sn.summary,a),cover:Sn.cover,tags:Sn.tags,value:Sn}):v(G?b.find(W=>W.id===G)??null:null)};return R(),window.addEventListener("popstate",R),()=>window.removeEventListener("popstate",R)},[b,a]),F.useEffect(()=>{const R=g.current;if(R)return p?(R.open||R.showModal(),R.scrollTop=0,R.querySelector("#project-detail-title")?.focus({preventScroll:!0}),document.body.classList.add("has-project-dialog")):(R.open&&R.close(),document.body.classList.remove("has-project-dialog")),()=>document.body.classList.remove("has-project-dialog")},[p]),F.useEffect(()=>{document.title=p?`${p.title} | ${a==="zh"?"沈裕焱作品集":"Lucas Shen"}`:i.meta.title;const R=document.querySelector('meta[name="description"]');R&&(R.content=p?.summary??i.meta.description)},[p,i.meta.title,i.meta.description,a]),f.jsxs("section",{id:"portfolio",className:"portfolio-gallery","aria-labelledby":"portfolio-title",children:[f.jsxs("header",{className:"portfolio-gallery-header",children:[f.jsxs("div",{children:[f.jsx("h2",{id:"portfolio-title",children:a==="zh"?"作品":"Work"}),f.jsx("span",{children:String(b.length).padStart(2,"0")})]}),f.jsx("p",{children:a==="zh"?"完整图文、演示与源码链接集中收录于各项目详情。":"Full case studies, demos, and source links are collected in each project detail."})]}),f.jsx("div",{className:"portfolio-filters",role:"group","aria-label":a==="zh"?"筛选作品":"Filter work",children:I0.map(R=>f.jsxs("button",{type:"button","data-filter":R.id,className:s===R.id?"is-active":"","aria-pressed":s===R.id,onClick:()=>z(R.id,m,!0),children:[f.jsx("span",{children:a==="zh"?R.zh:R.en}),f.jsx("small",{children:R.id==="all"?b.length:b.filter(D=>D.category===R.id).length})]},R.id))}),f.jsxs("div",{className:"portfolio-search-row",children:[f.jsx("p",{"aria-live":"polite","aria-atomic":"true",children:a==="zh"?`${w.length} 件作品`:`${w.length} works`}),f.jsxs("div",{className:"portfolio-search",children:[f.jsx("label",{htmlFor:"work-search",children:a==="zh"?"搜索作品":"Search work"}),f.jsx("input",{id:"work-search",type:"search",value:m,placeholder:a==="zh"?"名称、技术或引擎，如 GAS / 动画 / C++":"Title, technology or engine",onChange:R=>z(s,R.target.value)}),m&&f.jsx("button",{type:"button",onClick:()=>z(s,""),"aria-label":a==="zh"?"清空搜索":"Clear search",children:"×"})]})]}),w.length===0&&f.jsxs("div",{className:"portfolio-empty",children:[f.jsx("h3",{children:a==="zh"?"没有匹配的作品":"No matching work"}),f.jsx("p",{children:a==="zh"?"可缩短关键词，或清除分类与搜索条件。":"Try a shorter query or clear the filters."}),f.jsx("button",{type:"button",onClick:()=>z("all",""),children:a==="zh"?"显示全部作品":"Show all work"})]}),f.jsx("div",{className:"portfolio-grid",children:w.map((R,D)=>f.jsxs(O0.button,{type:"button",className:"portfolio-tile","data-category":R.category,onClick:()=>N(R),whileHover:l?void 0:{y:-4},transition:{duration:.18},children:[f.jsx("figure",{children:f.jsx("img",{src:jC(R.cover),alt:"",width:"800",height:"500",style:R.id==="pcg-workbench"?{objectFit:"contain"}:void 0,loading:D<4?"eager":"lazy",decoding:"async"})}),f.jsxs("div",{className:"portfolio-tile-copy",children:[f.jsx("small",{children:R.label}),f.jsx("h3",{children:R.title}),f.jsx("p",{children:R.summary}),f.jsx("div",{children:R.tags.slice(0,4).map(G=>f.jsx("span",{children:G},G))})]})]},`${R.kind}-${R.id}`))}),f.jsx("dialog",{ref:g,"aria-labelledby":"project-detail-title",className:`project-dialog unified-dialog ${p?.kind==="visual"?"visual-work-dialog":""}`,onCancel:R=>{R.preventDefault(),_()},onClick:R=>{if(R.target!==R.currentTarget)return;const D=R.currentTarget.getBoundingClientRect();(R.clientX<D.left||R.clientX>D.right||R.clientY<D.top||R.clientY>D.bottom)&&_()},children:p&&f.jsx(PC,{item:p,locale:a,close:_,previous:k>0?w[k-1]:void 0,next:k>=0?w[k+1]:void 0,open:N},`${p.id}-${a}`)})]})}function PC({item:a,locale:i,close:l,previous:s,next:u,open:m}){const h=L0()??!1,[p,v]=F.useState("idle"),g=new URL(window.location.href);g.search="",g.hash="",g.searchParams.set("work",a.id);const b=async()=>{try{await navigator.clipboard.writeText(g.href),v("copied")}catch{v("manual")}};return f.jsxs(O0.article,{initial:h?!1:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.2},children:[f.jsxs("div",{className:"project-reader-bar",children:[f.jsx("span",{className:"reader-category",children:a.label}),f.jsxs("div",{className:"reader-actions",children:[f.jsx("button",{type:"button",onClick:b,children:p==="copied"?i==="zh"?"已复制链接":"Link copied":i==="zh"?"复制链接":"Copy link"}),f.jsx("button",{type:"button",onClick:()=>s&&m(s),disabled:!s,"aria-label":i==="zh"?"上一个作品":"Previous work",title:s?.title,children:"←"}),f.jsx("button",{type:"button",onClick:()=>u&&m(u),disabled:!u,"aria-label":i==="zh"?"下一个作品":"Next work",title:u?.title,children:"→"}),f.jsx("button",{className:"project-dialog-close",type:"button",onClick:l,"aria-label":i==="zh"?"关闭项目详情":"Close project details",children:"×"})]}),f.jsx("span",{className:"sr-only",role:"status",children:p==="copied"?i==="zh"?"项目详情链接已复制":"Project link copied":""}),p==="manual"&&f.jsxs("label",{className:"share-fallback",children:[i==="zh"?"复制此项目链接":"Copy this project link",f.jsx("input",{readOnly:!0,value:g.href,onFocus:S=>S.target.select()})]})]}),f.jsxs("div",{className:"project-dialog-heading","data-work-id":a.id,children:[f.jsx("p",{children:a.tags.join(" · ")}),f.jsx("h2",{id:"project-detail-title",tabIndex:-1,children:a.title}),f.jsx("p",{children:a.summary})]}),a.kind==="repository"&&f.jsx(BC,{work:a.value,locale:i}),a.kind==="visual"&&f.jsx(LC,{work:a.value,locale:i}),a.kind==="project"&&f.jsx(OC,{project:a.value,locale:i})]},`${a.kind}-${a.id}`)}function BC({work:a,locale:i}){const l=a.images?.filter(u=>u.src!==a.cover)??[],s=a.id==="noemancer"||a.id==="artflow-agent"||a.id==="ray-tracing-hardware"?"cover":"contain";return f.jsxs(f.Fragment,{children:[a.repositoryUrl&&f.jsxs("a",{className:"project-dialog-source",href:a.repositoryUrl,target:"_blank",rel:"noreferrer",children:[f.jsx("span",{children:i==="zh"?"查看 GitHub 仓库":"View GitHub repository"}),f.jsx("span",{"aria-hidden":"true",children:"↗"})]}),!["lyra-performance-lab","ue-performance-workbench"].includes(a.id)&&(a.id!=="lyra-hero-arena"||i!=="zh")&&f.jsx(VC,{src:a.cover,alt:`${a.title} ${i==="zh"?"项目画面":"project view"}`,fit:s}),a.id==="lyra-performance-lab"&&f.jsxs(f.Fragment,{children:[f.jsx(zC,{locale:i}),f.jsx(Ig,{study:"animation",locale:i})]}),a.id==="ue-performance-workbench"&&f.jsxs(f.Fragment,{children:[f.jsx(MC,{locale:i}),f.jsx(Ig,{study:"hud",locale:i})]}),a.id==="animation-aigc-lab"&&f.jsx(CC,{locale:i}),a.id==="noemancer"&&f.jsx(DC,{locale:i}),f.jsx(ud,{markdown:Vt(a.story,i),title:a.title,outlineLabel:a.id==="lyra-hero-arena"&&i==="zh"?"Lyra 作品章节":void 0,videoPosters:a.id==="lyra-hero-arena"?Object.fromEntries(["striker-combat","full-match","network-full-match","phase-gameplay","hero-respawn","blink-network"].map(u=>[`/media/repositories/lyra-hero-arena/${u}.mp4`,`/media/repositories/lyra-hero-arena/${u}-poster.jpg`])):void 0}),l.length>0&&f.jsx(HC,{fit:"contain",images:l.map(u=>({src:u.src,alt:Vt(u.alt,i),caption:Vt(u.alt,i)}))})]})}function LC({work:a,locale:i}){return f.jsxs(f.Fragment,{children:[f.jsxs("a",{className:"project-dialog-source",href:a.artstationUrl,target:"_blank",rel:"noreferrer",children:[f.jsx("span",{children:i==="zh"?"查看原始 ArtStation 项目":"View the original ArtStation project"}),f.jsx("span",{"aria-hidden":"true",children:"↗"})]}),a.youtubeId&&f.jsx(q0,{youtubeId:a.youtubeId,title:Vt(a.title,i)}),f.jsx(ud,{markdown:fC[a.id][i],title:Vt(a.title,i)})]})}function OC({project:a,locale:i}){return f.jsxs(f.Fragment,{children:[a.link&&f.jsxs("a",{className:"project-dialog-source",href:a.link.href,target:"_blank",rel:"noreferrer",children:[f.jsx("span",{children:Kn(a.link.label,i)}),f.jsx("span",{"aria-hidden":"true",children:"↗"})]}),a.youtubeId&&f.jsx(q0,{youtubeId:a.youtubeId,title:a.title}),Og[a.id]?f.jsx(ud,{markdown:Og[a.id][i],title:a.title}):a.story&&f.jsxs("section",{className:"project-dialog-story",children:[f.jsx("h3",{children:Kn(a.story.title,i)}),f.jsx("p",{children:Kn(a.story.intro,i)}),f.jsx("h4",{children:i==="zh"?"玩法与特色":"Gameplay & Features"}),f.jsx("dl",{children:a.story.features.map(l=>f.jsxs("div",{children:[f.jsx("dt",{children:Kn(l.title,i)}),f.jsx("dd",{children:Kn(l.detail,i)})]},l.title.en))}),a.story.note&&f.jsx("p",{className:"project-dialog-note",children:Kn(a.story.note,i)})]})]})}function VC({src:a,alt:i,fit:l}){return f.jsx("figure",{className:`project-dialog-lead-media ${l==="contain"?"is-contain":""}`,children:f.jsx(cd,{src:a,alt:i,loading:"eager"})})}function q0({youtubeId:a,title:i}){const{locale:l}=An();return f.jsxs("div",{className:"project-dialog-video",children:[f.jsx("iframe",{loading:"lazy",src:`https://www.youtube-nocookie.com/embed/${a}?rel=0`,title:`${i} ${l==="zh"?"演示视频":"demo video"}`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0}),f.jsx("a",{className:"video-fallback",href:`https://www.youtube.com/watch?v=${a}`,target:"_blank",rel:"noreferrer",children:l==="zh"?"在 YouTube 打开视频 ↗":"Open on YouTube ↗"})]})}function HC({images:a,fit:i="cover"}){return f.jsx("div",{className:`project-dialog-gallery ${i==="contain"?"is-contain":""}`,children:a.map(l=>f.jsxs("figure",{children:[f.jsx(cd,{src:l.src,alt:l.alt,style:{objectPosition:l.position}}),l.caption&&f.jsx("figcaption",{children:l.caption})]},l.src))})}function GC(){const{locale:a,copy:i}=An();return f.jsxs("div",{className:"site","data-locale":a,children:[f.jsx("a",{className:"skip-link",href:"#main",children:a==="zh"?"跳到主要内容":"Skip to main content"}),f.jsx("span",{id:"top"}),f.jsx(E1,{}),f.jsxs("main",{id:"main",children:[f.jsx(U1,{}),f.jsx(kC,{})]}),f.jsx(T1,{}),f.jsx("div",{className:"locale-status sr-only","aria-live":"polite",children:i.language.changed})]})}const NC={en:{meta:{title:"Lucas Shen | AI Tools Technical Art / Game Client Development",description:"Games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines by Lucas Shen."},nav:{work:"Projects",practice:"Experience",links:"Links",aria:"Primary navigation"},language:{label:"Language",english:"English",changed:"Language changed to English."},hero:{role:"AI Tools Technical Art / Game Client Development",primaryAction:"Selected projects"},personal:{intro:"My work spans games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines, with running builds, project captures, and implementation details.",storyAction:"About me",aboutTitle:"About me",aboutBody:["I’m Lucas, a technical artist from China. My path crosses industrial engineering, game development, realtime graphics, and production tools. That mix helps me move between an artist’s problem and the system behind it.","I enjoy reverse-engineering workflows, turning repeated work into tools, and testing where AI is genuinely useful. Outside the toolchain, I keep learning through games, animation, music, graphics experiments, and public documentation."],traits:[{title:"What I work on",detail:"DCC tools, AI workflows, realtime graphics, games, and animation."},{title:"How I learn",detail:"Build a real workflow, inspect the evidence, then improve the system."},{title:"How I collaborate",detail:"Keep creative decisions human and make repeated production steps dependable."}],linksTitle:"Public channels",linksIntro:"Code, visual work, demos, and ongoing notes live across these profiles.",social:[{name:"GitHub",detail:"Code, tools, and public engineering evidence.",href:"https://github.com/Ubik42",mark:"GH"},{name:"Visual work",detail:"Realtime graphics, materials, shaders, rigging, and procedural work.",href:"#visual-work",mark:"TA"},{name:"Bilibili",detail:"Tool demos, tutorials, and longer videos.",href:"https://space.bilibili.com/12367861?spm_id_from=333.1007.0.0",mark:"Bi"},{name:"Xiaohongshu",detail:"Notes, resources, and everyday discoveries.",href:"https://www.xiaohongshu.com/user/profile/670526b2000000001e001891",mark:"RED"}]},practice:{title:"Experience and education",items:[{period:"2026.03 – 2026.08",title:"UE Engine Tools Development Intern",place:"Tencent Photon",detail:"Built AI-assisted production tools across DCC, engine, and design workflows, with explicit execution and review boundaries."},{period:"2025.08 – 2027.05",title:"M.S. in EAE, dual focus in Technical Art / Game Engineering",place:"University of Utah",detail:"Studying realtime graphics, tools, pipelines, and collaborative game production in Entertainment Arts and Engineering."},{period:"2020.09 – 2024.06",title:"B.S. in Industrial Engineering",place:"Shanghai Jiao Tong University",detail:"Built a systems and optimization foundation, then applied it through game systems, UE5 client work, and industrial digital twins."}]},footer:{copyright:"Lucas (Yuyan) Shen / 沈裕焱"}},zh:{meta:{title:"沈裕焱 | AI工具技术美术/游戏客户端",description:"沈裕焱的 UE 客户端与引擎开发作品集：GAS、网络同步、角色动画与物理、实时渲染，以及 DCC 工具和 AI 应用。"},nav:{work:"作品",practice:"经历",links:"链接",aria:"主导航"},language:{label:"语言",english:"English",changed:"语言已切换为中文。"},hero:{role:"AI工具技术美术/游戏客户端",primaryAction:"项目作品"},personal:{intro:"作品覆盖游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线，包含运行画面、项目素材和具体实现。",storyAction:"关于我",aboutTitle:"关于我",aboutBody:["我是沈裕焱，一名来自中国的技术美术。我的经历横跨工业工程、游戏开发、实时图形和生产工具，因此我习惯同时理解创作者遇到的问题，以及问题背后的代码与系统。","我喜欢拆解工作流，把重复劳动做成工具，也会认真验证 AI 适合参与哪一步。工具之外，我持续从游戏、动画、音乐、图形实验和公开文档中学习。"],traits:[{title:"我在做什么",detail:"DCC 工具、AI 工作流、实时图形、游戏与动画。"},{title:"我的学习方式",detail:"先做出真实工作流，检查证据，再改进整个系统。"},{title:"我的协作方式",detail:"让创作决定留给人，让重复的生产环节变得可靠。"}],linksTitle:"公开渠道",linksIntro:"代码、视觉作品、演示和持续记录分布在这些公开主页中。",social:[{name:"GitHub",detail:"代码、工具与公开工程证据。",href:"https://github.com/Ubik42",mark:"GH"},{name:"视觉作品",detail:"实时场景、材质、Shader、绑定与程序化内容。",href:"#visual-work",mark:"TA"},{name:"哔哩哔哩",detail:"工具演示、教程和长视频。",href:"https://space.bilibili.com/12367861?spm_id_from=333.1007.0.0",mark:"Bi"},{name:"小红书",detail:"笔记、资源和日常发现。",href:"https://www.xiaohongshu.com/user/profile/670526b2000000001e001891",mark:"RED"}]},practice:{title:"经历与教育",items:[{period:"2026.03 – 2026.08",title:"UE 引擎工具开发实习生",place:"腾讯光子",detail:"围绕 DCC、引擎与设计流程开发 AI 辅助美术生产工具，覆盖工具接入、执行边界与人工审查。"},{period:"2025.08 – 2027.05",title:"EAE 技术美术/游戏工程双方向硕士",place:"犹他大学",detail:"在 Entertainment Arts and Engineering 项目中学习实时图形、工具、管线与协作式游戏生产。"},{period:"2020.09 – 2024.06",title:"工业工程学士",place:"上海交通大学",detail:"建立优化与系统方法基础，并逐步扩展到游戏系统、UE5 客户端与工业数字孪生开发。"}]},footer:{copyright:"Lucas (Yuyan) Shen / 沈裕焱"}}},F0="portfolio.locale.v2";function _C(){try{const a=window.localStorage.getItem(F0);if(a==="en"||a==="zh")return a}catch{}return"zh"}function IC(a){const i=document.querySelector('meta[name="description"]');i&&(i.content=a)}function qC({children:a}){const[i,l]=F.useState(_C),s=NC[i];F.useEffect(()=>{document.documentElement.lang=i==="zh"?"zh-CN":"en",document.title=s.meta.title,IC(s.meta.description);try{window.localStorage.setItem(F0,i)}catch{}},[s.meta.description,s.meta.title,i]);const u=F.useMemo(()=>({locale:i,copy:s,setLocale(m){F.startTransition(()=>l(m))}}),[s,i]);return f.jsx(Wg,{value:u,children:a})}C1.createRoot(document.getElementById("root")).render(f.jsx(F.StrictMode,{children:f.jsx(qC,{children:f.jsx(GC,{})})}));
//# sourceMappingURL=index-BFoDGj6F-portfolio-refresh.js.map
