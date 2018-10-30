class BackgroundContainer extends BaseUILayer{
	
	private particle: particle.GravityParticleSystem;

	public constructor() {
		super()
	}



	protected init(){
		console.log('BackgroundContainer已加载')
		// 初始化背景

		// let shape = new BaseShape(this.stage.stageWidth, this.stage.stageHeight);
		// shape.graphics.beginFill(0x222222);
		// shape.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
		// shape.graphics.endFill();
		// this.addChild(shape)

		let sky = new NetBitmap('resource/game_res/loadingbg.jpg')//'https://static01.coloros.com/bbs/data/attachment/forum/201312/27/174621xzs8lj9gzi28npu2.jpg'

        
	}


}