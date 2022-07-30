import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    background-color: ${({isWhite}) => isWhite? '#fff' : '#000'};
    height: 25vw;
    padding-bottom: 5vw;

    @media screen and (max-width: 1200px){
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 150vw;
    }
`

export const ContainerContent = styled.div`
`

export const Image = styled.img`
    width: 100%;
`

export const Description = styled.div`
    padding-left: 2vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Title = styled.h2`
    color: #00BFE9;
    font-size: 2vw;
    margin-bottom: 2vw;

    @media screen and (max-width: 1200px){
        margin-top: 8vw;
        font-size: 4vw;
    }
`

export const Text = styled.p`
    color: ${({textBlack}) => textBlack? '#000' : '#fff'};
    font-size: 1.2vw;
    text-align: justify;
    width: 63vw;

    @media screen and (max-width: 1200px){
        font-size: 3.5vw;
        width: 80vw;
    }
`

export const DropContent = styled.div`
    text-align: right;
    margin-top: 2vw;
`

export const ContainerImage = styled.div`
    width: 30vw;
    height: 21.9vw;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px){
        width: 80vw;
        margin-bottom: 7vw;
    }
`
