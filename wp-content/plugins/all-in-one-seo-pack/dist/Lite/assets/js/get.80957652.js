import{a as u,x as c}from"./isArrayLikeObject.3ade28da.js";import{i as f,t as p}from"./toString.d05e92a1.js";var l=/\s/;function m(n){for(var r=n.length;r--&&l.test(n.charAt(r)););return r}var h=/^\s+/;function S(n){return n&&n.slice(0,m(n)+1).replace(h,"")}var y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,d=/^\w*$/;function _(n,r){if(u(n))return!1;var t=typeof n;return t=="number"||t=="symbol"||t=="boolean"||n==null||f(n)?!0:d.test(n)||!y.test(n)||r!=null&&n in Object(r)}var g="Expected a function";function o(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new TypeError(g);var t=function(){var e=arguments,i=r?r.apply(this,e):e[0],a=t.cache;if(a.has(i))return a.get(i);var s=n.apply(this,e);return t.cache=a.set(i,s)||a,s};return t.cache=new(o.Cache||c),t}o.Cache=c;var x=500;function E(n){var r=o(n,function(e){return t.size===x&&t.clear(),e}),t=r.cache;return r}var I=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,P=/\\(\\)?/g,T=E(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(I,function(t,e,i,a){r.push(i?a.replace(P,"$1"):e||t)}),r});const A=T;function C(n,r){return u(n)?n:_(n,r)?[n]:A(p(n))}var w=1/0;function z(n){if(typeof n=="string"||f(n))return n;var r=n+"";return r=="0"&&1/n==-w?"-0":r}function M(n,r){r=C(r,n);for(var t=0,e=r.length;n!=null&&t<e;)n=n[z(r[t++])];return t&&t==e?n:void 0}function $(n,r,t){var e=n==null?void 0:M(n,r);return e===void 0?t:e}export{M as a,S as b,C as c,$ as g,_ as i,o as m,z as t};
