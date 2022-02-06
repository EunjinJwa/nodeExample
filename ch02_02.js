console.log('argv 속성의 파라미터 수 : %d', process.argv.length);
console.dir(process.argv);  // 객체의 속성정보를 출력할 수 있음 

process.argv.forEach(function(item, index) {
    console.log(index + ' : ' + item);
});