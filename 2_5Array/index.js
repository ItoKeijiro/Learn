//2.5配列
//配列の生成
var array = new Array(3);
array[0] = "iPhone";
array[1] = "Android";
array[2] = "パソコン";

//配列の出力テキストの生成
var textArray = "";
for (var i=0; i<array.length; i++) {
    textArray += array[i]+"<BR>";//テキストに改行含む
}

//連想配列の生成
var obj = new Object();
obj["apple"]     = "iPhone";
obj["google"]    = "Android";
obj["microsoft"] = "パソコン";

//連想配列の出力テキストの生成
var textObj = "";
textObj += obj["apple"]+"<BR>";
textObj += obj["google"]+"<BR>";
textObj += obj["microsoft"]+"<BR>";

//出力テキストの表示
document.write(textArray+"<BR>");
document.write(textObj+"<BR>");