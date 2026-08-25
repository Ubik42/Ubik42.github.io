(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(c){if(c.ep)return;c.ep=!0;const h=s(c);fetch(c.href,h)}})();var Nu={exports:{}},ur={};var ug;function F1(){if(ug)return ur;ug=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(o,c,h){var d=null;if(h!==void 0&&(d=""+h),c.key!==void 0&&(d=""+c.key),"key"in c){h={};for(var p in c)p!=="key"&&(h[p]=c[p])}else h=c;return c=h.ref,{$$typeof:a,type:o,key:d,ref:c!==void 0?c:null,props:h}}return ur.Fragment=r,ur.jsx=s,ur.jsxs=s,ur}var cg;function J1(){return cg||(cg=1,Nu.exports=F1()),Nu.exports}var U=J1(),Hu={exports:{}},ae={};var fg;function I1(){if(fg)return ae;fg=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),E=Symbol.iterator;function _(A){return A===null||typeof A!="object"?null:(A=E&&A[E]||A["@@iterator"],typeof A=="function"?A:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,L={};function H(A,B,q){this.props=A,this.context=B,this.refs=L,this.updater=q||C}H.prototype.isReactComponent={},H.prototype.setState=function(A,B){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,B,"setState")},H.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function X(){}X.prototype=H.prototype;function G(A,B,q){this.props=A,this.context=B,this.refs=L,this.updater=q||C}var Y=G.prototype=new X;Y.constructor=G,N(Y,H.prototype),Y.isPureReactComponent=!0;var ne=Array.isArray;function oe(){}var K={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function xe(A,B,q){var F=q.ref;return{$$typeof:a,type:A,key:B,ref:F!==void 0?F:null,props:q}}function te(A,B){return xe(A.type,B,A.props)}function ve(A){return typeof A=="object"&&A!==null&&A.$$typeof===a}function Te(A){var B={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(q){return B[q]})}var rt=/\/+/g;function ke(A,B){return typeof A=="object"&&A!==null&&A.key!=null?Te(""+A.key):B.toString(36)}function Ne(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(oe,oe):(A.status="pending",A.then(function(B){A.status==="pending"&&(A.status="fulfilled",A.value=B)},function(B){A.status==="pending"&&(A.status="rejected",A.reason=B)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function R(A,B,q,F,ie){var ue=typeof A;(ue==="undefined"||ue==="boolean")&&(A=null);var Se=!1;if(A===null)Se=!0;else switch(ue){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(A.$$typeof){case a:case r:Se=!0;break;case v:return Se=A._init,R(Se(A._payload),B,q,F,ie)}}if(Se)return ie=ie(A),Se=F===""?"."+ke(A,0):F,ne(ie)?(q="",Se!=null&&(q=Se.replace(rt,"$&/")+"/"),R(ie,B,q,"",function(pi){return pi})):ie!=null&&(ve(ie)&&(ie=te(ie,q+(ie.key==null||A&&A.key===ie.key?"":(""+ie.key).replace(rt,"$&/")+"/")+Se)),B.push(ie)),1;Se=0;var lt=F===""?".":F+":";if(ne(A))for(var He=0;He<A.length;He++)F=A[He],ue=lt+ke(F,He),Se+=R(F,B,q,ue,ie);else if(He=_(A),typeof He=="function")for(A=He.call(A),He=0;!(F=A.next()).done;)F=F.value,ue=lt+ke(F,He++),Se+=R(F,B,q,ue,ie);else if(ue==="object"){if(typeof A.then=="function")return R(Ne(A),B,q,F,ie);throw B=String(A),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return Se}function k(A,B,q){if(A==null)return A;var F=[],ie=0;return R(A,F,"","",function(ue){return B.call(q,ue,ie++)}),F}function Z(A){if(A._status===-1){var B=A._result;B=B(),B.then(function(q){(A._status===0||A._status===-1)&&(A._status=1,A._result=q)},function(q){(A._status===0||A._status===-1)&&(A._status=2,A._result=q)}),A._status===-1&&(A._status=0,A._result=B)}if(A._status===1)return A._result.default;throw A._result}var le=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},me={map:k,forEach:function(A,B,q){k(A,function(){B.apply(this,arguments)},q)},count:function(A){var B=0;return k(A,function(){B++}),B},toArray:function(A){return k(A,function(B){return B})||[]},only:function(A){if(!ve(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ae.Activity=b,ae.Children=me,ae.Component=H,ae.Fragment=s,ae.Profiler=c,ae.PureComponent=G,ae.StrictMode=o,ae.Suspense=y,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,ae.__COMPILER_RUNTIME={__proto__:null,c:function(A){return K.H.useMemoCache(A)}},ae.cache=function(A){return function(){return A.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(A,B,q){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var F=N({},A.props),ie=A.key;if(B!=null)for(ue in B.key!==void 0&&(ie=""+B.key),B)!W.call(B,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&B.ref===void 0||(F[ue]=B[ue]);var ue=arguments.length-2;if(ue===1)F.children=q;else if(1<ue){for(var Se=Array(ue),lt=0;lt<ue;lt++)Se[lt]=arguments[lt+2];F.children=Se}return xe(A.type,ie,F)},ae.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:h,_context:A},A},ae.createElement=function(A,B,q){var F,ie={},ue=null;if(B!=null)for(F in B.key!==void 0&&(ue=""+B.key),B)W.call(B,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(ie[F]=B[F]);var Se=arguments.length-2;if(Se===1)ie.children=q;else if(1<Se){for(var lt=Array(Se),He=0;He<Se;He++)lt[He]=arguments[He+2];ie.children=lt}if(A&&A.defaultProps)for(F in Se=A.defaultProps,Se)ie[F]===void 0&&(ie[F]=Se[F]);return xe(A,ue,ie)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(A){return{$$typeof:p,render:A}},ae.isValidElement=ve,ae.lazy=function(A){return{$$typeof:v,_payload:{_status:-1,_result:A},_init:Z}},ae.memo=function(A,B){return{$$typeof:m,type:A,compare:B===void 0?null:B}},ae.startTransition=function(A){var B=K.T,q={};K.T=q;try{var F=A(),ie=K.S;ie!==null&&ie(q,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(oe,le)}catch(ue){le(ue)}finally{B!==null&&q.types!==null&&(B.types=q.types),K.T=B}},ae.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},ae.use=function(A){return K.H.use(A)},ae.useActionState=function(A,B,q){return K.H.useActionState(A,B,q)},ae.useCallback=function(A,B){return K.H.useCallback(A,B)},ae.useContext=function(A){return K.H.useContext(A)},ae.useDebugValue=function(){},ae.useDeferredValue=function(A,B){return K.H.useDeferredValue(A,B)},ae.useEffect=function(A,B){return K.H.useEffect(A,B)},ae.useEffectEvent=function(A){return K.H.useEffectEvent(A)},ae.useId=function(){return K.H.useId()},ae.useImperativeHandle=function(A,B,q){return K.H.useImperativeHandle(A,B,q)},ae.useInsertionEffect=function(A,B){return K.H.useInsertionEffect(A,B)},ae.useLayoutEffect=function(A,B){return K.H.useLayoutEffect(A,B)},ae.useMemo=function(A,B){return K.H.useMemo(A,B)},ae.useOptimistic=function(A,B){return K.H.useOptimistic(A,B)},ae.useReducer=function(A,B,q){return K.H.useReducer(A,B,q)},ae.useRef=function(A){return K.H.useRef(A)},ae.useState=function(A){return K.H.useState(A)},ae.useSyncExternalStore=function(A,B,q){return K.H.useSyncExternalStore(A,B,q)},ae.useTransition=function(){return K.H.useTransition()},ae.version="19.2.8",ae}var dg;function Vc(){return dg||(dg=1,Hu.exports=I1()),Hu.exports}var I=Vc(),Lu={exports:{}},cr={},Gu={exports:{}},ku={};var hg;function W1(){return hg||(hg=1,(function(a){function r(R,k){var Z=R.length;R.push(k);e:for(;0<Z;){var le=Z-1>>>1,me=R[le];if(0<c(me,k))R[le]=k,R[Z]=me,Z=le;else break e}}function s(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var k=R[0],Z=R.pop();if(Z!==k){R[0]=Z;e:for(var le=0,me=R.length,A=me>>>1;le<A;){var B=2*(le+1)-1,q=R[B],F=B+1,ie=R[F];if(0>c(q,Z))F<me&&0>c(ie,q)?(R[le]=ie,R[F]=Z,le=F):(R[le]=q,R[B]=Z,le=B);else if(F<me&&0>c(ie,Z))R[le]=ie,R[F]=Z,le=F;else break e}}return k}function c(R,k){var Z=R.sortIndex-k.sortIndex;return Z!==0?Z:R.id-k.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var d=Date,p=d.now();a.unstable_now=function(){return d.now()-p}}var y=[],m=[],v=1,b=null,E=3,_=!1,C=!1,N=!1,L=!1,H=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function Y(R){for(var k=s(m);k!==null;){if(k.callback===null)o(m);else if(k.startTime<=R)o(m),k.sortIndex=k.expirationTime,r(y,k);else break;k=s(m)}}function ne(R){if(N=!1,Y(R),!C)if(s(y)!==null)C=!0,oe||(oe=!0,Te());else{var k=s(m);k!==null&&Ne(ne,k.startTime-R)}}var oe=!1,K=-1,W=5,xe=-1;function te(){return L?!0:!(a.unstable_now()-xe<W)}function ve(){if(L=!1,oe){var R=a.unstable_now();xe=R;var k=!0;try{e:{C=!1,N&&(N=!1,X(K),K=-1),_=!0;var Z=E;try{t:{for(Y(R),b=s(y);b!==null&&!(b.expirationTime>R&&te());){var le=b.callback;if(typeof le=="function"){b.callback=null,E=b.priorityLevel;var me=le(b.expirationTime<=R);if(R=a.unstable_now(),typeof me=="function"){b.callback=me,Y(R),k=!0;break t}b===s(y)&&o(y),Y(R)}else o(y);b=s(y)}if(b!==null)k=!0;else{var A=s(m);A!==null&&Ne(ne,A.startTime-R),k=!1}}break e}finally{b=null,E=Z,_=!1}k=void 0}}finally{k?Te():oe=!1}}}var Te;if(typeof G=="function")Te=function(){G(ve)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ke=rt.port2;rt.port1.onmessage=ve,Te=function(){ke.postMessage(null)}}else Te=function(){H(ve,0)};function Ne(R,k){K=H(function(){R(a.unstable_now())},k)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(R){R.callback=null},a.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<R?Math.floor(1e3/R):5},a.unstable_getCurrentPriorityLevel=function(){return E},a.unstable_next=function(R){switch(E){case 1:case 2:case 3:var k=3;break;default:k=E}var Z=E;E=k;try{return R()}finally{E=Z}},a.unstable_requestPaint=function(){L=!0},a.unstable_runWithPriority=function(R,k){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var Z=E;E=R;try{return k()}finally{E=Z}},a.unstable_scheduleCallback=function(R,k,Z){var le=a.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?le+Z:le):Z=le,R){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=Z+me,R={id:v++,callback:k,priorityLevel:R,startTime:Z,expirationTime:me,sortIndex:-1},Z>le?(R.sortIndex=Z,r(m,R),s(y)===null&&R===s(m)&&(N?(X(K),K=-1):N=!0,Ne(ne,Z-le))):(R.sortIndex=me,r(y,R),C||_||(C=!0,oe||(oe=!0,Te()))),R},a.unstable_shouldYield=te,a.unstable_wrapCallback=function(R){var k=E;return function(){var Z=E;E=k;try{return R.apply(this,arguments)}finally{E=Z}}}})(ku)),ku}var mg;function $1(){return mg||(mg=1,Gu.exports=W1()),Gu.exports}var Xu={exports:{}},it={};var gg;function eb(){if(gg)return it;gg=1;var a=Vc();function r(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},c=Symbol.for("react.portal");function h(y,m,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:y,containerInfo:m,implementation:v}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,it.createPortal=function(y,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return h(y,m,null,v)},it.flushSync=function(y){var m=d.T,v=o.p;try{if(d.T=null,o.p=2,y)return y()}finally{d.T=m,o.p=v,o.d.f()}},it.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(y,m))},it.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},it.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var v=m.as,b=p(v,m.crossOrigin),E=typeof m.integrity=="string"?m.integrity:void 0,_=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?o.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:E,fetchPriority:_}):v==="script"&&o.d.X(y,{crossOrigin:b,integrity:E,fetchPriority:_,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},it.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=p(m.as,m.crossOrigin);o.d.M(y,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(y)},it.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,b=p(v,m.crossOrigin);o.d.L(y,v,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},it.preloadModule=function(y,m){if(typeof y=="string")if(m){var v=p(m.as,m.crossOrigin);o.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(y)},it.requestFormReset=function(y){o.d.r(y)},it.unstable_batchedUpdates=function(y,m){return y(m)},it.useFormState=function(y,m,v){return d.H.useFormState(y,m,v)},it.useFormStatus=function(){return d.H.useHostTransitionStatus()},it.version="19.2.8",it}var pg;function tb(){if(pg)return Xu.exports;pg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Xu.exports=eb(),Xu.exports}var yg;function nb(){if(yg)return cr;yg=1;var a=$1(),r=Vc(),s=tb();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(h(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var l=n.return;if(l===null)break;var u=l.alternate;if(u===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===n)return y(l),e;if(u===i)return y(l),t;u=u.sibling}throw Error(o(188))}if(n.return!==i.return)n=l,i=u;else{for(var f=!1,g=l.child;g;){if(g===n){f=!0,n=l,i=u;break}if(g===i){f=!0,i=l,n=u;break}g=g.sibling}if(!f){for(g=u.child;g;){if(g===n){f=!0,n=u,i=l;break}if(g===i){f=!0,i=u,n=l;break}g=g.sibling}if(!f)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,E=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),G=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function Te(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function ke(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case H:return"Profiler";case L:return"StrictMode";case ne:return"Suspense";case oe:return"SuspenseList";case xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case G:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case Y:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}var Ne=Array.isArray,R=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},le=[],me=-1;function A(e){return{current:e}}function B(e){0>me||(e.current=le[me],le[me]=null,me--)}function q(e,t){me++,le[me]=e.current,e.current=t}var F=A(null),ie=A(null),ue=A(null),Se=A(null);function lt(e,t){switch(q(ue,t),q(ie,e),q(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vm(t),e=Om(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(F),q(F,e)}function He(){B(F),B(ie),B(ue)}function pi(e){e.memoizedState!==null&&q(Se,e);var t=F.current,n=Om(t,e.type);t!==n&&(q(ie,e),q(F,n))}function wr(e){ie.current===e&&(B(F),B(ie)),Se.current===e&&(B(Se),rr._currentValue=Z)}var vs,of;function In(e){if(vs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vs=t&&t[1]||"",of=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vs+e+of}var bs=!1;function Ss(e,t){if(!e||bs)return"";bs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(M){var D=M}Reflect.construct(e,[],j)}else{try{j.call()}catch(M){D=M}e.call(j.prototype)}}else{try{throw Error()}catch(M){D=M}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(M){if(M&&D&&typeof M.stack=="string")return[M.stack,D.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),f=u[0],g=u[1];if(f&&g){var S=f.split(`
`),z=g.split(`
`);for(l=i=0;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;for(;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;if(i===S.length||l===z.length)for(i=S.length-1,l=z.length-1;1<=i&&0<=l&&S[i]!==z[l];)l--;for(;1<=i&&0<=l;i--,l--)if(S[i]!==z[l]){if(i!==1||l!==1)do if(i--,l--,0>l||S[i]!==z[l]){var V=`
`+S[i].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=i&&0<=l);break}}}finally{bs=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?In(n):""}function z0(e,t){switch(e.tag){case 26:case 27:case 5:return In(e.type);case 16:return In("Lazy");case 13:return e.child!==t&&t!==null?In("Suspense Fallback"):In("Suspense");case 19:return In("SuspenseList");case 0:case 15:return Ss(e.type,!1);case 11:return Ss(e.type.render,!1);case 1:return Ss(e.type,!0);case 31:return In("Activity");default:return""}}function uf(e){try{var t="",n=null;do t+=z0(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ts=Object.prototype.hasOwnProperty,As=a.unstable_scheduleCallback,Es=a.unstable_cancelCallback,D0=a.unstable_shouldYield,M0=a.unstable_requestPaint,yt=a.unstable_now,C0=a.unstable_getCurrentPriorityLevel,cf=a.unstable_ImmediatePriority,ff=a.unstable_UserBlockingPriority,zr=a.unstable_NormalPriority,U0=a.unstable_LowPriority,df=a.unstable_IdlePriority,R0=a.log,V0=a.unstable_setDisableYieldValue,yi=null,vt=null;function An(e){if(typeof R0=="function"&&V0(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(yi,e)}catch{}}var bt=Math.clz32?Math.clz32:B0,O0=Math.log,j0=Math.LN2;function B0(e){return e>>>=0,e===0?32:31-(O0(e)/j0|0)|0}var Dr=256,Mr=262144,Cr=4194304;function Wn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ur(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,u=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var g=i&134217727;return g!==0?(i=g&~u,i!==0?l=Wn(i):(f&=g,f!==0?l=Wn(f):n||(n=g&~e,n!==0&&(l=Wn(n))))):(g=i&~u,g!==0?l=Wn(g):f!==0?l=Wn(f):n||(n=i&~e,n!==0&&(l=Wn(n)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:l}function vi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hf(){var e=Cr;return Cr<<=1,(Cr&62914560)===0&&(Cr=4194304),e}function xs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function N0(e,t,n,i,l,u){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,S=e.expirationTimes,z=e.hiddenUpdates;for(n=f&~n;0<n;){var V=31-bt(n),j=1<<V;g[V]=0,S[V]=-1;var D=z[V];if(D!==null)for(z[V]=null,V=0;V<D.length;V++){var M=D[V];M!==null&&(M.lane&=-536870913)}n&=~j}i!==0&&mf(e,i,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(f&~t))}function mf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-bt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function gf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-bt(n),l=1<<i;l&t|e[i]&t&&(e[i]|=t),n&=~l}}function pf(e,t){var n=t&-t;return n=(n&42)!==0?1:ws(n),(n&(e.suspendedLanes|t))!==0?0:n}function ws(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function yf(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:ng(e.type))}function vf(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var En=Math.random().toString(36).slice(2),Ie="__reactFiber$"+En,ct="__reactProps$"+En,Aa="__reactContainer$"+En,Ds="__reactEvents$"+En,H0="__reactListeners$"+En,L0="__reactHandles$"+En,bf="__reactResources$"+En,Si="__reactMarker$"+En;function Ms(e){delete e[Ie],delete e[ct],delete e[Ds],delete e[H0],delete e[L0]}function Ea(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Aa]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gm(e);e!==null;){if(n=e[Ie])return n;e=Gm(e)}return t}e=n,n=e.parentNode}return null}function xa(e){if(e=e[Ie]||e[Aa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ti(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function wa(e){var t=e[bf];return t||(t=e[bf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Fe(e){e[Si]=!0}var Sf=new Set,Tf={};function $n(e,t){za(e,t),za(e+"Capture",t)}function za(e,t){for(Tf[e]=t,e=0;e<t.length;e++)Sf.add(t[e])}var G0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Af={},Ef={};function k0(e){return Ts.call(Ef,e)?!0:Ts.call(Af,e)?!1:G0.test(e)?Ef[e]=!0:(Af[e]=!0,!1)}function Rr(e,t,n){if(k0(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Vr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function en(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function X0(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,u=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){n=""+f,u.call(this,f)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cs(e){if(!e._valueTracker){var t=xf(e)?"checked":"value";e._valueTracker=X0(e,t,""+e[t])}}function wf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=xf(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var q0=/[\n"\\]/g;function Ct(e){return e.replace(q0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Us(e,t,n,i,l,u,f,g){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Mt(t)):e.value!==""+Mt(t)&&(e.value=""+Mt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Rs(e,f,Mt(t)):n!=null?Rs(e,f,Mt(n)):i!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Mt(g):e.removeAttribute("name")}function zf(e,t,n,i,l,u,f,g){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Cs(e);return}n=n!=null?""+Mt(n):"",t=t!=null?""+Mt(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=g?e.checked:!!i,e.defaultChecked=!!i,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),Cs(e)}function Rs(e,t,n){t==="number"&&Or(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Da(e,t,n,i){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Mt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Df(e,t,n){if(t!=null&&(t=""+Mt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Mt(n):""}function Mf(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(Ne(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Mt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Cs(e)}function Ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Y0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cf(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Y0.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Uf(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&n[l]!==i&&Cf(e,l,i)}else for(var u in t)t.hasOwnProperty(u)&&Cf(e,u,t[u])}function Vs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Z0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Q0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jr(e){return Q0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function tn(){}var Os=null;function js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ca=null,Ua=null;function Rf(e){var t=xa(e);if(t&&(e=t.stateNode)){var n=e[ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(Us(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ct(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var l=i[ct]||null;if(!l)throw Error(o(90));Us(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&wf(i)}break e;case"textarea":Df(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Da(e,!!n.multiple,t,!1)}}}var Bs=!1;function Vf(e,t,n){if(Bs)return e(t,n);Bs=!0;try{var i=e(t);return i}finally{if(Bs=!1,(Ca!==null||Ua!==null)&&(Tl(),Ca&&(t=Ca,e=Ua,Ua=Ca=null,Rf(t),e)))for(t=0;t<e.length;t++)Rf(e[t])}}function Ai(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ct]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_s=!1;if(nn)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){_s=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{_s=!1}var xn=null,Ns=null,Br=null;function Of(){if(Br)return Br;var e,t=Ns,n=t.length,i,l="value"in xn?xn.value:xn.textContent,u=l.length;for(e=0;e<n&&t[e]===l[e];e++);var f=n-e;for(i=1;i<=f&&t[n-i]===l[u-i];i++);return Br=l.slice(e,1<i?1-i:void 0)}function _r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function jf(){return!1}function ft(e){function t(n,i,l,u,f){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(u):u[g]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Nr:jf,this.isPropagationStopped=jf,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),t}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hr=ft(ea),xi=b({},ea,{view:0,detail:0}),K0=ft(xi),Hs,Ls,wi,Lr=b({},xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ks,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wi&&(wi&&e.type==="mousemove"?(Hs=e.screenX-wi.screenX,Ls=e.screenY-wi.screenY):Ls=Hs=0,wi=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Ls}}),Bf=ft(Lr),P0=b({},Lr,{dataTransfer:0}),F0=ft(P0),J0=b({},xi,{relatedTarget:0}),Gs=ft(J0),I0=b({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),W0=ft(I0),$0=b({},ea,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ev=ft($0),tv=b({},ea,{data:0}),_f=ft(tv),nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=iv[e])?!!t[e]:!1}function ks(){return rv}var lv=b({},xi,{key:function(e){if(e.key){var t=nv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?av[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ks,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sv=ft(lv),ov=b({},Lr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=ft(ov),uv=b({},xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ks}),cv=ft(uv),fv=b({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),dv=ft(fv),hv=b({},Lr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mv=ft(hv),gv=b({},ea,{newState:0,oldState:0}),pv=ft(gv),yv=[9,13,27,32],Xs=nn&&"CompositionEvent"in window,zi=null;nn&&"documentMode"in document&&(zi=document.documentMode);var vv=nn&&"TextEvent"in window&&!zi,Hf=nn&&(!Xs||zi&&8<zi&&11>=zi),Lf=" ",Gf=!1;function kf(e,t){switch(e){case"keyup":return yv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ra=!1;function bv(e,t){switch(e){case"compositionend":return Xf(t);case"keypress":return t.which!==32?null:(Gf=!0,Lf);case"textInput":return e=t.data,e===Lf&&Gf?null:e;default:return null}}function Sv(e,t){if(Ra)return e==="compositionend"||!Xs&&kf(e,t)?(e=Of(),Br=Ns=xn=null,Ra=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hf&&t.locale!=="ko"?null:t.data;default:return null}}var Tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tv[e.type]:t==="textarea"}function Yf(e,t,n,i){Ca?Ua?Ua.push(i):Ua=[i]:Ca=i,t=Ml(t,"onChange"),0<t.length&&(n=new Hr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Di=null,Mi=null;function Av(e){zm(e,0)}function Gr(e){var t=Ti(e);if(wf(t))return e}function Zf(e,t){if(e==="change")return t}var Qf=!1;if(nn){var qs;if(nn){var Ys="oninput"in document;if(!Ys){var Kf=document.createElement("div");Kf.setAttribute("oninput","return;"),Ys=typeof Kf.oninput=="function"}qs=Ys}else qs=!1;Qf=qs&&(!document.documentMode||9<document.documentMode)}function Pf(){Di&&(Di.detachEvent("onpropertychange",Ff),Mi=Di=null)}function Ff(e){if(e.propertyName==="value"&&Gr(Mi)){var t=[];Yf(t,Mi,e,js(e)),Vf(Av,t)}}function Ev(e,t,n){e==="focusin"?(Pf(),Di=t,Mi=n,Di.attachEvent("onpropertychange",Ff)):e==="focusout"&&Pf()}function xv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gr(Mi)}function wv(e,t){if(e==="click")return Gr(t)}function zv(e,t){if(e==="input"||e==="change")return Gr(t)}function Dv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:Dv;function Ci(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!Ts.call(t,l)||!St(e[l],t[l]))return!1}return!0}function Jf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function If(e,t){var n=Jf(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jf(n)}}function Wf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $f(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Or(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Or(e.document)}return t}function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Mv=nn&&"documentMode"in document&&11>=document.documentMode,Va=null,Qs=null,Ui=null,Ks=!1;function ed(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ks||Va==null||Va!==Or(i)||(i=Va,"selectionStart"in i&&Zs(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ui&&Ci(Ui,i)||(Ui=i,i=Ml(Qs,"onSelect"),0<i.length&&(t=new Hr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Va)))}function ta(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Oa={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionrun:ta("Transition","TransitionRun"),transitionstart:ta("Transition","TransitionStart"),transitioncancel:ta("Transition","TransitionCancel"),transitionend:ta("Transition","TransitionEnd")},Ps={},td={};nn&&(td=document.createElement("div").style,"AnimationEvent"in window||(delete Oa.animationend.animation,delete Oa.animationiteration.animation,delete Oa.animationstart.animation),"TransitionEvent"in window||delete Oa.transitionend.transition);function na(e){if(Ps[e])return Ps[e];if(!Oa[e])return e;var t=Oa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in td)return Ps[e]=t[n];return e}var nd=na("animationend"),ad=na("animationiteration"),id=na("animationstart"),Cv=na("transitionrun"),Uv=na("transitionstart"),Rv=na("transitioncancel"),rd=na("transitionend"),ld=new Map,Fs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fs.push("scrollEnd");function Gt(e,t){ld.set(e,t),$n(t,[e])}var kr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ut=[],ja=0,Js=0;function Xr(){for(var e=ja,t=Js=ja=0;t<e;){var n=Ut[t];Ut[t++]=null;var i=Ut[t];Ut[t++]=null;var l=Ut[t];Ut[t++]=null;var u=Ut[t];if(Ut[t++]=null,i!==null&&l!==null){var f=i.pending;f===null?l.next=l:(l.next=f.next,f.next=l),i.pending=l}u!==0&&sd(n,l,u)}}function qr(e,t,n,i){Ut[ja++]=e,Ut[ja++]=t,Ut[ja++]=n,Ut[ja++]=i,Js|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Is(e,t,n,i){return qr(e,t,n,i),Yr(e)}function aa(e,t){return qr(e,null,null,t),Yr(e)}function sd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var l=!1,u=e.return;u!==null;)u.childLanes|=n,i=u.alternate,i!==null&&(i.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-bt(n),e=u.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=n|536870912),u):null}function Yr(e){if(50<Wi)throw Wi=0,su=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ba={};function Vv(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,i){return new Vv(e,t,n,i)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function an(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function od(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Zr(e,t,n,i,l,u){var f=0;if(i=e,typeof e=="function")Ws(e)&&(f=1);else if(typeof e=="string")f=N1(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xe:return e=Tt(31,n,t,l),e.elementType=xe,e.lanes=u,e;case N:return ia(n.children,l,u,t);case L:f=8,l|=24;break;case H:return e=Tt(12,n,t,l|2),e.elementType=H,e.lanes=u,e;case ne:return e=Tt(13,n,t,l),e.elementType=ne,e.lanes=u,e;case oe:return e=Tt(19,n,t,l),e.elementType=oe,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:f=10;break e;case X:f=9;break e;case Y:f=11;break e;case K:f=14;break e;case W:f=16,i=null;break e}f=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Tt(f,n,t,l),t.elementType=e,t.type=i,t.lanes=u,t}function ia(e,t,n,i){return e=Tt(7,e,i,t),e.lanes=n,e}function $s(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function ud(e){var t=Tt(18,null,null,0);return t.stateNode=e,t}function eo(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var cd=new WeakMap;function Rt(e,t){if(typeof e=="object"&&e!==null){var n=cd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:uf(t)},cd.set(e,t),t)}return{value:e,source:t,stack:uf(t)}}var _a=[],Na=0,Qr=null,Ri=0,Vt=[],Ot=0,wn=null,Qt=1,Kt="";function rn(e,t){_a[Na++]=Ri,_a[Na++]=Qr,Qr=e,Ri=t}function fd(e,t,n){Vt[Ot++]=Qt,Vt[Ot++]=Kt,Vt[Ot++]=wn,wn=e;var i=Qt;e=Kt;var l=32-bt(i)-1;i&=~(1<<l),n+=1;var u=32-bt(t)+l;if(30<u){var f=l-l%5;u=(i&(1<<f)-1).toString(32),i>>=f,l-=f,Qt=1<<32-bt(t)+l|n<<l|i,Kt=u+e}else Qt=1<<u|n<<l|i,Kt=e}function to(e){e.return!==null&&(rn(e,1),fd(e,1,0))}function no(e){for(;e===Qr;)Qr=_a[--Na],_a[Na]=null,Ri=_a[--Na],_a[Na]=null;for(;e===wn;)wn=Vt[--Ot],Vt[Ot]=null,Kt=Vt[--Ot],Vt[Ot]=null,Qt=Vt[--Ot],Vt[Ot]=null}function dd(e,t){Vt[Ot++]=Qt,Vt[Ot++]=Kt,Vt[Ot++]=wn,Qt=t.id,Kt=t.overflow,wn=e}var We=null,Re=null,ge=!1,zn=null,jt=!1,ao=Error(o(519));function Dn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vi(Rt(t,e)),ao}function hd(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Ie]=e,t[ct]=i,n){case"dialog":fe("cancel",t),fe("close",t);break;case"iframe":case"object":case"embed":fe("load",t);break;case"video":case"audio":for(n=0;n<er.length;n++)fe(er[n],t);break;case"source":fe("error",t);break;case"img":case"image":case"link":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"input":fe("invalid",t),zf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":fe("invalid",t);break;case"textarea":fe("invalid",t),Mf(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Um(t.textContent,n)?(i.popover!=null&&(fe("beforetoggle",t),fe("toggle",t)),i.onScroll!=null&&fe("scroll",t),i.onScrollEnd!=null&&fe("scrollend",t),i.onClick!=null&&(t.onclick=tn),t=!0):t=!1,t||Dn(e,!0)}function md(e){for(We=e.return;We;)switch(We.tag){case 5:case 31:case 13:jt=!1;return;case 27:case 3:jt=!0;return;default:We=We.return}}function Ha(e){if(e!==We)return!1;if(!ge)return md(e),ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Au(e.type,e.memoizedProps)),n=!n),n&&Re&&Dn(e),md(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Re=Lm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Re=Lm(e)}else t===27?(t=Re,kn(e.type)?(e=Du,Du=null,Re=e):Re=t):Re=We?_t(e.stateNode.nextSibling):null;return!0}function ra(){Re=We=null,ge=!1}function io(){var e=zn;return e!==null&&(gt===null?gt=e:gt.push.apply(gt,e),zn=null),e}function Vi(e){zn===null?zn=[e]:zn.push(e)}var ro=A(null),la=null,ln=null;function Mn(e,t,n){q(ro,t._currentValue),t._currentValue=n}function sn(e){e._currentValue=ro.current,B(ro)}function lo(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function so(e,t,n,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var f=l.child;u=u.firstContext;e:for(;u!==null;){var g=u;u=l;for(var S=0;S<t.length;S++)if(g.context===t[S]){u.lanes|=n,g=u.alternate,g!==null&&(g.lanes|=n),lo(u.return,n,e),i||(f=null);break e}u=g.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(o(341));f.lanes|=n,u=f.alternate,u!==null&&(u.lanes|=n),lo(f,n,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function La(e,t,n,i){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(o(387));if(f=f.memoizedProps,f!==null){var g=l.type;St(l.pendingProps.value,f.value)||(e!==null?e.push(g):e=[g])}}else if(l===Se.current){if(f=l.alternate,f===null)throw Error(o(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(rr):e=[rr])}l=l.return}e!==null&&so(t,e,n,i),t.flags|=262144}function Kr(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){la=e,ln=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return gd(la,e)}function Pr(e,t){return la===null&&sa(e),gd(e,t)}function gd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ln===null){if(e===null)throw Error(o(308));ln=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ln=ln.next=t;return n}var Ov=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},jv=a.unstable_scheduleCallback,Bv=a.unstable_NormalPriority,Xe={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oo(){return{controller:new Ov,data:new Map,refCount:0}}function Oi(e){e.refCount--,e.refCount===0&&jv(Bv,function(){e.controller.abort()})}var ji=null,uo=0,Ga=0,ka=null;function _v(e,t){if(ji===null){var n=ji=[];uo=0,Ga=hu(),ka={status:"pending",value:void 0,then:function(i){n.push(i)}}}return uo++,t.then(pd,pd),t}function pd(){if(--uo===0&&ji!==null){ka!==null&&(ka.status="fulfilled");var e=ji;ji=null,Ga=0,ka=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Nv(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var yd=R.S;R.S=function(e,t){em=yt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&_v(e,t),yd!==null&&yd(e,t)};var oa=A(null);function co(){var e=oa.current;return e!==null?e:Me.pooledCache}function Fr(e,t){t===null?q(oa,oa.current):q(oa,t.pool)}function vd(){var e=co();return e===null?null:{parent:Xe._currentValue,pool:e}}var Xa=Error(o(460)),fo=Error(o(474)),Jr=Error(o(542)),Ir={then:function(){}};function bd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(tn,tn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ad(e),e;default:if(typeof t.status=="string")t.then(tn,tn);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ad(e),e}throw ca=t,Xa}}function ua(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ca=n,Xa):n}}var ca=null;function Td(){if(ca===null)throw Error(o(459));var e=ca;return ca=null,e}function Ad(e){if(e===Xa||e===Jr)throw Error(o(483))}var qa=null,Bi=0;function Wr(e){var t=Bi;return Bi+=1,qa===null&&(qa=[]),Sd(qa,e,t)}function _i(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function $r(e,t){throw t.$$typeof===E?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ed(e){function t(x,T){if(e){var w=x.deletions;w===null?(x.deletions=[T],x.flags|=16):w.push(T)}}function n(x,T){if(!e)return null;for(;T!==null;)t(x,T),T=T.sibling;return null}function i(x){for(var T=new Map;x!==null;)x.key!==null?T.set(x.key,x):T.set(x.index,x),x=x.sibling;return T}function l(x,T){return x=an(x,T),x.index=0,x.sibling=null,x}function u(x,T,w){return x.index=w,e?(w=x.alternate,w!==null?(w=w.index,w<T?(x.flags|=67108866,T):w):(x.flags|=67108866,T)):(x.flags|=1048576,T)}function f(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function g(x,T,w,O){return T===null||T.tag!==6?(T=$s(w,x.mode,O),T.return=x,T):(T=l(T,w),T.return=x,T)}function S(x,T,w,O){var $=w.type;return $===N?V(x,T,w.props.children,O,w.key):T!==null&&(T.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===W&&ua($)===T.type)?(T=l(T,w.props),_i(T,w),T.return=x,T):(T=Zr(w.type,w.key,w.props,null,x.mode,O),_i(T,w),T.return=x,T)}function z(x,T,w,O){return T===null||T.tag!==4||T.stateNode.containerInfo!==w.containerInfo||T.stateNode.implementation!==w.implementation?(T=eo(w,x.mode,O),T.return=x,T):(T=l(T,w.children||[]),T.return=x,T)}function V(x,T,w,O,$){return T===null||T.tag!==7?(T=ia(w,x.mode,O,$),T.return=x,T):(T=l(T,w),T.return=x,T)}function j(x,T,w){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=$s(""+T,x.mode,w),T.return=x,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case _:return w=Zr(T.type,T.key,T.props,null,x.mode,w),_i(w,T),w.return=x,w;case C:return T=eo(T,x.mode,w),T.return=x,T;case W:return T=ua(T),j(x,T,w)}if(Ne(T)||Te(T))return T=ia(T,x.mode,w,null),T.return=x,T;if(typeof T.then=="function")return j(x,Wr(T),w);if(T.$$typeof===G)return j(x,Pr(x,T),w);$r(x,T)}return null}function D(x,T,w,O){var $=T!==null?T.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return $!==null?null:g(x,T,""+w,O);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case _:return w.key===$?S(x,T,w,O):null;case C:return w.key===$?z(x,T,w,O):null;case W:return w=ua(w),D(x,T,w,O)}if(Ne(w)||Te(w))return $!==null?null:V(x,T,w,O,null);if(typeof w.then=="function")return D(x,T,Wr(w),O);if(w.$$typeof===G)return D(x,T,Pr(x,w),O);$r(x,w)}return null}function M(x,T,w,O,$){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return x=x.get(w)||null,g(T,x,""+O,$);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case _:return x=x.get(O.key===null?w:O.key)||null,S(T,x,O,$);case C:return x=x.get(O.key===null?w:O.key)||null,z(T,x,O,$);case W:return O=ua(O),M(x,T,w,O,$)}if(Ne(O)||Te(O))return x=x.get(w)||null,V(T,x,O,$,null);if(typeof O.then=="function")return M(x,T,w,Wr(O),$);if(O.$$typeof===G)return M(x,T,w,Pr(T,O),$);$r(T,O)}return null}function Q(x,T,w,O){for(var $=null,pe=null,J=T,se=T=0,he=null;J!==null&&se<w.length;se++){J.index>se?(he=J,J=null):he=J.sibling;var ye=D(x,J,w[se],O);if(ye===null){J===null&&(J=he);break}e&&J&&ye.alternate===null&&t(x,J),T=u(ye,T,se),pe===null?$=ye:pe.sibling=ye,pe=ye,J=he}if(se===w.length)return n(x,J),ge&&rn(x,se),$;if(J===null){for(;se<w.length;se++)J=j(x,w[se],O),J!==null&&(T=u(J,T,se),pe===null?$=J:pe.sibling=J,pe=J);return ge&&rn(x,se),$}for(J=i(J);se<w.length;se++)he=M(J,x,se,w[se],O),he!==null&&(e&&he.alternate!==null&&J.delete(he.key===null?se:he.key),T=u(he,T,se),pe===null?$=he:pe.sibling=he,pe=he);return e&&J.forEach(function(Qn){return t(x,Qn)}),ge&&rn(x,se),$}function ee(x,T,w,O){if(w==null)throw Error(o(151));for(var $=null,pe=null,J=T,se=T=0,he=null,ye=w.next();J!==null&&!ye.done;se++,ye=w.next()){J.index>se?(he=J,J=null):he=J.sibling;var Qn=D(x,J,ye.value,O);if(Qn===null){J===null&&(J=he);break}e&&J&&Qn.alternate===null&&t(x,J),T=u(Qn,T,se),pe===null?$=Qn:pe.sibling=Qn,pe=Qn,J=he}if(ye.done)return n(x,J),ge&&rn(x,se),$;if(J===null){for(;!ye.done;se++,ye=w.next())ye=j(x,ye.value,O),ye!==null&&(T=u(ye,T,se),pe===null?$=ye:pe.sibling=ye,pe=ye);return ge&&rn(x,se),$}for(J=i(J);!ye.done;se++,ye=w.next())ye=M(J,x,se,ye.value,O),ye!==null&&(e&&ye.alternate!==null&&J.delete(ye.key===null?se:ye.key),T=u(ye,T,se),pe===null?$=ye:pe.sibling=ye,pe=ye);return e&&J.forEach(function(P1){return t(x,P1)}),ge&&rn(x,se),$}function De(x,T,w,O){if(typeof w=="object"&&w!==null&&w.type===N&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case _:e:{for(var $=w.key;T!==null;){if(T.key===$){if($=w.type,$===N){if(T.tag===7){n(x,T.sibling),O=l(T,w.props.children),O.return=x,x=O;break e}}else if(T.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===W&&ua($)===T.type){n(x,T.sibling),O=l(T,w.props),_i(O,w),O.return=x,x=O;break e}n(x,T);break}else t(x,T);T=T.sibling}w.type===N?(O=ia(w.props.children,x.mode,O,w.key),O.return=x,x=O):(O=Zr(w.type,w.key,w.props,null,x.mode,O),_i(O,w),O.return=x,x=O)}return f(x);case C:e:{for($=w.key;T!==null;){if(T.key===$)if(T.tag===4&&T.stateNode.containerInfo===w.containerInfo&&T.stateNode.implementation===w.implementation){n(x,T.sibling),O=l(T,w.children||[]),O.return=x,x=O;break e}else{n(x,T);break}else t(x,T);T=T.sibling}O=eo(w,x.mode,O),O.return=x,x=O}return f(x);case W:return w=ua(w),De(x,T,w,O)}if(Ne(w))return Q(x,T,w,O);if(Te(w)){if($=Te(w),typeof $!="function")throw Error(o(150));return w=$.call(w),ee(x,T,w,O)}if(typeof w.then=="function")return De(x,T,Wr(w),O);if(w.$$typeof===G)return De(x,T,Pr(x,w),O);$r(x,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,T!==null&&T.tag===6?(n(x,T.sibling),O=l(T,w),O.return=x,x=O):(n(x,T),O=$s(w,x.mode,O),O.return=x,x=O),f(x)):n(x,T)}return function(x,T,w,O){try{Bi=0;var $=De(x,T,w,O);return qa=null,$}catch(J){if(J===Xa||J===Jr)throw J;var pe=Tt(29,J,null,x.mode);return pe.lanes=O,pe.return=x,pe}}}var fa=Ed(!0),xd=Ed(!1),Cn=!1;function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Un(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Rn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(be&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=Yr(e),sd(e,null,n),t}return qr(e,i,t,n),Yr(e)}function Ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,gf(e,n)}}function go(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?l=u=f:u=u.next=f,n=n.next}while(n!==null);u===null?l=u=t:u=u.next=t}else l=u=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var po=!1;function Hi(){if(po){var e=ka;if(e!==null)throw e}}function Li(e,t,n,i){po=!1;var l=e.updateQueue;Cn=!1;var u=l.firstBaseUpdate,f=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var S=g,z=S.next;S.next=null,f===null?u=z:f.next=z,f=S;var V=e.alternate;V!==null&&(V=V.updateQueue,g=V.lastBaseUpdate,g!==f&&(g===null?V.firstBaseUpdate=z:g.next=z,V.lastBaseUpdate=S))}if(u!==null){var j=l.baseState;f=0,V=z=S=null,g=u;do{var D=g.lane&-536870913,M=D!==g.lane;if(M?(de&D)===D:(i&D)===D){D!==0&&D===Ga&&(po=!0),V!==null&&(V=V.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var Q=e,ee=g;D=t;var De=n;switch(ee.tag){case 1:if(Q=ee.payload,typeof Q=="function"){j=Q.call(De,j,D);break e}j=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=ee.payload,D=typeof Q=="function"?Q.call(De,j,D):Q,D==null)break e;j=b({},j,D);break e;case 2:Cn=!0}}D=g.callback,D!==null&&(e.flags|=64,M&&(e.flags|=8192),M=l.callbacks,M===null?l.callbacks=[D]:M.push(D))}else M={lane:D,tag:g.tag,payload:g.payload,callback:g.callback,next:null},V===null?(z=V=M,S=j):V=V.next=M,f|=D;if(g=g.next,g===null){if(g=l.shared.pending,g===null)break;M=g,g=M.next,M.next=null,l.lastBaseUpdate=M,l.shared.pending=null}}while(!0);V===null&&(S=j),l.baseState=S,l.firstBaseUpdate=z,l.lastBaseUpdate=V,u===null&&(l.shared.lanes=0),_n|=f,e.lanes=f,e.memoizedState=j}}function wd(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function zd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)wd(n[e],t)}var Ya=A(null),el=A(0);function Dd(e,t){e=pn,q(el,e),q(Ya,t),pn=e|t.baseLanes}function yo(){q(el,pn),q(Ya,Ya.current)}function vo(){pn=el.current,B(Ya),B(el)}var At=A(null),Bt=null;function Vn(e){var t=e.alternate;q(Le,Le.current&1),q(At,e),Bt===null&&(t===null||Ya.current!==null||t.memoizedState!==null)&&(Bt=e)}function bo(e){q(Le,Le.current),q(At,e),Bt===null&&(Bt=e)}function Md(e){e.tag===22?(q(Le,Le.current),q(At,e),Bt===null&&(Bt=e)):On()}function On(){q(Le,Le.current),q(At,At.current)}function Et(e){B(At),Bt===e&&(Bt=null),B(Le)}var Le=A(0);function tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||wu(n)||zu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var on=0,re=null,we=null,qe=null,nl=!1,Za=!1,da=!1,al=0,Gi=0,Qa=null,Hv=0;function je(){throw Error(o(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function To(e,t,n,i,l,u){return on=u,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?fh:_o,da=!1,u=n(i,l),da=!1,Za&&(u=Ud(t,n,i,l)),Cd(e),u}function Cd(e){R.H=qi;var t=we!==null&&we.next!==null;if(on=0,qe=we=re=null,nl=!1,Gi=0,Qa=null,t)throw Error(o(300));e===null||Ye||(e=e.dependencies,e!==null&&Kr(e)&&(Ye=!0))}function Ud(e,t,n,i){re=e;var l=0;do{if(Za&&(Qa=null),Gi=0,Za=!1,25<=l)throw Error(o(301));if(l+=1,qe=we=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}R.H=dh,u=t(n,i)}while(Za);return u}function Lv(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?ki(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(re.flags|=1024),t}function Ao(){var e=al!==0;return al=0,e}function Eo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xo(e){if(nl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}nl=!1}on=0,qe=we=re=null,Za=!1,Gi=al=0,Qa=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?re.memoizedState=qe=e:qe=qe.next=e,qe}function Ge(){if(we===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=qe===null?re.memoizedState:qe.next;if(t!==null)qe=t,we=e;else{if(e===null)throw re.alternate===null?Error(o(467)):Error(o(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},qe===null?re.memoizedState=qe=e:qe=qe.next=e}return qe}function il(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ki(e){var t=Gi;return Gi+=1,Qa===null&&(Qa=[]),e=Sd(Qa,e,t),t=re,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?fh:_o),e}function rl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ki(e);if(e.$$typeof===G)return $e(e)}throw Error(o(438,String(e)))}function wo(e){var t=null,n=re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=re.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=il(),re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=te;return t.index++,n}function un(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=Ge();return zo(t,we,e)}function zo(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var l=e.baseQueue,u=i.pending;if(u!==null){if(l!==null){var f=l.next;l.next=u.next,u.next=f}t.baseQueue=l=u,i.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var g=f=null,S=null,z=t,V=!1;do{var j=z.lane&-536870913;if(j!==z.lane?(de&j)===j:(on&j)===j){var D=z.revertLane;if(D===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),j===Ga&&(V=!0);else if((on&D)===D){z=z.next,D===Ga&&(V=!0);continue}else j={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(g=S=j,f=u):S=S.next=j,re.lanes|=D,_n|=D;j=z.action,da&&n(u,j),u=z.hasEagerState?z.eagerState:n(u,j)}else D={lane:j,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(g=S=D,f=u):S=S.next=D,re.lanes|=j,_n|=j;z=z.next}while(z!==null&&z!==t);if(S===null?f=u:S.next=g,!St(u,e.memoizedState)&&(Ye=!0,V&&(n=ka,n!==null)))throw n;e.memoizedState=u,e.baseState=f,e.baseQueue=S,i.lastRenderedState=u}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Do(e){var t=Ge(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,l=n.pending,u=t.memoizedState;if(l!==null){n.pending=null;var f=l=l.next;do u=e(u,f.action),f=f.next;while(f!==l);St(u,t.memoizedState)||(Ye=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,i]}function Rd(e,t,n){var i=re,l=Ge(),u=ge;if(u){if(n===void 0)throw Error(o(407));n=n()}else n=t();var f=!St((we||l).memoizedState,n);if(f&&(l.memoizedState=n,Ye=!0),l=l.queue,Uo(jd.bind(null,i,l,e),[e]),l.getSnapshot!==t||f||qe!==null&&qe.memoizedState.tag&1){if(i.flags|=2048,Ka(9,{destroy:void 0},Od.bind(null,i,l,n,t),null),Me===null)throw Error(o(349));u||(on&127)!==0||Vd(i,t,n)}return n}function Vd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t=il(),re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Od(e,t,n,i){t.value=n,t.getSnapshot=i,Bd(t)&&_d(e)}function jd(e,t,n){return n(function(){Bd(t)&&_d(e)})}function Bd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function _d(e){var t=aa(e,2);t!==null&&pt(t,e,2)}function Mo(e){var t=st();if(typeof e=="function"){var n=e;if(e=n(),da){An(!0);try{n()}finally{An(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:e},t}function Nd(e,t,n,i){return e.baseState=n,zo(e,we,typeof i=="function"?i:un)}function Gv(e,t,n,i,l){if(ul(e))throw Error(o(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){u.listeners.push(f)}};R.T!==null?n(!0):u.isTransition=!1,i(u),n=t.pending,n===null?(u.next=t.pending=u,Hd(t,u)):(u.next=n.next,t.pending=n.next=u)}}function Hd(e,t){var n=t.action,i=t.payload,l=e.state;if(t.isTransition){var u=R.T,f={};R.T=f;try{var g=n(l,i),S=R.S;S!==null&&S(f,g),Ld(e,t,g)}catch(z){Co(e,t,z)}finally{u!==null&&f.types!==null&&(u.types=f.types),R.T=u}}else try{u=n(l,i),Ld(e,t,u)}catch(z){Co(e,t,z)}}function Ld(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Gd(e,t,i)},function(i){return Co(e,t,i)}):Gd(e,t,n)}function Gd(e,t,n){t.status="fulfilled",t.value=n,kd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Hd(e,n)))}function Co(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,kd(t),t=t.next;while(t!==i)}e.action=null}function kd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xd(e,t){return t}function qd(e,t){if(ge){var n=Me.formState;if(n!==null){e:{var i=re;if(ge){if(Re){t:{for(var l=Re,u=jt;l.nodeType!==8;){if(!u){l=null;break t}if(l=_t(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Re=_t(l.nextSibling),i=l.data==="F!";break e}}Dn(i)}i=!1}i&&(t=n[0])}}return n=st(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xd,lastRenderedState:t},n.queue=i,n=oh.bind(null,re,i),i.dispatch=n,i=Mo(!1),u=Bo.bind(null,re,!1,i.queue),i=st(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,n=Gv.bind(null,re,l,u,n),l.dispatch=n,i.memoizedState=e,[t,n,!1]}function Yd(e){var t=Ge();return Zd(t,we,e)}function Zd(e,t,n){if(t=zo(e,t,Xd)[0],e=ll(un)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ki(t)}catch(f){throw f===Xa?Jr:f}else i=t;t=Ge();var l=t.queue,u=l.dispatch;return n!==t.memoizedState&&(re.flags|=2048,Ka(9,{destroy:void 0},kv.bind(null,l,n),null)),[i,u,e]}function kv(e,t){e.action=t}function Qd(e){var t=Ge(),n=we;if(n!==null)return Zd(t,n,e);Ge(),t=t.memoizedState,n=Ge();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ka(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=re.updateQueue,t===null&&(t=il(),re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Kd(){return Ge().memoizedState}function sl(e,t,n,i){var l=st();re.flags|=e,l.memoizedState=Ka(1|t,{destroy:void 0},n,i===void 0?null:i)}function ol(e,t,n,i){var l=Ge();i=i===void 0?null:i;var u=l.memoizedState.inst;we!==null&&i!==null&&So(i,we.memoizedState.deps)?l.memoizedState=Ka(t,u,n,i):(re.flags|=e,l.memoizedState=Ka(1|t,u,n,i))}function Pd(e,t){sl(8390656,8,e,t)}function Uo(e,t){ol(2048,8,e,t)}function Xv(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=il(),re.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Fd(e){var t=Ge().memoizedState;return Xv({ref:t,nextImpl:e}),function(){if((be&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Jd(e,t){return ol(4,2,e,t)}function Id(e,t){return ol(4,4,e,t)}function Wd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $d(e,t,n){n=n!=null?n.concat([e]):null,ol(4,4,Wd.bind(null,t,e),n)}function Ro(){}function eh(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&So(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function th(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&So(t,i[1]))return i[0];if(i=e(),da){An(!0);try{e()}finally{An(!1)}}return n.memoizedState=[i,t],i}function Vo(e,t,n){return n===void 0||(on&1073741824)!==0&&(de&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=nm(),re.lanes|=e,_n|=e,n)}function nh(e,t,n,i){return St(n,t)?n:Ya.current!==null?(e=Vo(e,n,i),St(e,t)||(Ye=!0),e):(on&42)===0||(on&1073741824)!==0&&(de&261930)===0?(Ye=!0,e.memoizedState=n):(e=nm(),re.lanes|=e,_n|=e,t)}function ah(e,t,n,i,l){var u=k.p;k.p=u!==0&&8>u?u:8;var f=R.T,g={};R.T=g,Bo(e,!1,t,n);try{var S=l(),z=R.S;if(z!==null&&z(g,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var V=Nv(S,i);Xi(e,t,V,zt(e))}else Xi(e,t,i,zt(e))}catch(j){Xi(e,t,{then:function(){},status:"rejected",reason:j},zt())}finally{k.p=u,f!==null&&g.types!==null&&(f.types=g.types),R.T=f}}function qv(){}function Oo(e,t,n,i){if(e.tag!==5)throw Error(o(476));var l=ih(e).queue;ah(e,l,t,Z,n===null?qv:function(){return rh(e),n(i)})}function ih(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:Z},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function rh(e){var t=ih(e);t.next===null&&(t=e.alternate.memoizedState),Xi(e,t.next.queue,{},zt())}function jo(){return $e(rr)}function lh(){return Ge().memoizedState}function sh(){return Ge().memoizedState}function Yv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=zt();e=Un(n);var i=Rn(t,e,n);i!==null&&(pt(i,t,n),Ni(i,t,n)),t={cache:oo()},e.payload=t;return}t=t.return}}function Zv(e,t,n){var i=zt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ul(e)?uh(t,n):(n=Is(e,t,n,i),n!==null&&(pt(n,e,i),ch(n,t,i)))}function oh(e,t,n){var i=zt();Xi(e,t,n,i)}function Xi(e,t,n,i){var l={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ul(e))uh(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var f=t.lastRenderedState,g=u(f,n);if(l.hasEagerState=!0,l.eagerState=g,St(g,f))return qr(e,t,l,0),Me===null&&Xr(),!1}catch{}if(n=Is(e,t,l,i),n!==null)return pt(n,e,i),ch(n,t,i),!0}return!1}function Bo(e,t,n,i){if(i={lane:2,revertLane:hu(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ul(e)){if(t)throw Error(o(479))}else t=Is(e,n,i,2),t!==null&&pt(t,e,2)}function ul(e){var t=e.alternate;return e===re||t!==null&&t===re}function uh(e,t){Za=nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ch(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,gf(e,n)}}var qi={readContext:$e,use:rl,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je};qi.useEffectEvent=je;var fh={readContext:$e,use:rl,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:Pd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,sl(4194308,4,Wd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sl(4194308,4,e,t)},useInsertionEffect:function(e,t){sl(4,2,e,t)},useMemo:function(e,t){var n=st();t=t===void 0?null:t;var i=e();if(da){An(!0);try{e()}finally{An(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=st();if(n!==void 0){var l=n(t);if(da){An(!0);try{n(t)}finally{An(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=Zv.bind(null,re,e),[i.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=Mo(e);var t=e.queue,n=oh.bind(null,re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ro,useDeferredValue:function(e,t){var n=st();return Vo(n,e,t)},useTransition:function(){var e=Mo(!1);return e=ah.bind(null,re,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=re,l=st();if(ge){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Me===null)throw Error(o(349));(de&127)!==0||Vd(i,t,n)}l.memoizedState=n;var u={value:n,getSnapshot:t};return l.queue=u,Pd(jd.bind(null,i,u,e),[e]),i.flags|=2048,Ka(9,{destroy:void 0},Od.bind(null,i,u,n,t),null),n},useId:function(){var e=st(),t=Me.identifierPrefix;if(ge){var n=Kt,i=Qt;n=(i&~(1<<32-bt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=al++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Hv++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:jo,useFormState:qd,useActionState:qd,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Bo.bind(null,re,!0,n),n.dispatch=t,[e,t]},useMemoCache:wo,useCacheRefresh:function(){return st().memoizedState=Yv.bind(null,re)},useEffectEvent:function(e){var t=st(),n={impl:e};return t.memoizedState=n,function(){if((be&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},_o={readContext:$e,use:rl,useCallback:eh,useContext:$e,useEffect:Uo,useImperativeHandle:$d,useInsertionEffect:Jd,useLayoutEffect:Id,useMemo:th,useReducer:ll,useRef:Kd,useState:function(){return ll(un)},useDebugValue:Ro,useDeferredValue:function(e,t){var n=Ge();return nh(n,we.memoizedState,e,t)},useTransition:function(){var e=ll(un)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:ki(e),t]},useSyncExternalStore:Rd,useId:lh,useHostTransitionStatus:jo,useFormState:Yd,useActionState:Yd,useOptimistic:function(e,t){var n=Ge();return Nd(n,we,e,t)},useMemoCache:wo,useCacheRefresh:sh};_o.useEffectEvent=Fd;var dh={readContext:$e,use:rl,useCallback:eh,useContext:$e,useEffect:Uo,useImperativeHandle:$d,useInsertionEffect:Jd,useLayoutEffect:Id,useMemo:th,useReducer:Do,useRef:Kd,useState:function(){return Do(un)},useDebugValue:Ro,useDeferredValue:function(e,t){var n=Ge();return we===null?Vo(n,e,t):nh(n,we.memoizedState,e,t)},useTransition:function(){var e=Do(un)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:ki(e),t]},useSyncExternalStore:Rd,useId:lh,useHostTransitionStatus:jo,useFormState:Qd,useActionState:Qd,useOptimistic:function(e,t){var n=Ge();return we!==null?Nd(n,we,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:wo,useCacheRefresh:sh};dh.useEffectEvent=Fd;function No(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ho={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=zt(),l=Un(i);l.payload=t,n!=null&&(l.callback=n),t=Rn(e,l,i),t!==null&&(pt(t,e,i),Ni(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=zt(),l=Un(i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Rn(e,l,i),t!==null&&(pt(t,e,i),Ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zt(),i=Un(n);i.tag=2,t!=null&&(i.callback=t),t=Rn(e,i,n),t!==null&&(pt(t,e,n),Ni(t,e,n))}};function hh(e,t,n,i,l,u,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,f):t.prototype&&t.prototype.isPureReactComponent?!Ci(n,i)||!Ci(l,u):!0}function mh(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ho.enqueueReplaceState(t,t.state,null)}function ha(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=b({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function gh(e){kr(e)}function ph(e){console.error(e)}function yh(e){kr(e)}function cl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function vh(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Lo(e,t,n){return n=Un(n),n.tag=3,n.payload={element:null},n.callback=function(){cl(e,t)},n}function bh(e){return e=Un(e),e.tag=3,e}function Sh(e,t,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;e.payload=function(){return l(u)},e.callback=function(){vh(t,n,i)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){vh(t,n,i),typeof l!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})})}function Qv(e,t,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&La(t,n,l,!0),n=At.current,n!==null){switch(n.tag){case 31:case 13:return Bt===null?Al():n.alternate===null&&Be===0&&(Be=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===Ir?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),cu(e,i,l)),!1;case 22:return n.flags|=65536,i===Ir?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),cu(e,i,l)),!1}throw Error(o(435,n.tag))}return cu(e,i,l),Al(),!1}if(ge)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==ao&&(e=Error(o(422),{cause:i}),Vi(Rt(e,n)))):(i!==ao&&(t=Error(o(423),{cause:i}),Vi(Rt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Rt(i,n),l=Lo(e.stateNode,i,l),go(e,l),Be!==4&&(Be=2)),!1;var u=Error(o(520),{cause:i});if(u=Rt(u,n),Ii===null?Ii=[u]:Ii.push(u),Be!==4&&(Be=2),t===null)return!0;i=Rt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Lo(n.stateNode,i,e),go(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Nn===null||!Nn.has(u))))return n.flags|=65536,l&=-l,n.lanes|=l,l=bh(l),Sh(l,e,n,i),go(n,l),!1}n=n.return}while(n!==null);return!1}var Go=Error(o(461)),Ye=!1;function et(e,t,n,i){t.child=e===null?xd(t,null,n,i):fa(t,e.child,n,i)}function Th(e,t,n,i,l){n=n.render;var u=t.ref;if("ref"in i){var f={};for(var g in i)g!=="ref"&&(f[g]=i[g])}else f=i;return sa(t),i=To(e,t,n,f,u,l),g=Ao(),e!==null&&!Ye?(Eo(e,t,l),cn(e,t,l)):(ge&&g&&to(t),t.flags|=1,et(e,t,i,l),t.child)}function Ah(e,t,n,i,l){if(e===null){var u=n.type;return typeof u=="function"&&!Ws(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,Eh(e,t,u,i,l)):(e=Zr(n.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Po(e,l)){var f=u.memoizedProps;if(n=n.compare,n=n!==null?n:Ci,n(f,i)&&e.ref===t.ref)return cn(e,t,l)}return t.flags|=1,e=an(u,i),e.ref=t.ref,e.return=t,t.child=e}function Eh(e,t,n,i,l){if(e!==null){var u=e.memoizedProps;if(Ci(u,i)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=i=u,Po(e,l))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,cn(e,t,l)}return ko(e,t,n,i,l)}function xh(e,t,n,i){var l=i.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~u}else i=0,t.child=null;return wh(e,t,u,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fr(t,u!==null?u.cachePool:null),u!==null?Dd(t,u):yo(),Md(t);else return i=t.lanes=536870912,wh(e,t,u!==null?u.baseLanes|n:n,n,i)}else u!==null?(Fr(t,u.cachePool),Dd(t,u),On(),t.memoizedState=null):(e!==null&&Fr(t,null),yo(),On());return et(e,t,l,n),t.child}function Yi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function wh(e,t,n,i,l){var u=co();return u=u===null?null:{parent:Xe._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&Fr(t,null),yo(),Md(t),e!==null&&La(e,t,i,!0),t.childLanes=l,null}function fl(e,t){return t=hl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zh(e,t,n){return fa(t,e.child,null,n),e=fl(t,t.pendingProps),e.flags|=2,Et(t),t.memoizedState=null,e}function Kv(e,t,n){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(i.mode==="hidden")return e=fl(t,i),t.lanes=536870912,Yi(null,e);if(bo(t),(e=Re)?(e=Hm(e,jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wn!==null?{id:Qt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},n=ud(e),n.return=t,t.child=n,We=t,Re=null)):e=null,e===null)throw Dn(t);return t.lanes=536870912,null}return fl(t,i)}var u=e.memoizedState;if(u!==null){var f=u.dehydrated;if(bo(t),l)if(t.flags&256)t.flags&=-257,t=zh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Ye||La(e,t,n,!1),l=(n&e.childLanes)!==0,Ye||l){if(i=Me,i!==null&&(f=pf(i,n),f!==0&&f!==u.retryLane))throw u.retryLane=f,aa(e,f),pt(i,e,f),Go;Al(),t=zh(e,t,n)}else e=u.treeContext,Re=_t(f.nextSibling),We=t,ge=!0,zn=null,jt=!1,e!==null&&dd(t,e),t=fl(t,i),t.flags|=4096;return t}return e=an(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function dl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ko(e,t,n,i,l){return sa(t),n=To(e,t,n,i,void 0,l),i=Ao(),e!==null&&!Ye?(Eo(e,t,l),cn(e,t,l)):(ge&&i&&to(t),t.flags|=1,et(e,t,n,l),t.child)}function Dh(e,t,n,i,l,u){return sa(t),t.updateQueue=null,n=Ud(t,i,n,l),Cd(e),i=Ao(),e!==null&&!Ye?(Eo(e,t,u),cn(e,t,u)):(ge&&i&&to(t),t.flags|=1,et(e,t,n,u),t.child)}function Mh(e,t,n,i,l){if(sa(t),t.stateNode===null){var u=Ba,f=n.contextType;typeof f=="object"&&f!==null&&(u=$e(f)),u=new n(i,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ho,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=i,u.state=t.memoizedState,u.refs={},ho(t),f=n.contextType,u.context=typeof f=="object"&&f!==null?$e(f):Ba,u.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(No(t,n,f,i),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(f=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),f!==u.state&&Ho.enqueueReplaceState(u,u.state,null),Li(t,i,u,l),Hi(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){u=t.stateNode;var g=t.memoizedProps,S=ha(n,g);u.props=S;var z=u.context,V=n.contextType;f=Ba,typeof V=="object"&&V!==null&&(f=$e(V));var j=n.getDerivedStateFromProps;V=typeof j=="function"||typeof u.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,V||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g||z!==f)&&mh(t,u,i,f),Cn=!1;var D=t.memoizedState;u.state=D,Li(t,i,u,l),Hi(),z=t.memoizedState,g||D!==z||Cn?(typeof j=="function"&&(No(t,n,j,i),z=t.memoizedState),(S=Cn||hh(t,n,S,i,D,z,f))?(V||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=z),u.props=i,u.state=z,u.context=f,i=S):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{u=t.stateNode,mo(e,t),f=t.memoizedProps,V=ha(n,f),u.props=V,j=t.pendingProps,D=u.context,z=n.contextType,S=Ba,typeof z=="object"&&z!==null&&(S=$e(z)),g=n.getDerivedStateFromProps,(z=typeof g=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==j||D!==S)&&mh(t,u,i,S),Cn=!1,D=t.memoizedState,u.state=D,Li(t,i,u,l),Hi();var M=t.memoizedState;f!==j||D!==M||Cn||e!==null&&e.dependencies!==null&&Kr(e.dependencies)?(typeof g=="function"&&(No(t,n,g,i),M=t.memoizedState),(V=Cn||hh(t,n,V,i,D,M,S)||e!==null&&e.dependencies!==null&&Kr(e.dependencies))?(z||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,M,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,M,S)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=M),u.props=i,u.state=M,u.context=S,i=V):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),i=!1)}return u=i,dl(e,t),i=(t.flags&128)!==0,u||i?(u=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&i?(t.child=fa(t,e.child,null,l),t.child=fa(t,null,n,l)):et(e,t,n,l),t.memoizedState=u.state,e=t.child):e=cn(e,t,l),e}function Ch(e,t,n,i){return ra(),t.flags|=256,et(e,t,n,i),t.child}var Xo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qo(e){return{baseLanes:e,cachePool:vd()}}function Yo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=wt),e}function Uh(e,t,n){var i=t.pendingProps,l=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(l?Vn(t):On(),(e=Re)?(e=Hm(e,jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wn!==null?{id:Qt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},n=ud(e),n.return=t,t.child=n,We=t,Re=null)):e=null,e===null)throw Dn(t);return zu(e)?t.lanes=32:t.lanes=536870912,null}var g=i.children;return i=i.fallback,l?(On(),l=t.mode,g=hl({mode:"hidden",children:g},l),i=ia(i,l,n,null),g.return=t,i.return=t,g.sibling=i,t.child=g,i=t.child,i.memoizedState=qo(n),i.childLanes=Yo(e,f,n),t.memoizedState=Xo,Yi(null,i)):(Vn(t),Zo(t,g))}var S=e.memoizedState;if(S!==null&&(g=S.dehydrated,g!==null)){if(u)t.flags&256?(Vn(t),t.flags&=-257,t=Qo(e,t,n)):t.memoizedState!==null?(On(),t.child=e.child,t.flags|=128,t=null):(On(),g=i.fallback,l=t.mode,i=hl({mode:"visible",children:i.children},l),g=ia(g,l,n,null),g.flags|=2,i.return=t,g.return=t,i.sibling=g,t.child=i,fa(t,e.child,null,n),i=t.child,i.memoizedState=qo(n),i.childLanes=Yo(e,f,n),t.memoizedState=Xo,t=Yi(null,i));else if(Vn(t),zu(g)){if(f=g.nextSibling&&g.nextSibling.dataset,f)var z=f.dgst;f=z,i=Error(o(419)),i.stack="",i.digest=f,Vi({value:i,source:null,stack:null}),t=Qo(e,t,n)}else if(Ye||La(e,t,n,!1),f=(n&e.childLanes)!==0,Ye||f){if(f=Me,f!==null&&(i=pf(f,n),i!==0&&i!==S.retryLane))throw S.retryLane=i,aa(e,i),pt(f,e,i),Go;wu(g)||Al(),t=Qo(e,t,n)}else wu(g)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Re=_t(g.nextSibling),We=t,ge=!0,zn=null,jt=!1,e!==null&&dd(t,e),t=Zo(t,i.children),t.flags|=4096);return t}return l?(On(),g=i.fallback,l=t.mode,S=e.child,z=S.sibling,i=an(S,{mode:"hidden",children:i.children}),i.subtreeFlags=S.subtreeFlags&65011712,z!==null?g=an(z,g):(g=ia(g,l,n,null),g.flags|=2),g.return=t,i.return=t,i.sibling=g,t.child=i,Yi(null,i),i=t.child,g=e.child.memoizedState,g===null?g=qo(n):(l=g.cachePool,l!==null?(S=Xe._currentValue,l=l.parent!==S?{parent:S,pool:S}:l):l=vd(),g={baseLanes:g.baseLanes|n,cachePool:l}),i.memoizedState=g,i.childLanes=Yo(e,f,n),t.memoizedState=Xo,Yi(e.child,i)):(Vn(t),n=e.child,e=n.sibling,n=an(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Zo(e,t){return t=hl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hl(e,t){return e=Tt(22,e,null,t),e.lanes=0,e}function Qo(e,t,n){return fa(t,e.child,null,n),e=Zo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rh(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),lo(e.return,t,n)}function Ko(e,t,n,i,l,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l,treeForkCount:u}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=i,f.tail=n,f.tailMode=l,f.treeForkCount=u)}function Vh(e,t,n){var i=t.pendingProps,l=i.revealOrder,u=i.tail;i=i.children;var f=Le.current,g=(f&2)!==0;if(g?(f=f&1|2,t.flags|=128):f&=1,q(Le,f),et(e,t,i,n),i=ge?Ri:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rh(e,n,t);else if(e.tag===19)Rh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&tl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ko(t,!1,l,n,u,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&tl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ko(t,!0,n,null,u,i);break;case"together":Ko(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(La(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Po(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Kr(e)))}function Pv(e,t,n){switch(t.tag){case 3:lt(t,t.stateNode.containerInfo),Mn(t,Xe,e.memoizedState.cache),ra();break;case 27:case 5:pi(t);break;case 4:lt(t,t.stateNode.containerInfo);break;case 10:Mn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,bo(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Vn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Uh(e,t,n):(Vn(t),e=cn(e,t,n),e!==null?e.sibling:null);Vn(t);break;case 19:var l=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(La(e,t,n,!1),i=(n&t.childLanes)!==0),l){if(i)return Vh(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),q(Le,Le.current),i)break;return null;case 22:return t.lanes=0,xh(e,t,n,t.pendingProps);case 24:Mn(t,Xe,e.memoizedState.cache)}return cn(e,t,n)}function Oh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!Po(e,n)&&(t.flags&128)===0)return Ye=!1,Pv(e,t,n);Ye=(e.flags&131072)!==0}else Ye=!1,ge&&(t.flags&1048576)!==0&&fd(t,Ri,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ua(t.elementType),t.type=e,typeof e=="function")Ws(e)?(i=ha(e,i),t.tag=1,t=Mh(null,t,e,i,n)):(t.tag=0,t=ko(null,t,e,i,n));else{if(e!=null){var l=e.$$typeof;if(l===Y){t.tag=11,t=Th(null,t,e,i,n);break e}else if(l===K){t.tag=14,t=Ah(null,t,e,i,n);break e}}throw t=ke(e)||e,Error(o(306,t,""))}}return t;case 0:return ko(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,l=ha(i,t.pendingProps),Mh(e,t,i,l,n);case 3:e:{if(lt(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var u=t.memoizedState;l=u.element,mo(e,t),Li(t,i,null,n);var f=t.memoizedState;if(i=f.cache,Mn(t,Xe,i),i!==u.cache&&so(t,[Xe],n,!0),Hi(),i=f.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Ch(e,t,i,n);break e}else if(i!==l){l=Rt(Error(o(424)),t),Vi(l),t=Ch(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=_t(e.firstChild),We=t,ge=!0,zn=null,jt=!0,n=xd(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ra(),i===l){t=cn(e,t,n);break e}et(e,t,i,n)}t=t.child}return t;case 26:return dl(e,t),e===null?(n=Ym(t.type,null,t.pendingProps,null))?t.memoizedState=n:ge||(n=t.type,e=t.pendingProps,i=Cl(ue.current).createElement(n),i[Ie]=t,i[ct]=e,tt(i,n,e),Fe(i),t.stateNode=i):t.memoizedState=Ym(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pi(t),e===null&&ge&&(i=t.stateNode=km(t.type,t.pendingProps,ue.current),We=t,jt=!0,l=Re,kn(t.type)?(Du=l,Re=_t(i.firstChild)):Re=l),et(e,t,t.pendingProps.children,n),dl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((l=i=Re)&&(i=x1(i,t.type,t.pendingProps,jt),i!==null?(t.stateNode=i,We=t,Re=_t(i.firstChild),jt=!1,l=!0):l=!1),l||Dn(t)),pi(t),l=t.type,u=t.pendingProps,f=e!==null?e.memoizedProps:null,i=u.children,Au(l,u)?i=null:f!==null&&Au(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=To(e,t,Lv,null,null,n),rr._currentValue=l),dl(e,t),et(e,t,i,n),t.child;case 6:return e===null&&ge&&((e=n=Re)&&(n=w1(n,t.pendingProps,jt),n!==null?(t.stateNode=n,We=t,Re=null,e=!0):e=!1),e||Dn(t)),null;case 13:return Uh(e,t,n);case 4:return lt(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=fa(t,null,i,n):et(e,t,i,n),t.child;case 11:return Th(e,t,t.type,t.pendingProps,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Mn(t,t.type,i.value),et(e,t,i.children,n),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,sa(t),l=$e(l),i=i(l),t.flags|=1,et(e,t,i,n),t.child;case 14:return Ah(e,t,t.type,t.pendingProps,n);case 15:return Eh(e,t,t.type,t.pendingProps,n);case 19:return Vh(e,t,n);case 31:return Kv(e,t,n);case 22:return xh(e,t,n,t.pendingProps);case 24:return sa(t),i=$e(Xe),e===null?(l=co(),l===null&&(l=Me,u=oo(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=n),l=u),t.memoizedState={parent:i,cache:l},ho(t),Mn(t,Xe,l)):((e.lanes&n)!==0&&(mo(e,t),Li(t,null,null,n),Hi()),l=e.memoizedState,u=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Mn(t,Xe,i)):(i=u.cache,Mn(t,Xe,i),i!==l.cache&&so(t,[Xe],n,!0))),et(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function fn(e){e.flags|=4}function Fo(e,t,n,i,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(lm())e.flags|=8192;else throw ca=Ir,fo}else e.flags&=-16777217}function jh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fm(t))if(lm())e.flags|=8192;else throw ca=Ir,fo}function ml(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?hf():536870912,e.lanes|=t,Ia|=t)}function Zi(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Fv(e,t,n){var i=t.pendingProps;switch(no(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),sn(Xe),He(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ha(t)?fn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,io())),Ve(t),null;case 26:var l=t.type,u=t.memoizedState;return e===null?(fn(t),u!==null?(Ve(t),jh(t,u)):(Ve(t),Fo(t,l,null,i,n))):u?u!==e.memoizedState?(fn(t),Ve(t),jh(t,u)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&fn(t),Ve(t),Fo(t,l,e,i,n)),null;case 27:if(wr(t),n=ue.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&fn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Ve(t),null}e=F.current,Ha(t)?hd(t):(e=km(l,i,n),t.stateNode=e,fn(t))}return Ve(t),null;case 5:if(wr(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&fn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Ve(t),null}if(u=F.current,Ha(t))hd(t);else{var f=Cl(ue.current);switch(u){case 1:u=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=f.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?f.createElement("select",{is:i.is}):f.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?f.createElement(l,{is:i.is}):f.createElement(l)}}u[Ie]=t,u[ct]=i;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)u.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=u;e:switch(tt(u,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&fn(t)}}return Ve(t),Fo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&fn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=ue.current,Ha(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,l=We,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Um(e.nodeValue,n)),e||Dn(t,!0)}else e=Cl(e).createTextNode(i),e[Ie]=t,t.stateNode=e}return Ve(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ha(t),n!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[Ie]=t}else ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else n=io(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Et(t),t):(Et(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Ve(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ha(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(o(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[Ie]=t}else ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),l=!1}else l=io(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Et(t),t):(Et(t),null)}return Et(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==l&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ml(t,t.updateQueue),Ve(t),null);case 4:return He(),e===null&&yu(t.stateNode.containerInfo),Ve(t),null;case 10:return sn(t.type),Ve(t),null;case 19:if(B(Le),i=t.memoizedState,i===null)return Ve(t),null;if(l=(t.flags&128)!==0,u=i.rendering,u===null)if(l)Zi(i,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=tl(e),u!==null){for(t.flags|=128,Zi(i,!1),e=u.updateQueue,t.updateQueue=e,ml(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)od(n,e),n=n.sibling;return q(Le,Le.current&1|2),ge&&rn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&yt()>bl&&(t.flags|=128,l=!0,Zi(i,!1),t.lanes=4194304)}else{if(!l)if(e=tl(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,ml(t,e),Zi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!ge)return Ve(t),null}else 2*yt()-i.renderingStartTime>bl&&n!==536870912&&(t.flags|=128,l=!0,Zi(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(e=i.last,e!==null?e.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=yt(),e.sibling=null,n=Le.current,q(Le,l?n&1|2:n&1),ge&&rn(t,i.treeForkCount),e):(Ve(t),null);case 22:case 23:return Et(t),vo(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),n=t.updateQueue,n!==null&&ml(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&B(oa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),sn(Xe),Ve(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Jv(e,t){switch(no(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sn(Xe),He(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return wr(t),null;case 31:if(t.memoizedState!==null){if(Et(t),t.alternate===null)throw Error(o(340));ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Et(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Le),null;case 4:return He(),null;case 10:return sn(t.type),null;case 22:case 23:return Et(t),vo(),e!==null&&B(oa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return sn(Xe),null;case 25:return null;default:return null}}function Bh(e,t){switch(no(t),t.tag){case 3:sn(Xe),He();break;case 26:case 27:case 5:wr(t);break;case 4:He();break;case 31:t.memoizedState!==null&&Et(t);break;case 13:Et(t);break;case 19:B(Le);break;case 10:sn(t.type);break;case 22:case 23:Et(t),vo(),e!==null&&B(oa);break;case 24:sn(Xe)}}function Qi(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){i=void 0;var u=n.create,f=n.inst;i=u(),f.destroy=i}n=n.next}while(n!==l)}}catch(g){Ee(t,t.return,g)}}function jn(e,t,n){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var u=l.next;i=u;do{if((i.tag&e)===e){var f=i.inst,g=f.destroy;if(g!==void 0){f.destroy=void 0,l=t;var S=n,z=g;try{z()}catch(V){Ee(l,S,V)}}}i=i.next}while(i!==u)}}catch(V){Ee(t,t.return,V)}}function _h(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{zd(t,n)}catch(i){Ee(e,e.return,i)}}}function Nh(e,t,n){n.props=ha(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ee(e,t,i)}}function Ki(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(l){Ee(e,t,l)}}function Pt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){Ee(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Ee(e,t,l)}else n.current=null}function Hh(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){Ee(e,e.return,l)}}function Jo(e,t,n){try{var i=e.stateNode;v1(i,e.type,n,t),i[ct]=t}catch(l){Ee(e,e.return,l)}}function Lh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&kn(e.type)||e.tag===4}function Io(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&kn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wo(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tn));else if(i!==4&&(i===27&&kn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Wo(e,t,n),e=e.sibling;e!==null;)Wo(e,t,n),e=e.sibling}function gl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&kn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(gl(e,t,n),e=e.sibling;e!==null;)gl(e,t,n),e=e.sibling}function Gh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);tt(t,i,n),t[Ie]=e,t[ct]=n}catch(u){Ee(e,e.return,u)}}var dn=!1,Ze=!1,$o=!1,kh=typeof WeakSet=="function"?WeakSet:Set,Je=null;function Iv(e,t){if(e=e.containerInfo,Su=_l,e=$f(e),Zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var f=0,g=-1,S=-1,z=0,V=0,j=e,D=null;t:for(;;){for(var M;j!==n||l!==0&&j.nodeType!==3||(g=f+l),j!==u||i!==0&&j.nodeType!==3||(S=f+i),j.nodeType===3&&(f+=j.nodeValue.length),(M=j.firstChild)!==null;)D=j,j=M;for(;;){if(j===e)break t;if(D===n&&++z===l&&(g=f),D===u&&++V===i&&(S=f),(M=j.nextSibling)!==null)break;j=D,D=j.parentNode}j=M}n=g===-1||S===-1?null:{start:g,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tu={focusedElem:e,selectionRange:n},_l=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,l=u.memoizedProps,u=u.memoizedState,i=n.stateNode;try{var Q=ha(n.type,l);e=i.getSnapshotBeforeUpdate(Q,u),i.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ee(n,n.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)xu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function Xh(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:mn(e,n),i&4&&Qi(5,n);break;case 1:if(mn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){Ee(n,n.return,f)}else{var l=ha(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ee(n,n.return,f)}}i&64&&_h(n),i&512&&Ki(n,n.return);break;case 3:if(mn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{zd(e,t)}catch(f){Ee(n,n.return,f)}}break;case 27:t===null&&i&4&&Gh(n);case 26:case 5:mn(e,n),t===null&&i&4&&Hh(n),i&512&&Ki(n,n.return);break;case 12:mn(e,n);break;case 31:mn(e,n),i&4&&Zh(e,n);break;case 13:mn(e,n),i&4&&Qh(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=l1.bind(null,n),z1(e,n))));break;case 22:if(i=n.memoizedState!==null||dn,!i){t=t!==null&&t.memoizedState!==null||Ze,l=dn;var u=Ze;dn=i,(Ze=t)&&!u?gn(e,n,(n.subtreeFlags&8772)!==0):mn(e,n),dn=l,Ze=u}break;case 30:break;default:mn(e,n)}}function qh(e){var t=e.alternate;t!==null&&(e.alternate=null,qh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ms(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,dt=!1;function hn(e,t,n){for(n=n.child;n!==null;)Yh(e,t,n),n=n.sibling}function Yh(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(yi,n)}catch{}switch(n.tag){case 26:Ze||Pt(n,t),hn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ze||Pt(n,t);var i=Oe,l=dt;kn(n.type)&&(Oe=n.stateNode,dt=!1),hn(e,t,n),nr(n.stateNode),Oe=i,dt=l;break;case 5:Ze||Pt(n,t);case 6:if(i=Oe,l=dt,Oe=null,hn(e,t,n),Oe=i,dt=l,Oe!==null)if(dt)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(n.stateNode)}catch(u){Ee(n,t,u)}else try{Oe.removeChild(n.stateNode)}catch(u){Ee(n,t,u)}break;case 18:Oe!==null&&(dt?(e=Oe,_m(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ri(e)):_m(Oe,n.stateNode));break;case 4:i=Oe,l=dt,Oe=n.stateNode.containerInfo,dt=!0,hn(e,t,n),Oe=i,dt=l;break;case 0:case 11:case 14:case 15:jn(2,n,t),Ze||jn(4,n,t),hn(e,t,n);break;case 1:Ze||(Pt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Nh(n,t,i)),hn(e,t,n);break;case 21:hn(e,t,n);break;case 22:Ze=(i=Ze)||n.memoizedState!==null,hn(e,t,n),Ze=i;break;default:hn(e,t,n)}}function Zh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ri(e)}catch(n){Ee(t,t.return,n)}}}function Qh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ri(e)}catch(n){Ee(t,t.return,n)}}function Wv(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new kh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new kh),t;default:throw Error(o(435,e.tag))}}function pl(e,t){var n=Wv(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var l=s1.bind(null,e,i);i.then(l,l)}})}function ht(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i],u=e,f=t,g=f;e:for(;g!==null;){switch(g.tag){case 27:if(kn(g.type)){Oe=g.stateNode,dt=!1;break e}break;case 5:Oe=g.stateNode,dt=!1;break e;case 3:case 4:Oe=g.stateNode.containerInfo,dt=!0;break e}g=g.return}if(Oe===null)throw Error(o(160));Yh(u,f,l),Oe=null,dt=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Kh(t,e),t=t.sibling}var kt=null;function Kh(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ht(t,e),mt(e),i&4&&(jn(3,e,e.return),Qi(3,e),jn(5,e,e.return));break;case 1:ht(t,e),mt(e),i&512&&(Ze||n===null||Pt(n,n.return)),i&64&&dn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var l=kt;if(ht(t,e),mt(e),i&512&&(Ze||n===null||Pt(n,n.return)),i&4){var u=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":u=l.getElementsByTagName("title")[0],(!u||u[Si]||u[Ie]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(i),l.head.insertBefore(u,l.querySelector("head > title"))),tt(u,i,n),u[Ie]=e,Fe(u),i=u;break e;case"link":var f=Km("link","href",l).get(i+(n.href||""));if(f){for(var g=0;g<f.length;g++)if(u=f[g],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(g,1);break t}}u=l.createElement(i),tt(u,i,n),l.head.appendChild(u);break;case"meta":if(f=Km("meta","content",l).get(i+(n.content||""))){for(g=0;g<f.length;g++)if(u=f[g],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(g,1);break t}}u=l.createElement(i),tt(u,i,n),l.head.appendChild(u);break;default:throw Error(o(468,i))}u[Ie]=e,Fe(u),i=u}e.stateNode=i}else Pm(l,e.type,e.stateNode);else e.stateNode=Qm(l,i,e.memoizedProps);else u!==i?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,i===null?Pm(l,e.type,e.stateNode):Qm(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Jo(e,e.memoizedProps,n.memoizedProps)}break;case 27:ht(t,e),mt(e),i&512&&(Ze||n===null||Pt(n,n.return)),n!==null&&i&4&&Jo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ht(t,e),mt(e),i&512&&(Ze||n===null||Pt(n,n.return)),e.flags&32){l=e.stateNode;try{Ma(l,"")}catch(Q){Ee(e,e.return,Q)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Jo(e,l,n!==null?n.memoizedProps:l)),i&1024&&($o=!0);break;case 6:if(ht(t,e),mt(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(Q){Ee(e,e.return,Q)}}break;case 3:if(Vl=null,l=kt,kt=Ul(t.containerInfo),ht(t,e),kt=l,mt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ri(t.containerInfo)}catch(Q){Ee(e,e.return,Q)}$o&&($o=!1,Ph(e));break;case 4:i=kt,kt=Ul(e.stateNode.containerInfo),ht(t,e),mt(e),kt=i;break;case 12:ht(t,e),mt(e);break;case 31:ht(t,e),mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,pl(e,i)));break;case 13:ht(t,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(vl=yt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,pl(e,i)));break;case 22:l=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,z=dn,V=Ze;if(dn=z||l,Ze=V||S,ht(t,e),Ze=V,dn=z,mt(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||S||dn||Ze||ma(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(u=S.stateNode,l)f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{g=S.stateNode;var j=S.memoizedProps.style,D=j!=null&&j.hasOwnProperty("display")?j.display:null;g.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(Q){Ee(S,S.return,Q)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=l?"":S.memoizedProps}catch(Q){Ee(S,S.return,Q)}}}else if(t.tag===18){if(n===null){S=t;try{var M=S.stateNode;l?Nm(M,!0):Nm(S.stateNode,!1)}catch(Q){Ee(S,S.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,pl(e,n))));break;case 19:ht(t,e),mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,pl(e,i)));break;case 30:break;case 21:break;default:ht(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Lh(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var l=n.stateNode,u=Io(e);gl(e,u,l);break;case 5:var f=n.stateNode;n.flags&32&&(Ma(f,""),n.flags&=-33);var g=Io(e);gl(e,g,f);break;case 3:case 4:var S=n.stateNode.containerInfo,z=Io(e);Wo(e,z,S);break;default:throw Error(o(161))}}catch(V){Ee(e,e.return,V)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ph(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ph(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function mn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Xh(e,t.alternate,t),t=t.sibling}function ma(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:jn(4,t,t.return),ma(t);break;case 1:Pt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Nh(t,t.return,n),ma(t);break;case 27:nr(t.stateNode);case 26:case 5:Pt(t,t.return),ma(t);break;case 22:t.memoizedState===null&&ma(t);break;case 30:ma(t);break;default:ma(t)}e=e.sibling}}function gn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,u=t,f=u.flags;switch(u.tag){case 0:case 11:case 15:gn(l,u,n),Qi(4,u);break;case 1:if(gn(l,u,n),i=u,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(z){Ee(i,i.return,z)}if(i=u,l=i.updateQueue,l!==null){var g=i.stateNode;try{var S=l.shared.hiddenCallbacks;if(S!==null)for(l.shared.hiddenCallbacks=null,l=0;l<S.length;l++)wd(S[l],g)}catch(z){Ee(i,i.return,z)}}n&&f&64&&_h(u),Ki(u,u.return);break;case 27:Gh(u);case 26:case 5:gn(l,u,n),n&&i===null&&f&4&&Hh(u),Ki(u,u.return);break;case 12:gn(l,u,n);break;case 31:gn(l,u,n),n&&f&4&&Zh(l,u);break;case 13:gn(l,u,n),n&&f&4&&Qh(l,u);break;case 22:u.memoizedState===null&&gn(l,u,n),Ki(u,u.return);break;case 30:break;default:gn(l,u,n)}t=t.sibling}}function eu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Oi(n))}function tu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Oi(e))}function Xt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fh(e,t,n,i),t=t.sibling}function Fh(e,t,n,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(e,t,n,i),l&2048&&Qi(9,t);break;case 1:Xt(e,t,n,i);break;case 3:Xt(e,t,n,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Oi(e)));break;case 12:if(l&2048){Xt(e,t,n,i),e=t.stateNode;try{var u=t.memoizedProps,f=u.id,g=u.onPostCommit;typeof g=="function"&&g(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Ee(t,t.return,S)}}else Xt(e,t,n,i);break;case 31:Xt(e,t,n,i);break;case 13:Xt(e,t,n,i);break;case 23:break;case 22:u=t.stateNode,f=t.alternate,t.memoizedState!==null?u._visibility&2?Xt(e,t,n,i):Pi(e,t):u._visibility&2?Xt(e,t,n,i):(u._visibility|=2,Pa(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),l&2048&&eu(f,t);break;case 24:Xt(e,t,n,i),l&2048&&tu(t.alternate,t);break;default:Xt(e,t,n,i)}}function Pa(e,t,n,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,f=t,g=n,S=i,z=f.flags;switch(f.tag){case 0:case 11:case 15:Pa(u,f,g,S,l),Qi(8,f);break;case 23:break;case 22:var V=f.stateNode;f.memoizedState!==null?V._visibility&2?Pa(u,f,g,S,l):Pi(u,f):(V._visibility|=2,Pa(u,f,g,S,l)),l&&z&2048&&eu(f.alternate,f);break;case 24:Pa(u,f,g,S,l),l&&z&2048&&tu(f.alternate,f);break;default:Pa(u,f,g,S,l)}t=t.sibling}}function Pi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,l=i.flags;switch(i.tag){case 22:Pi(n,i),l&2048&&eu(i.alternate,i);break;case 24:Pi(n,i),l&2048&&tu(i.alternate,i);break;default:Pi(n,i)}t=t.sibling}}var Fi=8192;function Fa(e,t,n){if(e.subtreeFlags&Fi)for(e=e.child;e!==null;)Jh(e,t,n),e=e.sibling}function Jh(e,t,n){switch(e.tag){case 26:Fa(e,t,n),e.flags&Fi&&e.memoizedState!==null&&H1(n,kt,e.memoizedState,e.memoizedProps);break;case 5:Fa(e,t,n);break;case 3:case 4:var i=kt;kt=Ul(e.stateNode.containerInfo),Fa(e,t,n),kt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Fi,Fi=16777216,Fa(e,t,n),Fi=i):Fa(e,t,n));break;default:Fa(e,t,n)}}function Ih(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Je=i,$h(i,e)}Ih(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wh(e),e=e.sibling}function Wh(e){switch(e.tag){case 0:case 11:case 15:Ji(e),e.flags&2048&&jn(9,e,e.return);break;case 3:Ji(e);break;case 12:Ji(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yl(e)):Ji(e);break;default:Ji(e)}}function yl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Je=i,$h(i,e)}Ih(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:jn(8,t,t.return),yl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,yl(t));break;default:yl(t)}e=e.sibling}}function $h(e,t){for(;Je!==null;){var n=Je;switch(n.tag){case 0:case 11:case 15:jn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Oi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Je=i;else e:for(n=e;Je!==null;){i=Je;var l=i.sibling,u=i.return;if(qh(i),i===n){Je=null;break e}if(l!==null){l.return=u,Je=l;break e}Je=u}}}var $v={getCacheForType:function(e){var t=$e(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $e(Xe).controller.signal}},e1=typeof WeakMap=="function"?WeakMap:Map,be=0,Me=null,ce=null,de=0,Ae=0,xt=null,Bn=!1,Ja=!1,nu=!1,pn=0,Be=0,_n=0,ga=0,au=0,wt=0,Ia=0,Ii=null,gt=null,iu=!1,vl=0,em=0,bl=1/0,Sl=null,Nn=null,Ke=0,Hn=null,Wa=null,yn=0,ru=0,lu=null,tm=null,Wi=0,su=null;function zt(){return(be&2)!==0&&de!==0?de&-de:R.T!==null?hu():yf()}function nm(){if(wt===0)if((de&536870912)===0||ge){var e=Mr;Mr<<=1,(Mr&3932160)===0&&(Mr=262144),wt=e}else wt=536870912;return e=At.current,e!==null&&(e.flags|=32),wt}function pt(e,t,n){(e===Me&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&($a(e,0),Ln(e,de,wt,!1)),bi(e,n),((be&2)===0||e!==Me)&&(e===Me&&((be&2)===0&&(ga|=n),Be===4&&Ln(e,de,wt,!1)),Ft(e))}function am(e,t,n){if((be&6)!==0)throw Error(o(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||vi(e,t),l=i?a1(e,t):uu(e,t,!0),u=i;do{if(l===0){Ja&&!i&&Ln(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!t1(n)){l=uu(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var g=e;l=Ii;var S=g.current.memoizedState.isDehydrated;if(S&&($a(g,f).flags|=256),f=uu(g,f,!1),f!==2){if(nu&&!S){g.errorRecoveryDisabledLanes|=u,ga|=u,l=4;break e}u=gt,gt=l,u!==null&&(gt===null?gt=u:gt.push.apply(gt,u))}l=f}if(u=!1,l!==2)continue}}if(l===1){$a(e,0),Ln(e,t,0,!0);break}e:{switch(i=e,u=l,u){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Ln(i,t,wt,!Bn);break e;case 2:gt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(l=vl+300-yt(),10<l)){if(Ln(i,t,wt,!Bn),Ur(i,0,!0)!==0)break e;yn=t,i.timeoutHandle=jm(im.bind(null,i,n,gt,Sl,iu,t,wt,ga,Ia,Bn,u,"Throttled",-0,0),l);break e}im(i,n,gt,Sl,iu,t,wt,ga,Ia,Bn,u,null,-0,0)}}break}while(!0);Ft(e)}function im(e,t,n,i,l,u,f,g,S,z,V,j,D,M){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tn},Jh(t,u,j);var Q=(u&62914560)===u?vl-yt():(u&4194048)===u?em-yt():0;if(Q=L1(j,Q),Q!==null){yn=u,e.cancelPendingCommit=Q(dm.bind(null,e,t,u,n,i,l,f,g,S,V,j,null,D,M)),Ln(e,u,f,!z);return}}dm(e,t,u,n,i,l,f,g,S)}function t1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],u=l.getSnapshot;l=l.value;try{if(!St(u(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ln(e,t,n,i){t&=~au,t&=~ga,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var u=31-bt(l),f=1<<u;i[u]=-1,l&=~f}n!==0&&mf(e,n,t)}function Tl(){return(be&6)===0?($i(0),!1):!0}function ou(){if(ce!==null){if(Ae===0)var e=ce.return;else e=ce,ln=la=null,xo(e),qa=null,Bi=0,e=ce;for(;e!==null;)Bh(e.alternate,e),e=e.return;ce=null}}function $a(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,T1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),yn=0,ou(),Me=e,ce=n=an(e.current,null),de=t,Ae=0,xt=null,Bn=!1,Ja=vi(e,t),nu=!1,Ia=wt=au=ga=_n=Be=0,gt=Ii=null,iu=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-bt(i),u=1<<l;t|=e[l],i&=~u}return pn=t,Xr(),n}function rm(e,t){re=null,R.H=qi,t===Xa||t===Jr?(t=Td(),Ae=3):t===fo?(t=Td(),Ae=4):Ae=t===Go?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,xt=t,ce===null&&(Be=1,cl(e,Rt(t,e.current)))}function lm(){var e=At.current;return e===null?!0:(de&4194048)===de?Bt===null:(de&62914560)===de||(de&536870912)!==0?e===Bt:!1}function sm(){var e=R.H;return R.H=qi,e===null?qi:e}function om(){var e=R.A;return R.A=$v,e}function Al(){Be=4,Bn||(de&4194048)!==de&&At.current!==null||(Ja=!0),(_n&134217727)===0&&(ga&134217727)===0||Me===null||Ln(Me,de,wt,!1)}function uu(e,t,n){var i=be;be|=2;var l=sm(),u=om();(Me!==e||de!==t)&&(Sl=null,$a(e,t)),t=!1;var f=Be;e:do try{if(Ae!==0&&ce!==null){var g=ce,S=xt;switch(Ae){case 8:ou(),f=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var z=Ae;if(Ae=0,xt=null,ei(e,g,S,z),n&&Ja){f=0;break e}break;default:z=Ae,Ae=0,xt=null,ei(e,g,S,z)}}n1(),f=Be;break}catch(V){rm(e,V)}while(!0);return t&&e.shellSuspendCounter++,ln=la=null,be=i,R.H=l,R.A=u,ce===null&&(Me=null,de=0,Xr()),f}function n1(){for(;ce!==null;)um(ce)}function a1(e,t){var n=be;be|=2;var i=sm(),l=om();Me!==e||de!==t?(Sl=null,bl=yt()+500,$a(e,t)):Ja=vi(e,t);e:do try{if(Ae!==0&&ce!==null){t=ce;var u=xt;t:switch(Ae){case 1:Ae=0,xt=null,ei(e,t,u,1);break;case 2:case 9:if(bd(u)){Ae=0,xt=null,cm(t);break}t=function(){Ae!==2&&Ae!==9||Me!==e||(Ae=7),Ft(e)},u.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:bd(u)?(Ae=0,xt=null,cm(t)):(Ae=0,xt=null,ei(e,t,u,7));break;case 5:var f=null;switch(ce.tag){case 26:f=ce.memoizedState;case 5:case 27:var g=ce;if(f?Fm(f):g.stateNode.complete){Ae=0,xt=null;var S=g.sibling;if(S!==null)ce=S;else{var z=g.return;z!==null?(ce=z,El(z)):ce=null}break t}}Ae=0,xt=null,ei(e,t,u,5);break;case 6:Ae=0,xt=null,ei(e,t,u,6);break;case 8:ou(),Be=6;break e;default:throw Error(o(462))}}i1();break}catch(V){rm(e,V)}while(!0);return ln=la=null,R.H=i,R.A=l,be=n,ce!==null?0:(Me=null,de=0,Xr(),Be)}function i1(){for(;ce!==null&&!D0();)um(ce)}function um(e){var t=Oh(e.alternate,e,pn);e.memoizedProps=e.pendingProps,t===null?El(e):ce=t}function cm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Dh(n,t,t.pendingProps,t.type,void 0,de);break;case 11:t=Dh(n,t,t.pendingProps,t.type.render,t.ref,de);break;case 5:xo(t);default:Bh(n,t),t=ce=od(t,pn),t=Oh(n,t,pn)}e.memoizedProps=e.pendingProps,t===null?El(e):ce=t}function ei(e,t,n,i){ln=la=null,xo(t),qa=null,Bi=0;var l=t.return;try{if(Qv(e,l,t,n,de)){Be=1,cl(e,Rt(n,e.current)),ce=null;return}}catch(u){if(l!==null)throw ce=l,u;Be=1,cl(e,Rt(n,e.current)),ce=null;return}t.flags&32768?(ge||i===1?e=!0:Ja||(de&536870912)!==0?e=!1:(Bn=e=!0,(i===2||i===9||i===3||i===6)&&(i=At.current,i!==null&&i.tag===13&&(i.flags|=16384))),fm(t,e)):El(t)}function El(e){var t=e;do{if((t.flags&32768)!==0){fm(t,Bn);return}e=t.return;var n=Fv(t.alternate,t,pn);if(n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);Be===0&&(Be=5)}function fm(e,t){do{var n=Jv(e.alternate,e);if(n!==null){n.flags&=32767,ce=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ce=e;return}ce=e=n}while(e!==null);Be=6,ce=null}function dm(e,t,n,i,l,u,f,g,S){e.cancelPendingCommit=null;do xl();while(Ke!==0);if((be&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(u=t.lanes|t.childLanes,u|=Js,N0(e,n,u,f,g,S),e===Me&&(ce=Me=null,de=0),Wa=t,Hn=e,yn=n,ru=u,lu=l,tm=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,o1(zr,function(){return ym(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=R.T,R.T=null,l=k.p,k.p=2,f=be,be|=4;try{Iv(e,t,n)}finally{be=f,k.p=l,R.T=i}}Ke=1,hm(),mm(),gm()}}function hm(){if(Ke===1){Ke=0;var e=Hn,t=Wa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null;var i=k.p;k.p=2;var l=be;be|=4;try{Kh(t,e);var u=Tu,f=$f(e.containerInfo),g=u.focusedElem,S=u.selectionRange;if(f!==g&&g&&g.ownerDocument&&Wf(g.ownerDocument.documentElement,g)){if(S!==null&&Zs(g)){var z=S.start,V=S.end;if(V===void 0&&(V=z),"selectionStart"in g)g.selectionStart=z,g.selectionEnd=Math.min(V,g.value.length);else{var j=g.ownerDocument||document,D=j&&j.defaultView||window;if(D.getSelection){var M=D.getSelection(),Q=g.textContent.length,ee=Math.min(S.start,Q),De=S.end===void 0?ee:Math.min(S.end,Q);!M.extend&&ee>De&&(f=De,De=ee,ee=f);var x=If(g,ee),T=If(g,De);if(x&&T&&(M.rangeCount!==1||M.anchorNode!==x.node||M.anchorOffset!==x.offset||M.focusNode!==T.node||M.focusOffset!==T.offset)){var w=j.createRange();w.setStart(x.node,x.offset),M.removeAllRanges(),ee>De?(M.addRange(w),M.extend(T.node,T.offset)):(w.setEnd(T.node,T.offset),M.addRange(w))}}}}for(j=[],M=g;M=M.parentNode;)M.nodeType===1&&j.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<j.length;g++){var O=j[g];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}_l=!!Su,Tu=Su=null}finally{be=l,k.p=i,R.T=n}}e.current=t,Ke=2}}function mm(){if(Ke===2){Ke=0;var e=Hn,t=Wa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=R.T,R.T=null;var i=k.p;k.p=2;var l=be;be|=4;try{Xh(e,t.alternate,t)}finally{be=l,k.p=i,R.T=n}}Ke=3}}function gm(){if(Ke===4||Ke===3){Ke=0,M0();var e=Hn,t=Wa,n=yn,i=tm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,Wa=Hn=null,pm(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Nn=null),zs(n),t=t.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(yi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=R.T,l=k.p,k.p=2,R.T=null;try{for(var u=e.onRecoverableError,f=0;f<i.length;f++){var g=i[f];u(g.value,{componentStack:g.stack})}}finally{R.T=t,k.p=l}}(yn&3)!==0&&xl(),Ft(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===su?Wi++:(Wi=0,su=e):Wi=0,$i(0)}}function pm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Oi(t)))}function xl(){return hm(),mm(),gm(),ym()}function ym(){if(Ke!==5)return!1;var e=Hn,t=ru;ru=0;var n=zs(yn),i=R.T,l=k.p;try{k.p=32>n?32:n,R.T=null,n=lu,lu=null;var u=Hn,f=yn;if(Ke=0,Wa=Hn=null,yn=0,(be&6)!==0)throw Error(o(331));var g=be;if(be|=4,Wh(u.current),Fh(u,u.current,f,n),be=g,$i(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(yi,u)}catch{}return!0}finally{k.p=l,R.T=i,pm(e,t)}}function vm(e,t,n){t=Rt(n,t),t=Lo(e.stateNode,t,2),e=Rn(e,t,2),e!==null&&(bi(e,2),Ft(e))}function Ee(e,t,n){if(e.tag===3)vm(e,e,n);else for(;t!==null;){if(t.tag===3){vm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Nn===null||!Nn.has(i))){e=Rt(n,e),n=bh(2),i=Rn(t,n,2),i!==null&&(Sh(n,i,t,e),bi(i,2),Ft(i));break}}t=t.return}}function cu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new e1;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||(nu=!0,l.add(n),e=r1.bind(null,e,t,n),t.then(e,e))}function r1(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Me===e&&(de&n)===n&&(Be===4||Be===3&&(de&62914560)===de&&300>yt()-vl?(be&2)===0&&$a(e,0):au|=n,Ia===de&&(Ia=0)),Ft(e)}function bm(e,t){t===0&&(t=hf()),e=aa(e,t),e!==null&&(bi(e,t),Ft(e))}function l1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bm(e,n)}function s1(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),bm(e,n)}function o1(e,t){return As(e,t)}var wl=null,ti=null,fu=!1,zl=!1,du=!1,Gn=0;function Ft(e){e!==ti&&e.next===null&&(ti===null?wl=ti=e:ti=ti.next=e),zl=!0,fu||(fu=!0,c1())}function $i(e,t){if(!du&&zl){du=!0;do for(var n=!1,i=wl;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var u=0;else{var f=i.suspendedLanes,g=i.pingedLanes;u=(1<<31-bt(42|e)+1)-1,u&=l&~(f&~g),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Em(i,u))}else u=de,u=Ur(i,i===Me?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||vi(i,u)||(n=!0,Em(i,u));i=i.next}while(n);du=!1}}function u1(){Sm()}function Sm(){zl=fu=!1;var e=0;Gn!==0&&S1()&&(e=Gn);for(var t=yt(),n=null,i=wl;i!==null;){var l=i.next,u=Tm(i,t);u===0?(i.next=null,n===null?wl=l:n.next=l,l===null&&(ti=n)):(n=i,(e!==0||(u&3)!==0)&&(zl=!0)),i=l}Ke!==0&&Ke!==5||$i(e),Gn!==0&&(Gn=0)}function Tm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var f=31-bt(u),g=1<<f,S=l[f];S===-1?((g&n)===0||(g&i)!==0)&&(l[f]=_0(g,t)):S<=t&&(e.expiredLanes|=g),u&=~g}if(t=Me,n=de,n=Ur(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Es(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||vi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Es(i),zs(n)){case 2:case 8:n=ff;break;case 32:n=zr;break;case 268435456:n=df;break;default:n=zr}return i=Am.bind(null,e),n=As(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Es(i),e.callbackPriority=2,e.callbackNode=null,2}function Am(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(xl()&&e.callbackNode!==n)return null;var i=de;return i=Ur(e,e===Me?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(am(e,i,t),Tm(e,yt()),e.callbackNode!=null&&e.callbackNode===n?Am.bind(null,e):null)}function Em(e,t){if(xl())return null;am(e,t,!0)}function c1(){A1(function(){(be&6)!==0?As(cf,u1):Sm()})}function hu(){if(Gn===0){var e=Ga;e===0&&(e=Dr,Dr<<=1,(Dr&261888)===0&&(Dr=256)),Gn=e}return Gn}function xm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:jr(""+e)}function wm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function f1(e,t,n,i,l){if(t==="submit"&&n&&n.stateNode===l){var u=xm((l[ct]||null).action),f=i.submitter;f&&(t=(t=f[ct]||null)?xm(t.formAction):f.getAttribute("formAction"),t!==null&&(u=t,f=null));var g=new Hr("action","action",null,i,l);e.push({event:g,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Gn!==0){var S=f?wm(l,f):new FormData(l);Oo(n,{pending:!0,data:S,method:l.method,action:u},null,S)}}else typeof u=="function"&&(g.preventDefault(),S=f?wm(l,f):new FormData(l),Oo(n,{pending:!0,data:S,method:l.method,action:u},u,S))},currentTarget:l}]})}}for(var mu=0;mu<Fs.length;mu++){var gu=Fs[mu],d1=gu.toLowerCase(),h1=gu[0].toUpperCase()+gu.slice(1);Gt(d1,"on"+h1)}Gt(nd,"onAnimationEnd"),Gt(ad,"onAnimationIteration"),Gt(id,"onAnimationStart"),Gt("dblclick","onDoubleClick"),Gt("focusin","onFocus"),Gt("focusout","onBlur"),Gt(Cv,"onTransitionRun"),Gt(Uv,"onTransitionStart"),Gt(Rv,"onTransitionCancel"),Gt(rd,"onTransitionEnd"),za("onMouseEnter",["mouseout","mouseover"]),za("onMouseLeave",["mouseout","mouseover"]),za("onPointerEnter",["pointerout","pointerover"]),za("onPointerLeave",["pointerout","pointerover"]),$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$n("onBeforeInput",["compositionend","keypress","textInput","paste"]),$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(er));function zm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],l=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var f=i.length-1;0<=f;f--){var g=i[f],S=g.instance,z=g.currentTarget;if(g=g.listener,S!==u&&l.isPropagationStopped())break e;u=g,l.currentTarget=z;try{u(l)}catch(V){kr(V)}l.currentTarget=null,u=S}else for(f=0;f<i.length;f++){if(g=i[f],S=g.instance,z=g.currentTarget,g=g.listener,S!==u&&l.isPropagationStopped())break e;u=g,l.currentTarget=z;try{u(l)}catch(V){kr(V)}l.currentTarget=null,u=S}}}}function fe(e,t){var n=t[Ds];n===void 0&&(n=t[Ds]=new Set);var i=e+"__bubble";n.has(i)||(Dm(t,e,2,!1),n.add(i))}function pu(e,t,n){var i=0;t&&(i|=4),Dm(n,e,i,t)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function yu(e){if(!e[Dl]){e[Dl]=!0,Sf.forEach(function(n){n!=="selectionchange"&&(m1.has(n)||pu(n,!1,e),pu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dl]||(t[Dl]=!0,pu("selectionchange",!1,t))}}function Dm(e,t,n,i){switch(ng(t)){case 2:var l=X1;break;case 8:l=q1;break;default:l=Vu}n=l.bind(null,t,n,e),l=void 0,!_s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function vu(e,t,n,i,l){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var f=i.tag;if(f===3||f===4){var g=i.stateNode.containerInfo;if(g===l)break;if(f===4)for(f=i.return;f!==null;){var S=f.tag;if((S===3||S===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;g!==null;){if(f=Ea(g),f===null)return;if(S=f.tag,S===5||S===6||S===26||S===27){i=u=f;continue e}g=g.parentNode}}i=i.return}Vf(function(){var z=u,V=js(n),j=[];e:{var D=ld.get(e);if(D!==void 0){var M=Hr,Q=e;switch(e){case"keypress":if(_r(n)===0)break e;case"keydown":case"keyup":M=sv;break;case"focusin":Q="focus",M=Gs;break;case"focusout":Q="blur",M=Gs;break;case"beforeblur":case"afterblur":M=Gs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=F0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=cv;break;case nd:case ad:case id:M=W0;break;case rd:M=dv;break;case"scroll":case"scrollend":M=K0;break;case"wheel":M=mv;break;case"copy":case"cut":case"paste":M=ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Nf;break;case"toggle":case"beforetoggle":M=pv}var ee=(t&4)!==0,De=!ee&&(e==="scroll"||e==="scrollend"),x=ee?D!==null?D+"Capture":null:D;ee=[];for(var T=z,w;T!==null;){var O=T;if(w=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||w===null||x===null||(O=Ai(T,x),O!=null&&ee.push(tr(T,O,w))),De)break;T=T.return}0<ee.length&&(D=new M(D,Q,null,n,V),j.push({event:D,listeners:ee}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",D&&n!==Os&&(Q=n.relatedTarget||n.fromElement)&&(Ea(Q)||Q[Aa]))break e;if((M||D)&&(D=V.window===V?V:(D=V.ownerDocument)?D.defaultView||D.parentWindow:window,M?(Q=n.relatedTarget||n.toElement,M=z,Q=Q?Ea(Q):null,Q!==null&&(De=h(Q),ee=Q.tag,Q!==De||ee!==5&&ee!==27&&ee!==6)&&(Q=null)):(M=null,Q=z),M!==Q)){if(ee=Bf,O="onMouseLeave",x="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Nf,O="onPointerLeave",x="onPointerEnter",T="pointer"),De=M==null?D:Ti(M),w=Q==null?D:Ti(Q),D=new ee(O,T+"leave",M,n,V),D.target=De,D.relatedTarget=w,O=null,Ea(V)===z&&(ee=new ee(x,T+"enter",Q,n,V),ee.target=w,ee.relatedTarget=De,O=ee),De=O,M&&Q)t:{for(ee=g1,x=M,T=Q,w=0,O=x;O;O=ee(O))w++;O=0;for(var $=T;$;$=ee($))O++;for(;0<w-O;)x=ee(x),w--;for(;0<O-w;)T=ee(T),O--;for(;w--;){if(x===T||T!==null&&x===T.alternate){ee=x;break t}x=ee(x),T=ee(T)}ee=null}else ee=null;M!==null&&Mm(j,D,M,ee,!1),Q!==null&&De!==null&&Mm(j,De,Q,ee,!0)}}e:{if(D=z?Ti(z):window,M=D.nodeName&&D.nodeName.toLowerCase(),M==="select"||M==="input"&&D.type==="file")var pe=Zf;else if(qf(D))if(Qf)pe=zv;else{pe=xv;var J=Ev}else M=D.nodeName,!M||M.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?z&&Vs(z.elementType)&&(pe=Zf):pe=wv;if(pe&&(pe=pe(e,z))){Yf(j,pe,n,V);break e}J&&J(e,D,z),e==="focusout"&&z&&D.type==="number"&&z.memoizedProps.value!=null&&Rs(D,"number",D.value)}switch(J=z?Ti(z):window,e){case"focusin":(qf(J)||J.contentEditable==="true")&&(Va=J,Qs=z,Ui=null);break;case"focusout":Ui=Qs=Va=null;break;case"mousedown":Ks=!0;break;case"contextmenu":case"mouseup":case"dragend":Ks=!1,ed(j,n,V);break;case"selectionchange":if(Mv)break;case"keydown":case"keyup":ed(j,n,V)}var se;if(Xs)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else Ra?kf(e,n)&&(he="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(he="onCompositionStart");he&&(Hf&&n.locale!=="ko"&&(Ra||he!=="onCompositionStart"?he==="onCompositionEnd"&&Ra&&(se=Of()):(xn=V,Ns="value"in xn?xn.value:xn.textContent,Ra=!0)),J=Ml(z,he),0<J.length&&(he=new _f(he,e,null,n,V),j.push({event:he,listeners:J}),se?he.data=se:(se=Xf(n),se!==null&&(he.data=se)))),(se=vv?bv(e,n):Sv(e,n))&&(he=Ml(z,"onBeforeInput"),0<he.length&&(J=new _f("onBeforeInput","beforeinput",null,n,V),j.push({event:J,listeners:he}),J.data=se)),f1(j,e,z,n,V)}zm(j,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ml(e,t){for(var n=t+"Capture",i=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=Ai(e,n),l!=null&&i.unshift(tr(e,l,u)),l=Ai(e,t),l!=null&&i.push(tr(e,l,u))),e.tag===3)return i;e=e.return}return[]}function g1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mm(e,t,n,i,l){for(var u=t._reactName,f=[];n!==null&&n!==i;){var g=n,S=g.alternate,z=g.stateNode;if(g=g.tag,S!==null&&S===i)break;g!==5&&g!==26&&g!==27||z===null||(S=z,l?(z=Ai(n,u),z!=null&&f.unshift(tr(n,z,S))):l||(z=Ai(n,u),z!=null&&f.push(tr(n,z,S)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var p1=/\r\n?/g,y1=/\u0000|\uFFFD/g;function Cm(e){return(typeof e=="string"?e:""+e).replace(p1,`
`).replace(y1,"")}function Um(e,t){return t=Cm(t),Cm(e)===t}function ze(e,t,n,i,l,u){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ma(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ma(e,""+i);break;case"className":Vr(e,"class",i);break;case"tabIndex":Vr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Vr(e,n,i);break;case"style":Uf(e,i,u);break;case"data":if(t!=="object"){Vr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=jr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&ze(e,t,"name",l.name,l,null),ze(e,t,"formEncType",l.formEncType,l,null),ze(e,t,"formMethod",l.formMethod,l,null),ze(e,t,"formTarget",l.formTarget,l,null)):(ze(e,t,"encType",l.encType,l,null),ze(e,t,"method",l.method,l,null),ze(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=jr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=tn);break;case"onScroll":i!=null&&fe("scroll",e);break;case"onScrollEnd":i!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=jr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":fe("beforetoggle",e),fe("toggle",e),Rr(e,"popover",i);break;case"xlinkActuate":en(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":en(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":en(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":en(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":en(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":en(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":en(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":en(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":en(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Rr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Z0.get(n)||n,Rr(e,n,i))}}function bu(e,t,n,i,l,u){switch(n){case"style":Uf(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ma(e,i):(typeof i=="number"||typeof i=="bigint")&&Ma(e,""+i);break;case"onScroll":i!=null&&fe("scroll",e);break;case"onScrollEnd":i!=null&&fe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=tn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),u=e[ct]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,l),typeof i=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,l);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Rr(e,n,i)}}}function tt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var i=!1,l=!1,u;for(u in n)if(n.hasOwnProperty(u)){var f=n[u];if(f!=null)switch(u){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ze(e,t,u,f,n,null)}}l&&ze(e,t,"srcSet",n.srcSet,n,null),i&&ze(e,t,"src",n.src,n,null);return;case"input":fe("invalid",e);var g=u=f=l=null,S=null,z=null;for(i in n)if(n.hasOwnProperty(i)){var V=n[i];if(V!=null)switch(i){case"name":l=V;break;case"type":f=V;break;case"checked":S=V;break;case"defaultChecked":z=V;break;case"value":u=V;break;case"defaultValue":g=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(o(137,t));break;default:ze(e,t,i,V,n,null)}}zf(e,u,g,S,z,f,l,!1);return;case"select":fe("invalid",e),i=f=u=null;for(l in n)if(n.hasOwnProperty(l)&&(g=n[l],g!=null))switch(l){case"value":u=g;break;case"defaultValue":f=g;break;case"multiple":i=g;default:ze(e,t,l,g,n,null)}t=u,n=f,e.multiple=!!i,t!=null?Da(e,!!i,t,!1):n!=null&&Da(e,!!i,n,!0);return;case"textarea":fe("invalid",e),u=l=i=null;for(f in n)if(n.hasOwnProperty(f)&&(g=n[f],g!=null))switch(f){case"value":i=g;break;case"defaultValue":l=g;break;case"children":u=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(o(91));break;default:ze(e,t,f,g,n,null)}Mf(e,i,l,u);return;case"option":for(S in n)n.hasOwnProperty(S)&&(i=n[S],i!=null)&&(S==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ze(e,t,S,i,n,null));return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(i=0;i<er.length;i++)fe(er[i],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(i=n[z],i!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ze(e,t,z,i,n,null)}return;default:if(Vs(t)){for(V in n)n.hasOwnProperty(V)&&(i=n[V],i!==void 0&&bu(e,t,V,i,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(i=n[g],i!=null&&ze(e,t,g,i,n,null))}function v1(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,f=null,g=null,S=null,z=null,V=null;for(M in n){var j=n[M];if(n.hasOwnProperty(M)&&j!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":S=j;default:i.hasOwnProperty(M)||ze(e,t,M,null,i,j)}}for(var D in i){var M=i[D];if(j=n[D],i.hasOwnProperty(D)&&(M!=null||j!=null))switch(D){case"type":u=M;break;case"name":l=M;break;case"checked":z=M;break;case"defaultChecked":V=M;break;case"value":f=M;break;case"defaultValue":g=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,t));break;default:M!==j&&ze(e,t,D,M,i,j)}}Us(e,f,g,S,z,V,u,l);return;case"select":M=f=g=D=null;for(u in n)if(S=n[u],n.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":M=S;default:i.hasOwnProperty(u)||ze(e,t,u,null,i,S)}for(l in i)if(u=i[l],S=n[l],i.hasOwnProperty(l)&&(u!=null||S!=null))switch(l){case"value":D=u;break;case"defaultValue":g=u;break;case"multiple":f=u;default:u!==S&&ze(e,t,l,u,i,S)}t=g,n=f,i=M,D!=null?Da(e,!!n,D,!1):!!i!=!!n&&(t!=null?Da(e,!!n,t,!0):Da(e,!!n,n?[]:"",!1));return;case"textarea":M=D=null;for(g in n)if(l=n[g],n.hasOwnProperty(g)&&l!=null&&!i.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:ze(e,t,g,null,i,l)}for(f in i)if(l=i[f],u=n[f],i.hasOwnProperty(f)&&(l!=null||u!=null))switch(f){case"value":D=l;break;case"defaultValue":M=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==u&&ze(e,t,f,l,i,u)}Df(e,D,M);return;case"option":for(var Q in n)D=n[Q],n.hasOwnProperty(Q)&&D!=null&&!i.hasOwnProperty(Q)&&(Q==="selected"?e.selected=!1:ze(e,t,Q,null,i,D));for(S in i)D=i[S],M=n[S],i.hasOwnProperty(S)&&D!==M&&(D!=null||M!=null)&&(S==="selected"?e.selected=D&&typeof D!="function"&&typeof D!="symbol":ze(e,t,S,D,i,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in n)D=n[ee],n.hasOwnProperty(ee)&&D!=null&&!i.hasOwnProperty(ee)&&ze(e,t,ee,null,i,D);for(z in i)if(D=i[z],M=n[z],i.hasOwnProperty(z)&&D!==M&&(D!=null||M!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,t));break;default:ze(e,t,z,D,i,M)}return;default:if(Vs(t)){for(var De in n)D=n[De],n.hasOwnProperty(De)&&D!==void 0&&!i.hasOwnProperty(De)&&bu(e,t,De,void 0,i,D);for(V in i)D=i[V],M=n[V],!i.hasOwnProperty(V)||D===M||D===void 0&&M===void 0||bu(e,t,V,D,i,M);return}}for(var x in n)D=n[x],n.hasOwnProperty(x)&&D!=null&&!i.hasOwnProperty(x)&&ze(e,t,x,null,i,D);for(j in i)D=i[j],M=n[j],!i.hasOwnProperty(j)||D===M||D==null&&M==null||ze(e,t,j,D,i,M)}function Rm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function b1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var l=n[i],u=l.transferSize,f=l.initiatorType,g=l.duration;if(u&&g&&Rm(f)){for(f=0,g=l.responseEnd,i+=1;i<n.length;i++){var S=n[i],z=S.startTime;if(z>g)break;var V=S.transferSize,j=S.initiatorType;V&&Rm(j)&&(S=S.responseEnd,f+=V*(S<g?1:(g-z)/(S-z)))}if(--i,t+=8*(u+f)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Su=null,Tu=null;function Cl(e){return e.nodeType===9?e:e.ownerDocument}function Vm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Om(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Au(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Eu=null;function S1(){var e=window.event;return e&&e.type==="popstate"?e===Eu?!1:(Eu=e,!0):(Eu=null,!1)}var jm=typeof setTimeout=="function"?setTimeout:void 0,T1=typeof clearTimeout=="function"?clearTimeout:void 0,Bm=typeof Promise=="function"?Promise:void 0,A1=typeof queueMicrotask=="function"?queueMicrotask:typeof Bm<"u"?function(e){return Bm.resolve(null).then(e).catch(E1)}:jm;function E1(e){setTimeout(function(){throw e})}function kn(e){return e==="head"}function _m(e,t){var n=t,i=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(l),ri(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")nr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,nr(n);for(var u=n.firstChild;u;){var f=u.nextSibling,g=u.nodeName;u[Si]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=f}}else n==="body"&&nr(e.ownerDocument.body);n=l}while(n);ri(t)}function Nm(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function xu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":xu(n),Ms(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function x1(e,t,n,i){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Si])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function w1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_t(e.nextSibling),e===null))return null;return e}function Hm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_t(e.nextSibling),e===null))return null;return e}function wu(e){return e.data==="$?"||e.data==="$~"}function zu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function z1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Du=null;function Lm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return _t(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Gm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function km(e,t,n){switch(t=Cl(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function nr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ms(e)}var Nt=new Map,Xm=new Set;function Ul(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vn=k.d;k.d={f:D1,r:M1,D:C1,C:U1,L:R1,m:V1,X:j1,S:O1,M:B1};function D1(){var e=vn.f(),t=Tl();return e||t}function M1(e){var t=xa(e);t!==null&&t.tag===5&&t.type==="form"?rh(t):vn.r(e)}var ni=typeof document>"u"?null:document;function qm(e,t,n){var i=ni;if(i&&typeof t=="string"&&t){var l=Ct(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Xm.has(l)||(Xm.add(l),e={rel:e,crossOrigin:n,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),tt(t,"link",e),Fe(t),i.head.appendChild(t)))}}function C1(e){vn.D(e),qm("dns-prefetch",e,null)}function U1(e,t){vn.C(e,t),qm("preconnect",e,t)}function R1(e,t,n){vn.L(e,t,n);var i=ni;if(i&&e&&t){var l='link[rel="preload"][as="'+Ct(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Ct(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Ct(n.imageSizes)+'"]')):l+='[href="'+Ct(e)+'"]';var u=l;switch(t){case"style":u=ai(e);break;case"script":u=ii(e)}Nt.has(u)||(e=b({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Nt.set(u,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(ar(u))||t==="script"&&i.querySelector(ir(u))||(t=i.createElement("link"),tt(t,"link",e),Fe(t),i.head.appendChild(t)))}}function V1(e,t){vn.m(e,t);var n=ni;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ct(i)+'"][href="'+Ct(e)+'"]',u=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ii(e)}if(!Nt.has(u)&&(e=b({rel:"modulepreload",href:e},t),Nt.set(u,e),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ir(u)))return}i=n.createElement("link"),tt(i,"link",e),Fe(i),n.head.appendChild(i)}}}function O1(e,t,n){vn.S(e,t,n);var i=ni;if(i&&e){var l=wa(i).hoistableStyles,u=ai(e);t=t||"default";var f=l.get(u);if(!f){var g={loading:0,preload:null};if(f=i.querySelector(ar(u)))g.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Nt.get(u))&&Mu(e,n);var S=f=i.createElement("link");Fe(S),tt(S,"link",e),S._p=new Promise(function(z,V){S.onload=z,S.onerror=V}),S.addEventListener("load",function(){g.loading|=1}),S.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Rl(f,t,i)}f={type:"stylesheet",instance:f,count:1,state:g},l.set(u,f)}}}function j1(e,t){vn.X(e,t);var n=ni;if(n&&e){var i=wa(n).hoistableScripts,l=ii(e),u=i.get(l);u||(u=n.querySelector(ir(l)),u||(e=b({src:e,async:!0},t),(t=Nt.get(l))&&Cu(e,t),u=n.createElement("script"),Fe(u),tt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(l,u))}}function B1(e,t){vn.M(e,t);var n=ni;if(n&&e){var i=wa(n).hoistableScripts,l=ii(e),u=i.get(l);u||(u=n.querySelector(ir(l)),u||(e=b({src:e,async:!0,type:"module"},t),(t=Nt.get(l))&&Cu(e,t),u=n.createElement("script"),Fe(u),tt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(l,u))}}function Ym(e,t,n,i){var l=(l=ue.current)?Ul(l):null;if(!l)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ai(n.href),n=wa(l).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ai(n.href);var u=wa(l).hoistableStyles,f=u.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,f),(u=l.querySelector(ar(e)))&&!u._p&&(f.instance=u,f.state.loading=5),Nt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Nt.set(e,n),u||_1(l,e,n,f.state))),t&&i===null)throw Error(o(528,""));return f}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ii(n),n=wa(l).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function ai(e){return'href="'+Ct(e)+'"'}function ar(e){return'link[rel="stylesheet"]['+e+"]"}function Zm(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function _1(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),tt(t,"link",n),Fe(t),e.head.appendChild(t))}function ii(e){return'[src="'+Ct(e)+'"]'}function ir(e){return"script[async]"+e}function Qm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ct(n.href)+'"]');if(i)return t.instance=i,Fe(i),i;var l=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Fe(i),tt(i,"style",l),Rl(i,n.precedence,e),t.instance=i;case"stylesheet":l=ai(n.href);var u=e.querySelector(ar(l));if(u)return t.state.loading|=4,t.instance=u,Fe(u),u;i=Zm(n),(l=Nt.get(l))&&Mu(i,l),u=(e.ownerDocument||e).createElement("link"),Fe(u);var f=u;return f._p=new Promise(function(g,S){f.onload=g,f.onerror=S}),tt(u,"link",i),t.state.loading|=4,Rl(u,n.precedence,e),t.instance=u;case"script":return u=ii(n.src),(l=e.querySelector(ir(u)))?(t.instance=l,Fe(l),l):(i=n,(l=Nt.get(u))&&(i=b({},n),Cu(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),Fe(l),tt(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Rl(i,n.precedence,e));return t.instance}function Rl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,u=l,f=0;f<i.length;f++){var g=i[f];if(g.dataset.precedence===t)u=g;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Mu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Cu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vl=null;function Km(e,t,n){if(Vl===null){var i=new Map,l=Vl=new Map;l.set(n,i)}else l=Vl,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var u=n[l];if(!(u[Si]||u[Ie]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var f=u.getAttribute(t)||"";f=e+f;var g=i.get(f);g?g.push(u):i.set(f,[u])}}return i}function Pm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function N1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Fm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function H1(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=ai(i.href),u=t.querySelector(ar(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ol.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,Fe(u);return}u=t.ownerDocument||t,i=Zm(i),(l=Nt.get(l))&&Mu(i,l),u=u.createElement("link"),Fe(u);var f=u;f._p=new Promise(function(g,S){f.onload=g,f.onerror=S}),tt(u,"link",i),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ol.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Uu=0;function L1(e,t){return e.stylesheets&&e.count===0&&Bl(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Bl(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Uu===0&&(Uu=62500*b1());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bl(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Uu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function Ol(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var jl=null;function Bl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,jl=new Map,t.forEach(G1,e),jl=null,Ol.call(e))}function G1(e,t){if(!(t.state.loading&4)){var n=jl.get(e);if(n)var i=n.get(null);else{n=new Map,jl.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var f=l[u];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),i=f)}i&&n.set(null,i)}l=t.instance,f=l.getAttribute("data-precedence"),u=n.get(f)||i,u===i&&n.set(null,l),n.set(f,l),this.count++,i=Ol.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var rr={$$typeof:G,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function k1(e,t,n,i,l,u,f,g,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xs(0),this.hiddenUpdates=xs(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Jm(e,t,n,i,l,u,f,g,S,z,V,j){return e=new k1(e,t,n,f,S,z,V,j,g),t=1,u===!0&&(t|=24),u=Tt(3,null,null,t),e.current=u,u.stateNode=e,t=oo(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:i,isDehydrated:n,cache:t},ho(u),e}function Im(e){return e?(e=Ba,e):Ba}function Wm(e,t,n,i,l,u){l=Im(l),i.context===null?i.context=l:i.pendingContext=l,i=Un(t),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Rn(e,i,t),n!==null&&(pt(n,e,t),Ni(n,e,t))}function $m(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ru(e,t){$m(e,t),(e=e.alternate)&&$m(e,t)}function eg(e){if(e.tag===13||e.tag===31){var t=aa(e,67108864);t!==null&&pt(t,e,67108864),Ru(e,67108864)}}function tg(e){if(e.tag===13||e.tag===31){var t=zt();t=ws(t);var n=aa(e,t);n!==null&&pt(n,e,t),Ru(e,t)}}var _l=!0;function X1(e,t,n,i){var l=R.T;R.T=null;var u=k.p;try{k.p=2,Vu(e,t,n,i)}finally{k.p=u,R.T=l}}function q1(e,t,n,i){var l=R.T;R.T=null;var u=k.p;try{k.p=8,Vu(e,t,n,i)}finally{k.p=u,R.T=l}}function Vu(e,t,n,i){if(_l){var l=Ou(i);if(l===null)vu(e,t,i,Nl,n),ag(e,i);else if(Z1(l,e,t,n,i))i.stopPropagation();else if(ag(e,i),t&4&&-1<Y1.indexOf(e)){for(;l!==null;){var u=xa(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var f=Wn(u.pendingLanes);if(f!==0){var g=u;for(g.pendingLanes|=2,g.entangledLanes|=2;f;){var S=1<<31-bt(f);g.entanglements[1]|=S,f&=~S}Ft(u),(be&6)===0&&(bl=yt()+500,$i(0))}}break;case 31:case 13:g=aa(u,2),g!==null&&pt(g,u,2),Tl(),Ru(u,2)}if(u=Ou(i),u===null&&vu(e,t,i,Nl,n),u===l)break;l=u}l!==null&&i.stopPropagation()}else vu(e,t,i,null,n)}}function Ou(e){return e=js(e),ju(e)}var Nl=null;function ju(e){if(Nl=null,e=Ea(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=d(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nl=e,null}function ng(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(C0()){case cf:return 2;case ff:return 8;case zr:case U0:return 32;case df:return 268435456;default:return 32}default:return 32}}var Bu=!1,Xn=null,qn=null,Yn=null,lr=new Map,sr=new Map,Zn=[],Y1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ag(e,t){switch(e){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(t.pointerId)}}function or(e,t,n,i,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[l]},t!==null&&(t=xa(t),t!==null&&eg(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Z1(e,t,n,i,l){switch(t){case"focusin":return Xn=or(Xn,e,t,n,i,l),!0;case"dragenter":return qn=or(qn,e,t,n,i,l),!0;case"mouseover":return Yn=or(Yn,e,t,n,i,l),!0;case"pointerover":var u=l.pointerId;return lr.set(u,or(lr.get(u)||null,e,t,n,i,l)),!0;case"gotpointercapture":return u=l.pointerId,sr.set(u,or(sr.get(u)||null,e,t,n,i,l)),!0}return!1}function ig(e){var t=Ea(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=d(n),t!==null){e.blockedOn=t,vf(e.priority,function(){tg(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,vf(e.priority,function(){tg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ou(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Os=i,n.target.dispatchEvent(i),Os=null}else return t=xa(n),t!==null&&eg(t),e.blockedOn=n,!1;t.shift()}return!0}function rg(e,t,n){Hl(e)&&n.delete(t)}function Q1(){Bu=!1,Xn!==null&&Hl(Xn)&&(Xn=null),qn!==null&&Hl(qn)&&(qn=null),Yn!==null&&Hl(Yn)&&(Yn=null),lr.forEach(rg),sr.forEach(rg)}function Ll(e,t){e.blockedOn===t&&(e.blockedOn=null,Bu||(Bu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Q1)))}var Gl=null;function lg(e){Gl!==e&&(Gl=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Gl===e&&(Gl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(ju(i||n)===null)continue;break}var u=xa(n);u!==null&&(e.splice(t,3),t-=3,Oo(u,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function ri(e){function t(S){return Ll(S,e)}Xn!==null&&Ll(Xn,e),qn!==null&&Ll(qn,e),Yn!==null&&Ll(Yn,e),lr.forEach(t),sr.forEach(t);for(var n=0;n<Zn.length;n++){var i=Zn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Zn.length&&(n=Zn[0],n.blockedOn===null);)ig(n),n.blockedOn===null&&Zn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],u=n[i+1],f=l[ct]||null;if(typeof u=="function")f||lg(n);else if(f){var g=null;if(u&&u.hasAttribute("formAction")){if(l=u,f=u[ct]||null)g=f.formAction;else if(ju(l)!==null)continue}else g=f.action;typeof g=="function"?n[i+1]=g:(n.splice(i,3),i-=3),lg(n)}}}function sg(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(f){return l=f})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function _u(e){this._internalRoot=e}kl.prototype.render=_u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=zt();Wm(n,i,e,t,null,null)},kl.prototype.unmount=_u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wm(e.current,2,null,e,null,null),Tl(),t[Aa]=null}};function kl(e){this._internalRoot=e}kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=yf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zn.length&&t!==0&&t<Zn[n].priority;n++);Zn.splice(n,0,e),n===0&&ig(e)}};var og=r.version;if(og!=="19.2.8")throw Error(o(527,og,"19.2.8"));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var K1={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{yi=Xl.inject(K1),vt=Xl}catch{}}return cr.createRoot=function(e,t){if(!c(e))throw Error(o(299));var n=!1,i="",l=gh,u=ph,f=yh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=Jm(e,1,!1,null,null,n,i,null,l,u,f,sg),e[Aa]=t.current,yu(e),new _u(t)},cr.hydrateRoot=function(e,t,n){if(!c(e))throw Error(o(299));var i=!1,l="",u=gh,f=ph,g=yh,S=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=Jm(e,1,!0,t,n??null,i,l,S,u,f,g,sg),t.context=Im(null),n=t.current,i=zt(),i=ws(i),l=Un(i),l.callback=null,Rn(n,l,i),n=i,t.current.lanes=n,bi(t,n),Ft(t),e[Aa]=t.current,yu(e),new kl(t)},cr.version="19.2.8",cr}var vg;function ab(){if(vg)return Lu.exports;vg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Lu.exports=nb(),Lu.exports}var ib=ab();const jp=I.createContext(null);function di(){const a=I.use(jp);if(!a)throw new Error("useLanguage must be used inside LanguageProvider.");return a}function rb(){const{copy:a,locale:r}=di();return U.jsxs("footer",{className:"site-footer",children:[U.jsxs("div",{className:"footer-identity",children:[U.jsx("img",{src:"/media/avatar.jpg",alt:"",width:"640",height:"640",loading:"lazy"}),U.jsxs("div",{children:[U.jsx("strong",{children:a.footer.copyright}),U.jsx("span",{children:a.hero.role})]})]}),U.jsx("p",{children:r==="zh"?"技术美术 · 引擎工具 · AIGC":"Technical art · Engine tools · AIGC"}),U.jsxs("a",{href:"#top",children:[r==="zh"?"回到顶部":"Back to top"," ",U.jsx("span",{"aria-hidden":"true",children:"↑"})]})]})}function lb(){const{locale:a,copy:r,setLocale:s}=di(),[o,c]=I.useState(""),h=d=>{d!==a&&(s(d),c(d==="zh"?"语言已切换为中文。":"Language changed to English."))};return U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:"language-toggle",role:"group","aria-label":r.language.label,children:[U.jsxs("button",{type:"button",className:a==="en"?"is-active":void 0,"aria-pressed":a==="en",onClick:()=>h("en"),children:["EN",U.jsx("span",{className:"sr-only",children:r.language.english})]}),U.jsx("button",{type:"button",className:a==="zh"?"is-active":void 0,"aria-pressed":a==="zh",onClick:()=>h("zh"),children:"中文"})]}),U.jsx("span",{className:"sr-only","aria-live":"polite",children:o})]})}function sb(){const{copy:a}=di();return U.jsxs("header",{className:"site-header",children:[U.jsxs("a",{className:"brand-link",href:"#top","aria-label":"Lucas Shen, home",children:[U.jsx("span",{lang:"zh-CN",children:"沈裕焱"}),U.jsx("span",{children:"Lucas Shen"})]}),U.jsxs("div",{className:"header-actions",children:[U.jsx("nav",{className:"site-nav","aria-label":a.nav.aria,children:U.jsx("a",{href:"#portfolio",children:a.nav.work})}),U.jsx(lb,{})]})]})}function ob(){const{copy:a,locale:r}=di();return U.jsxs("section",{className:"profile-strip","aria-labelledby":"hero-title",children:[U.jsx("img",{src:"/media/avatar.jpg",alt:"Lucas Shen hand-drawn avatar",width:"640",height:"640",fetchPriority:"high"}),U.jsxs("div",{className:"profile-name",children:[U.jsxs("h1",{id:"hero-title",children:[U.jsx("span",{lang:"zh-CN",children:"沈裕焱"}),U.jsx("span",{children:"Lucas Shen"})]}),U.jsx("p",{children:a.hero.role})]}),U.jsx("p",{className:"profile-intro",children:r==="zh"?"游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线作品。":"Games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines."})]})}const Bp=I.createContext({});function ub(a){const r=I.useRef(null);return r.current===null&&(r.current=a()),r.current}const cb=typeof window<"u",fb=cb?I.useLayoutEffect:I.useEffect,Oc=I.createContext(null);function jc(a,r){a.indexOf(r)===-1&&a.push(r)}function ns(a,r){const s=a.indexOf(r);s>-1&&a.splice(s,1)}const $t=(a,r,s)=>s>r?r:s<a?a:s;let hs=()=>{};const Pn={},_p=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),Np=a=>typeof a=="object"&&a!==null,Hp=a=>/^0[^.\s]+$/u.test(a);function Lp(a){let r;return()=>(r===void 0&&(r=a()),r)}const Lt=a=>a,Tr=(...a)=>a.reduce((r,s)=>o=>s(r(o))),yr=(a,r,s)=>{const o=r-a;return o?(s-a)/o:1};class Bc{constructor(){this.subscriptions=[]}add(r){return jc(this.subscriptions,r),()=>ns(this.subscriptions,r)}notify(r,s,o){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](r,s,o);else for(let h=0;h<c;h++){const d=this.subscriptions[h];d&&d(r,s,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Dt=a=>a*1e3,Ht=a=>a/1e3,Gp=(a,r)=>r?a*(1e3/r):0,kp=(a,r,s)=>(((1-3*s+3*r)*a+(3*s-6*r))*a+3*r)*a,db=1e-7,hb=12;function mb(a,r,s,o,c){let h,d,p=0;do d=r+(s-r)/2,h=kp(d,o,c)-a,h>0?s=d:r=d;while(Math.abs(h)>db&&++p<hb);return d}function Ar(a,r,s,o){if(a===r&&s===o)return Lt;const c=h=>mb(h,0,1,a,s);return h=>h===0||h===1?h:kp(c(h),r,o)}const Xp=a=>r=>r<=.5?a(2*r)/2:(2-a(2*(1-r)))/2,qp=a=>r=>1-a(1-r),Yp=Ar(.33,1.53,.69,.99),_c=qp(Yp),Zp=Xp(_c),Qp=a=>a>=1?1:(a*=2)<1?.5*_c(a):.5*(2-Math.pow(2,-10*(a-1))),Nc=a=>1-Math.sin(Math.acos(a)),Kp=qp(Nc),Pp=Xp(Nc),gb=Ar(.42,0,1,1),pb=Ar(0,0,.58,1),Fp=Ar(.42,0,.58,1),yb=a=>Array.isArray(a)&&typeof a[0]!="number",Jp=a=>Array.isArray(a)&&typeof a[0]=="number",vb={linear:Lt,easeIn:gb,easeInOut:Fp,easeOut:pb,circIn:Nc,circInOut:Pp,circOut:Kp,backIn:_c,backInOut:Zp,backOut:Yp,anticipate:Qp},bb=a=>typeof a=="string",bg=a=>{if(Jp(a)){hs(a.length===4);const[r,s,o,c]=a;return Ar(r,s,o,c)}else if(bb(a))return vb[a];return a},ql=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Sb(a){let r=new Set,s=new Set,o=!1,c=!1;const h=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function p(m){h.has(m)&&(y.schedule(m),a()),m(d)}const y={schedule:(m,v=!1,b=!1)=>{const _=b&&o?r:s;return v&&h.add(m),_.add(m),m},cancel:m=>{s.delete(m),h.delete(m)},process:m=>{if(d=m,o){c=!0;return}o=!0;const v=r;r=s,s=v,r.forEach(p),r.clear(),o=!1,c&&(c=!1,y.process(m))}};return y}const Tb=40;function Ip(a,r){let s=!1,o=!0;const c={delta:0,timestamp:0,isProcessing:!1},h=()=>s=!0,d=ql.reduce((G,Y)=>(G[Y]=Sb(h),G),{}),{setup:p,read:y,resolveKeyframes:m,preUpdate:v,update:b,preRender:E,render:_,postRender:C}=d,N=()=>{const G=Pn.useManualTiming,Y=G?c.timestamp:performance.now();s=!1,G||(c.delta=o?1e3/60:Math.max(Math.min(Y-c.timestamp,Tb),1)),c.timestamp=Y,c.isProcessing=!0,p.process(c),y.process(c),m.process(c),v.process(c),b.process(c),E.process(c),_.process(c),C.process(c),c.isProcessing=!1,s&&r&&(o=!1,a(N))},L=()=>{s=!0,o=!0,c.isProcessing||a(N)};return{schedule:ql.reduce((G,Y)=>{const ne=d[Y];return G[Y]=(oe,K=!1,W=!1)=>(s||L(),ne.schedule(oe,K,W)),G},{}),cancel:G=>{for(let Y=0;Y<ql.length;Y++)d[ql[Y]].cancel(G)},state:c,steps:d}}const{schedule:Ue,cancel:Fn,state:nt,steps:qu}=Ip(typeof requestAnimationFrame<"u"?requestAnimationFrame:Lt,!0);let Kl;function Ab(){Kl=void 0}const ot={now:()=>(Kl===void 0&&ot.set(nt.isProcessing||Pn.useManualTiming?nt.timestamp:performance.now()),Kl),set:a=>{Kl=a,queueMicrotask(Ab)}},Wp=a=>r=>typeof r=="string"&&r.startsWith(a),$p=Wp("--"),Eb=Wp("var(--"),Hc=a=>Eb(a)?xb.test(a.split("/*")[0].trim()):!1,xb=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Sg(a){return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")}const hi={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},vr={...hi,transform:a=>$t(0,1,a)},Yl={...hi,default:1},hr=a=>Math.round(a*1e5)/1e5,Lc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function wb(a){return a==null}const zb=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Gc=(a,r)=>s=>!!(typeof s=="string"&&zb.test(s)&&s.startsWith(a)||r&&!wb(s)&&Object.prototype.hasOwnProperty.call(s,r)),ey=(a,r,s)=>o=>{if(typeof o!="string")return o;const[c,h,d,p]=o.match(Lc);return{[a]:parseFloat(c),[r]:parseFloat(h),[s]:parseFloat(d),alpha:p!==void 0?parseFloat(p):1}},Db=a=>$t(0,255,a),Yu={...hi,transform:a=>Math.round(Db(a))},va={test:Gc("rgb","red"),parse:ey("red","green","blue"),transform:({red:a,green:r,blue:s,alpha:o=1})=>"rgba("+Yu.transform(a)+", "+Yu.transform(r)+", "+Yu.transform(s)+", "+hr(vr.transform(o))+")"};function Mb(a){let r="",s="",o="",c="";return a.length>5?(r=a.substring(1,3),s=a.substring(3,5),o=a.substring(5,7),c=a.substring(7,9)):(r=a.substring(1,2),s=a.substring(2,3),o=a.substring(3,4),c=a.substring(4,5),r+=r,s+=s,o+=o,c+=c),{red:parseInt(r,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:c?parseInt(c,16)/255:1}}const lc={test:Gc("#"),parse:Mb,transform:va.transform},Er=a=>({test:r=>typeof r=="string"&&r.endsWith(a)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${a}`}),bn=Er("deg"),Wt=Er("%"),P=Er("px"),Cb=Er("vh"),Ub=Er("vw"),Tg={...Wt,parse:a=>Wt.parse(a)/100,transform:a=>Wt.transform(a*100)},si={test:Gc("hsl","hue"),parse:ey("hue","saturation","lightness"),transform:({hue:a,saturation:r,lightness:s,alpha:o=1})=>"hsla("+Math.round(a)+", "+Wt.transform(hr(r))+", "+Wt.transform(hr(s))+", "+hr(vr.transform(o))+")"},Qe={test:a=>va.test(a)||lc.test(a)||si.test(a),parse:a=>va.test(a)?va.parse(a):si.test(a)?si.parse(a):lc.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?va.transform(a):si.transform(a),getAnimatableNone:a=>{const r=Qe.parse(a);return r.alpha=0,Qe.transform(r)}},Rb=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Vb(a){return isNaN(a)&&typeof a=="string"&&(a.match(Lc)?.length||0)+(a.match(Rb)?.length||0)>0}const ty="number",ny="color",Ob="var",jb="var(",Ag="${}",Bb=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ci(a){const r=a.toString(),s=[],o={color:[],number:[],var:[]},c=[];let h=0;const p=r.replace(Bb,y=>(Qe.test(y)?(o.color.push(h),c.push(ny),s.push(Qe.parse(y))):y.startsWith(jb)?(o.var.push(h),c.push(Ob),s.push(y)):(o.number.push(h),c.push(ty),s.push(parseFloat(y))),++h,Ag)).split(Ag);return{values:s,split:p,indexes:o,types:c}}function _b(a){return ci(a).values}function ay({split:a,types:r}){const s=a.length;return o=>{let c="";for(let h=0;h<s;h++)if(c+=a[h],o[h]!==void 0){const d=r[h];d===ty?c+=hr(o[h]):d===ny?c+=Qe.transform(o[h]):c+=o[h]}return c}}function Nb(a){return ay(ci(a))}const Hb=a=>typeof a=="number"?0:Qe.test(a)?Qe.getAnimatableNone(a):a,Lb=(a,r)=>typeof a=="number"?r?.trim().endsWith("/")?a:0:Hb(a);function Gb(a){const r=ci(a);return ay(r)(r.values.map((o,c)=>Lb(o,r.split[c])))}const Zt={test:Vb,parse:_b,createTransformer:Nb,getAnimatableNone:Gb};function Zu(a,r,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?a+(r-a)*6*s:s<1/2?r:s<2/3?a+(r-a)*(2/3-s)*6:a}function kb({hue:a,saturation:r,lightness:s,alpha:o}){a/=360,r/=100,s/=100;let c=0,h=0,d=0;if(!r)c=h=d=s;else{const p=s<.5?s*(1+r):s+r-s*r,y=2*s-p;c=Zu(y,p,a+1/3),h=Zu(y,p,a),d=Zu(y,p,a-1/3)}return{red:Math.round(c*255),green:Math.round(h*255),blue:Math.round(d*255),alpha:o}}function as(a,r){return s=>s>0?r:a}const Ce=(a,r,s)=>a+(r-a)*s,Qu=(a,r,s)=>{const o=a*a,c=s*(r*r-o)+o;return c<0?0:Math.sqrt(c)},Xb=[lc,va,si],qb=a=>Xb.find(r=>r.test(a));function Eg(a){const r=qb(a);if(!r)return!1;let s=r.parse(a);return r===si&&(s=kb(s)),s}const xg=(a,r)=>{const s=Eg(a),o=Eg(r);if(!s||!o)return as(a,r);const c={...s};return h=>(c.red=Qu(s.red,o.red,h),c.green=Qu(s.green,o.green,h),c.blue=Qu(s.blue,o.blue,h),c.alpha=Ce(s.alpha,o.alpha,h),va.transform(c))},sc=new Set(["none","hidden"]);function Yb(a,r){return sc.has(a)?s=>s<=0?a:r:s=>s>=1?r:a}function Zb(a,r){return s=>Ce(a,r,s)}function kc(a){return typeof a=="number"?Zb:typeof a=="string"?Hc(a)?as:Qe.test(a)?xg:Pb:Array.isArray(a)?iy:typeof a=="object"?Qe.test(a)?xg:Qb:as}function iy(a,r){const s=[...a],o=s.length,c=a.map((h,d)=>kc(h)(h,r[d]));return h=>{for(let d=0;d<o;d++)s[d]=c[d](h);return s}}function Qb(a,r){const s={...a,...r},o={};for(const c in s)a[c]!==void 0&&r[c]!==void 0&&(o[c]=kc(a[c])(a[c],r[c]));return c=>{for(const h in o)s[h]=o[h](c);return s}}function Kb(a,r){const s=[],o={color:0,var:0,number:0};for(let c=0;c<r.values.length;c++){const h=r.types[c],d=a.indexes[h][o[h]],p=a.values[d]??0;s[c]=p,o[h]++}return s}const Pb=(a,r)=>{const s=Zt.createTransformer(r),o=ci(a),c=ci(r);return o.indexes.var.length===c.indexes.var.length&&o.indexes.color.length===c.indexes.color.length&&o.indexes.number.length>=c.indexes.number.length?sc.has(a)&&!c.values.length||sc.has(r)&&!o.values.length?Yb(a,r):Tr(iy(Kb(o,c),c.values),s):as(a,r)};function ry(a,r,s){return typeof a=="number"&&typeof r=="number"&&typeof s=="number"?Ce(a,r,s):kc(a)(a,r)}const Fb=a=>{const r=({timestamp:s})=>a(s);return{start:(s=!0)=>Ue.update(r,s),stop:()=>Fn(r),now:()=>nt.isProcessing?nt.timestamp:ot.now()}},ly=(a,r,s=10)=>{let o="";const c=Math.max(Math.round(r/s),2);for(let h=0;h<c;h++)o+=Math.round(a(h/(c-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},is=2e4;function Xc(a){let r=0;const s=50;let o=a.next(r);for(;!o.done&&r<is;)r+=s,o=a.next(r);return r>=is?1/0:r}function Jb(a,r=100,s){const o=s({...a,keyframes:[0,r]}),c=Math.min(Xc(o),is);return{type:"keyframes",ease:h=>o.next(c*h).value/r,duration:Ht(c)}}const _e={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function oc(a,r){return a*Math.sqrt(1-r*r)}const Ib=12;function Wb(a,r,s){let o=s;for(let c=1;c<Ib;c++)o=o-a(o)/r(o);return o}const Ku=.001;function $b({duration:a=_e.duration,bounce:r=_e.bounce,velocity:s=_e.velocity,mass:o=_e.mass}){let c,h,d=1-r;d=$t(_e.minDamping,_e.maxDamping,d),a=$t(_e.minDuration,_e.maxDuration,Ht(a)),d<1?(c=m=>{const v=m*d,b=v*a,E=v-s,_=oc(m,d),C=Math.exp(-b);return Ku-E/_*C},h=m=>{const b=m*d*a,E=b*s+s,_=Math.pow(d,2)*Math.pow(m,2)*a,C=Math.exp(-b),N=oc(Math.pow(m,2),d);return(-c(m)+Ku>0?-1:1)*((E-_)*C)/N}):(c=m=>{const v=Math.exp(-m*a),b=(m-s)*a+1;return-Ku+v*b},h=m=>{const v=Math.exp(-m*a),b=(s-m)*(a*a);return v*b});const p=5/a,y=Wb(c,h,p);if(a=Dt(a),isNaN(y))return{stiffness:_e.stiffness,damping:_e.damping,duration:a};{const m=Math.pow(y,2)*o;return{stiffness:m,damping:d*2*Math.sqrt(o*m),duration:a}}}const e2=["duration","bounce"],t2=["stiffness","damping","mass"];function wg(a,r){return r.some(s=>a[s]!==void 0)}function n2(a){let r={velocity:_e.velocity,stiffness:_e.stiffness,damping:_e.damping,mass:_e.mass,isResolvedFromDuration:!1,...a};if(!wg(a,t2)&&wg(a,e2))if(r.velocity=0,a.visualDuration){const s=a.visualDuration,o=2*Math.PI/(s*1.2),c=o*o,h=2*$t(.05,1,1-(a.bounce||0))*Math.sqrt(c);r={...r,mass:_e.mass,stiffness:c,damping:h}}else{const s=$b({...a,velocity:0});r={...r,...s,mass:_e.mass},r.isResolvedFromDuration=!0}return r}function rs(a=_e.visualDuration,r=_e.bounce){const s=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:r}:a;let{restSpeed:o,restDelta:c}=s;const h=s.keyframes[0],d=s.keyframes[s.keyframes.length-1],p={done:!1,value:h},{stiffness:y,damping:m,mass:v,duration:b,velocity:E,isResolvedFromDuration:_}=n2({...s,velocity:-Ht(s.velocity||0)}),C=E||0,N=m/(2*Math.sqrt(y*v)),L=d-h,H=Ht(Math.sqrt(y/v)),X=Math.abs(L)<5;o||(o=X?_e.restSpeed.granular:_e.restSpeed.default),c||(c=X?_e.restDelta.granular:_e.restDelta.default);let G,Y,ne,oe,K,W;if(N<1)ne=oc(H,N),oe=(C+N*H*L)/ne,G=te=>{const ve=Math.exp(-N*H*te);return d-ve*(oe*Math.sin(ne*te)+L*Math.cos(ne*te))},K=N*H*oe+L*ne,W=N*H*L-oe*ne,Y=te=>Math.exp(-N*H*te)*(K*Math.sin(ne*te)+W*Math.cos(ne*te));else if(N===1){G=ve=>d-Math.exp(-H*ve)*(L+(C+H*L)*ve);const te=C+H*L;Y=ve=>Math.exp(-H*ve)*(H*te*ve-C)}else{const te=H*Math.sqrt(N*N-1);G=ke=>{const Ne=Math.exp(-N*H*ke),R=Math.min(te*ke,300);return d-Ne*((C+N*H*L)*Math.sinh(R)+te*L*Math.cosh(R))/te};const ve=(C+N*H*L)/te,Te=N*H*ve-L*te,rt=N*H*L-ve*te;Y=ke=>{const Ne=Math.exp(-N*H*ke),R=Math.min(te*ke,300);return Ne*(Te*Math.sinh(R)+rt*Math.cosh(R))}}const xe={calculatedDuration:_&&b||null,velocity:te=>Dt(Y(te)),next:te=>{if(!_&&N<1){const Te=Math.exp(-N*H*te),rt=Math.sin(ne*te),ke=Math.cos(ne*te),Ne=d-Te*(oe*rt+L*ke),R=Dt(Te*(K*rt+W*ke));return p.done=Math.abs(R)<=o&&Math.abs(d-Ne)<=c,p.value=p.done?d:Ne,p}const ve=G(te);if(_)p.done=te>=b;else{const Te=Dt(Y(te));p.done=Math.abs(Te)<=o&&Math.abs(d-ve)<=c}return p.value=p.done?d:ve,p},toString:()=>{const te=Math.min(Xc(xe),is),ve=ly(Te=>xe.next(te*Te).value,te,30);return te+"ms "+ve},toTransition:()=>{}};return xe}rs.applyToOptions=a=>{const r=Jb(a,100,rs);return a.ease=r.ease,a.duration=Dt(r.duration),a.type="keyframes",a};const a2=5;function sy(a,r,s){const o=Math.max(r-a2,0);return Gp(s-a(o),r-o)}function uc({keyframes:a,velocity:r=0,power:s=.8,timeConstant:o=325,bounceDamping:c=10,bounceStiffness:h=500,modifyTarget:d,min:p,max:y,restDelta:m=.5,restSpeed:v}){const b=a[0],E={done:!1,value:b},_=W=>p!==void 0&&W<p||y!==void 0&&W>y,C=W=>p===void 0?y:y===void 0||Math.abs(p-W)<Math.abs(y-W)?p:y;let N=s*r;const L=b+N,H=d===void 0?L:d(L);H!==L&&(N=H-b);const X=W=>-N*Math.exp(-W/o),G=W=>H+X(W),Y=W=>{const xe=X(W),te=G(W);E.done=Math.abs(xe)<=m,E.value=E.done?H:te};let ne,oe;const K=W=>{_(E.value)&&(ne=W,oe=rs({keyframes:[E.value,C(E.value)],velocity:sy(G,W,E.value),damping:c,stiffness:h,restDelta:m,restSpeed:v}))};return K(0),{calculatedDuration:null,next:W=>{let xe=!1;return!oe&&ne===void 0&&(xe=!0,Y(W),K(W)),ne!==void 0&&W>=ne?oe.next(W-ne):(!xe&&Y(W),E)}}}function i2(a,r,s){const o=[],c=s||Pn.mix||ry,h=a.length-1;for(let d=0;d<h;d++){let p=c(a[d],a[d+1]);if(r){const y=Array.isArray(r)?r[d]||Lt:r;p=Tr(y,p)}o.push(p)}return o}function r2(a,r,{clamp:s=!0,ease:o,mixer:c}={}){const h=a.length;if(hs(h===r.length),h===1)return()=>r[0];if(h===2&&r[0]===r[1])return()=>r[1];const d=a[0]===a[1];a[0]>a[h-1]&&(a=[...a].reverse(),r=[...r].reverse());const p=i2(r,o,c),y=p.length,m=v=>{if(d&&v<a[0])return r[0];let b=0;if(y>1)for(;b<a.length-2&&!(v<a[b+1]);b++);const E=yr(a[b],a[b+1],v);return p[b](E)};return s?v=>m($t(a[0],a[h-1],v)):m}function l2(a,r){const s=a[a.length-1];for(let o=1;o<=r;o++){const c=yr(0,r,o);a.push(Ce(s,1,c))}}function s2(a){const r=[0];return l2(r,a.length-1),r}function o2(a,r){return a.map(s=>s*r)}function u2(a,r){return a.map(()=>r||Fp).splice(0,a.length-1)}function mr({duration:a=300,keyframes:r,times:s,ease:o="easeInOut"}){const c=yb(o)?o.map(bg):bg(o),h={done:!1,value:r[0]},d=o2(s&&s.length===r.length?s:s2(r),a),p=r2(d,r,{ease:Array.isArray(c)?c:u2(r,c)});return{calculatedDuration:a,next:y=>(h.value=p(y),h.done=y>=a,h)}}const c2=a=>a!==null;function ms(a,{repeat:r,repeatType:s="loop"},o,c=1){const h=a.filter(c2),p=c<0||r&&s!=="loop"&&r%2===1?0:h.length-1;return!p||o===void 0?h[p]:o}const f2={decay:uc,inertia:uc,tween:mr,keyframes:mr,spring:rs};function oy(a){typeof a.type=="string"&&(a.type=f2[a.type])}class qc{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(r=>{this.resolve=r})}notifyFinished(){this.resolve()}then(r,s){return this.finished.then(r,s)}}const d2=a=>a/100;class ls extends qc{constructor(r){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:s}=this.options;s&&s.updatedAt!==ot.now()&&this.tick(ot.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=r,this.initAnimation(),this.play(),r.autoplay===!1&&this.pause()}initAnimation(){const{options:r}=this;oy(r);const{type:s=mr,repeat:o=0,repeatDelay:c=0,repeatType:h,velocity:d=0}=r;let{keyframes:p}=r;const y=s||mr;y!==mr&&typeof p[0]!="number"&&(this.mixKeyframes=Tr(d2,ry(p[0],p[1])),p=[0,100]);const m=y({...r,keyframes:p});h==="mirror"&&(this.mirroredGenerator=y({...r,keyframes:[...p].reverse(),velocity:-d})),m.calculatedDuration===null&&(m.calculatedDuration=Xc(m));const{calculatedDuration:v}=m;this.calculatedDuration=v,this.resolvedDuration=v+c,this.totalDuration=this.resolvedDuration*(o+1)-c,this.generator=m}updateTime(r){const s=Math.round(r-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=s}tick(r,s=!1){const{generator:o,totalDuration:c,mixKeyframes:h,mirroredGenerator:d,resolvedDuration:p,calculatedDuration:y}=this;if(this.startTime===null)return o.next(0);const{delay:m=0,keyframes:v,repeat:b,repeatType:E,repeatDelay:_,type:C,onUpdate:N,finalKeyframe:L}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-c/this.speed,this.startTime)),s?this.currentTime=r:this.updateTime(r);const H=this.currentTime-m*(this.playbackSpeed>=0?1:-1),X=this.playbackSpeed>=0?H<0:H>c;this.currentTime=Math.max(H,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let G=this.currentTime,Y=o;if(b){const W=Math.min(this.currentTime,c)/p;let xe=Math.floor(W),te=W%1;!te&&W>=1&&(te=1),te===1&&xe--,xe=Math.min(xe,b+1),xe%2&&(E==="reverse"?(te=1-te,_&&(te-=_/p)):E==="mirror"&&(Y=d)),G=$t(0,1,te)*p}let ne;X?(this.delayState.value=v[0],ne=this.delayState):ne=Y.next(G),h&&!X&&(ne.value=h(ne.value));let{done:oe}=ne;!X&&y!==null&&(oe=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const K=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&oe);return K&&C!==uc&&(ne.value=ms(v,this.options,L,this.speed)),N&&N(ne.value),K&&this.finish(),ne}then(r,s){return this.finished.then(r,s)}get duration(){return Ht(this.calculatedDuration)}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Ht(r)}get time(){return Ht(this.currentTime)}set time(r){r=Dt(r),this.currentTime=r,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=r,this.tick(r))}getGeneratorVelocity(){const r=this.currentTime;if(r<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(r);const s=this.generator.next(r).value;return sy(o=>this.generator.next(o).value,r,s)}get speed(){return this.playbackSpeed}set speed(r){const s=this.playbackSpeed!==r;s&&this.driver&&this.updateTime(ot.now()),this.playbackSpeed=r,s&&this.driver&&(this.time=Ht(this.currentTime))}play(){if(this.isStopped)return;const{driver:r=Fb,startTime:s}=this.options;this.driver||(this.driver=r(c=>this.tick(c))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=s??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ot.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}attachTimeline(r){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),r.observe(this)}}function h2(a){for(let r=1;r<a.length;r++)a[r]??(a[r]=a[r-1])}const ba=a=>a*180/Math.PI,cc=a=>{const r=ba(Math.atan2(a[1],a[0]));return fc(r)},m2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:cc,rotateZ:cc,skewX:a=>ba(Math.atan(a[1])),skewY:a=>ba(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},fc=a=>(a=a%360,a<0&&(a+=360),a),zg=cc,Dg=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),Mg=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),g2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Dg,scaleY:Mg,scale:a=>(Dg(a)+Mg(a))/2,rotateX:a=>fc(ba(Math.atan2(a[6],a[5]))),rotateY:a=>fc(ba(Math.atan2(-a[2],a[0]))),rotateZ:zg,rotate:zg,skewX:a=>ba(Math.atan(a[4])),skewY:a=>ba(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function dc(a){return a.includes("scale")?1:0}function hc(a,r){if(!a||a==="none")return dc(r);const s=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,c;if(s)o=g2,c=s;else{const p=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=m2,c=p}if(!c)return dc(r);const h=o[r],d=c[1].split(",").map(y2);return typeof h=="function"?h(d):d[h]}const p2=(a,r)=>{const{transform:s="none"}=getComputedStyle(a);return hc(s,r)};function y2(a){return parseFloat(a.trim())}const mi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gi=new Set([...mi,"pathRotation"]),Cg=a=>a===hi||a===P,v2=new Set(["x","y","z"]),b2=mi.filter(a=>!v2.has(a));function S2(a){const r=[];return b2.forEach(s=>{const o=a.getValue(s);o!==void 0&&(r.push([s,o.get()]),o.set(s.startsWith("scale")?1:0))}),r}const Kn={width:({x:a},{paddingLeft:r="0",paddingRight:s="0",boxSizing:o})=>{const c=a.max-a.min;return o==="border-box"?c:c-parseFloat(r)-parseFloat(s)},height:({y:a},{paddingTop:r="0",paddingBottom:s="0",boxSizing:o})=>{const c=a.max-a.min;return o==="border-box"?c:c-parseFloat(r)-parseFloat(s)},top:(a,{top:r})=>parseFloat(r),left:(a,{left:r})=>parseFloat(r),bottom:({y:a},{top:r})=>parseFloat(r)+(a.max-a.min),right:({x:a},{left:r})=>parseFloat(r)+(a.max-a.min),x:(a,{transform:r})=>hc(r,"x"),y:(a,{transform:r})=>hc(r,"y")};Kn.translateX=Kn.x;Kn.translateY=Kn.y;const Sa=new Set;let mc=!1,gc=!1,pc=!1;function uy(){if(gc){const a=Array.from(Sa).filter(o=>o.needsMeasurement),r=new Set(a.map(o=>o.element)),s=new Map;r.forEach(o=>{const c=S2(o);c.length&&(s.set(o,c),o.render())}),a.forEach(o=>o.measureInitialState()),r.forEach(o=>{o.render();const c=s.get(o);c&&c.forEach(([h,d])=>{o.getValue(h)?.set(d)})}),a.forEach(o=>o.measureEndState()),a.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}gc=!1,mc=!1,Sa.forEach(a=>a.complete(pc)),Sa.clear()}function cy(){Sa.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(gc=!0)})}function T2(){pc=!0,cy(),uy(),pc=!1}class Yc{constructor(r,s,o,c,h,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...r],this.onComplete=s,this.name=o,this.motionValue=c,this.element=h,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Sa.add(this),mc||(mc=!0,Ue.read(cy),Ue.resolveKeyframes(uy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:s,element:o,motionValue:c}=this;if(r[0]===null){const h=c?.get(),d=r[r.length-1];if(h!==void 0)r[0]=h;else if(o&&s){const p=o.readValue(s,d);p!=null&&(r[0]=p)}r[0]===void 0&&(r[0]=d),c&&h===void 0&&c.set(r[0])}h2(r)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(r=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,r),Sa.delete(this)}cancel(){this.state==="scheduled"&&(Sa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const A2=a=>a.startsWith("--");function fy(a,r,s){A2(r)?a.style.setProperty(r,s):a.style[r]=s}const E2={};function dy(a,r){const s=Lp(a);return()=>E2[r]??s()}const x2=dy(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),hy=dy(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),dr=([a,r,s,o])=>`cubic-bezier(${a}, ${r}, ${s}, ${o})`,Ug={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:dr([0,.65,.55,1]),circOut:dr([.55,0,1,.45]),backIn:dr([.31,.01,.66,-.59]),backOut:dr([.33,1.53,.69,.99])};function my(a,r){if(a)return typeof a=="function"?hy()?ly(a,r):"ease-out":Jp(a)?dr(a):Array.isArray(a)?a.map(s=>my(s,r)||Ug.easeOut):Ug[a]}function w2(a,r,s,{delay:o=0,duration:c=300,repeat:h=0,repeatType:d="loop",ease:p="easeOut",times:y}={},m=void 0){const v={[r]:s};y&&(v.offset=y);const b=my(p,c);Array.isArray(b)&&(v.easing=b);const E={delay:o,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:h+1,direction:d==="reverse"?"alternate":"normal"};return m&&(E.pseudoElement=m),a.animate(v,E)}function gy(a){return typeof a=="function"&&"applyToOptions"in a}function z2({type:a,...r}){return gy(a)&&hy()?a.applyToOptions(r):(r.duration??(r.duration=300),r.ease??(r.ease="easeOut"),r)}class py extends qc{constructor(r){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!r)return;const{element:s,name:o,keyframes:c,pseudoElement:h,allowFlatten:d=!1,finalKeyframe:p,onComplete:y}=r;this.isPseudoElement=!!h,this.allowFlatten=d,this.options=r,hs(typeof r.type!="string");const m=z2(r);this.animation=w2(s,o,c,m,h),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!h){const v=ms(c,this.options,p,this.speed);this.updateMotionValue&&this.updateMotionValue(v),fy(s,o,v),this.animation.cancel()}y?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:r}=this;r==="idle"||r==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const r=this.options?.element;!this.isPseudoElement&&r?.isConnected&&this.animation.commitStyles?.()}get duration(){const r=this.animation.effect?.getComputedTiming?.().duration||0;return Ht(Number(r))}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Ht(r)}get time(){return Ht(Number(this.animation.currentTime)||0)}set time(r){const s=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Dt(r),s&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(r){r<0&&(this.finishedTime=null),this.animation.playbackRate=r}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(r){this.manualStartTime=this.animation.startTime=r}attachTimeline({timeline:r,rangeStart:s,rangeEnd:o,observe:c}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,r&&x2()?(this.animation.timeline=r,s&&(this.animation.rangeStart=s),o&&(this.animation.rangeEnd=o),Lt):c(this)}}const yy={anticipate:Qp,backInOut:Zp,circInOut:Pp};function D2(a){return a in yy}function M2(a){typeof a.ease=="string"&&D2(a.ease)&&(a.ease=yy[a.ease])}const Pu=10;class C2 extends py{constructor(r){M2(r),oy(r),super(r),r.startTime!==void 0&&r.autoplay!==!1&&(this.startTime=r.startTime),this.options=r}updateMotionValue(r){const{motionValue:s,onUpdate:o,onComplete:c,element:h,...d}=this.options;if(!s)return;if(r!==void 0){s.set(r);return}const p=new ls({...d,autoplay:!1}),y=Math.max(Pu,ot.now()-this.startTime),m=$t(0,Pu,y-Pu),v=p.sample(y).value,{name:b}=this.options;h&&b&&fy(h,b,v),s.setWithVelocity(p.sample(Math.max(0,y-m)).value,v,m),p.stop()}}const Rg=(a,r)=>r==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Zt.test(a)||a==="0")&&!a.startsWith("url("));function U2(a){const r=a[0];if(a.length===1)return!0;for(let s=0;s<a.length;s++)if(a[s]!==r)return!0}function R2(a,r,s,o){const c=a[0];if(c===null)return!1;if(r==="display"||r==="visibility")return!0;const h=a[a.length-1],d=Rg(c,r),p=Rg(h,r);return!d||!p?!1:U2(a)||(s==="spring"||gy(s))&&o}function yc(a){a.duration=0,a.type="keyframes"}const vy=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),V2=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function O2(a){for(let r=0;r<a.length;r++)if(typeof a[r]=="string"&&V2.test(a[r]))return!0;return!1}const j2=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),B2=Lp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function _2(a){const{motionValue:r,name:s,repeatDelay:o,repeatType:c,damping:h,type:d,keyframes:p}=a,y=r?.owner?.current;if(!(y instanceof HTMLElement)&&!(y instanceof SVGElement))return!1;const{onUpdate:m,transformTemplate:v}=r.owner.getProps();return B2()&&s&&(vy.has(s)||j2.has(s)&&O2(p))&&(s!=="transform"||!v)&&!m&&!o&&c!=="mirror"&&h!==0&&d!=="inertia"}const N2=40;class H2 extends qc{constructor({autoplay:r=!0,delay:s=0,type:o="keyframes",repeat:c=0,repeatDelay:h=0,repeatType:d="loop",keyframes:p,name:y,motionValue:m,element:v,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ot.now();const E={autoplay:r,delay:s,type:o,repeat:c,repeatDelay:h,repeatType:d,name:y,motionValue:m,element:v,...b},_=v?.KeyframeResolver||Yc;this.keyframeResolver=new _(p,(C,N,L)=>this.onKeyframesResolved(C,N,E,!L),y,m,v),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(r,s,o,c){this.keyframeResolver=void 0;const{name:h,type:d,velocity:p,delay:y,isHandoff:m,onUpdate:v}=o;this.resolvedAt=ot.now();let b=!0;R2(r,h,d,p)||(b=!1,(Pn.instantAnimations||!y)&&v?.(ms(r,o,s)),r[0]=r[r.length-1],yc(o),o.repeat=0);const _={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>N2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:s,...o,keyframes:r},C=b&&!m&&_2(_),N=_.motionValue?.owner?.current;let L;if(C)try{L=new C2({..._,element:N})}catch{L=new ls(_)}else L=new ls(_);L.finished.then(()=>{this.notifyFinished()}).catch(Lt),this.pendingTimeline&&(this.stopTimeline=L.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=L}get finished(){return this._animation?this.animation.finished:this._finished}then(r,s){return this.finished.finally(r).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),T2()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(r){this.animation.time=r}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(r){this.animation.speed=r}get startTime(){return this.animation.startTime}attachTimeline(r){return this._animation?this.stopTimeline=this.animation.attachTimeline(r):this.pendingTimeline=r,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function by(a,r,s,o=0,c=1){const h=Array.from(a).sort((m,v)=>m.sortNodePosition(v)).indexOf(r),d=a.size,p=(d-1)*o;return typeof s=="function"?s(h,d):c===1?h*o:p-h*o}const Vg=30,L2=a=>!isNaN(parseFloat(a));class G2{constructor(r,s={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const c=ot.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const h of this.dependents)h.dirty()},this.hasAnimated=!1,this.setCurrent(r),this.owner=s.owner}setCurrent(r){this.current=r,this.updatedAt=ot.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=L2(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,s){this.events[r]||(this.events[r]=new Bc);const o=this.events[r].add(s);return r==="change"?()=>{o(),Ue.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,s){this.passiveEffect=r,this.stopPassiveEffect=s}set(r){this.passiveEffect?this.passiveEffect(r,this.updateAndNotify):this.updateAndNotify(r)}setWithVelocity(r,s,o){this.set(s),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-o}jump(r,s=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(r){this.dependents||(this.dependents=new Set),this.dependents.add(r)}removeDependent(r){this.dependents&&this.dependents.delete(r)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=ot.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>Vg)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,Vg);return Gp(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(r){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=r(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fi(a,r){return new G2(a,r)}function Sy(a,r){if(a?.inherit&&r){const{inherit:s,...o}=a;return{...r,...o}}return a}function Zc(a,r){const s=a?.[r]??a?.default??a;return s!==a?Sy(s,a):s}const k2={type:"spring",stiffness:500,damping:25,restSpeed:10},X2=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),q2={type:"keyframes",duration:.8},Y2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Z2=(a,{keyframes:r})=>r.length>2?q2:gi.has(a)?a.startsWith("scale")?X2(r[1]):k2:Y2,Q2=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function K2(a){for(const r in a)if(!Q2.has(r))return!0;return!1}const Qc=(a,r,s,o={},c,h)=>d=>{const p=Zc(o,a)||{},y=p.delay||o.delay||0;let{elapsed:m=0}=o;m=m-Dt(y);const v={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:r.getVelocity(),...p,delay:-m,onUpdate:E=>{r.set(E),p.onUpdate&&p.onUpdate(E)},onComplete:()=>{d(),p.onComplete&&p.onComplete()},name:a,motionValue:r,element:h?void 0:c};K2(p)||Object.assign(v,Z2(a,v)),v.duration&&(v.duration=Dt(v.duration)),v.repeatDelay&&(v.repeatDelay=Dt(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let b=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(yc(v),v.delay===0&&(b=!0)),(Pn.instantAnimations||Pn.skipAnimations||c?.shouldSkipAnimations||p.skipAnimations)&&(b=!0,yc(v),v.delay=0),v.allowFlatten=!p.type&&!p.ease,b&&!h&&r.get()!==void 0){const E=ms(v.keyframes,p);if(E!==void 0){Ue.update(()=>{v.onUpdate(E),v.onComplete()});return}}return p.isSync?new ls(v):new H2(v)},P2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function F2(a){const r=P2.exec(a);if(!r)return[,];const[,s,o,c]=r;return[`--${s??o}`,c]}function Ty(a,r,s=1){const[o,c]=F2(a);if(!o)return;const h=window.getComputedStyle(r).getPropertyValue(o);if(h){const d=h.trim();return _p(d)?parseFloat(d):d}return Hc(c)?Ty(c,r,s+1):c}function Og(a){const r=[{},{}];return a?.values.forEach((s,o)=>{r[0][o]=s.get(),r[1][o]=s.getVelocity()}),r}function Kc(a,r,s,o){if(typeof r=="function"){const[c,h]=Og(o);r=r(s!==void 0?s:a.custom,c,h)}if(typeof r=="string"&&(r=a.variants&&a.variants[r]),typeof r=="function"){const[c,h]=Og(o);r=r(s!==void 0?s:a.custom,c,h)}return r}function Ta(a,r,s){const o=a.getProps();return Kc(o,r,s!==void 0?s:o.custom,a)}const Ay=new Set(["width","height","top","left","right","bottom",...mi]),vc=a=>Array.isArray(a);function J2(a,r,s){a.hasValue(r)?a.getValue(r).set(s):a.addValue(r,fi(s))}function I2(a){return vc(a)?a[a.length-1]||0:a}function W2(a,r){const s=Ta(a,r);let{transitionEnd:o={},transition:c={},...h}=s||{};h={...h,...o};for(const d in h){const p=I2(h[d]);J2(a,d,p)}}const at=a=>!!(a&&a.getVelocity);function $2(a){return!!(at(a)&&a.add)}function bc(a,r){const s=a.getValue("willChange");if($2(s))return s.add(r);if(!s&&Pn.WillChange){const o=new Pn.WillChange("auto");a.addValue("willChange",o),o.add(r)}}function Pc(a){return a.replace(/([A-Z])/g,r=>`-${r.toLowerCase()}`)}const eS="framerAppearId",Ey="data-"+Pc(eS);function xy(a){return a.props[Ey]}function tS({protectedKeys:a,needsAnimating:r},s){const o=a.hasOwnProperty(s)&&r[s]!==!0;return r[s]=!1,o}function wy(a,r,{delay:s=0,transitionOverride:o,type:c}={}){let{transition:h,transitionEnd:d,...p}=r;const y=a.getDefaultTransition();h=h?Sy(h,y):y;const m=h?.reduceMotion,v=h?.skipAnimations;o&&(h=o);const b=[],E=c&&a.animationState&&a.animationState.getState()[c],_=h?.path;_&&_.animateVisualElement(a,p,h,s,b);for(const C in p){const N=a.getValue(C,a.latestValues[C]??null),L=p[C];if(L===void 0||E&&tS(E,C))continue;const H={delay:s,...Zc(h||{},C)};v&&(H.skipAnimations=!0);const X=N.get();if(X!==void 0&&!N.isAnimating()&&!Array.isArray(L)&&L===X&&!H.velocity){Ue.update(()=>N.set(L));continue}let G=!1;if(window.MotionHandoffAnimation){const oe=xy(a);if(oe){const K=window.MotionHandoffAnimation(oe,C,Ue);K!==null&&(H.startTime=K,G=!0)}}bc(a,C);const Y=m??a.shouldReduceMotion;N.start(Qc(C,N,L,Y&&Ay.has(C)?{type:!1}:H,a,G));const ne=N.animation;ne&&b.push(ne)}if(d){const C=()=>Ue.update(()=>{d&&W2(a,d)});b.length?Promise.all(b).then(C):C()}return b}function Sc(a,r,s={}){const o=Ta(a,r,s.type==="exit"?a.presenceContext?.custom:void 0);let{transition:c=a.getDefaultTransition()||{}}=o||{};s.transitionOverride&&(c=s.transitionOverride);const h=o?()=>Promise.all(wy(a,o,s)):()=>Promise.resolve(),d=a.variantChildren&&a.variantChildren.size?(y=0)=>{const{delayChildren:m=0,staggerChildren:v,staggerDirection:b}=c;return nS(a,r,y,m,v,b,s)}:()=>Promise.resolve(),{when:p}=c;if(p){const[y,m]=p==="beforeChildren"?[h,d]:[d,h];return y().then(()=>m())}else return Promise.all([h(),d(s.delay)])}function nS(a,r,s=0,o=0,c=0,h=1,d){const p=[];for(const y of a.variantChildren)y.notify("AnimationStart",r),p.push(Sc(y,r,{...d,delay:s+(typeof o=="function"?0:o)+by(a.variantChildren,y,o,c,h)}).then(()=>y.notify("AnimationComplete",r)));return Promise.all(p)}function aS(a,r,s={}){a.notify("AnimationStart",r);let o;if(Array.isArray(r)){const c=r.map(h=>Sc(a,h,s));o=Promise.all(c)}else if(typeof r=="string")o=Sc(a,r,s);else{const c=typeof r=="function"?Ta(a,r,s.custom):r;o=Promise.all(wy(a,c,s))}return o.then(()=>{a.notify("AnimationComplete",r)})}const iS={test:a=>a==="auto",parse:a=>a},zy=a=>r=>r.test(a),Dy=[hi,P,Wt,bn,Ub,Cb,iS],jg=a=>Dy.find(zy(a));function rS(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||Hp(a):!0}const lS=new Set(["brightness","contrast","saturate","opacity"]);function sS(a){const[r,s]=a.slice(0,-1).split("(");if(r==="drop-shadow")return a;const[o]=s.match(Lc)||[];if(!o)return a;const c=s.replace(o,"");let h=lS.has(r)?1:0;return o!==s&&(h*=100),r+"("+h+c+")"}const oS=/\b([a-z-]*)\(.*?\)/gu,Tc={...Zt,getAnimatableNone:a=>{const r=a.match(oS);return r?r.map(sS).join(" "):a}},Ac={...Zt,getAnimatableNone:a=>{const r=Zt.parse(a);return Zt.createTransformer(a)(r.map(o=>typeof o=="number"?0:typeof o=="object"?{...o,alpha:1}:o))}},Bg={...hi,transform:Math.round},uS={rotate:bn,pathRotation:bn,rotateX:bn,rotateY:bn,rotateZ:bn,scale:Yl,scaleX:Yl,scaleY:Yl,scaleZ:Yl,skew:bn,skewX:bn,skewY:bn,distance:P,translateX:P,translateY:P,translateZ:P,x:P,y:P,z:P,perspective:P,transformPerspective:P,opacity:vr,originX:Tg,originY:Tg,originZ:P},ss={borderWidth:P,borderTopWidth:P,borderRightWidth:P,borderBottomWidth:P,borderLeftWidth:P,borderRadius:P,borderTopLeftRadius:P,borderTopRightRadius:P,borderBottomRightRadius:P,borderBottomLeftRadius:P,width:P,maxWidth:P,height:P,maxHeight:P,top:P,right:P,bottom:P,left:P,inset:P,insetBlock:P,insetBlockStart:P,insetBlockEnd:P,insetInline:P,insetInlineStart:P,insetInlineEnd:P,padding:P,paddingTop:P,paddingRight:P,paddingBottom:P,paddingLeft:P,paddingBlock:P,paddingBlockStart:P,paddingBlockEnd:P,paddingInline:P,paddingInlineStart:P,paddingInlineEnd:P,margin:P,marginTop:P,marginRight:P,marginBottom:P,marginLeft:P,marginBlock:P,marginBlockStart:P,marginBlockEnd:P,marginInline:P,marginInlineStart:P,marginInlineEnd:P,fontSize:P,backgroundPositionX:P,backgroundPositionY:P,...uS,zIndex:Bg,fillOpacity:vr,strokeOpacity:vr,numOctaves:Bg},cS={...ss,color:Qe,backgroundColor:Qe,outlineColor:Qe,fill:Qe,stroke:Qe,borderColor:Qe,borderTopColor:Qe,borderRightColor:Qe,borderBottomColor:Qe,borderLeftColor:Qe,filter:Tc,WebkitFilter:Tc,mask:Ac,WebkitMask:Ac},My=a=>cS[a],fS=new Set([Tc,Ac]);function Cy(a,r){let s=My(a);return fS.has(s)||(s=Zt),s.getAnimatableNone?s.getAnimatableNone(r):void 0}const dS=new Set(["auto","none","0"]);function hS(a,r,s){let o=0,c;for(;o<a.length&&!c;){const h=a[o];typeof h=="string"&&!dS.has(h)&&ci(h).values.length&&(c=a[o]),o++}if(c&&s)for(const h of r)a[h]=Cy(s,c)}class mS extends Yc{constructor(r,s,o,c,h){super(r,s,o,c,h,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:s,name:o}=this;if(!s||!s.current)return;super.readKeyframes();for(let v=0;v<r.length;v++){let b=r[v];if(typeof b=="string"&&(b=b.trim(),Hc(b))){const E=Ty(b,s.current);E!==void 0&&(r[v]=E),v===r.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!Ay.has(o)||r.length!==2)return;const[c,h]=r,d=jg(c),p=jg(h),y=Sg(c),m=Sg(h);if(y!==m&&Kn[o]){this.needsMeasurement=!0;return}if(d!==p)if(Cg(d)&&Cg(p))for(let v=0;v<r.length;v++){const b=r[v];typeof b=="string"&&(r[v]=parseFloat(b))}else Kn[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:s}=this,o=[];for(let c=0;c<r.length;c++)(r[c]===null||rS(r[c]))&&o.push(c);o.length&&hS(r,o,s)}measureInitialState(){const{element:r,unresolvedKeyframes:s,name:o}=this;if(!r||!r.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Kn[o](r.measureViewportBox(),window.getComputedStyle(r.current)),s[0]=this.measuredOrigin;const c=s[s.length-1];c!==void 0&&r.getValue(o,c).jump(c,!1)}measureEndState(){const{element:r,name:s,unresolvedKeyframes:o}=this;if(!r||!r.current)return;const c=r.getValue(s);c&&c.jump(this.measuredOrigin,!1);const h=o.length-1,d=o[h];o[h]=Kn[s](r.measureViewportBox(),window.getComputedStyle(r.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,y])=>{r.getValue(p).set(y)}),this.resolveNoneKeyframes()}}const Fc=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function Uy(a,r,s){if(a==null)return[];if(a instanceof EventTarget)return[a];if(typeof a=="string"){let o=document;const c=s?.[a]??o.querySelectorAll(a);return c?Array.from(c):[]}return Array.from(a).filter(o=>o!=null)}const Ec=(a,r)=>r&&typeof a=="number"?r.transform(a):a;function gS(a){return Np(a)&&"offsetHeight"in a&&!("ownerSVGElement"in a)}const{schedule:Jc}=Ip(queueMicrotask,!1),Yt={x:!1,y:!1};function Ry(){return Yt.x||Yt.y}function pS(a){return a==="x"||a==="y"?Yt[a]?null:(Yt[a]=!0,()=>{Yt[a]=!1}):Yt.x||Yt.y?null:(Yt.x=Yt.y=!0,()=>{Yt.x=Yt.y=!1})}function Vy(a,r){const s=Uy(a),o=new AbortController,c={passive:!0,...r,signal:o.signal};return[s,c,()=>o.abort()]}function yS(a){return!(a.pointerType==="touch"||Ry())}function vS(a,r,s={}){const[o,c,h]=Vy(a,s);return o.forEach(d=>{let p=!1,y=!1,m;const v=()=>{d.removeEventListener("pointerleave",C)},b=L=>{m&&(m(L),m=void 0),v()},E=L=>{p=!1,window.removeEventListener("pointerup",E),window.removeEventListener("pointercancel",E),y&&(y=!1,b(L))},_=()=>{p=!0,window.addEventListener("pointerup",E,c),window.addEventListener("pointercancel",E,c)},C=L=>{if(L.pointerType!=="touch"){if(p){y=!0;return}b(L)}},N=L=>{if(!yS(L))return;y=!1;const H=r(d,L);typeof H=="function"&&(m=H,d.addEventListener("pointerleave",C,c))};d.addEventListener("pointerenter",N,c),d.addEventListener("pointerdown",_,c)}),h}const Oy=(a,r)=>r?a===r?!0:Oy(a,r.parentElement):!1,Ic=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,bS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function SS(a){return bS.has(a.tagName)||a.isContentEditable===!0}const TS=new Set(["INPUT","SELECT","TEXTAREA"]);function AS(a){return TS.has(a.tagName)||a.isContentEditable===!0}const Pl=new WeakSet;function _g(a){return r=>{r.key==="Enter"&&a(r)}}function Fu(a,r){a.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const ES=(a,r)=>{const s=a.currentTarget;if(!s)return;const o=_g(()=>{if(Pl.has(s))return;Fu(s,"down");const c=_g(()=>{Fu(s,"up")}),h=()=>Fu(s,"cancel");s.addEventListener("keyup",c,r),s.addEventListener("blur",h,r)});s.addEventListener("keydown",o,r),s.addEventListener("blur",()=>s.removeEventListener("keydown",o),r)};function Ng(a){return Ic(a)&&!Ry()}const Hg=new WeakSet;function xS(a,r,s={}){const[o,c,h]=Vy(a,s),d=p=>{const y=p.currentTarget;if(!Ng(p)||Hg.has(p))return;Pl.add(y),s.stopPropagation&&Hg.add(p);const m=r(y,p),v={...c,capture:!0},b=(C,N)=>{window.removeEventListener("pointerup",E,v),window.removeEventListener("pointercancel",_,v),Pl.has(y)&&Pl.delete(y),Ng(C)&&typeof m=="function"&&m(C,{success:N})},E=C=>{b(C,y===window||y===document||s.useGlobalTarget||Oy(y,C.target))},_=C=>{b(C,!1)};window.addEventListener("pointerup",E,v),window.addEventListener("pointercancel",_,v)};return o.forEach(p=>{(s.useGlobalTarget?window:p).addEventListener("pointerdown",d,c),gS(p)&&(p.addEventListener("focus",m=>ES(m,c)),!SS(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),h}function Wc(a){return Np(a)&&"ownerSVGElement"in a}const Fl=new WeakMap;let Jl;const jy=(a,r,s)=>(o,c)=>c&&c[0]?c[0][a+"Size"]:Wc(o)&&"getBBox"in o?o.getBBox()[r]:o[s],wS=jy("inline","width","offsetWidth"),zS=jy("block","height","offsetHeight");function DS({target:a,borderBoxSize:r}){Fl.get(a)?.forEach(s=>{s(a,{get width(){return wS(a,r)},get height(){return zS(a,r)}})})}function MS(a){a.forEach(DS)}function CS(){typeof ResizeObserver>"u"||(Jl=new ResizeObserver(MS))}function US(a,r){Jl||CS();const s=Uy(a);return s.forEach(o=>{let c=Fl.get(o);c||(c=new Set,Fl.set(o,c)),c.add(r),Jl?.observe(o)}),()=>{s.forEach(o=>{const c=Fl.get(o);c?.delete(r),c?.size||Jl?.unobserve(o)})}}const Il=new Set;let oi;function RS(){oi=()=>{const a={get width(){return window.innerWidth},get height(){return window.innerHeight}};Il.forEach(r=>r(a))},window.addEventListener("resize",oi)}function VS(a){return Il.add(a),oi||RS(),()=>{Il.delete(a),!Il.size&&typeof oi=="function"&&(window.removeEventListener("resize",oi),oi=void 0)}}function Lg(a,r){return typeof a=="function"?VS(a):US(a,r)}function OS(a){return Wc(a)&&a.tagName==="svg"}const jS=[...Dy,Qe,Zt],BS=a=>jS.find(zy(a)),Gg=()=>({translate:0,scale:1,origin:0,originPoint:0}),ui=()=>({x:Gg(),y:Gg()}),kg=()=>({min:0,max:0}),Pe=()=>({x:kg(),y:kg()}),_S=new WeakMap;function gs(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function br(a){return typeof a=="string"||Array.isArray(a)}const $c=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ef=["initial",...$c];function ps(a){return gs(a.animate)||ef.some(r=>br(a[r]))}function By(a){return!!(ps(a)||a.variants)}function NS(a,r,s){for(const o in r){const c=r[o],h=s[o];if(at(c))a.addValue(o,c);else if(at(h))a.addValue(o,fi(c,{owner:a}));else if(h!==c)if(a.hasValue(o)){const d=a.getValue(o);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=a.getStaticValue(o);a.addValue(o,fi(d!==void 0?d:c,{owner:a}))}}for(const o in s)r[o]===void 0&&a.removeValue(o);return r}const os={current:null},tf={current:!1},HS=typeof window<"u";function _y(){if(tf.current=!0,!!HS)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),r=()=>os.current=a.matches;a.addEventListener("change",r),r()}else os.current=!1}const Xg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let us={};function Ny(a){us=a}function LS(){return us}class GS{scrapeMotionValuesFromProps(r,s,o){return{}}constructor({parent:r,props:s,presenceContext:o,reducedMotionConfig:c,skipAnimations:h,blockInitialAnimation:d,visualState:p},y={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Yc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=ot.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,Ue.render(this.render,!1,!0))};const{latestValues:m,renderState:v}=p;this.latestValues=m,this.baseTarget={...m},this.initialValues=s.initial?{...m}:{},this.renderState=v,this.parent=r,this.props=s,this.presenceContext=o,this.depth=r?r.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=h,this.options=y,this.blockInitialAnimation=!!d,this.isControllingVariants=ps(s),this.isVariantNode=By(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:b,...E}=this.scrapeMotionValuesFromProps(s,{},this);for(const _ in E){const C=E[_];m[_]!==void 0&&at(C)&&C.set(m[_])}}mount(r){if(this.hasBeenMounted)for(const s in this.initialValues)this.values.get(s)?.jump(this.initialValues[s]),this.latestValues[s]=this.initialValues[s];this.current=r,_S.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,o)=>this.bindToMotionValue(o,s)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(tf.current||_y(),this.shouldReduceMotion=os.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Fn(this.notifyUpdate),Fn(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const s=this.features[r];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(r){this.children.add(r),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(r)}removeChild(r){this.children.delete(r),this.enteringChildren&&this.enteringChildren.delete(r)}bindToMotionValue(r,s){if(this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)(),s.accelerate&&vy.has(r)&&this.current instanceof HTMLElement){const{factory:d,keyframes:p,times:y,ease:m,duration:v}=s.accelerate,b=new py({element:this.current,name:r,keyframes:p,times:y,ease:m,duration:Dt(v)}),E=d(b);this.valueSubscriptions.set(r,()=>{E(),b.cancel()});return}const o=gi.has(r);o&&this.onBindTransform&&this.onBindTransform();const c=s.on("change",d=>{this.latestValues[r]=d,this.props.onUpdate&&Ue.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let h;typeof window<"u"&&window.MotionCheckAppearSync&&(h=window.MotionCheckAppearSync(this,r,s)),this.valueSubscriptions.set(r,()=>{c(),h&&h()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in us){const s=us[r];if(!s)continue;const{isEnabled:o,Feature:c}=s;if(!this.features[r]&&c&&o(this.props)&&(this.features[r]=new c(this)),this.features[r]){const h=this.features[r];h.isMounted?h.update():(h.mount(),h.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Pe()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,s){this.latestValues[r]=s}update(r,s){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let o=0;o<Xg.length;o++){const c=Xg[o];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const h="on"+c,d=r[h];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=NS(this,this.scrapeMotionValuesFromProps(r,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(r),()=>s.variantChildren.delete(r)}addValue(r,s){const o=this.values.get(r);s!==o&&(o&&this.removeValue(r),this.bindToMotionValue(r,s),this.values.set(r,s),this.latestValues[r]=s.get())}removeValue(r){this.values.delete(r);const s=this.valueSubscriptions.get(r);s&&(s(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,s){if(this.props.values&&this.props.values[r])return this.props.values[r];let o=this.values.get(r);return o===void 0&&s!==void 0&&(o=fi(s===null?void 0:s,{owner:this}),this.addValue(r,o)),o}readValue(r,s){let o=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:this.getBaseTargetFromProps(this.props,r)??this.readValueFromInstance(this.current,r,this.options);return o!=null&&(typeof o=="string"&&(_p(o)||Hp(o))?o=parseFloat(o):!BS(o)&&Zt.test(s)&&(o=Cy(r,s)),this.setBaseTarget(r,at(o)?o.get():o)),at(o)?o.get():o}setBaseTarget(r,s){this.baseTarget[r]=s}getBaseTarget(r){const{initial:s}=this.props;let o;if(typeof s=="string"||typeof s=="object"){const h=Kc(this.props,s,this.presenceContext?.custom);h&&(o=h[r])}if(s&&o!==void 0)return o;const c=this.getBaseTargetFromProps(this.props,r);return c!==void 0&&!at(c)?c:this.initialValues[r]!==void 0&&o===void 0?void 0:this.baseTarget[r]}on(r,s){return this.events[r]||(this.events[r]=new Bc),this.events[r].add(s)}notify(r,...s){this.events[r]&&this.events[r].notify(...s)}scheduleRenderMicrotask(){Jc.render(this.render)}}class Hy extends GS{constructor(){super(...arguments),this.KeyframeResolver=mS}sortInstanceNodePosition(r,s){return r.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(r,s){const o=r.style;return o?o[s]:void 0}removeValueFromRenderState(r,{vars:s,style:o}){delete s[r],delete o[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;at(r)&&(this.childSubscription=r.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}class Jn{constructor(r){this.isMounted=!1,this.node=r}update(){}}function Ly({top:a,left:r,right:s,bottom:o}){return{x:{min:r,max:s},y:{min:a,max:o}}}function kS({x:a,y:r}){return{top:r.min,right:a.max,bottom:r.max,left:a.min}}function XS(a,r){if(!r)return a;const s=r({x:a.left,y:a.top}),o=r({x:a.right,y:a.bottom});return{top:s.y,left:s.x,bottom:o.y,right:o.x}}function Ju(a){return a===void 0||a===1}function xc({scale:a,scaleX:r,scaleY:s}){return!Ju(a)||!Ju(r)||!Ju(s)}function ya(a){return xc(a)||Gy(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function Gy(a){return qg(a.x)||qg(a.y)}function qg(a){return a&&a!=="0%"}function cs(a,r,s){const o=a-s,c=r*o;return s+c}function Yg(a,r,s,o,c){return c!==void 0&&(a=cs(a,c,o)),cs(a,s,o)+r}function wc(a,r=0,s=1,o,c){a.min=Yg(a.min,r,s,o,c),a.max=Yg(a.max,r,s,o,c)}function ky(a,{x:r,y:s}){wc(a.x,r.translate,r.scale,r.originPoint),wc(a.y,s.translate,s.scale,s.originPoint)}const Zg=.999999999999,Qg=1.0000000000001;function qS(a,r,s,o=!1){const c=s.length;if(!c)return;r.x=r.y=1;let h,d;for(let p=0;p<c;p++){h=s[p],d=h.projectionDelta;const{visualElement:y}=h.options;y&&y.props.style&&y.props.style.display==="contents"||(o&&h.options.layoutScroll&&h.scroll&&h!==h.root&&(It(a.x,-h.scroll.offset.x),It(a.y,-h.scroll.offset.y)),d&&(r.x*=d.x.scale,r.y*=d.y.scale,ky(a,d)),o&&ya(h.latestValues)&&Wl(a,h.latestValues,h.layout?.layoutBox))}r.x<Qg&&r.x>Zg&&(r.x=1),r.y<Qg&&r.y>Zg&&(r.y=1)}function It(a,r){a.min+=r,a.max+=r}function Kg(a,r,s,o,c=.5){const h=Ce(a.min,a.max,c);wc(a,r,s,h,o)}function Pg(a,r){return typeof a=="string"?parseFloat(a)/100*(r.max-r.min):a}function Wl(a,r,s){const o=s??a;Kg(a.x,Pg(r.x,o.x),r.scaleX,r.scale,r.originX),Kg(a.y,Pg(r.y,o.y),r.scaleY,r.scale,r.originY)}function Xy(a,r){return Ly(XS(a.getBoundingClientRect(),r))}function YS(a,r,s){const o=Xy(a,s),{scroll:c}=r;return c&&(It(o.x,c.offset.x),It(o.y,c.offset.y)),o}const ZS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},QS=mi.length;function KS(a,r,s){let o="",c=!0;for(let d=0;d<QS;d++){const p=mi[d],y=a[p];if(y===void 0)continue;let m=!0;if(typeof y=="number")m=y===(p.startsWith("scale")?1:0);else{const v=parseFloat(y);m=p.startsWith("scale")?v===1:v===0}if(!m||s){const v=Ec(y,ss[p]);if(!m){c=!1;const b=ZS[p]||p;o+=`${b}(${v}) `}s&&(r[p]=v)}}const h=a.pathRotation;return h&&(c=!1,o+=`rotate(${Ec(h,ss.pathRotation)}) `),o=o.trim(),s?o=s(r,c?"":o):c&&(o="none"),o}function nf(a,r,s){const{style:o,vars:c,transformOrigin:h}=a;let d=!1,p=!1;for(const y in r){const m=r[y];if(gi.has(y)){d=!0;continue}else if($p(y)){c[y]=m;continue}else{const v=Ec(m,ss[y]);y.startsWith("origin")?(p=!0,h[y]=v):o[y]=v}}if(r.transform||(d||s?o.transform=KS(r,a.transform,s):o.transform&&(o.transform="none")),p){const{originX:y="50%",originY:m="50%",originZ:v=0}=h;o.transformOrigin=`${y} ${m} ${v}`}}function qy(a,{style:r,vars:s},o,c){const h=a.style;let d;for(d in r)h[d]=r[d];c?.applyProjectionStyles(h,o);for(d in s)h.setProperty(d,s[d])}function Fg(a,r){return r.max===r.min?0:a/(r.max-r.min)*100}const fr={correct:(a,r)=>{if(!r.target)return a;if(typeof a=="string")if(P.test(a))a=parseFloat(a);else return a;const s=Fg(a,r.target.x),o=Fg(a,r.target.y);return`${s}% ${o}%`}},PS={correct:(a,{treeScale:r,projectionDelta:s})=>{const o=a,c=Zt.parse(a);if(c.length>5)return o;const h=Zt.createTransformer(a),d=typeof c[0]!="number"?1:0,p=s.x.scale*r.x,y=s.y.scale*r.y;c[0+d]/=p,c[1+d]/=y;const m=Ce(p,y,.5);return typeof c[2+d]=="number"&&(c[2+d]/=m),typeof c[3+d]=="number"&&(c[3+d]/=m),h(c)}},zc={borderRadius:{...fr,applyTo:[...Fc]},borderTopLeftRadius:fr,borderTopRightRadius:fr,borderBottomLeftRadius:fr,borderBottomRightRadius:fr,boxShadow:PS};function Yy(a,{layout:r,layoutId:s}){return gi.has(a)||a.startsWith("origin")||(r||s!==void 0)&&(!!zc[a]||a==="opacity")}function af(a,r,s){const o=a.style,c=r?.style,h={};if(!o)return h;for(const d in o)(at(o[d])||c&&at(c[d])||Yy(d,a)||s?.getValue(d)?.liveStyle!==void 0)&&(h[d]=o[d]);return h}function FS(a){return window.getComputedStyle(a)}class JS extends Hy{constructor(){super(...arguments),this.type="html",this.renderInstance=qy}mount(r){hs(!!r.style),super.mount(r)}readValueFromInstance(r,s){if(gi.has(s))return this.projection?.isProjecting?dc(s):p2(r,s);{const o=FS(r),c=($p(s)?o.getPropertyValue(s):o[s])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(r,{transformPagePoint:s}){return Xy(r,s)}build(r,s,o){nf(r,s,o.transformTemplate)}scrapeMotionValuesFromProps(r,s,o){return af(r,s,o)}}const IS={offset:"stroke-dashoffset",array:"stroke-dasharray"},WS={offset:"strokeDashoffset",array:"strokeDasharray"};function $S(a,r,s=1,o=0,c=!0){a.pathLength=1;const h=c?IS:WS;a[h.offset]=`${-o}`,a[h.array]=`${r} ${s}`}const eT=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Zy(a,{attrX:r,attrY:s,attrScale:o,pathLength:c,pathSpacing:h=1,pathOffset:d=0,...p},y,m,v){if(nf(a,p,m),y){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:b,style:E}=a;b.transform&&(E.transform=b.transform,delete b.transform),(E.transform||b.transformOrigin)&&(E.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),E.transform&&(E.transformBox=v?.transformBox??"fill-box",delete b.transformBox);for(const _ of eT)b[_]!==void 0&&(E[_]=b[_],delete b[_]);r!==void 0&&(b.x=r),s!==void 0&&(b.y=s),o!==void 0&&(b.scale=o),c!==void 0&&$S(b,c,h,d,!1)}const Qy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Ky=a=>typeof a=="string"&&a.toLowerCase()==="svg";function tT(a,r,s,o){qy(a,r,void 0,o);for(const c in r.attrs)a.setAttribute(Qy.has(c)?c:Pc(c),r.attrs[c])}function Py(a,r,s){const o=af(a,r,s);for(const c in a)if(at(a[c])||at(r[c])){const h=mi.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;o[h]=a[c]}return o}class nT extends Hy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Pe}getBaseTargetFromProps(r,s){return r[s]}readValueFromInstance(r,s){if(gi.has(s)){const o=My(s);return o&&o.default||0}return s=Qy.has(s)?s:Pc(s),r.getAttribute(s)}scrapeMotionValuesFromProps(r,s,o){return Py(r,s,o)}build(r,s,o){Zy(r,s,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(r,s,o,c){tT(r,s,o,c)}mount(r){this.isSVGTag=Ky(r.tagName),super.mount(r)}}const aT=ef.length;function Fy(a){if(!a)return;if(!a.isControllingVariants){const s=a.parent?Fy(a.parent)||{}:{};return a.props.initial!==void 0&&(s.initial=a.props.initial),s}const r={};for(let s=0;s<aT;s++){const o=ef[s],c=a.props[o];(br(c)||c===!1)&&(r[o]=c)}return r}function Jy(a,r){if(!Array.isArray(r))return!1;const s=r.length;if(s!==a.length)return!1;for(let o=0;o<s;o++)if(r[o]!==a[o])return!1;return!0}const iT=[...$c].reverse(),rT=$c.length;function lT(a){return r=>Promise.all(r.map(({animation:s,options:o})=>aS(a,s,o)))}function sT(a){let r=lT(a),s=Jg(),o=!0,c=!1;const h=m=>(v,b)=>{const E=Ta(a,b,m==="exit"?a.presenceContext?.custom:void 0);if(E){const{transition:_,transitionEnd:C,...N}=E;v={...v,...N,...C}}return v};function d(m){r=m(a)}function p(m){const{props:v}=a,b=Fy(a.parent)||{},E=[],_=new Set;let C={},N=1/0;for(let H=0;H<rT;H++){const X=iT[H],G=s[X],Y=v[X]!==void 0?v[X]:b[X],ne=br(Y),oe=X===m?G.isActive:null;oe===!1&&(N=H);let K=Y===b[X]&&Y!==v[X]&&ne;if(K&&(o||c)&&a.manuallyAnimateOnMount&&(K=!1),G.protectedKeys={...C},!G.isActive&&oe===null||!Y&&!G.prevProp||gs(Y)||typeof Y=="boolean")continue;if(X==="exit"&&G.isActive&&oe!==!0){G.prevResolvedValues&&(C={...C,...G.prevResolvedValues});continue}const W=oT(G.prevProp,Y);let xe=W||X===m&&G.isActive&&!K&&ne||H>N&&ne,te=!1;const ve=Array.isArray(Y)?Y:[Y];let Te=ve.reduce(h(X),{});oe===!1&&(Te={});const{prevResolvedValues:rt={}}=G,ke={...rt,...Te},Ne=Z=>{xe=!0,_.has(Z)&&(te=!0,_.delete(Z)),G.needsAnimating[Z]=!0;const le=a.getValue(Z);le&&(le.liveStyle=!1)};for(const Z in ke){const le=Te[Z],me=rt[Z];if(C.hasOwnProperty(Z))continue;let A=!1;vc(le)&&vc(me)?A=!Jy(le,me)||W:A=le!==me,A?le!=null?Ne(Z):_.add(Z):le!==void 0&&_.has(Z)?Ne(Z):G.protectedKeys[Z]=!0}G.prevProp=Y,G.prevResolvedValues=Te,G.isActive&&(C={...C,...Te}),(o||c)&&a.blockInitialAnimation&&(xe=!1);const R=K&&W;xe&&(!R||te)&&E.push(...ve.map(Z=>{const le={type:X};if(typeof Z=="string"&&(o||c)&&!R&&a.manuallyAnimateOnMount&&a.parent){const{parent:me}=a,A=Ta(me,Z);if(me.enteringChildren&&A){const{delayChildren:B}=A.transition||{};le.delay=by(me.enteringChildren,a,B)}}return{animation:Z,options:le}}))}if(_.size){const H={};if(typeof v.initial!="boolean"){const X=Ta(a,Array.isArray(v.initial)?v.initial[0]:v.initial);X&&X.transition&&(H.transition=X.transition)}_.forEach(X=>{const G=a.getBaseTarget(X),Y=a.getValue(X);Y&&(Y.liveStyle=!0),H[X]=G??null}),E.push({animation:H})}let L=!!E.length;return o&&(v.initial===!1||v.initial===v.animate)&&!a.manuallyAnimateOnMount&&(L=!1),o=!1,c=!1,L?r(E):Promise.resolve()}function y(m,v){if(s[m].isActive===v)return Promise.resolve();a.variantChildren?.forEach(E=>E.animationState?.setActive(m,v)),s[m].isActive=v;const b=p(m);for(const E in s)s[E].protectedKeys={};return b}return{animateChanges:p,setActive:y,setAnimateFunction:d,getState:()=>s,reset:()=>{s=Jg(),c=!0}}}function oT(a,r){return typeof r=="string"?r!==a:Array.isArray(r)?!Jy(r,a):!1}function pa(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Jg(){return{animate:pa(!0),whileInView:pa(),whileHover:pa(),whileTap:pa(),whileDrag:pa(),whileFocus:pa(),exit:pa()}}function Dc(a,r){a.min=r.min,a.max=r.max}function qt(a,r){Dc(a.x,r.x),Dc(a.y,r.y)}function Ig(a,r){a.translate=r.translate,a.scale=r.scale,a.originPoint=r.originPoint,a.origin=r.origin}const Iy=1e-4,uT=1-Iy,cT=1+Iy,Wy=.01,fT=0-Wy,dT=0+Wy;function ut(a){return a.max-a.min}function hT(a,r,s){return Math.abs(a-r)<=s}function Wg(a,r,s,o=.5){a.origin=o,a.originPoint=Ce(r.min,r.max,a.origin),a.scale=ut(s)/ut(r),a.translate=Ce(s.min,s.max,a.origin)-a.originPoint,(a.scale>=uT&&a.scale<=cT||isNaN(a.scale))&&(a.scale=1),(a.translate>=fT&&a.translate<=dT||isNaN(a.translate))&&(a.translate=0)}function gr(a,r,s,o){Wg(a.x,r.x,s.x,o?o.originX:void 0),Wg(a.y,r.y,s.y,o?o.originY:void 0)}function $g(a,r,s,o=0){const c=o?Ce(s.min,s.max,o):s.min;a.min=c+r.min,a.max=a.min+ut(r)}function mT(a,r,s,o){$g(a.x,r.x,s.x,o?.x),$g(a.y,r.y,s.y,o?.y)}function ep(a,r,s,o=0){const c=o?Ce(s.min,s.max,o):s.min;a.min=r.min-c,a.max=a.min+ut(r)}function fs(a,r,s,o){ep(a.x,r.x,s.x,o?.x),ep(a.y,r.y,s.y,o?.y)}function tp(a,r,s,o,c){return a-=r,a=cs(a,1/s,o),c!==void 0&&(a=cs(a,1/c,o)),a}function gT(a,r=0,s=1,o=.5,c,h=a,d=a){if(Wt.test(r)&&(r=parseFloat(r),r=Ce(d.min,d.max,r/100)-d.min),typeof r!="number")return;let p=Ce(h.min,h.max,o);a===h&&(p-=r),a.min=tp(a.min,r,s,p,c),a.max=tp(a.max,r,s,p,c)}function np(a,r,[s,o,c],h,d){gT(a,r[s],r[o],r[c],r.scale,h,d)}const pT=["x","scaleX","originX"],yT=["y","scaleY","originY"];function ap(a,r,s,o){np(a.x,r,pT,s?s.x:void 0,o?o.x:void 0),np(a.y,r,yT,s?s.y:void 0,o?o.y:void 0)}function ip(a){return a.translate===0&&a.scale===1}function $y(a){return ip(a.x)&&ip(a.y)}function rp(a,r){return a.min===r.min&&a.max===r.max}function vT(a,r){return rp(a.x,r.x)&&rp(a.y,r.y)}function lp(a,r){return Math.round(a.min)===Math.round(r.min)&&Math.round(a.max)===Math.round(r.max)}function e0(a,r){return lp(a.x,r.x)&&lp(a.y,r.y)}function sp(a){return ut(a.x)/ut(a.y)}function op(a,r){return a.translate===r.translate&&a.scale===r.scale&&a.originPoint===r.originPoint}function Jt(a){return[a("x"),a("y")]}function bT(a,r,s){let o="";const c=a.x.translate/r.x,h=a.y.translate/r.y,d=s?.z||0;if((c||h||d)&&(o=`translate3d(${c}px, ${h}px, ${d}px) `),(r.x!==1||r.y!==1)&&(o+=`scale(${1/r.x}, ${1/r.y}) `),s){const{transformPerspective:m,rotate:v,pathRotation:b,rotateX:E,rotateY:_,skewX:C,skewY:N}=s;m&&(o=`perspective(${m}px) ${o}`),v&&(o+=`rotate(${v}deg) `),b&&(o+=`rotate(${b}deg) `),E&&(o+=`rotateX(${E}deg) `),_&&(o+=`rotateY(${_}deg) `),C&&(o+=`skewX(${C}deg) `),N&&(o+=`skewY(${N}deg) `)}const p=a.x.scale*r.x,y=a.y.scale*r.y;return(p!==1||y!==1)&&(o+=`scale(${p}, ${y})`),o||"none"}const ST=Fc.length,up=a=>typeof a=="string"?parseFloat(a):a,cp=a=>typeof a=="number"||P.test(a);function TT(a,r,s,o,c,h){c?(a.opacity=Ce(0,s.opacity??1,AT(o)),a.opacityExit=Ce(r.opacity??1,0,ET(o))):h&&(a.opacity=Ce(r.opacity??1,s.opacity??1,o));for(let d=0;d<ST;d++){const p=Fc[d];let y=fp(r,p),m=fp(s,p);if(y===void 0&&m===void 0)continue;y||(y=0),m||(m=0),y===0||m===0||cp(y)===cp(m)?(a[p]=Math.max(Ce(up(y),up(m),o),0),(Wt.test(m)||Wt.test(y))&&(a[p]+="%")):a[p]=m}(r.rotate||s.rotate)&&(a.rotate=Ce(r.rotate||0,s.rotate||0,o))}function fp(a,r){return a[r]!==void 0?a[r]:a.borderRadius}const AT=t0(0,.5,Kp),ET=t0(.5,.95,Lt);function t0(a,r,s){return o=>o<a?0:o>r?1:s(yr(a,r,o))}function xT(a,r,s){const o=at(a)?a:fi(a);return o.start(Qc("",o,r,s)),o.animation}function Sr(a,r,s,o={passive:!0}){return a.addEventListener(r,s,o),()=>a.removeEventListener(r,s,o)}const wT=(a,r)=>a.depth-r.depth;class zT{constructor(){this.children=[],this.isDirty=!1}add(r){jc(this.children,r),this.isDirty=!0}remove(r){ns(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(wT),this.isDirty=!1,this.children.forEach(r)}}function DT(a,r){const s=ot.now(),o=({timestamp:c})=>{const h=c-s;h>=r&&(Fn(o),a(h-r))};return Ue.setup(o,!0),()=>Fn(o)}function $l(a){return at(a)?a.get():a}class MT{constructor(){this.members=[]}add(r){jc(this.members,r);for(let s=this.members.length-1;s>=0;s--){const o=this.members[s];if(o===r||o===this.lead||o===this.prevLead)continue;const c=o.instance;(!c||c.isConnected===!1)&&!o.snapshot&&(ns(this.members,o),o.unmount())}r.scheduleRender()}remove(r){if(ns(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(r){for(let s=this.members.indexOf(r)-1;s>=0;s--){const o=this.members[s];if(o.isPresent!==!1&&o.instance?.isConnected!==!1)return this.promote(o),!0}return!1}promote(r,s){const o=this.lead;if(r!==o&&(this.prevLead=o,this.lead=r,r.show(),o)){o.updateSnapshot(),r.scheduleRender();const{layoutDependency:c}=o.options,{layoutDependency:h}=r.options;(c===void 0||c!==h)&&(r.resumeFrom=o,s&&(o.preserveOpacity=!0),o.snapshot&&(r.snapshot=o.snapshot,r.snapshot.latestValues=o.animationValues||o.latestValues),r.root?.isUpdating&&(r.isLayoutDirty=!0)),r.options.crossfade===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(r=>{r.options.onExitComplete?.(),r.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(r=>r.instance&&r.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const es={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Iu=["","X","Y","Z"],CT=1e3;let UT=0;function Wu(a,r,s,o){const{latestValues:c}=r;c[a]&&(s[a]=c[a],r.setStaticValue(a,0),o&&(o[a]=0))}function n0(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:r}=a.options;if(!r)return;const s=xy(r);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:c,layoutId:h}=a.options;window.MotionCancelOptimisedAnimation(s,"transform",Ue,!(c||h))}const{parent:o}=a;o&&!o.hasCheckedOptimisedAppear&&n0(o)}function a0({attachResizeListener:a,defaultParent:r,measureScroll:s,checkIsScrollRoot:o,resetTransform:c}){return class{constructor(d={},p=r?.()){this.id=UT++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(OT),this.nodes.forEach(LT),this.nodes.forEach(GT),this.nodes.forEach(jT)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let y=0;y<this.path.length;y++)this.path[y].shouldResetTransform=!0;this.root===this&&(this.nodes=new zT)}addEventListener(d,p){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Bc),this.eventHandlers.get(d).add(p)}notifyListeners(d,...p){const y=this.eventHandlers.get(d);y&&y.notify(...p)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Wc(d)&&!OS(d),this.instance=d;const{layoutId:p,layout:y,visualElement:m}=this.options;if(m&&!m.current&&m.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(y||p)&&(this.isLayoutDirty=!0),a){let v,b=0;const E=()=>this.root.updateBlockedByResize=!1;Ue.read(()=>{b=window.innerWidth}),a(d,()=>{const _=window.innerWidth;_!==b&&(b=_,this.root.updateBlockedByResize=!0,v&&v(),v=DT(E,250),es.hasAnimatedSinceResize&&(es.hasAnimatedSinceResize=!1,this.nodes.forEach(mp)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&m&&(p||y)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:b,hasRelativeLayoutChanged:E,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||m.getDefaultTransition()||ZT,{onLayoutAnimationStart:N,onLayoutAnimationComplete:L}=m.getProps(),H=!this.targetLayout||!e0(this.targetLayout,_),X=!b&&E;if(this.options.layoutRoot||this.resumeFrom||X||b&&(H||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const G={...Zc(C,"layout"),onPlay:N,onComplete:L};(m.shouldReduceMotion||this.options.layoutRoot)&&(G.delay=0,G.type=!1),this.startAnimation(G),this.setAnimationOrigin(v,X,G.path)}else b||mp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Fn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(kT),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&n0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const b=this.path[v];b.shouldResetTransform=!0,(typeof b.latestValues.x=="string"||typeof b.latestValues.y=="string")&&(b.isLayoutDirty=!0),b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:p,layout:y}=this.options;if(p===void 0&&!y)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const y=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),y&&this.nodes.forEach(_T),this.nodes.forEach(dp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(hp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(NT),this.nodes.forEach(HT),this.nodes.forEach(RT),this.nodes.forEach(VT)):this.nodes.forEach(hp),this.clearAllSnapshots();const p=ot.now();nt.delta=$t(0,1e3/60,p-nt.timestamp),nt.timestamp=p,nt.isProcessing=!0,qu.update.process(nt),qu.preRender.process(nt),qu.render.process(nt),nt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Jc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(BT),this.sharedNodes.forEach(XT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ue.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ue.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ut(this.snapshot.measuredBox.x)&&!ut(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let y=0;y<this.path.length;y++)this.path[y].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Pe()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(p=!1),p&&this.instance){const y=o(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:y,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:y}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!$y(this.projectionDelta),y=this.getTransformTemplate(),m=y?y(this.latestValues,""):void 0,v=m!==this.prevTransformTemplateValue;d&&this.instance&&(p||ya(this.latestValues)||v)&&(c(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const p=this.measurePageBox();let y=this.removeElementScroll(p);return d&&(y=this.removeTransform(y)),QT(y),{animationId:this.root.animationId,measuredBox:p,layoutBox:y,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:d}=this.options;if(!d)return Pe();const p=d.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(KT))){const{scroll:m}=this.root;m&&(It(p.x,m.offset.x),It(p.y,m.offset.y))}return p}removeElementScroll(d){const p=Pe();if(qt(p,d),this.scroll?.wasRoot)return p;for(let y=0;y<this.path.length;y++){const m=this.path[y],{scroll:v,options:b}=m;m!==this.root&&v&&b.layoutScroll&&(v.wasRoot&&qt(p,d),It(p.x,v.offset.x),It(p.y,v.offset.y))}return p}applyTransform(d,p=!1,y){const m=y||Pe();qt(m,d);for(let v=0;v<this.path.length;v++){const b=this.path[v];!p&&b.options.layoutScroll&&b.scroll&&b!==b.root&&(It(m.x,-b.scroll.offset.x),It(m.y,-b.scroll.offset.y)),ya(b.latestValues)&&Wl(m,b.latestValues,b.layout?.layoutBox)}return ya(this.latestValues)&&Wl(m,this.latestValues,this.layout?.layoutBox),m}removeTransform(d){const p=Pe();qt(p,d);for(let y=0;y<this.path.length;y++){const m=this.path[y];if(!ya(m.latestValues))continue;let v;m.instance&&(xc(m.latestValues)&&m.updateSnapshot(),v=Pe(),qt(v,m.measurePageBox())),ap(p,m.latestValues,m.snapshot?.layoutBox,v)}return ya(this.latestValues)&&ap(p,this.latestValues),p}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==nt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const y=!!this.resumingFrom||this!==p;if(!(d||y&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:b}=this.options;if(!this.layout||!(v||b))return;this.resolvedRelativeTargetAt=nt.timestamp;const E=this.getClosestProjectingParent();E&&this.linkedParentVersion!==E.layoutVersion&&!E.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&E&&E.layout?this.createRelativeTarget(E,this.layout.layoutBox,E.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Pe(),this.targetWithTransforms=Pe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),mT(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):qt(this.target,this.layout.layoutBox),ky(this.target,this.targetDelta)):qt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&E&&!!E.resumingFrom==!!this.resumingFrom&&!E.options.layoutScroll&&E.target&&this.animationProgress!==1?this.createRelativeTarget(E,this.target,E.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||xc(this.parent.latestValues)||Gy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,p,y){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Pe(),this.relativeTargetOrigin=Pe(),fs(this.relativeTargetOrigin,p,y,this.options.layoutAnchor||void 0),qt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const d=this.getLead(),p=!!this.resumingFrom||this!==d;let y=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(y=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(y=!1),this.resolvedRelativeTargetAt===nt.timestamp&&(y=!1),y)return;const{layout:m,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||v))return;qt(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,E=this.treeScale.y;qS(this.layoutCorrected,this.treeScale,this.path,p),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Pe());const{target:_}=d;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ig(this.prevProjectionDelta.x,this.projectionDelta.x),Ig(this.prevProjectionDelta.y,this.projectionDelta.y)),gr(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==E||!op(this.projectionDelta.x,this.prevProjectionDelta.x)||!op(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){if(this.options.visualElement?.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ui(),this.projectionDelta=ui(),this.projectionDeltaWithTransform=ui()}setAnimationOrigin(d,p=!1,y){const m=this.snapshot,v=m?m.latestValues:{},b={...this.latestValues},E=ui();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const _=Pe(),C=m?m.source:void 0,N=this.layout?this.layout.source:void 0,L=C!==N,H=this.getStack(),X=!H||H.members.length<=1,G=!!(L&&!X&&this.options.crossfade===!0&&!this.path.some(YT));this.animationProgress=0;let Y;const ne=y?.interpolateProjection(d);this.mixTargetDelta=oe=>{const K=oe/1e3,W=ne?.(K);W?(E.x.translate=W.x,E.x.scale=Ce(d.x.scale,1,K),E.x.origin=d.x.origin,E.x.originPoint=d.x.originPoint,E.y.translate=W.y,E.y.scale=Ce(d.y.scale,1,K),E.y.origin=d.y.origin,E.y.originPoint=d.y.originPoint):(gp(E.x,d.x,K),gp(E.y,d.y,K)),this.setTargetDelta(E),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fs(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),qT(this.relativeTarget,this.relativeTargetOrigin,_,K),Y&&vT(this.relativeTarget,Y)&&(this.isProjectionDirty=!1),Y||(Y=Pe()),qt(Y,this.relativeTarget)),L&&(this.animationValues=b,TT(b,v,this.latestValues,K,G,X)),W&&W.rotate!==void 0&&(this.animationValues||(this.animationValues=b),this.animationValues.pathRotation=W.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=K},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Fn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ue.update(()=>{es.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=fi(0)),this.motionValue.jump(0,!1),this.currentAnimation=xT(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),d.onUpdate&&d.onUpdate(p)},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(CT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:p,target:y,layout:m,latestValues:v}=d;if(!(!p||!y||!m)){if(this!==d&&this.layout&&m&&i0(this.options.animationType,this.layout.layoutBox,m.layoutBox)){y=this.target||Pe();const b=ut(this.layout.layoutBox.x);y.x.min=d.target.x.min,y.x.max=y.x.min+b;const E=ut(this.layout.layoutBox.y);y.y.min=d.target.y.min,y.y.max=y.y.min+E}qt(p,y),Wl(p,v),gr(this.projectionDeltaWithTransform,this.layoutCorrected,p,v)}}registerSharedNode(d,p){this.sharedNodes.has(d)||this.sharedNodes.set(d,new MT),this.sharedNodes.get(d).add(p);const m=p.options.initialPromotionConfig;p.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(p):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){const{layoutId:d}=this.options;return d?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:d}=this.options;return d?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:p,preserveFollowOpacity:y}={}){const m=this.getStack();m&&m.promote(this,y),d&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let p=!1;const{latestValues:y}=d;if((y.z||y.rotate||y.rotateX||y.rotateY||y.rotateZ||y.skewX||y.skewY)&&(p=!0),!p)return;const m={};y.z&&Wu("z",d,m,this.animationValues);for(let v=0;v<Iu.length;v++)Wu(`rotate${Iu[v]}`,d,m,this.animationValues),Wu(`skew${Iu[v]}`,d,m,this.animationValues);d.render();for(const v in m)d.setStaticValue(v,m[v]),this.animationValues&&(this.animationValues[v]=m[v]);d.scheduleRender()}applyProjectionStyles(d,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const y=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=$l(p?.pointerEvents)||"",d.transform=y?y(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=$l(p?.pointerEvents)||""),this.hasProjected&&!ya(this.latestValues)&&(d.transform=y?y({},""):"none",this.hasProjected=!1);return}d.visibility="";const v=m.animationValues||m.latestValues;this.applyTransformsToTarget();let b=bT(this.projectionDeltaWithTransform,this.treeScale,v);y&&(b=y(v,b)),d.transform=b;const{x:E,y:_}=this.projectionDelta;d.transformOrigin=`${E.origin*100}% ${_.origin*100}% 0`,m.animationValues?d.opacity=m===this?v.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:d.opacity=m===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const C in zc){if(v[C]===void 0)continue;const{correct:N,applyTo:L,isCSSVariable:H}=zc[C],X=b==="none"?v[C]:N(v[C],m);if(L){const G=L.length;for(let Y=0;Y<G;Y++)d[L[Y]]=X}else H?this.options.visualElement.renderState.vars[C]=X:d[C]=X}this.options.layoutId&&(d.pointerEvents=m===this?$l(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>d.currentAnimation?.stop()),this.root.nodes.forEach(dp),this.root.sharedNodes.clear()}}}function RT(a){a.updateLayout()}function VT(a){const r=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&r&&a.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:o}=a.layout,{animationType:c}=a.options,h=r.source!==a.layout.source;if(c==="size")Jt(v=>{const b=h?r.measuredBox[v]:r.layoutBox[v],E=ut(b);b.min=s[v].min,b.max=b.min+E});else if(c==="x"||c==="y"){const v=c==="x"?"y":"x";Dc(h?r.measuredBox[v]:r.layoutBox[v],s[v])}else i0(c,r.layoutBox,s)&&Jt(v=>{const b=h?r.measuredBox[v]:r.layoutBox[v],E=ut(s[v]);b.max=b.min+E,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[v].max=a.relativeTarget[v].min+E)});const d=ui();gr(d,s,r.layoutBox);const p=ui();h?gr(p,a.applyTransform(o,!0),r.measuredBox):gr(p,s,r.layoutBox);const y=!$y(d);let m=!1;if(!a.resumeFrom){const v=a.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:b,layout:E}=v;if(b&&E){const _=a.options.layoutAnchor||void 0,C=Pe();fs(C,r.layoutBox,b.layoutBox,_);const N=Pe();fs(N,s,E.layoutBox,_),e0(C,N)||(m=!0),v.options.layoutRoot&&(a.relativeTarget=N,a.relativeTargetOrigin=C,a.relativeParent=v)}}}a.notifyListeners("didUpdate",{layout:s,snapshot:r,delta:p,layoutDelta:d,hasLayoutChanged:y,hasRelativeLayoutChanged:m})}else if(a.isLead()){const{onExitComplete:s}=a.options;s&&s()}a.options.transition=void 0}function OT(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function jT(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function BT(a){a.clearSnapshot()}function dp(a){a.clearMeasurements()}function _T(a){a.isLayoutDirty=!0,a.updateLayout()}function hp(a){a.isLayoutDirty=!1}function NT(a){a.isAnimationBlocked&&a.layout&&!a.isLayoutDirty&&(a.snapshot=a.layout,a.isLayoutDirty=!0)}function HT(a){const{visualElement:r}=a.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),a.resetTransform()}function mp(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function LT(a){a.resolveTargetDelta()}function GT(a){a.calcProjection()}function kT(a){a.resetSkewAndRotation()}function XT(a){a.removeLeadSnapshot()}function gp(a,r,s){a.translate=Ce(r.translate,0,s),a.scale=Ce(r.scale,1,s),a.origin=r.origin,a.originPoint=r.originPoint}function pp(a,r,s,o){a.min=Ce(r.min,s.min,o),a.max=Ce(r.max,s.max,o)}function qT(a,r,s,o){pp(a.x,r.x,s.x,o),pp(a.y,r.y,s.y,o)}function YT(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const ZT={duration:.45,ease:[.4,0,.1,1]},yp=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),vp=yp("applewebkit/")&&!yp("chrome/")?Math.round:Lt;function bp(a){a.min=vp(a.min),a.max=vp(a.max)}function QT(a){bp(a.x),bp(a.y)}function i0(a,r,s){return a==="position"||a==="preserve-aspect"&&!hT(sp(r),sp(s),.2)}function KT(a){return a!==a.root&&a.scroll?.wasRoot}const PT=a0({attachResizeListener:(a,r)=>Sr(a,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),$u={current:void 0},r0=a0({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!$u.current){const a=new PT({});a.mount(window),a.setOptions({layoutScroll:!0}),$u.current=a}return $u.current},resetTransform:(a,r)=>{a.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),l0=I.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function FT(a=!0){const r=I.useContext(Oc);if(r===null)return[!0,null];const{isPresent:s,onExitComplete:o,register:c}=r,h=I.useId();I.useEffect(()=>{if(a)return c(h)},[a]);const d=I.useCallback(()=>a&&o&&o(h),[h,o,a]);return!s&&o?[!1,d]:[!0]}const s0=I.createContext({strict:!1}),Sp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Tp=!1;function JT(){if(Tp)return;const a={};for(const r in Sp)a[r]={isEnabled:s=>Sp[r].some(o=>!!s[o])};Ny(a),Tp=!0}function o0(){return JT(),LS()}function IT(a){const r=o0();for(const s in a)r[s]={...r[s],...a[s]};Ny(r)}const WT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ds(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||WT.has(a)}let u0=a=>!ds(a);function $T(a){typeof a=="function"&&(u0=r=>r.startsWith("on")?!ds(r):a(r))}try{$T(require("@emotion/is-prop-valid").default)}catch{}function eA(a,r,s){const o={};for(const c in a)c==="values"&&typeof a.values=="object"||at(a[c])||(u0(c)||s===!0&&ds(c)||!r&&!ds(c)||a.draggable&&c.startsWith("onDrag"))&&(o[c]=a[c]);return o}const ys=I.createContext({});function tA(a,r){if(ps(a)){const{initial:s,animate:o}=a;return{initial:s===!1||br(s)?s:void 0,animate:br(o)?o:void 0}}return a.inherit!==!1?r:{}}function nA(a){const{initial:r,animate:s}=tA(a,I.useContext(ys));return I.useMemo(()=>({initial:r,animate:s}),[Ap(r),Ap(s)])}function Ap(a){return Array.isArray(a)?a.join(" "):a}const rf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function c0(a,r,s){for(const o in r)!at(r[o])&&!Yy(o,s)&&(a[o]=r[o])}function aA({transformTemplate:a},r){return I.useMemo(()=>{const s=rf();return nf(s,r,a),Object.assign({},s.vars,s.style)},[r])}function iA(a,r){const s=a.style||{},o={};return c0(o,s,a),Object.assign(o,aA(a,r)),o}function rA(a,r){const s={},o=iA(a,r);return a.drag&&a.dragListener!==!1&&(s.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(s.tabIndex=0),s.style=o,s}const f0=()=>({...rf(),attrs:{}});function lA(a,r,s,o){const c=I.useMemo(()=>{const h=f0();return Zy(h,r,Ky(o),a.transformTemplate,a.style),{...h.attrs,style:{...h.style}}},[r]);if(a.style){const h={};c0(h,a.style,a),c.style={...h,...c.style}}return c}const sA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function lf(a){return typeof a!="string"||a.includes("-")?!1:!!(sA.indexOf(a)>-1||/[A-Z]/u.test(a))}function oA(a,r,s,{latestValues:o},c,h=!1,d){const y=(d??lf(a)?lA:rA)(r,o,c,a),m=eA(r,typeof a=="string",h),v=a!==I.Fragment?{...m,...y,ref:s}:{},{children:b}=r,E=I.useMemo(()=>at(b)?b.get():b,[b]);return I.createElement(a,{...v,children:E})}function uA({scrapeMotionValuesFromProps:a,createRenderState:r},s,o,c){return{latestValues:cA(s,o,c,a),renderState:r()}}function cA(a,r,s,o){const c={},h=o(a,{});for(const E in h)c[E]=$l(h[E]);let{initial:d,animate:p}=a;const y=ps(a),m=By(a);r&&m&&!y&&a.inherit!==!1&&(d===void 0&&(d=r.initial),p===void 0&&(p=r.animate));let v=s?s.initial===!1:!1;v=v||d===!1;const b=v?p:d;if(b&&typeof b!="boolean"&&!gs(b)){const E=Array.isArray(b)?b:[b];for(let _=0;_<E.length;_++){const C=Kc(a,E[_]);if(C){const{transitionEnd:N,transition:L,...H}=C;for(const X in H){let G=H[X];if(Array.isArray(G)){const Y=v?G.length-1:0;G=G[Y]}G!==null&&(c[X]=G)}for(const X in N)c[X]=N[X]}}}return c}const d0=a=>(r,s)=>{const o=I.useContext(ys),c=I.useContext(Oc),h=()=>uA(a,r,o,c);return s?h():ub(h)},fA=d0({scrapeMotionValuesFromProps:af,createRenderState:rf}),dA=d0({scrapeMotionValuesFromProps:Py,createRenderState:f0}),hA=Symbol.for("motionComponentSymbol");function mA(a,r,s){const o=I.useRef(s);I.useInsertionEffect(()=>{o.current=s});const c=I.useRef(null);return I.useCallback(h=>{h&&a.onMount?.(h),r&&(h?r.mount(h):r.unmount());const d=o.current;if(typeof d=="function")if(h){const p=d(h);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(h);else d&&(d.current=h)},[r])}const h0=I.createContext({});function li(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function gA(a,r,s,o,c,h){const{visualElement:d}=I.useContext(ys),p=I.useContext(s0),y=I.useContext(Oc),m=I.useContext(l0),v=m.reducedMotion,b=m.skipAnimations,E=I.useRef(null),_=I.useRef(!1);o=o||p.renderer,!E.current&&o&&(E.current=o(a,{visualState:r,parent:d,props:s,presenceContext:y,blockInitialAnimation:y?y.initial===!1:!1,reducedMotionConfig:v,skipAnimations:b,isSVG:h}),_.current&&E.current&&(E.current.manuallyAnimateOnMount=!0));const C=E.current,N=I.useContext(h0);C&&!C.projection&&c&&(C.type==="html"||C.type==="svg")&&pA(E.current,s,c,N);const L=I.useRef(!1);I.useInsertionEffect(()=>{C&&L.current&&C.update(s,y)});const H=s[Ey],X=I.useRef(!!H&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(H)&&window.MotionHasOptimisedAnimation?.(H));return fb(()=>{_.current=!0,C&&(L.current=!0,window.MotionIsMounted=!0,C.updateFeatures(),C.scheduleRenderMicrotask(),X.current&&C.animationState&&C.animationState.animateChanges())}),I.useEffect(()=>{C&&(!X.current&&C.animationState&&C.animationState.animateChanges(),X.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(H)}),X.current=!1),C.enteringChildren=void 0)}),C}function pA(a,r,s,o){const{layoutId:c,layout:h,drag:d,dragConstraints:p,layoutScroll:y,layoutRoot:m,layoutAnchor:v,layoutCrossfade:b}=r;a.projection=new s(a.latestValues,r["data-framer-portal-id"]?void 0:m0(a.parent)),a.projection.setOptions({layoutId:c,layout:h,alwaysMeasureLayout:!!d||p&&li(p),visualElement:a,animationType:typeof h=="string"?h:"both",initialPromotionConfig:o,crossfade:b,layoutScroll:y,layoutRoot:m,layoutAnchor:v})}function m0(a){if(a)return a.options.allowProjection!==!1?a.projection:m0(a.parent)}function ec(a,{forwardMotionProps:r=!1,type:s}={},o,c){o&&IT(o);const h=s?s==="svg":lf(a),d=h?dA:fA;function p(m,v){let b;const E={...I.useContext(l0),...m,layoutId:yA(m)},{isStatic:_}=E,C=nA(m),N=d(m,_);if(!_&&typeof window<"u"){vA();const L=bA(E);b=L.MeasureLayout,C.visualElement=gA(a,N,E,c,L.ProjectionNode,h)}return U.jsxs(ys.Provider,{value:C,children:[b&&C.visualElement?U.jsx(b,{visualElement:C.visualElement,...E}):null,oA(a,m,mA(N,C.visualElement,v),N,_,r,h)]})}p.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const y=I.forwardRef(p);return y[hA]=a,y}function yA({layoutId:a}){const r=I.useContext(Bp).id;return r&&a!==void 0?r+"-"+a:a}function vA(a,r){I.useContext(s0).strict}function bA(a){const r=o0(),{drag:s,layout:o}=r;if(!s&&!o)return{};const c={...s,...o};return{MeasureLayout:s?.isEnabled(a)||o?.isEnabled(a)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function SA(a,r){if(typeof Proxy>"u")return ec;const s=new Map,o=(h,d)=>ec(h,d,a,r),c=(h,d)=>o(h,d);return new Proxy(c,{get:(h,d)=>d==="create"?o:(s.has(d)||s.set(d,ec(d,void 0,a,r)),s.get(d))})}const TA=(a,r)=>r.isSVG??lf(a)?new nT(r):new JS(r,{allowProjection:a!==I.Fragment});class AA extends Jn{constructor(r){super(r),r.animationState||(r.animationState=sT(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();gs(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:s}=this.node.prevProps||{};r!==s&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let EA=0;class xA extends Jn{constructor(){super(...arguments),this.id=EA++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:s}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===o)return;if(r&&o===!1){if(this.isExitComplete){const{initial:h,custom:d}=this.node.getProps();if(typeof h=="string"||typeof h=="object"&&h!==null&&!Array.isArray(h)){const p=Ta(this.node,h,d);if(p){const{transition:y,transitionEnd:m,...v}=p;for(const b in v)this.node.getValue(b)?.jump(v[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!r);s&&!r&&c.then(()=>{this.isExitComplete=!0,s(this.id)})}mount(){const{register:r,onExitComplete:s}=this.node.presenceContext||{};s&&s(this.id),r&&(this.unmount=r(this.id))}unmount(){}}const wA={animation:{Feature:AA},exit:{Feature:xA}};function xr(a){return{point:{x:a.pageX,y:a.pageY}}}const zA=a=>r=>Ic(r)&&a(r,xr(r));function pr(a,r,s,o){return Sr(a,r,zA(s),o)}const g0=({current:a})=>a?a.ownerDocument.defaultView:null,Ep=(a,r)=>Math.abs(a-r);function DA(a,r){const s=Ep(a.x,r.x),o=Ep(a.y,r.y);return Math.sqrt(s**2+o**2)}const xp=new Set(["auto","scroll"]);class p0{constructor(r,s,{transformPagePoint:o,contextWindow:c=window,dragSnapToOrigin:h=!1,distanceThreshold:d=3,element:p}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=C=>{this.handleScroll(C.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Zl(this.lastRawMoveEventInfo,this.transformPagePoint));const C=tc(this.lastMoveEventInfo,this.history),N=this.startEvent!==null,L=DA(C.offset,{x:0,y:0})>=this.distanceThreshold;if(!N&&!L)return;const{point:H}=C,{timestamp:X}=nt;this.history.push({...H,timestamp:X});const{onStart:G,onMove:Y}=this.handlers;N||(G&&G(this.lastMoveEvent,C),this.startEvent=this.lastMoveEvent),Y&&Y(this.lastMoveEvent,C)},this.handlePointerMove=(C,N)=>{this.lastMoveEvent=C,this.lastRawMoveEventInfo=N,this.lastMoveEventInfo=Zl(N,this.transformPagePoint),Ue.update(this.updatePoint,!0)},this.handlePointerUp=(C,N)=>{this.end();const{onEnd:L,onSessionEnd:H,resumeAnimation:X}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&X&&X(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const G=tc(C.type==="pointercancel"?this.lastMoveEventInfo:Zl(N,this.transformPagePoint),this.history);this.startEvent&&L&&L(C,G),H&&H(C,G)},!Ic(r))return;this.dragSnapToOrigin=h,this.handlers=s,this.transformPagePoint=o,this.distanceThreshold=d,this.contextWindow=c||window;const y=xr(r),m=Zl(y,this.transformPagePoint),{point:v}=m,{timestamp:b}=nt;this.history=[{...v,timestamp:b}];const{onSessionStart:E}=s;E&&E(r,tc(m,this.history));const _={passive:!0,capture:!0};this.removeListeners=Tr(pr(this.contextWindow,"pointermove",this.handlePointerMove,_),pr(this.contextWindow,"pointerup",this.handlePointerUp,_),pr(this.contextWindow,"pointercancel",this.handlePointerUp,_)),p&&this.startScrollTracking(p)}startScrollTracking(r){let s=r.parentElement;for(;s;){const o=getComputedStyle(s);(xp.has(o.overflowX)||xp.has(o.overflowY))&&this.scrollPositions.set(s,{x:s.scrollLeft,y:s.scrollTop}),s=s.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(r){const s=this.scrollPositions.get(r);if(!s)return;const o=r===window,c=o?{x:window.scrollX,y:window.scrollY}:{x:r.scrollLeft,y:r.scrollTop},h={x:c.x-s.x,y:c.y-s.y};h.x===0&&h.y===0||(o?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=h.x,this.lastMoveEventInfo.point.y+=h.y):this.history.length>0&&(this.history[0].x-=h.x,this.history[0].y-=h.y),this.scrollPositions.set(r,c),Ue.update(this.updatePoint,!0))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Fn(this.updatePoint)}}function Zl(a,r){return r?{point:r(a.point)}:a}function wp(a,r){return{x:a.x-r.x,y:a.y-r.y}}function tc({point:a},r){return{point:a,delta:wp(a,y0(r)),offset:wp(a,MA(r)),velocity:CA(r,.1)}}function MA(a){return a[0]}function y0(a){return a[a.length-1]}function CA(a,r){if(a.length<2)return{x:0,y:0};let s=a.length-1,o=null;const c=y0(a);for(;s>=0&&(o=a[s],!(c.timestamp-o.timestamp>Dt(r)));)s--;if(!o)return{x:0,y:0};o===a[0]&&a.length>2&&c.timestamp-o.timestamp>Dt(r)*2&&(o=a[1]);const h=Ht(c.timestamp-o.timestamp);if(h===0)return{x:0,y:0};const d={x:(c.x-o.x)/h,y:(c.y-o.y)/h};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function UA(a,{min:r,max:s},o){return r!==void 0&&a<r?a=o?Ce(r,a,o.min):Math.max(a,r):s!==void 0&&a>s&&(a=o?Ce(s,a,o.max):Math.min(a,s)),a}function zp(a,r,s){return{min:r!==void 0?a.min+r:void 0,max:s!==void 0?a.max+s-(a.max-a.min):void 0}}function RA(a,{top:r,left:s,bottom:o,right:c}){return{x:zp(a.x,s,c),y:zp(a.y,r,o)}}function Dp(a,r){let s=r.min-a.min,o=r.max-a.max;return r.max-r.min<a.max-a.min&&([s,o]=[o,s]),{min:s,max:o}}function VA(a,r){return{x:Dp(a.x,r.x),y:Dp(a.y,r.y)}}function OA(a,r){let s=.5;const o=ut(a),c=ut(r);return c>o?s=yr(r.min,r.max-o,a.min):o>c&&(s=yr(a.min,a.max-c,r.min)),$t(0,1,s)}function jA(a,r){const s={};return r.min!==void 0&&(s.min=r.min-a.min),r.max!==void 0&&(s.max=r.max-a.min),s}const Mc=.35;function BA(a=Mc){return a===!1?a=0:a===!0&&(a=Mc),{x:Mp(a,"left","right"),y:Mp(a,"top","bottom")}}function Mp(a,r,s){return{min:Cp(a,r),max:Cp(a,s)}}function Cp(a,r){return typeof a=="number"?a:a[r]||0}const _A=new WeakMap;class NA{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Pe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=r}start(r,{snapToCursor:s=!1,distanceThreshold:o}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const h=b=>{s&&this.snapToCursor(xr(b).point),this.stopAnimation()},d=(b,E)=>{const{drag:_,dragPropagation:C,onDragStart:N}=this.getProps();if(_&&!C&&(this.openDragLock&&this.openDragLock(),this.openDragLock=pS(_),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=E,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Jt(H=>{let X=this.getAxisMotionValue(H).get()||0;if(Wt.test(X)){const{projection:G}=this.visualElement;if(G&&G.layout){const Y=G.layout.layoutBox[H];Y&&(X=ut(Y)*(parseFloat(X)/100))}}this.originPoint[H]=X}),N&&Ue.update(()=>N(b,E),!1,!0),bc(this.visualElement,"transform");const{animationState:L}=this.visualElement;L&&L.setActive("whileDrag",!0)},p=(b,E)=>{this.latestPointerEvent=b,this.latestPanInfo=E;const{dragPropagation:_,dragDirectionLock:C,onDirectionLock:N,onDrag:L}=this.getProps();if(!_&&!this.openDragLock)return;const{offset:H}=E;if(C&&this.currentDirection===null){this.currentDirection=LA(H),this.currentDirection!==null&&N&&N(this.currentDirection);return}this.updateAxis("x",E.point,H),this.updateAxis("y",E.point,H),this.visualElement.render(),L&&Ue.update(()=>L(b,E),!1,!0)},y=(b,E)=>{this.latestPointerEvent=b,this.latestPanInfo=E,this.stop(b,E),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>{const{dragSnapToOrigin:b}=this.getProps();(b||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:v}=this.getProps();this.panSession=new p0(r,{onSessionStart:h,onStart:d,onMove:p,onSessionEnd:y,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:v,distanceThreshold:o,contextWindow:g0(this.visualElement),element:this.visualElement.current})}stop(r,s){const o=r||this.latestPointerEvent,c=s||this.latestPanInfo,h=this.isDragging;if(this.cancel(),!h||!c||!o)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:p}=this.getProps();p&&Ue.postRender(()=>p(o,c))}cancel(){this.isDragging=!1;const{projection:r,animationState:s}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(r,s,o){const{drag:c}=this.getProps();if(!o||!Ql(r,c,this.currentDirection))return;const h=this.getAxisMotionValue(r);let d=this.originPoint[r]+o[r];this.constraints&&this.constraints[r]&&(d=UA(d,this.constraints[r],this.elastic[r])),h.set(d)}resolveConstraints(){const{dragConstraints:r,dragElastic:s}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;r&&li(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&o?this.constraints=RA(o.layoutBox,r):this.constraints=!1,this.elastic=BA(s),c!==this.constraints&&!li(r)&&o&&this.constraints&&!this.hasMutatedConstraints&&Jt(h=>{this.constraints!==!1&&this.getAxisMotionValue(h)&&(this.constraints[h]=jA(o.layoutBox[h],this.constraints[h]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:s}=this.getProps();if(!r||!li(r))return!1;const o=r.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;c.root&&(c.root.scroll=void 0,c.root.updateScroll());const h=YS(o,c.root,this.visualElement.getTransformPagePoint());let d=VA(c.layout.layoutBox,h);if(s){const p=s(kS(d));this.hasMutatedConstraints=!!p,p&&(d=Ly(p))}return d}startAnimation(r){const{drag:s,dragMomentum:o,dragElastic:c,dragTransition:h,dragSnapToOrigin:d,onDragTransitionEnd:p}=this.getProps(),y=this.constraints||{},m=Jt(v=>{if(!Ql(v,s,this.currentDirection))return;let b=y&&y[v]||{};(d===!0||d===v)&&(b={min:0,max:0});const E=c?200:1e6,_=c?40:1e7,C={type:"inertia",velocity:o?r[v]:0,bounceStiffness:E,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...h,...b};return this.startAxisValueAnimation(v,C)});return Promise.all(m).then(p)}startAxisValueAnimation(r,s){const o=this.getAxisMotionValue(r);return bc(this.visualElement,r),o.start(Qc(r,o,0,s,this.visualElement,!1))}stopAnimation(){Jt(r=>this.getAxisMotionValue(r).stop())}getAxisMotionValue(r){const s=`_drag${r.toUpperCase()}`,c=this.visualElement.getProps()[s];return c||this.visualElement.getValue(r,this.visualElement.latestValues[r]??0)}snapToCursor(r){Jt(s=>{const{drag:o}=this.getProps();if(!Ql(s,o,this.currentDirection))return;const{projection:c}=this.visualElement,h=this.getAxisMotionValue(s);if(c&&c.layout){const{min:d,max:p}=c.layout.layoutBox[s],y=h.get()||0;h.set(r[s]-Ce(d,p,.5)+y)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:s}=this.getProps(),{projection:o}=this.visualElement;if(!li(s)||!o||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Jt(d=>{const p=this.getAxisMotionValue(d);if(p&&this.constraints!==!1){const y=p.get();c[d]=OA({min:y,max:y},this.constraints[d])}});const{transformTemplate:h}=this.visualElement.getProps();this.visualElement.current.style.transform=h?h({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.constraints=!1,this.resolveConstraints(),Jt(d=>{if(!Ql(d,r,null))return;const p=this.getAxisMotionValue(d),{min:y,max:m}=this.constraints[d];p.set(Ce(y,m,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;_A.set(this.visualElement,this);const r=this.visualElement.current,s=pr(r,"pointerdown",m=>{const{drag:v,dragListener:b=!0}=this.getProps(),E=m.target,_=E!==r&&AS(E);v&&b&&!_&&this.start(m)});let o;const c=()=>{const{dragConstraints:m}=this.getProps();li(m)&&m.current&&(this.constraints=this.resolveRefConstraints(),o||(o=HA(r,m.current,()=>this.scalePositionWithinConstraints())))},{projection:h}=this.visualElement,d=h.addEventListener("measure",c);h&&!h.layout&&(h.root&&h.root.updateScroll(),h.updateLayout()),Ue.read(c);const p=Sr(window,"resize",()=>this.scalePositionWithinConstraints()),y=h.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:v})=>{this.isDragging&&v&&(Jt(b=>{const E=this.getAxisMotionValue(b);E&&(this.originPoint[b]+=m[b].translate,E.set(E.get()+m[b].translate))}),this.visualElement.render())}));return()=>{p(),s(),d(),y&&y(),o&&o()}}getProps(){const r=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:o=!1,dragPropagation:c=!1,dragConstraints:h=!1,dragElastic:d=Mc,dragMomentum:p=!0}=r;return{...r,drag:s,dragDirectionLock:o,dragPropagation:c,dragConstraints:h,dragElastic:d,dragMomentum:p}}}function Up(a){let r=!0;return()=>{if(r){r=!1;return}a()}}function HA(a,r,s){const o=Lg(a,Up(s)),c=Lg(r,Up(s));return()=>{o(),c()}}function Ql(a,r,s){return(r===!0||r===a)&&(s===null||s===a)}function LA(a,r=10){let s=null;return Math.abs(a.y)>r?s="y":Math.abs(a.x)>r&&(s="x"),s}class GA extends Jn{constructor(r){super(r),this.removeGroupControls=Lt,this.removeListeners=Lt,this.controls=new NA(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Lt}update(){const{dragControls:r}=this.node.getProps(),{dragControls:s}=this.node.prevProps||{};r!==s&&(this.removeGroupControls(),r&&(this.removeGroupControls=r.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const nc=a=>(r,s)=>{a&&Ue.update(()=>a(r,s),!1,!0)};class kA extends Jn{constructor(){super(...arguments),this.removePointerDownListener=Lt}onPointerDown(r){this.session=new p0(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:g0(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:s,onPan:o,onPanEnd:c}=this.node.getProps();return{onSessionStart:nc(r),onStart:nc(s),onMove:nc(o),onEnd:(h,d)=>{delete this.session,c&&Ue.postRender(()=>c(h,d))}}}mount(){this.removePointerDownListener=pr(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let ac=!1;class XA extends I.Component{componentDidMount(){const{visualElement:r,layoutGroup:s,switchLayoutGroup:o,layoutId:c}=this.props,{projection:h}=r;h&&(s.group&&s.group.add(h),o&&o.register&&c&&o.register(h),ac&&h.root.didUpdate(),h.addEventListener("animationComplete",()=>{this.safeToRemove()}),h.setOptions({...h.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),es.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:s,visualElement:o,drag:c,isPresent:h}=this.props,{projection:d}=o;return d&&(d.isPresent=h,r.layoutDependency!==s&&d.setOptions({...d.options,layoutDependency:s}),ac=!0,c||r.layoutDependency!==s||s===void 0||r.isPresent!==h?d.willUpdate():this.safeToRemove(),r.isPresent!==h&&(h?d.promote():d.relegate()||Ue.postRender(()=>{const p=d.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:r,layoutAnchor:s}=this.props,{projection:o}=r;o&&(o.options.layoutAnchor=s,o.root.didUpdate(),Jc.postRender(()=>{!o.currentAnimation&&o.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:s,switchLayoutGroup:o}=this.props,{projection:c}=r;ac=!0,c&&(c.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(c),o&&o.deregister&&o.deregister(c))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function v0(a){const[r,s]=FT(),o=I.useContext(Bp);return U.jsx(XA,{...a,layoutGroup:o,switchLayoutGroup:I.useContext(h0),isPresent:r,safeToRemove:s})}const qA={pan:{Feature:kA},drag:{Feature:GA,ProjectionNode:r0,MeasureLayout:v0}};function Rp(a,r,s){const{props:o}=a;a.animationState&&o.whileHover&&a.animationState.setActive("whileHover",s==="Start");const c="onHover"+s,h=o[c];h&&Ue.postRender(()=>h(r,xr(r)))}class YA extends Jn{mount(){const{current:r}=this.node;r&&(this.unmount=vS(r,(s,o)=>(Rp(this.node,o,"Start"),c=>Rp(this.node,c,"End"))))}unmount(){}}class ZA extends Jn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Tr(Sr(this.node.current,"focus",()=>this.onFocus()),Sr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Vp(a,r,s){const{props:o}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&o.whileTap&&a.animationState.setActive("whileTap",s==="Start");const c="onTap"+(s==="End"?"":s),h=o[c];h&&Ue.postRender(()=>h(r,xr(r)))}class QA extends Jn{mount(){const{current:r}=this.node;if(!r)return;const{globalTapTarget:s,propagate:o}=this.node.props;this.unmount=xS(r,(c,h)=>(Vp(this.node,h,"Start"),(d,{success:p})=>Vp(this.node,d,p?"End":"Cancel")),{useGlobalTarget:s,stopPropagation:o?.tap===!1})}unmount(){}}const Cc=new WeakMap,ic=new WeakMap,KA=a=>{const r=Cc.get(a.target);r&&r(a)},PA=a=>{a.forEach(KA)};function FA({root:a,...r}){const s=a||document;ic.has(s)||ic.set(s,{});const o=ic.get(s),c=JSON.stringify(r);return o[c]||(o[c]=new IntersectionObserver(PA,{root:a,...r})),o[c]}function JA(a,r,s){const o=FA(r);return Cc.set(a,s),o.observe(a),()=>{Cc.delete(a),o.unobserve(a)}}const IA={some:0,all:1};class WA extends Jn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:r={}}=this.node.getProps(),{root:s,margin:o,amount:c="some",once:h}=r,d={root:s?s.current:void 0,rootMargin:o,threshold:typeof c=="number"?c:IA[c]},p=y=>{const{isIntersecting:m}=y;if(this.isInView===m||(this.isInView=m,h&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:v,onViewportLeave:b}=this.node.getProps(),E=m?v:b;E&&E(y)};this.stopObserver=JA(this.node.current,d,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:s}=this.node;["amount","margin","root"].some($A(r,s))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}function $A({viewport:a={}},{viewport:r={}}={}){return s=>a[s]!==r[s]}const eE={inView:{Feature:WA},tap:{Feature:QA},focus:{Feature:ZA},hover:{Feature:YA}},tE={layout:{ProjectionNode:r0,MeasureLayout:v0}},nE={...wA,...eE,...qA,...tE},aE=SA(nE,TA);function b0(){!tf.current&&_y();const[a]=I.useState(os.current);return a}const S0=aE,iE=[{id:"fathom",title:"Fathom",period:"2026",category:{zh:"Unreal 游戏 / 硬件交互",en:"Unreal game / hardware interaction"},summary:{zh:"面向实体控制器的潜艇协作游戏。我负责主要程序架构、玩法系统、UI 数据联动和外部硬件输入接入。",en:"A submarine co-op game built around physical controllers. I owned the main gameplay architecture, UI data flow, and external hardware input integration."},contribution:[{zh:"搭建 GameMode、角色控制、任务生成、小游戏接口与 UI/HUD 数据绑定。",en:"Built GameMode, character control, task generation, minigame interfaces, and UI/HUD data binding."},{zh:"实现 Server / Client 外部输入模块，将硬件信号解析为 Unreal 内的游戏指令。",en:"Implemented a server/client input module that translated physical-device signals into Unreal gameplay commands."},{zh:"通过异步接收、缓冲与插值处理输入延迟，并为关键链路补充状态校验和容错。",en:"Reduced input latency with asynchronous receiving, buffering, and interpolation, then added validation and fallback handling."}],stack:["Unreal Engine","Blueprint","Networking","Hardware I/O","UI"],images:[{src:"/media/projects/fathom-task.png",alt:{zh:"Fathom 任务玩法与绿色 HUD",en:"Fathom task gameplay with green HUD"},caption:{zh:"任务系统与实时 HUD",en:"Task system and realtime HUD"},position:"center"},{src:"/media/projects/fathom-sonar.png",alt:{zh:"Fathom 潜艇舱室画面",en:"Fathom submarine interior"},caption:{zh:"潜艇场景与硬件交互目标",en:"Submarine environment and hardware interaction target"},position:"center"}]},{id:"house-of-vampires",title:"House of Vampires",period:"2025",category:{zh:"Unreal 蓝图游戏",en:"Unreal Blueprint game"},summary:{zh:"已经在 itch.io 上线的哥特式恐怖解谜游戏。我集中负责程序开发，同时完成玩家手部绑定与动画。",en:"A gothic puzzle-horror game released on itch.io. I led programming and also created the player-hand rig and animation."},contribution:[{zh:"使用 Unreal Blueprint 实现玩法流程、交互、谜题、状态管理与手柄支持。",en:"Implemented gameplay flow, interaction, puzzles, state management, and controller support in Unreal Blueprints."},{zh:"制作第一人称手部绑定与动画，并将动画状态接入交互流程。",en:"Created the first-person hand rig and animation and connected it to gameplay interactions."},{zh:"参与完整打包与上线交付，项目可在 itch.io 下载。",en:"Contributed through packaging and public release; the game is available on itch.io."}],stack:["Unreal Engine","Blueprint","Gameplay","Rigging","Animation"],images:[{src:"/media/projects/house-of-vampires.webp",alt:{zh:"House of Vampires 的 itch.io 项目页与游戏截图",en:"House of Vampires itch.io page and screenshots"},caption:{zh:"已上线的 itch.io 页面与实机画面",en:"Published itch.io page and in-game captures"},position:"top"}],link:{label:{zh:"打开 itch.io 项目页",en:"Open the itch.io page"},href:"https://musitive.itch.io/hov"},youtubeId:"aY36FtqdGAw",story:{title:{zh:"你能逃出德古拉的城堡吗？",en:"Can you survive Dracula's Castle?"},intro:{zh:"进入《House of Vampires》中这座受经典恐怖电影启发的哥特式城堡。利用宅邸里散落的物品以及自己的身体，解开逃离城堡所需的谜题。",en:"Enter the classic horror-inspired gothic castle in House of Vampires! Use items scattered around the mansion as well as your own body to solve the puzzles needed to escape the castle."},features:[{title:{zh:"多种谜题",en:"Various Puzzles"},detail:{zh:"要成功逃出城堡，你需要只利用自己能够携带的物品，解决多种不同的谜题。",en:"To successfully escape the castle, you will need to solve several different puzzles using only what you can carry."}},{title:{zh:"德古拉",en:"Dracula"},detail:{zh:"游戏重新塑造了德古拉这一角色；在这个可怕的怪物抓住你之前，你必须设法逃脱。",en:"Featuring a new take on Dracula as a character, you must escape this terrifying monster before he catches you."}},{title:{zh:"手柄支持",en:"Controller Support"},detail:{zh:"游戏完整支持键盘鼠标和 Xbox 手柄。",en:"The game fully functions with not only Keyboard & Mouse but Xbox Controllers as well."}},{title:{zh:"经典恐怖电影质感",en:"Classic Horror Film Look"},detail:{zh:"游戏通过后期处理还原经典恐怖电影的胶片质感。",en:"Using post-processing, the game captures that film look from classic horror films."}}],note:{zh:"建议佩戴耳机游玩。",en:"Best experienced with headphones."}}},{id:"through-other-eyes",title:"Through Other Eyes",period:"2025",category:{zh:"VR 无障碍体验",en:"VR accessibility experience"},summary:{zh:"让玩家以视障者的感知方式穿过城市、寻找导盲犬的 VR 行走模拟。我负责场景搭建、事件交互和狗狗绑定动画。",en:"A VR walking simulation about navigating a city as a blind person and reuniting with a guide dog. I built scenes, interactions, and the dog rig and animation."},contribution:[{zh:"协助把关卡规划落成可游玩的 VR 场景，布置道路、障碍和关键交互点。",en:"Translated the level plan into a playable VR scene with streets, obstacles, and interaction points."},{zh:"编写事件交互逻辑，并制作简单的导盲犬绑定与动画。",en:"Authored event interaction logic and created a simple guide-dog rig and animation."},{zh:"围绕受限视觉信息设计引导、反馈和空间节奏。",en:"Worked on guidance, feedback, and spatial pacing under intentionally limited visual information."}],stack:["VR","Unreal Engine","Level Design","Interaction","Rigging"],images:[{src:"/media/projects/through-other-eyes-cover.webp",alt:{zh:"Through Other Eyes 项目海报",en:"Through Other Eyes project poster"},caption:{zh:"项目 One Sheet",en:"Project one-sheet"},position:"center 32%"},{src:"/media/projects/through-other-eyes-vr.png",alt:{zh:"VR 中的视障模拟画面",en:"Visual-impairment simulation in VR"},caption:{zh:"头显内的受限视觉效果",en:"Restricted-vision effect inside the headset"},position:"center"},{src:"/media/projects/through-other-eyes-level.webp",alt:{zh:"Through Other Eyes 关卡规划图",en:"Through Other Eyes level plan"},caption:{zh:"关卡路径与交互点规划",en:"Route and interaction-point planning"},position:"center"}]},{id:"retro-arcade",title:"Retro 3D Arcade Prototype",period:"2025",category:{zh:"Unity 游戏与 Shader",en:"Unity gameplay and shader"},summary:{zh:"复古 3D 街机游戏原型。我负责完整 Gameplay、角色与动画状态，并尝试把 3D 动画烘焙成带法线信息的像素序列帧。",en:"A retro 3D arcade prototype. I owned gameplay and character state and explored baking 3D animation into pixel sprites with normal information."},contribution:[{zh:"实现角色状态、动画状态、关卡逻辑和核心玩法循环。",en:"Implemented character state, animation state, level logic, and the core gameplay loop."},{zh:"制作部分 2D 角色素材，并完成 3D 到 2D 序列帧的实验流程。",en:"Created part of the 2D character art and completed a 3D-to-2D sprite-sequence experiment."},{zh:"编写利用颜色、Alpha 与法线贴图的像素化实时 Shader，并记录方案未进入最终版本的原因。",en:"Wrote a pixel-rendering shader using color, alpha, and normal data and documented why the experiment was not adopted."}],stack:["Unity","C#","Shader","Gameplay","2D / 3D Pipeline"],images:[{src:"/media/projects/retro-arcade-shader.png",alt:{zh:"Unity 中的像素角色 Shader 实验",en:"Pixel-character shader experiment in Unity"},caption:{zh:"3D 动画到像素序列帧与法线光照实验",en:"3D animation to pixel sprites with normal-lighting experiment"},position:"center"},{src:"/media/projects/retro-arcade-sprites.png",alt:{zh:"复古街机角色序列帧素材",en:"Retro arcade character sprite sheets"},caption:{zh:"本人制作的角色序列帧素材",en:"Character sprite sheets I created"},position:"center"}]},{id:"digital-twin",title:"Industrial Digital Twin",period:"2023",category:{zh:"Web 3D 可视化",en:"Web 3D visualization"},summary:{zh:"基于开源 icegl / TresJS 框架开发的工业 3D 可视化原型；我的工作集中在 FBX 工业模型导入、机械关节控制与参数 UI。",en:"An industrial 3D visualization prototype built on icegl / TresJS; my work focused on FBX assets, mechanical joint controls, and parameter UI."},contribution:[{zh:"新增工业 DigitalTwin 页面与配置，导入多组 FBX 机械和场景资产。",en:"Added the industrial DigitalTwin page and configuration and imported multiple FBX mechanical and scene assets."},{zh:"扩展 TransformControls，用参数驱动机械模型和关节旋转。",en:"Extended TransformControls to drive mechanical models and joint rotation through parameters."},{zh:"使用 Tweakpane 与 Element Plus 整理显示参数和工业控制按钮，并明确区分个人修改与上游框架能力。",en:"Built parameter and industrial controls with Tweakpane and Element Plus while separating personal changes from upstream framework features."}],stack:["Vue 3","TresJS","Three.js","TransformControls","FBX"],images:[{src:"/media/projects/digital-twin.png",alt:{zh:"工业数字孪生建筑线框与显示控制面板",en:"Industrial digital twin with building outlines and display controls"},caption:{zh:"城市建筑数据与显示参数控制",en:"Building data and display-parameter controls"},position:"center"}],link:{label:{zh:"查看 GitHub 仓库",en:"View the GitHub repository"},href:"https://github.com/Ubik42/Vue3_Digital_Twin"}}];function Sn(a,r){return a[r]}const rE=`# Industrial Digital Twin

An industrial 3D visualization prototype developed during an internship on top of the open-source icegl / TresJS project. My verifiable work is the industrial-model and mechanical-interaction layer, not every city, globe, or heat-map demo in the upstream repository.

![Industrial digital twin capture](/media/projects/digital-twin.png)

## My implementation scope

- Added the DigitalTwin page, configuration, and industrial-scene entry.
- Imported multiple FBX industrial and scene assets.
- Adjusted model transforms and interaction in the TresJS / Three.js scene.
- Extended TransformControls for mechanical models and joint rotation.
- Added Tweakpane and Element Plus controls for display parameters and industrial actions.

The repository contains extensive upstream visualization examples. They are treated as framework context rather than personal contributions.
`,lE=`# Industrial Digital Twin

这是实习期间参与的工业 3D 可视化原型。项目基于开源 icegl / TresJS 工程继续开发，我的可核实工作集中在工业模型与机械交互，而不是仓库中全部城市、地球和热力图演示。

![工业数字孪生项目画面](/media/projects/digital-twin.png)

## 我的实现范围

- 新增 DigitalTwin 页面、配置与工业场景入口。
- 导入 \`UEmodel03.fbx\`、\`model.fbx\`、\`model01.FBX\` 与 \`scene.fbx\` 等 FBX 资产。
- 调整 Three.js / TresJS 场景中的模型变换和交互。
- 扩展 TransformControls 页面，用参数控制机械模型与关节旋转。
- 使用 Tweakpane 与 Element Plus 组织显示参数和工业控制按钮。

## 技术结构

前端使用 Vue 3、TresJS 与 Three.js 组织 Web 3D 场景。模型载入后通过 TransformControls 和参数面板改变位置、旋转与关节状态，使工业资产可以直接在浏览器中检查和演示。

## 贡献边界

仓库来自一个功能丰富的开源可视化框架，大量通用 3D 城市、地球和数据可视化示例由上游提供。这里展示的是我在实习项目中新增和修改的工业模型导入与控制部分；不把上游已有功能计为个人独立开发成果。
`,sE=`# Fathom

Fathom is a submarine co-op game built around a physical control console. I was the primary programmer for Game Mode, player and input systems, task and minigame interfaces, UI/HUD data flow, and the hardware-to-Unreal communication path.

## Task gameplay

@[video: Task system and realtime HUD](/media/projects/fathom-task.mp4)

## Gameplay architecture

\`BP_FathomGameMode\` owns stages, regular and emergency tasks, success and failure, and progression. \`BP_FathomPlayerController\` centralizes keyboard, test, and external-controller events. Structs and Data Tables hold task configuration, while \`WBP_GameBase\` gives minigames a common interface.

When task-generation rules changed, I replaced a growing branch chain with a modular data-driven event system and bound its state to the task manager, popups, minigames, and HUD.

## Physical controller path

Input travels through **Arduino Serial → Python Sender → MQTT → Python Receiver → OSC → Unreal PlayerController**. The bridge scans serial devices, parses the fixed field format, filters continuous and threshold inputs, and emits discrete gameplay events.

## Sonar gameplay

@[video: Sonar minigame capture](/media/projects/fathom-sonar.mp4)

## Final integration

I audited the Game Mode, input pipeline, and minigame handoffs for null references, event ordering, and unexpected hardware values, then added validation gates, bounds checks, and fallback handling. I also wrote the first programming guide used to onboard engineers who joined mid-project.
`,oE=`# Fathom

Fathom 是一款围绕实体控制台设计的潜艇协作游戏。我担任主要程序开发，负责 Game Mode、角色与输入、任务系统、小游戏接口、UI/HUD 数据联动，以及 Arduino 控制器进入 Unreal 的通信链路。

## 任务玩法

@[video: 任务系统与实时 HUD 实机录像](/media/projects/fathom-task.mp4)

## Gameplay 架构

项目基于 Unreal Engine 5.5.4 First Person 模板。\`BP_FathomGameMode\` 负责关卡阶段、常规任务与紧急任务、成功失败和推进条件；\`BP_FathomPlayerController\` 集中处理键鼠、测试输入与外部控制器事件；Struct 和 Data Table 保存任务配置；\`WBP_GameBase\` 为各小游戏提供统一接口。

当策划在中期显著调整任务生成规则时，我没有继续堆叠分支，而是重构任务数据和事件调用链，把紧急任务、常规任务、时间限制与失败扣血拆成数据驱动结构。后端状态通过绑定同步到 Task Manager、弹窗、小游戏和 HUD，使设计变更不再要求重写整条蓝图链。

## 实体控制器链路

实体设备输入依次经过 **Arduino Serial → Python Sender → MQTT → Python Receiver → OSC → Unreal PlayerController**。Sender 自动扫描串口并转发固定格式字段；Receiver 解析 \`POT\`、\`ENC\`、\`FSR\`、\`JOYX\`、按钮和按键，对连续值做方向与阈值判断，再把离散事件发送给 Unreal。

早期同步测试中，输入包到达时间不稳定，导致角色抖动。我把接收工作移出阻塞主流程，加入缓冲、边界判断和角色侧插值，同时避免让 OSC 直接模拟 Enhanced Input 按键，最终改为由 PlayerController 发出业务事件。

## 声呐玩法

@[video: 声呐小游戏实机录像](/media/projects/fathom-sonar.mp4)

## 最终冲刺与稳定性

联合调试暴露出空引用、事件乱序和硬件异常值等问题。我重新审计 Game Mode、输入管线和小游戏接口，在关键交接点加入 Null Check、状态门、范围检查和回退逻辑，并扩展接口适配最后确定的新控制器部件。

这一阶段让我从“逐个完成功能”转向检查系统之间的数据流、生命周期和失败路径。我还整理了项目第一份程序技术手册，用于帮助中途加入的工程同学理解蓝图层级、输入协议和任务接口。
`,uE=`# House of Vampires

## Can you survive Dracula's Castle?

Enter a gothic castle inspired by classic horror films. Use items scattered around the mansion—and your own body—to solve puzzles and escape before Dracula catches you. The game supports keyboard and mouse as well as Xbox controllers, with post processing designed around a classic film look.

## My role and seven-week timeline

I led Blueprint programming and created the first-person hand rig and animation. The work progressed through material tests, swarm VFX, blood-reveal effects, hand assets, animation refinement, the readable pickup system, and final interaction integration.

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
`,cE=`# House of Vampires

## 你能逃出德古拉的城堡吗？

进入这座受经典恐怖电影启发的哥特式城堡。玩家需要利用宅邸里散落的物品以及自己的身体解开谜题，在德古拉抓住自己之前逃离城堡。游戏完整支持键盘鼠标与 Xbox 手柄，并通过后期处理塑造经典恐怖片的胶片质感。

建议佩戴耳机游玩。

## 我的职责与七周开发过程

我集中负责 Unreal 蓝图程序开发，并制作第一人称手部绑定和动画。七周工作依次包括：参与美术方向与材质尝试、鼠群效果、血液显字特效、手部模型与初版动画、动画优化、可拾取读信蓝图，以及最后的交互机制整合。

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
`,fE=`# Retro 3D Arcade Prototype

A retro Unity game based on a Q*bert-like loop. I programmed the gameplay, character and animation state, and level logic, while also exploring a custom shader pipeline and creating part of the 2D character art.

## 3D animation to pixel sprites

I modeled and animated a Q*bert character, then exported sprite sequences containing color, alpha, and normal information. A Unity shader reconstructed the silhouette and used the normal channel for realtime lighting.

![3D-to-2D sprite and shader experiment](/media/projects/retro-diary/image-000.png)

The pipeline worked but was not adopted: detailed characters produced excessive noise at the chosen 45-degree view, and the schedule did not allow the full 3D asset set to be completed.

## Character concepts and 2D art

![Character and animation sprite sheets](/media/projects/retro-diary/image-001.png)

The available material primarily documents the pipeline experiment; no sufficiently clear final gameplay capture is presented as a finished result.
`,dE=`# Retro 3D Arcade Prototype

这是一个以 Q*bert / 吃豆人式循环为原型的复古 3D Unity 游戏。我担任程序员，完成角色状态、动画状态、关卡逻辑和核心 Gameplay，同时负责特殊 Shader 实验并绘制部分 2D 角色素材。

## 原型与美术方向

项目早期确定 Q*bert 式踩格玩法，并把踩过方块后的视觉反馈设计为魔法阵，让整体气质更偏“邪异”而不是纯恐怖。

## 从 3D 动画烘焙像素序列帧

我尝试复现《Dead Cells》式 3D 到 2D 流程：建模并绑定原始 Q*bert 角色，制作动画，再输出包含颜色、Alpha 与法线信息的序列帧材质。

![3D 动画转像素序列帧与 Unity Shader 实验](/media/projects/retro-diary/image-000.png)

Unity Shader 根据 Alpha 重建轮廓，并利用法线贴图让 2D Sprite 响应实时光照。整条流程成功运行，但没有进入最终迭代：45 度视角下，细节较多的角色会产生明显噪点；同时项目周期不足以完成全部 3D 资产。

## 角色概念与 2D 素材

在后续阶段，我参与主角和敌人的概念设计，并第一次独立绘制用于展示和动画的 PNG 序列帧。

![本人绘制的角色与动画序列帧](/media/projects/retro-diary/image-001.png)

## 最终职责范围

- 完整 Gameplay 机制、角色状态和动画状态。
- 关卡逻辑与核心游戏循环。
- 3D 到 2D 序列帧、法线光照与像素化 Shader 实验。
- 部分主角与敌人 2D 美术素材。

目前保留的素材重点记录技术管线实验；没有足够清晰的最终游戏录像，因此不把实验画面描述成最终玩法成片。
`,hE=`# Through Other Eyes

A VR experience about navigating a city with restricted vision. I helped build scenes and event logic, rigged and animated the guide dog and character feet, and contributed shaders, VFX, UI, and the opening scene.

![Project one sheet](/media/projects/through-other-eyes-cover.webp)

## Route and interaction plan

![Level route and interaction points](/media/projects/through-other-eyes-level.webp)

## VR captures

![Guide dog encounter](/media/projects/through-other-eyes-vr.png)

![Cane exploration and city broadcast](/media/projects/through-other-eyes/screenshot2.png)

![Collision feedback](/media/projects/through-other-eyes/screenshot3.png)

![Phone broadcast interaction](/media/projects/through-other-eyes/screenshot4.png)

No suitable VR recording was available, so the page keeps actual headset captures rather than substituting unrelated footage.

## Four-week development

![Shader and rendering tests](/media/projects/through-other-eyes-diary/image-000.png)

![Floating-ink shader experiment](/media/projects/through-other-eyes-diary/image-001.png)

![VFX tests](/media/projects/through-other-eyes-diary/image-002.png)

![Guide-dog rigging work](/media/projects/through-other-eyes-diary/image-003.png)

![Puzzle and UI feedback](/media/projects/through-other-eyes-diary/image-005.png)

![Interaction prompt design](/media/projects/through-other-eyes-diary/image-007.png)

![Opening scene](/media/projects/through-other-eyes-diary/image-009.png)

## Reflection

Several early visual experiments did not integrate well because progress was not communicated early enough. Later I helped the team reconcile the technical and visual goals; the key lesson was to surface work sooner and validate direction continuously.
`,mE=`# Through Other Eyes

这是一个运行于 VR 的视障体验项目。玩家以受限视觉穿过城市，通过白杖、声音、广播和导盲犬理解空间并寻找前进方向。我负责协助搭建场景、编写事件交互逻辑、制作导盲犬与角色脚部的简单绑定动画，也参与 Shader、VFX、UI 和 Opening Scene。

![项目 One Sheet](/media/projects/through-other-eyes-cover.webp)

## 路线与交互点

关卡规划图标出了城市路线、障碍、广播、手机、车辆和导盲犬等关键节点。场景搭建围绕这些节点安排空间节奏和反馈。

![完整关卡路线与交互点规划](/media/projects/through-other-eyes-level.webp)

## VR 实机画面

![在城市中找到导盲犬](/media/projects/through-other-eyes-vr.png)

![白杖探索与城市广播文字](/media/projects/through-other-eyes/screenshot2.png)

![障碍碰撞反馈](/media/projects/through-other-eyes/screenshot3.png)

![手机广播交互](/media/projects/through-other-eyes/screenshot4.png)

项目没有合适的 VR 录制版本，因此这里保留头显中的实际截图，而不使用与成品无关的替代视频。

## 四周开发过程

第一周集中探索项目渲染与 Shader；第二周尝试让地面物体产生漂浮墨水效果，但实际表现不符合场景需求，因此没有全量采用。

![Shader 与渲染效果测试](/media/projects/through-other-eyes-diary/image-000.png)

![浮动墨水 Shader 实验](/media/projects/through-other-eyes-diary/image-001.png)

第三、四周转向 VFX、UI、导盲犬与脚部绑定动画，并搭建 Opening Scene。

![VFX 测试](/media/projects/through-other-eyes-diary/image-002.png)

![导盲犬模型与绑定工作](/media/projects/through-other-eyes-diary/image-003.png)

![谜题与 UI 反馈设计](/media/projects/through-other-eyes-diary/image-005.png)

![交互提示设计](/media/projects/through-other-eyes-diary/image-007.png)

![Opening Scene 与标题画面](/media/projects/through-other-eyes-diary/image-009.png)

## 复盘

部分早期效果因为沟通不足没有很好地进入最终项目。后期我帮助团队重新梳理技术实现与视觉目标，也明确了下一次需要更早、更频繁地展示过程结果，而不是等到整合阶段才暴露方向偏差。
`,Op={fathom:{zh:oE,en:sE},"house-of-vampires":{zh:cE,en:uE},"through-other-eyes":{zh:mE,en:hE},"retro-arcade":{zh:dE,en:fE},"digital-twin":{zh:lE,en:rE}},gE=[{id:"noemancer",title:"Noemancer",category:"engine-tools",categoryLabel:{zh:"自研游戏引擎",en:"Custom game engine"},summary:{zh:"C++20 游戏引擎与编辑器，覆盖渲染、物理、动画、C# 脚本、资产烘焙和 Agent 工具层。",en:"A C++20 engine and editor spanning rendering, physics, animation, C# scripting, asset cooking, and agent tools."},cover:"/media/repositories/noemancer.webp",tags:["C++20","D3D12 / Vulkan","C#","MCP"],repositoryUrl:"https://github.com/Ubik42/Noemancer",story:{zh:`# Noemancer

Noemancer 不是套在现有引擎外面的编辑器外壳。仓库包含原生 Editor、游戏 Runtime、资产 Cook、独立 Player 打包、C# 项目脚本，以及由 CLI 与 MCP 共享的引擎命令层。

## 当前可以完成的工作

- 创建和打开项目，编辑场景、输入与项目 UI。
- 在隔离的 Play World 中运行 C# 游戏逻辑，并选择性 Apply Back。
- 通过 SDL_GPU 驱动 D3D12 / Vulkan，提供 Forward PBR、阴影、TAA、GTAO、Bloom 与 ACES Tone Mapping。
- 导入 GLB / FBX，烘焙 Mesh、Animation 与 KTX2 资产，并打包独立 Windows Player。
- 通过稳定 ID、Schema 与 Revision，让 Editor、CLI 和 MCP 使用同一套命令与 Undo / Redo 事务。

## Agent 工具层

引擎把场景、项目、资产注册表和运行时诊断公开为结构化状态。自动化流程遵循 **Observe → Plan → Apply → Receipt → Undo / Redo**，先读取事实，再执行受约束的修改。

## 当前边界

项目仍处于 Pre-alpha，当前只完成 Windows x64 端到端验证。SSR、SSGI、硬件光追、动态天空与稳定插件 SDK 仍是后续工作，不作为现成功能展示。`,en:`# Noemancer

Noemancer contains a native Editor, game Runtime, asset Cook, standalone Player packaging, C# project scripting, and one command layer shared by CLI and MCP.

## Current capabilities

- Project and scene authoring, input and project UI.
- Isolated Play World execution with selective Apply Back.
- SDL_GPU rendering on D3D12 / Vulkan with Forward PBR, shadows, TAA, GTAO, Bloom, and ACES tone mapping.
- GLB / FBX import, cooked mesh and animation formats, KTX2 assets, and Windows Player packaging.
- Stable IDs, schemas, revisions, receipts, and undoable commands shared by the Editor and agent tools.

## Current boundary

The project is pre-alpha and currently verified end to end on Windows x64. SSR, SSGI, hardware ray tracing, dynamic atmosphere, and a stable plug-in SDK are not presented as finished features.`},images:[{src:"/media/repositories/noemancer.webp",alt:{zh:"Noemancer 编辑器实机界面",en:"Noemancer editor running in-engine"}}]},{id:"aitoolta",title:"AI ToolTA",category:"technical-art",categoryLabel:{zh:"DCC 与引擎工具管线",en:"DCC and engine tool pipeline"},summary:{zh:"面向 Maya、Unreal、Blender、Houdini 等宿主的技术美术工具合集与共享工程底座。",en:"A technical-art tool portfolio and shared engineering foundation for Maya, Unreal, Blender, Houdini, and other hosts."},cover:"/media/repositories/aitoolta.png",tags:["Maya","Unreal","Python","Pipeline"],repositoryUrl:"https://github.com/Ubik42/AIToolTA",story:{zh:`# AI ToolTA

AI ToolTA 是整套 DCC 与游戏引擎技术美术工具的公开总入口。母仓维护共享界面、事务记录、Agent 运行边界、证据工具与统一验证脚本；需要在具体宿主中安装的产品保持独立仓库。

## 主要方向

- **跨 DCC 资产规则：**统一描述单位、命名、拓扑、UV、材质与变换规则，再由 Maya、Blender、3ds Max、Houdini 和 MotionBuilder 适配器采集与修复。
- **动画与引擎往返：**检查 Maya 动画、Unreal Socket、Level Sequence 与交付数据之间的一致性。
- **角色与毛发交付：**覆盖角色标定、Groom 导出、空间挂接与可审查的资产包。
- **贴图与平台变体：**连接 Substance 输出、Unreal 导入和 PC / Mobile 资源约束。
- **安全自动化：**在修改场景前预览事务，并记录执行结果、差异、回滚和证据。

## 展示依据

作品包含 Maya 2024 与 Unreal 5.4 中的真实宿主截图、公开仓库、结构化运行记录和人工测试包。尚未完成真实宿主验证的部分会明确标为原型。`,en:`# AI ToolTA

AI ToolTA is the public index and shared engineering foundation for a set of DCC and game-engine technical-art tools. Host-installable products remain independent repositories.

## Main areas

- Cross-DCC asset rules and safe repair.
- Maya / Unreal animation and Sequencer round-trip inspection.
- Character, groom, socket, and spatial handoff.
- Substance / Unreal texture and platform variants.
- Previewable scene transactions, receipts, rollback, and evidence.

The portfolio uses real Maya 2024 and Unreal 5.4 captures, public repositories, structured run records, and manual test packages. Unverified integrations are labeled as prototypes.`},images:[{src:"/media/repositories/aitoolta.png",alt:{zh:"Maya 中运行的 AI ToolTA 资产检查工具",en:"AI ToolTA asset inspection running in Maya"}},{src:"/media/portfolio/animation-roundtrip-host.png",alt:{zh:"Unreal 中运行的动画往返检查工具",en:"Animation round-trip inspection running in Unreal"}}]},{id:"rez-studio-launcher",title:"Rez Studio",category:"engine-tools",categoryLabel:{zh:"DCC 工作站启动器",en:"DCC workstation launcher"},summary:{zh:"根据项目、软件版本和 Rez 包环境启动 Maya 等 DCC 的 Windows 桌面应用。",en:"A Windows desktop launcher that resolves project, application version, and Rez package context before starting a DCC."},cover:"/media/repositories/rez-studio.png",tags:["Rez","Tauri","React","Python"],repositoryUrl:"https://github.com/Ubik42/rez-studio-launcher",story:{zh:`# Rez Studio

面向 Windows DCC 工作站的项目感知软件启动器。同一台机器进入不同项目时，启动器根据项目配置选择 DCC 版本、插件集合和 Rez 环境，而不是直接打开一个固定 EXE。

## 工作流程

- 登录或选择本机用户，读取可访问项目。
- 从项目软件库选择 Maya 等应用及批准版本。
- 调用 Rez 解析依赖并检查启动环境。
- 记录解析、启动与失败信息，便于管线人员定位工作站问题。

项目使用 Tauri 2 + React 19 构建桌面界面，以 Python 服务连接 Rez 3.4；同时提供 CLI 协议和 Windows 安装包。`,en:`# Rez Studio

A project-aware Windows DCC launcher. It selects the approved DCC version, plug-in set, and Rez environment for the current project instead of opening a fixed executable.

The Tauri 2 and React desktop application connects to Rez through a Python service, exposes launch diagnostics, and ships a Windows installer plus a documented CLI protocol.`},images:[{src:"/media/repositories/rez-studio.png",alt:{zh:"Rez Studio 项目软件库",en:"Rez Studio project application library"}}]},{id:"maya-indie-tool",title:"MayaIndieTool",category:"technical-art",categoryLabel:{zh:"Maya 独立工具集",en:"Maya utility collection"},summary:{zh:"早期 Maya 独立脚本与制作辅助工具集合，记录从单点脚本走向完整插件的开发过程。",en:"An early collection of Maya production scripts documenting the path from focused utilities to full plug-ins."},cover:"/media/repositories/maya-indie.png",tags:["Maya","Python","PyMEL"],repositoryUrl:"https://github.com/Ubik42/MayaIndieTool",story:{zh:`# MayaIndieTool

这是早期 Maya 独立工具的归档集合，重点是把建模、场景整理和重复操作拆成可以直接运行的小工具。它保留了个人 Maya 工具开发从单文件脚本、Shelf 入口到模块化工具集的演进过程。

详情以仓库 README 和源代码中的实际工具入口为准。`,en:`# MayaIndieTool

An archive of early standalone Maya utilities for modeling, scene organization, and repetitive production operations. It documents the progression from single-file scripts and shelf entries toward modular Maya tooling.`}},{id:"mayacraft",title:"MayaCraft",category:"technical-art",categoryLabel:{zh:"Maya 综合插件",en:"Maya production plug-in"},summary:{zh:"覆盖绑定、动画、蒙皮和技术调试的 Maya 综合插件与公共工具层。",en:"A Maya production plug-in spanning rigging, animation, skinning, technical debugging, and shared utilities."},cover:"/media/repositories/mayacraft.png",tags:["Maya","Python","PySide","Rigging"],repositoryUrl:"https://github.com/Ubik42/MayaCraft",story:{zh:`# MayaCraft

MayaCraft 将角色制作中分散的绑定、动画、蒙皮与技术检查功能组织为统一插件。项目强调可重复使用的后端 Utility 与清晰的界面入口，并保留 Pose、Rigged 角色和测试素材用于验证真实制作流程。

## 覆盖范围

- 骨骼、控制器和约束辅助。
- 蒙皮、权重与角色制作操作。
- 动画与 Pose 数据管理。
- 命名、属性连接和场景技术检查。`,en:`# MayaCraft

MayaCraft organizes rigging, animation, skinning, and technical checks into one Maya plug-in with reusable utility layers and production fixtures for poses and rigged characters.`}},{id:"pyarsenal",title:"PyArsenal",category:"engine-tools",categoryLabel:{zh:"Python 脚本管理器",en:"Python script manager"},summary:{zh:"通过标签、环境隔离和一键编译管理分散 Python 脚本的桌面工具。",en:"A desktop tool for organizing scattered Python scripts with tags, isolated environments, and one-click compilation."},cover:"/media/repositories/pyarsenal.png",tags:["Python","Desktop App","Script Library"],repositoryUrl:"https://github.com/Ubik42/PyArsenal",story:{zh:`# PyArsenal

PyArsenal 面向需要维护大量零散脚本的 Python 开发者。它把脚本登记、标签检索、运行环境和编译入口集中到一个图形界面中，减少“脚本在哪、依赖是什么、如何交付”的重复管理成本。

具体能力与使用方式以仓库当前 README 和实现为准。`,en:`# PyArsenal

PyArsenal is a graphical manager for Python developers who maintain many scripts. It centralizes registration, tags, execution environments, and compilation so a script library remains searchable and deliverable.`}},{id:"neothesia",title:"Neothesia",category:"engine-tools",categoryLabel:{zh:"钢琴练习应用",en:"Piano practice application"},summary:{zh:"持续维护的钢琴学习分支，加入刻意练习、反馈、曲库、乐谱同步与 Pianoteq 工作流。",en:"An actively maintained piano-learning fork with deliberate practice, feedback, repertoire, notation, and Pianoteq workflows."},cover:"/media/repositories/neothesia.png",tags:["Rust","WGPU","MIDI","VST3"],repositoryUrl:"https://github.com/Ubik42/Neothesia",story:{zh:`# Neothesia

这是在开源 Neothesia 基础上持续维护的钢琴学习分支，开发重点从单纯的瀑布流演奏界面扩展到可重复的刻意练习。

## 本分支的主要工作

- 等待正确音符、左右手选择、循环、小节号、节拍细分、Count-in 与自适应速度。
- 按音高、时值、力度、踏板、左右手和小节生成练习反馈，并保存练习记录与建议。
- 本地曲库、监视文件夹、搜索、收藏、练习队列、来源与许可记录。
- MIDI 与 MusicXML / MXL 对齐、分页乐谱跟随和演奏高亮。
- 外部 MIDI 路由以及 Windows 下直接加载 Pianoteq VST3 的实验性乐器路径。

项目仍处于源码开发阶段，VST3 广泛兼容性、安装更新和更多实体设备长时间测试仍在推进。`,en:`# Neothesia

This independently maintained fork extends Neothesia from a falling-note visualizer into a deliberate-practice application with looping, hand selection, count-in, adaptive tempo, detailed feedback, a local repertoire library, synchronized MusicXML notation, and Pianoteq workflows.

The direct VST3 path is still experimental and the project is currently distributed as source rather than a packaged end-user release.`},images:[{src:"/media/repositories/neothesia.png",alt:{zh:"Neothesia 钢琴练习界面",en:"Neothesia piano practice interface"}}]},{id:"artflow-agent",title:"ArtFlow Agent",category:"ai-aigc",categoryLabel:{zh:"AIGC + Agent",en:"AIGC + Agent"},summary:{zh:"以 Agent 为控制层、ComfyUI 为生成运行时的游戏美术迭代与可复现交付流程。",en:"A game-art iteration pipeline using an agent as the control layer and ComfyUI as the generation runtime."},cover:"/media/repositories/artflow.jpg",tags:["Agent","ComfyUI","PydanticAI","Evaluation"],repositoryUrl:"https://github.com/Ubik42/ArtFlow-Agent",story:{zh:`# ArtFlow Agent

ArtFlow Agent 面向游戏美术迭代，把 Agent 放在控制层，把 ComfyUI 作为实际生成运行时。它处理的是从 Brief、环境检查、配方选择、人工批准到候选评估和可复现交付的完整过程，而不是开放式聊天。

## 已完成的垂直流程

- 确定性规划，以及可选的 PydanticAI 结构化规划。
- 检查本地 ComfyUI、上传输入、提交任务、监控状态并下载结果。
- 使用受约束的工作流 Recipe，阻止 Agent 任意生成未知节点图。
- 外部保存 Run 状态、审批、事件日志与生成回执。
- 生成候选 Contact Sheet，进行人工选择、轨迹检查与资产校验。
- 将最终结果、配置和校验值打包为可复现 Run Package。

默认路径离线且确定；只有显式提供模型时才调用 LLM，外部生成也必须先经过人工批准。`,en:`# ArtFlow Agent

ArtFlow Agent uses an agent as the control plane and ComfyUI as the generation runtime for game-art iteration. The implemented slice covers brief validation, environment inspection, reviewed recipes, approval-gated execution, persisted run state, contact sheets, candidate selection, evaluation, and reproducible packaging.

The default path is deterministic and offline. Model-backed planning is opt-in, and generation cannot start before explicit approval.`},images:[{src:"/media/repositories/artflow.jpg",alt:{zh:"ArtFlow Agent 生成候选接触表",en:"ArtFlow Agent candidate contact sheet"}}]},{id:"comfyui-production-nodes",title:"ComfyUI Production Nodes",category:"ai-aigc",categoryLabel:{zh:"ComfyUI 自定义节点",en:"ComfyUI custom nodes"},summary:{zh:"为生成工作流补充约束检查、依赖检查、生成回执和 DCC / 引擎交付清单。",en:"Custom nodes adding constraint checks, dependency checks, generation receipts, and DCC / engine handoff manifests."},cover:"/media/repositories/comfyui.png",tags:["ComfyUI","Python","Provenance","Handoff"],repositoryUrl:"https://github.com/Ubik42/ComfyUI-Production-Nodes",story:{zh:`# ComfyUI Production Nodes

ComfyUI 已经负责图像生成；这个节点包补足生成前后的生产环节。它可以在昂贵任务开始前检查尺寸、Denoise、批量预算、模型和自定义节点依赖，并在完成后写出生成回执与 DCC / 引擎交付清单。

## 自定义节点

- Production Constraint Check：检查尺寸、批量、Denoise 与百万像素预算。
- Production Dependency Check 与 ComfyUI Inventory：发现本地模型和节点并报告缺失项。
- Workflow Contract Check：按可移植 Contract 校验输入 Slot 与参数范围。
- Generation Receipt 与 Receipt Writer：记录模型、Prompt、Seed、工作流与 Schema，并安全写入 JSON。
- Batch Handoff Manifest：为 Unreal、Unity、Maya、Blender、Houdini 等目标生成可移植交付元数据。

仓库包含本机 ComfyUI 的真实生成结果、对应 API Workflow 和节点写出的 Receipt；节点本身不绑定具体模型，也不接管渲染器。`,en:`# ComfyUI Production Nodes

This package adds production checks around an existing ComfyUI graph: dimensions and budget validation, dependency inventory, workflow contracts, generation receipts, contained JSON writes, and portable DCC / engine handoff manifests.

The repository includes a real local ComfyUI output, its API workflow, and the receipt written by the package. The nodes remain model- and renderer-independent.`},images:[{src:"/media/repositories/comfyui.png",alt:{zh:"本机 ComfyUI 生成结果",en:"Locally generated ComfyUI output"}},{src:"/media/repositories/comfyui-workflow.png",alt:{zh:"ComfyUI 自定义节点工作流",en:"ComfyUI custom-node workflow"}}]}];function Tn(a,r){return a[r]}const pE=[{id:"unreal-stylized-world",artstationUrl:"https://www.artstation.com/artwork/kNZDbK",title:{en:"Unreal Engine Stylized World",zh:"Unreal 风格化世界"},cover:"/media/artstation/unreal-stylized-world.jpg",category:{en:"Realtime environment",zh:"实时场景"},summary:{en:"A stylized realtime environment built from a Houdini heightfield HDA, then authored and optimized in Unreal Engine.",zh:"使用 Houdini 生成高度场与散布数据，将 HDA 接入 Unreal Engine，完成风格化材质、植被替换、水面、灯光与后处理。"},process:[{en:"Generated, eroded, and smoothed the terrain in Houdini, with placeholders for rocks and four tree variants.",zh:"在 Houdini 中生成、侵蚀并平滑地形，同时为岩石和四类树木建立程序化散布占位。"},{en:"Built distance-aware terrain, water, grass, and foliage materials in Unreal Engine.",zh:"在 Unreal Engine 中制作分远近层级的地表、水面、草地与植被材质。"},{en:"Completed scene dressing, lighting, sharpening post process, and final realtime presentation.",zh:"完成场景布置、灯光、锐化后处理与最终实时画面。"}],tools:["Unreal Engine","Houdini","HDA","Material Editor"],youtubeId:"GRVpU7MBSTg",featured:!0,images:[{src:"/media/visual-works/world-final.webp",alt:{en:"Final stylized environment in Unreal Engine",zh:"Unreal Engine 中的风格化世界最终画面"},caption:{en:"Final realtime environment",zh:"最终实时场景"}},{src:"/media/visual-works/world-heightfield.webp",alt:{en:"Houdini heightfield and placement visualization",zh:"Houdini 高度场与模型占位可视化"},caption:{en:"Heightfield and procedural placement data",zh:"高度场与程序化散布数据"}}]},{id:"maya-plugin",artstationUrl:"https://www.artstation.com/artwork/XJGnR3",title:{en:"Maya Plugin",zh:"Maya 综合工具集"},cover:"/media/artstation/maya-plugin.jpg",category:{en:"DCC tool development",zh:"DCC 工具开发"},summary:{en:"A modular Maya tool suite covering nine production areas, with separated interface and utility layers.",zh:"面向 Maya 生产流程的综合工具集，覆盖属性、绑定、约束、骨骼、控制器、命名、连接、工程与动画九类功能。"},process:[{en:"Separated PySide interfaces from reusable backend utility classes.",zh:"以 PySide 界面层调用后端 Utility 类，拆分交互、业务逻辑与公共功能。"},{en:"Implemented production-oriented operations for rigging, attributes, constraints, naming, and connections.",zh:"实现绑定、属性、约束、命名与驱动连接等面向实际制作的批量操作。"},{en:"Added persistent theme, window state, responsive layout, and contextual tooltips.",zh:"补充主题与窗口状态记忆、弹性布局、字号适配及悬停提示。"}],tools:["Maya","Python","PySide","DCC Pipeline"],youtubeId:"7rUuqI9Pil0",images:[{src:"/media/visual-works/maya-main.webp",alt:{en:"Main Maya plugin window",zh:"Maya 综合工具集主界面"},caption:{en:"Main window and attribute tools",zh:"主窗口与属性工具"}},{src:"/media/visual-works/maya-rig.webp",alt:{en:"Rigging tools in the Maya plugin",zh:"Maya 工具集中的绑定功能"},caption:{en:"Rigging utilities",zh:"绑定工具页"}},{src:"/media/visual-works/maya-connections.webp",alt:{en:"Attribute connection tools",zh:"属性连接与驱动关系工具"},caption:{en:"Connection editor",zh:"属性连接编辑器"}}]},{id:"stylized-road-material",artstationUrl:"https://www.artstation.com/artwork/Bk918D",title:{en:"Stylized Road Material",zh:"风格化道路材质"},cover:"/media/artstation/stylized-road-material.jpg",category:{en:"Procedural material",zh:"程序化材质"},summary:{en:"A stylized road material authored procedurally in Substance Designer.",zh:"使用 Substance Designer 制作的风格化道路材质，通过 Flood Fill、层级拆分与多层噪声构建砖块、花纹、草地、花瓣、泥土和潮湿变化。"},process:[{en:"Constructed the brick base and spiral motif as reusable procedural patterns.",zh:"程序化构建砖块基底与旋涡纹样，并保持图案参数可调。"},{en:"Used Flood Fill and deformation mixing to break repetition.",zh:"使用 Flood Fill 与形变混合打散重复，建立砖块尺度和方向变化。"},{en:"Layered grass, petals, dirt, moisture, and unified color grading.",zh:"分层加入草地、花瓣、泥土、潮湿区域，最后统一整体色彩。"}],tools:["Substance Designer","Flood Fill","Procedural Material"],youtubeId:"D2jptqFjUZE",images:[{src:"/media/visual-works/road-material.webp",alt:{en:"Final stylized road material",zh:"风格化道路材质最终效果"},caption:{en:"Final material maps and surface",zh:"最终材质与贴图效果"}},{src:"/media/visual-works/road-graph.webp",alt:{en:"Substance Designer material graph",zh:"Substance Designer 材质节点网络"},caption:{en:"Procedural graph",zh:"程序化节点网络"}}]},{id:"rigging-animation",artstationUrl:"https://www.artstation.com/artwork/vb42ev",title:{en:"Rigging & Animation",zh:"角色绑定与动画"},cover:"/media/artstation/rigging-animation.jpg",category:{en:"Rigging and gameplay",zh:"绑定与游戏角色"},summary:{en:"A complete path from a mechanical character rig in Maya to a playable Unreal Engine character.",zh:"将 T-200 机器人从 Maya 骨骼与控制器绑定推进到 Unreal Engine 过场动画和可操控角色，处理机械轴、武器链条、舱门、灯光与攻击动画。"},process:[{en:"Built a mechanical rig with specialized IK, weapon-chain constraints, doors, ladder, and spotlight controls.",zh:"针对机械结构制作腿部 IK、武器链条约束、舱门、梯子与探照灯控制。"},{en:"Authored a startup cutscene in Level Sequencer.",zh:"在 Level Sequencer 中制作角色进入机体与机器人启动的过场动画。"},{en:"Implemented locomotion, upper-body attack blending, VFX states, and spotlight input.",zh:"通过 AnimGraph 与蓝图实现移动、上半身攻击混合、烟雾状态和探照灯输入。"}],tools:["Maya","Unreal Engine","Sequencer","AnimGraph","Blueprint"],youtubeId:"wd1gCuZZ2EY",featured:!0,images:[{src:"/media/visual-works/rig-result.webp",alt:{en:"Playable T-200 robot in Unreal Engine",zh:"Unreal Engine 中可操控的 T-200 机器人"},caption:{en:"Playable character result",zh:"可操控角色最终效果"}},{src:"/media/visual-works/rig-maya.webp",alt:{en:"Mechanical robot rig in Maya",zh:"Maya 中的机器人机械绑定"},caption:{en:"Maya rig and controls",zh:"Maya 骨骼与控制器"}},{src:"/media/visual-works/rig-animgraph.webp",alt:{en:"Unreal Engine animation graph",zh:"Unreal Engine 动画状态图"},caption:{en:"Animation state and blending",zh:"动画状态与分层混合"}}]},{id:"unity-sdf-shader",artstationUrl:"https://www.artstation.com/artwork/XJGnQl",title:{en:"Unity SDF Shader",zh:"Unity SDF 体积云 Shader"},cover:"/media/artstation/unity-sdf-shader.jpg",category:{en:"Realtime shader",zh:"实时 Shader"},summary:{en:"A Unity volume-cloud shader using signed distance fields and ray marching.",zh:"在 Unity 中以有向距离场描述云体，使用 Ray Marching 进行密度采样，并结合光线包围盒求交、噪声、吸收和散射计算完成体积云渲染。"},process:[{en:"Combined sphere and box SDF primitives through smooth union and subtraction.",zh:"组合球体与盒体 SDF，并以平滑并集和差集构造可变化的云体形态。"},{en:"Implemented ray-box intersection and density sampling in HLSL.",zh:"在 HLSL 中实现光线与包围盒求交、步进采样和密度计算。"},{en:"Exposed noise, absorption, ambient density, and light intensity for art direction.",zh:"开放噪声、吸收、环境密度与光照强度参数，支持在 Unity Inspector 中调整。"}],tools:["Unity","HLSL","SDF","Ray Marching"],youtubeId:"vSrJBlIisTs",images:[{src:"/media/visual-works/sdf-properties.webp",alt:{en:"Unity SDF shader properties",zh:"Unity SDF Shader 参数定义"},caption:{en:"Artist-facing parameters",zh:"可调渲染参数"}},{src:"/media/visual-works/sdf-raymarch.webp",alt:{en:"Ray marching fragment shader code",zh:"体积云 Ray Marching 片元着色代码"},caption:{en:"Density sampling and lighting",zh:"密度采样与光照计算"}}]},{id:"houdini-lightning",artstationUrl:"https://www.artstation.com/artwork/5W1Xkg",title:{en:"Houdini Lightning VFX",zh:"Houdini 闪电特效"},cover:"/media/artstation/houdini-lighting.jpg",category:{en:"Procedural VFX",zh:"程序化特效"},summary:{en:"A procedural lightning system that strikes nearby geometry and activates localized destruction.",zh:"使用 Houdini 构建的程序化闪电与破碎交互：电流自动寻找周围目标，生成不同形态与频率的闪电，并在命中位置激活对应刚体簇。"},process:[{en:"Projected source points onto nearby surfaces to establish valid strike targets.",zh:"沿球体法线向周围场景投射散点，筛选有效距离内的闪电命中目标。"},{en:"Built animated lightning forms with curve attributes, VOP noise, particles, and color flow.",zh:"结合曲线属性、VOP 噪声、粒子与颜色流动构建主电流和次级电流。"},{en:"Connected hit regions to clustered rigid-body activation in DOPs.",zh:"在 DOP 中将命中区域连接到预切割刚体簇，实现局部优先崩解。"}],tools:["Houdini","VOP","DOP","Particles","Rigid Bodies"],images:[{src:"/media/visual-works/lightning-form.webp",alt:{en:"Procedural lightning curves",zh:"程序化生成的闪电曲线"},caption:{en:"Lightning form generation",zh:"闪电形态生成"}},{src:"/media/visual-works/lightning-stream.webp",alt:{en:"Secondary electric current effect",zh:"次级电流与颜色流动效果"},caption:{en:"Secondary current",zh:"次级电流效果"}},{src:"/media/visual-works/lightning-destruction.webp",alt:{en:"Wall destruction driven by lightning strikes",zh:"闪电命中驱动的墙体破碎"},caption:{en:"Strike-driven rigid-body destruction",zh:"命中驱动的刚体破碎"}}]},{id:"houdini-cluster",artstationUrl:"https://www.artstation.com/artwork/Zl3GrN",title:{en:"Houdini Interactive Cluster",zh:"Houdini 交互式花簇"},cover:"/media/artstation/houdini-cluster.jpg",category:{en:"Procedural interaction",zh:"程序化交互"},summary:{en:"A fully procedural flower cluster that bends and blooms in response to a moving reference point.",zh:"完全由 Houdini 程序生成的交互式花簇。参考点靠近时，花茎会向目标弯曲并逐渐开放；远离后则恢复闭合状态。"},process:[{en:"Scattered stems and used VEX to calculate distance-attenuated orientation toward the target.",zh:"散布花茎，并用 VEX 计算指向目标的方向、距离衰减、噪声和平滑。"},{en:"Generated petal rings and blended their normals by target proximity.",zh:"程序化生成花瓣环，根据参考点距离混合花瓣法线以控制开合。"},{en:"Added randomized orientation and color variation without external models.",zh:"不依赖外部模型，为花簇加入方向扰动和颜色变化，完成整体生成网络。"}],tools:["Houdini","VEX","Procedural Modeling","Interaction"],images:[{src:"/media/visual-works/cluster-response.webp",alt:{en:"Flower cluster responding to a reference point",zh:"花簇对参考点产生弯曲与开放响应"},caption:{en:"Interactive bloom response",zh:"交互式开放效果"}},{src:"/media/visual-works/cluster-network.webp",alt:{en:"Complete Houdini flower network",zh:"Houdini 花簇完整节点网络"},caption:{en:"Complete procedural network",zh:"完整程序化网络"}}]},{id:"unreal-vfx",artstationUrl:"https://www.artstation.com/artwork/oJWA5k",title:{en:"Unreal Engine VFX",zh:"Unreal 水墨战斗特效"},cover:"/media/artstation/unreal-vfx.jpg",category:{en:"Realtime VFX",zh:"实时特效"},summary:{en:"A Chinese ink-inspired combat VFX set built across Unreal materials, Niagara, animation, and post process.",zh:"以中国水墨视觉为方向，综合 Unreal 材质、Niagara、动画通知、Sequencer 与后处理，制作刀光、地裂、墨迹喷溅、聚合和画面冲击效果。"},process:[{en:"Created trail meshes and materials for dissolution, blur, refraction, cracks, and screen distortion.",zh:"制作刀光轨迹网格，以及溶解、拖尾、折射、裂纹和屏幕扰动材质。"},{en:"Layered multiple Niagara systems for blade arcs, dust, smoke, ink splashes, stones, and cohesion.",zh:"分层组合刀光、尘土、烟雾、墨迹喷溅、碎石和聚合等 Niagara 系统。"},{en:"Triggered VFX through animation slots and notifies, then added impact post process.",zh:"通过动画 Slot 与 Notify 触发特效，并在重击阶段加入水墨与模糊后处理。"}],tools:["Unreal Engine","Niagara","Material Editor","Animation"],youtubeId:"hbdYTygLQBw",images:[{src:"/media/visual-works/vfx-blade.webp",alt:{en:"Layered sword trail effect",zh:"多层组合的水墨刀光效果"},caption:{en:"Sword trail composition",zh:"刀光特效组合"}},{src:"/media/visual-works/vfx-ground.webp",alt:{en:"Large-scale ink ground fissure effect",zh:"大范围水墨地裂效果"},caption:{en:"Ground fissure layers",zh:"地裂效果分层"}},{src:"/media/visual-works/vfx-final.webp",alt:{en:"Final combat VFX in Unreal Engine",zh:"Unreal Engine 水墨战斗特效最终画面"},caption:{en:"Final realtime presentation",zh:"最终实时画面"}}]},{id:"houdini-tower",artstationUrl:"https://www.artstation.com/artwork/nJWYm1",title:{en:"Houdini PCG Tower",zh:"Houdini 程序化高塔"},cover:"/media/artstation/houdini-pcg-tower.jpg",category:{en:"Procedural modeling",zh:"程序化建模"},summary:{en:"A parameterized tower generator with independently authored walls, columns, transitions, body, and top.",zh:"在 Houdini 中拆分墙体、立柱、过渡结构、塔身与塔顶五个模块，建立相互约束的参数化生成逻辑，并生成可直接应用材质的 UV。"},process:[{en:"Built modular wall, window, pillar, railing, body, and roof generators.",zh:"分别构建墙体与窗框、立柱、栏杆、塔身装饰和塔顶结构生成器。"},{en:"Used normals, edge groups, VOP-authored attributes, loops, and resampling to control structure.",zh:"使用法线、边组、VOP 属性、循环和重采样控制结构细节与拼装位置。"},{en:"Exposed base, body, and top parameters while maintaining valid joins and UVs.",zh:"将底座、塔身与塔顶参数集中开放，并保持模块衔接和 UV 结果有效。"}],tools:["Houdini","Procedural Modeling","VOP","UV"],youtubeId:"IxTV5AredLw",images:[{src:"/media/visual-works/tower-wall.webp",alt:{en:"Procedural wall and window module",zh:"程序化墙体与窗框模块"},caption:{en:"Wall generator",zh:"墙体生成模块"}},{src:"/media/visual-works/tower-body.webp",alt:{en:"Assembled procedural tower body",zh:"组合后的程序化塔身"},caption:{en:"Tower body assembly",zh:"塔身模块组合"}},{src:"/media/visual-works/tower-top.webp",alt:{en:"Procedural tower top assembly",zh:"程序化塔顶结构"},caption:{en:"Tower top module",zh:"塔顶生成模块"}}]}],yE=`# Houdini Interactive Cluster\r
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
`,vE=`# Houdini 交互式花簇\r
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
`,bE=`# Houdini Lightning VFX\r
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
`,SE=`# Houdini 闪电特效\r
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
`,TE=`# Houdini PCG Tower\r
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
`,AE=`# Houdini PCG 塔楼\r
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
`,EE=`# Maya Plugin\r
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
`,xE=`# Maya 插件\r
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
`,wE=`# Rigging & Animation\r
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
`,zE=`# 绑定与动画\r
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
`,DE=`# Stylized Road Material\r
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
`,ME=`# 风格化道路材质\r
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
`,CE=`# Unity SDF Shader\r
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
`,UE=`# Unity SDF 着色器\r
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
`,RE=`# Unreal Engine Stylized World\r
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
`,VE=`# Unreal Engine 风格化世界\r
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
`,OE=`# Unreal Engine VFX\r
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
`,jE=`# Unreal Engine VFX\r
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
`,BE={"unreal-stylized-world":{zh:VE,en:RE},"maya-plugin":{zh:xE,en:EE},"stylized-road-material":{zh:ME,en:DE},"rigging-animation":{zh:zE,en:wE},"unity-sdf-shader":{zh:UE,en:CE},"houdini-lightning":{zh:SE,en:bE},"houdini-cluster":{zh:vE,en:yE},"unreal-vfx":{zh:jE,en:OE},"houdini-tower":{zh:AE,en:TE}},T0=/^!\[(.*?)\]\((.*?)\)$/,A0=/^@\[video(?::\s*(.*?))?\]\((.*?)\)$/,E0=/^(#{1,6})\s+(.+)$/,Uc=/^\s*-\s+(.+)$/,Rc=/^\s*\d+\.\s+(.+)$/,_E=/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)]+)/g;function ts(a){return a.replace(/^\s*>\s?/,"").trimEnd()}function NE(a){const r=ts(a).trim();return!r||r==="<aside>"||r==="</aside>"||T0.test(r)||A0.test(r)||E0.test(r)||Uc.test(r)||Rc.test(r)}function HE(a){const r=a.replace(/\r\n/g,`
`).split(`
`),s=[];for(let o=0;o<r.length;){const c=ts(r[o]).trim();if(!c||c==="<aside>"||c==="</aside>"){o+=1;continue}const h=c.match(T0);if(h){s.push({type:"image",alt:h[1],src:h[2]}),o+=1;continue}const d=c.match(A0);if(d){s.push({type:"video",caption:d[1]??"",src:d[2]}),o+=1;continue}const p=c.match(E0);if(p){s.push({type:"heading",level:p[1].length,text:p[2].replace(/^\*\*|\*\*$/g,"")}),o+=1;continue}const y=c.match(Uc),m=c.match(Rc);if(y||m){const b=!!m,E=[];for(;o<r.length;){const C=ts(r[o]).trim().match(b?Rc:Uc);if(!C)break;E.push(C[1]),o+=1}s.push({type:"list",ordered:b,items:E});continue}const v=[c];for(o+=1;o<r.length&&!NE(r[o]);)v.push(ts(r[o]).trim()),o+=1;s.push({type:"paragraph",text:v.join(" ")})}return s}function LE(a){let r=a;for(let c=0;c<2;c+=1)try{r=decodeURIComponent(r)}catch{break}if(r==="image.png")return"/media/notion/image-000.webp";if(r==="texture.png")return"/media/notion/texture.webp";if(r==="PixPin_2024-11-13_18-17-55.gif")return"/media/notion/vfx-fluctuation.gif";const s=r.match(/^image (\d+)\.png$/);if(s)return`/media/notion/image-${s[1]}.webp`;const o=r.match(/^图片(\d+)\.png$/);return o?`/media/notion/cover-${o[1]}.webp`:a}function rc(a){return a.split(_E).filter(Boolean).map((r,s)=>{if(r.startsWith("`")&&r.endsWith("`"))return U.jsx("code",{children:r.slice(1,-1)},s);if(r.startsWith("**")&&r.endsWith("**"))return U.jsx("strong",{children:r.slice(2,-2)},s);const o=r.match(/^\[([^\]]+)\]\(([^)]+)\)$/);return o?U.jsx("a",{href:o[2],target:"_blank",rel:"noreferrer",children:o[1]},s):/^https?:\/\//.test(r)?U.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:r},s):r})}function sf({markdown:a,title:r}){const s=HE(a),o=s.findIndex(c=>c.type==="heading"&&c.level===1);return U.jsx("div",{className:"notion-story",children:s.map((c,h)=>{if(h===o)return null;if(c.type==="image")return U.jsx("figure",{children:U.jsx("img",{src:LE(c.src),alt:c.alt||r,loading:"lazy"})},`${c.src}-${h}`);if(c.type==="video")return U.jsxs("figure",{className:"story-video",children:[U.jsx("video",{src:c.src,controls:!0,preload:"metadata",playsInline:!0}),c.caption&&U.jsx("figcaption",{children:c.caption})]},`${c.src}-${h}`);if(c.type==="heading"){const d=c.level<=2?"h3":"h4";return U.jsx(d,{children:rc(c.text)},h)}if(c.type==="list"){const d=c.ordered?"ol":"ul";return U.jsx(d,{children:c.items.map((p,y)=>U.jsx("li",{children:rc(p)},`${p}-${y}`))},h)}return U.jsx("p",{children:rc(c.text)},h)})})}const GE=[{id:"all",zh:"全部作品",en:"All work"},{id:"engine-tools",zh:"引擎与工具",en:"Engines & tools"},{id:"ai-aigc",zh:"AI 与 AIGC",en:"AI & AIGC"},{id:"technical-art",zh:"技术美术",en:"Technical art"},{id:"games",zh:"游戏与交互",en:"Games & interaction"}];function kE(){const{locale:a}=di(),r=b0()??!1,[s,o]=I.useState("all"),[c,h]=I.useState(null),d=I.useRef(null),p=I.useMemo(()=>[...gE.map(m=>({kind:"repository",id:m.id,category:m.category,title:m.title,label:Tn(m.categoryLabel,a),summary:Tn(m.summary,a),cover:m.cover,tags:m.tags,value:m})),...pE.map(m=>({kind:"visual",id:m.id,category:"technical-art",title:Tn(m.title,a),label:Tn(m.category,a),summary:Tn(m.summary,a),cover:m.cover,tags:m.tools,value:m})),...iE.map(m=>({kind:"project",id:m.id,category:"games",title:m.title,label:Sn(m.category,a),summary:Sn(m.summary,a),cover:m.images[0].src,tags:m.stack,value:m}))],[a]),y=s==="all"?p:p.filter(m=>m.category===s);return I.useEffect(()=>{const m=d.current;if(m)return c?(m.open||m.showModal(),document.body.classList.add("has-project-dialog")):(m.open&&m.close(),document.body.classList.remove("has-project-dialog")),()=>document.body.classList.remove("has-project-dialog")},[c]),U.jsxs("section",{id:"portfolio",className:"portfolio-gallery","aria-labelledby":"portfolio-title",children:[U.jsxs("header",{className:"portfolio-gallery-header",children:[U.jsxs("div",{children:[U.jsx("h2",{id:"portfolio-title",children:a==="zh"?"作品":"Work"}),U.jsx("span",{children:String(p.length).padStart(2,"0")})]}),U.jsx("p",{children:a==="zh"?"完整图文、演示与源码链接集中收录于各项目详情。":"Full case studies, demos, and source links are collected in each project detail."})]}),U.jsx("div",{className:"portfolio-filters",role:"group","aria-label":a==="zh"?"筛选作品":"Filter work",children:GE.map(m=>U.jsx("button",{type:"button",className:s===m.id?"is-active":"","aria-pressed":s===m.id,onClick:()=>o(m.id),children:a==="zh"?m.zh:m.en},m.id))}),U.jsx("div",{className:"portfolio-grid",children:y.map(m=>U.jsxs(S0.button,{type:"button",className:"portfolio-tile",onClick:()=>h(m),whileHover:r?void 0:{y:-4},transition:{duration:.18},children:[U.jsx("figure",{children:U.jsx("img",{src:m.cover,alt:"",loading:"eager"})}),U.jsxs("div",{className:"portfolio-tile-copy",children:[U.jsx("small",{children:m.label}),U.jsx("h3",{children:m.title}),U.jsx("p",{children:m.summary}),U.jsx("div",{children:m.tags.slice(0,4).map(v=>U.jsx("span",{children:v},v))})]})]},`${m.kind}-${m.id}`))}),U.jsx("dialog",{ref:d,className:`project-dialog unified-dialog ${c?.kind==="visual"?"visual-work-dialog":""}`,onCancel:m=>{m.preventDefault(),h(null)},onClose:()=>h(null),onClick:m=>{m.target===m.currentTarget&&h(null)},children:c&&U.jsx(XE,{item:c,locale:a,close:()=>h(null)})})]})}function XE({item:a,locale:r,close:s}){const o=b0()??!1;return U.jsxs(S0.article,{initial:o?!1:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.2},children:[U.jsx("button",{className:"project-dialog-close",type:"button",onClick:s,"aria-label":r==="zh"?"关闭项目详情":"Close project details",children:"×"}),U.jsxs("div",{className:"project-dialog-heading",children:[U.jsxs("p",{children:[a.label," · ",a.tags.join(" · ")]}),U.jsx("h2",{children:a.title}),U.jsx("p",{children:a.summary})]}),a.kind==="repository"&&U.jsx(qE,{work:a.value,locale:r}),a.kind==="visual"&&U.jsx(YE,{work:a.value,locale:r}),a.kind==="project"&&U.jsx(ZE,{project:a.value,locale:r})]},`${a.kind}-${a.id}`)}function qE({work:a,locale:r}){return U.jsxs(U.Fragment,{children:[U.jsxs("a",{className:"project-dialog-source",href:a.repositoryUrl,target:"_blank",rel:"noreferrer",children:[U.jsx("span",{children:r==="zh"?"查看 GitHub 仓库":"View GitHub repository"}),U.jsx("span",{"aria-hidden":"true",children:"↗"})]}),U.jsx(sf,{markdown:Tn(a.story,r),title:a.title}),a.images&&U.jsx(QE,{images:a.images.map(s=>({src:s.src,alt:Tn(s.alt,r),caption:""}))})]})}function YE({work:a,locale:r}){return U.jsxs(U.Fragment,{children:[U.jsxs("a",{className:"project-dialog-source",href:a.artstationUrl,target:"_blank",rel:"noreferrer",children:[U.jsx("span",{children:r==="zh"?"查看原始 ArtStation 项目":"View the original ArtStation project"}),U.jsx("span",{"aria-hidden":"true",children:"↗"})]}),a.youtubeId&&U.jsx(x0,{youtubeId:a.youtubeId,title:Tn(a.title,r)}),U.jsx(sf,{markdown:BE[a.id][r],title:Tn(a.title,r)})]})}function ZE({project:a,locale:r}){return U.jsxs(U.Fragment,{children:[a.link&&U.jsxs("a",{className:"project-dialog-source",href:a.link.href,target:"_blank",rel:"noreferrer",children:[U.jsx("span",{children:Sn(a.link.label,r)}),U.jsx("span",{"aria-hidden":"true",children:"↗"})]}),a.youtubeId&&U.jsx(x0,{youtubeId:a.youtubeId,title:a.title}),Op[a.id]?U.jsx(sf,{markdown:Op[a.id][r],title:a.title}):a.story&&U.jsxs("section",{className:"project-dialog-story",children:[U.jsx("h3",{children:Sn(a.story.title,r)}),U.jsx("p",{children:Sn(a.story.intro,r)}),U.jsx("h4",{children:r==="zh"?"玩法与特色":"Gameplay & Features"}),U.jsx("dl",{children:a.story.features.map(s=>U.jsxs("div",{children:[U.jsx("dt",{children:Sn(s.title,r)}),U.jsx("dd",{children:Sn(s.detail,r)})]},s.title.en))}),a.story.note&&U.jsx("p",{className:"project-dialog-note",children:Sn(a.story.note,r)})]}),U.jsxs("div",{className:"project-dialog-details",children:[U.jsxs("div",{children:[U.jsx("h3",{children:r==="zh"?"我具体做了什么":"What I built"}),U.jsx("ul",{children:a.contribution.map(s=>U.jsx("li",{children:Sn(s,r)},s.en))})]}),U.jsxs("div",{children:[U.jsx("h3",{children:r==="zh"?"技术与工具":"Technology"}),U.jsx("ul",{className:"project-dialog-stack",children:a.stack.map(s=>U.jsx("li",{children:s},s))})]})]})]})}function x0({youtubeId:a,title:r}){return U.jsx("div",{className:"project-dialog-video",children:U.jsx("iframe",{src:`https://www.youtube-nocookie.com/embed/${a}?rel=0`,title:`${r} demo video`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})})}function QE({images:a}){return U.jsx("div",{className:"project-dialog-gallery",children:a.map(r=>U.jsxs("figure",{children:[U.jsx("img",{src:r.src,alt:r.alt,style:{objectPosition:r.position},loading:"lazy"}),r.caption&&U.jsx("figcaption",{children:r.caption})]},r.src))})}function KE(){const{locale:a,copy:r}=di();return U.jsxs("div",{className:"site","data-locale":a,children:[U.jsx("a",{className:"skip-link",href:"#main",children:a==="zh"?"跳到主要内容":"Skip to main content"}),U.jsx("span",{id:"top"}),U.jsx(sb,{}),U.jsxs("main",{id:"main",children:[U.jsx(ob,{}),U.jsx(kE,{})]}),U.jsx(rb,{}),U.jsx("div",{className:"locale-status sr-only","aria-live":"polite",children:r.language.changed})]})}const PE={en:{meta:{title:"Lucas Shen | AI & Tools Pipeline Technical Artist",description:"Games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines by Lucas Shen."},nav:{work:"Projects",practice:"Experience",links:"Links",aria:"Primary navigation"},language:{label:"Language",english:"English",changed:"Language changed to English."},hero:{role:"AI & Tools Pipeline Technical Artist",primaryAction:"Selected projects"},personal:{intro:"My work spans games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines, with running builds, project captures, and implementation details.",storyAction:"About me",aboutTitle:"About me",aboutBody:["I’m Lucas, a technical artist from China. My path crosses industrial engineering, game development, realtime graphics, and production tools. That mix helps me move between an artist’s problem and the system behind it.","I enjoy reverse-engineering workflows, turning repeated work into tools, and testing where AI is genuinely useful. Outside the toolchain, I keep learning through games, animation, music, graphics experiments, and public documentation."],traits:[{title:"What I work on",detail:"DCC tools, AI workflows, realtime graphics, games, and animation."},{title:"How I learn",detail:"Build a real workflow, inspect the evidence, then improve the system."},{title:"How I collaborate",detail:"Keep creative decisions human and make repeated production steps dependable."}],linksTitle:"Public channels",linksIntro:"Code, visual work, demos, and ongoing notes live across these profiles.",social:[{name:"GitHub",detail:"Code, tools, and public engineering evidence.",href:"https://github.com/Ubik42",mark:"GH"},{name:"Visual work",detail:"Realtime graphics, materials, shaders, rigging, and procedural work.",href:"#visual-work",mark:"TA"},{name:"Bilibili",detail:"Tool demos, tutorials, and longer videos.",href:"https://space.bilibili.com/12367861?spm_id_from=333.1007.0.0",mark:"Bi"},{name:"Xiaohongshu",detail:"Notes, resources, and everyday discoveries.",href:"https://www.xiaohongshu.com/user/profile/670526b2000000001e001891",mark:"RED"}]},practice:{title:"Experience and education",items:[{period:"2026.03 – now",title:"AI Tool Technical Artist Intern",place:"Tencent Photon",detail:"Building AI-assisted art-production tools across DCC, engine, and design workflows, with explicit rules and review boundaries."},{period:"2025.08 – 2027.05",title:"M.S. in EAE, Technical Art",place:"University of Utah",detail:"Studying realtime graphics, tools, pipelines, and collaborative game production in Entertainment Arts and Engineering."},{period:"2020.09 – 2024.06",title:"B.S. in Industrial Engineering",place:"Shanghai Jiao Tong University",detail:"Built a systems and optimization foundation, then applied it through game systems, Unity client work, and industrial digital twins."}]},footer:{copyright:"Lucas (Yuyan) Shen / 沈裕焱"}},zh:{meta:{title:"沈裕焱 | AI 与工具管线向技术美术",description:"沈裕焱的游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线作品集。"},nav:{work:"作品",practice:"经历",links:"链接",aria:"主导航"},language:{label:"语言",english:"English",changed:"语言已切换为中文。"},hero:{role:"AI 与工具管线向技术美术",primaryAction:"项目作品"},personal:{intro:"作品覆盖游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线，包含运行画面、项目素材和具体实现。",storyAction:"关于我",aboutTitle:"关于我",aboutBody:["我是沈裕焱，一名来自中国的技术美术。我的经历横跨工业工程、游戏开发、实时图形和生产工具，因此我习惯同时理解创作者遇到的问题，以及问题背后的代码与系统。","我喜欢拆解工作流，把重复劳动做成工具，也会认真验证 AI 适合参与哪一步。工具之外，我持续从游戏、动画、音乐、图形实验和公开文档中学习。"],traits:[{title:"我在做什么",detail:"DCC 工具、AI 工作流、实时图形、游戏与动画。"},{title:"我的学习方式",detail:"先做出真实工作流，检查证据，再改进整个系统。"},{title:"我的协作方式",detail:"让创作决定留给人，让重复的生产环节变得可靠。"}],linksTitle:"公开渠道",linksIntro:"代码、视觉作品、演示和持续记录分布在这些公开主页中。",social:[{name:"GitHub",detail:"代码、工具与公开工程证据。",href:"https://github.com/Ubik42",mark:"GH"},{name:"视觉作品",detail:"实时场景、材质、Shader、绑定与程序化内容。",href:"#visual-work",mark:"TA"},{name:"哔哩哔哩",detail:"工具演示、教程和长视频。",href:"https://space.bilibili.com/12367861?spm_id_from=333.1007.0.0",mark:"Bi"},{name:"小红书",detail:"笔记、资源和日常发现。",href:"https://www.xiaohongshu.com/user/profile/670526b2000000001e001891",mark:"RED"}]},practice:{title:"经历与教育",items:[{period:"2026.03 – 至今",title:"AI 工具技术美术实习生",place:"腾讯光子",detail:"围绕 DCC、引擎与设计流程构建 AI 辅助美术生产工具，明确规则、执行与人工审查的边界。"},{period:"2025.08 – 2027.05",title:"EAE 技术美术硕士",place:"犹他大学",detail:"在 Entertainment Arts and Engineering 项目中学习实时图形、工具、管线与协作式游戏生产。"},{period:"2020.09 – 2024.06",title:"工业工程学士",place:"上海交通大学",detail:"建立优化与系统方法基础，并逐步扩展到游戏系统、Unity 客户端与工业数字孪生开发。"}]},footer:{copyright:"Lucas (Yuyan) Shen / 沈裕焱"}}},w0="portfolio.locale.v2";function FE(){try{const a=window.localStorage.getItem(w0);if(a==="en"||a==="zh")return a}catch{}return"zh"}function JE(a){const r=document.querySelector('meta[name="description"]');r&&(r.content=a)}function IE({children:a}){const[r,s]=I.useState(FE),o=PE[r];I.useEffect(()=>{document.documentElement.lang=r==="zh"?"zh-CN":"en",document.title=o.meta.title,JE(o.meta.description);try{window.localStorage.setItem(w0,r)}catch{}},[o.meta.description,o.meta.title,r]);const c=I.useMemo(()=>({locale:r,copy:o,setLocale(h){I.startTransition(()=>s(h))}}),[o,r]);return U.jsx(jp,{value:c,children:a})}ib.createRoot(document.getElementById("root")).render(U.jsx(I.StrictMode,{children:U.jsx(IE,{children:U.jsx(KE,{})})}));
//# sourceMappingURL=index-BUFksLwl-portfolio-refresh.js.map
