function sports(){
    debugger;
    var player = 11;

    function soccer(){
        return player;
    }
    var swim = function(){
        soccer();
    }
}

sports();

//엔진 처리순서
// sports함수 호출시
// debugger에서 상태가 한번 멈춘다.
// 플레이어와 스윔은 언디파인드, 사커는 함수이다
// 첫번째줄에서 멈추었는데, 사커가 함수오브젝트로 설정된것은, function  soccer(){}문장이 수행된것

// 실행
// 함수호출
// 1.엔진제어가 함수의 선언문을 찾는다
// 2.변수 초기화(현재 변수가 어떤 형태인지 모름)
// 3.함수실행

