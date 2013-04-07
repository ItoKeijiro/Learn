//2.2オブジェクト
//オブジェクトの生成
var date = new Date();

//年月日の取得
var y = date.getFullYear();
var m = date.getMonth() + 1;
var d = date.getDate();

//文字列の生成
var text = "年月日 "+y+"/"+m+"/"+d;

//表示
document.write(text);