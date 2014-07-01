/// <reference path="../../defs/jquery/jquery.d.ts" />
/// <reference path="../../defs/handlebars/handlebars.d.ts" />
/// <reference path="../../defs/iwc/iwc.d.ts" />
export interface Icon {
    item: string;
    icon: string;
    action: string;
    desc: any;
}
export declare class IconMenu extends iwc.Base {
    public $: JQueryStatic;
    private _t;
    constructor();
    public targets(): HTMLElement[];
    public template(data: any): any;
    public model(): any;
    public view(): any;
    public preload(ref: iwc.Ref): void;
    public instance(ref: iwc.Ref): void;
}
