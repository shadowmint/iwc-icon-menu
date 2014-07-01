var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'iwc', 'jquery', 'handlebars'], function(require, exports, iwc, jquery, handlebars) {
    

    var IconMenu = (function (_super) {
        __extends(IconMenu, _super);
        function IconMenu() {
            _super.call(this, 'iwc-icon-menu', data);
            var c = handlebars['default'] ? handlebars['default'] : handlebars;
            this._t = c.compile(data.markup);
            this.$ = jquery;
        }
        IconMenu.prototype.targets = function () {
            return this.$('.component--iwc-icon-menu');
        };

        IconMenu.prototype.template = function (data) {
            return this._t(data);
        };

        IconMenu.prototype.model = function () {
            return {};
        };

        IconMenu.prototype.view = function () {
            return { icons: [], title: null };
        };

        IconMenu.prototype.preload = function (ref) {
            var def = function (key, i) {
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

        IconMenu.prototype.instance = function (ref) {
            ref.view.title = $(ref.root).find('.title');
            var bind = function ($e) {
                var action = function () {
                    if ($e.hasClass('active')) {
                        $e.removeClass('active');
                    } else {
                        $(ref.root).find('.item').removeClass('active');
                        $e.addClass('active');
                    }
                    ref.view.title.html($e.attr('data-title'));
                };
                $e.bind('mouseup', action);
                $e.bind('touchend', action);
            };
            $(ref.root).find('.item').each(function (i, e) {
                bind($(e));
            });
        };
        return IconMenu;
    })(iwc.Base);
    exports.IconMenu = IconMenu;

    iwc.component(new IconMenu().def());
});
//# sourceMappingURL=script.js.map
