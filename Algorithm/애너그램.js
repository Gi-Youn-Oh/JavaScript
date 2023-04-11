// 두 단어의 글자 나열 순서는 다르지만, 구성이 일치할 시  애너그램이라고 한다.

const stringA = 'listen';
const stringB = 'silent';

// 1. split, sort, join 활용
// 'listen' -> split() -> ['l', 'i', 's', 't', 'e', 'n'] -> sort() -> ['e', 'i', 'l', 'n', 's', 't'] -> join() -> 'eilnst'

function isAnagram(strA, strB) {
    if(strA.length !== strB.length){
        return false;
    }
    return strA.split("").sort().join() === strB.split("").sort().join();
}

console.log(isAnagram(stringA,stringB));

// 2. hash map 활용

function isAnagram(strA, strB) {
    if(strA.length !== strB.length){
        return false;
    }
    const hashMap = {}
    for (const char of strA) {
        // {l:1, i:1, s:1}
        hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
    }
    console.log(hashMap)
    for (const char of strB) {
        if(!hashMap[char]){
            return false;
        }
        hashMap[char] --;
    }
    return true;
}
