import React from 'react';
import styled from 'styled-components';
import Count from './Utils/Count';
import GitFinder from './Utils/GitFinder';
import Globe from './Utils/Globe';
import manImg from '../Components/Images/man.png';


const Home = () => {
    
    return (
        <>
            <Container>
                <Wrap>
                    <GitFinder />
                    <Globe />
                </Wrap>
                <Count />
                <Copyright>&copy; Copyright JSSTACK DEVELOPERS All Reserved Rights 2021</Copyright>
            </Container>
            <Scientist>
                <img src={manImg} alt="scientist/img" />
            </Scientist>
        </>
    );
};
const Container = styled.div`
    width: 90vw;
    margin: 0 auto;
    @media screen and (max-width: 500px){
        width: 95vw;
    }
`;
const Wrap = styled.section`
    min-height: 85vh;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    @media screen and (max-width: 1200px){
        min-height: 83vh;
    }
    @media screen and (max-width: 991px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const Scientist = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    @media screen and (max-width: 991px){
        position: absolute;
        right: 0;
        bottom: 0;
        opacity: 1;
        z-index: 1500;
    }
    @media screen and (max-width: 550px){
        position: absolute;
        left: 0;
        right: 0;
        bottom: 5vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{
        height: 45vh;
        width: auto;
        object-fit: contain;
        @media screen and (max-width: 991px){
            height: 35vh;
        }   
        @media screen and (max-width: 550px){
            height: 25vh;
        }   
    }
`;
const Copyright = styled.p`
    color: #bdbdff;
    font-size: 0.9rem;
    font-style: normal;
    opacity: 1;
    z-index: 1500;
    position: relative;
    @media screen and (max-width: 500px){
        text-align: center;
    }
    @media screen and (max-width: 550px){
        font-size: 0.8rem;
    }
    @media screen and (max-width: 375px){
        font-size: 0.6rem;
    }
`;
export default Home;
