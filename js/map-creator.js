!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=81)}([function(e,t,n){"use strict";n(1);t.a=(e=>{$("#app").prepend('\n        <div class="aow-cover">\n            <div class="aow-mask"></div>\n        </div>\n    ')})},function(e,t,n){},function(e,t,n){"use strict";n(5);const s=["main","aux","others"],o=[1,2,3,4,5,6],i=e=>`${e}.png`;t.a={path:"./assets/castles/",all(e=!0){const t=[];return o.forEach(n=>{s.forEach(s=>{let o=i(`${s}${n}`);e&&(o=this.path+o),t.push(o)})}),t},conquerables(e=!0){const t=[];return o.forEach(n=>{let o=i(`${s[0]}${n}`),a=i(`${s[1]}${n}`);e&&(o=this.path+o,a=this.path+a),t.push(o),t.push(a)}),t},others(e=!0){const t=[];return o.forEach(n=>{let o=i(`${s[2]}${n}`);e&&(o=this.path+o),t.push(o)}),t}}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n(24);const s=["1sword","2sword","3sword","archer","pikeman","knight"],o=["assassin","elephant","ship","siege","torch"],i=["conquest","duel","peace"],a=["1sword","archer","pikeman","knight","assassin","elephant","ship","siege","torch"],c=e=>`${e}.png`;t.a={path:"./assets/dices/",general(e=!0){return s.forEach(t=>{let n=c(t);e&&(n=this.path+n),n.push(n)}),[]},special(e=!0){return o.forEach(t=>{let n=c(t);e&&(n=this.path+n),n.push(n)}),[]},others(e=!0){return i.forEach(t=>{let n=c(t);e&&(n=this.path+n),n.push(n)}),[]},all(e=!0){return[...this.general(e),...this.special(e),...this.others(e)]},weapons(){const e={};e.sword=this.path+c(a[0]);for(let t=1;t<a.length;t++)e[a[t]]=this.path+c(a[t]);return e}}},function(e,t,n){var s={"./aux1.png":6,"./aux2.png":7,"./aux3.png":8,"./aux4.png":9,"./aux5.png":10,"./aux6.png":11,"./main1.png":12,"./main2.png":13,"./main3.png":14,"./main4.png":15,"./main5.png":16,"./main6.png":17,"./others1.png":18,"./others2.png":19,"./others3.png":20,"./others4.png":21,"./others5.png":22,"./others6.png":23};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}o.keys=function(){return Object.keys(s)},o.resolve=i,e.exports=o,o.id=5},function(e,t,n){e.exports=n.p+"assets/castles/aux1.png"},function(e,t,n){e.exports=n.p+"assets/castles/aux2.png"},function(e,t,n){e.exports=n.p+"assets/castles/aux3.png"},function(e,t,n){e.exports=n.p+"assets/castles/aux4.png"},function(e,t,n){e.exports=n.p+"assets/castles/aux5.png"},function(e,t,n){e.exports=n.p+"assets/castles/aux6.png"},function(e,t,n){e.exports=n.p+"assets/castles/main1.png"},function(e,t,n){e.exports=n.p+"assets/castles/main2.png"},function(e,t,n){e.exports=n.p+"assets/castles/main3.png"},function(e,t,n){e.exports=n.p+"assets/castles/main4.png"},function(e,t,n){e.exports=n.p+"assets/castles/main5.png"},function(e,t,n){e.exports=n.p+"assets/castles/main6.png"},function(e,t,n){e.exports=n.p+"assets/castles/others1.png"},function(e,t,n){e.exports=n.p+"assets/castles/others2.png"},function(e,t,n){e.exports=n.p+"assets/castles/others3.png"},function(e,t,n){e.exports=n.p+"assets/castles/others4.png"},function(e,t,n){e.exports=n.p+"assets/castles/others5.png"},function(e,t,n){e.exports=n.p+"assets/castles/others6.png"},function(e,t,n){var s={"./1sword.png":25,"./2sword.png":26,"./3sword.png":27,"./archer.png":28,"./assassin.png":29,"./conquest.png":30,"./duel.png":31,"./elephant.png":32,"./knight.png":33,"./peace.png":34,"./pikeman.png":35,"./ship.png":36,"./siege.png":37,"./torch.png":38};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}o.keys=function(){return Object.keys(s)},o.resolve=i,e.exports=o,o.id=24},function(e,t,n){e.exports=n.p+"assets/dices/1sword.png"},function(e,t,n){e.exports=n.p+"assets/dices/2sword.png"},function(e,t,n){e.exports=n.p+"assets/dices/3sword.png"},function(e,t,n){e.exports=n.p+"assets/dices/archer.png"},function(e,t,n){e.exports=n.p+"assets/dices/assassin.png"},function(e,t,n){e.exports=n.p+"assets/dices/conquest.png"},function(e,t,n){e.exports=n.p+"assets/dices/duel.png"},function(e,t,n){e.exports=n.p+"assets/dices/elephant.png"},function(e,t,n){e.exports=n.p+"assets/dices/knight.png"},function(e,t,n){e.exports=n.p+"assets/dices/peace.png"},function(e,t,n){e.exports=n.p+"assets/dices/pikeman.png"},function(e,t,n){e.exports=n.p+"assets/dices/ship.png"},function(e,t,n){e.exports=n.p+"assets/dices/siege.png"},function(e,t,n){e.exports=n.p+"assets/dices/torch.png"},,,function(e,t,n){(function(n){var s,o,i;o=[],void 0===(i="function"==typeof(s=function(){"use strict";function t(e,t,n){var s=new XMLHttpRequest;s.open("GET",e),s.responseType="blob",s.onload=function(){a(s.response,t,n)},s.onerror=function(){console.error("could not download file")},s.send()}function s(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype?function(e,n,a){var c=i.URL||i.webkitURL,l=document.createElement("a");n=n||e.name||"download",l.download=n,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?o(l):s(l.href)?t(e,n,a):o(l,l.target="_blank")):(l.href=c.createObjectURL(e),setTimeout(function(){c.revokeObjectURL(l.href)},4e4),setTimeout(function(){o(l)},0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,i),n);else if(s(e))t(e,n,i);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout(function(){o(a)})}}:function(e,n,s,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,s);var a="application/octet-stream"===e.type,c=/constructor/i.test(i.HTMLElement)||i.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||a&&c)&&"object"==typeof FileReader){var r=new FileReader;r.onloadend=function(){var e=r.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},r.readAsDataURL(e)}else{var p=i.URL||i.webkitURL,d=p.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout(function(){p.revokeObjectURL(d)},4e4)}});i.saveAs=a.saveAs=a,e.exports=a})?s.apply(t,o):s)||(e.exports=i)}).call(this,n(3))},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);n(65);var s=n(0);n(66);const o="castle-selector:visibilityToggle",i="castle-selector:selected",a="castle-editor:selected",c="castle-editor:edited",l="castle-editor:delete",r="castle-editor:save";var p=n(2);const d=e=>`\n        <div class="castle-selector__col">\n            <div class="castle-selector__castle">\n                <img src="${e}">\n            </div>\n        </div>\n    `,u=(e,t)=>{let n="";return n+=d(e),n+=d(t),n+='\n        <div class="castle-selector__col">\n            <div class="castle-selector__delimiter">\n            </div>\n        </div>\n    '};var f=()=>`\n        <div id="castle-selector">\n            <div class="castle-selector__container">\n                <div class="castle-selector__row">\n                    ${(()=>{const e=p.a.conquerables(),t=p.a.others();let n="";for(let t=0;t<e.length;t+=2)n+=u(e[t],e[t+1]);return t.forEach(e=>{n+=d(e)}),n})()}\n                </div>\n            </div>\n        </div>\n    `;const h={selected:null,$el:()=>$("#castle-selector"),render(){$("#app").prepend(f())},events(){$(document).on("keyup",function(e){84===e.keyCode&&h.$el().toggleClass("hidden")}),$em.on(o,function(e){h.$el().toggleClass("hidden")}),this.$el().on("click",function(e){const t=$(e.target).closest(".castle-selector__castle");if(0!==t.length){if(null!==h.selected&&(h.selected.removeClass("selected"),h.selected[0].isSameNode(t[0])))return h.selected=null,void $em.emit(i,{castle:null});h.selected=t,h.selected.addClass("selected"),$em.emit(i,{castle:h.selected.find("img").attr("src")})}})}};n(67);var v=n(41),g=n.n(v);let m=0;const x=[],w={selected:null,generateId:()=>m++,addCastle(e,t,n){const s={id:this.generateId(),x:e,y:t,img:n,size:64,weapons:{},others:[],isConquest:!1,score:0};s.x=s.x-s.size/2,s.y=s.y-s.size/2,$("#app").append(((e,t,n,s,o)=>`\n        <div data-id="${o}" class="castle-container" style="top: ${t}px; left:${e}px; width: ${s}px; height: ${s}px;">\n            <img src=${n}>\n            \n            <div class="castle-active">\n                <div></div>\n            </div>\n        </div>\n    `)(s.x,s.y,s.img,s.size,s.id)),x.push(s)},getCastle(e){const t=x.find(t=>t.id==e);return void 0===t?null:{castle:t,element:$(".castle-container").filter(function(){return $(this).data("id")==e})}},setCastle(e){const t=this.getCastle(e.id);if(null===t)return!1;const{castle:n,element:s}=t;switch(e.name){case"x":this.setPosition(n,s,"x",e.value);break;case"y":this.setPosition(n,s,"y",e.value);break;case"size":this.setSize(n,s,e.value);break;case"weapons":this.setWeapons(n,e.value);break;case"isConquest":n.isConquest=e.value;break;case"others":n.others=e.value;break;case"score":n.score=parseInt(e.value)}},setPosition(e,t,n,s){e[n]=parseFloat(s),"x"===n?t.css("left",e[n]):t.css("top",e[n])},setSize(e,t,n){e.size=parseFloat(n),t.css("width",n),t.css("height",n)},setWeapons(e,t){const n={};$.each(t,function(e,t){t>0&&(n[e]=t)}),e.weapons=n},deleteCastle(e){const t=this.getCastle(e);if(null===t)return!1;const{castle:n,element:s}=t,o=x.indexOf(n);return-1!==o&&(x.splice(o,1),s.remove(),{castle:n,element:s})},events(){$em.on(i,(e,t)=>{this.selected=t.castle}),$em.on(c,(e,t)=>{this.setCastle(t)}),$em.on(l,(e,t)=>{this.deleteCastle(t.id)}),$em.on(r,e=>{const t=window.innerWidth,n=window.innerHeight;x.forEach(e=>{e.W=t,e.H=n});const s=new Blob([JSON.stringify(x)],{type:"application/json"});g.a.saveAs(s,"map.json")}),$("#app").on("click",function(e){if(null===w.selected)return;if(!$(e.target)[0].isSameNode($(this)[0]))return;const t=e.pageX-this.offsetLeft,n=e.pageY-this.offsetTop;w.addCastle(t,n,w.selected)}),$("#app").on("dblclick",".castle-container",e=>{const t=$(e.target).closest(".castle-container");if(0===t.length)return;const{castle:n,element:s}=w.getCastle(t.data("id"));$em.emit(a,{castle:n,element:s})})}};n(68);var b=n(4),y=(e,t="active")=>{const n=()=>{const t=[];return e.each(function(){t.push($(this).data("to"))}),t},s=(t,n)=>{e.each(function(){this.isSameNode(t)?$(this).addClass(n):$(this).removeClass(n)})};e.on("click",function(e){e.preventDefault();const o=n();s(this,t),o.forEach(e=>{$(`#${e}`).toggleClass("d-none")})})};const k={selected:null,inputs(){const e=$("#castle-editor input"),t={};return e.each(function(){let e=this.id.replace(/castle-editor-/g,"");e.includes("weapon-")?(e=e.replace(/weapon-/g,""),t.weapons||(t.weapons={}),t.weapons[e]=$(this)):t[e]=$(this)}),t},fillInputs(e){const t=this.inputs();$("#castle-img img").attr("src",e.img),Object.keys(t).forEach(n=>{"weapons"===n?Object.keys(t.weapons).forEach(n=>{t.weapons[n].val(e.weapons[n]||0)}):"isConquest"===n?t[n][0].checked=e[n]:"others"===n?t[n].val(e[n].join(",")):t[n]&&t[n].val(e[n])})},weaponsValue(){const e=this.inputs(),t={};return Object.keys(e.weapons).forEach(n=>{t[n]=parseFloat(e.weapons[n].val())}),t},render(){$("#app").append((e=>`\n    <div id="castle-editor" class="d-none">\n        <div class="castle-editor-tabs">\n            <ul class="nav nav-tabs">\n                <li class="nav-item">\n                    <a data-to="castle-editor__general" class="nav-link active">General</a>\n                </li>\n                <li class="nav-item">\n                    <a data-to="castle-editor__weapons" class="nav-link">Weapons</a>\n                </li>\n            </ul>\n\n            <div class="castle-editor-close">\n                <i class="fas fa-times"></i>\n            </div>\n        </div>\n\n        <div id="castle-editor__general">\n            <form class="form">\n                <div class="container-fluid">\n                    <div class="row">\n                        <div class="col-2">\n                            <div id="castle-img">\n                                <img src="" alt="">\n                            </div>\n                        </div>\n                        <div class="col-10 form-inline">\n                            <div class="input-group mb-3 mr-2">\n                                <div class="input-group-prepend">\n                                    <span class="input-group-text">ID</span>\n                                </div>\n                                <input type="text" class="form-control" readonly placeholder="ID" id="castle-editor-id">\n                            </div>\n                            \n                            <div class="input-group mb-3 mr-2">\n                                <div class="input-group-prepend">\n                                    <span class="input-group-text">X</span>\n                                </div>\n                                <input type="text" class="form-control" placeholder="X" id="castle-editor-x">\n                            </div>\n        \n                            <div class="input-group mb-3 mr-2">\n                                <div class="input-group-prepend">\n                                    <span class="input-group-text">Y</span>\n                                </div>\n                                <input type="text" class="form-control" placeholder="Y" id="castle-editor-y">\n                            </div>\n                            \n                            <div class="input-group mb-3 mr-2">\n                                <div class="input-group-prepend">\n                                    <span class="input-group-text">Size</span>\n                                </div>\n                                <input type="text" class="form-control" placeholder="Size" id="castle-editor-size">\n                            </div>\n\n                            <div class="input-group mb-3 mr-2">\n                                <div class="input-group-prepend">\n                                    <span class="input-group-text">Score</span>\n                                </div>\n                                <input type="text" class="form-control" placeholder="Score" id="castle-editor-score">\n                            </div>\n\n                            <div class="input-group mb-3 mr-2 ml-5">\n                                <div class="custom-control custom-checkbox">\n                                    <input type="checkbox" class="custom-control-input" id="castle-editor-isConquest">\n                                    <label class="custom-control-label" for="castle-editor-isConquest">By Conquest</label>\n                                </div>\n                            </div>\n\n                            <button class="btn btn-danger ml-auto" id="castle-editor-delete">Delete Castle</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n\n        <div id="castle-editor__weapons" class="d-none">\n            <form class="form">\n                <div class="container-fluid">\n                    <div class="row">\n                        <div class="col-12">\n                            ${Object.keys(e).map(t=>`\n                                <div class="input-group">\n                                    <div class="input-group-prepend">\n                                        <span class="input-group-text">\n                                            <img src="${e[t]}" style="width: 32px; height: 32px;">\n                                        </span>\n                                    </div>\n                                    <input type="text" class="form-control" id="castle-editor-weapon-${t}">\n                                </div>\n                                `).join("")}\n\n                            <div class="input-group">\n                                <div class="input-group-prepend">\n                                    <span class="input-group-text stupid-fix">\n                                        <img style="width: 32px; height: 32px;" class="stupid-fix">\n                                        <div class="stupid-fix">Others</div>\n                                    </span>\n                                </div>\n                                <input type="text" class="form-control" id="castle-editor-others">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    `)(b.a.weapons()))},events(){$("#castle-editor input[type=text]").on("input",function(e){if(null===k.selected)return;let t=$(this)[0].id.replace(/castle-editor-/g,"");t.includes("weapon-")?$em.emit(c,{id:k.selected.id,name:"weapons",value:k.weaponsValue()}):"others"===t?$em.emit(c,{id:k.selected.id,name:t,value:$(this).val().split(",").map(e=>parseFloat(e))}):$em.emit(c,{id:k.selected.id,name:t,value:$(this).val()})}),$("#castle-editor input[type=checkbox]").on("change",function(e){null!==k.selected&&$em.emit(c,{id:k.selected.id,name:"isConquest",value:this.checked})}),$("#castle-editor #castle-editor-delete").on("click",function(e){e.preventDefault(),null!==k.selected&&($em.emit(l,{id:k.selected.id}),k.selected=null,$("#castle-editor").addClass("d-none"))}),$em.on(a,function(e,t){k.fillInputs(t.castle),k.selected=t.castle,$("#castle-editor").removeClass("d-none")}),$("#castle-editor .castle-editor-close").on("click",function(e){e.preventDefault(),k.selected=null,$("#castle-editor").addClass("d-none")}),$(document).on("keydown",function(e){const t=$("#castle-editor input[type=text]").filter(function(){return $(this).is(":focus")});if(0===t.length)return;["castle-editor-x","castle-editor-y","castle-editor-size"].includes(t[0].id)&&(38===e.keyCode&&t.val(parseFloat(t.val())+1),40===e.keyCode&&t.val(parseFloat(t.val())-1),$em.emit(c,{id:k.selected.id,name:t[0].id.replace(/castle-editor-/g,""),value:t.val()}))})}};const C={$modal:()=>$("#map-menu"),$btn:e=>$(`#map-menu #btn${e}`),onToggleCastlePool(e){$em.emit(o)},onResetMap(e){window.location.reload()},onGoBack(e){window.location.href="./index.html"},onMenu(e){this.$modal().modal("toggle")},onSaveMap(e){$em.emit(r)},init(){this.$btn(1).on("click",e=>{this.onToggleCastlePool()}),this.$btn(2).on("click",e=>{this.onSaveMap()}),this.$btn(3).on("click",e=>{this.onResetMap()}),this.$btn(4).on("click",e=>{this.onGoBack()}),this.$btn(5).on("click",e=>{this.onMenu()}),$(document).on("keyup",e=>{89===e.keyCode&&this.onSaveMap(),85===e.keyCode&&this.onResetMap(),77===e.keyCode&&this.onMenu()})}};$(function(e){Object(s.a)(),h.render(),h.events(),w.events(),k.render(),y($("#castle-editor .castle-editor-tabs a")),k.events(),C.init()})}]);