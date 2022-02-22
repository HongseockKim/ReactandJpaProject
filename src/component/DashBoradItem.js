import React, {Component} from 'react';
import styled from "styled-components";
import DashBoradDetail from "./DashBoradDetail";
import {withRouter} from "react-router-dom";
import {Badge, Text} from '@chakra-ui/react'
import {getTodo, todoDetailInfo} from "./Action/action";
import {connect} from "react-redux";
import Moment from 'react-moment';


const mapStateToProps = (state) => ({
    todo:state.todo,
    Number: state.Number,
    todoDetail: state.todoDetail
});
const mapDispatchToProps = dispatch => {
    return {
        getTodo: (data) => dispatch(getTodo(data)),
        addIncrement: () => dispatch({type:'INCREASE_COUNT'}),
        todoInfoDetail: (data) => dispatch(todoDetailInfo(data))
    };
};


class DashBoradItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            data:undefined
        };
        this.openRightDetail = this.openRightDetail.bind(this);
        this.openPopupDashBord = this.openPopupDashBord.bind(this);
        this.todoDetailInfo = {id:null,title:null,contnet:null}
    }



    openRightDetail(action,idx,title,content){
        this.todoDetailInfo.id = idx;
        this.todoDetailInfo.title = title;
        this.todoDetailInfo.contnet = content;
        this.props.todoInfoDetail(this.todoDetailInfo)
        this.setState({
            show:action
        });
    }

    openPopupDashBord(getId){
        this.props.history.push(`/dashbord/:${getId}`);
    }

    render() {
        const {show,data}= this.state;
        const MoreButtonGrout = styled.div`
          position:relative;cursor:pointer;
          & .button-group{
            display:none;
            position:absolute;top:-7px;right:40px;z-index: 999;
            min-width: 150px;background:#4361ee;overflow:hidden;border-radius: 6px;color:#fff;
            & button{display:block;text-align:center;padding:5px 10px;width:100%;}
          }
          & .button-group.on{
            display:block;
          }
        `;
        return (
            <>
                {
                    this.props.item ?
                    this.props.item.map((item,idx)=>{
                        return(
                            <tr key={item.id}  onClick={() => this.openRightDetail(true,item.id,item.todoTitle,item.todoData)}>
                                <td style={{textAlign:'center'}}>{idx + 1}</td>
                                <td>{item.todoTitle}</td>
                                <td>
                                    <div>
                                        {item.todoData}
                                        {
                                            item.todo &&
                                            <Badge variant='solid' colorScheme='green'>Todo!</Badge>
                                        }

                                    </div>

                                </td>
                                <td style={{textAlign:'center'}}>
                                    <Moment parse="YYYY-MM-DD HH:mm" format="YYYY-MM-DD HH:mm">{item.createTime}</Moment>
                                </td>
                            </tr>
                        )
                    })
                        :
                        <Text fontSize='md'>조회된 데이터가 없습니다.</Text>
                }
                <DashBoradDetail location={this.props.location} history={this.props.history} match={this.props.match} todoInfo={this.todoDetailInfo} onEdit={this.openPopupDashBord} ref='dashBordDetail' getDashBoradData={data} show={show} onClose={this.openRightDetail} />
            </>
        );
    }
}

export default withRouter (connect(mapStateToProps,mapDispatchToProps) (DashBoradItem))