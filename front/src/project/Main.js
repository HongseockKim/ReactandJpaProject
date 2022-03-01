import React from 'react';
import styled from "styled-components";
import TodoList from "./component/Todo/TodoList";

const Main = () => {
    const Wrap = styled.div`
      width:100%;
    `;
    return (
        <Wrap>
            <TodoList/>
        </Wrap>
    );
};

export default Main;
