import React, {Component} from 'react';
import styled from 'styled-components';

class NewsComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const Div = styled.div`
          flex-basis: 40%;
          text-align: center;
        `;
        return (
            <Div>
                센터 이미지슬라이드 형식으로 무언가 들어갈 예정 ....
            </Div>
        );
    }
}

export default NewsComponent;