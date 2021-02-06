/*
    1) 한줄에 1 코드 원칙, ;으로 end 지정가능, 한번에 쓰면 오류날 수 있다
    2) 자바 스크립트 대소문자 구분 후 작성??
    3) 파이썬과 동일하게 ' " 를 감싸서 구분지어서 사용해야 함
    4) 변수 삭제하려면 null 대임
    5) var 변수 기준 생성만 하면 undefined로 대입된다
*/

/*  
    1)document.write(var, var2,...) output as stream
    2) <br> => line break
*/


// document write example
document.write("환영합니다",'<br>'); // script 밑에 위치하면 ; 붙여주는듯?

// string as tag
var str = "<table border='1'>";
str += '<tr>';
str += '<td>1</td><td>2</td><td>3</td>';
str += '</tr>';
str += '</table>';
document.write(str, '<br>');

// if in one line

var cmp_1 = 10;
var cmp_2 = 11;

var cmp_res = cmp_1 > cmp_2 ? "javascript" : "hi";
document.write(cmp_res, "<br>")