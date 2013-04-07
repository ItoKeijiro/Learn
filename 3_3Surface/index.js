//3.3サーフェイスの利用
enchant();
window.onload = function() {
    //ゲームオブジェクトの生成
    var game = new Game(320, 320);
    game.fps = 16;
    
    //サーフェイスに色指定メソッドの追加
    Surface.prototype.setColor = function(color) {
        this.context.strokeStyle = color;
        this.context.fillStyle   = color;
    };
    
    //サーフェイスにライン描画メソッドの追加
    Surface.prototype.drawLine = function(x0, y0, x1, y1) {
        this.context.beginPath();
        this.context.moveTo(x0, y0);
        this.context.lineTo(x1, y1);   
        this.context.stroke();
    };

    //サーフェイスに四角形描画メソッドの追加
    Surface.prototype.drawRect = function(x, y, w, h) {
        this.context.beginPath();
        this.context.rect(x, y, w, h);
        this.context.stroke();
    };

    //サーフェイスに四角形塗り潰しメソッドの追加
    Surface.prototype.fillRect = function(x, y, w, h) {
        this.context.beginPath();
        this.context.rect(x, y, w, h);
        this.context.fill();
    };

    //サーフェイスに円描画メソッドの追加
    Surface.prototype.drawCircle = function(x, y, r) {
        this.context.beginPath();
        this.context.arc(x, y, r, 0, Math.PI * 2, true);
        this.context.stroke();
    };

    //サーフェイスに円塗り潰しメソッドの追加
    Surface.prototype.fillCircle = function(x, y, r) {
        this.context.beginPath();
        this.context.arc(x, y, r, 0, Math.PI * 2, true);
        this.context.fill();
    };    
    
    //サーフェイスの追加
    game.addSurface = function(type, color, x, y) {
        //サーフェイスの生成
        var surface = new Surface(50, 50);
        
        surface.setColor(color);
        if (type == 0) surface.drawLine(0, 25, 50, 25);
        if (type == 1) surface.drawRect(0, 0, 50, 50);
        if (type == 2) surface.fillRect(0, 0, 50, 50);
        if (type == 3) surface.drawCircle(25, 25, 20);
        if (type == 4) surface.fillCircle(25, 25, 20);
        
        //スプライトの生成
        var sprite = new Sprite(50, 50);
        sprite.image=surface;
        sprite.x = x;
        sprite.y = y;
        game.rootScene.addChild(sprite);
        
        //スプライトの定期処理
        sprite.tick = 0;
        sprite.addEventListener(Event.ENTER_FRAME, function() {
            sprite.tick ++;
            sprite.scaleX += 0.1;
            sprite.scaleY += 0.1;
            
            //スプライトの削除
            if (sprite.tick > 10) game.rootScene.removeChild(sprite); 
        });
    };
    
    //シーンの定期処理
    game.tick = 0;
    game.rootScene.addEventListener(Event.ENTER_FRAME, function() {
        game.tick++;
        if ((game.tick % 3) === 0) {
            var type = rand(5);
            var r    = rand(256);
            var g    = rand(256);
            var b    = rand(256);
            var x    = rand(220);
            var y    = rand(220);
            game.addSurface(type, "rgb(" + r + "," + g + "," + b + ")", x, y);
        }        
    });

    //ゲームの開始
    game.start();
};

//乱数の生成
function rand(num){
    return Math.floor(Math.random() * num);
}
