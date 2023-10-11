/**
 * 비동기 프로그램밍
 */

function work(){
    const now = new Date(); //현재시간

    /**
     * 밀리세컨초
     * 모든 Date객체는 1970년도 1월 1일 부터 지금 코드가 실행한 순간까지의 시간을
     * 밀리초로 반환한다.
     */
    const millisecond = now.getTime(); // 지금시간을 밀리세컨초로 바꾼 것
    const afterMilliSecond = millisecond + 3000; //지금으로부터 2초뒤

    while(new Date().getTime() <= afterMilliSecond){

    }

    console.log("완료")
}

console.log("코드 시작")
work();
console.log("끝")

function work2(){
    setTimeout(function(){
        console.log("완료")
    },3000)
}

console.log("코드 시작")
work2();
console.log("끝")