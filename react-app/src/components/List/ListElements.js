import styled from 'styled-components'

export const ListTemp = styled.div`
    width: 50%;
    height: 70vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
`

export const RealTime = styled.div`
    width: 100%;
    display: flex;
`

export const BoxRealTime = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`

export const RTDetails = styled.div`
    width: 45%;
    height:70%;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 50px;
    font-weight: bold;
    h2{
        font-size: 40px;
        margin: 20px 0;
    }
    h1 {
        font-size: 65px;
    }
    p {
        font-size: 20px;
        margin: 20px 0;
    }
`

export const Top = styled.div`
    background-color: #66CDAA;
    width: 100%;
    height: 100px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px 50px 0 0;
`


export const Bottom = styled.div`
    background-color: #fff;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0 0 50px 50px;
    h1 {
        font-size: 30px;
        margin: 20px 0;
    }
`
