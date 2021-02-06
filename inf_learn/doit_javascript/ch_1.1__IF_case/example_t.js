/*
    # 유명 함수?
    Number
    confirm
    document.write
    prompt : (query string, init val) + sting에 \로 줄 이을 수 있음

    # 논리문
    if
    switch
*/


var UserInput;
var UserInput_w;

/*
while (UserInput !== "x"){
    UserInput = prompt("input Height", 173);
    UserInput_w = prompt("input weight", 60);

    var calc_res = (Number(UserInput) - 100) * 0.9;

    var result = UserInput < calc_res + 5 && UserInput > calc_res - 5;

    var out = result ? "적정 체중입니다 ": "과체중입니다"

    document.write(out, '<br>')
}
*/
UserInput = prompt("input Height", 173);
UserInput_w = prompt("input weight", 60);

var calc_res = (Number(UserInput) - 100) * 0.9;

var result = UserInput < calc_res + 5 && UserInput > calc_res - 5;

var out = result ? "적정 체중입니다 ": "과체중입니다"

document.write(out, '<br>')