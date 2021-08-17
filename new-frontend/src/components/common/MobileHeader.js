import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from "react-icons/io";
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    /* 레이아웃 */
    align-items: left;
    justify-content: left;
    height: 60px;
    width: 100%;
    top: 0px;
    z-index: 5;
    padding:1rem;
    margin-bottom: 5px;
    border-bottom: 3px solid ${palette.gray[3]};

    /* 폰트 */
    font-size: 1.5rem;
`;


const MobileHeader = () => (
    <Wrapper>
        <IoIosArrowBack />
    </Wrapper>
);

export default MobileHeader;