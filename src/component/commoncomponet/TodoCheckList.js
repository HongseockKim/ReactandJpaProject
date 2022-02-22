import React, {Component} from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from "react-bootstrap/Modal";

class TodoCheckList extends Component {
    constructor(props) {
        super(props);
    }

    HandleSuccessTodo = (todoId) => {
        this.props.checkTodoSucces(true,todoId);
    }
    HandleCancleTodo = (todoId) => {
        this.props.checkTodoIsSet(true,todoId);
    }

    render() {
        const Div = styled.div`
        flex-basis: 25%;padding: 10px 20px;max-height: 550px;overflow: auto;
        `;
        return (
            <Div>
                {
                    this.props.checkTodo &&
                    this.props.checkTodo.map((todoCheck) => {
                        console.log(todoCheck)
                        return(
                            <Card key={todoCheck.id} style={{boxShadow: '0 0 10px #ccc',marginTop: '20px'}}>
                                <Card.Header style={{fontWeight: 'bold'}}>Check! Todo!!</Card.Header>
                                <Card.Body>
                                    <Card.Title>Todo</Card.Title>
                                    <Card.Text style={{padding: '15px'}}>
                                        {todoCheck.todoCheck}
                                    </Card.Text>
                                    <Button onClick={() => {this.HandleSuccessTodo(todoCheck.todoId)}}  variant="primary" style={{marginRight: '10px'}}>완료!</Button>
                                    <Button onClick={() => {this.HandleCancleTodo(todoCheck.todoId)}} variant="danger">취소</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </Div>

        );
    }
}

export default TodoCheckList;