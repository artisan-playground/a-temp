import React,{useState} from 'react'
import styled from 'styled-components'
import List from '../components/List'
import Graph from '../components/Graph'
import Ranking from '../components/Ranking'
import {useDispatch} from 'react-redux'
import store from '../redux/store'
import {currently} from '../redux/actions/Temporature'


const Title = styled.div`
    display: flex;
    align-items: center;
    height: 90vh;
    background-color: #CFE7F7;
    color: #fff;
    h1{
        font-size: 100px;
        font-weight: bold;
        margin-left: 15%;
    }
`



const Home = () => {
    
    return (
        <>
            <Title>
                <h1>ATEMP</h1>
            </Title>
            <List />
            <Graph />
            <Ranking />
        </>
    )
}

export default Home