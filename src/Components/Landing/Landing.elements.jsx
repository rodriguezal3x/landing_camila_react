import styled from "styled-components";
import Landing from "../../assets/img/Landing.svg";

export const Container = styled.div`
    background-image: url(${Landing});
    background-position: center;
    background-repeat: none;
    background-size: cover;
    width: 100vw;
    /* height: 80vh; */
    /* justify-content: space-evenly; */
    padding: 10px 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const LeftContainer = styled.div`
    padding: 0 20px;
    flex-basis: 30rem;
    flex-grow: 1;
    color: #fff;
    font-family: 'Dancing Script', cursive;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2{
        font-family: 'Oswald', sans-serif;
        font-size: 1.3rem;
    }
`;

export const RightContainer = styled.div`
    flex-basis: 0;
    flex-grow: 999;
    min-width: 60%;
`;

export const BannerContainer = styled.div`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const BannerLandin = styled.img`
    width: 100%;
    max-height: 300px;
    margin-bottom: 20px;
`;

export const BannerText = styled.h2`
    /* color: #00B0FF; */
    color: #ffffff;
    font-size: 2rem;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    text-align: center;

    span{
        font-size: 1.5rem;
    }
`;