(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function o(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(c){if(c.ep)return;c.ep=!0;const h=o(c);fetch(c.href,h)}})();var Nu={exports:{}},ur={};var up;function Wb(){if(up)return ur;up=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(l,c,h){var f=null;if(h!==void 0&&(f=""+h),c.key!==void 0&&(f=""+c.key),"key"in c){h={};for(var g in c)g!=="key"&&(h[g]=c[g])}else h=c;return c=h.ref,{$$typeof:a,type:l,key:f,ref:c!==void 0?c:null,props:h}}return ur.Fragment=r,ur.jsx=o,ur.jsxs=o,ur}var cp;function $b(){return cp||(cp=1,Nu.exports=Wb()),Nu.exports}var U=$b(),_u={exports:{}},ae={};var dp;function e2(){if(dp)return ae;dp=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;function z(w){return w===null||typeof w!="object"?null:(w=S&&w[S]||w["@@iterator"],typeof w=="function"?w:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,k={};function _(w,L,q){this.props=w,this.context=L,this.refs=k,this.updater=q||M}_.prototype.isReactComponent={},_.prototype.setState=function(w,L){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,L,"setState")},_.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function P(){}P.prototype=_.prototype;function H(w,L,q){this.props=w,this.context=L,this.refs=k,this.updater=q||M}var X=H.prototype=new P;X.constructor=H,N(X,_.prototype),X.isPureReactComponent=!0;var ne=Array.isArray;function le(){}var F={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function Ee(w,L,q){var Q=q.ref;return{$$typeof:a,type:w,key:L,ref:Q!==void 0?Q:null,props:q}}function te(w,L){return Ee(w.type,L,w.props)}function ve(w){return typeof w=="object"&&w!==null&&w.$$typeof===a}function Te(w){var L={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(q){return L[q]})}var rt=/\/+/g;function Ge(w,L){return typeof w=="object"&&w!==null&&w.key!=null?Te(""+w.key):L.toString(36)}function Ne(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(le,le):(w.status="pending",w.then(function(L){w.status==="pending"&&(w.status="fulfilled",w.value=L)},function(L){w.status==="pending"&&(w.status="rejected",w.reason=L)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function O(w,L,q,Q,ie){var ue=typeof w;(ue==="undefined"||ue==="boolean")&&(w=null);var Se=!1;if(w===null)Se=!0;else switch(ue){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(w.$$typeof){case a:case r:Se=!0;break;case v:return Se=w._init,O(Se(w._payload),L,q,Q,ie)}}if(Se)return ie=ie(w),Se=Q===""?"."+Ge(w,0):Q,ne(ie)?(q="",Se!=null&&(q=Se.replace(rt,"$&/")+"/"),O(ie,L,q,"",function(gi){return gi})):ie!=null&&(ve(ie)&&(ie=te(ie,q+(ie.key==null||w&&w.key===ie.key?"":(""+ie.key).replace(rt,"$&/")+"/")+Se)),L.push(ie)),1;Se=0;var st=Q===""?".":Q+":";if(ne(w))for(var _e=0;_e<w.length;_e++)Q=w[_e],ue=st+Ge(Q,_e),Se+=O(Q,L,q,ue,ie);else if(_e=z(w),typeof _e=="function")for(w=_e.call(w),_e=0;!(Q=w.next()).done;)Q=Q.value,ue=st+Ge(Q,_e++),Se+=O(Q,L,q,ue,ie);else if(ue==="object"){if(typeof w.then=="function")return O(Ne(w),L,q,Q,ie);throw L=String(w),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return Se}function G(w,L,q){if(w==null)return w;var Q=[],ie=0;return O(w,Q,"","",function(ue){return L.call(q,ue,ie++)}),Q}function Y(w){if(w._status===-1){var L=w._result;L=L(),L.then(function(q){(w._status===0||w._status===-1)&&(w._status=1,w._result=q)},function(q){(w._status===0||w._status===-1)&&(w._status=2,w._result=q)}),w._status===-1&&(w._status=0,w._result=L)}if(w._status===1)return w._result.default;throw w._result}var se=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},me={map:G,forEach:function(w,L,q){G(w,function(){L.apply(this,arguments)},q)},count:function(w){var L=0;return G(w,function(){L++}),L},toArray:function(w){return G(w,function(L){return L})||[]},only:function(w){if(!ve(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ae.Activity=b,ae.Children=me,ae.Component=_,ae.Fragment=o,ae.Profiler=c,ae.PureComponent=H,ae.StrictMode=l,ae.Suspense=y,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ae.__COMPILER_RUNTIME={__proto__:null,c:function(w){return F.H.useMemoCache(w)}},ae.cache=function(w){return function(){return w.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(w,L,q){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var Q=N({},w.props),ie=w.key;if(L!=null)for(ue in L.key!==void 0&&(ie=""+L.key),L)!W.call(L,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&L.ref===void 0||(Q[ue]=L[ue]);var ue=arguments.length-2;if(ue===1)Q.children=q;else if(1<ue){for(var Se=Array(ue),st=0;st<ue;st++)Se[st]=arguments[st+2];Q.children=Se}return Ee(w.type,ie,Q)},ae.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:h,_context:w},w},ae.createElement=function(w,L,q){var Q,ie={},ue=null;if(L!=null)for(Q in L.key!==void 0&&(ue=""+L.key),L)W.call(L,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(ie[Q]=L[Q]);var Se=arguments.length-2;if(Se===1)ie.children=q;else if(1<Se){for(var st=Array(Se),_e=0;_e<Se;_e++)st[_e]=arguments[_e+2];ie.children=st}if(w&&w.defaultProps)for(Q in Se=w.defaultProps,Se)ie[Q]===void 0&&(ie[Q]=Se[Q]);return Ee(w,ue,ie)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(w){return{$$typeof:g,render:w}},ae.isValidElement=ve,ae.lazy=function(w){return{$$typeof:v,_payload:{_status:-1,_result:w},_init:Y}},ae.memo=function(w,L){return{$$typeof:m,type:w,compare:L===void 0?null:L}},ae.startTransition=function(w){var L=F.T,q={};F.T=q;try{var Q=w(),ie=F.S;ie!==null&&ie(q,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(le,se)}catch(ue){se(ue)}finally{L!==null&&q.types!==null&&(L.types=q.types),F.T=L}},ae.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ae.use=function(w){return F.H.use(w)},ae.useActionState=function(w,L,q){return F.H.useActionState(w,L,q)},ae.useCallback=function(w,L){return F.H.useCallback(w,L)},ae.useContext=function(w){return F.H.useContext(w)},ae.useDebugValue=function(){},ae.useDeferredValue=function(w,L){return F.H.useDeferredValue(w,L)},ae.useEffect=function(w,L){return F.H.useEffect(w,L)},ae.useEffectEvent=function(w){return F.H.useEffectEvent(w)},ae.useId=function(){return F.H.useId()},ae.useImperativeHandle=function(w,L,q){return F.H.useImperativeHandle(w,L,q)},ae.useInsertionEffect=function(w,L){return F.H.useInsertionEffect(w,L)},ae.useLayoutEffect=function(w,L){return F.H.useLayoutEffect(w,L)},ae.useMemo=function(w,L){return F.H.useMemo(w,L)},ae.useOptimistic=function(w,L){return F.H.useOptimistic(w,L)},ae.useReducer=function(w,L,q){return F.H.useReducer(w,L,q)},ae.useRef=function(w){return F.H.useRef(w)},ae.useState=function(w){return F.H.useState(w)},ae.useSyncExternalStore=function(w,L,q){return F.H.useSyncExternalStore(w,L,q)},ae.useTransition=function(){return F.H.useTransition()},ae.version="19.2.8",ae}var fp;function Oc(){return fp||(fp=1,_u.exports=e2()),_u.exports}var J=Oc(),ku={exports:{}},cr={},Hu={exports:{}},Gu={};var hp;function t2(){return hp||(hp=1,(function(a){function r(O,G){var Y=O.length;O.push(G);e:for(;0<Y;){var se=Y-1>>>1,me=O[se];if(0<c(me,G))O[se]=G,O[Y]=me,Y=se;else break e}}function o(O){return O.length===0?null:O[0]}function l(O){if(O.length===0)return null;var G=O[0],Y=O.pop();if(Y!==G){O[0]=Y;e:for(var se=0,me=O.length,w=me>>>1;se<w;){var L=2*(se+1)-1,q=O[L],Q=L+1,ie=O[Q];if(0>c(q,Y))Q<me&&0>c(ie,q)?(O[se]=ie,O[Q]=Y,se=Q):(O[se]=q,O[L]=Y,se=L);else if(Q<me&&0>c(ie,Y))O[se]=ie,O[Q]=Y,se=Q;else break e}}return G}function c(O,G){var Y=O.sortIndex-G.sortIndex;return Y!==0?Y:O.id-G.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var f=Date,g=f.now();a.unstable_now=function(){return f.now()-g}}var y=[],m=[],v=1,b=null,S=3,z=!1,M=!1,N=!1,k=!1,_=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function X(O){for(var G=o(m);G!==null;){if(G.callback===null)l(m);else if(G.startTime<=O)l(m),G.sortIndex=G.expirationTime,r(y,G);else break;G=o(m)}}function ne(O){if(N=!1,X(O),!M)if(o(y)!==null)M=!0,le||(le=!0,Te());else{var G=o(m);G!==null&&Ne(ne,G.startTime-O)}}var le=!1,F=-1,W=5,Ee=-1;function te(){return k?!0:!(a.unstable_now()-Ee<W)}function ve(){if(k=!1,le){var O=a.unstable_now();Ee=O;var G=!0;try{e:{M=!1,N&&(N=!1,P(F),F=-1),z=!0;var Y=S;try{t:{for(X(O),b=o(y);b!==null&&!(b.expirationTime>O&&te());){var se=b.callback;if(typeof se=="function"){b.callback=null,S=b.priorityLevel;var me=se(b.expirationTime<=O);if(O=a.unstable_now(),typeof me=="function"){b.callback=me,X(O),G=!0;break t}b===o(y)&&l(y),X(O)}else l(y);b=o(y)}if(b!==null)G=!0;else{var w=o(m);w!==null&&Ne(ne,w.startTime-O),G=!1}}break e}finally{b=null,S=Y,z=!1}G=void 0}}finally{G?Te():le=!1}}}var Te;if(typeof H=="function")Te=function(){H(ve)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Ge=rt.port2;rt.port1.onmessage=ve,Te=function(){Ge.postMessage(null)}}else Te=function(){_(ve,0)};function Ne(O,G){F=_(function(){O(a.unstable_now())},G)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(O){O.callback=null},a.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<O?Math.floor(1e3/O):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function(O){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var Y=S;S=G;try{return O()}finally{S=Y}},a.unstable_requestPaint=function(){k=!0},a.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=S;S=O;try{return G()}finally{S=Y}},a.unstable_scheduleCallback=function(O,G,Y){var se=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?se+Y:se):Y=se,O){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=Y+me,O={id:v++,callback:G,priorityLevel:O,startTime:Y,expirationTime:me,sortIndex:-1},Y>se?(O.sortIndex=Y,r(m,O),o(y)===null&&O===o(m)&&(N?(P(F),F=-1):N=!0,Ne(ne,Y-se))):(O.sortIndex=me,r(y,O),M||z||(M=!0,le||(le=!0,Te()))),O},a.unstable_shouldYield=te,a.unstable_wrapCallback=function(O){var G=S;return function(){var Y=S;S=G;try{return O.apply(this,arguments)}finally{S=Y}}}})(Gu)),Gu}var mp;function n2(){return mp||(mp=1,Hu.exports=t2()),Hu.exports}var Pu={exports:{}},it={};var pp;function a2(){if(pp)return it;pp=1;var a=Oc();function r(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function h(y,m,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:y,containerInfo:m,implementation:v}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,it.createPortal=function(y,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return h(y,m,null,v)},it.flushSync=function(y){var m=f.T,v=l.p;try{if(f.T=null,l.p=2,y)return y()}finally{f.T=m,l.p=v,l.d.f()}},it.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,l.d.C(y,m))},it.prefetchDNS=function(y){typeof y=="string"&&l.d.D(y)},it.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var v=m.as,b=g(v,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,z=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?l.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:z}):v==="script"&&l.d.X(y,{crossOrigin:b,integrity:S,fetchPriority:z,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},it.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=g(m.as,m.crossOrigin);l.d.M(y,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&l.d.M(y)},it.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,b=g(v,m.crossOrigin);l.d.L(y,v,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},it.preloadModule=function(y,m){if(typeof y=="string")if(m){var v=g(m.as,m.crossOrigin);l.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else l.d.m(y)},it.requestFormReset=function(y){l.d.r(y)},it.unstable_batchedUpdates=function(y,m){return y(m)},it.useFormState=function(y,m,v){return f.H.useFormState(y,m,v)},it.useFormStatus=function(){return f.H.useHostTransitionStatus()},it.version="19.2.8",it}var gp;function i2(){if(gp)return Pu.exports;gp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Pu.exports=a2(),Pu.exports}var yp;function r2(){if(yp)return cr;yp=1;var a=n2(),r=Oc(),o=i2();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(h(e)!==e)throw Error(l(188))}function m(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var u=s.alternate;if(u===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===n)return y(s),e;if(u===i)return y(s),t;u=u.sibling}throw Error(l(188))}if(n.return!==i.return)n=s,i=u;else{for(var d=!1,p=s.child;p;){if(p===n){d=!0,n=s,i=u;break}if(p===i){d=!0,i=s,n=u;break}p=p.sibling}if(!d){for(p=u.child;p;){if(p===n){d=!0,n=u,i=s;break}if(p===i){d=!0,i=u,n=s;break}p=p.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==i)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),H=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function Te(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function Ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case _:return"Profiler";case k:return"StrictMode";case ne:return"Suspense";case le:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case H:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:Ge(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return Ge(e(t))}catch{}}return null}var Ne=Array.isArray,O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},se=[],me=-1;function w(e){return{current:e}}function L(e){0>me||(e.current=se[me],se[me]=null,me--)}function q(e,t){me++,se[me]=e.current,e.current=t}var Q=w(null),ie=w(null),ue=w(null),Se=w(null);function st(e,t){switch(q(ue,t),q(ie,e),q(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Om(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Om(t),e=Vm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(Q),q(Q,e)}function _e(){L(Q),L(ie),L(ue)}function gi(e){e.memoizedState!==null&&q(Se,e);var t=Q.current,n=Vm(t,e.type);t!==n&&(q(ie,e),q(Q,n))}function Cr(e){ie.current===e&&(L(Q),L(ie)),Se.current===e&&(L(Se),rr._currentValue=Y)}var bo,od;function Jn(e){if(bo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bo=t&&t[1]||"",od=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bo+e+od}var So=!1;function To(e,t){if(!e||So)return"";So=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(R){var D=R}Reflect.construct(e,[],B)}else{try{B.call()}catch(R){D=R}e.call(B.prototype)}}else{try{throw Error()}catch(R){D=R}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(R){if(R&&D&&typeof R.stack=="string")return[R.stack,D.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),d=u[0],p=u[1];if(d&&p){var T=d.split(`
`),x=p.split(`
`);for(s=i=0;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;for(;s<x.length&&!x[s].includes("DetermineComponentFrameRoot");)s++;if(i===T.length||s===x.length)for(i=T.length-1,s=x.length-1;1<=i&&0<=s&&T[i]!==x[s];)s--;for(;1<=i&&0<=s;i--,s--)if(T[i]!==x[s]){if(i!==1||s!==1)do if(i--,s--,0>s||T[i]!==x[s]){var V=`
`+T[i].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=i&&0<=s);break}}}finally{So=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Jn(n):""}function Dv(e,t){switch(e.tag){case 26:case 27:case 5:return Jn(e.type);case 16:return Jn("Lazy");case 13:return e.child!==t&&t!==null?Jn("Suspense Fallback"):Jn("Suspense");case 19:return Jn("SuspenseList");case 0:case 15:return To(e.type,!1);case 11:return To(e.type.render,!1);case 1:return To(e.type,!0);case 31:return Jn("Activity");default:return""}}function ld(e){try{var t="",n=null;do t+=Dv(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ao=Object.prototype.hasOwnProperty,wo=a.unstable_scheduleCallback,Eo=a.unstable_cancelCallback,Uv=a.unstable_shouldYield,Rv=a.unstable_requestPaint,yt=a.unstable_now,Ov=a.unstable_getCurrentPriorityLevel,ud=a.unstable_ImmediatePriority,cd=a.unstable_UserBlockingPriority,zr=a.unstable_NormalPriority,Vv=a.unstable_LowPriority,dd=a.unstable_IdlePriority,jv=a.log,Bv=a.unstable_setDisableYieldValue,yi=null,vt=null;function Tn(e){if(typeof jv=="function"&&Bv(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(yi,e)}catch{}}var bt=Math.clz32?Math.clz32:_v,Lv=Math.log,Nv=Math.LN2;function _v(e){return e>>>=0,e===0?32:31-(Lv(e)/Nv|0)|0}var xr=256,Mr=262144,Dr=4194304;function Wn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ur(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,u=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var p=i&134217727;return p!==0?(i=p&~u,i!==0?s=Wn(i):(d&=p,d!==0?s=Wn(d):n||(n=p&~e,n!==0&&(s=Wn(n))))):(p=i&~u,p!==0?s=Wn(p):d!==0?s=Wn(d):n||(n=i&~e,n!==0&&(s=Wn(n)))),s===0?0:t!==0&&t!==s&&(t&u)===0&&(u=s&-s,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:s}function vi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function kv(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fd(){var e=Dr;return Dr<<=1,(Dr&62914560)===0&&(Dr=4194304),e}function Co(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hv(e,t,n,i,s,u){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var p=e.entanglements,T=e.expirationTimes,x=e.hiddenUpdates;for(n=d&~n;0<n;){var V=31-bt(n),B=1<<V;p[V]=0,T[V]=-1;var D=x[V];if(D!==null)for(x[V]=null,V=0;V<D.length;V++){var R=D[V];R!==null&&(R.lane&=-536870913)}n&=~B}i!==0&&hd(e,i,0),u!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=u&~(d&~t))}function hd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-bt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function md(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-bt(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function pd(e,t){var n=t&-t;return n=(n&42)!==0?1:zo(n),(n&(e.suspendedLanes|t))!==0?0:n}function zo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function gd(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:np(e.type))}function yd(e,t){var n=G.p;try{return G.p=e,t()}finally{G.p=n}}var An=Math.random().toString(36).slice(2),Je="__reactFiber$"+An,ct="__reactProps$"+An,Aa="__reactContainer$"+An,Mo="__reactEvents$"+An,Gv="__reactListeners$"+An,Pv="__reactHandles$"+An,vd="__reactResources$"+An,Si="__reactMarker$"+An;function Do(e){delete e[Je],delete e[ct],delete e[Mo],delete e[Gv],delete e[Pv]}function wa(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Aa]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hm(e);e!==null;){if(n=e[Je])return n;e=Hm(e)}return t}e=n,n=e.parentNode}return null}function Ea(e){if(e=e[Je]||e[Aa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ti(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Ca(e){var t=e[vd];return t||(t=e[vd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[Si]=!0}var bd=new Set,Sd={};function $n(e,t){za(e,t),za(e+"Capture",t)}function za(e,t){for(Sd[e]=t,e=0;e<t.length;e++)bd.add(t[e])}var qv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Td={},Ad={};function Xv(e){return Ao.call(Ad,e)?!0:Ao.call(Td,e)?!1:qv.test(e)?Ad[e]=!0:(Td[e]=!0,!1)}function Rr(e,t,n){if(Xv(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Or(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function tn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yv(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,u=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(d){n=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Uo(e){if(!e._valueTracker){var t=wd(e)?"checked":"value";e._valueTracker=Yv(e,t,""+e[t])}}function Ed(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=wd(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Iv=/[\n"\\]/g;function Dt(e){return e.replace(Iv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ro(e,t,n,i,s,u,d,p){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Mt(t)):e.value!==""+Mt(t)&&(e.value=""+Mt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Oo(e,d,Mt(t)):n!=null?Oo(e,d,Mt(n)):i!=null&&e.removeAttribute("value"),s==null&&u!=null&&(e.defaultChecked=!!u),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Mt(p):e.removeAttribute("name")}function Cd(e,t,n,i,s,u,d,p){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Uo(e);return}n=n!=null?""+Mt(n):"",t=t!=null?""+Mt(t):n,p||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=p?e.checked:!!i,e.defaultChecked=!!i,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Uo(e)}function Oo(e,t,n){t==="number"&&Vr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function xa(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Mt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function zd(e,t,n){if(t!=null&&(t=""+Mt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Mt(n):""}function xd(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(l(92));if(Ne(i)){if(1<i.length)throw Error(l(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Mt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Uo(e)}function Ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Md(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Fv.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Dd(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Md(e,s,i)}else for(var u in t)t.hasOwnProperty(u)&&Md(e,u,t[u])}function Vo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jr(e){return Qv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function nn(){}var jo=null;function Bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Da=null,Ua=null;function Ud(e){var t=Ea(e);if(t&&(e=t.stateNode)){var n=e[ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ro(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Dt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[ct]||null;if(!s)throw Error(l(90));Ro(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Ed(i)}break e;case"textarea":zd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&xa(e,!!n.multiple,t,!1)}}}var Lo=!1;function Rd(e,t,n){if(Lo)return e(t,n);Lo=!0;try{var i=e(t);return i}finally{if(Lo=!1,(Da!==null||Ua!==null)&&(Ts(),Da&&(t=Da,e=Ua,Ua=Da=null,Ud(t),e)))for(t=0;t<e.length;t++)Ud(e[t])}}function Ai(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ct]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),No=!1;if(an)try{var wi={};Object.defineProperty(wi,"passive",{get:function(){No=!0}}),window.addEventListener("test",wi,wi),window.removeEventListener("test",wi,wi)}catch{No=!1}var wn=null,_o=null,Br=null;function Od(){if(Br)return Br;var e,t=_o,n=t.length,i,s="value"in wn?wn.value:wn.textContent,u=s.length;for(e=0;e<n&&t[e]===s[e];e++);var d=n-e;for(i=1;i<=d&&t[n-i]===s[u-i];i++);return Br=s.slice(e,1<i?1-i:void 0)}function Lr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function Vd(){return!1}function dt(e){function t(n,i,s,u,d){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(u):u[p]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Nr:Vd,this.isPropagationStopped=Vd,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),t}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_r=dt(ea),Ei=b({},ea,{view:0,detail:0}),Zv=dt(Ei),ko,Ho,Ci,kr=b({},Ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ci&&(Ci&&e.type==="mousemove"?(ko=e.screenX-Ci.screenX,Ho=e.screenY-Ci.screenY):Ho=ko=0,Ci=e),ko)},movementY:function(e){return"movementY"in e?e.movementY:Ho}}),jd=dt(kr),Jv=b({},kr,{dataTransfer:0}),Wv=dt(Jv),$v=b({},Ei,{relatedTarget:0}),Go=dt($v),e0=b({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),t0=dt(e0),n0=b({},ea,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a0=dt(n0),i0=b({},ea,{data:0}),Bd=dt(i0),r0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=o0[e])?!!t[e]:!1}function Po(){return l0}var u0=b({},Ei,{key:function(e){if(e.key){var t=r0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Lr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?s0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Po,charCode:function(e){return e.type==="keypress"?Lr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c0=dt(u0),d0=b({},kr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ld=dt(d0),f0=b({},Ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Po}),h0=dt(f0),m0=b({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),p0=dt(m0),g0=b({},kr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y0=dt(g0),v0=b({},ea,{newState:0,oldState:0}),b0=dt(v0),S0=[9,13,27,32],qo=an&&"CompositionEvent"in window,zi=null;an&&"documentMode"in document&&(zi=document.documentMode);var T0=an&&"TextEvent"in window&&!zi,Nd=an&&(!qo||zi&&8<zi&&11>=zi),_d=" ",kd=!1;function Hd(e,t){switch(e){case"keyup":return S0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ra=!1;function A0(e,t){switch(e){case"compositionend":return Gd(t);case"keypress":return t.which!==32?null:(kd=!0,_d);case"textInput":return e=t.data,e===_d&&kd?null:e;default:return null}}function w0(e,t){if(Ra)return e==="compositionend"||!qo&&Hd(e,t)?(e=Od(),Br=_o=wn=null,Ra=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nd&&t.locale!=="ko"?null:t.data;default:return null}}var E0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!E0[e.type]:t==="textarea"}function qd(e,t,n,i){Da?Ua?Ua.push(i):Ua=[i]:Da=i,t=Ms(t,"onChange"),0<t.length&&(n=new _r("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var xi=null,Mi=null;function C0(e){zm(e,0)}function Hr(e){var t=Ti(e);if(Ed(t))return e}function Xd(e,t){if(e==="change")return t}var Yd=!1;if(an){var Xo;if(an){var Yo="oninput"in document;if(!Yo){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),Yo=typeof Id.oninput=="function"}Xo=Yo}else Xo=!1;Yd=Xo&&(!document.documentMode||9<document.documentMode)}function Fd(){xi&&(xi.detachEvent("onpropertychange",Kd),Mi=xi=null)}function Kd(e){if(e.propertyName==="value"&&Hr(Mi)){var t=[];qd(t,Mi,e,Bo(e)),Rd(C0,t)}}function z0(e,t,n){e==="focusin"?(Fd(),xi=t,Mi=n,xi.attachEvent("onpropertychange",Kd)):e==="focusout"&&Fd()}function x0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hr(Mi)}function M0(e,t){if(e==="click")return Hr(t)}function D0(e,t){if(e==="input"||e==="change")return Hr(t)}function U0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:U0;function Di(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Ao.call(t,s)||!St(e[s],t[s]))return!1}return!0}function Qd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zd(e,t){var n=Qd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qd(n)}}function Jd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function Io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var R0=an&&"documentMode"in document&&11>=document.documentMode,Oa=null,Fo=null,Ui=null,Ko=!1;function $d(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ko||Oa==null||Oa!==Vr(i)||(i=Oa,"selectionStart"in i&&Io(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ui&&Di(Ui,i)||(Ui=i,i=Ms(Fo,"onSelect"),0<i.length&&(t=new _r("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Oa)))}function ta(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Va={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionrun:ta("Transition","TransitionRun"),transitionstart:ta("Transition","TransitionStart"),transitioncancel:ta("Transition","TransitionCancel"),transitionend:ta("Transition","TransitionEnd")},Qo={},ef={};an&&(ef=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function na(e){if(Qo[e])return Qo[e];if(!Va[e])return e;var t=Va[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ef)return Qo[e]=t[n];return e}var tf=na("animationend"),nf=na("animationiteration"),af=na("animationstart"),O0=na("transitionrun"),V0=na("transitionstart"),j0=na("transitioncancel"),rf=na("transitionend"),sf=new Map,Zo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zo.push("scrollEnd");function Ht(e,t){sf.set(e,t),$n(t,[e])}var Gr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ut=[],ja=0,Jo=0;function Pr(){for(var e=ja,t=Jo=ja=0;t<e;){var n=Ut[t];Ut[t++]=null;var i=Ut[t];Ut[t++]=null;var s=Ut[t];Ut[t++]=null;var u=Ut[t];if(Ut[t++]=null,i!==null&&s!==null){var d=i.pending;d===null?s.next=s:(s.next=d.next,d.next=s),i.pending=s}u!==0&&of(n,s,u)}}function qr(e,t,n,i){Ut[ja++]=e,Ut[ja++]=t,Ut[ja++]=n,Ut[ja++]=i,Jo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Wo(e,t,n,i){return qr(e,t,n,i),Xr(e)}function aa(e,t){return qr(e,null,null,t),Xr(e)}function of(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,u=e.return;u!==null;)u.childLanes|=n,i=u.alternate,i!==null&&(i.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(s=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,s&&t!==null&&(s=31-bt(n),e=u.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),u):null}function Xr(e){if(50<Wi)throw Wi=0,ou=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ba={};function B0(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,i){return new B0(e,t,n,i)}function $o(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function lf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yr(e,t,n,i,s,u){var d=0;if(i=e,typeof e=="function")$o(e)&&(d=1);else if(typeof e=="string")d=Hb(e,n,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=Tt(31,n,t,s),e.elementType=Ee,e.lanes=u,e;case N:return ia(n.children,s,u,t);case k:d=8,s|=24;break;case _:return e=Tt(12,n,t,s|2),e.elementType=_,e.lanes=u,e;case ne:return e=Tt(13,n,t,s),e.elementType=ne,e.lanes=u,e;case le:return e=Tt(19,n,t,s),e.elementType=le,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:d=10;break e;case P:d=9;break e;case X:d=11;break e;case F:d=14;break e;case W:d=16,i=null;break e}d=29,n=Error(l(130,e===null?"null":typeof e,"")),i=null}return t=Tt(d,n,t,s),t.elementType=e,t.type=i,t.lanes=u,t}function ia(e,t,n,i){return e=Tt(7,e,i,t),e.lanes=n,e}function el(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function uf(e){var t=Tt(18,null,null,0);return t.stateNode=e,t}function tl(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var cf=new WeakMap;function Rt(e,t){if(typeof e=="object"&&e!==null){var n=cf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:ld(t)},cf.set(e,t),t)}return{value:e,source:t,stack:ld(t)}}var La=[],Na=0,Ir=null,Ri=0,Ot=[],Vt=0,En=null,It=1,Ft="";function sn(e,t){La[Na++]=Ri,La[Na++]=Ir,Ir=e,Ri=t}function df(e,t,n){Ot[Vt++]=It,Ot[Vt++]=Ft,Ot[Vt++]=En,En=e;var i=It;e=Ft;var s=32-bt(i)-1;i&=~(1<<s),n+=1;var u=32-bt(t)+s;if(30<u){var d=s-s%5;u=(i&(1<<d)-1).toString(32),i>>=d,s-=d,It=1<<32-bt(t)+s|n<<s|i,Ft=u+e}else It=1<<u|n<<s|i,Ft=e}function nl(e){e.return!==null&&(sn(e,1),df(e,1,0))}function al(e){for(;e===Ir;)Ir=La[--Na],La[Na]=null,Ri=La[--Na],La[Na]=null;for(;e===En;)En=Ot[--Vt],Ot[Vt]=null,Ft=Ot[--Vt],Ot[Vt]=null,It=Ot[--Vt],Ot[Vt]=null}function ff(e,t){Ot[Vt++]=It,Ot[Vt++]=Ft,Ot[Vt++]=En,It=t.id,Ft=t.overflow,En=e}var We=null,Re=null,pe=!1,Cn=null,jt=!1,il=Error(l(519));function zn(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Oi(Rt(t,e)),il}function hf(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Je]=e,t[ct]=i,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<er.length;n++)de(er[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Cd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),xd(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Um(t.textContent,n)?(i.popover!=null&&(de("beforetoggle",t),de("toggle",t)),i.onScroll!=null&&de("scroll",t),i.onScrollEnd!=null&&de("scrollend",t),i.onClick!=null&&(t.onclick=nn),t=!0):t=!1,t||zn(e,!0)}function mf(e){for(We=e.return;We;)switch(We.tag){case 5:case 31:case 13:jt=!1;return;case 27:case 3:jt=!0;return;default:We=We.return}}function _a(e){if(e!==We)return!1;if(!pe)return mf(e),pe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Au(e.type,e.memoizedProps)),n=!n),n&&Re&&zn(e),mf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Re=km(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Re=km(e)}else t===27?(t=Re,Hn(e.type)?(e=xu,xu=null,Re=e):Re=t):Re=We?Lt(e.stateNode.nextSibling):null;return!0}function ra(){Re=We=null,pe=!1}function rl(){var e=Cn;return e!==null&&(pt===null?pt=e:pt.push.apply(pt,e),Cn=null),e}function Oi(e){Cn===null?Cn=[e]:Cn.push(e)}var sl=w(null),sa=null,on=null;function xn(e,t,n){q(sl,t._currentValue),t._currentValue=n}function ln(e){e._currentValue=sl.current,L(sl)}function ol(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ll(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){var d=s.child;u=u.firstContext;e:for(;u!==null;){var p=u;u=s;for(var T=0;T<t.length;T++)if(p.context===t[T]){u.lanes|=n,p=u.alternate,p!==null&&(p.lanes|=n),ol(u.return,n,e),i||(d=null);break e}u=p.next}}else if(s.tag===18){if(d=s.return,d===null)throw Error(l(341));d.lanes|=n,u=d.alternate,u!==null&&(u.lanes|=n),ol(d,n,e),d=null}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===e){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}}function ka(e,t,n,i){e=null;for(var s=t,u=!1;s!==null;){if(!u){if((s.flags&524288)!==0)u=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var d=s.alternate;if(d===null)throw Error(l(387));if(d=d.memoizedProps,d!==null){var p=s.type;St(s.pendingProps.value,d.value)||(e!==null?e.push(p):e=[p])}}else if(s===Se.current){if(d=s.alternate,d===null)throw Error(l(387));d.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(rr):e=[rr])}s=s.return}e!==null&&ll(t,e,n,i),t.flags|=262144}function Fr(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){sa=e,on=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return pf(sa,e)}function Kr(e,t){return sa===null&&oa(e),pf(e,t)}function pf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},on===null){if(e===null)throw Error(l(308));on=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else on=on.next=t;return n}var L0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},N0=a.unstable_scheduleCallback,_0=a.unstable_NormalPriority,Pe={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ul(){return{controller:new L0,data:new Map,refCount:0}}function Vi(e){e.refCount--,e.refCount===0&&N0(_0,function(){e.controller.abort()})}var ji=null,cl=0,Ha=0,Ga=null;function k0(e,t){if(ji===null){var n=ji=[];cl=0,Ha=hu(),Ga={status:"pending",value:void 0,then:function(i){n.push(i)}}}return cl++,t.then(gf,gf),t}function gf(){if(--cl===0&&ji!==null){Ga!==null&&(Ga.status="fulfilled");var e=ji;ji=null,Ha=0,Ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function H0(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var yf=O.S;O.S=function(e,t){em=yt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&k0(e,t),yf!==null&&yf(e,t)};var la=w(null);function dl(){var e=la.current;return e!==null?e:Me.pooledCache}function Qr(e,t){t===null?q(la,la.current):q(la,t.pool)}function vf(){var e=dl();return e===null?null:{parent:Pe._currentValue,pool:e}}var Pa=Error(l(460)),fl=Error(l(474)),Zr=Error(l(542)),Jr={then:function(){}};function bf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(nn,nn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Af(e),e;default:if(typeof t.status=="string")t.then(nn,nn);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Af(e),e}throw ca=t,Pa}}function ua(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ca=n,Pa):n}}var ca=null;function Tf(){if(ca===null)throw Error(l(459));var e=ca;return ca=null,e}function Af(e){if(e===Pa||e===Zr)throw Error(l(483))}var qa=null,Bi=0;function Wr(e){var t=Bi;return Bi+=1,qa===null&&(qa=[]),Sf(qa,e,t)}function Li(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function $r(e,t){throw t.$$typeof===S?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function wf(e){function t(E,A){if(e){var C=E.deletions;C===null?(E.deletions=[A],E.flags|=16):C.push(A)}}function n(E,A){if(!e)return null;for(;A!==null;)t(E,A),A=A.sibling;return null}function i(E){for(var A=new Map;E!==null;)E.key!==null?A.set(E.key,E):A.set(E.index,E),E=E.sibling;return A}function s(E,A){return E=rn(E,A),E.index=0,E.sibling=null,E}function u(E,A,C){return E.index=C,e?(C=E.alternate,C!==null?(C=C.index,C<A?(E.flags|=67108866,A):C):(E.flags|=67108866,A)):(E.flags|=1048576,A)}function d(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function p(E,A,C,j){return A===null||A.tag!==6?(A=el(C,E.mode,j),A.return=E,A):(A=s(A,C),A.return=E,A)}function T(E,A,C,j){var $=C.type;return $===N?V(E,A,C.props.children,j,C.key):A!==null&&(A.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===W&&ua($)===A.type)?(A=s(A,C.props),Li(A,C),A.return=E,A):(A=Yr(C.type,C.key,C.props,null,E.mode,j),Li(A,C),A.return=E,A)}function x(E,A,C,j){return A===null||A.tag!==4||A.stateNode.containerInfo!==C.containerInfo||A.stateNode.implementation!==C.implementation?(A=tl(C,E.mode,j),A.return=E,A):(A=s(A,C.children||[]),A.return=E,A)}function V(E,A,C,j,$){return A===null||A.tag!==7?(A=ia(C,E.mode,j,$),A.return=E,A):(A=s(A,C),A.return=E,A)}function B(E,A,C){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=el(""+A,E.mode,C),A.return=E,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case z:return C=Yr(A.type,A.key,A.props,null,E.mode,C),Li(C,A),C.return=E,C;case M:return A=tl(A,E.mode,C),A.return=E,A;case W:return A=ua(A),B(E,A,C)}if(Ne(A)||Te(A))return A=ia(A,E.mode,C,null),A.return=E,A;if(typeof A.then=="function")return B(E,Wr(A),C);if(A.$$typeof===H)return B(E,Kr(E,A),C);$r(E,A)}return null}function D(E,A,C,j){var $=A!==null?A.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return $!==null?null:p(E,A,""+C,j);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case z:return C.key===$?T(E,A,C,j):null;case M:return C.key===$?x(E,A,C,j):null;case W:return C=ua(C),D(E,A,C,j)}if(Ne(C)||Te(C))return $!==null?null:V(E,A,C,j,null);if(typeof C.then=="function")return D(E,A,Wr(C),j);if(C.$$typeof===H)return D(E,A,Kr(E,C),j);$r(E,C)}return null}function R(E,A,C,j,$){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return E=E.get(C)||null,p(A,E,""+j,$);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case z:return E=E.get(j.key===null?C:j.key)||null,T(A,E,j,$);case M:return E=E.get(j.key===null?C:j.key)||null,x(A,E,j,$);case W:return j=ua(j),R(E,A,C,j,$)}if(Ne(j)||Te(j))return E=E.get(C)||null,V(A,E,j,$,null);if(typeof j.then=="function")return R(E,A,C,Wr(j),$);if(j.$$typeof===H)return R(E,A,C,Kr(A,j),$);$r(A,j)}return null}function I(E,A,C,j){for(var $=null,ge=null,Z=A,oe=A=0,he=null;Z!==null&&oe<C.length;oe++){Z.index>oe?(he=Z,Z=null):he=Z.sibling;var ye=D(E,Z,C[oe],j);if(ye===null){Z===null&&(Z=he);break}e&&Z&&ye.alternate===null&&t(E,Z),A=u(ye,A,oe),ge===null?$=ye:ge.sibling=ye,ge=ye,Z=he}if(oe===C.length)return n(E,Z),pe&&sn(E,oe),$;if(Z===null){for(;oe<C.length;oe++)Z=B(E,C[oe],j),Z!==null&&(A=u(Z,A,oe),ge===null?$=Z:ge.sibling=Z,ge=Z);return pe&&sn(E,oe),$}for(Z=i(Z);oe<C.length;oe++)he=R(Z,E,oe,C[oe],j),he!==null&&(e&&he.alternate!==null&&Z.delete(he.key===null?oe:he.key),A=u(he,A,oe),ge===null?$=he:ge.sibling=he,ge=he);return e&&Z.forEach(function(Yn){return t(E,Yn)}),pe&&sn(E,oe),$}function ee(E,A,C,j){if(C==null)throw Error(l(151));for(var $=null,ge=null,Z=A,oe=A=0,he=null,ye=C.next();Z!==null&&!ye.done;oe++,ye=C.next()){Z.index>oe?(he=Z,Z=null):he=Z.sibling;var Yn=D(E,Z,ye.value,j);if(Yn===null){Z===null&&(Z=he);break}e&&Z&&Yn.alternate===null&&t(E,Z),A=u(Yn,A,oe),ge===null?$=Yn:ge.sibling=Yn,ge=Yn,Z=he}if(ye.done)return n(E,Z),pe&&sn(E,oe),$;if(Z===null){for(;!ye.done;oe++,ye=C.next())ye=B(E,ye.value,j),ye!==null&&(A=u(ye,A,oe),ge===null?$=ye:ge.sibling=ye,ge=ye);return pe&&sn(E,oe),$}for(Z=i(Z);!ye.done;oe++,ye=C.next())ye=R(Z,E,oe,ye.value,j),ye!==null&&(e&&ye.alternate!==null&&Z.delete(ye.key===null?oe:ye.key),A=u(ye,A,oe),ge===null?$=ye:ge.sibling=ye,ge=ye);return e&&Z.forEach(function(Jb){return t(E,Jb)}),pe&&sn(E,oe),$}function xe(E,A,C,j){if(typeof C=="object"&&C!==null&&C.type===N&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case z:e:{for(var $=C.key;A!==null;){if(A.key===$){if($=C.type,$===N){if(A.tag===7){n(E,A.sibling),j=s(A,C.props.children),j.return=E,E=j;break e}}else if(A.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===W&&ua($)===A.type){n(E,A.sibling),j=s(A,C.props),Li(j,C),j.return=E,E=j;break e}n(E,A);break}else t(E,A);A=A.sibling}C.type===N?(j=ia(C.props.children,E.mode,j,C.key),j.return=E,E=j):(j=Yr(C.type,C.key,C.props,null,E.mode,j),Li(j,C),j.return=E,E=j)}return d(E);case M:e:{for($=C.key;A!==null;){if(A.key===$)if(A.tag===4&&A.stateNode.containerInfo===C.containerInfo&&A.stateNode.implementation===C.implementation){n(E,A.sibling),j=s(A,C.children||[]),j.return=E,E=j;break e}else{n(E,A);break}else t(E,A);A=A.sibling}j=tl(C,E.mode,j),j.return=E,E=j}return d(E);case W:return C=ua(C),xe(E,A,C,j)}if(Ne(C))return I(E,A,C,j);if(Te(C)){if($=Te(C),typeof $!="function")throw Error(l(150));return C=$.call(C),ee(E,A,C,j)}if(typeof C.then=="function")return xe(E,A,Wr(C),j);if(C.$$typeof===H)return xe(E,A,Kr(E,C),j);$r(E,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,A!==null&&A.tag===6?(n(E,A.sibling),j=s(A,C),j.return=E,E=j):(n(E,A),j=el(C,E.mode,j),j.return=E,E=j),d(E)):n(E,A)}return function(E,A,C,j){try{Bi=0;var $=xe(E,A,C,j);return qa=null,$}catch(Z){if(Z===Pa||Z===Zr)throw Z;var ge=Tt(29,Z,null,E.mode);return ge.lanes=j,ge.return=E,ge}}}var da=wf(!0),Ef=wf(!1),Mn=!1;function hl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ml(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Dn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Un(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(be&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Xr(e),of(e,null,n),t}return qr(e,i,t,n),Xr(e)}function Ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,md(e,n)}}function pl(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?s=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?s=u=t:u=u.next=t}else s=u=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var gl=!1;function _i(){if(gl){var e=Ga;if(e!==null)throw e}}function ki(e,t,n,i){gl=!1;var s=e.updateQueue;Mn=!1;var u=s.firstBaseUpdate,d=s.lastBaseUpdate,p=s.shared.pending;if(p!==null){s.shared.pending=null;var T=p,x=T.next;T.next=null,d===null?u=x:d.next=x,d=T;var V=e.alternate;V!==null&&(V=V.updateQueue,p=V.lastBaseUpdate,p!==d&&(p===null?V.firstBaseUpdate=x:p.next=x,V.lastBaseUpdate=T))}if(u!==null){var B=s.baseState;d=0,V=x=T=null,p=u;do{var D=p.lane&-536870913,R=D!==p.lane;if(R?(fe&D)===D:(i&D)===D){D!==0&&D===Ha&&(gl=!0),V!==null&&(V=V.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var I=e,ee=p;D=t;var xe=n;switch(ee.tag){case 1:if(I=ee.payload,typeof I=="function"){B=I.call(xe,B,D);break e}B=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=ee.payload,D=typeof I=="function"?I.call(xe,B,D):I,D==null)break e;B=b({},B,D);break e;case 2:Mn=!0}}D=p.callback,D!==null&&(e.flags|=64,R&&(e.flags|=8192),R=s.callbacks,R===null?s.callbacks=[D]:R.push(D))}else R={lane:D,tag:p.tag,payload:p.payload,callback:p.callback,next:null},V===null?(x=V=R,T=B):V=V.next=R,d|=D;if(p=p.next,p===null){if(p=s.shared.pending,p===null)break;R=p,p=R.next,R.next=null,s.lastBaseUpdate=R,s.shared.pending=null}}while(!0);V===null&&(T=B),s.baseState=T,s.firstBaseUpdate=x,s.lastBaseUpdate=V,u===null&&(s.shared.lanes=0),Bn|=d,e.lanes=d,e.memoizedState=B}}function Cf(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function zf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Cf(n[e],t)}var Xa=w(null),es=w(0);function xf(e,t){e=yn,q(es,e),q(Xa,t),yn=e|t.baseLanes}function yl(){q(es,yn),q(Xa,Xa.current)}function vl(){yn=es.current,L(Xa),L(es)}var At=w(null),Bt=null;function Rn(e){var t=e.alternate;q(ke,ke.current&1),q(At,e),Bt===null&&(t===null||Xa.current!==null||t.memoizedState!==null)&&(Bt=e)}function bl(e){q(ke,ke.current),q(At,e),Bt===null&&(Bt=e)}function Mf(e){e.tag===22?(q(ke,ke.current),q(At,e),Bt===null&&(Bt=e)):On()}function On(){q(ke,ke.current),q(At,At.current)}function wt(e){L(At),Bt===e&&(Bt=null),L(ke)}var ke=w(0);function ts(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Cu(n)||zu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var un=0,re=null,Ce=null,qe=null,ns=!1,Ya=!1,fa=!1,as=0,Hi=0,Ia=null,G0=0;function je(){throw Error(l(321))}function Sl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Tl(e,t,n,i,s,u){return un=u,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?dh:Ll,fa=!1,u=n(i,s),fa=!1,Ya&&(u=Uf(t,n,i,s)),Df(e),u}function Df(e){O.H=qi;var t=Ce!==null&&Ce.next!==null;if(un=0,qe=Ce=re=null,ns=!1,Hi=0,Ia=null,t)throw Error(l(300));e===null||Xe||(e=e.dependencies,e!==null&&Fr(e)&&(Xe=!0))}function Uf(e,t,n,i){re=e;var s=0;do{if(Ya&&(Ia=null),Hi=0,Ya=!1,25<=s)throw Error(l(301));if(s+=1,qe=Ce=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}O.H=fh,u=t(n,i)}while(Ya);return u}function P0(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?Gi(t):t,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(re.flags|=1024),t}function Al(){var e=as!==0;return as=0,e}function wl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function El(e){if(ns){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ns=!1}un=0,qe=Ce=re=null,Ya=!1,Hi=as=0,Ia=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?re.memoizedState=qe=e:qe=qe.next=e,qe}function He(){if(Ce===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=qe===null?re.memoizedState:qe.next;if(t!==null)qe=t,Ce=e;else{if(e===null)throw re.alternate===null?Error(l(467)):Error(l(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},qe===null?re.memoizedState=qe=e:qe=qe.next=e}return qe}function is(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Gi(e){var t=Hi;return Hi+=1,Ia===null&&(Ia=[]),e=Sf(Ia,e,t),t=re,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?dh:Ll),e}function rs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Gi(e);if(e.$$typeof===H)return $e(e)}throw Error(l(438,String(e)))}function Cl(e){var t=null,n=re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=re.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=is(),re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=te;return t.index++,n}function cn(e,t){return typeof t=="function"?t(e):t}function ss(e){var t=He();return zl(t,Ce,e)}function zl(e,t,n){var i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=n;var s=e.baseQueue,u=i.pending;if(u!==null){if(s!==null){var d=s.next;s.next=u.next,u.next=d}t.baseQueue=s=u,i.pending=null}if(u=e.baseState,s===null)e.memoizedState=u;else{t=s.next;var p=d=null,T=null,x=t,V=!1;do{var B=x.lane&-536870913;if(B!==x.lane?(fe&B)===B:(un&B)===B){var D=x.revertLane;if(D===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),B===Ha&&(V=!0);else if((un&D)===D){x=x.next,D===Ha&&(V=!0);continue}else B={lane:0,revertLane:x.revertLane,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},T===null?(p=T=B,d=u):T=T.next=B,re.lanes|=D,Bn|=D;B=x.action,fa&&n(u,B),u=x.hasEagerState?x.eagerState:n(u,B)}else D={lane:B,revertLane:x.revertLane,gesture:x.gesture,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},T===null?(p=T=D,d=u):T=T.next=D,re.lanes|=B,Bn|=B;x=x.next}while(x!==null&&x!==t);if(T===null?d=u:T.next=p,!St(u,e.memoizedState)&&(Xe=!0,V&&(n=Ga,n!==null)))throw n;e.memoizedState=u,e.baseState=d,e.baseQueue=T,i.lastRenderedState=u}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function xl(e){var t=He(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,u=t.memoizedState;if(s!==null){n.pending=null;var d=s=s.next;do u=e(u,d.action),d=d.next;while(d!==s);St(u,t.memoizedState)||(Xe=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,i]}function Rf(e,t,n){var i=re,s=He(),u=pe;if(u){if(n===void 0)throw Error(l(407));n=n()}else n=t();var d=!St((Ce||s).memoizedState,n);if(d&&(s.memoizedState=n,Xe=!0),s=s.queue,Ul(jf.bind(null,i,s,e),[e]),s.getSnapshot!==t||d||qe!==null&&qe.memoizedState.tag&1){if(i.flags|=2048,Fa(9,{destroy:void 0},Vf.bind(null,i,s,n,t),null),Me===null)throw Error(l(349));u||(un&127)!==0||Of(i,t,n)}return n}function Of(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t=is(),re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vf(e,t,n,i){t.value=n,t.getSnapshot=i,Bf(t)&&Lf(e)}function jf(e,t,n){return n(function(){Bf(t)&&Lf(e)})}function Bf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function Lf(e){var t=aa(e,2);t!==null&&gt(t,e,2)}function Ml(e){var t=ot();if(typeof e=="function"){var n=e;if(e=n(),fa){Tn(!0);try{n()}finally{Tn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:e},t}function Nf(e,t,n,i){return e.baseState=n,zl(e,Ce,typeof i=="function"?i:cn)}function q0(e,t,n,i,s){if(us(e))throw Error(l(485));if(e=t.action,e!==null){var u={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){u.listeners.push(d)}};O.T!==null?n(!0):u.isTransition=!1,i(u),n=t.pending,n===null?(u.next=t.pending=u,_f(t,u)):(u.next=n.next,t.pending=n.next=u)}}function _f(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var u=O.T,d={};O.T=d;try{var p=n(s,i),T=O.S;T!==null&&T(d,p),kf(e,t,p)}catch(x){Dl(e,t,x)}finally{u!==null&&d.types!==null&&(u.types=d.types),O.T=u}}else try{u=n(s,i),kf(e,t,u)}catch(x){Dl(e,t,x)}}function kf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Hf(e,t,i)},function(i){return Dl(e,t,i)}):Hf(e,t,n)}function Hf(e,t,n){t.status="fulfilled",t.value=n,Gf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,_f(e,n)))}function Dl(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Gf(t),t=t.next;while(t!==i)}e.action=null}function Gf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Pf(e,t){return t}function qf(e,t){if(pe){var n=Me.formState;if(n!==null){e:{var i=re;if(pe){if(Re){t:{for(var s=Re,u=jt;s.nodeType!==8;){if(!u){s=null;break t}if(s=Lt(s.nextSibling),s===null){s=null;break t}}u=s.data,s=u==="F!"||u==="F"?s:null}if(s){Re=Lt(s.nextSibling),i=s.data==="F!";break e}}zn(i)}i=!1}i&&(t=n[0])}}return n=ot(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pf,lastRenderedState:t},n.queue=i,n=lh.bind(null,re,i),i.dispatch=n,i=Ml(!1),u=Bl.bind(null,re,!1,i.queue),i=ot(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=q0.bind(null,re,s,u,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Xf(e){var t=He();return Yf(t,Ce,e)}function Yf(e,t,n){if(t=zl(e,t,Pf)[0],e=ss(cn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Gi(t)}catch(d){throw d===Pa?Zr:d}else i=t;t=He();var s=t.queue,u=s.dispatch;return n!==t.memoizedState&&(re.flags|=2048,Fa(9,{destroy:void 0},X0.bind(null,s,n),null)),[i,u,e]}function X0(e,t){e.action=t}function If(e){var t=He(),n=Ce;if(n!==null)return Yf(t,n,e);He(),t=t.memoizedState,n=He();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Fa(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=re.updateQueue,t===null&&(t=is(),re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Ff(){return He().memoizedState}function os(e,t,n,i){var s=ot();re.flags|=e,s.memoizedState=Fa(1|t,{destroy:void 0},n,i===void 0?null:i)}function ls(e,t,n,i){var s=He();i=i===void 0?null:i;var u=s.memoizedState.inst;Ce!==null&&i!==null&&Sl(i,Ce.memoizedState.deps)?s.memoizedState=Fa(t,u,n,i):(re.flags|=e,s.memoizedState=Fa(1|t,u,n,i))}function Kf(e,t){os(8390656,8,e,t)}function Ul(e,t){ls(2048,8,e,t)}function Y0(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=is(),re.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Qf(e){var t=He().memoizedState;return Y0({ref:t,nextImpl:e}),function(){if((be&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function Zf(e,t){return ls(4,2,e,t)}function Jf(e,t){return ls(4,4,e,t)}function Wf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $f(e,t,n){n=n!=null?n.concat([e]):null,ls(4,4,Wf.bind(null,t,e),n)}function Rl(){}function eh(e,t){var n=He();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Sl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function th(e,t){var n=He();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Sl(t,i[1]))return i[0];if(i=e(),fa){Tn(!0);try{e()}finally{Tn(!1)}}return n.memoizedState=[i,t],i}function Ol(e,t,n){return n===void 0||(un&1073741824)!==0&&(fe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=nm(),re.lanes|=e,Bn|=e,n)}function nh(e,t,n,i){return St(n,t)?n:Xa.current!==null?(e=Ol(e,n,i),St(e,t)||(Xe=!0),e):(un&42)===0||(un&1073741824)!==0&&(fe&261930)===0?(Xe=!0,e.memoizedState=n):(e=nm(),re.lanes|=e,Bn|=e,t)}function ah(e,t,n,i,s){var u=G.p;G.p=u!==0&&8>u?u:8;var d=O.T,p={};O.T=p,Bl(e,!1,t,n);try{var T=s(),x=O.S;if(x!==null&&x(p,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var V=H0(T,i);Pi(e,t,V,zt(e))}else Pi(e,t,i,zt(e))}catch(B){Pi(e,t,{then:function(){},status:"rejected",reason:B},zt())}finally{G.p=u,d!==null&&p.types!==null&&(d.types=p.types),O.T=d}}function I0(){}function Vl(e,t,n,i){if(e.tag!==5)throw Error(l(476));var s=ih(e).queue;ah(e,s,t,Y,n===null?I0:function(){return rh(e),n(i)})}function ih(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:Y},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function rh(e){var t=ih(e);t.next===null&&(t=e.alternate.memoizedState),Pi(e,t.next.queue,{},zt())}function jl(){return $e(rr)}function sh(){return He().memoizedState}function oh(){return He().memoizedState}function F0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=zt();e=Dn(n);var i=Un(t,e,n);i!==null&&(gt(i,t,n),Ni(i,t,n)),t={cache:ul()},e.payload=t;return}t=t.return}}function K0(e,t,n){var i=zt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},us(e)?uh(t,n):(n=Wo(e,t,n,i),n!==null&&(gt(n,e,i),ch(n,t,i)))}function lh(e,t,n){var i=zt();Pi(e,t,n,i)}function Pi(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(us(e))uh(t,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var d=t.lastRenderedState,p=u(d,n);if(s.hasEagerState=!0,s.eagerState=p,St(p,d))return qr(e,t,s,0),Me===null&&Pr(),!1}catch{}if(n=Wo(e,t,s,i),n!==null)return gt(n,e,i),ch(n,t,i),!0}return!1}function Bl(e,t,n,i){if(i={lane:2,revertLane:hu(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},us(e)){if(t)throw Error(l(479))}else t=Wo(e,n,i,2),t!==null&&gt(t,e,2)}function us(e){var t=e.alternate;return e===re||t!==null&&t===re}function uh(e,t){Ya=ns=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ch(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,md(e,n)}}var qi={readContext:$e,use:rs,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je};qi.useEffectEvent=je;var dh={readContext:$e,use:rs,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:Kf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,os(4194308,4,Wf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return os(4194308,4,e,t)},useInsertionEffect:function(e,t){os(4,2,e,t)},useMemo:function(e,t){var n=ot();t=t===void 0?null:t;var i=e();if(fa){Tn(!0);try{e()}finally{Tn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=ot();if(n!==void 0){var s=n(t);if(fa){Tn(!0);try{n(t)}finally{Tn(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=K0.bind(null,re,e),[i.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=Ml(e);var t=e.queue,n=lh.bind(null,re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Rl,useDeferredValue:function(e,t){var n=ot();return Ol(n,e,t)},useTransition:function(){var e=Ml(!1);return e=ah.bind(null,re,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=re,s=ot();if(pe){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Me===null)throw Error(l(349));(fe&127)!==0||Of(i,t,n)}s.memoizedState=n;var u={value:n,getSnapshot:t};return s.queue=u,Kf(jf.bind(null,i,u,e),[e]),i.flags|=2048,Fa(9,{destroy:void 0},Vf.bind(null,i,u,n,t),null),n},useId:function(){var e=ot(),t=Me.identifierPrefix;if(pe){var n=Ft,i=It;n=(i&~(1<<32-bt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=as++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=G0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:jl,useFormState:qf,useActionState:qf,useOptimistic:function(e){var t=ot();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Bl.bind(null,re,!0,n),n.dispatch=t,[e,t]},useMemoCache:Cl,useCacheRefresh:function(){return ot().memoizedState=F0.bind(null,re)},useEffectEvent:function(e){var t=ot(),n={impl:e};return t.memoizedState=n,function(){if((be&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}},Ll={readContext:$e,use:rs,useCallback:eh,useContext:$e,useEffect:Ul,useImperativeHandle:$f,useInsertionEffect:Zf,useLayoutEffect:Jf,useMemo:th,useReducer:ss,useRef:Ff,useState:function(){return ss(cn)},useDebugValue:Rl,useDeferredValue:function(e,t){var n=He();return nh(n,Ce.memoizedState,e,t)},useTransition:function(){var e=ss(cn)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Gi(e),t]},useSyncExternalStore:Rf,useId:sh,useHostTransitionStatus:jl,useFormState:Xf,useActionState:Xf,useOptimistic:function(e,t){var n=He();return Nf(n,Ce,e,t)},useMemoCache:Cl,useCacheRefresh:oh};Ll.useEffectEvent=Qf;var fh={readContext:$e,use:rs,useCallback:eh,useContext:$e,useEffect:Ul,useImperativeHandle:$f,useInsertionEffect:Zf,useLayoutEffect:Jf,useMemo:th,useReducer:xl,useRef:Ff,useState:function(){return xl(cn)},useDebugValue:Rl,useDeferredValue:function(e,t){var n=He();return Ce===null?Ol(n,e,t):nh(n,Ce.memoizedState,e,t)},useTransition:function(){var e=xl(cn)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Gi(e),t]},useSyncExternalStore:Rf,useId:sh,useHostTransitionStatus:jl,useFormState:If,useActionState:If,useOptimistic:function(e,t){var n=He();return Ce!==null?Nf(n,Ce,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Cl,useCacheRefresh:oh};fh.useEffectEvent=Qf;function Nl(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _l={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=zt(),s=Dn(i);s.payload=t,n!=null&&(s.callback=n),t=Un(e,s,i),t!==null&&(gt(t,e,i),Ni(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=zt(),s=Dn(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Un(e,s,i),t!==null&&(gt(t,e,i),Ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zt(),i=Dn(n);i.tag=2,t!=null&&(i.callback=t),t=Un(e,i,n),t!==null&&(gt(t,e,n),Ni(t,e,n))}};function hh(e,t,n,i,s,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,d):t.prototype&&t.prototype.isPureReactComponent?!Di(n,i)||!Di(s,u):!0}function mh(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&_l.enqueueReplaceState(t,t.state,null)}function ha(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=b({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function ph(e){Gr(e)}function gh(e){console.error(e)}function yh(e){Gr(e)}function cs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function vh(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function kl(e,t,n){return n=Dn(n),n.tag=3,n.payload={element:null},n.callback=function(){cs(e,t)},n}function bh(e){return e=Dn(e),e.tag=3,e}function Sh(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var u=i.value;e.payload=function(){return s(u)},e.callback=function(){vh(t,n,i)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){vh(t,n,i),typeof s!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var p=i.stack;this.componentDidCatch(i.value,{componentStack:p!==null?p:""})})}function Q0(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ka(t,n,s,!0),n=At.current,n!==null){switch(n.tag){case 31:case 13:return Bt===null?As():n.alternate===null&&Be===0&&(Be=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Jr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),cu(e,i,s)),!1;case 22:return n.flags|=65536,i===Jr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),cu(e,i,s)),!1}throw Error(l(435,n.tag))}return cu(e,i,s),As(),!1}if(pe)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==il&&(e=Error(l(422),{cause:i}),Oi(Rt(e,n)))):(i!==il&&(t=Error(l(423),{cause:i}),Oi(Rt(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Rt(i,n),s=kl(e.stateNode,i,s),pl(e,s),Be!==4&&(Be=2)),!1;var u=Error(l(520),{cause:i});if(u=Rt(u,n),Ji===null?Ji=[u]:Ji.push(u),Be!==4&&(Be=2),t===null)return!0;i=Rt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=kl(n.stateNode,i,e),pl(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ln===null||!Ln.has(u))))return n.flags|=65536,s&=-s,n.lanes|=s,s=bh(s),Sh(s,e,n,i),pl(n,s),!1}n=n.return}while(n!==null);return!1}var Hl=Error(l(461)),Xe=!1;function et(e,t,n,i){t.child=e===null?Ef(t,null,n,i):da(t,e.child,n,i)}function Th(e,t,n,i,s){n=n.render;var u=t.ref;if("ref"in i){var d={};for(var p in i)p!=="ref"&&(d[p]=i[p])}else d=i;return oa(t),i=Tl(e,t,n,d,u,s),p=Al(),e!==null&&!Xe?(wl(e,t,s),dn(e,t,s)):(pe&&p&&nl(t),t.flags|=1,et(e,t,i,s),t.child)}function Ah(e,t,n,i,s){if(e===null){var u=n.type;return typeof u=="function"&&!$o(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,wh(e,t,u,i,s)):(e=Yr(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Kl(e,s)){var d=u.memoizedProps;if(n=n.compare,n=n!==null?n:Di,n(d,i)&&e.ref===t.ref)return dn(e,t,s)}return t.flags|=1,e=rn(u,i),e.ref=t.ref,e.return=t,t.child=e}function wh(e,t,n,i,s){if(e!==null){var u=e.memoizedProps;if(Di(u,i)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=i=u,Kl(e,s))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,dn(e,t,s)}return Gl(e,t,n,i,s)}function Eh(e,t,n,i){var s=i.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~u}else i=0,t.child=null;return Ch(e,t,u,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qr(t,u!==null?u.cachePool:null),u!==null?xf(t,u):yl(),Mf(t);else return i=t.lanes=536870912,Ch(e,t,u!==null?u.baseLanes|n:n,n,i)}else u!==null?(Qr(t,u.cachePool),xf(t,u),On(),t.memoizedState=null):(e!==null&&Qr(t,null),yl(),On());return et(e,t,s,n),t.child}function Xi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ch(e,t,n,i,s){var u=dl();return u=u===null?null:{parent:Pe._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&Qr(t,null),yl(),Mf(t),e!==null&&ka(e,t,i,!0),t.childLanes=s,null}function ds(e,t){return t=hs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zh(e,t,n){return da(t,e.child,null,n),e=ds(t,t.pendingProps),e.flags|=2,wt(t),t.memoizedState=null,e}function Z0(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(pe){if(i.mode==="hidden")return e=ds(t,i),t.lanes=536870912,Xi(null,e);if(bl(t),(e=Re)?(e=_m(e,jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:En!==null?{id:It,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},n=uf(e),n.return=t,t.child=n,We=t,Re=null)):e=null,e===null)throw zn(t);return t.lanes=536870912,null}return ds(t,i)}var u=e.memoizedState;if(u!==null){var d=u.dehydrated;if(bl(t),s)if(t.flags&256)t.flags&=-257,t=zh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(Xe||ka(e,t,n,!1),s=(n&e.childLanes)!==0,Xe||s){if(i=Me,i!==null&&(d=pd(i,n),d!==0&&d!==u.retryLane))throw u.retryLane=d,aa(e,d),gt(i,e,d),Hl;As(),t=zh(e,t,n)}else e=u.treeContext,Re=Lt(d.nextSibling),We=t,pe=!0,Cn=null,jt=!1,e!==null&&ff(t,e),t=ds(t,i),t.flags|=4096;return t}return e=rn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Gl(e,t,n,i,s){return oa(t),n=Tl(e,t,n,i,void 0,s),i=Al(),e!==null&&!Xe?(wl(e,t,s),dn(e,t,s)):(pe&&i&&nl(t),t.flags|=1,et(e,t,n,s),t.child)}function xh(e,t,n,i,s,u){return oa(t),t.updateQueue=null,n=Uf(t,i,n,s),Df(e),i=Al(),e!==null&&!Xe?(wl(e,t,u),dn(e,t,u)):(pe&&i&&nl(t),t.flags|=1,et(e,t,n,u),t.child)}function Mh(e,t,n,i,s){if(oa(t),t.stateNode===null){var u=Ba,d=n.contextType;typeof d=="object"&&d!==null&&(u=$e(d)),u=new n(i,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=_l,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=i,u.state=t.memoizedState,u.refs={},hl(t),d=n.contextType,u.context=typeof d=="object"&&d!==null?$e(d):Ba,u.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Nl(t,n,d,i),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(d=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),d!==u.state&&_l.enqueueReplaceState(u,u.state,null),ki(t,i,u,s),_i(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){u=t.stateNode;var p=t.memoizedProps,T=ha(n,p);u.props=T;var x=u.context,V=n.contextType;d=Ba,typeof V=="object"&&V!==null&&(d=$e(V));var B=n.getDerivedStateFromProps;V=typeof B=="function"||typeof u.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,V||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p||x!==d)&&mh(t,u,i,d),Mn=!1;var D=t.memoizedState;u.state=D,ki(t,i,u,s),_i(),x=t.memoizedState,p||D!==x||Mn?(typeof B=="function"&&(Nl(t,n,B,i),x=t.memoizedState),(T=Mn||hh(t,n,T,i,D,x,d))?(V||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=x),u.props=i,u.state=x,u.context=d,i=T):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{u=t.stateNode,ml(e,t),d=t.memoizedProps,V=ha(n,d),u.props=V,B=t.pendingProps,D=u.context,x=n.contextType,T=Ba,typeof x=="object"&&x!==null&&(T=$e(x)),p=n.getDerivedStateFromProps,(x=typeof p=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==B||D!==T)&&mh(t,u,i,T),Mn=!1,D=t.memoizedState,u.state=D,ki(t,i,u,s),_i();var R=t.memoizedState;d!==B||D!==R||Mn||e!==null&&e.dependencies!==null&&Fr(e.dependencies)?(typeof p=="function"&&(Nl(t,n,p,i),R=t.memoizedState),(V=Mn||hh(t,n,V,i,D,R,T)||e!==null&&e.dependencies!==null&&Fr(e.dependencies))?(x||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,R,T),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,R,T)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=R),u.props=i,u.state=R,u.context=T,i=V):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),i=!1)}return u=i,fs(e,t),i=(t.flags&128)!==0,u||i?(u=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&i?(t.child=da(t,e.child,null,s),t.child=da(t,null,n,s)):et(e,t,n,s),t.memoizedState=u.state,e=t.child):e=dn(e,t,s),e}function Dh(e,t,n,i){return ra(),t.flags|=256,et(e,t,n,i),t.child}var Pl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ql(e){return{baseLanes:e,cachePool:vf()}}function Xl(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ct),e}function Uh(e,t,n){var i=t.pendingProps,s=!1,u=(t.flags&128)!==0,d;if((d=u)||(d=e!==null&&e.memoizedState===null?!1:(ke.current&2)!==0),d&&(s=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(pe){if(s?Rn(t):On(),(e=Re)?(e=_m(e,jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:En!==null?{id:It,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},n=uf(e),n.return=t,t.child=n,We=t,Re=null)):e=null,e===null)throw zn(t);return zu(e)?t.lanes=32:t.lanes=536870912,null}var p=i.children;return i=i.fallback,s?(On(),s=t.mode,p=hs({mode:"hidden",children:p},s),i=ia(i,s,n,null),p.return=t,i.return=t,p.sibling=i,t.child=p,i=t.child,i.memoizedState=ql(n),i.childLanes=Xl(e,d,n),t.memoizedState=Pl,Xi(null,i)):(Rn(t),Yl(t,p))}var T=e.memoizedState;if(T!==null&&(p=T.dehydrated,p!==null)){if(u)t.flags&256?(Rn(t),t.flags&=-257,t=Il(e,t,n)):t.memoizedState!==null?(On(),t.child=e.child,t.flags|=128,t=null):(On(),p=i.fallback,s=t.mode,i=hs({mode:"visible",children:i.children},s),p=ia(p,s,n,null),p.flags|=2,i.return=t,p.return=t,i.sibling=p,t.child=i,da(t,e.child,null,n),i=t.child,i.memoizedState=ql(n),i.childLanes=Xl(e,d,n),t.memoizedState=Pl,t=Xi(null,i));else if(Rn(t),zu(p)){if(d=p.nextSibling&&p.nextSibling.dataset,d)var x=d.dgst;d=x,i=Error(l(419)),i.stack="",i.digest=d,Oi({value:i,source:null,stack:null}),t=Il(e,t,n)}else if(Xe||ka(e,t,n,!1),d=(n&e.childLanes)!==0,Xe||d){if(d=Me,d!==null&&(i=pd(d,n),i!==0&&i!==T.retryLane))throw T.retryLane=i,aa(e,i),gt(d,e,i),Hl;Cu(p)||As(),t=Il(e,t,n)}else Cu(p)?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,Re=Lt(p.nextSibling),We=t,pe=!0,Cn=null,jt=!1,e!==null&&ff(t,e),t=Yl(t,i.children),t.flags|=4096);return t}return s?(On(),p=i.fallback,s=t.mode,T=e.child,x=T.sibling,i=rn(T,{mode:"hidden",children:i.children}),i.subtreeFlags=T.subtreeFlags&65011712,x!==null?p=rn(x,p):(p=ia(p,s,n,null),p.flags|=2),p.return=t,i.return=t,i.sibling=p,t.child=i,Xi(null,i),i=t.child,p=e.child.memoizedState,p===null?p=ql(n):(s=p.cachePool,s!==null?(T=Pe._currentValue,s=s.parent!==T?{parent:T,pool:T}:s):s=vf(),p={baseLanes:p.baseLanes|n,cachePool:s}),i.memoizedState=p,i.childLanes=Xl(e,d,n),t.memoizedState=Pl,Xi(e.child,i)):(Rn(t),n=e.child,e=n.sibling,n=rn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Yl(e,t){return t=hs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hs(e,t){return e=Tt(22,e,null,t),e.lanes=0,e}function Il(e,t,n){return da(t,e.child,null,n),e=Yl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rh(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ol(e.return,t,n)}function Fl(e,t,n,i,s,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:u}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=n,d.tailMode=s,d.treeForkCount=u)}function Oh(e,t,n){var i=t.pendingProps,s=i.revealOrder,u=i.tail;i=i.children;var d=ke.current,p=(d&2)!==0;if(p?(d=d&1|2,t.flags|=128):d&=1,q(ke,d),et(e,t,i,n),i=pe?Ri:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rh(e,n,t);else if(e.tag===19)Rh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ts(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Fl(t,!1,s,n,u,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ts(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Fl(t,!0,n,null,u,i);break;case"together":Fl(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ka(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Kl(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Fr(e)))}function J0(e,t,n){switch(t.tag){case 3:st(t,t.stateNode.containerInfo),xn(t,Pe,e.memoizedState.cache),ra();break;case 27:case 5:gi(t);break;case 4:st(t,t.stateNode.containerInfo);break;case 10:xn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,bl(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Rn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Uh(e,t,n):(Rn(t),e=dn(e,t,n),e!==null?e.sibling:null);Rn(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ka(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Oh(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),q(ke,ke.current),i)break;return null;case 22:return t.lanes=0,Eh(e,t,n,t.pendingProps);case 24:xn(t,Pe,e.memoizedState.cache)}return dn(e,t,n)}function Vh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Kl(e,n)&&(t.flags&128)===0)return Xe=!1,J0(e,t,n);Xe=(e.flags&131072)!==0}else Xe=!1,pe&&(t.flags&1048576)!==0&&df(t,Ri,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ua(t.elementType),t.type=e,typeof e=="function")$o(e)?(i=ha(e,i),t.tag=1,t=Mh(null,t,e,i,n)):(t.tag=0,t=Gl(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===X){t.tag=11,t=Th(null,t,e,i,n);break e}else if(s===F){t.tag=14,t=Ah(null,t,e,i,n);break e}}throw t=Ge(e)||e,Error(l(306,t,""))}}return t;case 0:return Gl(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=ha(i,t.pendingProps),Mh(e,t,i,s,n);case 3:e:{if(st(t,t.stateNode.containerInfo),e===null)throw Error(l(387));i=t.pendingProps;var u=t.memoizedState;s=u.element,ml(e,t),ki(t,i,null,n);var d=t.memoizedState;if(i=d.cache,xn(t,Pe,i),i!==u.cache&&ll(t,[Pe],n,!0),_i(),i=d.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Dh(e,t,i,n);break e}else if(i!==s){s=Rt(Error(l(424)),t),Oi(s),t=Dh(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=Lt(e.firstChild),We=t,pe=!0,Cn=null,jt=!0,n=Ef(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ra(),i===s){t=dn(e,t,n);break e}et(e,t,i,n)}t=t.child}return t;case 26:return fs(e,t),e===null?(n=Xm(t.type,null,t.pendingProps,null))?t.memoizedState=n:pe||(n=t.type,e=t.pendingProps,i=Ds(ue.current).createElement(n),i[Je]=t,i[ct]=e,tt(i,n,e),Qe(i),t.stateNode=i):t.memoizedState=Xm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return gi(t),e===null&&pe&&(i=t.stateNode=Gm(t.type,t.pendingProps,ue.current),We=t,jt=!0,s=Re,Hn(t.type)?(xu=s,Re=Lt(i.firstChild)):Re=s),et(e,t,t.pendingProps.children,n),fs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&pe&&((s=i=Re)&&(i=xb(i,t.type,t.pendingProps,jt),i!==null?(t.stateNode=i,We=t,Re=Lt(i.firstChild),jt=!1,s=!0):s=!1),s||zn(t)),gi(t),s=t.type,u=t.pendingProps,d=e!==null?e.memoizedProps:null,i=u.children,Au(s,u)?i=null:d!==null&&Au(s,d)&&(t.flags|=32),t.memoizedState!==null&&(s=Tl(e,t,P0,null,null,n),rr._currentValue=s),fs(e,t),et(e,t,i,n),t.child;case 6:return e===null&&pe&&((e=n=Re)&&(n=Mb(n,t.pendingProps,jt),n!==null?(t.stateNode=n,We=t,Re=null,e=!0):e=!1),e||zn(t)),null;case 13:return Uh(e,t,n);case 4:return st(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=da(t,null,i,n):et(e,t,i,n),t.child;case 11:return Th(e,t,t.type,t.pendingProps,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,xn(t,t.type,i.value),et(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,oa(t),s=$e(s),i=i(s),t.flags|=1,et(e,t,i,n),t.child;case 14:return Ah(e,t,t.type,t.pendingProps,n);case 15:return wh(e,t,t.type,t.pendingProps,n);case 19:return Oh(e,t,n);case 31:return Z0(e,t,n);case 22:return Eh(e,t,n,t.pendingProps);case 24:return oa(t),i=$e(Pe),e===null?(s=dl(),s===null&&(s=Me,u=ul(),s.pooledCache=u,u.refCount++,u!==null&&(s.pooledCacheLanes|=n),s=u),t.memoizedState={parent:i,cache:s},hl(t),xn(t,Pe,s)):((e.lanes&n)!==0&&(ml(e,t),ki(t,null,null,n),_i()),s=e.memoizedState,u=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),xn(t,Pe,i)):(i=u.cache,xn(t,Pe,i),i!==s.cache&&ll(t,[Pe],n,!0))),et(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function fn(e){e.flags|=4}function Ql(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(sm())e.flags|=8192;else throw ca=Jr,fl}else e.flags&=-16777217}function jh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Qm(t))if(sm())e.flags|=8192;else throw ca=Jr,fl}function ms(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?fd():536870912,e.lanes|=t,Ja|=t)}function Yi(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function W0(e,t,n){var i=t.pendingProps;switch(al(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ln(Pe),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(_a(t)?fn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rl())),Oe(t),null;case 26:var s=t.type,u=t.memoizedState;return e===null?(fn(t),u!==null?(Oe(t),jh(t,u)):(Oe(t),Ql(t,s,null,i,n))):u?u!==e.memoizedState?(fn(t),Oe(t),jh(t,u)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&fn(t),Oe(t),Ql(t,s,e,i,n)),null;case 27:if(Cr(t),n=ue.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&fn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Oe(t),null}e=Q.current,_a(t)?hf(t):(e=Gm(s,i,n),t.stateNode=e,fn(t))}return Oe(t),null;case 5:if(Cr(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&fn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Oe(t),null}if(u=Q.current,_a(t))hf(t);else{var d=Ds(ue.current);switch(u){case 1:u=d.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:u=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":u=d.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":u=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":u=d.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?d.createElement(s,{is:i.is}):d.createElement(s)}}u[Je]=t,u[ct]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)u.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=u;e:switch(tt(u,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&fn(t)}}return Oe(t),Ql(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&fn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(e=ue.current,_a(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=We,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[Je]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Um(e.nodeValue,n)),e||zn(t,!0)}else e=Ds(e).createTextNode(i),e[Je]=t,t.stateNode=e}return Oe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=_a(t),n!==null){if(e===null){if(!i)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[Je]=t}else ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else n=rl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(wt(t),t):(wt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Oe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=_a(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[Je]=t}else ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),s=!1}else s=rl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(wt(t),t):(wt(t),null)}return wt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ms(t,t.updateQueue),Oe(t),null);case 4:return _e(),e===null&&yu(t.stateNode.containerInfo),Oe(t),null;case 10:return ln(t.type),Oe(t),null;case 19:if(L(ke),i=t.memoizedState,i===null)return Oe(t),null;if(s=(t.flags&128)!==0,u=i.rendering,u===null)if(s)Yi(i,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=ts(e),u!==null){for(t.flags|=128,Yi(i,!1),e=u.updateQueue,t.updateQueue=e,ms(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)lf(n,e),n=n.sibling;return q(ke,ke.current&1|2),pe&&sn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&yt()>bs&&(t.flags|=128,s=!0,Yi(i,!1),t.lanes=4194304)}else{if(!s)if(e=ts(u),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,ms(t,e),Yi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!pe)return Oe(t),null}else 2*yt()-i.renderingStartTime>bs&&n!==536870912&&(t.flags|=128,s=!0,Yi(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(e=i.last,e!==null?e.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=yt(),e.sibling=null,n=ke.current,q(ke,s?n&1|2:n&1),pe&&sn(t,i.treeForkCount),e):(Oe(t),null);case 22:case 23:return wt(t),vl(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),n=t.updateQueue,n!==null&&ms(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&L(la),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ln(Pe),Oe(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function $0(e,t){switch(al(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ln(Pe),_e(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Cr(t),null;case 31:if(t.memoizedState!==null){if(wt(t),t.alternate===null)throw Error(l(340));ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(wt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(ke),null;case 4:return _e(),null;case 10:return ln(t.type),null;case 22:case 23:return wt(t),vl(),e!==null&&L(la),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ln(Pe),null;case 25:return null;default:return null}}function Bh(e,t){switch(al(t),t.tag){case 3:ln(Pe),_e();break;case 26:case 27:case 5:Cr(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&wt(t);break;case 13:wt(t);break;case 19:L(ke);break;case 10:ln(t.type);break;case 22:case 23:wt(t),vl(),e!==null&&L(la);break;case 24:ln(Pe)}}function Ii(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var u=n.create,d=n.inst;i=u(),d.destroy=i}n=n.next}while(n!==s)}}catch(p){we(t,t.return,p)}}function Vn(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var u=s.next;i=u;do{if((i.tag&e)===e){var d=i.inst,p=d.destroy;if(p!==void 0){d.destroy=void 0,s=t;var T=n,x=p;try{x()}catch(V){we(s,T,V)}}}i=i.next}while(i!==u)}}catch(V){we(t,t.return,V)}}function Lh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{zf(t,n)}catch(i){we(e,e.return,i)}}}function Nh(e,t,n){n.props=ha(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){we(e,t,i)}}function Fi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){we(e,t,s)}}function Kt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){we(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){we(e,t,s)}else n.current=null}function _h(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){we(e,e.return,s)}}function Zl(e,t,n){try{var i=e.stateNode;Tb(i,e.type,n,t),i[ct]=t}catch(s){we(e,e.return,s)}}function kh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Hn(e.type)||e.tag===4}function Jl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Hn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nn));else if(i!==4&&(i===27&&Hn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}function ps(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Hn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ps(e,t,n),e=e.sibling;e!==null;)ps(e,t,n),e=e.sibling}function Hh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);tt(t,i,n),t[Je]=e,t[ct]=n}catch(u){we(e,e.return,u)}}var hn=!1,Ye=!1,$l=!1,Gh=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function eb(e,t){if(e=e.containerInfo,Su=Ls,e=Wd(e),Io(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var d=0,p=-1,T=-1,x=0,V=0,B=e,D=null;t:for(;;){for(var R;B!==n||s!==0&&B.nodeType!==3||(p=d+s),B!==u||i!==0&&B.nodeType!==3||(T=d+i),B.nodeType===3&&(d+=B.nodeValue.length),(R=B.firstChild)!==null;)D=B,B=R;for(;;){if(B===e)break t;if(D===n&&++x===s&&(p=d),D===u&&++V===i&&(T=d),(R=B.nextSibling)!==null)break;B=D,D=B.parentNode}B=R}n=p===-1||T===-1?null:{start:p,end:T}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tu={focusedElem:e,selectionRange:n},Ls=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,s=u.memoizedProps,u=u.memoizedState,i=n.stateNode;try{var I=ha(n.type,s);e=i.getSnapshotBeforeUpdate(I,u),i.__reactInternalSnapshotBeforeUpdate=e}catch(ee){we(n,n.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Eu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Eu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function Ph(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:pn(e,n),i&4&&Ii(5,n);break;case 1:if(pn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){we(n,n.return,d)}else{var s=ha(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){we(n,n.return,d)}}i&64&&Lh(n),i&512&&Fi(n,n.return);break;case 3:if(pn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{zf(e,t)}catch(d){we(n,n.return,d)}}break;case 27:t===null&&i&4&&Hh(n);case 26:case 5:pn(e,n),t===null&&i&4&&_h(n),i&512&&Fi(n,n.return);break;case 12:pn(e,n);break;case 31:pn(e,n),i&4&&Yh(e,n);break;case 13:pn(e,n),i&4&&Ih(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=ub.bind(null,n),Db(e,n))));break;case 22:if(i=n.memoizedState!==null||hn,!i){t=t!==null&&t.memoizedState!==null||Ye,s=hn;var u=Ye;hn=i,(Ye=t)&&!u?gn(e,n,(n.subtreeFlags&8772)!==0):pn(e,n),hn=s,Ye=u}break;case 30:break;default:pn(e,n)}}function qh(e){var t=e.alternate;t!==null&&(e.alternate=null,qh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Do(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,ft=!1;function mn(e,t,n){for(n=n.child;n!==null;)Xh(e,t,n),n=n.sibling}function Xh(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(yi,n)}catch{}switch(n.tag){case 26:Ye||Kt(n,t),mn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ye||Kt(n,t);var i=Ve,s=ft;Hn(n.type)&&(Ve=n.stateNode,ft=!1),mn(e,t,n),nr(n.stateNode),Ve=i,ft=s;break;case 5:Ye||Kt(n,t);case 6:if(i=Ve,s=ft,Ve=null,mn(e,t,n),Ve=i,ft=s,Ve!==null)if(ft)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(n.stateNode)}catch(u){we(n,t,u)}else try{Ve.removeChild(n.stateNode)}catch(u){we(n,t,u)}break;case 18:Ve!==null&&(ft?(e=Ve,Lm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ri(e)):Lm(Ve,n.stateNode));break;case 4:i=Ve,s=ft,Ve=n.stateNode.containerInfo,ft=!0,mn(e,t,n),Ve=i,ft=s;break;case 0:case 11:case 14:case 15:Vn(2,n,t),Ye||Vn(4,n,t),mn(e,t,n);break;case 1:Ye||(Kt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Nh(n,t,i)),mn(e,t,n);break;case 21:mn(e,t,n);break;case 22:Ye=(i=Ye)||n.memoizedState!==null,mn(e,t,n),Ye=i;break;default:mn(e,t,n)}}function Yh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ri(e)}catch(n){we(t,t.return,n)}}}function Ih(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ri(e)}catch(n){we(t,t.return,n)}}function tb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Gh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Gh),t;default:throw Error(l(435,e.tag))}}function gs(e,t){var n=tb(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=cb.bind(null,e,i);i.then(s,s)}})}function ht(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],u=e,d=t,p=d;e:for(;p!==null;){switch(p.tag){case 27:if(Hn(p.type)){Ve=p.stateNode,ft=!1;break e}break;case 5:Ve=p.stateNode,ft=!1;break e;case 3:case 4:Ve=p.stateNode.containerInfo,ft=!0;break e}p=p.return}if(Ve===null)throw Error(l(160));Xh(u,d,s),Ve=null,ft=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fh(t,e),t=t.sibling}var Gt=null;function Fh(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ht(t,e),mt(e),i&4&&(Vn(3,e,e.return),Ii(3,e),Vn(5,e,e.return));break;case 1:ht(t,e),mt(e),i&512&&(Ye||n===null||Kt(n,n.return)),i&64&&hn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=Gt;if(ht(t,e),mt(e),i&512&&(Ye||n===null||Kt(n,n.return)),i&4){var u=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;t:switch(i){case"title":u=s.getElementsByTagName("title")[0],(!u||u[Si]||u[Je]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=s.createElement(i),s.head.insertBefore(u,s.querySelector("head > title"))),tt(u,i,n),u[Je]=e,Qe(u),i=u;break e;case"link":var d=Fm("link","href",s).get(i+(n.href||""));if(d){for(var p=0;p<d.length;p++)if(u=d[p],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(p,1);break t}}u=s.createElement(i),tt(u,i,n),s.head.appendChild(u);break;case"meta":if(d=Fm("meta","content",s).get(i+(n.content||""))){for(p=0;p<d.length;p++)if(u=d[p],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(p,1);break t}}u=s.createElement(i),tt(u,i,n),s.head.appendChild(u);break;default:throw Error(l(468,i))}u[Je]=e,Qe(u),i=u}e.stateNode=i}else Km(s,e.type,e.stateNode);else e.stateNode=Im(s,i,e.memoizedProps);else u!==i?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,i===null?Km(s,e.type,e.stateNode):Im(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Zl(e,e.memoizedProps,n.memoizedProps)}break;case 27:ht(t,e),mt(e),i&512&&(Ye||n===null||Kt(n,n.return)),n!==null&&i&4&&Zl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ht(t,e),mt(e),i&512&&(Ye||n===null||Kt(n,n.return)),e.flags&32){s=e.stateNode;try{Ma(s,"")}catch(I){we(e,e.return,I)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Zl(e,s,n!==null?n.memoizedProps:s)),i&1024&&($l=!0);break;case 6:if(ht(t,e),mt(e),i&4){if(e.stateNode===null)throw Error(l(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(I){we(e,e.return,I)}}break;case 3:if(Os=null,s=Gt,Gt=Us(t.containerInfo),ht(t,e),Gt=s,mt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ri(t.containerInfo)}catch(I){we(e,e.return,I)}$l&&($l=!1,Kh(e));break;case 4:i=Gt,Gt=Us(e.stateNode.containerInfo),ht(t,e),mt(e),Gt=i;break;case 12:ht(t,e),mt(e);break;case 31:ht(t,e),mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,gs(e,i)));break;case 13:ht(t,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(vs=yt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,gs(e,i)));break;case 22:s=e.memoizedState!==null;var T=n!==null&&n.memoizedState!==null,x=hn,V=Ye;if(hn=x||s,Ye=V||T,ht(t,e),Ye=V,hn=x,mt(e),i&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||T||hn||Ye||ma(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){T=n=t;try{if(u=T.stateNode,s)d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{p=T.stateNode;var B=T.memoizedProps.style,D=B!=null&&B.hasOwnProperty("display")?B.display:null;p.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(I){we(T,T.return,I)}}}else if(t.tag===6){if(n===null){T=t;try{T.stateNode.nodeValue=s?"":T.memoizedProps}catch(I){we(T,T.return,I)}}}else if(t.tag===18){if(n===null){T=t;try{var R=T.stateNode;s?Nm(R,!0):Nm(T.stateNode,!1)}catch(I){we(T,T.return,I)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,gs(e,n))));break;case 19:ht(t,e),mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,gs(e,i)));break;case 30:break;case 21:break;default:ht(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(kh(i)){n=i;break}i=i.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var s=n.stateNode,u=Jl(e);ps(e,u,s);break;case 5:var d=n.stateNode;n.flags&32&&(Ma(d,""),n.flags&=-33);var p=Jl(e);ps(e,p,d);break;case 3:case 4:var T=n.stateNode.containerInfo,x=Jl(e);Wl(e,x,T);break;default:throw Error(l(161))}}catch(V){we(e,e.return,V)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Kh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function pn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ph(e,t.alternate,t),t=t.sibling}function ma(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vn(4,t,t.return),ma(t);break;case 1:Kt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Nh(t,t.return,n),ma(t);break;case 27:nr(t.stateNode);case 26:case 5:Kt(t,t.return),ma(t);break;case 22:t.memoizedState===null&&ma(t);break;case 30:ma(t);break;default:ma(t)}e=e.sibling}}function gn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,u=t,d=u.flags;switch(u.tag){case 0:case 11:case 15:gn(s,u,n),Ii(4,u);break;case 1:if(gn(s,u,n),i=u,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(x){we(i,i.return,x)}if(i=u,s=i.updateQueue,s!==null){var p=i.stateNode;try{var T=s.shared.hiddenCallbacks;if(T!==null)for(s.shared.hiddenCallbacks=null,s=0;s<T.length;s++)Cf(T[s],p)}catch(x){we(i,i.return,x)}}n&&d&64&&Lh(u),Fi(u,u.return);break;case 27:Hh(u);case 26:case 5:gn(s,u,n),n&&i===null&&d&4&&_h(u),Fi(u,u.return);break;case 12:gn(s,u,n);break;case 31:gn(s,u,n),n&&d&4&&Yh(s,u);break;case 13:gn(s,u,n),n&&d&4&&Ih(s,u);break;case 22:u.memoizedState===null&&gn(s,u,n),Fi(u,u.return);break;case 30:break;default:gn(s,u,n)}t=t.sibling}}function eu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Vi(n))}function tu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vi(e))}function Pt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qh(e,t,n,i),t=t.sibling}function Qh(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Pt(e,t,n,i),s&2048&&Ii(9,t);break;case 1:Pt(e,t,n,i);break;case 3:Pt(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vi(e)));break;case 12:if(s&2048){Pt(e,t,n,i),e=t.stateNode;try{var u=t.memoizedProps,d=u.id,p=u.onPostCommit;typeof p=="function"&&p(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){we(t,t.return,T)}}else Pt(e,t,n,i);break;case 31:Pt(e,t,n,i);break;case 13:Pt(e,t,n,i);break;case 23:break;case 22:u=t.stateNode,d=t.alternate,t.memoizedState!==null?u._visibility&2?Pt(e,t,n,i):Ki(e,t):u._visibility&2?Pt(e,t,n,i):(u._visibility|=2,Ka(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&eu(d,t);break;case 24:Pt(e,t,n,i),s&2048&&tu(t.alternate,t);break;default:Pt(e,t,n,i)}}function Ka(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,d=t,p=n,T=i,x=d.flags;switch(d.tag){case 0:case 11:case 15:Ka(u,d,p,T,s),Ii(8,d);break;case 23:break;case 22:var V=d.stateNode;d.memoizedState!==null?V._visibility&2?Ka(u,d,p,T,s):Ki(u,d):(V._visibility|=2,Ka(u,d,p,T,s)),s&&x&2048&&eu(d.alternate,d);break;case 24:Ka(u,d,p,T,s),s&&x&2048&&tu(d.alternate,d);break;default:Ka(u,d,p,T,s)}t=t.sibling}}function Ki(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Ki(n,i),s&2048&&eu(i.alternate,i);break;case 24:Ki(n,i),s&2048&&tu(i.alternate,i);break;default:Ki(n,i)}t=t.sibling}}var Qi=8192;function Qa(e,t,n){if(e.subtreeFlags&Qi)for(e=e.child;e!==null;)Zh(e,t,n),e=e.sibling}function Zh(e,t,n){switch(e.tag){case 26:Qa(e,t,n),e.flags&Qi&&e.memoizedState!==null&&Gb(n,Gt,e.memoizedState,e.memoizedProps);break;case 5:Qa(e,t,n);break;case 3:case 4:var i=Gt;Gt=Us(e.stateNode.containerInfo),Qa(e,t,n),Gt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Qi,Qi=16777216,Qa(e,t,n),Qi=i):Qa(e,t,n));break;default:Qa(e,t,n)}}function Jh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Zi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,$h(i,e)}Jh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wh(e),e=e.sibling}function Wh(e){switch(e.tag){case 0:case 11:case 15:Zi(e),e.flags&2048&&Vn(9,e,e.return);break;case 3:Zi(e);break;case 12:Zi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ys(e)):Zi(e);break;default:Zi(e)}}function ys(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,$h(i,e)}Jh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vn(8,t,t.return),ys(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ys(t));break;default:ys(t)}e=e.sibling}}function $h(e,t){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:Vn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Vi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ze=i;else e:for(n=e;Ze!==null;){i=Ze;var s=i.sibling,u=i.return;if(qh(i),i===n){Ze=null;break e}if(s!==null){s.return=u,Ze=s;break e}Ze=u}}}var nb={getCacheForType:function(e){var t=$e(Pe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $e(Pe).controller.signal}},ab=typeof WeakMap=="function"?WeakMap:Map,be=0,Me=null,ce=null,fe=0,Ae=0,Et=null,jn=!1,Za=!1,nu=!1,yn=0,Be=0,Bn=0,pa=0,au=0,Ct=0,Ja=0,Ji=null,pt=null,iu=!1,vs=0,em=0,bs=1/0,Ss=null,Ln=null,Fe=0,Nn=null,Wa=null,vn=0,ru=0,su=null,tm=null,Wi=0,ou=null;function zt(){return(be&2)!==0&&fe!==0?fe&-fe:O.T!==null?hu():gd()}function nm(){if(Ct===0)if((fe&536870912)===0||pe){var e=Mr;Mr<<=1,(Mr&3932160)===0&&(Mr=262144),Ct=e}else Ct=536870912;return e=At.current,e!==null&&(e.flags|=32),Ct}function gt(e,t,n){(e===Me&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&($a(e,0),_n(e,fe,Ct,!1)),bi(e,n),((be&2)===0||e!==Me)&&(e===Me&&((be&2)===0&&(pa|=n),Be===4&&_n(e,fe,Ct,!1)),Qt(e))}function am(e,t,n){if((be&6)!==0)throw Error(l(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||vi(e,t),s=i?sb(e,t):uu(e,t,!0),u=i;do{if(s===0){Za&&!i&&_n(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!ib(n)){s=uu(e,t,!1),u=!1;continue}if(s===2){if(u=t,e.errorRecoveryDisabledLanes&u)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var p=e;s=Ji;var T=p.current.memoizedState.isDehydrated;if(T&&($a(p,d).flags|=256),d=uu(p,d,!1),d!==2){if(nu&&!T){p.errorRecoveryDisabledLanes|=u,pa|=u,s=4;break e}u=pt,pt=s,u!==null&&(pt===null?pt=u:pt.push.apply(pt,u))}s=d}if(u=!1,s!==2)continue}}if(s===1){$a(e,0),_n(e,t,0,!0);break}e:{switch(i=e,u=s,u){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:_n(i,t,Ct,!jn);break e;case 2:pt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(s=vs+300-yt(),10<s)){if(_n(i,t,Ct,!jn),Ur(i,0,!0)!==0)break e;vn=t,i.timeoutHandle=jm(im.bind(null,i,n,pt,Ss,iu,t,Ct,pa,Ja,jn,u,"Throttled",-0,0),s);break e}im(i,n,pt,Ss,iu,t,Ct,pa,Ja,jn,u,null,-0,0)}}break}while(!0);Qt(e)}function im(e,t,n,i,s,u,d,p,T,x,V,B,D,R){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},Zh(t,u,B);var I=(u&62914560)===u?vs-yt():(u&4194048)===u?em-yt():0;if(I=Pb(B,I),I!==null){vn=u,e.cancelPendingCommit=I(fm.bind(null,e,t,u,n,i,s,d,p,T,V,B,null,D,R)),_n(e,u,d,!x);return}}fm(e,t,u,n,i,s,d,p,T)}function ib(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],u=s.getSnapshot;s=s.value;try{if(!St(u(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t,n,i){t&=~au,t&=~pa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var u=31-bt(s),d=1<<u;i[u]=-1,s&=~d}n!==0&&hd(e,n,t)}function Ts(){return(be&6)===0?($i(0),!1):!0}function lu(){if(ce!==null){if(Ae===0)var e=ce.return;else e=ce,on=sa=null,El(e),qa=null,Bi=0,e=ce;for(;e!==null;)Bh(e.alternate,e),e=e.return;ce=null}}function $a(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Eb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),vn=0,lu(),Me=e,ce=n=rn(e.current,null),fe=t,Ae=0,Et=null,jn=!1,Za=vi(e,t),nu=!1,Ja=Ct=au=pa=Bn=Be=0,pt=Ji=null,iu=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-bt(i),u=1<<s;t|=e[s],i&=~u}return yn=t,Pr(),n}function rm(e,t){re=null,O.H=qi,t===Pa||t===Zr?(t=Tf(),Ae=3):t===fl?(t=Tf(),Ae=4):Ae=t===Hl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Et=t,ce===null&&(Be=1,cs(e,Rt(t,e.current)))}function sm(){var e=At.current;return e===null?!0:(fe&4194048)===fe?Bt===null:(fe&62914560)===fe||(fe&536870912)!==0?e===Bt:!1}function om(){var e=O.H;return O.H=qi,e===null?qi:e}function lm(){var e=O.A;return O.A=nb,e}function As(){Be=4,jn||(fe&4194048)!==fe&&At.current!==null||(Za=!0),(Bn&134217727)===0&&(pa&134217727)===0||Me===null||_n(Me,fe,Ct,!1)}function uu(e,t,n){var i=be;be|=2;var s=om(),u=lm();(Me!==e||fe!==t)&&(Ss=null,$a(e,t)),t=!1;var d=Be;e:do try{if(Ae!==0&&ce!==null){var p=ce,T=Et;switch(Ae){case 8:lu(),d=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var x=Ae;if(Ae=0,Et=null,ei(e,p,T,x),n&&Za){d=0;break e}break;default:x=Ae,Ae=0,Et=null,ei(e,p,T,x)}}rb(),d=Be;break}catch(V){rm(e,V)}while(!0);return t&&e.shellSuspendCounter++,on=sa=null,be=i,O.H=s,O.A=u,ce===null&&(Me=null,fe=0,Pr()),d}function rb(){for(;ce!==null;)um(ce)}function sb(e,t){var n=be;be|=2;var i=om(),s=lm();Me!==e||fe!==t?(Ss=null,bs=yt()+500,$a(e,t)):Za=vi(e,t);e:do try{if(Ae!==0&&ce!==null){t=ce;var u=Et;t:switch(Ae){case 1:Ae=0,Et=null,ei(e,t,u,1);break;case 2:case 9:if(bf(u)){Ae=0,Et=null,cm(t);break}t=function(){Ae!==2&&Ae!==9||Me!==e||(Ae=7),Qt(e)},u.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:bf(u)?(Ae=0,Et=null,cm(t)):(Ae=0,Et=null,ei(e,t,u,7));break;case 5:var d=null;switch(ce.tag){case 26:d=ce.memoizedState;case 5:case 27:var p=ce;if(d?Qm(d):p.stateNode.complete){Ae=0,Et=null;var T=p.sibling;if(T!==null)ce=T;else{var x=p.return;x!==null?(ce=x,ws(x)):ce=null}break t}}Ae=0,Et=null,ei(e,t,u,5);break;case 6:Ae=0,Et=null,ei(e,t,u,6);break;case 8:lu(),Be=6;break e;default:throw Error(l(462))}}ob();break}catch(V){rm(e,V)}while(!0);return on=sa=null,O.H=i,O.A=s,be=n,ce!==null?0:(Me=null,fe=0,Pr(),Be)}function ob(){for(;ce!==null&&!Uv();)um(ce)}function um(e){var t=Vh(e.alternate,e,yn);e.memoizedProps=e.pendingProps,t===null?ws(e):ce=t}function cm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=xh(n,t,t.pendingProps,t.type,void 0,fe);break;case 11:t=xh(n,t,t.pendingProps,t.type.render,t.ref,fe);break;case 5:El(t);default:Bh(n,t),t=ce=lf(t,yn),t=Vh(n,t,yn)}e.memoizedProps=e.pendingProps,t===null?ws(e):ce=t}function ei(e,t,n,i){on=sa=null,El(t),qa=null,Bi=0;var s=t.return;try{if(Q0(e,s,t,n,fe)){Be=1,cs(e,Rt(n,e.current)),ce=null;return}}catch(u){if(s!==null)throw ce=s,u;Be=1,cs(e,Rt(n,e.current)),ce=null;return}t.flags&32768?(pe||i===1?e=!0:Za||(fe&536870912)!==0?e=!1:(jn=e=!0,(i===2||i===9||i===3||i===6)&&(i=At.current,i!==null&&i.tag===13&&(i.flags|=16384))),dm(t,e)):ws(t)}function ws(e){var t=e;do{if((t.flags&32768)!==0){dm(t,jn);return}e=t.return;var n=W0(t.alternate,t,yn);if(n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);Be===0&&(Be=5)}function dm(e,t){do{var n=$0(e.alternate,e);if(n!==null){n.flags&=32767,ce=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ce=e;return}ce=e=n}while(e!==null);Be=6,ce=null}function fm(e,t,n,i,s,u,d,p,T){e.cancelPendingCommit=null;do Es();while(Fe!==0);if((be&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(u=t.lanes|t.childLanes,u|=Jo,Hv(e,n,u,d,p,T),e===Me&&(ce=Me=null,fe=0),Wa=t,Nn=e,vn=n,ru=u,su=s,tm=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,db(zr,function(){return ym(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=O.T,O.T=null,s=G.p,G.p=2,d=be,be|=4;try{eb(e,t,n)}finally{be=d,G.p=s,O.T=i}}Fe=1,hm(),mm(),pm()}}function hm(){if(Fe===1){Fe=0;var e=Nn,t=Wa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null;var i=G.p;G.p=2;var s=be;be|=4;try{Fh(t,e);var u=Tu,d=Wd(e.containerInfo),p=u.focusedElem,T=u.selectionRange;if(d!==p&&p&&p.ownerDocument&&Jd(p.ownerDocument.documentElement,p)){if(T!==null&&Io(p)){var x=T.start,V=T.end;if(V===void 0&&(V=x),"selectionStart"in p)p.selectionStart=x,p.selectionEnd=Math.min(V,p.value.length);else{var B=p.ownerDocument||document,D=B&&B.defaultView||window;if(D.getSelection){var R=D.getSelection(),I=p.textContent.length,ee=Math.min(T.start,I),xe=T.end===void 0?ee:Math.min(T.end,I);!R.extend&&ee>xe&&(d=xe,xe=ee,ee=d);var E=Zd(p,ee),A=Zd(p,xe);if(E&&A&&(R.rangeCount!==1||R.anchorNode!==E.node||R.anchorOffset!==E.offset||R.focusNode!==A.node||R.focusOffset!==A.offset)){var C=B.createRange();C.setStart(E.node,E.offset),R.removeAllRanges(),ee>xe?(R.addRange(C),R.extend(A.node,A.offset)):(C.setEnd(A.node,A.offset),R.addRange(C))}}}}for(B=[],R=p;R=R.parentNode;)R.nodeType===1&&B.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<B.length;p++){var j=B[p];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Ls=!!Su,Tu=Su=null}finally{be=s,G.p=i,O.T=n}}e.current=t,Fe=2}}function mm(){if(Fe===2){Fe=0;var e=Nn,t=Wa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=O.T,O.T=null;var i=G.p;G.p=2;var s=be;be|=4;try{Ph(e,t.alternate,t)}finally{be=s,G.p=i,O.T=n}}Fe=3}}function pm(){if(Fe===4||Fe===3){Fe=0,Rv();var e=Nn,t=Wa,n=vn,i=tm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,Wa=Nn=null,gm(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Ln=null),xo(n),t=t.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(yi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=O.T,s=G.p,G.p=2,O.T=null;try{for(var u=e.onRecoverableError,d=0;d<i.length;d++){var p=i[d];u(p.value,{componentStack:p.stack})}}finally{O.T=t,G.p=s}}(vn&3)!==0&&Es(),Qt(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===ou?Wi++:(Wi=0,ou=e):Wi=0,$i(0)}}function gm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Vi(t)))}function Es(){return hm(),mm(),pm(),ym()}function ym(){if(Fe!==5)return!1;var e=Nn,t=ru;ru=0;var n=xo(vn),i=O.T,s=G.p;try{G.p=32>n?32:n,O.T=null,n=su,su=null;var u=Nn,d=vn;if(Fe=0,Wa=Nn=null,vn=0,(be&6)!==0)throw Error(l(331));var p=be;if(be|=4,Wh(u.current),Qh(u,u.current,d,n),be=p,$i(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(yi,u)}catch{}return!0}finally{G.p=s,O.T=i,gm(e,t)}}function vm(e,t,n){t=Rt(n,t),t=kl(e.stateNode,t,2),e=Un(e,t,2),e!==null&&(bi(e,2),Qt(e))}function we(e,t,n){if(e.tag===3)vm(e,e,n);else for(;t!==null;){if(t.tag===3){vm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ln===null||!Ln.has(i))){e=Rt(n,e),n=bh(2),i=Un(t,n,2),i!==null&&(Sh(n,i,t,e),bi(i,2),Qt(i));break}}t=t.return}}function cu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new ab;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(nu=!0,s.add(n),e=lb.bind(null,e,t,n),t.then(e,e))}function lb(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Me===e&&(fe&n)===n&&(Be===4||Be===3&&(fe&62914560)===fe&&300>yt()-vs?(be&2)===0&&$a(e,0):au|=n,Ja===fe&&(Ja=0)),Qt(e)}function bm(e,t){t===0&&(t=fd()),e=aa(e,t),e!==null&&(bi(e,t),Qt(e))}function ub(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bm(e,n)}function cb(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(l(314))}i!==null&&i.delete(t),bm(e,n)}function db(e,t){return wo(e,t)}var Cs=null,ti=null,du=!1,zs=!1,fu=!1,kn=0;function Qt(e){e!==ti&&e.next===null&&(ti===null?Cs=ti=e:ti=ti.next=e),zs=!0,du||(du=!0,hb())}function $i(e,t){if(!fu&&zs){fu=!0;do for(var n=!1,i=Cs;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var u=0;else{var d=i.suspendedLanes,p=i.pingedLanes;u=(1<<31-bt(42|e)+1)-1,u&=s&~(d&~p),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,wm(i,u))}else u=fe,u=Ur(i,i===Me?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||vi(i,u)||(n=!0,wm(i,u));i=i.next}while(n);fu=!1}}function fb(){Sm()}function Sm(){zs=du=!1;var e=0;kn!==0&&wb()&&(e=kn);for(var t=yt(),n=null,i=Cs;i!==null;){var s=i.next,u=Tm(i,t);u===0?(i.next=null,n===null?Cs=s:n.next=s,s===null&&(ti=n)):(n=i,(e!==0||(u&3)!==0)&&(zs=!0)),i=s}Fe!==0&&Fe!==5||$i(e),kn!==0&&(kn=0)}function Tm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var d=31-bt(u),p=1<<d,T=s[d];T===-1?((p&n)===0||(p&i)!==0)&&(s[d]=kv(p,t)):T<=t&&(e.expiredLanes|=p),u&=~p}if(t=Me,n=fe,n=Ur(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Eo(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||vi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Eo(i),xo(n)){case 2:case 8:n=cd;break;case 32:n=zr;break;case 268435456:n=dd;break;default:n=zr}return i=Am.bind(null,e),n=wo(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Eo(i),e.callbackPriority=2,e.callbackNode=null,2}function Am(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Es()&&e.callbackNode!==n)return null;var i=fe;return i=Ur(e,e===Me?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(am(e,i,t),Tm(e,yt()),e.callbackNode!=null&&e.callbackNode===n?Am.bind(null,e):null)}function wm(e,t){if(Es())return null;am(e,t,!0)}function hb(){Cb(function(){(be&6)!==0?wo(ud,fb):Sm()})}function hu(){if(kn===0){var e=Ha;e===0&&(e=xr,xr<<=1,(xr&261888)===0&&(xr=256)),kn=e}return kn}function Em(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:jr(""+e)}function Cm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function mb(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var u=Em((s[ct]||null).action),d=i.submitter;d&&(t=(t=d[ct]||null)?Em(t.formAction):d.getAttribute("formAction"),t!==null&&(u=t,d=null));var p=new _r("action","action",null,i,s);e.push({event:p,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(kn!==0){var T=d?Cm(s,d):new FormData(s);Vl(n,{pending:!0,data:T,method:s.method,action:u},null,T)}}else typeof u=="function"&&(p.preventDefault(),T=d?Cm(s,d):new FormData(s),Vl(n,{pending:!0,data:T,method:s.method,action:u},u,T))},currentTarget:s}]})}}for(var mu=0;mu<Zo.length;mu++){var pu=Zo[mu],pb=pu.toLowerCase(),gb=pu[0].toUpperCase()+pu.slice(1);Ht(pb,"on"+gb)}Ht(tf,"onAnimationEnd"),Ht(nf,"onAnimationIteration"),Ht(af,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(O0,"onTransitionRun"),Ht(V0,"onTransitionStart"),Ht(j0,"onTransitionCancel"),Ht(rf,"onTransitionEnd"),za("onMouseEnter",["mouseout","mouseover"]),za("onMouseLeave",["mouseout","mouseover"]),za("onPointerEnter",["pointerout","pointerover"]),za("onPointerLeave",["pointerout","pointerover"]),$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$n("onBeforeInput",["compositionend","keypress","textInput","paste"]),$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(er));function zm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var d=i.length-1;0<=d;d--){var p=i[d],T=p.instance,x=p.currentTarget;if(p=p.listener,T!==u&&s.isPropagationStopped())break e;u=p,s.currentTarget=x;try{u(s)}catch(V){Gr(V)}s.currentTarget=null,u=T}else for(d=0;d<i.length;d++){if(p=i[d],T=p.instance,x=p.currentTarget,p=p.listener,T!==u&&s.isPropagationStopped())break e;u=p,s.currentTarget=x;try{u(s)}catch(V){Gr(V)}s.currentTarget=null,u=T}}}}function de(e,t){var n=t[Mo];n===void 0&&(n=t[Mo]=new Set);var i=e+"__bubble";n.has(i)||(xm(t,e,2,!1),n.add(i))}function gu(e,t,n){var i=0;t&&(i|=4),xm(n,e,i,t)}var xs="_reactListening"+Math.random().toString(36).slice(2);function yu(e){if(!e[xs]){e[xs]=!0,bd.forEach(function(n){n!=="selectionchange"&&(yb.has(n)||gu(n,!1,e),gu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xs]||(t[xs]=!0,gu("selectionchange",!1,t))}}function xm(e,t,n,i){switch(np(t)){case 2:var s=Yb;break;case 8:s=Ib;break;default:s=Ou}n=s.bind(null,t,n,e),s=void 0,!No||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function vu(e,t,n,i,s){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var p=i.stateNode.containerInfo;if(p===s)break;if(d===4)for(d=i.return;d!==null;){var T=d.tag;if((T===3||T===4)&&d.stateNode.containerInfo===s)return;d=d.return}for(;p!==null;){if(d=wa(p),d===null)return;if(T=d.tag,T===5||T===6||T===26||T===27){i=u=d;continue e}p=p.parentNode}}i=i.return}Rd(function(){var x=u,V=Bo(n),B=[];e:{var D=sf.get(e);if(D!==void 0){var R=_r,I=e;switch(e){case"keypress":if(Lr(n)===0)break e;case"keydown":case"keyup":R=c0;break;case"focusin":I="focus",R=Go;break;case"focusout":I="blur",R=Go;break;case"beforeblur":case"afterblur":R=Go;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=h0;break;case tf:case nf:case af:R=t0;break;case rf:R=p0;break;case"scroll":case"scrollend":R=Zv;break;case"wheel":R=y0;break;case"copy":case"cut":case"paste":R=a0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Ld;break;case"toggle":case"beforetoggle":R=b0}var ee=(t&4)!==0,xe=!ee&&(e==="scroll"||e==="scrollend"),E=ee?D!==null?D+"Capture":null:D;ee=[];for(var A=x,C;A!==null;){var j=A;if(C=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||C===null||E===null||(j=Ai(A,E),j!=null&&ee.push(tr(A,j,C))),xe)break;A=A.return}0<ee.length&&(D=new R(D,I,null,n,V),B.push({event:D,listeners:ee}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",D&&n!==jo&&(I=n.relatedTarget||n.fromElement)&&(wa(I)||I[Aa]))break e;if((R||D)&&(D=V.window===V?V:(D=V.ownerDocument)?D.defaultView||D.parentWindow:window,R?(I=n.relatedTarget||n.toElement,R=x,I=I?wa(I):null,I!==null&&(xe=h(I),ee=I.tag,I!==xe||ee!==5&&ee!==27&&ee!==6)&&(I=null)):(R=null,I=x),R!==I)){if(ee=jd,j="onMouseLeave",E="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Ld,j="onPointerLeave",E="onPointerEnter",A="pointer"),xe=R==null?D:Ti(R),C=I==null?D:Ti(I),D=new ee(j,A+"leave",R,n,V),D.target=xe,D.relatedTarget=C,j=null,wa(V)===x&&(ee=new ee(E,A+"enter",I,n,V),ee.target=C,ee.relatedTarget=xe,j=ee),xe=j,R&&I)t:{for(ee=vb,E=R,A=I,C=0,j=E;j;j=ee(j))C++;j=0;for(var $=A;$;$=ee($))j++;for(;0<C-j;)E=ee(E),C--;for(;0<j-C;)A=ee(A),j--;for(;C--;){if(E===A||A!==null&&E===A.alternate){ee=E;break t}E=ee(E),A=ee(A)}ee=null}else ee=null;R!==null&&Mm(B,D,R,ee,!1),I!==null&&xe!==null&&Mm(B,xe,I,ee,!0)}}e:{if(D=x?Ti(x):window,R=D.nodeName&&D.nodeName.toLowerCase(),R==="select"||R==="input"&&D.type==="file")var ge=Xd;else if(Pd(D))if(Yd)ge=D0;else{ge=x0;var Z=z0}else R=D.nodeName,!R||R.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?x&&Vo(x.elementType)&&(ge=Xd):ge=M0;if(ge&&(ge=ge(e,x))){qd(B,ge,n,V);break e}Z&&Z(e,D,x),e==="focusout"&&x&&D.type==="number"&&x.memoizedProps.value!=null&&Oo(D,"number",D.value)}switch(Z=x?Ti(x):window,e){case"focusin":(Pd(Z)||Z.contentEditable==="true")&&(Oa=Z,Fo=x,Ui=null);break;case"focusout":Ui=Fo=Oa=null;break;case"mousedown":Ko=!0;break;case"contextmenu":case"mouseup":case"dragend":Ko=!1,$d(B,n,V);break;case"selectionchange":if(R0)break;case"keydown":case"keyup":$d(B,n,V)}var oe;if(qo)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else Ra?Hd(e,n)&&(he="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(he="onCompositionStart");he&&(Nd&&n.locale!=="ko"&&(Ra||he!=="onCompositionStart"?he==="onCompositionEnd"&&Ra&&(oe=Od()):(wn=V,_o="value"in wn?wn.value:wn.textContent,Ra=!0)),Z=Ms(x,he),0<Z.length&&(he=new Bd(he,e,null,n,V),B.push({event:he,listeners:Z}),oe?he.data=oe:(oe=Gd(n),oe!==null&&(he.data=oe)))),(oe=T0?A0(e,n):w0(e,n))&&(he=Ms(x,"onBeforeInput"),0<he.length&&(Z=new Bd("onBeforeInput","beforeinput",null,n,V),B.push({event:Z,listeners:he}),Z.data=oe)),mb(B,e,x,n,V)}zm(B,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ms(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,u=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||u===null||(s=Ai(e,n),s!=null&&i.unshift(tr(e,s,u)),s=Ai(e,t),s!=null&&i.push(tr(e,s,u))),e.tag===3)return i;e=e.return}return[]}function vb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mm(e,t,n,i,s){for(var u=t._reactName,d=[];n!==null&&n!==i;){var p=n,T=p.alternate,x=p.stateNode;if(p=p.tag,T!==null&&T===i)break;p!==5&&p!==26&&p!==27||x===null||(T=x,s?(x=Ai(n,u),x!=null&&d.unshift(tr(n,x,T))):s||(x=Ai(n,u),x!=null&&d.push(tr(n,x,T)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var bb=/\r\n?/g,Sb=/\u0000|\uFFFD/g;function Dm(e){return(typeof e=="string"?e:""+e).replace(bb,`
`).replace(Sb,"")}function Um(e,t){return t=Dm(t),Dm(e)===t}function ze(e,t,n,i,s,u){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ma(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ma(e,""+i);break;case"className":Or(e,"class",i);break;case"tabIndex":Or(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Or(e,n,i);break;case"style":Dd(e,i,u);break;case"data":if(t!=="object"){Or(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=jr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&ze(e,t,"name",s.name,s,null),ze(e,t,"formEncType",s.formEncType,s,null),ze(e,t,"formMethod",s.formMethod,s,null),ze(e,t,"formTarget",s.formTarget,s,null)):(ze(e,t,"encType",s.encType,s,null),ze(e,t,"method",s.method,s,null),ze(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=jr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=nn);break;case"onScroll":i!=null&&de("scroll",e);break;case"onScrollEnd":i!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=jr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":de("beforetoggle",e),de("toggle",e),Rr(e,"popover",i);break;case"xlinkActuate":tn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":tn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":tn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":tn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":tn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":tn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":tn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":tn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":tn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Rr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Kv.get(n)||n,Rr(e,n,i))}}function bu(e,t,n,i,s,u){switch(n){case"style":Dd(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ma(e,i):(typeof i=="number"||typeof i=="bigint")&&Ma(e,""+i);break;case"onScroll":i!=null&&de("scroll",e);break;case"onScrollEnd":i!=null&&de("scrollend",e);break;case"onClick":i!=null&&(e.onclick=nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),u=e[ct]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,s),typeof i=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Rr(e,n,i)}}}function tt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var i=!1,s=!1,u;for(u in n)if(n.hasOwnProperty(u)){var d=n[u];if(d!=null)switch(u){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:ze(e,t,u,d,n,null)}}s&&ze(e,t,"srcSet",n.srcSet,n,null),i&&ze(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var p=u=d=s=null,T=null,x=null;for(i in n)if(n.hasOwnProperty(i)){var V=n[i];if(V!=null)switch(i){case"name":s=V;break;case"type":d=V;break;case"checked":T=V;break;case"defaultChecked":x=V;break;case"value":u=V;break;case"defaultValue":p=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(l(137,t));break;default:ze(e,t,i,V,n,null)}}Cd(e,u,p,T,x,d,s,!1);return;case"select":de("invalid",e),i=d=u=null;for(s in n)if(n.hasOwnProperty(s)&&(p=n[s],p!=null))switch(s){case"value":u=p;break;case"defaultValue":d=p;break;case"multiple":i=p;default:ze(e,t,s,p,n,null)}t=u,n=d,e.multiple=!!i,t!=null?xa(e,!!i,t,!1):n!=null&&xa(e,!!i,n,!0);return;case"textarea":de("invalid",e),u=s=i=null;for(d in n)if(n.hasOwnProperty(d)&&(p=n[d],p!=null))switch(d){case"value":i=p;break;case"defaultValue":s=p;break;case"children":u=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(l(91));break;default:ze(e,t,d,p,n,null)}xd(e,i,s,u);return;case"option":for(T in n)n.hasOwnProperty(T)&&(i=n[T],i!=null)&&(T==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ze(e,t,T,i,n,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(i=0;i<er.length;i++)de(er[i],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in n)if(n.hasOwnProperty(x)&&(i=n[x],i!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:ze(e,t,x,i,n,null)}return;default:if(Vo(t)){for(V in n)n.hasOwnProperty(V)&&(i=n[V],i!==void 0&&bu(e,t,V,i,n,void 0));return}}for(p in n)n.hasOwnProperty(p)&&(i=n[p],i!=null&&ze(e,t,p,i,n,null))}function Tb(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,u=null,d=null,p=null,T=null,x=null,V=null;for(R in n){var B=n[R];if(n.hasOwnProperty(R)&&B!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":T=B;default:i.hasOwnProperty(R)||ze(e,t,R,null,i,B)}}for(var D in i){var R=i[D];if(B=n[D],i.hasOwnProperty(D)&&(R!=null||B!=null))switch(D){case"type":u=R;break;case"name":s=R;break;case"checked":x=R;break;case"defaultChecked":V=R;break;case"value":d=R;break;case"defaultValue":p=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(l(137,t));break;default:R!==B&&ze(e,t,D,R,i,B)}}Ro(e,d,p,T,x,V,u,s);return;case"select":R=d=p=D=null;for(u in n)if(T=n[u],n.hasOwnProperty(u)&&T!=null)switch(u){case"value":break;case"multiple":R=T;default:i.hasOwnProperty(u)||ze(e,t,u,null,i,T)}for(s in i)if(u=i[s],T=n[s],i.hasOwnProperty(s)&&(u!=null||T!=null))switch(s){case"value":D=u;break;case"defaultValue":p=u;break;case"multiple":d=u;default:u!==T&&ze(e,t,s,u,i,T)}t=p,n=d,i=R,D!=null?xa(e,!!n,D,!1):!!i!=!!n&&(t!=null?xa(e,!!n,t,!0):xa(e,!!n,n?[]:"",!1));return;case"textarea":R=D=null;for(p in n)if(s=n[p],n.hasOwnProperty(p)&&s!=null&&!i.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:ze(e,t,p,null,i,s)}for(d in i)if(s=i[d],u=n[d],i.hasOwnProperty(d)&&(s!=null||u!=null))switch(d){case"value":D=s;break;case"defaultValue":R=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==u&&ze(e,t,d,s,i,u)}zd(e,D,R);return;case"option":for(var I in n)D=n[I],n.hasOwnProperty(I)&&D!=null&&!i.hasOwnProperty(I)&&(I==="selected"?e.selected=!1:ze(e,t,I,null,i,D));for(T in i)D=i[T],R=n[T],i.hasOwnProperty(T)&&D!==R&&(D!=null||R!=null)&&(T==="selected"?e.selected=D&&typeof D!="function"&&typeof D!="symbol":ze(e,t,T,D,i,R));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in n)D=n[ee],n.hasOwnProperty(ee)&&D!=null&&!i.hasOwnProperty(ee)&&ze(e,t,ee,null,i,D);for(x in i)if(D=i[x],R=n[x],i.hasOwnProperty(x)&&D!==R&&(D!=null||R!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(l(137,t));break;default:ze(e,t,x,D,i,R)}return;default:if(Vo(t)){for(var xe in n)D=n[xe],n.hasOwnProperty(xe)&&D!==void 0&&!i.hasOwnProperty(xe)&&bu(e,t,xe,void 0,i,D);for(V in i)D=i[V],R=n[V],!i.hasOwnProperty(V)||D===R||D===void 0&&R===void 0||bu(e,t,V,D,i,R);return}}for(var E in n)D=n[E],n.hasOwnProperty(E)&&D!=null&&!i.hasOwnProperty(E)&&ze(e,t,E,null,i,D);for(B in i)D=i[B],R=n[B],!i.hasOwnProperty(B)||D===R||D==null&&R==null||ze(e,t,B,D,i,R)}function Rm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ab(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],u=s.transferSize,d=s.initiatorType,p=s.duration;if(u&&p&&Rm(d)){for(d=0,p=s.responseEnd,i+=1;i<n.length;i++){var T=n[i],x=T.startTime;if(x>p)break;var V=T.transferSize,B=T.initiatorType;V&&Rm(B)&&(T=T.responseEnd,d+=V*(T<p?1:(p-x)/(T-x)))}if(--i,t+=8*(u+d)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Su=null,Tu=null;function Ds(e){return e.nodeType===9?e:e.ownerDocument}function Om(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Au(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wu=null;function wb(){var e=window.event;return e&&e.type==="popstate"?e===wu?!1:(wu=e,!0):(wu=null,!1)}var jm=typeof setTimeout=="function"?setTimeout:void 0,Eb=typeof clearTimeout=="function"?clearTimeout:void 0,Bm=typeof Promise=="function"?Promise:void 0,Cb=typeof queueMicrotask=="function"?queueMicrotask:typeof Bm<"u"?function(e){return Bm.resolve(null).then(e).catch(zb)}:jm;function zb(e){setTimeout(function(){throw e})}function Hn(e){return e==="head"}function Lm(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),ri(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")nr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,nr(n);for(var u=n.firstChild;u;){var d=u.nextSibling,p=u.nodeName;u[Si]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=d}}else n==="body"&&nr(e.ownerDocument.body);n=s}while(n);ri(t)}function Nm(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Eu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Eu(n),Do(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function xb(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Si])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Lt(e.nextSibling),e===null)break}return null}function Mb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Lt(e.nextSibling),e===null))return null;return e}function _m(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Lt(e.nextSibling),e===null))return null;return e}function Cu(e){return e.data==="$?"||e.data==="$~"}function zu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Db(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xu=null;function km(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Lt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Hm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Gm(e,t,n){switch(t=Ds(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function nr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Do(e)}var Nt=new Map,Pm=new Set;function Us(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var bn=G.d;G.d={f:Ub,r:Rb,D:Ob,C:Vb,L:jb,m:Bb,X:Nb,S:Lb,M:_b};function Ub(){var e=bn.f(),t=Ts();return e||t}function Rb(e){var t=Ea(e);t!==null&&t.tag===5&&t.type==="form"?rh(t):bn.r(e)}var ni=typeof document>"u"?null:document;function qm(e,t,n){var i=ni;if(i&&typeof t=="string"&&t){var s=Dt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Pm.has(s)||(Pm.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),tt(t,"link",e),Qe(t),i.head.appendChild(t)))}}function Ob(e){bn.D(e),qm("dns-prefetch",e,null)}function Vb(e,t){bn.C(e,t),qm("preconnect",e,t)}function jb(e,t,n){bn.L(e,t,n);var i=ni;if(i&&e&&t){var s='link[rel="preload"][as="'+Dt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Dt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Dt(n.imageSizes)+'"]')):s+='[href="'+Dt(e)+'"]';var u=s;switch(t){case"style":u=ai(e);break;case"script":u=ii(e)}Nt.has(u)||(e=b({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Nt.set(u,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(ar(u))||t==="script"&&i.querySelector(ir(u))||(t=i.createElement("link"),tt(t,"link",e),Qe(t),i.head.appendChild(t)))}}function Bb(e,t){bn.m(e,t);var n=ni;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Dt(i)+'"][href="'+Dt(e)+'"]',u=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ii(e)}if(!Nt.has(u)&&(e=b({rel:"modulepreload",href:e},t),Nt.set(u,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ir(u)))return}i=n.createElement("link"),tt(i,"link",e),Qe(i),n.head.appendChild(i)}}}function Lb(e,t,n){bn.S(e,t,n);var i=ni;if(i&&e){var s=Ca(i).hoistableStyles,u=ai(e);t=t||"default";var d=s.get(u);if(!d){var p={loading:0,preload:null};if(d=i.querySelector(ar(u)))p.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Nt.get(u))&&Mu(e,n);var T=d=i.createElement("link");Qe(T),tt(T,"link",e),T._p=new Promise(function(x,V){T.onload=x,T.onerror=V}),T.addEventListener("load",function(){p.loading|=1}),T.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Rs(d,t,i)}d={type:"stylesheet",instance:d,count:1,state:p},s.set(u,d)}}}function Nb(e,t){bn.X(e,t);var n=ni;if(n&&e){var i=Ca(n).hoistableScripts,s=ii(e),u=i.get(s);u||(u=n.querySelector(ir(s)),u||(e=b({src:e,async:!0},t),(t=Nt.get(s))&&Du(e,t),u=n.createElement("script"),Qe(u),tt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(s,u))}}function _b(e,t){bn.M(e,t);var n=ni;if(n&&e){var i=Ca(n).hoistableScripts,s=ii(e),u=i.get(s);u||(u=n.querySelector(ir(s)),u||(e=b({src:e,async:!0,type:"module"},t),(t=Nt.get(s))&&Du(e,t),u=n.createElement("script"),Qe(u),tt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(s,u))}}function Xm(e,t,n,i){var s=(s=ue.current)?Us(s):null;if(!s)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ai(n.href),n=Ca(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ai(n.href);var u=Ca(s).hoistableStyles,d=u.get(e);if(d||(s=s.ownerDocument||s,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=s.querySelector(ar(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Nt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Nt.set(e,n),u||kb(s,e,n,d.state))),t&&i===null)throw Error(l(528,""));return d}if(t&&i!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ii(n),n=Ca(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function ai(e){return'href="'+Dt(e)+'"'}function ar(e){return'link[rel="stylesheet"]['+e+"]"}function Ym(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function kb(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),tt(t,"link",n),Qe(t),e.head.appendChild(t))}function ii(e){return'[src="'+Dt(e)+'"]'}function ir(e){return"script[async]"+e}function Im(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Dt(n.href)+'"]');if(i)return t.instance=i,Qe(i),i;var s=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Qe(i),tt(i,"style",s),Rs(i,n.precedence,e),t.instance=i;case"stylesheet":s=ai(n.href);var u=e.querySelector(ar(s));if(u)return t.state.loading|=4,t.instance=u,Qe(u),u;i=Ym(n),(s=Nt.get(s))&&Mu(i,s),u=(e.ownerDocument||e).createElement("link"),Qe(u);var d=u;return d._p=new Promise(function(p,T){d.onload=p,d.onerror=T}),tt(u,"link",i),t.state.loading|=4,Rs(u,n.precedence,e),t.instance=u;case"script":return u=ii(n.src),(s=e.querySelector(ir(u)))?(t.instance=s,Qe(s),s):(i=n,(s=Nt.get(u))&&(i=b({},n),Du(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),Qe(s),tt(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Rs(i,n.precedence,e));return t.instance}function Rs(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,u=s,d=0;d<i.length;d++){var p=i[d];if(p.dataset.precedence===t)u=p;else if(u!==s)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Mu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Du(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Os=null;function Fm(e,t,n){if(Os===null){var i=new Map,s=Os=new Map;s.set(n,i)}else s=Os,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var u=n[s];if(!(u[Si]||u[Je]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var d=u.getAttribute(t)||"";d=e+d;var p=i.get(d);p?p.push(u):i.set(d,[u])}}return i}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Hb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Qm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Gb(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=ai(i.href),u=t.querySelector(ar(s));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Vs.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,Qe(u);return}u=t.ownerDocument||t,i=Ym(i),(s=Nt.get(s))&&Mu(i,s),u=u.createElement("link"),Qe(u);var d=u;d._p=new Promise(function(p,T){d.onload=p,d.onerror=T}),tt(u,"link",i),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Vs.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Uu=0;function Pb(e,t){return e.stylesheets&&e.count===0&&Bs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Bs(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Uu===0&&(Uu=62500*Ab());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bs(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Uu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Vs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var js=null;function Bs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,js=new Map,t.forEach(qb,e),js=null,Vs.call(e))}function qb(e,t){if(!(t.state.loading&4)){var n=js.get(e);if(n)var i=n.get(null);else{n=new Map,js.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<s.length;u++){var d=s[u];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),i=d)}i&&n.set(null,i)}s=t.instance,d=s.getAttribute("data-precedence"),u=n.get(d)||i,u===i&&n.set(null,s),n.set(d,s),this.count++,i=Vs.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),u?u.parentNode.insertBefore(s,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var rr={$$typeof:H,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Xb(e,t,n,i,s,u,d,p,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Co(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Co(0),this.hiddenUpdates=Co(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=u,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Zm(e,t,n,i,s,u,d,p,T,x,V,B){return e=new Xb(e,t,n,d,T,x,V,B,p),t=1,u===!0&&(t|=24),u=Tt(3,null,null,t),e.current=u,u.stateNode=e,t=ul(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:i,isDehydrated:n,cache:t},hl(u),e}function Jm(e){return e?(e=Ba,e):Ba}function Wm(e,t,n,i,s,u){s=Jm(s),i.context===null?i.context=s:i.pendingContext=s,i=Dn(t),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Un(e,i,t),n!==null&&(gt(n,e,t),Ni(n,e,t))}function $m(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ru(e,t){$m(e,t),(e=e.alternate)&&$m(e,t)}function ep(e){if(e.tag===13||e.tag===31){var t=aa(e,67108864);t!==null&&gt(t,e,67108864),Ru(e,67108864)}}function tp(e){if(e.tag===13||e.tag===31){var t=zt();t=zo(t);var n=aa(e,t);n!==null&&gt(n,e,t),Ru(e,t)}}var Ls=!0;function Yb(e,t,n,i){var s=O.T;O.T=null;var u=G.p;try{G.p=2,Ou(e,t,n,i)}finally{G.p=u,O.T=s}}function Ib(e,t,n,i){var s=O.T;O.T=null;var u=G.p;try{G.p=8,Ou(e,t,n,i)}finally{G.p=u,O.T=s}}function Ou(e,t,n,i){if(Ls){var s=Vu(i);if(s===null)vu(e,t,i,Ns,n),ap(e,i);else if(Kb(s,e,t,n,i))i.stopPropagation();else if(ap(e,i),t&4&&-1<Fb.indexOf(e)){for(;s!==null;){var u=Ea(s);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var d=Wn(u.pendingLanes);if(d!==0){var p=u;for(p.pendingLanes|=2,p.entangledLanes|=2;d;){var T=1<<31-bt(d);p.entanglements[1]|=T,d&=~T}Qt(u),(be&6)===0&&(bs=yt()+500,$i(0))}}break;case 31:case 13:p=aa(u,2),p!==null&&gt(p,u,2),Ts(),Ru(u,2)}if(u=Vu(i),u===null&&vu(e,t,i,Ns,n),u===s)break;s=u}s!==null&&i.stopPropagation()}else vu(e,t,i,null,n)}}function Vu(e){return e=Bo(e),ju(e)}var Ns=null;function ju(e){if(Ns=null,e=wa(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ns=e,null}function np(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ov()){case ud:return 2;case cd:return 8;case zr:case Vv:return 32;case dd:return 268435456;default:return 32}default:return 32}}var Bu=!1,Gn=null,Pn=null,qn=null,sr=new Map,or=new Map,Xn=[],Fb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ap(e,t){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(t.pointerId)}}function lr(e,t,n,i,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[s]},t!==null&&(t=Ea(t),t!==null&&ep(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Kb(e,t,n,i,s){switch(t){case"focusin":return Gn=lr(Gn,e,t,n,i,s),!0;case"dragenter":return Pn=lr(Pn,e,t,n,i,s),!0;case"mouseover":return qn=lr(qn,e,t,n,i,s),!0;case"pointerover":var u=s.pointerId;return sr.set(u,lr(sr.get(u)||null,e,t,n,i,s)),!0;case"gotpointercapture":return u=s.pointerId,or.set(u,lr(or.get(u)||null,e,t,n,i,s)),!0}return!1}function ip(e){var t=wa(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,yd(e.priority,function(){tp(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,yd(e.priority,function(){tp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vu(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);jo=i,n.target.dispatchEvent(i),jo=null}else return t=Ea(n),t!==null&&ep(t),e.blockedOn=n,!1;t.shift()}return!0}function rp(e,t,n){_s(e)&&n.delete(t)}function Qb(){Bu=!1,Gn!==null&&_s(Gn)&&(Gn=null),Pn!==null&&_s(Pn)&&(Pn=null),qn!==null&&_s(qn)&&(qn=null),sr.forEach(rp),or.forEach(rp)}function ks(e,t){e.blockedOn===t&&(e.blockedOn=null,Bu||(Bu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Qb)))}var Hs=null;function sp(e){Hs!==e&&(Hs=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Hs===e&&(Hs=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(ju(i||n)===null)continue;break}var u=Ea(n);u!==null&&(e.splice(t,3),t-=3,Vl(u,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function ri(e){function t(T){return ks(T,e)}Gn!==null&&ks(Gn,e),Pn!==null&&ks(Pn,e),qn!==null&&ks(qn,e),sr.forEach(t),or.forEach(t);for(var n=0;n<Xn.length;n++){var i=Xn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)ip(n),n.blockedOn===null&&Xn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],u=n[i+1],d=s[ct]||null;if(typeof u=="function")d||sp(n);else if(d){var p=null;if(u&&u.hasAttribute("formAction")){if(s=u,d=u[ct]||null)p=d.formAction;else if(ju(s)!==null)continue}else p=d.action;typeof p=="function"?n[i+1]=p:(n.splice(i,3),i-=3),sp(n)}}}function op(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(d){return s=d})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Lu(e){this._internalRoot=e}Gs.prototype.render=Lu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,i=zt();Wm(n,i,e,t,null,null)},Gs.prototype.unmount=Lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wm(e.current,2,null,e,null,null),Ts(),t[Aa]=null}};function Gs(e){this._internalRoot=e}Gs.prototype.unstable_scheduleHydration=function(e){if(e){var t=gd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xn.length&&t!==0&&t<Xn[n].priority;n++);Xn.splice(n,0,e),n===0&&ip(e)}};var lp=r.version;if(lp!=="19.2.8")throw Error(l(527,lp,"19.2.8"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=m(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Zb={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ps.isDisabled&&Ps.supportsFiber)try{yi=Ps.inject(Zb),vt=Ps}catch{}}return cr.createRoot=function(e,t){if(!c(e))throw Error(l(299));var n=!1,i="",s=ph,u=gh,d=yh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Zm(e,1,!1,null,null,n,i,null,s,u,d,op),e[Aa]=t.current,yu(e),new Lu(t)},cr.hydrateRoot=function(e,t,n){if(!c(e))throw Error(l(299));var i=!1,s="",u=ph,d=gh,p=yh,T=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.formState!==void 0&&(T=n.formState)),t=Zm(e,1,!0,t,n??null,i,s,T,u,d,p,op),t.context=Jm(null),n=t.current,i=zt(),i=zo(i),s=Dn(i),s.callback=null,Un(n,s,i),n=i,t.current.lanes=n,bi(t,n),Qt(t),e[Aa]=t.current,yu(e),new Gs(t)},cr.version="19.2.8",cr}var vp;function s2(){if(vp)return ku.exports;vp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),ku.exports=r2(),ku.exports}var o2=s2();const Ng=J.createContext(null);function fi(){const a=J.use(Ng);if(!a)throw new Error("useLanguage must be used inside LanguageProvider.");return a}function l2(){const{copy:a,locale:r}=fi();return U.jsxs("footer",{className:"site-footer",children:[U.jsxs("div",{className:"footer-identity",children:[U.jsx("img",{src:"/media/avatar.jpg",alt:"",width:"640",height:"640",loading:"lazy"}),U.jsxs("div",{children:[U.jsx("strong",{children:a.footer.copyright}),U.jsx("span",{children:a.hero.role})]})]}),U.jsx("p",{children:r==="zh"?"技术美术 · 引擎工具 · AIGC":"Technical art · Engine tools · AIGC"}),U.jsxs("a",{href:"#top",children:[r==="zh"?"回到顶部":"Back to top"," ",U.jsx("span",{"aria-hidden":"true",children:"↑"})]})]})}function u2(){const{locale:a,copy:r,setLocale:o}=fi(),[l,c]=J.useState(""),h=f=>{f!==a&&(o(f),c(f==="zh"?"语言已切换为中文。":"Language changed to English."))};return U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:"language-toggle",role:"group","aria-label":r.language.label,children:[U.jsxs("button",{type:"button",className:a==="en"?"is-active":void 0,"aria-pressed":a==="en",onClick:()=>h("en"),children:["EN",U.jsx("span",{className:"sr-only",children:r.language.english})]}),U.jsx("button",{type:"button",className:a==="zh"?"is-active":void 0,"aria-pressed":a==="zh",onClick:()=>h("zh"),children:"中文"})]}),U.jsx("span",{className:"sr-only","aria-live":"polite",children:l})]})}function c2(){const{copy:a}=fi();return U.jsxs("header",{className:"site-header",children:[U.jsxs("a",{className:"brand-link",href:"#top","aria-label":"Lucas Shen, home",children:[U.jsx("span",{lang:"zh-CN",children:"沈裕焱"}),U.jsx("span",{children:"Lucas Shen"})]}),U.jsxs("div",{className:"header-actions",children:[U.jsx("nav",{className:"site-nav","aria-label":a.nav.aria,children:U.jsx("a",{href:"#portfolio",children:a.nav.work})}),U.jsx(u2,{})]})]})}function d2(){const{copy:a,locale:r}=fi(),o=r==="zh"?[["犹他大学｜娱乐艺术与工程（技术美术/游戏工程）硕士","2025.08 — 2027.05"],["上海交通大学｜工业工程本科","2020.09 — 2024.06"]]:[["University of Utah | M.E.A.E., Technical Art","Aug 2025 — May 2027"],["Shanghai Jiao Tong University | B.Eng., Industrial Engineering","Sep 2020 — Jun 2024"]],l=r==="zh"?[["腾讯光子工作室｜AI 工具技术美术实习生","2026.03 — 2026.08"],["广州四三九九信息科技有限公司｜系统策划","2024.05 — 2024.11"],["Whitedot 游戏工作室｜Unity 客户端开发实习生","2024.01 — 2024.04"],["上海如为电力｜UE5 客户端开发实习生","2023.04 — 2023.08"]]:[["Tencent Lightspeed Studios | AI Tools Technical Art Intern","Mar 2026 — Aug 2026"],["4399 Network | Systems Designer","May 2024 — Nov 2024"],["Whitedot Game Studio | Unity Client Development Intern","Jan 2024 — Apr 2024"],["Shanghai Ruwei Electric Power | UE5 Client Development Intern","Apr 2023 — Aug 2023"]];return U.jsxs("section",{className:"profile-strip","aria-labelledby":"hero-title",children:[U.jsx("img",{src:"/media/avatar.jpg",alt:"Lucas Shen hand-drawn avatar",width:"640",height:"640",fetchPriority:"high"}),U.jsxs("div",{className:"profile-name",children:[U.jsxs("h1",{id:"hero-title",children:[U.jsx("span",{lang:"zh-CN",children:"沈裕焱"}),U.jsx("span",{children:"Lucas Shen"})]}),U.jsx("p",{children:a.hero.role})]}),U.jsx("p",{className:"profile-intro",children:r==="zh"?"游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线作品。":"Games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines."}),U.jsxs("div",{className:"profile-history",children:[U.jsxs("section",{children:[U.jsx("h2",{children:r==="zh"?"教育经历":"Education"}),U.jsx("ul",{children:o.map(([c,h])=>U.jsxs("li",{children:[U.jsx("span",{children:c}),U.jsxs("time",{children:["· ",h]})]},c))})]}),U.jsxs("section",{children:[U.jsx("h2",{children:r==="zh"?"实习与工作经历":"Internship & Work Experience"}),U.jsx("ul",{children:l.map(([c,h])=>U.jsxs("li",{children:[U.jsx("span",{children:c}),U.jsxs("time",{children:["· ",h]})]},c))})]})]})]})}const _g=J.createContext({});function f2(a){const r=J.useRef(null);return r.current===null&&(r.current=a()),r.current}const h2=typeof window<"u",m2=h2?J.useLayoutEffect:J.useEffect,Vc=J.createContext(null);function jc(a,r){a.indexOf(r)===-1&&a.push(r)}function no(a,r){const o=a.indexOf(r);o>-1&&a.splice(o,1)}const en=(a,r,o)=>o>r?r:o<a?a:o;let mo=()=>{};const Kn={},kg=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),Hg=a=>typeof a=="object"&&a!==null,Gg=a=>/^0[^.\s]+$/u.test(a);function Pg(a){let r;return()=>(r===void 0&&(r=a()),r)}const kt=a=>a,Tr=(...a)=>a.reduce((r,o)=>l=>o(r(l))),yr=(a,r,o)=>{const l=r-a;return l?(o-a)/l:1};class Bc{constructor(){this.subscriptions=[]}add(r){return jc(this.subscriptions,r),()=>no(this.subscriptions,r)}notify(r,o,l){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](r,o,l);else for(let h=0;h<c;h++){const f=this.subscriptions[h];f&&f(r,o,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const xt=a=>a*1e3,_t=a=>a/1e3,qg=(a,r)=>r?a*(1e3/r):0,Xg=(a,r,o)=>(((1-3*o+3*r)*a+(3*o-6*r))*a+3*r)*a,p2=1e-7,g2=12;function y2(a,r,o,l,c){let h,f,g=0;do f=r+(o-r)/2,h=Xg(f,l,c)-a,h>0?o=f:r=f;while(Math.abs(h)>p2&&++g<g2);return f}function Ar(a,r,o,l){if(a===r&&o===l)return kt;const c=h=>y2(h,0,1,a,o);return h=>h===0||h===1?h:Xg(c(h),r,l)}const Yg=a=>r=>r<=.5?a(2*r)/2:(2-a(2*(1-r)))/2,Ig=a=>r=>1-a(1-r),Fg=Ar(.33,1.53,.69,.99),Lc=Ig(Fg),Kg=Yg(Lc),Qg=a=>a>=1?1:(a*=2)<1?.5*Lc(a):.5*(2-Math.pow(2,-10*(a-1))),Nc=a=>1-Math.sin(Math.acos(a)),Zg=Ig(Nc),Jg=Yg(Nc),v2=Ar(.42,0,1,1),b2=Ar(0,0,.58,1),Wg=Ar(.42,0,.58,1),S2=a=>Array.isArray(a)&&typeof a[0]!="number",$g=a=>Array.isArray(a)&&typeof a[0]=="number",T2={linear:kt,easeIn:v2,easeInOut:Wg,easeOut:b2,circIn:Nc,circInOut:Jg,circOut:Zg,backIn:Lc,backInOut:Kg,backOut:Fg,anticipate:Qg},A2=a=>typeof a=="string",bp=a=>{if($g(a)){mo(a.length===4);const[r,o,l,c]=a;return Ar(r,o,l,c)}else if(A2(a))return T2[a];return a},qs=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function w2(a){let r=new Set,o=new Set,l=!1,c=!1;const h=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function g(m){h.has(m)&&(y.schedule(m),a()),m(f)}const y={schedule:(m,v=!1,b=!1)=>{const z=b&&l?r:o;return v&&h.add(m),z.add(m),m},cancel:m=>{o.delete(m),h.delete(m)},process:m=>{if(f=m,l){c=!0;return}l=!0;const v=r;r=o,o=v,r.forEach(g),r.clear(),l=!1,c&&(c=!1,y.process(m))}};return y}const E2=40;function ey(a,r){let o=!1,l=!0;const c={delta:0,timestamp:0,isProcessing:!1},h=()=>o=!0,f=qs.reduce((H,X)=>(H[X]=w2(h),H),{}),{setup:g,read:y,resolveKeyframes:m,preUpdate:v,update:b,preRender:S,render:z,postRender:M}=f,N=()=>{const H=Kn.useManualTiming,X=H?c.timestamp:performance.now();o=!1,H||(c.delta=l?1e3/60:Math.max(Math.min(X-c.timestamp,E2),1)),c.timestamp=X,c.isProcessing=!0,g.process(c),y.process(c),m.process(c),v.process(c),b.process(c),S.process(c),z.process(c),M.process(c),c.isProcessing=!1,o&&r&&(l=!1,a(N))},k=()=>{o=!0,l=!0,c.isProcessing||a(N)};return{schedule:qs.reduce((H,X)=>{const ne=f[X];return H[X]=(le,F=!1,W=!1)=>(o||k(),ne.schedule(le,F,W)),H},{}),cancel:H=>{for(let X=0;X<qs.length;X++)f[qs[X]].cancel(H)},state:c,steps:f}}const{schedule:Ue,cancel:Qn,state:nt,steps:qu}=ey(typeof requestAnimationFrame<"u"?requestAnimationFrame:kt,!0);let Fs;function C2(){Fs=void 0}const lt={now:()=>(Fs===void 0&&lt.set(nt.isProcessing||Kn.useManualTiming?nt.timestamp:performance.now()),Fs),set:a=>{Fs=a,queueMicrotask(C2)}},ty=a=>r=>typeof r=="string"&&r.startsWith(a),ny=ty("--"),z2=ty("var(--"),_c=a=>z2(a)?x2.test(a.split("/*")[0].trim()):!1,x2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Sp(a){return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")}const hi={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},vr={...hi,transform:a=>en(0,1,a)},Xs={...hi,default:1},hr=a=>Math.round(a*1e5)/1e5,kc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function M2(a){return a==null}const D2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Hc=(a,r)=>o=>!!(typeof o=="string"&&D2.test(o)&&o.startsWith(a)||r&&!M2(o)&&Object.prototype.hasOwnProperty.call(o,r)),ay=(a,r,o)=>l=>{if(typeof l!="string")return l;const[c,h,f,g]=l.match(kc);return{[a]:parseFloat(c),[r]:parseFloat(h),[o]:parseFloat(f),alpha:g!==void 0?parseFloat(g):1}},U2=a=>en(0,255,a),Xu={...hi,transform:a=>Math.round(U2(a))},va={test:Hc("rgb","red"),parse:ay("red","green","blue"),transform:({red:a,green:r,blue:o,alpha:l=1})=>"rgba("+Xu.transform(a)+", "+Xu.transform(r)+", "+Xu.transform(o)+", "+hr(vr.transform(l))+")"};function R2(a){let r="",o="",l="",c="";return a.length>5?(r=a.substring(1,3),o=a.substring(3,5),l=a.substring(5,7),c=a.substring(7,9)):(r=a.substring(1,2),o=a.substring(2,3),l=a.substring(3,4),c=a.substring(4,5),r+=r,o+=o,l+=l,c+=c),{red:parseInt(r,16),green:parseInt(o,16),blue:parseInt(l,16),alpha:c?parseInt(c,16)/255:1}}const sc={test:Hc("#"),parse:R2,transform:va.transform},wr=a=>({test:r=>typeof r=="string"&&r.endsWith(a)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${a}`}),Sn=wr("deg"),$t=wr("%"),K=wr("px"),O2=wr("vh"),V2=wr("vw"),Tp={...$t,parse:a=>$t.parse(a)/100,transform:a=>$t.transform(a*100)},oi={test:Hc("hsl","hue"),parse:ay("hue","saturation","lightness"),transform:({hue:a,saturation:r,lightness:o,alpha:l=1})=>"hsla("+Math.round(a)+", "+$t.transform(hr(r))+", "+$t.transform(hr(o))+", "+hr(vr.transform(l))+")"},Ie={test:a=>va.test(a)||sc.test(a)||oi.test(a),parse:a=>va.test(a)?va.parse(a):oi.test(a)?oi.parse(a):sc.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?va.transform(a):oi.transform(a),getAnimatableNone:a=>{const r=Ie.parse(a);return r.alpha=0,Ie.transform(r)}},j2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function B2(a){return isNaN(a)&&typeof a=="string"&&(a.match(kc)?.length||0)+(a.match(j2)?.length||0)>0}const iy="number",ry="color",L2="var",N2="var(",Ap="${}",_2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ci(a){const r=a.toString(),o=[],l={color:[],number:[],var:[]},c=[];let h=0;const g=r.replace(_2,y=>(Ie.test(y)?(l.color.push(h),c.push(ry),o.push(Ie.parse(y))):y.startsWith(N2)?(l.var.push(h),c.push(L2),o.push(y)):(l.number.push(h),c.push(iy),o.push(parseFloat(y))),++h,Ap)).split(Ap);return{values:o,split:g,indexes:l,types:c}}function k2(a){return ci(a).values}function sy({split:a,types:r}){const o=a.length;return l=>{let c="";for(let h=0;h<o;h++)if(c+=a[h],l[h]!==void 0){const f=r[h];f===iy?c+=hr(l[h]):f===ry?c+=Ie.transform(l[h]):c+=l[h]}return c}}function H2(a){return sy(ci(a))}const G2=a=>typeof a=="number"?0:Ie.test(a)?Ie.getAnimatableNone(a):a,P2=(a,r)=>typeof a=="number"?r?.trim().endsWith("/")?a:0:G2(a);function q2(a){const r=ci(a);return sy(r)(r.values.map((l,c)=>P2(l,r.split[c])))}const Yt={test:B2,parse:k2,createTransformer:H2,getAnimatableNone:q2};function Yu(a,r,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?a+(r-a)*6*o:o<1/2?r:o<2/3?a+(r-a)*(2/3-o)*6:a}function X2({hue:a,saturation:r,lightness:o,alpha:l}){a/=360,r/=100,o/=100;let c=0,h=0,f=0;if(!r)c=h=f=o;else{const g=o<.5?o*(1+r):o+r-o*r,y=2*o-g;c=Yu(y,g,a+1/3),h=Yu(y,g,a),f=Yu(y,g,a-1/3)}return{red:Math.round(c*255),green:Math.round(h*255),blue:Math.round(f*255),alpha:l}}function ao(a,r){return o=>o>0?r:a}const De=(a,r,o)=>a+(r-a)*o,Iu=(a,r,o)=>{const l=a*a,c=o*(r*r-l)+l;return c<0?0:Math.sqrt(c)},Y2=[sc,va,oi],I2=a=>Y2.find(r=>r.test(a));function wp(a){const r=I2(a);if(!r)return!1;let o=r.parse(a);return r===oi&&(o=X2(o)),o}const Ep=(a,r)=>{const o=wp(a),l=wp(r);if(!o||!l)return ao(a,r);const c={...o};return h=>(c.red=Iu(o.red,l.red,h),c.green=Iu(o.green,l.green,h),c.blue=Iu(o.blue,l.blue,h),c.alpha=De(o.alpha,l.alpha,h),va.transform(c))},oc=new Set(["none","hidden"]);function F2(a,r){return oc.has(a)?o=>o<=0?a:r:o=>o>=1?r:a}function K2(a,r){return o=>De(a,r,o)}function Gc(a){return typeof a=="number"?K2:typeof a=="string"?_c(a)?ao:Ie.test(a)?Ep:J2:Array.isArray(a)?oy:typeof a=="object"?Ie.test(a)?Ep:Q2:ao}function oy(a,r){const o=[...a],l=o.length,c=a.map((h,f)=>Gc(h)(h,r[f]));return h=>{for(let f=0;f<l;f++)o[f]=c[f](h);return o}}function Q2(a,r){const o={...a,...r},l={};for(const c in o)a[c]!==void 0&&r[c]!==void 0&&(l[c]=Gc(a[c])(a[c],r[c]));return c=>{for(const h in l)o[h]=l[h](c);return o}}function Z2(a,r){const o=[],l={color:0,var:0,number:0};for(let c=0;c<r.values.length;c++){const h=r.types[c],f=a.indexes[h][l[h]],g=a.values[f]??0;o[c]=g,l[h]++}return o}const J2=(a,r)=>{const o=Yt.createTransformer(r),l=ci(a),c=ci(r);return l.indexes.var.length===c.indexes.var.length&&l.indexes.color.length===c.indexes.color.length&&l.indexes.number.length>=c.indexes.number.length?oc.has(a)&&!c.values.length||oc.has(r)&&!l.values.length?F2(a,r):Tr(oy(Z2(l,c),c.values),o):ao(a,r)};function ly(a,r,o){return typeof a=="number"&&typeof r=="number"&&typeof o=="number"?De(a,r,o):Gc(a)(a,r)}const W2=a=>{const r=({timestamp:o})=>a(o);return{start:(o=!0)=>Ue.update(r,o),stop:()=>Qn(r),now:()=>nt.isProcessing?nt.timestamp:lt.now()}},uy=(a,r,o=10)=>{let l="";const c=Math.max(Math.round(r/o),2);for(let h=0;h<c;h++)l+=Math.round(a(h/(c-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},io=2e4;function Pc(a){let r=0;const o=50;let l=a.next(r);for(;!l.done&&r<io;)r+=o,l=a.next(r);return r>=io?1/0:r}function $2(a,r=100,o){const l=o({...a,keyframes:[0,r]}),c=Math.min(Pc(l),io);return{type:"keyframes",ease:h=>l.next(c*h).value/r,duration:_t(c)}}const Le={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function lc(a,r){return a*Math.sqrt(1-r*r)}const e1=12;function t1(a,r,o){let l=o;for(let c=1;c<e1;c++)l=l-a(l)/r(l);return l}const Fu=.001;function n1({duration:a=Le.duration,bounce:r=Le.bounce,velocity:o=Le.velocity,mass:l=Le.mass}){let c,h,f=1-r;f=en(Le.minDamping,Le.maxDamping,f),a=en(Le.minDuration,Le.maxDuration,_t(a)),f<1?(c=m=>{const v=m*f,b=v*a,S=v-o,z=lc(m,f),M=Math.exp(-b);return Fu-S/z*M},h=m=>{const b=m*f*a,S=b*o+o,z=Math.pow(f,2)*Math.pow(m,2)*a,M=Math.exp(-b),N=lc(Math.pow(m,2),f);return(-c(m)+Fu>0?-1:1)*((S-z)*M)/N}):(c=m=>{const v=Math.exp(-m*a),b=(m-o)*a+1;return-Fu+v*b},h=m=>{const v=Math.exp(-m*a),b=(o-m)*(a*a);return v*b});const g=5/a,y=t1(c,h,g);if(a=xt(a),isNaN(y))return{stiffness:Le.stiffness,damping:Le.damping,duration:a};{const m=Math.pow(y,2)*l;return{stiffness:m,damping:f*2*Math.sqrt(l*m),duration:a}}}const a1=["duration","bounce"],i1=["stiffness","damping","mass"];function Cp(a,r){return r.some(o=>a[o]!==void 0)}function r1(a){let r={velocity:Le.velocity,stiffness:Le.stiffness,damping:Le.damping,mass:Le.mass,isResolvedFromDuration:!1,...a};if(!Cp(a,i1)&&Cp(a,a1))if(r.velocity=0,a.visualDuration){const o=a.visualDuration,l=2*Math.PI/(o*1.2),c=l*l,h=2*en(.05,1,1-(a.bounce||0))*Math.sqrt(c);r={...r,mass:Le.mass,stiffness:c,damping:h}}else{const o=n1({...a,velocity:0});r={...r,...o,mass:Le.mass},r.isResolvedFromDuration=!0}return r}function ro(a=Le.visualDuration,r=Le.bounce){const o=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:r}:a;let{restSpeed:l,restDelta:c}=o;const h=o.keyframes[0],f=o.keyframes[o.keyframes.length-1],g={done:!1,value:h},{stiffness:y,damping:m,mass:v,duration:b,velocity:S,isResolvedFromDuration:z}=r1({...o,velocity:-_t(o.velocity||0)}),M=S||0,N=m/(2*Math.sqrt(y*v)),k=f-h,_=_t(Math.sqrt(y/v)),P=Math.abs(k)<5;l||(l=P?Le.restSpeed.granular:Le.restSpeed.default),c||(c=P?Le.restDelta.granular:Le.restDelta.default);let H,X,ne,le,F,W;if(N<1)ne=lc(_,N),le=(M+N*_*k)/ne,H=te=>{const ve=Math.exp(-N*_*te);return f-ve*(le*Math.sin(ne*te)+k*Math.cos(ne*te))},F=N*_*le+k*ne,W=N*_*k-le*ne,X=te=>Math.exp(-N*_*te)*(F*Math.sin(ne*te)+W*Math.cos(ne*te));else if(N===1){H=ve=>f-Math.exp(-_*ve)*(k+(M+_*k)*ve);const te=M+_*k;X=ve=>Math.exp(-_*ve)*(_*te*ve-M)}else{const te=_*Math.sqrt(N*N-1);H=Ge=>{const Ne=Math.exp(-N*_*Ge),O=Math.min(te*Ge,300);return f-Ne*((M+N*_*k)*Math.sinh(O)+te*k*Math.cosh(O))/te};const ve=(M+N*_*k)/te,Te=N*_*ve-k*te,rt=N*_*k-ve*te;X=Ge=>{const Ne=Math.exp(-N*_*Ge),O=Math.min(te*Ge,300);return Ne*(Te*Math.sinh(O)+rt*Math.cosh(O))}}const Ee={calculatedDuration:z&&b||null,velocity:te=>xt(X(te)),next:te=>{if(!z&&N<1){const Te=Math.exp(-N*_*te),rt=Math.sin(ne*te),Ge=Math.cos(ne*te),Ne=f-Te*(le*rt+k*Ge),O=xt(Te*(F*rt+W*Ge));return g.done=Math.abs(O)<=l&&Math.abs(f-Ne)<=c,g.value=g.done?f:Ne,g}const ve=H(te);if(z)g.done=te>=b;else{const Te=xt(X(te));g.done=Math.abs(Te)<=l&&Math.abs(f-ve)<=c}return g.value=g.done?f:ve,g},toString:()=>{const te=Math.min(Pc(Ee),io),ve=uy(Te=>Ee.next(te*Te).value,te,30);return te+"ms "+ve},toTransition:()=>{}};return Ee}ro.applyToOptions=a=>{const r=$2(a,100,ro);return a.ease=r.ease,a.duration=xt(r.duration),a.type="keyframes",a};const s1=5;function cy(a,r,o){const l=Math.max(r-s1,0);return qg(o-a(l),r-l)}function uc({keyframes:a,velocity:r=0,power:o=.8,timeConstant:l=325,bounceDamping:c=10,bounceStiffness:h=500,modifyTarget:f,min:g,max:y,restDelta:m=.5,restSpeed:v}){const b=a[0],S={done:!1,value:b},z=W=>g!==void 0&&W<g||y!==void 0&&W>y,M=W=>g===void 0?y:y===void 0||Math.abs(g-W)<Math.abs(y-W)?g:y;let N=o*r;const k=b+N,_=f===void 0?k:f(k);_!==k&&(N=_-b);const P=W=>-N*Math.exp(-W/l),H=W=>_+P(W),X=W=>{const Ee=P(W),te=H(W);S.done=Math.abs(Ee)<=m,S.value=S.done?_:te};let ne,le;const F=W=>{z(S.value)&&(ne=W,le=ro({keyframes:[S.value,M(S.value)],velocity:cy(H,W,S.value),damping:c,stiffness:h,restDelta:m,restSpeed:v}))};return F(0),{calculatedDuration:null,next:W=>{let Ee=!1;return!le&&ne===void 0&&(Ee=!0,X(W),F(W)),ne!==void 0&&W>=ne?le.next(W-ne):(!Ee&&X(W),S)}}}function o1(a,r,o){const l=[],c=o||Kn.mix||ly,h=a.length-1;for(let f=0;f<h;f++){let g=c(a[f],a[f+1]);if(r){const y=Array.isArray(r)?r[f]||kt:r;g=Tr(y,g)}l.push(g)}return l}function l1(a,r,{clamp:o=!0,ease:l,mixer:c}={}){const h=a.length;if(mo(h===r.length),h===1)return()=>r[0];if(h===2&&r[0]===r[1])return()=>r[1];const f=a[0]===a[1];a[0]>a[h-1]&&(a=[...a].reverse(),r=[...r].reverse());const g=o1(r,l,c),y=g.length,m=v=>{if(f&&v<a[0])return r[0];let b=0;if(y>1)for(;b<a.length-2&&!(v<a[b+1]);b++);const S=yr(a[b],a[b+1],v);return g[b](S)};return o?v=>m(en(a[0],a[h-1],v)):m}function u1(a,r){const o=a[a.length-1];for(let l=1;l<=r;l++){const c=yr(0,r,l);a.push(De(o,1,c))}}function c1(a){const r=[0];return u1(r,a.length-1),r}function d1(a,r){return a.map(o=>o*r)}function f1(a,r){return a.map(()=>r||Wg).splice(0,a.length-1)}function mr({duration:a=300,keyframes:r,times:o,ease:l="easeInOut"}){const c=S2(l)?l.map(bp):bp(l),h={done:!1,value:r[0]},f=d1(o&&o.length===r.length?o:c1(r),a),g=l1(f,r,{ease:Array.isArray(c)?c:f1(r,c)});return{calculatedDuration:a,next:y=>(h.value=g(y),h.done=y>=a,h)}}const h1=a=>a!==null;function po(a,{repeat:r,repeatType:o="loop"},l,c=1){const h=a.filter(h1),g=c<0||r&&o!=="loop"&&r%2===1?0:h.length-1;return!g||l===void 0?h[g]:l}const m1={decay:uc,inertia:uc,tween:mr,keyframes:mr,spring:ro};function dy(a){typeof a.type=="string"&&(a.type=m1[a.type])}class qc{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(r=>{this.resolve=r})}notifyFinished(){this.resolve()}then(r,o){return this.finished.then(r,o)}}const p1=a=>a/100;class so extends qc{constructor(r){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:o}=this.options;o&&o.updatedAt!==lt.now()&&this.tick(lt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=r,this.initAnimation(),this.play(),r.autoplay===!1&&this.pause()}initAnimation(){const{options:r}=this;dy(r);const{type:o=mr,repeat:l=0,repeatDelay:c=0,repeatType:h,velocity:f=0}=r;let{keyframes:g}=r;const y=o||mr;y!==mr&&typeof g[0]!="number"&&(this.mixKeyframes=Tr(p1,ly(g[0],g[1])),g=[0,100]);const m=y({...r,keyframes:g});h==="mirror"&&(this.mirroredGenerator=y({...r,keyframes:[...g].reverse(),velocity:-f})),m.calculatedDuration===null&&(m.calculatedDuration=Pc(m));const{calculatedDuration:v}=m;this.calculatedDuration=v,this.resolvedDuration=v+c,this.totalDuration=this.resolvedDuration*(l+1)-c,this.generator=m}updateTime(r){const o=Math.round(r-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(r,o=!1){const{generator:l,totalDuration:c,mixKeyframes:h,mirroredGenerator:f,resolvedDuration:g,calculatedDuration:y}=this;if(this.startTime===null)return l.next(0);const{delay:m=0,keyframes:v,repeat:b,repeatType:S,repeatDelay:z,type:M,onUpdate:N,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-c/this.speed,this.startTime)),o?this.currentTime=r:this.updateTime(r);const _=this.currentTime-m*(this.playbackSpeed>=0?1:-1),P=this.playbackSpeed>=0?_<0:_>c;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let H=this.currentTime,X=l;if(b){const W=Math.min(this.currentTime,c)/g;let Ee=Math.floor(W),te=W%1;!te&&W>=1&&(te=1),te===1&&Ee--,Ee=Math.min(Ee,b+1),Ee%2&&(S==="reverse"?(te=1-te,z&&(te-=z/g)):S==="mirror"&&(X=f)),H=en(0,1,te)*g}let ne;P?(this.delayState.value=v[0],ne=this.delayState):ne=X.next(H),h&&!P&&(ne.value=h(ne.value));let{done:le}=ne;!P&&y!==null&&(le=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&le);return F&&M!==uc&&(ne.value=po(v,this.options,k,this.speed)),N&&N(ne.value),F&&this.finish(),ne}then(r,o){return this.finished.then(r,o)}get duration(){return _t(this.calculatedDuration)}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+_t(r)}get time(){return _t(this.currentTime)}set time(r){r=xt(r),this.currentTime=r,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=r,this.tick(r))}getGeneratorVelocity(){const r=this.currentTime;if(r<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(r);const o=this.generator.next(r).value;return cy(l=>this.generator.next(l).value,r,o)}get speed(){return this.playbackSpeed}set speed(r){const o=this.playbackSpeed!==r;o&&this.driver&&this.updateTime(lt.now()),this.playbackSpeed=r,o&&this.driver&&(this.time=_t(this.currentTime))}play(){if(this.isStopped)return;const{driver:r=W2,startTime:o}=this.options;this.driver||(this.driver=r(c=>this.tick(c))),this.options.onPlay?.();const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=o??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(lt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}attachTimeline(r){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),r.observe(this)}}function g1(a){for(let r=1;r<a.length;r++)a[r]??(a[r]=a[r-1])}const ba=a=>a*180/Math.PI,cc=a=>{const r=ba(Math.atan2(a[1],a[0]));return dc(r)},y1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:cc,rotateZ:cc,skewX:a=>ba(Math.atan(a[1])),skewY:a=>ba(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},dc=a=>(a=a%360,a<0&&(a+=360),a),zp=cc,xp=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),Mp=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),v1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:xp,scaleY:Mp,scale:a=>(xp(a)+Mp(a))/2,rotateX:a=>dc(ba(Math.atan2(a[6],a[5]))),rotateY:a=>dc(ba(Math.atan2(-a[2],a[0]))),rotateZ:zp,rotate:zp,skewX:a=>ba(Math.atan(a[4])),skewY:a=>ba(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function fc(a){return a.includes("scale")?1:0}function hc(a,r){if(!a||a==="none")return fc(r);const o=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,c;if(o)l=v1,c=o;else{const g=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=y1,c=g}if(!c)return fc(r);const h=l[r],f=c[1].split(",").map(S1);return typeof h=="function"?h(f):f[h]}const b1=(a,r)=>{const{transform:o="none"}=getComputedStyle(a);return hc(o,r)};function S1(a){return parseFloat(a.trim())}const mi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],pi=new Set([...mi,"pathRotation"]),Dp=a=>a===hi||a===K,T1=new Set(["x","y","z"]),A1=mi.filter(a=>!T1.has(a));function w1(a){const r=[];return A1.forEach(o=>{const l=a.getValue(o);l!==void 0&&(r.push([o,l.get()]),l.set(o.startsWith("scale")?1:0))}),r}const Fn={width:({x:a},{paddingLeft:r="0",paddingRight:o="0",boxSizing:l})=>{const c=a.max-a.min;return l==="border-box"?c:c-parseFloat(r)-parseFloat(o)},height:({y:a},{paddingTop:r="0",paddingBottom:o="0",boxSizing:l})=>{const c=a.max-a.min;return l==="border-box"?c:c-parseFloat(r)-parseFloat(o)},top:(a,{top:r})=>parseFloat(r),left:(a,{left:r})=>parseFloat(r),bottom:({y:a},{top:r})=>parseFloat(r)+(a.max-a.min),right:({x:a},{left:r})=>parseFloat(r)+(a.max-a.min),x:(a,{transform:r})=>hc(r,"x"),y:(a,{transform:r})=>hc(r,"y")};Fn.translateX=Fn.x;Fn.translateY=Fn.y;const Sa=new Set;let mc=!1,pc=!1,gc=!1;function fy(){if(pc){const a=Array.from(Sa).filter(l=>l.needsMeasurement),r=new Set(a.map(l=>l.element)),o=new Map;r.forEach(l=>{const c=w1(l);c.length&&(o.set(l,c),l.render())}),a.forEach(l=>l.measureInitialState()),r.forEach(l=>{l.render();const c=o.get(l);c&&c.forEach(([h,f])=>{l.getValue(h)?.set(f)})}),a.forEach(l=>l.measureEndState()),a.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}pc=!1,mc=!1,Sa.forEach(a=>a.complete(gc)),Sa.clear()}function hy(){Sa.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(pc=!0)})}function E1(){gc=!0,hy(),fy(),gc=!1}class Xc{constructor(r,o,l,c,h,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...r],this.onComplete=o,this.name=l,this.motionValue=c,this.element=h,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(Sa.add(this),mc||(mc=!0,Ue.read(hy),Ue.resolveKeyframes(fy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:o,element:l,motionValue:c}=this;if(r[0]===null){const h=c?.get(),f=r[r.length-1];if(h!==void 0)r[0]=h;else if(l&&o){const g=l.readValue(o,f);g!=null&&(r[0]=g)}r[0]===void 0&&(r[0]=f),c&&h===void 0&&c.set(r[0])}g1(r)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(r=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,r),Sa.delete(this)}cancel(){this.state==="scheduled"&&(Sa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const C1=a=>a.startsWith("--");function my(a,r,o){C1(r)?a.style.setProperty(r,o):a.style[r]=o}const z1={};function py(a,r){const o=Pg(a);return()=>z1[r]??o()}const x1=py(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),gy=py(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),fr=([a,r,o,l])=>`cubic-bezier(${a}, ${r}, ${o}, ${l})`,Up={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fr([0,.65,.55,1]),circOut:fr([.55,0,1,.45]),backIn:fr([.31,.01,.66,-.59]),backOut:fr([.33,1.53,.69,.99])};function yy(a,r){if(a)return typeof a=="function"?gy()?uy(a,r):"ease-out":$g(a)?fr(a):Array.isArray(a)?a.map(o=>yy(o,r)||Up.easeOut):Up[a]}function M1(a,r,o,{delay:l=0,duration:c=300,repeat:h=0,repeatType:f="loop",ease:g="easeOut",times:y}={},m=void 0){const v={[r]:o};y&&(v.offset=y);const b=yy(g,c);Array.isArray(b)&&(v.easing=b);const S={delay:l,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:h+1,direction:f==="reverse"?"alternate":"normal"};return m&&(S.pseudoElement=m),a.animate(v,S)}function vy(a){return typeof a=="function"&&"applyToOptions"in a}function D1({type:a,...r}){return vy(a)&&gy()?a.applyToOptions(r):(r.duration??(r.duration=300),r.ease??(r.ease="easeOut"),r)}class by extends qc{constructor(r){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!r)return;const{element:o,name:l,keyframes:c,pseudoElement:h,allowFlatten:f=!1,finalKeyframe:g,onComplete:y}=r;this.isPseudoElement=!!h,this.allowFlatten=f,this.options=r,mo(typeof r.type!="string");const m=D1(r);this.animation=M1(o,l,c,m,h),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!h){const v=po(c,this.options,g,this.speed);this.updateMotionValue&&this.updateMotionValue(v),my(o,l,v),this.animation.cancel()}y?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:r}=this;r==="idle"||r==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const r=this.options?.element;!this.isPseudoElement&&r?.isConnected&&this.animation.commitStyles?.()}get duration(){const r=this.animation.effect?.getComputedTiming?.().duration||0;return _t(Number(r))}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+_t(r)}get time(){return _t(Number(this.animation.currentTime)||0)}set time(r){const o=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=xt(r),o&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(r){r<0&&(this.finishedTime=null),this.animation.playbackRate=r}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(r){this.manualStartTime=this.animation.startTime=r}attachTimeline({timeline:r,rangeStart:o,rangeEnd:l,observe:c}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,r&&x1()?(this.animation.timeline=r,o&&(this.animation.rangeStart=o),l&&(this.animation.rangeEnd=l),kt):c(this)}}const Sy={anticipate:Qg,backInOut:Kg,circInOut:Jg};function U1(a){return a in Sy}function R1(a){typeof a.ease=="string"&&U1(a.ease)&&(a.ease=Sy[a.ease])}const Ku=10;class O1 extends by{constructor(r){R1(r),dy(r),super(r),r.startTime!==void 0&&r.autoplay!==!1&&(this.startTime=r.startTime),this.options=r}updateMotionValue(r){const{motionValue:o,onUpdate:l,onComplete:c,element:h,...f}=this.options;if(!o)return;if(r!==void 0){o.set(r);return}const g=new so({...f,autoplay:!1}),y=Math.max(Ku,lt.now()-this.startTime),m=en(0,Ku,y-Ku),v=g.sample(y).value,{name:b}=this.options;h&&b&&my(h,b,v),o.setWithVelocity(g.sample(Math.max(0,y-m)).value,v,m),g.stop()}}const Rp=(a,r)=>r==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Yt.test(a)||a==="0")&&!a.startsWith("url("));function V1(a){const r=a[0];if(a.length===1)return!0;for(let o=0;o<a.length;o++)if(a[o]!==r)return!0}function j1(a,r,o,l){const c=a[0];if(c===null)return!1;if(r==="display"||r==="visibility")return!0;const h=a[a.length-1],f=Rp(c,r),g=Rp(h,r);return!f||!g?!1:V1(a)||(o==="spring"||vy(o))&&l}function yc(a){a.duration=0,a.type="keyframes"}const Ty=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),B1=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function L1(a){for(let r=0;r<a.length;r++)if(typeof a[r]=="string"&&B1.test(a[r]))return!0;return!1}const N1=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),_1=Pg(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function k1(a){const{motionValue:r,name:o,repeatDelay:l,repeatType:c,damping:h,type:f,keyframes:g}=a,y=r?.owner?.current;if(!(y instanceof HTMLElement)&&!(y instanceof SVGElement))return!1;const{onUpdate:m,transformTemplate:v}=r.owner.getProps();return _1()&&o&&(Ty.has(o)||N1.has(o)&&L1(g))&&(o!=="transform"||!v)&&!m&&!l&&c!=="mirror"&&h!==0&&f!=="inertia"}const H1=40;class G1 extends qc{constructor({autoplay:r=!0,delay:o=0,type:l="keyframes",repeat:c=0,repeatDelay:h=0,repeatType:f="loop",keyframes:g,name:y,motionValue:m,element:v,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=lt.now();const S={autoplay:r,delay:o,type:l,repeat:c,repeatDelay:h,repeatType:f,name:y,motionValue:m,element:v,...b},z=v?.KeyframeResolver||Xc;this.keyframeResolver=new z(g,(M,N,k)=>this.onKeyframesResolved(M,N,S,!k),y,m,v),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(r,o,l,c){this.keyframeResolver=void 0;const{name:h,type:f,velocity:g,delay:y,isHandoff:m,onUpdate:v}=l;this.resolvedAt=lt.now();let b=!0;j1(r,h,f,g)||(b=!1,(Kn.instantAnimations||!y)&&v?.(po(r,l,o)),r[0]=r[r.length-1],yc(l),l.repeat=0);const z={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>H1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...l,keyframes:r},M=b&&!m&&k1(z),N=z.motionValue?.owner?.current;let k;if(M)try{k=new O1({...z,element:N})}catch{k=new so(z)}else k=new so(z);k.finished.then(()=>{this.notifyFinished()}).catch(kt),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(r,o){return this.finished.finally(r).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),E1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(r){this.animation.time=r}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(r){this.animation.speed=r}get startTime(){return this.animation.startTime}attachTimeline(r){return this._animation?this.stopTimeline=this.animation.attachTimeline(r):this.pendingTimeline=r,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function Ay(a,r,o,l=0,c=1){const h=Array.from(a).sort((m,v)=>m.sortNodePosition(v)).indexOf(r),f=a.size,g=(f-1)*l;return typeof o=="function"?o(h,f):c===1?h*l:g-h*l}const Op=30,P1=a=>!isNaN(parseFloat(a));class q1{constructor(r,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{const c=lt.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const h of this.dependents)h.dirty()},this.hasAnimated=!1,this.setCurrent(r),this.owner=o.owner}setCurrent(r){this.current=r,this.updatedAt=lt.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=P1(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,o){this.events[r]||(this.events[r]=new Bc);const l=this.events[r].add(o);return r==="change"?()=>{l(),Ue.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,o){this.passiveEffect=r,this.stopPassiveEffect=o}set(r){this.passiveEffect?this.passiveEffect(r,this.updateAndNotify):this.updateAndNotify(r)}setWithVelocity(r,o,l){this.set(o),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-l}jump(r,o=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(r){this.dependents||(this.dependents=new Set),this.dependents.add(r)}removeDependent(r){this.dependents&&this.dependents.delete(r)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=lt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>Op)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Op);return qg(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(r){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=r(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function di(a,r){return new q1(a,r)}function wy(a,r){if(a?.inherit&&r){const{inherit:o,...l}=a;return{...r,...l}}return a}function Yc(a,r){const o=a?.[r]??a?.default??a;return o!==a?wy(o,a):o}const X1={type:"spring",stiffness:500,damping:25,restSpeed:10},Y1=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),I1={type:"keyframes",duration:.8},F1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},K1=(a,{keyframes:r})=>r.length>2?I1:pi.has(a)?a.startsWith("scale")?Y1(r[1]):X1:F1,Q1=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Z1(a){for(const r in a)if(!Q1.has(r))return!0;return!1}const Ic=(a,r,o,l={},c,h)=>f=>{const g=Yc(l,a)||{},y=g.delay||l.delay||0;let{elapsed:m=0}=l;m=m-xt(y);const v={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:r.getVelocity(),...g,delay:-m,onUpdate:S=>{r.set(S),g.onUpdate&&g.onUpdate(S)},onComplete:()=>{f(),g.onComplete&&g.onComplete()},name:a,motionValue:r,element:h?void 0:c};Z1(g)||Object.assign(v,K1(a,v)),v.duration&&(v.duration=xt(v.duration)),v.repeatDelay&&(v.repeatDelay=xt(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let b=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(yc(v),v.delay===0&&(b=!0)),(Kn.instantAnimations||Kn.skipAnimations||c?.shouldSkipAnimations||g.skipAnimations)&&(b=!0,yc(v),v.delay=0),v.allowFlatten=!g.type&&!g.ease,b&&!h&&r.get()!==void 0){const S=po(v.keyframes,g);if(S!==void 0){Ue.update(()=>{v.onUpdate(S),v.onComplete()});return}}return g.isSync?new so(v):new G1(v)},J1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function W1(a){const r=J1.exec(a);if(!r)return[,];const[,o,l,c]=r;return[`--${o??l}`,c]}function Ey(a,r,o=1){const[l,c]=W1(a);if(!l)return;const h=window.getComputedStyle(r).getPropertyValue(l);if(h){const f=h.trim();return kg(f)?parseFloat(f):f}return _c(c)?Ey(c,r,o+1):c}function Vp(a){const r=[{},{}];return a?.values.forEach((o,l)=>{r[0][l]=o.get(),r[1][l]=o.getVelocity()}),r}function Fc(a,r,o,l){if(typeof r=="function"){const[c,h]=Vp(l);r=r(o!==void 0?o:a.custom,c,h)}if(typeof r=="string"&&(r=a.variants&&a.variants[r]),typeof r=="function"){const[c,h]=Vp(l);r=r(o!==void 0?o:a.custom,c,h)}return r}function Ta(a,r,o){const l=a.getProps();return Fc(l,r,o!==void 0?o:l.custom,a)}const Cy=new Set(["width","height","top","left","right","bottom",...mi]),vc=a=>Array.isArray(a);function $1(a,r,o){a.hasValue(r)?a.getValue(r).set(o):a.addValue(r,di(o))}function eS(a){return vc(a)?a[a.length-1]||0:a}function tS(a,r){const o=Ta(a,r);let{transitionEnd:l={},transition:c={},...h}=o||{};h={...h,...l};for(const f in h){const g=eS(h[f]);$1(a,f,g)}}const at=a=>!!(a&&a.getVelocity);function nS(a){return!!(at(a)&&a.add)}function bc(a,r){const o=a.getValue("willChange");if(nS(o))return o.add(r);if(!o&&Kn.WillChange){const l=new Kn.WillChange("auto");a.addValue("willChange",l),l.add(r)}}function Kc(a){return a.replace(/([A-Z])/g,r=>`-${r.toLowerCase()}`)}const aS="framerAppearId",zy="data-"+Kc(aS);function xy(a){return a.props[zy]}function iS({protectedKeys:a,needsAnimating:r},o){const l=a.hasOwnProperty(o)&&r[o]!==!0;return r[o]=!1,l}function My(a,r,{delay:o=0,transitionOverride:l,type:c}={}){let{transition:h,transitionEnd:f,...g}=r;const y=a.getDefaultTransition();h=h?wy(h,y):y;const m=h?.reduceMotion,v=h?.skipAnimations;l&&(h=l);const b=[],S=c&&a.animationState&&a.animationState.getState()[c],z=h?.path;z&&z.animateVisualElement(a,g,h,o,b);for(const M in g){const N=a.getValue(M,a.latestValues[M]??null),k=g[M];if(k===void 0||S&&iS(S,M))continue;const _={delay:o,...Yc(h||{},M)};v&&(_.skipAnimations=!0);const P=N.get();if(P!==void 0&&!N.isAnimating()&&!Array.isArray(k)&&k===P&&!_.velocity){Ue.update(()=>N.set(k));continue}let H=!1;if(window.MotionHandoffAnimation){const le=xy(a);if(le){const F=window.MotionHandoffAnimation(le,M,Ue);F!==null&&(_.startTime=F,H=!0)}}bc(a,M);const X=m??a.shouldReduceMotion;N.start(Ic(M,N,k,X&&Cy.has(M)?{type:!1}:_,a,H));const ne=N.animation;ne&&b.push(ne)}if(f){const M=()=>Ue.update(()=>{f&&tS(a,f)});b.length?Promise.all(b).then(M):M()}return b}function Sc(a,r,o={}){const l=Ta(a,r,o.type==="exit"?a.presenceContext?.custom:void 0);let{transition:c=a.getDefaultTransition()||{}}=l||{};o.transitionOverride&&(c=o.transitionOverride);const h=l?()=>Promise.all(My(a,l,o)):()=>Promise.resolve(),f=a.variantChildren&&a.variantChildren.size?(y=0)=>{const{delayChildren:m=0,staggerChildren:v,staggerDirection:b}=c;return rS(a,r,y,m,v,b,o)}:()=>Promise.resolve(),{when:g}=c;if(g){const[y,m]=g==="beforeChildren"?[h,f]:[f,h];return y().then(()=>m())}else return Promise.all([h(),f(o.delay)])}function rS(a,r,o=0,l=0,c=0,h=1,f){const g=[];for(const y of a.variantChildren)y.notify("AnimationStart",r),g.push(Sc(y,r,{...f,delay:o+(typeof l=="function"?0:l)+Ay(a.variantChildren,y,l,c,h)}).then(()=>y.notify("AnimationComplete",r)));return Promise.all(g)}function sS(a,r,o={}){a.notify("AnimationStart",r);let l;if(Array.isArray(r)){const c=r.map(h=>Sc(a,h,o));l=Promise.all(c)}else if(typeof r=="string")l=Sc(a,r,o);else{const c=typeof r=="function"?Ta(a,r,o.custom):r;l=Promise.all(My(a,c,o))}return l.then(()=>{a.notify("AnimationComplete",r)})}const oS={test:a=>a==="auto",parse:a=>a},Dy=a=>r=>r.test(a),Uy=[hi,K,$t,Sn,V2,O2,oS],jp=a=>Uy.find(Dy(a));function lS(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||Gg(a):!0}const uS=new Set(["brightness","contrast","saturate","opacity"]);function cS(a){const[r,o]=a.slice(0,-1).split("(");if(r==="drop-shadow")return a;const[l]=o.match(kc)||[];if(!l)return a;const c=o.replace(l,"");let h=uS.has(r)?1:0;return l!==o&&(h*=100),r+"("+h+c+")"}const dS=/\b([a-z-]*)\(.*?\)/gu,Tc={...Yt,getAnimatableNone:a=>{const r=a.match(dS);return r?r.map(cS).join(" "):a}},Ac={...Yt,getAnimatableNone:a=>{const r=Yt.parse(a);return Yt.createTransformer(a)(r.map(l=>typeof l=="number"?0:typeof l=="object"?{...l,alpha:1}:l))}},Bp={...hi,transform:Math.round},fS={rotate:Sn,pathRotation:Sn,rotateX:Sn,rotateY:Sn,rotateZ:Sn,scale:Xs,scaleX:Xs,scaleY:Xs,scaleZ:Xs,skew:Sn,skewX:Sn,skewY:Sn,distance:K,translateX:K,translateY:K,translateZ:K,x:K,y:K,z:K,perspective:K,transformPerspective:K,opacity:vr,originX:Tp,originY:Tp,originZ:K},oo={borderWidth:K,borderTopWidth:K,borderRightWidth:K,borderBottomWidth:K,borderLeftWidth:K,borderRadius:K,borderTopLeftRadius:K,borderTopRightRadius:K,borderBottomRightRadius:K,borderBottomLeftRadius:K,width:K,maxWidth:K,height:K,maxHeight:K,top:K,right:K,bottom:K,left:K,inset:K,insetBlock:K,insetBlockStart:K,insetBlockEnd:K,insetInline:K,insetInlineStart:K,insetInlineEnd:K,padding:K,paddingTop:K,paddingRight:K,paddingBottom:K,paddingLeft:K,paddingBlock:K,paddingBlockStart:K,paddingBlockEnd:K,paddingInline:K,paddingInlineStart:K,paddingInlineEnd:K,margin:K,marginTop:K,marginRight:K,marginBottom:K,marginLeft:K,marginBlock:K,marginBlockStart:K,marginBlockEnd:K,marginInline:K,marginInlineStart:K,marginInlineEnd:K,fontSize:K,backgroundPositionX:K,backgroundPositionY:K,...fS,zIndex:Bp,fillOpacity:vr,strokeOpacity:vr,numOctaves:Bp},hS={...oo,color:Ie,backgroundColor:Ie,outlineColor:Ie,fill:Ie,stroke:Ie,borderColor:Ie,borderTopColor:Ie,borderRightColor:Ie,borderBottomColor:Ie,borderLeftColor:Ie,filter:Tc,WebkitFilter:Tc,mask:Ac,WebkitMask:Ac},Ry=a=>hS[a],mS=new Set([Tc,Ac]);function Oy(a,r){let o=Ry(a);return mS.has(o)||(o=Yt),o.getAnimatableNone?o.getAnimatableNone(r):void 0}const pS=new Set(["auto","none","0"]);function gS(a,r,o){let l=0,c;for(;l<a.length&&!c;){const h=a[l];typeof h=="string"&&!pS.has(h)&&ci(h).values.length&&(c=a[l]),l++}if(c&&o)for(const h of r)a[h]=Oy(o,c)}class yS extends Xc{constructor(r,o,l,c,h){super(r,o,l,c,h,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:o,name:l}=this;if(!o||!o.current)return;super.readKeyframes();for(let v=0;v<r.length;v++){let b=r[v];if(typeof b=="string"&&(b=b.trim(),_c(b))){const S=Ey(b,o.current);S!==void 0&&(r[v]=S),v===r.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!Cy.has(l)||r.length!==2)return;const[c,h]=r,f=jp(c),g=jp(h),y=Sp(c),m=Sp(h);if(y!==m&&Fn[l]){this.needsMeasurement=!0;return}if(f!==g)if(Dp(f)&&Dp(g))for(let v=0;v<r.length;v++){const b=r[v];typeof b=="string"&&(r[v]=parseFloat(b))}else Fn[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:o}=this,l=[];for(let c=0;c<r.length;c++)(r[c]===null||lS(r[c]))&&l.push(c);l.length&&gS(r,l,o)}measureInitialState(){const{element:r,unresolvedKeyframes:o,name:l}=this;if(!r||!r.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Fn[l](r.measureViewportBox(),window.getComputedStyle(r.current)),o[0]=this.measuredOrigin;const c=o[o.length-1];c!==void 0&&r.getValue(l,c).jump(c,!1)}measureEndState(){const{element:r,name:o,unresolvedKeyframes:l}=this;if(!r||!r.current)return;const c=r.getValue(o);c&&c.jump(this.measuredOrigin,!1);const h=l.length-1,f=l[h];l[h]=Fn[o](r.measureViewportBox(),window.getComputedStyle(r.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([g,y])=>{r.getValue(g).set(y)}),this.resolveNoneKeyframes()}}const Qc=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function Vy(a,r,o){if(a==null)return[];if(a instanceof EventTarget)return[a];if(typeof a=="string"){let l=document;const c=o?.[a]??l.querySelectorAll(a);return c?Array.from(c):[]}return Array.from(a).filter(l=>l!=null)}const wc=(a,r)=>r&&typeof a=="number"?r.transform(a):a;function vS(a){return Hg(a)&&"offsetHeight"in a&&!("ownerSVGElement"in a)}const{schedule:Zc}=ey(queueMicrotask,!1),Xt={x:!1,y:!1};function jy(){return Xt.x||Xt.y}function bS(a){return a==="x"||a==="y"?Xt[a]?null:(Xt[a]=!0,()=>{Xt[a]=!1}):Xt.x||Xt.y?null:(Xt.x=Xt.y=!0,()=>{Xt.x=Xt.y=!1})}function By(a,r){const o=Vy(a),l=new AbortController,c={passive:!0,...r,signal:l.signal};return[o,c,()=>l.abort()]}function SS(a){return!(a.pointerType==="touch"||jy())}function TS(a,r,o={}){const[l,c,h]=By(a,o);return l.forEach(f=>{let g=!1,y=!1,m;const v=()=>{f.removeEventListener("pointerleave",M)},b=k=>{m&&(m(k),m=void 0),v()},S=k=>{g=!1,window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),y&&(y=!1,b(k))},z=()=>{g=!0,window.addEventListener("pointerup",S,c),window.addEventListener("pointercancel",S,c)},M=k=>{if(k.pointerType!=="touch"){if(g){y=!0;return}b(k)}},N=k=>{if(!SS(k))return;y=!1;const _=r(f,k);typeof _=="function"&&(m=_,f.addEventListener("pointerleave",M,c))};f.addEventListener("pointerenter",N,c),f.addEventListener("pointerdown",z,c)}),h}const Ly=(a,r)=>r?a===r?!0:Ly(a,r.parentElement):!1,Jc=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,AS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function wS(a){return AS.has(a.tagName)||a.isContentEditable===!0}const ES=new Set(["INPUT","SELECT","TEXTAREA"]);function CS(a){return ES.has(a.tagName)||a.isContentEditable===!0}const Ks=new WeakSet;function Lp(a){return r=>{r.key==="Enter"&&a(r)}}function Qu(a,r){a.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const zS=(a,r)=>{const o=a.currentTarget;if(!o)return;const l=Lp(()=>{if(Ks.has(o))return;Qu(o,"down");const c=Lp(()=>{Qu(o,"up")}),h=()=>Qu(o,"cancel");o.addEventListener("keyup",c,r),o.addEventListener("blur",h,r)});o.addEventListener("keydown",l,r),o.addEventListener("blur",()=>o.removeEventListener("keydown",l),r)};function Np(a){return Jc(a)&&!jy()}const _p=new WeakSet;function xS(a,r,o={}){const[l,c,h]=By(a,o),f=g=>{const y=g.currentTarget;if(!Np(g)||_p.has(g))return;Ks.add(y),o.stopPropagation&&_p.add(g);const m=r(y,g),v={...c,capture:!0},b=(M,N)=>{window.removeEventListener("pointerup",S,v),window.removeEventListener("pointercancel",z,v),Ks.has(y)&&Ks.delete(y),Np(M)&&typeof m=="function"&&m(M,{success:N})},S=M=>{b(M,y===window||y===document||o.useGlobalTarget||Ly(y,M.target))},z=M=>{b(M,!1)};window.addEventListener("pointerup",S,v),window.addEventListener("pointercancel",z,v)};return l.forEach(g=>{(o.useGlobalTarget?window:g).addEventListener("pointerdown",f,c),vS(g)&&(g.addEventListener("focus",m=>zS(m,c)),!wS(g)&&!g.hasAttribute("tabindex")&&(g.tabIndex=0))}),h}function Wc(a){return Hg(a)&&"ownerSVGElement"in a}const Qs=new WeakMap;let Zs;const Ny=(a,r,o)=>(l,c)=>c&&c[0]?c[0][a+"Size"]:Wc(l)&&"getBBox"in l?l.getBBox()[r]:l[o],MS=Ny("inline","width","offsetWidth"),DS=Ny("block","height","offsetHeight");function US({target:a,borderBoxSize:r}){Qs.get(a)?.forEach(o=>{o(a,{get width(){return MS(a,r)},get height(){return DS(a,r)}})})}function RS(a){a.forEach(US)}function OS(){typeof ResizeObserver>"u"||(Zs=new ResizeObserver(RS))}function VS(a,r){Zs||OS();const o=Vy(a);return o.forEach(l=>{let c=Qs.get(l);c||(c=new Set,Qs.set(l,c)),c.add(r),Zs?.observe(l)}),()=>{o.forEach(l=>{const c=Qs.get(l);c?.delete(r),c?.size||Zs?.unobserve(l)})}}const Js=new Set;let li;function jS(){li=()=>{const a={get width(){return window.innerWidth},get height(){return window.innerHeight}};Js.forEach(r=>r(a))},window.addEventListener("resize",li)}function BS(a){return Js.add(a),li||jS(),()=>{Js.delete(a),!Js.size&&typeof li=="function"&&(window.removeEventListener("resize",li),li=void 0)}}function kp(a,r){return typeof a=="function"?BS(a):VS(a,r)}function LS(a){return Wc(a)&&a.tagName==="svg"}const NS=[...Uy,Ie,Yt],_S=a=>NS.find(Dy(a)),Hp=()=>({translate:0,scale:1,origin:0,originPoint:0}),ui=()=>({x:Hp(),y:Hp()}),Gp=()=>({min:0,max:0}),Ke=()=>({x:Gp(),y:Gp()}),kS=new WeakMap;function go(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function br(a){return typeof a=="string"||Array.isArray(a)}const $c=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ed=["initial",...$c];function yo(a){return go(a.animate)||ed.some(r=>br(a[r]))}function _y(a){return!!(yo(a)||a.variants)}function HS(a,r,o){for(const l in r){const c=r[l],h=o[l];if(at(c))a.addValue(l,c);else if(at(h))a.addValue(l,di(c,{owner:a}));else if(h!==c)if(a.hasValue(l)){const f=a.getValue(l);f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)}else{const f=a.getStaticValue(l);a.addValue(l,di(f!==void 0?f:c,{owner:a}))}}for(const l in o)r[l]===void 0&&a.removeValue(l);return r}const lo={current:null},td={current:!1},GS=typeof window<"u";function ky(){if(td.current=!0,!!GS)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),r=()=>lo.current=a.matches;a.addEventListener("change",r),r()}else lo.current=!1}const Pp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let uo={};function Hy(a){uo=a}function PS(){return uo}class qS{scrapeMotionValuesFromProps(r,o,l){return{}}constructor({parent:r,props:o,presenceContext:l,reducedMotionConfig:c,skipAnimations:h,blockInitialAnimation:f,visualState:g},y={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Xc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const z=lt.now();this.renderScheduledAt<z&&(this.renderScheduledAt=z,Ue.render(this.render,!1,!0))};const{latestValues:m,renderState:v}=g;this.latestValues=m,this.baseTarget={...m},this.initialValues=o.initial?{...m}:{},this.renderState=v,this.parent=r,this.props=o,this.presenceContext=l,this.depth=r?r.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=h,this.options=y,this.blockInitialAnimation=!!f,this.isControllingVariants=yo(o),this.isVariantNode=_y(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:b,...S}=this.scrapeMotionValuesFromProps(o,{},this);for(const z in S){const M=S[z];m[z]!==void 0&&at(M)&&M.set(m[z])}}mount(r){if(this.hasBeenMounted)for(const o in this.initialValues)this.values.get(o)?.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=r,kS.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,l)=>this.bindToMotionValue(l,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(td.current||ky(),this.shouldReduceMotion=lo.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Qn(this.notifyUpdate),Qn(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const o=this.features[r];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(r){this.children.add(r),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(r)}removeChild(r){this.children.delete(r),this.enteringChildren&&this.enteringChildren.delete(r)}bindToMotionValue(r,o){if(this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)(),o.accelerate&&Ty.has(r)&&this.current instanceof HTMLElement){const{factory:f,keyframes:g,times:y,ease:m,duration:v}=o.accelerate,b=new by({element:this.current,name:r,keyframes:g,times:y,ease:m,duration:xt(v)}),S=f(b);this.valueSubscriptions.set(r,()=>{S(),b.cancel()});return}const l=pi.has(r);l&&this.onBindTransform&&this.onBindTransform();const c=o.on("change",f=>{this.latestValues[r]=f,this.props.onUpdate&&Ue.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let h;typeof window<"u"&&window.MotionCheckAppearSync&&(h=window.MotionCheckAppearSync(this,r,o)),this.valueSubscriptions.set(r,()=>{c(),h&&h()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in uo){const o=uo[r];if(!o)continue;const{isEnabled:l,Feature:c}=o;if(!this.features[r]&&c&&l(this.props)&&(this.features[r]=new c(this)),this.features[r]){const h=this.features[r];h.isMounted?h.update():(h.mount(),h.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ke()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,o){this.latestValues[r]=o}update(r,o){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let l=0;l<Pp.length;l++){const c=Pp[l];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const h="on"+c,f=r[h];f&&(this.propEventSubscriptions[c]=this.on(c,f))}this.prevMotionValues=HS(this,this.scrapeMotionValuesFromProps(r,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(r),()=>o.variantChildren.delete(r)}addValue(r,o){const l=this.values.get(r);o!==l&&(l&&this.removeValue(r),this.bindToMotionValue(r,o),this.values.set(r,o),this.latestValues[r]=o.get())}removeValue(r){this.values.delete(r);const o=this.valueSubscriptions.get(r);o&&(o(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,o){if(this.props.values&&this.props.values[r])return this.props.values[r];let l=this.values.get(r);return l===void 0&&o!==void 0&&(l=di(o===null?void 0:o,{owner:this}),this.addValue(r,l)),l}readValue(r,o){let l=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:this.getBaseTargetFromProps(this.props,r)??this.readValueFromInstance(this.current,r,this.options);return l!=null&&(typeof l=="string"&&(kg(l)||Gg(l))?l=parseFloat(l):!_S(l)&&Yt.test(o)&&(l=Oy(r,o)),this.setBaseTarget(r,at(l)?l.get():l)),at(l)?l.get():l}setBaseTarget(r,o){this.baseTarget[r]=o}getBaseTarget(r){const{initial:o}=this.props;let l;if(typeof o=="string"||typeof o=="object"){const h=Fc(this.props,o,this.presenceContext?.custom);h&&(l=h[r])}if(o&&l!==void 0)return l;const c=this.getBaseTargetFromProps(this.props,r);return c!==void 0&&!at(c)?c:this.initialValues[r]!==void 0&&l===void 0?void 0:this.baseTarget[r]}on(r,o){return this.events[r]||(this.events[r]=new Bc),this.events[r].add(o)}notify(r,...o){this.events[r]&&this.events[r].notify(...o)}scheduleRenderMicrotask(){Zc.render(this.render)}}class Gy extends qS{constructor(){super(...arguments),this.KeyframeResolver=yS}sortInstanceNodePosition(r,o){return r.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(r,o){const l=r.style;return l?l[o]:void 0}removeValueFromRenderState(r,{vars:o,style:l}){delete o[r],delete l[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;at(r)&&(this.childSubscription=r.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}class Zn{constructor(r){this.isMounted=!1,this.node=r}update(){}}function Py({top:a,left:r,right:o,bottom:l}){return{x:{min:r,max:o},y:{min:a,max:l}}}function XS({x:a,y:r}){return{top:r.min,right:a.max,bottom:r.max,left:a.min}}function YS(a,r){if(!r)return a;const o=r({x:a.left,y:a.top}),l=r({x:a.right,y:a.bottom});return{top:o.y,left:o.x,bottom:l.y,right:l.x}}function Zu(a){return a===void 0||a===1}function Ec({scale:a,scaleX:r,scaleY:o}){return!Zu(a)||!Zu(r)||!Zu(o)}function ya(a){return Ec(a)||qy(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function qy(a){return qp(a.x)||qp(a.y)}function qp(a){return a&&a!=="0%"}function co(a,r,o){const l=a-o,c=r*l;return o+c}function Xp(a,r,o,l,c){return c!==void 0&&(a=co(a,c,l)),co(a,o,l)+r}function Cc(a,r=0,o=1,l,c){a.min=Xp(a.min,r,o,l,c),a.max=Xp(a.max,r,o,l,c)}function Xy(a,{x:r,y:o}){Cc(a.x,r.translate,r.scale,r.originPoint),Cc(a.y,o.translate,o.scale,o.originPoint)}const Yp=.999999999999,Ip=1.0000000000001;function IS(a,r,o,l=!1){const c=o.length;if(!c)return;r.x=r.y=1;let h,f;for(let g=0;g<c;g++){h=o[g],f=h.projectionDelta;const{visualElement:y}=h.options;y&&y.props.style&&y.props.style.display==="contents"||(l&&h.options.layoutScroll&&h.scroll&&h!==h.root&&(Jt(a.x,-h.scroll.offset.x),Jt(a.y,-h.scroll.offset.y)),f&&(r.x*=f.x.scale,r.y*=f.y.scale,Xy(a,f)),l&&ya(h.latestValues)&&Ws(a,h.latestValues,h.layout?.layoutBox))}r.x<Ip&&r.x>Yp&&(r.x=1),r.y<Ip&&r.y>Yp&&(r.y=1)}function Jt(a,r){a.min+=r,a.max+=r}function Fp(a,r,o,l,c=.5){const h=De(a.min,a.max,c);Cc(a,r,o,h,l)}function Kp(a,r){return typeof a=="string"?parseFloat(a)/100*(r.max-r.min):a}function Ws(a,r,o){const l=o??a;Fp(a.x,Kp(r.x,l.x),r.scaleX,r.scale,r.originX),Fp(a.y,Kp(r.y,l.y),r.scaleY,r.scale,r.originY)}function Yy(a,r){return Py(YS(a.getBoundingClientRect(),r))}function FS(a,r,o){const l=Yy(a,o),{scroll:c}=r;return c&&(Jt(l.x,c.offset.x),Jt(l.y,c.offset.y)),l}const KS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},QS=mi.length;function ZS(a,r,o){let l="",c=!0;for(let f=0;f<QS;f++){const g=mi[f],y=a[g];if(y===void 0)continue;let m=!0;if(typeof y=="number")m=y===(g.startsWith("scale")?1:0);else{const v=parseFloat(y);m=g.startsWith("scale")?v===1:v===0}if(!m||o){const v=wc(y,oo[g]);if(!m){c=!1;const b=KS[g]||g;l+=`${b}(${v}) `}o&&(r[g]=v)}}const h=a.pathRotation;return h&&(c=!1,l+=`rotate(${wc(h,oo.pathRotation)}) `),l=l.trim(),o?l=o(r,c?"":l):c&&(l="none"),l}function nd(a,r,o){const{style:l,vars:c,transformOrigin:h}=a;let f=!1,g=!1;for(const y in r){const m=r[y];if(pi.has(y)){f=!0;continue}else if(ny(y)){c[y]=m;continue}else{const v=wc(m,oo[y]);y.startsWith("origin")?(g=!0,h[y]=v):l[y]=v}}if(r.transform||(f||o?l.transform=ZS(r,a.transform,o):l.transform&&(l.transform="none")),g){const{originX:y="50%",originY:m="50%",originZ:v=0}=h;l.transformOrigin=`${y} ${m} ${v}`}}function Iy(a,{style:r,vars:o},l,c){const h=a.style;let f;for(f in r)h[f]=r[f];c?.applyProjectionStyles(h,l);for(f in o)h.setProperty(f,o[f])}function Qp(a,r){return r.max===r.min?0:a/(r.max-r.min)*100}const dr={correct:(a,r)=>{if(!r.target)return a;if(typeof a=="string")if(K.test(a))a=parseFloat(a);else return a;const o=Qp(a,r.target.x),l=Qp(a,r.target.y);return`${o}% ${l}%`}},JS={correct:(a,{treeScale:r,projectionDelta:o})=>{const l=a,c=Yt.parse(a);if(c.length>5)return l;const h=Yt.createTransformer(a),f=typeof c[0]!="number"?1:0,g=o.x.scale*r.x,y=o.y.scale*r.y;c[0+f]/=g,c[1+f]/=y;const m=De(g,y,.5);return typeof c[2+f]=="number"&&(c[2+f]/=m),typeof c[3+f]=="number"&&(c[3+f]/=m),h(c)}},zc={borderRadius:{...dr,applyTo:[...Qc]},borderTopLeftRadius:dr,borderTopRightRadius:dr,borderBottomLeftRadius:dr,borderBottomRightRadius:dr,boxShadow:JS};function Fy(a,{layout:r,layoutId:o}){return pi.has(a)||a.startsWith("origin")||(r||o!==void 0)&&(!!zc[a]||a==="opacity")}function ad(a,r,o){const l=a.style,c=r?.style,h={};if(!l)return h;for(const f in l)(at(l[f])||c&&at(c[f])||Fy(f,a)||o?.getValue(f)?.liveStyle!==void 0)&&(h[f]=l[f]);return h}function WS(a){return window.getComputedStyle(a)}class $S extends Gy{constructor(){super(...arguments),this.type="html",this.renderInstance=Iy}mount(r){mo(!!r.style),super.mount(r)}readValueFromInstance(r,o){if(pi.has(o))return this.projection?.isProjecting?fc(o):b1(r,o);{const l=WS(r),c=(ny(o)?l.getPropertyValue(o):l[o])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(r,{transformPagePoint:o}){return Yy(r,o)}build(r,o,l){nd(r,o,l.transformTemplate)}scrapeMotionValuesFromProps(r,o,l){return ad(r,o,l)}}const eT={offset:"stroke-dashoffset",array:"stroke-dasharray"},tT={offset:"strokeDashoffset",array:"strokeDasharray"};function nT(a,r,o=1,l=0,c=!0){a.pathLength=1;const h=c?eT:tT;a[h.offset]=`${-l}`,a[h.array]=`${r} ${o}`}const aT=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Ky(a,{attrX:r,attrY:o,attrScale:l,pathLength:c,pathSpacing:h=1,pathOffset:f=0,...g},y,m,v){if(nd(a,g,m),y){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:b,style:S}=a;b.transform&&(S.transform=b.transform,delete b.transform),(S.transform||b.transformOrigin)&&(S.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),S.transform&&(S.transformBox=v?.transformBox??"fill-box",delete b.transformBox);for(const z of aT)b[z]!==void 0&&(S[z]=b[z],delete b[z]);r!==void 0&&(b.x=r),o!==void 0&&(b.y=o),l!==void 0&&(b.scale=l),c!==void 0&&nT(b,c,h,f,!1)}const Qy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Zy=a=>typeof a=="string"&&a.toLowerCase()==="svg";function iT(a,r,o,l){Iy(a,r,void 0,l);for(const c in r.attrs)a.setAttribute(Qy.has(c)?c:Kc(c),r.attrs[c])}function Jy(a,r,o){const l=ad(a,r,o);for(const c in a)if(at(a[c])||at(r[c])){const h=mi.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;l[h]=a[c]}return l}class rT extends Gy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ke}getBaseTargetFromProps(r,o){return r[o]}readValueFromInstance(r,o){if(pi.has(o)){const l=Ry(o);return l&&l.default||0}return o=Qy.has(o)?o:Kc(o),r.getAttribute(o)}scrapeMotionValuesFromProps(r,o,l){return Jy(r,o,l)}build(r,o,l){Ky(r,o,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(r,o,l,c){iT(r,o,l,c)}mount(r){this.isSVGTag=Zy(r.tagName),super.mount(r)}}const sT=ed.length;function Wy(a){if(!a)return;if(!a.isControllingVariants){const o=a.parent?Wy(a.parent)||{}:{};return a.props.initial!==void 0&&(o.initial=a.props.initial),o}const r={};for(let o=0;o<sT;o++){const l=ed[o],c=a.props[l];(br(c)||c===!1)&&(r[l]=c)}return r}function $y(a,r){if(!Array.isArray(r))return!1;const o=r.length;if(o!==a.length)return!1;for(let l=0;l<o;l++)if(r[l]!==a[l])return!1;return!0}const oT=[...$c].reverse(),lT=$c.length;function uT(a){return r=>Promise.all(r.map(({animation:o,options:l})=>sS(a,o,l)))}function cT(a){let r=uT(a),o=Zp(),l=!0,c=!1;const h=m=>(v,b)=>{const S=Ta(a,b,m==="exit"?a.presenceContext?.custom:void 0);if(S){const{transition:z,transitionEnd:M,...N}=S;v={...v,...N,...M}}return v};function f(m){r=m(a)}function g(m){const{props:v}=a,b=Wy(a.parent)||{},S=[],z=new Set;let M={},N=1/0;for(let _=0;_<lT;_++){const P=oT[_],H=o[P],X=v[P]!==void 0?v[P]:b[P],ne=br(X),le=P===m?H.isActive:null;le===!1&&(N=_);let F=X===b[P]&&X!==v[P]&&ne;if(F&&(l||c)&&a.manuallyAnimateOnMount&&(F=!1),H.protectedKeys={...M},!H.isActive&&le===null||!X&&!H.prevProp||go(X)||typeof X=="boolean")continue;if(P==="exit"&&H.isActive&&le!==!0){H.prevResolvedValues&&(M={...M,...H.prevResolvedValues});continue}const W=dT(H.prevProp,X);let Ee=W||P===m&&H.isActive&&!F&&ne||_>N&&ne,te=!1;const ve=Array.isArray(X)?X:[X];let Te=ve.reduce(h(P),{});le===!1&&(Te={});const{prevResolvedValues:rt={}}=H,Ge={...rt,...Te},Ne=Y=>{Ee=!0,z.has(Y)&&(te=!0,z.delete(Y)),H.needsAnimating[Y]=!0;const se=a.getValue(Y);se&&(se.liveStyle=!1)};for(const Y in Ge){const se=Te[Y],me=rt[Y];if(M.hasOwnProperty(Y))continue;let w=!1;vc(se)&&vc(me)?w=!$y(se,me)||W:w=se!==me,w?se!=null?Ne(Y):z.add(Y):se!==void 0&&z.has(Y)?Ne(Y):H.protectedKeys[Y]=!0}H.prevProp=X,H.prevResolvedValues=Te,H.isActive&&(M={...M,...Te}),(l||c)&&a.blockInitialAnimation&&(Ee=!1);const O=F&&W;Ee&&(!O||te)&&S.push(...ve.map(Y=>{const se={type:P};if(typeof Y=="string"&&(l||c)&&!O&&a.manuallyAnimateOnMount&&a.parent){const{parent:me}=a,w=Ta(me,Y);if(me.enteringChildren&&w){const{delayChildren:L}=w.transition||{};se.delay=Ay(me.enteringChildren,a,L)}}return{animation:Y,options:se}}))}if(z.size){const _={};if(typeof v.initial!="boolean"){const P=Ta(a,Array.isArray(v.initial)?v.initial[0]:v.initial);P&&P.transition&&(_.transition=P.transition)}z.forEach(P=>{const H=a.getBaseTarget(P),X=a.getValue(P);X&&(X.liveStyle=!0),_[P]=H??null}),S.push({animation:_})}let k=!!S.length;return l&&(v.initial===!1||v.initial===v.animate)&&!a.manuallyAnimateOnMount&&(k=!1),l=!1,c=!1,k?r(S):Promise.resolve()}function y(m,v){if(o[m].isActive===v)return Promise.resolve();a.variantChildren?.forEach(S=>S.animationState?.setActive(m,v)),o[m].isActive=v;const b=g(m);for(const S in o)o[S].protectedKeys={};return b}return{animateChanges:g,setActive:y,setAnimateFunction:f,getState:()=>o,reset:()=>{o=Zp(),c=!0}}}function dT(a,r){return typeof r=="string"?r!==a:Array.isArray(r)?!$y(r,a):!1}function ga(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Zp(){return{animate:ga(!0),whileInView:ga(),whileHover:ga(),whileTap:ga(),whileDrag:ga(),whileFocus:ga(),exit:ga()}}function xc(a,r){a.min=r.min,a.max=r.max}function qt(a,r){xc(a.x,r.x),xc(a.y,r.y)}function Jp(a,r){a.translate=r.translate,a.scale=r.scale,a.originPoint=r.originPoint,a.origin=r.origin}const ev=1e-4,fT=1-ev,hT=1+ev,tv=.01,mT=0-tv,pT=0+tv;function ut(a){return a.max-a.min}function gT(a,r,o){return Math.abs(a-r)<=o}function Wp(a,r,o,l=.5){a.origin=l,a.originPoint=De(r.min,r.max,a.origin),a.scale=ut(o)/ut(r),a.translate=De(o.min,o.max,a.origin)-a.originPoint,(a.scale>=fT&&a.scale<=hT||isNaN(a.scale))&&(a.scale=1),(a.translate>=mT&&a.translate<=pT||isNaN(a.translate))&&(a.translate=0)}function pr(a,r,o,l){Wp(a.x,r.x,o.x,l?l.originX:void 0),Wp(a.y,r.y,o.y,l?l.originY:void 0)}function $p(a,r,o,l=0){const c=l?De(o.min,o.max,l):o.min;a.min=c+r.min,a.max=a.min+ut(r)}function yT(a,r,o,l){$p(a.x,r.x,o.x,l?.x),$p(a.y,r.y,o.y,l?.y)}function eg(a,r,o,l=0){const c=l?De(o.min,o.max,l):o.min;a.min=r.min-c,a.max=a.min+ut(r)}function fo(a,r,o,l){eg(a.x,r.x,o.x,l?.x),eg(a.y,r.y,o.y,l?.y)}function tg(a,r,o,l,c){return a-=r,a=co(a,1/o,l),c!==void 0&&(a=co(a,1/c,l)),a}function vT(a,r=0,o=1,l=.5,c,h=a,f=a){if($t.test(r)&&(r=parseFloat(r),r=De(f.min,f.max,r/100)-f.min),typeof r!="number")return;let g=De(h.min,h.max,l);a===h&&(g-=r),a.min=tg(a.min,r,o,g,c),a.max=tg(a.max,r,o,g,c)}function ng(a,r,[o,l,c],h,f){vT(a,r[o],r[l],r[c],r.scale,h,f)}const bT=["x","scaleX","originX"],ST=["y","scaleY","originY"];function ag(a,r,o,l){ng(a.x,r,bT,o?o.x:void 0,l?l.x:void 0),ng(a.y,r,ST,o?o.y:void 0,l?l.y:void 0)}function ig(a){return a.translate===0&&a.scale===1}function nv(a){return ig(a.x)&&ig(a.y)}function rg(a,r){return a.min===r.min&&a.max===r.max}function TT(a,r){return rg(a.x,r.x)&&rg(a.y,r.y)}function sg(a,r){return Math.round(a.min)===Math.round(r.min)&&Math.round(a.max)===Math.round(r.max)}function av(a,r){return sg(a.x,r.x)&&sg(a.y,r.y)}function og(a){return ut(a.x)/ut(a.y)}function lg(a,r){return a.translate===r.translate&&a.scale===r.scale&&a.originPoint===r.originPoint}function Zt(a){return[a("x"),a("y")]}function AT(a,r,o){let l="";const c=a.x.translate/r.x,h=a.y.translate/r.y,f=o?.z||0;if((c||h||f)&&(l=`translate3d(${c}px, ${h}px, ${f}px) `),(r.x!==1||r.y!==1)&&(l+=`scale(${1/r.x}, ${1/r.y}) `),o){const{transformPerspective:m,rotate:v,pathRotation:b,rotateX:S,rotateY:z,skewX:M,skewY:N}=o;m&&(l=`perspective(${m}px) ${l}`),v&&(l+=`rotate(${v}deg) `),b&&(l+=`rotate(${b}deg) `),S&&(l+=`rotateX(${S}deg) `),z&&(l+=`rotateY(${z}deg) `),M&&(l+=`skewX(${M}deg) `),N&&(l+=`skewY(${N}deg) `)}const g=a.x.scale*r.x,y=a.y.scale*r.y;return(g!==1||y!==1)&&(l+=`scale(${g}, ${y})`),l||"none"}const wT=Qc.length,ug=a=>typeof a=="string"?parseFloat(a):a,cg=a=>typeof a=="number"||K.test(a);function ET(a,r,o,l,c,h){c?(a.opacity=De(0,o.opacity??1,CT(l)),a.opacityExit=De(r.opacity??1,0,zT(l))):h&&(a.opacity=De(r.opacity??1,o.opacity??1,l));for(let f=0;f<wT;f++){const g=Qc[f];let y=dg(r,g),m=dg(o,g);if(y===void 0&&m===void 0)continue;y||(y=0),m||(m=0),y===0||m===0||cg(y)===cg(m)?(a[g]=Math.max(De(ug(y),ug(m),l),0),($t.test(m)||$t.test(y))&&(a[g]+="%")):a[g]=m}(r.rotate||o.rotate)&&(a.rotate=De(r.rotate||0,o.rotate||0,l))}function dg(a,r){return a[r]!==void 0?a[r]:a.borderRadius}const CT=iv(0,.5,Zg),zT=iv(.5,.95,kt);function iv(a,r,o){return l=>l<a?0:l>r?1:o(yr(a,r,l))}function xT(a,r,o){const l=at(a)?a:di(a);return l.start(Ic("",l,r,o)),l.animation}function Sr(a,r,o,l={passive:!0}){return a.addEventListener(r,o,l),()=>a.removeEventListener(r,o,l)}const MT=(a,r)=>a.depth-r.depth;class DT{constructor(){this.children=[],this.isDirty=!1}add(r){jc(this.children,r),this.isDirty=!0}remove(r){no(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(MT),this.isDirty=!1,this.children.forEach(r)}}function UT(a,r){const o=lt.now(),l=({timestamp:c})=>{const h=c-o;h>=r&&(Qn(l),a(h-r))};return Ue.setup(l,!0),()=>Qn(l)}function $s(a){return at(a)?a.get():a}class RT{constructor(){this.members=[]}add(r){jc(this.members,r);for(let o=this.members.length-1;o>=0;o--){const l=this.members[o];if(l===r||l===this.lead||l===this.prevLead)continue;const c=l.instance;(!c||c.isConnected===!1)&&!l.snapshot&&(no(this.members,l),l.unmount())}r.scheduleRender()}remove(r){if(no(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(r){for(let o=this.members.indexOf(r)-1;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1&&l.instance?.isConnected!==!1)return this.promote(l),!0}return!1}promote(r,o){const l=this.lead;if(r!==l&&(this.prevLead=l,this.lead=r,r.show(),l)){l.updateSnapshot(),r.scheduleRender();const{layoutDependency:c}=l.options,{layoutDependency:h}=r.options;(c===void 0||c!==h)&&(r.resumeFrom=l,o&&(l.preserveOpacity=!0),l.snapshot&&(r.snapshot=l.snapshot,r.snapshot.latestValues=l.animationValues||l.latestValues),r.root?.isUpdating&&(r.isLayoutDirty=!0)),r.options.crossfade===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(r=>{r.options.onExitComplete?.(),r.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(r=>r.instance&&r.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const eo={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ju=["","X","Y","Z"],OT=1e3;let VT=0;function Wu(a,r,o,l){const{latestValues:c}=r;c[a]&&(o[a]=c[a],r.setStaticValue(a,0),l&&(l[a]=0))}function rv(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:r}=a.options;if(!r)return;const o=xy(r);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:c,layoutId:h}=a.options;window.MotionCancelOptimisedAnimation(o,"transform",Ue,!(c||h))}const{parent:l}=a;l&&!l.hasCheckedOptimisedAppear&&rv(l)}function sv({attachResizeListener:a,defaultParent:r,measureScroll:o,checkIsScrollRoot:l,resetTransform:c}){return class{constructor(f={},g=r?.()){this.id=VT++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(LT),this.nodes.forEach(PT),this.nodes.forEach(qT),this.nodes.forEach(NT)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=g?g.root||g:this,this.path=g?[...g.path,g]:[],this.parent=g,this.depth=g?g.depth+1:0;for(let y=0;y<this.path.length;y++)this.path[y].shouldResetTransform=!0;this.root===this&&(this.nodes=new DT)}addEventListener(f,g){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Bc),this.eventHandlers.get(f).add(g)}notifyListeners(f,...g){const y=this.eventHandlers.get(f);y&&y.notify(...g)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=Wc(f)&&!LS(f),this.instance=f;const{layoutId:g,layout:y,visualElement:m}=this.options;if(m&&!m.current&&m.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(y||g)&&(this.isLayoutDirty=!0),a){let v,b=0;const S=()=>this.root.updateBlockedByResize=!1;Ue.read(()=>{b=window.innerWidth}),a(f,()=>{const z=window.innerWidth;z!==b&&(b=z,this.root.updateBlockedByResize=!0,v&&v(),v=UT(S,250),eo.hasAnimatedSinceResize&&(eo.hasAnimatedSinceResize=!1,this.nodes.forEach(mg)))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&m&&(g||y)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:b,hasRelativeLayoutChanged:S,layout:z})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||m.getDefaultTransition()||KT,{onLayoutAnimationStart:N,onLayoutAnimationComplete:k}=m.getProps(),_=!this.targetLayout||!av(this.targetLayout,z),P=!b&&S;if(this.options.layoutRoot||this.resumeFrom||P||b&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const H={...Yc(M,"layout"),onPlay:N,onComplete:k};(m.shouldReduceMotion||this.options.layoutRoot)&&(H.delay=0,H.type=!1),this.startAnimation(H),this.setAnimationOrigin(v,P,H.path)}else b||mg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=z})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Qn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(XT),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&rv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const b=this.path[v];b.shouldResetTransform=!0,(typeof b.latestValues.x=="string"||typeof b.latestValues.y=="string")&&(b.isLayoutDirty=!0),b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:g,layout:y}=this.options;if(g===void 0&&!y)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const y=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),y&&this.nodes.forEach(kT),this.nodes.forEach(fg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(hg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(HT),this.nodes.forEach(GT),this.nodes.forEach(jT),this.nodes.forEach(BT)):this.nodes.forEach(hg),this.clearAllSnapshots();const g=lt.now();nt.delta=en(0,1e3/60,g-nt.timestamp),nt.timestamp=g,nt.isProcessing=!0,qu.update.process(nt),qu.preRender.process(nt),qu.render.process(nt),nt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Zc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(_T),this.sharedNodes.forEach(YT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ue.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ue.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ut(this.snapshot.measuredBox.x)&&!ut(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let y=0;y<this.path.length;y++)this.path[y].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Ke()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:g}=this.options;g&&g.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let g=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(g=!1),g&&this.instance){const y=l(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:y,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:y}}}resetTransform(){if(!c)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,g=this.projectionDelta&&!nv(this.projectionDelta),y=this.getTransformTemplate(),m=y?y(this.latestValues,""):void 0,v=m!==this.prevTransformTemplateValue;f&&this.instance&&(g||ya(this.latestValues)||v)&&(c(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const g=this.measurePageBox();let y=this.removeElementScroll(g);return f&&(y=this.removeTransform(y)),QT(y),{animationId:this.root.animationId,measuredBox:g,layoutBox:y,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return Ke();const g=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(ZT))){const{scroll:m}=this.root;m&&(Jt(g.x,m.offset.x),Jt(g.y,m.offset.y))}return g}removeElementScroll(f){const g=Ke();if(qt(g,f),this.scroll?.wasRoot)return g;for(let y=0;y<this.path.length;y++){const m=this.path[y],{scroll:v,options:b}=m;m!==this.root&&v&&b.layoutScroll&&(v.wasRoot&&qt(g,f),Jt(g.x,v.offset.x),Jt(g.y,v.offset.y))}return g}applyTransform(f,g=!1,y){const m=y||Ke();qt(m,f);for(let v=0;v<this.path.length;v++){const b=this.path[v];!g&&b.options.layoutScroll&&b.scroll&&b!==b.root&&(Jt(m.x,-b.scroll.offset.x),Jt(m.y,-b.scroll.offset.y)),ya(b.latestValues)&&Ws(m,b.latestValues,b.layout?.layoutBox)}return ya(this.latestValues)&&Ws(m,this.latestValues,this.layout?.layoutBox),m}removeTransform(f){const g=Ke();qt(g,f);for(let y=0;y<this.path.length;y++){const m=this.path[y];if(!ya(m.latestValues))continue;let v;m.instance&&(Ec(m.latestValues)&&m.updateSnapshot(),v=Ke(),qt(v,m.measurePageBox())),ag(g,m.latestValues,m.snapshot?.layoutBox,v)}return ya(this.latestValues)&&ag(g,this.latestValues),g}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==nt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const y=!!this.resumingFrom||this!==g;if(!(f||y&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:b}=this.options;if(!this.layout||!(v||b))return;this.resolvedRelativeTargetAt=nt.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ke(),this.targetWithTransforms=Ke()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),yT(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):qt(this.target,this.layout.layoutBox),Xy(this.target,this.targetDelta)):qt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ec(this.parent.latestValues)||qy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(f,g,y){this.relativeParent=f,this.linkedParentVersion=f.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ke(),this.relativeTargetOrigin=Ke(),fo(this.relativeTargetOrigin,g,y,this.options.layoutAnchor||void 0),qt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const f=this.getLead(),g=!!this.resumingFrom||this!==f;let y=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(y=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(y=!1),this.resolvedRelativeTargetAt===nt.timestamp&&(y=!1),y)return;const{layout:m,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||v))return;qt(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,S=this.treeScale.y;IS(this.layoutCorrected,this.treeScale,this.path,g),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Ke());const{target:z}=f;if(!z){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Jp(this.prevProjectionDelta.x,this.projectionDelta.x),Jp(this.prevProjectionDelta.y,this.projectionDelta.y)),pr(this.projectionDelta,this.layoutCorrected,z,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==S||!lg(this.projectionDelta.x,this.prevProjectionDelta.x)||!lg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",z))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ui(),this.projectionDelta=ui(),this.projectionDeltaWithTransform=ui()}setAnimationOrigin(f,g=!1,y){const m=this.snapshot,v=m?m.latestValues:{},b={...this.latestValues},S=ui();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!g;const z=Ke(),M=m?m.source:void 0,N=this.layout?this.layout.source:void 0,k=M!==N,_=this.getStack(),P=!_||_.members.length<=1,H=!!(k&&!P&&this.options.crossfade===!0&&!this.path.some(FT));this.animationProgress=0;let X;const ne=y?.interpolateProjection(f);this.mixTargetDelta=le=>{const F=le/1e3,W=ne?.(F);W?(S.x.translate=W.x,S.x.scale=De(f.x.scale,1,F),S.x.origin=f.x.origin,S.x.originPoint=f.x.originPoint,S.y.translate=W.y,S.y.scale=De(f.y.scale,1,F),S.y.origin=f.y.origin,S.y.originPoint=f.y.originPoint):(pg(S.x,f.x,F),pg(S.y,f.y,F)),this.setTargetDelta(S),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fo(z,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),IT(this.relativeTarget,this.relativeTargetOrigin,z,F),X&&TT(this.relativeTarget,X)&&(this.isProjectionDirty=!1),X||(X=Ke()),qt(X,this.relativeTarget)),k&&(this.animationValues=b,ET(b,v,this.latestValues,F,H,P)),W&&W.rotate!==void 0&&(this.animationValues||(this.animationValues=b),this.animationValues.pathRotation=W.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Qn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ue.update(()=>{eo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=di(0)),this.motionValue.jump(0,!1),this.currentAnimation=xT(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),f.onUpdate&&f.onUpdate(g)},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(OT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:g,target:y,layout:m,latestValues:v}=f;if(!(!g||!y||!m)){if(this!==f&&this.layout&&m&&ov(this.options.animationType,this.layout.layoutBox,m.layoutBox)){y=this.target||Ke();const b=ut(this.layout.layoutBox.x);y.x.min=f.target.x.min,y.x.max=y.x.min+b;const S=ut(this.layout.layoutBox.y);y.y.min=f.target.y.min,y.y.max=y.y.min+S}qt(g,y),Ws(g,v),pr(this.projectionDeltaWithTransform,this.layoutCorrected,g,v)}}registerSharedNode(f,g){this.sharedNodes.has(f)||this.sharedNodes.set(f,new RT),this.sharedNodes.get(f).add(g);const m=g.options.initialPromotionConfig;g.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(g):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:g,preserveFollowOpacity:y}={}){const m=this.getStack();m&&m.promote(this,y),f&&(this.projectionDelta=void 0,this.needsReset=!0),g&&this.setOptions({transition:g})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let g=!1;const{latestValues:y}=f;if((y.z||y.rotate||y.rotateX||y.rotateY||y.rotateZ||y.skewX||y.skewY)&&(g=!0),!g)return;const m={};y.z&&Wu("z",f,m,this.animationValues);for(let v=0;v<Ju.length;v++)Wu(`rotate${Ju[v]}`,f,m,this.animationValues),Wu(`skew${Ju[v]}`,f,m,this.animationValues);f.render();for(const v in m)f.setStaticValue(v,m[v]),this.animationValues&&(this.animationValues[v]=m[v]);f.scheduleRender()}applyProjectionStyles(f,g){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const y=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=$s(g?.pointerEvents)||"",f.transform=y?y(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=$s(g?.pointerEvents)||""),this.hasProjected&&!ya(this.latestValues)&&(f.transform=y?y({},""):"none",this.hasProjected=!1);return}f.visibility="";const v=m.animationValues||m.latestValues;this.applyTransformsToTarget();let b=AT(this.projectionDeltaWithTransform,this.treeScale,v);y&&(b=y(v,b)),f.transform=b;const{x:S,y:z}=this.projectionDelta;f.transformOrigin=`${S.origin*100}% ${z.origin*100}% 0`,m.animationValues?f.opacity=m===this?v.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:f.opacity=m===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const M in zc){if(v[M]===void 0)continue;const{correct:N,applyTo:k,isCSSVariable:_}=zc[M],P=b==="none"?v[M]:N(v[M],m);if(k){const H=k.length;for(let X=0;X<H;X++)f[k[X]]=P}else _?this.options.visualElement.renderState.vars[M]=P:f[M]=P}this.options.layoutId&&(f.pointerEvents=m===this?$s(g?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(fg),this.root.sharedNodes.clear()}}}function jT(a){a.updateLayout()}function BT(a){const r=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&r&&a.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:l}=a.layout,{animationType:c}=a.options,h=r.source!==a.layout.source;if(c==="size")Zt(v=>{const b=h?r.measuredBox[v]:r.layoutBox[v],S=ut(b);b.min=o[v].min,b.max=b.min+S});else if(c==="x"||c==="y"){const v=c==="x"?"y":"x";xc(h?r.measuredBox[v]:r.layoutBox[v],o[v])}else ov(c,r.layoutBox,o)&&Zt(v=>{const b=h?r.measuredBox[v]:r.layoutBox[v],S=ut(o[v]);b.max=b.min+S,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[v].max=a.relativeTarget[v].min+S)});const f=ui();pr(f,o,r.layoutBox);const g=ui();h?pr(g,a.applyTransform(l,!0),r.measuredBox):pr(g,o,r.layoutBox);const y=!nv(f);let m=!1;if(!a.resumeFrom){const v=a.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:b,layout:S}=v;if(b&&S){const z=a.options.layoutAnchor||void 0,M=Ke();fo(M,r.layoutBox,b.layoutBox,z);const N=Ke();fo(N,o,S.layoutBox,z),av(M,N)||(m=!0),v.options.layoutRoot&&(a.relativeTarget=N,a.relativeTargetOrigin=M,a.relativeParent=v)}}}a.notifyListeners("didUpdate",{layout:o,snapshot:r,delta:g,layoutDelta:f,hasLayoutChanged:y,hasRelativeLayoutChanged:m})}else if(a.isLead()){const{onExitComplete:o}=a.options;o&&o()}a.options.transition=void 0}function LT(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function NT(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function _T(a){a.clearSnapshot()}function fg(a){a.clearMeasurements()}function kT(a){a.isLayoutDirty=!0,a.updateLayout()}function hg(a){a.isLayoutDirty=!1}function HT(a){a.isAnimationBlocked&&a.layout&&!a.isLayoutDirty&&(a.snapshot=a.layout,a.isLayoutDirty=!0)}function GT(a){const{visualElement:r}=a.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),a.resetTransform()}function mg(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function PT(a){a.resolveTargetDelta()}function qT(a){a.calcProjection()}function XT(a){a.resetSkewAndRotation()}function YT(a){a.removeLeadSnapshot()}function pg(a,r,o){a.translate=De(r.translate,0,o),a.scale=De(r.scale,1,o),a.origin=r.origin,a.originPoint=r.originPoint}function gg(a,r,o,l){a.min=De(r.min,o.min,l),a.max=De(r.max,o.max,l)}function IT(a,r,o,l){gg(a.x,r.x,o.x,l),gg(a.y,r.y,o.y,l)}function FT(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const KT={duration:.45,ease:[.4,0,.1,1]},yg=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),vg=yg("applewebkit/")&&!yg("chrome/")?Math.round:kt;function bg(a){a.min=vg(a.min),a.max=vg(a.max)}function QT(a){bg(a.x),bg(a.y)}function ov(a,r,o){return a==="position"||a==="preserve-aspect"&&!gT(og(r),og(o),.2)}function ZT(a){return a!==a.root&&a.scroll?.wasRoot}const JT=sv({attachResizeListener:(a,r)=>Sr(a,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),$u={current:void 0},lv=sv({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!$u.current){const a=new JT({});a.mount(window),a.setOptions({layoutScroll:!0}),$u.current=a}return $u.current},resetTransform:(a,r)=>{a.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),uv=J.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function WT(a=!0){const r=J.useContext(Vc);if(r===null)return[!0,null];const{isPresent:o,onExitComplete:l,register:c}=r,h=J.useId();J.useEffect(()=>{if(a)return c(h)},[a]);const f=J.useCallback(()=>a&&l&&l(h),[h,l,a]);return!o&&l?[!1,f]:[!0]}const cv=J.createContext({strict:!1}),Sg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Tg=!1;function $T(){if(Tg)return;const a={};for(const r in Sg)a[r]={isEnabled:o=>Sg[r].some(l=>!!o[l])};Hy(a),Tg=!0}function dv(){return $T(),PS()}function eA(a){const r=dv();for(const o in a)r[o]={...r[o],...a[o]};Hy(r)}const tA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ho(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||tA.has(a)}let fv=a=>!ho(a);function nA(a){typeof a=="function"&&(fv=r=>r.startsWith("on")?!ho(r):a(r))}try{nA(require("@emotion/is-prop-valid").default)}catch{}function aA(a,r,o){const l={};for(const c in a)c==="values"&&typeof a.values=="object"||at(a[c])||(fv(c)||o===!0&&ho(c)||!r&&!ho(c)||a.draggable&&c.startsWith("onDrag"))&&(l[c]=a[c]);return l}const vo=J.createContext({});function iA(a,r){if(yo(a)){const{initial:o,animate:l}=a;return{initial:o===!1||br(o)?o:void 0,animate:br(l)?l:void 0}}return a.inherit!==!1?r:{}}function rA(a){const{initial:r,animate:o}=iA(a,J.useContext(vo));return J.useMemo(()=>({initial:r,animate:o}),[Ag(r),Ag(o)])}function Ag(a){return Array.isArray(a)?a.join(" "):a}const id=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function hv(a,r,o){for(const l in r)!at(r[l])&&!Fy(l,o)&&(a[l]=r[l])}function sA({transformTemplate:a},r){return J.useMemo(()=>{const o=id();return nd(o,r,a),Object.assign({},o.vars,o.style)},[r])}function oA(a,r){const o=a.style||{},l={};return hv(l,o,a),Object.assign(l,sA(a,r)),l}function lA(a,r){const o={},l=oA(a,r);return a.drag&&a.dragListener!==!1&&(o.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(o.tabIndex=0),o.style=l,o}const mv=()=>({...id(),attrs:{}});function uA(a,r,o,l){const c=J.useMemo(()=>{const h=mv();return Ky(h,r,Zy(l),a.transformTemplate,a.style),{...h.attrs,style:{...h.style}}},[r]);if(a.style){const h={};hv(h,a.style,a),c.style={...h,...c.style}}return c}const cA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function rd(a){return typeof a!="string"||a.includes("-")?!1:!!(cA.indexOf(a)>-1||/[A-Z]/u.test(a))}function dA(a,r,o,{latestValues:l},c,h=!1,f){const y=(f??rd(a)?uA:lA)(r,l,c,a),m=aA(r,typeof a=="string",h),v=a!==J.Fragment?{...m,...y,ref:o}:{},{children:b}=r,S=J.useMemo(()=>at(b)?b.get():b,[b]);return J.createElement(a,{...v,children:S})}function fA({scrapeMotionValuesFromProps:a,createRenderState:r},o,l,c){return{latestValues:hA(o,l,c,a),renderState:r()}}function hA(a,r,o,l){const c={},h=l(a,{});for(const S in h)c[S]=$s(h[S]);let{initial:f,animate:g}=a;const y=yo(a),m=_y(a);r&&m&&!y&&a.inherit!==!1&&(f===void 0&&(f=r.initial),g===void 0&&(g=r.animate));let v=o?o.initial===!1:!1;v=v||f===!1;const b=v?g:f;if(b&&typeof b!="boolean"&&!go(b)){const S=Array.isArray(b)?b:[b];for(let z=0;z<S.length;z++){const M=Fc(a,S[z]);if(M){const{transitionEnd:N,transition:k,..._}=M;for(const P in _){let H=_[P];if(Array.isArray(H)){const X=v?H.length-1:0;H=H[X]}H!==null&&(c[P]=H)}for(const P in N)c[P]=N[P]}}}return c}const pv=a=>(r,o)=>{const l=J.useContext(vo),c=J.useContext(Vc),h=()=>fA(a,r,l,c);return o?h():f2(h)},mA=pv({scrapeMotionValuesFromProps:ad,createRenderState:id}),pA=pv({scrapeMotionValuesFromProps:Jy,createRenderState:mv}),gA=Symbol.for("motionComponentSymbol");function yA(a,r,o){const l=J.useRef(o);J.useInsertionEffect(()=>{l.current=o});const c=J.useRef(null);return J.useCallback(h=>{h&&a.onMount?.(h),r&&(h?r.mount(h):r.unmount());const f=l.current;if(typeof f=="function")if(h){const g=f(h);typeof g=="function"&&(c.current=g)}else c.current?(c.current(),c.current=null):f(h);else f&&(f.current=h)},[r])}const gv=J.createContext({});function si(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function vA(a,r,o,l,c,h){const{visualElement:f}=J.useContext(vo),g=J.useContext(cv),y=J.useContext(Vc),m=J.useContext(uv),v=m.reducedMotion,b=m.skipAnimations,S=J.useRef(null),z=J.useRef(!1);l=l||g.renderer,!S.current&&l&&(S.current=l(a,{visualState:r,parent:f,props:o,presenceContext:y,blockInitialAnimation:y?y.initial===!1:!1,reducedMotionConfig:v,skipAnimations:b,isSVG:h}),z.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));const M=S.current,N=J.useContext(gv);M&&!M.projection&&c&&(M.type==="html"||M.type==="svg")&&bA(S.current,o,c,N);const k=J.useRef(!1);J.useInsertionEffect(()=>{M&&k.current&&M.update(o,y)});const _=o[zy],P=J.useRef(!!_&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return m2(()=>{z.current=!0,M&&(k.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),P.current&&M.animationState&&M.animationState.animateChanges())}),J.useEffect(()=>{M&&(!P.current&&M.animationState&&M.animationState.animateChanges(),P.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),P.current=!1),M.enteringChildren=void 0)}),M}function bA(a,r,o,l){const{layoutId:c,layout:h,drag:f,dragConstraints:g,layoutScroll:y,layoutRoot:m,layoutAnchor:v,layoutCrossfade:b}=r;a.projection=new o(a.latestValues,r["data-framer-portal-id"]?void 0:yv(a.parent)),a.projection.setOptions({layoutId:c,layout:h,alwaysMeasureLayout:!!f||g&&si(g),visualElement:a,animationType:typeof h=="string"?h:"both",initialPromotionConfig:l,crossfade:b,layoutScroll:y,layoutRoot:m,layoutAnchor:v})}function yv(a){if(a)return a.options.allowProjection!==!1?a.projection:yv(a.parent)}function ec(a,{forwardMotionProps:r=!1,type:o}={},l,c){l&&eA(l);const h=o?o==="svg":rd(a),f=h?pA:mA;function g(m,v){let b;const S={...J.useContext(uv),...m,layoutId:SA(m)},{isStatic:z}=S,M=rA(m),N=f(m,z);if(!z&&typeof window<"u"){TA();const k=AA(S);b=k.MeasureLayout,M.visualElement=vA(a,N,S,c,k.ProjectionNode,h)}return U.jsxs(vo.Provider,{value:M,children:[b&&M.visualElement?U.jsx(b,{visualElement:M.visualElement,...S}):null,dA(a,m,yA(N,M.visualElement,v),N,z,r,h)]})}g.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const y=J.forwardRef(g);return y[gA]=a,y}function SA({layoutId:a}){const r=J.useContext(_g).id;return r&&a!==void 0?r+"-"+a:a}function TA(a,r){J.useContext(cv).strict}function AA(a){const r=dv(),{drag:o,layout:l}=r;if(!o&&!l)return{};const c={...o,...l};return{MeasureLayout:o?.isEnabled(a)||l?.isEnabled(a)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function wA(a,r){if(typeof Proxy>"u")return ec;const o=new Map,l=(h,f)=>ec(h,f,a,r),c=(h,f)=>l(h,f);return new Proxy(c,{get:(h,f)=>f==="create"?l:(o.has(f)||o.set(f,ec(f,void 0,a,r)),o.get(f))})}const EA=(a,r)=>r.isSVG??rd(a)?new rT(r):new $S(r,{allowProjection:a!==J.Fragment});class CA extends Zn{constructor(r){super(r),r.animationState||(r.animationState=cT(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();go(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:o}=this.node.prevProps||{};r!==o&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let zA=0;class xA extends Zn{constructor(){super(...arguments),this.id=zA++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:o}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===l)return;if(r&&l===!1){if(this.isExitComplete){const{initial:h,custom:f}=this.node.getProps();if(typeof h=="string"||typeof h=="object"&&h!==null&&!Array.isArray(h)){const g=Ta(this.node,h,f);if(g){const{transition:y,transitionEnd:m,...v}=g;for(const b in v)this.node.getValue(b)?.jump(v[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!r);o&&!r&&c.then(()=>{this.isExitComplete=!0,o(this.id)})}mount(){const{register:r,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),r&&(this.unmount=r(this.id))}unmount(){}}const MA={animation:{Feature:CA},exit:{Feature:xA}};function Er(a){return{point:{x:a.pageX,y:a.pageY}}}const DA=a=>r=>Jc(r)&&a(r,Er(r));function gr(a,r,o,l){return Sr(a,r,DA(o),l)}const vv=({current:a})=>a?a.ownerDocument.defaultView:null,wg=(a,r)=>Math.abs(a-r);function UA(a,r){const o=wg(a.x,r.x),l=wg(a.y,r.y);return Math.sqrt(o**2+l**2)}const Eg=new Set(["auto","scroll"]);class bv{constructor(r,o,{transformPagePoint:l,contextWindow:c=window,dragSnapToOrigin:h=!1,distanceThreshold:f=3,element:g}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=M=>{this.handleScroll(M.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ys(this.lastRawMoveEventInfo,this.transformPagePoint));const M=tc(this.lastMoveEventInfo,this.history),N=this.startEvent!==null,k=UA(M.offset,{x:0,y:0})>=this.distanceThreshold;if(!N&&!k)return;const{point:_}=M,{timestamp:P}=nt;this.history.push({..._,timestamp:P});const{onStart:H,onMove:X}=this.handlers;N||(H&&H(this.lastMoveEvent,M),this.startEvent=this.lastMoveEvent),X&&X(this.lastMoveEvent,M)},this.handlePointerMove=(M,N)=>{this.lastMoveEvent=M,this.lastRawMoveEventInfo=N,this.lastMoveEventInfo=Ys(N,this.transformPagePoint),Ue.update(this.updatePoint,!0)},this.handlePointerUp=(M,N)=>{this.end();const{onEnd:k,onSessionEnd:_,resumeAnimation:P}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&P&&P(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const H=tc(M.type==="pointercancel"?this.lastMoveEventInfo:Ys(N,this.transformPagePoint),this.history);this.startEvent&&k&&k(M,H),_&&_(M,H)},!Jc(r))return;this.dragSnapToOrigin=h,this.handlers=o,this.transformPagePoint=l,this.distanceThreshold=f,this.contextWindow=c||window;const y=Er(r),m=Ys(y,this.transformPagePoint),{point:v}=m,{timestamp:b}=nt;this.history=[{...v,timestamp:b}];const{onSessionStart:S}=o;S&&S(r,tc(m,this.history));const z={passive:!0,capture:!0};this.removeListeners=Tr(gr(this.contextWindow,"pointermove",this.handlePointerMove,z),gr(this.contextWindow,"pointerup",this.handlePointerUp,z),gr(this.contextWindow,"pointercancel",this.handlePointerUp,z)),g&&this.startScrollTracking(g)}startScrollTracking(r){let o=r.parentElement;for(;o;){const l=getComputedStyle(o);(Eg.has(l.overflowX)||Eg.has(l.overflowY))&&this.scrollPositions.set(o,{x:o.scrollLeft,y:o.scrollTop}),o=o.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(r){const o=this.scrollPositions.get(r);if(!o)return;const l=r===window,c=l?{x:window.scrollX,y:window.scrollY}:{x:r.scrollLeft,y:r.scrollTop},h={x:c.x-o.x,y:c.y-o.y};h.x===0&&h.y===0||(l?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=h.x,this.lastMoveEventInfo.point.y+=h.y):this.history.length>0&&(this.history[0].x-=h.x,this.history[0].y-=h.y),this.scrollPositions.set(r,c),Ue.update(this.updatePoint,!0))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Qn(this.updatePoint)}}function Ys(a,r){return r?{point:r(a.point)}:a}function Cg(a,r){return{x:a.x-r.x,y:a.y-r.y}}function tc({point:a},r){return{point:a,delta:Cg(a,Sv(r)),offset:Cg(a,RA(r)),velocity:OA(r,.1)}}function RA(a){return a[0]}function Sv(a){return a[a.length-1]}function OA(a,r){if(a.length<2)return{x:0,y:0};let o=a.length-1,l=null;const c=Sv(a);for(;o>=0&&(l=a[o],!(c.timestamp-l.timestamp>xt(r)));)o--;if(!l)return{x:0,y:0};l===a[0]&&a.length>2&&c.timestamp-l.timestamp>xt(r)*2&&(l=a[1]);const h=_t(c.timestamp-l.timestamp);if(h===0)return{x:0,y:0};const f={x:(c.x-l.x)/h,y:(c.y-l.y)/h};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function VA(a,{min:r,max:o},l){return r!==void 0&&a<r?a=l?De(r,a,l.min):Math.max(a,r):o!==void 0&&a>o&&(a=l?De(o,a,l.max):Math.min(a,o)),a}function zg(a,r,o){return{min:r!==void 0?a.min+r:void 0,max:o!==void 0?a.max+o-(a.max-a.min):void 0}}function jA(a,{top:r,left:o,bottom:l,right:c}){return{x:zg(a.x,o,c),y:zg(a.y,r,l)}}function xg(a,r){let o=r.min-a.min,l=r.max-a.max;return r.max-r.min<a.max-a.min&&([o,l]=[l,o]),{min:o,max:l}}function BA(a,r){return{x:xg(a.x,r.x),y:xg(a.y,r.y)}}function LA(a,r){let o=.5;const l=ut(a),c=ut(r);return c>l?o=yr(r.min,r.max-l,a.min):l>c&&(o=yr(a.min,a.max-c,r.min)),en(0,1,o)}function NA(a,r){const o={};return r.min!==void 0&&(o.min=r.min-a.min),r.max!==void 0&&(o.max=r.max-a.min),o}const Mc=.35;function _A(a=Mc){return a===!1?a=0:a===!0&&(a=Mc),{x:Mg(a,"left","right"),y:Mg(a,"top","bottom")}}function Mg(a,r,o){return{min:Dg(a,r),max:Dg(a,o)}}function Dg(a,r){return typeof a=="number"?a:a[r]||0}const kA=new WeakMap;class HA{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ke(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=r}start(r,{snapToCursor:o=!1,distanceThreshold:l}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const h=b=>{o&&this.snapToCursor(Er(b).point),this.stopAnimation()},f=(b,S)=>{const{drag:z,dragPropagation:M,onDragStart:N}=this.getProps();if(z&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=bS(z),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Zt(_=>{let P=this.getAxisMotionValue(_).get()||0;if($t.test(P)){const{projection:H}=this.visualElement;if(H&&H.layout){const X=H.layout.layoutBox[_];X&&(P=ut(X)*(parseFloat(P)/100))}}this.originPoint[_]=P}),N&&Ue.update(()=>N(b,S),!1,!0),bc(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},g=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S;const{dragPropagation:z,dragDirectionLock:M,onDirectionLock:N,onDrag:k}=this.getProps();if(!z&&!this.openDragLock)return;const{offset:_}=S;if(M&&this.currentDirection===null){this.currentDirection=PA(_),this.currentDirection!==null&&N&&N(this.currentDirection);return}this.updateAxis("x",S.point,_),this.updateAxis("y",S.point,_),this.visualElement.render(),k&&Ue.update(()=>k(b,S),!1,!0)},y=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S,this.stop(b,S),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>{const{dragSnapToOrigin:b}=this.getProps();(b||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:v}=this.getProps();this.panSession=new bv(r,{onSessionStart:h,onStart:f,onMove:g,onSessionEnd:y,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:v,distanceThreshold:l,contextWindow:vv(this.visualElement),element:this.visualElement.current})}stop(r,o){const l=r||this.latestPointerEvent,c=o||this.latestPanInfo,h=this.isDragging;if(this.cancel(),!h||!c||!l)return;const{velocity:f}=c;this.startAnimation(f);const{onDragEnd:g}=this.getProps();g&&Ue.postRender(()=>g(l,c))}cancel(){this.isDragging=!1;const{projection:r,animationState:o}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(r,o,l){const{drag:c}=this.getProps();if(!l||!Is(r,c,this.currentDirection))return;const h=this.getAxisMotionValue(r);let f=this.originPoint[r]+l[r];this.constraints&&this.constraints[r]&&(f=VA(f,this.constraints[r],this.elastic[r])),h.set(f)}resolveConstraints(){const{dragConstraints:r,dragElastic:o}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;r&&si(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&l?this.constraints=jA(l.layoutBox,r):this.constraints=!1,this.elastic=_A(o),c!==this.constraints&&!si(r)&&l&&this.constraints&&!this.hasMutatedConstraints&&Zt(h=>{this.constraints!==!1&&this.getAxisMotionValue(h)&&(this.constraints[h]=NA(l.layoutBox[h],this.constraints[h]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:o}=this.getProps();if(!r||!si(r))return!1;const l=r.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;c.root&&(c.root.scroll=void 0,c.root.updateScroll());const h=FS(l,c.root,this.visualElement.getTransformPagePoint());let f=BA(c.layout.layoutBox,h);if(o){const g=o(XS(f));this.hasMutatedConstraints=!!g,g&&(f=Py(g))}return f}startAnimation(r){const{drag:o,dragMomentum:l,dragElastic:c,dragTransition:h,dragSnapToOrigin:f,onDragTransitionEnd:g}=this.getProps(),y=this.constraints||{},m=Zt(v=>{if(!Is(v,o,this.currentDirection))return;let b=y&&y[v]||{};(f===!0||f===v)&&(b={min:0,max:0});const S=c?200:1e6,z=c?40:1e7,M={type:"inertia",velocity:l?r[v]:0,bounceStiffness:S,bounceDamping:z,timeConstant:750,restDelta:1,restSpeed:10,...h,...b};return this.startAxisValueAnimation(v,M)});return Promise.all(m).then(g)}startAxisValueAnimation(r,o){const l=this.getAxisMotionValue(r);return bc(this.visualElement,r),l.start(Ic(r,l,0,o,this.visualElement,!1))}stopAnimation(){Zt(r=>this.getAxisMotionValue(r).stop())}getAxisMotionValue(r){const o=`_drag${r.toUpperCase()}`,c=this.visualElement.getProps()[o];return c||this.visualElement.getValue(r,this.visualElement.latestValues[r]??0)}snapToCursor(r){Zt(o=>{const{drag:l}=this.getProps();if(!Is(o,l,this.currentDirection))return;const{projection:c}=this.visualElement,h=this.getAxisMotionValue(o);if(c&&c.layout){const{min:f,max:g}=c.layout.layoutBox[o],y=h.get()||0;h.set(r[o]-De(f,g,.5)+y)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:o}=this.getProps(),{projection:l}=this.visualElement;if(!si(o)||!l||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Zt(f=>{const g=this.getAxisMotionValue(f);if(g&&this.constraints!==!1){const y=g.get();c[f]=LA({min:y,max:y},this.constraints[f])}});const{transformTemplate:h}=this.visualElement.getProps();this.visualElement.current.style.transform=h?h({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.constraints=!1,this.resolveConstraints(),Zt(f=>{if(!Is(f,r,null))return;const g=this.getAxisMotionValue(f),{min:y,max:m}=this.constraints[f];g.set(De(y,m,c[f]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;kA.set(this.visualElement,this);const r=this.visualElement.current,o=gr(r,"pointerdown",m=>{const{drag:v,dragListener:b=!0}=this.getProps(),S=m.target,z=S!==r&&CS(S);v&&b&&!z&&this.start(m)});let l;const c=()=>{const{dragConstraints:m}=this.getProps();si(m)&&m.current&&(this.constraints=this.resolveRefConstraints(),l||(l=GA(r,m.current,()=>this.scalePositionWithinConstraints())))},{projection:h}=this.visualElement,f=h.addEventListener("measure",c);h&&!h.layout&&(h.root&&h.root.updateScroll(),h.updateLayout()),Ue.read(c);const g=Sr(window,"resize",()=>this.scalePositionWithinConstraints()),y=h.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:v})=>{this.isDragging&&v&&(Zt(b=>{const S=this.getAxisMotionValue(b);S&&(this.originPoint[b]+=m[b].translate,S.set(S.get()+m[b].translate))}),this.visualElement.render())}));return()=>{g(),o(),f(),y&&y(),l&&l()}}getProps(){const r=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:l=!1,dragPropagation:c=!1,dragConstraints:h=!1,dragElastic:f=Mc,dragMomentum:g=!0}=r;return{...r,drag:o,dragDirectionLock:l,dragPropagation:c,dragConstraints:h,dragElastic:f,dragMomentum:g}}}function Ug(a){let r=!0;return()=>{if(r){r=!1;return}a()}}function GA(a,r,o){const l=kp(a,Ug(o)),c=kp(r,Ug(o));return()=>{l(),c()}}function Is(a,r,o){return(r===!0||r===a)&&(o===null||o===a)}function PA(a,r=10){let o=null;return Math.abs(a.y)>r?o="y":Math.abs(a.x)>r&&(o="x"),o}class qA extends Zn{constructor(r){super(r),this.removeGroupControls=kt,this.removeListeners=kt,this.controls=new HA(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||kt}update(){const{dragControls:r}=this.node.getProps(),{dragControls:o}=this.node.prevProps||{};r!==o&&(this.removeGroupControls(),r&&(this.removeGroupControls=r.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const nc=a=>(r,o)=>{a&&Ue.update(()=>a(r,o),!1,!0)};class XA extends Zn{constructor(){super(...arguments),this.removePointerDownListener=kt}onPointerDown(r){this.session=new bv(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:vv(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:o,onPan:l,onPanEnd:c}=this.node.getProps();return{onSessionStart:nc(r),onStart:nc(o),onMove:nc(l),onEnd:(h,f)=>{delete this.session,c&&Ue.postRender(()=>c(h,f))}}}mount(){this.removePointerDownListener=gr(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let ac=!1;class YA extends J.Component{componentDidMount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:l,layoutId:c}=this.props,{projection:h}=r;h&&(o.group&&o.group.add(h),l&&l.register&&c&&l.register(h),ac&&h.root.didUpdate(),h.addEventListener("animationComplete",()=>{this.safeToRemove()}),h.setOptions({...h.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),eo.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:o,visualElement:l,drag:c,isPresent:h}=this.props,{projection:f}=l;return f&&(f.isPresent=h,r.layoutDependency!==o&&f.setOptions({...f.options,layoutDependency:o}),ac=!0,c||r.layoutDependency!==o||o===void 0||r.isPresent!==h?f.willUpdate():this.safeToRemove(),r.isPresent!==h&&(h?f.promote():f.relegate()||Ue.postRender(()=>{const g=f.getStack();(!g||!g.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:r,layoutAnchor:o}=this.props,{projection:l}=r;l&&(l.options.layoutAnchor=o,l.root.didUpdate(),Zc.postRender(()=>{!l.currentAnimation&&l.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:l}=this.props,{projection:c}=r;ac=!0,c&&(c.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(c),l&&l.deregister&&l.deregister(c))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function Tv(a){const[r,o]=WT(),l=J.useContext(_g);return U.jsx(YA,{...a,layoutGroup:l,switchLayoutGroup:J.useContext(gv),isPresent:r,safeToRemove:o})}const IA={pan:{Feature:XA},drag:{Feature:qA,ProjectionNode:lv,MeasureLayout:Tv}};function Rg(a,r,o){const{props:l}=a;a.animationState&&l.whileHover&&a.animationState.setActive("whileHover",o==="Start");const c="onHover"+o,h=l[c];h&&Ue.postRender(()=>h(r,Er(r)))}class FA extends Zn{mount(){const{current:r}=this.node;r&&(this.unmount=TS(r,(o,l)=>(Rg(this.node,l,"Start"),c=>Rg(this.node,c,"End"))))}unmount(){}}class KA extends Zn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Tr(Sr(this.node.current,"focus",()=>this.onFocus()),Sr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Og(a,r,o){const{props:l}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&l.whileTap&&a.animationState.setActive("whileTap",o==="Start");const c="onTap"+(o==="End"?"":o),h=l[c];h&&Ue.postRender(()=>h(r,Er(r)))}class QA extends Zn{mount(){const{current:r}=this.node;if(!r)return;const{globalTapTarget:o,propagate:l}=this.node.props;this.unmount=xS(r,(c,h)=>(Og(this.node,h,"Start"),(f,{success:g})=>Og(this.node,f,g?"End":"Cancel")),{useGlobalTarget:o,stopPropagation:l?.tap===!1})}unmount(){}}const Dc=new WeakMap,ic=new WeakMap,ZA=a=>{const r=Dc.get(a.target);r&&r(a)},JA=a=>{a.forEach(ZA)};function WA({root:a,...r}){const o=a||document;ic.has(o)||ic.set(o,{});const l=ic.get(o),c=JSON.stringify(r);return l[c]||(l[c]=new IntersectionObserver(JA,{root:a,...r})),l[c]}function $A(a,r,o){const l=WA(r);return Dc.set(a,o),l.observe(a),()=>{Dc.delete(a),l.unobserve(a)}}const ew={some:0,all:1};class tw extends Zn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:r={}}=this.node.getProps(),{root:o,margin:l,amount:c="some",once:h}=r,f={root:o?o.current:void 0,rootMargin:l,threshold:typeof c=="number"?c:ew[c]},g=y=>{const{isIntersecting:m}=y;if(this.isInView===m||(this.isInView=m,h&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:v,onViewportLeave:b}=this.node.getProps(),S=m?v:b;S&&S(y)};this.stopObserver=$A(this.node.current,f,g)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:o}=this.node;["amount","margin","root"].some(nw(r,o))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}function nw({viewport:a={}},{viewport:r={}}={}){return o=>a[o]!==r[o]}const aw={inView:{Feature:tw},tap:{Feature:QA},focus:{Feature:KA},hover:{Feature:FA}},iw={layout:{ProjectionNode:lv,MeasureLayout:Tv}},rw={...MA,...aw,...IA,...iw},sw=wA(rw,EA);function Av(){!td.current&&ky();const[a]=J.useState(lo.current);return a}const wv=sw,ow=[{id:"fathom",portfolioCategory:"engine-games",title:"实体控制器潜艇协作游戏",period:"2026",category:{zh:"Unreal 游戏 / 硬件交互",en:"Unreal game / hardware interaction"},summary:{zh:"面向实体控制器的潜艇协作游戏。我担任主要程序与玩法架构负责人，完成任务循环、小游戏、UI 数据流和硬件接入。",en:"A physical-console submarine co-op game. I owned gameplay architecture, task loops, minigames, UI data flow, and hardware integration."},contribution:[{zh:"搭建 GameMode、角色控制、任务生成、小游戏接口与 UI/HUD 数据绑定。",en:"Built GameMode, character control, task generation, minigame interfaces, and UI/HUD data binding."},{zh:"实现 Server / Client 外部输入模块，将硬件信号解析为 Unreal 内的游戏指令。",en:"Implemented a server/client input module that translated physical-device signals into Unreal gameplay commands."},{zh:"通过异步接收、缓冲与插值处理输入延迟，并为关键链路补充状态校验和容错。",en:"Reduced input latency with asynchronous receiving, buffering, and interpolation, then added validation and fallback handling."}],stack:["Unreal Engine","Blueprint","Networking","Hardware I/O","UI"],images:[{src:"/media/projects/fathom-task.png",alt:{zh:"Fathom 任务玩法与绿色 HUD",en:"Fathom task gameplay with green HUD"},caption:{zh:"任务系统与实时 HUD",en:"Task system and realtime HUD"},position:"center"},{src:"/media/projects/fathom-sonar.png",alt:{zh:"Fathom 潜艇舱室画面",en:"Fathom submarine interior"},caption:{zh:"潜艇场景与硬件交互目标",en:"Submarine environment and hardware interaction target"},position:"center"}]},{id:"house-of-vampires",portfolioCategory:"engine-games",title:"哥特式吸血鬼城堡解谜游戏",period:"2025",category:{zh:"Unreal 蓝图游戏",en:"Unreal Blueprint game"},summary:{zh:"已上线 itch.io 的哥特式恐怖解谜游戏。我担任主要蓝图程序与技术美术开发，整合交互、谜题、手部动画和特效。",en:"A gothic puzzle-horror game released on itch.io. I led Blueprint and technical-art development across interactions, puzzles, hand animation, and VFX."},contribution:[{zh:"使用 Unreal Blueprint 实现玩法流程、交互、谜题、状态管理与手柄支持。",en:"Implemented gameplay flow, interaction, puzzles, state management, and controller support in Unreal Blueprints."},{zh:"制作第一人称手部绑定与动画，并将动画状态接入交互流程。",en:"Created the first-person hand rig and animation and connected it to gameplay interactions."},{zh:"参与完整打包与上线交付，项目可在 itch.io 下载。",en:"Contributed through packaging and public release; the game is available on itch.io."}],stack:["Unreal Engine","Blueprint","Gameplay","Rigging","Animation"],images:[{src:"/media/projects/house-of-vampires.webp",alt:{zh:"House of Vampires 的 itch.io 项目页与游戏截图",en:"House of Vampires itch.io page and screenshots"},caption:{zh:"已上线的 itch.io 页面与实机画面",en:"Published itch.io page and in-game captures"},position:"top"}],link:{label:{zh:"打开 itch.io 项目页",en:"Open the itch.io page"},href:"https://musitive.itch.io/hov"},youtubeId:"aY36FtqdGAw",story:{title:{zh:"你能逃出德古拉的城堡吗？",en:"Can you survive Dracula's Castle?"},intro:{zh:"进入《House of Vampires》中这座受经典恐怖电影启发的哥特式城堡。利用宅邸里散落的物品以及自己的身体，解开逃离城堡所需的谜题。",en:"Enter the classic horror-inspired gothic castle in House of Vampires! Use items scattered around the mansion as well as your own body to solve the puzzles needed to escape the castle."},features:[{title:{zh:"多种谜题",en:"Various Puzzles"},detail:{zh:"要成功逃出城堡，你需要只利用自己能够携带的物品，解决多种不同的谜题。",en:"To successfully escape the castle, you will need to solve several different puzzles using only what you can carry."}},{title:{zh:"德古拉",en:"Dracula"},detail:{zh:"游戏重新塑造了德古拉这一角色；在这个可怕的怪物抓住你之前，你必须设法逃脱。",en:"Featuring a new take on Dracula as a character, you must escape this terrifying monster before he catches you."}},{title:{zh:"手柄支持",en:"Controller Support"},detail:{zh:"游戏完整支持键盘鼠标和 Xbox 手柄。",en:"The game fully functions with not only Keyboard & Mouse but Xbox Controllers as well."}},{title:{zh:"经典恐怖电影质感",en:"Classic Horror Film Look"},detail:{zh:"游戏通过后期处理还原经典恐怖电影的胶片质感。",en:"Using post-processing, the game captures that film look from classic horror films."}}],note:{zh:"建议佩戴耳机游玩。",en:"Best experienced with headphones."}}},{id:"through-other-eyes",portfolioCategory:"engine-games",title:"VR 视障体验与无障碍叙事游戏",period:"2025",category:{zh:"VR 无障碍体验",en:"VR accessibility experience"},summary:{zh:"两人团队完成的 VR 视障体验。我兼任玩法策划、程序与技术美术，负责地图路线、事件设计、场景交互和角色绑定。",en:"A two-person VR accessibility project. I worked across game design, programming, and technical art, owning routes, events, interactions, and character rigging."},contribution:[{zh:"协助把关卡规划落成可游玩的 VR 场景，布置道路、障碍和关键交互点。",en:"Translated the level plan into a playable VR scene with streets, obstacles, and interaction points."},{zh:"编写事件交互逻辑，并制作简单的导盲犬绑定与动画。",en:"Authored event interaction logic and created a simple guide-dog rig and animation."},{zh:"围绕受限视觉信息设计引导、反馈和空间节奏。",en:"Worked on guidance, feedback, and spatial pacing under intentionally limited visual information."}],stack:["VR","Unreal Engine","Level Design","Interaction","Rigging"],images:[{src:"/media/projects/through-other-eyes-cover.webp",alt:{zh:"Through Other Eyes 项目海报",en:"Through Other Eyes project poster"},caption:{zh:"项目 One Sheet",en:"Project one-sheet"},position:"center 32%"},{src:"/media/projects/through-other-eyes-vr.png",alt:{zh:"VR 中的视障模拟画面",en:"Visual-impairment simulation in VR"},caption:{zh:"头显内的受限视觉效果",en:"Restricted-vision effect inside the headset"},position:"center"},{src:"/media/projects/through-other-eyes-level.webp",alt:{zh:"Through Other Eyes 关卡规划图",en:"Through Other Eyes level plan"},caption:{zh:"关卡路径与交互点规划",en:"Route and interaction-point planning"},position:"center"}]},{id:"retro-arcade",portfolioCategory:"engine-games",title:"复古像素风 3D 街机游戏原型",period:"2025",category:{zh:"Unity 游戏与 Shader",en:"Unity gameplay and shader"},summary:{zh:"复古 3D 街机游戏原型。我负责完整 Gameplay、角色与动画状态，并尝试把 3D 动画烘焙成带法线信息的像素序列帧。",en:"A retro 3D arcade prototype. I owned gameplay and character state and explored baking 3D animation into pixel sprites with normal information."},contribution:[{zh:"实现角色状态、动画状态、关卡逻辑和核心玩法循环。",en:"Implemented character state, animation state, level logic, and the core gameplay loop."},{zh:"制作部分 2D 角色素材，并完成 3D 到 2D 序列帧的实验流程。",en:"Created part of the 2D character art and completed a 3D-to-2D sprite-sequence experiment."},{zh:"编写利用颜色、Alpha 与法线贴图的像素化实时 Shader，并记录方案未进入最终版本的原因。",en:"Wrote a pixel-rendering shader using color, alpha, and normal data and documented why the experiment was not adopted."}],stack:["Unity","C#","Shader","Gameplay","2D / 3D Pipeline"],images:[{src:"/media/projects/retro-arcade-shader.png",alt:{zh:"Unity 中的像素角色 Shader 实验",en:"Pixel-character shader experiment in Unity"},caption:{zh:"3D 动画到像素序列帧与法线光照实验",en:"3D animation to pixel sprites with normal-lighting experiment"},position:"center"},{src:"/media/projects/retro-arcade-sprites.png",alt:{zh:"复古街机角色序列帧素材",en:"Retro arcade character sprite sheets"},caption:{zh:"本人制作的角色序列帧素材",en:"Character sprite sheets I created"},position:"center"}]},{id:"digital-twin",portfolioCategory:"engine-games",title:"火力发电检测 UE5 数字孪生客户端",period:"2023",category:{zh:"UE5 客户端开发",en:"UE5 client development"},summary:{zh:"面向火力发电检测业务的 UE5 / Web 双客户端数字孪生系统，由公司服务器协调三端低时延双向数据与操作同步。",en:"A UE5/Web dual-client digital-twin system for thermal-power inspection, with a company server coordinating low-latency bidirectional state and operation synchronization."},contribution:[{zh:"使用 C++、Blueprint 与组件化架构实现锅炉、汽轮机、发电机及监测设备的启停、联锁、参数变化、告警联动和巡检流程。",en:"Implemented startup, interlocks, telemetry changes, alarms, and inspection flows for boilers, steam turbines, generators, and monitoring equipment with C++, Blueprint, and a component-based architecture."},{zh:"把 UE5 的组件化、状态机、事件总线和分层设计迁移到 Vue 3 / Three.js Web 端，复用设备 ID、状态模型与指令协议。",en:"Transferred UE5 component, state-machine, event-bus, and layered patterns to Vue 3 / Three.js while sharing device IDs, state models, and command contracts."},{zh:"以公司服务器为权威状态源，通过 HTTP + WebSocket 实现 UE5 / Server / Web 三端低时延双向同步、操作回传与异常恢复。",en:"Used the company server as the authoritative state source for low-latency UE5-server-Web synchronization, operation relay, and recovery over HTTP and WebSocket."}],stack:["UE5 / C++ / Blueprint","Vue 3 / Three.js","Node.js / Express","WebSocket","状态同步"],images:[{src:"/media/projects/digital-twin.png",alt:{zh:"工业数字孪生建筑线框与显示控制面板",en:"Industrial digital twin with building outlines and display controls"},caption:{zh:"城市建筑数据与显示参数控制",en:"Building data and display-parameter controls"},position:"center"}],link:{label:{zh:"查看 Web 展示端仓库",en:"View the Web viewer repository"},href:"https://github.com/Ubik42/Vue3_Digital_Twin"}}];function In(a,r){return a[r]}const lw=`# UE5 Digital-Twin Client for Thermal-Power Inspection

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
`,uw=`# 火力发电检测 UE5 数字孪生客户端

这是我在上海如为电力担任 UE5 客户端开发实习生期间参与的火力发电检测项目。主要工作不是单纯展示模型，而是把发电设备、运行状态、监测参数、告警和巡检任务组织成一套由公司服务器协调的数字孪生系统：UE5 承担高交互三维仿真，Web 承担浏览器访问与轻量操作，两端共享状态模型和指令语义，并与服务器进行低时延双向同步。

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
`,cw=`# Fathom

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
`,dw=`# Fathom

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
`,fw=`# House of Vampires

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
`,hw=`# House of Vampires

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
`,mw=`# Retro 3D Arcade Prototype

A retro Unity game based on a Q*bert-like loop. I owned the complete gameplay implementation: character movement and state, animation flow, tile feedback, enemies, level logic, and the loop from start through failure and restart. I also led the custom shader-pipeline experiment and created part of the 2D character art.

## 3D animation to pixel sprites

I modeled and animated a Q*bert character, then exported sprite sequences containing color, alpha, and normal information. A Unity shader reconstructed the silhouette and used the normal channel for realtime lighting.

![3D-to-2D sprite and shader experiment](/media/projects/retro-diary/image-000.png)

The pipeline worked but was not adopted: detailed characters produced excessive noise at the chosen 45-degree view, and the schedule did not allow the full 3D asset set to be completed.

## Character concepts and 2D art

![Character and animation sprite sheets](/media/projects/retro-diary/image-001.png)

The available material primarily documents the pipeline experiment; no sufficiently clear final gameplay capture is presented as a finished result.
`,pw=`# Retro 3D Arcade Prototype

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
`,gw=`# Through Other Eyes

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
`,yw=`# Through Other Eyes

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
`,Vg={fathom:{zh:dw,en:cw},"house-of-vampires":{zh:hw,en:fw},"through-other-eyes":{zh:yw,en:gw},"retro-arcade":{zh:pw,en:mw},"digital-twin":{zh:uw,en:lw}},vw=[{id:"lyra-hero-arena",title:"Lyra Hero Arena：五英雄多人对战游戏",category:"engine-games",categoryLabel:{zh:"多人游戏与 Gameplay 架构",en:"Multiplayer game and gameplay architecture"},summary:{zh:"基于 UE5 Lyra 扩展五英雄射击玩法，以 GAS、Game Feature、PawnData 与服务器权威状态组织选人、战斗、死亡、重生和结算；项目仍在持续开发。",en:"An in-progress UE5 Lyra hero shooter using GAS, Game Features, PawnData, and server-authoritative state for selection, combat, death, respawn, and results."},cover:"/media/repositories/lyra-hero-arena/hero-select.jpg",tags:["UE 5.7","Lyra","C++ / GAS","Game Features"],repositoryUrl:"https://github.com/Ubik42/LyraHeroArena",story:{zh:`# Lyra Hero Arena：五英雄多人对战游戏

这是一个基于 Unreal Engine 5.7 与 Lyra Starter Game 持续开发的多人英雄射击项目。当前重点不是复制 Lyra 示例内容，而是在它已有的武器、队伍、GAS、PawnData、CommonUI 和网络框架上建立一套可扩展的英雄与比赛循环。

## 游戏与 Gameplay 架构

- 五名英雄以 AbilitySet、装备和数据定义组合差异，不复制整套 Pawn；
- 服务器保存并校验英雄选择，客户端只提交意图，避免本地状态成为比赛权威；
- 自有玩法放在 HeroArena Game Feature 中，减少主工程对具体模式的反向依赖；
- 选人、出生、交战、目标、死亡、重生、换人与结算沿用同一状态路径；
- 伤害、治疗、队伍、库存和武器 TargetData 尽量复用 Lyra 原有边界。

## 当前状态

仓库公开的是自研 C++ 模块、结构说明和真实运行截图，不重新分发 Lyra、Fab 或 Unreal Engine 资产。核心架构与主要比赛环节已经落地，但角色内容、玩法平衡、界面表现和完整发布流程仍在继续开发。`,en:`# Lyra Hero Arena

An in-progress multiplayer hero-shooter project built on Unreal Engine 5.7 and Lyra. Five heroes are composed from Ability Sets, equipment, and data definitions, while server-authoritative selection and a HeroArena Game Feature keep gameplay boundaries explicit. The repository publishes original C++ modules and real screenshots without redistributing Lyra or Fab assets.`},images:[{src:"/media/repositories/lyra-hero-arena/gameplay.jpg",alt:{zh:"Lyra 英雄射击实际交战场景",en:"Live combat in the Lyra hero shooter"}}]},{id:"lyra-performance-lab",title:"多角色高负载场景性能优化",category:"engine-games",categoryLabel:{zh:"UE 性能分析与优化",en:"UE performance analysis and optimization"},summary:{zh:"在固定地图和角色负载下，分别比较 AI、寻路、动画、渲染与网络调整前后的性能指标和场景状态。",en:"Independent, attributable before-and-after studies across AI, navigation, animation, rendering, and networking under high multi-character load."},cover:"/media/repositories/lyra-hero-arena/workbench-render.png",tags:["Unreal Insights","CSV Profiler","Slate","A/B Benchmark"],repositoryUrl:"https://github.com/Ubik42/LyraHeroArena/tree/main/Plugins/PerformanceLab",story:{zh:`# 多角色高负载场景性能优化

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

A Chinese Unreal Editor tool that turns profiling setup into repeatable experiments. Versioned presets define maps, loads, seeds, RHI, graphics settings, capture duration, and process topology. The workbench launches standalone, server, and client processes, validates required load and quality conditions, and aggregates matched 3+3 baseline and optimized samples with medians, P95 values, deltas, and quality costs.`},images:[{src:"/media/repositories/lyra-hero-arena/workbench-render.png",alt:{zh:"渲染实验的正式结果对比",en:"Formal rendering experiment comparison"}},{src:"/media/repositories/lyra-hero-arena/workbench-network.png",alt:{zh:"网络实验的多进程结果对比",en:"Multi-process network experiment comparison"}}]},{id:"noemancer",title:"Noemancer：面向人与 AI 协作的现代高性能自研游戏引擎",category:"engine-games",categoryLabel:{zh:"自研游戏引擎",en:"Custom game engine"},summary:{zh:"Noemancer 是一款覆盖现代 PBR 渲染、Jolt 物理、ozz 动画、GPU 粒子、音频、C# Gameplay、声明式 UI、资产 Cook/打包及完整编辑器工作流，并以统一语义数据层让人类与 AI Agent 共同编辑、调试和开发游戏的高性能 AI 原生引擎。",en:"Noemancer is a high-performance AI-native engine spanning modern PBR rendering, Jolt physics, ozz animation, GPU particles, audio, C# gameplay, declarative UI, asset cooking and packaging, and a complete editor workflow, with a shared semantic data layer for human-AI game development."},cover:"/media/repositories/major-updates/noemancer-sponza-atrium.webp",tags:["C++20","D3D12 / Vulkan","C#","MCP"],repositoryUrl:"https://github.com/Ubik42/Noemancer",story:{zh:`# Noemancer：面向人与 AI 协作的现代高性能自研游戏引擎

Noemancer 是一款覆盖现代 PBR 渲染、Jolt 物理、ozz 动画、GPU 粒子、音频、C# Gameplay、声明式 UI、资产 Cook/打包及完整编辑器工作流，并以统一语义数据层让人类与 AI Agent 共同编辑、调试和开发游戏的高性能 AI 原生引擎。

## 从建立工程到独立运行

- Project Hub 管理创建、打开和恢复工程；Scene View、Outliner、Inspector、Asset Browser、Console 与 Animation Graph 组成完整编辑工作区。
- Edit World 与 Play World 互相隔离，运行时改动不会污染编辑场景；需要的结果可选择性 Apply Back，并进入同一套 Undo / Redo。
- Gameplay 层使用 .NET 10 / C# 热重载；Runtime 集成 Flecs ECS、Jolt 物理、ozz 骨骼动画、GPU Skinning、RmlUi、输入、音频、VFX、Prefab 和存档。
- NoemancerPlatformer 已经贯通“项目 UI / 输入 → C# Gameplay → Cook → Package → 独立 Player”，用于验证游戏侧的完整生命周期。

## D3D12 / Vulkan 渲染管线

- SDL_GPU 后端让 D3D12 与 Vulkan 共享资源、Shader 和 Render Graph 合同，同时保留各后端的 Pass 时间与诊断回执。
- Raster 主路径包含 Forward PBR、split-sum IBL、四级 CSM、Point/Spot 阴影、GPU 视锥裁剪与间接绘制。
- 画面管线已接入四 LUT 动态天空、Aerial Perspective、共享 HiZ、SSR、SSGI、TAA、GTAO、双边降噪、Bloom、曝光调色和 ACES Tone Mapping。
- RenderLab 使用 Intel Sponza 2022 进行实时验证：约 205 万顶点、1124 万索引、405 个 primitive 和 72 张纹理。页面中的画面均来自 Release 运行捕获。
- RTX 4080 上已完成 D3D12/Vulkan 的 BLAS / TLAS 构建、Barrier、Fence 和释放测试；当前阶段用于确认底层资源边界，可见光追与 RTGI 仍在后续路线中。

## 资产 Cook 与发布

- 导入 GLB、JSON glTF 与 FBX，使用 meshoptimizer 处理几何，烘焙 Mesh、Animation、KTX2、Sprite Atlas 和 Tilemap 数据。
- Cook 产物由源文件、配方、目标 Profile 和工具版本共同寻址；Runtime 加载前复核范围、Schema 与 SHA-256。
- Windows Player 只带运行时资产、app-local .NET、VC Runtime、Shader Manifest 和第三方 NOTICE，不会在玩家机器上临时解析源 FBX / glTF。

## 编辑器与 Agent 共用命令系统

引擎的 C++ Command Registry 同时服务 Editor、direct JSON、CLI 和 MCP。场景、项目、资产注册表和运行时诊断以稳定 ID、Schema、Revision 和有限观察结果公开；自动化遵循 **Observe → Plan → Apply → Receipt → Undo / Redo**，连接当前 Editor 的权威 World 与撤销记录，不建立第二份场景数据库，也不把 Flecs、Jolt 或 SDL 句柄暴露给 Agent。

## 当前状态

项目处于 Pre-alpha，目前主要验证 Windows x64。可稳定对外的插件 SDK、跨平台发行、生产网络、签名安装器、可见硬件光追、RTGI 与 VSM 仍在后续计划中。当前展示重点是已经真正跑通的 Editor—Runtime—Cook—Player 链路与实时渲染结果。`,en:`# Noemancer

Noemancer contains a native Editor, game Runtime, asset Cook, standalone Player packaging, C# project scripting, and one command layer shared by CLI and MCP.

## Current capabilities

- Project and scene authoring, input and project UI.
- Isolated Play World execution with selective Apply Back.
- SDL_GPU rendering on D3D12 / Vulkan with Forward PBR, shadows, TAA, GTAO, Bloom, and ACES tone mapping.
- GLB / FBX import, cooked mesh and animation formats, KTX2 assets, and Windows Player packaging.
- Stable IDs, schemas, revisions, receipts, and undoable commands shared by the Editor and agent tools.

## Current boundary

The project is pre-alpha and currently verified end to end on Windows x64. SSR, SSGI, hardware ray tracing, dynamic atmosphere, and a stable plug-in SDK are not presented as finished features.`},images:[{src:"/media/repositories/major-updates/noemancer-editor.webp",alt:{zh:"Noemancer 中文 Editor：场景、层级、Inspector、资产与 Agent Context",en:"Noemancer Chinese editor workspace"}},{src:"/media/repositories/major-updates/noemancer-sponza-atrium.webp",alt:{zh:"D3D12 中实时运行的 Intel Sponza 2022 宫殿中庭",en:"Intel Sponza 2022 atrium running in real time on D3D12"}},{src:"/media/repositories/major-updates/noemancer-sponza-balcony.webp",alt:{zh:"Sponza 上层回廊与外部 glTF 材质依赖",en:"Sponza balcony and external glTF material dependencies"}},{src:"/media/repositories/major-updates/noemancer-commercial-raster.webp",alt:{zh:"PBR、阴影、Bloom 与 ACES 的商业 Raster 基准",en:"Commercial raster benchmark with PBR, shadows, Bloom, and ACES"}},{src:"/media/repositories/major-updates/noemancer-sky.webp",alt:{zh:"四 LUT 动态天空、大气与 Aerial Perspective",en:"Four-LUT dynamic sky, atmosphere, and aerial perspective"}},{src:"/media/repositories/major-updates/noemancer-ssr-ssgi.webp",alt:{zh:"RenderLab 中启用 SSR、SSGI 与时域处理",en:"SSR, SSGI, and temporal processing in RenderLab"}}]},{id:"siggraph-physics-lab",title:"UE5 SIGGRAPH 物理复现实验室",category:"engine-games",categoryLabel:{zh:"UE 物理与论文复现",en:"UE physics and paper reproduction"},summary:{zh:"围绕布料、软体、流体、可微物理和物理角色控制，把 SIGGRAPH 研究中的求解思想接入 UE 5.4、Chaos 与真实引擎资产。",en:"Five UE 5.4 studies connect SIGGRAPH research on cloth, soft bodies, fluids, differentiable physics, and physical character control to Chaos and real engine assets."},cover:"/media/repositories/siggraph-physics-lab/cover.png",tags:["UE 5.4.4","Chaos","RDG / D3D12","Physics"],repositoryUrl:"https://github.com/Ubik42/ue5-siggraph-physics-lab",story:{zh:`# UE5 SIGGRAPH 物理复现实验室

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

The project is an engineering extension of the MIT-licensed TinyRenderer teaching implementation. Original history and asset notices are retained, while the portfolio work focuses on additional passes, shaders, diagnostics, automation, structured output, and documentation.`},images:[{src:"/media/repositories/software-rasterizer/07_matcap.png",alt:{zh:"视空间法线驱动的 MatCap 着色",en:"View-space-normal-driven MatCap shading"}},{src:"/media/repositories/software-rasterizer/01_shaded.png",alt:{zh:"法线贴图与高光组合的最终着色",en:"Final shading with normal mapping and highlights"}},{src:"/media/repositories/software-rasterizer/02_depth.png",alt:{zh:"Z-Buffer 有效深度范围可视化",en:"Visualization of the valid Z-buffer depth range"}},{src:"/media/repositories/software-rasterizer/03_view_normals.png",alt:{zh:"视空间法线插值结果",en:"Interpolated view-space normals"}},{src:"/media/repositories/software-rasterizer/04_perspective_uv.png",alt:{zh:"透视正确 UV 棋盘",en:"Perspective-correct UV checkerboard"}},{src:"/media/repositories/software-rasterizer/05_toon.png",alt:{zh:"N·L 离散量化的 Toon 色阶",en:"Toon bands from quantized N dot L"}},{src:"/media/repositories/software-rasterizer/06_rim_light.png",alt:{zh:"Fresnel 风格青色边缘光",en:"Fresnel-style cyan rim lighting"}},{src:"/media/repositories/software-rasterizer/08_wireframe.png",alt:{zh:"由重心坐标生成的三角形线框",en:"Triangle wireframe generated from barycentric coordinates"}},{src:"/media/repositories/software-rasterizer/09_overdraw.png",alt:{zh:"深度测试前片元覆盖次数热力图",en:"Pre-depth-test fragment coverage heatmap"}},{src:"/media/repositories/software-rasterizer/10_barycentric.png",alt:{zh:"三角形重心坐标连续插值",en:"Continuous triangle barycentric interpolation"}}]},{id:"resonance-forge",title:"UE × Wwise 物理声源与 MIDI 工作台",category:"engine-games",categoryLabel:{zh:"Unreal 技术音频与引擎工具",en:"Unreal technical audio and engine tool"},summary:{zh:"在 UE 5.8 中把场景碰撞、模态共振、数字波导弦、MIDI 表演和 Wwise Event / RTPC 连接成可试听、可复检的物理声源工作流。",en:"A UE 5.8 physical-audio workflow connecting scene collisions, modal resonance, digital waveguide strings, MIDI performance, and Wwise Events and RTPCs."},cover:"/media/repositories/resonance-forge/workshop.png",tags:["Unreal 5.8","Wwise 2025.1","物理音频","MIDI"],repositoryUrl:"https://github.com/Ubik42/resonance-forge",story:{zh:`# UE × Wwise 物理声源与 MIDI 工作台

Resonance Forge 是一套运行在 Unreal Engine 5.8.1 中的技术音频实验工具。它把“物体受到怎样的激励、如何产生共振、怎样把声音发布到游戏音频中”组织成一条可以现场试听和复检的工作流，而不是只播放预先录好的采样。

## 两类实时物理声源

- **模态冲击体**根据碰撞冲量、相对速度与物体尺寸驱动多组衰减振型，用于表现材质受到敲击后的音高、明亮度和余振；
- **数字波导弦**支持 8 复音演奏，以延迟线和反馈滤波模拟拨弦，并让 MIDI Note On 控制音高和力度、CC1 控制音色明亮度；
- 场景碰撞和 MIDI 输入都能直接激励声源，方便在真实关卡中比较不同参数与材质反馈。

## Unreal 与 Wwise 接入

- 中文 Slate 面板按照“选择对象 → 配置激励 → 调整共振 → 发布”的顺序组织参数和操作；
- Unreal 原生合成路径用于即时试听，同时可触发 Wwise Event，并将冲击能量、音色明亮度和物体尺寸写入 3 条 RTPC；
- 工程附带可复现的测试音频、PBR 材质、演示地图与验证报告，便于从场景行为追溯到最终声音结果。

当前版本已在 Windows Editor 中完成构建、地图重载和试听验证。Cook / Shipping、多平台发行以及 Wwise SDK 的再分发不在当前展示范围内。`,en:`# UE × Wwise Physical Audio and MIDI Workbench

Resonance Forge is a UE 5.8.1 technical-audio tool with two real-time sources: a modal impact body and an eight-voice digital waveguide string. Scene collisions and MIDI input drive the sound, while a Chinese Slate workflow publishes the result through native Unreal synthesis or a Wwise Event with three RTPC values. The repository includes reproducible audio, PBR assets, demo maps, and verification reports.`},images:[{src:"/media/repositories/resonance-forge/workshop.png",alt:{zh:"Resonance Forge 物理声源演示工坊",en:"Resonance Forge physical-audio workshop"}},{src:"/media/repositories/resonance-forge/overview.png",alt:{zh:"Unreal 场景中的中文物理声源工作台",en:"Chinese physical-audio workbench inside Unreal"}}]},{id:"art-pipeline-skill",title:"可验证的跨 DCC 美术管线审计 Skill",category:"pipeline",categoryLabel:{zh:"跨工具审计与 Agent 能力边界",en:"Cross-tool audit and agent capability boundaries"},summary:{zh:"把供应商目录、Maya 场景与 Unreal 资产检查串成可追溯、可恢复、默认只读的组合审计，并复核版本、Schema、哈希与零写入证据。",en:"Combines supplier delivery, Maya scene, and Unreal asset checks into a traceable, recoverable, read-only audit with version, schema, hash, and zero-write verification."},cover:"/media/repositories/production-tools/art-pipeline-skill-cover.svg",tags:["Skill","Maya / Unreal","Pydantic / JSON Schema","幂等恢复"],repositoryUrl:"https://github.com/Ubik42/art-pipeline-skill",story:{zh:`# 可验证的跨 DCC 美术管线审计 Skill

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

Version 0.3.1 provides two Maya 2025 workflows: safe three-input UV/position transfer and controllable thickness generation for open garment meshes. Both use zero-write previews, a single undo chunk, read-back validation, and automatic rollback. A redistributable CC0 halter dress provides real garment evidence in addition to deterministic demo scenes.`},images:[{src:"/media/repositories/production-tools/maya-garment-public-input.png",alt:{zh:"公开 CC0 挂脖连衣裙输入",en:"Public CC0 halter dress input"}},{src:"/media/repositories/production-tools/maya-garment-public-result.png",alt:{zh:"厚度生成后的领口侧壁与真实服装轮廓",en:"Generated opening sidewalls on the real garment silhouette"}},{src:"/media/repositories/production-tools/maya-garment-thickness-preview.png",alt:{zh:"双向居中厚度的零写入预览",en:"Zero-write centered thickness preview"}},{src:"/media/repositories/production-tools/maya-garment-thickness-complete.png",alt:{zh:"厚度执行完成、实测结果与本次 History",en:"Completed thickness operation with measured results and owned history"}}]},{id:"unreal-asset-batch-auditor",title:"Unreal 资产批量质量审计工具",category:"engine-games",categoryLabel:{zh:"Unreal 资产验收与交付证据",en:"Unreal asset acceptance and delivery evidence"},summary:{zh:"UE 5.8.1 原生中文 Slate 工作台：用项目 Profile 分别审计模型、纹理与材质，并把混合交付汇总为可下钻、可追溯的三轨验收结论。",en:"A native UE 5.8.1 Slate workbench that audits meshes, textures, and materials under project profiles, then summarizes mixed deliveries as traceable, drill-down acceptance results."},cover:"/media/repositories/production-tools/unreal-auditor-current.png",tags:["Unreal 5.8","C++ / Python","Slate","版本化证据"],repositoryUrl:"https://github.com/Ubik42/unreal-asset-batch-auditor",story:{zh:`# Unreal 资产批量质量审计工具

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

A read-only Unreal 5.8.1 Editor plug-in. Native C++ collects host metadata while Python applies versioned profiles and produces reports. Dedicated mesh, texture, and material tracks retain their own evidence; a mixed-delivery summary exposes coverage, blocking issues, hotspots, and drill-down links without modifying production assets.`},images:[{src:"/media/repositories/production-tools/unreal-auditor-current.png",alt:{zh:"UE 5.8.1 中按项目 Profile 执行批量资产验收",en:"Profile-driven batch asset acceptance in UE 5.8.1"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-overview.png",alt:{zh:"24 个 Static Mesh 的资产总览、通过项和问题项",en:"Overview of 24 Static Mesh assets with passing and failing states"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-issues.png",alt:{zh:"规则、实测值、阈值与中文 Evidence",en:"Rules, measured values, thresholds, and localized evidence"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-running.png",alt:{zh:"可观察、可在批次间安全取消的审计任务",en:"Observable audit task with safe cancellation between batches"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-regression.png",alt:{zh:"同一 Profile 下修复前后的回归比较",en:"Before-and-after regression under the same profile"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-handoff.png",alt:{zh:"无需 Unreal 即可阅读的中文团队交接报告",en:"Chinese team handoff report readable without Unreal"}}]},{id:"rez-studio-launcher",title:"DCC 项目环境与插件启动器",category:"pipeline",categoryLabel:{zh:"项目环境、插件与 DCC 工具运行时",en:"Project environment, plug-in, and DCC tool runtime"},summary:{zh:"按项目解析隔离的 Rez 环境，并把插件方案、工具清单、宿主装载和诊断日志组织成可追溯的 DCC 工作站入口。",en:"Resolves isolated Rez environments per project and manages plug-in schemes, tool manifests, host loading, and diagnostics as one traceable DCC workstation entry point."},cover:"/media/repositories/major-updates/rez-overview.png",tags:["Rez 3.4","Maya 2025","Tool Runtime","Tauri 2"],repositoryUrl:"https://github.com/Ubik42/rez-studio-launcher",story:{zh:`# DCC 项目环境与插件启动器

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

The Tauri 2 and React desktop application connects to Rez through a Python service, exposes launch diagnostics, and ships a Windows installer plus a documented CLI protocol.`},images:[{src:"/media/repositories/major-updates/rez-overview.png",alt:{zh:"Rez Studio 项目软件库、DCC 版本与插件方案",en:"Rez Studio project library, DCC versions, and plug-in schemes"}},{src:"/media/repositories/major-updates/rez-maya-runtime.png",alt:{zh:"由 Rez Profile 装载到 Maya 2025 的真实工具运行时面板",en:"A real tool runtime panel loaded into Maya 2025 through a Rez profile"}},{src:"/media/repositories/major-updates/rez-login.png",alt:{zh:"Rez Studio 本地身份登录与项目入口",en:"Rez Studio local identity and project entry"}}]},{id:"mayascope",title:"Maya 场景根因调查与运行时诊断工具",category:"pipeline",categoryLabel:{zh:"大型 Maya 场景调查工作区",en:"Large-scale Maya scene investigation workspace"},summary:{zh:"用 Scene Atlas、根因镜头、依赖谱系与运行时证据调查复杂 Maya 场景，并以签名快照、回归比较和可恢复队列交付结论。",en:"Investigates complex Maya scenes through Scene Atlas, Root Cause Lens, dependency lineage, and runtime evidence, then delivers signed snapshots, regression comparisons, and recoverable queues."},cover:"/media/repositories/production-tools/mayascope-project-queue.png",tags:["Maya 2025","Root Cause Lens","Runtime Observatory","Signed Audit"],repositoryUrl:"https://github.com/Ubik42/MayaScope",story:{zh:`# Maya 场景调查与运行时诊断工具

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

PyArsenal is a graphical manager for Python developers who maintain many scripts. It centralizes registration, tags, execution environments, and compilation so a script library remains searchable and deliverable.`}},{id:"artflow-agent",title:"面向引擎接入的新时代 AIGC 框架",category:"engine-games",categoryLabel:{zh:"引擎场景 AIGC 智能体框架",en:"Engine-scene AIGC agent framework"},summary:{zh:"把 Unreal 场景事实编译成类型化变更计划，协调 ComfyUI、GPT Image 2 与图生 3D，在候选关卡中完成执行、评价、定向纠正和发布。",en:"Compiles Unreal scene facts into typed change plans and coordinates ComfyUI, GPT Image 2, and image-to-3D providers for execution, judging, targeted correction, and publishing in candidate levels."},cover:"/media/repositories/major-updates/artflow-scene-lab-3d.png",tags:["Unreal 5.8","ComfyUI / GPT Image 2","Image-to-3D","Scene Agent"],repositoryUrl:"https://github.com/Ubik42/ArtFlow-Agent",story:{zh:`# 面向引擎接入的新时代 AIGC 框架

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

ArtFlow Agent is a constrained scene-agent control plane between generation providers and Unreal. It compiles scene facts into typed change plans and coordinates ComfyUI, GPT Image 2, image-to-3D providers, Unreal Interchange, judging, targeted correction, recovery, and candidate-level publishing. Four production cases cover image-to-3D, five-channel PBR, multi-domain scene changes, and correction of the failed domain only.`},images:[{src:"/media/repositories/major-updates/artflow-scene-lab-3d.png",alt:{zh:"参考图生成、GLB 验证与 Unreal 候选关卡导入",en:"Reference generation, GLB validation, and Unreal candidate-level import"}},{src:"/media/repositories/major-updates/artflow-scene-lab-pbr.png",alt:{zh:"ComfyUI 五通道 PBR 生成与材质实例回流",en:"Five-channel ComfyUI PBR generation and material-instance return"}},{src:"/media/repositories/major-updates/artflow-scene-lab-multi.png",alt:{zh:"材质、PCG、灯光和资产的多域场景变更",en:"Multi-domain scene changes across materials, PCG, lighting, and assets"}},{src:"/media/repositories/major-updates/artflow-scene-lab-correction.png",alt:{zh:"只针对失败域执行定向纠正与恢复",en:"Targeted correction and recovery for the failed domain only"}},{src:"/media/repositories/major-updates/artflow-architecture.png",alt:{zh:"场景智能体控制层、能力注册与候选关卡架构",en:"Scene-agent control plane, capability registry, and candidate-level architecture"}}]},{id:"comfyui-production-nodes",title:"ComfyUI 生产检查与交付节点",category:"pipeline",categoryLabel:{zh:"AIGC 生产节点",en:"ComfyUI custom nodes"},summary:{zh:"插入现有 ComfyUI 工作流，在生成前检查参数与依赖，生成后记录收据并整理 DCC、引擎交付信息。",en:"Custom nodes adding constraint checks, dependency checks, generation receipts, and DCC / engine handoff manifests."},cover:"/media/repositories/comfyui-production-nodes/workflow-overview.png",tags:["ComfyUI","Python","工作流检查","DCC / 引擎交付"],repositoryUrl:"https://github.com/Ubik42/ComfyUI-Production-Nodes",story:{zh:`# ComfyUI 生产检查与交付节点

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

The repository includes a real local ComfyUI output, its API workflow, and the receipt written by the package. The nodes remain model- and renderer-independent.`},images:[{src:"/media/repositories/comfyui-production-nodes/workflow-overview.png",alt:{zh:"中文生产预检与下游交接工作流总览",en:"Chinese production workflow overview"}},{src:"/media/repositories/comfyui-production-nodes/dependency-check.png",alt:{zh:"环境清单与依赖预检通过",en:"Environment inventory and dependency check"}},{src:"/media/repositories/comfyui-production-nodes/budget-validation.png",alt:{zh:"批量与像素预算超限被集中拦截",en:"Batch and pixel budget validation"}},{src:"/media/repositories/comfyui-production-nodes/contract-validation.png",alt:{zh:"工作流必需输入与参数范围检查",en:"Workflow input and parameter validation"}},{src:"/media/repositories/comfyui-production-nodes/receipt-writer.png",alt:{zh:"生成收据预览与受限工作区写入",en:"Generation receipt and contained write"}},{src:"/media/repositories/comfyui-production-nodes/dcc-handoff.png",alt:{zh:"面向 DCC 与引擎的批次交接清单",en:"DCC and engine batch handoff manifest"}},{src:"/media/repositories/comfyui-production-nodes/local-generation.png",alt:{zh:"本机 ComfyUI 真实生成结果",en:"Locally generated ComfyUI output"}}]}];function Wt(a,r){return a[r]}const bw=[{id:"unreal-stylized-world",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/kNZDbK",title:{en:"Unreal Engine Stylized World",zh:"Unreal 风格化世界"},cover:"/media/artstation/unreal-stylized-world.jpg",category:{en:"Realtime environment",zh:"实时场景"},summary:{en:"A stylized realtime environment built from a Houdini heightfield HDA, then authored and optimized in Unreal Engine.",zh:"使用 Houdini 生成高度场与散布数据，将 HDA 接入 Unreal Engine，完成风格化材质、植被替换、水面、灯光与后处理。"},process:[{en:"Generated, eroded, and smoothed the terrain in Houdini, with placeholders for rocks and four tree variants.",zh:"在 Houdini 中生成、侵蚀并平滑地形，同时为岩石和四类树木建立程序化散布占位。"},{en:"Built distance-aware terrain, water, grass, and foliage materials in Unreal Engine.",zh:"在 Unreal Engine 中制作分远近层级的地表、水面、草地与植被材质。"},{en:"Completed scene dressing, lighting, sharpening post process, and final realtime presentation.",zh:"完成场景布置、灯光、锐化后处理与最终实时画面。"}],tools:["Unreal Engine","Houdini","HDA","Material Editor"],youtubeId:"GRVpU7MBSTg",featured:!0,images:[{src:"/media/visual-works/world-final.webp",alt:{en:"Final stylized environment in Unreal Engine",zh:"Unreal Engine 中的风格化世界最终画面"},caption:{en:"Final realtime environment",zh:"最终实时场景"}},{src:"/media/visual-works/world-heightfield.webp",alt:{en:"Houdini heightfield and placement visualization",zh:"Houdini 高度场与模型占位可视化"},caption:{en:"Heightfield and procedural placement data",zh:"高度场与程序化散布数据"}}]},{id:"maya-plugin",portfolioCategory:"pipeline",artstationUrl:"https://www.artstation.com/artwork/XJGnR3",title:{en:"Maya Plugin",zh:"Maya 综合工具集"},cover:"/media/artstation/maya-plugin.jpg",category:{en:"DCC tool development",zh:"DCC 工具开发"},summary:{en:"A modular Maya tool suite covering nine production areas, with separated interface and utility layers.",zh:"面向 Maya 生产流程的综合工具集，覆盖属性、绑定、约束、骨骼、控制器、命名、连接、工程与动画九类功能。"},process:[{en:"Separated PySide interfaces from reusable backend utility classes.",zh:"以 PySide 界面层调用后端 Utility 类，拆分交互、业务逻辑与公共功能。"},{en:"Implemented production-oriented operations for rigging, attributes, constraints, naming, and connections.",zh:"实现绑定、属性、约束、命名与驱动连接等面向实际制作的批量操作。"},{en:"Added persistent theme, window state, responsive layout, and contextual tooltips.",zh:"补充主题与窗口状态记忆、弹性布局、字号适配及悬停提示。"}],tools:["Maya","Python","PySide","DCC Pipeline"],youtubeId:"7rUuqI9Pil0",images:[{src:"/media/visual-works/maya-main.webp",alt:{en:"Main Maya plugin window",zh:"Maya 综合工具集主界面"},caption:{en:"Main window and attribute tools",zh:"主窗口与属性工具"}},{src:"/media/visual-works/maya-rig.webp",alt:{en:"Rigging tools in the Maya plugin",zh:"Maya 工具集中的绑定功能"},caption:{en:"Rigging utilities",zh:"绑定工具页"}},{src:"/media/visual-works/maya-connections.webp",alt:{en:"Attribute connection tools",zh:"属性连接与驱动关系工具"},caption:{en:"Connection editor",zh:"属性连接编辑器"}}]},{id:"stylized-road-material",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/Bk918D",title:{en:"Stylized Road Material",zh:"风格化道路材质"},cover:"/media/artstation/stylized-road-material.jpg",category:{en:"Procedural material",zh:"程序化材质"},summary:{en:"A stylized road material authored procedurally in Substance Designer.",zh:"使用 Substance Designer 制作的风格化道路材质，通过 Flood Fill、层级拆分与多层噪声构建砖块、花纹、草地、花瓣、泥土和潮湿变化。"},process:[{en:"Constructed the brick base and spiral motif as reusable procedural patterns.",zh:"程序化构建砖块基底与旋涡纹样，并保持图案参数可调。"},{en:"Used Flood Fill and deformation mixing to break repetition.",zh:"使用 Flood Fill 与形变混合打散重复，建立砖块尺度和方向变化。"},{en:"Layered grass, petals, dirt, moisture, and unified color grading.",zh:"分层加入草地、花瓣、泥土、潮湿区域，最后统一整体色彩。"}],tools:["Substance Designer","Flood Fill","Procedural Material"],youtubeId:"D2jptqFjUZE",images:[{src:"/media/visual-works/road-material.webp",alt:{en:"Final stylized road material",zh:"风格化道路材质最终效果"},caption:{en:"Final material maps and surface",zh:"最终材质与贴图效果"}},{src:"/media/visual-works/road-graph.webp",alt:{en:"Substance Designer material graph",zh:"Substance Designer 材质节点网络"},caption:{en:"Procedural graph",zh:"程序化节点网络"}}]},{id:"rigging-animation",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/vb42ev",title:{en:"Rigging & Animation",zh:"角色绑定与动画"},cover:"/media/artstation/rigging-animation.jpg",category:{en:"Rigging and gameplay",zh:"绑定与游戏角色"},summary:{en:"A complete path from a mechanical character rig in Maya to a playable Unreal Engine character.",zh:"将 T-200 机器人从 Maya 骨骼与控制器绑定推进到 Unreal Engine 过场动画和可操控角色，处理机械轴、武器链条、舱门、灯光与攻击动画。"},process:[{en:"Built a mechanical rig with specialized IK, weapon-chain constraints, doors, ladder, and spotlight controls.",zh:"针对机械结构制作腿部 IK、武器链条约束、舱门、梯子与探照灯控制。"},{en:"Authored a startup cutscene in Level Sequencer.",zh:"在 Level Sequencer 中制作角色进入机体与机器人启动的过场动画。"},{en:"Implemented locomotion, upper-body attack blending, VFX states, and spotlight input.",zh:"通过 AnimGraph 与蓝图实现移动、上半身攻击混合、烟雾状态和探照灯输入。"}],tools:["Maya","Unreal Engine","Sequencer","AnimGraph","Blueprint"],youtubeId:"wd1gCuZZ2EY",featured:!0,images:[{src:"/media/visual-works/rig-result.webp",alt:{en:"Playable T-200 robot in Unreal Engine",zh:"Unreal Engine 中可操控的 T-200 机器人"},caption:{en:"Playable character result",zh:"可操控角色最终效果"}},{src:"/media/visual-works/rig-maya.webp",alt:{en:"Mechanical robot rig in Maya",zh:"Maya 中的机器人机械绑定"},caption:{en:"Maya rig and controls",zh:"Maya 骨骼与控制器"}},{src:"/media/visual-works/rig-animgraph.webp",alt:{en:"Unreal Engine animation graph",zh:"Unreal Engine 动画状态图"},caption:{en:"Animation state and blending",zh:"动画状态与分层混合"}}]},{id:"unity-sdf-shader",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/XJGnQl",title:{en:"Unity SDF Shader",zh:"Unity SDF 体积云 Shader"},cover:"/media/artstation/unity-sdf-shader.jpg",category:{en:"Realtime shader",zh:"实时 Shader"},summary:{en:"A Unity volume-cloud shader using signed distance fields and ray marching.",zh:"在 Unity 中以有向距离场描述云体，使用 Ray Marching 进行密度采样，并结合光线包围盒求交、噪声、吸收和散射计算完成体积云渲染。"},process:[{en:"Combined sphere and box SDF primitives through smooth union and subtraction.",zh:"组合球体与盒体 SDF，并以平滑并集和差集构造可变化的云体形态。"},{en:"Implemented ray-box intersection and density sampling in HLSL.",zh:"在 HLSL 中实现光线与包围盒求交、步进采样和密度计算。"},{en:"Exposed noise, absorption, ambient density, and light intensity for art direction.",zh:"开放噪声、吸收、环境密度与光照强度参数，支持在 Unity Inspector 中调整。"}],tools:["Unity","HLSL","SDF","Ray Marching"],youtubeId:"vSrJBlIisTs",images:[{src:"/media/visual-works/sdf-properties.webp",alt:{en:"Unity SDF shader properties",zh:"Unity SDF Shader 参数定义"},caption:{en:"Artist-facing parameters",zh:"可调渲染参数"}},{src:"/media/visual-works/sdf-raymarch.webp",alt:{en:"Ray marching fragment shader code",zh:"体积云 Ray Marching 片元着色代码"},caption:{en:"Density sampling and lighting",zh:"密度采样与光照计算"}}]},{id:"houdini-lightning",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/5W1Xkg",title:{en:"Houdini Lightning VFX",zh:"Houdini 闪电特效"},cover:"/media/artstation/houdini-lighting.jpg",category:{en:"Procedural VFX",zh:"程序化特效"},summary:{en:"A procedural lightning system that strikes nearby geometry and activates localized destruction.",zh:"使用 Houdini 构建的程序化闪电与破碎交互：电流自动寻找周围目标，生成不同形态与频率的闪电，并在命中位置激活对应刚体簇。"},process:[{en:"Projected source points onto nearby surfaces to establish valid strike targets.",zh:"沿球体法线向周围场景投射散点，筛选有效距离内的闪电命中目标。"},{en:"Built animated lightning forms with curve attributes, VOP noise, particles, and color flow.",zh:"结合曲线属性、VOP 噪声、粒子与颜色流动构建主电流和次级电流。"},{en:"Connected hit regions to clustered rigid-body activation in DOPs.",zh:"在 DOP 中将命中区域连接到预切割刚体簇，实现局部优先崩解。"}],tools:["Houdini","VOP","DOP","Particles","Rigid Bodies"],images:[{src:"/media/visual-works/lightning-form.webp",alt:{en:"Procedural lightning curves",zh:"程序化生成的闪电曲线"},caption:{en:"Lightning form generation",zh:"闪电形态生成"}},{src:"/media/visual-works/lightning-stream.webp",alt:{en:"Secondary electric current effect",zh:"次级电流与颜色流动效果"},caption:{en:"Secondary current",zh:"次级电流效果"}},{src:"/media/visual-works/lightning-destruction.webp",alt:{en:"Wall destruction driven by lightning strikes",zh:"闪电命中驱动的墙体破碎"},caption:{en:"Strike-driven rigid-body destruction",zh:"命中驱动的刚体破碎"}}]},{id:"houdini-cluster",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/Zl3GrN",title:{en:"Houdini Interactive Cluster",zh:"Houdini 交互式花簇"},cover:"/media/artstation/houdini-cluster.jpg",category:{en:"Procedural interaction",zh:"程序化交互"},summary:{en:"A fully procedural flower cluster that bends and blooms in response to a moving reference point.",zh:"完全由 Houdini 程序生成的交互式花簇。参考点靠近时，花茎会向目标弯曲并逐渐开放；远离后则恢复闭合状态。"},process:[{en:"Scattered stems and used VEX to calculate distance-attenuated orientation toward the target.",zh:"散布花茎，并用 VEX 计算指向目标的方向、距离衰减、噪声和平滑。"},{en:"Generated petal rings and blended their normals by target proximity.",zh:"程序化生成花瓣环，根据参考点距离混合花瓣法线以控制开合。"},{en:"Added randomized orientation and color variation without external models.",zh:"不依赖外部模型，为花簇加入方向扰动和颜色变化，完成整体生成网络。"}],tools:["Houdini","VEX","Procedural Modeling","Interaction"],images:[{src:"/media/visual-works/cluster-response.webp",alt:{en:"Flower cluster responding to a reference point",zh:"花簇对参考点产生弯曲与开放响应"},caption:{en:"Interactive bloom response",zh:"交互式开放效果"}},{src:"/media/visual-works/cluster-network.webp",alt:{en:"Complete Houdini flower network",zh:"Houdini 花簇完整节点网络"},caption:{en:"Complete procedural network",zh:"完整程序化网络"}}]},{id:"unreal-vfx",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/oJWA5k",title:{en:"Unreal Engine VFX",zh:"Unreal 水墨战斗特效"},cover:"/media/artstation/unreal-vfx.jpg",category:{en:"Realtime VFX",zh:"实时特效"},summary:{en:"A Chinese ink-inspired combat VFX set built across Unreal materials, Niagara, animation, and post process.",zh:"以中国水墨视觉为方向，综合 Unreal 材质、Niagara、动画通知、Sequencer 与后处理，制作刀光、地裂、墨迹喷溅、聚合和画面冲击效果。"},process:[{en:"Created trail meshes and materials for dissolution, blur, refraction, cracks, and screen distortion.",zh:"制作刀光轨迹网格，以及溶解、拖尾、折射、裂纹和屏幕扰动材质。"},{en:"Layered multiple Niagara systems for blade arcs, dust, smoke, ink splashes, stones, and cohesion.",zh:"分层组合刀光、尘土、烟雾、墨迹喷溅、碎石和聚合等 Niagara 系统。"},{en:"Triggered VFX through animation slots and notifies, then added impact post process.",zh:"通过动画 Slot 与 Notify 触发特效，并在重击阶段加入水墨与模糊后处理。"}],tools:["Unreal Engine","Niagara","Material Editor","Animation"],youtubeId:"hbdYTygLQBw",images:[{src:"/media/visual-works/vfx-blade.webp",alt:{en:"Layered sword trail effect",zh:"多层组合的水墨刀光效果"},caption:{en:"Sword trail composition",zh:"刀光特效组合"}},{src:"/media/visual-works/vfx-ground.webp",alt:{en:"Large-scale ink ground fissure effect",zh:"大范围水墨地裂效果"},caption:{en:"Ground fissure layers",zh:"地裂效果分层"}},{src:"/media/visual-works/vfx-final.webp",alt:{en:"Final combat VFX in Unreal Engine",zh:"Unreal Engine 水墨战斗特效最终画面"},caption:{en:"Final realtime presentation",zh:"最终实时画面"}}]},{id:"houdini-tower",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/nJWYm1",title:{en:"Houdini PCG Tower",zh:"Houdini 程序化高塔"},cover:"/media/artstation/houdini-pcg-tower.jpg",category:{en:"Procedural modeling",zh:"程序化建模"},summary:{en:"A parameterized tower generator with independently authored walls, columns, transitions, body, and top.",zh:"在 Houdini 中拆分墙体、立柱、过渡结构、塔身与塔顶五个模块，建立相互约束的参数化生成逻辑，并生成可直接应用材质的 UV。"},process:[{en:"Built modular wall, window, pillar, railing, body, and roof generators.",zh:"分别构建墙体与窗框、立柱、栏杆、塔身装饰和塔顶结构生成器。"},{en:"Used normals, edge groups, VOP-authored attributes, loops, and resampling to control structure.",zh:"使用法线、边组、VOP 属性、循环和重采样控制结构细节与拼装位置。"},{en:"Exposed base, body, and top parameters while maintaining valid joins and UVs.",zh:"将底座、塔身与塔顶参数集中开放，并保持模块衔接和 UV 结果有效。"}],tools:["Houdini","Procedural Modeling","VOP","UV"],youtubeId:"IxTV5AredLw",images:[{src:"/media/visual-works/tower-wall.webp",alt:{en:"Procedural wall and window module",zh:"程序化墙体与窗框模块"},caption:{en:"Wall generator",zh:"墙体生成模块"}},{src:"/media/visual-works/tower-body.webp",alt:{en:"Assembled procedural tower body",zh:"组合后的程序化塔身"},caption:{en:"Tower body assembly",zh:"塔身模块组合"}},{src:"/media/visual-works/tower-top.webp",alt:{en:"Procedural tower top assembly",zh:"程序化塔顶结构"},caption:{en:"Tower top module",zh:"塔顶生成模块"}}]}],Sw=`# Houdini Interactive Cluster\r
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
`,Tw=`# Houdini 交互式花簇\r
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
`,Aw=`# Houdini Lightning VFX\r
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
`,ww=`# Houdini 闪电特效\r
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
`,Ew=`# Houdini PCG Tower\r
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
`,Cw=`# Houdini PCG 塔楼\r
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
`,zw=`# Maya Plugin\r
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
`,xw=`# Maya 插件\r
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
`,Mw=`# Rigging & Animation\r
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
`,Dw=`# 绑定与动画\r
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
`,Uw=`# Stylized Road Material\r
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
`,Rw=`# 风格化道路材质\r
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
`,Ow=`# Unity SDF Shader\r
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
`,Vw=`# Unity SDF 着色器\r
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
`,jw=`# Unreal Engine Stylized World\r
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
`,Bw=`# Unreal Engine 风格化世界\r
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
`,Lw=`# Unreal Engine VFX\r
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
`,Nw=`# Unreal Engine VFX\r
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
`,_w={"unreal-stylized-world":{zh:Bw,en:jw},"maya-plugin":{zh:xw,en:zw},"stylized-road-material":{zh:Rw,en:Uw},"rigging-animation":{zh:Dw,en:Mw},"unity-sdf-shader":{zh:Vw,en:Ow},"houdini-lightning":{zh:ww,en:Aw},"houdini-cluster":{zh:Tw,en:Sw},"unreal-vfx":{zh:Nw,en:Lw},"houdini-tower":{zh:Cw,en:Ew}},Ev=/^!\[(.*?)\]\((.*?)\)$/,Cv=/^@\[video(?::\s*(.*?))?\]\((.*?)\)$/,zv=/^(#{1,6})\s+(.+)$/,Uc=/^\s*-\s+(.+)$/,Rc=/^\s*\d+\.\s+(.+)$/,kw=/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)]+)/g;function to(a){return a.replace(/^\s*>\s?/,"").trimEnd()}function Hw(a){const r=to(a).trim();return!r||r==="<aside>"||r==="</aside>"||Ev.test(r)||Cv.test(r)||zv.test(r)||Uc.test(r)||Rc.test(r)}function Gw(a){const r=a.replace(/\r\n/g,`
`).split(`
`),o=[];for(let l=0;l<r.length;){const c=to(r[l]).trim();if(!c||c==="<aside>"||c==="</aside>"){l+=1;continue}const h=c.match(Ev);if(h){o.push({type:"image",alt:h[1],src:h[2]}),l+=1;continue}const f=c.match(Cv);if(f){o.push({type:"video",caption:f[1]??"",src:f[2]}),l+=1;continue}const g=c.match(zv);if(g){o.push({type:"heading",level:g[1].length,text:g[2].replace(/^\*\*|\*\*$/g,"")}),l+=1;continue}const y=c.match(Uc),m=c.match(Rc);if(y||m){const b=!!m,S=[];for(;l<r.length;){const M=to(r[l]).trim().match(b?Rc:Uc);if(!M)break;S.push(M[1]),l+=1}o.push({type:"list",ordered:b,items:S});continue}const v=[c];for(l+=1;l<r.length&&!Hw(r[l]);)v.push(to(r[l]).trim()),l+=1;o.push({type:"paragraph",text:v.join(" ")})}return o}function Pw(a){let r=a;for(let c=0;c<2;c+=1)try{r=decodeURIComponent(r)}catch{break}if(r==="image.png")return"/media/notion/image-000.webp";if(r==="texture.png")return"/media/notion/texture.webp";if(r==="PixPin_2024-11-13_18-17-55.gif")return"/media/notion/vfx-fluctuation.gif";const o=r.match(/^image (\d+)\.png$/);if(o)return`/media/notion/image-${o[1]}.webp`;const l=r.match(/^图片(\d+)\.png$/);return l?`/media/notion/cover-${l[1]}.webp`:a}function rc(a){return a.split(kw).filter(Boolean).map((r,o)=>{if(r.startsWith("`")&&r.endsWith("`"))return U.jsx("code",{children:r.slice(1,-1)},o);if(r.startsWith("**")&&r.endsWith("**"))return U.jsx("strong",{children:r.slice(2,-2)},o);const l=r.match(/^\[([^\]]+)\]\(([^)]+)\)$/);return l?U.jsx("a",{href:l[2],target:"_blank",rel:"noreferrer",children:l[1]},o):/^https?:\/\//.test(r)?U.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:r},o):r})}function sd({markdown:a,title:r}){const o=Gw(a),l=o.findIndex(c=>c.type==="heading"&&c.level===1);return U.jsx("div",{className:"notion-story",children:o.map((c,h)=>{if(h===l)return null;if(c.type==="image")return U.jsx("figure",{children:U.jsx("img",{src:Pw(c.src),alt:c.alt||r,loading:"lazy"})},`${c.src}-${h}`);if(c.type==="video")return U.jsxs("figure",{className:"story-video",children:[U.jsx("video",{src:c.src,controls:!0,preload:"metadata",playsInline:!0}),c.caption&&U.jsx("figcaption",{children:c.caption})]},`${c.src}-${h}`);if(c.type==="heading"){const f=c.level<=2?"h3":"h4";return U.jsx(f,{children:rc(c.text)},h)}if(c.type==="list"){const f=c.ordered?"ol":"ul";return U.jsx(f,{children:c.items.map((g,y)=>U.jsx("li",{children:rc(g)},`${g}-${y}`))},h)}return U.jsx("p",{children:rc(c.text)},h)})})}const qw=[{id:"all",zh:"全部作品",en:"All work"},{id:"pipeline",zh:"工具管线",en:"Tool pipelines"},{id:"engine-games",zh:"引擎与游戏",en:"Engines & games"},{id:"general-ta",zh:"通用技术美术技能",en:"General technical art"},{id:"other-tools",zh:"部分其他工具",en:"Selected other tools"}],jg=new Map(["art-pipeline-skill","rez-studio-launcher","internship-art-pipeline","maya-garment-preparation","mayascope","comfyui-production-nodes","mayacraft","asset-delivery-organizer","maya-scene-checker","maya-plugin"].map((a,r)=>[a,r])),Bg=new Map(["lyra-hero-arena","siggraph-physics-lab","lyra-performance-lab","artflow-agent","ue-performance-workbench","noemancer","unreal-asset-batch-auditor","noemancer-software-rasterizer","resonance-forge"].map((a,r)=>[a,r])),Lg=new Map([["pipeline",0],["engine-games",1],["ai-agent",2],["general-ta",3],["other-tools",4]]);function Xw(){const{locale:a}=fi(),r=Av()??!1,[o,l]=J.useState("all"),[c,h]=J.useState(null),f=J.useRef(null),g=J.useMemo(()=>[...vw.map(z=>({kind:"repository",id:z.id,category:z.category,title:z.title,label:Wt(z.categoryLabel,a),summary:Wt(z.summary,a),cover:z.cover,tags:z.tags,value:z})),...bw.map(z=>({kind:"visual",id:z.id,category:z.portfolioCategory,title:Wt(z.title,a),label:Wt(z.category,a),summary:Wt(z.summary,a),cover:z.cover,tags:z.tools,value:z})),...ow.map(z=>({kind:"project",id:z.id,category:z.portfolioCategory,title:z.title,label:In(z.category,a),summary:In(z.summary,a),cover:z.images[0].src,tags:z.stack,value:z}))].map((z,M)=>({item:z,sourceIndex:M})).sort((z,M)=>{const N=(Lg.get(z.item.category)??Number.MAX_SAFE_INTEGER)-(Lg.get(M.item.category)??Number.MAX_SAFE_INTEGER);return N!==0?N:z.item.category==="pipeline"?(jg.get(z.item.id)??Number.MAX_SAFE_INTEGER)-(jg.get(M.item.id)??Number.MAX_SAFE_INTEGER):z.item.category==="engine-games"?(Bg.get(z.item.id)??Number.MAX_SAFE_INTEGER)-(Bg.get(M.item.id)??Number.MAX_SAFE_INTEGER):z.sourceIndex-M.sourceIndex}).map(({item:z})=>z),[a]),y=o==="all"?g:g.filter(S=>S.category===o),m=(S,z="replace")=>{const M=new URL(window.location.href);S?M.searchParams.set("work",S):M.searchParams.delete("work"),window.history[z==="push"?"pushState":"replaceState"]({},"",`${M.pathname}${M.search}${M.hash}`)},v=S=>{m(S.id,"push"),h(S)},b=()=>{m(null),h(null)};return J.useEffect(()=>{const S=()=>{const z=new URLSearchParams(window.location.search).get("work");h(z?g.find(M=>M.id===z)??null:null)};return S(),window.addEventListener("popstate",S),()=>window.removeEventListener("popstate",S)},[g]),J.useEffect(()=>{const S=f.current;if(S)return c?(S.open||S.showModal(),S.scrollTop=0,document.body.classList.add("has-project-dialog")):(S.open&&S.close(),document.body.classList.remove("has-project-dialog")),()=>document.body.classList.remove("has-project-dialog")},[c]),U.jsxs("section",{id:"portfolio",className:"portfolio-gallery","aria-labelledby":"portfolio-title",children:[U.jsxs("header",{className:"portfolio-gallery-header",children:[U.jsxs("div",{children:[U.jsx("h2",{id:"portfolio-title",children:a==="zh"?"作品":"Work"}),U.jsx("span",{children:String(g.length).padStart(2,"0")})]}),U.jsx("p",{children:a==="zh"?"完整图文、演示与源码链接集中收录于各项目详情。":"Full case studies, demos, and source links are collected in each project detail."})]}),U.jsx("div",{className:"portfolio-filters",role:"group","aria-label":a==="zh"?"筛选作品":"Filter work",children:qw.map(S=>U.jsx("button",{type:"button","data-filter":S.id,className:o===S.id?"is-active":"","aria-pressed":o===S.id,onClick:()=>l(S.id),children:a==="zh"?S.zh:S.en},S.id))}),U.jsx("div",{className:"portfolio-grid",children:y.map(S=>U.jsxs(wv.button,{type:"button",className:"portfolio-tile","data-category":S.category,onClick:()=>v(S),whileHover:r?void 0:{y:-4},transition:{duration:.18},children:[U.jsx("figure",{children:U.jsx("img",{src:S.cover,alt:"",loading:"eager"})}),U.jsxs("div",{className:"portfolio-tile-copy",children:[U.jsx("small",{children:S.label}),U.jsx("h3",{children:S.title}),U.jsx("p",{children:S.summary}),U.jsx("div",{children:S.tags.slice(0,4).map(z=>U.jsx("span",{children:z},z))})]})]},`${S.kind}-${S.id}`))}),U.jsx("dialog",{ref:f,className:`project-dialog unified-dialog ${c?.kind==="visual"?"visual-work-dialog":""}`,onCancel:S=>{S.preventDefault(),b()},onClose:b,onClick:S=>{S.target===S.currentTarget&&b()},children:c&&U.jsx(Yw,{item:c,locale:a,close:b})})]})}function Yw({item:a,locale:r,close:o}){const l=Av()??!1;return U.jsxs(wv.article,{initial:l?!1:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.2},children:[U.jsx("button",{className:"project-dialog-close",type:"button",onClick:o,"aria-label":r==="zh"?"关闭项目详情":"Close project details",children:"×"}),U.jsxs("div",{className:"project-dialog-heading",children:[U.jsxs("p",{children:[a.label," · ",a.tags.join(" · ")]}),U.jsx("h2",{children:a.title}),U.jsx("p",{children:a.summary})]}),a.kind==="repository"&&U.jsx(Iw,{work:a.value,locale:r}),a.kind==="visual"&&U.jsx(Fw,{work:a.value,locale:r}),a.kind==="project"&&U.jsx(Kw,{project:a.value,locale:r})]},`${a.kind}-${a.id}`)}function Iw({work:a,locale:r}){const o=a.images?.filter(c=>c.src!==a.cover)??[],l=a.id==="noemancer"||a.id==="artflow-agent"?"cover":"contain";return U.jsxs(U.Fragment,{children:[a.repositoryUrl&&U.jsxs("a",{className:"project-dialog-source",href:a.repositoryUrl,target:"_blank",rel:"noreferrer",children:[U.jsx("span",{children:r==="zh"?"查看 GitHub 仓库":"View GitHub repository"}),U.jsx("span",{"aria-hidden":"true",children:"↗"})]}),U.jsx(Qw,{src:a.cover,alt:`${a.title} ${r==="zh"?"项目画面":"project view"}`,fit:l}),U.jsx(sd,{markdown:Wt(a.story,r),title:a.title}),o.length>0&&U.jsx(Zw,{fit:"contain",images:o.map(c=>({src:c.src,alt:Wt(c.alt,r),caption:Wt(c.alt,r)}))})]})}function Fw({work:a,locale:r}){return U.jsxs(U.Fragment,{children:[U.jsxs("a",{className:"project-dialog-source",href:a.artstationUrl,target:"_blank",rel:"noreferrer",children:[U.jsx("span",{children:r==="zh"?"查看原始 ArtStation 项目":"View the original ArtStation project"}),U.jsx("span",{"aria-hidden":"true",children:"↗"})]}),a.youtubeId&&U.jsx(xv,{youtubeId:a.youtubeId,title:Wt(a.title,r)}),U.jsx(sd,{markdown:_w[a.id][r],title:Wt(a.title,r)})]})}function Kw({project:a,locale:r}){return U.jsxs(U.Fragment,{children:[a.link&&U.jsxs("a",{className:"project-dialog-source",href:a.link.href,target:"_blank",rel:"noreferrer",children:[U.jsx("span",{children:In(a.link.label,r)}),U.jsx("span",{"aria-hidden":"true",children:"↗"})]}),a.youtubeId&&U.jsx(xv,{youtubeId:a.youtubeId,title:a.title}),Vg[a.id]?U.jsx(sd,{markdown:Vg[a.id][r],title:a.title}):a.story&&U.jsxs("section",{className:"project-dialog-story",children:[U.jsx("h3",{children:In(a.story.title,r)}),U.jsx("p",{children:In(a.story.intro,r)}),U.jsx("h4",{children:r==="zh"?"玩法与特色":"Gameplay & Features"}),U.jsx("dl",{children:a.story.features.map(o=>U.jsxs("div",{children:[U.jsx("dt",{children:In(o.title,r)}),U.jsx("dd",{children:In(o.detail,r)})]},o.title.en))}),a.story.note&&U.jsx("p",{className:"project-dialog-note",children:In(a.story.note,r)})]})]})}function Qw({src:a,alt:r,fit:o}){return U.jsx("figure",{className:`project-dialog-lead-media ${o==="contain"?"is-contain":""}`,children:U.jsx("img",{src:a,alt:r})})}function xv({youtubeId:a,title:r}){return U.jsx("div",{className:"project-dialog-video",children:U.jsx("iframe",{src:`https://www.youtube-nocookie.com/embed/${a}?rel=0`,title:`${r} demo video`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})})}function Zw({images:a,fit:r="cover"}){return U.jsx("div",{className:`project-dialog-gallery ${r==="contain"?"is-contain":""}`,children:a.map(o=>U.jsxs("figure",{children:[U.jsx("img",{src:o.src,alt:o.alt,style:{objectPosition:o.position},loading:"lazy"}),o.caption&&U.jsx("figcaption",{children:o.caption})]},o.src))})}function Jw(){const{locale:a,copy:r}=fi();return U.jsxs("div",{className:"site","data-locale":a,children:[U.jsx("a",{className:"skip-link",href:"#main",children:a==="zh"?"跳到主要内容":"Skip to main content"}),U.jsx("span",{id:"top"}),U.jsx(c2,{}),U.jsxs("main",{id:"main",children:[U.jsx(d2,{}),U.jsx(Xw,{})]}),U.jsx(l2,{}),U.jsx("div",{className:"locale-status sr-only","aria-live":"polite",children:r.language.changed})]})}const Ww={en:{meta:{title:"Lucas Shen | AI Tool-Pipeline TA & Engine Tools",description:"Games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines by Lucas Shen."},nav:{work:"Projects",practice:"Experience",links:"Links",aria:"Primary navigation"},language:{label:"Language",english:"English",changed:"Language changed to English."},hero:{role:"AI Tool-Pipeline TA & Engine Tool Development",primaryAction:"Selected projects"},personal:{intro:"My work spans games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines, with running builds, project captures, and implementation details.",storyAction:"About me",aboutTitle:"About me",aboutBody:["I’m Lucas, a technical artist from China. My path crosses industrial engineering, game development, realtime graphics, and production tools. That mix helps me move between an artist’s problem and the system behind it.","I enjoy reverse-engineering workflows, turning repeated work into tools, and testing where AI is genuinely useful. Outside the toolchain, I keep learning through games, animation, music, graphics experiments, and public documentation."],traits:[{title:"What I work on",detail:"DCC tools, AI workflows, realtime graphics, games, and animation."},{title:"How I learn",detail:"Build a real workflow, inspect the evidence, then improve the system."},{title:"How I collaborate",detail:"Keep creative decisions human and make repeated production steps dependable."}],linksTitle:"Public channels",linksIntro:"Code, visual work, demos, and ongoing notes live across these profiles.",social:[{name:"GitHub",detail:"Code, tools, and public engineering evidence.",href:"https://github.com/Ubik42",mark:"GH"},{name:"Visual work",detail:"Realtime graphics, materials, shaders, rigging, and procedural work.",href:"#visual-work",mark:"TA"},{name:"Bilibili",detail:"Tool demos, tutorials, and longer videos.",href:"https://space.bilibili.com/12367861?spm_id_from=333.1007.0.0",mark:"Bi"},{name:"Xiaohongshu",detail:"Notes, resources, and everyday discoveries.",href:"https://www.xiaohongshu.com/user/profile/670526b2000000001e001891",mark:"RED"}]},practice:{title:"Experience and education",items:[{period:"2026.03 – 2026.08",title:"AI Tool Technical Artist Intern",place:"Tencent Photon",detail:"Built AI-assisted production tools across DCC, engine, and design workflows, with explicit execution and review boundaries."},{period:"2025.08 – 2027.05",title:"M.S. in EAE, Technical Art",place:"University of Utah",detail:"Studying realtime graphics, tools, pipelines, and collaborative game production in Entertainment Arts and Engineering."},{period:"2020.09 – 2024.06",title:"B.S. in Industrial Engineering",place:"Shanghai Jiao Tong University",detail:"Built a systems and optimization foundation, then applied it through game systems, UE5 client work, and industrial digital twins."}]},footer:{copyright:"Lucas (Yuyan) Shen / 沈裕焱"}},zh:{meta:{title:"沈裕焱 | AI 工具管线 TA & 引擎工具开发",description:"沈裕焱的游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线作品集。"},nav:{work:"作品",practice:"经历",links:"链接",aria:"主导航"},language:{label:"语言",english:"English",changed:"语言已切换为中文。"},hero:{role:"AI 工具管线 TA & 引擎工具开发",primaryAction:"项目作品"},personal:{intro:"作品覆盖游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线，包含运行画面、项目素材和具体实现。",storyAction:"关于我",aboutTitle:"关于我",aboutBody:["我是沈裕焱，一名来自中国的技术美术。我的经历横跨工业工程、游戏开发、实时图形和生产工具，因此我习惯同时理解创作者遇到的问题，以及问题背后的代码与系统。","我喜欢拆解工作流，把重复劳动做成工具，也会认真验证 AI 适合参与哪一步。工具之外，我持续从游戏、动画、音乐、图形实验和公开文档中学习。"],traits:[{title:"我在做什么",detail:"DCC 工具、AI 工作流、实时图形、游戏与动画。"},{title:"我的学习方式",detail:"先做出真实工作流，检查证据，再改进整个系统。"},{title:"我的协作方式",detail:"让创作决定留给人，让重复的生产环节变得可靠。"}],linksTitle:"公开渠道",linksIntro:"代码、视觉作品、演示和持续记录分布在这些公开主页中。",social:[{name:"GitHub",detail:"代码、工具与公开工程证据。",href:"https://github.com/Ubik42",mark:"GH"},{name:"视觉作品",detail:"实时场景、材质、Shader、绑定与程序化内容。",href:"#visual-work",mark:"TA"},{name:"哔哩哔哩",detail:"工具演示、教程和长视频。",href:"https://space.bilibili.com/12367861?spm_id_from=333.1007.0.0",mark:"Bi"},{name:"小红书",detail:"笔记、资源和日常发现。",href:"https://www.xiaohongshu.com/user/profile/670526b2000000001e001891",mark:"RED"}]},practice:{title:"经历与教育",items:[{period:"2026.03 – 2026.08",title:"AI 工具技术美术实习生",place:"腾讯光子",detail:"围绕 DCC、引擎与设计流程开发 AI 辅助美术生产工具，覆盖工具接入、执行边界与人工审查。"},{period:"2025.08 – 2027.05",title:"EAE 技术美术硕士",place:"犹他大学",detail:"在 Entertainment Arts and Engineering 项目中学习实时图形、工具、管线与协作式游戏生产。"},{period:"2020.09 – 2024.06",title:"工业工程学士",place:"上海交通大学",detail:"建立优化与系统方法基础，并逐步扩展到游戏系统、UE5 客户端与工业数字孪生开发。"}]},footer:{copyright:"Lucas (Yuyan) Shen / 沈裕焱"}}},Mv="portfolio.locale.v2";function $w(){try{const a=window.localStorage.getItem(Mv);if(a==="en"||a==="zh")return a}catch{}return"zh"}function eE(a){const r=document.querySelector('meta[name="description"]');r&&(r.content=a)}function tE({children:a}){const[r,o]=J.useState($w),l=Ww[r];J.useEffect(()=>{document.documentElement.lang=r==="zh"?"zh-CN":"en",document.title=l.meta.title,eE(l.meta.description);try{window.localStorage.setItem(Mv,r)}catch{}},[l.meta.description,l.meta.title,r]);const c=J.useMemo(()=>({locale:r,copy:l,setLocale(h){J.startTransition(()=>o(h))}}),[l,r]);return U.jsx(Ng,{value:c,children:a})}o2.createRoot(document.getElementById("root")).render(U.jsx(J.StrictMode,{children:U.jsx(tE,{children:U.jsx(Jw,{})})}));
//# sourceMappingURL=index-Nrg7kQFH-portfolio-refresh.js.map
