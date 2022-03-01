import React from 'react';
import styled from "styled-components";
import {Text} from "@chakra-ui/react";

const Header = () => {
    const Inner = styled.div`
      max-width: 100vw;width:100%;height:80px;
      background:#4f5d75;margin:0 auto;
      & .navigation{
        display:flex;justify-content:flex-start;height:100%;
        & .nav-item{
          min-width: 120px;text-align:center;color: #fff;line-height:80px;font-weight: bold;
        }
      }
    `;
    return (
        <Inner>
            <ul className="navigation">
                <li className="nav-item">
                    <Text fontSize='xl'>Todo 등록</Text>
                </li>
            </ul>
        </Inner>
    );
};

export default Header;
