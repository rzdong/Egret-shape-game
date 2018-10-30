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
var GameContainer = (function (_super) {
    __extends(GameContainer, _super);
    function GameContainer() {
        return _super.call(this) || this;
    }
    GameContainer.prototype.init = function () {
        console.log('GameContainer已加载');
        this.home = new Home(this);
        this.addChild(this.home);
        // 初始化游戏层
    };
    GameContainer.prototype.createGame = function () {
        if (this.contains(this.game)) {
            this.removeChild(this.game);
        }
        this.game = new Game(this);
        this.addChild(this.game);
    };
    GameContainer.prototype.createHome = function () {
        if (this.contains(this.home)) {
            this.removeChild(this.home);
        }
        this.home = new Home(this);
        this.addChild(this.home);
    };
    return GameContainer;
}(BaseUILayer));
__reflect(GameContainer.prototype, "GameContainer");
//# sourceMappingURL=GameContainer.js.map