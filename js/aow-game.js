!function(s){var e={};function n(t){if(e[t])return e[t].exports;var i=e[t]={i:t,l:!1,exports:{}};return s[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=s,n.c=e,n.d=function(s,e,t){n.o(s,e)||Object.defineProperty(s,e,{enumerable:!0,get:t})},n.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},n.t=function(s,e){if(1&e&&(s=n(s)),8&e)return s;if(4&e&&"object"==typeof s&&s&&s.__esModule)return s;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:s}),2&e&&"string"!=typeof s)for(var i in s)n.d(t,i,function(e){return s[e]}.bind(null,i));return t},n.n=function(s){var e=s&&s.__esModule?function(){return s.default}:function(){return s};return n.d(e,"a",e),e},n.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},n.p="",n(n.s=79)}([function(s,e,n){"use strict";n(1);e.a=(s=>{$("#app").prepend('\n        <div class="aow-cover">\n            <div class="aow-mask"></div>\n        </div>\n    ')})},function(s,e,n){},function(s,e,n){"use strict";n(5);const t=["main","aux","others"],i=[1,2,3,4,5,6],a=s=>`${s}.png`;e.a={path:"./assets/castles/",all(s=!0){const e=[];return i.forEach(n=>{t.forEach(t=>{let i=a(`${t}${n}`);s&&(i=this.path+i),e.push(i)})}),e},conquerables(s=!0){const e=[];return i.forEach(n=>{let i=a(`${t[0]}${n}`),o=a(`${t[1]}${n}`);s&&(i=this.path+i,o=this.path+o),e.push(i),e.push(o)}),e},others(s=!0){const e=[];return i.forEach(n=>{let i=a(`${t[2]}${n}`);s&&(i=this.path+i),e.push(i)}),e}}},,function(s,e,n){"use strict";n(24);const t=["1sword","2sword","3sword","archer","pikeman","knight"],i=["assassin","elephant","ship","siege","torch"],a=["conquest","duel","peace"],o=["1sword","archer","pikeman","knight","assassin","elephant","ship","siege","torch"],r=s=>`${s}.png`;e.a={path:"./assets/dices/",general(s=!0){return t.forEach(e=>{let n=r(e);s&&(n=this.path+n),n.push(n)}),[]},special(s=!0){return i.forEach(e=>{let n=r(e);s&&(n=this.path+n),n.push(n)}),[]},others(s=!0){return a.forEach(e=>{let n=r(e);s&&(n=this.path+n),n.push(n)}),[]},all(s=!0){return[...this.general(s),...this.special(s),...this.others(s)]},weapons(){const s={};s.sword=this.path+r(o[0]);for(let e=1;e<o.length;e++)s[o[e]]=this.path+r(o[e]);return s}}},function(s,e,n){var t={"./aux1.png":6,"./aux2.png":7,"./aux3.png":8,"./aux4.png":9,"./aux5.png":10,"./aux6.png":11,"./main1.png":12,"./main2.png":13,"./main3.png":14,"./main4.png":15,"./main5.png":16,"./main6.png":17,"./others1.png":18,"./others2.png":19,"./others3.png":20,"./others4.png":21,"./others5.png":22,"./others6.png":23};function i(s){var e=a(s);return n(e)}function a(s){if(!n.o(t,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return t[s]}i.keys=function(){return Object.keys(t)},i.resolve=a,s.exports=i,i.id=5},function(s,e,n){s.exports=n.p+"assets/castles/aux1.png"},function(s,e,n){s.exports=n.p+"assets/castles/aux2.png"},function(s,e,n){s.exports=n.p+"assets/castles/aux3.png"},function(s,e,n){s.exports=n.p+"assets/castles/aux4.png"},function(s,e,n){s.exports=n.p+"assets/castles/aux5.png"},function(s,e,n){s.exports=n.p+"assets/castles/aux6.png"},function(s,e,n){s.exports=n.p+"assets/castles/main1.png"},function(s,e,n){s.exports=n.p+"assets/castles/main2.png"},function(s,e,n){s.exports=n.p+"assets/castles/main3.png"},function(s,e,n){s.exports=n.p+"assets/castles/main4.png"},function(s,e,n){s.exports=n.p+"assets/castles/main5.png"},function(s,e,n){s.exports=n.p+"assets/castles/main6.png"},function(s,e,n){s.exports=n.p+"assets/castles/others1.png"},function(s,e,n){s.exports=n.p+"assets/castles/others2.png"},function(s,e,n){s.exports=n.p+"assets/castles/others3.png"},function(s,e,n){s.exports=n.p+"assets/castles/others4.png"},function(s,e,n){s.exports=n.p+"assets/castles/others5.png"},function(s,e,n){s.exports=n.p+"assets/castles/others6.png"},function(s,e,n){var t={"./1sword.png":25,"./2sword.png":26,"./3sword.png":27,"./archer.png":28,"./assassin.png":29,"./conquest.png":30,"./duel.png":31,"./elephant.png":32,"./knight.png":33,"./peace.png":34,"./pikeman.png":35,"./ship.png":36,"./siege.png":37,"./torch.png":38};function i(s){var e=a(s);return n(e)}function a(s){if(!n.o(t,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return t[s]}i.keys=function(){return Object.keys(t)},i.resolve=a,s.exports=i,i.id=24},function(s,e,n){s.exports=n.p+"assets/dices/1sword.png"},function(s,e,n){s.exports=n.p+"assets/dices/2sword.png"},function(s,e,n){s.exports=n.p+"assets/dices/3sword.png"},function(s,e,n){s.exports=n.p+"assets/dices/archer.png"},function(s,e,n){s.exports=n.p+"assets/dices/assassin.png"},function(s,e,n){s.exports=n.p+"assets/dices/conquest.png"},function(s,e,n){s.exports=n.p+"assets/dices/duel.png"},function(s,e,n){s.exports=n.p+"assets/dices/elephant.png"},function(s,e,n){s.exports=n.p+"assets/dices/knight.png"},function(s,e,n){s.exports=n.p+"assets/dices/peace.png"},function(s,e,n){s.exports=n.p+"assets/dices/pikeman.png"},function(s,e,n){s.exports=n.p+"assets/dices/ship.png"},function(s,e,n){s.exports=n.p+"assets/dices/siege.png"},function(s,e,n){s.exports=n.p+"assets/dices/torch.png"},,,,function(s){s.exports=[{id:0,x:727,y:232,img:"./assets/castles/main5.png",size:64,weapons:{sword:2,archer:1,ship:1},others:[],isConquest:!1,score:75,W:1467,H:774},{id:1,x:642,y:252,img:"./assets/castles/aux5.png",size:48,weapons:{sword:2,pikeman:1},others:[],isConquest:!1,score:50,W:1467,H:774},{id:2,x:770,y:338,img:"./assets/castles/aux5.png",size:32,weapons:{sword:3},others:[],isConquest:!1,score:25,W:1467,H:774},{id:3,x:690,y:328,img:"./assets/castles/aux5.png",size:32,weapons:{sword:3},others:[],isConquest:!1,score:25,W:1467,H:774},{id:4,x:1098,y:267,img:"./assets/castles/main4.png",size:64,weapons:{sword:3,knight:1,elephant:1},others:[],isConquest:!1,score:125,W:1467,H:774},{id:5,x:1032,y:302,img:"./assets/castles/aux4.png",size:32,weapons:{sword:2,archer:1},others:[],isConquest:!1,score:50,W:1467,H:774},{id:6,x:1113,y:353,img:"./assets/castles/aux4.png",size:32,weapons:{sword:2,pikeman:1},others:[],isConquest:!1,score:50,W:1467,H:774},{id:7,x:1180,y:263,img:"./assets/castles/aux4.png",size:48,weapons:{sword:1,archer:1,knight:1},others:[],isConquest:!1,score:75,W:1467,H:774},{id:8,x:300,y:182,img:"./assets/castles/main6.png",size:64,weapons:{sword:2,archer:1,knight:1,siege:1},others:[],isConquest:!1,score:150,W:1467,H:774},{id:9,x:253,y:234,img:"./assets/castles/aux6.png",size:32,weapons:{sword:2,archer:1},others:[],isConquest:!1,score:75,W:1467,H:774},{id:10,x:330,y:269,img:"./assets/castles/aux6.png",size:32,weapons:{sword:2,pikeman:1},others:[],isConquest:!1,score:75,W:1467,H:774},{id:11,x:485,y:349,img:"./assets/castles/others1.png",size:64,weapons:{},others:[],isConquest:!0,score:15,W:1467,H:774},{id:12,x:642,y:108,img:"./assets/castles/others2.png",size:48,weapons:{},others:[],isConquest:!0,score:25,W:1467,H:774},{id:13,x:874,y:284,img:"./assets/castles/others3.png",size:48,weapons:{},others:[],isConquest:!0,score:35,W:1467,H:774},{id:14,x:1028,y:543,img:"./assets/castles/others4.png",size:64,weapons:{},others:[],isConquest:!0,score:45,W:1467,H:774},{id:15,x:221,y:449,img:"./assets/castles/others5.png",size:64,weapons:{},others:[],isConquest:!0,score:55,W:1467,H:774},{id:16,x:543,y:573,img:"./assets/castles/others6.png",size:48,weapons:{},others:[],isConquest:!0,score:100,W:1467,H:774}]},function(s){s.exports=[{id:0,x:646,y:250,img:"./assets/castles/main1.png",size:64,weapons:{sword:3,archer:1,ship:1},others:[],isConquest:!1,score:100,W:1467,H:774},{id:1,x:754,y:259,img:"./assets/castles/aux1.png",size:32,weapons:{sword:2,pikeman:1},others:[],isConquest:!1,score:50,W:1467,H:774},{id:2,x:770,y:341,img:"./assets/castles/aux1.png",size:32,weapons:{sword:1,archer:1,pikeman:1},others:[],isConquest:!1,score:75,W:1467,H:774},{id:3,x:319,y:229,img:"./assets/castles/main2.png",size:64,weapons:{sword:1,archer:1,pikeman:1,elephant:1},others:[],isConquest:!1,score:125,W:1467,H:774},{id:4,x:418,y:290,img:"./assets/castles/aux2.png",size:32,weapons:{sword:2,archer:1,knight:1},others:[],isConquest:!1,score:100,W:1467,H:774},{id:5,x:295,y:324,img:"./assets/castles/aux2.png",size:32,weapons:{sword:2,pikeman:1},others:[],isConquest:!1,score:75,W:1467,H:774},{id:6,x:518,y:355,img:"./assets/castles/others4.png",size:64,weapons:{},others:[],isConquest:!0,score:25,W:1467,H:774},{id:7,x:819,y:416,img:"./assets/castles/others6.png",size:64,weapons:{},others:[],isConquest:!0,score:50,W:1467,H:774},{id:8,x:188,y:448,img:"./assets/castles/others2.png",size:64,weapons:{},others:[],isConquest:!0,score:50,W:1467,H:774},{id:9,x:1034,y:542,img:"./assets/castles/others1.png",size:64,weapons:{},others:[],isConquest:!0,score:75,W:1467,H:774}]},function(s){s.exports=[{id:0,x:205,y:181,img:"./assets/castles/main1.png",size:64,weapons:{sword:2,archer:1,torch:1},others:[],isConquest:!1,score:50,W:1467,H:774},{id:1,x:163,y:186,img:"./assets/castles/aux1.png",size:32,weapons:{sword:2},others:[],isConquest:!1,score:25,W:1467,H:774},{id:2,x:254,y:159,img:"./assets/castles/aux1.png",size:32,weapons:{sword:3},others:[],isConquest:!1,score:35,W:1467,H:774},{id:3,x:406,y:383,img:"./assets/castles/main2.png",size:48,weapons:{sword:2,archer:1,pikeman:1,siege:1},others:[],isConquest:!1,score:75,W:1467,H:774},{id:4,x:462,y:382,img:"./assets/castles/aux2.png",size:32,weapons:{sword:4},others:[],isConquest:!1,score:50,W:1467,H:774},{id:5,x:338,y:460,img:"./assets/castles/aux2.png",size:32,weapons:{sword:2,archer:1},others:[],isConquest:!1,score:35,W:1467,H:774},{id:6,x:955,y:118,img:"./assets/castles/main3.png",size:48,weapons:{sword:2,siege:1},others:[],isConquest:!1,score:50,W:1467,H:774},{id:8,x:914,y:100,img:"./assets/castles/aux3.png",size:35,weapons:{sword:3},others:[],isConquest:!1,score:15,W:1467,H:774},{id:9,x:886,y:378,img:"./assets/castles/main4.png",size:64,weapons:{sword:2,archer:1,assassin:1},others:[],isConquest:!1,score:150,W:1467,H:774},{id:10,x:958,y:371,img:"./assets/castles/aux4.png",size:32,weapons:{sword:5},others:[],isConquest:!1,score:75,W:1467,H:774},{id:11,x:841,y:427,img:"./assets/castles/aux4.png",size:32,weapons:{sword:4},others:[],isConquest:!1,score:50,W:1467,H:774},{id:12,x:1148,y:189,img:"./assets/castles/main5.png",size:48,weapons:{sword:3,elephant:1},others:[],isConquest:!1,score:50,W:1467,H:774},{id:13,x:1106,y:184,img:"./assets/castles/aux5.png",size:32,weapons:{sword:2},others:[],isConquest:!1,score:25,W:1467,H:774},{id:14,x:1150,y:253,img:"./assets/castles/aux5.png",size:32,weapons:{sword:3},others:[],isConquest:!1,score:25,W:1467,H:774},{id:15,x:1215,y:217,img:"./assets/castles/aux5.png",size:32,weapons:{pikeman:2},others:[],isConquest:!1,score:35,W:1467,H:774},{id:16,x:639,y:251,img:"./assets/castles/main6.png",size:48,weapons:{sword:2,archer:1,pikeman:1,ship:1},others:[],isConquest:!1,score:125,W:1467,H:774},{id:17,x:670,y:320,img:"./assets/castles/aux6.png",size:32,weapons:{sword:3},others:[],isConquest:!1,score:50,W:1467,H:774},{id:18,x:745,y:267,img:"./assets/castles/aux6.png",size:32,weapons:{archer:1,pikeman:1,knight:1},others:[],isConquest:!1,score:100,W:1467,H:774},{id:19,x:755,y:325,img:"./assets/castles/aux6.png",size:32,weapons:{sword:2,archer:1},others:[],isConquest:!1,score:50,W:1467,H:774},{id:20,x:649,y:111,img:"./assets/castles/others1.png",size:48,weapons:{},others:[],isConquest:!0,score:15,W:1467,H:774},{id:21,x:1099,y:496,img:"./assets/castles/others2.png",size:48,weapons:{},others:[],isConquest:!0,score:25,W:1467,H:774},{id:22,x:282,y:310,img:"./assets/castles/others3.png",size:48,weapons:{},others:[],isConquest:!0,score:35,W:1467,H:774},{id:23,x:539,y:567,img:"./assets/castles/others4.png",size:64,weapons:{},others:[],isConquest:!0,score:45,W:1467,H:774},{id:25,x:925,y:235,img:"./assets/castles/others6.png",size:48,weapons:{},others:[],isConquest:!0,score:75,W:1467,H:774},{id:26,x:429,y:201,img:"./assets/castles/others5.png",size:48,weapons:{},others:[],isConquest:!0,score:50,W:1467,H:774}]},,,,,,,,,,,,,,,,,,,,,,,,,function(s,e,n){},function(s,e,n){},function(s,e,n){},function(s,e,n){},function(s,e,n){},function(s,e,n){},function(s,e,n){},,,,function(s,e,n){"use strict";n.r(e);n(69);var t=n(0),i=(n(2),n(4),"player:started"),a="player:dueling",o="player:conquering",r="player:ended",c="game:start",l="player:turn-start",d="player:roll-started",p="player:roll-ended",u="player:duel-start",h="player:duel-picked",v="player:duel-roll",g="player:duel-over",w="player:duel-end",m="player:conq-idle",y="player:conq-check",f="player:conq-conq",x="player:turn-end",C="game:conquest-begin",q="game:conquest-end",b="game:over",k=(n(70),n(42)),_=n(43),W=n(44);const z={medium:k,short:_,long:W};var H=s=>{const e=[];return z[s].forEach(s=>{const n={};n.id=s.id,n.img=s.img,n.others=s.others,n.isConquest=s.isConquest,n.score=s.score,n.isOwned=s.isOwned,n.owner=s.owner,n.weapons={},$.each(s.weapons,function(s,e){n.weapons[s]=e}),$("#app").append((s=>{const e=!0===s.isConquered?"conquered":"",n=window.innerWidth,t=window.innerHeight;if(void 0!==s.W){const e=s.W/n;s.x/=e,s.W=n}if(void 0!==s.H){const e=s.H/t;s.y/=e,s.H=t}return`\n        <div class="aow-castle ${e}" data-id="${s.id}" style="top: ${s.y}px; left: ${s.x}px; width: ${s.size}px; height: ${s.size}px;">\n            <img src="${s.img}">\n\n            <div class="mark" style="width: ${s.size}px; height: ${s.size}px;">\n            </div>\n        </div>\n    `})(s)),n.W=s.W,n.H=s.H,n.x=s.x,n.y=s.y,e.push(n)}),e};var I={Init(){this.players=GameStorage.getCurrent().players,this.currentPlayer=GameStorage.getCurrent().currentPlayer,this.castles=H(GameStorage.getCurrent().map),this.turn=GameStorage.getCurrent().turn,this.len=this.players.length,this.state=i,this.dices=null},setDices(s){this.dices=s,this.normalDices={};for(let s=1;s<this.dices.length;s++){const e=this.dices[s];this.normalDices.hasOwnProperty(e.type)||(this.normalDices[e.type]=0),this.normalDices[e.type]+=this.normalDices[e.type]+e.value}},canConquer(s){let e=!0;const n=this;return Object.keys(s.weapons).forEach(t=>{const i=s.weapons[t];n.normalDices.hasOwnProperty(t)?n.normalDices[t]<i&&(e=!1):e=!1}),e},specialCastle(){const s=this.castles.filter((s,e)=>s.isConquest&&!s.isOwned);return s.length>0?s[0]:null},playerIndex(s){return this.players.indexOf(s)},checkEnd(){return!(this.castles.filter(s=>!s.isOwned&&!s.isConquest).length>0)}};const O="#current-player .player__info .player__name",P="#current-player .player__info .player__score span",E="#current-player .icon-inner",F="#current-player .icon-inner i",T="#current-player .player__turn",S="#turn-tracker span";var M={Init(){},updateInfo(s){if($(O).text(s.name),$(P).text(s.score),$(F).removeClass().addClass(s.icon),$(E).css("background-color",s.color),s.stayTurns>=1){const e=1===s.stayTurns?"this turn":s.stayTurns+" turns";$(T).find("span").text(e),$(T).css("visibility","visible")}else $(T).css("visibility","hidden")},updateScore(s){$(P).text(s.score)},updateTurn(s){$(S).text(s)}},N=(n(71),s=>`\n        <div class="aow-dice ${s}">\n            <div class="aow-dice__dice">\n                <div class="aow-dice__face">\n\n                </div>\n            </div>\n        </div>\n    `),R={STANDARD:["1sword","2sword","3sword","archer","pikeman","knight"],ULTIMATE:["assassin","elephant","ship","siege","torch"],DUEL:["duel","duel","peace","peace","peace","peace"],IMGPREFIX:"./assets/dices/",IMGSUFIX:".png",SPINS:18,TEMPLATE(s){return`<img src="${this.IMGPREFIX+s+this.IMGSUFIX}" data-type="${s}">`},PICK_ONE(s){return chance.pickone(this[s])},PICK_FINAL(s){const e=this.PICK_ONE(s);let n,t=1;return isNaN(e[0])?n=e:(n=e.substr(0,0)+e.substr(1),t=parseInt(e[0])),{img:this.TEMPLATE(e),type:n,value:t}},PICK_DUMMY(s){const e=[];for(let n=0;n<this.SPINS-1;n++)e.push(this.TEMPLATE(this.PICK_ONE(s)));return e},PICK(s){const e=this.PICK_DUMMY(s),n=this.PICK_FINAL(s);return e.push(n.img),{faces:e.reverse(),type:n.type,value:n.value}}};class D{constructor(s,e){this.options=e,this.$element=s.replaceWithPush(N(this.options.classes)),this.$faces=this.$element.find(".aow-dice__face"),this.rolling=!1;const n=R.PICK_FINAL(this.options.kind).img;this.$faces.append(n)}clearFaces(){this.$faces.empty()}roll(s){if(this.rolling)return null;this.rollling=!0;const e=R.PICK(this.options.kind);return this.animate(e.faces,s),{type:e.type,value:e.value}}animate(s,e){this.clearFaces(),this.$faces.append(s.join(""));const n=-(s.length-1)*this.$faces.children().last().outerHeight(),t=this;this.$faces.css("top",n),this.$faces.animate({top:0},this.options.time,function(){t.rollling=!1,e&&e()})}}class A{constructor(s,e){this.options=e,this.$element=s;const n=this.$element.find(".aow-dice__holder");this.dices=[];const t=this;n.each(function(s){t.dices.push(new D($(this),t.options.dices[s]))}),this.rolling=!1}roll(){if(this.rolling)return null;this.rolling=!0;const s=[];return this.dices.forEach((e,n)=>{n===this.dices.length-1?s.push(e.roll(this.endRoll.bind(this,s))):s.push(e.roll())}),s}endRollCallback(s){this.callback=s}endRoll(s){this.callback&&this.callback(s),this.rolling=!1}}const j=()=>{const s=[];for(let e=0;e<6;e++){const n=1e3+200*(e+1);s.push({kind:"STANDARD",classes:"standard-dice",time:n})}return{dices:s,callback(s){}}},B="#dices",G="#dices button";var V={Init(){this.$button=$(G),this.dices=new A($(B),(()=>{const s=[];for(let e=0;e<6;e++){const n=750+250*(e+1);s.push({kind:"STANDARD",classes:"standard-dice",time:n})}return{dices:[{kind:"DUEL",classes:"duel-dice",time:750},...s,{kind:"ULTIMATE",classes:"ultimate-dice",time:2500}],callback(s){}}})()),this.$button.on("click",s=>{const e=this.$button.data("type");"roll"===e&&$em.emit(d,{}),"end"===e&&$em.emit(x,{})}),this.dices.endRollCallback(s=>{$em.emit(p,{diceValues:s})})},prepareForRolling(){this.makeRollButton(),this.enableButton()},beginRolling(){this.disableButton(),this.makeEndButton()},prepareForEnding(){this.enableButton()},makeRollButton(){this.$button.removeClass().addClass("btn btn-outline-success"),this.$button.data("type","roll"),this.$button.text("roll dices")},makeEndButton(){this.$button.removeClass().addClass("btn btn-outline-warning"),this.$button.data("type","end"),this.$button.text("end turn")},disableButton(){this.$button.attr("disabled",!0)},enableButton(){this.$button.attr("disabled",!1)}};n(72);const L=(s,e)=>{const n=!0===e?"":"disabled",t=!0===e?"btn btn-outline-success":"btn btn-outline-danger";return`\n        <div class="castle-viewer__unconq">\n            <div class="unconq-weapons">\n                ${(s=>{const e=[];return $.each(s,function(s,n){e.push(((s,e)=>`\n        <div class="unconq-weapons__weapon">\n            <div class="weapon-image">\n                <img src="${(s=>`./assets/dices/${s}.png`)((s=>"sword"===s?"1sword":s)(s))}">\n            </div>\n            <div class="weapon-value">\n                <p>${e}</p>\n            </div>\n        </div>\n    `)(s,n))}),e.join("")})(s.weapons)}\n            </div>\n\n            <div class="unconq-others">\n                <div class="unconq-score">\n                    <p> Score: <span> ${s.score} </span> </p>\n                </div>\n                <div class="unconq-action">\n                    <button class="${t}" ${n}> Conquer </button>\n                </div>\n            </div>\n        </div>\n    `},U="#castle-viewer",K="#castle-viewer .castle-viewer__close",X="#castle-viewer .castle-viewer__image img",Y="#castle-viewer .castle-viewer__info",J=".castle-viewer__unconq button";var Q={Init(s){this.$container=$("#app"),this.$container.append('\n        <div id="castle-viewer" class="d-none">\n            <div class="castle-viewer__close">\n                <i class="fas fa-times"></i>\n            </div>\n            <div class="castle-viewer__content">\n                <div class="castle-viewer__image">\n                    <img src="./../../../assets/castles/main3.png">\n                </div>\n                <div class="castle-viewer__info"></div>\n            </div>\n        </div>\n    '),this.$el=this.$container.find(U),this.$close=$(K),this.$close.on("click",s=>{this.hide()}),this.$info=$(Y),this.$image=$(X),this.currentCastle=null,this.$info.on("click",J,s=>{this.conquerCallback&&this.conquerCallback(this.currentCastle)})},clearViewer(){this.$info.empty()},hide(){this.$el.addClass("d-none"),this.currentCastle=null},show(s,e,n){this.currentCastle=s,this.clearViewer(),this.$image.attr("src",s.img),s.isConquest&&!s.isOwned?this.$info.append('\n        <div class="castle-viewer__special">\n            <p> This castle can be conquered only in special turns ! </p>                   \n        </div>\n    '):void 0===n?this.$info.append(((s,e)=>`\n        <div class="castle-viewer__conq">\n            <div class="conq-info">\n                <p> This castle is owned by: </p>\n            </div>\n            <div class="conq-banner">\n                <div class="conq-banner__color">\n                    <i class="${e.icon}" style="color: ${e.color};"></i>\n                </div>\n            </div>\n            <div class="conq-name">\n                <p> ${e.name} </p>\n            </div>                    \n        </div>\n    `)(0,e)):this.$info.append(L(s,n)),this.$el.removeClass("d-none")},registerConquerCallback(s){this.conquerCallback=s}};var Z={Init(s){this.castles=s,this.viewer=Q,this.viewer.Init();$("#app").on("click",".aow-castle",function(s){const e=parseInt($(this).data("id"));$em.emit(y,{id:e})})},getCastleById(s){return this.castles.find(e=>e.id==parseInt(s))},getCastleByIndex(s){return this.castles[s]}};var ss={Init(s,e){this.players=s,this.currentIndex=e},currentPlayer(){return this.players[this.currentIndex]},nextPlayer(){const s=this.players.length;return this.currentIndex++,this.currentIndex>=s&&(this.currentIndex=0),this.currentPlayer()},isFreeze(){return this.currentPlayer().stayTurns>0},removeFreeze(){if(this.isFreeze()){this.currentPlayer().stayTurns--}},addFreeze(s){s.stayTurns++},addCastle(s,e){s.castles.push(e.id),s.score=s.score+e.score}};n(73);const es=(s,e)=>`\n        <div class="duel-player" data-index="${e}">\n            <div class="player-banner">\n                <div class="player-color">\n                    <i class="${s.icon}" style="color: ${s.color};"></i>\n                </div>\n            </div>\n            <div class="player-name">${s.name}</div>\n        </div>\n    `,ns=s=>`\n        <div class="duel-pick">\n\n            <div class="duel-pick__player">\n                ${(s=>{const e=[];return s.forEach((s,n)=>{e.push(es(s,n))}),e.join("")})(s)}\n            </div>\n\n            <div class="duel-hr"></div>\n\n            <button class="btn btn-warning" data-type="pick"> Pick </button>\n        </div>\n    `,ts=s=>`\n        <div class="duel-rolling__players-player">\n            <div class="duel-player">\n                <div class="player-banner">\n                    <div class="player-color">\n                        <i class="${s.icon}" style="color: ${s.color};"></i>\n                    </div>\n                </div>\n                <div class="player-name">${s.name}</div>\n            </div>\n\n            <div class="duel-dices">\n                <div class="aow-dice__holder"></div>\n                <div class="aow-dice__holder"></div>\n                <div class="aow-dice__holder"></div>\n                <div class="aow-dice__holder"></div>\n                <div class="aow-dice__holder"></div>\n                <div class="aow-dice__holder"></div>\n            </div>\n        </div>\n    `,is={pick:"Pick your opponent!",roll:"Who will win?",win:"And the winner is:",tie:"<span>Everyone! (No one)</span>"},as="#duel",os="#duel .duel-wrapper .duel-header",rs="#duel .duel-wrapper .duel-content",cs=".duel-pick .duel-player",ls="button",ds="#duel .duel-wrapper .duel-content .duel-rolling .duel-dices";var ps={duelStarter:null,duelOpponent:null,otherPlayers:null,diceModel:null,diceOne:null,diceOneValues:null,diceTwo:null,diceTwoValues:null,diceCheck:0,winner:void 0,loser:void 0,Init(s){this.diceModel=s,$("#app").append('\n        <div id="duel" class="d-none">\n            <div class="duel-cover">\n                <div class="duel-mask"></div>\n            </div>\n            <div class="duel-wrapper">\n                <div class="duel-header">\n                    Pick your opponent!\n                </div>\n\n                <div class="duel-hr"></div>\n\n                <div class="duel-content"></div>\n            </div>\n        </div>\n    ');const e=this;$(rs).on("click",cs,function(s){$(rs).find(cs).each(function(){$(this).removeClass("selected")}),$(this).addClass("selected");const n=parseInt($(this).data("index"));e.duelOpponent=e.otherPlayers[n]}),$(rs).on("click",ls,function(s){const n=$(this).data("type");if("pick"===n){if(null===e.duelOpponent)return;e.duelOnPick()}"roll"===n&&e.duelOnRoll(),"next"===n&&e.duelOnNext(),"end"===n&&e.duelOnFinish()})},duelStart(s,e){$(os).text(is.pick),this.duelStarter=s,this.otherPlayers=e.filter(s=>this.duelStarter!==s),$(rs).empty(),$(rs).append(ns(this.otherPlayers)),$(as).removeClass("d-none")},duelOnPick(){$(os).text(is.roll),$(rs).empty(),$(rs).append(((s,e)=>`\n        <div class="duel-rolling">\n\n            <div class="duel-rolling__players">\n                ${ts(s)} \n                ${ts(e)}\n            </div>\n\n            <div class="duel-hr"></div>\n\n            <button class="btn btn-success" data-type="roll"> Roll </button>\n        </div>\n    `)(this.duelStarter,this.duelOpponent));const s=$(ds);this.diceOne=new A($(s[0]),this.diceModel),this.diceTwo=new A($(s[1]),this.diceModel)},duelOnRoll(){$(rs).find(ls).attr("disabled",!0),$(rs).find(ls).text("Next"),$(rs).find(ls).data("type","next");const s=s=>{this.diceCheck++,this.diceCheck>=2&&$(rs).find(ls).attr("disabled",!1)};this.diceOne.endRollCallback(s),this.diceTwo.endRollCallback(s),this.diceOneValues=this.diceOne.roll(),this.diceTwoValues=this.diceTwo.roll()},checkWinner(){let s=0,e=0;this.diceOneValues.forEach(e=>{"sword"===e.type&&(s+=e.value)}),this.diceTwoValues.forEach(s=>{"sword"===s.type&&(e+=s.value)}),s>e?(this.winner=this.duelStarter,this.looser=this.duelOpponent):s<e?(this.looser=this.duelStarter,this.winner=this.duelOpponent):(this.winner=void 0,this.looser=void 0)},duelOnNext(){var s;$(os).text(is.win),this.checkWinner(),$(rs).empty(),$(rs).append(`\n        <div class="duel-winner">\n            <div class="winner">${void 0===(s=this.winner)?is.tie:es(s,0)}</div>\n            <div class="duel-hr"></div>\n            <button class="btn btn-info" data-type="end"> Close </button>\n        </div>\n    `)},duelOnFinish(){$(rs).empty(),$(as).addClass("d-none"),this.onFinishCallback&&this.onFinishCallback(this.looser)},registerFinishCallback(s){this.onFinishCallback=s}};n(74);const us="#conquest",hs="#conquest .conquest-wrapper .conquest-header .conquest-header__img img",vs="#conquest .conquest-wrapper .conquest-content",gs="button",ws="#conquest .conquest-wrapper .conquest-content .conquest-dices";var ms={diceGroups:[],diceValues:[],players:[],winners:[],castle:null,_diceCheck:0,diceCheck(){return this._diceCheck++,this._diceCheck===this.players.length},Init(s){this.diceModel=s,$("#app").append('\n        <div id="conquest" class="d-none">\n            <div class="conquest-cover">\n                <div class="conquest-mask"></div>\n            </div>\n            <div class="conquest-wrapper">\n                <div class="conquest-header">\n                    <div class="conquest-header__img">\n                        <img src="./../assets/dices/duel.png">\n                    </div>\n                    <div class="conquest-header__text"> Who will win it?</div>\n                </div>\n\n                <div class="conquest-hr"></div>\n\n                <div class="conquest-content"></div>\n            </div>\n        </div>\n    ');const e=this;$(vs).on("click",gs,function(s){const n=$(this).data("type");"roll"===n&&e.conquestOnRoll(),"next"===n&&e.conquestOnNext(),"end"===n&&e.conquestOnFinish()})},startConquest(s,e){this.castle=e,this.players=s,this.diceGroups=[],this.diceValues=[],this._diceCheck=0,this.winners=[],$(hs).attr("src",e.img),$(vs).empty(),$(vs).append((s=>{return`\n        <div class="conquest-rolling">\n\n            <div class="conquest-rolling__players">\n                ${s.map(s=>(s=>`\n        <div class="conquest-rolling__players-player">\n            <div class="conquest-player">\n                <div class="player-banner">\n                    <div class="player-color">\n                        <i class="${s.icon}" style="color: ${s.color};"></i>\n                    </div>\n                </div>\n                <div class="player-name">${s.name}</div>\n            </div>\n\n            <div class="conquest-dices">\n                <div class="aow-dice__holder"></div>\n                <div class="aow-dice__holder"></div>\n                <div class="aow-dice__holder"></div>\n                <div class="aow-dice__holder"></div>\n                <div class="aow-dice__holder"></div>\n                <div class="aow-dice__holder"></div>\n            </div>\n        </div>\n    `)(s)).join("")} \n            </div>\n\n            <div class="conquest-hr"></div>\n\n            <button class="btn btn-success" data-type="roll"> Roll </button>\n        </div>\n    `})(this.players));const n=$(ws),t=this;n.each(function(){t.diceGroups.push(new A($(this),t.diceModel))}),$(us).removeClass("d-none")},conquestOnRoll(){$(vs).find(gs).attr("disabled",!0),$(vs).find(gs).text("Next"),$(vs).find(gs).data("type","next");const s=s=>{this.diceCheck()&&$(vs).find(gs).attr("disabled",!1)};this.diceGroups.forEach(e=>{e.endRollCallback(s)}),this.diceGroups.forEach(s=>{this.diceValues.push(s.roll())})},conquestOnNext(){this.checkWinner(),this.winners.length>1?this.startConquest(this.winners,this.castle):($(vs).empty(),$(vs).append(((s,e)=>`\n        <div class="conquest-winner">\n            <div class="winner">\n                <div class="conquest-player">\n                    <div class="player-banner">\n                        <div class="player-color">\n                            <i class="${s.icon}" style="color: ${s.color};"></i>\n                        </div>\n                    </div>\n                    <div class="player-name">${s.name}</div>\n                </div>\n\n                <div class="conquest-score">Awarded ${e.score} points!</div>\n            </div>\n            <div class="conquest-hr"></div>\n            <button class="btn btn-info" data-type="end"> Close </button>\n        </div>\n    `)(this.winners[0],this.castle)))},conquestOnFinish(){$(vs).empty(),$(us).addClass("d-none"),this.onFinishCallback&&this.onFinishCallback(this.winners[0],this.castle)},registerFinishCallback(s){this.onFinishCallback=s},checkWinner(){const s=[];this.diceValues.forEach(e=>{let n=0;e.forEach(s=>{"sword"===s.type&&(n+=s.value)}),s.push(n)});let e=Math.max(...s);s.forEach((s,n)=>{s===e&&this.winners.push(this.players[n])})}};n(75);var ys={Init(){$("#app").on("click","#game-over button",function(s){const e=$(this).data("type");"replay"===e&&window.location.reload(),"menu"===e&&(window.location.href="./index.html")})},show(s){s.sort((s,e)=>-s.score+e.score),$("#app").append((s=>`\n        <div id="game-over">\n            <div class="game-over-cover">\n                <div class="game-over-mask"></div>\n            </div>\n            <div class="game-over-wrapper">\n                <div class="game-over-header">\n                    Game is over!\n                </div>\n                <div class="game-over-hr"></div>\n                <div class="game-over-players">\n                    ${s.map(s=>(s=>`\n        <div class="game-over-player">\n            <div class="player-banner">\n                <div class="player-color">\n                    <i class="${s.icon}" style="color: ${s.color};"></i>\n                </div>\n            </div>\n            <div class="player-name">${s.name}</div>\n            <div class="player-score">${s.score}</div>\n        </div>\n    `)(s)).join("")}\n                </div>\n                <div class="game-over-hr"></div>\n\n                <button class="btn btn-success" data-type="replay"> Play Again! </button>\n\n                <button class="btn btn-danger" data-type="menu"> Main Menu </button>\n                \n            </div>\n        </div>\n    `)(s))}};const fs=()=>{$em.on(c,function(s,e){M.updateTurn(I.turn),$em.emit(l)}),$em.on(l,function(s,e){const n=ss.currentPlayer();if(M.updateInfo(n),ss.isFreeze())return I.state=r,ss.removeFreeze(),void V.prepareForEnding();I.state=i,V.prepareForRolling()}),$em.on(d,function(s,e){I.state===i&&(V.beginRolling(),V.dices.roll())}),$em.on(p,function(s,e){I.setDices(e.diceValues),V.prepareForEnding(),"duel"===I.dices[0].type?(I.state=a,$em.emit(u)):(I.state=o,$em.emit(m))}),$em.on(u,function(s,e){V.disableButton(),setTimeout(()=>{ps.duelStart(ss.currentPlayer(),ss.players)},300)}),$em.on(h,function(s,e){}),$em.on(v,function(s,e){}),$em.on(g,function(s,e){}),$em.on(w,function(s,e){V.enableButton(),I.state=o;const{looser:n}=e;void 0!==n&&ss.addFreeze(n)}),$em.on(m,function(s,e){}),$em.on(y,function(s,e){if(I.state!==o)return;const n=e.id,t=Z.getCastleById(n);if(t.isConquest&&!t.isOwned)Z.viewer.show(t);else if(t.isOwned){const s=ss.players[t.owner];Z.viewer.show(t,s,void 0)}else{const s=I.canConquer(t);Z.viewer.show(t,void 0,s)}}),$em.on(f,function(s,e){I.state=r;const n=e.castle,t=ss.currentPlayer();t.castles.push(n.id),t.score=t.score+n.score,n.owner=ss.currentIndex,n.isOwned=!0,M.updateScore(t),Z.viewer.hide()}),$em.on(x,function(s,e){I.checkEnd()?$em.emit(b):(ss.nextPlayer(),I.turn++,M.updateTurn(I.turn),Z.viewer.hide(),I.turn%I.len==0?$em.emit(C):$em.emit(l))}),$em.on(C,function(s,e){const n=I.specialCastle();null!==n?ms.startConquest(I.players,n):$em.emit(l)}),$em.on(q,function(s,e){const n=e.winner,t=e.castle;n.castles.push(t.id),n.score=n.score+t.score,t.owner=I.playerIndex(n),t.isOwned=!0,M.updateScore(n),$em.emit(l)}),$em.on(b,function(s,e){ys.show(ss.players)})};var $s=()=>{I.Init(),M.Init(),V.Init(),Z.Init(I.castles),ss.Init(I.players,I.currentPlayer),ps.Init(j()),ms.Init(j()),ys.Init(),ps.registerFinishCallback(function(s){$em.emit(w,{looser:s})}),ms.registerFinishCallback(function(s,e){$em.emit(q,{winner:s,castle:e})}),Z.viewer.registerConquerCallback(function(s){$em.emit(f,{castle:s}),$("#app").find(`.aow-castle[data-id=${s.id}]`).addClass("conquered")}),fs();let s=window.innerWidth,e=window.innerHeight;$(window).resize(function(){const n=window.innerWidth,t=window.innerHeight;s==n&&e==t||Z.castles.forEach(i=>{const a=$("#app").find(`.aow-castle[data-id=${i.id}]`);if(void 0!==i.W){const s=i.W/n;i.x/=s,i.W=n}if(void 0!==i.H){const s=i.H/t;i.y/=s,i.H=t}a.css("top",i.y),a.css("left",i.x),s=n,e=t})}),$em.emit(c)};$(function(s){Object(t.a)(),$s()})}]);