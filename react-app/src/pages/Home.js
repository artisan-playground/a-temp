import React,{useState} from 'react'
import styled from 'styled-components'
import List from '../components/List'
import Graph from '../components/Graph'
import Ranking from '../components/Ranking'
import Banner from '../assets/banner.png'
import {useDispatch} from 'react-redux'
import store from '../redux/store'
import {currently} from '../redux/actions/Temporature'


const Title = styled.div`
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