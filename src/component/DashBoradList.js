import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import styled from 'styled-components';
import DashBoradItem from "./DashBoradItem";
import {Pagination} from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import {getTodo} from "./Action/action";
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";
import BorderApi from "./api/AjaxApi";


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

class DashBoradList extends Component {
    static defaultProps = {
        select: 'DSC'
    }

    constructor(props) {
        super(props);
        this.searchRequest = this.searchRequest.bind(this);
    }

    searchRequest() {
        const t = this.refs;

        const searchRequest = {
            search: t.searchValue.value
        }

        BorderApi.searchRequest(searchRequest).then(result=>{
            console.log(result);
        })
    }

    render() {
        let active = 2;
        let items = [];
        for (let number = 1; number <= 5; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active}>
                    {number}
                </Pagination.Item>,
            );
        }
        const DashBoradListWrap = styled.div`
          position:relative;cursor:pointer;
          flex-basis: 75%;
          & table th{text-align:center;}
          & .search-wrap{
            padding:10px 0;display: flex;
            & .select-con{
              flex-basis: 250px;
            }
            & .search-con{
              flex-basis: calc(100% - 250px) ;
              display: flex;
              & .search-btn{flex-basis: 100px;}
              & .search-input{flex-basis: calc(100% - 100px); }
            }
          }
          & .pagenation-con{margin: 0 auto;width:250px;}
        `;
        return (
            <DashBoradListWrap>
                <div className='search-wrap'>
                    <div className='select-con'>
                        <Form.Select ref='selectTag' aria-label="Default select example">
                            <option>검색조건</option>
                            <option value="DSC">최신순</option>
                            <option value="ASC">마지막순</option>
                        </Form.Select>
                    </div>
                    <div className="search-con">
                        <Form.Control className='search-input' type="text" id="search-input" ref='searchValue'/>
                        <Button variant="primary" className='search-btn' onClick={this.searchRequest}>검색</Button>
                    </div>
                </div>
                <Table striped bordered hover>
                    <colgroup>
                        <col width="2%"/>
                        <col width="8%"/>
                        <col width="80%"/>
                        <col width="10%"/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th>numBer</th>
                        <th>Todo Title</th>
                        <th>Todo Content</th>
                        <th>작성일</th>
                    </tr>
                    </thead>
                    <tbody>
                        <DashBoradItem item={this.props.todo}/>
                    </tbody>
                </Table>
                <div className='pagenation-con'>
                    <Pagination>{items}</Pagination>
                </div>
            </DashBoradListWrap>
        );
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (DashBoradList)