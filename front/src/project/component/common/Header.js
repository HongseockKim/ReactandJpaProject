import React, {useState} from 'react';
import styled from "styled-components";
import {Text} from '@chakra-ui/react'
import TodoRegister from "./TodoRegister";

const Header = () => {
    const[isShow,setIsshow] = useState({
        isShow: false
    })
    const Inner = styled.div`
      max-width: 100vw;width:100%;height:80px;
      background:#4f5d75;margin:0 auto;
      display: flex;justify-content:flex-start;align-items: center;
      & .logo{
        width:250px;color:#fff;font-weight: bold;
      }
      & .navigation{
        width:calc(100% - 400px);margin-left: 150px;
        display:flex;justify-content:flex-start;height:100%;
        & .nav-item{
          min-width: 120px;text-align:center;color: #fff;line-height:80px;font-weight: bold;
          & button{
            padding:15px;color: #fff;border:none;font-size:18px;cursor:pointer;
            background:teal;border-radius:4px;box-shadow:0 0 4px #4b4b4b;
            &:hover{
              background:#015E5EFF;
            }
          }
        }
      }
    `;

    const handleOpenPopup = (action) => {
        setIsshow({isShow: action});
    }

    return (
        <>
            <Inner>
                <div className="logo">
                    <Text fontSize='32'>My DashBoard</Text>
                </div>
                <ul className="navigation">
                    <li className="nav-item">
                        <button type="button" className="todo-register" onClick={() => {handleOpenPopup(true)}}>Todo 등록</button>
                    </li>
                </ul>
            </Inner>
            {
                isShow.isShow &&
                <TodoRegister close={(action) => {handleOpenPopup(action)}}/>
            }
        </>
    );
};

export default Header;
