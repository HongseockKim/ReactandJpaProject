import './App.css';
import React, {Component} from 'react';
import styled from 'styled-components';
import {Container} from '@chakra-ui/react'
import {Tab, Tabs} from 'react-bootstrap'
import DashbordHeader from "./component/DashbordHeader";
import TodoList from "./component/TodoList";
import Chart from "./component/chart/Chart";
import Caleder from "./component/commoncomponet/Caleder";
import NewsComponent from "./component/commoncomponet/NewsComponent";


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Div = styled.div`
          position:fixed;top:0;left:0;width:100%;height:100%;
          background:#EFEFEF;
          font-family: 'Noto Sans KR', sans-serif;
          & .main-wrapper{
            position: absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:0;
            width:99%;height:99%;box-shadow: 0 0 10px #282c34;border-radius: 6px;overflow:hidden;
            & .list-wrapper{overflow-y: scroll;height:100%;}
          }
        `;
        const FlexTag = styled.div`
          display:flex;padding: 10px 0;border-bottom: 1px solid #ccc;
        `
        return (
            <Div>
                <Container className="main-wrapper" bg='#EFEFEF' maxW='3x1'>
                    <div className='list-wrapper'>
                        <DashbordHeader history={this.props.history} location={this.props.location} match={this.props.match} todoData={this.todoData}/>
                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 tab-list">
                            <Tab eventKey="home" title="TodoList">
                                <Container padding='4' maxW='3x1' height={'100%'}>
                                    <FlexTag>
                                        <Chart/>
                                        <NewsComponent/>
                                        <Caleder/>
                                    </FlexTag>
                                    <TodoList ref={'todoList'} history={this.props.history} location={this.props.location} match={this.props.match}/>
                                </Container>
                            </Tab>
                            <Tab eventKey="profile" title="New NEWS">
                                <Container padding='4' maxW='3x1' overflowY={'scroll'} height={'100%'}>
                                    2
                                </Container>
                            </Tab>
                            <Tab eventKey="contact" title="Contact">
                                <Container padding='4' maxW='3x1' overflowY={'scroll'} height={'100%'}>
                                    3
                                </Container>
                            </Tab>
                        </Tabs>
                    </div>
                </Container>
            </Div>
        );
    }
}
export default Main

