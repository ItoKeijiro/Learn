//3.1ラベルの利用
enchant();
window.onload = function() {
    //ゲームオブジェクトの生成
    var game = new Game(320, 320);
    
    //FPSの指定
    game.fps = 16;//1s16フレーム
    
    //ラベルの追加
    game.addLabel = function(text, color, x, y) {
        //ラベルの生成
        var label = new Label(text);
        label.font  = "16px monospace";//16ピクセル幅
        label.color = color;           //文字色
        label.x     = x;               //x座標
        label.y     = y;               //y座標
        game.rootScene.addChild(label);//ラベル追加
        
        //ラベルの定期処理
        label.tick = 0;
        label.addEventListener(Event.ENTER_FRAME, function() {
            label.y --;    //ラベル上方向に移動
            label.tick ++;
            
            //ラベルの削除
            if (label.tick > 10) game.rootScene.removeChild(label); 
        });
    };

    //シーンの定期処理
    game.tick = 0;
    game.rootScene.addEventListener(Event.ENTER_FRAME, function() {
        if ((game.tick % 3) === 0) {//3フレームごとに
            var score = rand(100);
            var r     = rand(256);
            var g     = rand(256);
            var b     = rand(256);
            var x     = rand(300);
            var y     = rand(300);
            game.addLabel(score+"点", "rgb("+r+","+g+","+b+")", x, y);
        }
        game.tick++;
    });

    //ゲームの開始
    game.start();
};

//乱数の生成
function rand(num){
    return Math.floor(Math.random()*num);
}