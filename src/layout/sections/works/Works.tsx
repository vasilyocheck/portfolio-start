import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabStatusType} from "./tabMenu/TabMenu";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/soc_networks.webp';
import timerImg from '../../../assets/images/countdown.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import { S } from './Works_Styles'

/*const tabsItems = ['all', 'landing page', 'react', 'spa'];*/

const tabsItems: Array<{ title: string, status: TabStatusType }> = [
    {
        title: 'all',
        status: 'all'
    },
     {
        title: 'landing page',
        status: 'landing'
    },
     {
        title: 'react',
        status: 'react'
    },
     {
        title: 'spa',
        status: 'spa'
    }
]

const worksData = [
    {
        imgSrc: socialImg,
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'spa'
    },
    {
        imgSrc: timerImg,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim.',
        type: 'react'
    }
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState('all');
    let filteredWorks = worksData;

    if (currentFilterStatus === 'landing') {
        filteredWorks = worksData.filter(work => work.type === 'landing')
    }
    if (currentFilterStatus === 'react') {
        filteredWorks = worksData.filter(work => work.type === 'react')
    }
    if (currentFilterStatus === 'spa') {
        filteredWorks = worksData.filter(work => work.type === 'spa')
    }

    const changeFilterStatus = (value: TabStatusType) => {
        setCurrentFilterStatus(value);
    }

    return (
        <S.Works id={'works'}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {filteredWorks.map((work, ind) => {
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