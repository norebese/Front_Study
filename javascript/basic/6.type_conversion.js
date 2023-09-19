/**
 * 타입변환
 * Type Conversion
 */
/**
 * 1) 명시적
 * 2) 묵시적
 */

let age = 45;

//명시적
let strAge = age.toString();
console.log(typeof strAge);

//묵시적
let tmp = age + "";
console.log(typeof tmp);

console.log('98' + '2'); //982
console.log('98' - 2); //96

/**
 * 명시적 형변환 예시
 */

console.log((99).toString());
console.log((true).toString());
console.log((infinity).toString());

//숫자타입으로 변환
console.log(parseInt ('0'));
console.log(parseFloat ('1.12'));
console.log(+'0');

//Boolean

console.log(!!'jiwon'); //true
console.log(!!''); //false->true->false
console.log(!![]); //오브젝트는 무조건 true

console.log({name : 'jiwon'}=={name : 'jiwon'}) //오브젝트 ==비교하면 무조건 false 나옴
//비교하려면 .name을 써서 안의 내용을 비교하면 된다