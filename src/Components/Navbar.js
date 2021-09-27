import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <>
            <Nav>
                <div><svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></div>
                <button type="button">
                    <span>Sign UP</span>
                </button>
            </Nav>
        </>
    );
};
const Nav = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90vw;
    margin: 0 auto;
    position: absolute;
    top: 3vh;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: 1500;

    div{
        width: 32px;
        height: 32px;
        object-position: center;
        svg{
            width: 32px;
            height: 32px;
            fill: #fff;
            fill-rule: evenodd;
            fill-opacity: 0.95;
        }
    }

    button{
        outline: none;
        opacity: 1;
        z-index: 1500;
        padding: 0.5rem;
        background: transparent;
        border-radius: 0.345rem;
        border: 1px solid #8193b2;
        text-transform: uppercase;
        box-shadow: 0 0 1rem rgb(4, 13, 33, 1);
        transition: all 500ms cubic-bezier(0.39, 0.575, 0.565, 1) 0s;
        span{
            color: rgb(249,249,249,0.8);
            font-size: 0.9rem;
            font-weight: 400;
            line-height: 1.08;
            font-style: normal;
        }

        &:hover{
            transform: scale(1.05);
            background: rgba(129, 147, 169, 0.5);
            border-color: rgba(249,249,249,1);
            box-shadow: 0 0 1rem rgb(4 13 33 / 11%);
        }
    }
`;
export default Navbar;
