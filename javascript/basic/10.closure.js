/**
 * Closure
 * 
 * "클로져는 어떤 함수와 해당함수가 선언된 정적 환경의 조합이다"
 * 
 * "내부 함수에서 외부 함수의 변수를 사용할 때 우리는 클로저라고 한다"
 * (상위 함수보다 하위함수가 더 오래 살아있는 경우)
 */

function getNumber(){
    let number = 5;

    function inner(){
        number++
        return number;
    }
    return inner; 
}

let run = getNumber()

console.log(run()) //6
console.log(run()) 
console.log(run()) 
console.log(run()) 

const initData = {
    loginUser : {
        name : '최지원'
    }
}