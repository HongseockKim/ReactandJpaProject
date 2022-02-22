import React, {Component} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

class Caleder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
        this.getDate = this.getDate.bind(this);
    }
    getDate(date){
        console.log(date);
    }
    render() {
        const {date} = this.state;
        const FlexBasicTag = styled.div`
          flex-basis: 30%;padding:10px 20px;
          & .calendar{
            width:100%;height:100%;border-radius: 10px;box-shadow: 10px -5px  10px #ccc;
          }
        `;
        return (
            <FlexBasicTag>
                <Calendar className="calendar" onChange={(getDate) => this.getDate(getDate)} value={date}/>
            </FlexBasicTag>
        );
    }
}

export default Caleder;