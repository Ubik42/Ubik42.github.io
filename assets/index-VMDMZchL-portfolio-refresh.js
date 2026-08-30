(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(c){if(c.ep)return;c.ep=!0;const h=o(c);fetch(c.href,h)}})();var Lu={exports:{}},ur={};var ug;function Jb(){if(ug)return ur;ug=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(l,c,h){var d=null;if(h!==void 0&&(d=""+h),c.key!==void 0&&(d=""+c.key),"key"in c){h={};for(var p in c)p!=="key"&&(h[p]=c[p])}else h=c;return c=h.ref,{$$typeof:a,type:l,key:d,ref:c!==void 0?c:null,props:h}}return ur.Fragment=r,ur.jsx=o,ur.jsxs=o,ur}var cg;function Wb(){return cg||(cg=1,Lu.exports=Jb()),Lu.exports}var x=Wb(),_u={exports:{}},ae={};var fg;function $b(){if(fg)return ae;fg=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),w=Symbol.iterator;function N(A){return A===null||typeof A!="object"?null:(A=w&&A[w]||A["@@iterator"],typeof A=="function"?A:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,H={};function _(A,B,q){this.props=A,this.context=B,this.refs=H,this.updater=q||U}_.prototype.isReactComponent={},_.prototype.setState=function(A,B){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,B,"setState")},_.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function X(){}X.prototype=_.prototype;function k(A,B,q){this.props=A,this.context=B,this.refs=H,this.updater=q||U}var P=k.prototype=new X;P.constructor=k,L(P,_.prototype),P.isPureReactComponent=!0;var ne=Array.isArray;function le(){}var K={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function ze(A,B,q){var Z=q.ref;return{$$typeof:a,type:A,key:B,ref:Z!==void 0?Z:null,props:q}}function te(A,B){return ze(A.type,B,A.props)}function ve(A){return typeof A=="object"&&A!==null&&A.$$typeof===a}function Te(A){var B={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(q){return B[q]})}var rt=/\/+/g;function Ge(A,B){return typeof A=="object"&&A!==null&&A.key!=null?Te(""+A.key):B.toString(36)}function Le(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(le,le):(A.status="pending",A.then(function(B){A.status==="pending"&&(A.status="fulfilled",A.value=B)},function(B){A.status==="pending"&&(A.status="rejected",A.reason=B)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function R(A,B,q,Z,ie){var ue=typeof A;(ue==="undefined"||ue==="boolean")&&(A=null);var Se=!1;if(A===null)Se=!0;else switch(ue){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(A.$$typeof){case a:case r:Se=!0;break;case y:return Se=A._init,R(Se(A._payload),B,q,Z,ie)}}if(Se)return ie=ie(A),Se=Z===""?"."+Ge(A,0):Z,ne(ie)?(q="",Se!=null&&(q=Se.replace(rt,"$&/")+"/"),R(ie,B,q,"",function(pi){return pi})):ie!=null&&(ve(ie)&&(ie=te(ie,q+(ie.key==null||A&&A.key===ie.key?"":(""+ie.key).replace(rt,"$&/")+"/")+Se)),B.push(ie)),1;Se=0;var st=Z===""?".":Z+":";if(ne(A))for(var _e=0;_e<A.length;_e++)Z=A[_e],ue=st+Ge(Z,_e),Se+=R(Z,B,q,ue,ie);else if(_e=N(A),typeof _e=="function")for(A=_e.call(A),_e=0;!(Z=A.next()).done;)Z=Z.value,ue=st+Ge(Z,_e++),Se+=R(Z,B,q,ue,ie);else if(ue==="object"){if(typeof A.then=="function")return R(Le(A),B,q,Z,ie);throw B=String(A),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return Se}function G(A,B,q){if(A==null)return A;var Z=[],ie=0;return R(A,Z,"","",function(ue){return B.call(q,ue,ie++)}),Z}function Y(A){if(A._status===-1){var B=A._result;B=B(),B.then(function(q){(A._status===0||A._status===-1)&&(A._status=1,A._result=q)},function(q){(A._status===0||A._status===-1)&&(A._status=2,A._result=q)}),A._status===-1&&(A._status=0,A._result=B)}if(A._status===1)return A._result.default;throw A._result}var se=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},me={map:G,forEach:function(A,B,q){G(A,function(){B.apply(this,arguments)},q)},count:function(A){var B=0;return G(A,function(){B++}),B},toArray:function(A){return G(A,function(B){return B})||[]},only:function(A){if(!ve(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ae.Activity=b,ae.Children=me,ae.Component=_,ae.Fragment=o,ae.Profiler=c,ae.PureComponent=k,ae.StrictMode=l,ae.Suspense=v,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,ae.__COMPILER_RUNTIME={__proto__:null,c:function(A){return K.H.useMemoCache(A)}},ae.cache=function(A){return function(){return A.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(A,B,q){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var Z=L({},A.props),ie=A.key;if(B!=null)for(ue in B.key!==void 0&&(ie=""+B.key),B)!W.call(B,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&B.ref===void 0||(Z[ue]=B[ue]);var ue=arguments.length-2;if(ue===1)Z.children=q;else if(1<ue){for(var Se=Array(ue),st=0;st<ue;st++)Se[st]=arguments[st+2];Z.children=Se}return ze(A.type,ie,Z)},ae.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:h,_context:A},A},ae.createElement=function(A,B,q){var Z,ie={},ue=null;if(B!=null)for(Z in B.key!==void 0&&(ue=""+B.key),B)W.call(B,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ie[Z]=B[Z]);var Se=arguments.length-2;if(Se===1)ie.children=q;else if(1<Se){for(var st=Array(Se),_e=0;_e<Se;_e++)st[_e]=arguments[_e+2];ie.children=st}if(A&&A.defaultProps)for(Z in Se=A.defaultProps,Se)ie[Z]===void 0&&(ie[Z]=Se[Z]);return ze(A,ue,ie)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(A){return{$$typeof:p,render:A}},ae.isValidElement=ve,ae.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:Y}},ae.memo=function(A,B){return{$$typeof:m,type:A,compare:B===void 0?null:B}},ae.startTransition=function(A){var B=K.T,q={};K.T=q;try{var Z=A(),ie=K.S;ie!==null&&ie(q,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(le,se)}catch(ue){se(ue)}finally{B!==null&&q.types!==null&&(B.types=q.types),K.T=B}},ae.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},ae.use=function(A){return K.H.use(A)},ae.useActionState=function(A,B,q){return K.H.useActionState(A,B,q)},ae.useCallback=function(A,B){return K.H.useCallback(A,B)},ae.useContext=function(A){return K.H.useContext(A)},ae.useDebugValue=function(){},ae.useDeferredValue=function(A,B){return K.H.useDeferredValue(A,B)},ae.useEffect=function(A,B){return K.H.useEffect(A,B)},ae.useEffectEvent=function(A){return K.H.useEffectEvent(A)},ae.useId=function(){return K.H.useId()},ae.useImperativeHandle=function(A,B,q){return K.H.useImperativeHandle(A,B,q)},ae.useInsertionEffect=function(A,B){return K.H.useInsertionEffect(A,B)},ae.useLayoutEffect=function(A,B){return K.H.useLayoutEffect(A,B)},ae.useMemo=function(A,B){return K.H.useMemo(A,B)},ae.useOptimistic=function(A,B){return K.H.useOptimistic(A,B)},ae.useReducer=function(A,B,q){return K.H.useReducer(A,B,q)},ae.useRef=function(A){return K.H.useRef(A)},ae.useState=function(A){return K.H.useState(A)},ae.useSyncExternalStore=function(A,B,q){return K.H.useSyncExternalStore(A,B,q)},ae.useTransition=function(){return K.H.useTransition()},ae.version="19.2.8",ae}var dg;function Oc(){return dg||(dg=1,_u.exports=$b()),_u.exports}var J=Oc(),Hu={exports:{}},cr={},ku={exports:{}},Gu={};var hg;function e2(){return hg||(hg=1,(function(a){function r(R,G){var Y=R.length;R.push(G);e:for(;0<Y;){var se=Y-1>>>1,me=R[se];if(0<c(me,G))R[se]=G,R[Y]=me,Y=se;else break e}}function o(R){return R.length===0?null:R[0]}function l(R){if(R.length===0)return null;var G=R[0],Y=R.pop();if(Y!==G){R[0]=Y;e:for(var se=0,me=R.length,A=me>>>1;se<A;){var B=2*(se+1)-1,q=R[B],Z=B+1,ie=R[Z];if(0>c(q,Y))Z<me&&0>c(ie,q)?(R[se]=ie,R[Z]=Y,se=Z):(R[se]=q,R[B]=Y,se=B);else if(Z<me&&0>c(ie,Y))R[se]=ie,R[Z]=Y,se=Z;else break e}}return G}function c(R,G){var Y=R.sortIndex-G.sortIndex;return Y!==0?Y:R.id-G.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var d=Date,p=d.now();a.unstable_now=function(){return d.now()-p}}var v=[],m=[],y=1,b=null,w=3,N=!1,U=!1,L=!1,H=!1,_=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function P(R){for(var G=o(m);G!==null;){if(G.callback===null)l(m);else if(G.startTime<=R)l(m),G.sortIndex=G.expirationTime,r(v,G);else break;G=o(m)}}function ne(R){if(L=!1,P(R),!U)if(o(v)!==null)U=!0,le||(le=!0,Te());else{var G=o(m);G!==null&&Le(ne,G.startTime-R)}}var le=!1,K=-1,W=5,ze=-1;function te(){return H?!0:!(a.unstable_now()-ze<W)}function ve(){if(H=!1,le){var R=a.unstable_now();ze=R;var G=!0;try{e:{U=!1,L&&(L=!1,X(K),K=-1),N=!0;var Y=w;try{t:{for(P(R),b=o(v);b!==null&&!(b.expirationTime>R&&te());){var se=b.callback;if(typeof se=="function"){b.callback=null,w=b.priorityLevel;var me=se(b.expirationTime<=R);if(R=a.unstable_now(),typeof me=="function"){b.callback=me,P(R),G=!0;break t}b===o(v)&&l(v),P(R)}else l(v);b=o(v)}if(b!==null)G=!0;else{var A=o(m);A!==null&&Le(ne,A.startTime-R),G=!1}}break e}finally{b=null,w=Y,N=!1}G=void 0}}finally{G?Te():le=!1}}}var Te;if(typeof k=="function")Te=function(){k(ve)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Ge=rt.port2;rt.port1.onmessage=ve,Te=function(){Ge.postMessage(null)}}else Te=function(){_(ve,0)};function Le(R,G){K=_(function(){R(a.unstable_now())},G)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(R){R.callback=null},a.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<R?Math.floor(1e3/R):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(R){switch(w){case 1:case 2:case 3:var G=3;break;default:G=w}var Y=w;w=G;try{return R()}finally{w=Y}},a.unstable_requestPaint=function(){H=!0},a.unstable_runWithPriority=function(R,G){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var Y=w;w=R;try{return G()}finally{w=Y}},a.unstable_scheduleCallback=function(R,G,Y){var se=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?se+Y:se):Y=se,R){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=Y+me,R={id:y++,callback:G,priorityLevel:R,startTime:Y,expirationTime:me,sortIndex:-1},Y>se?(R.sortIndex=Y,r(m,R),o(v)===null&&R===o(m)&&(L?(X(K),K=-1):L=!0,Le(ne,Y-se))):(R.sortIndex=me,r(v,R),U||N||(U=!0,le||(le=!0,Te()))),R},a.unstable_shouldYield=te,a.unstable_wrapCallback=function(R){var G=w;return function(){var Y=w;w=G;try{return R.apply(this,arguments)}finally{w=Y}}}})(Gu)),Gu}var mg;function t2(){return mg||(mg=1,ku.exports=e2()),ku.exports}var Xu={exports:{}},it={};var gg;function n2(){if(gg)return it;gg=1;var a=Oc();function r(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function h(v,m,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:v,containerInfo:m,implementation:y}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,it.createPortal=function(v,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return h(v,m,null,y)},it.flushSync=function(v){var m=d.T,y=l.p;try{if(d.T=null,l.p=2,v)return v()}finally{d.T=m,l.p=y,l.d.f()}},it.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,l.d.C(v,m))},it.prefetchDNS=function(v){typeof v=="string"&&l.d.D(v)},it.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var y=m.as,b=p(y,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,N=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?l.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:N}):y==="script"&&l.d.X(v,{crossOrigin:b,integrity:w,fetchPriority:N,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},it.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=p(m.as,m.crossOrigin);l.d.M(v,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&l.d.M(v)},it.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,b=p(y,m.crossOrigin);l.d.L(v,y,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},it.preloadModule=function(v,m){if(typeof v=="string")if(m){var y=p(m.as,m.crossOrigin);l.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else l.d.m(v)},it.requestFormReset=function(v){l.d.r(v)},it.unstable_batchedUpdates=function(v,m){return v(m)},it.useFormState=function(v,m,y){return d.H.useFormState(v,m,y)},it.useFormStatus=function(){return d.H.useHostTransitionStatus()},it.version="19.2.8",it}var pg;function a2(){if(pg)return Xu.exports;pg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Xu.exports=n2(),Xu.exports}var yg;function i2(){if(yg)return cr;yg=1;var a=t2(),r=Oc(),o=a2();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(l(188))}function m(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var u=s.alternate;if(u===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===n)return v(s),e;if(u===i)return v(s),t;u=u.sibling}throw Error(l(188))}if(n.return!==i.return)n=s,i=u;else{for(var f=!1,g=s.child;g;){if(g===n){f=!0,n=s,i=u;break}if(g===i){f=!0,i=s,n=u;break}g=g.sibling}if(!f){for(g=u.child;g;){if(g===n){f=!0,n=u,i=s;break}if(g===i){f=!0,i=u,n=s;break}g=g.sibling}if(!f)throw Error(l(189))}}if(n.alternate!==i)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,w=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),k=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),ze=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function Te(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function Ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case _:return"Profiler";case H:return"StrictMode";case ne:return"Suspense";case le:return"SuspenseList";case ze:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case k:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:Ge(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return Ge(e(t))}catch{}}return null}var Le=Array.isArray,R=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},se=[],me=-1;function A(e){return{current:e}}function B(e){0>me||(e.current=se[me],se[me]=null,me--)}function q(e,t){me++,se[me]=e.current,e.current=t}var Z=A(null),ie=A(null),ue=A(null),Se=A(null);function st(e,t){switch(q(ue,t),q(ie,e),q(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Om(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Om(t),e=Vm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(Z),q(Z,e)}function _e(){B(Z),B(ie),B(ue)}function pi(e){e.memoizedState!==null&&q(Se,e);var t=Z.current,n=Vm(t,e.type);t!==n&&(q(ie,e),q(Z,n))}function Er(e){ie.current===e&&(B(Z),B(ie)),Se.current===e&&(B(Se),rr._currentValue=Y)}var bo,lf;function Jn(e){if(bo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bo=t&&t[1]||"",lf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bo+e+lf}var So=!1;function To(e,t){if(!e||So)return"";So=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(D){var M=D}Reflect.construct(e,[],j)}else{try{j.call()}catch(D){M=D}e.call(j.prototype)}}else{try{throw Error()}catch(D){M=D}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(D){if(D&&M&&typeof D.stack=="string")return[D.stack,M.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),f=u[0],g=u[1];if(f&&g){var S=f.split(`
`),C=g.split(`
`);for(s=i=0;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;for(;s<C.length&&!C[s].includes("DetermineComponentFrameRoot");)s++;if(i===S.length||s===C.length)for(i=S.length-1,s=C.length-1;1<=i&&0<=s&&S[i]!==C[s];)s--;for(;1<=i&&0<=s;i--,s--)if(S[i]!==C[s]){if(i!==1||s!==1)do if(i--,s--,0>s||S[i]!==C[s]){var O=`
`+S[i].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=i&&0<=s);break}}}finally{So=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Jn(n):""}function xv(e,t){switch(e.tag){case 26:case 27:case 5:return Jn(e.type);case 16:return Jn("Lazy");case 13:return e.child!==t&&t!==null?Jn("Suspense Fallback"):Jn("Suspense");case 19:return Jn("SuspenseList");case 0:case 15:return To(e.type,!1);case 11:return To(e.type.render,!1);case 1:return To(e.type,!0);case 31:return Jn("Activity");default:return""}}function uf(e){try{var t="",n=null;do t+=xv(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ao=Object.prototype.hasOwnProperty,wo=a.unstable_scheduleCallback,zo=a.unstable_cancelCallback,Dv=a.unstable_shouldYield,Uv=a.unstable_requestPaint,yt=a.unstable_now,Rv=a.unstable_getCurrentPriorityLevel,cf=a.unstable_ImmediatePriority,ff=a.unstable_UserBlockingPriority,Cr=a.unstable_NormalPriority,Ov=a.unstable_LowPriority,df=a.unstable_IdlePriority,Vv=a.log,jv=a.unstable_setDisableYieldValue,yi=null,vt=null;function Tn(e){if(typeof Vv=="function"&&jv(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(yi,e)}catch{}}var bt=Math.clz32?Math.clz32:Lv,Bv=Math.log,Nv=Math.LN2;function Lv(e){return e>>>=0,e===0?32:31-(Bv(e)/Nv|0)|0}var Mr=256,xr=262144,Dr=4194304;function Wn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ur(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,u=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var g=i&134217727;return g!==0?(i=g&~u,i!==0?s=Wn(i):(f&=g,f!==0?s=Wn(f):n||(n=g&~e,n!==0&&(s=Wn(n))))):(g=i&~u,g!==0?s=Wn(g):f!==0?s=Wn(f):n||(n=i&~e,n!==0&&(s=Wn(n)))),s===0?0:t!==0&&t!==s&&(t&u)===0&&(u=s&-s,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:s}function vi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _v(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hf(){var e=Dr;return Dr<<=1,(Dr&62914560)===0&&(Dr=4194304),e}function Eo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hv(e,t,n,i,s,u){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,S=e.expirationTimes,C=e.hiddenUpdates;for(n=f&~n;0<n;){var O=31-bt(n),j=1<<O;g[O]=0,S[O]=-1;var M=C[O];if(M!==null)for(C[O]=null,O=0;O<M.length;O++){var D=M[O];D!==null&&(D.lane&=-536870913)}n&=~j}i!==0&&mf(e,i,0),u!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=u&~(f&~t))}function mf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-bt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function gf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-bt(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function pf(e,t){var n=t&-t;return n=(n&42)!==0?1:Co(n),(n&(e.suspendedLanes|t))!==0?0:n}function Co(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function yf(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:ng(e.type))}function vf(e,t){var n=G.p;try{return G.p=e,t()}finally{G.p=n}}var An=Math.random().toString(36).slice(2),Je="__reactFiber$"+An,ct="__reactProps$"+An,Aa="__reactContainer$"+An,xo="__reactEvents$"+An,kv="__reactListeners$"+An,Gv="__reactHandles$"+An,bf="__reactResources$"+An,Si="__reactMarker$"+An;function Do(e){delete e[Je],delete e[ct],delete e[xo],delete e[kv],delete e[Gv]}function wa(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Aa]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=km(e);e!==null;){if(n=e[Je])return n;e=km(e)}return t}e=n,n=e.parentNode}return null}function za(e){if(e=e[Je]||e[Aa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ti(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Ea(e){var t=e[bf];return t||(t=e[bf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[Si]=!0}var Sf=new Set,Tf={};function $n(e,t){Ca(e,t),Ca(e+"Capture",t)}function Ca(e,t){for(Tf[e]=t,e=0;e<t.length;e++)Sf.add(t[e])}var Xv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Af={},wf={};function qv(e){return Ao.call(wf,e)?!0:Ao.call(Af,e)?!1:Xv.test(e)?wf[e]=!0:(Af[e]=!0,!1)}function Rr(e,t,n){if(qv(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Or(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function tn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pv(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,u=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(f){n=""+f,u.call(this,f)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Uo(e){if(!e._valueTracker){var t=zf(e)?"checked":"value";e._valueTracker=Pv(e,t,""+e[t])}}function Ef(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=zf(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yv=/[\n"\\]/g;function Dt(e){return e.replace(Yv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ro(e,t,n,i,s,u,f,g){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Oo(e,f,xt(t)):n!=null?Oo(e,f,xt(n)):i!=null&&e.removeAttribute("value"),s==null&&u!=null&&(e.defaultChecked=!!u),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+xt(g):e.removeAttribute("name")}function Cf(e,t,n,i,s,u,f,g){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Uo(e);return}n=n!=null?""+xt(n):"",t=t!=null?""+xt(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=g?e.checked:!!i,e.defaultChecked=!!i,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),Uo(e)}function Oo(e,t,n){t==="number"&&Vr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ma(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Mf(e,t,n){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+xt(n):""}function xf(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(l(92));if(Le(i)){if(1<i.length)throw Error(l(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=xt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Uo(e)}function xa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Df(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Fv.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Uf(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Df(e,s,i)}else for(var u in t)t.hasOwnProperty(u)&&Df(e,u,t[u])}function Vo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jr(e){return Qv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function nn(){}var jo=null;function Bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Da=null,Ua=null;function Rf(e){var t=za(e);if(t&&(e=t.stateNode)){var n=e[ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ro(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Dt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[ct]||null;if(!s)throw Error(l(90));Ro(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Ef(i)}break e;case"textarea":Mf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ma(e,!!n.multiple,t,!1)}}}var No=!1;function Of(e,t,n){if(No)return e(t,n);No=!0;try{var i=e(t);return i}finally{if(No=!1,(Da!==null||Ua!==null)&&(Ts(),Da&&(t=Da,e=Ua,Ua=Da=null,Rf(t),e)))for(t=0;t<e.length;t++)Rf(e[t])}}function Ai(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ct]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lo=!1;if(an)try{var wi={};Object.defineProperty(wi,"passive",{get:function(){Lo=!0}}),window.addEventListener("test",wi,wi),window.removeEventListener("test",wi,wi)}catch{Lo=!1}var wn=null,_o=null,Br=null;function Vf(){if(Br)return Br;var e,t=_o,n=t.length,i,s="value"in wn?wn.value:wn.textContent,u=s.length;for(e=0;e<n&&t[e]===s[e];e++);var f=n-e;for(i=1;i<=f&&t[n-i]===s[u-i];i++);return Br=s.slice(e,1<i?1-i:void 0)}function Nr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lr(){return!0}function jf(){return!1}function ft(e){function t(n,i,s,u,f){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(u):u[g]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Lr:jf,this.isPropagationStopped=jf,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),t}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_r=ft(ea),zi=b({},ea,{view:0,detail:0}),Zv=ft(zi),Ho,ko,Ei,Hr=b({},zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(Ho=e.screenX-Ei.screenX,ko=e.screenY-Ei.screenY):ko=Ho=0,Ei=e),Ho)},movementY:function(e){return"movementY"in e?e.movementY:ko}}),Bf=ft(Hr),Iv=b({},Hr,{dataTransfer:0}),Jv=ft(Iv),Wv=b({},zi,{relatedTarget:0}),Go=ft(Wv),$v=b({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),e0=ft($v),t0=b({},ea,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),n0=ft(t0),a0=b({},ea,{data:0}),Nf=ft(a0),i0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=s0[e])?!!t[e]:!1}function Xo(){return o0}var l0=b({},zi,{key:function(e){if(e.key){var t=i0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?r0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xo,charCode:function(e){return e.type==="keypress"?Nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),u0=ft(l0),c0=b({},Hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lf=ft(c0),f0=b({},zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xo}),d0=ft(f0),h0=b({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),m0=ft(h0),g0=b({},Hr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),p0=ft(g0),y0=b({},ea,{newState:0,oldState:0}),v0=ft(y0),b0=[9,13,27,32],qo=an&&"CompositionEvent"in window,Ci=null;an&&"documentMode"in document&&(Ci=document.documentMode);var S0=an&&"TextEvent"in window&&!Ci,_f=an&&(!qo||Ci&&8<Ci&&11>=Ci),Hf=" ",kf=!1;function Gf(e,t){switch(e){case"keyup":return b0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ra=!1;function T0(e,t){switch(e){case"compositionend":return Xf(t);case"keypress":return t.which!==32?null:(kf=!0,Hf);case"textInput":return e=t.data,e===Hf&&kf?null:e;default:return null}}function A0(e,t){if(Ra)return e==="compositionend"||!qo&&Gf(e,t)?(e=Vf(),Br=_o=wn=null,Ra=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _f&&t.locale!=="ko"?null:t.data;default:return null}}var w0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!w0[e.type]:t==="textarea"}function Pf(e,t,n,i){Da?Ua?Ua.push(i):Ua=[i]:Da=i,t=xs(t,"onChange"),0<t.length&&(n=new _r("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Mi=null,xi=null;function z0(e){Cm(e,0)}function kr(e){var t=Ti(e);if(Ef(t))return e}function Yf(e,t){if(e==="change")return t}var Ff=!1;if(an){var Po;if(an){var Yo="oninput"in document;if(!Yo){var Kf=document.createElement("div");Kf.setAttribute("oninput","return;"),Yo=typeof Kf.oninput=="function"}Po=Yo}else Po=!1;Ff=Po&&(!document.documentMode||9<document.documentMode)}function Qf(){Mi&&(Mi.detachEvent("onpropertychange",Zf),xi=Mi=null)}function Zf(e){if(e.propertyName==="value"&&kr(xi)){var t=[];Pf(t,xi,e,Bo(e)),Of(z0,t)}}function E0(e,t,n){e==="focusin"?(Qf(),Mi=t,xi=n,Mi.attachEvent("onpropertychange",Zf)):e==="focusout"&&Qf()}function C0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kr(xi)}function M0(e,t){if(e==="click")return kr(t)}function x0(e,t){if(e==="input"||e==="change")return kr(t)}function D0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:D0;function Di(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Ao.call(t,s)||!St(e[s],t[s]))return!1}return!0}function If(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jf(e,t){var n=If(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=If(n)}}function Wf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $f(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function Fo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var U0=an&&"documentMode"in document&&11>=document.documentMode,Oa=null,Ko=null,Ui=null,Qo=!1;function ed(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qo||Oa==null||Oa!==Vr(i)||(i=Oa,"selectionStart"in i&&Fo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ui&&Di(Ui,i)||(Ui=i,i=xs(Ko,"onSelect"),0<i.length&&(t=new _r("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Oa)))}function ta(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Va={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionrun:ta("Transition","TransitionRun"),transitionstart:ta("Transition","TransitionStart"),transitioncancel:ta("Transition","TransitionCancel"),transitionend:ta("Transition","TransitionEnd")},Zo={},td={};an&&(td=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function na(e){if(Zo[e])return Zo[e];if(!Va[e])return e;var t=Va[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in td)return Zo[e]=t[n];return e}var nd=na("animationend"),ad=na("animationiteration"),id=na("animationstart"),R0=na("transitionrun"),O0=na("transitionstart"),V0=na("transitioncancel"),rd=na("transitionend"),sd=new Map,Io="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Io.push("scrollEnd");function kt(e,t){sd.set(e,t),$n(t,[e])}var Gr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ut=[],ja=0,Jo=0;function Xr(){for(var e=ja,t=Jo=ja=0;t<e;){var n=Ut[t];Ut[t++]=null;var i=Ut[t];Ut[t++]=null;var s=Ut[t];Ut[t++]=null;var u=Ut[t];if(Ut[t++]=null,i!==null&&s!==null){var f=i.pending;f===null?s.next=s:(s.next=f.next,f.next=s),i.pending=s}u!==0&&od(n,s,u)}}function qr(e,t,n,i){Ut[ja++]=e,Ut[ja++]=t,Ut[ja++]=n,Ut[ja++]=i,Jo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Wo(e,t,n,i){return qr(e,t,n,i),Pr(e)}function aa(e,t){return qr(e,null,null,t),Pr(e)}function od(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,u=e.return;u!==null;)u.childLanes|=n,i=u.alternate,i!==null&&(i.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(s=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,s&&t!==null&&(s=31-bt(n),e=u.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),u):null}function Pr(e){if(50<Wi)throw Wi=0,ou=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ba={};function j0(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,i){return new j0(e,t,n,i)}function $o(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ld(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yr(e,t,n,i,s,u){var f=0;if(i=e,typeof e=="function")$o(e)&&(f=1);else if(typeof e=="string")f=Hb(e,n,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ze:return e=Tt(31,n,t,s),e.elementType=ze,e.lanes=u,e;case L:return ia(n.children,s,u,t);case H:f=8,s|=24;break;case _:return e=Tt(12,n,t,s|2),e.elementType=_,e.lanes=u,e;case ne:return e=Tt(13,n,t,s),e.elementType=ne,e.lanes=u,e;case le:return e=Tt(19,n,t,s),e.elementType=le,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:f=10;break e;case X:f=9;break e;case P:f=11;break e;case K:f=14;break e;case W:f=16,i=null;break e}f=29,n=Error(l(130,e===null?"null":typeof e,"")),i=null}return t=Tt(f,n,t,s),t.elementType=e,t.type=i,t.lanes=u,t}function ia(e,t,n,i){return e=Tt(7,e,i,t),e.lanes=n,e}function el(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function ud(e){var t=Tt(18,null,null,0);return t.stateNode=e,t}function tl(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var cd=new WeakMap;function Rt(e,t){if(typeof e=="object"&&e!==null){var n=cd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:uf(t)},cd.set(e,t),t)}return{value:e,source:t,stack:uf(t)}}var Na=[],La=0,Fr=null,Ri=0,Ot=[],Vt=0,zn=null,Ft=1,Kt="";function sn(e,t){Na[La++]=Ri,Na[La++]=Fr,Fr=e,Ri=t}function fd(e,t,n){Ot[Vt++]=Ft,Ot[Vt++]=Kt,Ot[Vt++]=zn,zn=e;var i=Ft;e=Kt;var s=32-bt(i)-1;i&=~(1<<s),n+=1;var u=32-bt(t)+s;if(30<u){var f=s-s%5;u=(i&(1<<f)-1).toString(32),i>>=f,s-=f,Ft=1<<32-bt(t)+s|n<<s|i,Kt=u+e}else Ft=1<<u|n<<s|i,Kt=e}function nl(e){e.return!==null&&(sn(e,1),fd(e,1,0))}function al(e){for(;e===Fr;)Fr=Na[--La],Na[La]=null,Ri=Na[--La],Na[La]=null;for(;e===zn;)zn=Ot[--Vt],Ot[Vt]=null,Kt=Ot[--Vt],Ot[Vt]=null,Ft=Ot[--Vt],Ot[Vt]=null}function dd(e,t){Ot[Vt++]=Ft,Ot[Vt++]=Kt,Ot[Vt++]=zn,Ft=t.id,Kt=t.overflow,zn=e}var We=null,Re=null,ge=!1,En=null,jt=!1,il=Error(l(519));function Cn(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Oi(Rt(t,e)),il}function hd(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Je]=e,t[ct]=i,n){case"dialog":fe("cancel",t),fe("close",t);break;case"iframe":case"object":case"embed":fe("load",t);break;case"video":case"audio":for(n=0;n<er.length;n++)fe(er[n],t);break;case"source":fe("error",t);break;case"img":case"image":case"link":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"input":fe("invalid",t),Cf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":fe("invalid",t);break;case"textarea":fe("invalid",t),xf(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Um(t.textContent,n)?(i.popover!=null&&(fe("beforetoggle",t),fe("toggle",t)),i.onScroll!=null&&fe("scroll",t),i.onScrollEnd!=null&&fe("scrollend",t),i.onClick!=null&&(t.onclick=nn),t=!0):t=!1,t||Cn(e,!0)}function md(e){for(We=e.return;We;)switch(We.tag){case 5:case 31:case 13:jt=!1;return;case 27:case 3:jt=!0;return;default:We=We.return}}function _a(e){if(e!==We)return!1;if(!ge)return md(e),ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Au(e.type,e.memoizedProps)),n=!n),n&&Re&&Cn(e),md(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Re=Hm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Re=Hm(e)}else t===27?(t=Re,kn(e.type)?(e=Mu,Mu=null,Re=e):Re=t):Re=We?Nt(e.stateNode.nextSibling):null;return!0}function ra(){Re=We=null,ge=!1}function rl(){var e=En;return e!==null&&(gt===null?gt=e:gt.push.apply(gt,e),En=null),e}function Oi(e){En===null?En=[e]:En.push(e)}var sl=A(null),sa=null,on=null;function Mn(e,t,n){q(sl,t._currentValue),t._currentValue=n}function ln(e){e._currentValue=sl.current,B(sl)}function ol(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ll(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){var f=s.child;u=u.firstContext;e:for(;u!==null;){var g=u;u=s;for(var S=0;S<t.length;S++)if(g.context===t[S]){u.lanes|=n,g=u.alternate,g!==null&&(g.lanes|=n),ol(u.return,n,e),i||(f=null);break e}u=g.next}}else if(s.tag===18){if(f=s.return,f===null)throw Error(l(341));f.lanes|=n,u=f.alternate,u!==null&&(u.lanes|=n),ol(f,n,e),f=null}else f=s.child;if(f!==null)f.return=s;else for(f=s;f!==null;){if(f===e){f=null;break}if(s=f.sibling,s!==null){s.return=f.return,f=s;break}f=f.return}s=f}}function Ha(e,t,n,i){e=null;for(var s=t,u=!1;s!==null;){if(!u){if((s.flags&524288)!==0)u=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var f=s.alternate;if(f===null)throw Error(l(387));if(f=f.memoizedProps,f!==null){var g=s.type;St(s.pendingProps.value,f.value)||(e!==null?e.push(g):e=[g])}}else if(s===Se.current){if(f=s.alternate,f===null)throw Error(l(387));f.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(rr):e=[rr])}s=s.return}e!==null&&ll(t,e,n,i),t.flags|=262144}function Kr(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){sa=e,on=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return gd(sa,e)}function Qr(e,t){return sa===null&&oa(e),gd(e,t)}function gd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},on===null){if(e===null)throw Error(l(308));on=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else on=on.next=t;return n}var B0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},N0=a.unstable_scheduleCallback,L0=a.unstable_NormalPriority,Xe={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ul(){return{controller:new B0,data:new Map,refCount:0}}function Vi(e){e.refCount--,e.refCount===0&&N0(L0,function(){e.controller.abort()})}var ji=null,cl=0,ka=0,Ga=null;function _0(e,t){if(ji===null){var n=ji=[];cl=0,ka=hu(),Ga={status:"pending",value:void 0,then:function(i){n.push(i)}}}return cl++,t.then(pd,pd),t}function pd(){if(--cl===0&&ji!==null){Ga!==null&&(Ga.status="fulfilled");var e=ji;ji=null,ka=0,Ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function H0(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var yd=R.S;R.S=function(e,t){em=yt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&_0(e,t),yd!==null&&yd(e,t)};var la=A(null);function fl(){var e=la.current;return e!==null?e:xe.pooledCache}function Zr(e,t){t===null?q(la,la.current):q(la,t.pool)}function vd(){var e=fl();return e===null?null:{parent:Xe._currentValue,pool:e}}var Xa=Error(l(460)),dl=Error(l(474)),Ir=Error(l(542)),Jr={then:function(){}};function bd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(nn,nn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ad(e),e;default:if(typeof t.status=="string")t.then(nn,nn);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ad(e),e}throw ca=t,Xa}}function ua(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ca=n,Xa):n}}var ca=null;function Td(){if(ca===null)throw Error(l(459));var e=ca;return ca=null,e}function Ad(e){if(e===Xa||e===Ir)throw Error(l(483))}var qa=null,Bi=0;function Wr(e){var t=Bi;return Bi+=1,qa===null&&(qa=[]),Sd(qa,e,t)}function Ni(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function $r(e,t){throw t.$$typeof===w?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function wd(e){function t(z,T){if(e){var E=z.deletions;E===null?(z.deletions=[T],z.flags|=16):E.push(T)}}function n(z,T){if(!e)return null;for(;T!==null;)t(z,T),T=T.sibling;return null}function i(z){for(var T=new Map;z!==null;)z.key!==null?T.set(z.key,z):T.set(z.index,z),z=z.sibling;return T}function s(z,T){return z=rn(z,T),z.index=0,z.sibling=null,z}function u(z,T,E){return z.index=E,e?(E=z.alternate,E!==null?(E=E.index,E<T?(z.flags|=67108866,T):E):(z.flags|=67108866,T)):(z.flags|=1048576,T)}function f(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function g(z,T,E,V){return T===null||T.tag!==6?(T=el(E,z.mode,V),T.return=z,T):(T=s(T,E),T.return=z,T)}function S(z,T,E,V){var $=E.type;return $===L?O(z,T,E.props.children,V,E.key):T!==null&&(T.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===W&&ua($)===T.type)?(T=s(T,E.props),Ni(T,E),T.return=z,T):(T=Yr(E.type,E.key,E.props,null,z.mode,V),Ni(T,E),T.return=z,T)}function C(z,T,E,V){return T===null||T.tag!==4||T.stateNode.containerInfo!==E.containerInfo||T.stateNode.implementation!==E.implementation?(T=tl(E,z.mode,V),T.return=z,T):(T=s(T,E.children||[]),T.return=z,T)}function O(z,T,E,V,$){return T===null||T.tag!==7?(T=ia(E,z.mode,V,$),T.return=z,T):(T=s(T,E),T.return=z,T)}function j(z,T,E){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=el(""+T,z.mode,E),T.return=z,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case N:return E=Yr(T.type,T.key,T.props,null,z.mode,E),Ni(E,T),E.return=z,E;case U:return T=tl(T,z.mode,E),T.return=z,T;case W:return T=ua(T),j(z,T,E)}if(Le(T)||Te(T))return T=ia(T,z.mode,E,null),T.return=z,T;if(typeof T.then=="function")return j(z,Wr(T),E);if(T.$$typeof===k)return j(z,Qr(z,T),E);$r(z,T)}return null}function M(z,T,E,V){var $=T!==null?T.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return $!==null?null:g(z,T,""+E,V);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case N:return E.key===$?S(z,T,E,V):null;case U:return E.key===$?C(z,T,E,V):null;case W:return E=ua(E),M(z,T,E,V)}if(Le(E)||Te(E))return $!==null?null:O(z,T,E,V,null);if(typeof E.then=="function")return M(z,T,Wr(E),V);if(E.$$typeof===k)return M(z,T,Qr(z,E),V);$r(z,E)}return null}function D(z,T,E,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return z=z.get(E)||null,g(T,z,""+V,$);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case N:return z=z.get(V.key===null?E:V.key)||null,S(T,z,V,$);case U:return z=z.get(V.key===null?E:V.key)||null,C(T,z,V,$);case W:return V=ua(V),D(z,T,E,V,$)}if(Le(V)||Te(V))return z=z.get(E)||null,O(T,z,V,$,null);if(typeof V.then=="function")return D(z,T,E,Wr(V),$);if(V.$$typeof===k)return D(z,T,E,Qr(T,V),$);$r(T,V)}return null}function F(z,T,E,V){for(var $=null,pe=null,I=T,oe=T=0,he=null;I!==null&&oe<E.length;oe++){I.index>oe?(he=I,I=null):he=I.sibling;var ye=M(z,I,E[oe],V);if(ye===null){I===null&&(I=he);break}e&&I&&ye.alternate===null&&t(z,I),T=u(ye,T,oe),pe===null?$=ye:pe.sibling=ye,pe=ye,I=he}if(oe===E.length)return n(z,I),ge&&sn(z,oe),$;if(I===null){for(;oe<E.length;oe++)I=j(z,E[oe],V),I!==null&&(T=u(I,T,oe),pe===null?$=I:pe.sibling=I,pe=I);return ge&&sn(z,oe),$}for(I=i(I);oe<E.length;oe++)he=D(I,z,oe,E[oe],V),he!==null&&(e&&he.alternate!==null&&I.delete(he.key===null?oe:he.key),T=u(he,T,oe),pe===null?$=he:pe.sibling=he,pe=he);return e&&I.forEach(function(Yn){return t(z,Yn)}),ge&&sn(z,oe),$}function ee(z,T,E,V){if(E==null)throw Error(l(151));for(var $=null,pe=null,I=T,oe=T=0,he=null,ye=E.next();I!==null&&!ye.done;oe++,ye=E.next()){I.index>oe?(he=I,I=null):he=I.sibling;var Yn=M(z,I,ye.value,V);if(Yn===null){I===null&&(I=he);break}e&&I&&Yn.alternate===null&&t(z,I),T=u(Yn,T,oe),pe===null?$=Yn:pe.sibling=Yn,pe=Yn,I=he}if(ye.done)return n(z,I),ge&&sn(z,oe),$;if(I===null){for(;!ye.done;oe++,ye=E.next())ye=j(z,ye.value,V),ye!==null&&(T=u(ye,T,oe),pe===null?$=ye:pe.sibling=ye,pe=ye);return ge&&sn(z,oe),$}for(I=i(I);!ye.done;oe++,ye=E.next())ye=D(I,z,oe,ye.value,V),ye!==null&&(e&&ye.alternate!==null&&I.delete(ye.key===null?oe:ye.key),T=u(ye,T,oe),pe===null?$=ye:pe.sibling=ye,pe=ye);return e&&I.forEach(function(Ib){return t(z,Ib)}),ge&&sn(z,oe),$}function Me(z,T,E,V){if(typeof E=="object"&&E!==null&&E.type===L&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case N:e:{for(var $=E.key;T!==null;){if(T.key===$){if($=E.type,$===L){if(T.tag===7){n(z,T.sibling),V=s(T,E.props.children),V.return=z,z=V;break e}}else if(T.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===W&&ua($)===T.type){n(z,T.sibling),V=s(T,E.props),Ni(V,E),V.return=z,z=V;break e}n(z,T);break}else t(z,T);T=T.sibling}E.type===L?(V=ia(E.props.children,z.mode,V,E.key),V.return=z,z=V):(V=Yr(E.type,E.key,E.props,null,z.mode,V),Ni(V,E),V.return=z,z=V)}return f(z);case U:e:{for($=E.key;T!==null;){if(T.key===$)if(T.tag===4&&T.stateNode.containerInfo===E.containerInfo&&T.stateNode.implementation===E.implementation){n(z,T.sibling),V=s(T,E.children||[]),V.return=z,z=V;break e}else{n(z,T);break}else t(z,T);T=T.sibling}V=tl(E,z.mode,V),V.return=z,z=V}return f(z);case W:return E=ua(E),Me(z,T,E,V)}if(Le(E))return F(z,T,E,V);if(Te(E)){if($=Te(E),typeof $!="function")throw Error(l(150));return E=$.call(E),ee(z,T,E,V)}if(typeof E.then=="function")return Me(z,T,Wr(E),V);if(E.$$typeof===k)return Me(z,T,Qr(z,E),V);$r(z,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,T!==null&&T.tag===6?(n(z,T.sibling),V=s(T,E),V.return=z,z=V):(n(z,T),V=el(E,z.mode,V),V.return=z,z=V),f(z)):n(z,T)}return function(z,T,E,V){try{Bi=0;var $=Me(z,T,E,V);return qa=null,$}catch(I){if(I===Xa||I===Ir)throw I;var pe=Tt(29,I,null,z.mode);return pe.lanes=V,pe.return=z,pe}}}var fa=wd(!0),zd=wd(!1),xn=!1;function hl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ml(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Dn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Un(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(be&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Pr(e),od(e,null,n),t}return qr(e,i,t,n),Pr(e)}function Li(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,gf(e,n)}}function gl(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?s=u=f:u=u.next=f,n=n.next}while(n!==null);u===null?s=u=t:u=u.next=t}else s=u=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var pl=!1;function _i(){if(pl){var e=Ga;if(e!==null)throw e}}function Hi(e,t,n,i){pl=!1;var s=e.updateQueue;xn=!1;var u=s.firstBaseUpdate,f=s.lastBaseUpdate,g=s.shared.pending;if(g!==null){s.shared.pending=null;var S=g,C=S.next;S.next=null,f===null?u=C:f.next=C,f=S;var O=e.alternate;O!==null&&(O=O.updateQueue,g=O.lastBaseUpdate,g!==f&&(g===null?O.firstBaseUpdate=C:g.next=C,O.lastBaseUpdate=S))}if(u!==null){var j=s.baseState;f=0,O=C=S=null,g=u;do{var M=g.lane&-536870913,D=M!==g.lane;if(D?(de&M)===M:(i&M)===M){M!==0&&M===ka&&(pl=!0),O!==null&&(O=O.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var F=e,ee=g;M=t;var Me=n;switch(ee.tag){case 1:if(F=ee.payload,typeof F=="function"){j=F.call(Me,j,M);break e}j=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=ee.payload,M=typeof F=="function"?F.call(Me,j,M):F,M==null)break e;j=b({},j,M);break e;case 2:xn=!0}}M=g.callback,M!==null&&(e.flags|=64,D&&(e.flags|=8192),D=s.callbacks,D===null?s.callbacks=[M]:D.push(M))}else D={lane:M,tag:g.tag,payload:g.payload,callback:g.callback,next:null},O===null?(C=O=D,S=j):O=O.next=D,f|=M;if(g=g.next,g===null){if(g=s.shared.pending,g===null)break;D=g,g=D.next,D.next=null,s.lastBaseUpdate=D,s.shared.pending=null}}while(!0);O===null&&(S=j),s.baseState=S,s.firstBaseUpdate=C,s.lastBaseUpdate=O,u===null&&(s.shared.lanes=0),Bn|=f,e.lanes=f,e.memoizedState=j}}function Ed(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function Cd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ed(n[e],t)}var Pa=A(null),es=A(0);function Md(e,t){e=yn,q(es,e),q(Pa,t),yn=e|t.baseLanes}function yl(){q(es,yn),q(Pa,Pa.current)}function vl(){yn=es.current,B(Pa),B(es)}var At=A(null),Bt=null;function Rn(e){var t=e.alternate;q(He,He.current&1),q(At,e),Bt===null&&(t===null||Pa.current!==null||t.memoizedState!==null)&&(Bt=e)}function bl(e){q(He,He.current),q(At,e),Bt===null&&(Bt=e)}function xd(e){e.tag===22?(q(He,He.current),q(At,e),Bt===null&&(Bt=e)):On()}function On(){q(He,He.current),q(At,At.current)}function wt(e){B(At),Bt===e&&(Bt=null),B(He)}var He=A(0);function ts(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Eu(n)||Cu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var un=0,re=null,Ee=null,qe=null,ns=!1,Ya=!1,da=!1,as=0,ki=0,Fa=null,k0=0;function je(){throw Error(l(321))}function Sl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Tl(e,t,n,i,s,u){return un=u,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?fh:Nl,da=!1,u=n(i,s),da=!1,Ya&&(u=Ud(t,n,i,s)),Dd(e),u}function Dd(e){R.H=qi;var t=Ee!==null&&Ee.next!==null;if(un=0,qe=Ee=re=null,ns=!1,ki=0,Fa=null,t)throw Error(l(300));e===null||Pe||(e=e.dependencies,e!==null&&Kr(e)&&(Pe=!0))}function Ud(e,t,n,i){re=e;var s=0;do{if(Ya&&(Fa=null),ki=0,Ya=!1,25<=s)throw Error(l(301));if(s+=1,qe=Ee=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}R.H=dh,u=t(n,i)}while(Ya);return u}function G0(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?Gi(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(re.flags|=1024),t}function Al(){var e=as!==0;return as=0,e}function wl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function zl(e){if(ns){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ns=!1}un=0,qe=Ee=re=null,Ya=!1,ki=as=0,Fa=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?re.memoizedState=qe=e:qe=qe.next=e,qe}function ke(){if(Ee===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=qe===null?re.memoizedState:qe.next;if(t!==null)qe=t,Ee=e;else{if(e===null)throw re.alternate===null?Error(l(467)):Error(l(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},qe===null?re.memoizedState=qe=e:qe=qe.next=e}return qe}function is(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Gi(e){var t=ki;return ki+=1,Fa===null&&(Fa=[]),e=Sd(Fa,e,t),t=re,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?fh:Nl),e}function rs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Gi(e);if(e.$$typeof===k)return $e(e)}throw Error(l(438,String(e)))}function El(e){var t=null,n=re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=re.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=is(),re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=te;return t.index++,n}function cn(e,t){return typeof t=="function"?t(e):t}function ss(e){var t=ke();return Cl(t,Ee,e)}function Cl(e,t,n){var i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=n;var s=e.baseQueue,u=i.pending;if(u!==null){if(s!==null){var f=s.next;s.next=u.next,u.next=f}t.baseQueue=s=u,i.pending=null}if(u=e.baseState,s===null)e.memoizedState=u;else{t=s.next;var g=f=null,S=null,C=t,O=!1;do{var j=C.lane&-536870913;if(j!==C.lane?(de&j)===j:(un&j)===j){var M=C.revertLane;if(M===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),j===ka&&(O=!0);else if((un&M)===M){C=C.next,M===ka&&(O=!0);continue}else j={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(g=S=j,f=u):S=S.next=j,re.lanes|=M,Bn|=M;j=C.action,da&&n(u,j),u=C.hasEagerState?C.eagerState:n(u,j)}else M={lane:j,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(g=S=M,f=u):S=S.next=M,re.lanes|=j,Bn|=j;C=C.next}while(C!==null&&C!==t);if(S===null?f=u:S.next=g,!St(u,e.memoizedState)&&(Pe=!0,O&&(n=Ga,n!==null)))throw n;e.memoizedState=u,e.baseState=f,e.baseQueue=S,i.lastRenderedState=u}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ml(e){var t=ke(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,u=t.memoizedState;if(s!==null){n.pending=null;var f=s=s.next;do u=e(u,f.action),f=f.next;while(f!==s);St(u,t.memoizedState)||(Pe=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,i]}function Rd(e,t,n){var i=re,s=ke(),u=ge;if(u){if(n===void 0)throw Error(l(407));n=n()}else n=t();var f=!St((Ee||s).memoizedState,n);if(f&&(s.memoizedState=n,Pe=!0),s=s.queue,Ul(jd.bind(null,i,s,e),[e]),s.getSnapshot!==t||f||qe!==null&&qe.memoizedState.tag&1){if(i.flags|=2048,Ka(9,{destroy:void 0},Vd.bind(null,i,s,n,t),null),xe===null)throw Error(l(349));u||(un&127)!==0||Od(i,t,n)}return n}function Od(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t=is(),re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vd(e,t,n,i){t.value=n,t.getSnapshot=i,Bd(t)&&Nd(e)}function jd(e,t,n){return n(function(){Bd(t)&&Nd(e)})}function Bd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function Nd(e){var t=aa(e,2);t!==null&&pt(t,e,2)}function xl(e){var t=ot();if(typeof e=="function"){var n=e;if(e=n(),da){Tn(!0);try{n()}finally{Tn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:e},t}function Ld(e,t,n,i){return e.baseState=n,Cl(e,Ee,typeof i=="function"?i:cn)}function X0(e,t,n,i,s){if(us(e))throw Error(l(485));if(e=t.action,e!==null){var u={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){u.listeners.push(f)}};R.T!==null?n(!0):u.isTransition=!1,i(u),n=t.pending,n===null?(u.next=t.pending=u,_d(t,u)):(u.next=n.next,t.pending=n.next=u)}}function _d(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var u=R.T,f={};R.T=f;try{var g=n(s,i),S=R.S;S!==null&&S(f,g),Hd(e,t,g)}catch(C){Dl(e,t,C)}finally{u!==null&&f.types!==null&&(u.types=f.types),R.T=u}}else try{u=n(s,i),Hd(e,t,u)}catch(C){Dl(e,t,C)}}function Hd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){kd(e,t,i)},function(i){return Dl(e,t,i)}):kd(e,t,n)}function kd(e,t,n){t.status="fulfilled",t.value=n,Gd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,_d(e,n)))}function Dl(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Gd(t),t=t.next;while(t!==i)}e.action=null}function Gd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xd(e,t){return t}function qd(e,t){if(ge){var n=xe.formState;if(n!==null){e:{var i=re;if(ge){if(Re){t:{for(var s=Re,u=jt;s.nodeType!==8;){if(!u){s=null;break t}if(s=Nt(s.nextSibling),s===null){s=null;break t}}u=s.data,s=u==="F!"||u==="F"?s:null}if(s){Re=Nt(s.nextSibling),i=s.data==="F!";break e}}Cn(i)}i=!1}i&&(t=n[0])}}return n=ot(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xd,lastRenderedState:t},n.queue=i,n=lh.bind(null,re,i),i.dispatch=n,i=xl(!1),u=Bl.bind(null,re,!1,i.queue),i=ot(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=X0.bind(null,re,s,u,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Pd(e){var t=ke();return Yd(t,Ee,e)}function Yd(e,t,n){if(t=Cl(e,t,Xd)[0],e=ss(cn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Gi(t)}catch(f){throw f===Xa?Ir:f}else i=t;t=ke();var s=t.queue,u=s.dispatch;return n!==t.memoizedState&&(re.flags|=2048,Ka(9,{destroy:void 0},q0.bind(null,s,n),null)),[i,u,e]}function q0(e,t){e.action=t}function Fd(e){var t=ke(),n=Ee;if(n!==null)return Yd(t,n,e);ke(),t=t.memoizedState,n=ke();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ka(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=re.updateQueue,t===null&&(t=is(),re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Kd(){return ke().memoizedState}function os(e,t,n,i){var s=ot();re.flags|=e,s.memoizedState=Ka(1|t,{destroy:void 0},n,i===void 0?null:i)}function ls(e,t,n,i){var s=ke();i=i===void 0?null:i;var u=s.memoizedState.inst;Ee!==null&&i!==null&&Sl(i,Ee.memoizedState.deps)?s.memoizedState=Ka(t,u,n,i):(re.flags|=e,s.memoizedState=Ka(1|t,u,n,i))}function Qd(e,t){os(8390656,8,e,t)}function Ul(e,t){ls(2048,8,e,t)}function P0(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=is(),re.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Zd(e){var t=ke().memoizedState;return P0({ref:t,nextImpl:e}),function(){if((be&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function Id(e,t){return ls(4,2,e,t)}function Jd(e,t){return ls(4,4,e,t)}function Wd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $d(e,t,n){n=n!=null?n.concat([e]):null,ls(4,4,Wd.bind(null,t,e),n)}function Rl(){}function eh(e,t){var n=ke();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Sl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function th(e,t){var n=ke();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Sl(t,i[1]))return i[0];if(i=e(),da){Tn(!0);try{e()}finally{Tn(!1)}}return n.memoizedState=[i,t],i}function Ol(e,t,n){return n===void 0||(un&1073741824)!==0&&(de&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=nm(),re.lanes|=e,Bn|=e,n)}function nh(e,t,n,i){return St(n,t)?n:Pa.current!==null?(e=Ol(e,n,i),St(e,t)||(Pe=!0),e):(un&42)===0||(un&1073741824)!==0&&(de&261930)===0?(Pe=!0,e.memoizedState=n):(e=nm(),re.lanes|=e,Bn|=e,t)}function ah(e,t,n,i,s){var u=G.p;G.p=u!==0&&8>u?u:8;var f=R.T,g={};R.T=g,Bl(e,!1,t,n);try{var S=s(),C=R.S;if(C!==null&&C(g,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var O=H0(S,i);Xi(e,t,O,Ct(e))}else Xi(e,t,i,Ct(e))}catch(j){Xi(e,t,{then:function(){},status:"rejected",reason:j},Ct())}finally{G.p=u,f!==null&&g.types!==null&&(f.types=g.types),R.T=f}}function Y0(){}function Vl(e,t,n,i){if(e.tag!==5)throw Error(l(476));var s=ih(e).queue;ah(e,s,t,Y,n===null?Y0:function(){return rh(e),n(i)})}function ih(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:Y},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function rh(e){var t=ih(e);t.next===null&&(t=e.alternate.memoizedState),Xi(e,t.next.queue,{},Ct())}function jl(){return $e(rr)}function sh(){return ke().memoizedState}function oh(){return ke().memoizedState}function F0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ct();e=Dn(n);var i=Un(t,e,n);i!==null&&(pt(i,t,n),Li(i,t,n)),t={cache:ul()},e.payload=t;return}t=t.return}}function K0(e,t,n){var i=Ct();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},us(e)?uh(t,n):(n=Wo(e,t,n,i),n!==null&&(pt(n,e,i),ch(n,t,i)))}function lh(e,t,n){var i=Ct();Xi(e,t,n,i)}function Xi(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(us(e))uh(t,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var f=t.lastRenderedState,g=u(f,n);if(s.hasEagerState=!0,s.eagerState=g,St(g,f))return qr(e,t,s,0),xe===null&&Xr(),!1}catch{}if(n=Wo(e,t,s,i),n!==null)return pt(n,e,i),ch(n,t,i),!0}return!1}function Bl(e,t,n,i){if(i={lane:2,revertLane:hu(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},us(e)){if(t)throw Error(l(479))}else t=Wo(e,n,i,2),t!==null&&pt(t,e,2)}function us(e){var t=e.alternate;return e===re||t!==null&&t===re}function uh(e,t){Ya=ns=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ch(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,gf(e,n)}}var qi={readContext:$e,use:rs,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je};qi.useEffectEvent=je;var fh={readContext:$e,use:rs,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:Qd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,os(4194308,4,Wd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return os(4194308,4,e,t)},useInsertionEffect:function(e,t){os(4,2,e,t)},useMemo:function(e,t){var n=ot();t=t===void 0?null:t;var i=e();if(da){Tn(!0);try{e()}finally{Tn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=ot();if(n!==void 0){var s=n(t);if(da){Tn(!0);try{n(t)}finally{Tn(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=K0.bind(null,re,e),[i.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=xl(e);var t=e.queue,n=lh.bind(null,re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Rl,useDeferredValue:function(e,t){var n=ot();return Ol(n,e,t)},useTransition:function(){var e=xl(!1);return e=ah.bind(null,re,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=re,s=ot();if(ge){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),xe===null)throw Error(l(349));(de&127)!==0||Od(i,t,n)}s.memoizedState=n;var u={value:n,getSnapshot:t};return s.queue=u,Qd(jd.bind(null,i,u,e),[e]),i.flags|=2048,Ka(9,{destroy:void 0},Vd.bind(null,i,u,n,t),null),n},useId:function(){var e=ot(),t=xe.identifierPrefix;if(ge){var n=Kt,i=Ft;n=(i&~(1<<32-bt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=as++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=k0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:jl,useFormState:qd,useActionState:qd,useOptimistic:function(e){var t=ot();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Bl.bind(null,re,!0,n),n.dispatch=t,[e,t]},useMemoCache:El,useCacheRefresh:function(){return ot().memoizedState=F0.bind(null,re)},useEffectEvent:function(e){var t=ot(),n={impl:e};return t.memoizedState=n,function(){if((be&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}},Nl={readContext:$e,use:rs,useCallback:eh,useContext:$e,useEffect:Ul,useImperativeHandle:$d,useInsertionEffect:Id,useLayoutEffect:Jd,useMemo:th,useReducer:ss,useRef:Kd,useState:function(){return ss(cn)},useDebugValue:Rl,useDeferredValue:function(e,t){var n=ke();return nh(n,Ee.memoizedState,e,t)},useTransition:function(){var e=ss(cn)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:Gi(e),t]},useSyncExternalStore:Rd,useId:sh,useHostTransitionStatus:jl,useFormState:Pd,useActionState:Pd,useOptimistic:function(e,t){var n=ke();return Ld(n,Ee,e,t)},useMemoCache:El,useCacheRefresh:oh};Nl.useEffectEvent=Zd;var dh={readContext:$e,use:rs,useCallback:eh,useContext:$e,useEffect:Ul,useImperativeHandle:$d,useInsertionEffect:Id,useLayoutEffect:Jd,useMemo:th,useReducer:Ml,useRef:Kd,useState:function(){return Ml(cn)},useDebugValue:Rl,useDeferredValue:function(e,t){var n=ke();return Ee===null?Ol(n,e,t):nh(n,Ee.memoizedState,e,t)},useTransition:function(){var e=Ml(cn)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:Gi(e),t]},useSyncExternalStore:Rd,useId:sh,useHostTransitionStatus:jl,useFormState:Fd,useActionState:Fd,useOptimistic:function(e,t){var n=ke();return Ee!==null?Ld(n,Ee,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:El,useCacheRefresh:oh};dh.useEffectEvent=Zd;function Ll(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _l={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ct(),s=Dn(i);s.payload=t,n!=null&&(s.callback=n),t=Un(e,s,i),t!==null&&(pt(t,e,i),Li(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ct(),s=Dn(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Un(e,s,i),t!==null&&(pt(t,e,i),Li(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ct(),i=Dn(n);i.tag=2,t!=null&&(i.callback=t),t=Un(e,i,n),t!==null&&(pt(t,e,n),Li(t,e,n))}};function hh(e,t,n,i,s,u,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,f):t.prototype&&t.prototype.isPureReactComponent?!Di(n,i)||!Di(s,u):!0}function mh(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&_l.enqueueReplaceState(t,t.state,null)}function ha(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=b({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function gh(e){Gr(e)}function ph(e){console.error(e)}function yh(e){Gr(e)}function cs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function vh(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Hl(e,t,n){return n=Dn(n),n.tag=3,n.payload={element:null},n.callback=function(){cs(e,t)},n}function bh(e){return e=Dn(e),e.tag=3,e}function Sh(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var u=i.value;e.payload=function(){return s(u)},e.callback=function(){vh(t,n,i)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){vh(t,n,i),typeof s!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})})}function Q0(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ha(t,n,s,!0),n=At.current,n!==null){switch(n.tag){case 31:case 13:return Bt===null?As():n.alternate===null&&Be===0&&(Be=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Jr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),cu(e,i,s)),!1;case 22:return n.flags|=65536,i===Jr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),cu(e,i,s)),!1}throw Error(l(435,n.tag))}return cu(e,i,s),As(),!1}if(ge)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==il&&(e=Error(l(422),{cause:i}),Oi(Rt(e,n)))):(i!==il&&(t=Error(l(423),{cause:i}),Oi(Rt(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Rt(i,n),s=Hl(e.stateNode,i,s),gl(e,s),Be!==4&&(Be=2)),!1;var u=Error(l(520),{cause:i});if(u=Rt(u,n),Ji===null?Ji=[u]:Ji.push(u),Be!==4&&(Be=2),t===null)return!0;i=Rt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Hl(n.stateNode,i,e),gl(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Nn===null||!Nn.has(u))))return n.flags|=65536,s&=-s,n.lanes|=s,s=bh(s),Sh(s,e,n,i),gl(n,s),!1}n=n.return}while(n!==null);return!1}var kl=Error(l(461)),Pe=!1;function et(e,t,n,i){t.child=e===null?zd(t,null,n,i):fa(t,e.child,n,i)}function Th(e,t,n,i,s){n=n.render;var u=t.ref;if("ref"in i){var f={};for(var g in i)g!=="ref"&&(f[g]=i[g])}else f=i;return oa(t),i=Tl(e,t,n,f,u,s),g=Al(),e!==null&&!Pe?(wl(e,t,s),fn(e,t,s)):(ge&&g&&nl(t),t.flags|=1,et(e,t,i,s),t.child)}function Ah(e,t,n,i,s){if(e===null){var u=n.type;return typeof u=="function"&&!$o(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,wh(e,t,u,i,s)):(e=Yr(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Ql(e,s)){var f=u.memoizedProps;if(n=n.compare,n=n!==null?n:Di,n(f,i)&&e.ref===t.ref)return fn(e,t,s)}return t.flags|=1,e=rn(u,i),e.ref=t.ref,e.return=t,t.child=e}function wh(e,t,n,i,s){if(e!==null){var u=e.memoizedProps;if(Di(u,i)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=i=u,Ql(e,s))(e.flags&131072)!==0&&(Pe=!0);else return t.lanes=e.lanes,fn(e,t,s)}return Gl(e,t,n,i,s)}function zh(e,t,n,i){var s=i.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~u}else i=0,t.child=null;return Eh(e,t,u,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zr(t,u!==null?u.cachePool:null),u!==null?Md(t,u):yl(),xd(t);else return i=t.lanes=536870912,Eh(e,t,u!==null?u.baseLanes|n:n,n,i)}else u!==null?(Zr(t,u.cachePool),Md(t,u),On(),t.memoizedState=null):(e!==null&&Zr(t,null),yl(),On());return et(e,t,s,n),t.child}function Pi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Eh(e,t,n,i,s){var u=fl();return u=u===null?null:{parent:Xe._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&Zr(t,null),yl(),xd(t),e!==null&&Ha(e,t,i,!0),t.childLanes=s,null}function fs(e,t){return t=hs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ch(e,t,n){return fa(t,e.child,null,n),e=fs(t,t.pendingProps),e.flags|=2,wt(t),t.memoizedState=null,e}function Z0(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(i.mode==="hidden")return e=fs(t,i),t.lanes=536870912,Pi(null,e);if(bl(t),(e=Re)?(e=_m(e,jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:zn!==null?{id:Ft,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},n=ud(e),n.return=t,t.child=n,We=t,Re=null)):e=null,e===null)throw Cn(t);return t.lanes=536870912,null}return fs(t,i)}var u=e.memoizedState;if(u!==null){var f=u.dehydrated;if(bl(t),s)if(t.flags&256)t.flags&=-257,t=Ch(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(Pe||Ha(e,t,n,!1),s=(n&e.childLanes)!==0,Pe||s){if(i=xe,i!==null&&(f=pf(i,n),f!==0&&f!==u.retryLane))throw u.retryLane=f,aa(e,f),pt(i,e,f),kl;As(),t=Ch(e,t,n)}else e=u.treeContext,Re=Nt(f.nextSibling),We=t,ge=!0,En=null,jt=!1,e!==null&&dd(t,e),t=fs(t,i),t.flags|=4096;return t}return e=rn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ds(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Gl(e,t,n,i,s){return oa(t),n=Tl(e,t,n,i,void 0,s),i=Al(),e!==null&&!Pe?(wl(e,t,s),fn(e,t,s)):(ge&&i&&nl(t),t.flags|=1,et(e,t,n,s),t.child)}function Mh(e,t,n,i,s,u){return oa(t),t.updateQueue=null,n=Ud(t,i,n,s),Dd(e),i=Al(),e!==null&&!Pe?(wl(e,t,u),fn(e,t,u)):(ge&&i&&nl(t),t.flags|=1,et(e,t,n,u),t.child)}function xh(e,t,n,i,s){if(oa(t),t.stateNode===null){var u=Ba,f=n.contextType;typeof f=="object"&&f!==null&&(u=$e(f)),u=new n(i,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=_l,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=i,u.state=t.memoizedState,u.refs={},hl(t),f=n.contextType,u.context=typeof f=="object"&&f!==null?$e(f):Ba,u.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Ll(t,n,f,i),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(f=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),f!==u.state&&_l.enqueueReplaceState(u,u.state,null),Hi(t,i,u,s),_i(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){u=t.stateNode;var g=t.memoizedProps,S=ha(n,g);u.props=S;var C=u.context,O=n.contextType;f=Ba,typeof O=="object"&&O!==null&&(f=$e(O));var j=n.getDerivedStateFromProps;O=typeof j=="function"||typeof u.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,O||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g||C!==f)&&mh(t,u,i,f),xn=!1;var M=t.memoizedState;u.state=M,Hi(t,i,u,s),_i(),C=t.memoizedState,g||M!==C||xn?(typeof j=="function"&&(Ll(t,n,j,i),C=t.memoizedState),(S=xn||hh(t,n,S,i,M,C,f))?(O||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=C),u.props=i,u.state=C,u.context=f,i=S):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{u=t.stateNode,ml(e,t),f=t.memoizedProps,O=ha(n,f),u.props=O,j=t.pendingProps,M=u.context,C=n.contextType,S=Ba,typeof C=="object"&&C!==null&&(S=$e(C)),g=n.getDerivedStateFromProps,(C=typeof g=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==j||M!==S)&&mh(t,u,i,S),xn=!1,M=t.memoizedState,u.state=M,Hi(t,i,u,s),_i();var D=t.memoizedState;f!==j||M!==D||xn||e!==null&&e.dependencies!==null&&Kr(e.dependencies)?(typeof g=="function"&&(Ll(t,n,g,i),D=t.memoizedState),(O=xn||hh(t,n,O,i,M,D,S)||e!==null&&e.dependencies!==null&&Kr(e.dependencies))?(C||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,D,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,D,S)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=D),u.props=i,u.state=D,u.context=S,i=O):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),i=!1)}return u=i,ds(e,t),i=(t.flags&128)!==0,u||i?(u=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&i?(t.child=fa(t,e.child,null,s),t.child=fa(t,null,n,s)):et(e,t,n,s),t.memoizedState=u.state,e=t.child):e=fn(e,t,s),e}function Dh(e,t,n,i){return ra(),t.flags|=256,et(e,t,n,i),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ql(e){return{baseLanes:e,cachePool:vd()}}function Pl(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Et),e}function Uh(e,t,n){var i=t.pendingProps,s=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),f&&(s=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(s?Rn(t):On(),(e=Re)?(e=_m(e,jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:zn!==null?{id:Ft,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},n=ud(e),n.return=t,t.child=n,We=t,Re=null)):e=null,e===null)throw Cn(t);return Cu(e)?t.lanes=32:t.lanes=536870912,null}var g=i.children;return i=i.fallback,s?(On(),s=t.mode,g=hs({mode:"hidden",children:g},s),i=ia(i,s,n,null),g.return=t,i.return=t,g.sibling=i,t.child=g,i=t.child,i.memoizedState=ql(n),i.childLanes=Pl(e,f,n),t.memoizedState=Xl,Pi(null,i)):(Rn(t),Yl(t,g))}var S=e.memoizedState;if(S!==null&&(g=S.dehydrated,g!==null)){if(u)t.flags&256?(Rn(t),t.flags&=-257,t=Fl(e,t,n)):t.memoizedState!==null?(On(),t.child=e.child,t.flags|=128,t=null):(On(),g=i.fallback,s=t.mode,i=hs({mode:"visible",children:i.children},s),g=ia(g,s,n,null),g.flags|=2,i.return=t,g.return=t,i.sibling=g,t.child=i,fa(t,e.child,null,n),i=t.child,i.memoizedState=ql(n),i.childLanes=Pl(e,f,n),t.memoizedState=Xl,t=Pi(null,i));else if(Rn(t),Cu(g)){if(f=g.nextSibling&&g.nextSibling.dataset,f)var C=f.dgst;f=C,i=Error(l(419)),i.stack="",i.digest=f,Oi({value:i,source:null,stack:null}),t=Fl(e,t,n)}else if(Pe||Ha(e,t,n,!1),f=(n&e.childLanes)!==0,Pe||f){if(f=xe,f!==null&&(i=pf(f,n),i!==0&&i!==S.retryLane))throw S.retryLane=i,aa(e,i),pt(f,e,i),kl;Eu(g)||As(),t=Fl(e,t,n)}else Eu(g)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Re=Nt(g.nextSibling),We=t,ge=!0,En=null,jt=!1,e!==null&&dd(t,e),t=Yl(t,i.children),t.flags|=4096);return t}return s?(On(),g=i.fallback,s=t.mode,S=e.child,C=S.sibling,i=rn(S,{mode:"hidden",children:i.children}),i.subtreeFlags=S.subtreeFlags&65011712,C!==null?g=rn(C,g):(g=ia(g,s,n,null),g.flags|=2),g.return=t,i.return=t,i.sibling=g,t.child=i,Pi(null,i),i=t.child,g=e.child.memoizedState,g===null?g=ql(n):(s=g.cachePool,s!==null?(S=Xe._currentValue,s=s.parent!==S?{parent:S,pool:S}:s):s=vd(),g={baseLanes:g.baseLanes|n,cachePool:s}),i.memoizedState=g,i.childLanes=Pl(e,f,n),t.memoizedState=Xl,Pi(e.child,i)):(Rn(t),n=e.child,e=n.sibling,n=rn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Yl(e,t){return t=hs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hs(e,t){return e=Tt(22,e,null,t),e.lanes=0,e}function Fl(e,t,n){return fa(t,e.child,null,n),e=Yl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rh(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ol(e.return,t,n)}function Kl(e,t,n,i,s,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:u}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=i,f.tail=n,f.tailMode=s,f.treeForkCount=u)}function Oh(e,t,n){var i=t.pendingProps,s=i.revealOrder,u=i.tail;i=i.children;var f=He.current,g=(f&2)!==0;if(g?(f=f&1|2,t.flags|=128):f&=1,q(He,f),et(e,t,i,n),i=ge?Ri:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rh(e,n,t);else if(e.tag===19)Rh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ts(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Kl(t,!1,s,n,u,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ts(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Kl(t,!0,n,null,u,i);break;case"together":Kl(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ha(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ql(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Kr(e)))}function I0(e,t,n){switch(t.tag){case 3:st(t,t.stateNode.containerInfo),Mn(t,Xe,e.memoizedState.cache),ra();break;case 27:case 5:pi(t);break;case 4:st(t,t.stateNode.containerInfo);break;case 10:Mn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,bl(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Rn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Uh(e,t,n):(Rn(t),e=fn(e,t,n),e!==null?e.sibling:null);Rn(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Ha(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Oh(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),q(He,He.current),i)break;return null;case 22:return t.lanes=0,zh(e,t,n,t.pendingProps);case 24:Mn(t,Xe,e.memoizedState.cache)}return fn(e,t,n)}function Vh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Pe=!0;else{if(!Ql(e,n)&&(t.flags&128)===0)return Pe=!1,I0(e,t,n);Pe=(e.flags&131072)!==0}else Pe=!1,ge&&(t.flags&1048576)!==0&&fd(t,Ri,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ua(t.elementType),t.type=e,typeof e=="function")$o(e)?(i=ha(e,i),t.tag=1,t=xh(null,t,e,i,n)):(t.tag=0,t=Gl(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===P){t.tag=11,t=Th(null,t,e,i,n);break e}else if(s===K){t.tag=14,t=Ah(null,t,e,i,n);break e}}throw t=Ge(e)||e,Error(l(306,t,""))}}return t;case 0:return Gl(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=ha(i,t.pendingProps),xh(e,t,i,s,n);case 3:e:{if(st(t,t.stateNode.containerInfo),e===null)throw Error(l(387));i=t.pendingProps;var u=t.memoizedState;s=u.element,ml(e,t),Hi(t,i,null,n);var f=t.memoizedState;if(i=f.cache,Mn(t,Xe,i),i!==u.cache&&ll(t,[Xe],n,!0),_i(),i=f.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Dh(e,t,i,n);break e}else if(i!==s){s=Rt(Error(l(424)),t),Oi(s),t=Dh(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=Nt(e.firstChild),We=t,ge=!0,En=null,jt=!0,n=zd(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ra(),i===s){t=fn(e,t,n);break e}et(e,t,i,n)}t=t.child}return t;case 26:return ds(e,t),e===null?(n=Pm(t.type,null,t.pendingProps,null))?t.memoizedState=n:ge||(n=t.type,e=t.pendingProps,i=Ds(ue.current).createElement(n),i[Je]=t,i[ct]=e,tt(i,n,e),Ze(i),t.stateNode=i):t.memoizedState=Pm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pi(t),e===null&&ge&&(i=t.stateNode=Gm(t.type,t.pendingProps,ue.current),We=t,jt=!0,s=Re,kn(t.type)?(Mu=s,Re=Nt(i.firstChild)):Re=s),et(e,t,t.pendingProps.children,n),ds(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((s=i=Re)&&(i=Cb(i,t.type,t.pendingProps,jt),i!==null?(t.stateNode=i,We=t,Re=Nt(i.firstChild),jt=!1,s=!0):s=!1),s||Cn(t)),pi(t),s=t.type,u=t.pendingProps,f=e!==null?e.memoizedProps:null,i=u.children,Au(s,u)?i=null:f!==null&&Au(s,f)&&(t.flags|=32),t.memoizedState!==null&&(s=Tl(e,t,G0,null,null,n),rr._currentValue=s),ds(e,t),et(e,t,i,n),t.child;case 6:return e===null&&ge&&((e=n=Re)&&(n=Mb(n,t.pendingProps,jt),n!==null?(t.stateNode=n,We=t,Re=null,e=!0):e=!1),e||Cn(t)),null;case 13:return Uh(e,t,n);case 4:return st(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=fa(t,null,i,n):et(e,t,i,n),t.child;case 11:return Th(e,t,t.type,t.pendingProps,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Mn(t,t.type,i.value),et(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,oa(t),s=$e(s),i=i(s),t.flags|=1,et(e,t,i,n),t.child;case 14:return Ah(e,t,t.type,t.pendingProps,n);case 15:return wh(e,t,t.type,t.pendingProps,n);case 19:return Oh(e,t,n);case 31:return Z0(e,t,n);case 22:return zh(e,t,n,t.pendingProps);case 24:return oa(t),i=$e(Xe),e===null?(s=fl(),s===null&&(s=xe,u=ul(),s.pooledCache=u,u.refCount++,u!==null&&(s.pooledCacheLanes|=n),s=u),t.memoizedState={parent:i,cache:s},hl(t),Mn(t,Xe,s)):((e.lanes&n)!==0&&(ml(e,t),Hi(t,null,null,n),_i()),s=e.memoizedState,u=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Mn(t,Xe,i)):(i=u.cache,Mn(t,Xe,i),i!==s.cache&&ll(t,[Xe],n,!0))),et(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function dn(e){e.flags|=4}function Zl(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(sm())e.flags|=8192;else throw ca=Jr,dl}else e.flags&=-16777217}function jh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zm(t))if(sm())e.flags|=8192;else throw ca=Jr,dl}function ms(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?hf():536870912,e.lanes|=t,Ja|=t)}function Yi(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function J0(e,t,n){var i=t.pendingProps;switch(al(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ln(Xe),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(_a(t)?dn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rl())),Oe(t),null;case 26:var s=t.type,u=t.memoizedState;return e===null?(dn(t),u!==null?(Oe(t),jh(t,u)):(Oe(t),Zl(t,s,null,i,n))):u?u!==e.memoizedState?(dn(t),Oe(t),jh(t,u)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&dn(t),Oe(t),Zl(t,s,e,i,n)),null;case 27:if(Er(t),n=ue.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&dn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Oe(t),null}e=Z.current,_a(t)?hd(t):(e=Gm(s,i,n),t.stateNode=e,dn(t))}return Oe(t),null;case 5:if(Er(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&dn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Oe(t),null}if(u=Z.current,_a(t))hd(t);else{var f=Ds(ue.current);switch(u){case 1:u=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:u=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":u=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":u=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":u=f.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?f.createElement("select",{is:i.is}):f.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?f.createElement(s,{is:i.is}):f.createElement(s)}}u[Je]=t,u[ct]=i;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)u.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=u;e:switch(tt(u,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&dn(t)}}return Oe(t),Zl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&dn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(e=ue.current,_a(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=We,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[Je]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Um(e.nodeValue,n)),e||Cn(t,!0)}else e=Ds(e).createTextNode(i),e[Je]=t,t.stateNode=e}return Oe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=_a(t),n!==null){if(e===null){if(!i)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[Je]=t}else ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else n=rl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(wt(t),t):(wt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Oe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=_a(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[Je]=t}else ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),s=!1}else s=rl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(wt(t),t):(wt(t),null)}return wt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ms(t,t.updateQueue),Oe(t),null);case 4:return _e(),e===null&&yu(t.stateNode.containerInfo),Oe(t),null;case 10:return ln(t.type),Oe(t),null;case 19:if(B(He),i=t.memoizedState,i===null)return Oe(t),null;if(s=(t.flags&128)!==0,u=i.rendering,u===null)if(s)Yi(i,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=ts(e),u!==null){for(t.flags|=128,Yi(i,!1),e=u.updateQueue,t.updateQueue=e,ms(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ld(n,e),n=n.sibling;return q(He,He.current&1|2),ge&&sn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&yt()>bs&&(t.flags|=128,s=!0,Yi(i,!1),t.lanes=4194304)}else{if(!s)if(e=ts(u),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,ms(t,e),Yi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!ge)return Oe(t),null}else 2*yt()-i.renderingStartTime>bs&&n!==536870912&&(t.flags|=128,s=!0,Yi(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(e=i.last,e!==null?e.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=yt(),e.sibling=null,n=He.current,q(He,s?n&1|2:n&1),ge&&sn(t,i.treeForkCount),e):(Oe(t),null);case 22:case 23:return wt(t),vl(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),n=t.updateQueue,n!==null&&ms(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&B(la),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ln(Xe),Oe(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function W0(e,t){switch(al(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ln(Xe),_e(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Er(t),null;case 31:if(t.memoizedState!==null){if(wt(t),t.alternate===null)throw Error(l(340));ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(wt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(He),null;case 4:return _e(),null;case 10:return ln(t.type),null;case 22:case 23:return wt(t),vl(),e!==null&&B(la),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ln(Xe),null;case 25:return null;default:return null}}function Bh(e,t){switch(al(t),t.tag){case 3:ln(Xe),_e();break;case 26:case 27:case 5:Er(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&wt(t);break;case 13:wt(t);break;case 19:B(He);break;case 10:ln(t.type);break;case 22:case 23:wt(t),vl(),e!==null&&B(la);break;case 24:ln(Xe)}}function Fi(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var u=n.create,f=n.inst;i=u(),f.destroy=i}n=n.next}while(n!==s)}}catch(g){we(t,t.return,g)}}function Vn(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var u=s.next;i=u;do{if((i.tag&e)===e){var f=i.inst,g=f.destroy;if(g!==void 0){f.destroy=void 0,s=t;var S=n,C=g;try{C()}catch(O){we(s,S,O)}}}i=i.next}while(i!==u)}}catch(O){we(t,t.return,O)}}function Nh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Cd(t,n)}catch(i){we(e,e.return,i)}}}function Lh(e,t,n){n.props=ha(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){we(e,t,i)}}function Ki(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){we(e,t,s)}}function Qt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){we(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){we(e,t,s)}else n.current=null}function _h(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){we(e,e.return,s)}}function Il(e,t,n){try{var i=e.stateNode;Sb(i,e.type,n,t),i[ct]=t}catch(s){we(e,e.return,s)}}function Hh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&kn(e.type)||e.tag===4}function Jl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&kn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nn));else if(i!==4&&(i===27&&kn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}function gs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&kn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}function kh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);tt(t,i,n),t[Je]=e,t[ct]=n}catch(u){we(e,e.return,u)}}var hn=!1,Ye=!1,$l=!1,Gh=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function $0(e,t){if(e=e.containerInfo,Su=Ns,e=$f(e),Fo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var f=0,g=-1,S=-1,C=0,O=0,j=e,M=null;t:for(;;){for(var D;j!==n||s!==0&&j.nodeType!==3||(g=f+s),j!==u||i!==0&&j.nodeType!==3||(S=f+i),j.nodeType===3&&(f+=j.nodeValue.length),(D=j.firstChild)!==null;)M=j,j=D;for(;;){if(j===e)break t;if(M===n&&++C===s&&(g=f),M===u&&++O===i&&(S=f),(D=j.nextSibling)!==null)break;j=M,M=j.parentNode}j=D}n=g===-1||S===-1?null:{start:g,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tu={focusedElem:e,selectionRange:n},Ns=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,s=u.memoizedProps,u=u.memoizedState,i=n.stateNode;try{var F=ha(n.type,s);e=i.getSnapshotBeforeUpdate(F,u),i.__reactInternalSnapshotBeforeUpdate=e}catch(ee){we(n,n.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)zu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function Xh(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:gn(e,n),i&4&&Fi(5,n);break;case 1:if(gn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){we(n,n.return,f)}else{var s=ha(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){we(n,n.return,f)}}i&64&&Nh(n),i&512&&Ki(n,n.return);break;case 3:if(gn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Cd(e,t)}catch(f){we(n,n.return,f)}}break;case 27:t===null&&i&4&&kh(n);case 26:case 5:gn(e,n),t===null&&i&4&&_h(n),i&512&&Ki(n,n.return);break;case 12:gn(e,n);break;case 31:gn(e,n),i&4&&Yh(e,n);break;case 13:gn(e,n),i&4&&Fh(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=lb.bind(null,n),xb(e,n))));break;case 22:if(i=n.memoizedState!==null||hn,!i){t=t!==null&&t.memoizedState!==null||Ye,s=hn;var u=Ye;hn=i,(Ye=t)&&!u?pn(e,n,(n.subtreeFlags&8772)!==0):gn(e,n),hn=s,Ye=u}break;case 30:break;default:gn(e,n)}}function qh(e){var t=e.alternate;t!==null&&(e.alternate=null,qh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Do(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,dt=!1;function mn(e,t,n){for(n=n.child;n!==null;)Ph(e,t,n),n=n.sibling}function Ph(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(yi,n)}catch{}switch(n.tag){case 26:Ye||Qt(n,t),mn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ye||Qt(n,t);var i=Ve,s=dt;kn(n.type)&&(Ve=n.stateNode,dt=!1),mn(e,t,n),nr(n.stateNode),Ve=i,dt=s;break;case 5:Ye||Qt(n,t);case 6:if(i=Ve,s=dt,Ve=null,mn(e,t,n),Ve=i,dt=s,Ve!==null)if(dt)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(n.stateNode)}catch(u){we(n,t,u)}else try{Ve.removeChild(n.stateNode)}catch(u){we(n,t,u)}break;case 18:Ve!==null&&(dt?(e=Ve,Nm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ri(e)):Nm(Ve,n.stateNode));break;case 4:i=Ve,s=dt,Ve=n.stateNode.containerInfo,dt=!0,mn(e,t,n),Ve=i,dt=s;break;case 0:case 11:case 14:case 15:Vn(2,n,t),Ye||Vn(4,n,t),mn(e,t,n);break;case 1:Ye||(Qt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Lh(n,t,i)),mn(e,t,n);break;case 21:mn(e,t,n);break;case 22:Ye=(i=Ye)||n.memoizedState!==null,mn(e,t,n),Ye=i;break;default:mn(e,t,n)}}function Yh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ri(e)}catch(n){we(t,t.return,n)}}}function Fh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ri(e)}catch(n){we(t,t.return,n)}}function eb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Gh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Gh),t;default:throw Error(l(435,e.tag))}}function ps(e,t){var n=eb(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=ub.bind(null,e,i);i.then(s,s)}})}function ht(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],u=e,f=t,g=f;e:for(;g!==null;){switch(g.tag){case 27:if(kn(g.type)){Ve=g.stateNode,dt=!1;break e}break;case 5:Ve=g.stateNode,dt=!1;break e;case 3:case 4:Ve=g.stateNode.containerInfo,dt=!0;break e}g=g.return}if(Ve===null)throw Error(l(160));Ph(u,f,s),Ve=null,dt=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Kh(t,e),t=t.sibling}var Gt=null;function Kh(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ht(t,e),mt(e),i&4&&(Vn(3,e,e.return),Fi(3,e),Vn(5,e,e.return));break;case 1:ht(t,e),mt(e),i&512&&(Ye||n===null||Qt(n,n.return)),i&64&&hn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=Gt;if(ht(t,e),mt(e),i&512&&(Ye||n===null||Qt(n,n.return)),i&4){var u=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;t:switch(i){case"title":u=s.getElementsByTagName("title")[0],(!u||u[Si]||u[Je]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=s.createElement(i),s.head.insertBefore(u,s.querySelector("head > title"))),tt(u,i,n),u[Je]=e,Ze(u),i=u;break e;case"link":var f=Km("link","href",s).get(i+(n.href||""));if(f){for(var g=0;g<f.length;g++)if(u=f[g],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(g,1);break t}}u=s.createElement(i),tt(u,i,n),s.head.appendChild(u);break;case"meta":if(f=Km("meta","content",s).get(i+(n.content||""))){for(g=0;g<f.length;g++)if(u=f[g],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(g,1);break t}}u=s.createElement(i),tt(u,i,n),s.head.appendChild(u);break;default:throw Error(l(468,i))}u[Je]=e,Ze(u),i=u}e.stateNode=i}else Qm(s,e.type,e.stateNode);else e.stateNode=Fm(s,i,e.memoizedProps);else u!==i?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,i===null?Qm(s,e.type,e.stateNode):Fm(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Il(e,e.memoizedProps,n.memoizedProps)}break;case 27:ht(t,e),mt(e),i&512&&(Ye||n===null||Qt(n,n.return)),n!==null&&i&4&&Il(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ht(t,e),mt(e),i&512&&(Ye||n===null||Qt(n,n.return)),e.flags&32){s=e.stateNode;try{xa(s,"")}catch(F){we(e,e.return,F)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Il(e,s,n!==null?n.memoizedProps:s)),i&1024&&($l=!0);break;case 6:if(ht(t,e),mt(e),i&4){if(e.stateNode===null)throw Error(l(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(F){we(e,e.return,F)}}break;case 3:if(Os=null,s=Gt,Gt=Us(t.containerInfo),ht(t,e),Gt=s,mt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ri(t.containerInfo)}catch(F){we(e,e.return,F)}$l&&($l=!1,Qh(e));break;case 4:i=Gt,Gt=Us(e.stateNode.containerInfo),ht(t,e),mt(e),Gt=i;break;case 12:ht(t,e),mt(e);break;case 31:ht(t,e),mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ps(e,i)));break;case 13:ht(t,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(vs=yt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ps(e,i)));break;case 22:s=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,C=hn,O=Ye;if(hn=C||s,Ye=O||S,ht(t,e),Ye=O,hn=C,mt(e),i&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||S||hn||Ye||ma(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(u=S.stateNode,s)f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{g=S.stateNode;var j=S.memoizedProps.style,M=j!=null&&j.hasOwnProperty("display")?j.display:null;g.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(F){we(S,S.return,F)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=s?"":S.memoizedProps}catch(F){we(S,S.return,F)}}}else if(t.tag===18){if(n===null){S=t;try{var D=S.stateNode;s?Lm(D,!0):Lm(S.stateNode,!1)}catch(F){we(S,S.return,F)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,ps(e,n))));break;case 19:ht(t,e),mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ps(e,i)));break;case 30:break;case 21:break;default:ht(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Hh(i)){n=i;break}i=i.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var s=n.stateNode,u=Jl(e);gs(e,u,s);break;case 5:var f=n.stateNode;n.flags&32&&(xa(f,""),n.flags&=-33);var g=Jl(e);gs(e,g,f);break;case 3:case 4:var S=n.stateNode.containerInfo,C=Jl(e);Wl(e,C,S);break;default:throw Error(l(161))}}catch(O){we(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Qh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function gn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Xh(e,t.alternate,t),t=t.sibling}function ma(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vn(4,t,t.return),ma(t);break;case 1:Qt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Lh(t,t.return,n),ma(t);break;case 27:nr(t.stateNode);case 26:case 5:Qt(t,t.return),ma(t);break;case 22:t.memoizedState===null&&ma(t);break;case 30:ma(t);break;default:ma(t)}e=e.sibling}}function pn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,u=t,f=u.flags;switch(u.tag){case 0:case 11:case 15:pn(s,u,n),Fi(4,u);break;case 1:if(pn(s,u,n),i=u,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(C){we(i,i.return,C)}if(i=u,s=i.updateQueue,s!==null){var g=i.stateNode;try{var S=s.shared.hiddenCallbacks;if(S!==null)for(s.shared.hiddenCallbacks=null,s=0;s<S.length;s++)Ed(S[s],g)}catch(C){we(i,i.return,C)}}n&&f&64&&Nh(u),Ki(u,u.return);break;case 27:kh(u);case 26:case 5:pn(s,u,n),n&&i===null&&f&4&&_h(u),Ki(u,u.return);break;case 12:pn(s,u,n);break;case 31:pn(s,u,n),n&&f&4&&Yh(s,u);break;case 13:pn(s,u,n),n&&f&4&&Fh(s,u);break;case 22:u.memoizedState===null&&pn(s,u,n),Ki(u,u.return);break;case 30:break;default:pn(s,u,n)}t=t.sibling}}function eu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Vi(n))}function tu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vi(e))}function Xt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zh(e,t,n,i),t=t.sibling}function Zh(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(e,t,n,i),s&2048&&Fi(9,t);break;case 1:Xt(e,t,n,i);break;case 3:Xt(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vi(e)));break;case 12:if(s&2048){Xt(e,t,n,i),e=t.stateNode;try{var u=t.memoizedProps,f=u.id,g=u.onPostCommit;typeof g=="function"&&g(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){we(t,t.return,S)}}else Xt(e,t,n,i);break;case 31:Xt(e,t,n,i);break;case 13:Xt(e,t,n,i);break;case 23:break;case 22:u=t.stateNode,f=t.alternate,t.memoizedState!==null?u._visibility&2?Xt(e,t,n,i):Qi(e,t):u._visibility&2?Xt(e,t,n,i):(u._visibility|=2,Qa(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&eu(f,t);break;case 24:Xt(e,t,n,i),s&2048&&tu(t.alternate,t);break;default:Xt(e,t,n,i)}}function Qa(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,f=t,g=n,S=i,C=f.flags;switch(f.tag){case 0:case 11:case 15:Qa(u,f,g,S,s),Fi(8,f);break;case 23:break;case 22:var O=f.stateNode;f.memoizedState!==null?O._visibility&2?Qa(u,f,g,S,s):Qi(u,f):(O._visibility|=2,Qa(u,f,g,S,s)),s&&C&2048&&eu(f.alternate,f);break;case 24:Qa(u,f,g,S,s),s&&C&2048&&tu(f.alternate,f);break;default:Qa(u,f,g,S,s)}t=t.sibling}}function Qi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Qi(n,i),s&2048&&eu(i.alternate,i);break;case 24:Qi(n,i),s&2048&&tu(i.alternate,i);break;default:Qi(n,i)}t=t.sibling}}var Zi=8192;function Za(e,t,n){if(e.subtreeFlags&Zi)for(e=e.child;e!==null;)Ih(e,t,n),e=e.sibling}function Ih(e,t,n){switch(e.tag){case 26:Za(e,t,n),e.flags&Zi&&e.memoizedState!==null&&kb(n,Gt,e.memoizedState,e.memoizedProps);break;case 5:Za(e,t,n);break;case 3:case 4:var i=Gt;Gt=Us(e.stateNode.containerInfo),Za(e,t,n),Gt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Zi,Zi=16777216,Za(e,t,n),Zi=i):Za(e,t,n));break;default:Za(e,t,n)}}function Jh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ii(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ie=i,$h(i,e)}Jh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wh(e),e=e.sibling}function Wh(e){switch(e.tag){case 0:case 11:case 15:Ii(e),e.flags&2048&&Vn(9,e,e.return);break;case 3:Ii(e);break;case 12:Ii(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ys(e)):Ii(e);break;default:Ii(e)}}function ys(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ie=i,$h(i,e)}Jh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vn(8,t,t.return),ys(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ys(t));break;default:ys(t)}e=e.sibling}}function $h(e,t){for(;Ie!==null;){var n=Ie;switch(n.tag){case 0:case 11:case 15:Vn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Vi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ie=i;else e:for(n=e;Ie!==null;){i=Ie;var s=i.sibling,u=i.return;if(qh(i),i===n){Ie=null;break e}if(s!==null){s.return=u,Ie=s;break e}Ie=u}}}var tb={getCacheForType:function(e){var t=$e(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $e(Xe).controller.signal}},nb=typeof WeakMap=="function"?WeakMap:Map,be=0,xe=null,ce=null,de=0,Ae=0,zt=null,jn=!1,Ia=!1,nu=!1,yn=0,Be=0,Bn=0,ga=0,au=0,Et=0,Ja=0,Ji=null,gt=null,iu=!1,vs=0,em=0,bs=1/0,Ss=null,Nn=null,Ke=0,Ln=null,Wa=null,vn=0,ru=0,su=null,tm=null,Wi=0,ou=null;function Ct(){return(be&2)!==0&&de!==0?de&-de:R.T!==null?hu():yf()}function nm(){if(Et===0)if((de&536870912)===0||ge){var e=xr;xr<<=1,(xr&3932160)===0&&(xr=262144),Et=e}else Et=536870912;return e=At.current,e!==null&&(e.flags|=32),Et}function pt(e,t,n){(e===xe&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&($a(e,0),_n(e,de,Et,!1)),bi(e,n),((be&2)===0||e!==xe)&&(e===xe&&((be&2)===0&&(ga|=n),Be===4&&_n(e,de,Et,!1)),Zt(e))}function am(e,t,n){if((be&6)!==0)throw Error(l(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||vi(e,t),s=i?rb(e,t):uu(e,t,!0),u=i;do{if(s===0){Ia&&!i&&_n(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!ab(n)){s=uu(e,t,!1),u=!1;continue}if(s===2){if(u=t,e.errorRecoveryDisabledLanes&u)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var g=e;s=Ji;var S=g.current.memoizedState.isDehydrated;if(S&&($a(g,f).flags|=256),f=uu(g,f,!1),f!==2){if(nu&&!S){g.errorRecoveryDisabledLanes|=u,ga|=u,s=4;break e}u=gt,gt=s,u!==null&&(gt===null?gt=u:gt.push.apply(gt,u))}s=f}if(u=!1,s!==2)continue}}if(s===1){$a(e,0),_n(e,t,0,!0);break}e:{switch(i=e,u=s,u){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:_n(i,t,Et,!jn);break e;case 2:gt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(s=vs+300-yt(),10<s)){if(_n(i,t,Et,!jn),Ur(i,0,!0)!==0)break e;vn=t,i.timeoutHandle=jm(im.bind(null,i,n,gt,Ss,iu,t,Et,ga,Ja,jn,u,"Throttled",-0,0),s);break e}im(i,n,gt,Ss,iu,t,Et,ga,Ja,jn,u,null,-0,0)}}break}while(!0);Zt(e)}function im(e,t,n,i,s,u,f,g,S,C,O,j,M,D){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},Ih(t,u,j);var F=(u&62914560)===u?vs-yt():(u&4194048)===u?em-yt():0;if(F=Gb(j,F),F!==null){vn=u,e.cancelPendingCommit=F(dm.bind(null,e,t,u,n,i,s,f,g,S,O,j,null,M,D)),_n(e,u,f,!C);return}}dm(e,t,u,n,i,s,f,g,S)}function ab(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],u=s.getSnapshot;s=s.value;try{if(!St(u(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t,n,i){t&=~au,t&=~ga,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var u=31-bt(s),f=1<<u;i[u]=-1,s&=~f}n!==0&&mf(e,n,t)}function Ts(){return(be&6)===0?($i(0),!1):!0}function lu(){if(ce!==null){if(Ae===0)var e=ce.return;else e=ce,on=sa=null,zl(e),qa=null,Bi=0,e=ce;for(;e!==null;)Bh(e.alternate,e),e=e.return;ce=null}}function $a(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,wb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),vn=0,lu(),xe=e,ce=n=rn(e.current,null),de=t,Ae=0,zt=null,jn=!1,Ia=vi(e,t),nu=!1,Ja=Et=au=ga=Bn=Be=0,gt=Ji=null,iu=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-bt(i),u=1<<s;t|=e[s],i&=~u}return yn=t,Xr(),n}function rm(e,t){re=null,R.H=qi,t===Xa||t===Ir?(t=Td(),Ae=3):t===dl?(t=Td(),Ae=4):Ae=t===kl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,zt=t,ce===null&&(Be=1,cs(e,Rt(t,e.current)))}function sm(){var e=At.current;return e===null?!0:(de&4194048)===de?Bt===null:(de&62914560)===de||(de&536870912)!==0?e===Bt:!1}function om(){var e=R.H;return R.H=qi,e===null?qi:e}function lm(){var e=R.A;return R.A=tb,e}function As(){Be=4,jn||(de&4194048)!==de&&At.current!==null||(Ia=!0),(Bn&134217727)===0&&(ga&134217727)===0||xe===null||_n(xe,de,Et,!1)}function uu(e,t,n){var i=be;be|=2;var s=om(),u=lm();(xe!==e||de!==t)&&(Ss=null,$a(e,t)),t=!1;var f=Be;e:do try{if(Ae!==0&&ce!==null){var g=ce,S=zt;switch(Ae){case 8:lu(),f=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var C=Ae;if(Ae=0,zt=null,ei(e,g,S,C),n&&Ia){f=0;break e}break;default:C=Ae,Ae=0,zt=null,ei(e,g,S,C)}}ib(),f=Be;break}catch(O){rm(e,O)}while(!0);return t&&e.shellSuspendCounter++,on=sa=null,be=i,R.H=s,R.A=u,ce===null&&(xe=null,de=0,Xr()),f}function ib(){for(;ce!==null;)um(ce)}function rb(e,t){var n=be;be|=2;var i=om(),s=lm();xe!==e||de!==t?(Ss=null,bs=yt()+500,$a(e,t)):Ia=vi(e,t);e:do try{if(Ae!==0&&ce!==null){t=ce;var u=zt;t:switch(Ae){case 1:Ae=0,zt=null,ei(e,t,u,1);break;case 2:case 9:if(bd(u)){Ae=0,zt=null,cm(t);break}t=function(){Ae!==2&&Ae!==9||xe!==e||(Ae=7),Zt(e)},u.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:bd(u)?(Ae=0,zt=null,cm(t)):(Ae=0,zt=null,ei(e,t,u,7));break;case 5:var f=null;switch(ce.tag){case 26:f=ce.memoizedState;case 5:case 27:var g=ce;if(f?Zm(f):g.stateNode.complete){Ae=0,zt=null;var S=g.sibling;if(S!==null)ce=S;else{var C=g.return;C!==null?(ce=C,ws(C)):ce=null}break t}}Ae=0,zt=null,ei(e,t,u,5);break;case 6:Ae=0,zt=null,ei(e,t,u,6);break;case 8:lu(),Be=6;break e;default:throw Error(l(462))}}sb();break}catch(O){rm(e,O)}while(!0);return on=sa=null,R.H=i,R.A=s,be=n,ce!==null?0:(xe=null,de=0,Xr(),Be)}function sb(){for(;ce!==null&&!Dv();)um(ce)}function um(e){var t=Vh(e.alternate,e,yn);e.memoizedProps=e.pendingProps,t===null?ws(e):ce=t}function cm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Mh(n,t,t.pendingProps,t.type,void 0,de);break;case 11:t=Mh(n,t,t.pendingProps,t.type.render,t.ref,de);break;case 5:zl(t);default:Bh(n,t),t=ce=ld(t,yn),t=Vh(n,t,yn)}e.memoizedProps=e.pendingProps,t===null?ws(e):ce=t}function ei(e,t,n,i){on=sa=null,zl(t),qa=null,Bi=0;var s=t.return;try{if(Q0(e,s,t,n,de)){Be=1,cs(e,Rt(n,e.current)),ce=null;return}}catch(u){if(s!==null)throw ce=s,u;Be=1,cs(e,Rt(n,e.current)),ce=null;return}t.flags&32768?(ge||i===1?e=!0:Ia||(de&536870912)!==0?e=!1:(jn=e=!0,(i===2||i===9||i===3||i===6)&&(i=At.current,i!==null&&i.tag===13&&(i.flags|=16384))),fm(t,e)):ws(t)}function ws(e){var t=e;do{if((t.flags&32768)!==0){fm(t,jn);return}e=t.return;var n=J0(t.alternate,t,yn);if(n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);Be===0&&(Be=5)}function fm(e,t){do{var n=W0(e.alternate,e);if(n!==null){n.flags&=32767,ce=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ce=e;return}ce=e=n}while(e!==null);Be=6,ce=null}function dm(e,t,n,i,s,u,f,g,S){e.cancelPendingCommit=null;do zs();while(Ke!==0);if((be&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(u=t.lanes|t.childLanes,u|=Jo,Hv(e,n,u,f,g,S),e===xe&&(ce=xe=null,de=0),Wa=t,Ln=e,vn=n,ru=u,su=s,tm=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cb(Cr,function(){return ym(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=R.T,R.T=null,s=G.p,G.p=2,f=be,be|=4;try{$0(e,t,n)}finally{be=f,G.p=s,R.T=i}}Ke=1,hm(),mm(),gm()}}function hm(){if(Ke===1){Ke=0;var e=Ln,t=Wa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null;var i=G.p;G.p=2;var s=be;be|=4;try{Kh(t,e);var u=Tu,f=$f(e.containerInfo),g=u.focusedElem,S=u.selectionRange;if(f!==g&&g&&g.ownerDocument&&Wf(g.ownerDocument.documentElement,g)){if(S!==null&&Fo(g)){var C=S.start,O=S.end;if(O===void 0&&(O=C),"selectionStart"in g)g.selectionStart=C,g.selectionEnd=Math.min(O,g.value.length);else{var j=g.ownerDocument||document,M=j&&j.defaultView||window;if(M.getSelection){var D=M.getSelection(),F=g.textContent.length,ee=Math.min(S.start,F),Me=S.end===void 0?ee:Math.min(S.end,F);!D.extend&&ee>Me&&(f=Me,Me=ee,ee=f);var z=Jf(g,ee),T=Jf(g,Me);if(z&&T&&(D.rangeCount!==1||D.anchorNode!==z.node||D.anchorOffset!==z.offset||D.focusNode!==T.node||D.focusOffset!==T.offset)){var E=j.createRange();E.setStart(z.node,z.offset),D.removeAllRanges(),ee>Me?(D.addRange(E),D.extend(T.node,T.offset)):(E.setEnd(T.node,T.offset),D.addRange(E))}}}}for(j=[],D=g;D=D.parentNode;)D.nodeType===1&&j.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<j.length;g++){var V=j[g];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Ns=!!Su,Tu=Su=null}finally{be=s,G.p=i,R.T=n}}e.current=t,Ke=2}}function mm(){if(Ke===2){Ke=0;var e=Ln,t=Wa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=R.T,R.T=null;var i=G.p;G.p=2;var s=be;be|=4;try{Xh(e,t.alternate,t)}finally{be=s,G.p=i,R.T=n}}Ke=3}}function gm(){if(Ke===4||Ke===3){Ke=0,Uv();var e=Ln,t=Wa,n=vn,i=tm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,Wa=Ln=null,pm(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Nn=null),Mo(n),t=t.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(yi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=R.T,s=G.p,G.p=2,R.T=null;try{for(var u=e.onRecoverableError,f=0;f<i.length;f++){var g=i[f];u(g.value,{componentStack:g.stack})}}finally{R.T=t,G.p=s}}(vn&3)!==0&&zs(),Zt(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===ou?Wi++:(Wi=0,ou=e):Wi=0,$i(0)}}function pm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Vi(t)))}function zs(){return hm(),mm(),gm(),ym()}function ym(){if(Ke!==5)return!1;var e=Ln,t=ru;ru=0;var n=Mo(vn),i=R.T,s=G.p;try{G.p=32>n?32:n,R.T=null,n=su,su=null;var u=Ln,f=vn;if(Ke=0,Wa=Ln=null,vn=0,(be&6)!==0)throw Error(l(331));var g=be;if(be|=4,Wh(u.current),Zh(u,u.current,f,n),be=g,$i(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(yi,u)}catch{}return!0}finally{G.p=s,R.T=i,pm(e,t)}}function vm(e,t,n){t=Rt(n,t),t=Hl(e.stateNode,t,2),e=Un(e,t,2),e!==null&&(bi(e,2),Zt(e))}function we(e,t,n){if(e.tag===3)vm(e,e,n);else for(;t!==null;){if(t.tag===3){vm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Nn===null||!Nn.has(i))){e=Rt(n,e),n=bh(2),i=Un(t,n,2),i!==null&&(Sh(n,i,t,e),bi(i,2),Zt(i));break}}t=t.return}}function cu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new nb;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(nu=!0,s.add(n),e=ob.bind(null,e,t,n),t.then(e,e))}function ob(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,xe===e&&(de&n)===n&&(Be===4||Be===3&&(de&62914560)===de&&300>yt()-vs?(be&2)===0&&$a(e,0):au|=n,Ja===de&&(Ja=0)),Zt(e)}function bm(e,t){t===0&&(t=hf()),e=aa(e,t),e!==null&&(bi(e,t),Zt(e))}function lb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bm(e,n)}function ub(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(l(314))}i!==null&&i.delete(t),bm(e,n)}function cb(e,t){return wo(e,t)}var Es=null,ti=null,fu=!1,Cs=!1,du=!1,Hn=0;function Zt(e){e!==ti&&e.next===null&&(ti===null?Es=ti=e:ti=ti.next=e),Cs=!0,fu||(fu=!0,db())}function $i(e,t){if(!du&&Cs){du=!0;do for(var n=!1,i=Es;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var u=0;else{var f=i.suspendedLanes,g=i.pingedLanes;u=(1<<31-bt(42|e)+1)-1,u&=s&~(f&~g),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,wm(i,u))}else u=de,u=Ur(i,i===xe?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||vi(i,u)||(n=!0,wm(i,u));i=i.next}while(n);du=!1}}function fb(){Sm()}function Sm(){Cs=fu=!1;var e=0;Hn!==0&&Ab()&&(e=Hn);for(var t=yt(),n=null,i=Es;i!==null;){var s=i.next,u=Tm(i,t);u===0?(i.next=null,n===null?Es=s:n.next=s,s===null&&(ti=n)):(n=i,(e!==0||(u&3)!==0)&&(Cs=!0)),i=s}Ke!==0&&Ke!==5||$i(e),Hn!==0&&(Hn=0)}function Tm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var f=31-bt(u),g=1<<f,S=s[f];S===-1?((g&n)===0||(g&i)!==0)&&(s[f]=_v(g,t)):S<=t&&(e.expiredLanes|=g),u&=~g}if(t=xe,n=de,n=Ur(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&zo(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||vi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&zo(i),Mo(n)){case 2:case 8:n=ff;break;case 32:n=Cr;break;case 268435456:n=df;break;default:n=Cr}return i=Am.bind(null,e),n=wo(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&zo(i),e.callbackPriority=2,e.callbackNode=null,2}function Am(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(zs()&&e.callbackNode!==n)return null;var i=de;return i=Ur(e,e===xe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(am(e,i,t),Tm(e,yt()),e.callbackNode!=null&&e.callbackNode===n?Am.bind(null,e):null)}function wm(e,t){if(zs())return null;am(e,t,!0)}function db(){zb(function(){(be&6)!==0?wo(cf,fb):Sm()})}function hu(){if(Hn===0){var e=ka;e===0&&(e=Mr,Mr<<=1,(Mr&261888)===0&&(Mr=256)),Hn=e}return Hn}function zm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:jr(""+e)}function Em(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hb(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var u=zm((s[ct]||null).action),f=i.submitter;f&&(t=(t=f[ct]||null)?zm(t.formAction):f.getAttribute("formAction"),t!==null&&(u=t,f=null));var g=new _r("action","action",null,i,s);e.push({event:g,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Hn!==0){var S=f?Em(s,f):new FormData(s);Vl(n,{pending:!0,data:S,method:s.method,action:u},null,S)}}else typeof u=="function"&&(g.preventDefault(),S=f?Em(s,f):new FormData(s),Vl(n,{pending:!0,data:S,method:s.method,action:u},u,S))},currentTarget:s}]})}}for(var mu=0;mu<Io.length;mu++){var gu=Io[mu],mb=gu.toLowerCase(),gb=gu[0].toUpperCase()+gu.slice(1);kt(mb,"on"+gb)}kt(nd,"onAnimationEnd"),kt(ad,"onAnimationIteration"),kt(id,"onAnimationStart"),kt("dblclick","onDoubleClick"),kt("focusin","onFocus"),kt("focusout","onBlur"),kt(R0,"onTransitionRun"),kt(O0,"onTransitionStart"),kt(V0,"onTransitionCancel"),kt(rd,"onTransitionEnd"),Ca("onMouseEnter",["mouseout","mouseover"]),Ca("onMouseLeave",["mouseout","mouseover"]),Ca("onPointerEnter",["pointerout","pointerover"]),Ca("onPointerLeave",["pointerout","pointerover"]),$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$n("onBeforeInput",["compositionend","keypress","textInput","paste"]),$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(er));function Cm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var f=i.length-1;0<=f;f--){var g=i[f],S=g.instance,C=g.currentTarget;if(g=g.listener,S!==u&&s.isPropagationStopped())break e;u=g,s.currentTarget=C;try{u(s)}catch(O){Gr(O)}s.currentTarget=null,u=S}else for(f=0;f<i.length;f++){if(g=i[f],S=g.instance,C=g.currentTarget,g=g.listener,S!==u&&s.isPropagationStopped())break e;u=g,s.currentTarget=C;try{u(s)}catch(O){Gr(O)}s.currentTarget=null,u=S}}}}function fe(e,t){var n=t[xo];n===void 0&&(n=t[xo]=new Set);var i=e+"__bubble";n.has(i)||(Mm(t,e,2,!1),n.add(i))}function pu(e,t,n){var i=0;t&&(i|=4),Mm(n,e,i,t)}var Ms="_reactListening"+Math.random().toString(36).slice(2);function yu(e){if(!e[Ms]){e[Ms]=!0,Sf.forEach(function(n){n!=="selectionchange"&&(pb.has(n)||pu(n,!1,e),pu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ms]||(t[Ms]=!0,pu("selectionchange",!1,t))}}function Mm(e,t,n,i){switch(ng(t)){case 2:var s=Pb;break;case 8:s=Yb;break;default:s=Ou}n=s.bind(null,t,n,e),s=void 0,!Lo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function vu(e,t,n,i,s){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var f=i.tag;if(f===3||f===4){var g=i.stateNode.containerInfo;if(g===s)break;if(f===4)for(f=i.return;f!==null;){var S=f.tag;if((S===3||S===4)&&f.stateNode.containerInfo===s)return;f=f.return}for(;g!==null;){if(f=wa(g),f===null)return;if(S=f.tag,S===5||S===6||S===26||S===27){i=u=f;continue e}g=g.parentNode}}i=i.return}Of(function(){var C=u,O=Bo(n),j=[];e:{var M=sd.get(e);if(M!==void 0){var D=_r,F=e;switch(e){case"keypress":if(Nr(n)===0)break e;case"keydown":case"keyup":D=u0;break;case"focusin":F="focus",D=Go;break;case"focusout":F="blur",D=Go;break;case"beforeblur":case"afterblur":D=Go;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=Jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=d0;break;case nd:case ad:case id:D=e0;break;case rd:D=m0;break;case"scroll":case"scrollend":D=Zv;break;case"wheel":D=p0;break;case"copy":case"cut":case"paste":D=n0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Lf;break;case"toggle":case"beforetoggle":D=v0}var ee=(t&4)!==0,Me=!ee&&(e==="scroll"||e==="scrollend"),z=ee?M!==null?M+"Capture":null:M;ee=[];for(var T=C,E;T!==null;){var V=T;if(E=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||E===null||z===null||(V=Ai(T,z),V!=null&&ee.push(tr(T,V,E))),Me)break;T=T.return}0<ee.length&&(M=new D(M,F,null,n,O),j.push({event:M,listeners:ee}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",M&&n!==jo&&(F=n.relatedTarget||n.fromElement)&&(wa(F)||F[Aa]))break e;if((D||M)&&(M=O.window===O?O:(M=O.ownerDocument)?M.defaultView||M.parentWindow:window,D?(F=n.relatedTarget||n.toElement,D=C,F=F?wa(F):null,F!==null&&(Me=h(F),ee=F.tag,F!==Me||ee!==5&&ee!==27&&ee!==6)&&(F=null)):(D=null,F=C),D!==F)){if(ee=Bf,V="onMouseLeave",z="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Lf,V="onPointerLeave",z="onPointerEnter",T="pointer"),Me=D==null?M:Ti(D),E=F==null?M:Ti(F),M=new ee(V,T+"leave",D,n,O),M.target=Me,M.relatedTarget=E,V=null,wa(O)===C&&(ee=new ee(z,T+"enter",F,n,O),ee.target=E,ee.relatedTarget=Me,V=ee),Me=V,D&&F)t:{for(ee=yb,z=D,T=F,E=0,V=z;V;V=ee(V))E++;V=0;for(var $=T;$;$=ee($))V++;for(;0<E-V;)z=ee(z),E--;for(;0<V-E;)T=ee(T),V--;for(;E--;){if(z===T||T!==null&&z===T.alternate){ee=z;break t}z=ee(z),T=ee(T)}ee=null}else ee=null;D!==null&&xm(j,M,D,ee,!1),F!==null&&Me!==null&&xm(j,Me,F,ee,!0)}}e:{if(M=C?Ti(C):window,D=M.nodeName&&M.nodeName.toLowerCase(),D==="select"||D==="input"&&M.type==="file")var pe=Yf;else if(qf(M))if(Ff)pe=x0;else{pe=C0;var I=E0}else D=M.nodeName,!D||D.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?C&&Vo(C.elementType)&&(pe=Yf):pe=M0;if(pe&&(pe=pe(e,C))){Pf(j,pe,n,O);break e}I&&I(e,M,C),e==="focusout"&&C&&M.type==="number"&&C.memoizedProps.value!=null&&Oo(M,"number",M.value)}switch(I=C?Ti(C):window,e){case"focusin":(qf(I)||I.contentEditable==="true")&&(Oa=I,Ko=C,Ui=null);break;case"focusout":Ui=Ko=Oa=null;break;case"mousedown":Qo=!0;break;case"contextmenu":case"mouseup":case"dragend":Qo=!1,ed(j,n,O);break;case"selectionchange":if(U0)break;case"keydown":case"keyup":ed(j,n,O)}var oe;if(qo)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else Ra?Gf(e,n)&&(he="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(he="onCompositionStart");he&&(_f&&n.locale!=="ko"&&(Ra||he!=="onCompositionStart"?he==="onCompositionEnd"&&Ra&&(oe=Vf()):(wn=O,_o="value"in wn?wn.value:wn.textContent,Ra=!0)),I=xs(C,he),0<I.length&&(he=new Nf(he,e,null,n,O),j.push({event:he,listeners:I}),oe?he.data=oe:(oe=Xf(n),oe!==null&&(he.data=oe)))),(oe=S0?T0(e,n):A0(e,n))&&(he=xs(C,"onBeforeInput"),0<he.length&&(I=new Nf("onBeforeInput","beforeinput",null,n,O),j.push({event:I,listeners:he}),I.data=oe)),hb(j,e,C,n,O)}Cm(j,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xs(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,u=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||u===null||(s=Ai(e,n),s!=null&&i.unshift(tr(e,s,u)),s=Ai(e,t),s!=null&&i.push(tr(e,s,u))),e.tag===3)return i;e=e.return}return[]}function yb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xm(e,t,n,i,s){for(var u=t._reactName,f=[];n!==null&&n!==i;){var g=n,S=g.alternate,C=g.stateNode;if(g=g.tag,S!==null&&S===i)break;g!==5&&g!==26&&g!==27||C===null||(S=C,s?(C=Ai(n,u),C!=null&&f.unshift(tr(n,C,S))):s||(C=Ai(n,u),C!=null&&f.push(tr(n,C,S)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var vb=/\r\n?/g,bb=/\u0000|\uFFFD/g;function Dm(e){return(typeof e=="string"?e:""+e).replace(vb,`
`).replace(bb,"")}function Um(e,t){return t=Dm(t),Dm(e)===t}function Ce(e,t,n,i,s,u){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||xa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&xa(e,""+i);break;case"className":Or(e,"class",i);break;case"tabIndex":Or(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Or(e,n,i);break;case"style":Uf(e,i,u);break;case"data":if(t!=="object"){Or(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=jr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Ce(e,t,"name",s.name,s,null),Ce(e,t,"formEncType",s.formEncType,s,null),Ce(e,t,"formMethod",s.formMethod,s,null),Ce(e,t,"formTarget",s.formTarget,s,null)):(Ce(e,t,"encType",s.encType,s,null),Ce(e,t,"method",s.method,s,null),Ce(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=jr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=nn);break;case"onScroll":i!=null&&fe("scroll",e);break;case"onScrollEnd":i!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=jr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":fe("beforetoggle",e),fe("toggle",e),Rr(e,"popover",i);break;case"xlinkActuate":tn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":tn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":tn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":tn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":tn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":tn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":tn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":tn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":tn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Rr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Kv.get(n)||n,Rr(e,n,i))}}function bu(e,t,n,i,s,u){switch(n){case"style":Uf(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof i=="string"?xa(e,i):(typeof i=="number"||typeof i=="bigint")&&xa(e,""+i);break;case"onScroll":i!=null&&fe("scroll",e);break;case"onScrollEnd":i!=null&&fe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),u=e[ct]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,s),typeof i=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Rr(e,n,i)}}}function tt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var i=!1,s=!1,u;for(u in n)if(n.hasOwnProperty(u)){var f=n[u];if(f!=null)switch(u){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ce(e,t,u,f,n,null)}}s&&Ce(e,t,"srcSet",n.srcSet,n,null),i&&Ce(e,t,"src",n.src,n,null);return;case"input":fe("invalid",e);var g=u=f=s=null,S=null,C=null;for(i in n)if(n.hasOwnProperty(i)){var O=n[i];if(O!=null)switch(i){case"name":s=O;break;case"type":f=O;break;case"checked":S=O;break;case"defaultChecked":C=O;break;case"value":u=O;break;case"defaultValue":g=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(l(137,t));break;default:Ce(e,t,i,O,n,null)}}Cf(e,u,g,S,C,f,s,!1);return;case"select":fe("invalid",e),i=f=u=null;for(s in n)if(n.hasOwnProperty(s)&&(g=n[s],g!=null))switch(s){case"value":u=g;break;case"defaultValue":f=g;break;case"multiple":i=g;default:Ce(e,t,s,g,n,null)}t=u,n=f,e.multiple=!!i,t!=null?Ma(e,!!i,t,!1):n!=null&&Ma(e,!!i,n,!0);return;case"textarea":fe("invalid",e),u=s=i=null;for(f in n)if(n.hasOwnProperty(f)&&(g=n[f],g!=null))switch(f){case"value":i=g;break;case"defaultValue":s=g;break;case"children":u=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(l(91));break;default:Ce(e,t,f,g,n,null)}xf(e,i,s,u);return;case"option":for(S in n)n.hasOwnProperty(S)&&(i=n[S],i!=null)&&(S==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ce(e,t,S,i,n,null));return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(i=0;i<er.length;i++)fe(er[i],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(i=n[C],i!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ce(e,t,C,i,n,null)}return;default:if(Vo(t)){for(O in n)n.hasOwnProperty(O)&&(i=n[O],i!==void 0&&bu(e,t,O,i,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(i=n[g],i!=null&&Ce(e,t,g,i,n,null))}function Sb(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,u=null,f=null,g=null,S=null,C=null,O=null;for(D in n){var j=n[D];if(n.hasOwnProperty(D)&&j!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":S=j;default:i.hasOwnProperty(D)||Ce(e,t,D,null,i,j)}}for(var M in i){var D=i[M];if(j=n[M],i.hasOwnProperty(M)&&(D!=null||j!=null))switch(M){case"type":u=D;break;case"name":s=D;break;case"checked":C=D;break;case"defaultChecked":O=D;break;case"value":f=D;break;case"defaultValue":g=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(l(137,t));break;default:D!==j&&Ce(e,t,M,D,i,j)}}Ro(e,f,g,S,C,O,u,s);return;case"select":D=f=g=M=null;for(u in n)if(S=n[u],n.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":D=S;default:i.hasOwnProperty(u)||Ce(e,t,u,null,i,S)}for(s in i)if(u=i[s],S=n[s],i.hasOwnProperty(s)&&(u!=null||S!=null))switch(s){case"value":M=u;break;case"defaultValue":g=u;break;case"multiple":f=u;default:u!==S&&Ce(e,t,s,u,i,S)}t=g,n=f,i=D,M!=null?Ma(e,!!n,M,!1):!!i!=!!n&&(t!=null?Ma(e,!!n,t,!0):Ma(e,!!n,n?[]:"",!1));return;case"textarea":D=M=null;for(g in n)if(s=n[g],n.hasOwnProperty(g)&&s!=null&&!i.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ce(e,t,g,null,i,s)}for(f in i)if(s=i[f],u=n[f],i.hasOwnProperty(f)&&(s!=null||u!=null))switch(f){case"value":M=s;break;case"defaultValue":D=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==u&&Ce(e,t,f,s,i,u)}Mf(e,M,D);return;case"option":for(var F in n)M=n[F],n.hasOwnProperty(F)&&M!=null&&!i.hasOwnProperty(F)&&(F==="selected"?e.selected=!1:Ce(e,t,F,null,i,M));for(S in i)M=i[S],D=n[S],i.hasOwnProperty(S)&&M!==D&&(M!=null||D!=null)&&(S==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":Ce(e,t,S,M,i,D));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in n)M=n[ee],n.hasOwnProperty(ee)&&M!=null&&!i.hasOwnProperty(ee)&&Ce(e,t,ee,null,i,M);for(C in i)if(M=i[C],D=n[C],i.hasOwnProperty(C)&&M!==D&&(M!=null||D!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(l(137,t));break;default:Ce(e,t,C,M,i,D)}return;default:if(Vo(t)){for(var Me in n)M=n[Me],n.hasOwnProperty(Me)&&M!==void 0&&!i.hasOwnProperty(Me)&&bu(e,t,Me,void 0,i,M);for(O in i)M=i[O],D=n[O],!i.hasOwnProperty(O)||M===D||M===void 0&&D===void 0||bu(e,t,O,M,i,D);return}}for(var z in n)M=n[z],n.hasOwnProperty(z)&&M!=null&&!i.hasOwnProperty(z)&&Ce(e,t,z,null,i,M);for(j in i)M=i[j],D=n[j],!i.hasOwnProperty(j)||M===D||M==null&&D==null||Ce(e,t,j,M,i,D)}function Rm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Tb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],u=s.transferSize,f=s.initiatorType,g=s.duration;if(u&&g&&Rm(f)){for(f=0,g=s.responseEnd,i+=1;i<n.length;i++){var S=n[i],C=S.startTime;if(C>g)break;var O=S.transferSize,j=S.initiatorType;O&&Rm(j)&&(S=S.responseEnd,f+=O*(S<g?1:(g-C)/(S-C)))}if(--i,t+=8*(u+f)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Su=null,Tu=null;function Ds(e){return e.nodeType===9?e:e.ownerDocument}function Om(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Au(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wu=null;function Ab(){var e=window.event;return e&&e.type==="popstate"?e===wu?!1:(wu=e,!0):(wu=null,!1)}var jm=typeof setTimeout=="function"?setTimeout:void 0,wb=typeof clearTimeout=="function"?clearTimeout:void 0,Bm=typeof Promise=="function"?Promise:void 0,zb=typeof queueMicrotask=="function"?queueMicrotask:typeof Bm<"u"?function(e){return Bm.resolve(null).then(e).catch(Eb)}:jm;function Eb(e){setTimeout(function(){throw e})}function kn(e){return e==="head"}function Nm(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),ri(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")nr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,nr(n);for(var u=n.firstChild;u;){var f=u.nextSibling,g=u.nodeName;u[Si]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=f}}else n==="body"&&nr(e.ownerDocument.body);n=s}while(n);ri(t)}function Lm(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function zu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":zu(n),Do(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Cb(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Si])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Nt(e.nextSibling),e===null)break}return null}function Mb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Nt(e.nextSibling),e===null))return null;return e}function _m(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Nt(e.nextSibling),e===null))return null;return e}function Eu(e){return e.data==="$?"||e.data==="$~"}function Cu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function xb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Mu=null;function Hm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Nt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function km(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Gm(e,t,n){switch(t=Ds(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function nr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Do(e)}var Lt=new Map,Xm=new Set;function Us(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var bn=G.d;G.d={f:Db,r:Ub,D:Rb,C:Ob,L:Vb,m:jb,X:Nb,S:Bb,M:Lb};function Db(){var e=bn.f(),t=Ts();return e||t}function Ub(e){var t=za(e);t!==null&&t.tag===5&&t.type==="form"?rh(t):bn.r(e)}var ni=typeof document>"u"?null:document;function qm(e,t,n){var i=ni;if(i&&typeof t=="string"&&t){var s=Dt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Xm.has(s)||(Xm.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),tt(t,"link",e),Ze(t),i.head.appendChild(t)))}}function Rb(e){bn.D(e),qm("dns-prefetch",e,null)}function Ob(e,t){bn.C(e,t),qm("preconnect",e,t)}function Vb(e,t,n){bn.L(e,t,n);var i=ni;if(i&&e&&t){var s='link[rel="preload"][as="'+Dt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Dt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Dt(n.imageSizes)+'"]')):s+='[href="'+Dt(e)+'"]';var u=s;switch(t){case"style":u=ai(e);break;case"script":u=ii(e)}Lt.has(u)||(e=b({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Lt.set(u,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(ar(u))||t==="script"&&i.querySelector(ir(u))||(t=i.createElement("link"),tt(t,"link",e),Ze(t),i.head.appendChild(t)))}}function jb(e,t){bn.m(e,t);var n=ni;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Dt(i)+'"][href="'+Dt(e)+'"]',u=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ii(e)}if(!Lt.has(u)&&(e=b({rel:"modulepreload",href:e},t),Lt.set(u,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ir(u)))return}i=n.createElement("link"),tt(i,"link",e),Ze(i),n.head.appendChild(i)}}}function Bb(e,t,n){bn.S(e,t,n);var i=ni;if(i&&e){var s=Ea(i).hoistableStyles,u=ai(e);t=t||"default";var f=s.get(u);if(!f){var g={loading:0,preload:null};if(f=i.querySelector(ar(u)))g.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Lt.get(u))&&xu(e,n);var S=f=i.createElement("link");Ze(S),tt(S,"link",e),S._p=new Promise(function(C,O){S.onload=C,S.onerror=O}),S.addEventListener("load",function(){g.loading|=1}),S.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Rs(f,t,i)}f={type:"stylesheet",instance:f,count:1,state:g},s.set(u,f)}}}function Nb(e,t){bn.X(e,t);var n=ni;if(n&&e){var i=Ea(n).hoistableScripts,s=ii(e),u=i.get(s);u||(u=n.querySelector(ir(s)),u||(e=b({src:e,async:!0},t),(t=Lt.get(s))&&Du(e,t),u=n.createElement("script"),Ze(u),tt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(s,u))}}function Lb(e,t){bn.M(e,t);var n=ni;if(n&&e){var i=Ea(n).hoistableScripts,s=ii(e),u=i.get(s);u||(u=n.querySelector(ir(s)),u||(e=b({src:e,async:!0,type:"module"},t),(t=Lt.get(s))&&Du(e,t),u=n.createElement("script"),Ze(u),tt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(s,u))}}function Pm(e,t,n,i){var s=(s=ue.current)?Us(s):null;if(!s)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ai(n.href),n=Ea(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ai(n.href);var u=Ea(s).hoistableStyles,f=u.get(e);if(f||(s=s.ownerDocument||s,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,f),(u=s.querySelector(ar(e)))&&!u._p&&(f.instance=u,f.state.loading=5),Lt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Lt.set(e,n),u||_b(s,e,n,f.state))),t&&i===null)throw Error(l(528,""));return f}if(t&&i!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ii(n),n=Ea(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function ai(e){return'href="'+Dt(e)+'"'}function ar(e){return'link[rel="stylesheet"]['+e+"]"}function Ym(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function _b(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),tt(t,"link",n),Ze(t),e.head.appendChild(t))}function ii(e){return'[src="'+Dt(e)+'"]'}function ir(e){return"script[async]"+e}function Fm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Dt(n.href)+'"]');if(i)return t.instance=i,Ze(i),i;var s=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ze(i),tt(i,"style",s),Rs(i,n.precedence,e),t.instance=i;case"stylesheet":s=ai(n.href);var u=e.querySelector(ar(s));if(u)return t.state.loading|=4,t.instance=u,Ze(u),u;i=Ym(n),(s=Lt.get(s))&&xu(i,s),u=(e.ownerDocument||e).createElement("link"),Ze(u);var f=u;return f._p=new Promise(function(g,S){f.onload=g,f.onerror=S}),tt(u,"link",i),t.state.loading|=4,Rs(u,n.precedence,e),t.instance=u;case"script":return u=ii(n.src),(s=e.querySelector(ir(u)))?(t.instance=s,Ze(s),s):(i=n,(s=Lt.get(u))&&(i=b({},n),Du(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),Ze(s),tt(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Rs(i,n.precedence,e));return t.instance}function Rs(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,u=s,f=0;f<i.length;f++){var g=i[f];if(g.dataset.precedence===t)u=g;else if(u!==s)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function xu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Du(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Os=null;function Km(e,t,n){if(Os===null){var i=new Map,s=Os=new Map;s.set(n,i)}else s=Os,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var u=n[s];if(!(u[Si]||u[Je]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var f=u.getAttribute(t)||"";f=e+f;var g=i.get(f);g?g.push(u):i.set(f,[u])}}return i}function Qm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Hb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Zm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function kb(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=ai(i.href),u=t.querySelector(ar(s));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Vs.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,Ze(u);return}u=t.ownerDocument||t,i=Ym(i),(s=Lt.get(s))&&xu(i,s),u=u.createElement("link"),Ze(u);var f=u;f._p=new Promise(function(g,S){f.onload=g,f.onerror=S}),tt(u,"link",i),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Vs.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Uu=0;function Gb(e,t){return e.stylesheets&&e.count===0&&Bs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Bs(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Uu===0&&(Uu=62500*Tb());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bs(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Uu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Vs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var js=null;function Bs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,js=new Map,t.forEach(Xb,e),js=null,Vs.call(e))}function Xb(e,t){if(!(t.state.loading&4)){var n=js.get(e);if(n)var i=n.get(null);else{n=new Map,js.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<s.length;u++){var f=s[u];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),i=f)}i&&n.set(null,i)}s=t.instance,f=s.getAttribute("data-precedence"),u=n.get(f)||i,u===i&&n.set(null,s),n.set(f,s),this.count++,i=Vs.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),u?u.parentNode.insertBefore(s,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var rr={$$typeof:k,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function qb(e,t,n,i,s,u,f,g,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Eo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eo(0),this.hiddenUpdates=Eo(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=u,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Im(e,t,n,i,s,u,f,g,S,C,O,j){return e=new qb(e,t,n,f,S,C,O,j,g),t=1,u===!0&&(t|=24),u=Tt(3,null,null,t),e.current=u,u.stateNode=e,t=ul(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:i,isDehydrated:n,cache:t},hl(u),e}function Jm(e){return e?(e=Ba,e):Ba}function Wm(e,t,n,i,s,u){s=Jm(s),i.context===null?i.context=s:i.pendingContext=s,i=Dn(t),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Un(e,i,t),n!==null&&(pt(n,e,t),Li(n,e,t))}function $m(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ru(e,t){$m(e,t),(e=e.alternate)&&$m(e,t)}function eg(e){if(e.tag===13||e.tag===31){var t=aa(e,67108864);t!==null&&pt(t,e,67108864),Ru(e,67108864)}}function tg(e){if(e.tag===13||e.tag===31){var t=Ct();t=Co(t);var n=aa(e,t);n!==null&&pt(n,e,t),Ru(e,t)}}var Ns=!0;function Pb(e,t,n,i){var s=R.T;R.T=null;var u=G.p;try{G.p=2,Ou(e,t,n,i)}finally{G.p=u,R.T=s}}function Yb(e,t,n,i){var s=R.T;R.T=null;var u=G.p;try{G.p=8,Ou(e,t,n,i)}finally{G.p=u,R.T=s}}function Ou(e,t,n,i){if(Ns){var s=Vu(i);if(s===null)vu(e,t,i,Ls,n),ag(e,i);else if(Kb(s,e,t,n,i))i.stopPropagation();else if(ag(e,i),t&4&&-1<Fb.indexOf(e)){for(;s!==null;){var u=za(s);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var f=Wn(u.pendingLanes);if(f!==0){var g=u;for(g.pendingLanes|=2,g.entangledLanes|=2;f;){var S=1<<31-bt(f);g.entanglements[1]|=S,f&=~S}Zt(u),(be&6)===0&&(bs=yt()+500,$i(0))}}break;case 31:case 13:g=aa(u,2),g!==null&&pt(g,u,2),Ts(),Ru(u,2)}if(u=Vu(i),u===null&&vu(e,t,i,Ls,n),u===s)break;s=u}s!==null&&i.stopPropagation()}else vu(e,t,i,null,n)}}function Vu(e){return e=Bo(e),ju(e)}var Ls=null;function ju(e){if(Ls=null,e=wa(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=d(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ls=e,null}function ng(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rv()){case cf:return 2;case ff:return 8;case Cr:case Ov:return 32;case df:return 268435456;default:return 32}default:return 32}}var Bu=!1,Gn=null,Xn=null,qn=null,sr=new Map,or=new Map,Pn=[],Fb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ag(e,t){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(t.pointerId)}}function lr(e,t,n,i,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[s]},t!==null&&(t=za(t),t!==null&&eg(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Kb(e,t,n,i,s){switch(t){case"focusin":return Gn=lr(Gn,e,t,n,i,s),!0;case"dragenter":return Xn=lr(Xn,e,t,n,i,s),!0;case"mouseover":return qn=lr(qn,e,t,n,i,s),!0;case"pointerover":var u=s.pointerId;return sr.set(u,lr(sr.get(u)||null,e,t,n,i,s)),!0;case"gotpointercapture":return u=s.pointerId,or.set(u,lr(or.get(u)||null,e,t,n,i,s)),!0}return!1}function ig(e){var t=wa(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=d(n),t!==null){e.blockedOn=t,vf(e.priority,function(){tg(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,vf(e.priority,function(){tg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vu(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);jo=i,n.target.dispatchEvent(i),jo=null}else return t=za(n),t!==null&&eg(t),e.blockedOn=n,!1;t.shift()}return!0}function rg(e,t,n){_s(e)&&n.delete(t)}function Qb(){Bu=!1,Gn!==null&&_s(Gn)&&(Gn=null),Xn!==null&&_s(Xn)&&(Xn=null),qn!==null&&_s(qn)&&(qn=null),sr.forEach(rg),or.forEach(rg)}function Hs(e,t){e.blockedOn===t&&(e.blockedOn=null,Bu||(Bu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Qb)))}var ks=null;function sg(e){ks!==e&&(ks=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){ks===e&&(ks=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(ju(i||n)===null)continue;break}var u=za(n);u!==null&&(e.splice(t,3),t-=3,Vl(u,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function ri(e){function t(S){return Hs(S,e)}Gn!==null&&Hs(Gn,e),Xn!==null&&Hs(Xn,e),qn!==null&&Hs(qn,e),sr.forEach(t),or.forEach(t);for(var n=0;n<Pn.length;n++){var i=Pn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Pn.length&&(n=Pn[0],n.blockedOn===null);)ig(n),n.blockedOn===null&&Pn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],u=n[i+1],f=s[ct]||null;if(typeof u=="function")f||sg(n);else if(f){var g=null;if(u&&u.hasAttribute("formAction")){if(s=u,f=u[ct]||null)g=f.formAction;else if(ju(s)!==null)continue}else g=f.action;typeof g=="function"?n[i+1]=g:(n.splice(i,3),i-=3),sg(n)}}}function og(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(f){return s=f})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Nu(e){this._internalRoot=e}Gs.prototype.render=Nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,i=Ct();Wm(n,i,e,t,null,null)},Gs.prototype.unmount=Nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wm(e.current,2,null,e,null,null),Ts(),t[Aa]=null}};function Gs(e){this._internalRoot=e}Gs.prototype.unstable_scheduleHydration=function(e){if(e){var t=yf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pn.length&&t!==0&&t<Pn[n].priority;n++);Pn.splice(n,0,e),n===0&&ig(e)}};var lg=r.version;if(lg!=="19.2.8")throw Error(l(527,lg,"19.2.8"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=m(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Zb={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xs.isDisabled&&Xs.supportsFiber)try{yi=Xs.inject(Zb),vt=Xs}catch{}}return cr.createRoot=function(e,t){if(!c(e))throw Error(l(299));var n=!1,i="",s=gh,u=ph,f=yh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=Im(e,1,!1,null,null,n,i,null,s,u,f,og),e[Aa]=t.current,yu(e),new Nu(t)},cr.hydrateRoot=function(e,t,n){if(!c(e))throw Error(l(299));var i=!1,s="",u=gh,f=ph,g=yh,S=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=Im(e,1,!0,t,n??null,i,s,S,u,f,g,og),t.context=Jm(null),n=t.current,i=Ct(),i=Co(i),s=Dn(i),s.callback=null,Un(n,s,i),n=i,t.current.lanes=n,bi(t,n),Zt(t),e[Aa]=t.current,yu(e),new Gs(t)},cr.version="19.2.8",cr}var vg;function r2(){if(vg)return Hu.exports;vg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Hu.exports=i2(),Hu.exports}var s2=r2();const Np=J.createContext(null);function di(){const a=J.use(Np);if(!a)throw new Error("useLanguage must be used inside LanguageProvider.");return a}function o2(){const{copy:a,locale:r}=di();return x.jsxs("footer",{className:"site-footer",children:[x.jsxs("div",{className:"footer-identity",children:[x.jsx("img",{src:"/media/avatar.jpg",alt:"",width:"640",height:"640",loading:"lazy"}),x.jsxs("div",{children:[x.jsx("strong",{children:a.footer.copyright}),x.jsx("span",{children:a.hero.role})]})]}),x.jsx("p",{children:r==="zh"?"技术美术 · 引擎工具 · AIGC":"Technical art · Engine tools · AIGC"}),x.jsxs("a",{href:"#top",children:[r==="zh"?"回到顶部":"Back to top"," ",x.jsx("span",{"aria-hidden":"true",children:"↑"})]})]})}function l2(){const{locale:a,copy:r,setLocale:o}=di(),[l,c]=J.useState(""),h=d=>{d!==a&&(o(d),c(d==="zh"?"语言已切换为中文。":"Language changed to English."))};return x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"language-toggle",role:"group","aria-label":r.language.label,children:[x.jsxs("button",{type:"button",className:a==="en"?"is-active":void 0,"aria-pressed":a==="en",onClick:()=>h("en"),children:["EN",x.jsx("span",{className:"sr-only",children:r.language.english})]}),x.jsx("button",{type:"button",className:a==="zh"?"is-active":void 0,"aria-pressed":a==="zh",onClick:()=>h("zh"),children:"中文"})]}),x.jsx("span",{className:"sr-only","aria-live":"polite",children:l})]})}function u2(){const{copy:a}=di();return x.jsxs("header",{className:"site-header",children:[x.jsxs("a",{className:"brand-link",href:"#top","aria-label":"Lucas Shen, home",children:[x.jsx("span",{lang:"zh-CN",children:"沈裕焱"}),x.jsx("span",{children:"Lucas Shen"})]}),x.jsxs("div",{className:"header-actions",children:[x.jsx("nav",{className:"site-nav","aria-label":a.nav.aria,children:x.jsx("a",{href:"#portfolio",children:a.nav.work})}),x.jsx(l2,{})]})]})}function c2(){const{copy:a,locale:r}=di(),o=r==="zh"?[["犹他大学｜娱乐艺术与工程（技术美术）硕士","2025.08 — 2027.05"],["上海交通大学｜工业工程本科","2020.09 — 2024.06"]]:[["University of Utah | M.E.A.E., Technical Art","Aug 2025 — May 2027"],["Shanghai Jiao Tong University | B.Eng., Industrial Engineering","Sep 2020 — Jun 2024"]],l=r==="zh"?[["腾讯光子工作室｜AI 工具技术美术实习生","2026.03 — 2026.08"],["广州四三九九信息科技有限公司｜系统策划","2024.05 — 2024.11"],["Whitedot 游戏工作室｜Unity 客户端开发实习生","2024.01 — 2024.04"],["上海如为电力｜数字孪生实习生","2023.06 — 2023.08"]]:[["Tencent Lightspeed Studios | AI Tools Technical Art Intern","Mar 2026 — Aug 2026"],["4399 Network | Systems Designer","May 2024 — Nov 2024"],["Whitedot Game Studio | Unity Client Development Intern","Jan 2024 — Apr 2024"],["Shanghai Ruwei Electric Power | Digital Twin Intern","Jun 2023 — Aug 2023"]];return x.jsxs("section",{className:"profile-strip","aria-labelledby":"hero-title",children:[x.jsx("img",{src:"/media/avatar.jpg",alt:"Lucas Shen hand-drawn avatar",width:"640",height:"640",fetchPriority:"high"}),x.jsxs("div",{className:"profile-name",children:[x.jsxs("h1",{id:"hero-title",children:[x.jsx("span",{lang:"zh-CN",children:"沈裕焱"}),x.jsx("span",{children:"Lucas Shen"})]}),x.jsx("p",{children:a.hero.role})]}),x.jsx("p",{className:"profile-intro",children:r==="zh"?"游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线作品。":"Games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines."}),x.jsxs("div",{className:"profile-history",children:[x.jsxs("section",{children:[x.jsx("h2",{children:r==="zh"?"教育经历":"Education"}),x.jsx("ul",{children:o.map(([c,h])=>x.jsxs("li",{children:[x.jsx("span",{children:c}),x.jsxs("time",{children:["· ",h]})]},c))})]}),x.jsxs("section",{children:[x.jsx("h2",{children:r==="zh"?"实习与工作经历":"Internship & Work Experience"}),x.jsx("ul",{children:l.map(([c,h])=>x.jsxs("li",{children:[x.jsx("span",{children:c}),x.jsxs("time",{children:["· ",h]})]},c))})]})]})]})}const Lp=J.createContext({});function f2(a){const r=J.useRef(null);return r.current===null&&(r.current=a()),r.current}const d2=typeof window<"u",h2=d2?J.useLayoutEffect:J.useEffect,Vc=J.createContext(null);function jc(a,r){a.indexOf(r)===-1&&a.push(r)}function no(a,r){const o=a.indexOf(r);o>-1&&a.splice(o,1)}const en=(a,r,o)=>o>r?r:o<a?a:o;let mo=()=>{};const Qn={},_p=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),Hp=a=>typeof a=="object"&&a!==null,kp=a=>/^0[^.\s]+$/u.test(a);function Gp(a){let r;return()=>(r===void 0&&(r=a()),r)}const Ht=a=>a,Tr=(...a)=>a.reduce((r,o)=>l=>o(r(l))),yr=(a,r,o)=>{const l=r-a;return l?(o-a)/l:1};class Bc{constructor(){this.subscriptions=[]}add(r){return jc(this.subscriptions,r),()=>no(this.subscriptions,r)}notify(r,o,l){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](r,o,l);else for(let h=0;h<c;h++){const d=this.subscriptions[h];d&&d(r,o,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Mt=a=>a*1e3,_t=a=>a/1e3,Xp=(a,r)=>r?a*(1e3/r):0,qp=(a,r,o)=>(((1-3*o+3*r)*a+(3*o-6*r))*a+3*r)*a,m2=1e-7,g2=12;function p2(a,r,o,l,c){let h,d,p=0;do d=r+(o-r)/2,h=qp(d,l,c)-a,h>0?o=d:r=d;while(Math.abs(h)>m2&&++p<g2);return d}function Ar(a,r,o,l){if(a===r&&o===l)return Ht;const c=h=>p2(h,0,1,a,o);return h=>h===0||h===1?h:qp(c(h),r,l)}const Pp=a=>r=>r<=.5?a(2*r)/2:(2-a(2*(1-r)))/2,Yp=a=>r=>1-a(1-r),Fp=Ar(.33,1.53,.69,.99),Nc=Yp(Fp),Kp=Pp(Nc),Qp=a=>a>=1?1:(a*=2)<1?.5*Nc(a):.5*(2-Math.pow(2,-10*(a-1))),Lc=a=>1-Math.sin(Math.acos(a)),Zp=Yp(Lc),Ip=Pp(Lc),y2=Ar(.42,0,1,1),v2=Ar(0,0,.58,1),Jp=Ar(.42,0,.58,1),b2=a=>Array.isArray(a)&&typeof a[0]!="number",Wp=a=>Array.isArray(a)&&typeof a[0]=="number",S2={linear:Ht,easeIn:y2,easeInOut:Jp,easeOut:v2,circIn:Lc,circInOut:Ip,circOut:Zp,backIn:Nc,backInOut:Kp,backOut:Fp,anticipate:Qp},T2=a=>typeof a=="string",bg=a=>{if(Wp(a)){mo(a.length===4);const[r,o,l,c]=a;return Ar(r,o,l,c)}else if(T2(a))return S2[a];return a},qs=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function A2(a){let r=new Set,o=new Set,l=!1,c=!1;const h=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function p(m){h.has(m)&&(v.schedule(m),a()),m(d)}const v={schedule:(m,y=!1,b=!1)=>{const N=b&&l?r:o;return y&&h.add(m),N.add(m),m},cancel:m=>{o.delete(m),h.delete(m)},process:m=>{if(d=m,l){c=!0;return}l=!0;const y=r;r=o,o=y,r.forEach(p),r.clear(),l=!1,c&&(c=!1,v.process(m))}};return v}const w2=40;function $p(a,r){let o=!1,l=!0;const c={delta:0,timestamp:0,isProcessing:!1},h=()=>o=!0,d=qs.reduce((k,P)=>(k[P]=A2(h),k),{}),{setup:p,read:v,resolveKeyframes:m,preUpdate:y,update:b,preRender:w,render:N,postRender:U}=d,L=()=>{const k=Qn.useManualTiming,P=k?c.timestamp:performance.now();o=!1,k||(c.delta=l?1e3/60:Math.max(Math.min(P-c.timestamp,w2),1)),c.timestamp=P,c.isProcessing=!0,p.process(c),v.process(c),m.process(c),y.process(c),b.process(c),w.process(c),N.process(c),U.process(c),c.isProcessing=!1,o&&r&&(l=!1,a(L))},H=()=>{o=!0,l=!0,c.isProcessing||a(L)};return{schedule:qs.reduce((k,P)=>{const ne=d[P];return k[P]=(le,K=!1,W=!1)=>(o||H(),ne.schedule(le,K,W)),k},{}),cancel:k=>{for(let P=0;P<qs.length;P++)d[qs[P]].cancel(k)},state:c,steps:d}}const{schedule:Ue,cancel:Zn,state:nt,steps:qu}=$p(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ht,!0);let Ks;function z2(){Ks=void 0}const lt={now:()=>(Ks===void 0&&lt.set(nt.isProcessing||Qn.useManualTiming?nt.timestamp:performance.now()),Ks),set:a=>{Ks=a,queueMicrotask(z2)}},ey=a=>r=>typeof r=="string"&&r.startsWith(a),ty=ey("--"),E2=ey("var(--"),_c=a=>E2(a)?C2.test(a.split("/*")[0].trim()):!1,C2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Sg(a){return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")}const hi={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},vr={...hi,transform:a=>en(0,1,a)},Ps={...hi,default:1},hr=a=>Math.round(a*1e5)/1e5,Hc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function M2(a){return a==null}const x2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,kc=(a,r)=>o=>!!(typeof o=="string"&&x2.test(o)&&o.startsWith(a)||r&&!M2(o)&&Object.prototype.hasOwnProperty.call(o,r)),ny=(a,r,o)=>l=>{if(typeof l!="string")return l;const[c,h,d,p]=l.match(Hc);return{[a]:parseFloat(c),[r]:parseFloat(h),[o]:parseFloat(d),alpha:p!==void 0?parseFloat(p):1}},D2=a=>en(0,255,a),Pu={...hi,transform:a=>Math.round(D2(a))},va={test:kc("rgb","red"),parse:ny("red","green","blue"),transform:({red:a,green:r,blue:o,alpha:l=1})=>"rgba("+Pu.transform(a)+", "+Pu.transform(r)+", "+Pu.transform(o)+", "+hr(vr.transform(l))+")"};function U2(a){let r="",o="",l="",c="";return a.length>5?(r=a.substring(1,3),o=a.substring(3,5),l=a.substring(5,7),c=a.substring(7,9)):(r=a.substring(1,2),o=a.substring(2,3),l=a.substring(3,4),c=a.substring(4,5),r+=r,o+=o,l+=l,c+=c),{red:parseInt(r,16),green:parseInt(o,16),blue:parseInt(l,16),alpha:c?parseInt(c,16)/255:1}}const sc={test:kc("#"),parse:U2,transform:va.transform},wr=a=>({test:r=>typeof r=="string"&&r.endsWith(a)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${a}`}),Sn=wr("deg"),$t=wr("%"),Q=wr("px"),R2=wr("vh"),O2=wr("vw"),Tg={...$t,parse:a=>$t.parse(a)/100,transform:a=>$t.transform(a*100)},oi={test:kc("hsl","hue"),parse:ny("hue","saturation","lightness"),transform:({hue:a,saturation:r,lightness:o,alpha:l=1})=>"hsla("+Math.round(a)+", "+$t.transform(hr(r))+", "+$t.transform(hr(o))+", "+hr(vr.transform(l))+")"},Fe={test:a=>va.test(a)||sc.test(a)||oi.test(a),parse:a=>va.test(a)?va.parse(a):oi.test(a)?oi.parse(a):sc.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?va.transform(a):oi.transform(a),getAnimatableNone:a=>{const r=Fe.parse(a);return r.alpha=0,Fe.transform(r)}},V2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function j2(a){return isNaN(a)&&typeof a=="string"&&(a.match(Hc)?.length||0)+(a.match(V2)?.length||0)>0}const ay="number",iy="color",B2="var",N2="var(",Ag="${}",L2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ci(a){const r=a.toString(),o=[],l={color:[],number:[],var:[]},c=[];let h=0;const p=r.replace(L2,v=>(Fe.test(v)?(l.color.push(h),c.push(iy),o.push(Fe.parse(v))):v.startsWith(N2)?(l.var.push(h),c.push(B2),o.push(v)):(l.number.push(h),c.push(ay),o.push(parseFloat(v))),++h,Ag)).split(Ag);return{values:o,split:p,indexes:l,types:c}}function _2(a){return ci(a).values}function ry({split:a,types:r}){const o=a.length;return l=>{let c="";for(let h=0;h<o;h++)if(c+=a[h],l[h]!==void 0){const d=r[h];d===ay?c+=hr(l[h]):d===iy?c+=Fe.transform(l[h]):c+=l[h]}return c}}function H2(a){return ry(ci(a))}const k2=a=>typeof a=="number"?0:Fe.test(a)?Fe.getAnimatableNone(a):a,G2=(a,r)=>typeof a=="number"?r?.trim().endsWith("/")?a:0:k2(a);function X2(a){const r=ci(a);return ry(r)(r.values.map((l,c)=>G2(l,r.split[c])))}const Yt={test:j2,parse:_2,createTransformer:H2,getAnimatableNone:X2};function Yu(a,r,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?a+(r-a)*6*o:o<1/2?r:o<2/3?a+(r-a)*(2/3-o)*6:a}function q2({hue:a,saturation:r,lightness:o,alpha:l}){a/=360,r/=100,o/=100;let c=0,h=0,d=0;if(!r)c=h=d=o;else{const p=o<.5?o*(1+r):o+r-o*r,v=2*o-p;c=Yu(v,p,a+1/3),h=Yu(v,p,a),d=Yu(v,p,a-1/3)}return{red:Math.round(c*255),green:Math.round(h*255),blue:Math.round(d*255),alpha:l}}function ao(a,r){return o=>o>0?r:a}const De=(a,r,o)=>a+(r-a)*o,Fu=(a,r,o)=>{const l=a*a,c=o*(r*r-l)+l;return c<0?0:Math.sqrt(c)},P2=[sc,va,oi],Y2=a=>P2.find(r=>r.test(a));function wg(a){const r=Y2(a);if(!r)return!1;let o=r.parse(a);return r===oi&&(o=q2(o)),o}const zg=(a,r)=>{const o=wg(a),l=wg(r);if(!o||!l)return ao(a,r);const c={...o};return h=>(c.red=Fu(o.red,l.red,h),c.green=Fu(o.green,l.green,h),c.blue=Fu(o.blue,l.blue,h),c.alpha=De(o.alpha,l.alpha,h),va.transform(c))},oc=new Set(["none","hidden"]);function F2(a,r){return oc.has(a)?o=>o<=0?a:r:o=>o>=1?r:a}function K2(a,r){return o=>De(a,r,o)}function Gc(a){return typeof a=="number"?K2:typeof a=="string"?_c(a)?ao:Fe.test(a)?zg:I2:Array.isArray(a)?sy:typeof a=="object"?Fe.test(a)?zg:Q2:ao}function sy(a,r){const o=[...a],l=o.length,c=a.map((h,d)=>Gc(h)(h,r[d]));return h=>{for(let d=0;d<l;d++)o[d]=c[d](h);return o}}function Q2(a,r){const o={...a,...r},l={};for(const c in o)a[c]!==void 0&&r[c]!==void 0&&(l[c]=Gc(a[c])(a[c],r[c]));return c=>{for(const h in l)o[h]=l[h](c);return o}}function Z2(a,r){const o=[],l={color:0,var:0,number:0};for(let c=0;c<r.values.length;c++){const h=r.types[c],d=a.indexes[h][l[h]],p=a.values[d]??0;o[c]=p,l[h]++}return o}const I2=(a,r)=>{const o=Yt.createTransformer(r),l=ci(a),c=ci(r);return l.indexes.var.length===c.indexes.var.length&&l.indexes.color.length===c.indexes.color.length&&l.indexes.number.length>=c.indexes.number.length?oc.has(a)&&!c.values.length||oc.has(r)&&!l.values.length?F2(a,r):Tr(sy(Z2(l,c),c.values),o):ao(a,r)};function oy(a,r,o){return typeof a=="number"&&typeof r=="number"&&typeof o=="number"?De(a,r,o):Gc(a)(a,r)}const J2=a=>{const r=({timestamp:o})=>a(o);return{start:(o=!0)=>Ue.update(r,o),stop:()=>Zn(r),now:()=>nt.isProcessing?nt.timestamp:lt.now()}},ly=(a,r,o=10)=>{let l="";const c=Math.max(Math.round(r/o),2);for(let h=0;h<c;h++)l+=Math.round(a(h/(c-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},io=2e4;function Xc(a){let r=0;const o=50;let l=a.next(r);for(;!l.done&&r<io;)r+=o,l=a.next(r);return r>=io?1/0:r}function W2(a,r=100,o){const l=o({...a,keyframes:[0,r]}),c=Math.min(Xc(l),io);return{type:"keyframes",ease:h=>l.next(c*h).value/r,duration:_t(c)}}const Ne={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function lc(a,r){return a*Math.sqrt(1-r*r)}const $2=12;function e1(a,r,o){let l=o;for(let c=1;c<$2;c++)l=l-a(l)/r(l);return l}const Ku=.001;function t1({duration:a=Ne.duration,bounce:r=Ne.bounce,velocity:o=Ne.velocity,mass:l=Ne.mass}){let c,h,d=1-r;d=en(Ne.minDamping,Ne.maxDamping,d),a=en(Ne.minDuration,Ne.maxDuration,_t(a)),d<1?(c=m=>{const y=m*d,b=y*a,w=y-o,N=lc(m,d),U=Math.exp(-b);return Ku-w/N*U},h=m=>{const b=m*d*a,w=b*o+o,N=Math.pow(d,2)*Math.pow(m,2)*a,U=Math.exp(-b),L=lc(Math.pow(m,2),d);return(-c(m)+Ku>0?-1:1)*((w-N)*U)/L}):(c=m=>{const y=Math.exp(-m*a),b=(m-o)*a+1;return-Ku+y*b},h=m=>{const y=Math.exp(-m*a),b=(o-m)*(a*a);return y*b});const p=5/a,v=e1(c,h,p);if(a=Mt(a),isNaN(v))return{stiffness:Ne.stiffness,damping:Ne.damping,duration:a};{const m=Math.pow(v,2)*l;return{stiffness:m,damping:d*2*Math.sqrt(l*m),duration:a}}}const n1=["duration","bounce"],a1=["stiffness","damping","mass"];function Eg(a,r){return r.some(o=>a[o]!==void 0)}function i1(a){let r={velocity:Ne.velocity,stiffness:Ne.stiffness,damping:Ne.damping,mass:Ne.mass,isResolvedFromDuration:!1,...a};if(!Eg(a,a1)&&Eg(a,n1))if(r.velocity=0,a.visualDuration){const o=a.visualDuration,l=2*Math.PI/(o*1.2),c=l*l,h=2*en(.05,1,1-(a.bounce||0))*Math.sqrt(c);r={...r,mass:Ne.mass,stiffness:c,damping:h}}else{const o=t1({...a,velocity:0});r={...r,...o,mass:Ne.mass},r.isResolvedFromDuration=!0}return r}function ro(a=Ne.visualDuration,r=Ne.bounce){const o=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:r}:a;let{restSpeed:l,restDelta:c}=o;const h=o.keyframes[0],d=o.keyframes[o.keyframes.length-1],p={done:!1,value:h},{stiffness:v,damping:m,mass:y,duration:b,velocity:w,isResolvedFromDuration:N}=i1({...o,velocity:-_t(o.velocity||0)}),U=w||0,L=m/(2*Math.sqrt(v*y)),H=d-h,_=_t(Math.sqrt(v/y)),X=Math.abs(H)<5;l||(l=X?Ne.restSpeed.granular:Ne.restSpeed.default),c||(c=X?Ne.restDelta.granular:Ne.restDelta.default);let k,P,ne,le,K,W;if(L<1)ne=lc(_,L),le=(U+L*_*H)/ne,k=te=>{const ve=Math.exp(-L*_*te);return d-ve*(le*Math.sin(ne*te)+H*Math.cos(ne*te))},K=L*_*le+H*ne,W=L*_*H-le*ne,P=te=>Math.exp(-L*_*te)*(K*Math.sin(ne*te)+W*Math.cos(ne*te));else if(L===1){k=ve=>d-Math.exp(-_*ve)*(H+(U+_*H)*ve);const te=U+_*H;P=ve=>Math.exp(-_*ve)*(_*te*ve-U)}else{const te=_*Math.sqrt(L*L-1);k=Ge=>{const Le=Math.exp(-L*_*Ge),R=Math.min(te*Ge,300);return d-Le*((U+L*_*H)*Math.sinh(R)+te*H*Math.cosh(R))/te};const ve=(U+L*_*H)/te,Te=L*_*ve-H*te,rt=L*_*H-ve*te;P=Ge=>{const Le=Math.exp(-L*_*Ge),R=Math.min(te*Ge,300);return Le*(Te*Math.sinh(R)+rt*Math.cosh(R))}}const ze={calculatedDuration:N&&b||null,velocity:te=>Mt(P(te)),next:te=>{if(!N&&L<1){const Te=Math.exp(-L*_*te),rt=Math.sin(ne*te),Ge=Math.cos(ne*te),Le=d-Te*(le*rt+H*Ge),R=Mt(Te*(K*rt+W*Ge));return p.done=Math.abs(R)<=l&&Math.abs(d-Le)<=c,p.value=p.done?d:Le,p}const ve=k(te);if(N)p.done=te>=b;else{const Te=Mt(P(te));p.done=Math.abs(Te)<=l&&Math.abs(d-ve)<=c}return p.value=p.done?d:ve,p},toString:()=>{const te=Math.min(Xc(ze),io),ve=ly(Te=>ze.next(te*Te).value,te,30);return te+"ms "+ve},toTransition:()=>{}};return ze}ro.applyToOptions=a=>{const r=W2(a,100,ro);return a.ease=r.ease,a.duration=Mt(r.duration),a.type="keyframes",a};const r1=5;function uy(a,r,o){const l=Math.max(r-r1,0);return Xp(o-a(l),r-l)}function uc({keyframes:a,velocity:r=0,power:o=.8,timeConstant:l=325,bounceDamping:c=10,bounceStiffness:h=500,modifyTarget:d,min:p,max:v,restDelta:m=.5,restSpeed:y}){const b=a[0],w={done:!1,value:b},N=W=>p!==void 0&&W<p||v!==void 0&&W>v,U=W=>p===void 0?v:v===void 0||Math.abs(p-W)<Math.abs(v-W)?p:v;let L=o*r;const H=b+L,_=d===void 0?H:d(H);_!==H&&(L=_-b);const X=W=>-L*Math.exp(-W/l),k=W=>_+X(W),P=W=>{const ze=X(W),te=k(W);w.done=Math.abs(ze)<=m,w.value=w.done?_:te};let ne,le;const K=W=>{N(w.value)&&(ne=W,le=ro({keyframes:[w.value,U(w.value)],velocity:uy(k,W,w.value),damping:c,stiffness:h,restDelta:m,restSpeed:y}))};return K(0),{calculatedDuration:null,next:W=>{let ze=!1;return!le&&ne===void 0&&(ze=!0,P(W),K(W)),ne!==void 0&&W>=ne?le.next(W-ne):(!ze&&P(W),w)}}}function s1(a,r,o){const l=[],c=o||Qn.mix||oy,h=a.length-1;for(let d=0;d<h;d++){let p=c(a[d],a[d+1]);if(r){const v=Array.isArray(r)?r[d]||Ht:r;p=Tr(v,p)}l.push(p)}return l}function o1(a,r,{clamp:o=!0,ease:l,mixer:c}={}){const h=a.length;if(mo(h===r.length),h===1)return()=>r[0];if(h===2&&r[0]===r[1])return()=>r[1];const d=a[0]===a[1];a[0]>a[h-1]&&(a=[...a].reverse(),r=[...r].reverse());const p=s1(r,l,c),v=p.length,m=y=>{if(d&&y<a[0])return r[0];let b=0;if(v>1)for(;b<a.length-2&&!(y<a[b+1]);b++);const w=yr(a[b],a[b+1],y);return p[b](w)};return o?y=>m(en(a[0],a[h-1],y)):m}function l1(a,r){const o=a[a.length-1];for(let l=1;l<=r;l++){const c=yr(0,r,l);a.push(De(o,1,c))}}function u1(a){const r=[0];return l1(r,a.length-1),r}function c1(a,r){return a.map(o=>o*r)}function f1(a,r){return a.map(()=>r||Jp).splice(0,a.length-1)}function mr({duration:a=300,keyframes:r,times:o,ease:l="easeInOut"}){const c=b2(l)?l.map(bg):bg(l),h={done:!1,value:r[0]},d=c1(o&&o.length===r.length?o:u1(r),a),p=o1(d,r,{ease:Array.isArray(c)?c:f1(r,c)});return{calculatedDuration:a,next:v=>(h.value=p(v),h.done=v>=a,h)}}const d1=a=>a!==null;function go(a,{repeat:r,repeatType:o="loop"},l,c=1){const h=a.filter(d1),p=c<0||r&&o!=="loop"&&r%2===1?0:h.length-1;return!p||l===void 0?h[p]:l}const h1={decay:uc,inertia:uc,tween:mr,keyframes:mr,spring:ro};function cy(a){typeof a.type=="string"&&(a.type=h1[a.type])}class qc{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(r=>{this.resolve=r})}notifyFinished(){this.resolve()}then(r,o){return this.finished.then(r,o)}}const m1=a=>a/100;class so extends qc{constructor(r){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:o}=this.options;o&&o.updatedAt!==lt.now()&&this.tick(lt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=r,this.initAnimation(),this.play(),r.autoplay===!1&&this.pause()}initAnimation(){const{options:r}=this;cy(r);const{type:o=mr,repeat:l=0,repeatDelay:c=0,repeatType:h,velocity:d=0}=r;let{keyframes:p}=r;const v=o||mr;v!==mr&&typeof p[0]!="number"&&(this.mixKeyframes=Tr(m1,oy(p[0],p[1])),p=[0,100]);const m=v({...r,keyframes:p});h==="mirror"&&(this.mirroredGenerator=v({...r,keyframes:[...p].reverse(),velocity:-d})),m.calculatedDuration===null&&(m.calculatedDuration=Xc(m));const{calculatedDuration:y}=m;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(l+1)-c,this.generator=m}updateTime(r){const o=Math.round(r-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(r,o=!1){const{generator:l,totalDuration:c,mixKeyframes:h,mirroredGenerator:d,resolvedDuration:p,calculatedDuration:v}=this;if(this.startTime===null)return l.next(0);const{delay:m=0,keyframes:y,repeat:b,repeatType:w,repeatDelay:N,type:U,onUpdate:L,finalKeyframe:H}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-c/this.speed,this.startTime)),o?this.currentTime=r:this.updateTime(r);const _=this.currentTime-m*(this.playbackSpeed>=0?1:-1),X=this.playbackSpeed>=0?_<0:_>c;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let k=this.currentTime,P=l;if(b){const W=Math.min(this.currentTime,c)/p;let ze=Math.floor(W),te=W%1;!te&&W>=1&&(te=1),te===1&&ze--,ze=Math.min(ze,b+1),ze%2&&(w==="reverse"?(te=1-te,N&&(te-=N/p)):w==="mirror"&&(P=d)),k=en(0,1,te)*p}let ne;X?(this.delayState.value=y[0],ne=this.delayState):ne=P.next(k),h&&!X&&(ne.value=h(ne.value));let{done:le}=ne;!X&&v!==null&&(le=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const K=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&le);return K&&U!==uc&&(ne.value=go(y,this.options,H,this.speed)),L&&L(ne.value),K&&this.finish(),ne}then(r,o){return this.finished.then(r,o)}get duration(){return _t(this.calculatedDuration)}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+_t(r)}get time(){return _t(this.currentTime)}set time(r){r=Mt(r),this.currentTime=r,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=r,this.tick(r))}getGeneratorVelocity(){const r=this.currentTime;if(r<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(r);const o=this.generator.next(r).value;return uy(l=>this.generator.next(l).value,r,o)}get speed(){return this.playbackSpeed}set speed(r){const o=this.playbackSpeed!==r;o&&this.driver&&this.updateTime(lt.now()),this.playbackSpeed=r,o&&this.driver&&(this.time=_t(this.currentTime))}play(){if(this.isStopped)return;const{driver:r=J2,startTime:o}=this.options;this.driver||(this.driver=r(c=>this.tick(c))),this.options.onPlay?.();const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=o??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(lt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}attachTimeline(r){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),r.observe(this)}}function g1(a){for(let r=1;r<a.length;r++)a[r]??(a[r]=a[r-1])}const ba=a=>a*180/Math.PI,cc=a=>{const r=ba(Math.atan2(a[1],a[0]));return fc(r)},p1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:cc,rotateZ:cc,skewX:a=>ba(Math.atan(a[1])),skewY:a=>ba(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},fc=a=>(a=a%360,a<0&&(a+=360),a),Cg=cc,Mg=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),xg=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),y1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Mg,scaleY:xg,scale:a=>(Mg(a)+xg(a))/2,rotateX:a=>fc(ba(Math.atan2(a[6],a[5]))),rotateY:a=>fc(ba(Math.atan2(-a[2],a[0]))),rotateZ:Cg,rotate:Cg,skewX:a=>ba(Math.atan(a[4])),skewY:a=>ba(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function dc(a){return a.includes("scale")?1:0}function hc(a,r){if(!a||a==="none")return dc(r);const o=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,c;if(o)l=y1,c=o;else{const p=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=p1,c=p}if(!c)return dc(r);const h=l[r],d=c[1].split(",").map(b1);return typeof h=="function"?h(d):d[h]}const v1=(a,r)=>{const{transform:o="none"}=getComputedStyle(a);return hc(o,r)};function b1(a){return parseFloat(a.trim())}const mi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gi=new Set([...mi,"pathRotation"]),Dg=a=>a===hi||a===Q,S1=new Set(["x","y","z"]),T1=mi.filter(a=>!S1.has(a));function A1(a){const r=[];return T1.forEach(o=>{const l=a.getValue(o);l!==void 0&&(r.push([o,l.get()]),l.set(o.startsWith("scale")?1:0))}),r}const Kn={width:({x:a},{paddingLeft:r="0",paddingRight:o="0",boxSizing:l})=>{const c=a.max-a.min;return l==="border-box"?c:c-parseFloat(r)-parseFloat(o)},height:({y:a},{paddingTop:r="0",paddingBottom:o="0",boxSizing:l})=>{const c=a.max-a.min;return l==="border-box"?c:c-parseFloat(r)-parseFloat(o)},top:(a,{top:r})=>parseFloat(r),left:(a,{left:r})=>parseFloat(r),bottom:({y:a},{top:r})=>parseFloat(r)+(a.max-a.min),right:({x:a},{left:r})=>parseFloat(r)+(a.max-a.min),x:(a,{transform:r})=>hc(r,"x"),y:(a,{transform:r})=>hc(r,"y")};Kn.translateX=Kn.x;Kn.translateY=Kn.y;const Sa=new Set;let mc=!1,gc=!1,pc=!1;function fy(){if(gc){const a=Array.from(Sa).filter(l=>l.needsMeasurement),r=new Set(a.map(l=>l.element)),o=new Map;r.forEach(l=>{const c=A1(l);c.length&&(o.set(l,c),l.render())}),a.forEach(l=>l.measureInitialState()),r.forEach(l=>{l.render();const c=o.get(l);c&&c.forEach(([h,d])=>{l.getValue(h)?.set(d)})}),a.forEach(l=>l.measureEndState()),a.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}gc=!1,mc=!1,Sa.forEach(a=>a.complete(pc)),Sa.clear()}function dy(){Sa.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(gc=!0)})}function w1(){pc=!0,dy(),fy(),pc=!1}class Pc{constructor(r,o,l,c,h,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...r],this.onComplete=o,this.name=l,this.motionValue=c,this.element=h,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Sa.add(this),mc||(mc=!0,Ue.read(dy),Ue.resolveKeyframes(fy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:o,element:l,motionValue:c}=this;if(r[0]===null){const h=c?.get(),d=r[r.length-1];if(h!==void 0)r[0]=h;else if(l&&o){const p=l.readValue(o,d);p!=null&&(r[0]=p)}r[0]===void 0&&(r[0]=d),c&&h===void 0&&c.set(r[0])}g1(r)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(r=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,r),Sa.delete(this)}cancel(){this.state==="scheduled"&&(Sa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const z1=a=>a.startsWith("--");function hy(a,r,o){z1(r)?a.style.setProperty(r,o):a.style[r]=o}const E1={};function my(a,r){const o=Gp(a);return()=>E1[r]??o()}const C1=my(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),gy=my(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),dr=([a,r,o,l])=>`cubic-bezier(${a}, ${r}, ${o}, ${l})`,Ug={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:dr([0,.65,.55,1]),circOut:dr([.55,0,1,.45]),backIn:dr([.31,.01,.66,-.59]),backOut:dr([.33,1.53,.69,.99])};function py(a,r){if(a)return typeof a=="function"?gy()?ly(a,r):"ease-out":Wp(a)?dr(a):Array.isArray(a)?a.map(o=>py(o,r)||Ug.easeOut):Ug[a]}function M1(a,r,o,{delay:l=0,duration:c=300,repeat:h=0,repeatType:d="loop",ease:p="easeOut",times:v}={},m=void 0){const y={[r]:o};v&&(y.offset=v);const b=py(p,c);Array.isArray(b)&&(y.easing=b);const w={delay:l,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:h+1,direction:d==="reverse"?"alternate":"normal"};return m&&(w.pseudoElement=m),a.animate(y,w)}function yy(a){return typeof a=="function"&&"applyToOptions"in a}function x1({type:a,...r}){return yy(a)&&gy()?a.applyToOptions(r):(r.duration??(r.duration=300),r.ease??(r.ease="easeOut"),r)}class vy extends qc{constructor(r){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!r)return;const{element:o,name:l,keyframes:c,pseudoElement:h,allowFlatten:d=!1,finalKeyframe:p,onComplete:v}=r;this.isPseudoElement=!!h,this.allowFlatten=d,this.options=r,mo(typeof r.type!="string");const m=x1(r);this.animation=M1(o,l,c,m,h),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!h){const y=go(c,this.options,p,this.speed);this.updateMotionValue&&this.updateMotionValue(y),hy(o,l,y),this.animation.cancel()}v?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:r}=this;r==="idle"||r==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const r=this.options?.element;!this.isPseudoElement&&r?.isConnected&&this.animation.commitStyles?.()}get duration(){const r=this.animation.effect?.getComputedTiming?.().duration||0;return _t(Number(r))}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+_t(r)}get time(){return _t(Number(this.animation.currentTime)||0)}set time(r){const o=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Mt(r),o&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(r){r<0&&(this.finishedTime=null),this.animation.playbackRate=r}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(r){this.manualStartTime=this.animation.startTime=r}attachTimeline({timeline:r,rangeStart:o,rangeEnd:l,observe:c}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,r&&C1()?(this.animation.timeline=r,o&&(this.animation.rangeStart=o),l&&(this.animation.rangeEnd=l),Ht):c(this)}}const by={anticipate:Qp,backInOut:Kp,circInOut:Ip};function D1(a){return a in by}function U1(a){typeof a.ease=="string"&&D1(a.ease)&&(a.ease=by[a.ease])}const Qu=10;class R1 extends vy{constructor(r){U1(r),cy(r),super(r),r.startTime!==void 0&&r.autoplay!==!1&&(this.startTime=r.startTime),this.options=r}updateMotionValue(r){const{motionValue:o,onUpdate:l,onComplete:c,element:h,...d}=this.options;if(!o)return;if(r!==void 0){o.set(r);return}const p=new so({...d,autoplay:!1}),v=Math.max(Qu,lt.now()-this.startTime),m=en(0,Qu,v-Qu),y=p.sample(v).value,{name:b}=this.options;h&&b&&hy(h,b,y),o.setWithVelocity(p.sample(Math.max(0,v-m)).value,y,m),p.stop()}}const Rg=(a,r)=>r==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Yt.test(a)||a==="0")&&!a.startsWith("url("));function O1(a){const r=a[0];if(a.length===1)return!0;for(let o=0;o<a.length;o++)if(a[o]!==r)return!0}function V1(a,r,o,l){const c=a[0];if(c===null)return!1;if(r==="display"||r==="visibility")return!0;const h=a[a.length-1],d=Rg(c,r),p=Rg(h,r);return!d||!p?!1:O1(a)||(o==="spring"||yy(o))&&l}function yc(a){a.duration=0,a.type="keyframes"}const Sy=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),j1=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function B1(a){for(let r=0;r<a.length;r++)if(typeof a[r]=="string"&&j1.test(a[r]))return!0;return!1}const N1=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),L1=Gp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function _1(a){const{motionValue:r,name:o,repeatDelay:l,repeatType:c,damping:h,type:d,keyframes:p}=a,v=r?.owner?.current;if(!(v instanceof HTMLElement)&&!(v instanceof SVGElement))return!1;const{onUpdate:m,transformTemplate:y}=r.owner.getProps();return L1()&&o&&(Sy.has(o)||N1.has(o)&&B1(p))&&(o!=="transform"||!y)&&!m&&!l&&c!=="mirror"&&h!==0&&d!=="inertia"}const H1=40;class k1 extends qc{constructor({autoplay:r=!0,delay:o=0,type:l="keyframes",repeat:c=0,repeatDelay:h=0,repeatType:d="loop",keyframes:p,name:v,motionValue:m,element:y,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=lt.now();const w={autoplay:r,delay:o,type:l,repeat:c,repeatDelay:h,repeatType:d,name:v,motionValue:m,element:y,...b},N=y?.KeyframeResolver||Pc;this.keyframeResolver=new N(p,(U,L,H)=>this.onKeyframesResolved(U,L,w,!H),v,m,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(r,o,l,c){this.keyframeResolver=void 0;const{name:h,type:d,velocity:p,delay:v,isHandoff:m,onUpdate:y}=l;this.resolvedAt=lt.now();let b=!0;V1(r,h,d,p)||(b=!1,(Qn.instantAnimations||!v)&&y?.(go(r,l,o)),r[0]=r[r.length-1],yc(l),l.repeat=0);const N={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>H1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...l,keyframes:r},U=b&&!m&&_1(N),L=N.motionValue?.owner?.current;let H;if(U)try{H=new R1({...N,element:L})}catch{H=new so(N)}else H=new so(N);H.finished.then(()=>{this.notifyFinished()}).catch(Ht),this.pendingTimeline&&(this.stopTimeline=H.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=H}get finished(){return this._animation?this.animation.finished:this._finished}then(r,o){return this.finished.finally(r).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),w1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(r){this.animation.time=r}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(r){this.animation.speed=r}get startTime(){return this.animation.startTime}attachTimeline(r){return this._animation?this.stopTimeline=this.animation.attachTimeline(r):this.pendingTimeline=r,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function Ty(a,r,o,l=0,c=1){const h=Array.from(a).sort((m,y)=>m.sortNodePosition(y)).indexOf(r),d=a.size,p=(d-1)*l;return typeof o=="function"?o(h,d):c===1?h*l:p-h*l}const Og=30,G1=a=>!isNaN(parseFloat(a));class X1{constructor(r,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{const c=lt.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const h of this.dependents)h.dirty()},this.hasAnimated=!1,this.setCurrent(r),this.owner=o.owner}setCurrent(r){this.current=r,this.updatedAt=lt.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=G1(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,o){this.events[r]||(this.events[r]=new Bc);const l=this.events[r].add(o);return r==="change"?()=>{l(),Ue.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,o){this.passiveEffect=r,this.stopPassiveEffect=o}set(r){this.passiveEffect?this.passiveEffect(r,this.updateAndNotify):this.updateAndNotify(r)}setWithVelocity(r,o,l){this.set(o),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-l}jump(r,o=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(r){this.dependents||(this.dependents=new Set),this.dependents.add(r)}removeDependent(r){this.dependents&&this.dependents.delete(r)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=lt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>Og)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Og);return Xp(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(r){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=r(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fi(a,r){return new X1(a,r)}function Ay(a,r){if(a?.inherit&&r){const{inherit:o,...l}=a;return{...r,...l}}return a}function Yc(a,r){const o=a?.[r]??a?.default??a;return o!==a?Ay(o,a):o}const q1={type:"spring",stiffness:500,damping:25,restSpeed:10},P1=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),Y1={type:"keyframes",duration:.8},F1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},K1=(a,{keyframes:r})=>r.length>2?Y1:gi.has(a)?a.startsWith("scale")?P1(r[1]):q1:F1,Q1=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Z1(a){for(const r in a)if(!Q1.has(r))return!0;return!1}const Fc=(a,r,o,l={},c,h)=>d=>{const p=Yc(l,a)||{},v=p.delay||l.delay||0;let{elapsed:m=0}=l;m=m-Mt(v);const y={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:r.getVelocity(),...p,delay:-m,onUpdate:w=>{r.set(w),p.onUpdate&&p.onUpdate(w)},onComplete:()=>{d(),p.onComplete&&p.onComplete()},name:a,motionValue:r,element:h?void 0:c};Z1(p)||Object.assign(y,K1(a,y)),y.duration&&(y.duration=Mt(y.duration)),y.repeatDelay&&(y.repeatDelay=Mt(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(yc(y),y.delay===0&&(b=!0)),(Qn.instantAnimations||Qn.skipAnimations||c?.shouldSkipAnimations||p.skipAnimations)&&(b=!0,yc(y),y.delay=0),y.allowFlatten=!p.type&&!p.ease,b&&!h&&r.get()!==void 0){const w=go(y.keyframes,p);if(w!==void 0){Ue.update(()=>{y.onUpdate(w),y.onComplete()});return}}return p.isSync?new so(y):new k1(y)},I1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function J1(a){const r=I1.exec(a);if(!r)return[,];const[,o,l,c]=r;return[`--${o??l}`,c]}function wy(a,r,o=1){const[l,c]=J1(a);if(!l)return;const h=window.getComputedStyle(r).getPropertyValue(l);if(h){const d=h.trim();return _p(d)?parseFloat(d):d}return _c(c)?wy(c,r,o+1):c}function Vg(a){const r=[{},{}];return a?.values.forEach((o,l)=>{r[0][l]=o.get(),r[1][l]=o.getVelocity()}),r}function Kc(a,r,o,l){if(typeof r=="function"){const[c,h]=Vg(l);r=r(o!==void 0?o:a.custom,c,h)}if(typeof r=="string"&&(r=a.variants&&a.variants[r]),typeof r=="function"){const[c,h]=Vg(l);r=r(o!==void 0?o:a.custom,c,h)}return r}function Ta(a,r,o){const l=a.getProps();return Kc(l,r,o!==void 0?o:l.custom,a)}const zy=new Set(["width","height","top","left","right","bottom",...mi]),vc=a=>Array.isArray(a);function W1(a,r,o){a.hasValue(r)?a.getValue(r).set(o):a.addValue(r,fi(o))}function $1(a){return vc(a)?a[a.length-1]||0:a}function eS(a,r){const o=Ta(a,r);let{transitionEnd:l={},transition:c={},...h}=o||{};h={...h,...l};for(const d in h){const p=$1(h[d]);W1(a,d,p)}}const at=a=>!!(a&&a.getVelocity);function tS(a){return!!(at(a)&&a.add)}function bc(a,r){const o=a.getValue("willChange");if(tS(o))return o.add(r);if(!o&&Qn.WillChange){const l=new Qn.WillChange("auto");a.addValue("willChange",l),l.add(r)}}function Qc(a){return a.replace(/([A-Z])/g,r=>`-${r.toLowerCase()}`)}const nS="framerAppearId",Ey="data-"+Qc(nS);function Cy(a){return a.props[Ey]}function aS({protectedKeys:a,needsAnimating:r},o){const l=a.hasOwnProperty(o)&&r[o]!==!0;return r[o]=!1,l}function My(a,r,{delay:o=0,transitionOverride:l,type:c}={}){let{transition:h,transitionEnd:d,...p}=r;const v=a.getDefaultTransition();h=h?Ay(h,v):v;const m=h?.reduceMotion,y=h?.skipAnimations;l&&(h=l);const b=[],w=c&&a.animationState&&a.animationState.getState()[c],N=h?.path;N&&N.animateVisualElement(a,p,h,o,b);for(const U in p){const L=a.getValue(U,a.latestValues[U]??null),H=p[U];if(H===void 0||w&&aS(w,U))continue;const _={delay:o,...Yc(h||{},U)};y&&(_.skipAnimations=!0);const X=L.get();if(X!==void 0&&!L.isAnimating()&&!Array.isArray(H)&&H===X&&!_.velocity){Ue.update(()=>L.set(H));continue}let k=!1;if(window.MotionHandoffAnimation){const le=Cy(a);if(le){const K=window.MotionHandoffAnimation(le,U,Ue);K!==null&&(_.startTime=K,k=!0)}}bc(a,U);const P=m??a.shouldReduceMotion;L.start(Fc(U,L,H,P&&zy.has(U)?{type:!1}:_,a,k));const ne=L.animation;ne&&b.push(ne)}if(d){const U=()=>Ue.update(()=>{d&&eS(a,d)});b.length?Promise.all(b).then(U):U()}return b}function Sc(a,r,o={}){const l=Ta(a,r,o.type==="exit"?a.presenceContext?.custom:void 0);let{transition:c=a.getDefaultTransition()||{}}=l||{};o.transitionOverride&&(c=o.transitionOverride);const h=l?()=>Promise.all(My(a,l,o)):()=>Promise.resolve(),d=a.variantChildren&&a.variantChildren.size?(v=0)=>{const{delayChildren:m=0,staggerChildren:y,staggerDirection:b}=c;return iS(a,r,v,m,y,b,o)}:()=>Promise.resolve(),{when:p}=c;if(p){const[v,m]=p==="beforeChildren"?[h,d]:[d,h];return v().then(()=>m())}else return Promise.all([h(),d(o.delay)])}function iS(a,r,o=0,l=0,c=0,h=1,d){const p=[];for(const v of a.variantChildren)v.notify("AnimationStart",r),p.push(Sc(v,r,{...d,delay:o+(typeof l=="function"?0:l)+Ty(a.variantChildren,v,l,c,h)}).then(()=>v.notify("AnimationComplete",r)));return Promise.all(p)}function rS(a,r,o={}){a.notify("AnimationStart",r);let l;if(Array.isArray(r)){const c=r.map(h=>Sc(a,h,o));l=Promise.all(c)}else if(typeof r=="string")l=Sc(a,r,o);else{const c=typeof r=="function"?Ta(a,r,o.custom):r;l=Promise.all(My(a,c,o))}return l.then(()=>{a.notify("AnimationComplete",r)})}const sS={test:a=>a==="auto",parse:a=>a},xy=a=>r=>r.test(a),Dy=[hi,Q,$t,Sn,O2,R2,sS],jg=a=>Dy.find(xy(a));function oS(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||kp(a):!0}const lS=new Set(["brightness","contrast","saturate","opacity"]);function uS(a){const[r,o]=a.slice(0,-1).split("(");if(r==="drop-shadow")return a;const[l]=o.match(Hc)||[];if(!l)return a;const c=o.replace(l,"");let h=lS.has(r)?1:0;return l!==o&&(h*=100),r+"("+h+c+")"}const cS=/\b([a-z-]*)\(.*?\)/gu,Tc={...Yt,getAnimatableNone:a=>{const r=a.match(cS);return r?r.map(uS).join(" "):a}},Ac={...Yt,getAnimatableNone:a=>{const r=Yt.parse(a);return Yt.createTransformer(a)(r.map(l=>typeof l=="number"?0:typeof l=="object"?{...l,alpha:1}:l))}},Bg={...hi,transform:Math.round},fS={rotate:Sn,pathRotation:Sn,rotateX:Sn,rotateY:Sn,rotateZ:Sn,scale:Ps,scaleX:Ps,scaleY:Ps,scaleZ:Ps,skew:Sn,skewX:Sn,skewY:Sn,distance:Q,translateX:Q,translateY:Q,translateZ:Q,x:Q,y:Q,z:Q,perspective:Q,transformPerspective:Q,opacity:vr,originX:Tg,originY:Tg,originZ:Q},oo={borderWidth:Q,borderTopWidth:Q,borderRightWidth:Q,borderBottomWidth:Q,borderLeftWidth:Q,borderRadius:Q,borderTopLeftRadius:Q,borderTopRightRadius:Q,borderBottomRightRadius:Q,borderBottomLeftRadius:Q,width:Q,maxWidth:Q,height:Q,maxHeight:Q,top:Q,right:Q,bottom:Q,left:Q,inset:Q,insetBlock:Q,insetBlockStart:Q,insetBlockEnd:Q,insetInline:Q,insetInlineStart:Q,insetInlineEnd:Q,padding:Q,paddingTop:Q,paddingRight:Q,paddingBottom:Q,paddingLeft:Q,paddingBlock:Q,paddingBlockStart:Q,paddingBlockEnd:Q,paddingInline:Q,paddingInlineStart:Q,paddingInlineEnd:Q,margin:Q,marginTop:Q,marginRight:Q,marginBottom:Q,marginLeft:Q,marginBlock:Q,marginBlockStart:Q,marginBlockEnd:Q,marginInline:Q,marginInlineStart:Q,marginInlineEnd:Q,fontSize:Q,backgroundPositionX:Q,backgroundPositionY:Q,...fS,zIndex:Bg,fillOpacity:vr,strokeOpacity:vr,numOctaves:Bg},dS={...oo,color:Fe,backgroundColor:Fe,outlineColor:Fe,fill:Fe,stroke:Fe,borderColor:Fe,borderTopColor:Fe,borderRightColor:Fe,borderBottomColor:Fe,borderLeftColor:Fe,filter:Tc,WebkitFilter:Tc,mask:Ac,WebkitMask:Ac},Uy=a=>dS[a],hS=new Set([Tc,Ac]);function Ry(a,r){let o=Uy(a);return hS.has(o)||(o=Yt),o.getAnimatableNone?o.getAnimatableNone(r):void 0}const mS=new Set(["auto","none","0"]);function gS(a,r,o){let l=0,c;for(;l<a.length&&!c;){const h=a[l];typeof h=="string"&&!mS.has(h)&&ci(h).values.length&&(c=a[l]),l++}if(c&&o)for(const h of r)a[h]=Ry(o,c)}class pS extends Pc{constructor(r,o,l,c,h){super(r,o,l,c,h,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:o,name:l}=this;if(!o||!o.current)return;super.readKeyframes();for(let y=0;y<r.length;y++){let b=r[y];if(typeof b=="string"&&(b=b.trim(),_c(b))){const w=wy(b,o.current);w!==void 0&&(r[y]=w),y===r.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!zy.has(l)||r.length!==2)return;const[c,h]=r,d=jg(c),p=jg(h),v=Sg(c),m=Sg(h);if(v!==m&&Kn[l]){this.needsMeasurement=!0;return}if(d!==p)if(Dg(d)&&Dg(p))for(let y=0;y<r.length;y++){const b=r[y];typeof b=="string"&&(r[y]=parseFloat(b))}else Kn[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:o}=this,l=[];for(let c=0;c<r.length;c++)(r[c]===null||oS(r[c]))&&l.push(c);l.length&&gS(r,l,o)}measureInitialState(){const{element:r,unresolvedKeyframes:o,name:l}=this;if(!r||!r.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Kn[l](r.measureViewportBox(),window.getComputedStyle(r.current)),o[0]=this.measuredOrigin;const c=o[o.length-1];c!==void 0&&r.getValue(l,c).jump(c,!1)}measureEndState(){const{element:r,name:o,unresolvedKeyframes:l}=this;if(!r||!r.current)return;const c=r.getValue(o);c&&c.jump(this.measuredOrigin,!1);const h=l.length-1,d=l[h];l[h]=Kn[o](r.measureViewportBox(),window.getComputedStyle(r.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,v])=>{r.getValue(p).set(v)}),this.resolveNoneKeyframes()}}const Zc=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function Oy(a,r,o){if(a==null)return[];if(a instanceof EventTarget)return[a];if(typeof a=="string"){let l=document;const c=o?.[a]??l.querySelectorAll(a);return c?Array.from(c):[]}return Array.from(a).filter(l=>l!=null)}const wc=(a,r)=>r&&typeof a=="number"?r.transform(a):a;function yS(a){return Hp(a)&&"offsetHeight"in a&&!("ownerSVGElement"in a)}const{schedule:Ic}=$p(queueMicrotask,!1),Pt={x:!1,y:!1};function Vy(){return Pt.x||Pt.y}function vS(a){return a==="x"||a==="y"?Pt[a]?null:(Pt[a]=!0,()=>{Pt[a]=!1}):Pt.x||Pt.y?null:(Pt.x=Pt.y=!0,()=>{Pt.x=Pt.y=!1})}function jy(a,r){const o=Oy(a),l=new AbortController,c={passive:!0,...r,signal:l.signal};return[o,c,()=>l.abort()]}function bS(a){return!(a.pointerType==="touch"||Vy())}function SS(a,r,o={}){const[l,c,h]=jy(a,o);return l.forEach(d=>{let p=!1,v=!1,m;const y=()=>{d.removeEventListener("pointerleave",U)},b=H=>{m&&(m(H),m=void 0),y()},w=H=>{p=!1,window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",w),v&&(v=!1,b(H))},N=()=>{p=!0,window.addEventListener("pointerup",w,c),window.addEventListener("pointercancel",w,c)},U=H=>{if(H.pointerType!=="touch"){if(p){v=!0;return}b(H)}},L=H=>{if(!bS(H))return;v=!1;const _=r(d,H);typeof _=="function"&&(m=_,d.addEventListener("pointerleave",U,c))};d.addEventListener("pointerenter",L,c),d.addEventListener("pointerdown",N,c)}),h}const By=(a,r)=>r?a===r?!0:By(a,r.parentElement):!1,Jc=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,TS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function AS(a){return TS.has(a.tagName)||a.isContentEditable===!0}const wS=new Set(["INPUT","SELECT","TEXTAREA"]);function zS(a){return wS.has(a.tagName)||a.isContentEditable===!0}const Qs=new WeakSet;function Ng(a){return r=>{r.key==="Enter"&&a(r)}}function Zu(a,r){a.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const ES=(a,r)=>{const o=a.currentTarget;if(!o)return;const l=Ng(()=>{if(Qs.has(o))return;Zu(o,"down");const c=Ng(()=>{Zu(o,"up")}),h=()=>Zu(o,"cancel");o.addEventListener("keyup",c,r),o.addEventListener("blur",h,r)});o.addEventListener("keydown",l,r),o.addEventListener("blur",()=>o.removeEventListener("keydown",l),r)};function Lg(a){return Jc(a)&&!Vy()}const _g=new WeakSet;function CS(a,r,o={}){const[l,c,h]=jy(a,o),d=p=>{const v=p.currentTarget;if(!Lg(p)||_g.has(p))return;Qs.add(v),o.stopPropagation&&_g.add(p);const m=r(v,p),y={...c,capture:!0},b=(U,L)=>{window.removeEventListener("pointerup",w,y),window.removeEventListener("pointercancel",N,y),Qs.has(v)&&Qs.delete(v),Lg(U)&&typeof m=="function"&&m(U,{success:L})},w=U=>{b(U,v===window||v===document||o.useGlobalTarget||By(v,U.target))},N=U=>{b(U,!1)};window.addEventListener("pointerup",w,y),window.addEventListener("pointercancel",N,y)};return l.forEach(p=>{(o.useGlobalTarget?window:p).addEventListener("pointerdown",d,c),yS(p)&&(p.addEventListener("focus",m=>ES(m,c)),!AS(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),h}function Wc(a){return Hp(a)&&"ownerSVGElement"in a}const Zs=new WeakMap;let Is;const Ny=(a,r,o)=>(l,c)=>c&&c[0]?c[0][a+"Size"]:Wc(l)&&"getBBox"in l?l.getBBox()[r]:l[o],MS=Ny("inline","width","offsetWidth"),xS=Ny("block","height","offsetHeight");function DS({target:a,borderBoxSize:r}){Zs.get(a)?.forEach(o=>{o(a,{get width(){return MS(a,r)},get height(){return xS(a,r)}})})}function US(a){a.forEach(DS)}function RS(){typeof ResizeObserver>"u"||(Is=new ResizeObserver(US))}function OS(a,r){Is||RS();const o=Oy(a);return o.forEach(l=>{let c=Zs.get(l);c||(c=new Set,Zs.set(l,c)),c.add(r),Is?.observe(l)}),()=>{o.forEach(l=>{const c=Zs.get(l);c?.delete(r),c?.size||Is?.unobserve(l)})}}const Js=new Set;let li;function VS(){li=()=>{const a={get width(){return window.innerWidth},get height(){return window.innerHeight}};Js.forEach(r=>r(a))},window.addEventListener("resize",li)}function jS(a){return Js.add(a),li||VS(),()=>{Js.delete(a),!Js.size&&typeof li=="function"&&(window.removeEventListener("resize",li),li=void 0)}}function Hg(a,r){return typeof a=="function"?jS(a):OS(a,r)}function BS(a){return Wc(a)&&a.tagName==="svg"}const NS=[...Dy,Fe,Yt],LS=a=>NS.find(xy(a)),kg=()=>({translate:0,scale:1,origin:0,originPoint:0}),ui=()=>({x:kg(),y:kg()}),Gg=()=>({min:0,max:0}),Qe=()=>({x:Gg(),y:Gg()}),_S=new WeakMap;function po(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function br(a){return typeof a=="string"||Array.isArray(a)}const $c=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ef=["initial",...$c];function yo(a){return po(a.animate)||ef.some(r=>br(a[r]))}function Ly(a){return!!(yo(a)||a.variants)}function HS(a,r,o){for(const l in r){const c=r[l],h=o[l];if(at(c))a.addValue(l,c);else if(at(h))a.addValue(l,fi(c,{owner:a}));else if(h!==c)if(a.hasValue(l)){const d=a.getValue(l);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=a.getStaticValue(l);a.addValue(l,fi(d!==void 0?d:c,{owner:a}))}}for(const l in o)r[l]===void 0&&a.removeValue(l);return r}const lo={current:null},tf={current:!1},kS=typeof window<"u";function _y(){if(tf.current=!0,!!kS)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),r=()=>lo.current=a.matches;a.addEventListener("change",r),r()}else lo.current=!1}const Xg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let uo={};function Hy(a){uo=a}function GS(){return uo}class XS{scrapeMotionValuesFromProps(r,o,l){return{}}constructor({parent:r,props:o,presenceContext:l,reducedMotionConfig:c,skipAnimations:h,blockInitialAnimation:d,visualState:p},v={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Pc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const N=lt.now();this.renderScheduledAt<N&&(this.renderScheduledAt=N,Ue.render(this.render,!1,!0))};const{latestValues:m,renderState:y}=p;this.latestValues=m,this.baseTarget={...m},this.initialValues=o.initial?{...m}:{},this.renderState=y,this.parent=r,this.props=o,this.presenceContext=l,this.depth=r?r.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=h,this.options=v,this.blockInitialAnimation=!!d,this.isControllingVariants=yo(o),this.isVariantNode=Ly(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:b,...w}=this.scrapeMotionValuesFromProps(o,{},this);for(const N in w){const U=w[N];m[N]!==void 0&&at(U)&&U.set(m[N])}}mount(r){if(this.hasBeenMounted)for(const o in this.initialValues)this.values.get(o)?.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=r,_S.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,l)=>this.bindToMotionValue(l,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(tf.current||_y(),this.shouldReduceMotion=lo.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Zn(this.notifyUpdate),Zn(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const o=this.features[r];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(r){this.children.add(r),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(r)}removeChild(r){this.children.delete(r),this.enteringChildren&&this.enteringChildren.delete(r)}bindToMotionValue(r,o){if(this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)(),o.accelerate&&Sy.has(r)&&this.current instanceof HTMLElement){const{factory:d,keyframes:p,times:v,ease:m,duration:y}=o.accelerate,b=new vy({element:this.current,name:r,keyframes:p,times:v,ease:m,duration:Mt(y)}),w=d(b);this.valueSubscriptions.set(r,()=>{w(),b.cancel()});return}const l=gi.has(r);l&&this.onBindTransform&&this.onBindTransform();const c=o.on("change",d=>{this.latestValues[r]=d,this.props.onUpdate&&Ue.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let h;typeof window<"u"&&window.MotionCheckAppearSync&&(h=window.MotionCheckAppearSync(this,r,o)),this.valueSubscriptions.set(r,()=>{c(),h&&h()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in uo){const o=uo[r];if(!o)continue;const{isEnabled:l,Feature:c}=o;if(!this.features[r]&&c&&l(this.props)&&(this.features[r]=new c(this)),this.features[r]){const h=this.features[r];h.isMounted?h.update():(h.mount(),h.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qe()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,o){this.latestValues[r]=o}update(r,o){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let l=0;l<Xg.length;l++){const c=Xg[l];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const h="on"+c,d=r[h];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=HS(this,this.scrapeMotionValuesFromProps(r,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(r),()=>o.variantChildren.delete(r)}addValue(r,o){const l=this.values.get(r);o!==l&&(l&&this.removeValue(r),this.bindToMotionValue(r,o),this.values.set(r,o),this.latestValues[r]=o.get())}removeValue(r){this.values.delete(r);const o=this.valueSubscriptions.get(r);o&&(o(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,o){if(this.props.values&&this.props.values[r])return this.props.values[r];let l=this.values.get(r);return l===void 0&&o!==void 0&&(l=fi(o===null?void 0:o,{owner:this}),this.addValue(r,l)),l}readValue(r,o){let l=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:this.getBaseTargetFromProps(this.props,r)??this.readValueFromInstance(this.current,r,this.options);return l!=null&&(typeof l=="string"&&(_p(l)||kp(l))?l=parseFloat(l):!LS(l)&&Yt.test(o)&&(l=Ry(r,o)),this.setBaseTarget(r,at(l)?l.get():l)),at(l)?l.get():l}setBaseTarget(r,o){this.baseTarget[r]=o}getBaseTarget(r){const{initial:o}=this.props;let l;if(typeof o=="string"||typeof o=="object"){const h=Kc(this.props,o,this.presenceContext?.custom);h&&(l=h[r])}if(o&&l!==void 0)return l;const c=this.getBaseTargetFromProps(this.props,r);return c!==void 0&&!at(c)?c:this.initialValues[r]!==void 0&&l===void 0?void 0:this.baseTarget[r]}on(r,o){return this.events[r]||(this.events[r]=new Bc),this.events[r].add(o)}notify(r,...o){this.events[r]&&this.events[r].notify(...o)}scheduleRenderMicrotask(){Ic.render(this.render)}}class ky extends XS{constructor(){super(...arguments),this.KeyframeResolver=pS}sortInstanceNodePosition(r,o){return r.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(r,o){const l=r.style;return l?l[o]:void 0}removeValueFromRenderState(r,{vars:o,style:l}){delete o[r],delete l[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;at(r)&&(this.childSubscription=r.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}class In{constructor(r){this.isMounted=!1,this.node=r}update(){}}function Gy({top:a,left:r,right:o,bottom:l}){return{x:{min:r,max:o},y:{min:a,max:l}}}function qS({x:a,y:r}){return{top:r.min,right:a.max,bottom:r.max,left:a.min}}function PS(a,r){if(!r)return a;const o=r({x:a.left,y:a.top}),l=r({x:a.right,y:a.bottom});return{top:o.y,left:o.x,bottom:l.y,right:l.x}}function Iu(a){return a===void 0||a===1}function zc({scale:a,scaleX:r,scaleY:o}){return!Iu(a)||!Iu(r)||!Iu(o)}function ya(a){return zc(a)||Xy(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function Xy(a){return qg(a.x)||qg(a.y)}function qg(a){return a&&a!=="0%"}function co(a,r,o){const l=a-o,c=r*l;return o+c}function Pg(a,r,o,l,c){return c!==void 0&&(a=co(a,c,l)),co(a,o,l)+r}function Ec(a,r=0,o=1,l,c){a.min=Pg(a.min,r,o,l,c),a.max=Pg(a.max,r,o,l,c)}function qy(a,{x:r,y:o}){Ec(a.x,r.translate,r.scale,r.originPoint),Ec(a.y,o.translate,o.scale,o.originPoint)}const Yg=.999999999999,Fg=1.0000000000001;function YS(a,r,o,l=!1){const c=o.length;if(!c)return;r.x=r.y=1;let h,d;for(let p=0;p<c;p++){h=o[p],d=h.projectionDelta;const{visualElement:v}=h.options;v&&v.props.style&&v.props.style.display==="contents"||(l&&h.options.layoutScroll&&h.scroll&&h!==h.root&&(Jt(a.x,-h.scroll.offset.x),Jt(a.y,-h.scroll.offset.y)),d&&(r.x*=d.x.scale,r.y*=d.y.scale,qy(a,d)),l&&ya(h.latestValues)&&Ws(a,h.latestValues,h.layout?.layoutBox))}r.x<Fg&&r.x>Yg&&(r.x=1),r.y<Fg&&r.y>Yg&&(r.y=1)}function Jt(a,r){a.min+=r,a.max+=r}function Kg(a,r,o,l,c=.5){const h=De(a.min,a.max,c);Ec(a,r,o,h,l)}function Qg(a,r){return typeof a=="string"?parseFloat(a)/100*(r.max-r.min):a}function Ws(a,r,o){const l=o??a;Kg(a.x,Qg(r.x,l.x),r.scaleX,r.scale,r.originX),Kg(a.y,Qg(r.y,l.y),r.scaleY,r.scale,r.originY)}function Py(a,r){return Gy(PS(a.getBoundingClientRect(),r))}function FS(a,r,o){const l=Py(a,o),{scroll:c}=r;return c&&(Jt(l.x,c.offset.x),Jt(l.y,c.offset.y)),l}const KS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},QS=mi.length;function ZS(a,r,o){let l="",c=!0;for(let d=0;d<QS;d++){const p=mi[d],v=a[p];if(v===void 0)continue;let m=!0;if(typeof v=="number")m=v===(p.startsWith("scale")?1:0);else{const y=parseFloat(v);m=p.startsWith("scale")?y===1:y===0}if(!m||o){const y=wc(v,oo[p]);if(!m){c=!1;const b=KS[p]||p;l+=`${b}(${y}) `}o&&(r[p]=y)}}const h=a.pathRotation;return h&&(c=!1,l+=`rotate(${wc(h,oo.pathRotation)}) `),l=l.trim(),o?l=o(r,c?"":l):c&&(l="none"),l}function nf(a,r,o){const{style:l,vars:c,transformOrigin:h}=a;let d=!1,p=!1;for(const v in r){const m=r[v];if(gi.has(v)){d=!0;continue}else if(ty(v)){c[v]=m;continue}else{const y=wc(m,oo[v]);v.startsWith("origin")?(p=!0,h[v]=y):l[v]=y}}if(r.transform||(d||o?l.transform=ZS(r,a.transform,o):l.transform&&(l.transform="none")),p){const{originX:v="50%",originY:m="50%",originZ:y=0}=h;l.transformOrigin=`${v} ${m} ${y}`}}function Yy(a,{style:r,vars:o},l,c){const h=a.style;let d;for(d in r)h[d]=r[d];c?.applyProjectionStyles(h,l);for(d in o)h.setProperty(d,o[d])}function Zg(a,r){return r.max===r.min?0:a/(r.max-r.min)*100}const fr={correct:(a,r)=>{if(!r.target)return a;if(typeof a=="string")if(Q.test(a))a=parseFloat(a);else return a;const o=Zg(a,r.target.x),l=Zg(a,r.target.y);return`${o}% ${l}%`}},IS={correct:(a,{treeScale:r,projectionDelta:o})=>{const l=a,c=Yt.parse(a);if(c.length>5)return l;const h=Yt.createTransformer(a),d=typeof c[0]!="number"?1:0,p=o.x.scale*r.x,v=o.y.scale*r.y;c[0+d]/=p,c[1+d]/=v;const m=De(p,v,.5);return typeof c[2+d]=="number"&&(c[2+d]/=m),typeof c[3+d]=="number"&&(c[3+d]/=m),h(c)}},Cc={borderRadius:{...fr,applyTo:[...Zc]},borderTopLeftRadius:fr,borderTopRightRadius:fr,borderBottomLeftRadius:fr,borderBottomRightRadius:fr,boxShadow:IS};function Fy(a,{layout:r,layoutId:o}){return gi.has(a)||a.startsWith("origin")||(r||o!==void 0)&&(!!Cc[a]||a==="opacity")}function af(a,r,o){const l=a.style,c=r?.style,h={};if(!l)return h;for(const d in l)(at(l[d])||c&&at(c[d])||Fy(d,a)||o?.getValue(d)?.liveStyle!==void 0)&&(h[d]=l[d]);return h}function JS(a){return window.getComputedStyle(a)}class WS extends ky{constructor(){super(...arguments),this.type="html",this.renderInstance=Yy}mount(r){mo(!!r.style),super.mount(r)}readValueFromInstance(r,o){if(gi.has(o))return this.projection?.isProjecting?dc(o):v1(r,o);{const l=JS(r),c=(ty(o)?l.getPropertyValue(o):l[o])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(r,{transformPagePoint:o}){return Py(r,o)}build(r,o,l){nf(r,o,l.transformTemplate)}scrapeMotionValuesFromProps(r,o,l){return af(r,o,l)}}const $S={offset:"stroke-dashoffset",array:"stroke-dasharray"},eT={offset:"strokeDashoffset",array:"strokeDasharray"};function tT(a,r,o=1,l=0,c=!0){a.pathLength=1;const h=c?$S:eT;a[h.offset]=`${-l}`,a[h.array]=`${r} ${o}`}const nT=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Ky(a,{attrX:r,attrY:o,attrScale:l,pathLength:c,pathSpacing:h=1,pathOffset:d=0,...p},v,m,y){if(nf(a,p,m),v){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:b,style:w}=a;b.transform&&(w.transform=b.transform,delete b.transform),(w.transform||b.transformOrigin)&&(w.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),w.transform&&(w.transformBox=y?.transformBox??"fill-box",delete b.transformBox);for(const N of nT)b[N]!==void 0&&(w[N]=b[N],delete b[N]);r!==void 0&&(b.x=r),o!==void 0&&(b.y=o),l!==void 0&&(b.scale=l),c!==void 0&&tT(b,c,h,d,!1)}const Qy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Zy=a=>typeof a=="string"&&a.toLowerCase()==="svg";function aT(a,r,o,l){Yy(a,r,void 0,l);for(const c in r.attrs)a.setAttribute(Qy.has(c)?c:Qc(c),r.attrs[c])}function Iy(a,r,o){const l=af(a,r,o);for(const c in a)if(at(a[c])||at(r[c])){const h=mi.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;l[h]=a[c]}return l}class iT extends ky{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qe}getBaseTargetFromProps(r,o){return r[o]}readValueFromInstance(r,o){if(gi.has(o)){const l=Uy(o);return l&&l.default||0}return o=Qy.has(o)?o:Qc(o),r.getAttribute(o)}scrapeMotionValuesFromProps(r,o,l){return Iy(r,o,l)}build(r,o,l){Ky(r,o,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(r,o,l,c){aT(r,o,l,c)}mount(r){this.isSVGTag=Zy(r.tagName),super.mount(r)}}const rT=ef.length;function Jy(a){if(!a)return;if(!a.isControllingVariants){const o=a.parent?Jy(a.parent)||{}:{};return a.props.initial!==void 0&&(o.initial=a.props.initial),o}const r={};for(let o=0;o<rT;o++){const l=ef[o],c=a.props[l];(br(c)||c===!1)&&(r[l]=c)}return r}function Wy(a,r){if(!Array.isArray(r))return!1;const o=r.length;if(o!==a.length)return!1;for(let l=0;l<o;l++)if(r[l]!==a[l])return!1;return!0}const sT=[...$c].reverse(),oT=$c.length;function lT(a){return r=>Promise.all(r.map(({animation:o,options:l})=>rS(a,o,l)))}function uT(a){let r=lT(a),o=Ig(),l=!0,c=!1;const h=m=>(y,b)=>{const w=Ta(a,b,m==="exit"?a.presenceContext?.custom:void 0);if(w){const{transition:N,transitionEnd:U,...L}=w;y={...y,...L,...U}}return y};function d(m){r=m(a)}function p(m){const{props:y}=a,b=Jy(a.parent)||{},w=[],N=new Set;let U={},L=1/0;for(let _=0;_<oT;_++){const X=sT[_],k=o[X],P=y[X]!==void 0?y[X]:b[X],ne=br(P),le=X===m?k.isActive:null;le===!1&&(L=_);let K=P===b[X]&&P!==y[X]&&ne;if(K&&(l||c)&&a.manuallyAnimateOnMount&&(K=!1),k.protectedKeys={...U},!k.isActive&&le===null||!P&&!k.prevProp||po(P)||typeof P=="boolean")continue;if(X==="exit"&&k.isActive&&le!==!0){k.prevResolvedValues&&(U={...U,...k.prevResolvedValues});continue}const W=cT(k.prevProp,P);let ze=W||X===m&&k.isActive&&!K&&ne||_>L&&ne,te=!1;const ve=Array.isArray(P)?P:[P];let Te=ve.reduce(h(X),{});le===!1&&(Te={});const{prevResolvedValues:rt={}}=k,Ge={...rt,...Te},Le=Y=>{ze=!0,N.has(Y)&&(te=!0,N.delete(Y)),k.needsAnimating[Y]=!0;const se=a.getValue(Y);se&&(se.liveStyle=!1)};for(const Y in Ge){const se=Te[Y],me=rt[Y];if(U.hasOwnProperty(Y))continue;let A=!1;vc(se)&&vc(me)?A=!Wy(se,me)||W:A=se!==me,A?se!=null?Le(Y):N.add(Y):se!==void 0&&N.has(Y)?Le(Y):k.protectedKeys[Y]=!0}k.prevProp=P,k.prevResolvedValues=Te,k.isActive&&(U={...U,...Te}),(l||c)&&a.blockInitialAnimation&&(ze=!1);const R=K&&W;ze&&(!R||te)&&w.push(...ve.map(Y=>{const se={type:X};if(typeof Y=="string"&&(l||c)&&!R&&a.manuallyAnimateOnMount&&a.parent){const{parent:me}=a,A=Ta(me,Y);if(me.enteringChildren&&A){const{delayChildren:B}=A.transition||{};se.delay=Ty(me.enteringChildren,a,B)}}return{animation:Y,options:se}}))}if(N.size){const _={};if(typeof y.initial!="boolean"){const X=Ta(a,Array.isArray(y.initial)?y.initial[0]:y.initial);X&&X.transition&&(_.transition=X.transition)}N.forEach(X=>{const k=a.getBaseTarget(X),P=a.getValue(X);P&&(P.liveStyle=!0),_[X]=k??null}),w.push({animation:_})}let H=!!w.length;return l&&(y.initial===!1||y.initial===y.animate)&&!a.manuallyAnimateOnMount&&(H=!1),l=!1,c=!1,H?r(w):Promise.resolve()}function v(m,y){if(o[m].isActive===y)return Promise.resolve();a.variantChildren?.forEach(w=>w.animationState?.setActive(m,y)),o[m].isActive=y;const b=p(m);for(const w in o)o[w].protectedKeys={};return b}return{animateChanges:p,setActive:v,setAnimateFunction:d,getState:()=>o,reset:()=>{o=Ig(),c=!0}}}function cT(a,r){return typeof r=="string"?r!==a:Array.isArray(r)?!Wy(r,a):!1}function pa(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ig(){return{animate:pa(!0),whileInView:pa(),whileHover:pa(),whileTap:pa(),whileDrag:pa(),whileFocus:pa(),exit:pa()}}function Mc(a,r){a.min=r.min,a.max=r.max}function qt(a,r){Mc(a.x,r.x),Mc(a.y,r.y)}function Jg(a,r){a.translate=r.translate,a.scale=r.scale,a.originPoint=r.originPoint,a.origin=r.origin}const $y=1e-4,fT=1-$y,dT=1+$y,ev=.01,hT=0-ev,mT=0+ev;function ut(a){return a.max-a.min}function gT(a,r,o){return Math.abs(a-r)<=o}function Wg(a,r,o,l=.5){a.origin=l,a.originPoint=De(r.min,r.max,a.origin),a.scale=ut(o)/ut(r),a.translate=De(o.min,o.max,a.origin)-a.originPoint,(a.scale>=fT&&a.scale<=dT||isNaN(a.scale))&&(a.scale=1),(a.translate>=hT&&a.translate<=mT||isNaN(a.translate))&&(a.translate=0)}function gr(a,r,o,l){Wg(a.x,r.x,o.x,l?l.originX:void 0),Wg(a.y,r.y,o.y,l?l.originY:void 0)}function $g(a,r,o,l=0){const c=l?De(o.min,o.max,l):o.min;a.min=c+r.min,a.max=a.min+ut(r)}function pT(a,r,o,l){$g(a.x,r.x,o.x,l?.x),$g(a.y,r.y,o.y,l?.y)}function ep(a,r,o,l=0){const c=l?De(o.min,o.max,l):o.min;a.min=r.min-c,a.max=a.min+ut(r)}function fo(a,r,o,l){ep(a.x,r.x,o.x,l?.x),ep(a.y,r.y,o.y,l?.y)}function tp(a,r,o,l,c){return a-=r,a=co(a,1/o,l),c!==void 0&&(a=co(a,1/c,l)),a}function yT(a,r=0,o=1,l=.5,c,h=a,d=a){if($t.test(r)&&(r=parseFloat(r),r=De(d.min,d.max,r/100)-d.min),typeof r!="number")return;let p=De(h.min,h.max,l);a===h&&(p-=r),a.min=tp(a.min,r,o,p,c),a.max=tp(a.max,r,o,p,c)}function np(a,r,[o,l,c],h,d){yT(a,r[o],r[l],r[c],r.scale,h,d)}const vT=["x","scaleX","originX"],bT=["y","scaleY","originY"];function ap(a,r,o,l){np(a.x,r,vT,o?o.x:void 0,l?l.x:void 0),np(a.y,r,bT,o?o.y:void 0,l?l.y:void 0)}function ip(a){return a.translate===0&&a.scale===1}function tv(a){return ip(a.x)&&ip(a.y)}function rp(a,r){return a.min===r.min&&a.max===r.max}function ST(a,r){return rp(a.x,r.x)&&rp(a.y,r.y)}function sp(a,r){return Math.round(a.min)===Math.round(r.min)&&Math.round(a.max)===Math.round(r.max)}function nv(a,r){return sp(a.x,r.x)&&sp(a.y,r.y)}function op(a){return ut(a.x)/ut(a.y)}function lp(a,r){return a.translate===r.translate&&a.scale===r.scale&&a.originPoint===r.originPoint}function It(a){return[a("x"),a("y")]}function TT(a,r,o){let l="";const c=a.x.translate/r.x,h=a.y.translate/r.y,d=o?.z||0;if((c||h||d)&&(l=`translate3d(${c}px, ${h}px, ${d}px) `),(r.x!==1||r.y!==1)&&(l+=`scale(${1/r.x}, ${1/r.y}) `),o){const{transformPerspective:m,rotate:y,pathRotation:b,rotateX:w,rotateY:N,skewX:U,skewY:L}=o;m&&(l=`perspective(${m}px) ${l}`),y&&(l+=`rotate(${y}deg) `),b&&(l+=`rotate(${b}deg) `),w&&(l+=`rotateX(${w}deg) `),N&&(l+=`rotateY(${N}deg) `),U&&(l+=`skewX(${U}deg) `),L&&(l+=`skewY(${L}deg) `)}const p=a.x.scale*r.x,v=a.y.scale*r.y;return(p!==1||v!==1)&&(l+=`scale(${p}, ${v})`),l||"none"}const AT=Zc.length,up=a=>typeof a=="string"?parseFloat(a):a,cp=a=>typeof a=="number"||Q.test(a);function wT(a,r,o,l,c,h){c?(a.opacity=De(0,o.opacity??1,zT(l)),a.opacityExit=De(r.opacity??1,0,ET(l))):h&&(a.opacity=De(r.opacity??1,o.opacity??1,l));for(let d=0;d<AT;d++){const p=Zc[d];let v=fp(r,p),m=fp(o,p);if(v===void 0&&m===void 0)continue;v||(v=0),m||(m=0),v===0||m===0||cp(v)===cp(m)?(a[p]=Math.max(De(up(v),up(m),l),0),($t.test(m)||$t.test(v))&&(a[p]+="%")):a[p]=m}(r.rotate||o.rotate)&&(a.rotate=De(r.rotate||0,o.rotate||0,l))}function fp(a,r){return a[r]!==void 0?a[r]:a.borderRadius}const zT=av(0,.5,Zp),ET=av(.5,.95,Ht);function av(a,r,o){return l=>l<a?0:l>r?1:o(yr(a,r,l))}function CT(a,r,o){const l=at(a)?a:fi(a);return l.start(Fc("",l,r,o)),l.animation}function Sr(a,r,o,l={passive:!0}){return a.addEventListener(r,o,l),()=>a.removeEventListener(r,o,l)}const MT=(a,r)=>a.depth-r.depth;class xT{constructor(){this.children=[],this.isDirty=!1}add(r){jc(this.children,r),this.isDirty=!0}remove(r){no(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(MT),this.isDirty=!1,this.children.forEach(r)}}function DT(a,r){const o=lt.now(),l=({timestamp:c})=>{const h=c-o;h>=r&&(Zn(l),a(h-r))};return Ue.setup(l,!0),()=>Zn(l)}function $s(a){return at(a)?a.get():a}class UT{constructor(){this.members=[]}add(r){jc(this.members,r);for(let o=this.members.length-1;o>=0;o--){const l=this.members[o];if(l===r||l===this.lead||l===this.prevLead)continue;const c=l.instance;(!c||c.isConnected===!1)&&!l.snapshot&&(no(this.members,l),l.unmount())}r.scheduleRender()}remove(r){if(no(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(r){for(let o=this.members.indexOf(r)-1;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1&&l.instance?.isConnected!==!1)return this.promote(l),!0}return!1}promote(r,o){const l=this.lead;if(r!==l&&(this.prevLead=l,this.lead=r,r.show(),l)){l.updateSnapshot(),r.scheduleRender();const{layoutDependency:c}=l.options,{layoutDependency:h}=r.options;(c===void 0||c!==h)&&(r.resumeFrom=l,o&&(l.preserveOpacity=!0),l.snapshot&&(r.snapshot=l.snapshot,r.snapshot.latestValues=l.animationValues||l.latestValues),r.root?.isUpdating&&(r.isLayoutDirty=!0)),r.options.crossfade===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(r=>{r.options.onExitComplete?.(),r.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(r=>r.instance&&r.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const eo={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ju=["","X","Y","Z"],RT=1e3;let OT=0;function Wu(a,r,o,l){const{latestValues:c}=r;c[a]&&(o[a]=c[a],r.setStaticValue(a,0),l&&(l[a]=0))}function iv(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:r}=a.options;if(!r)return;const o=Cy(r);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:c,layoutId:h}=a.options;window.MotionCancelOptimisedAnimation(o,"transform",Ue,!(c||h))}const{parent:l}=a;l&&!l.hasCheckedOptimisedAppear&&iv(l)}function rv({attachResizeListener:a,defaultParent:r,measureScroll:o,checkIsScrollRoot:l,resetTransform:c}){return class{constructor(d={},p=r?.()){this.id=OT++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(BT),this.nodes.forEach(GT),this.nodes.forEach(XT),this.nodes.forEach(NT)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let v=0;v<this.path.length;v++)this.path[v].shouldResetTransform=!0;this.root===this&&(this.nodes=new xT)}addEventListener(d,p){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Bc),this.eventHandlers.get(d).add(p)}notifyListeners(d,...p){const v=this.eventHandlers.get(d);v&&v.notify(...p)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Wc(d)&&!BS(d),this.instance=d;const{layoutId:p,layout:v,visualElement:m}=this.options;if(m&&!m.current&&m.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(v||p)&&(this.isLayoutDirty=!0),a){let y,b=0;const w=()=>this.root.updateBlockedByResize=!1;Ue.read(()=>{b=window.innerWidth}),a(d,()=>{const N=window.innerWidth;N!==b&&(b=N,this.root.updateBlockedByResize=!0,y&&y(),y=DT(w,250),eo.hasAnimatedSinceResize&&(eo.hasAnimatedSinceResize=!1,this.nodes.forEach(mp)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&m&&(p||v)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:w,layout:N})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const U=this.options.transition||m.getDefaultTransition()||KT,{onLayoutAnimationStart:L,onLayoutAnimationComplete:H}=m.getProps(),_=!this.targetLayout||!nv(this.targetLayout,N),X=!b&&w;if(this.options.layoutRoot||this.resumeFrom||X||b&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const k={...Yc(U,"layout"),onPlay:L,onComplete:H};(m.shouldReduceMotion||this.options.layoutRoot)&&(k.delay=0,k.type=!1),this.startAnimation(k),this.setAnimationOrigin(y,X,k.path)}else b||mp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=N})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Zn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(qT),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&iv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,(typeof b.latestValues.x=="string"||typeof b.latestValues.y=="string")&&(b.isLayoutDirty=!0),b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:p,layout:v}=this.options;if(p===void 0&&!v)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const v=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),v&&this.nodes.forEach(_T),this.nodes.forEach(dp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(hp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(HT),this.nodes.forEach(kT),this.nodes.forEach(VT),this.nodes.forEach(jT)):this.nodes.forEach(hp),this.clearAllSnapshots();const p=lt.now();nt.delta=en(0,1e3/60,p-nt.timestamp),nt.timestamp=p,nt.isProcessing=!0,qu.update.process(nt),qu.preRender.process(nt),qu.render.process(nt),nt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ic.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(LT),this.sharedNodes.forEach(PT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ue.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ue.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ut(this.snapshot.measuredBox.x)&&!ut(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let v=0;v<this.path.length;v++)this.path[v].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Qe()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(p=!1),p&&this.instance){const v=l(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:v,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:v}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!tv(this.projectionDelta),v=this.getTransformTemplate(),m=v?v(this.latestValues,""):void 0,y=m!==this.prevTransformTemplateValue;d&&this.instance&&(p||ya(this.latestValues)||y)&&(c(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const p=this.measurePageBox();let v=this.removeElementScroll(p);return d&&(v=this.removeTransform(v)),QT(v),{animationId:this.root.animationId,measuredBox:p,layoutBox:v,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:d}=this.options;if(!d)return Qe();const p=d.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(ZT))){const{scroll:m}=this.root;m&&(Jt(p.x,m.offset.x),Jt(p.y,m.offset.y))}return p}removeElementScroll(d){const p=Qe();if(qt(p,d),this.scroll?.wasRoot)return p;for(let v=0;v<this.path.length;v++){const m=this.path[v],{scroll:y,options:b}=m;m!==this.root&&y&&b.layoutScroll&&(y.wasRoot&&qt(p,d),Jt(p.x,y.offset.x),Jt(p.y,y.offset.y))}return p}applyTransform(d,p=!1,v){const m=v||Qe();qt(m,d);for(let y=0;y<this.path.length;y++){const b=this.path[y];!p&&b.options.layoutScroll&&b.scroll&&b!==b.root&&(Jt(m.x,-b.scroll.offset.x),Jt(m.y,-b.scroll.offset.y)),ya(b.latestValues)&&Ws(m,b.latestValues,b.layout?.layoutBox)}return ya(this.latestValues)&&Ws(m,this.latestValues,this.layout?.layoutBox),m}removeTransform(d){const p=Qe();qt(p,d);for(let v=0;v<this.path.length;v++){const m=this.path[v];if(!ya(m.latestValues))continue;let y;m.instance&&(zc(m.latestValues)&&m.updateSnapshot(),y=Qe(),qt(y,m.measurePageBox())),ap(p,m.latestValues,m.snapshot?.layoutBox,y)}return ya(this.latestValues)&&ap(p,this.latestValues),p}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==nt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const v=!!this.resumingFrom||this!==p;if(!(d||v&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!this.layout||!(y||b))return;this.resolvedRelativeTargetAt=nt.timestamp;const w=this.getClosestProjectingParent();w&&this.linkedParentVersion!==w.layoutVersion&&!w.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&w&&w.layout?this.createRelativeTarget(w,this.layout.layoutBox,w.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qe(),this.targetWithTransforms=Qe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),pT(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):qt(this.target,this.layout.layoutBox),qy(this.target,this.targetDelta)):qt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?this.createRelativeTarget(w,this.target,w.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||zc(this.parent.latestValues)||Xy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,p,v){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),fo(this.relativeTargetOrigin,p,v,this.options.layoutAnchor||void 0),qt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const d=this.getLead(),p=!!this.resumingFrom||this!==d;let v=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(v=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(v=!1),this.resolvedRelativeTargetAt===nt.timestamp&&(v=!1),v)return;const{layout:m,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||y))return;qt(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,w=this.treeScale.y;YS(this.layoutCorrected,this.treeScale,this.path,p),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Qe());const{target:N}=d;if(!N){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Jg(this.prevProjectionDelta.x,this.projectionDelta.x),Jg(this.prevProjectionDelta.y,this.projectionDelta.y)),gr(this.projectionDelta,this.layoutCorrected,N,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==w||!lp(this.projectionDelta.x,this.prevProjectionDelta.x)||!lp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",N))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){if(this.options.visualElement?.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ui(),this.projectionDelta=ui(),this.projectionDeltaWithTransform=ui()}setAnimationOrigin(d,p=!1,v){const m=this.snapshot,y=m?m.latestValues:{},b={...this.latestValues},w=ui();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const N=Qe(),U=m?m.source:void 0,L=this.layout?this.layout.source:void 0,H=U!==L,_=this.getStack(),X=!_||_.members.length<=1,k=!!(H&&!X&&this.options.crossfade===!0&&!this.path.some(FT));this.animationProgress=0;let P;const ne=v?.interpolateProjection(d);this.mixTargetDelta=le=>{const K=le/1e3,W=ne?.(K);W?(w.x.translate=W.x,w.x.scale=De(d.x.scale,1,K),w.x.origin=d.x.origin,w.x.originPoint=d.x.originPoint,w.y.translate=W.y,w.y.scale=De(d.y.scale,1,K),w.y.origin=d.y.origin,w.y.originPoint=d.y.originPoint):(gp(w.x,d.x,K),gp(w.y,d.y,K)),this.setTargetDelta(w),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fo(N,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),YT(this.relativeTarget,this.relativeTargetOrigin,N,K),P&&ST(this.relativeTarget,P)&&(this.isProjectionDirty=!1),P||(P=Qe()),qt(P,this.relativeTarget)),H&&(this.animationValues=b,wT(b,y,this.latestValues,K,k,X)),W&&W.rotate!==void 0&&(this.animationValues||(this.animationValues=b),this.animationValues.pathRotation=W.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=K},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Zn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ue.update(()=>{eo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=fi(0)),this.motionValue.jump(0,!1),this.currentAnimation=CT(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),d.onUpdate&&d.onUpdate(p)},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(RT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:p,target:v,layout:m,latestValues:y}=d;if(!(!p||!v||!m)){if(this!==d&&this.layout&&m&&sv(this.options.animationType,this.layout.layoutBox,m.layoutBox)){v=this.target||Qe();const b=ut(this.layout.layoutBox.x);v.x.min=d.target.x.min,v.x.max=v.x.min+b;const w=ut(this.layout.layoutBox.y);v.y.min=d.target.y.min,v.y.max=v.y.min+w}qt(p,v),Ws(p,y),gr(this.projectionDeltaWithTransform,this.layoutCorrected,p,y)}}registerSharedNode(d,p){this.sharedNodes.has(d)||this.sharedNodes.set(d,new UT),this.sharedNodes.get(d).add(p);const m=p.options.initialPromotionConfig;p.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(p):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){const{layoutId:d}=this.options;return d?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:d}=this.options;return d?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:p,preserveFollowOpacity:v}={}){const m=this.getStack();m&&m.promote(this,v),d&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let p=!1;const{latestValues:v}=d;if((v.z||v.rotate||v.rotateX||v.rotateY||v.rotateZ||v.skewX||v.skewY)&&(p=!0),!p)return;const m={};v.z&&Wu("z",d,m,this.animationValues);for(let y=0;y<Ju.length;y++)Wu(`rotate${Ju[y]}`,d,m,this.animationValues),Wu(`skew${Ju[y]}`,d,m,this.animationValues);d.render();for(const y in m)d.setStaticValue(y,m[y]),this.animationValues&&(this.animationValues[y]=m[y]);d.scheduleRender()}applyProjectionStyles(d,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const v=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=$s(p?.pointerEvents)||"",d.transform=v?v(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=$s(p?.pointerEvents)||""),this.hasProjected&&!ya(this.latestValues)&&(d.transform=v?v({},""):"none",this.hasProjected=!1);return}d.visibility="";const y=m.animationValues||m.latestValues;this.applyTransformsToTarget();let b=TT(this.projectionDeltaWithTransform,this.treeScale,y);v&&(b=v(y,b)),d.transform=b;const{x:w,y:N}=this.projectionDelta;d.transformOrigin=`${w.origin*100}% ${N.origin*100}% 0`,m.animationValues?d.opacity=m===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=m===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const U in Cc){if(y[U]===void 0)continue;const{correct:L,applyTo:H,isCSSVariable:_}=Cc[U],X=b==="none"?y[U]:L(y[U],m);if(H){const k=H.length;for(let P=0;P<k;P++)d[H[P]]=X}else _?this.options.visualElement.renderState.vars[U]=X:d[U]=X}this.options.layoutId&&(d.pointerEvents=m===this?$s(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>d.currentAnimation?.stop()),this.root.nodes.forEach(dp),this.root.sharedNodes.clear()}}}function VT(a){a.updateLayout()}function jT(a){const r=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&r&&a.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:l}=a.layout,{animationType:c}=a.options,h=r.source!==a.layout.source;if(c==="size")It(y=>{const b=h?r.measuredBox[y]:r.layoutBox[y],w=ut(b);b.min=o[y].min,b.max=b.min+w});else if(c==="x"||c==="y"){const y=c==="x"?"y":"x";Mc(h?r.measuredBox[y]:r.layoutBox[y],o[y])}else sv(c,r.layoutBox,o)&&It(y=>{const b=h?r.measuredBox[y]:r.layoutBox[y],w=ut(o[y]);b.max=b.min+w,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[y].max=a.relativeTarget[y].min+w)});const d=ui();gr(d,o,r.layoutBox);const p=ui();h?gr(p,a.applyTransform(l,!0),r.measuredBox):gr(p,o,r.layoutBox);const v=!tv(d);let m=!1;if(!a.resumeFrom){const y=a.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:b,layout:w}=y;if(b&&w){const N=a.options.layoutAnchor||void 0,U=Qe();fo(U,r.layoutBox,b.layoutBox,N);const L=Qe();fo(L,o,w.layoutBox,N),nv(U,L)||(m=!0),y.options.layoutRoot&&(a.relativeTarget=L,a.relativeTargetOrigin=U,a.relativeParent=y)}}}a.notifyListeners("didUpdate",{layout:o,snapshot:r,delta:p,layoutDelta:d,hasLayoutChanged:v,hasRelativeLayoutChanged:m})}else if(a.isLead()){const{onExitComplete:o}=a.options;o&&o()}a.options.transition=void 0}function BT(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function NT(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function LT(a){a.clearSnapshot()}function dp(a){a.clearMeasurements()}function _T(a){a.isLayoutDirty=!0,a.updateLayout()}function hp(a){a.isLayoutDirty=!1}function HT(a){a.isAnimationBlocked&&a.layout&&!a.isLayoutDirty&&(a.snapshot=a.layout,a.isLayoutDirty=!0)}function kT(a){const{visualElement:r}=a.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),a.resetTransform()}function mp(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function GT(a){a.resolveTargetDelta()}function XT(a){a.calcProjection()}function qT(a){a.resetSkewAndRotation()}function PT(a){a.removeLeadSnapshot()}function gp(a,r,o){a.translate=De(r.translate,0,o),a.scale=De(r.scale,1,o),a.origin=r.origin,a.originPoint=r.originPoint}function pp(a,r,o,l){a.min=De(r.min,o.min,l),a.max=De(r.max,o.max,l)}function YT(a,r,o,l){pp(a.x,r.x,o.x,l),pp(a.y,r.y,o.y,l)}function FT(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const KT={duration:.45,ease:[.4,0,.1,1]},yp=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),vp=yp("applewebkit/")&&!yp("chrome/")?Math.round:Ht;function bp(a){a.min=vp(a.min),a.max=vp(a.max)}function QT(a){bp(a.x),bp(a.y)}function sv(a,r,o){return a==="position"||a==="preserve-aspect"&&!gT(op(r),op(o),.2)}function ZT(a){return a!==a.root&&a.scroll?.wasRoot}const IT=rv({attachResizeListener:(a,r)=>Sr(a,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),$u={current:void 0},ov=rv({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!$u.current){const a=new IT({});a.mount(window),a.setOptions({layoutScroll:!0}),$u.current=a}return $u.current},resetTransform:(a,r)=>{a.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),lv=J.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function JT(a=!0){const r=J.useContext(Vc);if(r===null)return[!0,null];const{isPresent:o,onExitComplete:l,register:c}=r,h=J.useId();J.useEffect(()=>{if(a)return c(h)},[a]);const d=J.useCallback(()=>a&&l&&l(h),[h,l,a]);return!o&&l?[!1,d]:[!0]}const uv=J.createContext({strict:!1}),Sp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Tp=!1;function WT(){if(Tp)return;const a={};for(const r in Sp)a[r]={isEnabled:o=>Sp[r].some(l=>!!o[l])};Hy(a),Tp=!0}function cv(){return WT(),GS()}function $T(a){const r=cv();for(const o in a)r[o]={...r[o],...a[o]};Hy(r)}const eA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ho(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||eA.has(a)}let fv=a=>!ho(a);function tA(a){typeof a=="function"&&(fv=r=>r.startsWith("on")?!ho(r):a(r))}try{tA(require("@emotion/is-prop-valid").default)}catch{}function nA(a,r,o){const l={};for(const c in a)c==="values"&&typeof a.values=="object"||at(a[c])||(fv(c)||o===!0&&ho(c)||!r&&!ho(c)||a.draggable&&c.startsWith("onDrag"))&&(l[c]=a[c]);return l}const vo=J.createContext({});function aA(a,r){if(yo(a)){const{initial:o,animate:l}=a;return{initial:o===!1||br(o)?o:void 0,animate:br(l)?l:void 0}}return a.inherit!==!1?r:{}}function iA(a){const{initial:r,animate:o}=aA(a,J.useContext(vo));return J.useMemo(()=>({initial:r,animate:o}),[Ap(r),Ap(o)])}function Ap(a){return Array.isArray(a)?a.join(" "):a}const rf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function dv(a,r,o){for(const l in r)!at(r[l])&&!Fy(l,o)&&(a[l]=r[l])}function rA({transformTemplate:a},r){return J.useMemo(()=>{const o=rf();return nf(o,r,a),Object.assign({},o.vars,o.style)},[r])}function sA(a,r){const o=a.style||{},l={};return dv(l,o,a),Object.assign(l,rA(a,r)),l}function oA(a,r){const o={},l=sA(a,r);return a.drag&&a.dragListener!==!1&&(o.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(o.tabIndex=0),o.style=l,o}const hv=()=>({...rf(),attrs:{}});function lA(a,r,o,l){const c=J.useMemo(()=>{const h=hv();return Ky(h,r,Zy(l),a.transformTemplate,a.style),{...h.attrs,style:{...h.style}}},[r]);if(a.style){const h={};dv(h,a.style,a),c.style={...h,...c.style}}return c}const uA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function sf(a){return typeof a!="string"||a.includes("-")?!1:!!(uA.indexOf(a)>-1||/[A-Z]/u.test(a))}function cA(a,r,o,{latestValues:l},c,h=!1,d){const v=(d??sf(a)?lA:oA)(r,l,c,a),m=nA(r,typeof a=="string",h),y=a!==J.Fragment?{...m,...v,ref:o}:{},{children:b}=r,w=J.useMemo(()=>at(b)?b.get():b,[b]);return J.createElement(a,{...y,children:w})}function fA({scrapeMotionValuesFromProps:a,createRenderState:r},o,l,c){return{latestValues:dA(o,l,c,a),renderState:r()}}function dA(a,r,o,l){const c={},h=l(a,{});for(const w in h)c[w]=$s(h[w]);let{initial:d,animate:p}=a;const v=yo(a),m=Ly(a);r&&m&&!v&&a.inherit!==!1&&(d===void 0&&(d=r.initial),p===void 0&&(p=r.animate));let y=o?o.initial===!1:!1;y=y||d===!1;const b=y?p:d;if(b&&typeof b!="boolean"&&!po(b)){const w=Array.isArray(b)?b:[b];for(let N=0;N<w.length;N++){const U=Kc(a,w[N]);if(U){const{transitionEnd:L,transition:H,..._}=U;for(const X in _){let k=_[X];if(Array.isArray(k)){const P=y?k.length-1:0;k=k[P]}k!==null&&(c[X]=k)}for(const X in L)c[X]=L[X]}}}return c}const mv=a=>(r,o)=>{const l=J.useContext(vo),c=J.useContext(Vc),h=()=>fA(a,r,l,c);return o?h():f2(h)},hA=mv({scrapeMotionValuesFromProps:af,createRenderState:rf}),mA=mv({scrapeMotionValuesFromProps:Iy,createRenderState:hv}),gA=Symbol.for("motionComponentSymbol");function pA(a,r,o){const l=J.useRef(o);J.useInsertionEffect(()=>{l.current=o});const c=J.useRef(null);return J.useCallback(h=>{h&&a.onMount?.(h),r&&(h?r.mount(h):r.unmount());const d=l.current;if(typeof d=="function")if(h){const p=d(h);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(h);else d&&(d.current=h)},[r])}const gv=J.createContext({});function si(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function yA(a,r,o,l,c,h){const{visualElement:d}=J.useContext(vo),p=J.useContext(uv),v=J.useContext(Vc),m=J.useContext(lv),y=m.reducedMotion,b=m.skipAnimations,w=J.useRef(null),N=J.useRef(!1);l=l||p.renderer,!w.current&&l&&(w.current=l(a,{visualState:r,parent:d,props:o,presenceContext:v,blockInitialAnimation:v?v.initial===!1:!1,reducedMotionConfig:y,skipAnimations:b,isSVG:h}),N.current&&w.current&&(w.current.manuallyAnimateOnMount=!0));const U=w.current,L=J.useContext(gv);U&&!U.projection&&c&&(U.type==="html"||U.type==="svg")&&vA(w.current,o,c,L);const H=J.useRef(!1);J.useInsertionEffect(()=>{U&&H.current&&U.update(o,v)});const _=o[Ey],X=J.useRef(!!_&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return h2(()=>{N.current=!0,U&&(H.current=!0,window.MotionIsMounted=!0,U.updateFeatures(),U.scheduleRenderMicrotask(),X.current&&U.animationState&&U.animationState.animateChanges())}),J.useEffect(()=>{U&&(!X.current&&U.animationState&&U.animationState.animateChanges(),X.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),X.current=!1),U.enteringChildren=void 0)}),U}function vA(a,r,o,l){const{layoutId:c,layout:h,drag:d,dragConstraints:p,layoutScroll:v,layoutRoot:m,layoutAnchor:y,layoutCrossfade:b}=r;a.projection=new o(a.latestValues,r["data-framer-portal-id"]?void 0:pv(a.parent)),a.projection.setOptions({layoutId:c,layout:h,alwaysMeasureLayout:!!d||p&&si(p),visualElement:a,animationType:typeof h=="string"?h:"both",initialPromotionConfig:l,crossfade:b,layoutScroll:v,layoutRoot:m,layoutAnchor:y})}function pv(a){if(a)return a.options.allowProjection!==!1?a.projection:pv(a.parent)}function ec(a,{forwardMotionProps:r=!1,type:o}={},l,c){l&&$T(l);const h=o?o==="svg":sf(a),d=h?mA:hA;function p(m,y){let b;const w={...J.useContext(lv),...m,layoutId:bA(m)},{isStatic:N}=w,U=iA(m),L=d(m,N);if(!N&&typeof window<"u"){SA();const H=TA(w);b=H.MeasureLayout,U.visualElement=yA(a,L,w,c,H.ProjectionNode,h)}return x.jsxs(vo.Provider,{value:U,children:[b&&U.visualElement?x.jsx(b,{visualElement:U.visualElement,...w}):null,cA(a,m,pA(L,U.visualElement,y),L,N,r,h)]})}p.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const v=J.forwardRef(p);return v[gA]=a,v}function bA({layoutId:a}){const r=J.useContext(Lp).id;return r&&a!==void 0?r+"-"+a:a}function SA(a,r){J.useContext(uv).strict}function TA(a){const r=cv(),{drag:o,layout:l}=r;if(!o&&!l)return{};const c={...o,...l};return{MeasureLayout:o?.isEnabled(a)||l?.isEnabled(a)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function AA(a,r){if(typeof Proxy>"u")return ec;const o=new Map,l=(h,d)=>ec(h,d,a,r),c=(h,d)=>l(h,d);return new Proxy(c,{get:(h,d)=>d==="create"?l:(o.has(d)||o.set(d,ec(d,void 0,a,r)),o.get(d))})}const wA=(a,r)=>r.isSVG??sf(a)?new iT(r):new WS(r,{allowProjection:a!==J.Fragment});class zA extends In{constructor(r){super(r),r.animationState||(r.animationState=uT(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();po(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:o}=this.node.prevProps||{};r!==o&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let EA=0;class CA extends In{constructor(){super(...arguments),this.id=EA++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:o}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===l)return;if(r&&l===!1){if(this.isExitComplete){const{initial:h,custom:d}=this.node.getProps();if(typeof h=="string"||typeof h=="object"&&h!==null&&!Array.isArray(h)){const p=Ta(this.node,h,d);if(p){const{transition:v,transitionEnd:m,...y}=p;for(const b in y)this.node.getValue(b)?.jump(y[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!r);o&&!r&&c.then(()=>{this.isExitComplete=!0,o(this.id)})}mount(){const{register:r,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),r&&(this.unmount=r(this.id))}unmount(){}}const MA={animation:{Feature:zA},exit:{Feature:CA}};function zr(a){return{point:{x:a.pageX,y:a.pageY}}}const xA=a=>r=>Jc(r)&&a(r,zr(r));function pr(a,r,o,l){return Sr(a,r,xA(o),l)}const yv=({current:a})=>a?a.ownerDocument.defaultView:null,wp=(a,r)=>Math.abs(a-r);function DA(a,r){const o=wp(a.x,r.x),l=wp(a.y,r.y);return Math.sqrt(o**2+l**2)}const zp=new Set(["auto","scroll"]);class vv{constructor(r,o,{transformPagePoint:l,contextWindow:c=window,dragSnapToOrigin:h=!1,distanceThreshold:d=3,element:p}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=U=>{this.handleScroll(U.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ys(this.lastRawMoveEventInfo,this.transformPagePoint));const U=tc(this.lastMoveEventInfo,this.history),L=this.startEvent!==null,H=DA(U.offset,{x:0,y:0})>=this.distanceThreshold;if(!L&&!H)return;const{point:_}=U,{timestamp:X}=nt;this.history.push({..._,timestamp:X});const{onStart:k,onMove:P}=this.handlers;L||(k&&k(this.lastMoveEvent,U),this.startEvent=this.lastMoveEvent),P&&P(this.lastMoveEvent,U)},this.handlePointerMove=(U,L)=>{this.lastMoveEvent=U,this.lastRawMoveEventInfo=L,this.lastMoveEventInfo=Ys(L,this.transformPagePoint),Ue.update(this.updatePoint,!0)},this.handlePointerUp=(U,L)=>{this.end();const{onEnd:H,onSessionEnd:_,resumeAnimation:X}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&X&&X(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=tc(U.type==="pointercancel"?this.lastMoveEventInfo:Ys(L,this.transformPagePoint),this.history);this.startEvent&&H&&H(U,k),_&&_(U,k)},!Jc(r))return;this.dragSnapToOrigin=h,this.handlers=o,this.transformPagePoint=l,this.distanceThreshold=d,this.contextWindow=c||window;const v=zr(r),m=Ys(v,this.transformPagePoint),{point:y}=m,{timestamp:b}=nt;this.history=[{...y,timestamp:b}];const{onSessionStart:w}=o;w&&w(r,tc(m,this.history));const N={passive:!0,capture:!0};this.removeListeners=Tr(pr(this.contextWindow,"pointermove",this.handlePointerMove,N),pr(this.contextWindow,"pointerup",this.handlePointerUp,N),pr(this.contextWindow,"pointercancel",this.handlePointerUp,N)),p&&this.startScrollTracking(p)}startScrollTracking(r){let o=r.parentElement;for(;o;){const l=getComputedStyle(o);(zp.has(l.overflowX)||zp.has(l.overflowY))&&this.scrollPositions.set(o,{x:o.scrollLeft,y:o.scrollTop}),o=o.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(r){const o=this.scrollPositions.get(r);if(!o)return;const l=r===window,c=l?{x:window.scrollX,y:window.scrollY}:{x:r.scrollLeft,y:r.scrollTop},h={x:c.x-o.x,y:c.y-o.y};h.x===0&&h.y===0||(l?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=h.x,this.lastMoveEventInfo.point.y+=h.y):this.history.length>0&&(this.history[0].x-=h.x,this.history[0].y-=h.y),this.scrollPositions.set(r,c),Ue.update(this.updatePoint,!0))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Zn(this.updatePoint)}}function Ys(a,r){return r?{point:r(a.point)}:a}function Ep(a,r){return{x:a.x-r.x,y:a.y-r.y}}function tc({point:a},r){return{point:a,delta:Ep(a,bv(r)),offset:Ep(a,UA(r)),velocity:RA(r,.1)}}function UA(a){return a[0]}function bv(a){return a[a.length-1]}function RA(a,r){if(a.length<2)return{x:0,y:0};let o=a.length-1,l=null;const c=bv(a);for(;o>=0&&(l=a[o],!(c.timestamp-l.timestamp>Mt(r)));)o--;if(!l)return{x:0,y:0};l===a[0]&&a.length>2&&c.timestamp-l.timestamp>Mt(r)*2&&(l=a[1]);const h=_t(c.timestamp-l.timestamp);if(h===0)return{x:0,y:0};const d={x:(c.x-l.x)/h,y:(c.y-l.y)/h};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function OA(a,{min:r,max:o},l){return r!==void 0&&a<r?a=l?De(r,a,l.min):Math.max(a,r):o!==void 0&&a>o&&(a=l?De(o,a,l.max):Math.min(a,o)),a}function Cp(a,r,o){return{min:r!==void 0?a.min+r:void 0,max:o!==void 0?a.max+o-(a.max-a.min):void 0}}function VA(a,{top:r,left:o,bottom:l,right:c}){return{x:Cp(a.x,o,c),y:Cp(a.y,r,l)}}function Mp(a,r){let o=r.min-a.min,l=r.max-a.max;return r.max-r.min<a.max-a.min&&([o,l]=[l,o]),{min:o,max:l}}function jA(a,r){return{x:Mp(a.x,r.x),y:Mp(a.y,r.y)}}function BA(a,r){let o=.5;const l=ut(a),c=ut(r);return c>l?o=yr(r.min,r.max-l,a.min):l>c&&(o=yr(a.min,a.max-c,r.min)),en(0,1,o)}function NA(a,r){const o={};return r.min!==void 0&&(o.min=r.min-a.min),r.max!==void 0&&(o.max=r.max-a.min),o}const xc=.35;function LA(a=xc){return a===!1?a=0:a===!0&&(a=xc),{x:xp(a,"left","right"),y:xp(a,"top","bottom")}}function xp(a,r,o){return{min:Dp(a,r),max:Dp(a,o)}}function Dp(a,r){return typeof a=="number"?a:a[r]||0}const _A=new WeakMap;class HA{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=r}start(r,{snapToCursor:o=!1,distanceThreshold:l}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const h=b=>{o&&this.snapToCursor(zr(b).point),this.stopAnimation()},d=(b,w)=>{const{drag:N,dragPropagation:U,onDragStart:L}=this.getProps();if(N&&!U&&(this.openDragLock&&this.openDragLock(),this.openDragLock=vS(N),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),It(_=>{let X=this.getAxisMotionValue(_).get()||0;if($t.test(X)){const{projection:k}=this.visualElement;if(k&&k.layout){const P=k.layout.layoutBox[_];P&&(X=ut(P)*(parseFloat(X)/100))}}this.originPoint[_]=X}),L&&Ue.update(()=>L(b,w),!1,!0),bc(this.visualElement,"transform");const{animationState:H}=this.visualElement;H&&H.setActive("whileDrag",!0)},p=(b,w)=>{this.latestPointerEvent=b,this.latestPanInfo=w;const{dragPropagation:N,dragDirectionLock:U,onDirectionLock:L,onDrag:H}=this.getProps();if(!N&&!this.openDragLock)return;const{offset:_}=w;if(U&&this.currentDirection===null){this.currentDirection=GA(_),this.currentDirection!==null&&L&&L(this.currentDirection);return}this.updateAxis("x",w.point,_),this.updateAxis("y",w.point,_),this.visualElement.render(),H&&Ue.update(()=>H(b,w),!1,!0)},v=(b,w)=>{this.latestPointerEvent=b,this.latestPanInfo=w,this.stop(b,w),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>{const{dragSnapToOrigin:b}=this.getProps();(b||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new vv(r,{onSessionStart:h,onStart:d,onMove:p,onSessionEnd:v,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:l,contextWindow:yv(this.visualElement),element:this.visualElement.current})}stop(r,o){const l=r||this.latestPointerEvent,c=o||this.latestPanInfo,h=this.isDragging;if(this.cancel(),!h||!c||!l)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:p}=this.getProps();p&&Ue.postRender(()=>p(l,c))}cancel(){this.isDragging=!1;const{projection:r,animationState:o}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(r,o,l){const{drag:c}=this.getProps();if(!l||!Fs(r,c,this.currentDirection))return;const h=this.getAxisMotionValue(r);let d=this.originPoint[r]+l[r];this.constraints&&this.constraints[r]&&(d=OA(d,this.constraints[r],this.elastic[r])),h.set(d)}resolveConstraints(){const{dragConstraints:r,dragElastic:o}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;r&&si(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&l?this.constraints=VA(l.layoutBox,r):this.constraints=!1,this.elastic=LA(o),c!==this.constraints&&!si(r)&&l&&this.constraints&&!this.hasMutatedConstraints&&It(h=>{this.constraints!==!1&&this.getAxisMotionValue(h)&&(this.constraints[h]=NA(l.layoutBox[h],this.constraints[h]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:o}=this.getProps();if(!r||!si(r))return!1;const l=r.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;c.root&&(c.root.scroll=void 0,c.root.updateScroll());const h=FS(l,c.root,this.visualElement.getTransformPagePoint());let d=jA(c.layout.layoutBox,h);if(o){const p=o(qS(d));this.hasMutatedConstraints=!!p,p&&(d=Gy(p))}return d}startAnimation(r){const{drag:o,dragMomentum:l,dragElastic:c,dragTransition:h,dragSnapToOrigin:d,onDragTransitionEnd:p}=this.getProps(),v=this.constraints||{},m=It(y=>{if(!Fs(y,o,this.currentDirection))return;let b=v&&v[y]||{};(d===!0||d===y)&&(b={min:0,max:0});const w=c?200:1e6,N=c?40:1e7,U={type:"inertia",velocity:l?r[y]:0,bounceStiffness:w,bounceDamping:N,timeConstant:750,restDelta:1,restSpeed:10,...h,...b};return this.startAxisValueAnimation(y,U)});return Promise.all(m).then(p)}startAxisValueAnimation(r,o){const l=this.getAxisMotionValue(r);return bc(this.visualElement,r),l.start(Fc(r,l,0,o,this.visualElement,!1))}stopAnimation(){It(r=>this.getAxisMotionValue(r).stop())}getAxisMotionValue(r){const o=`_drag${r.toUpperCase()}`,c=this.visualElement.getProps()[o];return c||this.visualElement.getValue(r,this.visualElement.latestValues[r]??0)}snapToCursor(r){It(o=>{const{drag:l}=this.getProps();if(!Fs(o,l,this.currentDirection))return;const{projection:c}=this.visualElement,h=this.getAxisMotionValue(o);if(c&&c.layout){const{min:d,max:p}=c.layout.layoutBox[o],v=h.get()||0;h.set(r[o]-De(d,p,.5)+v)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:o}=this.getProps(),{projection:l}=this.visualElement;if(!si(o)||!l||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};It(d=>{const p=this.getAxisMotionValue(d);if(p&&this.constraints!==!1){const v=p.get();c[d]=BA({min:v,max:v},this.constraints[d])}});const{transformTemplate:h}=this.visualElement.getProps();this.visualElement.current.style.transform=h?h({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.constraints=!1,this.resolveConstraints(),It(d=>{if(!Fs(d,r,null))return;const p=this.getAxisMotionValue(d),{min:v,max:m}=this.constraints[d];p.set(De(v,m,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;_A.set(this.visualElement,this);const r=this.visualElement.current,o=pr(r,"pointerdown",m=>{const{drag:y,dragListener:b=!0}=this.getProps(),w=m.target,N=w!==r&&zS(w);y&&b&&!N&&this.start(m)});let l;const c=()=>{const{dragConstraints:m}=this.getProps();si(m)&&m.current&&(this.constraints=this.resolveRefConstraints(),l||(l=kA(r,m.current,()=>this.scalePositionWithinConstraints())))},{projection:h}=this.visualElement,d=h.addEventListener("measure",c);h&&!h.layout&&(h.root&&h.root.updateScroll(),h.updateLayout()),Ue.read(c);const p=Sr(window,"resize",()=>this.scalePositionWithinConstraints()),v=h.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:y})=>{this.isDragging&&y&&(It(b=>{const w=this.getAxisMotionValue(b);w&&(this.originPoint[b]+=m[b].translate,w.set(w.get()+m[b].translate))}),this.visualElement.render())}));return()=>{p(),o(),d(),v&&v(),l&&l()}}getProps(){const r=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:l=!1,dragPropagation:c=!1,dragConstraints:h=!1,dragElastic:d=xc,dragMomentum:p=!0}=r;return{...r,drag:o,dragDirectionLock:l,dragPropagation:c,dragConstraints:h,dragElastic:d,dragMomentum:p}}}function Up(a){let r=!0;return()=>{if(r){r=!1;return}a()}}function kA(a,r,o){const l=Hg(a,Up(o)),c=Hg(r,Up(o));return()=>{l(),c()}}function Fs(a,r,o){return(r===!0||r===a)&&(o===null||o===a)}function GA(a,r=10){let o=null;return Math.abs(a.y)>r?o="y":Math.abs(a.x)>r&&(o="x"),o}class XA extends In{constructor(r){super(r),this.removeGroupControls=Ht,this.removeListeners=Ht,this.controls=new HA(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ht}update(){const{dragControls:r}=this.node.getProps(),{dragControls:o}=this.node.prevProps||{};r!==o&&(this.removeGroupControls(),r&&(this.removeGroupControls=r.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const nc=a=>(r,o)=>{a&&Ue.update(()=>a(r,o),!1,!0)};class qA extends In{constructor(){super(...arguments),this.removePointerDownListener=Ht}onPointerDown(r){this.session=new vv(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:yv(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:o,onPan:l,onPanEnd:c}=this.node.getProps();return{onSessionStart:nc(r),onStart:nc(o),onMove:nc(l),onEnd:(h,d)=>{delete this.session,c&&Ue.postRender(()=>c(h,d))}}}mount(){this.removePointerDownListener=pr(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let ac=!1;class PA extends J.Component{componentDidMount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:l,layoutId:c}=this.props,{projection:h}=r;h&&(o.group&&o.group.add(h),l&&l.register&&c&&l.register(h),ac&&h.root.didUpdate(),h.addEventListener("animationComplete",()=>{this.safeToRemove()}),h.setOptions({...h.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),eo.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:o,visualElement:l,drag:c,isPresent:h}=this.props,{projection:d}=l;return d&&(d.isPresent=h,r.layoutDependency!==o&&d.setOptions({...d.options,layoutDependency:o}),ac=!0,c||r.layoutDependency!==o||o===void 0||r.isPresent!==h?d.willUpdate():this.safeToRemove(),r.isPresent!==h&&(h?d.promote():d.relegate()||Ue.postRender(()=>{const p=d.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:r,layoutAnchor:o}=this.props,{projection:l}=r;l&&(l.options.layoutAnchor=o,l.root.didUpdate(),Ic.postRender(()=>{!l.currentAnimation&&l.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:l}=this.props,{projection:c}=r;ac=!0,c&&(c.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(c),l&&l.deregister&&l.deregister(c))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function Sv(a){const[r,o]=JT(),l=J.useContext(Lp);return x.jsx(PA,{...a,layoutGroup:l,switchLayoutGroup:J.useContext(gv),isPresent:r,safeToRemove:o})}const YA={pan:{Feature:qA},drag:{Feature:XA,ProjectionNode:ov,MeasureLayout:Sv}};function Rp(a,r,o){const{props:l}=a;a.animationState&&l.whileHover&&a.animationState.setActive("whileHover",o==="Start");const c="onHover"+o,h=l[c];h&&Ue.postRender(()=>h(r,zr(r)))}class FA extends In{mount(){const{current:r}=this.node;r&&(this.unmount=SS(r,(o,l)=>(Rp(this.node,l,"Start"),c=>Rp(this.node,c,"End"))))}unmount(){}}class KA extends In{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Tr(Sr(this.node.current,"focus",()=>this.onFocus()),Sr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Op(a,r,o){const{props:l}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&l.whileTap&&a.animationState.setActive("whileTap",o==="Start");const c="onTap"+(o==="End"?"":o),h=l[c];h&&Ue.postRender(()=>h(r,zr(r)))}class QA extends In{mount(){const{current:r}=this.node;if(!r)return;const{globalTapTarget:o,propagate:l}=this.node.props;this.unmount=CS(r,(c,h)=>(Op(this.node,h,"Start"),(d,{success:p})=>Op(this.node,d,p?"End":"Cancel")),{useGlobalTarget:o,stopPropagation:l?.tap===!1})}unmount(){}}const Dc=new WeakMap,ic=new WeakMap,ZA=a=>{const r=Dc.get(a.target);r&&r(a)},IA=a=>{a.forEach(ZA)};function JA({root:a,...r}){const o=a||document;ic.has(o)||ic.set(o,{});const l=ic.get(o),c=JSON.stringify(r);return l[c]||(l[c]=new IntersectionObserver(IA,{root:a,...r})),l[c]}function WA(a,r,o){const l=JA(r);return Dc.set(a,o),l.observe(a),()=>{Dc.delete(a),l.unobserve(a)}}const $A={some:0,all:1};class ew extends In{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:r={}}=this.node.getProps(),{root:o,margin:l,amount:c="some",once:h}=r,d={root:o?o.current:void 0,rootMargin:l,threshold:typeof c=="number"?c:$A[c]},p=v=>{const{isIntersecting:m}=v;if(this.isInView===m||(this.isInView=m,h&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),w=m?y:b;w&&w(v)};this.stopObserver=WA(this.node.current,d,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:o}=this.node;["amount","margin","root"].some(tw(r,o))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}function tw({viewport:a={}},{viewport:r={}}={}){return o=>a[o]!==r[o]}const nw={inView:{Feature:ew},tap:{Feature:QA},focus:{Feature:KA},hover:{Feature:FA}},aw={layout:{ProjectionNode:ov,MeasureLayout:Sv}},iw={...MA,...nw,...YA,...aw},rw=AA(iw,wA);function Tv(){!tf.current&&_y();const[a]=J.useState(lo.current);return a}const Av=rw,sw=[{id:"fathom",portfolioCategory:"engine-games",title:"实体控制器潜艇协作游戏",period:"2026",category:{zh:"Unreal 游戏 / 硬件交互",en:"Unreal game / hardware interaction"},summary:{zh:"面向实体控制器的潜艇协作游戏。我担任主要程序与玩法架构负责人，完成任务循环、小游戏、UI 数据流和硬件接入。",en:"A physical-console submarine co-op game. I owned gameplay architecture, task loops, minigames, UI data flow, and hardware integration."},contribution:[{zh:"搭建 GameMode、角色控制、任务生成、小游戏接口与 UI/HUD 数据绑定。",en:"Built GameMode, character control, task generation, minigame interfaces, and UI/HUD data binding."},{zh:"实现 Server / Client 外部输入模块，将硬件信号解析为 Unreal 内的游戏指令。",en:"Implemented a server/client input module that translated physical-device signals into Unreal gameplay commands."},{zh:"通过异步接收、缓冲与插值处理输入延迟，并为关键链路补充状态校验和容错。",en:"Reduced input latency with asynchronous receiving, buffering, and interpolation, then added validation and fallback handling."}],stack:["Unreal Engine","Blueprint","Networking","Hardware I/O","UI"],images:[{src:"/media/projects/fathom-task.png",alt:{zh:"Fathom 任务玩法与绿色 HUD",en:"Fathom task gameplay with green HUD"},caption:{zh:"任务系统与实时 HUD",en:"Task system and realtime HUD"},position:"center"},{src:"/media/projects/fathom-sonar.png",alt:{zh:"Fathom 潜艇舱室画面",en:"Fathom submarine interior"},caption:{zh:"潜艇场景与硬件交互目标",en:"Submarine environment and hardware interaction target"},position:"center"}]},{id:"house-of-vampires",portfolioCategory:"engine-games",title:"哥特式吸血鬼城堡解谜游戏",period:"2025",category:{zh:"Unreal 蓝图游戏",en:"Unreal Blueprint game"},summary:{zh:"已上线 itch.io 的哥特式恐怖解谜游戏。我担任主要蓝图程序与技术美术开发，整合交互、谜题、手部动画和特效。",en:"A gothic puzzle-horror game released on itch.io. I led Blueprint and technical-art development across interactions, puzzles, hand animation, and VFX."},contribution:[{zh:"使用 Unreal Blueprint 实现玩法流程、交互、谜题、状态管理与手柄支持。",en:"Implemented gameplay flow, interaction, puzzles, state management, and controller support in Unreal Blueprints."},{zh:"制作第一人称手部绑定与动画，并将动画状态接入交互流程。",en:"Created the first-person hand rig and animation and connected it to gameplay interactions."},{zh:"参与完整打包与上线交付，项目可在 itch.io 下载。",en:"Contributed through packaging and public release; the game is available on itch.io."}],stack:["Unreal Engine","Blueprint","Gameplay","Rigging","Animation"],images:[{src:"/media/projects/house-of-vampires.webp",alt:{zh:"House of Vampires 的 itch.io 项目页与游戏截图",en:"House of Vampires itch.io page and screenshots"},caption:{zh:"已上线的 itch.io 页面与实机画面",en:"Published itch.io page and in-game captures"},position:"top"}],link:{label:{zh:"打开 itch.io 项目页",en:"Open the itch.io page"},href:"https://musitive.itch.io/hov"},youtubeId:"aY36FtqdGAw",story:{title:{zh:"你能逃出德古拉的城堡吗？",en:"Can you survive Dracula's Castle?"},intro:{zh:"进入《House of Vampires》中这座受经典恐怖电影启发的哥特式城堡。利用宅邸里散落的物品以及自己的身体，解开逃离城堡所需的谜题。",en:"Enter the classic horror-inspired gothic castle in House of Vampires! Use items scattered around the mansion as well as your own body to solve the puzzles needed to escape the castle."},features:[{title:{zh:"多种谜题",en:"Various Puzzles"},detail:{zh:"要成功逃出城堡，你需要只利用自己能够携带的物品，解决多种不同的谜题。",en:"To successfully escape the castle, you will need to solve several different puzzles using only what you can carry."}},{title:{zh:"德古拉",en:"Dracula"},detail:{zh:"游戏重新塑造了德古拉这一角色；在这个可怕的怪物抓住你之前，你必须设法逃脱。",en:"Featuring a new take on Dracula as a character, you must escape this terrifying monster before he catches you."}},{title:{zh:"手柄支持",en:"Controller Support"},detail:{zh:"游戏完整支持键盘鼠标和 Xbox 手柄。",en:"The game fully functions with not only Keyboard & Mouse but Xbox Controllers as well."}},{title:{zh:"经典恐怖电影质感",en:"Classic Horror Film Look"},detail:{zh:"游戏通过后期处理还原经典恐怖电影的胶片质感。",en:"Using post-processing, the game captures that film look from classic horror films."}}],note:{zh:"建议佩戴耳机游玩。",en:"Best experienced with headphones."}}},{id:"through-other-eyes",portfolioCategory:"engine-games",title:"VR 视障体验与无障碍叙事游戏",period:"2025",category:{zh:"VR 无障碍体验",en:"VR accessibility experience"},summary:{zh:"两人团队完成的 VR 视障体验。我兼任玩法策划、程序与技术美术，负责地图路线、事件设计、场景交互和角色绑定。",en:"A two-person VR accessibility project. I worked across game design, programming, and technical art, owning routes, events, interactions, and character rigging."},contribution:[{zh:"协助把关卡规划落成可游玩的 VR 场景，布置道路、障碍和关键交互点。",en:"Translated the level plan into a playable VR scene with streets, obstacles, and interaction points."},{zh:"编写事件交互逻辑，并制作简单的导盲犬绑定与动画。",en:"Authored event interaction logic and created a simple guide-dog rig and animation."},{zh:"围绕受限视觉信息设计引导、反馈和空间节奏。",en:"Worked on guidance, feedback, and spatial pacing under intentionally limited visual information."}],stack:["VR","Unreal Engine","Level Design","Interaction","Rigging"],images:[{src:"/media/projects/through-other-eyes-cover.webp",alt:{zh:"Through Other Eyes 项目海报",en:"Through Other Eyes project poster"},caption:{zh:"项目 One Sheet",en:"Project one-sheet"},position:"center 32%"},{src:"/media/projects/through-other-eyes-vr.png",alt:{zh:"VR 中的视障模拟画面",en:"Visual-impairment simulation in VR"},caption:{zh:"头显内的受限视觉效果",en:"Restricted-vision effect inside the headset"},position:"center"},{src:"/media/projects/through-other-eyes-level.webp",alt:{zh:"Through Other Eyes 关卡规划图",en:"Through Other Eyes level plan"},caption:{zh:"关卡路径与交互点规划",en:"Route and interaction-point planning"},position:"center"}]},{id:"retro-arcade",portfolioCategory:"engine-games",title:"复古像素风 3D 街机游戏原型",period:"2025",category:{zh:"Unity 游戏与 Shader",en:"Unity gameplay and shader"},summary:{zh:"复古 3D 街机游戏原型。我负责完整 Gameplay、角色与动画状态，并尝试把 3D 动画烘焙成带法线信息的像素序列帧。",en:"A retro 3D arcade prototype. I owned gameplay and character state and explored baking 3D animation into pixel sprites with normal information."},contribution:[{zh:"实现角色状态、动画状态、关卡逻辑和核心玩法循环。",en:"Implemented character state, animation state, level logic, and the core gameplay loop."},{zh:"制作部分 2D 角色素材，并完成 3D 到 2D 序列帧的实验流程。",en:"Created part of the 2D character art and completed a 3D-to-2D sprite-sequence experiment."},{zh:"编写利用颜色、Alpha 与法线贴图的像素化实时 Shader，并记录方案未进入最终版本的原因。",en:"Wrote a pixel-rendering shader using color, alpha, and normal data and documented why the experiment was not adopted."}],stack:["Unity","C#","Shader","Gameplay","2D / 3D Pipeline"],images:[{src:"/media/projects/retro-arcade-shader.png",alt:{zh:"Unity 中的像素角色 Shader 实验",en:"Pixel-character shader experiment in Unity"},caption:{zh:"3D 动画到像素序列帧与法线光照实验",en:"3D animation to pixel sprites with normal-lighting experiment"},position:"center"},{src:"/media/projects/retro-arcade-sprites.png",alt:{zh:"复古街机角色序列帧素材",en:"Retro arcade character sprite sheets"},caption:{zh:"本人制作的角色序列帧素材",en:"Character sprite sheets I created"},position:"center"}]},{id:"digital-twin",portfolioCategory:"other-tools",title:"工业设备数字孪生交互系统",period:"2023",category:{zh:"Web 3D 可视化",en:"Web 3D visualization"},summary:{zh:"实习期间完成的小型工业数字孪生原型，覆盖 FBX 资产接入、机械关节控制、场景状态与业务参数 UI。",en:"A compact internship digital-twin prototype covering FBX assets, mechanical joint controls, scene state, and business-facing parameter UI."},contribution:[{zh:"新增工业 DigitalTwin 页面与配置，导入多组 FBX 机械和场景资产。",en:"Added the industrial DigitalTwin page and configuration and imported multiple FBX mechanical and scene assets."},{zh:"扩展 TransformControls，用参数驱动机械模型和关节旋转。",en:"Extended TransformControls to drive mechanical models and joint rotation through parameters."},{zh:"使用 Tweakpane 与 Element Plus 整理显示参数和工业控制按钮，并明确区分个人修改与上游框架能力。",en:"Built parameter and industrial controls with Tweakpane and Element Plus while separating personal changes from upstream framework features."}],stack:["Vue 3","TresJS","Three.js","TransformControls","FBX"],images:[{src:"/media/projects/digital-twin.png",alt:{zh:"工业数字孪生建筑线框与显示控制面板",en:"Industrial digital twin with building outlines and display controls"},caption:{zh:"城市建筑数据与显示参数控制",en:"Building data and display-parameter controls"},position:"center"}],link:{label:{zh:"查看 GitHub 仓库",en:"View the GitHub repository"},href:"https://github.com/Ubik42/Vue3_Digital_Twin"}}];function Fn(a,r){return a[r]}const ow=`# Industrial Digital Twin

A compact industrial digital-twin prototype completed during my internship at Shanghai Ruwei Electric Power. Built on the open-source icegl / TresJS project, it turns a general Web 3D framework into a focused business page for inspecting equipment, navigating scenes, and tuning mechanical parameters.

![Industrial digital twin capture](/media/projects/digital-twin.png)

## From industrial assets to an interactive page

- Added the DigitalTwin page, routing configuration, and industrial-scene entry.
- Imported multiple FBX equipment and scene assets and handled hierarchy, transforms, and browser-side loading.
- Connected TresJS / Three.js TransformControls, parameter panels, and mechanical joint rotation.
- Built equipment-selection and control UI with Tweakpane and Element Plus.
- Organized scene initialization, selection state, controller switching, and debugging into a complete interaction loop.

The upstream framework supplies general city, globe, and data-visualization modules. My internship deliverable covers the industrial asset, mechanical control, business-page, and interaction-debugging layer.
`,lw=`# Industrial Digital Twin

这是我在上海如为电力实习期间完成的小型工业数字孪生原型，用浏览器承载设备模型、场景查看与机械参数调试。项目基于开源 icegl / TresJS 工程继续开发，我负责把通用 Web 3D 框架整理成可直接演示工业设备的业务页面。

![工业数字孪生项目画面](/media/projects/digital-twin.png)

## 从工业资产到可交互页面

- 新增 DigitalTwin 页面、路由配置与工业场景入口，把演示能力收拢为清晰的业务操作流程。
- 整理并导入多组 FBX 工业设备与场景资产，处理模型层级、位置、旋转、缩放和浏览器侧加载。
- 扩展 Three.js / TresJS 交互，将 TransformControls、参数面板和机械关节旋转连接起来。
- 使用 Tweakpane 与 Element Plus 组织显示参数、设备选择和工业控制按钮，让非图形开发人员也能直接调整状态。
- 处理场景初始化、选中状态、控制器切换和调试入口，使模型查看、参数修改与交互反馈形成完整闭环。

## 技术结构

前端使用 Vue 3、TresJS 与 Three.js 组织 Web 3D 场景。模型载入后通过 TransformControls 和参数面板改变位置、旋转与关节状态，使工业资产无需安装专用客户端即可在浏览器中检查和演示。这个小项目也让我把实时引擎中的场景层级、Transform 与交互状态经验迁移到 Web 3D 技术栈。

## 项目范围

底层框架提供城市、地球与数据可视化等通用模块；这次实习原型聚焦工业设备场景，我完成的是工业资产接入、机械控制、业务页面和交互调试这一整段可交付链路。
`,uw=`# Fathom

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
`,cw=`# Fathom

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
`,dw=`# House of Vampires

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
`,hw=`# Retro 3D Arcade Prototype

A retro Unity game based on a Q*bert-like loop. I owned the complete gameplay implementation: character movement and state, animation flow, tile feedback, enemies, level logic, and the loop from start through failure and restart. I also led the custom shader-pipeline experiment and created part of the 2D character art.

## 3D animation to pixel sprites

I modeled and animated a Q*bert character, then exported sprite sequences containing color, alpha, and normal information. A Unity shader reconstructed the silhouette and used the normal channel for realtime lighting.

![3D-to-2D sprite and shader experiment](/media/projects/retro-diary/image-000.png)

The pipeline worked but was not adopted: detailed characters produced excessive noise at the chosen 45-degree view, and the schedule did not allow the full 3D asset set to be completed.

## Character concepts and 2D art

![Character and animation sprite sheets](/media/projects/retro-diary/image-001.png)

The available material primarily documents the pipeline experiment; no sufficiently clear final gameplay capture is presented as a finished result.
`,mw=`# Retro 3D Arcade Prototype

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
`,pw=`# Through Other Eyes

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
`,Vp={fathom:{zh:cw,en:uw},"house-of-vampires":{zh:dw,en:fw},"through-other-eyes":{zh:pw,en:gw},"retro-arcade":{zh:mw,en:hw},"digital-twin":{zh:lw,en:ow}},yw=[{id:"noemancer",title:"最最 AI 友好的高性能引擎",category:"engine-games",categoryLabel:{zh:"自研游戏引擎",en:"Custom game engine"},summary:{zh:"从原生 Editor、C# Gameplay、资产 Cook 到 D3D12/Vulkan 商业 Raster 和独立 Player 的 C++20 游戏引擎。",en:"A C++20 game engine spanning a native editor, C# gameplay, asset cooking, D3D12/Vulkan commercial raster rendering, and standalone players."},cover:"/media/repositories/major-updates/noemancer-sponza-atrium.webp",tags:["C++20","D3D12 / Vulkan","C#","MCP"],repositoryUrl:"https://github.com/Ubik42/Noemancer",story:{zh:`# 最最 AI 友好的高性能引擎

Noemancer 是我从零开发的 C++20 游戏引擎。它已经不只是一个渲染 Demo：当前可以在原生 Editor 中组织场景、运行 C# Gameplay、导入并 Cook 资产，最后打包为不依赖 Editor 的 Windows Player。这条链路之下是自研的 ECS Runtime、D3D12/Vulkan 渲染、物理、动画、资产格式与编辑器事务系统。

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

The project is pre-alpha and currently verified end to end on Windows x64. SSR, SSGI, hardware ray tracing, dynamic atmosphere, and a stable plug-in SDK are not presented as finished features.`},images:[{src:"/media/repositories/major-updates/noemancer-editor.webp",alt:{zh:"Noemancer 中文 Editor：场景、层级、Inspector、资产与 Agent Context",en:"Noemancer Chinese editor workspace"}},{src:"/media/repositories/major-updates/noemancer-sponza-atrium.webp",alt:{zh:"D3D12 中实时运行的 Intel Sponza 2022 宫殿中庭",en:"Intel Sponza 2022 atrium running in real time on D3D12"}},{src:"/media/repositories/major-updates/noemancer-sponza-balcony.webp",alt:{zh:"Sponza 上层回廊与外部 glTF 材质依赖",en:"Sponza balcony and external glTF material dependencies"}},{src:"/media/repositories/major-updates/noemancer-commercial-raster.webp",alt:{zh:"PBR、阴影、Bloom 与 ACES 的商业 Raster 基准",en:"Commercial raster benchmark with PBR, shadows, Bloom, and ACES"}},{src:"/media/repositories/major-updates/noemancer-sky.webp",alt:{zh:"四 LUT 动态天空、大气与 Aerial Perspective",en:"Four-LUT dynamic sky, atmosphere, and aerial perspective"}},{src:"/media/repositories/major-updates/noemancer-ssr-ssgi.webp",alt:{zh:"RenderLab 中启用 SSR、SSGI 与时域处理",en:"SSR, SSGI, and temporal processing in RenderLab"}}]},{id:"noemancer-software-rasterizer",title:"CPU 软件光栅化实验室",category:"engine-games",categoryLabel:{zh:"实时图形与渲染基础",en:"Realtime graphics fundamentals"},summary:{zh:"C++20 CPU 参考光栅器：手动完成三角形覆盖、透视正确插值、Z-Buffer 与逐像素着色，一次导出十种效果和诊断缓冲。",en:"A C++20 CPU reference rasterizer with triangle coverage, perspective-correct interpolation, Z-buffering, pixel shading, and ten visual or diagnostic outputs."},cover:"/media/repositories/software-rasterizer/07_matcap.png",tags:["C++20","CPU Raster","OpenMP","Graphics Debugging"],repositoryUrl:"https://github.com/Ubik42/NoemancerSoftwareRasterizer",story:{zh:`# CPU 软件光栅化实验室

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

The project is an engineering extension of the MIT-licensed TinyRenderer teaching implementation. Original history and asset notices are retained, while the portfolio work focuses on additional passes, shaders, diagnostics, automation, structured output, and documentation.`},images:[{src:"/media/repositories/software-rasterizer/07_matcap.png",alt:{zh:"视空间法线驱动的 MatCap 着色",en:"View-space-normal-driven MatCap shading"}},{src:"/media/repositories/software-rasterizer/01_shaded.png",alt:{zh:"法线贴图与高光组合的最终着色",en:"Final shading with normal mapping and highlights"}},{src:"/media/repositories/software-rasterizer/02_depth.png",alt:{zh:"Z-Buffer 有效深度范围可视化",en:"Visualization of the valid Z-buffer depth range"}},{src:"/media/repositories/software-rasterizer/03_view_normals.png",alt:{zh:"视空间法线插值结果",en:"Interpolated view-space normals"}},{src:"/media/repositories/software-rasterizer/04_perspective_uv.png",alt:{zh:"透视正确 UV 棋盘",en:"Perspective-correct UV checkerboard"}},{src:"/media/repositories/software-rasterizer/05_toon.png",alt:{zh:"N·L 离散量化的 Toon 色阶",en:"Toon bands from quantized N dot L"}},{src:"/media/repositories/software-rasterizer/06_rim_light.png",alt:{zh:"Fresnel 风格青色边缘光",en:"Fresnel-style cyan rim lighting"}},{src:"/media/repositories/software-rasterizer/08_wireframe.png",alt:{zh:"由重心坐标生成的三角形线框",en:"Triangle wireframe generated from barycentric coordinates"}},{src:"/media/repositories/software-rasterizer/09_overdraw.png",alt:{zh:"深度测试前片元覆盖次数热力图",en:"Pre-depth-test fragment coverage heatmap"}},{src:"/media/repositories/software-rasterizer/10_barycentric.png",alt:{zh:"三角形重心坐标连续插值",en:"Continuous triangle barycentric interpolation"}}]},{id:"art-pipeline-skill",title:"可验证的跨 DCC 美术管线审计 Skill",category:"pipeline",categoryLabel:{zh:"跨工具审计与 Agent 能力边界",en:"Cross-tool audit and agent capability boundaries"},summary:{zh:"把供应商目录、Maya 场景与 Unreal 资产检查串成可追溯、可恢复、默认只读的组合审计，并复核版本、Schema、哈希与零写入证据。",en:"Combines supplier delivery, Maya scene, and Unreal asset checks into a traceable, recoverable, read-only audit with version, schema, hash, and zero-write verification."},cover:"/media/repositories/production-tools/art-pipeline-skill-cover.svg",tags:["Skill","Maya / Unreal","Pydantic / JSON Schema","幂等恢复"],repositoryUrl:"https://github.com/Ubik42/art-pipeline-skill",story:{zh:`# 可验证的跨 DCC 美术管线审计 Skill

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

Version 0.3.1 provides two Maya 2025 workflows: safe three-input UV/position transfer and controllable thickness generation for open garment meshes. Both use zero-write previews, a single undo chunk, read-back validation, and automatic rollback. A redistributable CC0 halter dress provides real garment evidence in addition to deterministic demo scenes.`},images:[{src:"/media/repositories/production-tools/maya-garment-public-input.png",alt:{zh:"公开 CC0 挂脖连衣裙输入",en:"Public CC0 halter dress input"}},{src:"/media/repositories/production-tools/maya-garment-public-result.png",alt:{zh:"厚度生成后的领口侧壁与真实服装轮廓",en:"Generated opening sidewalls on the real garment silhouette"}},{src:"/media/repositories/production-tools/maya-garment-thickness-preview.png",alt:{zh:"双向居中厚度的零写入预览",en:"Zero-write centered thickness preview"}},{src:"/media/repositories/production-tools/maya-garment-thickness-complete.png",alt:{zh:"厚度执行完成、实测结果与本次 History",en:"Completed thickness operation with measured results and owned history"}}]},{id:"unreal-asset-batch-auditor",title:"Unreal 资产批量质量审计工具",category:"engine-games",categoryLabel:{zh:"Unreal 资产批量审计与团队交付",en:"Unreal batch asset audit and team handoff"},summary:{zh:"UE 5.8.1 原生中文 Slate 工作台：按项目 Profile 审计几何、LOD、碰撞、Lightmap、命名与目录，支持可取消批处理、回归比较和离线团队包。",en:"A native UE 5.8.1 Slate workbench for profile-driven geometry, LOD, collision, lightmap, naming, and path audits with cancellable batches, regression, and offline handoff packages."},cover:"/media/repositories/production-tools/unreal-auditor-v08-running.png",tags:["Unreal 5.8","C++ / Python","Slate","回归与团队包"],repositoryUrl:"https://github.com/Ubik42/unreal-asset-batch-auditor",story:{zh:`# Unreal 资产批量质量审计工具

这是面向 Unreal 项目 Static Mesh 的只读审计工作台。Editor-only C++ 批量读取原生元数据，Python 负责项目规则、任务编排和版本化 JSON Report，中文 Slate UI 只呈现真实领域状态，不把规则偷偷塞进界面。

## 三步完成项目审计

1. 选择内置的桌面、移动端或宽松复核 Profile，也可以导入项目自己的规则；
2. 从 Content Browser 读取显式选择，分批采集几何预算、LOD、材质槽、Nanite、碰撞、Lightmap、命名和目录证据；
3. 在资产总览、问题明细和回归对比中查看通过、需处理、采集失败、新增、持续与已解决问题。

## 生产可靠性与交付

- 每个 Editor Tick 最多推进一个批次，界面显示阶段、对象进度和已完成批次数；
- 取消只在批次边界生效，已完成结果会保存为合法的部分 Report，但不会被误用作回归基线；
- 历史会话按稳定 asset path + rule id 比较修复前后变化；
- 一键导出中文单文件 HTML、Excel 可读 CSV 和 SHA-256 清单，未安装 Unreal 的制片、主美或外包同事也能复核；
- v0.8.0 发布 ZIP 已完成全新项目安装、升级、卸载和两轮独立 UE 5.8.1 宿主验证。

扫描接口不会保存资产、重建网格或修改 Nanite。24 个项目 Demo 资产与 Engine Static Mesh 的真实宿主证据、任务状态和报告哈希都保存在仓库中。`,en:`# Unreal Asset Batch Auditor

A read-only Unreal 5.8.1 Editor plug-in. Native C++ collects Static Mesh metadata, Python applies versioned profiles and produces reports, and the Chinese Slate workbench exposes geometry, LOD, Nanite, collision, lightmap, naming, and path evidence. Version 0.8 adds cancellable bounded batches, immutable session history, regression comparison, offline HTML/CSV handoff packages, and a verified installable release.`},images:[{src:"/media/repositories/production-tools/unreal-auditor-v08-overview.png",alt:{zh:"24 个 Static Mesh 的资产总览、通过项和问题项",en:"Overview of 24 Static Mesh assets with passing and failing states"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-issues.png",alt:{zh:"规则、实测值、阈值与中文 Evidence",en:"Rules, measured values, thresholds, and localized evidence"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-running.png",alt:{zh:"可观察、可在批次间安全取消的审计任务",en:"Observable audit task with safe cancellation between batches"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-regression.png",alt:{zh:"同一 Profile 下修复前后的回归比较",en:"Before-and-after regression under the same profile"}},{src:"/media/repositories/production-tools/unreal-auditor-v08-handoff.png",alt:{zh:"无需 Unreal 即可阅读的中文团队交接报告",en:"Chinese team handoff report readable without Unreal"}}]},{id:"rez-studio-launcher",title:"DCC 项目环境与插件启动器",category:"pipeline",categoryLabel:{zh:"项目环境、插件与 DCC 工具运行时",en:"Project environment, plug-in, and DCC tool runtime"},summary:{zh:"按项目解析隔离的 Rez 环境，并把插件方案、工具清单、宿主装载和诊断日志组织成可追溯的 DCC 工作站入口。",en:"Resolves isolated Rez environments per project and manages plug-in schemes, tool manifests, host loading, and diagnostics as one traceable DCC workstation entry point."},cover:"/media/repositories/major-updates/rez-overview.png",tags:["Rez 3.4","Maya 2025","Tool Runtime","Tauri 2"],repositoryUrl:"https://github.com/Ubik42/rez-studio-launcher",story:{zh:`# DCC 项目环境与插件启动器

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

MayaCraft is a Chinese Maya 2025 character workspace for scene-aware character discovery, declarative rig graphs, deformation diagnostics, quaternion swing-twist joints, time-aware no-pop FK/IK matching, protected space switching, read-back validation, and single-transaction undo.`},images:[{src:"/media/repositories/production-tools/mayacraft-workspace.png",alt:{zh:"MayaCraft 角色工作区与场景角色投影",en:"MayaCraft character workspace"}},{src:"/media/repositories/production-tools/mayacraft-twist-preview.png",alt:{zh:"四元数 Twist 分解与关节分布预览",en:"Quaternion Twist decomposition and joint-distribution preview"}},{src:"/media/repositories/production-tools/mayacraft-twist-verified.png",alt:{zh:"Twist 应用后的 Maya 真实场景读回验证",en:"Read-back verification from the real Maya scene after applying Twist"}},{src:"/media/repositories/production-tools/mayacraft-match-preview.png",alt:{zh:"指定时间点的 FK/IK 无跳变匹配预览",en:"Time-aware no-pop FK/IK match preview"}},{src:"/media/repositories/production-tools/mayacraft-match-verified.png",alt:{zh:"FK/IK 匹配应用与误差验证",en:"Applied FK/IK match with error verification"}}]},{id:"notion-nexus",title:"Notion 本地工作区与自动化中枢",category:"other-tools",categoryLabel:{zh:"本地数据与 Notion 自动化",en:"Local data and Notion automation"},summary:{zh:"把本地文件、Excel 与 Notion 工作区连接起来，提供空间扫描、字段映射、文件监听和可视化自动化编排。",en:"Connects local files and Excel data with Notion through workspace scanning, field mapping, file watching, and visual automation."},cover:"/media/repositories/other-tools/notion-nexus.svg",tags:["Notion API","FastAPI","React","SQLite"],repositoryUrl:"https://github.com/Ubik42/NotionNexus",story:{zh:`# Notion 本地工作区与自动化中枢

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

PyArsenal is a graphical manager for Python developers who maintain many scripts. It centralizes registration, tags, execution environments, and compilation so a script library remains searchable and deliverable.`}},{id:"neothesia",title:"钢琴练习与乐谱反馈应用",category:"other-tools",categoryLabel:{zh:"钢琴练习应用",en:"Piano practice application"},summary:{zh:"持续维护的钢琴学习分支，加入刻意练习、反馈、曲库、乐谱同步与 Pianoteq 工作流。",en:"An actively maintained piano-learning fork with deliberate practice, feedback, repertoire, notation, and Pianoteq workflows."},cover:"/media/repositories/neothesia.png",tags:["Rust","WGPU","MIDI","VST3"],repositoryUrl:"https://github.com/Ubik42/Neothesia",story:{zh:`# 钢琴练习与乐谱反馈应用

这是在开源 Neothesia 基础上持续维护的钢琴学习分支，开发重点从单纯的瀑布流演奏界面扩展到可重复的刻意练习。

## 本分支的主要工作

- 等待正确音符、左右手选择、循环、小节号、节拍细分、Count-in 与自适应速度。
- 按音高、时值、力度、踏板、左右手和小节生成练习反馈，并保存练习记录与建议。
- 本地曲库、监视文件夹、搜索、收藏、练习队列、来源与许可记录。
- MIDI 与 MusicXML / MXL 对齐、分页乐谱跟随和演奏高亮。
- 外部 MIDI 路由以及 Windows 下直接加载 Pianoteq VST3 的实验性乐器路径。

项目仍处于源码开发阶段，VST3 广泛兼容性、安装更新和更多实体设备长时间测试仍在推进。`,en:`# Neothesia

This independently maintained fork extends Neothesia from a falling-note visualizer into a deliberate-practice application with looping, hand selection, count-in, adaptive tempo, detailed feedback, a local repertoire library, synchronized MusicXML notation, and Pianoteq workflows.

The direct VST3 path is still experimental and the project is currently distributed as source rather than a packaged end-user release.`},images:[{src:"/media/repositories/neothesia.png",alt:{zh:"Neothesia 钢琴练习界面",en:"Neothesia piano practice interface"}}]},{id:"artflow-agent",title:"面向引擎接入的新时代 AIGC 框架",category:"ai-agent",categoryLabel:{zh:"引擎场景 AIGC 智能体框架",en:"Engine-scene AIGC agent framework"},summary:{zh:"把 Unreal 场景事实编译成类型化变更计划，协调 ComfyUI、GPT Image 2 与图生 3D，在候选关卡中完成执行、评价、定向纠正和发布。",en:"Compiles Unreal scene facts into typed change plans and coordinates ComfyUI, GPT Image 2, and image-to-3D providers for execution, judging, targeted correction, and publishing in candidate levels."},cover:"/media/repositories/major-updates/artflow-scene-lab-3d.png",tags:["Unreal 5.8","ComfyUI / GPT Image 2","Image-to-3D","Scene Agent"],repositoryUrl:"https://github.com/Ubik42/ArtFlow-Agent",story:{zh:`# 面向引擎接入的新时代 AIGC 框架

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

The repository includes a real local ComfyUI output, its API workflow, and the receipt written by the package. The nodes remain model- and renderer-independent.`},images:[{src:"/media/repositories/comfyui-production-nodes/workflow-overview.png",alt:{zh:"中文生产预检与下游交接工作流总览",en:"Chinese production workflow overview"}},{src:"/media/repositories/comfyui-production-nodes/dependency-check.png",alt:{zh:"环境清单与依赖预检通过",en:"Environment inventory and dependency check"}},{src:"/media/repositories/comfyui-production-nodes/budget-validation.png",alt:{zh:"批量与像素预算超限被集中拦截",en:"Batch and pixel budget validation"}},{src:"/media/repositories/comfyui-production-nodes/contract-validation.png",alt:{zh:"工作流必需输入与参数范围检查",en:"Workflow input and parameter validation"}},{src:"/media/repositories/comfyui-production-nodes/receipt-writer.png",alt:{zh:"生成收据预览与受限工作区写入",en:"Generation receipt and contained write"}},{src:"/media/repositories/comfyui-production-nodes/dcc-handoff.png",alt:{zh:"面向 DCC 与引擎的批次交接清单",en:"DCC and engine batch handoff manifest"}},{src:"/media/repositories/comfyui-production-nodes/local-generation.png",alt:{zh:"本机 ComfyUI 真实生成结果",en:"Locally generated ComfyUI output"}}]}];function Wt(a,r){return a[r]}const vw=[{id:"unreal-stylized-world",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/kNZDbK",title:{en:"Unreal Engine Stylized World",zh:"Unreal 风格化世界"},cover:"/media/artstation/unreal-stylized-world.jpg",category:{en:"Realtime environment",zh:"实时场景"},summary:{en:"A stylized realtime environment built from a Houdini heightfield HDA, then authored and optimized in Unreal Engine.",zh:"使用 Houdini 生成高度场与散布数据，将 HDA 接入 Unreal Engine，完成风格化材质、植被替换、水面、灯光与后处理。"},process:[{en:"Generated, eroded, and smoothed the terrain in Houdini, with placeholders for rocks and four tree variants.",zh:"在 Houdini 中生成、侵蚀并平滑地形，同时为岩石和四类树木建立程序化散布占位。"},{en:"Built distance-aware terrain, water, grass, and foliage materials in Unreal Engine.",zh:"在 Unreal Engine 中制作分远近层级的地表、水面、草地与植被材质。"},{en:"Completed scene dressing, lighting, sharpening post process, and final realtime presentation.",zh:"完成场景布置、灯光、锐化后处理与最终实时画面。"}],tools:["Unreal Engine","Houdini","HDA","Material Editor"],youtubeId:"GRVpU7MBSTg",featured:!0,images:[{src:"/media/visual-works/world-final.webp",alt:{en:"Final stylized environment in Unreal Engine",zh:"Unreal Engine 中的风格化世界最终画面"},caption:{en:"Final realtime environment",zh:"最终实时场景"}},{src:"/media/visual-works/world-heightfield.webp",alt:{en:"Houdini heightfield and placement visualization",zh:"Houdini 高度场与模型占位可视化"},caption:{en:"Heightfield and procedural placement data",zh:"高度场与程序化散布数据"}}]},{id:"maya-plugin",portfolioCategory:"pipeline",artstationUrl:"https://www.artstation.com/artwork/XJGnR3",title:{en:"Maya Plugin",zh:"Maya 综合工具集"},cover:"/media/artstation/maya-plugin.jpg",category:{en:"DCC tool development",zh:"DCC 工具开发"},summary:{en:"A modular Maya tool suite covering nine production areas, with separated interface and utility layers.",zh:"面向 Maya 生产流程的综合工具集，覆盖属性、绑定、约束、骨骼、控制器、命名、连接、工程与动画九类功能。"},process:[{en:"Separated PySide interfaces from reusable backend utility classes.",zh:"以 PySide 界面层调用后端 Utility 类，拆分交互、业务逻辑与公共功能。"},{en:"Implemented production-oriented operations for rigging, attributes, constraints, naming, and connections.",zh:"实现绑定、属性、约束、命名与驱动连接等面向实际制作的批量操作。"},{en:"Added persistent theme, window state, responsive layout, and contextual tooltips.",zh:"补充主题与窗口状态记忆、弹性布局、字号适配及悬停提示。"}],tools:["Maya","Python","PySide","DCC Pipeline"],youtubeId:"7rUuqI9Pil0",images:[{src:"/media/visual-works/maya-main.webp",alt:{en:"Main Maya plugin window",zh:"Maya 综合工具集主界面"},caption:{en:"Main window and attribute tools",zh:"主窗口与属性工具"}},{src:"/media/visual-works/maya-rig.webp",alt:{en:"Rigging tools in the Maya plugin",zh:"Maya 工具集中的绑定功能"},caption:{en:"Rigging utilities",zh:"绑定工具页"}},{src:"/media/visual-works/maya-connections.webp",alt:{en:"Attribute connection tools",zh:"属性连接与驱动关系工具"},caption:{en:"Connection editor",zh:"属性连接编辑器"}}]},{id:"stylized-road-material",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/Bk918D",title:{en:"Stylized Road Material",zh:"风格化道路材质"},cover:"/media/artstation/stylized-road-material.jpg",category:{en:"Procedural material",zh:"程序化材质"},summary:{en:"A stylized road material authored procedurally in Substance Designer.",zh:"使用 Substance Designer 制作的风格化道路材质，通过 Flood Fill、层级拆分与多层噪声构建砖块、花纹、草地、花瓣、泥土和潮湿变化。"},process:[{en:"Constructed the brick base and spiral motif as reusable procedural patterns.",zh:"程序化构建砖块基底与旋涡纹样，并保持图案参数可调。"},{en:"Used Flood Fill and deformation mixing to break repetition.",zh:"使用 Flood Fill 与形变混合打散重复，建立砖块尺度和方向变化。"},{en:"Layered grass, petals, dirt, moisture, and unified color grading.",zh:"分层加入草地、花瓣、泥土、潮湿区域，最后统一整体色彩。"}],tools:["Substance Designer","Flood Fill","Procedural Material"],youtubeId:"D2jptqFjUZE",images:[{src:"/media/visual-works/road-material.webp",alt:{en:"Final stylized road material",zh:"风格化道路材质最终效果"},caption:{en:"Final material maps and surface",zh:"最终材质与贴图效果"}},{src:"/media/visual-works/road-graph.webp",alt:{en:"Substance Designer material graph",zh:"Substance Designer 材质节点网络"},caption:{en:"Procedural graph",zh:"程序化节点网络"}}]},{id:"rigging-animation",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/vb42ev",title:{en:"Rigging & Animation",zh:"角色绑定与动画"},cover:"/media/artstation/rigging-animation.jpg",category:{en:"Rigging and gameplay",zh:"绑定与游戏角色"},summary:{en:"A complete path from a mechanical character rig in Maya to a playable Unreal Engine character.",zh:"将 T-200 机器人从 Maya 骨骼与控制器绑定推进到 Unreal Engine 过场动画和可操控角色，处理机械轴、武器链条、舱门、灯光与攻击动画。"},process:[{en:"Built a mechanical rig with specialized IK, weapon-chain constraints, doors, ladder, and spotlight controls.",zh:"针对机械结构制作腿部 IK、武器链条约束、舱门、梯子与探照灯控制。"},{en:"Authored a startup cutscene in Level Sequencer.",zh:"在 Level Sequencer 中制作角色进入机体与机器人启动的过场动画。"},{en:"Implemented locomotion, upper-body attack blending, VFX states, and spotlight input.",zh:"通过 AnimGraph 与蓝图实现移动、上半身攻击混合、烟雾状态和探照灯输入。"}],tools:["Maya","Unreal Engine","Sequencer","AnimGraph","Blueprint"],youtubeId:"wd1gCuZZ2EY",featured:!0,images:[{src:"/media/visual-works/rig-result.webp",alt:{en:"Playable T-200 robot in Unreal Engine",zh:"Unreal Engine 中可操控的 T-200 机器人"},caption:{en:"Playable character result",zh:"可操控角色最终效果"}},{src:"/media/visual-works/rig-maya.webp",alt:{en:"Mechanical robot rig in Maya",zh:"Maya 中的机器人机械绑定"},caption:{en:"Maya rig and controls",zh:"Maya 骨骼与控制器"}},{src:"/media/visual-works/rig-animgraph.webp",alt:{en:"Unreal Engine animation graph",zh:"Unreal Engine 动画状态图"},caption:{en:"Animation state and blending",zh:"动画状态与分层混合"}}]},{id:"unity-sdf-shader",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/XJGnQl",title:{en:"Unity SDF Shader",zh:"Unity SDF 体积云 Shader"},cover:"/media/artstation/unity-sdf-shader.jpg",category:{en:"Realtime shader",zh:"实时 Shader"},summary:{en:"A Unity volume-cloud shader using signed distance fields and ray marching.",zh:"在 Unity 中以有向距离场描述云体，使用 Ray Marching 进行密度采样，并结合光线包围盒求交、噪声、吸收和散射计算完成体积云渲染。"},process:[{en:"Combined sphere and box SDF primitives through smooth union and subtraction.",zh:"组合球体与盒体 SDF，并以平滑并集和差集构造可变化的云体形态。"},{en:"Implemented ray-box intersection and density sampling in HLSL.",zh:"在 HLSL 中实现光线与包围盒求交、步进采样和密度计算。"},{en:"Exposed noise, absorption, ambient density, and light intensity for art direction.",zh:"开放噪声、吸收、环境密度与光照强度参数，支持在 Unity Inspector 中调整。"}],tools:["Unity","HLSL","SDF","Ray Marching"],youtubeId:"vSrJBlIisTs",images:[{src:"/media/visual-works/sdf-properties.webp",alt:{en:"Unity SDF shader properties",zh:"Unity SDF Shader 参数定义"},caption:{en:"Artist-facing parameters",zh:"可调渲染参数"}},{src:"/media/visual-works/sdf-raymarch.webp",alt:{en:"Ray marching fragment shader code",zh:"体积云 Ray Marching 片元着色代码"},caption:{en:"Density sampling and lighting",zh:"密度采样与光照计算"}}]},{id:"houdini-lightning",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/5W1Xkg",title:{en:"Houdini Lightning VFX",zh:"Houdini 闪电特效"},cover:"/media/artstation/houdini-lighting.jpg",category:{en:"Procedural VFX",zh:"程序化特效"},summary:{en:"A procedural lightning system that strikes nearby geometry and activates localized destruction.",zh:"使用 Houdini 构建的程序化闪电与破碎交互：电流自动寻找周围目标，生成不同形态与频率的闪电，并在命中位置激活对应刚体簇。"},process:[{en:"Projected source points onto nearby surfaces to establish valid strike targets.",zh:"沿球体法线向周围场景投射散点，筛选有效距离内的闪电命中目标。"},{en:"Built animated lightning forms with curve attributes, VOP noise, particles, and color flow.",zh:"结合曲线属性、VOP 噪声、粒子与颜色流动构建主电流和次级电流。"},{en:"Connected hit regions to clustered rigid-body activation in DOPs.",zh:"在 DOP 中将命中区域连接到预切割刚体簇，实现局部优先崩解。"}],tools:["Houdini","VOP","DOP","Particles","Rigid Bodies"],images:[{src:"/media/visual-works/lightning-form.webp",alt:{en:"Procedural lightning curves",zh:"程序化生成的闪电曲线"},caption:{en:"Lightning form generation",zh:"闪电形态生成"}},{src:"/media/visual-works/lightning-stream.webp",alt:{en:"Secondary electric current effect",zh:"次级电流与颜色流动效果"},caption:{en:"Secondary current",zh:"次级电流效果"}},{src:"/media/visual-works/lightning-destruction.webp",alt:{en:"Wall destruction driven by lightning strikes",zh:"闪电命中驱动的墙体破碎"},caption:{en:"Strike-driven rigid-body destruction",zh:"命中驱动的刚体破碎"}}]},{id:"houdini-cluster",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/Zl3GrN",title:{en:"Houdini Interactive Cluster",zh:"Houdini 交互式花簇"},cover:"/media/artstation/houdini-cluster.jpg",category:{en:"Procedural interaction",zh:"程序化交互"},summary:{en:"A fully procedural flower cluster that bends and blooms in response to a moving reference point.",zh:"完全由 Houdini 程序生成的交互式花簇。参考点靠近时，花茎会向目标弯曲并逐渐开放；远离后则恢复闭合状态。"},process:[{en:"Scattered stems and used VEX to calculate distance-attenuated orientation toward the target.",zh:"散布花茎，并用 VEX 计算指向目标的方向、距离衰减、噪声和平滑。"},{en:"Generated petal rings and blended their normals by target proximity.",zh:"程序化生成花瓣环，根据参考点距离混合花瓣法线以控制开合。"},{en:"Added randomized orientation and color variation without external models.",zh:"不依赖外部模型，为花簇加入方向扰动和颜色变化，完成整体生成网络。"}],tools:["Houdini","VEX","Procedural Modeling","Interaction"],images:[{src:"/media/visual-works/cluster-response.webp",alt:{en:"Flower cluster responding to a reference point",zh:"花簇对参考点产生弯曲与开放响应"},caption:{en:"Interactive bloom response",zh:"交互式开放效果"}},{src:"/media/visual-works/cluster-network.webp",alt:{en:"Complete Houdini flower network",zh:"Houdini 花簇完整节点网络"},caption:{en:"Complete procedural network",zh:"完整程序化网络"}}]},{id:"unreal-vfx",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/oJWA5k",title:{en:"Unreal Engine VFX",zh:"Unreal 水墨战斗特效"},cover:"/media/artstation/unreal-vfx.jpg",category:{en:"Realtime VFX",zh:"实时特效"},summary:{en:"A Chinese ink-inspired combat VFX set built across Unreal materials, Niagara, animation, and post process.",zh:"以中国水墨视觉为方向，综合 Unreal 材质、Niagara、动画通知、Sequencer 与后处理，制作刀光、地裂、墨迹喷溅、聚合和画面冲击效果。"},process:[{en:"Created trail meshes and materials for dissolution, blur, refraction, cracks, and screen distortion.",zh:"制作刀光轨迹网格，以及溶解、拖尾、折射、裂纹和屏幕扰动材质。"},{en:"Layered multiple Niagara systems for blade arcs, dust, smoke, ink splashes, stones, and cohesion.",zh:"分层组合刀光、尘土、烟雾、墨迹喷溅、碎石和聚合等 Niagara 系统。"},{en:"Triggered VFX through animation slots and notifies, then added impact post process.",zh:"通过动画 Slot 与 Notify 触发特效，并在重击阶段加入水墨与模糊后处理。"}],tools:["Unreal Engine","Niagara","Material Editor","Animation"],youtubeId:"hbdYTygLQBw",images:[{src:"/media/visual-works/vfx-blade.webp",alt:{en:"Layered sword trail effect",zh:"多层组合的水墨刀光效果"},caption:{en:"Sword trail composition",zh:"刀光特效组合"}},{src:"/media/visual-works/vfx-ground.webp",alt:{en:"Large-scale ink ground fissure effect",zh:"大范围水墨地裂效果"},caption:{en:"Ground fissure layers",zh:"地裂效果分层"}},{src:"/media/visual-works/vfx-final.webp",alt:{en:"Final combat VFX in Unreal Engine",zh:"Unreal Engine 水墨战斗特效最终画面"},caption:{en:"Final realtime presentation",zh:"最终实时画面"}}]},{id:"houdini-tower",portfolioCategory:"general-ta",artstationUrl:"https://www.artstation.com/artwork/nJWYm1",title:{en:"Houdini PCG Tower",zh:"Houdini 程序化高塔"},cover:"/media/artstation/houdini-pcg-tower.jpg",category:{en:"Procedural modeling",zh:"程序化建模"},summary:{en:"A parameterized tower generator with independently authored walls, columns, transitions, body, and top.",zh:"在 Houdini 中拆分墙体、立柱、过渡结构、塔身与塔顶五个模块，建立相互约束的参数化生成逻辑，并生成可直接应用材质的 UV。"},process:[{en:"Built modular wall, window, pillar, railing, body, and roof generators.",zh:"分别构建墙体与窗框、立柱、栏杆、塔身装饰和塔顶结构生成器。"},{en:"Used normals, edge groups, VOP-authored attributes, loops, and resampling to control structure.",zh:"使用法线、边组、VOP 属性、循环和重采样控制结构细节与拼装位置。"},{en:"Exposed base, body, and top parameters while maintaining valid joins and UVs.",zh:"将底座、塔身与塔顶参数集中开放，并保持模块衔接和 UV 结果有效。"}],tools:["Houdini","Procedural Modeling","VOP","UV"],youtubeId:"IxTV5AredLw",images:[{src:"/media/visual-works/tower-wall.webp",alt:{en:"Procedural wall and window module",zh:"程序化墙体与窗框模块"},caption:{en:"Wall generator",zh:"墙体生成模块"}},{src:"/media/visual-works/tower-body.webp",alt:{en:"Assembled procedural tower body",zh:"组合后的程序化塔身"},caption:{en:"Tower body assembly",zh:"塔身模块组合"}},{src:"/media/visual-works/tower-top.webp",alt:{en:"Procedural tower top assembly",zh:"程序化塔顶结构"},caption:{en:"Tower top module",zh:"塔顶生成模块"}}]}],bw=`# Houdini Interactive Cluster\r
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
`,Sw=`# Houdini 交互式花簇\r
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
`,Tw=`# Houdini Lightning VFX\r
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
`,Aw=`# Houdini 闪电特效\r
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
`,ww=`# Houdini PCG Tower\r
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
`,zw=`# Houdini PCG 塔楼\r
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
`,Ew=`# Maya Plugin\r
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
`,Cw=`# Maya 插件\r
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
`,xw=`# 绑定与动画\r
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
`,Dw=`# Stylized Road Material\r
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
`,Uw=`# 风格化道路材质\r
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
`,Rw=`# Unity SDF Shader\r
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
`,Ow=`# Unity SDF 着色器\r
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
`,Vw=`# Unreal Engine Stylized World\r
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
`,jw=`# Unreal Engine 风格化世界\r
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
`,Bw=`# Unreal Engine VFX\r
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
`,Lw={"unreal-stylized-world":{zh:jw,en:Vw},"maya-plugin":{zh:Cw,en:Ew},"stylized-road-material":{zh:Uw,en:Dw},"rigging-animation":{zh:xw,en:Mw},"unity-sdf-shader":{zh:Ow,en:Rw},"houdini-lightning":{zh:Aw,en:Tw},"houdini-cluster":{zh:Sw,en:bw},"unreal-vfx":{zh:Nw,en:Bw},"houdini-tower":{zh:zw,en:ww}},wv=/^!\[(.*?)\]\((.*?)\)$/,zv=/^@\[video(?::\s*(.*?))?\]\((.*?)\)$/,Ev=/^(#{1,6})\s+(.+)$/,Uc=/^\s*-\s+(.+)$/,Rc=/^\s*\d+\.\s+(.+)$/,_w=/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)]+)/g;function to(a){return a.replace(/^\s*>\s?/,"").trimEnd()}function Hw(a){const r=to(a).trim();return!r||r==="<aside>"||r==="</aside>"||wv.test(r)||zv.test(r)||Ev.test(r)||Uc.test(r)||Rc.test(r)}function kw(a){const r=a.replace(/\r\n/g,`
`).split(`
`),o=[];for(let l=0;l<r.length;){const c=to(r[l]).trim();if(!c||c==="<aside>"||c==="</aside>"){l+=1;continue}const h=c.match(wv);if(h){o.push({type:"image",alt:h[1],src:h[2]}),l+=1;continue}const d=c.match(zv);if(d){o.push({type:"video",caption:d[1]??"",src:d[2]}),l+=1;continue}const p=c.match(Ev);if(p){o.push({type:"heading",level:p[1].length,text:p[2].replace(/^\*\*|\*\*$/g,"")}),l+=1;continue}const v=c.match(Uc),m=c.match(Rc);if(v||m){const b=!!m,w=[];for(;l<r.length;){const U=to(r[l]).trim().match(b?Rc:Uc);if(!U)break;w.push(U[1]),l+=1}o.push({type:"list",ordered:b,items:w});continue}const y=[c];for(l+=1;l<r.length&&!Hw(r[l]);)y.push(to(r[l]).trim()),l+=1;o.push({type:"paragraph",text:y.join(" ")})}return o}function Gw(a){let r=a;for(let c=0;c<2;c+=1)try{r=decodeURIComponent(r)}catch{break}if(r==="image.png")return"/media/notion/image-000.webp";if(r==="texture.png")return"/media/notion/texture.webp";if(r==="PixPin_2024-11-13_18-17-55.gif")return"/media/notion/vfx-fluctuation.gif";const o=r.match(/^image (\d+)\.png$/);if(o)return`/media/notion/image-${o[1]}.webp`;const l=r.match(/^图片(\d+)\.png$/);return l?`/media/notion/cover-${l[1]}.webp`:a}function rc(a){return a.split(_w).filter(Boolean).map((r,o)=>{if(r.startsWith("`")&&r.endsWith("`"))return x.jsx("code",{children:r.slice(1,-1)},o);if(r.startsWith("**")&&r.endsWith("**"))return x.jsx("strong",{children:r.slice(2,-2)},o);const l=r.match(/^\[([^\]]+)\]\(([^)]+)\)$/);return l?x.jsx("a",{href:l[2],target:"_blank",rel:"noreferrer",children:l[1]},o):/^https?:\/\//.test(r)?x.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:r},o):r})}function of({markdown:a,title:r}){const o=kw(a),l=o.findIndex(c=>c.type==="heading"&&c.level===1);return x.jsx("div",{className:"notion-story",children:o.map((c,h)=>{if(h===l)return null;if(c.type==="image")return x.jsx("figure",{children:x.jsx("img",{src:Gw(c.src),alt:c.alt||r,loading:"lazy"})},`${c.src}-${h}`);if(c.type==="video")return x.jsxs("figure",{className:"story-video",children:[x.jsx("video",{src:c.src,controls:!0,preload:"metadata",playsInline:!0}),c.caption&&x.jsx("figcaption",{children:c.caption})]},`${c.src}-${h}`);if(c.type==="heading"){const d=c.level<=2?"h3":"h4";return x.jsx(d,{children:rc(c.text)},h)}if(c.type==="list"){const d=c.ordered?"ol":"ul";return x.jsx(d,{children:c.items.map((p,v)=>x.jsx("li",{children:rc(p)},`${p}-${v}`))},h)}return x.jsx("p",{children:rc(c.text)},h)})})}const Xw=[{id:"all",zh:"全部作品",en:"All work"},{id:"pipeline",zh:"工具管线",en:"Tool pipelines"},{id:"engine-games",zh:"引擎与游戏",en:"Engines & games"},{id:"ai-agent",zh:"AI 与 Agent",en:"AI & Agents"},{id:"general-ta",zh:"通用技术美术技能",en:"General technical art"},{id:"other-tools",zh:"部分其他工具",en:"Selected other tools"}],jp=new Map(["art-pipeline-skill","rez-studio-launcher","internship-art-pipeline","maya-garment-preparation","mayascope","mayacraft","asset-delivery-organizer","maya-scene-checker","maya-plugin"].map((a,r)=>[a,r])),Bp=new Map([["pipeline",0],["engine-games",1],["ai-agent",2],["general-ta",3],["other-tools",4]]);function qw(){const{locale:a}=di(),r=Tv()??!1,[o,l]=J.useState("all"),[c,h]=J.useState(null),d=J.useRef(null),p=J.useMemo(()=>[...yw.map(y=>({kind:"repository",id:y.id,category:y.category,title:y.title,label:Wt(y.categoryLabel,a),summary:Wt(y.summary,a),cover:y.cover,tags:y.tags,value:y})),...vw.map(y=>({kind:"visual",id:y.id,category:y.portfolioCategory,title:Wt(y.title,a),label:Wt(y.category,a),summary:Wt(y.summary,a),cover:y.cover,tags:y.tools,value:y})),...sw.map(y=>({kind:"project",id:y.id,category:y.portfolioCategory,title:y.title,label:Fn(y.category,a),summary:Fn(y.summary,a),cover:y.images[0].src,tags:y.stack,value:y}))].map((y,b)=>({item:y,sourceIndex:b})).sort((y,b)=>{const w=(Bp.get(y.item.category)??Number.MAX_SAFE_INTEGER)-(Bp.get(b.item.category)??Number.MAX_SAFE_INTEGER);return w!==0?w:y.item.category==="pipeline"?(jp.get(y.item.id)??Number.MAX_SAFE_INTEGER)-(jp.get(b.item.id)??Number.MAX_SAFE_INTEGER):y.sourceIndex-b.sourceIndex}).map(({item:y})=>y),[a]),v=o==="all"?p:p.filter(m=>m.category===o);return J.useEffect(()=>{const m=d.current;if(m)return c?(m.open||m.showModal(),m.scrollTop=0,document.body.classList.add("has-project-dialog")):(m.open&&m.close(),document.body.classList.remove("has-project-dialog")),()=>document.body.classList.remove("has-project-dialog")},[c]),x.jsxs("section",{id:"portfolio",className:"portfolio-gallery","aria-labelledby":"portfolio-title",children:[x.jsxs("header",{className:"portfolio-gallery-header",children:[x.jsxs("div",{children:[x.jsx("h2",{id:"portfolio-title",children:a==="zh"?"作品":"Work"}),x.jsx("span",{children:String(p.length).padStart(2,"0")})]}),x.jsx("p",{children:a==="zh"?"完整图文、演示与源码链接集中收录于各项目详情。":"Full case studies, demos, and source links are collected in each project detail."})]}),x.jsx("div",{className:"portfolio-filters",role:"group","aria-label":a==="zh"?"筛选作品":"Filter work",children:Xw.map(m=>x.jsx("button",{type:"button",className:o===m.id?"is-active":"","aria-pressed":o===m.id,onClick:()=>l(m.id),children:a==="zh"?m.zh:m.en},m.id))}),x.jsx("div",{className:"portfolio-grid",children:v.map(m=>x.jsxs(Av.button,{type:"button",className:"portfolio-tile",onClick:()=>h(m),whileHover:r?void 0:{y:-4},transition:{duration:.18},children:[x.jsx("figure",{children:x.jsx("img",{src:m.cover,alt:"",loading:"eager"})}),x.jsxs("div",{className:"portfolio-tile-copy",children:[x.jsx("small",{children:m.label}),x.jsx("h3",{children:m.title}),x.jsx("p",{children:m.summary}),x.jsx("div",{children:m.tags.slice(0,4).map(y=>x.jsx("span",{children:y},y))})]})]},`${m.kind}-${m.id}`))}),x.jsx("dialog",{ref:d,className:`project-dialog unified-dialog ${c?.kind==="visual"?"visual-work-dialog":""}`,onCancel:m=>{m.preventDefault(),h(null)},onClose:()=>h(null),onClick:m=>{m.target===m.currentTarget&&h(null)},children:c&&x.jsx(Pw,{item:c,locale:a,close:()=>h(null)})})]})}function Pw({item:a,locale:r,close:o}){const l=Tv()??!1;return x.jsxs(Av.article,{initial:l?!1:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.2},children:[x.jsx("button",{className:"project-dialog-close",type:"button",onClick:o,"aria-label":r==="zh"?"关闭项目详情":"Close project details",children:"×"}),x.jsxs("div",{className:"project-dialog-heading",children:[x.jsxs("p",{children:[a.label," · ",a.tags.join(" · ")]}),x.jsx("h2",{children:a.title}),x.jsx("p",{children:a.summary})]}),a.kind==="repository"&&x.jsx(Yw,{work:a.value,locale:r}),a.kind==="visual"&&x.jsx(Fw,{work:a.value,locale:r}),a.kind==="project"&&x.jsx(Kw,{project:a.value,locale:r})]},`${a.kind}-${a.id}`)}function Yw({work:a,locale:r}){const o=a.images?.filter(c=>c.src!==a.cover)??[],l=a.id==="noemancer"||a.id==="artflow-agent"?"cover":"contain";return x.jsxs(x.Fragment,{children:[a.repositoryUrl&&x.jsxs("a",{className:"project-dialog-source",href:a.repositoryUrl,target:"_blank",rel:"noreferrer",children:[x.jsx("span",{children:r==="zh"?"查看 GitHub 仓库":"View GitHub repository"}),x.jsx("span",{"aria-hidden":"true",children:"↗"})]}),x.jsx(Qw,{src:a.cover,alt:`${a.title} ${r==="zh"?"项目画面":"project view"}`,fit:l}),x.jsx(of,{markdown:Wt(a.story,r),title:a.title}),o.length>0&&x.jsx(Zw,{fit:"contain",images:o.map(c=>({src:c.src,alt:Wt(c.alt,r),caption:Wt(c.alt,r)}))})]})}function Fw({work:a,locale:r}){return x.jsxs(x.Fragment,{children:[x.jsxs("a",{className:"project-dialog-source",href:a.artstationUrl,target:"_blank",rel:"noreferrer",children:[x.jsx("span",{children:r==="zh"?"查看原始 ArtStation 项目":"View the original ArtStation project"}),x.jsx("span",{"aria-hidden":"true",children:"↗"})]}),a.youtubeId&&x.jsx(Cv,{youtubeId:a.youtubeId,title:Wt(a.title,r)}),x.jsx(of,{markdown:Lw[a.id][r],title:Wt(a.title,r)})]})}function Kw({project:a,locale:r}){return x.jsxs(x.Fragment,{children:[a.link&&x.jsxs("a",{className:"project-dialog-source",href:a.link.href,target:"_blank",rel:"noreferrer",children:[x.jsx("span",{children:Fn(a.link.label,r)}),x.jsx("span",{"aria-hidden":"true",children:"↗"})]}),a.youtubeId&&x.jsx(Cv,{youtubeId:a.youtubeId,title:a.title}),Vp[a.id]?x.jsx(of,{markdown:Vp[a.id][r],title:a.title}):a.story&&x.jsxs("section",{className:"project-dialog-story",children:[x.jsx("h3",{children:Fn(a.story.title,r)}),x.jsx("p",{children:Fn(a.story.intro,r)}),x.jsx("h4",{children:r==="zh"?"玩法与特色":"Gameplay & Features"}),x.jsx("dl",{children:a.story.features.map(o=>x.jsxs("div",{children:[x.jsx("dt",{children:Fn(o.title,r)}),x.jsx("dd",{children:Fn(o.detail,r)})]},o.title.en))}),a.story.note&&x.jsx("p",{className:"project-dialog-note",children:Fn(a.story.note,r)})]})]})}function Qw({src:a,alt:r,fit:o}){return x.jsx("figure",{className:`project-dialog-lead-media ${o==="contain"?"is-contain":""}`,children:x.jsx("img",{src:a,alt:r})})}function Cv({youtubeId:a,title:r}){return x.jsx("div",{className:"project-dialog-video",children:x.jsx("iframe",{src:`https://www.youtube-nocookie.com/embed/${a}?rel=0`,title:`${r} demo video`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})})}function Zw({images:a,fit:r="cover"}){return x.jsx("div",{className:`project-dialog-gallery ${r==="contain"?"is-contain":""}`,children:a.map(o=>x.jsxs("figure",{children:[x.jsx("img",{src:o.src,alt:o.alt,style:{objectPosition:o.position},loading:"lazy"}),o.caption&&x.jsx("figcaption",{children:o.caption})]},o.src))})}function Iw(){const{locale:a,copy:r}=di();return x.jsxs("div",{className:"site","data-locale":a,children:[x.jsx("a",{className:"skip-link",href:"#main",children:a==="zh"?"跳到主要内容":"Skip to main content"}),x.jsx("span",{id:"top"}),x.jsx(u2,{}),x.jsxs("main",{id:"main",children:[x.jsx(c2,{}),x.jsx(qw,{})]}),x.jsx(o2,{}),x.jsx("div",{className:"locale-status sr-only","aria-live":"polite",children:r.language.changed})]})}const Jw={en:{meta:{title:"Lucas Shen | AI & Tools Pipeline Technical Artist",description:"Games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines by Lucas Shen."},nav:{work:"Projects",practice:"Experience",links:"Links",aria:"Primary navigation"},language:{label:"Language",english:"English",changed:"Language changed to English."},hero:{role:"AI & Tools Pipeline Technical Artist",primaryAction:"Selected projects"},personal:{intro:"My work spans games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines, with running builds, project captures, and implementation details.",storyAction:"About me",aboutTitle:"About me",aboutBody:["I’m Lucas, a technical artist from China. My path crosses industrial engineering, game development, realtime graphics, and production tools. That mix helps me move between an artist’s problem and the system behind it.","I enjoy reverse-engineering workflows, turning repeated work into tools, and testing where AI is genuinely useful. Outside the toolchain, I keep learning through games, animation, music, graphics experiments, and public documentation."],traits:[{title:"What I work on",detail:"DCC tools, AI workflows, realtime graphics, games, and animation."},{title:"How I learn",detail:"Build a real workflow, inspect the evidence, then improve the system."},{title:"How I collaborate",detail:"Keep creative decisions human and make repeated production steps dependable."}],linksTitle:"Public channels",linksIntro:"Code, visual work, demos, and ongoing notes live across these profiles.",social:[{name:"GitHub",detail:"Code, tools, and public engineering evidence.",href:"https://github.com/Ubik42",mark:"GH"},{name:"Visual work",detail:"Realtime graphics, materials, shaders, rigging, and procedural work.",href:"#visual-work",mark:"TA"},{name:"Bilibili",detail:"Tool demos, tutorials, and longer videos.",href:"https://space.bilibili.com/12367861?spm_id_from=333.1007.0.0",mark:"Bi"},{name:"Xiaohongshu",detail:"Notes, resources, and everyday discoveries.",href:"https://www.xiaohongshu.com/user/profile/670526b2000000001e001891",mark:"RED"}]},practice:{title:"Experience and education",items:[{period:"2026.03 – now",title:"AI Tool Technical Artist Intern",place:"Tencent Photon",detail:"Building AI-assisted art-production tools across DCC, engine, and design workflows, with explicit rules and review boundaries."},{period:"2025.08 – 2027.05",title:"M.S. in EAE, Technical Art",place:"University of Utah",detail:"Studying realtime graphics, tools, pipelines, and collaborative game production in Entertainment Arts and Engineering."},{period:"2020.09 – 2024.06",title:"B.S. in Industrial Engineering",place:"Shanghai Jiao Tong University",detail:"Built a systems and optimization foundation, then applied it through game systems, Unity client work, and industrial digital twins."}]},footer:{copyright:"Lucas (Yuyan) Shen / 沈裕焱"}},zh:{meta:{title:"沈裕焱 | AI 与工具管线向技术美术",description:"沈裕焱的游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线作品集。"},nav:{work:"作品",practice:"经历",links:"链接",aria:"主导航"},language:{label:"语言",english:"English",changed:"语言已切换为中文。"},hero:{role:"AI 与工具管线向技术美术",primaryAction:"项目作品"},personal:{intro:"作品覆盖游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线，包含运行画面、项目素材和具体实现。",storyAction:"关于我",aboutTitle:"关于我",aboutBody:["我是沈裕焱，一名来自中国的技术美术。我的经历横跨工业工程、游戏开发、实时图形和生产工具，因此我习惯同时理解创作者遇到的问题，以及问题背后的代码与系统。","我喜欢拆解工作流，把重复劳动做成工具，也会认真验证 AI 适合参与哪一步。工具之外，我持续从游戏、动画、音乐、图形实验和公开文档中学习。"],traits:[{title:"我在做什么",detail:"DCC 工具、AI 工作流、实时图形、游戏与动画。"},{title:"我的学习方式",detail:"先做出真实工作流，检查证据，再改进整个系统。"},{title:"我的协作方式",detail:"让创作决定留给人，让重复的生产环节变得可靠。"}],linksTitle:"公开渠道",linksIntro:"代码、视觉作品、演示和持续记录分布在这些公开主页中。",social:[{name:"GitHub",detail:"代码、工具与公开工程证据。",href:"https://github.com/Ubik42",mark:"GH"},{name:"视觉作品",detail:"实时场景、材质、Shader、绑定与程序化内容。",href:"#visual-work",mark:"TA"},{name:"哔哩哔哩",detail:"工具演示、教程和长视频。",href:"https://space.bilibili.com/12367861?spm_id_from=333.1007.0.0",mark:"Bi"},{name:"小红书",detail:"笔记、资源和日常发现。",href:"https://www.xiaohongshu.com/user/profile/670526b2000000001e001891",mark:"RED"}]},practice:{title:"经历与教育",items:[{period:"2026.03 – 至今",title:"AI 工具技术美术实习生",place:"腾讯光子",detail:"围绕 DCC、引擎与设计流程构建 AI 辅助美术生产工具，明确规则、执行与人工审查的边界。"},{period:"2025.08 – 2027.05",title:"EAE 技术美术硕士",place:"犹他大学",detail:"在 Entertainment Arts and Engineering 项目中学习实时图形、工具、管线与协作式游戏生产。"},{period:"2020.09 – 2024.06",title:"工业工程学士",place:"上海交通大学",detail:"建立优化与系统方法基础，并逐步扩展到游戏系统、Unity 客户端与工业数字孪生开发。"}]},footer:{copyright:"Lucas (Yuyan) Shen / 沈裕焱"}}},Mv="portfolio.locale.v2";function Ww(){try{const a=window.localStorage.getItem(Mv);if(a==="en"||a==="zh")return a}catch{}return"zh"}function $w(a){const r=document.querySelector('meta[name="description"]');r&&(r.content=a)}function ez({children:a}){const[r,o]=J.useState(Ww),l=Jw[r];J.useEffect(()=>{document.documentElement.lang=r==="zh"?"zh-CN":"en",document.title=l.meta.title,$w(l.meta.description);try{window.localStorage.setItem(Mv,r)}catch{}},[l.meta.description,l.meta.title,r]);const c=J.useMemo(()=>({locale:r,copy:l,setLocale(h){J.startTransition(()=>o(h))}}),[l,r]);return x.jsx(Np,{value:c,children:a})}s2.createRoot(document.getElementById("root")).render(x.jsx(J.StrictMode,{children:x.jsx(ez,{children:x.jsx(Iw,{})})}));
//# sourceMappingURL=index-VMDMZchL-portfolio-refresh.js.map
