import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo_demo.webp';
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align='center' justify='space-around'>
                <div>
                    <span>Hi There</span>
                    <Name>I am Vasily Medvedev</Name>
                    <MainTitle>A Web Developer. </MainTitle>
                </div>

                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(45deg, pink, blue);
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const MainTitle = styled.h1`
  
`;

const Name = styled.h2`
  
`;