// 블록의 가장 위쪽에 'use strict' 

'use strict'

data = 10
console.log(data)

// 일반모드에서는 괜찮지만 엄격모드에서는 let으로 변수선언을 해야 통과

// 해당 블록에만 엄격모드 사용하기
(function(){
    'use strict'
    문장
    문장
})()