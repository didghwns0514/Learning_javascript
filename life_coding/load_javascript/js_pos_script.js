

// script를 header에 위치해있더라도 사용하는 방법
// window.onload => 모든 장치가 준비가 되면... onload를 실행하도록 예약되어있음
// 그때 실행하도록 해서 에러가 나타나지 않음
// ---> 그 시점에 hw 태그를 찾을 수 있게 되는 것
/*
    body 밑에 script를 넣어놓으면
    브라우저 로딩이 모두 끝나고 js가 실행되어서
    사용자 경험 면에서 더 좋은 방식... 웬만하면 bodytag 밑에 넣어놓을 것
*/
window.onload = function(){
    var hw = document.getElementById('hw');
    hw.addEventListener('click', function(){
        alert('Hello world');
    })
}
