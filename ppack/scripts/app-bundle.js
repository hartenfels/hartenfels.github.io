define("app",["exports"],function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});t.App=function(){function t(){e(this,t),this.pal={length:120,width:80,height:15,top:195},this.box={length:30,width:40,height:20,items:1},this.calculate()}return t.prototype.update=function(t){var e=this;return this.timer&&window.clearTimeout(this.timer),this.timer=window.setTimeout(function(){e.timer=null,e.calculate()},t),!0},t.prototype.fixUpInputs=function(){var t=function(t){var e=/^\s*([0-9]+)([,.]([0-9]+))?\s*$/.exec(t);if(e){var n=parseFloat(e[1]+"."+(e[3]||0));if(n<=0)throw"Eingaben müssen größer als 0 sein.";return n}if(/^\s*$/.test(t))throw"Eingaben dürfen nicht leer sein.";throw'Ungültige Eingabe: "'+t+'"'};return{pal:{length:t(this.pal.length),width:t(this.pal.width),height:t(this.pal.height),top:t(this.pal.top)},box:{length:t(this.box.length),width:t(this.box.width),height:t(this.box.height),items:t(this.box.items)}}},t.prototype.calculate=function(){var t=void 0;try{this.error=null,t=this.fixUpInputs()}catch(t){return void(this.error=t)}var e=t.box.length,n=t.box.width,a=t.box.height,l=[this.check(t,e,n,a),this.check(t,e,a,n),this.check(t,n,e,a),this.check(t,n,a,e),this.check(t,a,e,n),this.check(t,a,n,e)],s=l.reduce(function(t,e){return Math.max(t,e.totalBoxes)},0);this.results=l.filter(function(t){return t.totalBoxes>0&&t.totalBoxes>=s})},t.prototype.check=function(t,e,n,a){var l=Math.floor(t.pal.length/e),s=Math.floor(t.pal.width/n),i=Math.floor((t.pal.top-t.pal.height)/a),o=l*e,d=s*n,r=i*a;return{length:e,width:n,height:a,totalBoxes:l*s*i,totalItems:l*s*i*t.box.items,boxesLength:l,boxesWidth:s,boxesPerLayer:l*s,numberOfLayers:i,actualLength:o,actualWidth:d,actualHeight:r,usage:this.calculateUsage(t,o*d*r)}},t.prototype.calculateUsage=function(t,e){var n=t.pal.length*t.pal.width*(t.pal.top-t.pal.height);return(Math.round(e/n*1e4)/100).toFixed(2)},t}()}),define("environment",["exports"],function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={debug:!1,testing:!1}}),define("main",["exports","./environment"],function(t,e){"use strict";function n(t){t.use.standardConfiguration().feature("resources"),a.default.debug&&t.use.developmentLogging(),a.default.testing&&t.use.plugin("aurelia-testing"),t.start().then(function(){return t.setRoot()})}Object.defineProperty(t,"__esModule",{value:!0}),t.configure=n;var a=function(t){return t&&t.__esModule?t:{default:t}}(e);Promise.config({warnings:{wForgottenReturn:!1}})}),define("resources/index",["exports"],function(t){"use strict";function e(t){}Object.defineProperty(t,"__esModule",{value:!0}),t.configure=e}),define("text!app.html",["module"],function(t){t.exports='<template>\n  <form class="container">\n    <h1>Palettenpacker</h1>\n\n    <div class="panel panel-default">\n      <div class="panel-heading">\n        <h2 class="panel-title">Palette</h2>\n      </div>\n      <div class="panel-body">\n        <div class="row">\n          <div class="col-sm-3">\n            <label>Länge</label>\n            <div class="input-group">\n              <input type="text" class="form-control" value.bind="pal.length"\n                     change.delegate="update(10)" keydown.delegate="update(500)">\n              <span class="input-group-addon">cm</span>\n            </div>\n          </div>\n          <div class="col-sm-3">\n            <label>Breite</label>\n            <div class="input-group">\n              <input type="text" class="form-control" value.bind="pal.width"\n                     change.delegate="update(10)" keydown.delegate="update(500)">\n              <span class="input-group-addon">cm</span>\n            </div>\n          </div>\n          <div class="col-sm-3">\n            <label>Höhe</label>\n            <div class="input-group">\n              <input type="text" class="form-control" value.bind="pal.height"\n                     change.delegate="update(10)" keydown.delegate="update(500)">\n              <span class="input-group-addon">cm</span>\n            </div>\n          </div>\n          <div class="col-sm-3">\n            <label>Maximalhöhe</label>\n            <div class="input-group">\n              <input type="text" class="form-control" value.bind="pal.top"\n                     change.delegate="update(10)" keydown.delegate="update(500)">\n              <span class="input-group-addon">cm</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="panel panel-default">\n      <div class="panel-heading">\n        <h2 class="panel-title">Verpackungseinheit (VE)</h2>\n      </div>\n      <div class="panel-body">\n        <div class="row">\n          <div class="col-sm-3">\n            <label>Länge</label>\n            <div class="input-group">\n              <input type="text" class="form-control" value.bind="box.length"\n                     change.delegate="update(10)" keydown.delegate="update(500)">\n              <span class="input-group-addon">cm</span>\n            </div>\n          </div>\n          <div class="col-sm-3">\n            <label>Breite</label>\n            <div class="input-group">\n              <input type="text" class="form-control" value.bind="box.width"\n                     change.delegate="update(10)" keydown.delegate="update(500)">\n              <span class="input-group-addon">cm</span>\n            </div>\n          </div>\n          <div class="col-sm-3">\n            <label>Höhe</label>\n            <div class="input-group">\n              <input type="text" class="form-control" value.bind="box.height"\n                     change.delegate="update(10)" keydown.delegate="update(500)">\n              <span class="input-group-addon">cm</span>\n            </div>\n          </div>\n          <div class="col-sm-3">\n            <label>Inhalt</label>\n            <div class="input-group">\n              <input type="text" class="form-control" value.bind="box.items"\n                     change.delegate="update(10)" keydown.delegate="update(500)">\n              <span class="input-group-addon">Stück</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div if.bind="error" class="alert alert-danger">\n      ${error}\n    </div>\n\n    <div if.bind="results.length <= 0" class="alert alert-warning">\n      Es passt nichtmal eine Verpackungseinheit auf die Palette.\n    </div>\n\n    <div if.bind="!error" repeat.for="r of results">\n      <table class="table table-bordered table-hover">\n        <thead>\n          <tr class="info">\n            <th colspan="2">Auf Seite ${r.length} cm × ${r.width} cm gestellt</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td class="col-xs-2">VE Gesamt</td>\n            <td>${r.totalBoxes}</td>\n          </tr>\n          <tr>\n            <td class="col-xs-2">VE pro Lage</td>\n            <td>${r.boxesLength} × ${r.boxesWidth} = ${r.boxesPerLayer}</td>\n          </tr>\n          <tr>\n            <td class="col-xs-2">Anzahl Lagen</td>\n            <td>${r.numberOfLayers}</td>\n          </tr>\n          <tr>\n            <td class="col-xs-2">Größe auf der Palette</td>\n            <td>${r.actualLength} cm × ${r.actualWidth} cm × ${r.actualHeight} cm</td>\n          </tr>\n          <tr>\n            <td class="col-xs-2">Ausnutzung</td>\n            <td>${r.usage}%</td>\n          </tr>\n          <tr>\n            <td class="col-xs-2">Inhalt Gesamt</td>\n            <td>${r.totalItems} Stück</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </form>\n</template>\n'});