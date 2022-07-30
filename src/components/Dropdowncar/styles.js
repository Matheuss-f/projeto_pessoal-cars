import styled from 'styled-components'

export const DropDownCar = styled.div`
    background-color: transparent;
`

export const ContentTitle = styled.div`
`
export const Title = styled.h2`
    color: #00BFE9;
    font-size: 1.5vw;
    @media screen and (max-width: 1200px){
        font-size: 2vw;
    }
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const InfoList = styled.ul`
    list-style: none;
    text-align: start;
    font-size: 1.2vw;
    color: #00BFE9;
    font-weight: bolder;
    position: absolute;
    right: 5vw;

    @media screen and (max-width: 1200px){
        font-size: 2vw;
        right: 12vw;
        margin-top: 1vw;
    }
`