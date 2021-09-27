import React from 'react';
import styled from 'styled-components';
import globeVideo from '../Images/globe.mp4';

const Globe = () => {
    return (
        <>
            <Section>
                    <video autoPlay={true} muted={true} playsInline={true} loop={true}>
                        <source src={globeVideo} alt="video/globe" type="video/mp4" />
                    </video>
            </Section>
        </>
    );
};
const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    @media screen and (max-width: 1200px){
        position: absolute;
        right: 0;
        bottom: 7vh;
    }
    @media screen and (max-width: 991px){
        position: absolute;
        top: auto;
        left: 0;
        right: 0;
        bottom: 0;
        transform: rotate(180deg);
    }
    video{
        width: 100%;
        height: 85vh;
        object-fit: cover;
        filter: brightness(1.1);
        @media screen and (max-width: 1200px){
            height: 75vh;
        }
        @media screen and (max-width: 991px){
            object-fit: cover;
        }
    }
`;
export default Globe;