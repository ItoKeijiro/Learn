//2.3繰り返し
//変数の定義
var i;
var sumFor;  //forによる計算結果
var sumWhile;//whileよにる計算結果

//forによる計算
sumFor = 0;              //sumForに0を代入
for(i=1; i<=1000; i++){ //iが1から1000になるまで
    sumFor = sumFor + i;//sumForの加算を繰り返す
}

//whileによる計算
sumWhile = 0;                //sumWhileに0を代入
i=1;                         //iに1を代入
while(i <= 1000){           //iが1から1000になるまで
    sumWhile = sumWhile + i;//sumWhileへの加算を繰り返す
    i++;                    //iに1を加算
}

//表示
document.write("forによる計算結果:"+sumFor+"<BR>");
document.write("whileによる計算結果:"+sumWhile+"<BR>");