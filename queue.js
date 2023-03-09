// // Linked-list를 이용한 Queue 구현

// class Node {
//     constructor (data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor () {
//         this.head = null;
//         this.rear = null;
//         this.length = 0; // 노드 길이
//     }

//     // 노드 추가
//     enqueue (data){
//         const node = new Node(data); // data를 가진 노드 생성
//         if (!this.head) {
//             this.head = node; // 헤드가 없을 경우 헤드를 해당 노드로 지정
//         }else {
//             this.rear.next = node; // 아닐 경우 마지막의 다음 노드로 지정
//         }
//         this.rear = node; // 마지막을 해당 노드로 지정
//         this.length++; // 노드 길이 증가
//     }

//     // 노드 삭제
//     dequeue(){
        
//         if (!this.head) {
//             return false; // 헤드가 없으면 다 없다.
//         }
//         const data = this.head.data // 헤드를 헤드의 다음 것으로 바꿔주고 뺸 data를 반환
//         this.head = this.head.next;
//         // this.length--;
//         return data;
//     }

//     // 헤드 반환 함수
//     front() {
//         return this.head && this.head.data;
//     }
//     // 큐의 모든 원소 반환
//     getQueue() {
//         if (!this.head) {
//             return false;
//         }
//         let node = this.head;
//         const array = [];
//         while (node) {
//             array.push(node.data);
//             node = node.next;
//         }
//         return array;
//     }

// }

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);

// console.log('before',queue.getQueue());
// console.log(queue.dequeue());
// console.log('after',queue.getQueue());
// console.log(queue.front());
// console.log('final',queue.getQueue());


// 객체를 이용한 구현
class Queue {
    constructor(){
        this.storage = {}; // 값 저장 객체
        this.front = 0; // 첫 원소를 가리킬 포인터
        this.rear = 0; // 마지막 원소를 가리킬 포인터
    }
    // 크기 구하기
    size () {
        if (this.storage[this.rear] === undefined){ // 마지막 원소가 없다면 배열도 없다.
            return 0;
        }else {
            return this.rear - this.front + 1;
        }
    }
    // 원소 추가
    add (value) {
        // 큐에 데이터가 없을 때
        if (this.size() === 0) {
        // 0번 위치에 값을 넣고 포인터는 건드리지 않는다
        // 이때 ['0']으로 키를 설정한 이유는
        // 자바스크립트 객체 Object는 키 값으로 오직
        // 문자열과 Symbol만 허용하기 때문
        this.storage['0'] = value;
        } else {
        // 큐에 데이터가 있을 때
        // rear 위치를 1만큼 늘리고 해당 위치에 값 삽입
        this.rear += 1;
        this.storage[this.rear] = value;
        }
    }
    popleft() {
        let temp ; // 첫 원소 값 임시로 담을 변수
        // 두 포인터의 값이 같은 경우 (데이터가 1개 남았을 떄)
        // 물론 초기 상태에서 아무런 데이터가 없는 상황일 수도 있으나
        // 이때 front의 값을 가져오고 제거하는 과정에서
        // 자바스크립트 특성 상 에러가 발생하지 않고
        // 두 포인터의 값을 계속 0으로 유지시켜 주기 때문에
        // 별도로 이 부분에 대한 처리를 해줄 필요는 없지만
        // 좀 더 호환성 높은 코드를 위해서는 사실 하는 편을 추천
        if (this.front === this.rear) {
            // 현재 front 에 담긴 값을 가져오고 항상 이 값을 delete 해준다.
            temp = this.storage[this.front];
            delete this.storage[this.front];

            // 데이터가 없는 경우 다시 0으로 초기화
            this.front = 0;
            this.rear = 0;
        }else {
            // 현재 front에 담긴 값을 가져오고
            // 항상 이 값을 delete해준다.
            temp = this.storage[this.front];
            delete this.storage[this.front];
            this.front += 1;
        }
        return temp;
    }
}

const queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(2);
console.log(queue);
console.log(queue.popleft());
console.log(queue);
console.log(queue.popleft());
console.log(queue);
console.log(queue.popleft());
console.log(queue);