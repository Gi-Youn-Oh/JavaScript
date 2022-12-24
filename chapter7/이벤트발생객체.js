// 코드의 규모가 커지면 이벤트 리스너를 외부로 분리하는 경우가 많아진다.
// 1. event.currentTarget 속성 사용
//  ()=>{}   /  function () {} 둘다 가능

// 2. this  키워드 사용
// function () {} 만 가능

//방법 1
const listener = (event) => {
    const length = event.currentTarget.value.length // event.currentTarget이 textarea가 된다.
    h1.textContent = `글자 수: ${length}`
}

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('textarea')
    const h1 = document.querySelector('h1')
    textarea.addEventListener('keyup',listener)
})

// 방법 2
const listener = (event) => {
    const length = this.value.length // this가 textarea가 된다.
    h1.textContent = `글자 수: ${length}`
}

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('textarea')
    const h1 = document.querySelector('h1')
    textarea.addEventListener('keyup',listener)
})