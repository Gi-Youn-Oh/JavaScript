//매개변수로 배열, 숫자 모두 받을 수 있게

const max = function (first, ... rests){
    let output
    let items

    if (Array.isArray(first)){
        output = first[0]
        items = first
    }
    else if (typeof(first) === 'number'){
        output = first
        items = rests
    }

    for (const data of items){
        if (output < data){
            output = data
        }
    }
    return output
}

console.log(`max(배열): ${max[1,2,3,4]}`)
console.log(`max(숫자,...): ${max(1,2,3,4)}`)
