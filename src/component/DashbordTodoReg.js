import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Input, InputGroup, Stack, Text, Textarea, Checkbox} from "@chakra-ui/react";
import BorderApi from "./api/AjaxApi";
import {getTodo} from "./Action/action";

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


class DashbordTodoReg extends Component {
    constructor(props) {
        super(props);
        this.TodoRegister = this.TodoRegister.bind(this);
        this.check = false;
    }

    TodoRegister(){
        const t = this.refs;

        const DashbordData ={
            dashbordDataTodo :{
                todoTitle: t.todoTitle.value,
                todoData: t.todoData.value,
                todo: this.check
            }
        }

        BorderApi.requestTodoContent(DashbordData).then(result => {
            if(result) {
                this.props.history.push("/");
            }
        });

    }

    render() {
        const subminBtnWrap = {position: 'fixed', bottom:0, left:'50%', transform: 'translateX(-50%)', width: '250px', padding: '10px 30px'}
        const regWrapper = {padding: '10px', zIndex: '999',background:'#fff'}

        return (
            <>
                <div style={regWrapper}>
                    <Stack spacing={3}>
                        <InputGroup>
                            <Text fontWeight={'extrabold'} mb='30px'  minW='100' minH='10' lineHeight='10'>Todo Title</Text>
                            <Input ref='todoTitle' borderColor={'#474954'} type='tel' placeholder='Todo Title' />
                        </InputGroup>
                        <InputGroup>
                            <Text fontWeight={'extrabold'} mb='30px'  minW='100' minH='10' lineHeight='10'>Todo</Text>
                            <Textarea height={'200px'} ref='todoData' placeholder='Todo' />
                        </InputGroup>
                        <div style={{marginTop: '20px', textAlign:'center'}}>
                            <Checkbox colorScheme='green' ref='todoCheck' onChange={(check) => this.check = check.target.checked}>
                                Todo 등록
                            </Checkbox>
                        </div>
                    </Stack>
                    <div className='submin-btn-wrap' style={subminBtnWrap}>
                        <Stack spacing={3}>
                            <Button  className='submit-button' onClick={this.TodoRegister} colorScheme='blue'> <Text fontSize='2xl'>Todo 등록</Text></Button>
                        </Stack>
                    </div>
                </div>
            </>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (DashbordTodoReg)
