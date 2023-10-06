/**
 * Scope
 */

var number1 = 20;

function test1(){
    console.log(number1);
}

// test1();

function test2(){
    var number1 = 40;
    console.log(number1)
}

// test2();

function test4(){
    var number2 = 11;

    console.log('number2 : '+ number2);
    console.log('number1 : '+ number1);
}

function test3(){
    var number1 = 40;
    test4();
    console.log('number1 : '+ number1);
}
 
test3(); //number2 : 11 number1 : 20 number1 : 40

/**
 * JS -> Lexical Scope
 * 선언된 위치가 상위 스코프를 정한다. 정적 스코프
 * 
 * Dynamic Scope
 * 실행한 위치가 상위 스코프를 정한다.
 */

// var i =1000;
// for(var i = 0; i < 10; i++){
//     console.log(i)
// }

// console.log("i= "+i); //1000 아니라 10 나옴, 함수 안에서만 정적 스코프 함

i =1000;
for(let i = 0; i < 10; i++){
    console.log(i)
}

console.log("i= "+i); //1000 , let은 전역에서 다시 검사함

/**
 * var 키워드는 함수레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수레벨 스코프와 블록레벨{} 스코프를 만들어낸다.
 */

