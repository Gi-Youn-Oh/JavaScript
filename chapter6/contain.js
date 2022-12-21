
// contain() 메소드 추가

String.prototype.contain = function (data){
    return this.indexOf(data) >= 0
}

Array.prototype.contain = function (data) {
    return this.indexOf(data) >= 0
}

// string 객체의 contain () 메소드사용
const a = '안녕하세요'
console.log('안녕 in 안녕하세요:', a.contain('안녕')) // true
console.log('없는데 in 안녕하세요', a.contain('없는데')) //false

// Array 객체의 contain () 메소드 사용
const b = [273, 32, 103, 57, 52]
console.log('273 in [273, 32, 103, 57, 52]:', b.contain(273)) // true
console.log('0 in [273, 32, 103, 57, 52]:', b.contain(0)) // false


