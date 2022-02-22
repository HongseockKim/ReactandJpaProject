import React, {Component} from 'react';
import Offcanvas from "react-bootstrap/Offcanvas";
import styled from 'styled-components';
import {dataUpdate, getTodo} from "./Action/action";
import {connect} from "react-redux";
import {Button} from "@chakra-ui/react";
import BorderApi from "./api/AjaxApi";

const mapStateToProps = (state) => ({
    todo:state.todo,
    Number: state.Number,
    todoDetail: state.todoDetail
});
const mapDispatchToProps = dispatch => {
    return {
        getTodo: (data) => dispatch(getTodo(data)),
        addIncrement: () => dispatch({type:'INCREASE_COUNT'})
    };
};

class DashBoradDetail extends Component {
    constructor(props) {
        super(props);
        this.getDetailId = this.getDetailId.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    getDetailId(id){
        this.props.history.push(`/dashbord/:${id}`);
    }

    deleteItem(id){
        BorderApi.DeleteItem(id).then(result=>{
            if(result){
                this.props.history.push("/");
            }
        });
    }

    render() {
        const Div = styled.div`
            margin-top: 300px;
          & button{display: block;width: 100%;background:dodgerblue;color:#fff;}
        `;
        console.log(this.props)
        return (
            <div ket={this.props.todoDetail && this.props.todoDetail.id}>
                <Offcanvas placement={'end'} show={this.props.show} onHide={()=>this.props.onClose(false)}>
                    <Offcanvas.Header closeButton style={{borderBottom: '1px solid #ccc'}}>
                        <Offcanvas.Title>{this.props.todoDetail && this.props.todoDetail.title}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {this.props.todoDetail && this.props.todoDetail.content}
                        <Div className="footer">
                            <Button style={{marginBottom: '20px'}} variant="primary" onClick={()=>this.getDetailId(this.props.todoDetail && this.props.todoDetail.id)}>편집</Button>
                            <Button variant="primary" onClick={()=>this.deleteItem(this.props.todoDetail && this.props.todoDetail.id)}>삭제</Button>
                        </Div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (DashBoradDetail)
