import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/soc_networks.webp';
import timerImg from '../../../assets/images/countdown.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

const worksItems = ['all', 'landing page', 'react', 'spa'];
export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems} />
            <FlexWrapper justify={'space-around'}>
                <Work imgSrc={socialImg}
                      title={'Social Network'}
                      text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
                <Work imgSrc={timerImg}
                      title={'Timer'}
                      text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim.'} />
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: rgba(153, 173, 239, 0.64);
`;