import React, {Component} from 'react';
import styled from 'styled-components';
import {Text, Button} from "@chakra-ui/react";

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.closeOpenPopup = this.closeOpenPopup.bind(this);
    }

    closeOpenPopup(){
        this.props.onClose(false);
    }
    render() {
        const DialogContainer = styled.div`
          position:absolute;top:50%;left:50%;
          transform: translate(-50%,-50%);min-width:${this.props.width ?  this.props.width : '1000px'};min-height:${this.props.height ? this.props.height : '850px'};
          width:${this.props.width ?  this.props.width : '1000px'};height:${this.props.height ? this.props.height : '850px'};
          background: #fff;box-shadow:0 0 10px #333333;z-index: 999;
          & .dialog-header{
            position: relative;top:0;left:0;min-height:70px;line-height:70px;height:70px;padding: 0 5px;
            background-color:#3454d1;color:#fafafa;
            & .close-dialog-btn{
              position:absolute;top:50%;transform: translateY(-50%);right:10px;
            }
          }
        `;
        return (
            <DialogContainer>
                <div className='dialog-header'>
                    <Text fontSize='3xl'>{this.props.title ? this.props.title : '제목을입력해주세요'}</Text>
                    <Button onClick={() => this.closeOpenPopup()} className='close-dialog-btn' colorScheme='blue'>X</Button>
                </div>
                <div className='dialog-body'>
                    {this.props.children}
                </div>
            </DialogContainer>
        );
    }
}

export default Dialog;