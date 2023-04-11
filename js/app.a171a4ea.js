(function(){"use strict";var t={6868:function(t,o,s){var r=s(9242),e=(s(7658),s(3396)),n=s(7327),a=s(7139),i=s(4870);const c={class:"grid-wrapper"},u=["src"];var f;(function(t){t["tall"]="tall",t["wide"]="wide",t["square"]="square"})(f||(f={}));var p=(0,e.aZ)({__name:"MasonryBlock",props:{imagesSrc:{required:!0,type:Array}},setup(t){const o=t;class s extends Image{constructor(t){super(),(0,n.Z)(this,"cssClass",void 0),this.src=t;const o=1.4,s=this.naturalWidth/this.naturalHeight;switch(!0){case o<=s:this.cssClass=f.wide;break;case o<=1/s:this.cssClass=f.tall;break;default:this.cssClass=f.square;break}}}const r=(0,i.iH)([]);return(0,e.bv)((()=>{o.imagesSrc.forEach((t=>{let o=new s(t);r.value.push(o)}))})),(t,o)=>((0,e.wg)(),(0,e.iD)("div",c,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(r.value,(t=>((0,e.wg)(),(0,e.iD)("div",{class:(0,a.C_)(t.cssClass),key:t.src},[(0,e._)("img",{src:t.src,alt:""},null,8,u)],2)))),128))]))}}),l=s(89);const h=(0,l.Z)(p,[["__scopeId","data-v-b1a5d916"]]);var m=h;const d={class:"wrapper"};var g=(0,e.aZ)({__name:"App",setup(t){const o=["https://previews.123rf.com/images/rglinsky/rglinsky1201/rglinsky120100188/12336990-vertical-oriented-image-of-famous-eiffel-tower-in-paris-france.jpg","https://mobirise.com/bootstrap-carousel/assets2/images/thomas-smith-399133-1707x2560.jpg","https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80","https://images.unsplash.com/photo-1600304894683-cd9731d4e0eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80","https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.unsplash.com/photo-1569254994521-ddbb54af5ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80","https://images.unsplash.com/photo-1572196459043-5c39f99a7555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80","https://monovisions.com/wp-content/uploads/2015/04/top-10-black-and-white-long-exposure-photographers-josef-hoflehner.jpg","https://fixthephoto.com/images/content/square-format-photography-leading-lines.jpg","https://fixthephoto.com/images/content/square-format-photography-negative-space.jpg"],s=[];function r(t,o){return Math.floor(Math.random()*(o-t+1)+t)}for(let e=0;e<30;e++)s.push(o[r(0,o.length-1)]);return(t,o)=>((0,e.wg)(),(0,e.iD)("div",d,[(0,e.Wm)(m,{imagesSrc:s,style:{"max-width":"80%"},class:"masonry-block"})]))}});const w=g;var b=w,v=s(2483);const x=[{path:"/",name:"home",component:m}],y=(0,v.p7)({history:(0,v.PO)("/autodom/"),routes:x});var j=y,M=s(65),k=(0,M.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(b).use(k).use(j).mount("#app")}},o={};function s(r){var e=o[r];if(void 0!==e)return e.exports;var n=o[r]={exports:{}};return t[r](n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(o,r,e,n){if(!r){var a=1/0;for(f=0;f<t.length;f++){r=t[f][0],e=t[f][1],n=t[f][2];for(var i=!0,c=0;c<r.length;c++)(!1&n||a>=n)&&Object.keys(s.O).every((function(t){return s.O[t](r[c])}))?r.splice(c--,1):(i=!1,n<a&&(a=n));if(i){t.splice(f--,1);var u=e();void 0!==u&&(o=u)}}return o}n=n||0;for(var f=t.length;f>0&&t[f-1][2]>n;f--)t[f]=t[f-1];t[f]=[r,e,n]}}(),function(){s.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(o,{a:o}),o}}(),function(){s.d=function(t,o){for(var r in o)s.o(o,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};s.O.j=function(o){return 0===t[o]};var o=function(o,r){var e,n,a=r[0],i=r[1],c=r[2],u=0;if(a.some((function(o){return 0!==t[o]}))){for(e in i)s.o(i,e)&&(s.m[e]=i[e]);if(c)var f=c(s)}for(o&&o(r);u<a.length;u++)n=a[u],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(f)},r=self["webpackChunkmasonry"]=self["webpackChunkmasonry"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(6868)}));r=s.O(r)})();
//# sourceMappingURL=app.a171a4ea.js.map