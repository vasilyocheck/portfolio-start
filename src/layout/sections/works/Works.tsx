import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/soc_networks.webp';
import timerImg from '../../../assets/images/countdown.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

const worksItems = ['all', 'landing page', 'react', 'spa'];
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems} />
                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    <Work imgSrc={socialImg}
                          title={'Social Network'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
                    <Work imgSrc={timerImg}
                          title={'Timer'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim.'} />
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  
`;