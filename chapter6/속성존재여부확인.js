
// 객체 생성
const object = {
    name: '혼자 공부하는 파이썬',
    price: 18000,
    publisher: '한빛미디어'
}

// 속성 여부 확인

if (object.name !== undefined){
    console.log('name 속성이 있습니다.')
}
else{
    console.log('name 속성이 없습니다.')
}

if (object.author !== undefined){
    console.log('author 속성이 있습니다.')
}
else{
    console.log('author 속성이 없습니다.')
}

// simple

if (object.name){
    console.log('name 속성이 있습니다.')
}
else{
    console.log('name 속성이 없습니다.')
}

if (object.author){
    console.log('author 속성이 있습니다.')
}
else{
    console.log('author 속성이 없습니다.')
}

// more simple

object.name || console.log('name 속성이 없습니다.')
object.author || console.log('author 속성이 없습니다.')
