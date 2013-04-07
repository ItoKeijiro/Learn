//2.4条件分岐
//変数の定義
var ran;
var num;
var textIf      = "";
var textSwithch = "";

//乱数の取得 0から3の整数値をnumに
ran = Math.random()*4;//0～1の範囲の乱数×4
num = Math.floor(ran);//小数点以下切り捨て

//ifによる占い
if (num==0) {
    textIf = "大吉";
} else if (num==1) {
    textIf = "中吉";
} else if (num==2) {
    textIf = "小吉";
} else {
    textIf = "凶";
}

//switchによる占い
switch (num) {
    case 0:
        textSwithch = "大吉";
        break;
    case 1:    
        textSwithch = "中吉";
         break;
    case 2:    
        textSwithch = "小吉";
        break;
    default:    
        textSwithch = "凶";
        break;
}

//表示
document.write("ifによる占い結果:"+textIf+"<BR>");
document.write("switchによる占い結果:"+textSwithch+"<BR>");