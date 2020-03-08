import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import {
    Container,
    Apresentation,
    About,
    HomeContainer,
    TitleSection,
} from './styles';
import Work from './components/Work';
import Skills from './components/Skills';

import { setTitleHeader } from '~/store/modules/actions/actions';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleScroll = _ => {
            if (window.pageYOffset < 770) {
                dispatch(setTitleHeader(''));
            }
            if (window.pageYOffset >= 770) {
                const data = {
                    title: 'Work and experiences',
                    color: '#17141d',
                };
                dispatch(setTitleHeader(data));
            }
            if (window.pageYOffset >= 1540) {
                const data = {
                    title: 'Skills',
                    color: '#17141d',
                };
                dispatch(setTitleHeader(data));
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [dispatch]);

    return (
        <Container>
            <HomeContainer id="Home">
                <Apresentation>Hi, i am Esdras</Apresentation>
                <About>I am software developer and i like to code</About>
            </HomeContainer>
            <TitleSection>
                <Apresentation>Work and experiences</Apresentation>
            </TitleSection>
            <Work />
            <TitleSection>
                <Apresentation>Skills</Apresentation>
            </TitleSection>
            <Skills />
        </Container>
    );
}
