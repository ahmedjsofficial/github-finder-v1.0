import React from 'react';
import styled from 'styled-components';

const Count = () => {
    const DATA = [
        { title: "65+ million",text: "Developers" },{ title: "3+ million",text: "Orgnizations" },{ title: "200+ million",text: "Repositories" },{ title: "72% million",text: "Fortune 50" } ];
    return (
        <>
            <Wrap>
                {
                    DATA && DATA.map((val, index) =>(
                        <DIV key={index}>
                            <h3>{val.title}</h3>
                            <p>{val.text}</p>
                        </DIV>
                    ))
                }
            </Wrap>
        </>
    );
};
const Wrap = styled.div`
    width: 33rem;
    display: grid;
    gap: 15px;
    opacity: 1;
    z-index: 2500;
    position: relative;
    padding: 2rem 0;
    align-items: center;
    border-top: 1px solid #fff;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    
    @media screen and (max-width: 767px){
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        border-top: 1px solid transparent;
    }
    @media screen and (max-width: 550px){
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        justify-content: center;
        justify-items: center;
        padding: 0.7rem 0;
    }

`;
const DIV = styled.div`
    display: flex;
    align-items: flex-start;
    justify-items: center;
    flex-direction: column;
    color: rgb(226, 235, 255);

    h3{
        font-weight: 400;
        font-style: normal;

        @media screen and (max-width: 500px){
            font-size: 0.9rem;
        }
    }
    p{
        color: #6a7c8f;
        font-size: 0.9rem;
        font-style: normal;
        
        @media screen and (max-width: 500px){
            font-size: 0.7rem;
        }
    }
`;
export default Count;
