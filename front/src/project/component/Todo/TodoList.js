import React from 'react';
import styled from "styled-components";
import {Text} from "@chakra-ui/react";

const TodoList = () => {
    const Todo = styled.div`
      width:100%;
      & .notice-todo{
        display:flex;justify-content: flex-start;border-bottom: solid 1px #ccc;border-top: solid 1px #ccc;
        & li{
          border-right: solid 1px #ccc;padding:10px;
        }
        & .todo-num{
          width:100px;text-align:center;
        }
        & .todo-todo{
          width:calc(100% - 250px);text-align:center;
        }
        & .todo-created-date{
          width:150px;text-align:center;
        }
      }
    `;
    return (
        <Todo>
            <ul className="notice-todo">
                <li className="todo-num">
                    <Text fontSize='2xl'>번호</Text>
                </li>
                <li className="todo-todo">
                    <Text fontSize='2xl'>Todo</Text>
                </li>
                <li className="todo-created-date">
                    <Text fontSize='2xl'>생성일</Text>
                </li>
            </ul>

        </Todo>
    );
};

export default TodoList;
