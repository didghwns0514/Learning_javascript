/*  
################
내장 객체
################
    1)
    참조 변수 instance = new [ Object ]생성함수()
    -> 생성하고 인스턴스에서 속성 추가하는 형식인듯??

    2)
    [ Date ] 생성함수

    3)
    [ Math ] 함수



*/

var tv = new Object();
tv.color = 'white';
tv.price = 30000;
tv.info = function(){
    document.write("tv 색상 : " + this.color, "<br>")
    document.write("tv 색상 : " + this.price, "<br>")
};

var car = {

}