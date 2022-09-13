import React from 'react';
import { Button } from '../ButtonElements';
import {
    Column1,
    Column2,
    ImgWrap,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Heading,
    Subtitle,
    BtnWrap,
    TopLine,
    Img,
    TextWrapper
} from './InfoElements';

const InfoSection = ({ imgStart,primary,dark1,dark2,lightBg, id, lightText, topLine, darkText, description, buttonLabel, img, alt, headline }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>
                                <BtnWrap>
                                    <Button to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1: 0}
                                    dark1={dark1 ? 1: 0}
                                    dark2={dark2 ? 1: 0}>
                                     {buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection