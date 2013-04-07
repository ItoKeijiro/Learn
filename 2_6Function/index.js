//2.6関数
//関数の定義
function buy(device) {
    document.write(device+"を買う<BR>");
}

//関数の利用
buy("iPhone");
buy("Android");

//関数オブジェクトの定義
var sell = function(device) {
    document.write(device+"を売る<BR>");
}//関数をオブジェクトとして利用できる

//関数オブジェクトの利用
sell("iPhone");
sell("Android");