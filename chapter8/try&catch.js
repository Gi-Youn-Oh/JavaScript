try{
    willExcept.byeBye()
    console.log('try 구문의 마지막 줄') // 위에서 예외가 발생되므로 실행되지 않고 catch구문으로 이동
}catch (exception){
    console.log('catch 구문의 마지막 줄')
}finally{
    console.log('finally 구문의 마지막 줄') // 예외 발생 여부와 상관없이 무조건 실행
}