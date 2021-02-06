/*
    # 유명 함수?
    Number
    confirm
    document.write
    prompt : (query string, init val) + sting에 \로 줄 이을 수 있음

    # 논리문
    if
    switch

    # location.href : 해당으로 이동하는 곳인가본데?
                    -> at change, the page is refreshed?
*/


var answer = prompt("if you like Kimchi : 0 else anything!",'0');
var out;


switch(Number(answer)){

    case 0 : out = 'you like kimch, so great!';
    break;

    default : out = 'you dont like kimchi...?! What??';

}

document.write(out, "<br>")
document.write(location.href)
