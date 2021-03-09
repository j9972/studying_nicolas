import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        console.log(this.props);
        const { location, history } = this.props;
        if(location.state === undefined) { 
            history.push("/"); // redirection이라고 해서 undefined이 뜨느 경우에 메인화면으로 돌아가게 만들어준다.
        }
    }
    render() { // 이게 먼저 시작하고 그다음에 componentDidMount시작
        const { location } = this.props;
        if(location.state) {
            return <span>{location.state.title} {location.state.year}</span>
        } else {
            return null;
        }
    }
}

export default Detail;