import React from 'react';
import styled from "styled-components";
import {text} from "stream/consumers";

type WorkPropsType = {
    imgSrc: string,
    title: string,
    text: string

}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Img src={props.imgSrc} alt={''}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link>demo</Link>
            <Link>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: #ffe869;
  max-width: 540px;
  width: 100%;  
`;

const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Title = styled.h3`
  
`;

const Text = styled.p`

`;

const Link = styled.a`

`;
