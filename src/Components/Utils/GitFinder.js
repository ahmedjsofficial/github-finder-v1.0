import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import octocatImg from '../Images/Octocat.png';
import locationSvg from '../Images/location.svg';
import twitterSvg from '../Images/twitter.svg';
import websiteSvg from '../Images/websiteSvg.svg';
import workSvg from '../Images/workSvg.svg';

const GitFinder = () => {
    const [gitUser, setGitUser ] = useState(null);
    const [search, setSearch] = useState('');
    
    const gitActions = async () => {
        try {
            const req = await axios.get(`https://api.github.com/users/${search}`);
            const res = await req?.data;
            setGitUser(res);    
        } catch (error) {
            alert(`Add Exact UserName of Github ${error}`);
        }
    }
    
    const onClicked = () => {
        console.log("Data Searched");
        if(search){
            gitActions();
            // setSearch('');
        }    
    }
    
    useEffect(() =>{ 
        setGitUser('');
    }, [search])

    return (
        <>
            <Section>
                <Title>Github-Finder</Title>
                <Form>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <input value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} type="text" name="search" placeholder="Search Github" autoComplete="off" />
                    </div>
                    <button type="button" onClick={onClicked}><span>Search</span></button>
                </Form>
                <GitInfo>
                    <InfoHeader>
                        <div><img src={gitUser?.avatar_url || octocatImg} alt="octocat/img" /></div>
                        <div><h1>{gitUser?.name || "The Name"}</h1><h3>@{gitUser?.login || "username"}</h3><p>Joined {moment(gitUser?.created_at).format('D MMM YYYY')}</p></div>
                    </InfoHeader>
                    <Description>{gitUser?.bio || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</Description>
                    <Analytics>
                        <div>
                            <p>Repositories</p>
                            <h3>{gitUser?.public_repos || "0"}</h3>
                        </div>
                        <div>
                            <p>Followers</p>
                            <h3>{gitUser?.followers || "0"}</h3>
                        </div>
                        <div>
                            <p>Following</p>
                            <h3>{gitUser?.following || "0"}</h3>
                        </div>
                    </Analytics>
                    <SocialInfo>
                        <div><p><img src={locationSvg} alt="location/svg" /><span>{gitUser?.location || "Location"}</span></p></div>
                        <div><p><img src={twitterSvg} alt="twitter/svg" /><span>{gitUser?.twitter_username || "Not Available"}</span></p></div>
                        <div><p><img src={websiteSvg} alt="website/svg" /><span>{gitUser?.blog || "Not Added"}</span></p></div>
                        <div><p><img src={workSvg} alt="work/img" /><span>{gitUser?.company || "Not Added"}</span></p></div>
                    </SocialInfo>
                </GitInfo>
            </Section>
        </>
    );
};
const Section = styled.section`    
    height: auto;
    width: 33rem;
    opacity: 1;
    z-index: 1500;
    display: block;
    margin-bottom: 7vh;

    @media screen and (max-width: 991px){
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (max-width: 600px){
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
`;
const Title = styled.h3`
    font-style: normal;
    font-weight: 400;
    font-size: 1.3rem;
    color: rgb(226, 235, 255);
    text-transform: uppercase;
    margin-left: 1rem;
    text-shadow: 0 0 1rem rgba(255,255,255,0.3);
    @media screen and (max-width: 991px){
        text-align: center;
        font-size: 1rem;
        margin-left: 0;
    }
`;
const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    margin: 1vh 0;
    border-radius: 0.45rem;
    border: 1px solid rgb(129, 147, 178, 0.5);
    background: rgba(4,13,33, 1);
    backdrop-filter: blur(0.3rem);
    box-shadow: 0 0 1rem rgb(47 184 255 / 5%);
    @media screen and (max-width: 991px){
        background: rgba(4,13,33, 0.1);
        backdrop-filter: blur(0.1rem);
    }

    div{
        width: 100%;
        display: flex;
        min-height: 5vh;
        align-items: center;
        
        svg{
            width: 21px;
            height: 21px;
            stroke: rgb(226, 235, 255);
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            @media screen and (max-width: 500px){
                width: 17px;
                height: 17px;
            }
        }
        input{
            color: #f9f9f9;
            outline: none;
            border: none;
            font-size: 0.9rem;
            width: 100%;
            height: 100%;
            padding: 0 .45rem;
            background: transparent;
            @media screen and (max-width: 500px){
                font-size: 0.8rem;
            }
            &::placeholder{
                color: rgb(226, 235, 255);
            }
        }
    }

    button{
        outline: none;
        opacity: 1;
        z-index: 2000;
        padding: 0.5rem;
        background: transparent;
        border-radius: 0.345rem;
        border: 1px solid #8193b2;
        text-transform: uppercase;
        box-shadow: 0 0 1rem rgb(4, 13, 33, 1);
        transition: all 500ms cubic-bezier(0.39, 0.575, 0.565, 1) 0s;
        @media screen and (max-width: 500px){
            padding: 0.35rem 0.5rem;
        }
        span{
            color: rgb(249,249,249,0.8);
            font-size: 0.9rem;
            font-weight: 400;
            line-height: 1.08;
            font-style: normal;
            @media screen and (max-width: 500px){
                font-size: 0.7rem;
            }
        }

        &:hover{
            transform: scale(1.05);
            background: rgb(4, 13, 33, 1);
            border-color: rgba(249,249,249,1);
            box-shadow: 0 0 1rem rgb(4 13 33 / 11%);
        }
    }
`;
const GitInfo = styled.div`
    padding: 1.5rem 1rem;
    background: rgba(4,13,33,1);
    border-radius: 0.45rem;
    backdrop-filter: blur(0.3rem);
    border: 1px solid rgb(129, 147, 178, 0.5);
    box-shadow: 0 0 1rem rgb(47 184 255 / 5%);
    @media screen and (max-width: 991px){
        background: rgba(4,13,33, 0.3);
        backdrop-filter: blur(0.1rem);
    }
`;
const InfoHeader = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto 1fr;
    @media screen and (max-width: 767px){
        grid-template-columns: 1fr 1fr;
    }
    
    div{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        img{
            width: 125px;
            height: 125px;
            opacity: 1;
            object-fit: cover;
            border-radius: 50%;
            @media screen and (max-width: 500px){
                width: 85px;
                height: 85px;
            }
        }

        h1{
            font-weight: 400;
            font-style: normal;
            color: rgb(226, 235, 255);
            @media screen and (max-width: 500px){
                font-size: 1rem;
            }
        }
        h3{
            color: #0099ff;
            font-weight: 400;
            font-style: normal;
            margin: 0.5vh;
            @media screen and (max-width: 500px){
                font-size: 0.85rem;
                margin: 0.3vh;
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
    }
`;
const Description = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 300;
    color: rgb(226, 235, 255);
    margin: 3vh 0;
    @media screen and (max-width: 500px){
        font-size: 0.7rem;
        margin: 2vh 0;
    }
`;
const Analytics = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1.5rem 0;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 0.5rem;
    background: linear-gradient(rgba(24, 32, 79, 0.7) 0%, rgba(24, 32, 79, 0.5) 100%);

    div{
        display: flex;
        align-items: center;
        flex-direction: column;
        h3{
            font-size: 0.9rem;
            font-style: normal;
            font-weight: 500;
            color: rgb(255,255,255,1);
            @media screen and (max-width: 500px){
                font-size: 0.65rem;
            }
        }
        p{
            font-size: 0.9rem;
            font-style: normal;
            font-weight: 300;
            color: #d9ebff;
            @media screen and (max-width: 500px){
                font-size: 0.65rem;
            }
        }
    }
`;
const SocialInfo = styled.div`
    display: grid;
    row-gap: 11px;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    margin-top: 3vh;

    div{
        width: 13rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        @media screen and (max-width: 500px){
            width: 100%;
        }
        p{
            display: flex;
            align-items: center;
            img{
                width: 19px;
                height: 19px;
                object-fit: fill;
                @media screen and (max-width: 500px){
                    width: 15px;
                    height: 15px;
                }
            }
            span{
                font-size: 0.8rem;
                font-style: normal;
                font-weight: 300;
                color: #d9ebff;
                padding-left: 0.5rem;
                @media screen and (max-width: 500px){
                    font-size: 0.7rem;
                    padding-left: 0.2rem;
                }
            }
        }
    }
`;

export default GitFinder;
