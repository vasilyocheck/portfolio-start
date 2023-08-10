import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/soc_networks.webp';
import timerImg from '../../../assets/images/countdown.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import { S } from './Works_Styles'

const worksItems = ['all', 'landing page', 'react', 'spa'];
const worksData = [
    {
        imgSrc: socialImg,
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        imgSrc: timerImg,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim.'
    }
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems} />
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {worksData.map((work, ind) => {
                        return (
                            <Work imgSrc={work.imgSrc}
                                  title={work.title}
                                  text={work.text}
                                  key={ind}
                            />
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};