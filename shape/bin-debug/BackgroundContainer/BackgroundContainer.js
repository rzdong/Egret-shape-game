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
var BackgroundContainer = (function (_super) {
    __extends(BackgroundContainer, _super);
    function BackgroundContainer() {
        return _super.call(this) || this;
    }
    BackgroundContainer.prototype.init = function () {
        console.log('BackgroundContainer已加载');
        // 初始化背景
        // let shape = new BaseShape(this.stage.stageWidth, this.stage.stageHeight);
        // shape.graphics.beginFill(0x222222);
        // shape.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        // shape.graphics.endFill();
        // this.addChild(shape)
        var sky = new egret.Bitmap(RES.getRes('home_bg_jpg')); //'https://static01.coloros.com/bbs/data/attachment/forum/201312/27/174621xzs8lj9gzi28npu2.jpg'
        sky.width = this.stage.stageWidth;
        sky.height = this.stage.stageHeight;
        this.addChild(sky);
    };
    return BackgroundContainer;
}(BaseUILayer));
__reflect(BackgroundContainer.prototype, "BackgroundContainer");
//# sourceMappingURL=BackgroundContainer.js.map