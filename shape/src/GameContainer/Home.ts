class Home extends BaseUILayer {

    private logo: egret.Bitmap;
    private title: egret.Bitmap;
    private play: egret.Bitmap;
    private system: particle.GravityParticleSystem;

    private music: egret.Bitmap;

    private _GameContainer: GameContainer

    constructor(GC: GameContainer){
        super();
        this._GameContainer = GC;
    }

    protected init() :void {
        let Width = this.stage.stageWidth;
        let Height = this.stage.stageHeight;


        let shapeCircle = new egret.Shape();
        shapeCircle.graphics.beginFill(0xffffff);
        shapeCircle.graphics.drawCircle(Width / 2, 250, 72);
        shapeCircle.graphics.endFill();
        this.addChild(shapeCircle);
        this.logo = Util.createBitmapByName('logo_png');
        this.logo.anchorOffsetX = this.logo.width / 2;
        this.logo.anchorOffsetY = this.logo.height / 2;
        this.logo.y = -100;
        this.logo.x = Width / 2;
    
        this.addChild(this.logo);
        this.logo.mask = shapeCircle;

        var distance:number = 6;           /// 阴影的偏移距离，以像素为单位
        var angle:number = 45;              /// 阴影的角度，0 到 360 度
        var color:number = 0x000000;        /// 阴影的颜色，不包含透明度
        var alpha:number = 0.7;             /// 光晕的颜色透明度，是对 color 参数的透明度设定
        var blurX:number = 16;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
        var blurY:number = 16;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
        var strength:number = 0.65;                /// 压印的强度，值越大，压印的颜色越深，而且阴影与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
        var quality:number = egret.BitmapFilterQuality.LOW;              /// 应用滤镜的次数，暂无实现
        var inner:boolean = false;            /// 指定发光是否为内侧发光
        var knockout:boolean = false;            /// 指定对象是否具有挖空效果
        var dropShadowFilter:egret.DropShadowFilter =  new egret.DropShadowFilter( distance, angle, color, alpha, blurX, blurY,
            strength, quality, inner, knockout );
        this.logo.filters = [ dropShadowFilter ]


        this.title = Util.createBitmapByName('title_png');
        this.title.anchorOffsetX = this.title.width / 2;
        this.title.anchorOffsetY = this.title.height / 2;
        this.title.y = -100;
        this.title.x = Width / 2;
        this.title.scaleX = 1.2 ;
        this.title.scaleY = 1.2 
        this.addChild(this.title);
        this.title.filters = [ dropShadowFilter ]

        this.play = Util.createBitmapByName('play_png');
        this.play.anchorOffsetX = this.play.width / 2;
        this.play.anchorOffsetY = this.play.height / 2;
        this.play.y = Height + 100;
        this.play.x = Width / 2;
        this.play.scaleX = 0.7;
        this.play.scaleY = 0.7;
        this.play.touchEnabled = true;
        this.addChild(this.play);

        this.play.filters = [ dropShadowFilter ]

        let texture = RES.getRes("snow_png");
        let config = RES.getRes("snow_json");
        this.system = new particle.GravityParticleSystem(texture, config);
        this.addChildAt(this.system, 0)
        this.system.start()


        this.music = Util.createBitmapByName('music_open_png')
        this.music.width = 80;
        this.music.height = 80;
        this.music.anchorOffsetX = this.music.width / 2;
        this.music.anchorOffsetY = this.music.height / 2;
        this.music.y = -100;
        this.music.x = 60;
        this.music.touchEnabled = true;
        this.addChild(this.music)

        this.music.filters = [ dropShadowFilter ]

        this.play.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playTap, this);
        this.music.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.musicBegin, this);

        this.playEnterAnimation()
    }

    private playEnterAnimation() {
        let Height = this.stage.stageHeight;
        egret.Tween.get(this.logo).to({y: 250}, 400, egret.Ease.sineOut).call(() => {
            egret.Tween.removeTweens(this.logo);
        })

        egret.Tween.get(this.title).to({y: 500}, 400, egret.Ease.sineOut).call(() => {
            egret.Tween.removeTweens(this.title);
            egret.Tween.get(this.title, {loop: true}).to({y: 550}, 3000, egret.Ease.sineInOut).to({y: 500}, 3000, egret.Ease.sineInOut)
        })

        egret.Tween.get(this.play).to({y: Height - 300}, 400, egret.Ease.sineOut).call(() => {
            egret.Tween.removeTweens(this.play);
            

            egret.Tween.get(this.play, {loop: true})
                .wait(8000)
                .to({rotation: 360}, 400, egret.Ease.sineInOut)
                .to({scaleX: 0.78, scaleY: 0.78}, 80)
                .to({scaleX: 0.7, scaleY: 0.7}, 80)
                .to({scaleX: 0.78, scaleY: 0.78}, 80)
                .to({scaleX: 0.7, scaleY: 0.7}, 80)
        })

        egret.Tween.get(this.music).to({y: 60}, 400, egret.Ease.sineOut).call(() => {
            egret.Tween.removeTweens(this.music);
            
        })


    }

    private playTap(): void {
        // egret.Tween.removeTweens(this.play);
        // egret.Tween.removeTweens(this.title);
        let Height = this.stage.stageHeight;

        egret.Tween.get(this.logo).to({y: -100}, 400, egret.Ease.sineOut).call(() => {
            egret.Tween.removeTweens(this.logo);
        })
        egret.Tween.get(this.logo).to({y: -100}, 400, egret.Ease.sineOut).call(() => {
            egret.Tween.removeTweens(this.logo);
        })
        egret.Tween.removeTweens(this.title);
        egret.Tween.get(this.title).to({y: -100}, 400, egret.Ease.sineOut).call(() => {
            egret.Tween.removeTweens(this.title);
        })

        egret.Tween.get(this.play).to({y: Height + 100}, 400, egret.Ease.sineOut).call(() => {
            egret.Tween.removeTweens(this.play);

            this.removeChildren();
            this.parent.removeChild(this);
            this._GameContainer.createGame()
        })

        egret.Tween.get(this.music).to({y: -100}, 400, egret.Ease.sineOut).call(() => {
            egret.Tween.removeTweens(this.music);
            
        })


        
    }



    private musicBegin(): void {
        
        this.music.scaleX = 0.93
        this.music.scaleY = 0.93
        this.music.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.musicEnd, this);
        this.music.addEventListener(egret.TouchEvent.TOUCH_END, this.musicEnd, this);
    }

    private musicEnd(ev): void {
        
        this.music.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.musicEnd, this);
        this.music.removeEventListener(egret.TouchEvent.TOUCH_END, this.musicEnd, this);
        this.music.scaleX = 1;
        this.music.scaleY = 1;
        if(ev.type == egret.TouchEvent.TOUCH_TAP){
            setTimeout(() => {

                this.removeChildren();
                this.parent.removeChild(this);
                this._GameContainer.createGame()
            }, 80)
        }
    }

    private checkoutMusic(): void {
        if(true){
            this.music.texture = RES.getRes('music_close_png')
        }
        
    }
}