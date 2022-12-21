// 메소드 내에서 자기 자신이 가진 속성을 출력하고 싶을 때는 자기 자신의 가진 속성임을 분명하게 표시해야 한다.  자기 자신이 가진 속성이라는 것을 표시할 떄는 this 키워드를 사용한다.
//  {} 객체 생성 / , 로 구분 key:value
const pet = {
    name: '구름',
    eat: function(food){
        alert(this.name + '은/는' + food + '을/를 먹습니다.')
    }
}

// 메소드 호출
pet.eat('밥')