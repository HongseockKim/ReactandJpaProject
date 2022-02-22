import React, {Component} from 'react';
import {
    Box,
    Button,
    Container,
    Heading, Text

} from '@chakra-ui/react'
import styled from 'styled-components';
import { Flex, Spacer } from '@chakra-ui/react'
import DashbordTodoReg from "./DashbordTodoReg";
import Dialog from "./commoncomponet/Dialog";


class DashbordHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionType: false,
            isSet: false
        }
        this.openPopupDialog = this.openPopupDialog.bind(this);
        this.saveDashBoradDataIsSet = this.saveDashBoradDataIsSet.bind(this);
        this.todoListData = this.todoListData.bind(this);
    }

    /**
     * Todos 등록 오픈 팦없
     * @param actionType
     */
    openPopupDialog(actionType) {
        this.setState({
            actionType:actionType
        });
    }

    saveDashBoradDataIsSet(isSet){
        this.setState({
            isSet
        });
    }

    todoListData(todo){
        this.props.todoData(todo);
    }

    render() {
        const Header = styled.header`position:relative;border-bottom: 1px solid dimgray;background-color:#4A5568;color:#fafafa; & .nav-wrap{margin-left: 50px;}`;
        const {actionType}= this.state;
        return (
            <>
                <Header>
                    <Container className="header-inner" maxW='container.xl' maxW='3x1' padding='4'>
                        <Flex alignItems='center'>
                            <Heading flexBasis='250'>My! Dashbord </Heading>
                            <Box className='nav-wrap' flexBasis='calc(100% - 250)'>
                                <Button colorScheme='blue' onClick={() => this.openPopupDialog(true)}>
                                    <Text fontSize='2xl'>Todo 등록</Text>
                                </Button>
                            </Box>
                        </Flex>
                    </Container>
                </Header>
                {
                    actionType &&
                    <Dialog
                        title={'Todo 등록'}
                        onClose={() => this.openPopupDialog()}
                    >
                        <DashbordTodoReg history={this.props.history} location={this.props.location} match={this.props.match} todoList={this.todoListData} saveIs={this.saveDashBoradDataIsSet}/>
                    </Dialog>
                }
            </>
        );
    }
}

export default DashbordHeader;