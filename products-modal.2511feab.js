parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TRez":[function(require,module,exports) {
var s=document.getElementById("first-mod"),t=document.getElementById("first-btn");t.addEventListener("click",function(){s.classList.contains("products-modal--first")?(s.classList.remove("products-modal--first"),s.classList.add("products-modal--go"),t.classList.remove("products-list__button--first"),t.classList.add("products-list__button--rotate")):s.classList.contains("products-modal--go")?(s.classList.remove("products-modal--go"),s.classList.add("products-modal--back"),t.classList.remove("products-list__button--rotate"),t.classList.add("products-list__button--back")):(s.classList.remove("products-modal--back"),s.classList.add("products-modal--go"),t.classList.remove("products-list__button--back"),t.classList.add("products-list__button"))});var o=document.getElementById("second-mod"),d=document.getElementById("second-btn");d.addEventListener("click",function(){o.classList.contains("products-modal--first")?(o.classList.remove("products-modal--first"),o.classList.add("products-modal--go"),d.classList.remove("products-list__button--first"),d.classList.add("products-list__button--rotate")):o.classList.contains("products-modal--go")?(o.classList.remove("products-modal--go"),o.classList.add("products-modal--back"),d.classList.remove("products-list__button--rotate"),d.classList.add("products-list__button--back")):(o.classList.remove("products-modal--back"),o.classList.add("products-modal--go"),d.classList.remove("products-list__button--back"),d.classList.add("products-list__button"))});var c=document.getElementById("third-mod"),a=document.getElementById("third-btn");a.addEventListener("click",function(){c.classList.contains("products-modal--first")?(c.classList.remove("products-modal--first"),c.classList.add("products-modal--go"),a.classList.remove("products-list__button--first"),a.classList.add("products-list__button--rotate")):c.classList.contains("products-modal--go")?(c.classList.remove("products-modal--go"),c.classList.add("products-modal--back"),a.classList.remove("products-list__button--rotate"),a.classList.add("products-list__button--back")):(c.classList.remove("products-modal--back"),c.classList.add("products-modal--go"),a.classList.remove("products-list__button--back"),a.classList.add("products-list__button"))});
},{}]},{},["TRez"], null)
//# sourceMappingURL=/icecream/products-modal.2511feab.js.map