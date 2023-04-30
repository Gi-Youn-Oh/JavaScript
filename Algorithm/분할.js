/*
분할 : 값 x가 주어졌을 때 x보다 작은 노드들을 x보다 크거나 같은 노드들보다 앞에 오도록 하는 코드를 작성하라.
만약 x가 리스트에 있다면 x는 그보다 작은 원소들보다 뒤에 나오기만 하면 된다.
즉, 원소 x는 오른쪽 그룹 어딘가에 존재하면 된다. 왼쪽와 오른쪽 그룹 사이에 있을 필요는 없다.

input: 1 -> 4 -> 3 -> 2 -> 5 -> 2, x = 3
output: 1 -> 2 -> 2 -> 4 -> 3 -> 5
*/

const {Node, print} = require('./node.js');

let head = new Node(1);
head.next = new Node(4);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(2);

// time: O(n), space: O(1)

function partition(head, x) {
    let dummyLeft = new Node(null);
    let dummyRight = new Node(null);
    let leftP = dummyLeft;
    let rightP = dummyRight;

    while (head) {
        if(head.val < x) {
            leftP.next = head;
            leftP = leftP.next;
        } else {
            rightP.next = head;
            rightP = rightP.next;
        }
        head = head.next;
    }

    leftP.next = dummyRight.next;
    rightP.next = null;

    return dummyLeft.next;
}

print(head);
partition(head, 3);
print(head);
