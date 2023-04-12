(function(){"use strict";var t={8567:function(t,o,r){var e=r(9242),s=(r(7658),r(3396)),n=r(7327),a=r(7139),i=r(4870);const c={class:"grid-wrapper"},u=["src"];var f;(function(t){t["tall"]="tall",t["wide"]="wide",t["square"]="square"})(f||(f={}));var p=(0,s.aZ)({__name:"MasonryBlock",props:{imagesSrc:{required:!0,type:Array}},setup(t){const o=t;class r extends Image{constructor(t){super(),(0,n.Z)(this,"cssClass",void 0),this.src=t}}const e=(0,i.iH)([]);return o.imagesSrc.forEach((t=>{let o=new r(t);o.onload=()=>{const t=1.4,r=o.naturalWidth/o.naturalHeight;switch(!0){case t<=r:o.cssClass=f.wide;break;case t<=1/r:o.cssClass=f.tall;break;default:o.cssClass=f.square;break}e.value.push(o)}})),(t,o)=>((0,s.wg)(),(0,s.iD)("div",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.value,(t=>((0,s.wg)(),(0,s.iD)("div",{class:(0,a.C_)(t.cssClass),key:t.src},[(0,s._)("img",{src:t.src,alt:""},null,8,u)],2)))),128))]))}}),l=r(89);const h=(0,l.Z)(p,[["__scopeId","data-v-7705d718"]]);var m=h;const d={class:"wrapper"};var g=(0,s.aZ)({__name:"App",setup(t){const o=["https://previews.123rf.com/images/rglinsky/rglinsky1201/rglinsky120100188/12336990-vertical-oriented-image-of-famous-eiffel-tower-in-paris-france.jpg","https://mobirise.com/bootstrap-carousel/assets2/images/thomas-smith-399133-1707x2560.jpg","https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80","https://images.unsplash.com/photo-1600304894683-cd9731d4e0eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80","https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.unsplash.com/photo-1569254994521-ddbb54af5ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80","https://images.unsplash.com/photo-1572196459043-5c39f99a7555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80","https://monovisions.com/wp-content/uploads/2015/04/top-10-black-and-white-long-exposure-photographers-josef-hoflehner.jpg","https://fixthephoto.com/images/content/square-format-photography-leading-lines.jpg","https://fixthephoto.com/images/content/square-format-photography-negative-space.jpg"],r=[];function e(t,o){return Math.floor(Math.random()*(o-t+1)+t)}for(let s=0;s<30;s++)r.push(o[e(0,o.length-1)]);return(t,o)=>((0,s.wg)(),(0,s.iD)("div",d,[(0,s.Wm)(m,{imagesSrc:r,style:{"max-width":"80%"},class:"masonry-block"})]))}});const w=g;var b=w,v=r(2483);const x=[{path:"/",name:"home",component:m}],y=(0,v.p7)({history:(0,v.PO)("/autodom/"),routes:x});var j=y,M=r(65),k=(0,M.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,e.ri)(b).use(k).use(j).mount("#app")}},o={};function r(e){var s=o[e];if(void 0!==s)return s.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(o,e,s,n){if(!e){var a=1/0;for(f=0;f<t.length;f++){e=t[f][0],s=t[f][1],n=t[f][2];for(var i=!0,c=0;c<e.length;c++)(!1&n||a>=n)&&Object.keys(r.O).every((function(t){return r.O[t](e[c])}))?e.splice(c--,1):(i=!1,n<a&&(a=n));if(i){t.splice(f--,1);var u=s();void 0!==u&&(o=u)}}return o}n=n||0;for(var f=t.length;f>0&&t[f-1][2]>n;f--)t[f]=t[f-1];t[f]=[e,s,n]}}(),function(){r.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(o,{a:o}),o}}(),function(){r.d=function(t,o){for(var e in o)r.o(o,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};r.O.j=function(o){return 0===t[o]};var o=function(o,e){var s,n,a=e[0],i=e[1],c=e[2],u=0;if(a.some((function(o){return 0!==t[o]}))){for(s in i)r.o(i,s)&&(r.m[s]=i[s]);if(c)var f=c(r)}for(o&&o(e);u<a.length;u++)n=a[u],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(f)},e=self["webpackChunkmasonry"]=self["webpackChunkmasonry"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(8567)}));e=r.O(e)})();
//# sourceMappingURL=app.70858131.js.map