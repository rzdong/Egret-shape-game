class Game extends BaseUILayer {

    private scoreIcon: egret.Bitmap;

    private scoreText: egret.TextField;

    
    private _GameContainer: GameContainer; // 父类实例



    constructor(GC: GameContainer){
        super();
        this._GameContainer = GC;
    }

    protected init() {
        

    }

}