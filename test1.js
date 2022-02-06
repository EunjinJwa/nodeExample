console.log('Hello kk');

console.log('숫자입니다. %d', 33);
console.log('문자열입니다. %s', '안녕안녕');

var person = {
    name: 'Kassy',
    age: 31
};
console.log('자바스크립트 객체입니다. %j', person);

console.dir(person);    // dir : 객체를 담는 함수 


console.time('duration_time');
var result = 0;
for (var i = 0; i < 10000; i++) {
    result += i;
}
console.timeEnd('duration_time');


console.log('file name : %s', __filename);
console.log('Path : %s', __dirname);


