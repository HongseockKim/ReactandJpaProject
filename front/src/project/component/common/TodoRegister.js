import React, {useRef} from 'react';
import styled from "styled-components";
import Form from 'react-bootstrap/Form'
import {FetchApi} from "./FetchApi";

const TodoRegister = (props) => {
    const todoInfo = useRef();
    const isTodoCheck = useRef();
    const Modal = styled.div`
      position:fixed;top:0;left:0;width:100%;height:100%;
      z-index: 999;background:rgba(0,0,0,0.8);
      & .modal{
        position: absolute;top:50%;left:50%;transform:translate(-50%,-50%);
        min-width:1200px;min-height:700px;background: #fff;color:#4b4b4b;
        & .header{
          height:50px;background:darkgrey;position:relative;
          & .title{
            color:#fff;font-weight: bold;font-size:23px;text-align: left;height:100%;line-height:50px;padding-left: 10px;
          }
          & .close-popup{
            position: absolute;top:7px;right:10px;padding:10px;border-radius:4px;background:dodgerblue;color:#fff;border: none;box-shadow:0 0 2px #fff;cursor: pointer;
          }
        }
        & .body{
          margin-top: 20px;border-top: solid 1px #ccc;padding: 10px;
          & .todo-text-title{
            text-align:left;margin-bottom:20px;font-weight: bold;
          }
          & .todo-text{
            width:100%;min-height:400px;border-color: #ccc;border-radius: 5px;box-shadow: 0 0 5px #ccc;
            padding:10px;resize:none;outline: none;
            &::placeholder{
              text-align: center;line-height:400px;color: #ccc;
            }
            &:focus{
              &::placeholder{color:transparent;}
            }
          }
          & .is-check{
            & [type="checkbox"]{
              border: solid 1px #ccc;
            }
          }
        }
        & .footer{
          position:absolute;bottom:0;left:0;width:100%;height:50px;background:darkgrey;
          & .save-todo{
            position:absolute;top:9px;right:20px;padding: 7px 15px;background:dodgerblue;color:#fff;border:none;border-radius: 4px;font-weight: bold;box-shadow: 0 0 4px #4b4b4b;cursor:pointer;
          }
        }
      }
    `;

    console.log(props);


    const handleSaveTodo = () => {
        const dashBoradData = {
            tododto:{
                todo: todoInfo.current.value,
                todoCheck: isTodoCheck.current.checked
            }
        }

        FetchApi.registerTodo(dashBoradData).then(result => {
            console.log(result);
        })

    }

    return (
        <Modal>
            <div className="modal">
                <div className="header">
                    <div className="title">Todo 등록</div>
                    <button className="close-popup" type="button" onClick={() => {props.close(false)}}>X</button>
                </div>
                <div className="body">
                    <p className="todo-text-title">Todo</p>
                    <textarea className="todo-text" placeholder="Todo 입력" ref={todoInfo}/>
                    <div className="is-check">
                        <Form.Check type='checkbox' label='Is Todo 등록' ref={isTodoCheck}/>
                    </div>
                </div>
                <div className="footer">
                    <button className="save-todo" type="button" onClick={handleSaveTodo}>저장</button>
                </div>
            </div>
        </Modal>
    );
};

export default TodoRegister;
