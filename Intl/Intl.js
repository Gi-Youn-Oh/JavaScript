// 1. 숫자 간결하게 표시

const views= 9744642;

const formatter = new Intl.NumberFormat('ko');
formatter.format(views); // 9,744,642
const formatter1 = new Intl.NumberFormat('ko', {notation: 'compact'});
formatter1.format(views); // compact 974만
const formatter2 = new Intl.NumberFormat('en', {notation: 'compact', compoactDisplay: 'long'});
formatter2.format(views); // 9,7 million
// 사용자 언어 따라 
// const formatter3 = new Intl.NumberFormat('naviagtor.language', {notation: 'compact', compoactDisplay: 'long'});

// 2. 가격 간결하게

const price = 10000;

const formatPrice = new Intl.NumberFormat('ko', {style: 'currency', currency: 'KRW'});
formatPrice.format(price); // 10,000원

// 3. 상대시간 표시 (1분전, 1시간전, 1일전)

const formatTime = new Intl.RelativeTimeFormat('ko');
formatTime.format(1, 'day'); // 1일 전
formatTime.format(-1, 'day'); // 1일 후
const formatTime2 = new Intl.RelativeTimeFormat('en', {numeric: 'auto'});
formatTime2.format(1, 'day'); // tomorrow
formatTime2.format(-1, 'day'); // yesterday

// ex
const formatPass = new Intl.RelativeTimeFormat('ko', {numeric: 'auto'});
const today = new Date();
const started = new Date(2023, 03, 20);
// 1000: 1초를 밀리초(ms) 단위로 변환하기 위한 값
// 60: 1분을 초 단위로 변환하기 위한 값
// 60: 1시간을 분 단위로 변환하기 위한 값
// 24: 1일을 시간 단위로 변환하기 위한 값
const daysPassed = Math.ceil((started-today) / (1000 * 60 * 60 * 24));
console.log(`날짜 측정 경과: ${formatPass.format(daysPassed, 'day')}`)

// moment.js or timeago.js recommended

// 4. 날짜 / 시간 제대로 포맷하기

const date = new Date(2022, 10, 12); // 2022년 11월 12일
date.toString(); // "Mon Nov 12 2022 00:00:00 GMT+0900 (대한민국 표준시)"
new Intl.DateTimeFormat('ko').format(date); // "2022. 11. 12."

// 축약
date.toLocaleDateString('ko'); // "2022. 11. 12."
date.toLocaleDateString('ko', {
    minute: 'numeric',
    hour: 'numeric',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    weekday: 'long',
}); // "2022년 11월 12일 목요일 오후 12:00"
