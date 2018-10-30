var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Home = (function (_super) {
    __extends(Home, _super);
    function Home(GC) {
        var _this = _super.call(this) || this;
        _this._GameContainer = GC;
        return _this;
    }
    Home.prototype.init = function () {
    };
    return Home;
}(BaseUILayer));
__reflect(Home.prototype, "Home");
//# sourceMappingURL=Home.js.map