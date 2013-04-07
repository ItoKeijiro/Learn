//2.7プロトタイプ
//プロトタイプの生成
function Mascot() {
}//プロトタイプ名「Mascot」

//プロトタイプへのプロパティ追加
Mascot.prototype.name     = "";//「name」プロパティ追加
Mascot.prototype.language = "";//「language」プロパティ追加

//プロトタイプへのメソッド追加
Mascot.prototype.output = function() {
    document.write(this.name+"は"+this.language+"のマスコットです<BR>");
};

//Javaマスコットのオブジェクトの生成
var javaMascot = new Mascot();//Mascotからオブジェクトの生成

//プロパティへの代入
javaMascot.name     = "デューク";
javaMascot.language = "Java";

//メソッドの利用
javaMascot.output();

//Androidマスコットのオブジェクトの生成
var androidMascot = new Mascot();

//プロパティへの代入
androidMascot.name     = "ドロイド";
androidMascot.language = "Android";

//メソッドの利用
androidMascot.output();

//オブジェクトへのプロパティ追加
androidMascot.version = "3.2";

//オブジェクトへのメソッド追加
androidMascot.showVersion = function() {
    document.write("バージョンは"+this.version+"です<BR>");
};

//メソッドの利用
androidMascot.showVersion();