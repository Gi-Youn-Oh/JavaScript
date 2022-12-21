const multiplyAll = function(a, b){
    let output = 1
    for (let i = a; i <= b; i ++){
        output *= i
    }
    return output
}

console.loge(multiplyAll(1, 2))
console.loge(multiplyAll(1, 3))
