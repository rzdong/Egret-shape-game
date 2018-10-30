class GameContainer extends BaseUILayer {
    public home: Home;
    public game: Game;
    constructor(){
        super()
    }


    protected init(){
        console.log('GameContainer已加载')


        this.home = new Home(this);
        this.addChild(this.home);


        // 初始化游戏层
        
        
    }

    public createGame(): void {
        if(this.contains(this.game)){
            this.removeChild(this.game)
        }
        this.game = new Game(this);
        this.addChild(this.game)
    }

    

    public createHome(): void {
        if(this.contains(this.home)){
            this.removeChild(this.home)
        }
        this.home = new Home(this);
        this.addChild(this.home)
    }

}