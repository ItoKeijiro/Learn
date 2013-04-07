//enchantの初期化
enchant();

//HTML読み込み完了時に実行する処理
window.onload = function(){
    //ゲームオブジェクトの生成
    var game = new Game(320,320);
    
    //画像の読み込み
    game.preload('http://enchantjs.com/assets/images/chara1.gif');
    
    //画像読み込み完了時に実行する処理
    game.onload = function(){
        //スプライトの生成
        var bear = new Sprite(32,32);
        bear.image =
            game.assets['http://enchantjs.com/assets/images/chara1.gif'];
        bear.frame = 4
        
        //フレームごとの定期処理
        bear.addEventListener(Event.ENTER_FRAME, function() {
                              this.x += 3; //3
                              });
        
        //表示オブジェクトツリーに追加
        game.rootScene.addChild(bear);
    };
    game.start();
}