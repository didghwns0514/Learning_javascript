/*

    # 특이 케이스?
    # 글자 빨강 / 파랑으로 출력
    <p class='blue> value </p> -> painter tag??
    https://stajun.tistory.com/entry/HTML-%ED%83%9C%EA%B7%B8-%EC%A0%95%EB%A6%AC
    -> <p> tag로 단락 지정 후, style='color:red' 등으로 사용

    # if문 한줄쓰면 중괄호 없이 구현 가능


*/

var i = 0;

while(i<20){

    document.write(String(i) + 'th iteration','<br>');

    if(i % 2 == 0){
        document.write("<p style='color:blue'>" + String(i) + "</p>");
    } else {
        document.write("<p style='color:red'>" + String(i) + "</p>");
    }

    // next line
    document.write('<br>');
    i += 1;

}