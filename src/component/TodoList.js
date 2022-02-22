import React, {PureComponent} from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";
import DashBoradList from "./DashBoradList";
import {getTodo} from "./Action/action";
import BorderApi from "./api/AjaxApi";
import TodoCheckList from "./commoncomponet/TodoCheckList";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Spinner} from "@chakra-ui/react";

const mapStateToProps = (state) => ({
    todo:state.todo,
    Number: state.Number
})
const mapDispatchToProps = dispatch => {
    return {
        getTodo: (data) => dispatch(getTodo(data)),
        addIncrement: () => dispatch({type:'INCREASE_COUNT'})
    };
};

class TodoList extends PureComponent {
    constructor(props) {
        super(props);
        this.state ={
            dashBordData:undefined,
            loading: false,
            checkTodoIsShow: false,
            checkTodo:[]
        };
        this.getTodoId = undefined;
    };

    componentDidMount() {
        BorderApi.getResponseToDo().then(result=>{
            this.props.getTodo(result.todoList);
            this.setState({
                checkTodo: this.state.checkTodo.concat(result.todoCheckList),
                loading: true
            })
        })
    }

    ShowCheckTodoModal = (isShow,todoId) => {
        this.getTodoId = todoId
        this.setState({
            checkTodoIsShow: isShow
        })
    }

    SuccessTodoCheck = (TodoCheckSuccess,todoId) => {
        BorderApi.DeleteItem(todoId ? todoId : this.getTodoId).then((result) => {
            if(result) {
                this.props.history.push("/");
            }
        })
    }

    render() {
        const {loading,checkTodoIsShow} = this.state;
        const TodoWrap = styled.div`
          width:calc(100% - 2%);margin:0 auto; font-family: 'Noto Sans KR', sans-serif;
          display: flex;
          & .loading_tag{
            position: fixed;top:50%;left:50%;
            transform:translate(-50%,-50%);
          }
          & .todo-check-modal{
            position: fixed;top:0;left:0;
            width: 100%;height: 100%;background: rgba(0,0,0,0.5);
            z-index: 200;
          }
        `;


        return (
            <TodoWrap>
                {
                    loading ?
                    <>
                        <DashBoradList history={this.props.history} location={this.props.location} match={this.props.match} dashBoradInfo={this.props.todo}/>
                        <TodoCheckList history={this.props.history} location={this.props.location} match={this.props.match}
                            checkTodoIsSet={(isShow,todoId) => {this.ShowCheckTodoModal(isShow,todoId)}}
                            checkTodoSucces={(TodoCheckSuccess,todoId) => {this.SuccessTodoCheck(TodoCheckSuccess,todoId)}}
                            checkTodo={this.state.checkTodo}
                        />
                        {
                            checkTodoIsShow &&
                            <div className="todo-check-modal">
                                <Modal.Dialog>
                                    <Modal.Header>
                                        <Modal.Title>알림</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>TodoCheck 를 취소하시면 Todo 도 삭제가 됩니다.</p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="primary" onClick={() => this.SuccessTodoCheck(true)}>TodoCheck 를 취소하시겠습니까?</Button>
                                        <Button variant="secondary" onClick={() => this.ShowCheckTodoModal(false)}>취소</Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                            </div>
                        }
                    </>
                        :
                        <div className="loading_tag">
                            <Spinner size='xl' />
                        </div>
                }
            </TodoWrap>
        );
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (TodoList)