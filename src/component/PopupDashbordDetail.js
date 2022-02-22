import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from "styled-components";
import BorderApi from "./api/AjaxApi";
import {Spinner, Text} from "@chakra-ui/react";
import {CloseIcon} from "@chakra-ui/icons";
import Button from "react-bootstrap/Button";

class PopupDashbordDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dashBordInfo: undefined
        }
        this.closePopup = this.closePopup.bind(this);
    }
    componentDidMount() {
        //라우터 로 탄 ID 값 으로 데이터 불러옴
        const paramId = this.props.location.pathname.substring(this.props.location.pathname.indexOf(':') + 1);
        BorderApi.getDashboardDetail(paramId).then(result => {
            this.setState({
                dashBordInfo:result
            })
        })
    }

    // 팦업 닫기
    closePopup(){
        this.props.history.push('/')
    }


    render() {
        const {dashBordInfo} = this.state;
        const PopupHeader =styled.div`
          border-bottom: 1px solid #ccc;box-sizing: border-box;
          font-size:1vw;font-weight:bold;background:#3a86ff;color:#fff;
          & .row{
            padding:10px 5px; position: relative;
            & .close-btn{
              position: absolute;right:30px;
            }
          }
        `;

        return (
            dashBordInfo ?
                <Container fluid style={{padding: 0}}>
                    <PopupHeader>
                        <Row>
                            <Col>제목 : {dashBordInfo.todoTitle}</Col>
                            <Col>
                                <Button variant="light" className='close-btn' onClick={this.closePopup}>
                                    <CloseIcon/>
                                </Button>
                            </Col>
                        </Row>
                    </PopupHeader>
                    <div className='popup-body' style={{padding: '30px 10px'}}>
                        <Row>
                            <Col>
                                {
                                    dashBordInfo.todoData ?
                                        <Text fontSize='3xl'>{dashBordInfo.todoData}</Text>
                                        :
                                        <Text fontSize='3xl'>조회된 데이터가 없습니다.</Text>
                                }
                            </Col>
                        </Row>
                    </div>
                </Container>
                :
                <Spinner />
        );
    }
}

export default PopupDashbordDetail;