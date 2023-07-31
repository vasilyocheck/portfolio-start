import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Vasily</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} iconId={'instagram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} iconId={'vkontakte'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedin'}/>
                        </SocialLink>
                    </SocialItem>

                </SocialList>
                <Copyright>© 2023 Vasily Medvedev, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
  background-color: #ffd8a5;
  min-height: 20vh;
`;

const Name = styled.span`
`;

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`;

const SocialItem = styled.li`

`;

const SocialLink = styled.a`

`;

const Copyright = styled.small`

`;