/// <reference path="../../defs/jquery/jquery.d.ts"/>
/// <reference path="../../defs/handlebars/handlebars.d.ts"/>
/// <reference path="../../defs/iwc/iwc.d.ts"/>
/// <amd-dependency='jquery'/>
import iwc = require('iwc');
import jquery = require('jquery');
import handlebars = require('handlebars');
declare var data:iwc.Data;

/** Icon instance */
export interface Icon {
    item:string;
    icon:string;
    action:string;
    desc:any;
}

/** Menu of icons */
export class IconMenu extends iwc.Base {

  public $:JQueryStatic;
  private _t:any;

  constructor() {
    super('iwc-icon-menu', data);
    var c = handlebars['default'] ? handlebars['default'] : handlebars;
    this._t = c.compile(data.markup);
    this.$ = jquery;
  }

  public targets():HTMLElement[] { return <HTMLElement[]> (<any> this.$('.component--iwc-icon-menu')); }

  public template(data:any):any { return this._t(data); }

  public model():any { return { }; }

  public view():any { return { icons: [], title: null }; }

  /** Return before the template renders */
  public preload(ref:iwc.Ref):void {
      var def = (key, i) => { return i < ref.data[key].length ? ref.data[key][i] : null };
      for (var i = 0; i < ref.data['data-item'].length; ++i) {
          ref.view.icons.push({
              item: ref.data['data-item'][i],
              icon: def('data-icon', i),
              desc: def('data-desc', i),
              action: def('data-action', i)
          });
      }
  }

  /** Attach elements after render is complete */
  public instance(ref:iwc.Ref):void {
      ref.view.title = $(ref.root).find('.title');
      var bind = ($e) => {
          var action = () => {
              if ($e.hasClass('active')) {
                  $e.removeClass('active');
              }
              else {
                  $(ref.root).find('.item').removeClass('active');
                  $e.addClass('active');
              }
              ref.view.title.html($e.attr('data-title'));
          };
          $e.bind('mouseup', action);
          $e.bind('touchend', action);
      };
      $(ref.root).find('.item').each((i, e) => { bind($(e)); })
  }
}

// Actually register
iwc.component(new IconMenu().def());
