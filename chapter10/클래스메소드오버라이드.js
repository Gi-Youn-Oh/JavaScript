class App extends React.Component{
    constructor (props){
        super(props)
        //생성자 코드
    }

    render(){
        // 출력할 것
    }

    // 컴포넌트가 내부적으로 특정상황에 호출 라이프사이클 메소드
    componentDidMount(){
        //컴포넌트가 화면에 출력될 때 호출
    }

    componentWillUnmount(){
        // 컴포넌트가 화면에서 제거될 때 호출
    }
}

//상태 선언하기 (생성자 위치)
this.state = {속성: 값}
//상태 변경하기 (이외의 위치)
this.MediaStreamAudioDestinationNode({변경할 속성: 값})