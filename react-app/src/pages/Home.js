import React from 'react'
import styled from 'styled-components'
import List from '../components/List'
import Graph from '../components/Graph'
import Ranking from '../components/Ranking'
import Banner from '../assets/banner.png'

const Title = styled.div`
    padding-top: 5vh;
    img{
        width: 100%;
    }
`

const Home = () => {
    return (
        <>
            <Title>
            <img src={Banner} />
            </Title>
            <List />
            <Graph />
            <Ranking />
        </>
    )
}

export default Home