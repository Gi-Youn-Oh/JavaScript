var 제목 = document.querySelector('#title');
// 제목.innerHTML = '반가워요'; // type이 element | null 이기 때문에 오류가 발생한다. (union type)
//narrowing
// 1. 조건문
if (제목 != null) {
    제목.innerHTML = '반가워요';
}
// 2. instanceof 많이 사용
if (제목 instanceof HTMLElement) {
    제목.innerHTML = '반가워요';
}
// 3. as ~로 간주 타입 확정 확신할 때 사용
var 제목2 = document.querySelector('#title');
제목2.innerHTML = '반가워요';
// 4. ?. (옵셔널 체이닝) null이 아닐 때만 실행
if ((제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) != undefined) {
    제목.innerHTML = '반가워요';
}
// 5. stict mode 끄기
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) { // 정확한 html요소에 접근
    링크.href = 'https://www.naver.com';
}
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () { });
