!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("shvl")):"function"==typeof define&&define.amd?define(["shvl"],t):e.createPersistedState=t(e.shvl)}(this,function(e){return function(t,r,n){function u(e,t,r){try{return(r=t.getItem(e))&&void 0!==r?JSON.parse(r):void 0}catch(e){}}if(r=(t=t||{}).storage||window&&window.localStorage,n=t.key||"vuex",!function(e){try{return e.setItem("@@",1),e.removeItem("@@"),!0}catch(e){}return!1}(r))throw new Error("Invalid storage instance given");return function(o){var i=e.get(t,"getState",u)(n,r);"object"==typeof i&&null!==i&&o.replaceState(t.arrayMerger?t.arrayMerger(o.state,i):function(e,t){return t}),(t.subscriber||function(e){return function(t){return e.subscribe(t)}})(o)(function(u,o){(t.filter||function(){return!0})(u)&&(t.setState||function(e,t,r){return r.setItem(e,JSON.stringify(t))})(n,(t.reducer||function(t,r){return 0===r.length?t:r.reduce(function(r,n){return e.set(r,n,e.get(t,n))},{})})(o,t.paths||[]),r)})}}});
//# sourceMappingURL=vuex-persistedstate.umd.js.map
