(function(data) {
  var __extends = this.__extends || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
      this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
  };
  define(["require", "exports", 'iwc', 'jquery', 'handlebars'], function(require, exports, iwc, jquery, handlebars) {


    var IconMenu = (function(_super) {
      __extends(IconMenu, _super);

      function IconMenu() {
        _super.call(this, 'iwc-icon-menu', data);
        var c = handlebars['default'] ? handlebars['default'] : handlebars;
        this._t = c.compile(data.markup);
        this.$ = jquery;
      }
      IconMenu.prototype.targets = function() {
        return this.$('.component--iwc-icon-menu');
      };

      IconMenu.prototype.template = function(data) {
        return this._t(data);
      };

      IconMenu.prototype.model = function() {
        return {};
      };

      IconMenu.prototype.view = function() {
        return {
          icons: [],
          title: null
        };
      };

      IconMenu.prototype.preload = function(ref) {
        var def = function(key, i) {
          return i < ref.data[key].length ? ref.data[key][i] : null;
        };
        for (var i = 0; i < ref.data['data-item'].length; ++i) {
          ref.view.icons.push({
            item: ref.data['data-item'][i],
            icon: def('data-icon', i),
            desc: def('data-desc', i),
            action: def('data-action', i)
          });
        }
      };

      IconMenu.prototype.instance = function(ref) {
        ref.view.title = $(ref.root).find('.title');
        var bind = function($e) {
          var action = function() {
            if ($e.hasClass('active')) {
              $e.removeClass('active');
            } else {
              $(ref.root).find('.item').removeClass('active');
              $e.addClass('active');
            }
            ref.view.title.html($e.attr('data-title'));
          };
          $e.bind('mouseup', action);
        };
        $(ref.root).find('.item').each(function(i, e) {
          bind($(e));
        });
      };
      return IconMenu;
    })(iwc.Base);
    exports.IconMenu = IconMenu;

    iwc.component(new IconMenu().def());
  });
  //# sourceMappingURL=script.js.map

})({
  styles: ".component--iwc-icon-menu ul {\n  position: relative; }\n.component--iwc-icon-menu li {\n  border: 2px solid #cecfc8;\n  display: inline-block;\n  width: 28%;\n  transition: width 0.5s;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 1px 1px 3px;\n  margin: 0.6em;\n  vertical-align: top;\n  text-align: center;\n  border-radius: 5px; }\n  .component--iwc-icon-menu li:before {\n    content: \"\";\n    display: block;\n    padding-top: 100%; }\n  .component--iwc-icon-menu li img {\n    top: 0px;\n    left: 0px;\n    position: absolute;\n    width: 100%;\n    z-index: 0;\n    opacity: 0.5;\n    border-radius: 8px;\n    box-shadow: 2px 2px 2px #cfcfcf;\n    margin-top: -1px; }\n  .component--iwc-icon-menu li .content {\n    width: 100%;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    opacity: 0.7;\n    border-radius: 0.2em;\n    background: #fff;\n    display: block;\n    padding: 0.5em;\n    width: calc(100% - 2em);\n    margin: 1em;\n    box-sizing: border-box;\n    display: none; }\n    .component--iwc-icon-menu li .content h2 {\n      text-align: center;\n      overflow: hidden;\n      height: 1em;\n      display: none; }\n    .component--iwc-icon-menu li .content span {\n      display: block;\n      box-sizing: border-box;\n      margin: 1em; }\n  .component--iwc-icon-menu li.active {\n    border: 2px solid #ffffff;\n    width: 50%;\n    z-index: 1;\n    transition: width 1s; }\n    .component--iwc-icon-menu li.active .content {\n      display: block; }\n    .component--iwc-icon-menu li.active img {\n      opacity: 1.0; }\n",
  markup: "<div><div class=\"title\"></div><ul>{{#each view.icons}}<li data-title=\"{{item}}\" data-icon=\"{{icon}}\" class=\"item\"><img src=\"{{this.icon}}\"/><div class=\"content\"><h2>{{this.item}}</h2>{{#if this.desc.innerHTML}}<span>{{{this.desc.innerHTML}}}</span>{{/if}}</div></li>{{/each}}</ul></div>",
  resources: {}
});